import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";
import { RxTrash } from "react-icons/rx";
import headers from "../api/headers";
import apiUrl from "../api/ApiUrl";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, setCart] = useState([]);
  let totalCart = 0;

  let removeProduct = (id) => {
    axios
      .delete(apiUrl + "/cart/" + id, headers())
      .then((res) => {
        axios.get(apiUrl + "/cart", headers()).then((response) => {
          setCart(response.data.response);
        });
        Swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Internal Error",
          text: "Try later..",
        });
      });
  };

  let removeCart = () => {
    axios
      .delete(apiUrl + "/cart", headers())
      .then(() => {
        axios.get(apiUrl + "/cart", headers()).then((response) => {
          setCart(response.data.response);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let buyCart = () => {
    axios
      .put(apiUrl + "/cart", {}, headers())
      .then((res) => {
        setCart([]);
        Swal.fire({
          icon: "success",
          title: `${res.data.message}`,
          text: `Purchase completed`,
          timer: 4000
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let incrementCart = async (id) => {
    let data = {
      product_id: id,
      quantity: 1,
    };

    try {
      const res = await axios.post(apiUrl + "/cart", data, headers());

      if (res) {
        axios.get(apiUrl + "/cart", headers()).then((response) => {
          setCart(response.data.response);
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "¡Stock Reached!",
        text: "Maximed Stock on Inventary.",
      });
    }
  };

  let decrementCart = async (id) => {
    let data = {
      product_id: id,
      quantity: -1,
    };

    try {
      const res = await axios.post(apiUrl + "/cart", data, headers());

      if (res) {
        axios.get(apiUrl + "/cart", headers()).then((response) => {
          setCart(response.data.response);
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
  try {
    useEffect(() => {
      axios
        .get(apiUrl + "/cart", headers())
        .then((response) => {
          setCart(response.data.response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    // Usar reduce para calcular el total
    totalCart = cart.reduce((accumulator, each) => {
      const productTotal = each.product_id?.price * each.quantity;
      return accumulator + (productTotal || 0);
    }, 0);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div className="select-none">
        <section className="">
          <div className="py-2 px-4 mx-auto max-w-screen-xl  text-center lg:py-16 z-10 relative">
            <h1 className="mb-4 text-4xl text-t_background1 font-extrabold tracking-wider leading-none md:text-5xl lg:text-6xl">
              <div className="flex justify-center items-center mx-auto">
                <img src="/assets/logo23.png" />
                Shopping Cart
              </div>
              <p className="my-7 text-lg tracking-wider text-gray-500 font-normal lg:text-xl sm:px-16 lg:px-48">
                The best way to predict the future is to invent it
                <hr className="my-3 bg-t_background1 p-[0.070rem]" />
              </p>
            </h1>

            <form className="w-full max-w-md mx-auto"></form>
          </div>
        </section>

        <div className="mx-7 lg:mx-24 mb-7 lg:mb-24">
          <div className="relative overflow-x-auto  shadow-md sm:rounded-t-lg ">
            <div className="">
              <table className="w-full border-2 shadow-lg  text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="bg-t_background1 text-center">
                    <th scope="col" className=" text-white">
                      Image
                    </th>
                    <th scope="col" className=" py-3 text-white">
                      Product
                    </th>
                    <th scope="col" className=" py-3 text-white">
                      Qty
                    </th>

                    <th scope="col" className=" py-3 text-white">
                      Price
                    </th>
                    <th scope="col" className="py-3 text-white">
                      Subtotal
                    </th>
                    <th scope="col" className="py-3 text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((each) => (
                    <>
                      <tr className="text-center border-b select-none dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-[15%] h-[10%] object-fit bg-no-repeat p-4 cursor-pointer transition-transform transform hover:scale-105 select-none">
                          <img src={each.product_id?.image} alt="img" />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {each.product_id?.name}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center space-x-3">
                            <>
                              {each.quantity > 1 ? (
                                <RiIndeterminateCircleLine
                                  className="text-[150%] cursor-pointer transition-transform transform hover:scale-105 text-red-400"
                                  onClick={() =>
                                    decrementCart(each.product_id._id)
                                  }
                                />
                              ) : (
                                <RiIndeterminateCircleLine className="text-[150%] cursor-pointer transition-transform transform hover:scale-105 text-red-400" />
                              )}
                            </>

                            <div c>
                              <input
                                defaultValue={1}
                                value={each.quantity}
                                type="number"
                                id="first_product"
                                className="bg-gray-100 w-14 text-center border border-l-red-400 border-r-t_background1 border-gray-300 text-gray-900 text-sm rounded-lg "
                                required
                              />
                            </div>

                            <RiAddCircleLine
                              className="text-[150%] cursor-pointer transition-transform transform hover:scale-105 text-t_background1"
                              onClick={() => incrementCart(each.product_id._id)}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          $ {each.product_id?.price}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          ${" "}
                          {(each.product_id?.price * each.quantity) |
                            "currency"}
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center items-center">
                            <Anchor
                              onClick={() => removeProduct(each._id)}
                              className="text-center font-medium  text-red-400 dark:text-red-500"
                            >
                              <RxTrash className="text-2xl cursor-pointer transition-transform transform hover:scale-110 "></RxTrash>
                            </Anchor>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <>
                  <tr>
                    <th scope="col" className="px-[50px] py-3"></th>
                    <th
                      scope="col"
                      className="md:px-[20%] py-3 font-bold md:text-[14px] text-green-500"
                    >
                      Total : $ {totalCart.toFixed(2)}
                    </th>
                  </tr>
                </>
              </thead>
            </table>
          </div>
          <div className="relative overflow-x-auto sm:rounded-b-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-[38px] py-3">
                    <div className="flex justify-between items-center px-4">
                      <button
                        onClick={() => removeCart()}
                        type="button"
                        className="text-white cursor-pointer transition-transform transform hover:scale-105 bg-gradient-to-r bg-red-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Empty Cart
                      </button>
                      <button
                        onClick={() => buyCart()}
                        type="button"
                        className="text-white cursor-pointer transition-transform transform hover:scale-105 bg-gradient-to-r bg-t_background1 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Buy
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
