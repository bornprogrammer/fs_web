var eventData = {};

var appletType = "";

const ffAAppletClient = new FAAppletClient({
    appletId: faServiceAppletId
});

function showFileListGrid(isWireAppletClicked) {
    $("#document-container").show();
    if(isWireAppletClicked == true){
        $("#wire-data").css('margin-top','-14px');
    }
    hideTitleBusinessList();
    hideeditwire();
}

function hideFileListGrid() {
    $("#document-container").hide();
}

function showeditwire(){
    $("#wire_edit").show();
}
function hideeditwire(){
    $("#wire_edit").hide();
}

function showlender(){
    $("#lender_list").show();
}
function hidelender(){
    $("#lender_list").hide();
}


function showTitleBusinessList() {
    $("#business-container").show();
    hideFileListGrid();
    hideeditwire();
}

function hideTitleBusinessList() {
    $("#business-container").hide();
}

function setTitle(title) {
    $("#title").html(title);
}

function tableNoRecordFound(){
    let htmlStr = ""
}











