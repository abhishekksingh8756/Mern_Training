import './App.css';
function App() {
  return (
  <div >
          <img src="/hero.png" alt="Illustration of a person pointing at a screen" />
         <div className="page">
      <header className="header">
        <div className="logo">
          <span className="logo-dot" />
          YOUR LOGO
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" className="active">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </header>

    
        <div >
          <h1>
            Creative
            <br />
            Process
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button >MORE INFO</button>
        </div>
        </div>
  </div>
  );
}

export default App;