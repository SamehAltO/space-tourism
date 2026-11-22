import { useEffect, useState } from "react"
import localData from '../../data.json'



function Destination({setActivePage}) {
    const destinationData = localData.destinations

    const [imgSrc, setImageSrc] = useState('../assets/destination/image-moon.png')
    function handleActive(e) {

    (Array.from(e.target.parentElement.parentElement.children).forEach(el => el.classList.remove('active')))
    e.target.parentElement.classList.add('active')

  }
    function handleDestinations(e) {
        setImageSrc('../.' + destinationData[e.target.dataset.idx].images.png)
        // console.log(2)
            // console.log(destinationData[e.target.dataset.idx])
            
            document.getElementById('section-img').src = destinationData[e.target.dataset.idx].images.png
            document.getElementById('main-heading').textContent = destinationData[e.target.dataset.idx].name
            document.getElementById('desc').textContent = destinationData[e.target.dataset.idx].description 
    }

    return (
    <section id='destination-sec' >
        <div className="left">
            <h3><span>01</span> pick your destination</h3>
            <img id="section-img" src='../assets/destination/image-moon.png' alt="img alt" />
        </div>
        <aside>
            <ul className="btns">
                <li className="active" >
                    <button onClick={(e) => {handleActive(e); handleDestinations(e)} } data-idx='0'>moon</button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleDestinations(e)}} data-idx='1'>mars</button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleDestinations(e)}} data-idx='2'>europa</button>
                </li>
                <li>
                    <button onClick={(e) => {handleActive(e); handleDestinations(e)}} data-idx='3'>titan</button>
                </li>
            </ul>

            <h1 id="main-heading">MOON</h1>
            <p id="desc">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        </aside>
    </section>
  )
}

export default Destination
