class Slider {
  static #content = null
  static #left = null
  static #right = null

  static #count = 1
  static #max = null

  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )

    this.#left = document.querySelector(
      '.slider__button--left',
    )

    this.#right = document.querySelector(
      '.slider__button--right',
    )

    this.#max = this.#content.childElementCount

    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (slide) => {
    const offsetWidth = this.#content.offsetWidth //доступна ширина контенту
    const scrollLeft = this.#content.scrollLeft //наскільки прокрученакартинка
    const scrollWidth = this.#content.scrollWidth // загальна довжина можливої прокрутки
    // console.log(offsetWidth)
    // console.log(scrollLeft)
    // console.log(scrollWidth)
    let scroll = null

    if (slide === 'left') {
      if (this.#count === 1 || scrollLeft === 0) {
        this.#count = this.#max
        // scroll = scrollWidth
        scroll = offsetWidth * (this.#count - 1)
      } else {
        this.#count -= 1
        scroll = offsetWidth * (this.#count - 1)
      }
    }
    if (slide === 'right') {
      if (
        this.#count === this.#max ||
        scrollLeft >= scrollWidth - offsetWidth
      ) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = offsetWidth * (this.#count - 1)
      }
    }

    // let scroll = this.#count * offsetWidth
    console.log(this.#count)
    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }

  static carusel = () => {
    setInterval(() => {
      this.#slide('right')
    }, 3000)
  }
}

Slider.init()
Slider.carusel()

class Header {
  static #button = null
  static #height = null
  static #wrapper = null

  static #isOpen = false

  static init = () => {
    this.#button = document.querySelector('.header__button')
    this.#wrapper = document.querySelector(
      '.header__wraper',
    )
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight

    this.#button.onclick = () => this.#toggle()
  }

  static #toggle = () => {
    this.#isOpen = !this.#isOpen

    if (this.#isOpen) {
      this.#button.classList.toggle(
        'header__button--burger',
        false,
      )
      this.#button.classList.toggle(
        'header__button--close',
        true,
      )
      this.#wrapper.style.height = `${this.#height}px`
    } else {
      this.#button.classList.toggle(
        'header__button--burger',
        true,
      )
      this.#button.classList.toggle(
        'header__button--close',
        false,
      )
      this.#wrapper.style.height = `0px`
    }
  }
}

Header.init()
