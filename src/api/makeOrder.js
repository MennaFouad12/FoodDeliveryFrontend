import axios from "axios";
let baseUrl = `https://food-delivery-backend-amber-seven.vercel.app`
export const makeOrder = async (orderData, token) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/order/placeOrder`,
      orderData,
      {
        headers: {
         token: token,
      }
      }
    );
    return res.data;
  } catch (err) {
    console.error("Error making order:", err);
    throw err;
  }
};
