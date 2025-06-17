
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("successPopup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    let valid = true;

    // Nombre
    if (name.value.trim() === "") {
      nameError.classList.remove("hidden");
      valid = false;
    } else {
      nameError.classList.add("hidden");
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.classList.remove("hidden");
      valid = false;
    } else {
      emailError.classList.add("hidden");
    }

    // Asunto
    if (subject.value.trim() === "") {
      subjectError.classList.remove("hidden");
      valid = false;
    } else {
      subjectError.classList.add("hidden");
    }

    // Mensaje
    if (message.value.trim() === "") {
      messageError.classList.remove("hidden");
      valid = false;
    } else {
      messageError.classList.add("hidden");
    }

    if (valid) {
      popup.classList.remove("hidden");
      form.reset();
    }
    if (window.location.search.includes("enviado=ok")) {
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 3000);
}

  });

  function closePopup() {
    popup.classList.add("hidden");
  }



  const testimonialSlider = new Swiper('.testimonialSlider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });



    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 80) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-black", "bg-opacity-90", "shadow-lg", "text-white");
      } else {
        navbar.classList.remove("bg-black", "bg-opacity-90", "shadow-lg");
        navbar.classList.add("bg-transparent");
      }
    });

    const counters = document.querySelectorAll('.counter');

    const animateCounters = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        counter.innerText = '0' + suffix;

        let current = 0;
        const increment = Math.ceil(target / 50);

        const updateCount = () => {
          current += increment;
          if (current < target) {
            counter.innerText = target >= 1000
              ? current.toLocaleString() + suffix
              : current + suffix;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target.toLocaleString() + suffix;
          }
        };

        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('#stats-section'));
  
  
    // Iniciar Swiper
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    // Modal
    function openModal(src) {
      document.getElementById("modalImage").src = src;
      document.getElementById("imageModal").classList.remove("hidden");
      document.getElementById("imageModal").classList.add("flex");
    }

    function closeModal() {
      document.getElementById("imageModal").classList.remove("flex");
      document.getElementById("imageModal").classList.add("hidden");
    }

    function handleBackgroundClick(event) {
      // Solo cerrar si se hizo click en el fondo (no en la imagen)
      if (event.target.id === 'imageModal') {
        closeModal();
      }
    }
