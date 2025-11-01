
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navbar.classList.toggle('show');
    });
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert("✅ Thank you! Your message has been sent successfully.");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  });

