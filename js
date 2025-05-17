async function claimNFT() {
  if (!userAddress) {
    alert("Connect wallet first");
    return;
  }

  try {
    console.log("Starting NFT claim...");
    const sdk = new ThirdwebSDK(window.ethereum, { chainId: 137 });
    const contract = await sdk.getContract("0x031C189f4DF33b55cD7881D1a8e10D9f5fAfB82b", "nft-drop");
    console.log("Contract loaded:", contract);
    const tx = await contract.erc721.claimTo(userAddress, 1);
    alert("Claim successful!");
    console.log("Transaction:", tx);
  } catch (e) {
    alert("Error: " + e.message);
    console.error(e);
  }
}
