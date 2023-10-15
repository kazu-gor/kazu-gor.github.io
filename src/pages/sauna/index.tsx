import { Sauna } from '@/components/pages/sauna';
import { getAllPosts } from '@/lib/sauna';

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
