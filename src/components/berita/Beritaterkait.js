import React from "react";
import "./Beritaterkait.css";
import Alone from "../../image/alone.jpg";

const Beritaterkait = () => {
  return (
    <div className="belakang">
      <div className="container">
        <h3>Berita Terkait</h3>
        <br />
        <div className="row">
          <div className="col-4">
            <img src={Alone} className="alone" alt="alone" />
            <br />
            <br />
            <p className="judul">
              <span className="hijau">TECHNOLOGY</span> / March 26,2020
            </p>
            <h5>There may be no consoles in the future ea exec says</h5>
            <p>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower...
            </p>
          </div>

          <div className="col-4">
            <img src={Alone} className="alone" alt="alone" />
            <br />
            <br />
            <p className="judul">
              <span className="hijau">TECHNOLOGY</span> / March 26,2020
            </p>
            <h5>There may be no consoles in the future ea exec says</h5>
            <p>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower...
            </p>
          </div>

          <div className="col-4">
            <img src={Alone} className="alone" alt="alone" />
            <br />
            <br />
            <p className="judul">
              <span className="hijau">TECHNOLOGY</span> / March 26,2020
            </p>
            <h5>There may be no consoles in the future ea exec says</h5>
            <p>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beritaterkait;
