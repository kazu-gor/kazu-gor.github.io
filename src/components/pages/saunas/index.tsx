import { AiOutlineSmile } from 'react-icons/ai';
import { GalleryLayout } from '@/components/features/app/Layout';
import { Galleries } from '@/components/features/story/Galleries';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Sauna: React.VFC<Props> = ({ posts }) => {
  return (
    <GalleryLayout
      main={
        <div className="vstack gap-11 p-8 bg-primary-1">
          <Galleries posts={posts} title='Sauna' icon={<AiOutlineSmile />} nav='saunas' />
        </div>
      }
    />
  );
};
