document.addEventListener('DOMContentLoaded', async function () {
  var mount = document.getElementById('shared-footer');
  if (!mount) return;

  try {
    var response = await fetch('assets/components/footer.html', { cache: 'no-store' });
    if (!response.ok) throw new Error('Footer load failed: ' + response.status);

    mount.innerHTML = await response.text();

    if (typeof setLang === 'function') {
      var savedLang = localStorage.getItem('selectedLanguage') || 'th';
      setLang(savedLang);
    }
  } catch (error) {
    console.error(error);
  }
});
