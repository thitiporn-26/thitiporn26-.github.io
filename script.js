document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ Thitiporn พร้อมแล้ว!');

    // 1. ฟังก์ชันอัปเดตปี ค.ศ. อัตโนมัติใน Footer (จากที่เราย้ายมาจาก CSS)
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. เอฟเฟกต์พิมพ์ทีละตัวอักษร (Typewriter Effect) ตรงข้อความทักทาย
    const headerDesc = document.querySelector('header p');
    if (headerDesc) {
        const originalText = headerDesc.textContent;
        headerDesc.textContent = ''; // ล้างข้อความเก่าออกก่อน
        let index = 0;

        function typeWriter() {
            if (index < originalText.length) {
                headerDesc.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // ความเร็วในการพิมพ์ (มิลลิวินาที)
            }
        }
        // เริ่มทำงานหลังจากโหลดหน้าเว็บเสร็จ 0.5 วินาที
        setTimeout(typeWriter, 500);
    }

    // 3. ลูกเล่นเมื่อคลิกที่ทักษะ (Skills) จะมีเอฟเฟกต์แสดงความยินดีสั้นๆ
    const skillItems = document.querySelectorAll('#skills li');
    skillItems.forEach(item => {
        item.style.cursor = 'pointer'; // เปลี่ยนเมาส์เป็นรูปมือเมื่อชี้
        
        item.addEventListener('click', function() {
            // สร้างเอฟเฟกต์เปลี่ยนสีชั่วคราวเมื่อกดคลิก
            this.style.transform = 'scale(1.05)';
            this.style.transition = '0.2s';
            
            // สุ่มแสดงข้อความน่ารักๆ ใน Console หรือจะประยุกต์ทำอย่างอื่นต่อได้
            console.log(`คุณสนใจทักษะ: ${this.textContent.trim()} ของ Thitiporn!`);
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
