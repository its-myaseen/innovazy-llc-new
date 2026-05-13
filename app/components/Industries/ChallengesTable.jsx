'use client'
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'

const ChallengesTable = () => {


  const t = useTranslations("industries")
  const [challengesData, setChallengesData] = useState([])

  useEffect(() => {
    const data = t.raw("challengesData")
    setChallengesData(data)
    console.log(data)
  }, [])



  return (
    <div className={`hidden sm:block block px-16 mt-28 pb-26`}>

      <h1 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
        <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> {t("sectionTwo.mainHeading")}  <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
      </h1>
      <p className='block relative text-white/70 text-center max-w-[900px] mt-3 mx-auto'>
        {t("sectionThree.desc")}
      </p>
      <table className={`w-full border-collapse background-glass relative mt-12 rounded-2xl overflow-hidden`}>
        <thead className='relative   '>
          <tr className='relative bg-primary-orange'>
            <th className={`text-lg font-medium py-3`}>Industry</th>
            <th>Challenge</th>
            <th>Solution</th>
          </tr>
        </thead>


        <tbody>
          {
            challengesData.map((data, ind) => {
              return (
                <tr className="dark:text-white/80 text-black/80 border-b-[1px] dark:border-b-white/5 border-b-black/5">
                  <td className="p-3 px-8 border-r border-dashed border-white/30">
                    {data.industry}
                  </td>

                  <td className="p-3 px-8 border-r border-dashed border-white/30">
                    {data.challenge}
                  </td>

                  <td className="p-3 px-8">
                    {data.solution}
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default ChallengesTable
