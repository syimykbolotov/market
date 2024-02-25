import React, { useContext } from "react";
import { ShopContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const {
    productUrl,
    productName,
    productPrice,
    productAll,
    productOne,
    setProductName,
    setProductUrl,
    setProductPrice,
    setProductAll,
  } = useContext(ShopContext);

  const error = () =>
    toast.error("you must write somthing!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const success = () =>
    toast.success("item successfully added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const warn = () =>
    toast.warn("this item has already been added", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function addToProduct() {
    if (productName === "" || productUrl === "" || productPrice === "") {
      error();
    } else if (productAll.find((el) => el.name === productName)) {
      warn();
      setProductUrl("");
      setProductName("");
      setProductPrice("");
    } else {
      success();
      let newProduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productUrl,
        name: productName,
        price: productPrice,
      };
      let resultLocal = JSON.parse(localStorage.getItem("product")) || [];
      resultLocal.push(newProduct);
      localStorage.setItem("product", JSON.stringify(resultLocal));
      // let result = [...productAll, newProduct];
      setProductAll(resultLocal);
      setProductUrl("");
      setProductName("");
      setProductPrice("");
    }
  }

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div id="addProduct">
      <div className="container">
        <div className="addProduct mt-10 flex flex-col items-center gap-8">
          <div class="relative z-0 mb-5 group w-[450px]">
            <input
              // onChange={onChange}
              // type="file"
              onChange={(e) => setProductUrl(e.target.value)}
              type="text"
              value={productUrl}
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product URL...
            </label>
          </div>

          <div class="relative z-0 w-[450px] mb-5 group">
            <input
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              value={productName}
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>

          <div class="relative z-0 w-[450px] mb-5 group">
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              type="text"
              value={productPrice}
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Price
            </label>
          </div>

          <button
            onClick={() => addToProduct()}
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Product
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
