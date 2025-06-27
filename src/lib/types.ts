export interface Stock {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap: number
  peRatio?: number
  high52w: number
  low52w: number
  dividendYield?: number
  exchange: string
}

export interface PriceHistory {
  date: string
  price: number
}
