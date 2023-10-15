import { PostType } from '@/types/post';
import { Gallery } from './Gallery';

type Props = {
  posts: PostType[];
  icon?: React.ReactElement;
  title: React.ReactNode;
};

export const Galleries = ({ posts }: Props) => {
  return (
    <section>
      <div className="vstack gap-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {posts.map((post) => (
            <Gallery
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
