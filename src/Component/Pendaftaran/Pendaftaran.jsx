import React from "react";
import withNavbar from "../Navbar/WithNavbar";
import "./Pendaftaran.scss";
import ContentPendaftaran1 from "./Content1/ContentPendaftaran1";
import CollapsePendaftaran from "./Content2/CollapsePendafataran";
import Footer from "../Home/Footer/Footer";
import Copyright from "../Copyright/Copyright";
import NavbarProgram from "../Program3hari/Navbar/Navbar3hari";
import TablePendaftaranContainer from "../../Container/Pages/Pendaftaran/Pendaftaran";

const Pendaftaran = () => {
  return (
    <>
    <NavbarProgram/>
    <div className="container-fluid pendaftaran">
      <div className="row">
        <div className="col-md-12 bg-pendaftaran">
          <ContentPendaftaran1 />
        </div>
        <div className="col-md-12 mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 bg-svg">
              <CollapsePendaftaran />
            </div>
            <div className="col-md-6">
             <TablePendaftaranContainer/>
            </div>
          </div>
        </div>
        <div className="col-md-12 footer">
          <Footer />
        </div>
        <div className="col-md-12">
          <Copyright/>
        </div>
      </div>
    </div>
    </>
  );
};

export default withNavbar(Pendaftaran);
