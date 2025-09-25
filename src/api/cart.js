

//add to cart
import axios from "axios";


let baseUrl = `https://food-delivery-backend-amber-seven.vercel.app`

let token = localStorage.getItem('token')
console.log(token);

export async function CartItems  () {
  try {
    
  const response= await axios.get(`${baseUrl}/api/cart/getCart`,
    {
    headers: {
         token: token,
      }
    }
  );
  console.log("Response Data:", response.data);
   return response.data;

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}


export async function addCartItems  (itemid) {
  try {
    
  const response= await axios.post(`${baseUrl}/api/cart/addToCart/${itemid}`,{},
    {
    headers: {
       token: token,
      }
    }
  );
  console.log("Response Data:", response.data);
   return response.data;

  } catch (err) {
    console.error(" Error aad to cart:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}


export async function removeCartItems  (itemid) {
  try {
    
  const response= await axios.post(`${baseUrl}/api/cart/removeFromCart/${itemid}`,{},
    {
    headers: {
       token: token,
      }
    }
  );
  console.log("Response Data:", response.data);
   return response.data;

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}




