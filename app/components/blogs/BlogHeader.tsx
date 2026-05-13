import React from 'react'

const BlogHeader = ({ data }) => {
    return (
        <div className='flex justify-start items-end relative w-full box-border pt-26'>
            <img 
                src={data.thumbnail?.startsWith('http') ? data.thumbnail : (data.thumbnail ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${data.thumbnail}` : "/assets/test_blog.jpg")} 
                alt={data.title} 
                className='block relative top-0 left-0 h-[80vh] w-full object-cover rounded-xl overflow-hidden' 
            />
            <div className='block absolute bottom-12 left-0 w-full box-border px-12'>
                <div className='block relative w-full box-border px-6 py-6 pb-8 backdrop-blur-3xl bg-black/10 rounded-lg'>
                    <h1 className='text-4xl font-poppins text-white font-semibold'>{data.title || data.heading || data.role || "Untitled"}</h1>
                    <p className='text-white/80 leading-tight mt-2'>{data.description || data.tagline || data.excerpt || ""}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader
