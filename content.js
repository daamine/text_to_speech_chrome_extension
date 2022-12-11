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

chrome.runtime.onMessage.addListener(function(request)  {
    if (request.action === 'start') {
        console.log("start Message received ! " + request.language);
        chrome.runtime.sendMessage({ data: window.getSelection().toString().replace(/[\r\n]/gm, ' ') , action: "start", language: request.language}, function (response) {
            console.log(response);
        });
    } else if (request.action === 'stop') {
        console.log("Stop Message received !");
        chrome.runtime.sendMessage({action: "stop"}, function (response) {
            console.log(response);
        });
    }
    //sendResponse();
});
