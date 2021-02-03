(function () {

    const msalConfig = getMSLConfig();

    const msalInstance = new Msal.UserAgentApplication(msalConfig);

    msalInstance.handleRedirectCallback((error, response) => {
        console.log("msalInstance error", error);
    });

    var loginRequest = {
        scopes: ["Mail.Read"], // optional Array<string>
        // response_type:"token" 
    };

    function openedLoginPopup() {
        msalInstance.loginPopup(loginRequest)
            .then(response => {
                console.log("signed successfully");
                localStorage.setItem("user-val", JSON.stringify(response));
            })
            .catch(err => {
                console.log("login failed", err);
            });
    }

    function getMSLConfig() {
        const msalConfig = {
            auth: {
                clientId: clientId,
                authority: `${authorityUrl}${tenantId}`,
                // knownAuthorities: [],
                redirectUri: "http://localhost:5500/auth-resp.html",
                // postLogoutRedirectUri: "http://localhost:5500/logout",
                // navigateToLoginRequestUrl: true
            },
            cache: {
                cacheLocation: "sessionStorage",
                storeAuthStateInCookie: false
            },
            system: {
                loggerOptions: {
                    loggerCallback: (level, message, containsPii) => {
                        if (containsPii) {
                            return;
                        }
                        switch (level) {
                            case LogLevel.Error:
                                console.error(message);
                                return;
                            case LogLevel.Info:
                                console.info(message);
                                return;
                            case LogLevel.Verbose:
                                console.debug(message);
                                return;
                            case LogLevel.Warning:
                                console.warn(message);
                                return;
                        }
                    },
                    piiLoggingEnabled: false
                },
                windowHashTimeout: 60000,
                iframeHashTimeout: 6000,
                loadFrameTimeout: 0
            }
        };
        return msalConfig;
    }


    // openedLoginPopup();

})();