'use client';

import Greetings from '@/components/Greetings';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10 md:px-24 text-black">
      <span className="h-8" />
      <Greetings />
      <span className="h-8" />
    </main>
  );
}
