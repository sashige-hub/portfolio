'user strict'

$(function(){

  var slideRight= {
    delay: 500, //アニメーションの発生タイミング
    distance: '50px', //要素の移動距離
    origin: 'right' //要素が移動してくる方向
  };

  var slideLeft= {
    delay: 500, //アニメーションの発生タイミング
    distance: '50px', //要素の移動距離
    origin: 'left' //要素が移動してくる方向
  };

  var slideBottom1= {
    delay: 0, //アニメーションの発生タイミング
    distance: '50px', //要素の移動距離
    origin: 'bottom' //要素が移動してくる方向
  };

  var slideBottom2= {
    delay: 500, //アニメーションの発生タイミング
    distance: '50px', //要素の移動距離
    origin: 'bottom' //要素が移動してくる方向
  };

  var slideBottom3= {
    delay: 1000, //アニメーションの発生タイミング
    distance: '50px', //要素の移動距離
    origin: 'bottom' //要素が移動してくる方向
  };

  ScrollReveal().reveal('.text-content', slideRight);
  ScrollReveal().reveal('.about-img', slideLeft);
  ScrollReveal().reveal('.services-box1', slideBottom1);
  ScrollReveal().reveal('.services-box2', slideBottom2);
  ScrollReveal().reveal('.services-box3', slideBottom3);

});