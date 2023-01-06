import React from "react";
import Library from "./Resource/Library.png";
import Class from "./Resource/Class.png";
import Kitchen from "./Resource/Kitchen.png";
import WC from "./Resource/WC.png";
import Wave from "./Resource/Website-design_3-07.png";
import Book from "./Resource/Website-design_3-20-e1572723934242.png";
import Water from "./Resource/Website-design_3-22.png";
import Food from "./Resource/Website-design_3-19.png";
import "./style.css";
import { useTranslation } from "react-i18next";

const Container1 = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className=" pt-10 lg:hidden sm:block md:block ">
      <div className=" h-auto w-full flex flex-col flex-wrap justify-center items-center">
        <div className="">
          <img className=" w-[15rem] h-auto" src={Library} alt="" />
        </div>
        <div className="h-auto w-full flex flex-row flex-wrap justify-around items-center">
          <div className="bg-yellow-500 w-1/3 m-5 p-4 text-xl font-bold">
            {t("Water")}
          </div>
          <div className="w-1/2 pt-5">
            <img src={Wave} className="w-[10rem] pr-10" alt="" />
            <img src={Wave} className="w-[10rem] pl-10" alt="" />
          </div>
        </div>
        <div className="text-md font-san text-left p-10">
          {t(
            "The No. 1 of the basic need requirements for a healthy life is clean, fresh water. And as simple as it sounds, it is not. Worldwide, 2.1 billion people lack access to safe drinking water – 61 million people in Ethiopia. In rural areas,  the children or women of a family walk up to three hours to find a water source; often to collect from contaminated surface or stagnant water which they share with animals.  This kind of water is the main cause for illnesses like diarrhoea, bilharzia or typhoid fever – especially life-threatening to children.We want to make it"
          )}
          <h1 className="text-lg font-bold">
            {t(
              "our responsibility to help the school getting access to safe water"
            )}
          </h1>
          by financing the build and maintenance of an appropriate water
          resource to ensure that clean, fresh water is always available for
          students and teachers. The water will supply the sanitary facilities,
          ensure a higher hygiene practice and support the school food program.
        </div>
      </div>
      <div className="h-auto w-full flex flex-col flex-wrap justify-center items-center">
        <img className="w-[25rem] pt-16 h-auto" src={WC} alt="" />
        <div className="h-auto w-full flex flex-row flex-wrap justify-around items-center">
          <img src={Water} className="w-[20rem] mt-10 ml-20 " alt="" />
          <div className="w-[20rem] flex flex-col flex-wrap ">
            <h1 className="w-1/2 bg-yellow-500 pl-7 pr-7 p-3 font-sans font-bold text-lg">
              Sanitary
            </h1>
            <h1 className="w-full bg-yellow-500 pl-7 pr-7 p-3 font-sans font-bold text-lg mt-3 ml-5">
              and Hygiene
            </h1>
          </div>
        </div>
        <div className="text-md font-san text-left p-10">
          For most of us, going to the bathroom is the most natural thing to do.
          We don’t think twice about it – we use the toilet, wash our hands, and
          that’s that. For children in developing countries, however, this
          routine is a whole different story: 39% of Primary Schools in Ethiopia
          only have limited sanitary services, 61% have none! And only 5% of
          these schools are able to provide hygiene facilities including water
          and soap. In numbers this means that 25 million children are exposed
          to health-endangering bacteria and germs everyday. These circumstances
          lead to infections, illness and ultimately to absence and drop-outs of
          school or worse. Girls are particularly affected once a month.
          <h1 className="text-lg font-bold">
            Building well-functioning sanitary facilities, install a sustainable
            waste management system and providing hygiene education
          </h1>
          by financing the build and maintenance of an appropriate water
          resource to ensure that clean, fresh water is always available for
          students and teachers. The water will supply the sanitary facilities,
          ensure a higher hygiene practice and support the school food program.
        </div>
      </div>
      <div className="h-auto w-full flex flex-col flex-wrap justify-center items-center">
        <img className="w-[25rem] pt-16 h-auto" src={Class} alt="" />
        <div className="h-auto w-full flex flex-row flex-wrap justify-center items-center">
          <div className="w-1/2 flex flex-col flex-wrap ">
            <h1 className="w-1/2 bg-yellow-500 pl-7 pr-7 p-3 font-sans font-bold text-lg">
              Study
            </h1>
            <h1 className="w-full bg-yellow-500 pl-7 pr-7 p-3 font-sans font-bold text-lg mt-3">
              Material
            </h1>
          </div>
          <img src={Book} className="w-1/2 mt-10" alt="" />
        </div>
        <div className="text-md font-san text-left p-10">
          Water The No. 1 of the basic need requirements for a healthy life is
          clean, fresh water. And as simple as it sounds, it is not. Worldwide,
          2.1 billion people lack access to safe drinking water – 61 million
          people in Ethiopia. In rural areas, the children or women of a family
          walk up to three hours to find a water source; often to collect from
          contaminated surface or stagnant water which they share with animals.
          This kind of water is the main cause for illnesses like diarrhoea,
          bilharzia or typhoid fever – especially life-threatening to
          children.We want to make it
          <h1 className="text-lg font-bold">
            our responsibility to help the school getting access to safe water
          </h1>
          by financing the build and maintenance of an appropriate water
          resource to ensure that clean, fresh water is always available for
          students and teachers. The water will supply the sanitary facilities,
          ensure a higher hygiene practice and support the school food program.
        </div>
      </div>
      <div className="h-auto w-full flex flex-col flex-wrap justify-center items-center">
        <img className="w-[30rem] pt-16 h-auto" src={Kitchen} alt="" />
        <div className="h-auto w-full flex flex-row flex-wrap justify-around items-center">
          <img src={Food} className="w-3/5 mt-16 m-5" alt="" />
          <div className="w-1/3 flex flex-col flex-wrap ">
            <h1 className="w-1/2 bg-yellow-500 pl-5 pr-5 p-3 font-sans font-bold text-lg">
              Food
            </h1>
          </div>
        </div>
        <div className="text-md font-san text-left p-10">
          Water The No. 1 of the basic need requirements for a healthy life is
          clean, fresh water. And as simple as it sounds, it is not. Worldwide,
          2.1 billion people lack access to safe drinking water – 61 million
          people in Ethiopia. In rural areas, the children or women of a family
          walk up to three hours to find a water source; often to collect from
          contaminated surface or stagnant water which they share with animals.
          This kind of water is the main cause for illnesses like diarrhoea,
          bilharzia or typhoid fever – especially life-threatening to
          children.We want to make it
          <h1 className="text-lg font-bold">
            our responsibility to help the school getting access to safe water
          </h1>
          by financing the build and maintenance of an appropriate water
          resource to ensure that clean, fresh water is always available for
          students and teachers. The water will supply the sanitary facilities,
          ensure a higher hygiene practice and support the school food program.
        </div>
      </div>
    </div>
  );
};

export default Container1;
