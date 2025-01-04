const bitcoinWS = new WebSocket(
  "wss://stream.binance.com:443/ws/btcusdt@kline_1s"
);

/**
 * Fetching binance OHLC data
 * @param {*} event
 */
bitcoinWS.onmessage = function (event) {
  var ohlcDataStream = JSON.parse(event.data);
  console.log("Getting data = ", ohlcDataStream);
  setData(ohlcDataStream);
};
