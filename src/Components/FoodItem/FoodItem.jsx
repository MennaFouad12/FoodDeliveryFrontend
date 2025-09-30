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



// import React, { useContext } from "react";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";

// export default function FoodItem({ id, name, image, price, description }) {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


//   return (
//     <div className="w-full mx-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.15)] transition duration-300">
//       {/* Image Container */}
//       <div className="relative">
//         <img
//           className="w-full h-[200px] rounded-t-[15px]"
//           src={image}
//           alt="food-item-img"
//         />

//         {/* Add / Counter */}
//         {!cartItems[id] ? (
//           <img
//             className="absolute bottom-[15px] right-[15px] w-[35px] cursor-pointer rounded-full"
//             src={assets.add_icon_white}
//             alt="add"
//             onClick={() => addToCart(id)}
//           />
//         ) : (
//           <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] rounded-full bg-white p-[6px]">
//             <img
//               onClick={() => removeFromCart(id)}
//               src={assets.remove_icon_red}
//               alt="remove"
//               className="w-[30px] cursor-pointer"
//             />
//             <p>{cartItems[id]}</p>
//             <img
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_green}
//               alt="add"
//               className="w-[30px] cursor-pointer"
//             />
//           </div>
//         )}
//       </div>

//       {/* Info */}
//       <div className="p-5">
//         <div className="flex items-center justify-between mb-[10px]">
//           <p className="text-[20px] font-medium">{name}</p>
//           <img src={assets.rating_starts} alt="rating" className="w-[70px]" />
//         </div>
//         <p className="text-[12px] text-[#676767]">{description}</p>
//         <p className="text-[22px] font-medium text-[tomato] my-[10px]">
//           ${price}
//         </p>
//       </div>
//     </div>
//   );
// }




import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import toast from "react-hot-toast";

export default function FoodItem({ id, name, image, price, description }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full mx-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.15)]  transition duration-300">
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
            onClick={() => {
              addToCart(id);
              toast.success(`${name} added to cart`);
            }}
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] rounded-full bg-white p-[6px]">
            <img
              onClick={() => {
                removeFromCart(id);
                toast.error(`${name} removed from cart`);
              }}
              src={assets.remove_icon_red}
              alt="remove"
              className="w-[30px] cursor-pointer"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                addToCart(id);
                toast.success(`${name} added to cart`);
              }}
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







