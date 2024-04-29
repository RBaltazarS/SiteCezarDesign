import { features } from "@/constants"

export default function Feature() {
  return (
    <section id="feature">
      <div className="relative mb-10 mt-20">
        <div className="text-center">
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-widel font-bold text-[#000] dark:text-[#FFF]">
          Feature
        </h1>
        </div>
        
        <div className="flex flex-wrap mt-4 lg:mt-10">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-black text-primary justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}