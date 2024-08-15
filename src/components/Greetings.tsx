'use client';

import Image from 'next/image';

import Intro from '@/components/Intro';
import '@/styles/greetings.scss';

import { image } from '@/data/profile.json';

export default function Greetings() {
  return (
    <>
      <div
        id="greeting"
        className="flex w-full h-full text-start items-center m-auto"
      >
        <Intro />
        <Image
          className="hero-image"
          alt="Cat Programmer"
          src={image}
          fetchPriority="low"
          width={450}
          height={450}
        />
      </div>
    </>
  );
}
