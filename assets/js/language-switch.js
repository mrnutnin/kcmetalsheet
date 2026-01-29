function setLang(lang) {
    // เปลี่ยนข้อความในหน้าเว็บ (data-th / data-en)
    const elements = document.querySelectorAll('[data-th], [data-en]');
    elements.forEach(el => {
        const text = lang === 'th' ? el.getAttribute('data-th') : el.getAttribute('data-en');
        if (text) el.textContent = text;
    });

    // สลับสีปุ่ม Active
    const thBtn = document.querySelector('.lang-btn-th');
    const enBtn = document.querySelector('.lang-btn-en');

    if (lang === 'th') {
        thBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        enBtn.classList.add('active');
        thBtn.classList.remove('active');
    }

    localStorage.setItem('selectedLanguage', lang);
}

// ตรวจสอบภาษาเมื่อโหลดหน้าจอ
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'th';
    setLang(savedLang);
});