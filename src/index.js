import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

import './styles/app.scss'

import reportWebVitals from './reportWebVitals';

import { createTheme } from '@mui/material/styles';

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const express = require('express');
//  const app = express();

// const cors = require('cors');
// const corsOptions ={
//     origin:"*", 
//     credentials:true,            
//     optionSuccessStatus:200
// }

// app.use(cors(corsOptions));

root.render (<Provider store={store}>
<App />
</Provider>
);

// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();