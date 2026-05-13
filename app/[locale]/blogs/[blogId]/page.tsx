import BlogHeader from '@/app/components/blogs/BlogHeader'
import EditorJsRenderer from '@/app/components/common/EditorJsRenderer'
import React from 'react'
import { RiChatSmile2Line } from "react-icons/ri";

const page = async ({ params }: { params: Promise<{ blogId: string, locale: string }> }) => {
  const { blogId } = await params;
  
  let blog = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/public/${blogId}`, {
      cache: 'no-store'
    });
    if (res.ok) {
      const data = await res.json();
      let extracted = data;
      if (extracted.data && !extracted.title && !extracted.heading) extracted = extracted.data;
      if (extracted.Blog && !extracted.title && !extracted.heading) extracted = extracted.Blog;
      if (extracted.blog && !extracted.title && !extracted.heading) extracted = extracted.blog;
      
      if (Array.isArray(extracted)) extracted = extracted[0];

      if (extracted.Blog && !extracted.title && !extracted.heading) extracted = extracted.Blog;
      if (extracted.blog && !extracted.title && !extracted.heading) extracted = extracted.blog;

      blog = extracted;
    }
  } catch (error) {
    console.error("Failed to fetch blog:", error);
  }

  if (!blog || blog.isPublic === false) {
    return (
      <div className='flex flex-col justify-center items-center gap-8 relative w-full py-40 h-screen'>
        <RiChatSmile2Line className="text-primary-orange/40 mx-auto text-[150px]"/>
        <p className='block relative text-sm text-white/65 text-center max-w-[80%] mx-auto'>This blog post is currently not available or has been set to private. Please check back later or explore our other articles.</p>
      </div>
    );
  }

  return (
    <div  className='block relative w-full box-border px-16'>
      <BlogHeader data={blog}/>
      <EditorJsRenderer data={blog}/>
    </div>
  )
}

export default page
