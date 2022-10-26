window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  // App switcher toggle
  document.getElementById('app-switcher-trigger').addEventListener('click', (event) => {
    console.log(event.target);
    event.target.parentElement.classList.toggle('is-open');
    event.target.nextElementSibling.classList.toggle('is-open');
  })
});