import React from 'react'
import Layout from '../../layout/Layout.js'
import AdminMenu from '../../layout/AdminMenu.js'

const CreateCategory = () => {
    return (
        <Layout>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Create Category</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory