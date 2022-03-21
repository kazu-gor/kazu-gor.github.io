import type { Component } from 'solid-js';
import { createSignal, Suspense, Switch, Match, useTransition } from 'solid-js';
import { render } from 'solid-js/web';

import Child from './child';

import logo from './logo.svg';
import styles from './App.module.css';

// const App: Component = () => {
const App = () => {

  const [num, setNum] = createSignal(0);
  setInterval(() => setNum((num() + 1) % 100), 60);

  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index) => () => start(() => setTab(index));

  return (
  <>
    <div class={styles.app}>

      <nav class={styles.navbar}> 
        <div class={styles.container}>
          <div class={styles.navbar_logo}>
             <a href="#">kazu-gor</a>
          </div>
          <div class={styles.navbar_menu}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutme">About</a></li>
              <li><a href="#vision">Vision</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div class={styles.banner}>
        <div class={styles.container_page}>
          <h1 class={styles.logo_font} textContent="kazu-gor"/>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>created by SolidJS</p>
        </div>
      </div>

      <div class={styles.icon}>
        <Show when={num() < 30} fallback={
          <div style={{
            "font-weight": 800,
            "font-size": '30px'
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

      <div class={styles.main_title}>
        <h1>Information</h1>
      </div>

      <div class={styles.main_page}>
        <ul class={styles.inline}>
          <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
            DataScience
          </li>
          <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
            Infrastructure
          </li>
          <li classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
            Frontend
          </li>
        </ul>      
        <div class={styles.tab} classList={{ pending: pending() }}>
          <Suspense fallback={<div class={styles.loader}>Loading...</div>}>
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
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  </>
  );
};

render(App, document.getElementById("root"));
export default App;
