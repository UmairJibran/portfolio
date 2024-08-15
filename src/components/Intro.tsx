'use client';

import profile from '@/data/profile.json';
import parse from 'html-react-parser';
import { Sacramento } from 'next/font/google';

import SocialStrip from '@/components/SocialStrip';

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
});

export default function Greetings() {
  return (
    <>
      <div id="intro">
        <h1 className={`${sacramento.className} text-6xl my-4`}>
          hey there, {profile.name.lastName.toLowerCase()} here!
        </h1>
        <p className="my-2 text-2xl font-black">{profile.subTitle.toLowerCase()}</p>
        <p>{parse(profile.extraInfo)}</p>
        <SocialStrip />
      </div>
    </>
  );
}
