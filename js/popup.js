function deletePopup() {
    alert('오답입니다.');
}

function correctPopup(page) {
    const correct = document.getElementById('correct');
    const loadingBar = document.getElementById('loading');
    // 초기 너비를 100%로 설정

    correct.style.display = 'block';
    setTimeout(function () {
        loadingBar.style.width = '100%';
    }, 50);
    // 3초 뒤에 페이지 이동
    setTimeout(function () {
        window.location.href = page;
    }, 3000);
}
