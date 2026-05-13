import JobHeader from '@/app/components/careers/JobHeader'
import EditorJsRenderer from '@/app/components/common/EditorJsRenderer'
import React from 'react'
import { RiChatSmile2Line } from "react-icons/ri";

const page = async ({ params }: { params: Promise<{ jobId: string, locale: string }> }) => {
  const { jobId } = await params;

  let job = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobs/public/${jobId}`, {
      cache: 'no-store'
    });
    if (res.ok) {
      const data = await res.json();
      let extracted = data;
      // Sequentially drill down through common wrapper keys
      if (extracted.data && !extracted.role && !extracted.title) extracted = extracted.data;
      if (extracted.Job && !extracted.role && !extracted.title) extracted = extracted.Job;
      if (extracted.job && !extracted.role && !extracted.title) extracted = extracted.job;
      
      if (Array.isArray(extracted)) extracted = extracted[0];
      
      // One more check in case it's nested in data.Job
      if (extracted.Job && !extracted.role && !extracted.title) extracted = extracted.Job;
      if (extracted.job && !extracted.role && !extracted.title) extracted = extracted.job;

      job = extracted;
    }
  } catch (error) {
    console.error("Failed to fetch job:", error);
  }

  if (!job || job.isPublic === false) {
    return (
      <div className='flex flex-col justify-center items-center gap-8 relative w-full py-40'>
        <RiChatSmile2Line className="text-primary-orange/40 mx-auto text-[150px]"/>
        <p className='block relative text-sm text-white/65 text-center max-w-[80%] mx-auto'>This career opportunity is currently not available or has been closed. Please check back later or explore our other openings.</p>
      </div>
    );
  }

  return (
    <div className='block relative w-full box-border px-8 sm:px-16'>
      <JobHeader 
        JobTagLine={job.tagline || job.description || job.tagLine || ""} 
        JobTitle={job.role || job.title || job.JobTitle || "Untitled Position"} 
        Location={job.location || job.Location || "Remote"} 
        JobType={job.jobType || job.type || job.JobType || "Full Time"}
      />
      <EditorJsRenderer data={job}/>
    </div>
  )
}

export default page
