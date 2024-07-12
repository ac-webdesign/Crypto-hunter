function scrollToDiv(divId) {
    var element = document.getElementById(divId);
    var offset = -200;
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = element.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;
    var offsetPosition = elementPosition + offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    containers.forEach(container => {
        observer.observe(container);
    });
});

document.getElementById('facebook-btn').addEventListener('click', function() {
    window.open( 'https://www.facebook.com/groups/446656422197518', '_blank');
});


document.getElementById('burger-menu').addEventListener('click', function() {
    this.classList.toggle('open'); 
    document.getElementById('nav-menu').classList.toggle('open'); 
  });

const navLinks = document.querySelectorAll('.nav-mob');

navLinks.forEach(link=>{
    link.addEventListener('click',function(){
        document.getElementById('burger-menu').classList.remove('open');
        document.getElementById('nav-menu').classList.remove('open');
        
    })
})