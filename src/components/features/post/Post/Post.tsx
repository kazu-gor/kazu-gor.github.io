import { PostType } from '@/types/post';
import { PostBody } from './PostBody';
import { PostHeader } from './PostHeader';

type Props = {
  post: PostType;
};

export const Post: React.VFC<Props> = ({ post }) => {
  const { title, coverImage, date, content } = post;

  return (
    <div className="p-8 bg-primary-1">
      <PostHeader
        title={title}
        coverImage={coverImage}
        date={date}
      />
      <PostBody content={content} />
    </div>
  );
};
