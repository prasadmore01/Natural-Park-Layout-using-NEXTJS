import Image from "next/image";
import { Inter } from "next/font/google";
import Herosection from "@/Components/Home/Herosection";
import AnimalCards from "@/Components/Home/AnimalCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Herosection/>
      <AnimalCards />
    </main>
  );
}
