// Check if Service Worker is supported by our browser
if (navigator.serviceWorker) {
  // Register the Service Worker
  navigator.serviceWorker
    .register("./sw.js")
    .then((res) => console.log("service worker registered successfully", res))
    .catch((err) => console.log("Error registering service worker", err));
}
