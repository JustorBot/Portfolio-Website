function filterProjects() {
    const searchInput = document.querySelector('.search-bar');
    const filterDropdown = document.querySelector('.filter-dropdown');
    const projects = document.querySelectorAll('.project-block');
    const projectsHeading = document.querySelector('h1');

    const searchTerm = searchInput.value.toLowerCase();
    const selectedFilter = filterDropdown.value.toLowerCase();

    let displayedProjects = 0;

    projects.forEach((project) => {
        const projectName = project.querySelector('h2').textContent.toLowerCase();
        const projectDescription = project.querySelector('p').textContent.toLowerCase();

        const matchesSearch = searchTerm === '' ||
            projectName.includes(searchTerm) || projectDescription.includes(searchTerm);

        const showAllProjects = selectedFilter === 'all';
        const showThreeProjects = selectedFilter === 'project1' && displayedProjects < 3;
        const showSixProjects = selectedFilter === 'project2' && displayedProjects < 6;

        if ((showAllProjects || showThreeProjects || showSixProjects) && matchesSearch) {
            project.style.display = 'flex';
            displayedProjects++;
        } else {
            project.style.display = 'none';
        }
    });

    projectsHeading.textContent = searchTerm !== '' ? `Search results for '${searchTerm}'` : 'My Projects!';
}

document.querySelector('.search-bar').addEventListener('input', filterProjects);
document.querySelector('.filter-dropdown').addEventListener('change', filterProjects);

filterProjects();


function changeToVideo(project) {
    const contentToChange = project.querySelector('.content-to-change');
    const image = contentToChange.querySelector('.image-content');
    const video = contentToChange.querySelector('.video-content');

    if (video && image) {
        image.style.display = 'none'; // Hide the image
        video.style.display = 'block'; // Show the video
        video.play(); // Play the video
    }
}

function changeToImage(project) {
    const contentToChange = project.querySelector('.content-to-change');
    const image = contentToChange.querySelector('.image-content');
    const video = contentToChange.querySelector('.video-content');

    if (video && image) {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video to beginning
        video.style.display = 'none'; // Hide the video
        image.style.display = 'block'; // Show the image
    }
}

const projectBlocks = document.querySelectorAll('.project-block');

projectBlocks.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        changeToVideo(block);
    });

    block.addEventListener('mouseleave', () => {
        changeToImage(block);
    });
});

