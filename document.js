
(function () {

    var isWireAppletClicked = false;

    $("#test_id").click(function () {
        initFileList();
    });

    hideFileListGrid();

    let documentValidationStatus = { "First Review Approved": "5bf00f35-12c1-48aa-94b7-0d1904a1ef4e", "1st Review In Process": "55c1e163-ae87-4e8c-9585-bdb33462b451", "1st Review Escalated": "47d45485-e9aa-45b5-b6c7-dc8612bdb9b9", "1st Review Complete": "6fe43019-e538-437f-9af1-ac90460d0a68", "2nd Review Started": "954da06c-6d04-471d-bd34-59100ef12044", "2nd Review In Process": "09fb276d-ccea-4d08-905c-3a6d17a756af", "2nd Review Escalated": "9d551fbd-14cb-46ba-a6e3-e4bc090fc4d7", "2nd Review Complete": "e0de6b95-58ce-4cb8-9bdf-051c136e67dc" };

    ffAAppletClient.on("onDocumentAppletClicked", (data) => {
        eventData = data;
        initFileList();
    });

    function initFileList() {
        appletType = "document";
        setTitle("Document");
        isWireAppletClicked = false;
        showFileListGrid();
        let data = getFundingShieldFiles();
        bindData(data);
        registerValidate();
        bindDropdown(data);
        $("#transaction-id").html("Transaction Id is " + eventData.field_values.order_val_field134.value);
    }

    function registerValidate() {
        $(".dropdown2-content a").click(function () {
            validateStatus.call(this);
        })
    }

    ffAAppletClient.on("onWireAppletClicked", (data) => {
        eventData = data;
        isWireAppletClicked = true;
        setTitle("Wire");
        showFileListGrid();
        let data1 = getFundingShieldFiles();
        bindData(data1);
        bindDropdown(data1);
        $("#transaction-id").html("Transaction Id is " + data.field_values.order_val_field134.value);
    });

    /*     function bindDropdown(data) {
         let htmlStr = " <div class='custom-select-wrapper'><select style='height:60px;' id='file-type-list'>";
         data.forEach(item => {
             htmlStr += `<option class="custom-option" value="${item.type}" >${item.fileType}</option>`;
         });
         htmlStr += "</select> </div>";
         $(".file-list").html(htmlStr); 
     } */


    function bindDropdown(data) {
        let htmlStr = '<div class="dropdown1"><a id="kishankumar25" class="dropbtn1">Select Your File Type</a><div class="tomsAccLeftPaneArrow"></div><div class="dropdown1-content">';

        data.forEach(item => {
            htmlStr += `<a href="javascript:void(0)"  id="${item.type}" attr-data="${item.fileType}" >${item.fileType}</a>`;
        });
        htmlStr += "</div></div>";
        $(".file-list").html(htmlStr);

        $('.dropdown1-content a').click(function () {
            var elmId = $(this).attr('attr-data');
            /*   $('#txtInput').val(elmId); */
            $('#kishankumar25').html(elmId);
            $('#kishankumar25').val($(this).attr('id'));

            $(".tomsAccLeftPaneArrow").css({

                'margin-left': ($("#kishankumar25").width() + 30)
            });


        })

    }






    // getFundingShieldFiles();

    function getFundingShieldFiles() {
        // $.get("https://jsonplaceholder.typicode.com/photos", (data, status) => {
        //     bindData(data);
        // })
        let data = [{
            fileType: "E & O Insurance",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Screenshot 2020-09-13 at 4.40.46 PM.png",
            type: "pdfClosingProtectionLetter",
        },
        {
            fileType: "Fidelity Bond/Crimes Policy",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Screenshot 2020-09-16 at 5.15.42 PM.png",
            type: "pdfWireInstructions",
        },
        {
            fileType: "CPL",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Screenshot 2020-09-21 at 7.26.26 PM.png",
            type: "pdfCrimesPolicy",
        },
        {
            fileType: "State Licensing",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Screenshot 2020-09-24 at 11.42.39 PM.png",
            type: "pdfFidelityBond",
        }
            ,
        {
            fileType: "CPL Validation",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Simulator Screen Shot - iPhone SE (2nd generation) - 2020-06-29 at 21.21.25.png",
            type: "pdfStateLicense",
        }
            ,
        {
            fileType: "Wire",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Simulator Screen Shot - iPhone SE (2nd generation) - 2020-06-30 at 21.25.58.png",
            type: "pdfBankReferenceLetter",
        }
        ];
        return data;
    }
    // var x = '';

    function bindData(data) {
        let isWireAppletTrue = isWireApplet();
        let html = `<tr>
            <th>File Type</th>
            <th>Date</th>`;
        html += isWireAppletTrue ? '</tr>' : '<th>Status</th></tr>';
        html += isWireAppletTrue ? bindWireData(data) : bindAllFileData(data);
        $("#customers").html(html);
    }

    function isWireApplet() {
        return isWireAppletClicked;
        // return eventData && Object.values(eventData).length > 0 && eventData.seq_id.indexOf("WIR") >= 0;
    }

    function bindAllFileData(data) {
        let htmlStr = "";
        let array = ['txtE&OInsurance', 'txtFidelityBond', 'txtCPL', 'txtStateLicensing', 'txtCPLValidation', 'txtWire'];
        if (data && data instanceof Array && data.length > 0) {
            for (let index = 0; index < 6; index++) {
                htmlStr += buildRowHTML(data[index]);
            }
        }
        return htmlStr;
    }

    function bindWireData(data) {
        return buildRowHTML(data[5]);
    }

    function buildRowHTML(dataItem) {
        let fileNameArray = dataItem.url.split("/");
        let fileName = fileNameArray[fileNameArray.length - 1];
        let rowHtml = `<tr>
        <td><a title='${fileName}' href='${dataItem.url}' target=_blank >${dataItem.fileType}</a></td>
        <td>${getReadableDateFormat()}</td>`
        rowHtml += isWireApplet() ? "" : `<td>${buildDocumentStatusDropdown()}</td>`;
        rowHtml += `</tr>`;
        return rowHtml;
    }

    /*     function buildDocumentStatusDropdown() {
            let documentStatusDropdown = "<select class='document_status'>";
    
            for (const key in documentValidationStatus) {
                documentStatusDropdown += `<option value="${documentValidationStatus[key]}">${key}</option>`;
            }
            documentStatusDropdown += "</select>";
            return documentStatusDropdown;
        }  */
    function buildDocumentStatusDropdown() {
        let documentStatusDropdown = '<div class="dropdown2"><a class="dropbtn2">Status</a><div class="tomsAccLeftPane"></div><div class="dropdown2-content">';
        for (const key in documentValidationStatus) {
            documentStatusDropdown += `<a href="javascript:void(0)" data-value="${key}" data-id="${documentValidationStatus[key]}">${key}</a>`;
        }
        documentStatusDropdown += `</div></div><span style="margin-left:10px"></span>`;
        return documentStatusDropdown;
    }


    function getReadableDateFormat() {
        let dateObject = new Date(2020, generateRandomNumberBetweenRange(0, 11), generateRandomNumberBetweenRange(1, 30));
        return dateObject.getDate() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getFullYear();
    }

    function generateRandomNumberBetweenRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }



})();