import Image from "next/image";
import { Children } from "react";

interface TestimonalsItem {
  children: React.ReactNode;
  source: string;
  name: string;
  position: string;
}

export default function TestimonalsItem({children, source, name, position}: TestimonalsItem) {
  return (
    <article className="px-8 flex flex-col items-center text-center gap-8">
      <Image
        className="h-auto rounded-full"
        src={source}
        width={72}
        height={0}
        alt={name}
      />
      <p className="text-this-grey-600 font-[barlow]">
        {children}
      </p>
      <h5 className="text-this-h5 font-black">{name}</h5>
      <span className="-mt-6 text-this-grey-400 text-[14px] font-[barlow]">
        {position}
      </span>
    </article>
  );
};
