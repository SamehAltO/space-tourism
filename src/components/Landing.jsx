

function Landing({setActivePage}) {
  function handleExploreBtn(e) {

    (Array.from(document.querySelectorAll('header ul li button')).forEach(el => el.classList.remove('active')))
    document.querySelectorAll('header ul li button')[1].classList.add('active')
    document.querySelector('body').style.backgroundImage = 'url(../assets/destination/background-destination-desktop.jpg)'

  }

  return (

    <section id="home-sec">
    <div className="left">

      <p id="main-title">So, you want to travel to</p>
      <h1>Space</h1>
      <p>Let’s face it; if you want to go to space, you might as well <br />
        genuinely go to outer space and not hover kind of on the <br /> 
        edge of it. Well sit back, and relax because we’ll give you <br />
         a truly out of this world experience!</p>
      </div>
    <aside>
        <button id="explore" onClick={(e) => {setActivePage('destinations'); handleExploreBtn(e)}} >Explore</button>
    </aside>
    </section>

  )
}

export default Landing
