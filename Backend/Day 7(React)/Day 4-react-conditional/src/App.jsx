import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const App = () => {
  const data = [
    {
    Srno:"1",
     Name:"Abhishek",
     Email:"abhishek@gmail.com",
     Mobileno:"4765758474"
    },
     {
    Srno:"2",
     Name:"baukaa",
     Email:"bauka@gmail.com",
     Mobileno: "5783258474"
    }
  ];
  // conditional
    // let a = true;
    // if (a){
    //   return <h1>you are login </h1>
    // }
    // else{
    //   return <h1>you are not  login</h1>
    // }
    // let age =18;
    // return(
    //   <> {age>=18 ? <h1>you can vote</h1> : <h1>you can't vote</h1>}</>
    // )
    // let a = 30;
    // return(
    //   <> 
    //   <h1>{a>20 && <h1> a is greater than 20.</h1>}</h1>
    //   </>
    // )
    return(
      <>
      {/* <div className='btn btn-info' >submit </div> */}
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Abhishek</td>
      <td>kumar</td>
      <td>@singh7068</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Baljeet</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table> */}
<div className="row">
  <div className="col-sm-3"></div>
  <div className="col-sm-8 mt-3">
    <h1 className='text-center'>#Welcometo<span className='text-info'>Emergingworld</span>React</h1>
    <table className='table'>
      <thead className='table-dark'>
        <tr>
          <th>Sr.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile-No</th>
          </tr>
      </thead>
      <tbody>
        {data.map((item) =>(
          <tr>
          <td>{item.Srno}</td>
          <td>{item.Abhishek}</td>
          <td>{item.Email}</td>
          <td>{item.Mobileno}</td>
          </tr>
        ))}
        
        {/* <tr><td>1</td><td>Abhishek</td><td>abhihsek@gmail.com</td><td>566787388</td></tr>
        <tr><td>1</td><td>Abhishek</td><td>abhihsek@gmail.com</td><td>566787388</td></tr> */}
      </tbody>
    </table>
  </div>
  <div className="col-sm-3"></div>
</div>
      </>
    )
  }

export default App;