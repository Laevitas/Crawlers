const oTokens =
  "{ otokens { decimals , createdAt , totalSupply name symbol underlyingAsset { id symbol decimals } collateralAsset { id symbol decimals } strikeAsset { id symbol decimals } strikePrice expiryTimestamp isPut creator } }";
const Account_Buy_and_Sell =
  "{ buys: otokenTrades { oToken { symbol id decimals } buyer seller timestamp exchange transactionHash oTokenAmount paymentTokenAmount paymentToken { decimals id symbol } } sells: otokenTrades { oToken { symbol id decimals } buyer seller timestamp exchange transactionHash oTokenAmount paymentTokenAmount paymentToken { decimals id symbol } }}";
const whitelistedProducts =
  "{ whitelistedProducts { isWhitelisted underlying { id symbol decimals } strike { id symbol decimals } collateral { id symbol decimals } isPut } }";
const Token_Historical_Price =
  "{ otokenTrades { buyer seller oTokenAmount oToken { symbol } paymentToken{ symbol } transactionHash paymentTokenAmount timestamp } }";
const vaults =
  " { vaults  { collateralAmount longAmount shortAmount longOToken { symbol decimals creator isPut strikePrice expiryTimestamp strikeAsset { symbol decimals } underlyingAsset { symbol decimals } collateralAsset{ symbol decimals } } shortOToken { symbol decimals creator isPut strikePrice expiryTimestamp strikeAsset { symbol decimals } underlyingAsset { symbol decimals } collateralAsset{ symbol decimals } } collateralAsset{ symbol } }  }";
const redeemActions =
  "{ redeemActions { id timestamp messageSender receiver oToken{ symbol } otokenBurned payoutAsset { symbol } payoutAmount } }";
const settleActions =
  "{ settleActions { id messageSender timestamp shortAmount amount collateral{ symbol decimals } collateralAmount to long { symbol decimals strikeAsset { symbol decimals } underlyingAsset { symbol decimals } collateralAsset{ symbol decimals } isPut expiryTimestamp strikePrice } longAmount short{ symbol decimals strikeAsset { symbol decimals } underlyingAsset { symbol decimals } collateralAsset{ symbol decimals } isPut expiryTimestamp strikePrice } } }";
const depositCollateralActions =
  "{ depositCollateralActions { id messageSender from asset{ symbol } amount timestamp vault{ owner { id } shortOToken{ symbol strikeAsset{ symbol } creator isPut strikePrice expiryTimestamp } longOToken { symbol strikeAsset{ symbol } creator isPut strikePrice expiryTimestamp } longAmount shortAmount collateralAmount firstMintTimestamp } } }";
const burnShortActions =
  "{ burnShortActions { messageSender timestamp from amount oToken { symbol creator isPut strikePrice strikeAsset { symbol } underlyingAsset{ symbol } collateralAsset{ symbol } } } }";

module.exports = [
  { f_name: "oTokens.json", query: oTokens },
  { f_name: "Account_Buy_and_Sell.json", query: Account_Buy_and_Sell },
  { f_name: "whitelistedProducts.json", query: whitelistedProducts },
  { f_name: "Token_Historical_Price.json", query: Token_Historical_Price },
  { f_name: "vaults.json", query: vaults },
  { f_name: "redeemActions.json", query: redeemActions },
  { f_name: "settleActions.json", query: settleActions },
  { f_name: "depositCollateralActions.json", query: depositCollateralActions },
  { f_name: "burnShortActions.json", query: burnShortActions },
];
