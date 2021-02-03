
(function () {

    var isWireAppletClicked = false;

    /* $("#test_id").click(function () {
      initFileList();
      ffAAppletClient.navigateTo("https://va.botplatform.liveperson.net/#/account/signin");

    });  */

    hideFileListGrid();
    hideeditwire();

    let documentValidationStatus = { "First Review Approved": "5bf00f35-12c1-48aa-94b7-0d1904a1ef4e",
     "First Review Requested": "e720a0d9-3712-4bcb-80b5-cfd20b604ff5",
      "First Review Received": "bb898b9e-056e-4771-8fc7-584abb61295b", 
      "First Review Rejected": "ca037a49-6021-4045-9c31-4c11038ae922", 
      "First Review Rejected - Escalated/Correction Required": "1d44651d-64a0-4fa0-a7da-8388fd503f5f",
       "Second Review Approved": "5500b990-c645-4280-8bc8-1c9d4852616d", 
       "Second Review Requested": "f2903007-eab5-4d03-94b4-f071d4fd3210",
        "Second Review  Received": "56e58bdd-9a50-4f5a-9c1f-769760e6113b",
        "Second Review Rejected": "fc97b586-3c73-4913-88c7-1a2f4498c93a",
        "Second Review Rejected- Escalated/ Correction Required":"3da08a2f-1142-46d2-b80d-ee2f895a6f90"
    
    };
    
    ffAAppletClient.on("onDocumentAppletClicked", (data) => {
        eventData = data;
      /*   console.log(eventData.id); */
    /*     console.log(eventData.seq_id);
        console.log(eventData);  */
       
        initFileList();
    });
 /*  initFileList();    */
  
 

    function initFileList() {
        appletType = "document";
        setTitle("Document");
        isWireAppletClicked = false;
        showFileListGrid();
        let data = getFundingShieldFiles();
        bindData(data);
        registerValidate();
        bindDropdown(data);
        var documentValidationsid={"id":eventData.id} ;  
     /*  var documentValidationsid={"id":"9c257723-2c13-4ccb-a0fd-e7e385d6ea9b"}; */  
       /*  callGet(getfilestatusurl,documentValidationsid,null,  statusdata, afterUpdateEntity) */
       documentValidationsid.type="get_file_status";
       callGet(fundingshieldurl,documentValidationsid,null,  statusdata, afterUpdateEntity)
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
        showFileListGrid(isWireAppletClicked);
        let data1 = getFundingShieldFiles();
        bindData(data1);
        bindDropdown(data1);
        showeditwire()
        let datas= wiretextboxdata();
        bindwiredatas(datas);
        $("#transaction-id").html("Transaction Id is " + data.field_values.order_val_field134.value);
    });
   /*  function wire(){
        isWireAppletClicked = true;
        setTitle("Wire");
        showFileListGrid(isWireAppletClicked);
        let data1 = getFundingShieldFiles();
        bindData(data1);
        bindDropdown(data1);
        showeditwire();
       let datas= wiretextboxdata();
       bindwiredatas(datas);
    }
    wire();  */

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

                'margin-left': ($("#kishankumar25").width() + 25)
            });
           /*  if($("#kishankumar25").width()>= 184){
              
                $('.dropbtn1').css('padding','18px 24px 10px 19px');
            } */

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
            fieldname: "field1"
        },
        {
            fileType: "Fidelity Bond/Crimes Policy",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Screenshot 2020-09-16 at 5.15.42 PM.png",
            type: "pdfWireInstructions",
        },
        {
            fileType: "CPL Validation",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Simulator Screen Shot - iPhone SE (2nd generation) - 2020-06-29 at 21.21.25.png",
            type: "pdfStateLicense",
        }
            //,
       /*  {
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
            fileType: "Wire",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Simulator Screen Shot - iPhone SE (2nd generation) - 2020-06-30 at 21.25.58.png",
            type: "pdfBankReferenceLetter",
        } */
        ];
        return data;
    }
    // var x = '';

    function bindData(data) {
        let isWireAppletTrue = isWireApplet();
        let html = `<tr>
            <th class="txt_col">File Type</th>
            <th class="txt_col">Date</th>`;
        html += isWireAppletTrue ? '</tr>' : '<th class="txt_col">Status</th></tr>';
      html += isWireAppletTrue ? bindWireData(data) : bindAllFileData(data); 
    
        $("#customers").html(html);
    }

    function isWireApplet() {
        return isWireAppletClicked;
        // return eventData && Object.values(eventData).length > 0 && eventData.seq_id.indexOf("WIR") >= 0;
    }

    function bindAllFileData(data) {
        let htmlStr = "";
        let indexs=160;
        if (data && data instanceof Array && data.length > 0) {
            for (let index = 0; index < 3; index++) {
                indexs++
                htmlStr += buildRowHTML(data[index],indexs);
            }
        }
        return htmlStr;
    }

    function bindWireData(data) {
        let wireobject=  {
            fileType: "Wire",
            url: "https://fshieldstorage.blob.core.windows.net/fss/Simulator Screen Shot - iPhone SE (2nd generation) - 2020-06-30 at 21.25.58.png",
            type: "pdfBankReferenceLetter",
        } 
        return buildRowHTML(wireobject,0);
    }

    function buildRowHTML(dataItem,indexs) {
        let fileNameArray = dataItem.url.split("/");
        let fileName = fileNameArray[fileNameArray.length - 1];
        let rowHtml = `<tr id='order_val_field${indexs}'>
        <td><a class="url_col" title='${fileName}' href='${dataItem.url}' target=_blank >${dataItem.fileType}</a></td>
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
 
    function statusdata(data){
        if(data.length>0){
       
        var data_obj=[];
         data_obj=data;
           
            var sample = []
            $.each(data_obj, function(filter_idx, obj){
               $.each(documentValidationStatus, function(k, v) {
                  if(v == obj.statusid)
                   sample.push(k) 
              });             
            });
         
            function dropdownManager(data_obj){
               for(i = 0; i< data_obj.length; i++){
                   var str = 'tr#' + data_obj[i].filetypekey + ' .dropdown2 a.dropbtn2'
                   $(str).html(sample[i])
                   $(str).closest(".dropdown2").children(".tomsAccLeftPane").css({
                       'margin-left': ($(str).width() + 14)
                   })
       
               }
           }
          dropdownManager(data_obj);     
        }
          
           

/* 
     var data_obj=[
     {
       filetypekey:"order_key0",
       statusid:"9d2d40cf-298a-4240-a16a-d22b8240c39e"
     },
     {
        filetypekey:"order_key1",
        statusid:"55c1e163-ae87-4e8c-9585-bdb33462b451"
     },

     {
        filetypekey:"order_key3",
        statusid:"55c1e163-ae87-4e8c-9585-bdb33462b451"
     },
     {
        filetypekey:"order_key5",
        statusid:"55c1e163-ae87-4e8c-9585-bdb33462b451"
     },
     ]
     var sample = []
     $.each(data_obj, function(filter_idx, obj){
        $.each(documentValidationStatus, function(k, v) {
           if(v == obj.statusid)
            sample.push(k) 
       });             
     });
  
     function dropdownManager(data_obj){
        for(i = 0; i<= data_obj.length; i++){
            var str = 'tr#' + data_obj[i].filetypekey + ' .dropdown2 a.dropbtn2'
            $(str).html(sample[i])
            $(str).closest(".dropdown2").children(".tomsAccLeftPane").css({
                'margin-left': ($(str).width() + 14)
            })

        }
    }
   dropdownManager(data_obj);   */  
     
    } 

     function afterUpdateEntity(data) {
       
   }

})();