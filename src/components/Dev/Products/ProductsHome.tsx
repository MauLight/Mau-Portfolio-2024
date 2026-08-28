import { ReactNode } from "react";
import { motion } from "framer-motion";

import ImgFadeWrapper from "@/components/Dev/Products/ImgFadeWrapper";

export default function ProductsHome() {
  return (
    <FadeinContainer>
      <div className="w-full border-t shadow-lg shadow-[#717579]/40 relative overflow-hidden border-[#e0e5ea] rounded-2xl bg-[#e6e5e0]/40 backdrop-blur-xl grid gap-y-10">
        <div className="grid grid-cols-3 gap-5 p-5">
          {/* first side of grid, spans 2 cols */}
          <div className="col-span-2 grid grid-cols-2 gap-5">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <video
                className="aspect-video object-cover"
                autoPlay
                muted
                loop
                src="https://res.cloudinary.com/dglhgnd47/video/upload/v1787726024/cropped_demo_igpycl.mp4"
              />
            </div>
            <div className="col-span-2 shrink-0 grid grid-cols-2 gap-5">
              <ImgFadeWrapper
                fade={false}
                url="https://res.cloudinary.com/dglhgnd47/image/upload/v1787756439/1_fix_ccl8v3.png"
              />
              <ImgFadeWrapper
                fade={false}
                url="https://res.cloudinary.com/dglhgnd47/image/upload/v1787756439/2_fix_cnfa9u.png"
              />
            </div>
          </div>
          {/* second side of grid, spans 1 col */}
          <div className="col-span-1 grid grid-cols-1 gap-5">
            <ImgFadeWrapper
              fade={false}
              url="https://res.cloudinary.com/dglhgnd47/image/upload/v1787762806/c3_oyiftb.jpg"
            />
            <ImgFadeWrapper
              fade={false}
              url="https://res.cloudinary.com/dglhgnd47/image/upload/v1787762805/ai_wefd3j.jpg"
            />
            <ImgFadeWrapper
              fade={false}
              url="https://res.cloudinary.com/dglhgnd47/image/upload/v1787762805/b2_gifx9c.jpg"
            />
          </div>
        </div>
      </div>
    </FadeinContainer>
  );
}

function FadeinContainer({ children }: { children: ReactNode }): ReactNode {
  const containerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1 },
    },
    hidden: {
      y: 100,
      opacity: 0,
      transition: { staggerChildren: 1, staggerDirection: -1 },
    },
  };

  return (
    <motion.div
      className="relative w-full min-h-screen flex flex-col justify-start items-center gap-y-20 pt-[90px] pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full h-full z-10">{children}</div>
      <div className="fixed inset-0 w-screen h-screen z-0">
        <img
          className="object-cover"
          src="https://res.cloudinary.com/dglhgnd47/image/upload/v1787727470/wmremove-transformed_n9tct0.jpg"
        />
      </div>
    </motion.div>
  );
}
