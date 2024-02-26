import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
       <HomeHeader />
       <div className="flex flex-col items-center mt-48">
         <Image
           src="https://freelogopng.com/images/all_img/1657952217google-logo-png.png"
           alt="Google Logo"
           width={300}
           height={100}
           priority
           style={{width: 'auto'}}
         />
        <HomeSearch />
       </div>
    </>
  )
}
