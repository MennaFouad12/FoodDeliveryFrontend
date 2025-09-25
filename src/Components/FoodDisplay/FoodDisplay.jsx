// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'
// export default function FoodDisplay({category }) {
//   const {food_list}=useContext(StoreContext)
//   return (
//     <div className='food-display' id='food-display'>
// <h2>Top dishes near you</h2>
// <div className="food-display-list">
// {
//   food_list.map((item, index) => {
//     if(item.category===category || category==="All"){
//     return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}   ></FoodItem>



      
//     }
  
//   })
// }
// </div>

//     </div>
//   )
// }




// import React, { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";

// export default function FoodDisplay({ category }) {
//   const { food_list } = useContext(StoreContext);

//   return (
//     <div className="mt-[30px]" id="food-display">
//       <h2 className="text-[max(2vw,24px)] font-semibold">Top dishes near you</h2>

//       <div
//         className="
//           grid 
//           mt-[30px] 
//           gap-[30px] 
//           [row-gap:50px] 
//           [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]
//         "
//       >
//         {food_list.map((item, index) => {
//           if (item.category === category || category === "All") {
//             return (
//               <FoodItem
//                 key={index}
//                 id={item._id}
//                 name={item.name}
//                 image={item.image}
//                 price={item.price}
//                 description={item.description}
//               />
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }



// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";
// export default function FoodDisplay() {
//   const { food_list, category } = useContext(StoreContext);

//   return (
//     <div className="mt-[30px]" id="food-display">
//       <h2 className="text-[max(2vw,24px)] font-semibold">Top dishes near you</h2>
//       <div className="grid mt-[30px] gap-[30px] [row-gap:50px] [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
//         {food_list.map((item, index) => {
//           if (item.category === category || category === "All") {
//             return (
//               <FoodItem
//                 key={index}
//                 id={item._id}
//                 name={item.name}
//                 image={item.image}
//                 price={item.price}
//                 description={item.description}
//               />
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }















import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay() {
  const { food_list, category, loading, error } = useContext(StoreContext);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const loadingVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const errorVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const emptyVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Filter food items based on category
  const filteredFoodList = food_list.filter(item => 
    category === "All" || item.category === category
  );

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <motion.div
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-[30px]"
    >
      <div className="h-8 bg-gray-200 rounded-full w-64 mb-8 animate-pulse"></div>
      <div className="grid gap-[30px] [row-gap:50px] [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Image Skeleton */}
            <div className="relative h-48 bg-gray-300 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  x: [-100, 100],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
            </div>
            
            {/* Content Skeleton */}
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded-full mb-2 w-3/4">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{
                    x: [-50, 50],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
              </div>
              <div className="h-3 bg-gray-200 rounded-full mb-3 w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Error Component
  const ErrorMessage = () => (
    <motion.div
      variants={errorVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center py-16 px-4 text-center bg-red-50 rounded-2xl mt-8"
    >
      <motion.div
        className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </motion.div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Failed to Load Menu Items
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md">
        We're having trouble loading the menu items. Please check your connection and try again.
      </p>
      
      <motion.button
        className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg"
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)" 
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.reload()}
      >
        Try Again
      </motion.button>
    </motion.div>
  );

  // Empty State Component
  const EmptyState = () => (
    <motion.div
      variants={emptyVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gray-50 rounded-2xl mt-8"
    >
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Items Found
      </h3>
      
      <p className="text-gray-600 mb-4">
        {category === "All" 
          ? "There are no food items available at the moment." 
          : `No items found in the ${category} category.`
        }
      </p>
      
      <p className="text-sm text-gray-500">
        Try selecting a different category or check back later.
      </p>
    </motion.div>
  );

  // Category Indicator Component
  const CategoryIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 mb-4 text-sm text-gray-600"
    >
      <span>Showing:</span>
      <motion.span
        key={category}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full font-medium"
      >
        {category}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400"
      >
        ({filteredFoodList.length} items)
      </motion.span>
    </motion.div>
  );

  return (
    <motion.div 
      className="mt-[30px] px-6"
      id="food-display"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          // Loading State
          <motion.div key="loading">
            <LoadingSkeleton />
          </motion.div>
        ) : error ? (
          // Error State
          <motion.div key="error">
            <motion.h2 
              variants={titleVariants}
              className="text-[max(2vw,24px)] font-bold text-gray-900 mb-2"
            >
              Top dishes near you
            </motion.h2>
            <ErrorMessage />
          </motion.div>
        ) : (
          // Success State
          <motion.div key="success">
            <motion.h2 
              variants={titleVariants}
              className="text-[max(2vw,24px)] font-bold text-gray-900 mb-2"
            >
              Top dishes near you
            </motion.h2>
            
            {/* Category Indicator */}
            {food_list.length > 0 && <CategoryIndicator />}
            
            {/* Food Items Grid */}
            <AnimatePresence mode="wait">
              {filteredFoodList.length === 0 ? (
                <EmptyState />
              ) : (
                <motion.div 
                  className="grid mt-[30px] gap-[30px] [row-gap:50px] [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key="food-grid"
                >
                  {filteredFoodList.map((item, index) => (
                    <motion.div
                      key={item._id}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                      layout
                    >
                      <FoodItem
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Category Reset */}
      {!loading && !error && category !== "All" && filteredFoodList.length > 0 && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-xl font-semibold flex items-center gap-2"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // You'll need to add setCategory to your context
            // setCategory("All");
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Show All
        </motion.button>
      )}
    </motion.div>
  );
}
