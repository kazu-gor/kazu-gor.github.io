import { Dalle } from '@/components/pages/dalle';
import { getAllPosts } from '@/lib/dalle';

type Props = React.ComponentPropsWithoutRef<typeof Dalle>;

const View: React.VFC<Props> = (props: Props) => <Dalle {...props} />;

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { posts },
  };
};
