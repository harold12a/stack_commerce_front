import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../api/ApiUrl.js";
import headers from "../api/headers.js";
import Swal from "sweetalert2";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(
    () => {
      axios(apiUrl + "/categories")
        .then((res) => {
          setCategories(res.data.response);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Internal Error",
            text: "Try later..",
          });
        });
    },
    [] //si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta, si el array tienes alguna/s varible el efecto se va a ejecutar cada vez que se modifique el valor de esos parametros
  );

  return (
    <>
      <div className="flex flex-col rounded-lg mt-2 bg-t_background1">
        {categories?.map((category) => (
          <button
            key={category._id}
            type="button"
            className="text-white bg-gradient-to-r bg-t_background3 hover:rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-4 text-center"
          >
            {category.title}
          </button>
        ))}
        <button
          type="button"
          className="text-black bg-gradient-to-r bg-white hover:bg-gradient-to-br focus:ring-4 cursor-pointer transition-transform transform hover:scale-105 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2"
        >
          Search Filter
        </button>
      </div>
    </>
  );
}
