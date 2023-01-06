import React, { useState } from "react";
import Img from "./images-06.jpg";
import axios from "axios";
import { useTranslation } from "react-i18next";

const All = () => {
  const [data, setData] = useState({});

  const handleVal = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const loadData = { ...data };
    loadData[field] = value;
    setData(loadData);
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://tomorrows-school-clone.onrender.com/contact", data)
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error.message);
    }
  };
  const { t } = useTranslation(["common"]);
  return (
    <div className=" w-full flex flex-wrap flex-row lg:p-[5rem] justify-center items-center">
      <div className="flex justify-start flex-col items-start w-full p-10 lg:pl-[15rem]">
        <h1 className="text-4xl font-bold font-serif">{t("Get in touch")}</h1>
        <p className="text-xl font-serif">
          {t("Contact us. We’d love to hear from you.")}
        </p>
      </div>
      <div className="h-auto lg:h-[30rem] w-full flex flex-wrap flex-row justify-between items-center">
        <div className=" lg:w-1/2 md:w-full sm:w-full flex flex-col justify-end flex-wrap items-end">
          <img
            src={Img}
            className="h-full lg:w-2/3 sm:w-full md:w-full p-5"
            alt=""
            srcset=""
          />
        </div>
        <div className=" lg:w-1/2   md:w-full sm:w-full flex flex-col justify-start flex-wrap items-end">
          <form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
            <input
              onChange={handleVal}
              className="rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-14 m-2 "
              type="text"
              name="name"
              id="name"
              placeholder={t("Enter name")}
            />
            <input
              onChange={handleVal}
              className="rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-14 m-2 "
              type="email"
              name="email"
              id="email"
              placeholder={t("Enter email")}
            />
            <textarea
              onChange={handleVal}
              className="rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 m-2 "
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder={t("Type here")}
            ></textarea>
            <div>
              {" "}
              <input
                className="rounded-md w-[7rem] h-[2.5rem] hover:bg-yellow-500 duration-500 hover:text-white border-2 border-yellow-500 m-2 mt-2"
                type="submit"
                value={t("Submit")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default All;
