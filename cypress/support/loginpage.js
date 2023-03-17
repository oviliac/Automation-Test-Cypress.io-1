class login{
    loginUrl ='https://itera-qa.azurewebsites.net/Login'
    username = '#Username'
    password = '#Password'
    loginbutton = '.btn-primary'
    clearbutton = ':nth-child(7) > :nth-child(2) > .btn-secondary'
    registerbutton = '.btn > a'
    validation_error = '.alert-danger'
    validation_error_message = 'Wrong username or password'
    field_validation_error ='.field-validation-error'
    field_empty_validation_message = 'Please enter password'
    signuppage_title = 'h2'
    signuppage_title_text = 'Add new user'
    signup_form = '.form-horizontal'

}
export default login;
