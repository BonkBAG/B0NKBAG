async function connectWallet() {
  if (isConnecting) return;
  isConnecting = true;

  if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      userAddress = address; // <-- Це ключове
      document.getElementById("wallet-address").innerText = "Connected: " + address;
      document.getElementById("wallet").innerText = "Wallet: " + address;
      const balance = await web3.eth.getBalance(address);
      document.getElementById("matic-balance").innerText = "POL: " + (web3.utils.fromWei(balance, 'ether')).slice(0, 6);
      await fetchTokenBalances(web3, address);
    } catch (err) {
      alert("Connection failed: " + err.message);
    }
  } else {
    alert("No wallet found. Please open this site in MetaMask or Trust Wallet browser.");
  }

  isConnecting = false;
}
