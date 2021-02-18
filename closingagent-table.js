function initClosingAgentTableView() {
    setTitle("Closing Agent");
    $("#transaction-id").html("");

    $("#tblclosingagent").html("");
    $("#tblsearch-text").val("");
    $('#tblselect-state').val("0");

    renderClosingAgentTableView();
    $("#search-button").click(searchClosingAgent);
}

function renderClosingAgentTableView() {
    $("#closingagent-form").hide();
    $("#readonlyClosingAgentFormBtn").hide();
    $("#createClosingAgentFormBtn").hide();
    $(".form-field-span").hide();
    $("#closingagent-table").show();
    $("#closingagent-table-btn").hide();
}

function searchClosingAgent() {
    $(".closingagent-list").show();
    let companyName = $("#tblsearch-text").val();
    let stateName = $("#tblselect-state option:selected").text();
    let closingagents = getClosingAgentData();
    searchedData = closingagents.filter((closingagent) => {
        return closingagent.name.toLowerCase().indexOf(companyName.toLowerCase()) >= 0 && closingagent.state.toLowerCase().indexOf(stateName.toLowerCase()) >= 0;
    });
    buildClosingAgentGridList(searchedData);

}

function buildClosingAgentGridList(data) {
    let htmlStr = "<tr><th class='txt_col'>Select</th><th class='txt_col' >Company Name</th><th class='txt_col' >Contact Email</th><th class='txt_col'>Phone</th><th class='txt_col'>Address</th><th class='txt_col'>Address 2</th><th class='txt_col'>City</th><th class='txt_col'>State</th><th class='txt_col'>Zip</th><th class='txt_col'>Website</th></tr>";
    if (data && data instanceof Array && data.length > 0) {
        let count = 1;
        data.forEach(item => {
            htmlStr += "<tr><td><input type='radio' id=''></td>";
            htmlStr += `<td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.address}</td>
            <td>${item.address2}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.zip}</td>
            <td>${item.website}</td></tr>`;
            count++;
        });
        $("#closingagent-table-btn").show();
    } else {
        htmlStr += "<tr><td style='text-align:center;' colspan=10>No Record Found</td></tr>";
    }
    $("#tblclosingagent").html(htmlStr);
}


function bindReadOnlyClosingAgentForm() {

    $('#tblclosingagent >  tr').each(function (index, item) {
        if ($(item).find('input[type=radio]:checked').val() == "on") {
            $("#form_CompanyName").val($($(item).find('td')[1]).text());
            $("#form_ContactEmail").val($($(item).find('td')[2]).text());
            $("#form_Phone").val($($(item).find('td')[3]).text());
            $("#form_Address").val($($(item).find('td')[4]).text());
            $("#form_Address2").val($($(item).find('td')[5]).text());
            $("#form_City").val($($(item).find('td')[6]).text());
            $("#form_State").val($($(item).find('td')[7]).text());
            $("#form_Zip").val($($(item).find('td')[8]).text());
            $("#form_Website").val($($(item).find('td')[9]).text());
        }
        cancelBtnToShowReadonlyClosingAgentForm();

    });
}

function cancelBtnToShowReadonlyClosingAgentForm() {
    $("#closingagent-form").show();
    $("#readonlyClosingAgentFormBtn").show();
    $("#closingagent-table").hide();
    $("#createClosingAgentFormBtn").hide();
    $(".form-field-span").hide();

    $("#transaction-id").html("Closing Agent Id : " + cloaingagentID);
}


function getClosingAgentData() {
    return [
        {
            name: "JPMorgan Chase & Co.",
            email: "nekoha4336@wedbo.net",
            phone: "202-555-0112",
            address: "14800 Frye Rd, Fort Worth",
            address2: "Secondary Address for JPMorgan Chase & Co",
            city: "Plano ",
            state: "Alaska",
            zip: 75024,
            website: "https://www.saucedemo.com"
        },
        {
            name: "Bank of America Corp.",
            email: "ahmad@comcast.net",
            phone: "202-555-0112",
            address: "100 North Tryon Street  Charlotte",
            address2: "Secondary Address for Bank of America Corp",
            city: "Charlotte",
            state: "Alaska",
            zip: 33927,
            website: "https://www.saucedemo.com"
        },
        {
            name: "	Wells Fargo & group.",
            email: "skythe@outlook.com",
            phone: "202-555-0112",
            address: "420 Montgomery St.",
            address2: "Secondary Address for DuckDuckGo",
            city: "San Francisco",
            state: "Alaska",
            zip: 94163,
            website: "https://www.saucedemo.com"
        },
        {
            name: "Citigroup Inc.",
            email: "weidai@optonline.net",
            phone: "202-555-0112",
            address: "399 Park Ave.",
            address2: "Secondary Address for Citigroup Inc.",
            city: "New York",
            state: "New York",
            zip: 10022,
            website: "https://www.saucedemo.com"
        },
        {
            name: "Truist Bank",
            email: "offthelip@gmail.com",
            phone: "202-555-0112",
            address: "214 N Tryon St",
            address2: "Secondary Address for Truist Bank",
            city: "Charlotte",
            state: "Alaska",
            zip: 28202,
            website: "https://www.saucedemo.com"
        },
        {
            name: "PNC Financial Services Group Inc.",
            email: "mccurley@comcast.net",
            phone: "202-555-0112",
            address: "300 Fifth Avenue Pittsburgh",
            address2: "Secondary Address for PNC Financial Services Group Inc",
            city: "Pittsburgh",
            state: "Alaska",
            zip: 15222,
            website: "https://www.saucedemo.com"
        },
        {
            name: "Capital One Financial Corp.",
            email: "farber@yahoo.com",
            phone: "202-555-0112",
            address: "1680 Capital One Drive",
            address2: "Secondary Address for Capital One Financial Corp",
            city: "Mclean",
            state: "Virginia",
            zip: 22102,
            website: "https://www.saucedemo.com"
        },
        {
            name: "Bank of New York Mellon Corp.",
            email: "syncnine@gmail.com",
            phone: "202-555-0112",
            address: "One Wall Street",
            address2: "Secondary Address for Bank of New York Mellon Corp.",
            city: "New York",
            state: "New York",
            zip: 10286,
            website: "https://www.saucedemo.com"
        },
        {
            name: "Goldman Sachs Group Inc.",
            email: "ovprit@live.com",
            phone: "202-555-0112",
            address: "200 West Street 29th Floor",
            address2: "Secondary Address for Goldman Sachs Group Inc",
            city: "New York",
            state: "Alabama",
            zip: 10282,
            website: "https://www.saucedemo.com"
        },
        {
            name: "State Street Corp.",
            email: "jonadab@live.com",
            phone: "202-555-0112",
            address: "1700 Seaport Boulevard Suite 240",
            address2: "Secondary Address for State Street Corp",
            city: "Boston",
            state: "Alabama",
            zip: 02101,
            website: "https://www.saucedemo.com"
        },
        {
            name: "HSBC Corp.",
            email: "catalog@comcast.net",
            phone: "202-555-0112",
            address: "2145 Ralph Ave",
            address2: "Secondary Address for HSBC",
            city: "Brooklyn ",
            state: "Alabama",
            zip: 11234,
            website: "https://www.saucedemo.com"
        }
    ]
}

