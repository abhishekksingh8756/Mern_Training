import './App.css';
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';

function App() {
  const demo=()=>
  {
      Swal.fire({
  title: "More Information",
  text: "Here’s the latest update with all the details you need.",
  icon: "success"
});
  }
  return (<>
  <div >
          <img src="hero.png" width={8000} height={500} alt="Illustration of a person pointing at a screen" />
         <div className="page">
      <header className="header">
        <div className="logo">
          <span className="logo-dot" />
          YOUR LOGO
        </div>
        <nav>
          <ul>
            <li>
              <a href="#"> <FaHome/> Home</a>
            </li>
            <li>
              <a href="#"> <FaUserAlt/> About us </a>
              </li>
            <li>
              <a href="#"> <FaBriefcase/> Work</a>
            </li>
            <li>
              <a href="#"> <FaInfoCircle/> Info</a>
            </li>
            <li>
              <a href="#" className="active"> <FaEnvelope/> Contact us</a>
            </li>
          </ul>
        </nav>
      </header>

    
        <div >
          <h1>
            <Typewriter
  options={{
    strings: ['Creative <br/> Process'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button onClick={demo}>MORE INFO</button>
        </div>
        </div>
  </div>

  </>);
}

export default App;