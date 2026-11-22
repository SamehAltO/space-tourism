import localData from '../../data.json'

let container = document.querySelector('.container')
let allNavLinks = document.querySelectorAll('header ul li button')


// fetch api when clicking on head elements

function Header({ setActivePage}) {
  let toggleBtn = document.querySelector('header .toggle button.hamburger')
  let closeBtn = document.querySelector('header .toggle button.close')
  function handleActive(e) {

    document.querySelector('body').style.backgroundImage = `url(${'../assets/'}${e.target.dataset.link}/background-${e.target.dataset.link}-desktop.jpg)`

    Array.from(e.target.parentElement.parentElement.children).forEach(el => el.querySelector('button').classList.remove('active'))
    e.target.classList.add('active')

  }
  function handleToggle(e) {
    e.preventDefault()
    e.target.parentElement.classList.add('hidden')
    document.querySelector('header').classList.add('toggled')
    document.querySelector('header ul').classList.add('toggled')
    e.target.parentElement.parentElement.querySelector('.close').classList.remove('hidden')


  }
  function handleClose(e) {
    // e.preventDefault()
    console.log('clicked')
    e.target.parentElement.classList.add('hidden')
    document.querySelector('header').classList.remove('toggled')
    document.querySelector('header ul').classList.remove('toggled')
    e.target.parentElement.parentElement.querySelector('.hamburger').classList.remove('hidden')
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src="../../src/assets/shared/logo.svg" alt="" />
        </div>
        <div>
          <hr />
        </div>
      <ul>
        <li>
          <button onClick={(e) => {setActivePage('home'); handleActive(e);}} className="active" data-link="home">
            <strong data-link="home">00</strong> Home
          </button>
          </li>
        <li>
          <button onClick={(e) => {setActivePage('destinations'); handleActive(e);}} data-link="destination">
            <strong data-link="destination">01</strong> Destination
          </button>
        </li>
        <li>
          <button onClick={(e) => {setActivePage('crew'); handleActive(e);}} data-link="crew">
            <strong data-link="crew">02</strong> Crew
          </button>
        </li>
        <li>
          <button onClick={(e) => {setActivePage('technology'); handleActive(e)}} data-link="technology">
            <strong data-link="technology">03</strong> Technology
          </button>
        </li>

      </ul>
      <div className="toggle">
          <button className='hamburger' onClick={(e) => handleToggle(e)}>
          <img  src="./assets/shared/icon-hamburger.svg" alt="hamburger" />
          </button>
          <button className='close hidden' onClick={(e) => handleClose(e)}>
          <img  src="./assets/shared/icon-close.svg" alt="close" />
          </button>


      </div>
    </header>
  </>
  )
}

export default Header
