import { createSignal } from "solid-js";

export default () => {
  const [num, setNum] = createSignal(0);
  setInterval(() => setNum((num() + 1) % 100), 60);

  return (
      <div class="motion_logo">
        <Show when={num() < 30} fallback={
          <div style={{
            "font-weight": 800,
            "font-size": '30px',
          }}>
           Please Subscribe! 
          </div>
        }>
          <div style={{
            "font-weight": 800,
            "font-size": `${num()}px`,
          }}>
           Please Subscribe! 
          </div>
        </Show>
      </div>
  )
}
