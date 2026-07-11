// NDIAYE LOCAL — script partagé

// Menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Révélation des cartes produits au scroll
const reveal = () => {
  const cards = document.querySelectorAll('.product-card');
  if (!cards.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => io.observe(c));
};
reveal();

// Commande WhatsApp (pages produits)
function orderWhatsApp(name, selectId, category) {
  const format = document.getElementById(selectId).value;
  const text = `Bonjour NDIAYE LOCAL ! 🌾\nJe souhaite commander le produit suivant depuis votre page ${category} :\n\n- Produit : *${name}*\n- Format & Prix : *${format}*\n\nJe suis disponible pour organiser l'expédition depuis Bambey. Merci !`;
  window.open(`https://wa.me/221778688830?text=${encodeURIComponent(text)}`, '_blank');
}
