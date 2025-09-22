import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import Gamepad from "../assets/images/gamepad.png";
import Jacket from "../assets/images/jacket.png";
import GucciBag from '../assets/images/gucci-bag.png'
import Cooler from '../assets/images/cooler.png'
import DeleteIcon from "../assets/icons/delete.svg";
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";
import Btns from '../components/button'



const products = [
  {
    id: 1,
    img: GucciBag,
    title: "Breed Dry Dog Food",
    newprice: 100,
    rating: 3,
    ratingCount: 35,
  },
  {
    id: 2,
    img: Cooler,
    title: "CANON EOS DSLR Camera",
    newprice: 360,
    rating: 4,
    ratingCount: 95,
  },
  {
    id: 3,
    img: Gamepad,
    title: "ASUS FHD Gaming Laptop",
    newprice: 700,
    rating: 5,
    ratingCount: 325,
  },
  {
    id: 4,
    img: Jacket,
    title: "Curology Product Set ",
    newprice: 500,
    rating: 4,
    ratingCount: 145,
  }
];

const Wishlist = () => {


   const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };


  const moveAllToBag = () => {
  // Bag uchun alohida localStorage yaratamiz
  const bag = JSON.parse(localStorage.getItem("bag")) || [];

  // Wishlistdagi hamma narsani qo‘shamiz
  const updatedBag = [...bag, ...wishlist];
  localStorage.setItem("bag", JSON.stringify(updatedBag));

  // Wishlistni bo‘shatamiz
  setWishlist([]);
  localStorage.setItem("wishlist", JSON.stringify([]));
};

  return (
    <div className="container mx-auto">
      <div className="h-[100%] mt-[80px] mb-[80px] ">
        <div className="flex items-center justify-between">
          <p>Wishlist ({wishlist.length})</p>
          <Button onClick={moveAllToBag}>Move All To Bag</Button>
        </div>

        <div className="flex flex-wrap items-center mt-[60px] gap-[30px] ">
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty</p>
          ) : (
            wishlist.map((product) => (
              <div key={product.id} className="product__item w-[270px] h-[350px]">
                <div className="relative h-[250px] rounded bg-[#F5F5F5] overflow-hidden">
                  <img
                    className="py-[35px] px-[40px]"
                    src={product.img}
                    alt={product.title}
                  />
                  
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 bg-[#fff] rounded-[50%] cursor-pointer"
                  >
                    
                    <img src={DeleteIcon} alt="deleteicon" />
                    
                  </button>
                  
                   <Btns/>
                </div>

                <h3 className="font-medium text-base leading-6 font-poppins mt-4 text-[#000]">
                  {product.title}
                </h3>

                <p className="font-poppins font-medium text-base text-[#DB4444] mt-2">
                  ${product.newprice}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
