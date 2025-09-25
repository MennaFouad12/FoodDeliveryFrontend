// import React, { useState, useContext } from "react";
// import Modal from "react-modal";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { AuthContext } from "../../context/authContext";
// import { loginApi, registerApi } from "../../api/auth";

// Modal.setAppElement("#root");

// // Validation Schemas
// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().min(6, "Too Short!").required("Required"),
// });

// const SignupSchema = Yup.object().shape({
//   name: Yup.string().min(2, "Too Short!").required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().min(6, "Too Short!").required("Required"),
// });

// export default function LoginPopup({ isOpen, onClose }) {
//   const [isSignup, setIsSignup] = useState(false);
//   const { login: authLogin } = useContext(AuthContext); // ✅ rename to avoid clash

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-auto mt-20 relative"
//       overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center text-[#49557e]">
//         {isSignup ? "Create Account" : "Welcome Back"}
//       </h2>

      

//       <Formik
//   initialValues={{ name: "", email: "", password: "" }}
//   validationSchema={isSignup ? SignupSchema : LoginSchema}
//   onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
//     setSubmitting(true);

//     try {
//       let payload = { ...values };

//       if (!isSignup) {
//         // 🟢 Remove "name" when logging in
//         delete payload.name;
//         const data = await loginApi(payload);
//         authLogin(data);
//       } else {
//         const data = await registerApi(payload);
//         authLogin(data);
//       }

//       resetForm();
//       onClose();
//     } catch (err) {
//       setErrors({ email: "Something went wrong. Try again." });
//     }

//     setSubmitting(false);
//   }}
// >
//         {({ isSubmitting }) => (
//           <Form>
//             {isSignup && (
//               <div className="mb-4">
//                 <Field
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[tomato]"
//                 />
//                 <ErrorMessage
//                   name="name"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>
//             )}

//             <div className="mb-4">
//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[tomato]"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <div className="mb-4">
//               <Field
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[tomato]"
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-[tomato] text-white px-4 py-3 rounded-lg w-full font-semibold transition hover:bg-[#e44d26]"
//             >
//               {isSubmitting
//                 ? isSignup
//                   ? "Creating..."
//                   : "Signing in..."
//                 : isSignup
//                 ? "Sign Up"
//                 : "Sign In"}
//             </button>
//           </Form>
//         )}
//       </Formik>

//       <p className="mt-5 text-center text-gray-600 text-sm">
//         {isSignup ? (
//           <>
//             Already have an account?{" "}
//             <span
//               className="text-[tomato] cursor-pointer font-medium"
//               onClick={() => setIsSignup(false)}
//             >
//               Sign In
//             </span>
//           </>
//         ) : (
//           <>
//             Don’t have an account?{" "}
//             <span
//               className="text-[tomato] cursor-pointer font-medium"
//               onClick={() => setIsSignup(true)}
//             >
//               Sign Up
//             </span>
//           </>
//         )}
//       </p>

//       <button
//         className="mt-5 text-gray-500 w-full text-sm hover:text-[tomato]"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </Modal>
//   );
// }













import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/authContext";
import { loginApi, registerApi } from "../../api/auth";

Modal.setAppElement("#root");

// Validation Schemas
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

// Animation variants
const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2
    }
  }
};

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

const loadingSpinVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export default function LoginPopup({ isOpen, onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const { login: authLogin } = useContext(AuthContext);

  const handleFormSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          className="outline-none"
          overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          closeTimeoutMS={300}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-auto relative border border-gray-100"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[tomato] to-orange-500 bg-clip-text text-transparent">
                {isSignup ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isSignup ? "Join us today!" : "Sign in to continue"}
              </p>
            </motion.div>

            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={isSignup ? SignupSchema : LoginSchema}
              onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
                setSubmitting(true);
                
                try {
                  let payload = { ...values };
                  
                  if (!isSignup) {
                    delete payload.name;
                    const data = await loginApi(payload);
                    authLogin(data);
                  } else {
                    const data = await registerApi(payload);
                    authLogin(data);
                  }
                  
                  resetForm();
                  onClose();
                } catch (err) {
                  setErrors({ email: "Something went wrong. Try again." });
                }
                
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <motion.div
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {isSignup && (
                      <motion.div variants={fieldVariants} className="mb-6">
                        <div className="relative">
                          <Field
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className={`w-full border-2 p-4 rounded-xl focus:outline-none transition-all duration-200 ${
                              errors.name && touched.name 
                                ? "border-red-300 focus:border-red-500" 
                                : "border-gray-200 focus:border-[tomato] focus:ring-2 focus:ring-orange-100"
                            }`}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </div>
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-sm mt-2 flex items-center"
                        />
                      </motion.div>
                    )}

                    <motion.div variants={fieldVariants} className="mb-6">
                      <div className="relative">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email address"
                          className={`w-full border-2 p-4 rounded-xl focus:outline-none transition-all duration-200 ${
                            errors.email && touched.email 
                              ? "border-red-300 focus:border-red-500" 
                              : "border-gray-200 focus:border-[tomato] focus:ring-2 focus:ring-orange-100"
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-2 flex items-center"
                      />
                    </motion.div>

                    <motion.div variants={fieldVariants} className="mb-8">
                      <div className="relative">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className={`w-full border-2 p-4 rounded-xl focus:outline-none transition-all duration-200 ${
                            errors.password && touched.password 
                              ? "border-red-300 focus:border-red-500" 
                              : "border-gray-200 focus:border-[tomato] focus:ring-2 focus:ring-orange-100"
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-2 flex items-center"
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 99, 71, 0.4)" } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center ${
                        isSubmitting 
                          ? "bg-gray-400 cursor-not-allowed" 
                          : "bg-gradient-to-r from-[tomato] to-orange-500 hover:from-orange-500 hover:to-[tomato]"
                      }`}
                    >
                      {isSubmitting ? (
                        <motion.div
                          variants={loadingSpinVariants}
                          animate="animate"
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <span>{isSignup ? "Create Account" : "Sign In"}</span>
                      )}
                    </motion.button>
                  </motion.div>
                </Form>
              )}
            </Formik>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-600">
                {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                <motion.span
                  onClick={handleFormSwitch}
                  className="text-[tomato] cursor-pointer font-semibold hover:text-orange-600 transition-colors duration-200 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSignup ? "Sign In" : "Sign Up"}
                </motion.span>
              </p>
            </motion.div>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 pt-6 border-t border-gray-100 text-center"
            >
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05, color: "#ff6347" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-[tomato] transition-colors duration-200 text-sm font-medium"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}