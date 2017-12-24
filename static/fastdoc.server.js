// NOTE: the ! are here for correct js syntax

// --------------------------------------------------------------------------------------------------
//                                        Errors (response only)
// --------------------------------------------------------------------------------------------------
/*
  Used when general or critical errors happen:
  unknown request type, random crappy request, empty request,
  server error, unauthorized request to a private resource
*/

// Response
!{
	"errors" : [
		{ "code" : "invalid_query", 					"reason" : "String | null" },
		{ "code" : "non_existent_function", 			"reason" : "function name" },
		{ "code" : "server_can_not_process_request", 	"reason" : "String | null" },
		{ "code" : "incorrect_data", 					"reason" : "String | null" },
		{ "code" : "access_denied", 					"reason" : "function name" }
	]
}

// --------------------------------------------------------------------------------------------------
//                                           Authenticate user
// --------------------------------------------------------------------------------------------------

// Request
!{
	"user_authenticate": {
		"username" : "String",
		"password" : "String"
	}
}

// Response
!{
	"data" : {
		"user_authenticate" : {
			"status" : "true | false"
		}
	}
}

// --------------------------------------------------------------------------------------------------
//                                             Register user
// --------------------------------------------------------------------------------------------------

// Request
!{
	"user_register" : {
		"username" 		: "String",
		"password" 		: "String",
		"firstname" 	: "String | null", //optional
		"patronymic" 	: "String | null", //optional
		"surname" 		: "String | null", //optional
		"email" 		: "String",
		"phone" 		: "String | null" //optional
	}
}

// Response
!{
	"data" : {
		"user_register" : {
			"status" : "true | false",
			"reason" : "String"		 	//optional
		}
	}
}

// --------------------------------------------------------------------------------------------------
//                                           Get user info
// --------------------------------------------------------------------------------------------------

// Request
!{
	"get_user_info" : {
		"username" : "String / null" // if null - get info for self
	}
}

// Response
!{
	"data" : {
		"get_user_info" : {
			"username" 		: "String | null",
			"firstname" 	: "String | null",
			"patronymic" 	: "String | null",
			"surname" 		: "String | null",
			"email"			: "String | null", //if username = null --> email = string or username != null --> email = null
			"phone"			: "String | null",
		}
	}
}

// --------------------------------------------------------------------------------------------------
//                                           Set account info
// --------------------------------------------------------------------------------------------------

// Request
!{
	"set_account_info" : {
		"firstname" 	: "String", //optional
		"patronymic" 	: "String", //optional
		"surname" 		: "String", //optional
		"phone" 		: "String"	//optional
	}
}

// Response
!{
	"data" : {
		"set_account_info" : {
			"status" : "true | false"
		}
	}
}

// --------------------------------------------------------------------------------------------------
//                                           Is username avaliable
// --------------------------------------------------------------------------------------------------

// Request
!{
	"is_username_avaliable" : {
		"username" : "String"
	}
}

// Response
!{
	"data" : {
		"is_username_avaliable" : {
			"is_avaliable" : "true | false"
		}
	}
}

// --------------------------------------------------------------------------------------------------
//                                           Change password
// --------------------------------------------------------------------------------------------------

// Request
!{
	"change_password" : {
		"password" 		: "String",
		"old_password" 	: "String",
	}
}

// Response
!{
	"data" : {
		"change_password" : {
			"status" : "true | false"
		}
	}
}