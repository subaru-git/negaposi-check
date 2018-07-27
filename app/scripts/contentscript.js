chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.id === "negaposi-check") {
      console.log(request.score)
  }
});