import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div className='text-black gap-5 py-6 px-18 h-[90vh] flex justify-between items-center'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1Content
