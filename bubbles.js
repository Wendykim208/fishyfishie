// bubbles 클래스가 있는 li 요소 선택
const bubblesButton = document.querySelector("#bubbles-button");

bubblesButton.addEventListener("click", () => {
    createBubblesCircle();
});

function createBubblesCircle() {
    const circle = document.createElement("img");
    circle.src = "images/bubble.png";
    circle.className = "circle";

    // 랜덤 크기 (최소 50px ~ 최대 160px)
    const size = Math.floor(Math.random() * (160 - 50 + 1)) + 50;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // 랜덤 위치
    const maxWidth = window.innerWidth - size;
    const maxHeight = window.innerHeight - size;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    circle.style.position = "absolute";
    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;

    document.body.appendChild(circle);

    let velocityX = Math.random() * 2 - 1; // -1 ~ 1
    let velocityY = Math.random() * 2 - 1; // -1 ~ 1

    function moveCircle() {
        const x = parseFloat(circle.style.left);
        const y = parseFloat(circle.style.top);

        let newX = x + velocityX;
        let newY = y + velocityY;

        // 충돌 감지
        if (newX + size > window.innerWidth || newX < 0) {
            velocityX *= -1;
        }
        if (newY + size > window.innerHeight || newY < 0) {
            velocityY *= -1;
        }

        circle.style.left = `${newX}px`;
        circle.style.top = `${newY}px`;

        requestAnimationFrame(moveCircle);
    }

    moveCircle();

    // 10초 후 자동 제거
    setTimeout(() => {
        circle.remove();
    }, 10000);
}
