'use client';
import { REVIEWS } from '@/lib/data';
import Image from 'next/image';
import { useRef } from 'react';

export default function ReviewsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="overflow-x-auto snap-x snap-mandatory" ref={ref}>
      <div className="flex gap-4 min-w-full">
        {REVIEWS.map((r, idx) => (
          <figure key={idx} className="snap-start shrink-0 w-80 rounded-lg border border-black/5 dark:border-white/10 p-4 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-3 mb-2">
              <Image src={r.avatar} alt={r.name} width={36} height={36} className="rounded-full" />
              <figcaption className="font-medium">{r.name}</figcaption>
            </div>
            <div className="flex items-center gap-1 text-weg">
              {'★★★★★'}
            </div>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-line">{r.text}</p>
          </figure>
        ))}
      </div>
    </div>
  );
}
