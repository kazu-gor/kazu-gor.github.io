import { createSignal } from 'solid-js';

export default () => {

  return ( 
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
  )
}

