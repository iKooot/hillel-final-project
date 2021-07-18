// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// GSAP library

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

// Anime JS library

// import anime from 'animejs/lib/anime.es.js';

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import data from './storeData2.js'
import { initSpoller } from './spoller.js'
import { renderItem, getCatigory, createNav } from './utilits.js'

document.addEventListener('DOMContentLoaded', () => {
  const itemsContainer = document.querySelector('[data-items-container]')
  const asideWrapper = document.querySelector('[data-aside-wrapper]')

  // gsap.registerPlugin(ScrollTrigger, PixiPlugin, MotionPathPlugin);

  // Custom JS

  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.onclick = e => {
      const modal = document.querySelectorAll('[data-modal]')

      modal.forEach(el => {
        if (el.classList.contains('active')) {
          el.classList.remove('active')
          document.body.style.overflow = 'visible'
        }
      }
      )
    }
  })



  document.querySelector('[data-cart-btn]').onclick = e => {
    const cartModal = document.querySelector('[data-modal="cart"]')

    if (!cartModal.classList.contains('active')) {
      cartModal.classList.add('active')
      document.body.style.overflow = 'hidden'
    }
  }

  itemsContainer.append(renderItem())


  document.querySelectorAll('[data-item="item"]').forEach(el => el.addEventListener('click', e => {
    const modal = document.querySelector('[data-modal="item"]')
    console.log('click');

    if (!modal.classList.contains('active')) {
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    }
  }))

  // const category = Object.keys(data)

  const nav = createNav(data)

  // console.log(asideWrapper);
  // console.log(nav);

  asideWrapper.prepend(nav)
  const spoller = document.querySelector('[data-spoller]')
  initSpoller(spoller)
})
