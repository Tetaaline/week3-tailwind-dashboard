import './style.css'

// ---- "Register farmer" modal ----
const modal = document.getElementById('farmer-modal')
document.getElementById('open-modal').addEventListener('click', () => modal.showModal())
modal.querySelectorAll('[data-close]').forEach((btn) => btn.addEventListener('click', () => modal.close()))
document.getElementById('farmer-form').addEventListener('submit', () => {
  // Demo only: the form just closes. A real app would save the farmer here.
  setTimeout(() => document.getElementById('farmer-form').reset(), 200)
})
