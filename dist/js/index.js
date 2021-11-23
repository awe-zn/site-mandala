//função para ativar e desativar elementos

const toggleActive = ({ target }) => {
	target.classList.toggle("is-active");
};

//filtro por anos da seção "projetos criados"
const filtroAnos = document.querySelectorAll(".filtro__item");

filtroAnos.forEach((item) => {
	item.addEventListener("click", toggleActive);
});

//slides da seção "projetos criados"

const swiper = new Swiper(".swiper", {
	loop: true,
  centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
    clickable: true,
	},
	navigation: {
		nextEl: ".swiper-btn-next",
		prevEl: ".swiper-btn-prev",
	},
  slidesPerView: 1,
});