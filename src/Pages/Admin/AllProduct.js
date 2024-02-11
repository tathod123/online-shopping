import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductSaga } from "../../Redux/flipkart.slice";

function AllProduct() {
  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.product);

  //const [product, setProduct] = useState([]);
  // const ProductData = async (api) => {
  //   const resp = await fetch(api);
  //   const data = await resp.json();
  //   setProduct(data);
  // };

  useEffect(() => {
    //const api = "https://fakestoreapi.com/products/?limit=5";
    // ProductData(api);
    dispatch(allProductSaga());
  }, [dispatch]);

  return (
    <div className="flex flex-col p-3 gap-6">
      <div className="flex justify-between px-5 bg-gray-900 rounded-lg py-6 ">
        <div className="text-3xl font-bold text-white">All Products</div>
        <div className="text-3xl font-semibold text-white">
          Total Product-{allProduct.length}
        </div>
      </div>
      <div className=" bg-gray-900 shadow-lg rounded-lg p-3">
        <table
          className="overflow-hidden h-10 w-full border-collapse"
          cellPadding={10}
        >
          <thead className=" text-white bg-gray-700 rounded-lg">
            <tr>
              <th className="border px-3 py-2">Id</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Category</th>
              <th className="border px-3 py-2">Image</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll overflow-hidden">
            {allProduct.map((data) => {
              return (
                <tr
                  className="text-white py-2  hover:bg-gray-600/30 "
                  key={data.id}
                >
                  <td className="border px-3 py-2">{data.id}</td>
                  <td className="border px-3 py-2">{data.title}</td>
                  <td className="border px-3 py-2">{data.price}</td>
                  <td className="border px-3 py-2">{data.category}</td>
                  <td className="border px-3 py-2">
                    <img
                      className="aspect-square mx-auto "
                      width={50}
                      src={data.image}
                      alt={data.image}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProduct;
