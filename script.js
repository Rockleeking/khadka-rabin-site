// Load personal data from data.json
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('location').textContent = data.location;
    document.getElementById('summary').textContent = data.summary;

    const skills = document.getElementById('skills');
    data.skills.forEach(skill => {
      const badge = document.createElement('span');
      badge.textContent = skill;
      skills.appendChild(badge);
    });
  });

// Auto-fetch GitHub projects (public repos)
fetch('https://api.github.com/users/Rockleeking/repos')
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById('projects');
    repos.forEach(repo => {
      const col = document.createElement('div');
      col.className = 'col';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description || "No description provided."}</p>
            <a href="${repo.html_url}" target="_blank" class="btn btn-primary">View on GitHub</a>
          </div>
        </div>`;
      container.appendChild(col);
    });
  });

// Dark mode toggle
// Dark mode toggle
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");

  document.querySelectorAll(".card").forEach(card => {
    card.classList.toggle("bg-dark");
    card.classList.toggle("text-light");
  });

  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-dark");
  navbar.classList.toggle("bg-dark");
  navbar.classList.toggle("bg-primary"); // remove blue
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('.profile-header');
    const img = header.querySelector('img');
    const name = header.querySelector('h1');
    const title = header.querySelector('p');

    if (window.scrollY > 100) {
      // When scrolled down 100px, apply the smaller size
      header.classList.add('sticky-header');
    } else {
      // Reset when at the top
      header.classList.remove('sticky-header');
    }
  });

