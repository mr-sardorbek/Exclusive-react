import React, { useEffect, useState } from "react";
import Semicolone from "../assets/icons/semicolone.svg";
import rightarrow from "../assets/icons/icons_arrow-right.svg";
import leftarrow from "../assets/icons/icons_arrow-left.svg";
import { Button } from "antd";

const Sections = ({ title, tag, showTimer = true, showButtons = true }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let targetDate = localStorage.getItem("flashSaleEnd");
    let refreshCount = localStorage.getItem("refreshCount");

    if (!refreshCount) {
      refreshCount = 0;
    } else {
      refreshCount = parseInt(refreshCount, 10);
    }

    refreshCount += 1;
    localStorage.setItem("refreshCount", refreshCount);

    if (refreshCount <= 6) {
  const newTarget = new Date();
  newTarget.setDate(newTarget.getDate() + 3);      
  newTarget.setHours(newTarget.getHours() + 23);   
  newTarget.setMinutes(newTarget.getMinutes() + 19); 
  newTarget.setSeconds(newTarget.getSeconds() + 56); 

  localStorage.setItem("flashSaleEnd", newTarget.getTime());
  targetDate = newTarget.getTime();
} else {
  if (!targetDate) {
    const newTarget = new Date();
    newTarget.setDate(newTarget.getDate() + 3);
    newTarget.setHours(newTarget.getHours() + 23);
    newTarget.setMinutes(newTarget.getMinutes() + 19);
    newTarget.setSeconds(newTarget.getSeconds() + 56);

    localStorage.setItem("flashSaleEnd", newTarget.getTime());
    targetDate = newTarget.getTime();
  } else {
    targetDate = parseInt(targetDate, 10);
  }
}

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        localStorage.removeItem("flashSaleEnd");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between mb-[40px]">
      <div className="flex justify-between w-[600px] h-[108px] ">
        <div>
          <p className="flex items-center h-[40px] border-l-[20px] rounded pl-4 font-semibold text-base font-poppins text-[#DB4444]">
            {title}
          </p>
          <p className="font-semibold text-4xl mt-6 Inter">
            {tag}
          </p>
        </div>

        {showTimer && (
          <div className="flex items-center gap-[17px] mt-[53px]">
            <div>
              <p className="font-medium text-xs font-poppins mb-1">Days</p>
              <span className="font-bold text-[32px] Inter">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
            </div>
            <img src={Semicolone} alt="semicolone" />

            <div>
              <p className="font-medium text-xs font-poppins mb-1">Hours</p>
              <span className="font-bold text-[32px] Inter">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
            </div>
            <img src={Semicolone} alt="semicolone" />

            <div>
              <p className="font-medium text-xs font-poppins mb-1">Minutes</p>
              <span className="font-bold text-[32px] Inter">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
            </div>
            <img src={Semicolone} alt="semicolone" />

            <div>
              <p className="font-medium text-xs font-poppins mb-1">Seconds</p>
              <span className="font-bold text-[32px] Inter">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        )}
      </div>

      {showButtons ? (
        <div className="flex items-center gap-2 mt-[57px]">
          <button className="flex items-center justify-center cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5]
            transition-all duration-300 hover:bg-[#e7e2e2] hover:scale-110 hover:shadow-md">
            <img src={leftarrow} alt="leftarrow" />
          </button>
          <button className="flex items-center justify-center cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5]
            transition-all duration-300 hover:bg-[#e7e2e2] hover:scale-110 hover:shadow-md">
            <img src={rightarrow} alt="rightarrow" />
          </button>
        </div>
      ) : (
        <div className="mt-[57px]">
          <Button type="primary">View All Products</Button>
          </div>
      )}
    </div>
  );
};

export default Sections;

