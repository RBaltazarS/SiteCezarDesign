import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { portfolio } from "@/constants";

export default function Portfolio() {


  return (
    <section id="portfolio">
      <div className="text-center mb-10 mt-20">
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-widel font-bold text-[#000] dark:text-[#FFF]">
          Portfolio
        </h1>
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
        {portfolio.map((item, index) => (
          <Card className={item.color} shadow="lg" key={index} isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
                onClick={() => { item.href }}
              />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}