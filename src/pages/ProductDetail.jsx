import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apiUrl from "../api/ApiUrl";
import headers from "../api/headers";

export default function ProductDetail() {
    let { id } = useParams();
    let [ product, setProduct ] = useState(null);

    useEffect(() => {
        if (product?._id !== id) {
          axios(apiUrl + "/products/" + id, headers())
            .then((res) => {
                console.log(res.data.response)
                setProduct(res.data.response)
            })
            .catch((err) => console.log(err));
        }
      }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="w-4/5 flex flex-col items-center bg-white shadow-lg">
                <h1 className="text-3xl font-bold text-teal-600 pt-8 pb-1">{product?.name}</h1>
                <div className="flex flex-wrap pb-6">
                    <div className="w-full md:w-1/2">
                        <img className="object-cover" src={product?.image} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 px-4 py-6">
                        <div className="">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #{ product?.category_id.title?.replace(/\s/g, '') }
                            </span>
                        </div>
                        <p className="text-xl font-normal">$ {product?.price}</p>
                        <p className="text-md font-normal">{product?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
