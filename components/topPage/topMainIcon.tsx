import logo from '../../src/assets/MyGorillaIcon.png'

export default () => {
  return (
      <div class="banner">
        <div class="container_page">
          <h1 class="logo_font" textContent="kazu-gor"/>
          <img src={logo} class="logo" alt="logo" />
          <p>created by SolidJS</p>
        </div>
      </div>
  )
}
