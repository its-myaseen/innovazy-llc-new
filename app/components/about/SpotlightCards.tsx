import React from 'react'

const SpotlightCards = () => {
    return (
        <div className='block relative w-full min-h-screen box-border space-y-6 z-100 mt-16 pb-326'>
            <div className='flex lg:flex-row flex-col justify-between items-center gap-6 w-full relative box-border '>
                <div style={{ height: '450px' }} className="block group relative h-full flex-1 rounded-xl overflow-hidden">
                    <img src="/assets/images/laptop.png" alt="Innovazy About" className='absolute group-hover:scale-110 durartion-700 transition-transform ease-in-out inset-0 h-full w-full' />
                    <div className='block absolute bottom-0 left-0 w-full box-border px-8 pb-8'>
                        <div className='block relative w-full box-border p-6 bg-black opacity-80 backdrop-blur-2xl rounded-xl'>
                            <h4 className='block relative text-2xl max-w-[350px] font-semibold  font-poppins text-primary-orange leading-tight'>Sell Everywhere Seamlessly</h4>
                            <p className='text-white/70 text-sm max-w-[300px] mt-3 leading-tight'>Build scalable online stores fully integrated with inventory, payments, and customer management.</p>
                        </div>
                    </div>
                </div>

                <div style={{ height: '450px' }} className='flex flex-col justify-start items-start relative overflow-hidden h-full w-[300px] rounded-xl bg-white/5 border-white/10 border px-6'>
                    <h4 className='block relative text-2xl max-w-[350px] mt-6 font-semibold  font-poppins text-primary-orange leading-tight'>Sell Everywhere Seamlessly</h4>
                    <p className='text-white/70 text-sm max-w-[300px] mt-3 leading-tight'>Build scalable online stores fully integrated with inventory, payments, and customer management.</p>
                    <img src="/assets/images/Mobile.png" alt="Odoo Mobile" className='block relative flex-1 mt-6' />
                </div>
            </div>

            <div  className='flex flex-row justify-between items-center gap-6 w-full relative box-border '>
                <div style={{ height: '220px' }} className='flex flex-row justify-between items-center gap-6 relative h-full box-border flex-3 rounded-xl  py-6 bg-white/5 border-white/10 px-6 border'>
                    <div className='block relative box-border '>
                        <h4 className='block relative text-3xl max-w-[350px] font-semibold  font-poppins text-primary-orange leading-tight'>Modern Financial Operations</h4>
                        <p className='text-white/70 text-md max-w-[300px] mt-3 leading-tight'>Simplify invoicing, accounting, tax management, and financial reporting in one unified system.</p>
                    </div>
                    <img src="/assets/images/finance.png" alt="Odoo Mobile" className='block relative h-full' />
                </div>

                <div style={{ height: '220px' }} className='flex flex-col justify-start items-start relaive h-full bg-white/5 border-white/10 px-6 py-4 border flex-1 rounded-xl overflow-hidden py-6'>
                    <img src="/assets/images/Path.png" alt="Odoo paths" className="w-full"></img>
                    <h4 className='block relative text-xl max-w-[350px] mt-6 font-semibold  font-poppins text-primary-orange leading-tight'>Empower Your Workforce</h4>
                </div>
                <div style={{ height: '220px' }} className='flex flex-col justify-center items-start flex-2 h-full bg-primary-orange px-6 border rounded-xl overflow-hidden py-6 relative'>
                    <img src="/assets/images/lobby2.jpg" alt="Background Image" className='block absolute inset-0 h-full w-full box-border' />
                    <div className='block absolute top-0 left-0 bg-black/80 h-full w-full'></div>
                    <h4 className='block relative font-poppins text-2xl font-semibold tracking-tight  leading-tight text-white'>Have an Idea? Lets get Started</h4>
                    <p className='block relative w-[80%] text-sm text-white/80 mt-2'>Bring your ideas to life with smart, scalable digital solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default SpotlightCards
