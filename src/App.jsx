// App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Eyes from "./components/Eyes";
import Error from "./components/ErrorPage";
import Contact from "./components/Contact";


// Layout with Navbar + nested routes
const RootLayout = () => (
  <div className="bg-black min-h-screen text-white">
    <Navbar />
    <Outlet />
  </div>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/eye", element: <Eyes /> },
      { path: "/contact", element: <Contact/> },
      { path: "/eye", element: <Eyes /> },
      { path: "*", element: <Error/> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
