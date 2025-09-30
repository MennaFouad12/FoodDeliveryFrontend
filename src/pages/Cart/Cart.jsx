



// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import { food_list } from "../../assets/frontend_assets/assets";
// import { assets } from "../../assets/frontend_assets/assets";
// export default function Cart() {
//   const { cartItems,food_list ,addToCart, removeFromCart ,getTotalCartAmount} = useContext(StoreContext);
//   const itemsInCart = food_list.filter((food) => cartItems[food._id] > 0);
//   console.log(itemsInCart)

//   const navigate = useNavigate();

//   return (
//     <div className="mt-24">
//       {/* Cart Items */}
//       <div className="cart-items">
//         <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[clamp(12px,1vw,16px)] font-medium">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr className="h-px bg-gray-200 border-0" />

//         {itemsInCart.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={index}>
//                 <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black my-2">
//                   <img src={item.image} alt="" className="w-12" />
//                   <p>{item.name}</p>
//                   <p>${item.price}</p>
//                   {/* <p>{cartItems[item._id]}</p> */}

//                     <div className=" flex items-center gap-[10px] rounded-full bg-white p-[6px]">
//                               <img
//                                 onClick={() => removeFromCart(item._id)}
//                                 src={assets.remove_icon_red}
//                                 alt="remove"
//                                 className="w-[30px] cursor-pointer"
//                               />
//                               <p>{cartItems[item._id]}</p>
//                               <img
//                                 onClick={() => addToCart(item._id)}
//                                 src={assets.add_icon_green}
//                                 alt="add"
//                                 className="w-[30px] cursor-pointer"
//                               />
//                             </div>
//                   <p>${item.price * cartItems[item._id]}</p>
//                   <p
//                     className="cursor-pointer text-red-500 font-bold"
//                     onClick={() => removeFromCart(item._id)}
//                   >
//                     X
//                   </p>
//                 </div>
//                 <hr className="h-px bg-gray-200 border-0" />
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>

//       {/* Cart Bottom */}
//       <div className="flex flex-col lg:flex-row justify-between mt-20 gap-12 lg:gap-[12vw]">
//         {/* Cart Total */}
//         <div className="flex flex-col gap-5 flex-1">
//           <h2 className="text-xl font-semibold">Cart Total</h2>
//           <div>
//             <div className="flex justify-between text-gray-600">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between text-gray-600">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount()===0 ? 0 : 2}</p>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between text-gray-800 font-medium">
//               <p>Total</p>
//               <p>${getTotalCartAmount()===0?2:getTotalCartAmount()+2}</p>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}  className="w-[clamp(200px,15vw,300px)] bg-tomato py-3 rounded text-white bg-[#e44d26] font-medium transition ">
//             Proceed to Checkout
//           </button>
//         </div>

//         {/* Promo Code */}
//         <div className="flex-1">
//           <p className="text-gray-600">
//             If you have a promocode please enter it here
//           </p>
//           <div className="flex items-center justify-between mt-3 bg-gray-200 rounded">
//             <input
//               type="text"
//               placeholder="Promocode"
//               className="p-3 bg-transparent border-none outline-none rounded flex-1"
//             />
//             <button className="w-[clamp(150px,10vw,200px)] py-3 bg-black text-white rounded-r">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
//  // ✅ import Auth
// import { assets } from "../../assets/frontend_assets/assets";
// import { AuthContext } from "../../context/authContext";

// export default function Cart() {
//   const { cartItems, food_list, addToCart, removeFromCart, getTotalCartAmount } =
//     useContext(StoreContext);
//   const { isAuthenticated } = useContext(AuthContext); // ✅ auth state
//   const navigate = useNavigate();

//   // Filter items in cart
//   const itemsInCart = food_list.filter((food) => cartItems[food._id] > 0);

//   // --- CASE 1: Not logged in ---
//   if (!isAuthenticated) {
//     return (
//       <div className="mt-24 flex flex-col items-center justify-center text-center gap-4">
//         <p className="text-lg font-medium text-gray-700">
//           Please <span className="text-[tomato] font-semibold">login</span> to view your cart.
//         </p>
//         {/* <button
//           onClick={() => navigate("/login")}
//           className="px-6 py-3 bg-[tomato] text-white rounded-lg font-medium"
//         >
//           Go to Login
//         </button> */}
//       </div>
//     );
//   }

//   // --- CASE 2: Cart is empty ---
//   if (itemsInCart.length === 0) {
//     return (
//       <div className="mt-24 flex flex-col items-center justify-center text-center gap-4">
//         <img
//           src={assets.basket_icon}
//           alt="empty-cart"
//           className="w-16 opacity-50"
//         />
//         <p className="text-lg font-medium text-gray-600">
//           Your cart is empty.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-3 bg-[tomato] text-white rounded-lg font-medium"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   // --- CASE 3: Show cart items ---
//   return (
//     <div className="mt-24">
//       {/* Cart Items */}
//       <div className="cart-items">
//         <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[clamp(12px,1vw,16px)] font-medium">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr className="h-px bg-gray-200 border-0" />

//         {itemsInCart.map((item, index) => (
//           <div key={index}>
//             <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black my-2">
//               <img src={item.image} alt="" className="w-12" />
//               <p>{item.name}</p>
//               <p>${item.price}</p>

//               {/* Quantity Controller */}
//               <div className="flex items-center gap-[10px] rounded-full bg-white p-[6px]">
//                 <img
//                   onClick={() => removeFromCart(item._id)}
//                   src={assets.remove_icon_red}
//                   alt="remove"
//                   className="w-[30px] cursor-pointer"
//                 />
//                 <p>{cartItems[item._id]}</p>
//                 <img
//                   onClick={() => addToCart(item._id)}
//                   src={assets.add_icon_green}
//                   alt="add"
//                   className="w-[30px] cursor-pointer"
//                 />
//               </div>

//               <p>${item.price * cartItems[item._id]}</p>
//               <p
//                 className="cursor-pointer text-red-500 font-bold"
//                 onClick={() => removeFromCart(item._id)}
//               >
//                 X
//               </p>
//             </div>
//             <hr className="h-px bg-gray-200 border-0" />
//           </div>
//         ))}
//       </div>

//       {/* Cart Bottom */}
//       <div className="flex flex-col lg:flex-row justify-between mt-20 gap-12 lg:gap-[12vw]">
//         {/* Cart Total */}
//         <div className="flex flex-col gap-5 flex-1">
//           <h2 className="text-xl font-semibold">Cart Total</h2>
//           <div>
//             <div className="flex justify-between text-gray-600">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between text-gray-600">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between text-gray-800 font-medium">
//               <p>Total</p>
//               <p>
//                 ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => navigate("/order")}
//             className="w-[clamp(200px,15vw,300px)] bg-tomato py-3 rounded text-white bg-[#e44d26] font-medium transition"
//           >
//             Proceed to Checkout
//           </button>
//         </div>

//         {/* Promo Code */}
//         <div className="flex-1">
//           <p className="text-gray-600">
//             If you have a promocode please enter it here
//           </p>
//           <div className="flex items-center justify-between mt-3 bg-gray-200 rounded">
//             <input
//               type="text"
//               placeholder="Promocode"
//               className="p-3 bg-transparent border-none outline-none rounded flex-1"
//             />
//             <button className="w-[clamp(150px,10vw,200px)] py-3 bg-black text-white rounded-r">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { StoreContext } from "../../context/StoreContext";
// import { AuthContext } from "../../context/authContext";
// import { assets } from "../../assets/frontend_assets/assets";

// export default function Cart() {
//   const { cartItems, food_list, addToCart, removeFromCart, getTotalCartAmount } =
//     useContext(StoreContext);
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();
  
//   const [isLoading, setIsLoading] = useState(true);
//   const [promoCode, setPromoCode] = useState("");
//   const [appliedPromo, setAppliedPromo] = useState(false);

//   // Simulate API loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Filter items in cart
//   const itemsInCart = food_list.filter((food) => cartItems[food._id] > 0);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4 }
//     },
//     exit: {
//       opacity: 0,
//       x: -50,
//       transition: { duration: 0.3 }
//     },
//     hover: {
//       scale: 1.02,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.2 }
//     }
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
//       transition: { duration: 0.2 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const loadingVariants = {
//     animate: {
//       opacity: [0.5, 1, 0.5],
//       transition: {
//         duration: 1.5,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const handleApplyPromo = () => {
//     if (promoCode.trim()) {
//       setIsLoading(true);
//       // Simulate API call for promo validation
//       setTimeout(() => {
//         setAppliedPromo(true);
//         setIsLoading(false);
//       }, 800);
//     }
//   };

//   const handleRemoveItem = (itemId) => {
//     removeFromCart(itemId);
//   };

//   // Loading state
//   if (isLoading && itemsInCart.length > 0) {
//     return (
//       <div className="mt-24 flex flex-col items-center justify-center min-h-[50vh]">
//         <motion.div
//           variants={loadingVariants}
//           animate="animate"
//           className="flex flex-col items-center gap-4"
//         >
//           <div className="w-16 h-16 bg-gradient-to-r from-[tomato] to-orange-500 rounded-full"></div>
//           <p className="text-lg font-medium text-gray-600">Loading your cart...</p>
//         </motion.div>
//       </div>
//     );
//   }

//   // --- CASE 1: Not logged in ---
//   if (!isAuthenticated) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mt-24 flex flex-col items-center justify-center text-center gap-6 min-h-[50vh]"
//       >
//         <motion.div
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center"
//         >
//           <img
//             src={assets.basket_icon}
//             alt="empty-cart"
//             className="w-12 opacity-60"
//           />
//         </motion.div>
//         <p className="text-lg font-medium text-gray-700">
//           Please <span className="text-[tomato] font-semibold">login</span> to view your cart.
//         </p>
//         <motion.button
//           variants={buttonVariants}
//           whileHover="hover"
//           whileTap="tap"
//           onClick={() => navigate("/login")}
//           className="px-8 py-3 bg-[tomato] text-white rounded-lg font-medium shadow-lg"
//         >
//           Go to Login
//         </motion.button>
//       </motion.div>
//     );
//   }

//   // --- CASE 2: Cart is empty ---
//   if (itemsInCart.length === 0) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mt-24 flex flex-col items-center justify-center text-center gap-6 min-h-[50vh]"
//       >
//         <motion.div
//           initial={{ scale: 0.8, rotate: -10 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center"
//         >
//           <img
//             src={assets.basket_icon}
//             alt="empty-cart"
//             className="w-12 opacity-60"
//           />
//         </motion.div>
//         <p className="text-lg font-medium text-gray-600">
//           Your cart is empty.
//         </p>
//         <motion.button
//           variants={buttonVariants}
//           whileHover="hover"
//           whileTap="tap"
//           onClick={() => navigate("/")}
//           className="px-8 py-3 bg-[tomato] text-white rounded-lg font-medium shadow-lg"
//         >
//           Continue Shopping
//         </motion.button>
//       </motion.div>
//     );
//   }

//   // --- CASE 3: Show cart items ---
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="mt-24"
//     >
//       {/* Cart Items */}
//       <div className="cart-items">
//         <motion.div 
//           className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[clamp(12px,1vw,16px)] font-medium p-4 bg-gray-50 rounded-lg"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </motion.div>
        
//         <AnimatePresence>
//           {itemsInCart.map((item, index) => (
//             <motion.div
//               key={item._id}
//               variants={itemVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               whileHover="hover"
//               layout
//             >
//               <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black my-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
//                 <motion.img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-lg"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.2 }}
//                 />
//                 <p className="font-medium">{item.name}</p>
//                 <p className="text-green-600 font-semibold">${item.price}</p>

//                 {/* Quantity Controller */}
//                 <div className="flex items-center gap-3">
//                   <motion.img
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => removeFromCart(item._id)}
//                     src={assets.remove_icon_red}
//                     alt="remove"
//                     className="w-8 h-8 cursor-pointer p-1 bg-red-50 rounded-full"
//                   />
//                   <motion.span 
//                     className="px-3 py-1 bg-gray-100 rounded-md min-w-[40px] text-center font-medium"
//                     key={cartItems[item._id]}
//                     initial={{ scale: 0.8 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {cartItems[item._id]}
//                   </motion.span>
//                   <motion.img
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => addToCart(item._id)}
//                     src={assets.add_icon_green}
//                     alt="add"
//                     className="w-8 h-8 cursor-pointer p-1 bg-green-50 rounded-full"
//                   />
//                 </div>

//                 <p className="font-semibold text-red-400">
//                   ${item.price * cartItems[item._id]}
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.3, color: "#ef4444" }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => handleRemoveItem(item._id)}
//                   className="text-red-500 font-bold text-lg cursor-pointer justify-self-center"
//                 >
//                   ×
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Cart Bottom */}
//       <motion.div 
//         className="flex flex-col lg:flex-row justify-between mt-12 gap-8 lg:gap-12"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         {/* Cart Total */}
//         <div className="flex flex-col gap-6 flex-1">
//           <h2 className="text-2xl font-bold text-gray-800">Cart Total</h2>
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <motion.div 
//               className="flex justify-between text-gray-600 py-2"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <p>Subtotal</p>
//               <p className="font-medium">${getTotalCartAmount()}</p>
//             </motion.div>
//             <hr className="my-3" />
//             <motion.div 
//               className="flex justify-between text-gray-600 py-2"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <p>Delivery Fee</p>
//               <p className="font-medium">${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </motion.div>
//             <hr className="my-3" />
//             <motion.div 
//               className="flex justify-between text-gray-800 font-semibold text-lg py-2"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               <p>Total</p>
//               <p className="text-green-600">
//                 ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
//               </p>
//             </motion.div>
//           </div>
//           <motion.button
//             variants={buttonVariants}
//             whileHover="hover"
//             whileTap="tap"
//             onClick={() => navigate("/order")}
//             className="w-full max-w-md bg-gradient-to-r from-[tomato] to-orange-500 py-4 rounded-lg text-white font-semibold shadow-lg"
//           >
//             Proceed to Checkout
//           </motion.button>
//         </div>

//         {/* Promo Code */}
//         <div className="flex-1">
//           <p className="text-gray-600 mb-4">
//             If you have a promo code please enter it here
//           </p>
//           <div className="flex items-center bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
//             <input
//               type="text"
//               placeholder="Enter promo code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//               className="p-4 bg-transparent border-none outline-none flex-1"
//               disabled={appliedPromo}
//             />
//             <motion.button
//               whileHover={{ backgroundColor: appliedPromo ? "#10b981" : "#1f2937" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleApplyPromo}
//               className={`px-6 py-4 text-white font-medium ${
//                 appliedPromo ? 'bg-green-500' : 'bg-gray-800'
//               }`}
//               disabled={isLoading || appliedPromo}
//             >
//               {isLoading ? (
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                   className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
//                 />
//               ) : appliedPromo ? (
//                 "✓ Applied"
//               ) : (
//                 "Apply"
//               )}
//             </motion.button>
//           </div>
//           {appliedPromo && (
//             <motion.p 
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-green-500 mt-2 font-medium"
//             >
//               Promo code applied successfully!
//             </motion.p>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }





import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/authContext";
import { assets } from "../../assets/frontend_assets/assets";
import toast from "react-hot-toast";

export default function Cart() {
  const { cartItems, food_list, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(false);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter items in cart
  const itemsInCart = food_list.filter((food) => cartItems[food._id] > 0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const loadingVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setIsLoading(true);
      // Simulate API call for promo validation
      setTimeout(() => {
        setAppliedPromo(true);
        setIsLoading(false);
      }, 800);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  // Loading state
  if (isLoading && itemsInCart.length > 0) {
    return (
      <div className="mt-24 px-4 flex flex-col items-center justify-center min-h-[50vh]">
        <motion.div
          variants={loadingVariants}
          animate="animate"
          className="flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-[tomato] to-orange-500 rounded-full"></div>
          <p className="text-lg font-medium text-gray-600 text-center">Loading your cart...</p>
        </motion.div>
      </div>
    );
  }

  // --- CASE 1: Not logged in ---
  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-24 px-4 flex flex-col items-center justify-center text-center gap-6 min-h-[50vh]"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <img
            src={assets.basket_icon}
            alt="empty-cart"
            className="w-12 opacity-60"
          />
        </motion.div>
        <p className="text-lg font-medium text-gray-700 px-4">
          Please <span className="text-[tomato] font-semibold">login</span> to view your cart.
        </p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-[tomato] text-white rounded-lg font-medium shadow-lg"
        >
          Go to Login
        </motion.button>
      </motion.div>
    );
  }

  // --- CASE 2: Cart is empty ---
  if (itemsInCart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-24 px-4 flex flex-col items-center justify-center text-center gap-6 min-h-[50vh]"
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <img
            src={assets.basket_icon}
            alt="empty-cart"
            className="w-12 opacity-60"
          />
        </motion.div>
        <p className="text-lg font-medium text-gray-600 px-4">
          Your cart is empty.
        </p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-[tomato] text-white rounded-lg font-medium shadow-lg"
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    );
  }

  // --- CASE 3: Show cart items ---
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-24 px-4 lg:px-8"
    >
      {/* Page Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left"
      >
        Shopping Cart ({itemsInCart.length} {itemsInCart.length === 1 ? 'item' : 'items'})
      </motion.h1>

      {/* Cart Items - Desktop Table */}
      <div className="hidden lg:block">
        <motion.div 
          className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[clamp(12px,1vw,16px)] font-medium p-4 bg-gray-50 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </motion.div>
        
        <AnimatePresence>
          {itemsInCart.map((item) => (
            <motion.div
              key={item._id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              layout
            >
              <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black my-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <p className="font-medium">{item.name}</p>
                <p className="text-green-600 font-semibold">${item.price}</p>

                {/* Quantity Controller */}
                <div className="flex items-center gap-3">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {removeFromCart(item._id)
                      toast.error(`${item.name} removed from cart`);
                    }}
                    src={assets.remove_icon_red}
                    alt="remove"
                    className="w-8 h-8 cursor-pointer p-1 bg-red-50 rounded-full"
                  />
                  <motion.span 
                    className="px-3 py-1 bg-gray-100 rounded-md min-w-[40px] text-center font-medium"
                    key={cartItems[item._id]}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cartItems[item._id]}
                  </motion.span>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {addToCart(item._id)
                      toast.success(`${item.name} added to cart`);
                    }}
                    src={assets.add_icon_green}
                    alt="add"
                    className="w-8 h-8 cursor-pointer p-1 bg-green-50 rounded-full"
                  />
                </div>

                <p className="font-semibold text-red-400">
                  ${item.price * cartItems[item._id]}
                </p>
                <motion.button
                  whileHover={{ scale: 1.3, color: "#ef4444" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {handleRemoveItem(item._id)
                      toast.error(`${item.name} removed from cart`);
                  }}
                  className="text-red-500 font-bold text-lg cursor-pointer justify-self-center"
                >
                  ×
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Cart Items - Mobile Cards */}
      <div className="lg:hidden space-y-4">
        <AnimatePresence>
          {itemsInCart.map((item) => (
            <motion.div
              key={item._id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <div className="flex items-start gap-4">
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                    <motion.button
                      whileHover={{ scale: 1.3, color: "#ef4444" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>{ handleRemoveItem(item._id)

                        toast.error(`${item.name} removed from cart`);
                      }}
                      className="text-red-500 font-bold text-lg ml-2"
                    >
                      ×
                    </motion.button>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-green-600 font-semibold">${item.price}</span>
                    <span className="font-semibold text-red-400">
                      ${item.price * cartItems[item._id]}
                    </span>
                  </div>

                  {/* Quantity Controller - Mobile */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Quantity:</span>
                    <div className="flex items-center gap-3">
                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {removeFromCart(item._id)
                            toast.error(`${item.name} removed from cart`);
                        }}
                        src={assets.remove_icon_red}
                        alt="remove"
                        className="w-7 h-7 cursor-pointer p-1 bg-red-50 rounded-full"
                      />
                      <motion.span 
                        className="px-3 py-1 bg-gray-100 rounded-md min-w-[35px] text-center font-medium"
                        key={cartItems[item._id]}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {cartItems[item._id]}
                      </motion.span>
                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addToCart(item._id)}
                        src={assets.add_icon_green}
                        alt="add"
                        className="w-7 h-7 cursor-pointer p-1 bg-green-50 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Cart Bottom */}
      <motion.div 
        className="flex flex-col lg:flex-row justify-between mt-8 lg:mt-12 gap-8 lg:gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Promo Code - Moved to top on mobile */}
        <div className="lg:order-2 lg:flex-1">
          <p className="text-gray-600 mb-4 font-medium">Promo Code</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="p-4 bg-white rounded-lg border border-gray-200 outline-none flex-1 shadow-sm"
              disabled={appliedPromo}
            />
            <motion.button
              whileHover={{ backgroundColor: appliedPromo ? "#10b981" : "#1f2937" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplyPromo}
              className={`px-6 py-4 text-white font-medium rounded-lg ${
                appliedPromo ? 'bg-green-500' : 'bg-gray-800'
              } shadow-sm min-w-[120px]`}
              disabled={isLoading || appliedPromo}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                />
              ) : appliedPromo ? (
                "✓ Applied"
              ) : (
                "Apply"
              )}
            </motion.button>
          </div>
          {appliedPromo && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 mt-2 font-medium"
            >
              Promo code applied successfully!
            </motion.p>
          )}
        </div>

        {/* Cart Total */}
        <div className="lg:order-1 flex flex-col gap-6 lg:flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Cart Total</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <motion.div 
              className="flex justify-between text-gray-600 py-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>Subtotal</p>
              <p className="font-medium">${getTotalCartAmount()}</p>
            </motion.div>
            <hr className="my-3 border-gray-200" />
            <motion.div 
              className="flex justify-between text-gray-600 py-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p>Delivery Fee</p>
              <p className="font-medium">${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </motion.div>
            <hr className="my-3 border-gray-200" />
            <motion.div 
              className="flex justify-between text-gray-800 font-semibold text-lg py-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p>Total</p>
              <p className="text-green-600">
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </motion.div>
          </div>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate("/order")}
            className="w-full bg-gradient-to-r from-[tomato] to-orange-500 py-4 rounded-xl text-white font-semibold shadow-lg text-lg"
          >
            Proceed to Checkout
          </motion.button>
        </div>
      </motion.div>

      {/* Continue Shopping Button - Mobile */}
      <motion.div 
        className="lg:hidden mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/")}
          className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium border border-gray-200"
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </motion.div>
  );
}