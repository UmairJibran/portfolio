'use client';

import Image from 'next/image';

import Intro from '@/components/Intro';
import '@/styles/greetings.scss';

import { image } from '@/data/profile';

export default function Greetings() {
  return (
    <>
      <div id="greeting" className="flex">
        <Intro />
        <Image
          className="hero-image"
          alt="Jibran"
          src={image}
          fetchPriority="low"
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
