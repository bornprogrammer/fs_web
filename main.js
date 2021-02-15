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
    hidelender();
}

function hideFileListGrid() {
    $("#document-container").hide();
}

function showeditwire(){
    $("#wire_edit").show();
    hideTitleBusinessList();
    hidelender();
}
function hideeditwire(){
    $("#wire_edit").hide();
}

function showlender(){
    $("#lender-container").show();
    hideeditwire();
    hideTitleBusinessList();
    hideFileListGrid();
}
function hidelender(){
    $("#lender-container").hide();
}


function showTitleBusinessList() {
    $("#business-container").show();
    hideFileListGrid();
    hideeditwire();
    hidelender();
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











