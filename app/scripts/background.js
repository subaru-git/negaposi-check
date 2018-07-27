// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

import { builder } from 'kuromoji'
import analyze from 'negaposi-analyzer-ja'

let tokenizer;
!(() => {
  builder({dicPath : 'dict/'}).build((error, _tokenizer) => {
    if (error != null) {
        console.log(error);
    }
    tokenizer = _tokenizer;
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
      const score = analyze(tokenizer.tokenize(info.selectionText));
      chrome.tabs.sendMessage(tab.id, {id: "negaposi-check", score: score, text: info.selectionText});
  }
});
