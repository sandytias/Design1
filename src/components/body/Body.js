import React from "react";
import "./Body.css";
import Bread from "./Bread";
import Vegetables from "../../image/vegetables.jpg";
import Forest from "../../image/forest.jpg";
import Farmer from "../../image/farmer.jpg";
import { AiFillContacts } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Beritaterkait from "../berita/Beritaterkait";

export const Body = () => {
  return (
    <div className="body">
      <Bread />
      <div className="row">
        <div className="col-2">
          <div className="sideleft">
            <img src={Vegetables} className="side" alt="wortel" />
          </div>
        </div>

        <div className="col-5">
          <div className="main">
            <h5 className="biru">News</h5>
            <br />
            <h2>Program YESS Tepat Untuk Tanah Laut</h2>
            <br />
            <p className="lorem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <figure className="position-relative">
              <img src={Farmer} alt="farmer" className="img-fluid" />
              <figcaption className="text1">
                SINERGI PROGRAM YESS KEMENTAN
              </figcaption>
            </figure>
          </div>
          <p>
            So when is it okay to use lorem ipsum? First, lorem ipsum works well
            for staging. It's like the props in a furniture store—filler text
            makes it look like someone is home.
          </p>
          <p>
            {" "}
            The same Wordpress template might eventually be home to a fitness
            blog, a photography website, or the online journal of a cupcake
            fanatic. Lorem ipsum helps them imagine what the lived-in website
            might look like.
          </p>
          <p>
            Second, use lorem ipsum if you think the placeholder text will be
            too distracting. For specific projects, collaboration between
            copywriters and designers may be best, however, like Karen McGrane
            said, draft copy has a way of turning any meeting about layout
            decisions into a discussion about word choice. So don't be afraid to
            use lorem ipsum to keep everyone focused.
          </p>
          <p>
            One word of caution: make sure your client knows that lorem ipsum is
            filler text. You don't want them wondering why you filled their
            website with a foreign language, and you certainly don't want anyone
            prematurely publishing it.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales augue ac congue pulvinar. Nulla tincidunt, nibh eu
            sollicitudin vulputate, erat dui venenatis dolor, ut viverra metus
            justo ut lacus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales augue ac congue pulvinar. Nulla tincidunt, nibh eu
            sollicitudin vulputate, erat dui venenatis dolor, ut viverra metus
            justo ut lacus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales augue ac congue pulvinar. Nulla tincidunt, nibh eu
            sollicitudin vulputate, erat dui venenatis dolor, ut viverra metus
            justo ut lacus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales augue ac congue pulvinar. Nulla tincidunt, nibh eu
            sollicitudin vulputate, erat dui venenatis dolor, ut viverra metus
            justo ut lacus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sodales augue ac congue pulvinar. Nulla tincidunt, nibh eu
            sollicitudin vulputate, erat dui venenatis dolor, ut viverra metus
            justo ut lacus.
          </p>
          <ul className="ulbody">
            <li className="taggs">tags</li>
            <li className="kotak">Healt</li>
            <li className="kotak">World</li>
            <li className="kotak">Corona</li>
          </ul>
        </div>
        <div className="col-3">
          <div className="trending">
            <h4>Trending</h4>
            <div className="trend">
              <div className="row">
                <div className="numbers col-3">
                  <p className="number1">1</p>
                </div>
                <div className="col-9">
                  <p className="judul">
                    <span className="hijau">TECHNOLOGY</span> / March 26,2020
                  </p>
                  <p className="teks">
                    YESS Program Regenerasi Petani Dan Kewirausahaan
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p className="number2">2</p>
                </div>
                <div className="col-9">
                  <p>
                    <span className="hijau">TECHNOLOGY</span> / March 26,2020
                  </p>
                  <p className="teks">
                    YESS Program Regenerasi Petani Dan Kewirausahaan
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p className="number3">3</p>
                </div>
                <div className="col-9">
                  <p>
                    <span className="hijau">TECHNOLOGY</span> / March 26,2020
                  </p>
                  <p className="teks">
                    Program YESS Dorong Pertanian Bertaraf Internasional
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p className="number4">4</p>
                </div>
                <div className="col-9">
                  <p>
                    <span className="hijau">TECHNOLOGY</span> / March 26,2020
                  </p>
                  <p className="teks">Program YESS Tepat Untuk Tanah Laut</p>
                </div>
              </div>
            </div>
          </div>
          <div className="index">
            <h4>Index</h4>
            <div className="indexing">
              <p>
                <span className="hijau">TECHNOLOGY</span>
              </p>
              <h5>
                PELATIHAN MANAJEMEN BISNIS BAGI PEMULA - Program YESS
                Pertanian...
              </h5>
              <p className="mini">
                <AiFillContacts />
                QuomondoSoft
              </p>
              <div className="duasatu row">
                <div className="col-8">
                  <p className="artikel">
                    The property,complete with seat screening from room,a
                    100-seat amphitheater and a swimming pond with sandy
                  </p>
                </div>
                <div className="col-4">
                  <img src={Forest} className="foto" alt="forest" />
                </div>
                <p className="mini">
                  <AiFillEye />
                  QuomondoSoft
                </p>
              </div>
            </div>
            <div className="indexing">
              <p>
                <span className="hijau">TECHNOLOGY</span>
              </p>
              <h5>
                PELATIHAN MANAJEMEN BISNIS BAGI PEMULA - Program YESS
                Pertanian...
              </h5>
              <p className="mini">
                <AiFillContacts />
                QuomondoSoft
              </p>

              <div className="duasatu row">
                <div className="col-8">
                  <p className="artikel">
                    The property,complete with seat screening from room,a
                    100-seat amphitheater and a swimming pond with sandy
                  </p>
                </div>
                <div className="col-4">
                  <img src={Forest} className="foto" alt="forest" />
                </div>
                <p className="mini">
                  <AiFillEye />
                  QuomondoSoft
                </p>
              </div>
            </div>
            <div className="indexing">
              <p>
                <span className="hijau">TECHNOLOGY</span>
              </p>
              <h5>
                PELATIHAN MANAJEMEN BISNIS BAGI PEMULA - Program YESS
                Pertanian...
              </h5>
              <p className="mini">
                <AiFillContacts />
                QuomondoSoft
              </p>

              <div className="duasatu row">
                <div className="col-8">
                  <p className="artikel">
                    The property,complete with seat screening from room,a
                    100-seat amphitheater and a swimming pond with sandy
                  </p>
                </div>
                <div className="col-4">
                  <img src={Forest} className="foto" alt="forest" />
                </div>
                <p className="mini">
                  <AiFillEye />
                  QuomondoSoft
                </p>
              </div>
            </div>
            <div className="indexing">
              <p>
                <span className="hijau">TECHNOLOGY</span>
              </p>
              <h5>
                PELATIHAN MANAJEMEN BISNIS BAGI PEMULA - Program YESS
                Pertanian...
              </h5>
              <p className="mini">
                <AiFillContacts />
                QuomondoSoft
              </p>

              <div className="duasatu row">
                <div className="col-8">
                  <p className="artikel">
                    The property,complete with seat screening from room,a
                    100-seat amphitheater and a swimming pond with sandy
                  </p>
                </div>
                <div className="col-4">
                  <img src={Forest} className="foto" alt="forest" />
                </div>
                <p className="mini">
                  <AiFillEye />
                  QuomondoSoft
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="sideright">
            <img src={Vegetables} className="side" alt="wortel" />
          </div>
        </div>
      </div>
      <Beritaterkait />
    </div>
  );
};
