"use client"

import { useState, useEffect } from 'react';


// Função para obter a hora atual
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};


export default function About() {


  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    // Atualiza a hora a cada minuto
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="about" className="">
      <div className="bg-[#FFFFF] text-primary w-full ">
        <div className="flex flex-col items-center justify-center py-12 ">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-widel font-bold text-[#000] dark:text-[#FFF]">Design Gráfico</h1>
          <p className="text-4xl mt-10">Marçal</p>
          <div className="flex mt-6">
            <SnowflakeIcon className="text-[#000] h-6 w-6 dark:text-[#FFF]" />
            <SnowflakeIcon className="text-[#000] h-6 w-6 mx-2 dark:text-[#FFF]" />
            <SnowflakeIcon className="text-[#000] h-6 w-6 dark:text-[#FFF]" />
          </div>
          <div className="flex flex-col sm:flex-row md:items-center justify-between items-center w-full max-w-4xl mt-8">
            <div className='text-center'>
              <p>Sede em Salvador, BA</p>
              <p>Brasil {currentTime} GMT -3</p>
            </div>
            <div className="border-2 rounded-sm border-black h-12 dark:border-white" />
            <div className="text-center">
              <p className="font-bold">DESIGNER</p>
              <p className="font-bold">GRÁFICO</p>
            </div>
            <div className="border-2 rounded-sm border-black h-12 dark:border-white" />
            <div className='text-center'>
              <p>Disponibilidade Freelance</p>
              <p>Agenda Aberta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SnowflakeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  )
}