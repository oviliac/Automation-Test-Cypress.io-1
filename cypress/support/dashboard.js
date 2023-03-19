class dashboard {
    create_new_button = ':nth-child(4) > .btn'
    edit_button = ':nth-child(2) > :nth-child(7) > .btn-outline-primary'
    details_button = ':nth-child(2) > :nth-child(7) > .btn-outline-info'
    delete_button = ':nth-child(2) > :nth-child(7) > .btn-outline-danger'
    dashboard_title = 'h1'
    dashboard_title_text = 'Dashboard'

    page_title = 'h2'
    page_subtitle = 'h3'

    form_name = '#Name'
    form_company = '#Company'
    form_address = '#Address'
    form_city = '#City'
    form_phone = '#Phone'
    form_email = '#Email'
    form_submit = '.btn-primary'

    search_input = '#searching'
    search_submit = '.container > div > form > .btn'

    table_first_name = 'tbody > :nth-child(2) > :nth-child(1)'
    table_first_email = ':nth-child(2) > :nth-child(6)'
    
    detail_name = '.dl-horizontal > :nth-child(2)'
    detail_company = '.dl-horizontal > :nth-child(4)'
    detail_address = '.dl-horizontal > :nth-child(6)'
    detail_city = '.dl-horizontal > :nth-child(8)'
    detail_phone = ':nth-child(10)'
    detail_email = ':nth-child(12)'

    page_title_edit = 'Edit'
    page_title_details = 'Details'
    page_title_delete = 'Delete'

    delete_confirmation_text = 'Are you sure you want to delete this?'
    delete_information = '.container > div'
    confirm_delete_button = '.btn-outline-danger'

    customer_detail = 'Customer Details'

    back_to_list_button = '.btn-link'

    not_match = 'td'
}
export default dashboard;