let courses = [
    {title :"💻 Web Development", discription : "Learn HTML, CSS, JavaScript, and build interactive websites."},
    {title :" 📊 Data Science", discription : "Learn Python, Pandas, and Machine Learning for real-world data analysis"},
    {title :" 🎨 Graphic Design", discription : "Master tools like Photoshop, Illustrator, and Figma to create stunning visuals."},
    {title :" 🖥️ AI & ML", discription : "Dive into Artificial Intelligence and Machine Learning concepts and projects."},
    {title :" 📱 Mobile App Dev", discription : "Build mobile apps using Flutter, React Native, or native Android/iOS tools."},
    {title :" 🔒 Cybersecurity", discription : "Learn ethical hacking, penetration testing, and security best practices."},
    {title :"&#x1F4B8 Money Making", discription : "Learn how to make money in 18+ students."},
]

let grid = document.querySelector(".courses-grid");

courses.forEach( course => {
    const card = document.createElement("article");
    card.className = "course-card";

    card.innerHTML = `
    <h4>${course.title}</h4>
    <p>${course.discription}</p>
    <button class="btn btn-primary">View Course</button>`;

    grid.appendChild(card);
});