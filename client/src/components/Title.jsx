import React from 'react'

const Title = ({title , subTitle, align, font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align=== "left" && "md:items-start md:text-left"}`}>
      <h3 className={`text-xs md:text-[30px] ${font || "font-playfair "}`}>{title}</h3>
      <p className='text-xs md:text-xs text-gray-500/90 mt-2 max-w-174 '> {subTitle}</p>
    </div>
  )
}

export default Title
