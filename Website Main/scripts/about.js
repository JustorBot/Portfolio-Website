const videoElement = document.querySelector('.video-content');
const imageElement = document.querySelector('.image-content');

let timeout;

// Function to handle hover effect and swapping of elements
function handleHover() {
  clearTimeout(timeout); // Clear any existing timeout

  // Delay before swapping to video (in milliseconds)
  const delay = 1000; // Change this value as needed (e.g., 1000 milliseconds = 1 second)

  timeout = setTimeout(() => {
    imageElement.style.opacity = '0'; // Hide the image
    videoElement.style.opacity = '1'; // Show the video
    videoElement.muted = false; // Unmute the video
    videoElement.play(); // Play the video
  }, delay);
}

// Function to handle mouse leave event
function handleMouseLeave() {
  clearTimeout(timeout); // Clear any existing timeout

  videoElement.style.opacity = '0'; // Hide the video
  imageElement.style.opacity = '1'; // Show the image
  videoElement.pause(); // Pause the video
  videoElement.currentTime = 0; // Reset video to beginning
  videoElement.muted = true; // Mute the video again
}

// Attach event listeners to the right section
document.querySelector('.right-section').addEventListener('mouseenter', handleHover);
document.querySelector('.right-section').addEventListener('mouseleave', handleMouseLeave);