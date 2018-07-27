// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

chrome.contextMenus.create({
  "title" : "ネガポジチェック",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : (info, tab) => {
    console.log(info.selectionText)
  }
});

console.log(`'Allo 'Allo! Event Page`)
