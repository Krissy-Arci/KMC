// Navbar links/menu in Header---------
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Accordion/ members in Body---------
var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active')
    var panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}

window.addEventListener('load', function() {
  const form = document.getElementById('myform')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const data = new FormData(form)
    const action = e.target.action
    fetch(action, {
        method: 'POST',
        body: data
      })
      .then(() => {
        alert('Thanks for subscribing!')
      })
  })
})
