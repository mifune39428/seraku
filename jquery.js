//ヘッダー
var _window = $(window),
    _header = $('.header'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('h1').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');
//ここまでヘッダー

//ヘッダーメニュー
$('.nav-button').on('click',function(){
  if( $(this).hasClass('active') ){
    $(this).removeClass('active');
    $('.nav-wrap').addClass('close').removeClass('open');
  }else {
    $(this).addClass('active');
    $('.nav-wrap').addClass('open').removeClass('close'); 
  }
});
//ここまでヘッダーメニュー

//トップスクロールの線の表示
window.onload = function(){
  
  $(".Text-Span").each(function(){
    $(this).addClass('isActive');
  });
 };
