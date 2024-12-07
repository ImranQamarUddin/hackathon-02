import Link from "next/link";
import React from "react";

const Header_Top = () => {
  return (
    <div className="bg-black hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-end items-center gap-[231px]">
          <div className="flex gap-1 text-gray-500 text-[12px]">
            <p className="font-family: 'Poppins', sans-serif ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link href={"/"}>ShopNow</Link>
          </div>
          <div className="flex gap-4">
            <select
              className="txt-sm text-gray-500 text-[14px] w-[78px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-black hidden sm:block">
    //   <div className="container py-3 h-[40px]">
    //     <div className="flex justify-end items-center gap-[231px]">
    //       <div className="hidden lg:flex gap-1">
    //       </div>
    //       <div className="flex gap-4  text-[#FAFAFA] text-[14px]">
    //         <p className="font-family: 'Poppins', sans-serif "> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    //         <div className="font-family: 'Poppins', sans-serif font-semibold underline-offset-auto underline"> ShopNow</div>
    //       </div>
    //       <div className=" lg:flex  gap-4 ">
    //         <select
    //           className="text-sm text-[#FAFAFA] text-[14px] w-[78px]"
    //           name="language"
    //           id="language"
    //         >
    //           <option value="English">English</option>
    //           <option value="Urdu">Urdu</option>
    //         </select>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header_Top;
