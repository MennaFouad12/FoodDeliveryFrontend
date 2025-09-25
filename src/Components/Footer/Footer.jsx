
// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/frontend_assets/assets'
// export default function Footer() {
//   return (
//     <div className='footer' id="footer">
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <img src={assets.logo} alt="" />
//           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat fugiat possimus minus mollitia quibusdam earum cupiditate tempora aperiam pariatur!</p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon} alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src={assets.linkedin_icon} alt="" />
//             <img src={assets.instagram_icon} alt="" />
//           </div>
//         </div>
//         <div className="footer-content-center">
//           <h2>Company</h2>
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>
//         <div className="footer-content-right">
//           <h2>Get in touch</h2>
//           <ul>
//             <li>+1 234 567 890</li>
//             <li>contact@example.com</li>
//           </ul>
//         </div>

//       </div>
//       <hr />
//       <p className="footer-copyright"> Copyright &copy; 2023 Food Delivery</p>
//     </div>
//   )
// }



import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <div
      id="contact-us"
      className="bg-[#323232] pt-20 px-[8vw] pb-5 text-[#d9d9d9] flex flex-col items-center gap-5 mt-[100px]"
    >
      {/* Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-20">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            quaerat fugiat possimus minus mollitia quibusdam earum cupiditate
            tempora aperiam pariatur!
          </p>
          <div className="flex gap-5 cursor-pointer">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
            <img src={assets.instagram_icon} alt="instagram" />
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white">Company</h2>
          <ul>
            <li className="mb-2 cursor-pointer">Home</li>
            <li className="mb-2 cursor-pointer">About us</li>
            <li className="mb-2 cursor-pointer">Delivery</li>
            <li className="mb-2 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white">Get in touch</h2>
          <ul>
            <li className="mb-2 cursor-pointer">+1 234 567 890</li>
            <li className="mb-2 cursor-pointer">contact@example.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full h-[2px] bg-gray-500 border-none my-5" />

      {/* Copyright */}
      <p className="text-center">
        Copyright &copy; 2023 Food Delivery
      </p>
    </div>
  );
}
