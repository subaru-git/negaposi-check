// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

chrome.contextMenus.create({
  "id": "negaposi-check",
  "title" : "ネガポジチェック",
  "type"  : "normal",
  "contexts" : ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "negaposi-check") {
      console.log(info.selectionText);
  }
});

console.log(`'Allo 'Allo! Event Page`)
