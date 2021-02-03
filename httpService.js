function callPost(url, formData, headers, successCallback, errorCallback) {
    headers = headers || {};
    $.post({
        url,
        type: "POST",
        // contentType: "application/json",
        // processData: false,
        headers: headers,
        data: formData,
        // cors: true,
        // dataType: "json"
    }).done(function (data) {
        successCallback(data);
    }).fail(function (error) {
        errorCallback(error);
    });
}

function uploadFile(url, formData, headers, successCallback, errorCallback) {
    headers = headers || {};
    $.post({
        url,
        type: "POST",
        mimeType: 'multipart/form-data',
        contentType: false,
        processData: false,
        headers: headers,
        data: formData,
        // cors: true,
        dataType: "json"
    }).done(function (data) {
        successCallback(data);
    }).fail(function (error) {
        errorCallback(error);
    });
}

function callGet(url, queryStr, headers, successCallback, errorCallback) {
    headers = headers || {};
    $.post({
        url,
        type: "GET",
        headers: headers,
        data: queryStr,
        dataType: "json"
    }).done(function (data) {
        successCallback(data);
    }).fail(function (error) {
        errorCallback(error);
    });
}

function callGraphQL(url, graphQLQuery, variables, headers, successCallback, errorCallback) {
    let allHeaders = { Authorization: "Bearer T2NV5s6mqeSTV9eazTpxn8anePl5MRly7O4fAb85tkaLjSX2CIASdhhK3e0zfUW3vt7OCYCoJcgwcXLnrXuBVHZrHEsiIExaBA4zMjgxzR1K4zrLsj8405oIxL5p4zgrb5OGB6hVpbjD0LOytUeKVSEdtIlIkimeDIlDcOoKW05PQqD9IGxnM2hv3oSNEjTXV8hYYdt7a2xjTKr8cK1wsAJlDUSyVDwVV5eY7sbzgDhYOqL9wxFRlaCmpeW2Gszl" };

    headers = headers ? Object.assign(headers, allHeaders) : allHeaders;

    let data = JSON.stringify({ query: graphQLQuery, variables: variables });

    $.post({
        url: url,
        type: "POST",
        contentType: 'application/json',
        data,
    }).done(function (data) {
        successCallback(data);
    }).fail(function (error) {
        errorCallback(error);
    });
}