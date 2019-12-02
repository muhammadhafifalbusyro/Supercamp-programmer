import React from "react";
import svg from "../../../Assets/redux.svg";
import "./Content31.scss";

const Content31 = () => {
  return (
    <div className="row ">
      <div className="col-md-12 mt-5 mb-5 text-center c-3">
        <h1 className="h1-program">Program</h1>
      </div>
      <div className="col-md-12 d-flex justify-content-around  flex-wrap">
        <div
          className="card card-content31-program text-center"
          style={{ width: "18rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1.05em"
            height="1em"
            style={{
              msTransform: "rotate(360deg)",
              WebkitTransform: "rotate(360deg)",
              transform: "rotate(360deg)"
            }}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 244"
          >
            <path
              d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896c-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895c.326 4.887 2.28 9.122 5.212 12.054c-11.076 21.828-28.016 37.791-53.426 51.148c-17.266 9.122-35.183 12.38-53.1 10.1c-14.66-1.955-26.062-8.47-33.23-19.222c-10.424-15.963-11.401-33.23-2.605-50.496c6.19-12.38 15.962-21.502 22.152-26.063c-1.303-4.235-3.258-11.402-4.235-16.614c-47.237 34.207-42.35 80.468-28.016 102.295c10.75 16.29 32.577 26.389 56.684 26.389c6.515 0 13.03-.652 19.546-2.28c41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176c16.288 10.751 28.016 24.76 34.531 41.7c5.538 13.683 5.212 27.04-.652 38.443c-9.121 17.266-24.432 26.714-44.63 26.714c-13.031 0-25.41-3.91-31.926-6.842c-3.583 3.258-10.099 8.47-14.66 11.729c14.009 6.515 28.343 10.099 42.025 10.099c31.274 0 54.404-17.267 63.2-34.533c9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895c-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325c-13.357-22.153-18.895-46.26-16.94-72.323c1.302-19.547 7.818-36.488 19.22-50.497c9.447-12.054 27.69-17.918 40.07-18.243c34.531-.652 49.19 42.351 50.168 59.618c4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451c-14.985 41.7-5.212 81.771 13.031 113.372c-1.628 2.28-2.606 5.864-2.28 9.448z"
              fill="#1C3864"
            />
          </svg>

          <div className="card-body ">
            <h5 className="card-title">Program 3 Hari</h5>
            <p className="btn-program">
              Program ini ditujukan bagi kamu yang sudah memahami bahasa
              pemrograman dasar dan framework . Kamu akan diberikan pelatihan
              untuk dapat menggunakan fitur-fitur atau third part library
              tertentu dari suatu framework .
            </p>
            <button className="btn btn-success mb-3">Availbale</button>
          </div>
        </div>
        <div
          className="card card-content31-program text-center "
          style={{ width: "18rem" }}
        >
          <i className="fab fa-react"></i>
          <div className="card-body">
            <h5 className="card-title">Program 1 Bulan</h5>
            <p className="btn-program">
              Program ini ditujukan bagi kamu yang sudah memahami bahasa
              pemrograman dasar namun belum dapat menggunakan framework . Kamu
              akan diberikan pelatihan untuk dapat menggunakan framework dari
              awal hingga dapat membuat aplikasi web atau mobile .
            </p>
            <button className="btn btn-danger ">Disable</button>
          </div>
        </div>
        <div
          className="card  card-content31-program text-center"
          style={{ width: "18rem" }}
        >
          <i className="fa fa-code"></i>
          <div className="card-body">
            <h5 className="card-title">Program 3 bulan</h5>
            <p className="btn-program">
              Program ini ditujukan bagi kamu yang baru terjun ke dalam dunia
              pemrograman . Kamu akan diberikan pelatihan untuk dapat memahami
              bahasa pemrograman dasar dan dapat menggunakan framework dari awal
              hingga dapat membuat aplikasi web atau mobile . Setelah lulus kamu
              akan langsung disalurkan kerja ke perusahaan rekanan kami .
            </p>
            <button className="btn btn-danger ">Disable</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content31;
