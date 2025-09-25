// import React from 'react'
// import './AppDownload.css'
// import { assets } from '../../assets/frontend_assets/assets'
// export default function AppDownload() {
//   return (
//     <div className='app-download' id='app-download'>
// <p> for Brtter experience download our <br /> tomato app</p>
// <div className="app-download-platforms">
//   <img src={assets.play_store} alt="" />
//   <img src={assets.app_store} alt="" />
// </div>
//     </div>
//   )
// }



import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

export default function AppDownload() {
  return (
    <div
      id="mobile-app"
      className="mx-auto mt-[100px] text-center font-medium text-[max(3vw,20px)]"
    >
      <p>
        For better experience download our <br /> tomato app
      </p>

      <div className="mt-10 flex justify-center gap-[max(2vw,10px)]">
        <img
          src={assets.play_store}
          alt="play store"
          className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer transition-transform duration-500 hover:scale-105"
        />
        <img
          src={assets.app_store}
          alt="app store"
          className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
