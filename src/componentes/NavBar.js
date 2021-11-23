import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs'
import {SidebarData} from "./SidebarData";
import './navbar.css';

function NavBar () {
  const [sidebar, setSidebar]= useState(false);

  const showSidebar= () => {
    setSidebar(!sidebar);
  }






  return(
    <>

      <div className={'nav-bar'}>
        <div className={'flex'}>
          <img src={'https://www.teledoce.com/wp-content/uploads/2019/06/telemundo-logo-cabezal_2019.png'} width={'140px'} className={'nav-img'}/>
        </div>
        <div className={'flex-row'}>
            <div>
              <p className={'nav-paragraph'}>Iniciar sesion</p>
            </div>
            <div>
              <BsSearch className={'icon-search'}/>
            </div>
          {sidebar ? (
            <AiOutlineClose onClick={showSidebar} className={'icon-bars-close'}/>
          ) : (
            <GiHamburgerMenu className={'icon-bars'} onClick={showSidebar}/>
          )}
        </div>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>


        <ul className={'nav-menu-items'}>

          {SidebarData.map((item, index) => {
            return(
              <div className={'container-flex-lista'}>
              <li className={'lista'} key={index}>{item.title}</li>
              </div>
            )
          })}


        </ul>
      </nav>

    </>

  )
}

export default NavBar;