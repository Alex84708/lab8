// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function(){
		$(".judge-img").bind("taphold", tapholdHandler);

		function tapholdHandler(event){
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			$("#" + targetIDPrefix + "-bio").show();
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e) {
	  e.preventDefault();
	  console.log("submitting form...");
	  var rsvpForm = $('#rsvpEmail').val();
	  console.log(rsvpForm);
	  $.post('addRSVP', {rsvpEmail: rsvpForm}, postCallBack);
  });

  function postCallBack(res){
	  alert("RSVP form successfully submitted");
	  $('#rsvpEmail').val('');
  }
}