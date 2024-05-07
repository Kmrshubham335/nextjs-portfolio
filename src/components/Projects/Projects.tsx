import { projects } from '@/data/portfolio'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className='my-20  justify-center flex flex-col animate__animated animate__fadeIn animate__delay-2s'>
        <p className='text-[30px] font-bold text-center dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] dark:bg-clip-text dark:text-transparent'>PROJECTS</p>
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 items-center content-center lg:grid-cols-2 gap-20 md:p-20'>
                {projects.map((project,index)=>{
                    return (
                        <div key={project.title + index} className='flex flex-col items-center w-[330px] md:w-[380px]
                          border rounded-2xl border-none shadow-2xl shadow-blue-900 cursor-pointer hover:-translate-y-20'>
                            <Image src={project.image} alt={project.title} height={220} width={350}
                             className='border rounded-xl bg-cover bg-center mt-4 border-none'/>
                             <p className='text-lg text-center p-4 font-bold'>{project.title}</p>
                             <p className='text-lg text-center p-4 dark:text-gray-400'>{project.description}</p>
                             <div className='flex flex-wrap p-8 gap-4'>
                             {project?.tech_stack?.map((Tech,index)=> {
                              return <Tech key={project.title +index}/>
                             })}
                             </div>
                        </div>
                    )
                })}
            </div>

        </div>
    </section>
  )
}

export default Projects