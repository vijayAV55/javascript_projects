const apiURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

async function fetchCryptoPrices() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    document.getElementById("btc-price").innerText = `$${data.bitcoin.usd}`;
    document.getElementById("eth-price").innerText = `$${data.ethereum.usd}`;
    document.getElementById("doge-price").innerText = `$${data.dogecoin.usd}`;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
  }
}

window.onload = fetchCryptoPrices;
