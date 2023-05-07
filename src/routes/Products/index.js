import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    getProductList();
  }, []);
  // console.log(JSON.parse(localStorage.getItem("accesToken")));
  const getProductList = async () => {
    let data = await fetch("http://localhost:5000/list-products", {
      method: "get",
      body: null,
      headers: {
        authorization: JSON.parse(localStorage.getItem("accesToken")),
      },
    });

    data = await data.json();
    setData(data);
  };
  console.log(data);
  const deleteProduct = async (id) => {
    // console.log(id);
    const deleteData = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
      body: JSON.stringify({
        _id: id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    deleteData = await deleteData.json();
    console.log(deleteData);
    if (deleteData) {
      getProductList();
    }
  };
  const searchProduct = async (event) => {
    // console.log(text);
    let key = event.target.value;
    if (key) {
      const result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setData(result);
      }
    } else {
      getProductList();
    }
  };

  return (
    <div className="product">
      <h1>Product List</h1>
      <input className="inputBox" onChange={searchProduct} />
      {/* <button onClick={() => searchProduct(text)}>Search</button> */}
      <table className="">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Compony</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>₹&nbsp;{item.price}</td>
                <td>{item.category}</td>
                <td>{item.compony}</td>
                <td>
                  <button onClick={() => deleteProduct(item._id)}>
                    Delete
                  </button>
                  <Link to={`update/${item._id}`}>Update</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>No result Found</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
