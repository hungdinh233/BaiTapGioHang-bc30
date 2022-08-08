import React, { Component } from "react";
import ProductItem from "./ProductItem";
const data = [
  {
    maSP: 1,
    tenSP: "VSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ProductList extends Component {
  state = {
    defaultProd: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
  };

  renderProd = () => {
    let { addToCart } = this.props;
    return data.map((prod, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem
            prod={prod}
            clickInfo={this.clickInfo}
            addToCart={addToCart}
          />
        </div>
      );
    });
  };

  clickInfo = (clickedPhone) => {
    this.setState({
      defaultProd: clickedPhone,
    });
    console.log(clickedPhone);
  };

  render() {
    let {
      tenSP,
      hinhAnh,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.state.defaultProd;
    return (
      <div>
        <div className="row justify-content-center">{this.renderProd()}</div>
        <hr />
        <div className="row mt-5">
          <div className="col-4">
            <h3 className="text-center">Tên máy : {tenSP}</h3>
            <img src={hinhAnh} alt="..." className="w-100" />
          </div>
          <divc className="col-6">
            <h3 className="text-center">Thông số kỹ thuật</h3>
            <table className="table col-6">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{heDieuHanh}</td>
                </tr>{" "}
                <tr>
                  <td>Camera trước</td>
                  <td>{cameraTruoc}</td>
                </tr>{" "}
                <tr>
                  <td>Camera sau</td>
                  <td>{cameraSau}</td>
                </tr>{" "}
                <tr>
                  <td>RAM</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{rom}</td>
                </tr>
              </tbody>
            </table>
          </divc>
        </div>
      </div>
    );
  }
}
