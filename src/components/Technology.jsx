import localData from '../../data.json'

function Technology() {
    const techData = localData.technology
    console.log(techData)
    function handleActive(e) {

    (Array.from(e.target.parentElement.parentElement.children).forEach(el => el.classList.remove('active')))
    e.target.parentElement.classList.add('active')

  }
    function handleTechnologyy(e) {   
                document.getElementById('section-img').src = techData[e.target.dataset.idx].images.portrait
                // document.getElementById('role').textContent = techData[e.target.dataset.idx].role
                document.getElementById('main-heading').textContent = techData[e.target.dataset.idx].name
                document.getElementById('desc').textContent = techData[e.target.dataset.idx].description 
    }
  return (
        <section id='technology-sec' >
        <h3><span>03</span> space launch 101</h3>
        <div className="content">
        <div className="left">
            <ul className="btns">
                <li className="active" >
                    <button onClick={(e) => {handleActive(e); handleTechnologyy(e)} } data-idx='0'>1</button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleTechnologyy(e)}} data-idx='1'>2</button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleTechnologyy(e)}} data-idx='2'>3</button>
                </li>

            </ul>
        </div>
            <div className="center">
                <p id='term'>the terminology...</p>
                <h1 id='main-heading'>launch vehicle</h1>
                <p id='desc'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
        <aside>
            <img id="section-img" src='../assets/technology/image-launch-vehicle-portrait.jpg' alt="img alt" />

        </aside>
        </div>
    </section>
  )
}

export default Technology
