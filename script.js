const button = document.querySelector(".submit-btn")
const ratingCard = document.querySelector(".rating-card")
const ratingsContainer = document.querySelector(".ratings")
const ratings = document.querySelectorAll(".rating")
const template = document.querySelector( "template" ).content

let selectedRatingValue 


ratingsContainer.addEventListener("click", (e) => {
	if (!e.target.matches(".rating")) return

	let selectedRating = e.target
	let alreadyActive = selectedRating.classList.contains("active")
	
	if ( alreadyActive ) {
		selectedRatingValue = null
		selectedRating.classList.remove("active")
		return
	}

	// remove active class from other ratings
	ratings.forEach((rating) => rating.classList.remove("active"))

	selectedRating.classList.add("active")
	selectedRatingValue = selectedRating.textContent
})

// button eventListener
	button.addEventListener("click", () => {
		if (!Number(selectedRatingValue)) return
		ratingCard.innerHTML = ""

		// template code
		const clone = template.cloneNode(true)
		clone.querySelector(".selected-rating").textContent = selectedRatingValue

		//rating card
		ratingCard.classList.add("center")
		ratingCard.appendChild(clone)

		// gsap animation
		gsap.fromTo(
			".illustration, .styled-rating, .rating-desc",
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: "steps(12)" }
		)
	})