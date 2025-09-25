





// import React, { useContext } from "react";
// import SimpleBar from "simplebar-react";
// import "simplebar-react/dist/simplebar.min.css";
// import { StoreContext } from "../../context/StoreContext";

// export default function ExploreMenu() {
//   const { categories, category, setCategory } = useContext(StoreContext);

//   return (
//     <div className="px-6 py-8" id="menu">
//       <h2 className="text-2xl font-medium text-[#262626] mb-4">
//         explore our menu
//       </h2>

//       <p className="text-gray-500 max-w-[60%] mb-6">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
//         aperiam distinctio consequuntur consequatur molestias aliquam
//         perspiciatis iste. Eius, repellendus.
//       </p>

//       <SimpleBar autoHide={false} className="overflow-x-auto">
//         <div className="flex gap-8 items-center text-center py-2">
//           {categories.map((item, index) => (
//             <div
//               key={index}
//               onClick={() =>
//                 setCategory((prev) =>
//                   prev === item.name ? "All" : item.name
//                 )
//               }
//               className="flex flex-col items-center cursor-pointer shrink-0"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className={`w-[7.5vw] min-w-[80px] rounded-full transition duration-300 ${
//                   category === item.name
//                     ? "border-4 border-[tomato] p-1"
//                     : ""
//                 }`}
//               />
//               <p className="mt-2 text-[max(1.4vw,16px)] text-[#747474]">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </SimpleBar>

//       <hr className="mt-6 h-[2px] border-none bg-gray-200" />
//     </div>
//   );
// }





// import React, { useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SimpleBar from "simplebar-react";
// import "simplebar-react/dist/simplebar.min.css";
// import { StoreContext } from "../../context/StoreContext";

// export default function ExploreMenu() {
//   const { categories, category, setCategory } = useContext(StoreContext);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const categoryCardVariants = {
//     initial: { 
//       scale: 1,
//       y: 0
//     },
//     hover: {
//       scale: 1.05,
//       y: -5,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     },
//     tap: {
//       scale: 0.95,
//       transition: {
//         duration: 0.1
//       }
//     }
//   };

//   const imageVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.1,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };

//   const activeIndicatorVariants = {
//     initial: { scale: 0, opacity: 0 },
//     active: { 
//       scale: 1, 
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className="px-6 py-12 bg-gradient-to-br from-gray-50 to-white"
//       id="menu"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <motion.div className="text-center mb-12" variants={textVariants}>
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Explore Our <span className="text-orange-500">Delicious</span> Menu
//           </motion.h2>
          
//           <motion.p 
//             className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Discover a world of flavors with our carefully crafted dishes. 
//             From traditional favorites to innovative creations, each item is made with passion and the finest ingredients.
//           </motion.p>
//         </motion.div>

//         {/* Categories Scroll */}
//         <SimpleBar autoHide={false} className="overflow-x-auto pb-4">
//           <motion.div 
//             className="flex justify-center gap-8 items-center text-center py-4 px-2"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {categories.map((item, index) => (
//               <motion.div
//                 key={index}
//                 onClick={() => setCategory((prev) => prev === item.name ? "All" : item.name)}
//                 className="flex flex-col  items-center cursor-pointer shrink-0 relative group"
//                 variants={itemVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 {/* Category Card */}
//                 <motion.div
//                   className={`relative rounded-2xl p-3 ${
//                     category === item.name 
//                       ? "bg-gradient-to-br from-orange-50 to-red-50 shadow-lg" 
//                       : "bg-white shadow-md hover:shadow-xl"
//                   }`}
//                   variants={categoryCardVariants}
//                 >
//                   {/* Active Indicator */}
//                   <AnimatePresence>
//                     {category === item.name && (
//                       <motion.div
//                         className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
//                         variants={activeIndicatorVariants}
//                         initial="initial"
//                         animate="active"
//                         exit="initial"
//                       >
//                         <motion.svg
//                           className="w-3 h-3 text-white"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           transition={{ delay: 0.2, duration: 0.3 }}
//                         >
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </motion.svg>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   {/* Image Container */}
//                   <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-3">
//                     <motion.img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                       variants={imageVariants}
//                       whileHover="hover"
//                     />
                    
//                     {/* Image Overlay */}
//                     <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
//                   </div>

//                   {/* Category Name */}
//                   <motion.p 
//                     className={`font-semibold text-sm transition-colors duration-300 ${
//                       category === item.name 
//                         ? "text-orange-600" 
//                         : "text-gray-700 group-hover:text-gray-900"
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {item.name}
//                   </motion.p>

//                   {/* Hover Effect Line */}
//                   <motion.div 
//                     className={`h-1 mt-2 rounded-full ${
//                       category === item.name 
//                         ? "bg-gradient-to-r from-orange-500 to-red-500 w-full"
//                         : "bg-gray-300 group-hover:bg-orange-400 w-0 group-hover:w-full"
//                     }`}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </SimpleBar>

//         {/* Animated Separator */}
//         <motion.div 
//           className="relative mt-8"
//           initial={{ opacity: 0, width: 0 }}
//           whileInView={{ opacity: 1, width: "100%" }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
          
//           {/* Floating dots */}
//           <motion.div
//             className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-500 rounded-full"
//             animate={{
//               x: [-10, 10, -10],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <motion.div
//             className="absolute top-1/2 left-3/4 w-2 h-2 bg-red-500 rounded-full"
//             animate={{
//               x: [10, -10, 10],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1
//             }}
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }


import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { StoreContext } from "../../context/StoreContext";

export default function ExploreMenu() {
  const { categories, category, setCategory, loading, error } = useContext(StoreContext);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const categoryCardVariants = {
    initial: { 
      scale: 1,
      y: 0
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const activeIndicatorVariants = {
    initial: { scale: 0, opacity: 0 },
    active: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
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
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const errorVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <motion.div
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex gap-8 items-center text-center py-4 px-2"
    >
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="relative rounded-2xl p-3 bg-gray-200 shadow-md">
            {/* Skeleton Image */}
            <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-3 bg-gray-300">
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
            
            {/* Skeleton Text */}
            <div className="h-4 bg-gray-300 rounded-full mb-2 w-16 mx-auto">
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
            
            {/* Skeleton Line */}
            <div className="h-1 mt-2 rounded-full bg-gray-300 w-full" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Error Component
  const ErrorMessage = () => (
    <motion.div
      variants={errorVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center py-12 px-4 text-center"
    >
      <motion.div
        className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </motion.div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Failed to Load Categories
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md">
        We're having trouble loading the menu categories. Please check your connection and try again.
      </p>
      
      <motion.button
        className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)" }}
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 px-4  text-center"
    >
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Categories Available
      </h3>
      
      <p className="text-gray-600">
        There are no menu categories to display at the moment.
      </p>
    </motion.div>
  );

  return (
    <motion.div 
      className="px-6 py-12 bg-gradient-to-br from-gray-50 to-white"
      id="menu"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={textVariants}>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Our <span className="text-orange-500">Delicious</span> Menu
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover a world of flavors with our carefully crafted dishes. 
            From traditional favorites to innovative creations, each item is made with passion and the finest ingredients.
          </motion.p>
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {loading ? (
            // Loading State
            <motion.div key="loading">
              <LoadingSkeleton />
            </motion.div>
          ) : error ? (
            // Error State
            <motion.div key="error">
              <ErrorMessage />
            </motion.div>
          ) : categories.length === 0 ? (
            // Empty State
            <motion.div key="empty">
              <EmptyState />
            </motion.div>
          ) : (
            // Success State - Categories List
            <motion.div key="success">
              <SimpleBar autoHide={false} className="overflow-x-auto pb-4">
                <motion.div 
                  className="flex justify-center gap-8 items-center text-center py-4 px-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {categories.map((item, index) => (
                    <motion.div
                      key={index}
                      onClick={() => setCategory((prev) => prev === item.name ? "All" : item.name)}
                      className="flex flex-col items-center cursor-pointer shrink-0 relative group"
                      variants={itemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {/* Category Card */}
                      <motion.div
                        className={`relative rounded-2xl p-3 ${
                          category === item.name 
                            ? "bg-gradient-to-br from-orange-50 to-red-50 shadow-lg" 
                            : "bg-white shadow-md hover:shadow-xl"
                        }`}
                        variants={categoryCardVariants}
                      >
                        {/* Active Indicator */}
                        <AnimatePresence>
                          {category === item.name && (
                            <motion.div
                              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                              variants={activeIndicatorVariants}
                              initial="initial"
                              animate="active"
                              exit="initial"
                            >
                              <motion.svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                              >
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </motion.svg>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-3">
                          <motion.img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            variants={imageVariants}
                            whileHover="hover"
                          />
                          
                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                        </div>

                        {/* Category Name */}
                        <motion.p 
                          className={`font-semibold text-sm transition-colors duration-300 ${
                            category === item.name 
                              ? "text-orange-600" 
                              : "text-gray-700 group-hover:text-gray-900"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.p>

                        {/* Hover Effect Line */}
                        <motion.div 
                          className={`h-1 mt-2 rounded-full ${
                            category === item.name 
                              ? "bg-gradient-to-r from-orange-500 to-red-500 w-full"
                              : "bg-gray-300 group-hover:bg-orange-400 w-0 group-hover:w-full"
                          }`}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </SimpleBar>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Separator (only show when not in error/empty state) */}
        {!loading && !error && categories.length > 0 && (
          <motion.div 
            className="relative mt-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
            
            {/* Floating dots */}
            <motion.div
              className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-500 rounded-full"
              animate={{
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-3/4 w-2 h-2 bg-red-500 rounded-full"
              animate={{
                x: [10, -10, 10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}