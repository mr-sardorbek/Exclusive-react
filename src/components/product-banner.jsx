import React, { useEffect, useState } from "react";
import { message } from "antd";
import JBL from "../assets/images/jbl.png";

const ProductBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let savedDate = localStorage.getItem("discountEndDate");

    if (!savedDate) {
      const newTarget = new Date();
      newTarget.setDate(newTarget.getDate() + 6); 
      savedDate = newTarget.getTime();
      localStorage.setItem("discountEndDate", savedDate);
    }

    const targetDate = new Date(parseInt(savedDate, 10));

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem("discountEndDate"); 
        message.info("The discount has ended, don't miss out on your discount!");
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-between w-[1170px] h-[500px] bg-[#000] mb-[71px]">
      <div className="flex flex-col absolute w-[443px] h-[362px] left-[56px] top-[69px] border ">
        <p className="font-semibold text-base leading-5 tracking-[0%] font-poppins text-[#00FF66]">
          Categories
        </p>
        <p className="font-semibold text-5xl leading-[60px] tracking-[4%] inter text-[#fafafa] mt-8">
          Enhance Your Music Experience
        </p>

        <div className="flex items-center gap-6 mt-8">
          <TimerBox value={timeLeft.hours} label="Hours" />
          <TimerBox value={timeLeft.days} label="Days" />
          <TimerBox value={timeLeft.minutes} label="Minutes" />
          <TimerBox value={timeLeft.seconds} label="Seconds" />
        </div>
        <button
          className="w-[171px] h-[56px] rounded font-medium text-base leading-6 tracking-[0%] font-poppins text-[#fafafa] bg-[#00FF66]
          mt-[40px] hover:bg-[#07d057] transition-all duration-300 cursor-pointer"
        >
          Buy Now!
        </button>
      </div>

      <div className="absolute top-[37px] right-[44px] jbl-img">
        <img src={JBL} alt="jbl" />
      </div>
    </div>
  );
};

const TimerBox = ({ value, label }) => (
  <p
    className="flex flex-col items-center justify-center w-[62px] h-[62px] rounded-[50%]
          bg-[#fafafa] font-normal text-[11px] leading-[18px] tracking-[0%] font-poppins"
  >
    <span
      className="font-semibold text-base leading-5 tracking-[0%] font-poppins"
    >
      {String(value).padStart(2, "0")}
    </span>
    {label}
  </p>
);

export default ProductBanner;
