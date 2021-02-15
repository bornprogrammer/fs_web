(function () {
    hidelender();
    ffAAppletClient.on("onLenderAppletClicked", (data) => {
        eventData = data;
        console.log(eventData);
        initLenderView();
    });

    initLenderView();

    function initLenderView(data) {
        setTitle("Lender Info");
        showlender();
        $(".search-button").click(searchLenderName);
    }
    /*   initLenderView();  */


    function getLenderData() {
        return [
            {
                name: "	JPMorgan Chase & Co.",
                address: "14800 Frye Rd, Fort Worth",
                address2: "Secondary Address for JPMorgan Chase & Co",
                city: "Plano ",
                state: "TX",
                zip: 75024
            },
            {
                name: "Bank of America Corp.",
                address: "100 North Tryon Street  Charlotte",
                address2: "Secondary Address for Bank of America Corp",
                city: "Charlotte",
                state: "FL",
                zip: 33927
            },
            {
                name: "	Wells Fargo & Co.",
                address: "420 Montgomery St.",
                address2: "Secondary Address for DuckDuckGo",
                city: "San Francisco",
                state: "CA",
                zip: 94163
            },
            {
                name: "Citigroup Inc.",
                address: "399 Park Ave.",
                address2: "Secondary Address for Citigroup Inc.",
                city: "New York",
                state: "NY",
                zip: 10022
            },
            {
                name: "Truist Bank",
                address: "214 N Tryon St",
                address2: "Secondary Address for Truist Bank",
                city: "Charlotte",
                state: "North Carolina",
                zip: 28202
            },
            {
                name: "PNC Financial Services Group Inc.",
                address: "300 Fifth Avenue Pittsburgh",
                address2: "Secondary Address for PNC Financial Services Group Inc",
                city: "Pittsburgh",
                state: "Pennsylvania",
                zip: 15222
            },
            {
                name: "Capital One Financial Corp.",
                address: "1680 Capital One Drive",
                address2: "Secondary Address for Capital One Financial Corp",
                city: "Mclean",
                state: "Virginia",
                zip: 22102
            },
            {
                name: "Bank of New York Mellon Corp.",
                address: "One Wall Street",
                address2: "Secondary Address for Bank of New York Mellon Corp.",
                city: "New York",
                state: "NY",
                zip: 10286
            },
            {
                name: "Goldman Sachs Group Inc.",
                address: "200 West Street 29th Floor",
                address2: "Secondary Address for Goldman Sachs Group Inc",
                city: "New York",
                state: "NY ",
                zip: 10282
            },
            {
                name: "	State Street Corp.",
                address: "1700 Seaport Boulevard Suite 240",
                address2: "Secondary Address for State Street Corp",
                city: "Boston",
                state: "Massachusetts",
                zip: 02101
            },
            {
                name: "HSBC",
                address: "2145 Ralph Ave",
                address2: "Secondary Address for HSBC",
                city: "Brooklyn ",
                state: "NY",
                zip: 11234
            }
        ]
    }

    function buildlenderGridList(data) {
        let htmlStr = "<tr><th class='txt_col' >Lender Name</th><th class='txt_col'>Lender Address</th><th class='txt_col'>Update</th></tr>";
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
        $("#lenders").html(htmlStr);
    }
    function searchLenderName() {
        $(".lender-list").show();
        // $(".business-details").hide();
        let lenderName = $("#lender").val();
        let lenderses = getLenderData();
        searchedData = lenderses.filter((lenderses) => {
            return lenderses.name.toLowerCase().indexOf(lenderName) >= 0;
        });

        buildlenderGridList(searchedData);

    }

})();