import React from 'react'
import Layout from '../layout/Layout.js'
import { useAuth } from '../../context/auth.js'


const Home = () => {
  const [auth,setAuth] = useAuth();
  return (
    <Layout>
        <h1>Home</h1>
        <pre>
         {JSON.stringify(auth, null, 4)}
        </pre>
    </Layout>
  )
}

export default Home