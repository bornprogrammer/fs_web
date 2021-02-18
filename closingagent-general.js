var cloaingagentID = "";
(function () {
    renderClosingAgentFormView();

    ffAAppletClient.on("onclosingAgentAppletClicked", (data) => {
        eventData = data;
        console.log(eventData);
        isWireAppletClicked = true;
        initReadOnlyCloseAgentView(eventData);
    });


    function initReadOnlyCloseAgentView(data) {
        setTitle("Closing Agent");
        $("#transaction-id").html("Closing Agent Id : " + data.field_values.closing_agent_field77.value);

        showReadOnlyClosingAgentListGrid();
        cloaingagentID = data.field_values.closing_agent_field77.value;
    }

    // showReadOnlyClosingAgentListGrid();

    function showReadOnlyClosingAgentListGrid() {
        renderReadOnlyClosingAgentFormView();

        hideFileListGrid();
        hideeditwire();
        hidelender();
        hideTitleBusinessList();
    }

})();

function renderReadOnlyClosingAgentFormView() {
    $("#closingagent-form").show();
    $("#createClosingAgentFormBtn").hide();
    $("#closingagent-table").hide();
    $(".form-field-span").hide();
}











