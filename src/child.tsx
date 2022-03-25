
import { createResource } from "solid-js";

import ContentDS from '../components/topPage/childPage/contentDataScience';
import ContentIS from '../components/topPage/childPage/contentInfrastructure';
import ContentFE from '../components/topPage/childPage/contentInfrastructure';


const CONTENT = {
  DataScience: <ContentDS />,
  Infrastructure: <ContentIS />,
  Frontend: <ContentFE />
};

function createDelay() {
  return new Promise((resolve) => {
    const delay = Math.random() * 420 + 160;
    setTimeout(() => resolve(delay), delay);
  });
}

const Child = (props: Props) => {
  const [time] = createResource(createDelay);

  return (
    <div class="tab-content">
      It took  {time()?.toFixed()}ms seconds to open the "{props.page}" page.
      <p>{CONTENT[props.page]}</p>
    </div>
  );
};

export default Child;
