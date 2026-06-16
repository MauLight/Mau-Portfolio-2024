import { type ReactElement } from "react";
import { VideoDisplayHorizontal } from "@/components/Common/VideoDisplayHorizontal";

const MotionHome = (): ReactElement => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#10100e] gap-y-32">
      <VideoDisplayHorizontal
        title=""
        description=""
        video={[
          "https://res.cloudinary.com/dglhgnd47/video/upload/v1781590286/Text_Cascade_kut7ic.webm",
        ]}
        bgColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />
      <VideoDisplayHorizontal
        title=""
        description=""
        video={[
          "https://res.cloudinary.com/dglhgnd47/video/upload/v1781590287/Kinetic_sevlrd.mp4",
        ]}
        bgColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />
      <VideoDisplayHorizontal
        title=""
        description=""
        video={[
          "https://res.cloudinary.com/dglhgnd47/video/upload/v1781590286/Timeless_mfqfp3.mp4",
        ]}
        bgColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />
      <VideoDisplayHorizontal
        title=""
        description=""
        video={[
          "https://res.cloudinary.com/dglhgnd47/video/upload/v1781590286/Ctlst_Logo_g8xms1.webm",
        ]}
        bgColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />
    </div>
  );
};

export default MotionHome;
