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

console.log("background Script file")

chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
  console.log("Got message from content Script: ", request);
  var sentences = request['data'].split(".");
  for (var i=0;i< sentences.length;i++)
  {
    sentenceWithDot = sentences[i]+ ". ";
    console.log(sentenceWithDot);
    if (sentences[i].trim()){
      chrome.tts.speak(sentenceWithDot, {'lang': 'en-GB', 'gender': 'female', 'enqueue': true});
    } 
  }
  
  sendResponse('OK');
})

chrome.action.onClicked.addListener(function (tabs) {
  console.log("send message")
  chrome.tabs.sendMessage(tabs.id, { text: "onCLicked" });
});