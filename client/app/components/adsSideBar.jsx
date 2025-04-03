"use server";
import bannerAd from "../../public/images/BannerAds.jpg";
import Image from "next/image";
export default async function AdsSideBar() {
  return (
    <>
      <div className="hidden 2xl:block bg-indigo-500 min-w-[15%] max-h-[100%] mx-5 my-[2.5rem] rounded-lg my-2">
        <Image
          alt="banner"
          src={bannerAd}
          width={150}
          className="mx-auto my-5 rounded-lg"
        />
      </div>
    </>
  );
}
