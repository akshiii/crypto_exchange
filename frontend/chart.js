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
// candleStick.setData([

// ]);
chart.timeScale().fitContent();

function setData(ohlcDataStream) {
  console.log("Date is = ", new Date(ohlcDataStream.k.t / 1000));

  candleStick.update({
    time: ohlcDataStream.k.t / 1000,
    open: ohlcDataStream.k.o,
    high: ohlcDataStream.k.h,
    low: ohlcDataStream.k.l,
    close: ohlcDataStream.k.c,
  });
}
