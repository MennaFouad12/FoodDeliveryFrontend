

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






// 








import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import LoginPopup from "../LoginPopup/LoginPopup";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/authContext";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const navItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "menu", label: "Menu", to: "#menu" },
    { id: "mobile-app", label: "Mobile App", to: "#mobile-app" },
    { id: "contact-us", label: "Contact Us", to: "#contact-us" },
  ];

  const handleNavClick = (itemId) => {
    setMenu(itemId);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center justify-between w-full md:w-auto">
              {/* Logo */}
              <Link 
                to="/" 
                className="flex-shrink-0"
                onClick={() => handleNavClick("home")}
              >
                <h1 className="text-2xl md:text-3xl font-bold text-[tomato] cursor-pointer hover:scale-105 transition-transform duration-200">
                  Papa Johon's
                </h1>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#49557e] hover:text-[tomato] hover:bg-[#fff4f2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[tomato] transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex gap-8 text-[16px] lg:text-[18px] text-[#49557e] list-none">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.to}
                      onClick={() => handleNavClick(item.id)}
                      className={`cursor-pointer font-medium capitalize transition-colors duration-200 hover:text-[tomato] ${
                        menu === item.id 
                          ? "text-[tomato] border-b-2 border-[tomato] pb-1" 
                          : "text-[#49557e]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Basket */}
              <div className="relative">
                <Link 
                  to="/cart" 
                  className="flex items-center hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={assets.basket_icon}
                    className="w-6 h-6 cursor-pointer"
                    alt="basket"
                  />
                </Link>
                {getTotalCartAmount() > 0 && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[tomato] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {getTotalCartAmount() > 99 ? '99+' : getTotalCartAmount()}
                    </span>
                  </div>
                )}
              </div>

              {/* Auth Section */}
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLogout}
                    className="border border-[tomato] text-[#49557e] text-[15px] lg:text-[16px] px-6 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-[tomato] hover:text-white hover:shadow-md"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="border border-[tomato] text-[#49557e] text-[15px] lg:text-[16px] px-8 lg:px-10 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-[tomato] hover:text-white hover:shadow-md"
                >
                  Sign in
                </button>
              )}
            </div>

            {/* Mobile Right Section */}
            <div className="md:hidden flex items-center gap-4">
              {/* Basket for Mobile */}
              <div className="relative">
                <Link to="/cart" className="flex items-center">
                  <img
                    src={assets.basket_icon}
                    className="w-6 h-6 cursor-pointer"
                    alt="basket"
                  />
                </Link>
                {getTotalCartAmount() > 0 && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[tomato] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {getTotalCartAmount() > 99 ? '99+' : getTotalCartAmount()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.to}
                  onClick={() => handleNavClick(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium capitalize transition-colors duration-200 ${
                    menu === item.id
                      ? "text-[tomato] bg-[#fff4f2]"
                      : "text-[#49557e] hover:text-[tomato] hover:bg-[#fff4f2]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Auth Section for Mobile */}
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#49557e] hover:text-[tomato] hover:bg-[#fff4f2] transition-colors duration-200"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#49557e] hover:text-[tomato] hover:bg-[#fff4f2] transition-colors duration-200"
                  >
                    Sign in
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}