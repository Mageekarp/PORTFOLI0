let projects = [
    { title: "WEBSITE KO", desc: "WEBSITE LINKS.", link: "#" },
    { title: "APPLICATION", desc: "APP FILES BRUH.", link: "#" }
];

let currentSlideIndex = 0;

window.onload = function() {
    displayProjects();
    startSlider();
    
    if(localStorage.getItem("journalNotes")) {
        document.getElementById("notes").value = localStorage.getItem("journalNotes");
    }
};

function startSlider() {
    setInterval(changeSlide, 1200);
}

function changeSlide() {
    const slides = document.querySelectorAll('.slide');
    const bgBlurs = document.querySelectorAll('.bg-blur');
    
    if (slides.length === 0 || bgBlurs.length === 0) {
        return;
    }

    slides[currentSlideIndex].classList.remove('active');
    bgBlurs[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
    bgBlurs[currentSlideIndex].classList.add('active');
}

function displayProjects() {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = ""; 

    projects.forEach(function(proj) {
        const itemHtml = `
            <div class="project-item">
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
                <a href="${proj.link}" target="_blank">View Project &rarr;</a>
            </div>
        `;
        grid.innerHTML += itemHtml;
    });
}

function addProject() {
    const titleInput = document.getElementById("projectTitle");
    const linkInput = document.getElementById("projectLink");
    const descInput = document.getElementById("projectDesc");

    if(titleInput.value.trim() === "" || descInput.value.trim() === "") {
        alert("Please provide at least a project title and description!");
        return;
    }

    projects.push({
        title: titleInput.value,
        desc: descInput.value,
        link: linkInput.value || "#"
    });

    displayProjects();

    titleInput.value = "";
    linkInput.value = "#";
    descInput.value = "";
}

function saveNotes() {
    const noteContent = document.getElementById("notes").value;
    localStorage.setItem("journalNotes", noteContent);
    alert("Notes saved successfully!");
}

document.getElementById("themeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});