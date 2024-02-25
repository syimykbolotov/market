import React, { useContext } from "react";
import { ShopContext } from "../../context";
import { MdDelete } from "react-icons/md";

const Product = () => {
  const { productAll, productOne, setProductOne } = useContext(ShopContext);
  function addToBasket(data) {
    let findProduct = productOne.find((el) => el.id === data.id);
    if (!findProduct) {
      let res = JSON.parse(localStorage.getItem("basket")) || [];
      data.quantity = 1;
      res.push(data);
      localStorage.setItem("basket", JSON.stringify(res));
      setProductOne(res); 
    } else {
      let changeBasket = productOne.map((el) =>
        el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      let res = JSON.parse(localStorage.getItem("basket")) || [];
      localStorage.setItem("basket", JSON.stringify(changeBasket));
      setProductOne(changeBasket);
    }
  }
  return (
    <div id="product">
      <div className="container">
        <div className="product flex flex-wrap gap-5 justify-center mt-20 mb-20">
          {productAll.map((el) => (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg w-[250px] h-[300px] object-cover"
                  src={el.url}
                  alt="img"
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {el.price} $
                </p>

                <a
                  onClick={() => addToBasket(el)}
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Basket
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <button
                  type="button"
                  class="focus:outline-none ml-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
