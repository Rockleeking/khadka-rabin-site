// Load personal data
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

// Load projects
fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('projects');
    projects.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>
            <a href="${p.url}" target="_blank" class="btn btn-primary">View Project</a>
          </div>
        </div>`;
      container.appendChild(col);
    });
  });
