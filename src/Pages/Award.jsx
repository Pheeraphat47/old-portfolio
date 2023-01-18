import "../Styles/Column.css";
import React, { useState } from "react";

function Award() {
  return (
    <div>
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">
        Award&Honors
      </h1>

      <div className="mt-40">
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a href="https://manticore-helloworldfennec.vercel.app/" target={"_blank"}><img
              src="../img/Helloworld.jpg"
              alt="helloworld"
              className="w-80 h-96 object-cover"
            /></a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              SIT Helloworld
            </h3>
            <p className="text-center text-lg">Best Front-End Development</p>
            <a
              href="https://drive.google.com/file/d/1icsecd2tCdOTn2Agm6_f_SI9oezNeeJX/view?usp=sharing"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">
                Readmore
              </button>{" "}
            </a>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <a
              href="https://www.canva.com/design/DAFQbQLz0nQ/XtaHO3kYkpr1AURXEXal8w/view?utm_content=DAFQbQLz0nQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target={"_blank"}
            >
              <img
                src="../img/Environhack.jpg"
                alt="environhack"
                className="w-80 h-96 object-cover"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Climathon BKK
            </h3>
            <p className="text-center text-lg">1st Runner Up</p>
            <a
              href="https://drive.google.com/file/d/1DkveOlw8Qjb57sEEIXn9HGEX5WMGF2VP/view?usp=sharing"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">
                Readmore
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <a
              href="https://drive.google.com/file/d/15i46LsiwKwhcs0ytwaoNg4kFECkaeNnG/view?usp=sharing"
              target={"_blank"}
            >
              <img
                src="../img/Chula.png"
                alt="chula"
                className="w-80 h-96 object-cover"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Charm Case Competition
            </h3>
            <p className="text-center text-lg">1st Runner Up</p>
            <a
              href="https://drive.google.com/file/d/18NBmkBfjH2loKFBOdnHEeQQsLNWXJjH1/view?usp=sharing"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">
                Readmore
              </button>
            </a>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <a href="https://iforgot.vercel.app/" target={"_blank"}>
              <img
                src="../img/Tobeit.jpg"
                alt="tobeit"
                className="w-80 h-96 object-cover"
              />
            </a>
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Tobeit66
            </h3>
            <p className="text-center text-lg">Best Project Award</p>
            <a
              href="https://drive.google.com/file/d/1ncKqNUKpef2AzZDpqYc8RDsupxLjsbkr/view?usp=sharing"
              target={"_blank"}
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">
                Readmore
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
