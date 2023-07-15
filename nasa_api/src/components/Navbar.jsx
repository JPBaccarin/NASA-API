import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='bg-slate-800 shadow-sm text-white  shadow-blue-900 p-4'>
            <div className='flex flex-row m-0 p-0'>
            <Link className='bg-slate-800 hover:shadow-md hover:shadow-blue-800 p-2 rounded-md hover:bg-blue-500 hover:translate-x-2 transition' to="/picday">picture of the day</Link>
            </div>
        </div>
    )
}

export default Navbar