/* 
* Copyright (c) 2022 Amine Daoud.
* 
* This program is free software: you can redistribute it and/or modify  
* it under the terms of the GNU General Public License as published by  
* the Free Software Foundation, version 2.
* 
* You should have received a copy of the GNU General Public License 
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.text === 'onCLicked') {
        console.log("Message received !");
        chrome.runtime.sendMessage({ data: window.getSelection().toString().replace(/[\r\n]/gm, ' ') }, function (response) {
            console.log(response);
        });
    }
    sendResponse();
});
