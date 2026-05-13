import { Link } from '@/i18n/navigation';
import { BsClockHistory } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOpenInNew } from "react-icons/md";
import { RiChatSmile2Line } from "react-icons/ri";
import { useTranslations } from 'next-intl';

const RoleCard = ({ data, t }) => {
    return (
        <Link href={`/careers/${data._id || data.id}`} className='block relative w-full box-border group cursor-pointer pb-10'>
            <span className='block relative w-full h-[1px] bg-white/20'></span>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 sm:gap-0'>
                <h3 className='block relative text-xl font-poppinsRegular group-hover:translate-x-6 duration-300 transition-transform font-bold text-white/90'>{data.role}</h3>
                <div className='flex flex-row items-center gap-4 box-border text-white group-hover:text-primary-blue duration-300'>
                    {t('applyNow')}

                    <MdOpenInNew className='block relative text-2xl text-primary-orange' />
                </div>
            </div>
            <p className='group-hover:translate-x-6 duration-300 text-white/70 transition-transform'>{data.tagline}</p>
            <div className='flex flex-wrap justify-start items-center gap-4 mt-6 w-full'>
                <div className='flex flex-row items-center leading-snug gap-2 box-border px-4 h-full py-2 bg-white/4 text-white/85 rounded-full border-[1px] border-white/20'>
                    <IoLocationOutline className='text-lg text-primary-orange' />
                    {data.location}
                </div>

                <div className='flex flex-row items-center py-2 leading-snug gap-2 box-border px-4 h-full bg-white/4 text-white/85 rounded-full border-[1px] border-white/20'>
                    <BsClockHistory className='text-lg text-primary-orange' />
                    {data.jobType}
                </div>

            </div>
        </Link>
    )
}

const RolesNA = ({ t }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-8 relative w-full pb-16'>
            <RiChatSmile2Line className="text-primary-orange/40 mx-auto text-[150px]"/>
            <p className='block relative text-sm text-white/65 text-center max-w-[80%] mx-auto'>{t('noRoles')}</p>
        </div>
    )
}

const RolesData = async () => {
    const t = await import('next-intl/server').then(mod => mod.getTranslations('careers.roles'));

    let jobs = [];
    let error = null;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobs/public`, {
            cache: 'no-store'
        });


        if (!res.ok) throw new Error('Failed to fetch jobs');

        jobs = await res.json();
        jobs = jobs.Jobs
    } catch (err) {
        error = 'Failed to load blogs';
    }
    return (
        <div className='block relative w-full box-border mt-16 pb-26'>
            <h1 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
                <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> {t('sectionHeading')}  <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h1>
            <p className='block relative text-white/70 text-center max-w-[550px] mb-16 mt-3 mx-auto'>
                {t('sectionDesc')}
            </p>

            {error ? (
                // <p className='text-center text-red-500'>{error}</p>
                <RolesNA t={t} />
            ) : jobs.length > 0 ? (
                jobs.map((job) => (
                    <RoleCard key={job.id || job._id} data={job} t={t} />   // ← pass data as prop
                ))
            ) : (
                <RolesNA t={t} />
            )}


        </div>
    )
}

export default RolesData
