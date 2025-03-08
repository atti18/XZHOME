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
        
        const days = Math.floor(distance
