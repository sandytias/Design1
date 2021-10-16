import React from "react";
import Logo2 from "../../image/logo2.jpg";
import Logo1 from "../../image/logo1.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import "./Categories.css";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";

const Categories = () => {
  return (
    <div className="background">
      <div className="container">
        <img src={Logo2} className="catlog2" alt="logo2" />
        <img src={Logo1} className="catlog1" alt="logo1" />
        <br />
        <br />
        <br />
        {/* <ul className="ulcat">
          <li className="instagram">
            <AiFillInstagram />
          </li>
          <li className="facebook">
            <AiFillFacebook />
          </li>
          <li className="youtube">
            <AiFillYoutube />
          </li>
          <li className="insta">
            <AiFillInstagram />
          </li>
        </ul> */}
        <div className="row">
          <div className="category col-4">
            <h4>News categories</h4>
            <br />
            <h5>News</h5>
            <h5>Entertainment</h5>
            <h5>Produk Pertanian</h5>
            <h5>Foto</h5>
            <h5>Video</h5>
            <h5>Infografis</h5>
          </div>

          <div className="category col-4">
            <h4>Jaringan Kementan</h4>
            <br />
            <h5>Reformasi Birokrasi</h5>
            <h5>Regulasi</h5>
            <h5>Layan Publik</h5>
            <h5>Indoagropedia</h5>
            <h5>Perpustakaan</h5>
            <h5>Kontak Pengaduan</h5>
          </div>

          <div className="category col-4">
            <h4>Yess contact services</h4>
            <br />
            <h5>
              <BsFillPhoneFill /> On your mobile
            </h5>
            <h5>
              <BsPhoneVibrateFill /> On smart speakers
            </h5>
            <h5>
              <BsNewspaper /> Contact Newspark news
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
