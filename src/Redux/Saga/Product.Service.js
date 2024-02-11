import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

export const AllProduct = async () => {
  const res = await axios.get("/products");
  const data = await res.data;
  //const res = await fetch("https://fakestoreapi.com/products");
  //const data = await res.json();
  //console.log(data);
  if (res.status !== 200) {
    return false;
  } else {
    return data;
  }
};
