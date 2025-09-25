

import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import { get_food } from "../api/food";
import { addCartItems, CartItems, removeCartItems } from "../api/cart";
import { getcategories } from "../api/getcategories";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  // --- Fetch Foods ---
  const fetchFoods = useCallback(async () => {
    try {
      const data = await get_food();
      if (data?.data) {
        setFoodList(data.data);
      }
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  }, []);

  // --- Refresh Cart ---
  const refreshCart = useCallback(async () => {
    try {
      const data = await CartItems();
      if (data?.cartData) {
        setCartItems(data.cartData);
      }
    } catch (error) {
      console.error("Error refreshing cart:", error);
    }
  }, []);

  // --- Initial Fetch: Foods, Cart, Categories ---
  useEffect(() => {
    (async () => {
      try {
        const [foods, cart, cats] = await Promise.all([
          get_food(),
          CartItems(),
          getcategories(),
        ]);

        if (foods?.data) setFoodList(foods.data);
        if (cart?.cartData) setCartItems(cart.cartData);
        if (cats?.categories) setCategories(cats.categories);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // --- Add to Cart ---
  const addToCart = useCallback(
    async (itemId) => {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));

      try {
        await addCartItems(itemId);
        await refreshCart();
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    },
    [refreshCart]
  );

  // --- Remove from Cart ---
  const removeFromCart = useCallback(
    async (itemId) => {
      setCartItems((prev) => {
        if (!prev[itemId]) return prev;
        const updated = { ...prev, [itemId]: prev[itemId] - 1 };
        if (updated[itemId] <= 0) delete updated[itemId];
        return updated;
      });

      try {
        await removeCartItems(itemId);
        await refreshCart();
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    },
    [refreshCart]
  );

  // --- Build Food Lookup Map for Fast Access ---
  const foodMap = useMemo(() => {
    const map = {};
    foodList.forEach((food) => {
      map[food._id] = food;
    });
    return map;
  }, [foodList]);

  // --- Calculate Cart Total ---
  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const item = foodMap[id];
      return item ? total + item.price * qty : total;
    }, 0);
  }, [cartItems, foodMap]);

  // --- Stable Context Value ---
  const contextValue = useMemo(
    () => ({
      food_list: foodList,
      loading,
      cartItems,
      categories,
      setCategories,
      category,
      setCategory,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
    }),
    [
      foodList,
      loading,
      cartItems,
      categories,
      category,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
    ]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
