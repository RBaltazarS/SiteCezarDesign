import { CheckCircle2 } from "lucide-react";
import imgService from "../../../public/imgService.png";
import { serviceItems } from "../../constants";
import Image from "next/image";



export default function Services() {
  return (
    <section id="services">
      <div className="">
        <div className="text-center">
          <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-widel font-bold text-[#000] dark:text-[#FFF]">
            Serviços
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="p-2 w-full lg:w-1/2">
            <Image src={imgService} alt="" />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {serviceItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-primary mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}