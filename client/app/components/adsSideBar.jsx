"use server";
import bannerAd from "../../public/images/BannerAds.jpg";
import Image from "next/image";
export default async function AdsSideBar() {
  return (
    <>
      <div className="bg-indigo-500 min-w-[15%] max-h-[100%] mx-auto my-[2.5rem] rounded-lg my-2 max-[1400px]:max-2xl:hidden">
        <Image
          alt="banner"
          src={bannerAd}
          width={250}
          className="my-5 mx-auto rounded-lg"
        />
      </div>
    </>
  );
}
