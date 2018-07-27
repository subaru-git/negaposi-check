// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

const kuromoji = require("kuromoji");
const analyze = require("negaposi-analyzer-ja");

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

// kuromojiオブジェクト
let kuromojiObj;

// kuromojiオブジェクトの作成
!(() => {
  kuromoji.builder({
    dicPath : 'dict/'
  }).build(function(error, _tokenizer) {
    if (error != null) {
        console.log(error);
    }
    kuromojiObj = _tokenizer;
  })
})();

chrome.contextMenus.create({
  "id": "negaposi-check",
  "title" : "ネガポジチェック",
  "type"  : "normal",
  "contexts" : ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "negaposi-check") {
      const score = analyze(kuromojiObj.tokenize(info.selectionText));
      console.log(score)
  }
});

console.log(`'Allo 'Allo! Event Page`)
