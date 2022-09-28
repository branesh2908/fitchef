import React from "react";

function Navbar() {
    return (
    <div class="navbar navbar-expand-sm bg-dark navbar-dark">
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo-img" src="./images/f-icon.png" alt='logo' />
            <span class="nav-link active logo-h" aria-current="page" href="#">FITCHEF</span>
          </a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </li>
              <li class="input-group">
                <div class="input-group">
                  <input type="search" class="form-control rounded" placeholder="Search for area,street name" aria-label="Search" aria-describedby="search-addon" />
                </div>
              </li>
            </ul>
          </div>
          <form class="d-flex ">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle btn-dropdown" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                SIGNIN
              </button>
              <ul class="dropdown-menu btn-dropdown list-dropdown" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" type="button">SIGNUP</button></li>
                <li><button class="dropdown-item" type="button">LOGIN</button></li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
       
    );
}

export default Navbar;