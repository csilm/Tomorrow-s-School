import React from "react";
import Library from "./Resource/Library.png";
import Class from "./Resource/Class.png";
import Kitchen from "./Resource/Kitchen.png";
import WC from "./Resource/WC.png";
import Book from "./Resource/Website-design_3-20-e1572723934242.png";
import Water from "./Resource/Website-design_3-22.png";
import Food from "./Resource/Website-design_3-19.png";
import Tree from "./Resource/tree.gif";
import Img1 from "./Resource/Round-4-35-min.jpg";
import Img2 from "./Resource/Round-4-36-min.jpg";
import Img3 from "./Resource/Round-4-37-min.jpg";
import Img4 from "./Resource/Round-4-34-min.jpg";
import Dwave from "./Resource/Round-4-31.png";
import "./style.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Container2 = () => {
  const { t } = useTranslation(["common"]);
  const [over, setover] = useState("");
  return (
    <div className="h-auto w-full flex flex-col flex-wrap hidden lg:block">
      <div className="h-[45rem] w-full bg-lime-200 ">
        <img
          onMouseOver={() => {
            setover("lib");
          }}
          className="absolute left-2 top-1/5 mt-14 w-[25rem]"
          src={Library}
          alt=""
        />
        <img
          onMouseOver={() => {
            setover("class");
          }}
          className="absolute left-1/4 ml-0 top-1/3 w-[25rem]"
          src={Class}
          alt=""
        />
        <img
          onMouseOver={() => {
            setover("kit");
          }}
          className=" absolute left-1/4 top-2/3 w-[30rem]"
          src={Kitchen}
          alt=""
        />
        <img
          onMouseOver={() => {
            setover("wc");
          }}
          className="absolute left-1/2 top-1/3 mt-16 w-[25rem]"
          src={WC}
          alt=""
        />
        <img
          onMouseOver={() => {
            setover("Tree");
          }}
          className="absolute right-0 top-3/3 h-auto  w-[28rem]"
          src={Tree}
          alt=""
        />
        <div
          className={
            over === "lib"
              ? "absolute left-2 top-1/5  mt-[25rem] ml-20 bg-slate-600 h-auto px-4 py-5 text-white border-2 border-yellow-400 rounded-md font-semibold  w-[15rem]"
              : "hidden"
          }
        >
          {t("Water Safe and clean drinking water")}
          <span className="text-yellow-300">
            <br /> {t("Deep-dive.")}
          </span>
          .
        </div>
        <div
          className={
            over === "class"
              ? "absolute left-1/4 top-1/3 -mt-[5rem] ml-20 bg-slate-600 h-auto px-4 py-5 text-white border-2 border-yellow-400 rounded-md font-semibold  w-[15rem]"
              : "hidden"
          }
        >
          {t(
            "Study material and books and study material accessible for every student."
          )}
          <span className="text-yellow-300">
            <br />
            {t("Read on")}
          </span>
          .
        </div>
        <div
          className={
            over === "wc"
              ? "absolute left-2/3 top-1/3 mt-[10rem] ml-20 bg-slate-600 h-auto px-4 py-5 text-white border-2 border-yellow-400 rounded-md font-semibold  w-[15rem]"
              : "hidden"
          }
        >
          {t("Sanitary and hygiene Basic toilets and washing hands.")}
          <span className="text-yellow-300"> {t("Why it’s important")}</span>.
        </div>
        <div
          className={
            over === "kit"
              ? "absolute left-1/4 top-2/3 mt-[8rem] ml-[25rem] bg-slate-600 h-auto px-4 py-5 text-white border-2 border-yellow-400 rounded-md font-semibold  w-[15rem]"
              : "hidden"
          }
        >
          {t("Food A school food program for students.")}
          <span className="text-yellow-300">
            <br />
            {t("Learn more.")}
          </span>
          .
        </div>
      </div>
      <div className="parent w-full h-auto flex flex-col flex-wrap justify-center items-center pt-24">
        <div className=" w-2/3 h-auto flex flex-row justify-around items-center">
          <img className="child w-1/2 " src={Img1} alt="" />
          <div className="flex justify-start flex-col items-start">
            <h1 className="bg-yellow-500 p-3 pl-7 pr-7 text-lg font-bold m-5 ml-0">
              {t("Water")}
            </h1>
            <img src={Dwave} className="mr-24 w-[22rem] h-1/3" alt="" />
          </div>
        </div>
        <div className="w-2/3 m-10 p-10 text-justify">
          {t(
            "The No. 1 of the basic need requirements for a healthy life is clean, fresh water. And as simple as it sounds, it is not. Worldwide, 2.1 billion people lack access to safe drinking water – 61 million people in Ethiopia. In rural areas, the children or women of a family walk up to three hours to find a water source; often to collect from contaminated surface or stagnant water which they share with animals. This kind of water is the main cause for illnesses like diarrhoea, bilharzia or typhoid fever – especially life-threatening to children.We want to make it our responsibility to help the school getting access to safe water by financing the build and maintenance of an appropriate water resource to ensure that clean, fresh water is always available for students and teachers. The water will supply the sanitary facilities, ensure a higher hygiene practice and support the school food program."
          )}
          {t(
            "We want to make it our responsibility to help the school getting access to safe water by financing the build and maintenance of an appropriate water resource to ensure that clean, fresh water is always available for students and teachers. The water will supply the sanitary facilities, ensure a higher hygiene practice and support the school food program."
          )}
        </div>
      </div>
      <div className="parent2 w-full h-auto flex flex-col flex-wrap justify-center items-center">
        <div className="w-2/3 h-auto flex justify-around items-center">
          <div className="flex justify-start flex-col items-start w-full">
            <h1 className="bg-yellow-500 p-3 pl-7 pr-7 text-lg font-bold m-5 mr-4">
              {t("Sanitary")}
            </h1>
            <h1 className="bg-yellow-500 p-3 pl-7 pr-7 text-lg font-bold ml-20">
              {t("and hygiene")}
            </h1>
            <img src={Water} className="mr-24 w-[22rem] h-1/3" alt="" />
          </div>
          <img src={Img2} className="child2 w-3/5" alt="" />
        </div>
        <div className="w-2/3 m-10 p-10 text-justify">
          {t(
            "The No. 1 of the basic need requirements for a healthy life is clean, fresh water. And as simple as it sounds, it is not. Worldwide, 2.1 billion people lack access to safe drinking water – 61 million people in Ethiopia. In rural areas, the children or women of a family walk up to three hours to find a water source; often to collect from contaminated surface or stagnant water which they share with animals. This kind of water is the main cause for illnesses like diarrhoea, bilharzia or typhoid fever – especially life-threatening to children.We want to make it our responsibility to help the school getting access to safe water by financing the build and maintenance of an appropriate water resource to ensure that clean, fresh water is always available for students and teachers. The water will supply the sanitary facilities, ensure a higher hygiene practice and support the school food program."
          )}{" "}
        </div>
      </div>
      <div className="parent w-full h-auto flex flex-col flex-wrap justify-center items-center pt-24">
        <div className="w-2/3 h-auto flex flex-row justify-around items-center">
          <img className="child w-1/2" src={Img4} alt="" />
          <div className="flex justify-start flex-col items-start">
            <h1 className="bg-yellow-500 p-3 pl-7 pr-7 text-lg font-bold mt-10 m-3 ml-0">
              {t("Study")}
            </h1>
            <h1 className="bg-yellow-500 p-3 pl-7 pr-7 text-lg font-bold  ml-5 w-1/2">
              {t("material")}
            </h1>
            <img src={Book} className="mr-24 w-[22rem]  " alt="" />
          </div>
        </div>
        <div className="w-2/3 m-10 p-10 text-justify">
          {t(
            "The No. 1 of the basic need requirements for a healthy life is clean, fresh water. And as simple as it sounds, it is not. Worldwide, 2.1 billion people lack access to safe drinking water – 61 million people in Ethiopia. In rural areas, the children or women of a family walk up to three hours to find a water source; often to collect from contaminated surface or stagnant water which they share with animals. This kind of water is the main cause for illnesses like diarrhoea, bilharzia or typhoid fever – especially life-threatening to children. We want to make it our responsibility to help the school getting access to safe water by financing the build and maintenance of an appropriate water resource to ensure that clean, fresh water is always available for students and teachers. The water will supply the sanitary facilities, ensure a higher hygiene practice and support the school food program."
          )}
        </div>
      </div>
      <div className="parent2 w-full h-auto flex flex-col flex-wrap justify-center items-center">
        <div className="w-2/3 h-auto flex justify-around items-center">
          <div className="flex justify-start flex-col items-start w-full">
            <h1 className="bg-yellow-500 p-3 pl-7 pr-7 text-lg font-bold ml-20">
              {t("FOOD")}
            </h1>
            <img src={Food} className="mr-24 w-[22rem]  h-1/3" alt="" />
          </div>
          <img src={Img3} className="child2 w-3/5" alt="" />
        </div>
        <div className="w-2/3 m-10 p-10 text-justify">
          {t(
            "For most of us, going to the bathroom is the most natural thing to do. We don’t think twice about it – we use the toilet, wash our hands, and that’s that. For children in developing countries, however, this routine is a whole different story: 39% of Primary Schools in Ethiopia only have limited sanitary services, 61% have none! And only 5% of these schools are able to provide hygiene facilities including water and soap. In numbers this means that 25 million children are exposed to health-endangering bacteria and germs everyday. These circumstances lead to infections, illness and ultimately to absence and drop-outs of school or worse. Girls are particularly affected once a month. Building well-functioning sanitary facilities, install a sustainable waste management system and providing hygiene education to teachers and students are one of our top priorities to keep everyone fit for school."
          )}
        </div>
      </div>
    </div>
  );
};

export default Container2;
