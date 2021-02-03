

function afterLoginSuccess() {
    let url = window.location.hash;
    // let queryStrs = url.indexOf("#");
    console.log("query", url.substring(1));
}


afterLoginSuccess();