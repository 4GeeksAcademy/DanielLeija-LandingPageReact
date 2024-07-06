//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./components/Layout/Layout.jsx"; 


//import your own components


//render your react application
createRoot(document.querySelector("#app")).render(<Layout/>)

