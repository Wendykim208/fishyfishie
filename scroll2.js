const container = document.querySelector('.image-list');
let offset = 0;

// 이미지 리스트 전체 길이 계산
const totalImages = document.querySelectorAll('.scroll-image').length;
const maxOffset = (totalImages - 1) * window.innerWidth; // 최대 이동 거리

window.addEventListener('wheel', (e) => {
  // 스크롤 방향에 따라 offset 계산
  offset += Math.sign(e.deltaY) * 60;

  // offset 범위 제한
  if (offset < 0) {
    offset = 0;
  } else if (offset > maxOffset) {
    offset = maxOffset;
  }

  // 이미지 리스트 이동
  container.style.transform = `translateX(-${offset}px)`;
});