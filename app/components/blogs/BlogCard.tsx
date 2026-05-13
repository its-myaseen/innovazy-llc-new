import { Link } from '@/i18n/navigation'
import React from 'react'

const BlogCard = ({ data }: { data: any }) => {
    return (
        <Link href={`/blogs/${data._id || data.id}`} className='block relative group w-[325px] pb-6 box-border bg-white/3 border border-white/5 rounded-xl overflow-hidden cursor-pointer'>
            <div className='block relative w-full h-[200px] rounded-xl overflow-hidden'>
                <img 
                    src={data.thumbnail?.startsWith('http') ? data.thumbnail : (data.thumbnail ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${data.thumbnail}` : "/assets/test_blog.jpg")} 
                    alt={data.title} 
                    className='block relative w-full box-border h-[200px] group-hover:scale-105 duration-500 rounded-xl object-cover' 
                />
            </div>
            <div className='block relative w-full box-border px-4 mt-4'>
                <h3 className='font-poppins text-white/85 text-xl tracking-tight line-clamp-2'>{data.title}</h3>
                <p className='relative text-sm text-white/40 mt-2 line-clamp-3'>
                    {data.description}
                </p>
            </div>
        </Link>
    )
}

export default BlogCard
