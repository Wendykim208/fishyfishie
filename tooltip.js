document.addEventListener('DOMContentLoaded', () => {
  const tooltipTrigger = document.querySelector('.tooltip-trigger');
  const tooltip = document.querySelector('.tooltip');

  let isTooltipVisible = false; // 툴팁 상태 추적

  tooltipTrigger.addEventListener('click', () => {
    if (!isTooltipVisible) {
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
    } else {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
    }
    isTooltipVisible = !isTooltipVisible; // 상태 토글
  });

  // 화면 클릭 시 툴팁 숨기기
  document.addEventListener('click', (event) => {
    if (!tooltipTrigger.contains(event.target) && !tooltip.contains(event.target)) {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
      isTooltipVisible = false;
    }
  });
});
