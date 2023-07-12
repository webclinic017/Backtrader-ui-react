import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


import { Home } from './Containers/Home';
import Verify from './Containers/Verify';
import SignUp from './Containers/SignUp';
import Login from './Containers/Login';
import Forget from './Containers/Forget';
import Orders1 from './Containers/Orders1';
import MarketWatch from './Favourites/MarketWatch';
import FullPaneItems from './PaneItems/FullPaneItems';
import { Dashboard } from '@mui/icons-material';
import Dashboard1 from './Containers/Dashboard1';
import Header1 from './Containers/Header1';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reset from './Containers/Reset';
import Orders2 from './Containers1/Orders2';
import Profile2 from './Containers/Profile2';
import Payment2 from './Containers/Payment2';
const App = () => {
  return (
   
      <BrowserRouter>
        <Routes>
        <Route path="/watch" element={<MarketWatch/>} />
        <Route path="/login" element={<Login/>} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/payment" element={<Payment2/>} />
          <Route path="/fullpane" element={<FullPaneItems/>} />
          <Route path="/orders" element={<Orders2/>} />
          <Route path="/profile" element={<Profile2/>} />
          <Route path="/dashboard" element={<Dashboard1/>} />
          <Route exact path="/reset-password" element={<Reset/>} />

        <Route path="/forget" element={<Forget/>}></Route>
          <Route path="/" element={<SignUp />} />
        
          
        </Routes>
        <ToastContainer />
      </BrowserRouter>
   
  );
};


export default App;
