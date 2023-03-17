import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
      
      class DemoNavbar extends Component {
        toggleOffcanvas() {
          document.querySelector('.sidebar-offcanvas').classList.toggle('active');
        }
        render () { 
          return (
            <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
              <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">

                <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
                  <i className="mdi mdi-menu"></i>
                </button>
                <ul className="navbar-nav navbar-nav-left header-links">
                  <li className="nav-item d-none d-md-flex">
                    <a href="!#" onClick={evt =>evt.preventDefault()} className="nav-link">Schedule <span className="badge badge-primary ml-1">New</span>
                    </a>
                  </li>
                  <li className="nav-item active d-none d-xl-flex">
                    <a href="!#" onClick={evt =>evt.preventDefault()} className="nav-link">
                      <i className="mdi mdi-elevation-rise"></i>Reports</a>
                  </li>
                  <li className="nav-item d-none d-lg-flex">
                    <a href="!#" onClick={evt =>evt.preventDefault()} className="nav-link">
                      <i className="mdi mdi-bookmark-plus-outline"></i>Score</a>
                  </li>
                </ul>
             
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
                  <span className="mdi mdi-menu"></span>
                </button>
              </div>
            </nav>
          );
        }
      }
      
      export default DemoNavbar;