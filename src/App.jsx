import React, { useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Components
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Eyes from "./components/Eyes";
import Error from "./components/ErrorPage";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

const RootLayout = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.075,
      multiplier: 0.8,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div 
      data-scroll-container 
      ref={scrollRef} 
      className="bg-black min-h-screen text-white flex flex-col"
    >
      <Toaster />
      <Navbar />
      
      {/* Centered content container */}
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="w-full max-w-[1400px] md:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

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
      { path: "/about", element: <About /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;