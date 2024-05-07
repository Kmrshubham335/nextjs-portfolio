import { contact } from '@/data/portfolio'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='flex flex-col justify-center items-center my-10'>
        <p className='flex justify-center font-bold text-[30px] text-center
         dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] dark:bg-clip-text dark:text-transparent'>{contact.title}</p>
        <p className='justify-center text-[18px] text-center p-8 my-5 dark:bg-gradient-to-r from-[#F8F1F1] to-[#404146] dark:bg-clip-text dark:text-transparent'>{contact.description}</p>
        <div className='flex flex-wrap justify-center my-5 gap-4'>
            {contact?.links?.map((link,index)=>{
                return (
                    <Link key={index} target="_blank" href={link?.link} className='hover:scale-110'><link.icon /></Link>
                )
            })}

        </div>
    </section>
  )
}

export default Contact