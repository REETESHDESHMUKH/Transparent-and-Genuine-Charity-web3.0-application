import React from 'react';
import {Route, Routes} from 'react-router-dom';

import "./index.css";
import {Home,CampaignDetails,CreateCampaign,Profile} from './pages';
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        sidebar
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        navbar
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App