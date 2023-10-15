import { Sauna } from '@/components/pages/saunas';
import { getAllPosts } from '@/lib/saunas';

type Props = React.ComponentPropsWithoutRef<typeof Sauna>;

const View: React.VFC<Props> = (props: Props) => <Sauna {...props} />;

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
