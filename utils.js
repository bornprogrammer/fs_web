function showSuccessMessage() {
    let idObject = $("#success-alert");
    idObject.show();
    setTimeout(() => {
        idObject.hide();
    }, 5000);
}



function showErrorMessage() {
    let idObject = $("#error-alert");
    idObject.show();
    setTimeout(() => {
        idObject.hide();
    }, 5000);
}