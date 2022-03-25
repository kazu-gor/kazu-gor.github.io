import { createSignal, Suspense, Switch, Match, useTransition } from 'solid-js';
import Child from '../../src/child';

export default () => {
  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index) => () => start(() => setTab(index));

  return (
      <div id="tab_page">

        <ul class="inline">
          <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
            DataScience
          </li>
          <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
            Infrastructure
          </li>
          <li classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
            Frontend
          </li>
          <li classList={{ selected: tab() === 3 }} onClick={updateTab(3)}>
            Vim
          </li>
        </ul>      

        <div class="tab" classList={{ pending: pending() }}>
          <Suspense fallback={<div class="loader">Loading...</div>}>
            <Switch>
              <Match when={tab() === 0}>
                <Child page="DataScience" />
              </Match>
              <Match when={tab() === 1}>
                <Child page="Infrastructure" />
              </Match>
              <Match when={tab() === 2}>
                <Child page="Frontend" />
              </Match>
              <Match when={tab() === 3}>
                <Child page="Vim" />
              </Match>
            </Switch>
          </Suspense>
        </div>
      </div>
  )
}

