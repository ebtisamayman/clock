function startClock() {
    const clockElement = document.getElementById('clock');
    
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // تعديل الساعات لتبدأ من الرقم 12
        hours = hours % 12 || 12;

        // إضافة صفر قبل الأرقام إذا كانت أقل من 10
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        // تحديث محتوى الساعة
        const time = `${hours}:${minutes}:${seconds}`;
        clockElement.textContent = time;

        // تطبيق أنيميشن عند تحديث الوقت
        gsap.fromTo(clockElement, 
            { scale: 0.8, opacity: 0.5 }, // البداية
            { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" } // النهاية
        );
    }

    // تحديث الساعة كل ثانية
    setInterval(updateClock, 1000);

    // التحديث الأولي
    updateClock();
}

// بدء الساعة
startClock();
