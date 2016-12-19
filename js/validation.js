$(function() {

	$(".booking").validate({
		rules:{

			email:{
				required: true,
				email: true
			},

			name:{
				required:true,
				nowhitespace:true,
				lettersonly:true
			},

			phone:{
				required: true,
				digits: true,
				phonesNZ: true
			},

			service:{
				required: true
			}

		},

		email:{
			required:'Please enter an email address.',
			email:'Please enter a valid email address'
		},

		service:{
			required:'Please select a service.'
		}


	}); 

});