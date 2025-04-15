import Clients from "@/components/Clients";
import { Course } from "@/components/Course";
import { Course2 } from "@/components/Course2";
import { Course3 } from "@/components/Course3";
import { Course4 } from "@/components/Course4";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Honors from "@/components/Honors";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <div>
        <h1 className="heading">
        Additional <span className="text-blue-200">Coursework</span>
      </h1>
        <div className=" flex flex-wrap justify-center items-center">
          
        <Course2 />
        <Course3/>
        <Course />
        <Course4/>
        </div>
        </div>
        
        <Honors />
        <Footer />
      </div>
    </main>
  );
} 

