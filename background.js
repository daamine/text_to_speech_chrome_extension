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

import { LANGUAGE_REGION_MAP } from './constants.js';

console.log("background Script file")

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Got message from content Script: ", request);
  if (request['action'] === "start") {
    console.log(request['language'])
    console.log(LANGUAGE_REGION_MAP[request['language']])
    let sentences = request.data.split('.');
    sentences.forEach((sentence) => {
      if (sentence.trim()) {
        chrome.tts.speak(`${sentence}.`, {
          lang: LANGUAGE_REGION_MAP[request.language],
          gender: 'female',
          enqueue: true
        });
      }
    });
  } else if (request.action === 'stop') {
    chrome.tts.stop();
  }
  sendResponse('OK');
});

chrome.action.onClicked.addListener(function (tabs) {
  console.log("send message")
  chrome.tabs.sendMessage(tabs.id, { text: "onCLicked" });
});