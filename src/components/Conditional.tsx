'use client'
import React from 'react'

const Conditional = ({isTrue,children}:{isTrue:boolean,children:React.ReactNode}) => {
  
   if (isTrue) return <>{children}</>
   return <></>
  
}

export default Conditional