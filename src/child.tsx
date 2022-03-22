
import { createResource } from "solid-js";


const python = (
  <div class="python">
    <h1>Python</h1>
    <ul>
      <li className="python_list"><a href="">Python1</a></li>
      <li className="python_list"><a href="">Python2</a></li>
      <li className="python_list"><a href="">Python3</a></li>
    </ul>
  </div>
)
 
const CONTENT = {
  // DataScience: <h1>Python</h1> ,
  DataScience: python,
  Infrastructure: <h1>Kubernetes</h1>,
  Frontend: <h1>SolidJS</h1>,
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
