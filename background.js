let lang = 'en';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ lang });
  console.log('the default lang is ' + lang);
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});