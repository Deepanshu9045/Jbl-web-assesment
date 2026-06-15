import React from 'react';

interface PageHeroProps {
  title: string;
  breadcrumbLabel: string;
}

export default function PageHero({ title, breadcrumbLabel }: PageHeroProps) {
  return (
    <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path d="M0,200 Q250,50 500,200 T1000,200" fill="none" stroke="#f97316" strokeWidth="2" className="opacity-50" />
          <path d="M0,250 Q300,100 600,250 T1000,250" fill="none" stroke="#f97316" strokeWidth="1.5" className="opacity-40" />
          <path d="M0,150 Q200,300 500,150 T1000,150" fill="none" stroke="#fb923c" strokeWidth="2" className="opacity-60" />
          <path d="M0,300 Q400,0 700,300 T1000,300" fill="none" stroke="#ea580c" strokeWidth="3" className="opacity-30" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-4">
          {title}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-medium mb-2">
          Lorem Ipsum Dolor Sit Amet
        </p>
        <div className="text-sm font-medium">
          <span className="text-[#f97316]">Home Page</span>
          <span className="text-gray-400 mx-2">{'>'}</span>
          <span className="text-gray-200">{breadcrumbLabel}</span>
        </div>
      </div>
    </section>
  );
}
