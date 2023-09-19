import React, { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import axios from "axios";
import headers from "../api/headers.js";
import apiUrl from "../api/ApiUrl";
import Swal from "sweetalert2";

const CardProducts = ({ name, image, description, price, stock, id }) => {
  const [stockTemp, setStockTemp] = useState(stock);

  const getProduct = async (id) => {
    let data = {
      product_id: id,
      quantity: 1,
    };

    try {
      const res = await axios.post(apiUrl + "/cart/", data, headers());
      if (res) {
        setStockTemp(stockTemp - 1);
        Swal.fire({
          width: "400px",
          title: name,
          imageUrl: image,
          imageHeight: "200px",
          imageWidth: "200px",
          text: res.data.response,
          allowOutsideClick: false,
          showDenyButton: true,
          confirmButtonText: "Done",
          denyButtonText: `Go to Cart`,
          denyButtonColor: "#43C6AC",
        }).then((result) => {
          if (!result.isConfirmed) {
            window.location.href = "/cart/1";
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Internal Error",
        text: "Try later..",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col select-none items-center transition-transform transform hover:scale-105 cursor-pointer shadow-lg bg-white border  rounded-lg md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Anchor to={"/products/" + id + "/"}>
          <div>
            <img
              className="p-4 object-fit h-[250px] rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg"
              src={image}
              alt={name}
            />
          </div>
        </Anchor>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-500 dark:text-white">
            {name}
          </h5>
          <div className="mt-2 mb-2">
            <span className="text-md font-bold ml-2 text-gray-500 dark:text-white border-black-600 p-2 rounded ">
              Price: ${price}
            </span>
          </div>

          {stockTemp === 0 ? (
            <>
              <span className="text-sm font-bold ml-2 text-gray-500 dark:text-white border-black-600 p-2 rounded ">
                Stock: {stockTemp}
              </span>
              <span className="text-sm font-bold ml-2 text-white bg-gray-400 dark:text-white border-black-600 p-2 rounded-lg ">
                Product Unavaliable
              </span>
            </>
          ) : (
            <>
              {stockTemp < 10 ? (
                <span className="text-md font-bold ml-2 text-rose-500 dark:text-white   border-black-600 p-2 rounded ">
                  Stock: {stockTemp}
                  <p>Ultimas Unidades</p>
                </span>
              ) : (
                <span className="text-md font-bold ml-2 text-gray-500 dark:text-white   border-black-600 p-2 rounded ">
                  Stock: {stockTemp}
                </span>
              )}

              <Anchor
                onClick={() => getProduct(id)}
                className="inline-flex md:text-md transition-transform transform hover:scale-105 cursor-pointer justify-center my-2 items-center px-3 py-2 text-sm font-medium  bg-t_background1 text-white rounded-lg focus:ring-4 focus:outline-none"
              >
                Add
                <div className="flex justify-between">
                  <RiShoppingCartFill className="text-md"></RiShoppingCartFill>
                </div>
              </Anchor>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardProducts;
