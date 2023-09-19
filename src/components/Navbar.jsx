import { useState, useEffect } from "react";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../api/ApiUrl";
import headers from "../api/headers";
import { RiShoppingCartLine } from "react-icons/ri";
import Swal from "sweetalert2";

export default function Navbar() {
  const signout = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure ?",
        text: "¿Do you want to log out?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "yes",
        cancelButtonText: "Cancel",
        didOpen: () => {
          const confirmButton = document.querySelector(".swal2-confirm");
          confirmButton.style.backgroundColor = "#2573F0";
          confirmButton.style.color = "white";
        },
      });

      if (result.isConfirmed) {
        await axios.put(apiUrl + "/auth/signout", null, headers());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.replace("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Internal Error",
        text: "Try later..",
      });
    }
  };

  const [options, setOptions] = useState([
    { to: "/", title: "Home" },
    // { to: "/category", title: "Category" },
    { to: "/register", title: "Register" },
    { to: "/signin", title: "Sign In" },
  ]);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    if (user?.role === 1) {
      setOptions([
        { to: "/", title: "Home" },
        { to: "/products", title: "Products" },
        // { to: "/cart/1", title: "Cart" },
      ]);
    } else if (user?.role === 2) {
      setOptions([
        { to: "/", title: "Home" },
        { to: "/admin", title: "Admin Panel" },
      ]);
    } else {
      setOptions([
        { to: "/", title: "Home" },
        // { to: "/category", title: "Category" },
        { to: "/register", title: "Register" },
        { to: "/signin ", title: "Sign In" },
      ]);
    }
  }, []);

  let user = JSON.parse(localStorage.getItem("user"));
  let email = user?.email;
  let photo = user?.photo;
  let user_id = user?._id;

  return (
    <>
      <nav className="bg-gradient-to-r from-t_background1 to-t_background3 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6">
          <a className="flex items-center" href="/">
            <img
              src="/assets/logo.ico"
              className="h-8 mr-3 rounded-full bg-white"
              alt="Flowbite Logo "
            />
            <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">
              {" "}
              Stack-Commerce
            </span>
          </a>
          <div className="flex items-center md:order-2">
            {user_id ? (
              <>
                <Anchor to={"/cart/1"}>
                  <RiShoppingCartLine className="text-2xl mr-4 cursor-pointer" />
                </Anchor>
                <button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <img
                    className="w-8 h-8 rounded-full object-cover "
                    src={photo}
                    alt="user photo"
                  />
                </button>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Profile
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Anchor
                        onClick={signout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </Anchor>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Anchor to={"/signin"}>
                <RiShoppingCartLine className="text-2xl mr-4 cursor-pointer" />
              </Anchor>
            )}

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                {options?.map((option, index) => (
                  <Anchor
                    onClick={option?.onClick}
                    key={index}
                    to={option?.to}
                    className="mr-4"
                    // className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {option?.title}
                  </Anchor>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
