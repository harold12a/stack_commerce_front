import React, { useEffect, useState } from "react";
import CardProducts from "./CardProducts";
import apiUrl from "../api/ApiUrl";
import headers from "../api/headers";
import axios from "axios";
import Swal from "sweetalert2";

const Category_login = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");

  useEffect(() => {
    try {
      axios.get(apiUrl + "/products", headers()).then((res) => {
        setAllProducts(res.data.response);
        setProducts(res.data.response);
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Internal Error",
        text: "Try later..",
      });
    }
  }, []);

  useEffect(() => {
    filter(searchName, selectedCategory);
  }, [searchName, selectedCategory]);

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filter = (searchName, category) => {
    if (searchName === "" && category === "Category") {
      setProducts(allProducts);
    } else {
      let filteredProducts = allProducts.filter((element) => {
        const nameMatches = element.name
          .toString()
          .toLowerCase()
          .includes(searchName.toLowerCase());
        const categoryMatches =
          category === "Category" || element.category_id === category;
        return nameMatches && categoryMatches;
      });
      setProducts(filteredProducts);
    }
  };
  return (
    <>
      <form className="flex  items-center mx-[25%] mb-4 mt-7 ">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Find Products"
            required
            value={searchName}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-t_background1 rounded-lg border border-t_background1 hover:bg-t_background1 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-t_background1 dark:hover:bg-t_background1 dark:focus:ring-t_background1"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>

        <div className="hidden lg:block">
          <select
            id="category-select"
            className="ml-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-t_background1 focus:border-t_background1 block w-full p-2.5 dark:bg-t_background1 dark:border-t_background1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-t_background1 dark:focus:border-t_background1"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Category">Category</option>
            <option value="64f21b6196ee35726908b90f">
              Computers and Accessories
            </option>
            <option value="64f21b6196ee35726908b911">Gadget Innovadores</option>
            <option value="64f21b6196ee35726908b910">
              Smart home appliances
            </option>
            <option value="64f21b6196ee35726908b90e">
              Smartphones and Accessories
            </option>
            <option value="64f21b6196ee35726908b912">Home Appliances</option>
            <option value="64f21b6196ee35726908b913">
              Tablets and Smartwatches
            </option>
          </select>
        </div>
      </form>
      {products.length === 0 && (
        <p className="text-center text-red-500 font-semibold my-8 mt-[100px] text-[25px] ">
          <svg
            className="mx-auto h-16 w-16 text-red-500  "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <br />
          We're sorry!
          <br />
          No results found for the search.
          <br />
          Please try another search term.
        </p>
      )}
      <div className="xl:grid gap-x-8 gap-y-4 grid-cols-3 mx-10">
        {products.map((each) => (
          <CardProducts
            key={each._id}
            name={each.name}
            image={each.image}
            description={each.description}
            price={each.price}
            stock={each.stock}
            id={each._id}
          />
        ))}
      </div>
    </>
  );
};

export default Category_login;
