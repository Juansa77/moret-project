import React from "react";
import Hamburger from "./Hamburger";
import { useState } from "react";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="navigation">
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>USER</li>
        <li>LOG OUT</li>
      </ul>
      <div  onClick={toogleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>

      <style jsx>{`
        .navigation {
        
          min-width: 50vw;
          height: 5vh;
          margin-bottom: 10vh;
          color:beige;
          background: rgba(0, 0, 0, 0.01);
          position:fixed;
          top:0;
          margin-bottom: 5%;
          z-index:1;
        
        }

        .navigation ul {
          display: flex;
              justify-content: space-around;
              aling-content:center:
              margin: 0 20px;
              padding: 0 25px;
              transition:  0.2s ease-in-out;
              cursor:pointer;
       
        }
        .navigation ul li {
          list-style-type: none;
              max-width: 100%;
              font-size:1.5vh;
        }

        @media (max-width: 767px) {
          .navigation{
            width:100vw;
          }
          .hamburger {
            display: fixed;
            float: right;
            padding-top: 10px;
            width:5vw;
            z-index: 6;
           
          }

       
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            text-align:left;
            padding:5vh;
            background: #363636; 
            color: beige;
            z-index:10;
            height: 100vh;
            width: 70vw;
            margin-top: 56px;
            position: fixed;
            transition: all 0.3s linear;
          
          }

          .navigation ul li{
            margin-top:1vh;
            cursor:pointer;
 

 

          }

          .navigation ul li:hover{
            background-color: white;
            color:black;
            cursor:pointer;
 
          }

          .burger{

            width:${hamburgerOpen ? "3rem" : "3rem"};
            transition:  0.2s ease-in-out;


          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;