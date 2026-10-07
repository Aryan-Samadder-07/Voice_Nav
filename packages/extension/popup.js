document.getElementById("activate-btn")?.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    chrome.tabs.sendMessage(tab.id, { action: "ACTIVATE_VOICEDOM" });
  }
});
