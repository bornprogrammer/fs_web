function wiretextboxdata(){
    let datas = {
        "BankName": "Sandy Spring Bank",
        "AccountNumber": "1040",
        "RoutingNumber": "05500",
        "Accountname": "Lakeside Title Company Escrow Account"
    }
 
  return datas;
}
function bindwiredatas(data){
   $('#bankname').val(data.BankName);
   $('#acc_no').val(data.AccountNumber);
   $('#routing_no').val(data.RoutingNumber);
   $('#acc_name').val(data.Accountname);
  }