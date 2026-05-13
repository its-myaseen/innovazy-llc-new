'use client'
import { bookAppointment } from '@/app/api/booking'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { IoCloseSharp } from "react-icons/io5";

const BookingModal = ({ open, setOpen, allow, data, refresh }) => {

    const t = useTranslations('appointment.modal')

    useEffect(() => {
        if (open) {
            const scrollbarWidth =
                window.innerWidth - document.documentElement.clientWidth

            // lock scroll
            document.documentElement.style.overflowY = 'hidden'
            document.body.style.overflowY = 'hidden'

            // prevent layout shift
            // document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            document.documentElement.style.overflowY = 'auto'
            document.body.style.overflowY = 'auto'
            // document.body.style.paddingRight = '0px'
        }

        console.log(data)
    }, [open])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [note, setNote] = useState('')

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log('handler point 1')
        if (!name || !email || !whatsapp) {
            setError(t('requiredError'))
            setTimeout(() => {
                setError('')
            }, 5000)
        }

        try {
            console.log('handler point 2')

            setIsLoading(true)
            const date = data.date
            const response = await bookAppointment(
                { name, email, whatsapp, note, date }
            )

            console.log('handler point 3')
            console.log('response: ', response)

            setIsLoading(false)
            if (!response.success) {
                setError(response.message)
                setTimeout(() => {
                    setError('')
                }, 5000)
            }

            if(response.success){
                setName('')
                setEmail('')
                setWhatsapp('')
                setNote('')
                setError('')
                setOpen(false)

                await refresh()
            }
        } catch (err) {
            console.log(err.message)
            setIsLoading(false)
        }
    }

    return (
        <>

            {open && (
                <div className='flex py-10 justify-center items-center fixed inset-0 z-[1000000] h-screen w-screen overflow-auto'>
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 backdrop-blur-lg bg-black/20"
                    />


                    {
                        allow ? (
                            <div className="block relative w-[300px] sm:w-[400px] px-8 py-6 bg-black border border-white/5 rounded-md">
                                <button title='close' onClick={()=>setOpen(false)} className='flex justify-center items-center absolute top-5 right-5 bg-primary-orange h-[30px] w-[30px] shadow-md shadow-black/20 hover:bg-secondary-orange cursor-pointer rounded-full'>
                                    <IoCloseSharp className="text-lg text-black"/>
                                </button>
                                <h3 className='block relative mt-8 text-center font-poppins text-2xl text-white'>{t('heading').split(' ').map((word, i) => i === t('heading').split(' ').length - 1 ? <b key={i} className="text-primary-orange font-normal">{word}</b> : `${word} `)}</h3>
                                <p className='block relative text-center text-sm text-white/80'>{t('subtitle', { date: data?.date })}</p>

                                <form onSubmit={submitHandler} className='block relative w-full box-border mt-8'>
                                    <label htmlFor="name" className='block text-[12px] text-white/50' >{t('modalNameLbl')}</label>
                                    <input value={name} onChange={(e) => { setName(e.target.value) }} id='name' type="text" placeholder={t('modalNamePlh')} className='block relative w-full px-2 border-none focus:outline-none focus:ring-0 mt-1 py-2 bg-white/5 text-sm rounded-md' />

                                    <label htmlFor="email" className='block text-[12px] text-white/50 mt-2' >{t('modalEmailLbl')}</label>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} id='email' type="email" placeholder={t('modalEmailPlh')} className='block relative w-full px-2 border-none focus:outline-none focus:ring-0 mt-1 py-2 bg-white/5 text-sm rounded-md' />

                                    <label htmlFor="whatsapp" className='block text-[12px] text-white/50 mt-2' >{t('modalWhatsappLbl')}</label>
                                    <input value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} id='whatsapp' type='tel' placeholder={t('modalWhatsappPlh')} className='block placeholder:text-white/60 relative w-full px-2 border-none focus:outline-none focus:ring-0 mt-1 py-2 bg-white/5 text-sm rounded-md' />

                                    <label id='note' htmlFor="note" className='block text-[12px] text-white/50 mt-2 ' >{t('modalNoteLbl')}</label>
                                    <textarea value={note} onChange={(e) => { setNote(e.target.value) }} id='note' placeholder={t('modalNotePlh')} className='block relative w-full px-2 h-[140px] resize-none border-none focus:outline-none focus:ring-0 mt-1 py-2 bg-white/5 text-sm rounded-md' />

                                    <button type='submit' disabled={isLoading} className='block text-sm w-full py-3 bg-primary-blue hover:bg-primary-blue/80 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-white font-poppinsRegular mt-3 rounded-md'>{isLoading ? t('processing') : t('submit')}</button>
                                    {
                                        error !== '' && <p className='block relative text-[12px] text-center mt-1 text-red-500'>{error}</p>
                                    }
                                </form>
                            </div>
                        ) : (
                            <div className="block relative w-[300px] sm:w-[400px] px-8 py-6 bg-white rounded-md">
                                <button title='close' onClick={()=>setOpen(false)} className='flex justify-center items-center absolute top-5 right-5 bg-white/5 h-[30px] w-[30px] shadow-md shadow-black/20 hover:bg-[#e0e0e0] cursor-pointer rounded-full'>
                                    <IoCloseSharp className="text-lg text-black/60"/>
                                </button>
                                <h3 className='block relative text-center font-poppinsRegular text-2xl mt-8 text-red-500'>{t('slotNotAvailable')}</h3>
                                <p className='block relative text-center text-sm text-black/70'>{t('slotNotAvailableDesc')}</p>
                            </div>
                        )
                    }



                </div>

            )}
        </>
    )
}

export default BookingModal