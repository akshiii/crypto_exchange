# crypto_exchange

A DCEX, decentralized crypto exchange app, where users can view crypto charts, buy, sell, or trade cryptocurrencies and other digital assets.

## TODO

1.  Upload incoming data to local file on server.
2.  Upload historical data to candlestick graph
3.  Configure binance test data to view assets
4.  Configure binance test data to buy and sell assets
5.  Have user login

## Architecture

### End users

- Login to the platform
- Do a KYC
- Send INR lets say 10000 from their bank account to the platform
- Convert their 10000 to USDT.
- Now buy with this USDT any crypto like bitcoin, ethereum

### Market Makers

- People who are willing to sell 120$ for your 10,000
- They make up the Order book liquid
- Quite difficult to have people with huge capital to do that in india due to 1% tds tax on every transaction
  EX - Jump, wintermute

## Jargons

### Multisig

- (short for multisignature) is a method of securing cryptocurrency wallets or accounts by requiring multiple private keys (or signatures) to authorize a transaction. It enhances security and facilitates shared ownership or control of digital assets.
  "3/4 multisig" means out of 4 people if 3 people get togethar and login then they can access the wallet.

### Spot

- Spot exchange simply means when cryptos are traded for immediate delivery. real-time buying and selling of digital assets at the current market price, known as the spot price. It means to buy one in exchange of another one.

### Margin

- A margin exchange is a trading platform that allows users to trade financial assets, including cryptocurrencies, with borrowed funds, enabling them to leverage their positions. Margin trading amplifies both potential gains and risks, as users can trade with more capital than they initially own.
  Without Leverage:

You have $1,000 and buy 1 Bitcoin at $1,000. If the price rises to $1,100, you make a $100 profit (10%).
With 10x Leverage:

You use your $1,000 as margin to borrow $9,000. You now control 10 Bitcoin worth $10,000. If the price rises to $1,100, you make a $1,000 profit (100% gain on your margin). However, if the price drops to $900, you lose $1,000, resulting in liquidation.

### Futures

A futures exchange is a platform where users can trade futures contracts, which are financial derivatives that obligate the buyer to purchase, or the seller to sell, an asset at a predetermined price on a specified future date. In cryptocurrency, futures trading allows traders to speculate on the price movements of cryptocurrencies without owning the actual assets.

## DCEX

-
