import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

export default class ExcersiceCart extends Component {
  state = {
    defaultProdInCart: {
      maSP: "",
      tenSP: "",
      manHinh: "",
      heDieuHanh: "",
      cameraSau: "",
      cameraTruoc: "",
      ram: "",
      rom: "",
      giaBan: "",
      hinhAnh: "",
    },
  };

  addToCart = (clickedPhone) => {
    this.setState({
      defaultProdInCart: clickedPhone,
    });
    console.log(clickedPhone);
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <img src="./img/logo.png" style={{ width: 100 }}></img>
          <h3 className="text-dark display-6 fw-bolder">
            TechShop
          </h3>{" "}
        </div>

        <p className="text-end text-danger">Giỏ hàng()</p>
        <ProductList addToCart={this.addToCart} />
        <Cart cartModalProd={this.state.defaultProdInCart} />
      </div>
    );
  }
}
