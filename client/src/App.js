
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './componant/Pages/Home.js';
import About from './componant/Pages/About.js';
import Contact from './componant/Pages/Contact.js';
import Policy from './componant/Pages/Policy.js';
import PageNotFound from './componant/Pages/PageNotFound.js';
import Register from './componant/Pages/AuthPages/Register.js';
import Login from './componant/Pages/AuthPages/Login.js';
import Dashboard from './componant/Pages/user/Dashboard.js';
import PrivateRaute from './componant/Routes/Private.js';
import AdminRaute from './componant/Routes/Admin.js';
import Users from './componant/Pages/Admin/Users.js';
import CreateProduct from './componant/Pages/Admin/CreateProduct.js';
import CreateCategory from './componant/Pages/Admin/CreateCategory.js';
import Profile from './componant/Pages/user/Profile.js';
import Orders from './componant/Pages/user/Orders.js';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/dashboard' element = {<PrivateRaute/>}>
             <Route path='user' element={<Dashboard/>}></Route>
             <Route path='user/Profile' element={<Profile/>}></Route>
             <Route path='user/Orders' element={<Orders/>}></Route>
      </Route>
      <Route path='/dashboard' element = {<AdminRaute/>}>
             <Route path='admin' element={<Dashboard/>}></Route>
             <Route path='admin/create-category' element={<CreateCategory/>}></Route>
             <Route path='admin/create-product' element={<CreateProduct/>}></Route>
             <Route path='admin/users' element={<Users/>}></Route>
      </Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/policy' element={<Policy/>}></Route>
      <Route path= '*' element={<PageNotFound/>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
