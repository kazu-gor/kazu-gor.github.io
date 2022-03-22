import { createSignal } from 'solid-js';
import styles from '../../src/App.module.css';

export default () => {
  return ( 
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
  )
}

