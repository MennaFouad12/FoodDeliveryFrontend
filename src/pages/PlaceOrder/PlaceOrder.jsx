// import React, { useContext } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../context/StoreContext';
// export default function PlaceOrder() {
//   const {getTotalCartAmount} = useContext(StoreContext);
//   return (
//   <form className="place-order">
//   <div className="place-order-left">
//     <p className="title">Delivery Information</p>

//     <div className="multi-fields">
//       <input type="text" placeholder="First name" />
//       <input type="text" placeholder="Last name" />
//     </div>

//     <input type="email" placeholder="Email address" />
//     <input type="text" placeholder="Street" />

//     <div className="multi-fields">
//       <input type="text" placeholder="City" />
//       <input type="text" placeholder="State" />
//     </div>

//     <div className="multi-fields">
//       <input type="text" placeholder="Zip code" />
//       <input type="text" placeholder="Country" />
//     </div>

//     <input type="text" placeholder="Phone" />
//   </div>

//   <div className="place-order-right">
//     <div className="flex flex-col gap-5 flex-1">
//           <h2 className="text-xl font-semibold">Cart Total</h2>
//           <div>
//             <div className="flex justify-between text-gray-600">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between text-gray-600">
//               <p>Delivery Fee</p>
//               <p>${2}</p>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between text-gray-800 font-medium">
//               <p>Total</p>
//               <p>${getTotalCartAmount()+2}</p>
//             </div>
//           </div>
//           <button   className="w-[clamp(200px,15vw,300px)] bg-tomato py-3 rounded text-white bg-[#e44d26] font-medium transition ">
//             Proceed to payment
//           </button>
//         </div>
//   </div>
// </form>

//   )
// }



import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex flex-col md:flex-row items-start justify-between gap-12 mt-24">
      {/* Left Section */}
      <div className="w-full md:max-w-[500px]">
        <p className="text-2xl md:text-3xl font-semibold mb-12">Delivery Information</p>

        {/* First + Last Name */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2 border border-gray-300 rounded outline-[tomato] mb-4"
        />

        {/* Street */}
        <input
          type="text"
          placeholder="Street"
          className="w-full p-2 border border-gray-300 rounded outline-[tomato] mb-4"
        />

        {/* City + State */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
          />
        </div>

        {/* Zip + Country */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Zip code"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
          />
        </div>

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:max-w-[500px] flex flex-col gap-5 flex-1">
        <h2 className="text-xl font-semibold">Cart Total</h2>
        <div>
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between text-gray-800 font-medium">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?2:getTotalCartAmount() + 2}</p>
          </div>
        </div>
        <button className="w-full sm:w-[clamp(200px,15vw,300px)] bg-[#e44d26] py-3 rounded mt-10 text-white font-medium transition hover:bg-[#d13f1c]">
          Proceed to payment
        </button>
      </div>
    </form>
  );
}

