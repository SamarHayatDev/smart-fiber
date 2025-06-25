"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import FadeInWhenVisible from "./fade-in-when-visible";

interface BannerCategory {
  id: string;
  name: string;
  slug: string;
}

interface BannerItem {
  id: string;
  slug: string;
  title: string;
  description?: string;
  category?: BannerCategory;
  cover_image_id?: string;
}

// ✅ ISP Banner Data
const banners: BannerItem[] = [
  {
    id: "1",
    slug: "fiber-internet",
    title: "Experience Lightning-Fast Fiber Internet",
    description:
      "Enjoy uninterrupted streaming, gaming, and video calls with our ultra-fast fiber plans starting at just PKR 2,499/month.",
    category: {
      id: "c1",
      name: "Fiber",
      slug: "fiber",
    },
    cover_image_id: "/dummy.jpg",
  },
  {
    id: "2",
    slug: "student-plan",
    title: "Affordable Internet Plans for Students",
    description:
      "Special discounted packages for students with high-speed connectivity and no data caps.",
    category: {
      id: "c2",
      name: "Student",
      slug: "student",
    },
    cover_image_id: "/dummy.jpg",
  },
  {
    id: "3",
    slug: "corporate-solutions",
    title: "Reliable Internet for Your Business",
    description:
      "Boost productivity with our dedicated corporate internet services tailored for offices and teams.",
    category: {
      id: "c3",
      name: "Business",
      slug: "business",
    },
    cover_image_id: "/dummy.jpg",
  },
];

export default function HeroSlider() {
  if (banners.length === 0) {
    return null;
  }

  return (
    <Carousel
      className="container mx-auto"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {banners.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative h-[500px] container mx-auto overflow-hidden">
              <Image
                src={item.cover_image_id || "/dummy.jpg"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 md:p-10 container mx-auto">
                <div className="container mx-auto max-w-screen-lg p-4 pt-7 ">
                  {" "}
                  <FadeInWhenVisible duration={0.8}>
                    <div className="flex flex-wrap gap-2 max-w-[450px] mb-6">
                      {item.category && (
                        <span className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm">
                          {item.category.name}
                        </span>
                      )}
                    </div>{" "}
                  </FadeInWhenVisible>
                  <FadeInWhenVisible duration={1.2}>
                    <h1 className="text-white mb-2 max-w-[450px]">
                      {item.title}
                    </h1>{" "}
                  </FadeInWhenVisible>{" "}
                  <FadeInWhenVisible duration={1.6}>
                    <p className="text-white/70 paraheading max-w-[450px]">
                      {item.description}
                    </p>{" "}
                  </FadeInWhenVisible>
                  <FadeInWhenVisible duration={2}>
                    <Button asChild>
                      <Link href={`/plans/${item.slug}`}>Explore Plans</Link>
                    </Button>
                  </FadeInWhenVisible>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
