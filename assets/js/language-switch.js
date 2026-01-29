function setLang(lang) {
    // 1. เปลี่ยนข้อความในหน้าเว็บ (เหมือนเดิม)
    const elements = document.querySelectorAll('[data-th], [data-en]');
    elements.forEach(el => {
        const text = lang === 'th' ? el.getAttribute('data-th') : el.getAttribute('data-en');
        if (text) el.textContent = text;
    });

    // 2. สลับสถานะปุ่ม Active โดยดูจาก onclick
    const allLangBtns = document.querySelectorAll('.lang-btn');
    allLangBtns.forEach(btn => {
        // ตรวจสอบว่าปุ่มนี้มีคำสั่ง onclick ที่ตรงกับภาษาที่เลือกไหม
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('selectedLanguage', lang);
}

// ตรวจสอบเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'th';
    setLang(savedLang);
});