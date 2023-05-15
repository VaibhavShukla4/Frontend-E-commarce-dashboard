import React, { useState } from "react";
import "./index.css";
const AddProducts = () => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    category: "",
    compony: "",
  });
  const [error, setError] = useState(false);
  let name, price, category, compony, value;
  const addData = (event) => {
    name = event.target.name;
    price = event.target.price;
    category = event.target.category;
    compony = event.target.compony;
    value = event.target.value;
    setAddProduct({ ...addProduct, [name]: value });
  };
  const addProductDetail = async (e) => {
    e.preventDefault();
    if (
      !addProduct.name ||
      !addProduct.price ||
      !addProduct.category ||
      !addProduct.compony
    ) {
      setError(true);
      return false;
    }
    const userId = localStorage.getItem("accesToken");
    console.log(JSON.parse(userId)._id);
    let result = await fetch("http://localhost:5000/add-products", {
      method: "post",
      body: JSON.stringify({
        name: addProduct.name,
        price: addProduct.price,
        category: addProduct.category,
        userId: JSON.parse(userId)._id,
        compony: addProduct.compony,
      }),
      headers: {
        authorization: `bearere ${JSON.parse(
          localStorage.getItem("accesToken")
        )}`,
      },
    });
    result = await result.json();
  };
  return (
    <>
      <h2>Add Products</h2>
      <form onSubmit={addProductDetail} className="add-product-field">
        <input
          type="text"
          className="inputBox"
          name="name"
          placeholder="Enter Product Name"
          value={addProduct.name}
          onChange={addData}
        />
        {error && !addProduct.name && (
          <span className="invalid-input">Enter Valid Name</span>
        )}
        <input
          type="text"
          name="price"
          placeholder="Enter Product Price"
          className="inputBox"
          value={addProduct.price}
          onChange={addData}
        />
        {error && !addProduct.price && (
          <span className="invalid-input">Enter Valid Price</span>
        )}
        <input
          type="text"
          name="category"
          placeholder="Enter Product Category"
          className="inputBox"
          value={addProduct.category}
          onChange={addData}
        />
        {error && !addProduct.category && (
          <span className="invalid-input">Enter Valid Category</span>
        )}

        <input
          type="text"
          name="compony"
          placeholder="Enter Product Compony"
          className="inputBox"
          value={addProduct.compony}
          onChange={addData}
        />
        {error && !addProduct.compony && (
          <span className="invalid-input">Enter Valid Compony</span>
        )}

        <button style={{ width: "380px" }} className="inputBox">
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProducts;
