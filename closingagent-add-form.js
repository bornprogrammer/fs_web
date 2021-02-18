
function initCreateCloseAgentView() {
    setTitle("Closing Agent");
    $("#transaction-id").html("");

    renderCreateClosingAgentFormView();
    removeReadOnly();
    toggleClass();
}

function renderCreateClosingAgentFormView() {
    $("#readonlyClosingAgentFormBtn").hide();
    $("#closingagent-table").hide();
    $("#createClosingAgentFormBtn").show();

    $("#form_CompanyName").val("");
    $("#form_ContactEmail").val("");
    $("#form_Phone").val("");
    $("#form_Address").val("");
    $("#form_Address2").val("");
    $("#form_City").val("");
    $("#form_State").val("0");
    $("#form_Zip").val("");
    $("#form_Website").val("");
}

function removeReadOnly() {
    $("#closingagent-form").find('input[type="text"]').prop('readonly', false);
    $("#closingagent-form").find('select').prop('disabled', false);
}

function toggleClass() {
    $("#closingagent-form").find('input[type="text"], .custom-select').removeClass("CalculatedElement").addClass("FAInputContainer");
}

function showReadonlyClosingAgentForm() {
    $("#closingagent-form").find('input[type="text"], .custom-select').addClass("CalculatedElement").removeClass("FAInputContainer");
    $("#closingagent-form").find('label').removeClass("required");
    $("#closingagent-table").hide();
    $("#createClosingAgentFormBtn").hide();
    $(".form-field-span").hide();
    $("#closingagent-form").show();
    $("#readonlyClosingAgentFormBtn").show();

    $("#closingagent-form").find('input[type="text"]').prop('readonly', true);
    $("#closingagent-form").find('select').prop('disabled', true);

    $("#transaction-id").html("Closing Agent Id : " + cloaingagentID);

}

function saveClosingAgent() {
    validationForm();
    addClosingAgentDetailsToFA();
}

function addClosingAgentDetailsToFA() {
    let formData = { type: "update_closing_agent_details", freeAgentId: getFreeAgentId(), closingAgentId: "CA25719" };
    callGet(fundingshieldurl, formData, null, afterUpdateEntity, afterUpdateEntity);
}


function validationForm() {
    //Company Name Validation
    let txt_companyName = $("#form_CompanyName").val();
    if (txt_companyName == "") {
        $("#form_CompanyName").parent().find('label').addClass("required");
        $("#form_CompanyName").parent().find('span').show();
        txt_companyName = '';
    }
    else {
        $("#form_CompanyName").parent().find('label').removeClass("required");
        $("#form_CompanyName").parent().find('span').hide();
        txt_companyName = '';
    }
    //Phone number Validation
    let txt_phone = $("#form_Phone").val();
    var mobRegex = /^\+?([0-9]{2})\)?[-.]?([1-9]{1}[0-9]{9})$/
    if (txt_phone == "") {
        $("#form_Phone").parent().find('label').addClass("required");
        $("#form_Phone").parent().find('span').show();
        txt_phone = '';
    }
    else if (mobRegex.test(txt_phone) == false) {
        $("#form_Phone").parent().find('span').html("Please enter valid mobile number.");
        $("#form_Phone").parent().find('span').show();
        txt_phone = '';
    }
    else {
        $("#form_Phone").parent().find('label').removeClass("required");
        $("#form_Phone").parent().find('span').hide();
        txt_phone = '';
    }
    //Email Validation
    var emlRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let txt_email = $("#form_ContactEmail").val();
    // let emailLabel = $("#form_ContactEmail").parent().find('label');
    if (txt_email == "") {
        $("#form_ContactEmail").parent().find('label').addClass("required");
        $("#form_ContactEmail").parent().find('span').show();
        txt_email = '';
    }
    else if (emlRegex.test(txt_email) == false) {
        $("#form_ContactEmail").parent().find('span').html("please enter correct email address.");
        $("#form_ContactEmail").parent().find('span').show();
        txt_email = '';
    }
    else {
        $("#form_ContactEmail").parent().find('label').removeClass("required");
        $("#form_ContactEmail").parent().find('span').hide();
        txt_email = '';
    }


    //Zip Code Validation
    var zipcodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    let txt_zip = $("#form_Zip").val();
    if (txt_zip == "") {
        $("#form_Zip").parent().find('label').addClass("required");
        $("#form_Zip").parent().find('span').show();
        txt_zip = '';
    }
    else if (zipcodeRegex.test(txt_zip) == false) {
        $("#form_Zip").parent().find('span').html("please enter zip code.");
        $("#form_Zip").parent().find('span').show();
        txt_zip = '';
    }
    else {
        $("#form_Zip").parent().find('label').removeClass("required");
        $("#form_Zip").parent().find('span').hide();
        txt_zip = '';
    }

    //Website Validation
    var webSiteRegex = /^((http|https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    let txt_website = $("#form_Website").val();
    if (txt_website == "") {
        $("#form_Website").parent().find('label').addClass("required");
        $("#form_Website").parent().find('span').show();
        txt_website = '';
    }
    else if (webSiteRegex.test(txt_website) == false) {
        $("#form_Website").parent().find('span').html("please enter website name.");
        $("#form_Website").parent().find('span').show();
        txt_website = '';
    }
    else {
        $("#form_Website").parent().find('label').removeClass("required");
        $("#form_Website").parent().find('span').hide();
        txt_website = '';
    }

    //City Validation
    var nameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    let txt_city = $("#form_City").val();
    if (txt_city == "") {
        $("#form_City").parent().find('label').addClass("required");
        $("#form_City").parent().find('span').show();
        txt_city = '';
    }
    else if (nameRegex.test(txt_city) == false) {
        $("#form_City").parent().find('span').html("please enter city name.");
        $("#form_City").parent().find('span').show();
        txt_city = '';
    }
    else {
        $("#form_City").parent().find('label').removeClass("required");
        $("#form_City").parent().find('span').hide();
        txt_city = '';
    }

    //Address Name Validation
    //var addressRegex = /(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}/
    var addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
    let txt_address = $("#form_Address").val();
    if (txt_address == "") {
        $("#form_Address").parent().find('label').addClass("required");
        $("#form_Address").parent().find('span').show();
        txt_address = '';
    }
    else if (addressRegex.test(txt_address) == false) {
        $("#form_Address").parent().find('span').html("please enter address.");
        $("#form_Address").parent().find('span').show();
        txt_address = '';
    }
    else {
        $("#form_Address").parent().find('label').removeClass("required");
        $("#form_Address").parent().find('span').hide();
        txt_address = '';
    }

    //Address2 Name Validation
    let txt_address2 = $("#form_Address2").val();
    if (txt_address2 == "") {
        $("#form_Address2").parent().find('label').addClass("required");
        $("#form_Address2").parent().find('span').show();
        txt_address2 = '';
    }
    else if (addressRegex.test(txt_address2) == false) {
        $("#form_Address2").parent().find('span').html("please enter address.");
        $("#form_Address2").parent().find('span').show();
        txt_address2 = '';
    }
    else {
        $("#form_Address2").parent().find('label').removeClass("required");
        $("#form_Address2").parent().find('span').hide();
        txt_address2 = '';
    }

    //State Name Validation
    var selected_state = $('#form_State option:selected').val();
    if (selected_state == "0") {
        $("#form_State").parent().find('label').addClass("required");
        $("#form_State").parent().find('span').show();
        selected_state = '';
    }
    else {
        $("#form_State").parent().find('label').removeClass("required");
        $("#form_State").parent().find('span').hide();
        selected_state = '';
    }
}


