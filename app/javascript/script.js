$(document).ready(function() {
  var $leftArm = $('.arm.left');
  var $rightArm = $('.arm.right');

  setInterval(function() {
    $leftArm.animate({ rotate: '-=45deg' }, 200)
            .animate({ rotate: '+=45deg' }, 200);
    $rightArm.animate({ rotate: '+=45deg' }, 200)
             .animate({ rotate: '-=45deg' }, 200);
  }, 1000);
});


$(document).ready(function() {
  var $leftLeg = $('.leg.left');
  var $rightLeg = $('.leg.right');

  setInterval(function() {
    $leftLeg.animate({ rotate: '-=10deg' }, 100)
            .animate({ rotate: '+=10deg' }, 100);
    $rightLeg.animate({ rotate: '+=10deg' }, 100)
             .animate({ rotate: '-=10deg' }, 100);
  }, 200);
});


// $(document).ready(function() {
//   var $head = $('.head');
//   var $body = $('.body');

//   setInterval(function() {
//     $head.animate({ top: '+=10px' }, 200)
//         .animate({ top: '-=10px' }, 200);
//     $body.animate({ rotate: '-=10deg' }, 200)
//         .animate({ rotate: '+=10deg' }, 200);
//   }, 400);
// });