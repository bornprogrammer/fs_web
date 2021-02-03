
(function () {

    var transactionId = null;

    var freeagentId = null;

    var reviewStatusOrder = null;

    initFileUpload();

    function initFileUpload() {
        resetFileField();
        let params = new URLSearchParams(window.location.search);
        transactionId = 218527;//params.get("transId");
        freeagentId = params.get("freeagentId");
        reviewStatusOrder = params.get("reviewStatusOrder");
    }

    $("form").on("change", ".file-upload-field", function () {
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
    });

    $(".upload-button").click(function () {
        let fileData = $(".file-upload-field")[0].files[0];
       /*  let fileType = $("#file-type-list option:selected").val();  */
        let fileType = $('#kishankumar25').val(); 
       
       
        if (fileData && transactionId && fileType) {
            let formData = new FormData();
            formData.append(fileType, fileData);
            uploadFormData(formData, transactionId);
        } else {
            alert("Please select a file to upload or transaction id is missing or select a file type");
        }
    })

    function uploadFormData(formData, transactionId) {
        uploadFile(`${documentUploadingURL}?transactionId=${transactionId}`, formData, { 'Ocp-Apim-Subscription-Key': ocpApimSubscriptionKey }, showSuccessMessage, showErrorMessage);
        // $.ajax({
        //     url: `${documentUploadingURL}?transactionId=${transactionId}`,
        //     type: "POST",
        //     contentType: 'multipart/form-data',
        //     processData: false,
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Ocp-Apim-Subscription-Key': '829146f0458544799aa050fbac951410'
        //     },
        //     data: formData,
        //     // cors: true,
        //     dataType: "json"
        // }).done(function (data) {
        //     showSuccessMessage();
        // }).fail(function () {
        //     showErrorMessage();
        // });
    }

    // function showSuccessMessage() {
    //     let idObject = $("#success-alert");
    //     idObject.show();
    //     setTimeout(() => {
    //         idObject.hide();
    //     }, 5000);
    // }

    // function showErrorMessage() {
    //     let idObject = $("#error-alert");
    //     idObject.show();
    //     setTimeout(() => {
    //         idObject.hide();
    //     }, 5000);
    // }

    function resetFileField() {
        $("#fileupload").val("");
    }
    $(".closebtn").click(function () {
        $(".alert").hide();
    })


})();