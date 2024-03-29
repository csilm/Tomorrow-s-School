import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/tts-logo.png";
import logo1 from "../images/Website-design_3-09.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Button from "@mui/material/Button";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const { i18n, t } = useTranslation(["common", "home"]);

  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleNavbar = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/home"
    ) {
      setNavColor(true);
    }

    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, [navColor]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col justify-around overflow-hidden flex-wrap">
      <nav class={navColor === true ? "bg-white" : "bg-[#18181b]"}>
        <div class="ml-auto container flex flex-col justify-between">
          <div class="relative flex h-16 items-center justify-between left-0 lg:left-14 ">
            <div class="absolute inset-y-0 right-0 flex justify-around items-center sm:hidden">
              <button
                onClick={handleNavbar}
                type="button"
                class="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex sm:items-stretch justify-end items-center sm:justify-start">
              <div class="flex flex-shrink-0 md:w-48 sm:w-16 items-center">
                {navColor === true ? (
                  <img src={logo} className="w-48 " alt="" />
                ) : (
                  <img src={logo1} className="w-48" alt="" />
                )}
              </div>
              <div class="hidden sm:ml-6 sm:block absolute right-20">
                {/*<p className={navColor==false ? 'flex ml-28 space-x-4': 'text-white flex ml-28 space-x-4' } ></p>*/}
                <div
                  className={
                    navColor == false
                      ? "text-white flex ml-28 space-x-4"
                      : "flex ml-28 space-x-4"
                  }
                >
                  <Link to="/" className="flex">
                    <a
                      href="#"
                      class="px-3 py-2 font-medium"
                      aria-current="page"
                    >
                      {t("Home")}
                    </a>
                  </Link>

                  <Link to="/aboutus" className="flex">
                    <a href="#" class="px-3 py-2 font-medium">
                      {t("About us")}
                    </a>
                  </Link>

                  <Link to="/whatWeDo" className="flex">
                    <a href="#" class="px-3 py-2 font-medium">
                      {t("What we do")}
                    </a>
                  </Link>

                  <Link to="/joinus" className="flex">
                    <a href="#" class="px-3 py-2 font-medium">
                      {t("Join us")}
                    </a>
                  </Link>

                  <Link to="/contactus" className="flex">
                    <a href="#" class="px-3 py-2 font-medium">
                      {t("Contact us")}
                    </a>
                  </Link>
                  <Link to="/donate">
                    <a
                      href="#"
                      class="font-medium flex align-center justify-center"
                    >
                      <button className="bg-[#fab811] p-2">
                        {t("Donate")}
                      </button>
                    </a>
                  </Link>
                  <div className="d-flex justify-content-end align-items-center language-select-root">
                    <div>
                      <select
                        className="nav-link border-1 ml-1 mr-2 p-2 mt-1 text-sm bg-transparent"
                        value={localStorage.getItem("i18nextLng")}
                        onChange={handleLanguageChange}
                      >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden md:hidden " id="mobile-menu">
          <div class="space-y-1 pt-2 pb-3">
            {nav && (
              <div>
                <a
                  href="#"
                  class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </a>

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  What we do
                </a>

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Join us
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact us
                </a>
                <div class="flex align-center justify-center  font-medium"></div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
