import { Meshi } from '@/components/pages/meshis';
import { getAllPosts } from '@/lib/meshis';

type Props = React.ComponentPropsWithoutRef<typeof Meshi>;

const View: React.VFC<Props> = (props: Props) => <Meshi {...props} />;

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
