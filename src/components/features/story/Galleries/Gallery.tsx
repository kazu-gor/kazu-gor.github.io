import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import React, { useState } from 'react';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Gallery = ({ title, coverImage, date, excerpt, slug }: Props) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const imageClass = isHovered ? 'blur-sm' : '';
  console.log("Slug value:", slug);

  return (
    <Link href={`/saunas/${slug}`}>
      <a className="select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="center w-full relative inline-block"
          style={{ paddingTop: "75%" }} // 16:9のアスペクト比
        >
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className={`absolute top-0 left-0 w-full h-full object-cover ${imageClass}`}
          />
          {isHovered && (
            <div className="absolute top-2/4 left-1/2 text-white font-bold text-sm md:text-base -translate-x-2/4 -translate-y-2/4">
              {title}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default Gallery;
