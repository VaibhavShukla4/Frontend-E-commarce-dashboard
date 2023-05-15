import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";
const UpdateProducts = () => {
  const [updateProduct, setUpdateProduct] = useState({
    name: "",
    price: "",
    category: "",
    compony: "",
  });
  const navigate = useNavigate();
  let params = useParams();
  console.log(params);

  let name, price, category, compony, value;
  const updateData = (event) => {
    name = event.target.name;
    price = event.target.price;
    category = event.target.category;
    compony = event.target.compony;
    value = event.target.value;
    setUpdateProduct({ ...updateProduct, [name]: value });
  };
  const getProductDetail = async () => {
    let data = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "get",
      body: null,
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json({});
    setUpdateProduct(data);
  };
  const updateProductDetail = async (e) => {
    e.preventDefault();
    if (
      !updateProduct.name ||
      !updateProduct.price ||
      !updateProduct.category ||
      !updateProduct.compony
    ) {
      // setError(true);
      return false;
    }
    // console.log(params);
    const userId = localStorage.getItem("accesToken");
    console.log(JSON.parse(userId)._id);
    let data = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({
        name: updateProduct.name,
        price: updateProduct.price,
        category: updateProduct.category,
        userId: JSON.parse(userId)._id,
        compony: updateProduct.compony,
      }),
      headers: {
        authorization: `bearere ${JSON.parse(
          localStorage.getItem("accesToken")
        )}`,
      },
    });
    data = await data.json({});
    navigate("/");
  };
  useEffect(() => {
    getProductDetail();
    // console.log(params);
  }, []);
  console.log(updateProduct);
  return (
    <>
      <h2>Add Products</h2>
      <form onSubmit={updateProductDetail} className="add-product-field">
        <input
          type="text"
          className="inputBox"
          name="name"
          placeholder="Enter Product Name"
          defaultValue={updateProduct?.name}
          // value={updateProduct?.name}
          onChange={updateData}
        />
        {/* {error && !updateProduct.name && (
          <span className="invalid-input">Enter Valid Name</span>
        )} */}
        <input
          type="text"
          name="price"
          placeholder="Enter Product Price"
          className="inputBox"
          defaultValue={updateProduct?.price}
          // value={updateProduct?.price}
          onChange={updateData}
        />
        {/* {error && !updateProduct.price && (
          <span className="invalid-input">Enter Valid Price</span>
        )} */}
        <input
          type="text"
          name="category"
          placeholder="Enter Product Category"
          className="inputBox"
          defaultValue={updateProduct?.category}
          // value={updateProduct?.category}
          onChange={updateData}
        />
        {/* {error && !updateProduct.category && (
          <span className="invalid-input">Enter Valid Category</span>
        )} */}

        <input
          type="text"
          name="compony"
          placeholder="Enter Product Compony"
          className="inputBox"
          defaultValue={updateProduct?.compony}
          // value={updateProduct?.compony}
          onChange={updateData}
        />
        {/* {error && !updateProduct.compony && (
          <span className="invalid-input">Enter Valid Compony</span>
        )} */}

        <button style={{ width: "380px" }} className="inputBox">
          Add Product
        </button>
      </form>
    </>
  );
};

export default UpdateProducts;
