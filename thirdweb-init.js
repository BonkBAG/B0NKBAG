// main/js/thirdweb-init.js
import { ThirdwebSDK } from "https://cdn.skypack.dev/@thirdweb-dev/sdk";

// Завантаження SDK у window для глобального доступу
window.sdkReady = new Promise((resolve) => {
  window.ThirdwebSDK = ThirdwebSDK;
  resolve();
});
