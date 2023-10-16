function preventSlideBack() {
    let startX, startY;

    document.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

        document.addEventListener('touchmove', swipeHandler);
    });

    function swipeHandler(e) {
        let endX = e.touches[0].clientX;
        let endY = e.touches[0].clientY;

        let deltaX = startX - endX;
        let deltaY = startY - endY;

        // 수평 스와이프를 감지하고, 스와이프 길이가 충분하면 뒤로 가기를 막음
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            e.preventDefault();
        }

        document.removeEventListener('touchmove', swipeHandler);
    }
}
function showAlert() {
    alert('오답입니다.');
}
function deletePopup(btnId) {
    const btn = document.getElementById(btnId);
    btn.style.background = '#F77F63';
    btn.style.color = '#fff';
    setTimeout(function () {
        alert('오답입니다.');
        btn.style.background = '#F9FAF3';
        btn.style.color = '#F77F63';
    }, 50);
}

function correctPopup(page, btnId, isGift) {
    const correct = document.getElementById('correct');
    const loadingBar = document.getElementById('loading');
    const btn = document.getElementById(btnId);
    const check = document.getElementById('check');
    check.style.display = 'block';
    btn.style.background = '#92CE6B';
    btn.style.border = '2px solid #92CE6B';
    btn.style.color = '#fff';
    // 초기 너비를 100%로 설정
    correct.style.display = 'block';

    const gift = document.getElementById('gift-open');
    isGift == true ? (gift.style.display = 'block') : (gift.style.display = 'none');
    setTimeout(function () {
        loadingBar.style.width = '100%';
    }, 50);
    // 3초 뒤에 페이지 이동
    setTimeout(function () {
        correct.style.display = 'none';
        gift.style.display = 'none';
        check.style.display = 'none';
        btn.style.background = '#F9FAF3';
        btn.style.color = '#F77F63';
        btn.style.border = '2px solid #F77F63';
        window.location.href = page;
    }, 5000);
}
