'use client';

import profile from '@/data/profile.json';
import parse from 'html-react-parser';

export default function Greetings() {
  return (
    <>
      <div id="intro">
        <h1 className="greeting-text sacramento-regular">
          hey there, {profile.name.toLowerCase()} here!
        </h1>
        <p className="greeting-text-p subTitle">{profile.subTitle}</p>
        <p className="">{parse(profile.extraInfo)}</p>
      </div>
    </>
  );
}
