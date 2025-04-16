import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen">
      <div className='relative w-full h-full bg-cover bg-center '>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-15">
          {[1, 2].map((_, index) => (
            <div key={index} className="w-52 h-52 bg-white rounded-full flex items-center justify-center">
              <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
                <div
                  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                  className="absolute top-1/2 left-1/2 w-full h-10"
                >
                  <div className="w-10 h-10 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
