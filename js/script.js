window.onload = function () {
  const visualImg = [
    {
      name:"visual-01",
      src:"visual-01.jpg"
    }, {
      name:"visual-02",
      src:"visual-02.jpg"
    }, {
      name:"visual-03",
      src:"visual-03.jpg"
    }, {
      name:"visual-04",
      src:"visual-04.jpg"
    }, {
      name:"visual-05",
      src:"visual-05.jpg"
    }, {
      name:"visual-06",
      src:"visual-06.jpg"
    }, {
      name:"visual-07",
      src:"visual-07.jpg"
    }
  ]

  let VisualWrap = $('.sw-visual > .swiper-wrapper');
  let itemDataPost = '';

  // list 구현
  for (let i = 0; i < visualImg.length; i++) {  // i< 6 상품 갯수 6개 제한
    let imgList = visualImg[i];
    let itemTemp = `
    <div class="swiper-slide">
      <img src="images/${imgList.src}" alt="${imgList.name}"/>
    </div>
  `;
    itemDataPost += itemTemp;
  };
  VisualWrap.html(itemDataPost);

  new Swiper('.sw-visual', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      type: 'bullets',
      el:'.sw-bullet-box'
    },
    navigation: {
      prevEl: '.prev',
      nextEl: '.next'
    },
  })
};
$(document).ready(function () {
  
});