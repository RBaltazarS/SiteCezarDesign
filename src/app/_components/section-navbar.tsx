
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../../public/iconCezar.png";
import { navItems } from "../../constants";
import Image from "next/image";
import { ModeToggle } from "./mode-dark-light";


export default function Navbar() {


  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <section>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <Image className="h-10 w-10 mr-2" src={Logo} alt="Logo" />
              <span className="text-xl tracking-tight">Cezar Marçal</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a className="hover:text-primary" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 p-[50rem]">
                <ModeToggle />
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 dark:text-black dark:bg-white bg-slate-50 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a className="hover:text-primary" href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  )
}
