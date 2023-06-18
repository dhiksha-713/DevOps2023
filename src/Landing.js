// import Home from "./components/Home";
// import About from "./components/AboutUs";
// import { useState } from "react";
// import Products from "./components/Products";
// import Branches from "./components/Branches";
// import Gallery from "./components/Gallery";
// import Developers from "./components/Developers";
// import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

// const defaultContainer = () => {
//     const [loginForm, setLoginForm] = useState("login");

//   const toggleForm = (formName) => {
//     console.log(formName);
//     setLoginForm(formName);
//   };
//   <>
//     <Navbar />
//     <Route path="/" element={<Home />} exact></Route>
//     <Route path="/about" element={<About />} exact></Route>
//     <Route path="/products" element={<Products />} exact></Route>
//     <Route path="/branch" element={<Branches />} exact></Route>
//     <Route path="/gallery" element={<Gallery />} exact></Route>
//     <Route path="/developers" element={<Developers />} exact></Route>
//     <Route
//       path="/login"
//       element={
//         loginForm === "login" ? (
//           <Login onFormSwitch={toggleForm}></Login>
//         ) : (
//           <Signup onFormSwitch={toggleForm}></Signup>
//         )
//       }
//       exact
//     ></Route>
//     <Footer />
//   </>;
// };

// const loginContainer = () => {
//   <Route
//     path="/login"
//     element={
//       loginForm === "login" ? (
//         <Login onFormSwitch={toggleForm}></Login>
//       ) : (
//         <Signup onFormSwitch={toggleForm}></Signup>
//       )
//     }
//     exact
//   ></Route>;
// };

// function Landing() {
//   return(
//     <>
//     <Router>
//       <Routes>
//         <Route>
//           <Route exact path="/(login)" component={LoginContainer}/>
//     <Route component={DefaultContainer}/>
//         </Route>
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default Landing;

// const [flag, setFlag] = useState(true);
//   const handleFlag = () => {
//     setFlag(false);
//   };



//   return (
//     <>
//       <Router>
//         <Navbar flag={flag} handleFlag={handleFlag} />
//         <Routes>
//           <Route path="/" element={<Home />} exact></Route>
//           <Route path="/about" element={<About />} exact></Route>
//           <Route path="/products" element={<Products />} exact></Route>
//           <Route path="/branch" element={<Branches />} exact></Route>
//           <Route path="/gallery" element={<Gallery />} exact></Route>
//           <Route path="/developers" element={<Developers />} exact></Route>
//           <Route
//             path="/login"
//             element={
//               (loginForm === "login" )? (
//                 <Login onFormSwitch={toggleForm}></Login>
//               ) : (
//                 <Signup onFormSwitch={toggleForm}></Signup>
//               )
//             }
//             exact
//           ></Route>
//         </Routes>
//         <Footer flag={flag} handleFlag={handleFlag} />
//       </Router>
//     </>
//   );
