import CodeSection from "@/components/CodeSection";
import Demo from "@/components/Demo";
import { Icons } from "@/components/Icons";
import YoutubePlayer from "@/components/YoutubePlayer";
//import { redis } from "@/lib/redis";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import localFont from "next/font/local";

const fontScary = localFont({
  src: "../assets/Scary.ttf",
});

export default async function Home() {
  //const requests = await redis.get("served-requests");
  return (
    <div className="bg-blue-50 grainy-light min-h-screen">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl">
                <span className="orange_gradient">ProfanityGuard</span>
              </h1>
              <p className="mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap">
                Say goodbye to slow and expensive content moderation. Say hello
                to our{" "}
                <span className="font-scary font-bold text-red-500">
                  Open-source,
                </span>
                <span className="font-scary font-bold text-red-500">Free,</span>
                and{" "}
                <span className="font-scary font-bold text-red-500">Fast</span>.
                Not anymore. Introducing a fast, free and open-source profanity
                filter for your web apps.
              </p>

              <ul className="mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> Much
                    faster and cheaper to run than AI
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> Pretty
                    accurate
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> 100%
                    free & open-source
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> 10000
                    API requests served and counting
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20">
            <img
              alt="try-it"
              aria-hidden="true"
              src="/try-it.png"
              className="absolute w-40 left-2/3 -top-2 select-none hidden sm:block"
            />
            <Demo />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
