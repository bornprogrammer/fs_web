var eventData = {};

var appletType = "";

const ffAAppletClient = new FAAppletClient({
    appletId: faServiceAppletId
});

// updateTest();
// function updateTest() {
//     console.log("updateTest invoked");
//     ffAAppletClient.updateEntity({
//         id: "3993e1e3-95b4-4286-a6f1-2ef7272396e3",
//         entity: "closing_agent",
//         field_values: {
//             closing_agent_field77: "CA29999",
//         }
//     }, (parms) => {
//         console.log("updated", parms);
//     })
// }

function showFileListGrid(isWireAppletClicked) {
    $("#document-container").show();
    if (isWireAppletClicked == true) {
        $("#wire-data").css('margin-top', '-14px');
    }
    hideTitleBusinessList();
    hideeditwire();
    hidelender();

    renderClosingAgentFormView();
}

function hideFileListGrid() {
    $("#document-container").hide();
}

function showeditwire() {
    $("#wire_edit").show();
    hideTitleBusinessList();
    hidelender();

    renderClosingAgentFormView();
}
function hideeditwire() {
    $("#wire_edit").hide();
}

function getFreeAgentId() {
    // return "3993e1e3-95b4-4286-a6f1-2ef7272396e3";
    return eventData.id;
}

function showlender() {
    $("#lender-container").show();
    hideeditwire();
    hideTitleBusinessList();
    hideFileListGrid();

    renderClosingAgentFormView();
}
function hidelender() {
    $("#lender-container").hide();
}

function showTitleBusinessList() {
    $("#business-container").show();
    hideFileListGrid();
    hideeditwire();
    hidelender();

    renderClosingAgentFormView();
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

//Closing Agent
function renderClosingAgentFormView() {
    $("#closingagent-form").hide();
    $("#closingagent-table").hide();
}
