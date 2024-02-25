import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context";
import { MdDelete } from "react-icons/md";

const Basket = () => {
  const { productOne, setProductOne } = useContext(ShopContext);
  const del = (tap) => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    let resFiltered = res.filter((el) => el.id !== tap.id);
    localStorage.setItem("basket", JSON.stringify(resFiltered));
    setProductOne(resFiltered);
  };

  const totalPrice = productOne.reduce((acc, el) => {
    return (acc += Number(el.price * el.quantity));
  }, 0);

  const totalQuantitiy = productOne.reduce((acc, el) => {
    return (acc += Number(el.quantity));
  }, 0);

  function getPlus(plus) {
    let changeQuantity = productOne.map((el) =>
      el.id === plus.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    localStorage.setItem("basket", JSON.stringify(changeQuantity));
    setProductOne(changeQuantity);
  }

  function getMinus(minus) {
    let changeQuantity = productOne.map((el) =>
      el.id === minus.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : el.quantity }
        : el
    );
    localStorage.setItem("basket", JSON.stringify(changeQuantity));
    setProductOne(changeQuantity);
  }

  // const getBasket = () => {
  //   let res = JSON.parse(localStorage.getItem("basket")) || [];
  //   setProductOne(res);
  // };
  // useEffect(() => {
  //   getBasket()
  // }, [])
  return (
    <div id="basket">
      <div className="container">
        <div className="product mt-10 mb-6">
          {!productOne.length ? (
            <div
              class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
              role="alert"
            >
              <svg
                class="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Warning alert!</span> Ваша корзина
                пустое!!!
              </div>
            </div>
          ) : (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Number
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product IMG
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {productOne.map((el, idx) => (
                  <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {idx + 1}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img width={100} src={el.url} alt="img" />
                      </th>
                      <td class="px-6 py-4 text-2xl">{el.name}</td>
                      <td class="px-6 py-4 text-2xl">
                        {el.price * el.quantity} $
                      </td>
                      <td class="px-6 py-4 text-2xl">
                        <div className="flex gap-5 text-[25px]">
                          <button onClick={() => getMinus(el)}>-</button>
                          <h3>{el.quantity}</h3>
                          <button onClick={() => getPlus(el)}>+</button>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => del(el)}
                          type="button"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <td class="px-6 py-4 text-2xl"></td>
                  <td class="px-6 py-4 text-2xl">{totalPrice} $</td>
                  <td class="px-6 py-4 text-2xl">{totalQuantitiy}</td>
                  <td class="px-6 py-4"></td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
