import React, { useState, useEffect } from "react";
import Button from './button'
import Coat from '../assets/images/coat.png'
import GucciBag from '../assets/images/gucci-bag.png'
import Cooler from '../assets/images/cooler.png'
import Bookself from '../assets/images/bookself.png'
import EyeIcon from "../assets/icons/eye-icon.svg";
import FullStar from "../assets/icons/full-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import HalfFilledStar from "../assets/icons/star-half-filled.svg";


const products = [
  {
    id: "sell-1",
    title: "The north coat",
    newprice: 260,
    oldprice: 360,
    rating: 5,
    ratingCount: 65,
    img: Coat,
  },
  {
    id: "sell-2",
    title: "Gucci duffle bag",
    newprice: 960,
    oldprice: 1160,
    rating: 4.5,
    ratingCount: 65,
    img: GucciBag,
  },
  {
    id: "sell-3",
    title: "RGB liquid CPU Cooler",
    newprice: 160,
    oldprice: 170,
    rating: 4.5,
    ratingCount: 65,
    img: Cooler,
  },
  {
    id: "sell-4",
    title: "Small BookSelf",
    newprice: 360,
    oldprice: 400,
    rating: 5,
    ratingCount: 65,
    img: Bookself,
  },
];


const SellingProduct = () => {

   const [wishlist, setWishlist] = useState([]);
    
  
    const [likedProducts, setLikedProducts] = useState([]);
  
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(saved);
      setLikedProducts(saved.map(item => item.id)); 
    }, []);
  
    const toggleWishlist = (product) => {
      let updatedWishlist;
      if (wishlist.find((item) => item.id === product.id)) {
        updatedWishlist = wishlist.filter((item) => item.id !== product.id);
        setLikedProducts(prev => prev.filter(id => id !== product.id));
      } else {
        updatedWishlist = [...wishlist, product];
        setLikedProducts(prev => [...prev, product.id]);
      }
  
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };


    const [addedItems, setAddedItems] = useState([]); 
    
    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setAddedItems(savedCart.map((item) => item.id));
    }, []);
    
    // ADD TO CART 
    const addToCart = (product) => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = savedCart.find((item) => item.id === product.id);
    
      let updatedCart;
      if (existing) {
        updatedCart = savedCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...savedCart, { ...product, quantity: 1 }];
      }
    
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    
      if (!addedItems.includes(product.id)) {
        setAddedItems((prev) => [...prev, product.id]);
      }
    
        window.dispatchEvent(new Event("cart-updated"));
    };
  
  return (
     <div className="mt-[60px] mb-[140px]">
      <div className="flex items-center gap-[30px] w-max ">
       {products.map((product) => {
          const isLiked = likedProducts.includes(product.id);
          return (
        <div
          key={product.id}
          className="product__item w-[270px] h-[350px] "
        >
          <div className="relative h-[250px] rounded bg-[#F5F5F5] overflow-hidden">
            <img
              className="py-[35px] px-[40px]"
              src={product.img}
              alt={product.title}
            />
            <button
                  onClick={() => toggleWishlist(product)}
                  className={`wishlist__btn absolute top-3 right-3 bg-[#fff] rounded-full cursor-pointer p-2 ${isLiked ? "animate-ping-once" : ""}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                      stroke={isLiked ? "red" : "black"}
                      fill={isLiked ? "red" : "none"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
            <button className="absolute top-[54px] right-3 bg-[#fff] rounded-[50%] cursor-pointer">
              <img src={EyeIcon} alt="eyeicon" />
            </button>
            <Button
  onClick={() => addToCart(product)}
  disabled={addedItems.includes(product.id)}
  label={addedItems.includes(product.id) ? "Added" : "Add To Cart"}
/>
          </div>

          <h3 className="font-medium text-base leading-6 font-poppins mt-4 text-[#000]">
            {product.title}
          </h3>

          <div className="flex items-center justify-between w-[94px] h-[24px] mt-2">
            <p className="font-poppins font-medium text-base text-[#DB4444]">
              ${product.newprice}
            </p>
            <p className="font-poppins font-medium text-base line-through text-[#808080]">
              ${product.oldprice}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2 w-[140px]">
            <div className="flex items-center justify-between w-[100px]">
              {Array(Math.floor(product.rating))
                .fill()
                .map((_, i) => (
                  <img key={i} src={FullStar} alt="fullstar" />
                ))}
              {product.rating % 1 !== 0 && (
                <img src={HalfFilledStar} alt="halfstar" />
              )}
              {Array(5 - Math.ceil(product.rating))
                .fill()
                .map((_, i) => (
                  <img key={i} src={EmptyStar} alt="emptystar" />
                ))}
            </div>
            <p className="font-semibold text-sm text-[#808080] font-poppins">
              ({product.ratingCount})
            </p>
          </div>
        </div>
          )
       })}
    </div>
    </div>
  )
}

export default SellingProduct
