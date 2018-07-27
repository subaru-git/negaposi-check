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

chrome.runtime.onMessage.addListener(({id, score, text}, sender, sendResponse) => {
  if (id === "negaposi-check") {
    let color = '#ffffff'
    if (score < 0) {
      color = '#ff0000'
    }
    toast.innerHTML = `<div>input : ${text}</div><div style="color : ${color}">score : ${score}</div>`
    toast.style.visibility = 'visible';
    setTimeout(() => {
        toast.style.visibility = 'hidden';
    }, 3000);
    sendResponse({});
  }
});