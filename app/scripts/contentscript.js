const toast = document.createElement('div');
toast.style.zIndex = '999';
toast.style.visibility = 'hidden';
toast.style.position = 'fixed';
toast.style.left = '50%';
toast.style.top = '50%';
toast.style.backgroundColor = '#888888';
toast.style.color = '#ffffff';
toast.style.padding = '10px';
toast.style.fontWeight = 'bolder';
document.body.insertBefore(toast, document.body.firstChild);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.id === "negaposi-check") {
    let color = '#ffffff'
    if (request.score < 0) {
      color = '#ff0000'
    }
    toast.innerHTML = `<div>input : ${request.text}</div><div style="color : ${color}">score : ${request.score}</div>`
    toast.style.visibility = 'visible';
    setTimeout(function() {
        toast.style.visibility = 'hidden';
    }, 3000);
  }
});