import axios from "axios";
import React, { useEffect, useState } from "react";
import headers from "../api/headers";
import apiUrl from "../api/ApiUrl";
import { RxReload } from "react-icons/rx";
import Swal from "sweetalert2";
import { Link as Anchor } from "react-router-dom";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);

  try {
    useEffect(() => {
      axios
        .get(apiUrl + "/dashboard/cart", headers())
        .then((response) => {
          setProducts(response.data.response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div>
        <div className="flex h-full">
          <div className="bg-gray-800 text-white w-60 shadow-2xl">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <a className="flex items-center pl-2.5 mb-5">
                <img
                  src="/assets/logo23.png"
                  className="h-6 mr-3 sm:h-7 transition-transform transform hover:scale-105 cursor-pointer"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-t_background1">
                  Panel Admin
                </span>
              </a>
              <ul className="space-y-2 font-medium">
                <li className="transition-transform transform hover:scale-105">
                  <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg
                      className="w-5 h-5 text-t_background1  duration-75 dark:text-gray-400  dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ml-3 text-t_background1 ">
                      <Anchor to={"/admin"} className="cursor-pointer">
                        Dashboard
                      </Anchor>
                    </span>
                  </a>
                </li>
                <li className="transition-transform transform hover:scale-105">
                  <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-t_background1 transition duration-75 dark:text-gray-400  dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-t_background1">
                      <Anchor to={"/admin/orders"}>Orders</Anchor>
                    </span>
                  </a>
                </li>

                <li className="transition-transform transform hover:scale-105">
                  <a className="flex items-center p-2 text-t_background1 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-t_background1 transition duration-75 dark:text-gray-400   dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-t_background1">
                      Users
                    </span>
                  </a>
                </li>
                <li className="transition-transform transform hover:scale-105">
                  <a className="flex items-center p-2 text-t_background1 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-t_background1 transition duration-75 dark:text-gray-400   dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-t_background1">
                      Products
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 p-4">
            <h1 className="text-2xl font-semibold">
              <div className="bg-t_background1 py-12 text-white text-start">
                <div className="text-center">
                  <p className="text-xl mt-4">Orders</p>
                </div>
              </div>
            </h1>
            <p>
              <div className="container mx-auto mt-8 p-4">
                <div className="mt-8 bg-white rounded shadow-md overflow-x-auto">
                  <div className="flex w-full auto"></div>
                  <table className="w-full table-auto">
                    <thead className="bg-t_background1">
                      <tr className="bg-t_background1 text-center text-white">
                        <th className="px-4 py-2">Order</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Customer</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Adress</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Total</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {products.map((each, index) => (
                          <tr className="text-center">
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">
                              {each.createdAt}
                            </td>
                            <td className="border px-4 py-2">
                              {each.user_id.name}
                            </td>
                            <td className="border px-4 py-2">
                              {each.user_id.email}
                            </td>
                            <td className="border px-4 py-2">
                              {each.user_id.address}
                            </td>
                            <td className="border px-4 py-2">
                              {each.user_id.phone}
                            </td>

                            <td className="border px-4 py-2">
                              {each.product_id.price * each.quantity}
                            </td>
                            <td className="border px-4 py-2">
                              <>
                                {each.state_id.state === 1 ? (
                                  <span className="px-2 py-1 rounded bg-red-400 text-white">
                                    {each.state_id.name}
                                  </span>
                                ) : (
                                  <span className="px-2 py-1 rounded bg-t_background1 text-white">
                                    {each.state_id.name}
                                  </span>
                                )}
                              </>
                            </td>

                            <td className="border px-4 py-2">
                              <a className="text-t_background1 text-2xl mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 5a6 6 0 00-6 6v2a6 6 0 006 6 6 6 0 006-6v-2a6 6 0 00-6-6z"
                                  />
                                </svg>
                              </a>
                              <a className="text-red-400 hover:text-red-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </>
                    </tbody>
                  </table>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsAdmin;
