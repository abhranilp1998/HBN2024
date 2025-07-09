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