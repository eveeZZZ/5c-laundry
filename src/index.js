import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LiveMap from './components/livemap';
import HomePage from './components/hompage';
import PomMap from './components/pomonamap';
// import Layout from './routes/Layout';


ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/live-map" element={<LiveMap />} />
      <Route path="/live-pom" element={<PomMap />} />
      <Route path="/hmc" element={<hmc />} />
      <Route path="/cmc" element={<cmc />} />
      <Route path="/live-pom" element={<PomMap />} />
      <Route path="/scs" element={<scs />} />
      <Route path="/ptz" element={<ptz />} />
      <Route path="/timer" element={<timer />} />

      


       // In this step, we'll create a 'catch-all' route for any other url patterns that users may accidentally go to. As mentioned in the previous step, this will not catch if the user inputs a symbol in our dynamic path that is not case matched or doesn't exist in our coin list (like /coinDetails/btc instead of /coinDetails/BTC) but it will catch cases of going to an absolute path that doesn't exist, like going to /coinDetail/... instead of /coinDetails/... or other similar cases.
     </Routes>
   </BrowserRouter>
 </React.StrictMode>,
)
