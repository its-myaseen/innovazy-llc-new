import React from 'react'
import BlogCard from './BlogCard'
import { useTranslations } from 'next-intl';
import { RiChatSmile2Line } from "react-icons/ri";

const BlogsNA = () => {
    const t = useTranslations('blogs.grid')
    return (
        <div className='flex flex-col justify-center items-center gap-8 relative w-full pb-16'>
            <RiChatSmile2Line className="text-primary-orange/40 mx-auto text-[150px]"/>
            <p className='block relative text-sm text-white/65 text-center max-w-[80%] mx-auto'>{t('noBlogs')}</p>
        </div>
    )
}

const BlogCardGrid = async () => {
    const t = await import('next-intl/server').then(mod => mod.getTranslations('blogs.grid'));

    let blogs = [];
    let error = false;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/public`, {
            cache: 'no-store'
        });
        if (res.ok) {
            const data = await res.json();
            blogs = data.Blogs || data.blogs || data.data?.Blogs || data.data?.blogs || (Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []));
        } else {
            error = true;
        }
    } catch (err) {
        console.error("Failed to fetch blogs:", err);
        error = true;
    }

    return (
        <div className='block relative w-full box-border  pb-26 mt-16'>
            <h1 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
                <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> {t('sectionHeading')}  <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h1>
            <p className='block relative text-white/70 text-center max-w-[450px] mt-3 mx-auto mb-12'>
                {t('sectionDesc')}
            </p>
            <div id="explore" className='flex flex-wrap justify-center items-start gap-6 mt-12'>
                {error || blogs.length === 0 ? (
                    <BlogsNA />
                ) : (
                    blogs.map((blog: any) => (
                        <BlogCard key={blog._id} data={blog} />
                    ))
                )}
            </div>
        </div>
    )
}

export default BlogCardGrid
