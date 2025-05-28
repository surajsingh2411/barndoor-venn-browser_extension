// chrome.action.onClicked.addListener(() => {

//     console.log("Extension icon clicked");
  
//     if (chrome.sidePanel && chrome.sidePanel.open) {
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         if (tabs.length > 0) {
//           console.log("Opening Chrome side panel");
//           chrome.sidePanel.open({ tabId: tabs[0].id });
//         } else {
//           console.warn("No active tab found");
//         }
//       });
//     } else if (typeof browser !== "undefined" && browser.sidebarAction) {
//       console.log("Opening Firefox sidebar");
//       browser.sidebarAction.open();
//     } else {
//       console.log("Opening fallback pinned tab");
//       chrome.tabs.create({
//         url: chrome.runtime.getURL("index.html"),
//         pinned: true
//       });
//     }
//   });
  

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'openApp') {
//       chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
//   }
// });




