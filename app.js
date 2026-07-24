document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Tonga soa aman-tsara ny hafatrao. Misaotra anao!');
      contactForm.reset();
    });
  }
  const devisForm = document.getElementById('devisForm');
  if(devisForm) {
    devisForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Voaray ny fangatahana devis maimaim-poana. Hamaly anao haingana izahay!');
      devisForm.reset();
    });
  }
});
