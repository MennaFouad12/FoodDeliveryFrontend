//add to cart
import axios from "axios";


let baseUrl = `https://food-delivery-backend-amber-seven.vercel.app`

// let token = localStorage.getItem('userToken')

export async function get_food  () {
  try {
    
  const response= await axios.get(`${baseUrl}/api/food/list`);
  console.log("Response Data:", response.data);
   return response.data;

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}

export async function get_food_withCategory(categoryName) {
  try {
    
  const response= await axios.get(`${baseUrl}/api/food/category/${categoryName}`);
  console.log("Response Data:", response.data);
   return response.data;

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}