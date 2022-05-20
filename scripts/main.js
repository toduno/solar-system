// 1. Create an object that will store the planets and its properties
const space = {
	mercury: {
		gravity: 0.38,
		image: 'mercury.png'
	},
	venus: {
		gravity: 0.91,
		image: 'venus.png'
	},
	earth: {
		gravity: 1.0,
		image: 'earth.png'
	},
	mars: {
		gravity: 0.38,
		image: 'mars.png'
	},
	jupiter: {
		gravity: 2.34,
		image: 'jupiter.png'
	},
	saturn: {
		gravity: 0.93,
		image: 'saturn.png'
	},
	uranus: {
		gravity: 0.92,
		image: 'uranus.png'
	},
	neptune: {
		gravity: 1.12,
		image: 'neptune.png'
	}, 
	pluto: {
		gravity: 0.62,
		image: 'pluto.png'
	}
}

// 2. Grab all the elements for the event
const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')
const container = document.querySelector('.flex-item')
let description = document.querySelector('.div')
let weight

// 3. Create a function that will perform some actions for the event i.e contain the UI elements for the click event
// which are: the image (the planet) and text (the weight)
const containerUI = (img, text) => {
	//the image
	let image = document.createElement('img')
	image.src = `./images/${img}`
	container.appendChild(image)

	//add the div that will house the text
	let planet = select.value.toUpperCase()
	description.innerHTML = `<p class='paragraph'>The weight of the object on <span style='font-weight: bold'>${planet}</span></p>`

	//the text
	let p = document.createElement('p')
	p.className = 'text'
	p.textContent = text
	p.style.fontWeight = 'bold'
	p.style.background = 'rgba(65, 60, 65, 0.5)'
	p.style.width = '20%'
	p.style.overflow = 'clip'
	p.style.height = '15vh'
	p.style.lineHeight = '15vh'
	p.style.borderRadius = '50%'
	p.style.margin = '3% auto 0 auto'
	description.appendChild(p)	
}

// 4. Create the click event  
button.addEventListener('click', () => {
	
	//create a condition for user input and selection
	if (input.value === '' && select.value !== space[select.value]) {
		description.className = 'required'
		description.innerHTML = `<p class='required-text'>Mass and planet is required!</p>`	
	} 
	if (input.value === '' && select.value === space[select.value]) {
		description.className = 'required'
		description.innerHTML = `<p class='required-text'>Mass is required!</p>`
	}
	if (input.value !== '' && select.value !== space[select.value]) {
		description.className = 'required'
		description.innerHTML = `<p class='required-text'>Planet is required!</p>`	
	} 
	
	//finally add the image and expected text (the calculated weight) based on the event
	let imgSrc
	container.innerHTML = '' //first set the container to empty on click to remove default and have a clean slate to display the image and text
	description.classList.add('description') //add the class styles to the description container for small and large screens
	imgSrc = space[select.value].image
	weight = Math.floor(Number(input.value) * space[select.value].gravity) + ' ' + 'N'
	containerUI(imgSrc, weight)
})






