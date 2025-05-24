
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('location').textContent = data.location;
    document.getElementById('summary').textContent = data.summary;

    const skillsList = document.getElementById('skills');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    const educationList = document.getElementById('education');
    data.education.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      educationList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading profile data:', error));

function showMessage() {
  document.getElementById("output").textContent = "Thanks for clicking!";
}
