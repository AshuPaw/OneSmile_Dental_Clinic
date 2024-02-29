import { Outlet } from "react-router-dom";
import Header1 from "./Header1";
import Content from "./Content";
import Footer from "./Footer"; 
import Dheader from "../doctor_components/Dheader";
import Aheader from "../admin_components/Aheader";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "js-cookie";  
import { useEffect } from "react";
function App() {


  var g = window.sessionStorage.getItem("abc");
  console.log(g);

  let headerComponent;
  if (g === "1" || g === null) {
    headerComponent = <Header1 />;
  } else if (g === "2") {
    headerComponent = <Dheader />;
  } else if (g === "3") {
    headerComponent = <Aheader />;
  } else {
    headerComponent = null; // Handle default case if needed
  }

  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    theme="light"
    bodyClassName="toastBody"
    
    />
      {headerComponent}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
