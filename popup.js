const toggleDevtools = document.getElementById("toggleDevtools");

toggleDevtools.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: dispatch,
  });
});

function dispatch() {
  document.dispatchEvent(new Event("EvenotAEnviar"));
}
