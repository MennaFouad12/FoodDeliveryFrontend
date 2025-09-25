// import React, { useContext, useState } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/frontend_assets/assets'
// import { StoreContext } from '../../context/StoreContext';
// export default function FoodItem({ id, name, image, price, description }) {

//   const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">

//         <img className='food-item-img' src={image} alt="food-item-img" />
// {
//   !cartItems[id]?<img className='add' src={assets.add_icon_white} alt="" onClick={() => addToCart(id)} ></img>
//   :<div className='food-item-counter'>
//     <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//     <p>{cartItems[id]}</p>
//     <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
//   </div>
// }
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-desc">  {description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   )
// }



import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

export default function FoodItem({ id, name, image, price, description }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


  return (
    <div className="w-full mx-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.15)] transition duration-300">
      {/* Image Container */}
      <div className="relative">
        <img
          className="w-full h-[200px] rounded-t-[15px]"
          src={image}
          alt="food-item-img"
        />

        {/* Add / Counter */}
        {!cartItems[id] ? (
          <img
            className="absolute bottom-[15px] right-[15px] w-[35px] cursor-pointer rounded-full"
            src={assets.add_icon_white}
            alt="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] rounded-full bg-white p-[6px]">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
              className="w-[30px] cursor-pointer"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add"
              className="w-[30px] cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="rating" className="w-[70px]" />
        </div>
        <p className="text-[12px] text-[#676767]">{description}</p>
        <p className="text-[22px] font-medium text-[tomato] my-[10px]">
          ${price}
        </p>
      </div>
    </div>
  );
}






// import React, { useContext, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";

// export default function FoodItem({ id, name, image, price, description }) {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageError, setImageError] = useState(false);

//   // Animation variants
//   const cardVariants = {
//     initial: { 
//       scale: 1,
//       y: 0,
//       boxShadow: "0 0 10px rgba(0,0,0,0.15)"
//     },
//     hover: {
//       scale: 1.03,
//       y: -8,
//       boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     },
//     tap: {
//       scale: 0.98,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const imageVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.1,
//       transition: {
//         duration: 0.2
//       }
//     },
//     tap: {
//       scale: 0.9,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const counterVariants = {
//     initial: { 
//       scale: 0.8,
//       opacity: 0 
//     },
//     animate: { 
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     },
//     exit: { 
//       scale: 0.8,
//       opacity: 0,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   const addButtonVariants = {
//     initial: { 
//       scale: 1,
//       rotate: 0 
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 180,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     },
//     tap: {
//       scale: 0.8,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const priceVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.1,
//       color: "#ff6b35",
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   // Loading Skeleton for Image
//   const ImageSkeleton = () => (
//     <div className="w-full h-[200px] bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-[15px] animate-pulse overflow-hidden">
//       <motion.div
//         className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
//         animate={{
//           x: [-100, 100],
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//     </div>
//   );

//   // Fallback Image Component
//   const FallbackImage = () => (
//     <div className="w-full h-[200px] bg-gradient-to-br from-orange-100 to-red-100 rounded-t-[15px] flex items-center justify-center">
//       <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//       </svg>
//     </div>
//   );

//   const handleAddToCart = () => {
//     addToCart(id);
//     // Add haptic feedback if available
//     if (navigator.vibrate) {
//       navigator.vibrate(50);
//     }
//   };

//   const handleRemoveFromCart = () => {
//     removeFromCart(id);
//     // Add haptic feedback if available
//     if (navigator.vibrate) {
//       navigator.vibrate(30);
//     }
//   };

//   return (
//     <motion.div
//       className="w-full mx-auto rounded-[15px] bg-white overflow-hidden cursor-pointer"
//       variants={cardVariants}
//       initial="initial"
//       whileHover="hover"
//       whileTap="tap"
//       layout
//     >
//       {/* Image Container */}
//       <div className="relative overflow-hidden">
//         {/* Image Loading States */}
//         {!imageLoaded && !imageError && <ImageSkeleton />}
        
//         <AnimatePresence mode="wait">
//           {imageError ? (
//             <motion.div
//               key="fallback"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <FallbackImage />
//             </motion.div>
//           ) : (
//             <motion.img
//               key="image"
//               className="w-full h-[200px] object-cover rounded-t-[15px]"
//               src={image}
//               alt={name}
//               variants={imageVariants}
//               whileHover="hover"
//               onLoad={() => setImageLoaded(true)}
//               onError={() => setImageError(true)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: imageLoaded ? 1 : 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           )}
//         </AnimatePresence>

//         {/* Category Badge */}
//         <motion.div
//           className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           Popular
//         </motion.div>

//         {/* Add to Cart Button */}
//         <div className="absolute bottom-3 right-3">
//           <AnimatePresence mode="wait">
//             {!cartItems[id] ? (
//               <motion.button
//                 key="add-button"
//                 className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
//                 variants={addButtonVariants}
//                 initial="initial"
//                 whileHover="hover"
//                 whileTap="tap"
//                 onClick={handleAddToCart}
//                 title={`Add ${name} to cart`}
//               >
//                 <motion.img
//                   src={assets.add_icon_white}
//                   alt="Add to cart"
//                   className="w-5 h-5"
//                   whileHover={{ rotate: 90 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             ) : (
//               <motion.div
//                 key="counter"
//                 className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-2 shadow-xl"
//                 variants={counterVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//               >
//                 <motion.button
//                   onClick={handleRemoveFromCart}
//                   className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center"
//                   variants={buttonVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   title={`Remove one ${name}`}
//                 >
//                   <img
//                     src={assets.remove_icon_red}
//                     alt="Remove"
//                     className="w-4 h-4"
//                   />
//                 </motion.button>
                
//                 <motion.span
//                   className="font-bold text-lg min-w-[20px] text-center text-gray-800"
//                   key={cartItems[id]}
//                   initial={{ scale: 1.5 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {cartItems[id]}
//                 </motion.span>
                
//                 <motion.button
//                   onClick={handleAddToCart}
//                   className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center"
//                   variants={buttonVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   title={`Add one more ${name}`}
//                 >
//                   <img
//                     src={assets.add_icon_green}
//                     alt="Add"
//                     className="w-4 h-4"
//                   />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Hover Overlay */}
//         <motion.div
//           className="absolute inset-0 bg-black/20 opacity-0"
//           whileHover={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>

//       {/* Content Info */}
//       <motion.div 
//         className="p-5"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.1 }}
//       >
//         {/* Header with Name and Rating */}
//         <div className="flex items-center justify-between mb-3">
//           <motion.h3
//             className="text-xl font-bold text-gray-900 truncate"
//             whileHover={{ color: "#ff6b35" }}
//             transition={{ duration: 0.2 }}
//           >
//             {name}
//           </motion.h3>
          
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.2 }}
//           >
//             <img 
//               src={assets.rating_starts} 
//               alt="Rating" 
//               className="w-16" 
//             />
//           </motion.div>
//         </div>

//         {/* Description */}
//         <motion.p
//           className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {description}
//         </motion.p>

//         {/* Price and Action */}
//         <div className="flex items-center justify-between">
//           <motion.span
//             className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
//             variants={priceVariants}
//             whileHover="hover"
//           >
//             ${price}
//           </motion.span>

//           {/* Quick Add Button for Mobile */}
//           <motion.button
//             className="lg:hidden px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-md"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleAddToCart}
//           >
//             Add +
//           </motion.button>
//         </div>

//         {/* Dietary Tags */}
//         <motion.div
//           className="flex gap-2 mt-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
//             Fresh
//           </span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//             Daily Made
//           </span>
//         </motion.div>
//       </motion.div>

//       {/* Pulse Effect when Added to Cart */}
//       <AnimatePresence>
//         {cartItems[id] && (
//           <motion.div
//             className="absolute inset-0 border-2 border-orange-500 rounded-[15px] pointer-events-none"
//             initial={{ opacity: 0, scale: 1 }}
//             animate={{ opacity: 1, scale: 1.02 }}
//             exit={{ opacity: 0, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           />
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }





// import React, { useContext, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";

// export default function FoodItem({ id, name, image, price, description }) {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageError, setImageError] = useState(false);

//   // Animation variants
//   const cardVariants = {
//     initial: { 
//       scale: 1,
//       y: 0,
//       boxShadow: "0 0 10px rgba(0,0,0,0.15)"
//     },
//     hover: {
//       scale: 1.03,
//       y: -8,
//       boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     },
//     tap: {
//       scale: 0.98,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const imageVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.1,
//       transition: {
//         duration: 0.2
//       }
//     },
//     tap: {
//       scale: 0.9,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const counterVariants = {
//     initial: { 
//       scale: 0.8,
//       opacity: 0 
//     },
//     animate: { 
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     },
//     exit: { 
//       scale: 0.8,
//       opacity: 0,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   const addButtonVariants = {
//     initial: { 
//       scale: 1,
//       rotate: 0 
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 180,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     },
//     tap: {
//       scale: 0.8,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); // Prevent event bubbling
//     addToCart(id);
//     if (navigator.vibrate) {
//       navigator.vibrate(50);
//     }
//   };

//   const handleRemoveFromCart = (e) => {
//     e.stopPropagation(); // Prevent event bubbling
//     removeFromCart(id);
//     if (navigator.vibrate) {
//       navigator.vibrate(30);
//     }
//   };

//   // Prevent card click when clicking buttons
//   const handleButtonClick = (e, callback) => {
//     e.stopPropagation();
//     callback();
//   };

//   // Loading Skeleton for Image
//   const ImageSkeleton = () => (
//     <div className="w-full h-[200px] bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-[15px] animate-pulse overflow-hidden">
//       <motion.div
//         className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
//         animate={{
//           x: [-100, 100],
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//     </div>
//   );

//   // Fallback Image Component
//   const FallbackImage = () => (
//     <div className="w-full h-[200px] bg-gradient-to-br from-orange-100 to-red-100 rounded-t-[15px] flex items-center justify-center">
//       <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//       </svg>
//     </div>
//   );

//   return (
//     <motion.div
//       className="w-full mx-auto rounded-[15px] bg-white overflow-hidden cursor-pointer select-none"
//       variants={cardVariants}
//       initial="initial"
//       whileHover="hover"
//       whileTap="tap"
//       layout
//     >
//       {/* Image Container */}
//       <div className="relative overflow-hidden">
//         {/* Image Loading States */}
//         {!imageLoaded && !imageError && <ImageSkeleton />}
        
//         <AnimatePresence mode="wait">
//           {imageError ? (
//             <motion.div
//               key="fallback"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <FallbackImage />
//             </motion.div>
//           ) : (
//             <motion.img
//               key="image"
//               className="w-full h-[200px] object-cover rounded-t-[15px]"
//               src={image}
//               alt={name}
//               variants={imageVariants}
//               whileHover="hover"
//               onLoad={() => setImageLoaded(true)}
//               onError={() => setImageError(true)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: imageLoaded ? 1 : 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           )}
//         </AnimatePresence>

//         {/* Category Badge */}
//         <motion.div
//           className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm pointer-events-none"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           Popular
//         </motion.div>

//         {/* Add to Cart Button - SEPARATE from hover overlay */}
//         <div className="absolute bottom-3 right-3 z-20"> {/* Increased z-index */}
//           <AnimatePresence mode="wait">
//             {!cartItems[id] ? (
//               <motion.button
//                 key="add-button"
//                 className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
//                 variants={addButtonVariants}
//                 initial="initial"
//                 whileHover="hover"
//                 whileTap="tap"
//                 onClick={handleAddToCart}
//                 title={`Add ${name} to cart`}
//               >
//                 <motion.img
//                   src={assets.add_icon_white}
//                   alt="Add to cart"
//                   className="w-5 h-5"
//                   whileHover={{ rotate: 90 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             ) : (
//               <motion.div
//                 key="counter"
//                 className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-2 shadow-xl border-2 border-white"
//                 variants={counterVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//               >
//                 <motion.button
//                   onClick={handleRemoveFromCart}
//                   className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
//                   variants={buttonVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   title={`Remove one ${name}`}
//                 >
//                   <img
//                     src={assets.remove_icon_red}
//                     alt="Remove"
//                     className="w-4 h-4"
//                   />
//                 </motion.button>
                
//                 <motion.span
//                   className="font-bold text-lg min-w-[20px] text-center text-gray-800"
//                   key={cartItems[id]}
//                   initial={{ scale: 1.5 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {cartItems[id]}
//                 </motion.span>
                
//                 <motion.button
//                   onClick={handleAddToCart}
//                   className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors"
//                   variants={buttonVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   title={`Add one more ${name}`}
//                 >
//                   <img
//                     src={assets.add_icon_green}
//                     alt="Add"
//                     className="w-4 h-4"
//                   />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Hover Overlay - BEHIND the buttons */}
//         <motion.div
//           className="absolute inset-0 bg-black/20 opacity-0 pointer-events-none" // Disable pointer events
//           whileHover={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>

//       {/* Content Info */}
//       <motion.div 
//         className="p-5"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.1 }}
//       >
//         {/* Header with Name and Rating */}
//         <div className="flex items-center justify-between mb-3">
//           <motion.h3
//             className="text-xl font-bold text-gray-900 truncate"
//             whileHover={{ color: "#ff6b35" }}
//             transition={{ duration: 0.2 }}
//           >
//             {name}
//           </motion.h3>
          
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.2 }}
//             className="pointer-events-none" // Disable pointer events on rating
//           >
//             <img 
//               src={assets.rating_starts} 
//               alt="Rating" 
//               className="w-16" 
//             />
//           </motion.div>
//         </div>

//         {/* Description */}
//         <motion.p
//           className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {description}
//         </motion.p>

//         {/* Price and Action */}
//         <div className="flex items-center justify-between">
//           <motion.span
//             className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           >
//             ${price}
//           </motion.span>

//           {/* Quick Add Button for Mobile */}
//           <motion.button
//             className="lg:hidden px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleAddToCart}
//           >
//             Add +
//           </motion.button>
//         </div>

//         {/* Dietary Tags */}
//         <motion.div
//           className="flex gap-2 mt-3 pointer-events-none" // Disable pointer events
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
//             Fresh
//           </span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//             Daily Made
//           </span>
//         </motion.div>
//       </motion.div>

//       {/* Pulse Effect when Added to Cart */}
//       <AnimatePresence>
//         {cartItems[id] && (
//           <motion.div
//             className="absolute inset-0 border-2 border-orange-500 rounded-[15px] pointer-events-none" // Disable pointer events
//             initial={{ opacity: 0, scale: 1 }}
//             animate={{ opacity: 1, scale: 1.02 }}
//             exit={{ opacity: 0, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           />
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }