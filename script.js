// 파티클 생성
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    if (particlesContainer) {
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
    }
});

// 카운트다운 타이머 설정
document.addEventListener('DOMContentLoaded', function() {
    // 목표 날짜: 2025년 3월 31일 24시 (한국 시간)
    const targetDate = new Date('2025-03-31T23:59:59+09:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const countdownContainer = document.querySelector('.countdown-container');
        if (!countdownContainer) return;
        
        if (distance < 0) {
            // 시간이 지났을 경우
            countdownContainer.innerHTML = '<h3>이벤트가 종료되었습니다</h3>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // 카운트다운 업데이트
        const flipUnits = document.querySelectorAll('.flip-unit');
        if (flipUnits.length >= 4) {
            flipUnits[0].querySelector('.flip-card-front').textContent = days;
            flipUnits[1].querySelector('.flip-card-front').textContent = hours;
            flipUnits[2].querySelector('.flip-card-front').textContent = minutes;
            flipUnits[3].querySelector('.flip-card-front').textContent = seconds;
        }
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
                if (priceDisplay) priceDisplay.style.display = 'none';
                if (priceAnnual) priceAnnual.style.display = 'block';
            } else {
                // 월간 결제
                if (priceDisplay) priceDisplay.style.display = 'block';
                if (priceAnnual) priceAnnual.style.display = 'none';
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
    
    if (passwordSubmit && passwordInput && passwordError && databaseContainer && databaseFrame) {
        passwordSubmit.addEventListener('click', function() {
            const password = passwordInput.value.trim();
            
            if (password === '2407') {
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
        
        // Enter 키로도 제출 가능하게
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                passwordSubmit.click();
            }
        });
    }
});

// 네이버 카페 대체 메시지 표시
document.addEventListener('DOMContentLoaded', function() {
    const cafeFrame = document.getElementById('cafe-frame');
    
    // iframe 로드 오류 처리
    if (cafeFrame) {
        cafeFrame.onerror = function() {
            cafeFrame.style.display = 'none';
            const wrapper = cafeFrame.parentElement;
            if (wrapper) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'iframe-error-message';
                errorMsg.innerHTML = '<p>네이버 카페는 보안 정책으로 인해 iframe에서 직접 표시할 수 없습니다.</p><p>아래 버튼을 클릭하여 새 탭에서 카페를 방문해 주세요.</p>';
                wrapper.appendChild(errorMsg);
            }
        };
        
        // iframe이 로드되지 않을 경우를 대비한 타임아웃
        setTimeout(function() {
            if (cafeFrame.contentDocument && cafeFrame.contentDocument.body.innerHTML === '') {
                cafeFrame.onerror();
            }
        }, 3000);
    }
});
// 전화 연결 기능
document.addEventListener('DOMContentLoaded', function() {
    // data-phone 속성이 있는 모든 버튼에 전화 연결 기능 추가
    const callButtons = document.querySelectorAll('[data-phone="true"]');
    
    callButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지 (페이지 상단으로 이동하는 것 방지)
            
            const phoneNumber = '010-3569-4693';
            
            // 모바일 기기 확인
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile) {
                // 모바일 기기에서는 전화 앱 실행
                window.location.href = `tel:${phoneNumber}`;
            } else {
                // 데스크톱에서는 알림 표시
                alert(`가입 문의: ${phoneNumber}로 전화해 주세요.`);
            }
        });
    });
});
