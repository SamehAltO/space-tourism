import { useState } from "react"
import localData from '../data.json'
import Header from "./components/Header"
import Landing from "./components/Landing"
import Destination from "./components/Destination"
import Crew from "./components/Crew"
import Technology from "./components/Technology"


let allNavLinks = document.querySelectorAll('header ul li button')


// [1] i want to think as react developer
// [2] single page application
// []
// []



function App() {
  // console.log(localData)
  const [activePage, setActivePage] = useState('home')
    allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {

      e.preventDefault()
      // console.log(e.target.dataset.link)
        // container.style.backgroundImage = 

    // console.log(document.querySelector('.container'))
    Array.from(e.target.parentElement.parentElement.children).forEach(el => el.querySelector('button').classList.remove('active'));
    e.target.classList.add('active')

  

    })
})

  return (
    <div className="container">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' && <Landing activePage={activePage}  setActivePage={setActivePage} />}
      {activePage === 'destinations' && (<Destination activePage={activePage} setActivePage={setActivePage} />) }
      {activePage === 'crew' && (<Crew activePage={activePage} setActivePage={setActivePage} />) }
      {activePage === 'technology' && (<Technology activePage={activePage} setActivePage={setActivePage} />) }


    </div>
  )
}

export default App
