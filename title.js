(function () { 

    let searchedData = null; 

    hideTitleBusinessList();

    ffAAppletClient.on("onTitleClicked", (data) => {
        eventData = data;
        initTitleView();
    });

   //initTitleView();

    function initTitleView(data) {
        setTitle("Title");
        showTitleBusinessList();
        $(".search-button").click(searchBusinessName);
        $("#transaction-id").html("Transaction Id is " + data.field_values.order_val_field134.value);
    }

    // $(".back-button").click(function () {
    //     $(".business-list").show();
    //     $(".business-details").hide();
    // })



    // $("#business").click(function (ev) {
    //     $(".business-list").hide();
    //     $(".business-details").show();
    //     let rowIndex = ev.target.parentElement.rowIndex - 1;
    //     let businessDetails = searchedData[rowIndex];
    //     $(".business-details div.name").html(`Business Name :  ${businessDetails.name}`);
    //     $(".business-details div.address").html(`Business Address :  ${businessDetails.address}`);
    // });



    function getBusinessData() {
        return [
            {
                name: "Microsoft Corporation",
                address: "Redmond, Washington, United States",
                address2: "Secondary Address for Microsoft",
                city: "Washington",
                state: "Washington",
                zip: 23101
            },
            {
                name: "Google",
                address: "Mountain View, California, United States",
                address2: "Secondary Address for Google",
                city: "Mountain View",
                state: "California",
                zip: 13405
            },
            {
                name: "DuckDuckGo",
                address: "Paoli, Pennsylvania, United States",
                address2: "Secondary Address for DuckDuckGo",
                city: "Paoli",
                state: "Pennsylvania",
                zip: 53976
            },
            {
                name: "Facebook Inc",
                address: "Menlo Park, California, United States",
                address2: "Secondary Address for Facebook Inc",
                city: "Paoli",
                state: "Pennsylvania",
                zip: 28939
            },
            {
                name: "Twitter Inc",
                address: "San Francisco, California, United States",
                address2: "Secondary Address for Twitter Inc",
                city: "San Francisco",
                state: "California",
                zip: 15634
            },
            {
                name: "Apple",
                address: "Cupertino, California, United States",
                address2: "Secondary Address for Apple",
                city: "Cupertino",
                state: "California",
                zip: 34678
            },
            {
                name: "Twilio",
                address: "San Francisco, California",
                address2: "Secondary Address for Twillio",
                city: "San Francisco",
                state: "California",
                zip: 97653
            },
            {
                name: "Tesla",
                address: "Palo Alto, California, United States",
                address2: "Secondary Address for Tesla",
                city: "Palo Alto",
                state: "California",
                zip: 23456
            },
            {
                name: "Walmart",
                address: "Bentonville, Arkansas, U.S.",
                address2: "Secondary Address for Walmart",
                city: "Bentonville",
                state: "Arkansas",
                zip: 45623
            },
            {
                name: "KFC",
                address: "1441 Gardiner Lane Louisville, Kentucky, U.S. Dallas, Texas, U.S. (Global)",
                address2: "Secondary Address for KFC",
                city: "Louisville",
                state: "Kentucky",
                zip: 23456
            },
            {
                name: "Dominos Pizza",
                address: "Ann Arbor, Michigan, United States",
                address2: "Secondary Address for Dominos",
                city: "Ann Arbor",
                state: "Michigan",
                zip: 23456
            }
        ]
    }

    function buildBusinessGridList(data) {
        let htmlStr = "<tr><th class='txt_col' >Business Name</th><th class='txt_col'>Business Address</th><th class='txt_col'>Update</th></tr>";
        if (data && data instanceof Array && data.length > 0) {
            data.forEach(item => {
                htmlStr += `<tr><td>${item.name}</td>
                <td>
                <span class="address">Address : ${item.address}</span>
                <span class="address">Address 2 : ${item.address2}</span>
                <span class="address">City : ${item.city}</span>
                <span class="address">State : ${item.state}</span>
                <span class="address">Zip : ${item.zip}</span>
                </td>`;
                htmlStr += "<td><button class='update-address'>Update</button></td></tr>";
            });
        } else {
            htmlStr += "<tr><td style='text-align:center;' colspan=3>No Record Found</td></tr>";
        }
        $("#business").html(htmlStr);
    }

    function searchBusinessName() {
        $(".business-list").show();
        // $(".business-details").hide();
        let businessName = $(".search").val();
        let businesses = getBusinessData();
        searchedData = businesses.filter((business) => {
            return business.name.toLowerCase().indexOf(businessName) >= 0;
        });

        buildBusinessGridList(searchedData);

        $(".update-address").click(function (ev) {
            let data = searchedData[ev.target.parentElement.parentElement.rowIndex - 1];
          /*   eventData.id="36c1cd13-2cf2-4f1e-9cf5-ca51b02932e0"; */
           data["freeAgentId"] = eventData.id;
        

            console.log(data);
            updateAddressToFS(data);
        })
    }

    function updateAddressToFS(addressData) {
        addressData.type="update_company_details";

       /*  callPost(updateAddressFSLambdaURL, addressData, null, afterUpdateEntity, afterUpdateEntity); */
       callGet(fundingshieldurl, addressData, null, afterUpdateEntity, afterUpdateEntity);
    }

    function afterUpdateEntity() {
        showSuccessMessage();
    }



})();