
import { createResource } from "solid-js";


const ds_content = (
  <div class="ds-content">
    <h2>Python</h2>
    <p>TestTestTest</p>
    <h2>SQL</h2>
    <p>TestTestTest</p>
  </div>
)
const infra_content = (
  <div class="infra-content">
    <h2>Kubernetes</h2>
    <p>TestTestTest</p>
    <h2>Docker</h2>
    <p>TestTestTest</p>
  </div>
)
const front_content = (
  <div class="front-content">
    <h2>HTML</h2>
    <p>TestTestTest</p>
    <h2>CSS</h2>
    <p>TestTestTest</p>
    <h2>JavaScript</h2>
    <p>TestTestTest</p>
    <h2>React</h2>
    <p>TestTestTest</p>
    <h2>SolidJS</h2>
    <p>TestTestTest</p>
  </div>
)

const CONTENT = {
  DataScience: ds_content,
  Infrastructure: infra_content,
  Frontend: front_content
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
