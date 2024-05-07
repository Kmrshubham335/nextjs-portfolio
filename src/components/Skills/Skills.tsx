import { skills } from '@/data/portfolio'
import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className='my-20 p-8  justify-center flex flex-col animate__animated animate__fadeIn animate__delay-2s'>
        <p className='text-[30px] font-bold text-center dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] dark:bg-clip-text dark:text-transparent'>Skills</p>
        <div className='flex justify-center flex-wrap gap-8 my-10 p-20'>
            {skills?.map((Skill,index)=><span className='shadow-2xl shadow-blue-900 hover:animate-spin cursor-pointer' key={index}><Skill  height={"48px"} width={"48px"}/></span>)}
        </div>
    </section>
  )
}

export default Skills