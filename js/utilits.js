export function renderItem(item) {
  const itemFragment = document.createDocumentFragment();

  const $item = createEl('div', { class: 'item' })
  const itemWrapper = createEl('div', { class: 'item__wrapper', 'data-item': 'item' })

  const itemImg = createEl('img', { class: 'item__img', alt: ' ' })
  itemImg.src = '/images/dist/iPhone 12/apple_iphone_12_pro_max_128gb_pacific_blue.jpg'

  const itemTitle = createEl('h2', { class: 'item__title' })
  itemTitle.innerText = 'iPhone 12 pro max 128Gb Pacific blue'

  const itemPrice = createEl('span', { class: 'item__price' })
  itemPrice.innerText = '40000 uah'

  const itemCartBtn = createEl('button', { class: 'item__catrBtn' })
  itemCartBtn.innerText = 'Добавить в корзину'

  const itemByBtn = createEl('button', { class: 'item__byBtn' })
  itemByBtn.innerText = 'Купить в один клик'

  $item.append(itemWrapper)
  itemWrapper.append(itemImg)
  itemWrapper.append(itemTitle)
  itemWrapper.append(itemPrice)
  $item.append(itemCartBtn)
  $item.append(itemByBtn)

  itemFragment.append($item)
  return itemFragment
}

export function getCatigory(category, data) {
  let catData = null

  function getCat(obj) {
    Object.keys(obj).forEach(key => {

      if (typeof (obj[key]) === 'object' && key !== category) {
        getCat(obj[key]);

      } else if (key === category) {
        catData = obj[key]
      }

    })

  }
  getCat(data)

  return catData
}


export function createNav(data) {
  const itemFragment = document.createDocumentFragment()

  const $nav = createEl('nav', { class: 'cat-nav', id: 'catigories-wrapper' })
  const $ul = createEl('ul', { class: 'cat-nav__list', 'data-spoller': '', 'data-one-spoller': '' })

  Object.keys(data).forEach(key => {
    const $li = createEl('li', { class: 'cat-nav__item' })

    const $span = createEl('span', { class: 'cat-nav__title', 'data-spoller-title': '', tabindex: '-1' })
    $span.innerText = key

    $li.append($span)
    $li.append(createSubCat(data[key]))
    $ul.append($li)
  })

  $nav.append($ul)
  itemFragment.append($nav)
  return itemFragment
}


function createEl(tagName, options) {
  const $el = document.createElement(tagName);

  if (options) {
    Object.keys(options).forEach(attrName => {
      $el.setAttribute(attrName, options[attrName])
    })
  }

  return $el;
}


function createSubCat(data) {
  const itemFragment = document.createDocumentFragment()

  const $ul = createEl('ul', { class: 'cat-nav__sub-list' })

  Object.keys(data).forEach(key => {
    const $li = createEl('li', { class: 'cat-nav__sub-item' })
    $li.innerText = key

    $ul.append($li)
  })

  itemFragment.append($ul)
  return itemFragment
}

