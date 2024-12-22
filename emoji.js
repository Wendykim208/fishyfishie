// mint.png 버튼 선택
const emojiButton = document.querySelector("#emoji-button");

// 이미지 파일 목록
const images = [
    "images/emoji1.png",
    "images/emoji2.png",
    "images/emoji3.png",
    "images/emoji4.png",
    "images/emoji5.png",
    "images/emoji6.png"
];

emojiButton.addEventListener("click", () => {
    createEmojiCircle();
});

function createEmojiCircle() {
    const circle = document.createElement("img");

    // 랜덤 이미지 선택
    const randomImage = images[Math.floor(Math.random() * images.length)];
    circle.src = randomImage;
    circle.className = "circle";

    // 랜덤 크기 (최소 50px ~ 최대 160px)
    const size = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    circle.style.width = `${size}px`; // Width만 설정
    circle.style.height = "auto";    // Height는 비율에 맞게 자동 조정

    // 랜덤 위치
    const maxWidth = window.innerWidth - size;
    const maxHeight = window.innerHeight - size;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    circle.style.position = "absolute";
    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;

    document.body.appendChild(circle);

    // 10초 후 자동 제거
    setTimeout(() => {
        circle.remove();
    }, 10000);
}
