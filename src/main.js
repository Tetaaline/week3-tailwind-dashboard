import './style.css'

// ---- Mobile menu toggle ----
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const openBtn = document.getElementById('open-menu')

function setMenu(open) {
  sidebar.classList.toggle('-translate-x-full', !open)
  overlay.classList.toggle('hidden', !open)
  openBtn.setAttribute('aria-expanded', String(open))
}

openBtn.addEventListener('click', () => setMenu(true))
document.getElementById('close-menu').addEventListener('click', () => setMenu(false))
overlay.addEventListener('click', () => setMenu(false))
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false))

// ---- "Register farmer" modal ----
const modal = document.getElementById('farmer-modal')
document.getElementById('open-modal').addEventListener('click', () => modal.showModal())
modal.querySelectorAll('[data-close]').forEach((btn) => btn.addEventListener('click', () => modal.close()))
document.getElementById('farmer-form').addEventListener('submit', () => {
  // Demo only: the form just closes. A real app would save the farmer here.
  setTimeout(() => document.getElementById('farmer-form').reset(), 200)
})
