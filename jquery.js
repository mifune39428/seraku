//ヘッダー
var _window = $(window),
    _header = $('.header'),
    _header_color = $('.header-color'),
    _logo = $('.logo'),
    _logo_scroll = $('.logo-scroll'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('h1').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');
        _header_color.addClass('transform');
        _logo.addClass('transform');
        _logo_scroll.addClass('transform');
    }
    else{
        _header.removeClass('transform');
        _header_color.removeClass('transform');
        _logo.removeClass('transform');
        _logo_scroll.removeClass('transform');
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
