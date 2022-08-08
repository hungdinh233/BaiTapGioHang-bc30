import React, { Component } from "react";
import Cart from "./Cart";

export default class ProductItem extends Component {
  render() {
    let { prod, clickInfo, addToCart } = this.props;
    return (
      <div>
        <div className="card text-white bg-default">
          <img
            className="card-img-top"
            src={prod.hinhAnh}
            alt="..."
            style={{ height: 270 }}
          />
          <div className="card-body">
            <h4 className="card-title text-dark">{prod.tenSP}</h4>
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                clickInfo(prod);
              }}
            >
              Xem chi tiết
            </button>
            <button
              className="btn btn-warning "
              data-bs-toggle="modal"
              data-bs-target="#modelId"
              onClick={() => {
                addToCart(prod);
              }}
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    );
  }
}
