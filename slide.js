/*
JQuery required
*/

(function ($){
  $.fn.rtSlider = function(options){
    var img = [];
    elem = this;
    var settings = $.extend({
      delay: 2000,
      width: 100 ,
      height: 100,
      img_path: "/images/slide/",
      img_count: 0,
      pad: 2,
      prefix: "slide_",
      suffix: "",
      ext: ".jpg"
    },options);
    for(i = 1;i < settings.img_count; i++){
      img_num = strpad(i);
      cur_img = [settings.img_path,settings.prefix,img_num,settings.suffix,settings.ext];
      item = $("<img src='"+cur_img.join("")+"'/>").height(settings.height).width(settings.width);
      img.push(item);
    }
    for(i = 0; i < 2; i++){
      topimg = img.shift();
      $(this).prepend(topimg);
      img.push(topimg);
    }
    $(this).children("img").last().delay(settings.delay).fadeOut(settings.delay/2,rotate);
    function rotate(){
      $(elem).children("img").last().remove();
      topimg = img.shift();
      $(elem).prepend(topimg);
      $(topimg).show(0);
      img.push(topimg);
      $(elem).children("img").last().delay(settings.delay).fadeOut(settings.delay/2,rotate);
    }
    function strpad(val){
      return (!isNaN(val) && val.toString().length==1)?"0"+val:val;
    }
  }
})(jQuery);