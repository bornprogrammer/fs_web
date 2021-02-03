(function () {
    hidelender();
    ffAAppletClient.on("onLenderAppletClicked", (data) => {
        eventData = data;
        console.log(eventData);
        initLenderView();
    });


  function  initLenderView(data){
    setTitle("Lender Info");
     showlender();
     lenderlist();
 }
/*  initLenderView(); */


 function lenderlist(){
  let data=  {
        "name": "Microsoft Corporation",
        "address": "Redmond, Washington, United States",
        "address2": "Secondary Address for Microsoft",
        "city": "Washington",
        "state": "Washington",
        "zip": 23101
    }

    $("#comp_name").html(data.name);
    $("#comp_add1").html(data.address);
    $("#comp_add2").html(data.address2);
    $("#comp_city").html(data.city);
    $("#comp_state").html(data.state);
    $("#comp_zip").html(data.zip);
    $("#comp_nameval").html(data.name);
    $("#comp_addval").html(data.address);
    $("#comp_add2val").html(data.address2);
    $("#comp_cityval").html(data.city);
    $("#comp_stateval").html(data.state);  
    $("#comp_zipcodeval").html(data.zip);
 }


















})();