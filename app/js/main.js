console.log('Angular Rocks', angular);

$('#myForm').on('submit', function(event) {
  event.preventDefault();
  console.log("submitted!");
  var baseNumber = $('#orignum').val();
  var answer = baseNumber * baseNumber;
  console.log("The square of " + baseNumber + " is " + answer);
  return answer;
});


