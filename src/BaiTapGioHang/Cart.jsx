import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { arrProdInCart, changeQuantity, delProdInCart } = this.props;
    return (
      <div>
        {/* Button trigger modal */}
        {/* <button
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Launch
          </button> */}
        {/* Modal */}
        <div
          className="modal fade modal-xl"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> Giỏ hàng </h5>
                {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  /> */}
              </div>
              <div className="modal-body">
                <table className="table w-100">
                  <thead>
                    <tr className="text-center">
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrProdInCart.map((prod, index) => {
                      return (
                        <tr key={index} className="text-center">
                          <td>{prod.maSP}</td>
                          <td>
                            <img
                              src={prod.hinhAnh}
                              alt="..."
                              style={{ width: 70 }}
                            />
                          </td>
                          <td>{prod.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                changeQuantity(prod.maSP, true);
                              }}
                            >
                              {" "}
                              +{" "}
                            </button>
                            {prod.soLuong}
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                changeQuantity(prod.maSP, false);
                              }}
                            >
                              -{" "}
                            </button>
                          </td>
                          <td>{prod.giaBan.toLocaleString()}</td>
                          <td>
                            {(prod.soLuong * prod.giaBan).toLocaleString()}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                delProdInCart(prod.maSP);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
