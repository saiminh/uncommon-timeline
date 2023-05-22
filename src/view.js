window.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.uncommon-timeline');
  const scrollbarf = document.querySelector('.uncommon-timeline-scrollbar .scrollbar-full');
        scrollbarf.style.pointerEvents = 'none';
  const scrollbare = document.querySelector('.uncommon-timeline-scrollbar .scrollbar-empty');
        scrollbare.style.cursor = 'pointer';

  function updateScrollbar() {
    scrollbarf.style.clipPath = `inset(0 ${100 - (timeline.scrollLeft / (timeline.scrollWidth - timeline.getBoundingClientRect().width ) * 100)}% 0 0)`;
  }

  updateScrollbar();
  
  timeline.addEventListener( 'scroll', updateScrollbar );
  
  scrollbare.addEventListener('click', (e) => {
    // when clicking on scrollbar, scroll to the position of the click
    timeline.scrollTo({
      left: (e.offsetX / scrollbare.getBoundingClientRect().width) * (timeline.scrollWidth - timeline.getBoundingClientRect().width),
      top: 0,
      behavior: 'smooth'
    });
  });
})