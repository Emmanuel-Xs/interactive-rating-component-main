const button = document.querySelector(".submit-btn")
const ratingCard = document.querySelector(".rating-card")
const ratingsContainer = document.querySelector(".ratings")
const ratings = document.querySelectorAll(".rating")
const ratingCardHeight = ratingCard.offsetHeight
const template = document.querySelector("template").content

//gsap animation
gsap.fromTo(
	ratingCard,
	{ opacity: 0, scale: 0 },
	{ opacity: 1, scale: 1, duration: .8, ease: "steps(12)" }
)

ratingsContainer.addEventListener("click", (e) => {
	if (!e.target.matches(".rating")) return

	ratings.forEach((rating) => rating.classList.remove("active"))

	let selectedRating = e.target
	selectedRating.classList.add("active")
	let selectedRatingValue = selectedRating.textContent

	// button eventListener
	button.addEventListener("click", () => {
		if (!Number(selectedRatingValue)) return
		ratingCard.innerHTML = ""

		// template code
		const clone = template.cloneNode(true)
		clone.querySelector(".selected-rating").textContent = selectedRatingValue

		//rating card
		ratingCard.classList.add("center")
		ratingCard.style.minHeight = ratingCardHeight + "px"
		ratingCard.appendChild(clone)

		// gsap animation
		gsap.fromTo(
			".illustration, .styled-rating, .rating-desc",
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: "steps(12)" }
		)
	})
})
