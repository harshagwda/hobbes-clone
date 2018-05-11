// <-----Greeting----->
$(document).ready(function(){
var thehours = new Date().getHours();
	var themessage;
	var morning = 'Good morning, User';
	var afternoon = 'Good afternoon, User';
	var evening = 'Good evening, User';
	var night = 'Good night, User';

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 16) {
		themessage = afternoon;

	} else if (thehours >= 16 && thehours < 19) {
		themessage = evening;

	}else if (thehours >= 19 && thehours < 24){
		themessage = night;
	}
	$('#grtng').text(themessage);

// <-----Date and time----->
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = n + ' ' + time;


});

// <---Login-form validation--->
// $(document).ready(function () {
//       $("#myForm").validate({
//         rules: {
//           email: {
//             required: true,
//             email: true
//           },
//           pwd: {
//             required: true,
//             minlength: 5
//           }
//         },
//         messages: {
//           email: {
//             required: "We need your email address to contact you",
//             email: "Enter a valid email address"
//           },
//           pwd: {
//             required: "Password feild is empty",
//             minlength: "Password must contain minimum 5 characters"
//           }
//         },
//         highlight: function(element) {
//          $(element).parent().parent().addClass("has-error");
//        },

//        unhighlight: function(element) {
//         $(element).parent().parent().removeClass("has-error");
//       },
//        errorPlacement: function (error, element) {
//                 error.appendTo( element.next('div' ));


//         },
//             submitHandler: function (form) {
//           }
//         });
//     });

//      var modal = document.getElementById('myModal');
//      var btn = document.getElementById("myBtn");
//      var span = document.getElementsByClassName("close")[0];
//      btn.onclick = function() {
//       modal.style.display = "block";
//     }
//     span.onclick = function() {
//       modal.style.display = "none";
//     }
//     window.onclick = function(event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     }

