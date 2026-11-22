import localData from '../../data.json'

function Crew({setActivePage}) {
    const crewData = localData.crew
    console.log(crewData)
    function handleActive(e) {

    (Array.from(e.target.parentElement.parentElement.children).forEach(el => el.classList.remove('active')))
    e.target.parentElement.classList.add('active')

  }
    function handleCrew(e) {   
            document.getElementById('section-img').src = crewData[e.target.dataset.idx].images.png
            document.getElementById('role').textContent = crewData[e.target.dataset.idx].role
            document.getElementById('main-heading').textContent = crewData[e.target.dataset.idx].name
            document.getElementById('desc').textContent = crewData[e.target.dataset.idx].bio 
    }
  return (
    <section id='crew-sec'>
        <div className="left">
            <img id="section-img" src='../assets/crew/image-douglas-hurley.png' alt="img alt" />
        </div>
        <aside>
          <h3><span>01</span> meet your crew</h3>
            <p id='role'>Commander</p>
            <h1 id="main-heading">Douglas Hurley</h1>
            <p id="desc">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2</p>
            <ul className="btns">
                <li className="active" >
                    <button onClick={(e) => {handleActive(e); handleCrew(e)} } data-idx='0'></button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleCrew(e)}} data-idx='1'></button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleCrew(e)}} data-idx='2'></button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleCrew(e)}} data-idx='3'></button>
                </li>
            </ul>
        </aside>
    </section>
  )
}

export default Crew
