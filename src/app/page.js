import HeroStore from "@/component/hero";
import NavBar from "@/component/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroStore />
    </div>
  );
}
