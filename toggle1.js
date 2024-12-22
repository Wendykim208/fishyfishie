// JavaScript 코드
let isTranslated = false;

document.getElementById('toggle-icon').addEventListener('click', function () {
  // 텍스트 요소 가져오기
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');

  // 한국어 텍스트
  const koreanText1 = "fishyfishie는 ‘수상한, 의심스러운’ 의미의 “fishy”와 ‘물고기를 귀엽게 부르는 말’인 “fishie”의 합성어이다.";
  const koreanText2 = "'모두가 물고기의 귀여움을 알게 해주리라!!'라는 미션을 가지고 시작된 fishyfishie는 물고기를 키우는 사람들이나 스쿠버 다이버들을 위한 정보 공유에만 집중되어 있는 기존의 물고기 잡지에서 벗어나 ‘물고기’를 미감적 주제로서 접근하는 그래픽 디자인 중심의 격월 연재 web art zine이다.";
  const koreanText3 = "fishyfishie zine과 함께 어딘가 모르게 우스꽝스럽고 수상한 물고기들의 괴짜 같은 귀여운 매력을 알아보자!";
  // 영어 텍스트
  const englishText1 = "fishyfishie is a combination of “fishy,” meaning “suspicious or odd,” and “fishie,” a cute way of saying “fish.”";
  const englishText2 = "Founded with the mission of “letting everyone discover the cuteness of fish!!,” fishyfishie breaks away from traditional fish magazines that focus solely on sharing information for fishkeepers or scuba divers. Instead, it approaches “fish” as an aesthetic theme, creating a graphic design-focused bi-monthly web art zine.";
  const englishText3 = "Through fishyfishie zine, let’s dive into the quirky, charmingly goofy world of odd yet adorable fish!";
  if( isTranslated === false ) {
    text1.innerText = englishText1;
    text2.innerText = englishText2;
    text3.innerText = englishText3;
  } else if( isTranslated === true ) {
    text1.innerText = koreanText1;
    text2.innerText = koreanText2;
    text3.innerText = koreanText3;
  }

  isTranslated = !isTranslated;
});
