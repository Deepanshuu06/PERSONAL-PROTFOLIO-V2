// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Eyes from "./components/Eyes";
import Error from "./components/ErrorPage";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

// Layout with Navbar + nested routes




const RootLayout = () => (
  <div className="bg-black min-h-screen text-white">
    <Navbar />
    <Toaster />
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
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "/about", element: <About/> },

      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
