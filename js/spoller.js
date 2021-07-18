export function initSpoller(spoller) {
  spoller.classList.add('init')
  initSpollerBody(spoller)
  spoller.addEventListener('click', setSpollerAction)
}

function initSpollerBody (spoller, hideSpollerBody = true) {
  const spollerTitle = spoller.querySelectorAll('[data-spoller-title]')
  
  if(spollerTitle.length > 0) {
    spollerTitle.forEach( (titleButton, i) => {
      if(hideSpollerBody) {
        titleButton.removeAttribute('tabindex')
        if(!titleButton.classList.contains('active')) {
          titleButton.nextElementSibling.hidden = true
        }
      } else {
        titleButton.setAttribute('tabindex', '-1')
        titleButton.nextElementSibling.hidden = false
      }
    });
  }
}

function setSpollerAction(e) {
  const el = e.target

  if(el.hasAttribute('[data-spoller-title]') || el.closest('[data-spoller-title]')) {
    const spollerTitle = el.hasAttribute('[data-spoller-title]') ? el : el.closest('[data-spoller-title]')
    const spollerBlock = spollerTitle.closest('[data-spoller]')
    const onSpoller = spollerBlock.hasAttribute('data-one-spoller') ? true : false

    if(!spollerBlock.querySelectorAll('.slide').length) {
      //onSpoller show this spoller is active
      if(onSpoller && !spollerTitle.classList.contains('active')) {
        hideSpollerBody(spollerBlock)
      }
      spollerTitle.classList.toggle('active')
      _slideToggle(spollerTitle.nextElementSibling, 750)
    }
   e.preventDefault()
  }
}

function hideSpollerBody(spollerBlock) {
  const spollerActiveTitle = spollerBlock.querySelector('[data-spoller-title].active') 

  if(spollerActiveTitle) {
    spollerActiveTitle.classList.remove('active')
    _slideUp(spollerActiveTitle.nextElementSibling, 750)
  }
}

function _slideDown (target, duration = 500) {
  if(!target.classList.contains('slide')) {
    target.classList.add('slide')
    if(target.hidden) {
      target.hidden = false
    }
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.PaddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    window.setTimeout(()=>{
      target.style.removeProperty('height')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.classList.remove('slide')
    }, duration)
  }
}

function _slideUp (target, duration = 500) {
  if(!target.classList.contains('slide')) {
    target.classList.add('slide')
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.PaddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    window.setTimeout(()=>{
      target.hidden = true
      target.style.removeProperty('height')
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.classList.remove('slide')
    }, duration)
  }
}

function _slideToggle (target, duration = 500) {
    if(target.hidden) {
      return _slideDown(target, duration)
    } else {
      return _slideUp(target, duration)
    }
}
