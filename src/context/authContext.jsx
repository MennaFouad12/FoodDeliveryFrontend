

// src/context/AuthContext.jsx
// import { createContext, useEffect, useState } from "react";
// import jwtDecode from "jwt-decode";
// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // stores logged-in user
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);

//   // Load user from localStorage on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//     setLoading(false);
//   }, []);

//   // Login function


// const login = (data) => {
//   const decoded = jwtDecode(data.token); // gives { id: "...", iat, exp }
  
//   setUser({ id: decoded.id }); // you can store only what you need
//   setToken(data.token);

//   localStorage.setItem("user", JSON.stringify({ id: decoded.id }));
//   localStorage.setItem("token", data.token);
// };


//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   const contextValue = {
//     user,
//     login,
//     logout,
//     loading,
//     isAuthenticated: !!user,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;





// // src/context/AuthContext.jsx
// import { createContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";


// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // stores decoded user info
//   const [token, setToken] = useState(null); // stores raw JWT token
//   const [loading, setLoading] = useState(true);

//   // Load user + token from localStorage on mount
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");

//     if (storedToken) {
//       try {
//         const decoded = jwtDecode(storedToken); // decode token
//         setUser({ id: decoded.id, ...decoded }); // store decoded info
//         setToken(storedToken);
//       } catch (err) {
//         console.error("Invalid token:", err);
//         localStorage.removeItem("token");
//       }
//     }

//     setLoading(false);
//   }, []);

//   // Login function → called after login/signup
//   const login = (data) => {
//     if (data?.token) {
//       try {
//         const decoded = jwtDecode(data.token);

//         setUser({ id: decoded.id, ...decoded });
//         setToken(data.token);

//         localStorage.setItem("token", data.token);
//       } catch (err) {
//         console.error("Failed to decode token:", err);
//       }
//     }
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   const contextValue = {
//     user,             // decoded info (id, email, role, etc. depending on backend)
//     token,            // raw JWT
//     login,
//     logout,
//     loading,
//     isAuthenticated: !!token,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;




// src/context/AuthContext.jsx
import { createContext, useEffect, useState, useMemo } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // ✅ Lazy init from localStorage (avoids flash of null → token)
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Decode and validate token on mount
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);

        // ✅ Check expiration (if exp exists)
        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
          console.warn("Token expired, clearing...");
          localStorage.removeItem("token");
          setToken(null);
          setUser(null);
        } else {
          setUser({ id: decoded.id, ...decoded });
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
        setToken(null);
      }
    }
    setLoading(false);
  }, [token]);

  // Login function → stores token + decoded user
  const login = (data) => {
    if (data?.token) {
      try {
        const decoded = jwtDecode(data.token);
        setUser({ id: decoded.id, ...decoded });
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } catch (err) {
        console.error("Failed to decode token:", err);
      }
    }
  };

  // Logout function → clears everything
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  // ✅ useMemo prevents unnecessary re-renders in consumers
  const contextValue = useMemo(
    () => ({
      user,             // decoded user info
      token,            // raw JWT
      login,
      logout,
      loading,
      isAuthenticated: !!token,
    }),
    [user, token, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
