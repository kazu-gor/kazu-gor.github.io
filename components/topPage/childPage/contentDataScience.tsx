import { createSignal } from "solid-js";

export default () => {

  const className = "content";

  return ( 
    <>
      <div {... {className}}>
        <h2>Python</h2>
        <h2>PostgreSQL</h2>
        <h2>MySQL</h2>
      </div>
    </>
  )
}
