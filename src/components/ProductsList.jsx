import CategoryList from "./CategoryList";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-1 p-3 bg-slate-50">
        <div className="flex justify-center transition-transform transform hover:scale-105 cursor-pointer shadow-2xl shadow-purple-300">
          <img
            className="h-56 object-cover rounded-lg"
            src="https://m.media-amazon.com/images/I/71QQZr2pNSL.jpg"
            alt=""
          />
        </div>
        <div className="hidden md:flex justify-center transition-transform transform hover:scale-105 cursor-pointer shadow-2xl shadow-purple-300">
          <img
            className="h-56 object-cover rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center transition-transform transform hover:scale-105 cursor-pointer shadow-2xl shadow-purple-300">
          <img
            className="h-56 object-cover rounded-lg"
            src="https://m.media-amazon.com/images/I/71ctRE34RuL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            alt=""
          />
        </div>
        <div className="hidden md:flex justify-center transition-transform transform hover:scale-105 cursor-pointer shadow-2xl shadow-purple-300">
          <img
            className="h-56 object-cover rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center transition-transform transform hover:scale-105 cursor-pointer shadow-2xl shadow-purple-300">
          <img
            className="h-56 object-cover rounded-lg"
            src="https://topesdegama.com/app/uploads-topesdegama.com/2022/07/Horno-inteligente.jpg"
            alt=""
          />
        </div>
      </div>

      {/* <div className="container-fluid mx-auto">
        <div className="flex flex-wrap py-2">

          <div className="w-full md:w-[20%] px-2">
            <CategoryList />
          </div>

          <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-4 gap-2 px-2">
            {products.map((product) => (
              <div
                key={product.category_id}
                className="">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

        </div>
      </div> */}
    </>
  );
}
