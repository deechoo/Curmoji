
chrome.runtime.onInstalled.addListener(function (details) {
    localStorage.setItem('status', 'yes');
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (localStorage.getItem('status') == 'yes') {
            
            
            chrome.tabs.insertCSS(tabId, {
                file: "emoji.css"
            });
        } 
        
        if (localStorage.getItem('status') == 'no') {
            chrome.tabs.insertCSS(tabId, {
                file: "normal.css"
            });
        }
    }
});

chrome.browserAction.onClicked.addListener(function (tab, tabId) {
    if (localStorage.getItem('status') == 'yes') {
        chrome.tabs.insertCSS(tabId, {
            file: "normal.css"
        });
        chrome.browserAction.setIcon({
            path: "sad.png"
        });
        localStorage.setItem('status', 'no');
        return;
    }
    if (localStorage.getItem('status') == 'no') {
        chrome.tabs.insertCSS(tabId, {
            file: "emoji.css"
        });
        chrome.browserAction.setIcon({
            path: "emoji.png"
        });
        localStorage.setItem('status', 'yes');
        return;
    }

});

//chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//if (changeInfo.status == 'complete') {
//if (localStorage.getItem('status') == 'yes') {
//            enableBrowserAction();
// }       
//        
//function disableBrowserAction() {
//    chrome.browserAction.setIcon({
//        path: "sad.png"
//    });
//    chrome.tabs.insertCSS(tabId, {code: "body{background:red !important}"});
//    console.log('here is disabled');
//    localStorage.setItem('status', 'no');
//    return;
//}
//
//function enableBrowserAction() {
//    chrome.browserAction.setIcon({
//        path: "emoji.png"
//    });
//    chrome.tabs.insertCSS(tabId, {code: "body{background:green !important}"});       
//    console.log('here is enabled');
//    localStorage.setItem('status', 'yes');
//    return;
//}
//
//chrome.browserAction.onClicked.addListener(function () {
//    if (localStorage.getItem('status') == null) {
//        console.log(0);
//        disableBrowserAction();
//        return;
//    }
//
//    if (localStorage.getItem('status') == 'yes') {
//        console.log(1);
//        disableBrowserAction();
//        return;
//    }
//    if (localStorage.getItem('status') == 'no') {
//        console.log(2);
//        enableBrowserAction();
//        return;
//    }
//
//});
//    }
//});