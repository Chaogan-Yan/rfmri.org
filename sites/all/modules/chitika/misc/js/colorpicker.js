(function ($) {
  Drupal.behaviors.chitikaAdsColorpicker = {
    attach: function (context) {
      // initiate farbtastic colorpicker
      var farb = $.farbtastic("#colorpicker");
      var firstField = "";

      $(".colorSelector").each(function() {
      // set textfield background to its value
        farb.linkTo(this);

        if (firstField == "") {
          firstField = this;
        };

        $(this).click(function () {
          $.farbtastic("#colorpicker").linkTo(this);
        });
      });

      farb.linkTo(firstField);
    }
  };
})(jQuery);
