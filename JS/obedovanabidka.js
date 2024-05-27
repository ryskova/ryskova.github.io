document.addEventListener('DOMContentLoaded', function () {
    const lunchSpecialDiv = document.getElementById('lunchSpecial');
    const closeBtn = document.getElementById('closeBtn');
    
    function isLunchTime() {
        const now = new Date();
        const hours = now.getHours();
        const timezoneOffset = now.getTimezoneOffset() / 60;

        return hours >= 11 + timezoneOffset && hours <= 15 + timezoneOffset;
    }

    
    function updateLunchSpecial() {
        if (isLunchTime()) {
            lunchSpecialDiv.style.display = 'block';
            setTimer();
        } else {
            lunchSpecialDiv.style.display = 'none';
        }
    }

    function setTimer() {
        const endDate = new Date();
        endDate.setHours(14);
        endDate.setMinutes(0);
        endDate.setSeconds(0);

        const now = new Date();
        const timeDifference = endDate - now;

        displayTimer(timeDifference);

        
        const timerInterval = setInterval(function () {
            const timeDifference = endDate - new Date();
            displayTimer(timeDifference);

            
            if (timeDifference <= 0) {
                clearInterval(timerInterval);
                lunchSpecialDiv.style.display = 'none';
                setTimeout(function () {
                    updateLunchSpecial();
                }, 180000);
            }
        }, 1000);
    }

    function displayTimer(timeDifference) {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('timer').innerText = `Zbývá: ${hours}h ${minutes}m`;
    }

    closeBtn.addEventListener('click', function () {
        lunchSpecialDiv.style.display = 'none';
        setTimeout(function () {
            updateLunchSpecial();
        }, 180000);
    });

    updateLunchSpecial();
    setInterval(updateLunchSpecial, 60000);
});