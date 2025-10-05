// import React from 'react'

// export default function Verify() {
//   return (
//     <div>Verify</div>
//   )
// }


// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// export default function Verify() {
//   const [searchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");

//   useEffect(() => {
//     if (success === "true") {
//       // TODO: call backend to confirm payment success
//       console.log("✅ Payment successful for order:", orderId);
//     } else {
//       console.log("❌ Payment failed or canceled");
//     }
//   }, [success, orderId]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {success === "true" ? (
//         <h2>✅ Payment Successful for Order {orderId}</h2>
//       ) : (
//         <h2>❌ Payment Failed or Canceled</h2>
//       )}
//     </div>
//   );
// }


// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// export default function Verify() {
//   const [searchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");

//   useEffect(() => {
//     if (success === "true") {
//       // TODO: call backend to confirm payment success
//       console.log("✅ Payment successful for order:", orderId);
//     } else {
//       console.log("❌ Payment failed or canceled");
//     }
//   }, [success, orderId]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="max-w-md w-full animate-fade-in">
//         {success === "true" ? (
//           <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center shadow-lg border border-blue-200">
//             <div className="text-6xl mb-6">✅</div>
//             <h2 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h2>
//             <div className="bg-white rounded-lg px-6 py-3 mb-6 shadow-sm inline-block">
//               <p className="text-lg font-semibold text-gray-800">Order ID: {orderId}</p>
//             </div>
//             <p className="text-gray-600 leading-relaxed">
//               Thank you for your purchase. Your order is being processed and you'll receive a confirmation email shortly.
//             </p>
//           </div>
//         ) : (
//           <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center shadow-lg border border-red-200">
//             <div className="text-6xl mb-6">❌</div>
//             <h2 className="text-3xl font-bold text-red-700 mb-6">Payment Failed</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Your payment was not completed. Please try again or contact our support team if the issue persists.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Verify() {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (success === "true") {
      // TODO: call backend to confirm payment success
      console.log("✅ Payment successful for order:", orderId);
    } else {
      console.log("❌ Payment failed or canceled");
    }
  }, [success, orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
      <div className="max-w-md w-full animate-fade-in">
        {success === "true" ? (
          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-center shadow-xl border border-red-300 transform transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6">🍅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 mb-6 border border-white/30 inline-block">
              <p className="text-lg font-semibold text-white">Order ID: {orderId}</p>
            </div>
            <p className="text-red-50 leading-relaxed font-medium">
              Thank you for your purchase! Your order is being processed and you'll receive a confirmation shortly.
            </p>
            <div className="mt-6">
              <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors duration-200">
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-center shadow-xl border border-red-400 transform transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6">❌</div>
            <h2 className="text-3xl font-bold text-white mb-6">Payment Failed</h2>
            <p className="text-red-100 leading-relaxed font-medium mb-6">
              We couldn't process your payment. Please try again or contact our support team if the issue persists.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors duration-200">
                Try Again
              </button>
              <button className="bg-transparent border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}