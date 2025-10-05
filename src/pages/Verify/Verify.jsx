// import React from 'react'

// export default function Verify() {
//   return (
//     <div>Verify</div>
//   )
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {success === "true" ? (
        <h2>✅ Payment Successful for Order {orderId}</h2>
      ) : (
        <h2>❌ Payment Failed or Canceled</h2>
      )}
    </div>
  );
}
