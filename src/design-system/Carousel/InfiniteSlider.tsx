import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const LOGOS = [
  {
    id: "figma",
    element: <FigmaLogoIcon width={24} height={24} className="text-black" />,
  },
  {
    id: "github",
    element: (
      <GitHubLogoIcon width={24} height={24} className="text-slate-800" />
    ),
  },
  {
    id: "linkedIn",
    element: (
      <LinkedInLogoIcon width={24} height={24} className="text-slate-800" />
    ),
  },
  {
    id: "sb",
    element: (
      <Image
        src="/svg/SB.svg"
        alt=""
        width={140}
        height={24}
        className=" grayscale"
      />
    ),
  },
  {
    id: "wttj",
    element: (
      <Image
        src="/svg/WTTJ.svg"
        alt=""
        width={140}
        height={24}
        className=" grayscale"
      />
    ),
  },
  {
    id: "contentsquare",
    element: (
      <Image
        src="/svg/contentsquare-seeklogo.svg"
        alt=""
        width={140}
        height={24}
        className="grayscale"
      />
    ),
  },
];

export const InfiniteSlider = () => {
  return (
    <div className="relative m-auto max-w-[1300px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[768%] md:w-[1024%] lg:w-[1280%] xl:w-[calc(250px*10)] h-36">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-max h-max items-center justify-center"
            key={logo.id}
          >
            {logo.element}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-max h-max items-center justify-center"
            key={logo.id}
          >
            {logo.element}
          </div>
        ))}
      </div>
    </div>
  );
};
