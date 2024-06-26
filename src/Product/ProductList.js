import { Button, Checkbox, Label, Navbar, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Logo from "./image.png";

const ProductList = () => {
    return (
        <>
            <Navbar fluid rounded className='hidden md:block border-2 border-brand bg-brand'>
                <Navbar.Brand>
                    <img
                        src={Logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite React Logo"
                    />
                    <span className="self-center text-xl font-semibold text-gray-50">
                        Monk Upsell & Cross-sell
                    </span>
                </Navbar.Brand>

            </Navbar>
            {/* <Navbar fluid rounded className='hidden md:block border-2 border-brand bg-brand'>
                <Navbar.Brand className='flex-col' href="">

                <img src={Logo} />   <span className="flex self-center whitespace-nowrap text-xl font-semibold text-red"> GYIZER </span>
                    
                </Navbar.Brand>
               

            </Navbar> */}
<div className="flex mt-4">
            <div className=" pl-80 ">
                <h1>Add Products</h1>
            </div>

            <div className="ml-9">
                Product
            </div>
            </div>
        </>
    );
};

export default ProductList;
