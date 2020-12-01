import React from 'react'

const Menu = () => {
  return (
    <div class="menu">
    <div class="menu-wrapper">
       <ul class="menu-items">
          <li class="menu-item">
             <a class="menu-item-button" href="https://wa.me/00447438964535?text=I'm%20interested%20in%20your%20services" target="_blank">
                <i class="fas fa-phone-alt"></i>
             </a>
             <div class="menu-item-bounce"></div>
          </li>
          <li class="menu-item">
             <a class="menu-item-button" href="skype:live:.cid.5c4168d50e36f824?add" target="_blank">
                <i class="fab fa-skype"></i>
             </a>
             <div class="menu-item-bounce"></div>
          </li>
          <li class="menu-item">
             <a class="menu-item-button" href="mailto:info@imaginic-solution.com?subject=Imaginic Solution" target="_blank">
                <i class="fas fa-envelope-open-text"></i>
             </a>
             <div class="menu-item-bounce"></div>
          </li>
       </ul>
       <button class="menu-toggle-button">
          <i class="fas fa-info"></i>
       </button>
    </div>
 </div>
  )
}

export default Menu
