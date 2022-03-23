import type { Component } from 'solid-js';
import { createSignal, Suspense, Switch, Match, useTransition } from 'solid-js';

import Child from './child';

import logo from '../src/assets/MyGorillaIcon.png';
import './styles.css';

const App: Component = () => {

  const [num, setNum] = createSignal(0);
  setInterval(() => setNum((num() + 1) % 100), 60);

  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index) => () => start(() => setTab(index));

  return (
  <>
    <div class="app">
      <nav class="navbar"> 
       <div class="container">
        <div class="navbar_logo">
         <a href="#">kazu-gor</a>
        </div>
        <div class="navbar_menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About</a></li>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      </nav>

      <div class="banner">
        <div class="container_page">
          <h1 class="logo_font" textContent="kazu-gor"/>
          <img src={logo} class="logo" alt="logo" />
          <p>created by SolidJS</p>
        </div>
      </div>

      <div class="icon">
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

      <div class="main_title">
        <h1>Information</h1>
      </div>

      <div id="main_page">
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
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  </>
  );
};

export default App;
