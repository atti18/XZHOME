// 파티클 생성
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // 랜덤 위치 및 크기
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 랜덤 애니메이션
        particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
        
        particlesContainer.appendChild(particle);
    }
});

// 카운트다운 타이머 설정
document.addEventListener('DOMContentLoaded', function() {
    // 목표 날짜: 2025년 3월 31일 24시 (한국 시간)
    const targetDate = new Date('2025-03-31T23:59:59+09:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            // 시간이 지났을 경우
            document.querySelector('.countdown-container').innerHTML = '<h3>이벤트가 종료되었습니다</h3>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // 카운트다운 업데이트
        document.querySelectorAll('.flip-unit')[0].querySelector('.flip-card-front').textContent = days;
        document.querySelectorAll('.flip-unit')[1].querySelector('.flip-card-front').textContent = hours;
        document.querySelectorAll('.flip-unit')[2].querySelector('.flip-card-front').textContent = minutes;
        document.querySelectorAll('.flip-unit')[3].querySelector('.flip-card-front').textContent = seconds;
    }
    
    // 초기 업데이트
    updateCountdown();
    
    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
});

// 결제 토글 스위치
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.toggle-switch');
    const toggleLabels = document.querySelectorAll('.toggle-label');
    const priceDisplay = document.querySelector('.price');
    const priceAnnual = document.querySelector('.price-annual');
    
    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', function() {
            this.classList.toggle('checked');
            toggleLabels.forEach(label => label.classList.toggle('active'));
            
            if (this.classList.contains('checked')) {
                // 연간 결제
                priceDisplay.style.display = 'none';
                priceAnnual.style.display = 'block';
            } else {
                // 월간 결제
                priceDisplay.style.display = 'block';
                priceAnnual.style.display = 'none';
            }
        });
    }
});

// 정회원 데이터베이스 접속
document.addEventListener('DOMContentLoaded', function() {
    const passwordSubmit = document.getElementById('password-submit');
    const passwordInput = document.getElementById('member-password');
    const passwordError = document.getElementById('password-error');
    const databaseContainer = document.getElementById('database-container');
    const databaseFrame = document.getElementById('database-frame');
    
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const password = passwordInput.value.trim();
            
            if (password === '시흥XZ청년단2024') {
                // 올바른 비밀번호
                passwordError.textContent = '';
                passwordError.classList.remove('show');
                databaseContainer.classList.remove('hidden');
                databaseFrame.src = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTExvRVT9wYFoZ2weFSrXbm3WiYdPGZn7HdkJ7r1io5jSCjLt_n8hW_mFxFpQ5r4tY9w1SN0-qQOOx7/pubhtml?gid=0&single=true';
            } else {
                // 잘못된 비밀번호
                passwordError.textContent = '비밀번호가 올바르지 않습니다. 다시 시도해주세요.';
                passwordError.classList.add('show');
                databaseContainer.classList.add('hidden');
            }
        });
    }
});
