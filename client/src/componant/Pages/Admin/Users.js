import React from 'react'
import Layout from '../../layout/Layout.js'
import AdminMenu from '../../layout/AdminMenu.js'
import {useAuth} from '../../../context/auth.js'
const Users = () => {
    const [auth] = useAuth();
  return (
    <Layout>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9 p-3'>
                        <h4>{auth?.user?.name}</h4>
                        <h4>{auth?.user?.email}</h4>
                        <h4>{auth?.user?.phone}</h4>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default Users