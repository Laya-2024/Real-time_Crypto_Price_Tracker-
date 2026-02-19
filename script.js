const btcEl = document.getElementById('btc');
const ethEl = document.getElementById('eth');
const dogeEl = document.getElementById('doge');
const statusEl = document.getElementById('status');

async function fetchPrices() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd');
    const data = await response.json();
    
    btcEl.textContent = `$${data.bitcoin.usd.toLocaleString()}`;
    ethEl.textContent = `$${data.ethereum.usd.toLocaleString()}`;
    dogeEl.textContent = `$${data.dogecoin.usd.toFixed(4)}`;
    
    statusEl.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    statusEl.textContent = 'Error fetching prices';
  }
}

// Fetch on load
fetchPrices();

// Auto-update every 10 seconds
setInterval(fetchPrices, 10000);
