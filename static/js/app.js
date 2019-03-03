$(document).ready(function(){
    $('.map__image').append('<div class="tooltip">test</div>');
    $('.map__image .tooltip').hide();

    var regions = [
        {name:'Zagrebačka'},
        {name:'Krapinsko'},
        {name:'Sisačko'},
        {name:'Karlovačka'},
        {name:'Varaždinska'},
        {name:'Koprivničko'},
        {name:'Bjelovarsko'},
        {name:'Primorsko'},
        {name:'Ličko'},
        {name:'Virovitičko'},
        {name:'Požeško'},
        {name:'Brodsko'},
        {name:'Zadarska'},
        {name:'Osječko'},
        {name:'Šibensko'},
        {name:'Vukovarsko'},
        {name:'Splitsko'},
        {name:'Istarska'},
        {name:'Dubrovačko'},
        {name:'Međimurska'},
        {name:'Grad'}
    ];
    
   // on passe sur une region
    $('path').mouseover(function(){
       var index = $(this).index();
       $('.map .tooltip').html(regions[index].name).stop().fadeTo(500, 1);
       //console.log(index);
   })

   

      //tooltip qui suit la souris
  $(document).mousemove(function(e){
    $('.map__image .tooltip').css({
        top:e.pageY-$('.map__image .tooltip').height()-20,
        left:e.pageX-$('.map__image .tooltip').height()/2-10
    });
  });

    //On sort de la map
  $('.map__image').mouseout(function(){
      $('.map__image .tooltip').stop().fadeTo(500, 0);
  })

  

  });

