$(document).ready( () =>{

   $('.dropdownbtn').click( () =>{

              $('.dropdownitem').slideToggle('fast')

   })

   $('.dropdownbtn1').click( () =>{

              $('.dropdownitem1').slideToggle('fast')

   })
 
 $('.icon').click( () =>{

     $('.navbar1').slideToggle('fast');

 })
  $(window).resize( () => {
        let Width = $(window).width();
        if (Width > 910) {
            $(".navbar1").hide();
            $('.dropdownitem1').slideUp('fast');


        }
    })

})