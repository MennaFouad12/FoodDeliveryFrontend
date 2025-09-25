

// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/frontend_assets/assets";
// import LoginPopup from "../LoginPopup/LoginPopup";
// import { Link } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import { AuthContext } from "../../context/authContext";

// export default function Navbar() {
//   const [menu, setMenu] = useState("home");
//  const [isLoginOpen, setIsLoginOpen] = useState(false); // ⬅️ popup state
//  const {getTotalCartAmount} = useContext(StoreContext);
//   const { isAuthenticated, user, logout } = useContext(AuthContext); // ✅ auth


//   const navItems = [
//     { id: "home", label: "home",to:"/" },
//     { id: "menu", label: "menu", to:"/menu" },
//     { id: "mobile-app", label: "mobile-app", to:"/mobile-app" },
//     { id: "contact-us", label: "contact us" , to:"/contact-us"},
//   ];

//   return (
//     <div className="flex items-center justify-between py-5 px-4 md:px-10 ">
//       {/* Logo */}
//       <Link to="/" >
//       <img src={assets.logo} alt="logo" className="w-12" />
//       </Link>

//       {/* Menu */}
//       {/* <ul className="hidden md:flex gap-6 text-[18px] text-[#49557e] list-none">
//         {navItems.map((item) => (
          
//           <Link
//             to={item.to}
//             key={item.id}
//             onClick={() => setMenu(item.id)}
//             className={`cursor-pointer ${
//               menu === item.id ? "border-b border-[#49557e] pb-[2px]" : ""
//             }`}
//           >
//             {item.label}
//           <Link/>
//         ))}
//       </ul> */}
//       <ul className="hidden md:flex gap-6 text-[18px] text-[#49557e] list-none">
//   {navItems.map((item) => (
//     <Link
//       to={item.to}
//       key={item.id}
//       onClick={() => setMenu(item.id)}
//       className={`cursor-pointer ${
//         menu === item.id ? "border-b border-[#49557e] pb-[2px]" : ""
//       }`}
//     >
//       {item.label}
//     </Link>
//   ))}
// </ul>


//       {/* Right Section */}
//       <div className="flex items-center gap-6 md:gap-10">
//         <img src={assets.search_icon} alt="search_icon" className="w-5 h-5" />

//         {/* Basket */}
//         <div className="relative">
//           <Link to="/cart">
//           <img
//             src={assets.basket_icon}
//             className="w-6 h-6 cursor-pointer"
//             alt="basket"
//           />
//           </Link>
//           { getTotalCartAmount() > 0 && (
//               <div className="absolute -top-2 -right-2 min-w-[10px] min-h-[10px] bg-[tomato] rounded-full"></div>
//           )}
        
//         </div>

//         {/* Button */}
//         <button    onClick={() => setIsLoginOpen(true)} className="border border-[tomato] text-[#49557e] text-[16px] px-10 py-2 rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4f2] hover:text-[tomato]">
//           sign in
//         </button>
//       </div>
//        <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
//     </div>
//   );
// }






import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import LoginPopup from "../LoginPopup/LoginPopup";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/authContext";
// import { AuthContext } from "../../context/AuthContext"; // ✅ import auth

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext); // ✅ auth

  const navItems = [
    { id: "home", label: "home", to: "/" },
    { id: "menu", label: "menu", to: "#menu" },
    { id: "mobile-app", label: "mobile-app", to: "#mobile-app" },
    { id: "contact-us", label: "contact us", to: "#contact-us" },
  ];

  return (
    <div className="flex items-center justify-between py-5 px-4 md:px-10">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl md:text-3xl  font-bold text-[tomato] cursor-pointer">Papa Johon's</h1>
      </Link>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-[18px] text-[#49557e] list-none">
        {navItems.map((item) => (
          // <Link
          //   to={item.to}
          //   key={item.id}
          //   onClick={() => setMenu(item.id)}
          //   className={`cursor-pointer ${
          //     menu === item.id ? "border-b border-[#49557e] pb-[2px]" : ""
          //   }`}
          // >
          //   {item.label}
          // </Link>

          <a
  href={item.to}
  key={item.id}
  onClick={() => setMenu(item.id)}
  className={`cursor-pointer ${
    menu === item.id ? "border-b border-[#49557e] pb-[2px]" : ""
  }`}
>
  {item.label}
</a>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6 md:gap-10">
        {/* Search */}
      
        {/* Basket */}
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              className="w-6 h-6 cursor-pointer"
              alt="basket"
            />
          </Link>
          {getTotalCartAmount() > 0 && (
            <div className="absolute -top-2 -right-2 min-w-[10px] min-h-[10px] bg-[tomato] rounded-full"></div>
          )}
        </div>

        {/* Auth Section */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
          
            <button
              onClick={logout}
              className="border border-[tomato] text-[#49557e] text-[16px] px-6 py-2 rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4f2] hover:text-[tomato]"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsLoginOpen(true)}
            className="border border-[tomato] text-[#49557e] text-[16px] px-10 py-2 rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4f2] hover:text-[tomato]"
          >
            Sign in
          </button>
        )}
      </div>

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
