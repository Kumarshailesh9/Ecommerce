import React from 'react'
import Layout from '../../layout/Layout.js';
import UserMenu from '../../layout/UserMenu.js';

const Orders = () => {
  return (
    <Layout>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <UserMenu/>
        </div>
        <div className='col-md-9'>
          <h2>Dashboard</h2>
        </div>
      </div>
    </div>
   </Layout>
  )
}

export default Orders