import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Link from "next/link";
import { Wifi, Satellite, Tv, Cable, ArrowRight, Play } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const solutions = [
  {
    title: "Broadband",
    icon: Cable,
    desc: "Many desktop Wifi packages and web page editors now use Lorem Ipsum budgets",
    link: "#",
  },
  {
    title: "WIFI Internet",
    icon: Wifi,
    desc: "Many desktop Wifi packages and web page editors now use Lorem Ipsum budgets",
    link: "#",
  },
  {
    title: "Satellite TV",
    icon: Satellite,
    desc: "Many desktop Wifi packages and web page editors now use Lorem Ipsum budgets",
    link: "#",
  },
];

const Solutions = () => {
  return (
    <section className="py-16 bg-white container mx-auto max-w-screen-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Find Perfect Network Solutions
      </h2>

      <div className="flex flex-col  md:flex-row items-stretch gap-8 mb-8">
        {/* Left side - 3 cards grid */}
        <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 gap-4 w-full md:w-1/2">
          {/* First card (top left) */}
          <Card className="border border-gray-200 rounded-xl shadow-none hover:shadow-md transition-shadow h-full group p-0">
            <CardContent className="flex flex-col items-start p-8 gap-4 h-full">
              <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors mb-4">
                {(() => {
                  const Icon = solutions[0].icon;
                  return <Icon className="w-6 h-6 text-red-600" />;
                })()}
              </div>
              <CardTitle className="font-semibold text-gray-900">
                {solutions[0].title}
              </CardTitle>
              <p className="text-gray-500 mb-2">{solutions[0].desc}</p>
              <Link
                href={solutions[0].link}
                className="text-red-600 font-bold mt-auto hover:underline flex items-center gap-1"
              >
                READ MORE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Second card (top right) */}
          <Card className="border border-gray-200 rounded-xl shadow-none hover:shadow-md transition-shadow h-full group p-0">
            <CardContent className="flex flex-col items-start p-8 gap-4 h-full">
              <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors mb-4">
                {(() => {
                  const Icon = solutions[1].icon;
                  return <Icon className="w-6 h-6 text-red-600" />;
                })()}
              </div>
              <CardTitle className="font-semibold text-gray-900">
                {solutions[1].title}
              </CardTitle>
              <p className="text-gray-500 mb-2">{solutions[1].desc}</p>
              <Link
                href={solutions[1].link}
                className="text-red-600 font-bold mt-auto hover:underline flex items-center gap-1"
              >
                READ MORE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Third card (bottom, spans both columns) */}
          <Card className="border border-gray-200 rounded-xl shadow-none hover:shadow-md transition-shadow h-full col-span-2 group p-0">
            <CardContent className="flex flex-col items-start p-8 gap-4 h-full">
              <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors mb-4">
                {(() => {
                  const Icon = solutions[2].icon;
                  return <Icon className="w-6 h-6 text-red-600" />;
                })()}
              </div>
              <CardTitle className="font-semibold text-gray-900">
                {solutions[2].title}
              </CardTitle>
              <p className="text-gray-500 mb-2">{solutions[2].desc}</p>
              <Link
                href={solutions[2].link}
                className="text-red-600 font-bold mt-auto hover:underline flex items-center gap-1"
              >
                READ MORE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Right side - image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <AspectRatio ratio={2 / 3}>
            <Image
              src="/dummy.jpg"
              alt="Feature Preview"
              fill
              className="object-cover rounded-xl"
              priority
            />
            <button
              className="absolute inset-0 flex items-center justify-center focus:outline-none"
              aria-label="Play Video"
              style={{ pointerEvents: "none" }}
            >
              <span className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <Play className="w-8 h-8 text-red-600 fill-red-600" />
              </span>
            </button>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
