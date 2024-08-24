import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'

const Home = () => {
    document.title = "SCSDB | Homepage"
  return (
    <>
        <Sidebar />
        <div className='w-[80%] h-full'>
        <Topnav />
        </div>
    </>
  )
}

export default Home