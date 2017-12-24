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
  errors: [
    { code: 'unknow_request' },
    { code: 'empty_request' },
    { code: 'access_denied' },
    { code: 'internal_server_error' },
    { code: 'exception', reason: 'whatever floats your boat' },
  ]
}

// --------------------------------------------------------------------------------------------------
//                                           Authenticate user
// --------------------------------------------------------------------------------------------------

// Request
!{
  user_authenticate: {
    username: String,
    password: String
  }
}

// Response
!{
  user_authenticate: true || false,
  user_info: { /* ... */}
}

// --------------------------------------------------------------------------------------------------
//                                             Register user
// --------------------------------------------------------------------------------------------------

// Request
!{
  user_register: {
    username:   String,
    password:   String,
    firstname:  String || undefined,
    patronymic: String || undefined,
    surname:    String || undefined,
    email:      String,
    phone:      String || undefined
  }
}

// Response
!{
  user_register: true || false,
  user_info: { /* ... */ }
}

// --------------------------------------------------------------------------------------------------
//                                           Get user info
// --------------------------------------------------------------------------------------------------

// Request
!{
  get_user_info: {
    username: String || undefined
    // if undefined - get info for self
  }
}

// Response
!{
  get_user_info: true || false,
  user_info: {
    username:   String,
    password:   String,
    firstname:  String || undefined,
    patronymic: String || undefined,
    surname:    String || undefined,
    email:      String,
    phone:      String || undefined,
    // any other info ...
  }
}

// --------------------------------------------------------------------------------------------------
//                                           Set user info
// --------------------------------------------------------------------------------------------------

// Request
!{
  set_user_info: {
    username:   String,
    firstname:  String || undefined,
    patronymic: String || undefined,
    surname:    String || undefined,
    email:      String,
    phone:      String || undefined
  }
}

// Response
!{
  set_user_info: true || false,
  user_info: { /* ... */}
}

// --------------------------------------------------------------------------------------------------
//                                           Set password
// --------------------------------------------------------------------------------------------------

// Request
!{
  set_password: {
    old: String,
    new: String
  }
}

// Response
!{
  set_password: true || false
}

// --------------------------------------------------------------------------------------------------
//                                       Is username avaliable
// --------------------------------------------------------------------------------------------------

// Request
!{
  is_username_avaliable: String
}

// Response
!{
  set_user_info: true || false,
  user_info: { /* ... */}
}