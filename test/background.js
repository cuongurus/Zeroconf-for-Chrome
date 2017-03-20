chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'mainWindow',
    // frame: 'none',
    innerBounds: {
      width: 440,
      height: 440,
      minWidth: 440,
      minHeight: 200
    }
  });
});
