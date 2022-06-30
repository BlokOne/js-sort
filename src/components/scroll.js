const container = document.querySelector('.categories__container');

container.addEventListener('click', (e) => {
  if (document.documentElement.scrollTop < 380) {
    window.scrollTo({
      top: 385,
      behavior: 'smooth'
    })
    e.preventDefault();
  }
})