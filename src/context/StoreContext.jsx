

// import { createContext, useEffect, useState, useCallback, useMemo } from "react";
// import { get_food } from "../api/food";
// import { addCartItems, CartItems, removeCartItems } from "../api/cart";
// import { getcategories } from "../api/getcategories";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [foodList, setFoodList] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState("All");

//   // --- Fetch Foods ---
//   const fetchFoods = useCallback(async () => {
//     try {
//       const data = await get_food();
//       if (data?.data) {
//         setFoodList(data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching foods:", error);
//     }
//   }, []);

//   // --- Refresh Cart ---
//   const refreshCart = useCallback(async () => {
//     try {
//       const data = await CartItems();
//       if (data?.cartData) {
//         setCartItems(data.cartData);
//       }
//     } catch (error) {
//       console.error("Error refreshing cart:", error);
//     }
//   }, []);

//   // --- Initial Fetch: Foods, Cart, Categories ---
//   useEffect(() => {
//     (async () => {
//       try {
//         const [foods, cart, cats] = await Promise.all([
//           get_food(),
//           CartItems(),
//           getcategories(),
//         ]);

//         if (foods?.data) setFoodList(foods.data);
//         if (cart?.cartData) setCartItems(cart.cartData);
//         if (cats?.categories) setCategories(cats.categories);
//       } catch (error) {
//         console.error("Error fetching initial data:", error);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   // --- Add to Cart ---
//   const addToCart = useCallback(
//     async (itemId) => {
//       setCartItems((prev) => ({
//         ...prev,
//         [itemId]: (prev[itemId] || 0) + 1,
//       }));

//       try {
//         await addCartItems(itemId);
//         await refreshCart();
//       } catch (error) {
//         console.error("Error adding to cart:", error);
//       }
//     },
//     [refreshCart]
//   );

//   // --- Remove from Cart ---
//   const removeFromCart = useCallback(
//     async (itemId) => {
//       setCartItems((prev) => {
//         if (!prev[itemId]) return prev;
//         const updated = { ...prev, [itemId]: prev[itemId] - 1 };
//         if (updated[itemId] <= 0) delete updated[itemId];
//         return updated;
//       });

//       try {
//         await removeCartItems(itemId);
//         await refreshCart();
//       } catch (error) {
//         console.error("Error removing from cart:", error);
//       }
//     },
//     [refreshCart]
//   );

//   // --- Build Food Lookup Map for Fast Access ---
//   const foodMap = useMemo(() => {
//     const map = {};
//     foodList.forEach((food) => {
//       map[food._id] = food;
//     });
//     return map;
//   }, [foodList]);

//   // --- Calculate Cart Total ---
//   const getTotalCartAmount = useCallback(() => {
//     return Object.entries(cartItems).reduce((total, [id, qty]) => {
//       const item = foodMap[id];
//       return item ? total + item.price * qty : total;
//     }, 0);
//   }, [cartItems, foodMap]);

//   // --- Stable Context Value ---
//   const contextValue = useMemo(
//     () => ({
//       food_list: foodList,
//       loading,
//       cartItems,
//       categories,
//       setCategories,
//       category,
//       setCategory,
//       setCartItems,
//       addToCart,
//       removeFromCart,
//       getTotalCartAmount,
//     }),
//     [
//       foodList,
//       loading,
//       cartItems,
//       categories,
//       category,
//       addToCart,
//       removeFromCart,
//       getTotalCartAmount,
//     ]
//   );

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;





import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import { get_food } from "../api/food";
import { addCartItems, CartItems, removeCartItems } from "../api/cart";
import { getcategories } from "../api/getcategories";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");

  // --- Loading states per feature ---
  const [loadingFoods, setLoadingFoods] = useState(false);
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);

  // --- Error states per feature ---
  const [foodError, setFoodError] = useState(null);
  const [cartError, setCartError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);

  // --- Fetch Foods ---
  const fetchFoods = useCallback(async () => {
    setLoadingFoods(true);
    setFoodError(null);
    try {
      const data = await get_food();
      if (data?.data) setFoodList(data.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setFoodError("Failed to load foods.");
    } finally {
      setLoadingFoods(false);
    }
  }, []);

  // --- Refresh Cart ---
  const refreshCart = useCallback(async () => {
    setLoadingCart(true);
    setCartError(null);
    try {
      const data = await CartItems();
      if (data?.cartData) setCartItems(data.cartData);
    } catch (error) {
      console.error("Error refreshing cart:", error);
      setCartError("Failed to load cart.");
    } finally {
      setLoadingCart(false);
    }
  }, []);

  // --- Fetch Categories ---
  const fetchCategories = useCallback(async () => {
    setLoadingCategories(true);
    setCategoryError(null);
    try {
      const data = await getcategories();
      if (data?.categories) setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategoryError("Failed to load categories.");
    } finally {
      setLoadingCategories(false);
    }
  }, []);

  // --- Initial Fetch with cleanup ---
  useEffect(() => {
    let isMounted = true;

    const initializeData = async () => {
      if (!isMounted) return;
      
      try {
        await Promise.all([
          fetchFoods(),
          refreshCart(),
          fetchCategories()
        ]);
      } catch (error) {
        console.error("Error initializing data:", error);
      }
    };

    initializeData();

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array since callbacks are stable

  // --- Add to Cart with proper rollback ---
  const addToCart = useCallback(
    async (itemId) => {
      // Save previous state for potential rollback
      const previousCartItems = { ...cartItems };
      
      // Optimistic update
      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));

      try {
        await addCartItems(itemId);
        // Optional: refresh cart for server-side validation
        // await refreshCart();
      } catch (error) {
        console.error("Error adding to cart:", error);
        // Revert optimistic update on failure
        setCartItems(previousCartItems);
        setCartError("Failed to add item to cart.");
        
        // Clear error after some time
        setTimeout(() => setCartError(null), 3000);
      }
    },
    [cartItems] // Removed refreshCart dependency if not used
  );

  // --- Remove from Cart with proper rollback ---
  const removeFromCart = useCallback(
    async (itemId) => {
      // Save previous state for potential rollback
      const previousCartItems = { ...cartItems };
      
      // Optimistic update
      setCartItems((prev) => {
        if (!prev[itemId]) return prev;
        const updated = { ...prev, [itemId]: prev[itemId] - 1 };
        if (updated[itemId] <= 0) delete updated[itemId];
        return updated;
      });

      try {
        await removeCartItems(itemId);
        // Optional: refresh cart for server-side validation
        // await refreshCart();
      } catch (error) {
        console.error("Error removing from cart:", error);
        // Revert optimistic update on failure
        setCartItems(previousCartItems);
        setCartError("Failed to remove item from cart.");
        
        // Clear error after some time
        setTimeout(() => setCartError(null), 3000);
      }
    },
    [cartItems] // Removed refreshCart dependency if not used
  );

  // --- Build Food Lookup Map ---
  const foodMap = useMemo(() => {
    const map = {};
    foodList.forEach((food) => {
      map[food._id] = food;
    });
    return map;
  }, [foodList]);

  // --- Calculate Cart Total with proper dependencies ---
  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const item = foodMap[id];
      return item ? total + item.price * qty : total;
    }, 0);
  }, [cartItems, foodMap]);

  // --- Clear specific errors ---
  const clearFoodError = useCallback(() => setFoodError(null), []);
  const clearCartError = useCallback(() => setCartError(null), []);
  const clearCategoryError = useCallback(() => setCategoryError(null), []);

  // --- Retry failed operations ---
  const retryFetchFoods = useCallback(async () => {
    await fetchFoods();
  }, [fetchFoods]);

  const retryRefreshCart = useCallback(async () => {
    await refreshCart();
  }, [refreshCart]);

  const retryFetchCategories = useCallback(async () => {
    await fetchCategories();
  }, [fetchCategories]);

  // --- Stable Context Value ---
  const contextValue = useMemo(
    () => ({
      // Data
      food_list: foodList,
      cartItems,
      categories,
      category,
      setCategory,
      setCategories,

      // Actions
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      refreshCart,
      fetchFoods,
      fetchCategories,

      // Error handling utilities
      clearFoodError,
      clearCartError,
      clearCategoryError,
      retryFetchFoods,
      retryRefreshCart,
      retryFetchCategories,

      // Loading states
      loadingFoods,
      loadingCart,
      loadingCategories,

      // Error states
      foodError,
      cartError,
      categoryError,
    }),
    [
      foodList,
      cartItems,
      categories,
      category,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      refreshCart,
      fetchFoods,
      fetchCategories,
      clearFoodError,
      clearCartError,
      clearCategoryError,
      retryFetchFoods,
      retryRefreshCart,
      retryFetchCategories,
      loadingFoods,
      loadingCart,
      loadingCategories,
      foodError,
      cartError,
      categoryError,
    ]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;