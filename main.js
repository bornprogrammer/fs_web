var eventData = {};

var appletType = "";

const ffAAppletClient = new FAAppletClient({
    appletId: faServiceAppletId
});

function showFileListGrid() {
    $("#document-container").show();
    hideTitleBusinessList();
}

function hideFileListGrid() {
    $("#document-container").hide();
}

function showTitleBusinessList() {
    $("#business-container").show();
    hideFileListGrid();
}

function hideTitleBusinessList() {
    $("#business-container").hide();
}

function setTitle(title) {
    $("#title").html(title);
}

function tableNoRecordFound() {
    let htmlStr = ""
}











