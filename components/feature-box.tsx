"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Play, Wifi, Tv, Monitor } from "lucide-react";

const features = [
  {
    value: 4000, // 4K as 4000 for animation
    display: "4K",
    label: "Ultra HD Quality",
    icon: <Monitor className="w-6 h-6 text-red-600" />,
  },
  {
    value: 90,
    display: "90+",
    label: "Online TV Channels",
    icon: <Tv className="w-6 h-6 text-red-600" />,
  },
  {
    value: 350,
    display: "350+",
    label: "Mbps Speed Internet",
    icon: <Wifi className="w-6 h-6 text-red-600" />,
  },
];

function AnimatedCounter({ to, display }: { to: number; display: string }) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }

    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, [to]);

  // If display is not a number, just show display
  if (isNaN(Number(display[0]))) return <>{display}</>;

  // Show animated number, then append suffix if needed
  return (
    <>
      {count}
      {display.endsWith("+") && "+"}
      {display.endsWith("K") && "K"}
    </>
  );
}

const FeatureBox = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-zinc-900 py-12 md:py-16 ">
      <div className="flex flex-col md:flex-row items-center px-4 container mx-auto max-w-screen-lg gap-8">
        {/* Left: Image Card */}
        <Card className="w-full md:w-1/2 p-0 overflow-hidden flex-shrink-0">
          <CardContent className="p-0">
            <AspectRatio ratio={16 / 16}>
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
                <span className="block w-20 h-20 bg-white/70 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Play className="w-8 h-8 text-red-600 fill-red-600" />
                </span>
              </button>
            </AspectRatio>
          </CardContent>
        </Card>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <Card className="w-full bg-transparent shadow-none border-none p-0">
            <CardContent className="p-0">
              <CardTitle className=" mb-4">
                <h2>Experience The Magical Features of Netbox</h2>
              </CardTitle>
              <p className="paraheading mb-2 max-w-xl">
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain
                and trouble.
              </p>
              <div className="flex gap-8 mb-8">
                {features.map((f) => (
                  <div className="flex flex-col items-center" key={f.label}>
                    <div
                      key={f.label}
                      className="flex justify-center items-start gap-2"
                    >
                      <div className="mb-2">{f.icon}</div>
                      <div className=" font-bold text-red-600">
                        <AnimatedCounter to={f.value} display={f.display} />
                      </div>
                    </div>{" "}
                    <div className="text-xs font-semibold">{f.label}</div>
                  </div>
                ))}
              </div>
              <Button>TRY US FREE</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureBox;
