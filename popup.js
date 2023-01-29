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

var languageList = document.getElementById('languageSelect');


for (const key of Object.keys(LANGUAGE_REGION_MAP)) {
    var option = document.createElement("option");
    option.value = key;
    option.text = key;
    languageList.add(option);
}

// Check if a language is stored in localStorage
if (localStorage.getItem('selectedLanguage')) {
    languageList.value = localStorage.getItem('selectedLanguage');
}

languageList.addEventListener('change', function () {
    var selectedLanguage = languageList.value;
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', selectedLanguage);
});

document.getElementById('startButton').addEventListener('click', function () {
    var selectedLanguage = document.getElementById('languageSelect').value;
    console.log(selectedLanguage)
    chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'start', language: selectedLanguage });
    });
});

document.getElementById('stopButton').addEventListener('click', function () {
    var selectedLanguage = document.getElementById('languageSelect').value;
    console.log(selectedLanguage)
    chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'stop', language: selectedLanguage });
    });
});