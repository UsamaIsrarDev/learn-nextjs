import { AppSidebar } from '@/components/core/Sidebar';
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <AppSidebar />
      { children }
    </div>
  )
}

export default Layout
