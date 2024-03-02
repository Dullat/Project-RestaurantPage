import './css/reset.css';
import './css/index.css';
import './css/home.css';
import './css/menu.css';

import {home} from './js/home.js';
import {menu} from './js/menu.js'
import {contact} from './js/contact.js'

let wrapper = document.querySelector('.wrapper');
let navMenu = document.querySelector('.nav-menu')
let navLinks = document.querySelectorAll('li');
let btn =document.querySelector('button')

function removeActiveClass(){
  navLinks.forEach(element => {
    element.classList.remove('active');
  })
}

navLinks.forEach(element => {
  element.addEventListener('click', () => {
    removeActiveClass();
    element.classList.add('active');
    console.log("kl");
  })
});

function clear(){
  wrapper.removeChild(wrapper.firstChild);
}

document.querySelector('#Home').addEventListener('click', () => {
  clear()
  wrapper.appendChild(home);
  navMenu.removeAttribute('visible');
})

document.querySelector('#Menu').addEventListener('click', () => {
  clear();
  wrapper.appendChild(menu);
  navMenu.removeAttribute('visible');
})

document.querySelector('#Contact').addEventListener('click', () => {
  clear();
  wrapper.appendChild(contact);
  navMenu.removeAttribute('visible');
})

window.addEventListener('DOMContentLoaded', () => {
  wrapper.appendChild(home)
  document.querySelector('li').classList.add('active');
})


btn.addEventListener('click', () => {
  if(navMenu.hasAttribute('visible')){
    navMenu.removeAttribute('visible');
  }else
  navMenu.setAttribute('visible','')
})

console.log("runung");
