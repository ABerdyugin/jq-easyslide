/*
JQuery required
*/

(function ($){
  $.fn.easySlider = function(options){
    var img = [];
    elem = this;
    var settings = $.extend({
      delay: 2000,
      width: 100 ,
      height: 100,
      imgPath: "/images/slide/",
      imgCount: 0,
      imgList: null,
      pad: 2,
      prefix: "slide_",
      suffix: "",
      ext: ".jpg"
    },options);
    if(settings.imgList){
      $(settings.imgList).each(function(){
        item = getImg(this);
        img.push(item);
      });
    }else{
      for(i = 1;i < settings.imgCount; i++){
        img_num = strpad(i);
        item = getImg(img_num);
        img.push(item);
      }
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
      out = "";
      if(!isNaN(val)){
        nameLen = val.toString().length;
        deltaLen = settings.pad - nameLen;
        if(deltaLen > 0){
          for(p = 0; p < deltaLen; p++){
            out = "0" + out;
          }
        }
        out = out + val;
      }
      return out;
    }
    function getImg(name){
      cur_img = [settings.imgPath,settings.prefix,name,settings.suffix,settings.ext];
      return $("<img src='"+cur_img.join("")+"'/>").height(settings.height).width(settings.width);
    }
  }
})(jQuery);