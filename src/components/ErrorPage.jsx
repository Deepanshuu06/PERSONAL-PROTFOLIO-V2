import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen  bg-black text-white flex flex-col items-center justify-center px-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2622/2622615.png"
        alt="Under Construction"
        className="w-40 h-40 mb-6"
      />
      <h1 className="lg:text-3xl font-bold mb-2 ">Page Under Construction</h1>
      <p className="mb-6 text-center max-w-md">
        We're working hard to bring you something awesome. This page is still
        under construction!
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
