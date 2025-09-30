



// import React from "react";

// export default function Header() {
//   return (
//     <div
//       className="relative mx-auto mt-[30px] h-[34vw] bg-[url('/header_img.png')] bg-contain"
//     >
//       <div className="absolute bottom-[10%] left-[6vw] flex max-w-[50%] flex-col gap-[1.5vw]">
//         <h2 className="text-white font-medium text-[max(4.5vw,22px)]">
//           order your favorite food here
//         </h2>
//         <p className="text-white text-[1.3vw]">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
//           aperiam distinctio consequuntur consequatur molestias aliquam
//           perspiciatis iste. Eius, repellendus.
//         </p>
//         <button className="w-fit rounded-full border-none bg-white px-[2.3vw] py-[1vw] text-[max(1vw,13px)] text-[#747474] cursor-pointer">
//           View Menu
//         </button>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.1
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative mx-auto mb-[60px] mt-[30px] h-[100vw] md:h-[40vw]  overflow-hidden rounded-2xl">
      {/* Background Image with Animation */}
      <motion.div
        className="absolute inset-0 bg-[url('/header_img.png')] bg-cover bg-center"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      
      {/* Content Container */}
      <motion.div
        className="absolute bottom-[10%] left-[6vw] flex max-w-[60%] flex-col gap-[1.5vw]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h2
          className="text-white font-bold text-[max(4.5vw,22px)] leading-tight drop-shadow-lg"
          variants={itemVariants}
        >
          Order Your Favorite <span className="text-orange-400">Food</span> Here
        </motion.h2>
        
        {/* Description */}
        <motion.p
          className="text-white/90 text-[3vw] md:text-[1.3vw] leading-relaxed drop-shadow-md"
          variants={itemVariants}
        >
          Discover delicious meals crafted with passion. From traditional favorites 
          to modern creations, we bring exceptional flavors to your table.
        </motion.p>
        
        {/* Animated Button */}
        <motion.button
          className="w-fit rounded-full border-none bg-gradient-to-r from-orange-500 to-red-500 px-[2.3vw] py-[1vw] text-[max(1vw,13px)] text-white font-semibold cursor-pointer relative overflow-hidden group"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          {/* Button Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          View Menu
        </motion.button>
      </motion.div>

      {/* Floating Elements for Visual Interest */}
      <motion.div
        className="absolute top-10 right-10 w-6 h-6 bg-orange-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-1/4 w-4 h-4 bg-white rounded-full"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
}