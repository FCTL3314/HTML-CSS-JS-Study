const reviewButton = document.getElementById('review-btn');
const popUpContainer = document.getElementById('pop-up')
const popUpCloseButton = document.getElementById('close-pop-up-btn')

reviewButton.addEventListener('click', function () {
    popUpContainer.classList.remove('pop-up-close');
})

popUpCloseButton.addEventListener('click', function () {
    popUpContainer.classList.add('pop-up-close');
})