const chart = LightweightCharts.createChart(document.getElementById("chart"), {
  width: 900,
  height: 600,
});
const candleStick = chart.addCandlestickSeries({
  upColor: "#26a69a",
  downColor: "#ef5350",
  borderVisible: false,
  wickUpColor: "#26a69a",
  wickDownColor: "#ef5350",
});
candleStick.setData([
  {
    time: "2018-12-31",
    open: 109.87,
    high: 114.69,
    low: 85.66,
    close: 112,
  },
]);

function setData(ohlcDataStream) {
  console.log("Date is = ", new Date(ohlcDataStream.k.T));
  let date = new Date(ohlcDataStream.k.t);
  candleStick.update({
    time: ohlcDataStream.k.T,
    open: ohlcDataStream.k.o,
    high: ohlcDataStream.k.h,
    low: ohlcDataStream.k.l,
    close: ohlcDataStream.k.c,
  });
}
