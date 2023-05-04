import React, { useState } from "react";

const AddProducts = () => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    category: "",
    // userId: "",
    compony: "",
  });
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
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
  };
  return (
    <div>
      <form onSubmit={addProductDetail}>
        <input
          type="text"
          className="inputBox"
          name="name"
          placeholder="Enter Product Name"
          value={addProduct.name}
          onChange={addData}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Product Price"
          className="inputBox"
          value={addProduct.price}
          onChange={addData}
        />
        <input
          type="text"
          name="category"
          placeholder="Enter Product Category"
          className="inputBox"
          value={addProduct.category}
          onChange={addData}
        />
        <input
          type="text"
          name="compony"
          placeholder="Enter Product Compony"
          className="inputBox"
          value={addProduct.compony}
          onChange={addData}
        />
        <button type="submit" style={{ width: "380px" }} className="inputBox">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
