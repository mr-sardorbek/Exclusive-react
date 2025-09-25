import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Account = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setFormData(initialValues);
    alert("Changes canceled");
  };

  const handleSave = async () => {
    const { currentPassword, newPassword, confirmPassword } = formData;

   
    if (currentPassword || newPassword || confirmPassword) {
      if (!currentPassword) {
        alert("Enter the current password!");
        return;
      }
      if (newPassword !== confirmPassword) {
        alert("The new password does not match!");
        return;
      }

      try {
        setLoading(true);

        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const isCorrect = currentPassword === "qwerty"; 

        if (!isCorrect) {
          alert("The password is incorrect!");
          return;
        }

        alert("Password updated");
      } catch (err) {
        alert("An error occurred, please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Profile information successfully updated");
    }

    console.log("Updated Data:", formData);
  };

  return (
    <div className="container mx-auto">
    
    <div className='flex items-center justify-between'>
        <div className="flex items-center gap-[12px] h-[21px] mt-[80px] mb-[80px] ">
        <p className=" font-normal text-sm font-poppins text-[#909090] cursor-pointer">
          Home
        </p>
        <p className="text-[#909090] mb-1">/</p>
        <p className="text-[#000] font-normal text-sm font-poppins cursor-pointer">
          My Account
        </p>
      </div>
      <p className='font-normal text-sm font-poppins text-[#000] cursor-pointer'>Welcome! <span className='text-[#DB4444]'>Md Rimel</span></p>
      </div>


    
      <div className="flex justify-between ">
        <div className="w-[200px] h-[287px] mb-[343px] ">
          <p className="font-medium text-base font-poppins">Manage My Account</p>
          <div className="w-[165px] h-[88px] ml-[35px] mt-4">
            <Link className="font-normal text-base font-poppins text-[#DB4444]">
              My Profile
            </Link>
            <br />
            <Link className="font-normal text-base font-poppins text-[#808080]">
              Address Book
            </Link>
            <br />
            <Link className="font-normal text-base font-poppins text-[#808080]">
              My Payment Options
            </Link>
          </div>
          <p className="font-medium text-base font-poppins mt-6">My Orders</p>
          <div className="w-[165px] h-[56px] ml-[35px] mt-4">
            <Link className="font-normal text-base font-poppins text-[#808080]">
              My Returns
            </Link>
            <br />
            <Link className="font-normal text-base font-poppins text-[#808080]">
              My Cancellations
            </Link>
          </div>
          <p className="font-medium text-base font-poppins mt-4">My WishList</p>
        </div>


        <div className="w-[870px] h-[630px] rounded mb-[140px]">
          <div className="w-[710px] h-[550px] my-[40px] mx-[80px]">
            <p className="font-medium text-xl font-poppins text-[#DB4444]">
              Edit Your Profile
            </p>
            <div className="flex items-center justify-between mt-4 h-[82px]">
              <div>
                <label className="font-normal text-base mb-2 font-poppins">First Name</label>
                <br />
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-[330px] h-[50px] bg-[#F5F5F5] pl-4 rounded outline-none font-poppins"
                  type="text"
                  placeholder="Md"
                />
              </div>
              <div>
                <label className="font-normal text-base mb-2 font-poppins">Last Name</label>
                <br />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-[330px] h-[50px] bg-[#F5F5F5] pl-4 rounded outline-none font-poppins"
                  type="text"
                  placeholder="Rimel"
                />
              </div>
            </div>

            <div className="flex items-center h-[82px] justify-between mt-6">
              <div>
                <label className="font-normal text-base mb-2 font-poppins">Email</label>
                <br />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[330px] h-[50px] bg-[#F5F5F5] pl-4 rounded outline-none font-poppins"
                  type="email"
                  placeholder="rimel1111@gmail.com"
                />
              </div>
              <div>
                <label className="font-normal text-base mb-2 font-poppins">Address</label>
                <br />
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-[330px] h-[50px] bg-[#F5F5F5] pl-4 rounded outline-none font-poppins"
                  type="text"
                  placeholder="Kingston, 5236, United State"
                />
              </div>
            </div>

            <div className="w-[710px] h-[214px] mt-6">
              <label className="font-normal text-base mb-2 font-poppins">
                Password Changes
              </label>
              <br />
              <input
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-[710px] h-[50px] bg-[#F5F5F5] pl-4 rounded outline-none font-poppins"
                type="password"
                placeholder="Current Password"
              />
              <input
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-[710px] h-[50px] bg-[#F5F5F5] pl-4 rounded outline-none mt-4 font-poppins"
                type="password"
                placeholder="New Password"
              />
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-[710px] h-[50px] bg-[#F5F5F5] pl-4 rounded outline-none mt-4 font-poppins"
                type="password"
                placeholder="Confirm New Password"
              />
            </div>

            <div className="flex items-center justify-end mt-6 ">
              <Button style={{ border: "none" }} onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="primary" onClick={handleSave} loading={loading}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;




