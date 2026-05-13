import React from 'react'
import Appointment from '../../components/appointment/Appointment'
import Faq from '@/app/components/common/Faq'

const page = () => {
  return (
    <div className="block relative box-border px-8 sm:px-16 overflow-hidden">
      <Appointment/>
      <Faq/>
    </div>
  )
}

export default page
