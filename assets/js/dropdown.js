<script>
  document.addEventListener("DOMContentLoaded", function() {
    // เลือกเมนูที่มี Dropdown ทั้งหมด
    var dropdownToggles = document.querySelectorAll('.has-dropdown > a');

    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        // ตรวจสอบว่าเป็นมือถือหรือไม่ (หรือหน้าจอเล็กกว่า 992px)
        if (window.innerWidth < 992) {
          e.preventDefault(); // ห้ามลิงก์ทำงาน (ป้องกันการกระโดด)
          
          var parent = this.parentElement;
          
          // เช็คว่าเมนูนี้เปิดอยู่หรือไม่
          var isActive = parent.classList.contains('active');
          
          // ปิดเมนูอื่นๆ ที่เปิดค้างอยู่ให้หมดก่อน (เพื่อความสะอาดตา)
          document.querySelectorAll('.has-dropdown').forEach(function(item) {
            item.classList.remove('active');
          });

          // ถ้าอันที่กดมันยังไม่เปิด ให้เปิดมันซะ (Toggle)
          if (!isActive) {
            parent.classList.add('active');
          }
        }
      });
    });
  });
</script>