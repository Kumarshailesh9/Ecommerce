import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
        <div className='text-center'>
            <h2>user Panel</h2>
            <div className="list-group">
                <NavLink to='/dashboard/user/Dashboard' className="list-group-item list-group-item-action active" aria-current="true">
                    Dashboard
                </NavLink>
                <NavLink to='/dashboard/user/Profile' className="list-group-item list-group-item-action">Profile</NavLink>
                <NavLink to='/dashboard/user/Orders' className="list-group-item list-group-item-action">Orders</NavLink> 
            </div>
        </div>
    </>
  )
}

export default UserMenu