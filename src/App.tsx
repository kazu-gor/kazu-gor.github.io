import type { Component } from 'solid-js';
import { createSignal, Suspense, Switch, Match, useTransition } from 'solid-js';

import TopNavBar from '../components/topPage/topNavBar';
import TopMainIcon from '../components/topPage/topMainIcon';
import TopMainMotionLogo from '../components/topPage/topMainAnimetionLogo';
import TopMainInfoTitle from '../components/topPage/topMainInfoTitle';
import TopMainInfoTabBar from '../components/topPage/topMainInfoTabBar';

import './styles.css';
// import './styles.sass';

const App: Component = () => {

  const [num, setNum] = createSignal(0);
  setInterval(() => setNum((num() + 1) % 100), 60);


  return (
  <>
    <div class="app">
      <TopNavBar /> 
      <TopMainIcon />
      <TopMainInfoTitle />
      <TopMainInfoTabBar />
    </div>

  </>
  );
};

export default App;
