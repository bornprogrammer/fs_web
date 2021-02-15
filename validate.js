
// (function () {

// let params = new URLSearchParams(window.location.search);

// var transactionId = params.get("transId");

// var freeagentId = params.get("freeagentId");
// http://localhost:5500?transId=204115&freeagentId=01dfac76-e732-4352-bdb8-22390e7c9218&reviewStatusOrder=1

// var reviewStatusOrder = params.get("reviewStatusOrder");

// $(".dropdown2-content a").click(function () {

// });

// $('.dropdown2-content a').click(function () {
// var key = $(this).data('id');
// var value = $(this).data('value');
// console.log($(this).closest(".dropdown2").append("<span>sss</span>"));
// $(this).closest(".dropdown2").next("span").html(value);
// })

function updateEntity(formData) {
/*     callPost(updateEntityLambdaURL, formData, null, afterUpdateEntity, afterUpdateEntity); */
    formData.type="update_file_status";
    callGet(fundingshieldurl, formData, null, afterUpdateEntity, afterUpdateEntity);
    // let variables = getUpdateEntityRecordVariables(formData.freeagentId, formData.orderFieldName, formData.orderFieldVal);
    // let updateEntityRecordQuery = getUpdateEntityRecordQuery();
    // callGraphQL(updateEntityURLWithHerokuCors, updateEntityRecordQuery, variables, null, (data) => {
    //     console.log("success data", data);
    // }, (errorData) => {
    //     console.log("error data", errorData);
    // });
}

function afterUpdateEntity() {
    showSuccessMessage();
}

function getUpdateEntityRecordQuery() {
    const query = `mutation updateEntity($entity: String!, $id: String!, $field_values: JSON!) {
            updateEntity(entity: $entity, id: $id,field_values: $field_values) {
              entity_value {
                id
                seq_id
                field_values
              }
            }
          }
          `
    return query;
}

function getUpdateEntityRecordVariables(freeagentId, orderFieldName, orderFieldVal) {
    const variables = {
        "entity": "order_val",
        "id": freeagentId,
        "field_values": {
        }
    };
    variables['field_values'][orderFieldName] = orderFieldVal;
    return variables;
}

function getOrderFieldName(fileType) {
    let orderFieldName = "";
    switch (fileType) {
        case "E &amp; O Insurance":
            orderFieldName = "order_val_field161";
            break;
        case "Fidelity Bond/Crimes Policy":
            orderFieldName = "order_val_field162";
            break;
            case "CPL Validation":
            orderFieldName = "order_val_field163";
            break;
       /*  case "CPL":
            orderFieldName = "order_val_field137";
            break;
        case "State Licensing":
            orderFieldName = "order_val_field151";
            break;
       
        case "Wire":
            orderFieldName = "order_val_field152";
            break; */
        default:
            break;
    }
    return orderFieldName;
}

// })();

function validateStatus() {
    // console.log("dropdown changed", $("option:selected", this).val());
    let orderFieldVal = $(this).data('id');
    let text = $(this).data('value');


    // var value = ;
    /*   $(this).closest(".dropdown2").next("span").html($(this).data('value')); */
    $(this).closest(".dropdown2").children("a.dropbtn2").html(text);
    let value = $(this).closest("tr").children().eq(0).find('a').html();
    let orderFieldName = getOrderFieldName(value);

    $(this).closest(".dropdown2").children(".tomsAccLeftPane").css({
        'margin-left': ($(this).closest(".dropdown2").children("a.dropbtn2").width() + 14)
    });
   /*   eventData.id = "9c257723-2c13-4ccb-a0fd-e7e385d6ea9b"; */
    let data = {
        "freeAgentId": eventData.id,
        "orderFieldName": orderFieldName,
        "orderFieldVal": orderFieldVal
    }
    updateEntity(data);
    /* initFileList(orderFieldName); */
}