function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

var typed = new Typed(".auto-type", {
    strings: ["Frontend developer", "UI/UX Designer", "QA Tester"],
    typeSpeed: 70, 
    backSpeed: 50,  
    startDelay: 500,
    backDelay: 1000, 
    loop: true,
    showCursor: true,
    cursorChar: '_', 
});

const desktopIcon = document.getElementById('desktop-icon');
const currentMode = localStorage.getItem('mode');

if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    desktopIcon.src = "./assets/sun.png";
     
} else {
    desktopIcon.src = "./assets/moon.png";  
     
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    let mode = 'light';
    if (document.body.classList.contains('dark-mode')) {
        mode = 'dark';
        desktopIcon.src = "./assets/sun.png";  
    } else {
        desktopIcon.src = "./assets/moon.png"; 
    }
    localStorage.setItem('mode', mode);
}

// Attach event listener to both icons
desktopIcon.addEventListener('click', toggleDarkMode);


document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };
    
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineSection = document.querySelector('.timeline'); 

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    observer.observe(timelineSection); 
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
  
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
  
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  
    // Changed the color to #48CFCB and added smooth transition via CSS
    scrollProgress.style.background = `conic-gradient(#F5F5F5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  
  
