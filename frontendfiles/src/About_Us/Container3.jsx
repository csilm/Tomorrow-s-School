import React from "react";
import "../index.css";
import Img1 from "./Resource/images-08-min-210x284.png";
import Img2 from "./Resource/images-06-min-210x284.png";
import Img3 from "./Resource/images-07-min-210x284.png";
import { useTranslation } from "react-i18next";

const Container3 = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className=" h-auto w-full flex flex-row flex-wrap justify-center items-center bg-yellow-500 pt-20 pb-20">
      <div className=" h-auto lg:w-[20rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-3xl font-bold p-4">
          {t("Meet")}
          <br />
          {t("our")} <br />
          {t("team")}
        </h1>
      </div>
      <div className="h-auto lg:w-[20rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center text-left">
        <img className="" src={Img1} alt="" />
        <h1 className="text-2xl font-bold p-2">{t("Mel")} </h1>
        <h3 className="text-lg font-bold p-2">
          {t("Founder and 1. Chairwoman")}{" "}
        </h3>
        <p className="p-4">
          {" "}
          {t(
            "Mel went back to her German-Ethiopian roots and founded the idea of THE TOMORROW SCHOOL to honor her family story and to give back to her heritage."
          )}
        </p>
      </div>
      <div className="h-auto lg:w-[20rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center text-left">
        <img src={Img2} alt="" />
        <h1 className="text-2xl font-bold p-2 text-left"> {t("Lasse")} </h1>
        <h3 className="text-lg font-bold p-2">
          {t("Co-Founder, 2. Chairman and Legal Advisor")}
        </h3>
        <p className="p-4">
          {" "}
          {t(
            "Mel went back to her German-Ethiopian roots and founded the idea of THE TOMORROW SCHOOL to honor her family story and to give back to her heritage."
          )}
          .
        </p>
      </div>
      <div className="h-auto lg:w-[20rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center text-left">
        <img src={Img3} alt="" />
        <h1 className="text-2xl font-bold p-2"> {t("Alemayehu")} </h1>
        <h3 className="text-lg font-bold p-2"> {t("Member of Honor")}</h3>
        <p className="p-4">
          {t(
            "Mel went back to her German-Ethiopian roots and founded the idea of THE TOMORROW SCHOOL to honor her family story and to give back to her heritage."
          )}
        </p>
      </div>
    </div>
  );
};

export default Container3;
