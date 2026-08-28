import { fadeIn } from "@/utils/functions";
import { WideMenuProps } from "@/utils/types";
import { motion } from "framer-motion";
import { type ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export const WideMenuOptions = ({
  isUpperMenuOpen,
  setUpperMenuOpen,
}: WideMenuProps): ReactElement => {
  const { pathname } = useLocation();

  return (
    <motion.div
      variants={fadeIn("bottom", 0.2)}
      initial={isUpperMenuOpen ? "show" : "hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className={`w-screen h-[300px] ${pathname.includes("video") ? "bg-[#10100e] border-b" : "bg-[#f4f9fc]/90 backdrop-blur-lg"} ${isUpperMenuOpen ? "fixed" : "hidden"} top-0 left-0 z-40 border-b`}
    >
      <div className="w-full h-full flex justify-center">
        <div className="h-full w-[1440px] flex justify-center">
          <div className="h-full w-4/6 grid grid-cols-6">
            <div id="about" className="col-span-1 flex flex-col"></div>

            <div
              id="dev"
              className="col-span-1 flex flex-col pt-[70px] px-8 gap-y-2"
            >
              <h1 className={`font-body text-[16px]`}>Libraries</h1>
              <div className="flex flex-col">
                <Link
                  to={"/dev/auth"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("auth") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Auth
                </Link>
                <Link
                  to={"/dev/apps"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("apps") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Apps
                </Link>
                <Link
                  to={"/dev/products"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("products") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Products
                </Link>
              </div>
            </div>

            <div
              id="photo"
              className="col-span-1 flex flex-col pt-[70px] px-8 gap-y-2"
            >
              <h1 className={`font-body text-[16px]`}>Galleries</h1>
              <div className="flex flex-col">
                <Link
                  to={"/photo/humans"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("video") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Humans
                </Link>
                <Link
                  to={"/photo/distortion"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("video") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Distortion
                </Link>
              </div>
            </div>

            <div
              id="video"
              className="col-span-1 flex flex-col pt-[70px] px-8 gap-y-2"
            >
              <h1 className={`font-body text-[16px]`}>Galleries</h1>
              <div className="flex flex-col">
                <Link
                  to={"/video/viral"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("video") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Viral
                </Link>
                <Link
                  to={"/video/motion"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("video") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Motion
                </Link>
                <Link
                  to={"/video/shortfilms"}
                  onClick={() => {
                    setUpperMenuOpen(!isUpperMenuOpen);
                  }}
                  className={`pl-5 font-light ${pathname.includes("video") ? "text-indigo-600 underline font-medium" : "text-gray-600"} text-[14px]`}
                >
                  Shortfilms
                </Link>
              </div>
            </div>
            <div id="contact" className="col-span-1 flex flex-col"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
