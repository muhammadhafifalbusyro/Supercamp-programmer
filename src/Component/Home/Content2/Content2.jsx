import React from "react";
import "./Content2.scss";
import Logo from "../../../Assets/logo4.png";

const Content2 = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 right">
          <div className="card card-right">
            <div className="card-body">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 left">
          <div className="row">
            <div className="card card-left">
              <div className="card-body">
                <h1>SUPERCAMP PROGRAMMER</h1>
                <p className="mt-3">
                  Era teknologi saat ini berkembang dengan sangat pesat dan
                  dinamis , sistem manual telah beralih menjadi sistem otomatis
                  , kebutuhan dunia industri dalam membuat sistem aplikasi web
                  dan mobile terus meningkat , maka berkarier sebagai programmer
                  adalah karier yang menjanjikan untuk saat ini dan kedepannya .
                  Maka dari itu Supercamp Programmer hadir untuk mengisi
                  kebutuhan akan programmer baik mobile maupun web .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
