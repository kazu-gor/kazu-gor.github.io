// import { AiTwotoneTags } from 'react-icons/ai';
import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
// import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <div className="vstack gap-4">
      <div className="w-full h-64 sm:h-80">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-primary-1 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <div className="wrap gap-4">
        <Date date={date} />
      </div>
    </div>
  );
};
