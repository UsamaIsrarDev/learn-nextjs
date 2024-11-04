import Link from 'next/link'
import React from 'react'
import { routes } from '../router'

const Sidebar = () => {
  return (
    <div>
      <ul className='w-[400px]'>
        {routes.map(({path, label}, index) => {
            return (
                <li key={index}><Link href={path}>{label}</Link></li>
            )
        })} 
      </ul>
    </div>
  )
}

export default Sidebar
