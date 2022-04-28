// SELECT RATE VAULE
const rateSelection = document.querySelectorAll('.rate-selection')

rateSelection.forEach((rateSelected) => {
  rateSelected.addEventListener('click', () => {
    removeActiveClasses()
    rateSelected.classList.add('active')
  })
})

function removeActiveClasses() {
  rateSelection.forEach((rateSelected) => {
    rateSelected.classList.remove('active')
  })
}

// SUBMIT VALUE AND DISPLAY FINAL CARD
document.querySelector('.submit').addEventListener('click', () => {
  const initialCard = document.getElementById('initial-rate')
  const finalCard = document.getElementById('final-rate')

  const rateSubmitted = document.querySelector('.active').textContent
  const displayResult = document.querySelector('.display-result')

  // INJECT VALUE TO '.display-result'
  displayResult.innerText = `You selected ${rateSubmitted} out of 5`

  //   CHANGE CARD CONTENT
  initialCard.style.display = 'none'
  finalCard.style.display = 'flex'
})
