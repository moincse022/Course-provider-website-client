import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
// import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routers/router";
import AuthProvider from "./Config/ultilities/provider/AuthProvider";

const queryClient = new QueryClient();

Aos.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <div>
        <RouterProvider router={router} />
       <Toaster/>
      </div>
    </QueryClientProvider>
  </AuthProvider>
);
