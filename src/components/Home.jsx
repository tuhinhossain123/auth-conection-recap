

const Home = () => {
   
    return (
        <div>
            <h2>This is name:</h2>
        </div>
    );
};

export default Home;

// import PropTypes from "prop-types";
// import { createContext, useEffect, useState } from "react";
// import auth from "./../firebase.config";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// export const AuthContext = createContext(null);

// const AuthProviders = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const singInUser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log(
//         "observing current user inside useEffect of authProvider",
//         currentUser
//       );
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   const authInfo = { user, createUser, singInUser };
//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProviders;

// AuthProviders.propTypes = {
//   children: PropTypes.node,
// };
