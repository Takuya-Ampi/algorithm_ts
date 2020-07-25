const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const asyncFetchUsdExchangeRate = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`USDのレート:${data.bpi.USD.rate}`);
  } catch (err) {
    console.log('There was an error', err);
  }
};
asyncFetchUsdExchangeRate()
