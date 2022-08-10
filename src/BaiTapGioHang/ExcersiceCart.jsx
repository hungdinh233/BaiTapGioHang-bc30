import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

export default class ExcersiceCart extends Component {
  state = {
    arrProdInCart: [],
  };

  // thêm sp vào giỏ hàng + click thêm vào giỏ sẽ tăng số lượng trong giỏ
  addToCart = (clickedPhone) => {
    let clickedProd = {
      maSP: clickedPhone.maSP,
      tenSP: clickedPhone.tenSP,
      giaBan: clickedPhone.giaBan,
      hinhAnh: clickedPhone.hinhAnh,
      soLuong: 1,
    };
    let updateCart = this.state.arrProdInCart;
    let index = updateCart.findIndex((prod) => prod.maSP === clickedProd.maSP);
    if (index !== -1) {
      /* -1 là maSP chưa có trong mảng, còn nếu có nó trả ra index*/
      updateCart[index].soLuong += 1;
    } else {
      updateCart.push(clickedPhone);
    }
    this.setState({
      arrProdInCart: updateCart,
    });
    console.log(this.state.arrProdInCart);
  };

  // tăng giảm số lượng trong giỏ hàng bằng nút + -
  changeQuantity = (maSP, adjust) => {
    let updateCart = this.state.arrProdInCart;
    let index = updateCart.findIndex((prod) => prod.maSP === maSP);
    if (adjust) {
      updateCart[index].soLuong += 1;
    } else {
      if (updateCart[index].soLuong > 1) {
        updateCart[index].soLuong -= 1;
      }
    }
    this.setState({
      arrProdInCart: updateCart,
    });
  };
  // xóa sản phẩm trong giỏ
  delProdInCart = (maSP) => {
    let updateCart = this.state.arrProdInCart;
    let index = updateCart.findIndex((prod) => prod.maSP === maSP);
    if (index !== -1) {
      updateCart.splice(index, 1);
    }

    this.setState({
      arrProdInCart: updateCart,
    });
    return alert("Đã xóa sản phẩm khỏi giỏ hàng!");
  };
  render() {
    // hiển thị tổng số lượng hàng trong giỏ
    let totalProd = this.state.arrProdInCart.reduce(
      (total, prodInCart, index) => {
        return (total += prodInCart.soLuong);
      },
      0
    );

    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <img src="./img/logo.png" style={{ width: 100 }} alt="..." />
          <h3 className="text-dark display-6 fw-bolder">TechShop</h3>{" "}
        </div>

        <p
          className="text-end text-danger"
          data-bs-toggle="modal"
          data-bs-target="#modelId"
          style={{ cursor: "pointer", fontWeight: "bolder" }}
        >
          Giỏ hàng({totalProd})
        </p>
        <ProductList addToCart={this.addToCart} />
        <Cart
          arrProdInCart={this.state.arrProdInCart}
          changeQuantity={this.changeQuantity}
          renderPrice={this.renderPrice}
          delProdInCart={this.delProdInCart}
        />
      </div>
    );
  }
}
