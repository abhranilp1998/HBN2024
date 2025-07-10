// Project data for modal
const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A sleek, responsive portfolio to showcase my work and skills.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    title: 'Task Manager App',
    desc: 'A productivity app to manage daily tasks efficiently with a clean UI.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    title: 'Blog Platform',
    desc: 'A modern blog platform with markdown support and user authentication.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
];

function openProjectModal(idx) {
  const modal = document.getElementById('projectModal');
  document.getElementById('modalTitle').textContent = projects[idx].title;
  document.getElementById('modalDesc').textContent = projects[idx].desc;
  document.getElementById('modalLink').href = projects[idx].link;
  const img = document.getElementById('modalImage');
  if (projects[idx].img) {
    img.src = projects[idx].img;
    img.style.display = '';
  } else {
    img.style.display = 'none';
  }
  modal.style.display = 'flex';
  setTimeout(() => { modal.style.opacity = 1; }, 10);
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.style.opacity = 0;
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

document.addEventListener('DOMContentLoaded', function() {
    // Modal open logic for View Project buttons
    document.querySelectorAll('.card-link.modern-btn').forEach(function(btn, idx) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openProjectModal(idx);
        });
    });
    // Modal close logic
    document.getElementById('modalCloseBtn').onclick = closeProjectModal;
    document.getElementById('projectModal').onclick = function(e) {
      if (e.target === this) closeProjectModal();
    };
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeProjectModal();
    });

    // INSERT_YOUR_CODE

    // --- Profile Card Shrink/Expand Logic (Move to Side Animation) ---

    // Create the toggle button
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        // Create the floating button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'profile-toggle-btn';
        toggleBtn.setAttribute('aria-label', 'Show/Hide Profile Card');
        toggleBtn.innerHTML = '<i class="fas fa-user"></i>';
        // Initial state: card is shown
        let isProfileCardVisible = true;

        // Style the button (minimal inline, rest in CSS)
        toggleBtn.style.position = 'fixed';
        toggleBtn.style.top = '2rem';
        toggleBtn.style.right = '2rem';
        toggleBtn.style.zIndex = '2000';
        toggleBtn.style.display = 'none'; // Only show when card is hidden

        // Insert button into DOM
        document.body.appendChild(toggleBtn);

        // Helper to shrink card (move to side)
        function shrinkProfileCard() {
            profileCard.classList.add('profile-card--shrunk');
            toggleBtn.style.display = 'block';
            isProfileCardVisible = false;
        }
        // Helper to expand card
        function expandProfileCard() {
            profileCard.classList.remove('profile-card--shrunk');
            toggleBtn.style.display = 'none';
            isProfileCardVisible = true;
        }

        // Add a close/minimize button to the card
        const closeBtn = document.createElement('button');
        closeBtn.className = 'profile-card-close-btn';
        closeBtn.setAttribute('aria-label', 'Hide Profile Card');
        closeBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '8px';
        closeBtn.style.right = '8px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '1.2rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = 'var(--primary)';
        closeBtn.style.zIndex = '10';
        closeBtn.style.padding = '0';

        // Only add if not already present
        if (!profileCard.querySelector('.profile-card-close-btn')) {
            profileCard.style.position = 'relative';
            profileCard.appendChild(closeBtn);
        }

        // Event: Minimize/shrink
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            shrinkProfileCard();
        });

        // Event: Expand
        toggleBtn.addEventListener('click', function() {
            expandProfileCard();
        });

        // Optional: Shrink on scroll down, expand on scroll up (desktop only)
        // (Commented out for now)
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', function() {
            if (window.scrollY > lastScrollY && isProfileCardVisible) {
                shrinkProfileCard();
            }
            lastScrollY = window.scrollY;
        });

        // Responsive: On mobile, always show as normal (no shrink)
        function handleResize() {
            if (window.innerWidth <= 900) {
                // Always show, hide toggle
                expandProfileCard();
                toggleBtn.style.display = 'none';
                closeBtn.style.display = 'none';
            } else {
                closeBtn.style.display = 'block';
                if (!isProfileCardVisible) {
                    toggleBtn.style.display = 'block';
                }
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    }

    // Add CSS for shrunk state and toggle button (move to side animation)
    const style = document.createElement('style');
    style.innerHTML = `
    .profile-card {
        transition: 
            transform 0.45s cubic-bezier(.77,0,.18,1), 
            opacity 0.35s cubic-bezier(.77,0,.18,1);
        will-change: transform, opacity;
    }
    .profile-card--shrunk {
        opacity: 0.2;
        pointer-events: none;
        transform: translateX(120%) scale(0.5);
    }
    .profile-toggle-btn {
        background: var(--primary);
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 52px;
        height: 52px;
        box-shadow: 0 2px 12px rgba(79,140,255,0.13);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background 0.2s, transform 0.18s;
    }
    .profile-toggle-btn:hover, .profile-toggle-btn:focus {
        background: var(--accent);
        transform: scale(1.08) rotate(-2deg);
    }
    @media (max-width: 900px) {
        .profile-toggle-btn { display: none !important; }
        .profile-card--shrunk { 
            opacity: 1 !important; 
            pointer-events: auto !important; 
            transform: none !important; 
        }
    }
    `;
    document.head.appendChild(style);

    // Smooth scroll for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 