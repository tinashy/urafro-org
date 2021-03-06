$(document).ready(function() {
  /* scroll on button click */
  $('.js--scroll-to-intro').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--intro').offset().top-70
    }, 2000);
  });

  $('.js--scroll-to-features').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--features').offset().top-50
    }, 2000);
  });

  $('.js--scroll-to-about').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--about').offset().top
    }, 2000);
  });

  $('.js--scroll-to-contact').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--contact').offset().top
    }, 2000);
  });

  /* show/hide features on pricing template */
  //show/hide eFeatures section
  $('.js--show-hide-features').click(() => {
    $('.eFeatures').slideToggle('slow');
  });

  //display appropriate button info bases on the visibility of eFeatures
  $('.js--show-hide-features').click(() => {
    if ($('.ePrice__bottom--btnIcon').hasClass('fa-plus')) {
      $('.ePrice__bottom--btn').html('<i class="fas fa-minus ePrice__bottom--btnIcon ePrice__bottom--icon"></i> Hide plan features');
    } else {
      $('.ePrice__bottom--btn').html('<i class="fas fa-plus ePrice__bottom--btnIcon"></i> Show plan features');
    }
  });
  

  /* show/hide features on pricing template small screens */
  //show/hide basic plan features section
  $('.js--show-hide-features-basic').click(() => {
    $('.eFeatures__body--basic').slideToggle('fast');
  });

  //display appropriate button info bases on the visibility of eFeatures
  $('.js--show-hide-features-basic').click(() => {
    if ($('.ePrice__basic--btnIcon').hasClass('fa-plus')) {
      $('.ePrice__basic--btn').html('<i class="fas fa-minus ePrice__basic--btnIcon ePrice__bottom--icon"></i> Hide plan features');
    } else {
      $('.ePrice__basic--btn').html('<i class="fas fa-plus ePrice__basic--btnIcon ePrice__bottom--icon"></i> Show plan features');
    }
  });

  //show/hide basic plan features section
  $('.js--show-hide-features-urafro').click(() => {
    $('.eFeatures__body--urafro').slideToggle('fast');
  });

  //display appropriate button info bases on the visibility of eFeatures
  $('.js--show-hide-features-urafro').click(() => {
    if ($('.ePrice__urafro--btnIcon').hasClass('fa-plus')) {
      $('.ePrice__urafro--btn').html('<i class="fas fa-minus ePrice__urafro--btnIcon ePrice__bottom--icon"></i> Hide plan features');
    } else {
      $('.ePrice__urafro--btn').html('<i class="fas fa-plus ePrice__urafro--btnIcon ePrice__bottom--icon"></i> Show plan features');
    }
  });

  //show/hide basic plan features section
  $('.js--show-hide-features-adv').click(() => {
    $('.eFeatures__body--adv').slideToggle('fast');
  });

  //display appropriate button info bases on the visibility of eFeatures
  $('.js--show-hide-features-adv').click(() => {
    if ($('.ePrice__adv--btnIcon').hasClass('fa-plus')) {
      $('.ePrice__adv--btn').html('<i class="fas fa-minus ePrice__adv--btnIcon ePrice__bottom--icon"></i> Hide plan features');
    } else {
      $('.ePrice__adv--btn').html('<i class="fas fa-plus ePrice__adv--btnIcon ePrice__bottom--icon"></i> Show plan features');
    }
  });
});