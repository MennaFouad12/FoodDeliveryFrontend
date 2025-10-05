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



// import React, { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";

// export default function PlaceOrder() {
//   const { getTotalCartAmount } = useContext(StoreContext);

//   return (
//     <form className="flex flex-col md:flex-row items-start justify-between gap-12 mt-24">
//       {/* Left Section */}
//       <div className="w-full md:max-w-[500px]">
//         <p className="text-2xl md:text-3xl font-semibold mb-12">Delivery Information</p>

    

//         {/* Street */}
//         <input
//           type="text"
//           placeholder="Street"
//           className="w-full p-2 border border-gray-300 rounded outline-[tomato] mb-4"
//         />

//         {/* City + State */}
//         <div className="flex gap-3 mb-4">
//           <input
//             type="text"
//             placeholder="City"
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//           <input
//             type="text"
//             placeholder="State"
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//         </div>

//         {/* Zip + Country */}
//         <div className="flex gap-3 mb-4">
//           <input
//             type="text"
//             placeholder="Zip code"
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//           <input
//             type="text"
//             placeholder="Country"
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//         </div>

//         {/* Phone */}
//         <input
//           type="text"
//           placeholder="Phone"
//           className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:max-w-[500px] flex flex-col gap-5 flex-1">
//         <h2 className="text-xl font-semibold">Cart Total</h2>
//         <div>
//           <div className="flex justify-between text-gray-600">
//             <p>Subtotal</p>
//             <p>${getTotalCartAmount()}</p>
//           </div>
//           <hr className="my-2 border-gray-300" />
//           <div className="flex justify-between text-gray-600">
//             <p>Delivery Fee</p>
//             <p>${getTotalCartAmount()===0?0:2}</p>
//           </div>
//           <hr className="my-2 border-gray-300" />
//           <div className="flex justify-between text-gray-800 font-medium">
//             <p>Total</p>
//             <p>${getTotalCartAmount()===0?2:getTotalCartAmount() + 2}</p>
//           </div>
//         </div>
//         <button className="w-full sm:w-[clamp(200px,15vw,300px)] bg-[#e44d26] py-3 rounded mt-10 text-white font-medium transition hover:bg-[#d13f1c]">
//           Proceed to payment
//         </button>
//       </div>
//     </form>
//   );
// }




// import React, { useContext } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";

// export default function PlaceOrder() {
//   const { getTotalCartAmount, cartItems } = useContext(StoreContext);
//   console.log("cartItems", cartItems);

//   // ✅ Formik Setup
//   const formik = useFormik({
//     initialValues: {
//       street: "",
//       city: "",
//       state: "",
//       zipCode: "",
//       country: "",
//       phone: "",
//     },
//     validationSchema: Yup.object({
//       street: Yup.string().required("Street is required"),
//       city: Yup.string().required("City is required"),
//       state: Yup.string(),
//       zipCode: Yup.string(),
//       country: Yup.string().required("Country is required"),
//       phone: Yup.string().required("Phone is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const token = localStorage.getItem("token"); // user token from login

//         const body = {
//           items: cartItems, // assumed to be array of {name, price, quantity}
//           amount:
//             getTotalCartAmount() === 0 ? 2 : getTotalCartAmount() + 2,
//           address: values,
//         };

//         const res = await axios.post(
//           "http://localhost:5000/api/order/place", // ✅ API endpoint
//           body,
//           {
//             headers: {
//               token, // backend authenticate middleware will use this
//             },
//           }
//         );

//         if (res.data.success) {
//           // Redirect to stripe checkout
//           window.location.href = res.data.url;
//         }
//       } catch (error) {
//         console.error("Error placing order:", error);
//         alert("Order failed. Please try again.");
//       }
//     },
//   });

//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="flex flex-col md:flex-row items-start justify-between gap-12 mt-24"
//     >
//       {/* Left Section */}
//       <div className="w-full md:max-w-[500px]">
//         <p className="text-2xl md:text-3xl font-semibold mb-12">
//           Delivery Information
//         </p>

//         {/* Street */}
//         <input
//           type="text"
//           name="street"
//           placeholder="Street"
//           onChange={formik.handleChange}
//           value={formik.values.street}
//           className="w-full p-2 border border-gray-300 rounded outline-[tomato] mb-2"
//         />
//         {formik.touched.street && formik.errors.street && (
//           <p className="text-red-500 text-sm">{formik.errors.street}</p>
//         )}

//         {/* City + State */}
//         <div className="flex gap-3 mb-2">
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             onChange={formik.handleChange}
//             value={formik.values.city}
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             onChange={formik.handleChange}
//             value={formik.values.state}
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//         </div>
//         {formik.touched.city && formik.errors.city && (
//           <p className="text-red-500 text-sm">{formik.errors.city}</p>
//         )}

//         {/* Zip + Country */}
//         <div className="flex gap-3 mb-2">
//           <input
//             type="text"
//             name="zipCode"
//             placeholder="Zip code"
//             onChange={formik.handleChange}
//             value={formik.values.zipCode}
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             onChange={formik.handleChange}
//             value={formik.values.country}
//             className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
//           />
//         </div>
//         {formik.touched.country && formik.errors.country && (
//           <p className="text-red-500 text-sm">{formik.errors.country}</p>
//         )}

//         {/* Phone */}
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           onChange={formik.handleChange}
//           value={formik.values.phone}
//           className="w-full p-2 border border-gray-300 rounded outline-[tomato] mb-2"
//         />
//         {formik.touched.phone && formik.errors.phone && (
//           <p className="text-red-500 text-sm">{formik.errors.phone}</p>
//         )}
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:max-w-[500px] flex flex-col gap-5 flex-1">
//         <h2 className="text-xl font-semibold">Cart Total</h2>
//         <div>
//           <div className="flex justify-between text-gray-600">
//             <p>Subtotal</p>
//             <p>${getTotalCartAmount()}</p>
//           </div>
//           <hr className="my-2 border-gray-300" />
//           <div className="flex justify-between text-gray-600">
//             <p>Delivery Fee</p>
//             <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//           </div>
//           <hr className="my-2 border-gray-300" />
//           <div className="flex justify-between text-gray-800 font-medium">
//             <p>Total</p>
//             <p>
//               ${getTotalCartAmount() === 0 ? 2 : getTotalCartAmount() + 2}
//             </p>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full sm:w-[clamp(200px,15vw,300px)] bg-[#e44d26] py-3 rounded mt-10 text-white font-medium transition hover:bg-[#d13f1c]"
//         >
//           Proceed to payment
//         </button>
//       </div>
//     </form>
//   );
// }








import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { StoreContext } from "../../context/StoreContext";
import { makeOrder } from "../../api/makeOrder";
import toast from "react-hot-toast";
import { StoreContext } from "../../context/StoreContext";

export default function PlaceOrder() {
  const { getTotalCartAmount, cartItems, foodList } =
    useContext(StoreContext);
    const token = localStorage.getItem("token");

  // ✅ Convert cart items object → array of {name, price, quantity}
  // const buildOrderItems = () => {
  //   return Object.keys(cartItems)
  //     .filter((id) => cartItems[id] > 0)
  //     .map((id) => {
  //       const food = foodList.find((item) => item._id === id);
  //       return {
  //         name: food?.name,
  //         price: food?.price,
  //         quantity: cartItems[id],
  //       };
  //     });
  // };
const buildOrderItems = () => {
  if (!foodList) return []; // ✅ لو foodList لسه مش موجودة

  return Object.keys(cartItems)
    .filter((id) => cartItems[id] > 0)
    .map((id) => {
      const food = foodList?.find((item) => item._id === id);

      return {
        name: food?.name || "Unknown",
        price: food?.price || 0,
        quantity: cartItems[id],
      };
    });
};

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      phone: "",
    },
    validationSchema: Yup.object({
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zip: Yup.string().required("Zip is required"),
      country: Yup.string().required("Country is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone must be digits only")
        .required("Phone is required"),
    }),
    // onSubmit: async (values, { resetForm }) => {
    //   try {
    //     const orderItems = buildOrderItems();

    //     const orderData = {
    //       items: orderItems,
    //       amount:
    //         getTotalCartAmount() === 0 ? 2 : getTotalCartAmount() + 2, // total + delivery
    //       address: values,
    //     };

    //     const res = await makeOrder(orderData, token);
    //     // alert("Order placed successfully ✅");
    //     toast.success(`Order placed successfully ✅`)
    //     resetForm();
    //     console.log("Order Response:", res);
    //   } catch (error) {
    //     console.error(error);
    //     // alert("Failed to place order ❌");
    //     toast.error(`Failed to place order ❌`);

    //   }
    // },

    onSubmit: async (values, { resetForm }) => {
  try {
    const orderItems = buildOrderItems();

    const orderData = {
      items: orderItems,
      amount:
        getTotalCartAmount() === 0 ? 2 : getTotalCartAmount() + 2, // total + delivery
      address: values,
    };

    const res = await makeOrder(orderData, token);
    console.log("Order Response:", res);

    if (res?.success && res?.url) {
      toast.success("Order placed successfully ✅ Redirecting to payment...");
      // ✅ Redirect to Stripe checkout page
      setTimeout(() => {
        window.location.href = res.url;
      }, 1500); // delay 1.5s for user to see toast
    } else {
      toast.error("Something went wrong while creating order ❌");
    }

    resetForm();
  } catch (error) {
    console.error("Order Error:", error);
    toast.error("Failed to place order ❌");
  }
}

  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col md:flex-row items-start justify-between gap-12 mt-24"
    >
      {/* Left Section */}
      <div className="w-full md:max-w-[500px]">
        <p className="text-2xl md:text-3xl font-semibold mb-12">
          Delivery Information
        </p>

        <input
          type="text"
          name="street"
          placeholder="Street"
          className="w-full p-2 border border-gray-300 rounded outline-[tomato] mb-4"
          value={formik.values.street}
          onChange={formik.handleChange}
        />
        {formik.touched.street && formik.errors.street && (
          <p className="text-red-500 text-sm">{formik.errors.street}</p>
        )}

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
            value={formik.values.state}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            name="zip"
            placeholder="Zip code"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
            value={formik.values.zip}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
            value={formik.values.country}
            onChange={formik.handleChange}
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full p-2 border border-gray-300 rounded outline-[tomato]"
          value={formik.values.phone}
          onChange={formik.handleChange}
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
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between text-gray-800 font-medium">
            <p>Total</p>
            <p>
              $
              {getTotalCartAmount() === 0
                ? 2
                : getTotalCartAmount() + 2}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full sm:w-[clamp(200px,15vw,300px)] bg-[#e44d26] py-3 rounded mt-10 text-white font-medium transition hover:bg-[#d13f1c]"
        >
          Proceed to payment
        </button>
      </div>
    </form>
  );
}
