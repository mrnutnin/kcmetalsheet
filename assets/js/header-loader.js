document.addEventListener('DOMContentLoaded', async function () {
  var mount = document.getElementById('shared-header');
  if (!mount) return;

  try {
    var response = await fetch('assets/components/header.html', { cache: 'no-store' });
    if (!response.ok) throw new Error('Header load failed: ' + response.status);

    mount.innerHTML = await response.text();

    var activeMain = mount.dataset.activeMain || '';
    var activeSub = mount.dataset.activeSub || '';

    if (activeMain) {
      var mainLink = mount.querySelector('[data-nav-main="' + activeMain + '"]');
      if (mainLink) mainLink.classList.add('active');
    }

    if (activeSub) {
      var subLink = mount.querySelector('[data-nav-sub="' + activeSub + '"]');
      if (subLink) subLink.classList.add('active');

      var investorLink = mount.querySelector('[data-nav-main="investor"]');
      if (investorLink) investorLink.classList.add('active');
    }

    var menuTrigger = mount.querySelector('.menu-trigger');
    var nav = mount.querySelector('.header-area .nav');
    if (menuTrigger && nav) {
      menuTrigger.addEventListener('click', function () {
        menuTrigger.classList.toggle('active');
        var shown = nav.style.display === 'block';
        nav.style.display = shown ? 'none' : 'block';
      });
    }

    if (typeof setLang === 'function') {
      var savedLang = localStorage.getItem('selectedLanguage') || 'th';
      setLang(savedLang);
    }
  } catch (error) {
    console.error(error);
  }
});
