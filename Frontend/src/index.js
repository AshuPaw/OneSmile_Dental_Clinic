import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from "./routing";
import Cookie from 'js-cookie'


// const handleBeforeUnload = () => {
//   Cookie.remove('userlogin');
//   Cookie.remove('usersetid');
//   Cookie.remove('loginbook');
  
//   Cookie.remove("Doctorlog");
//   Cookie.remove("Adminlog");
// };
// window.addEventListener("beforeunload", handleBeforeUnload);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}>
      {/* Your application components */}
    </RouterProvider>
  
);
