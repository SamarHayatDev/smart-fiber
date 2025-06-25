import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import FadeInWhenVisible from "./fade-in-when-visible";
import Link from "next/link";

const plans = [
  {
    title: "Internet For Personal",
    speed: "5-10",
    speedUnit: "MBPS",
    image: "/dummy.jpg",
    features: ["Single Device Uses", "Phone & Computer", "Random IP"],
    price: 25,
    priceUnit: "/MONTH",
    link: "#",
  },
  {
    title: "Internet For Family",
    speed: "10-15",
    speedUnit: "MBPS",
    image: "/dummy.jpg",
    features: ["20 Devices Allowed", "Phone, Computer & TV", "Random IP"],
    price: 55,
    priceUnit: "/MONTH",
    link: "#",
  },
  {
    title: "Internet For Corporate",
    speed: "Unlimited",
    speedUnit: "MBPS",
    image: "/dummy.jpg",
    features: ["Unlimited Devices Allowed", "Any Devices", "Fixed IP"],
    price: 95,
    priceUnit: "/MONTH",
    link: "#",
  },
];

const BestPlan = () => {
  return (
    <section className="container mx-auto max-w-screen-lg py-16 px-4">
      <FadeInWhenVisible duration={0.8}>
        <h2 className="text-center mb-4">Discover Our Best Value Plans</h2>
      </FadeInWhenVisible>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <Card key={plan.title} className="h-full flex flex-col pt-0">
            <CardHeader className="p-0 relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover rounded-t-xl"
                  priority={idx === 0}
                />
              </AspectRatio>
              <div className="absolute top-4 right-4 text-sm shadow">
                {/* {plan.speed} <span className="">{plan.speedUnit}</span> */}
                <Button size={"sm"} className="text-xs">
                  {plan.speed} {plan.speedUnit}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <CardTitle className=" mb-4">
                <h6>{plan.title}</h6>
              </CardTitle>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 ">
                    <span className="text-red-600 text-xs">&#10003;</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mb-4">
                <div className="text-sm text-muted-foreground">START FROM</div>
                <div className="text-lg font-bold text-red-600">
                  ${plan.price}{" "}
                  <span className=" font-normal text-black">
                    {plan.priceUnit}
                  </span>
                </div>
              </div>
              <Button asChild variant="link" className="p-0 h-auto ">
                <Link href={plan.link}>BUY PLANS</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BestPlan;
