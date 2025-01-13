import Sidebar from '@/app/components/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='bg-slate-400 w-[100%] p-4'>
            {children}
        </div>
    </div>
  )
}

export default layout
