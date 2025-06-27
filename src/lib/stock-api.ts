import type { Stock, PriceHistory } from "./types"

// Mock stock data - in a real app, this would come from a stock API
const mockStocks: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.43,
    change: 2.15,
    changePercent: 1.24,
    volume: 45234567,
    marketCap: 2750000000000,
    peRatio: 28.5,
    high52w: 198.23,
    low52w: 124.17,
    dividendYield: 0.52,
    exchange: "NASDAQ",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 138.21,
    change: -1.87,
    changePercent: -1.33,
    volume: 23456789,
    marketCap: 1750000000000,
    peRatio: 25.3,
    high52w: 151.55,
    low52w: 83.34,
    dividendYield: undefined,
    exchange: "NASDAQ",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 378.85,
    change: 4.23,
    changePercent: 1.13,
    volume: 34567890,
    marketCap: 2800000000000,
    peRatio: 32.1,
    high52w: 384.3,
    low52w: 213.43,
    dividendYield: 0.68,
    exchange: "NASDAQ",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 248.42,
    change: -3.21,
    changePercent: -1.28,
    volume: 67890123,
    marketCap: 790000000000,
    peRatio: 65.2,
    high52w: 299.29,
    low52w: 138.8,
    dividendYield: undefined,
    exchange: "NASDAQ",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    price: 155.89,
    change: 1.45,
    changePercent: 0.94,
    volume: 45678901,
    marketCap: 1620000000000,
    peRatio: 45.8,
    high52w: 170.0,
    low52w: 81.43,
    dividendYield: undefined,
    exchange: "NASDAQ",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 875.28,
    change: 12.45,
    changePercent: 1.44,
    volume: 56789012,
    marketCap: 2150000000000,
    peRatio: 68.4,
    high52w: 950.02,
    low52w: 180.96,
    dividendYield: 0.03,
    exchange: "NASDAQ",
  },
]

export async function searchStocks(query: string): Promise<Stock[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const searchTerm = query.toLowerCase()
  return mockStocks.filter(
    (stock) => stock.symbol.toLowerCase().includes(searchTerm) || stock.name.toLowerCase().includes(searchTerm),
  )
}

export async function getStockDetails(symbol: string): Promise<Stock | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockStocks.find((stock) => stock.symbol === symbol) || null
}

export async function getTrendingStocks(): Promise<Stock[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  // Return top 4 stocks by change percentage
  return mockStocks.sort((a, b) => b.changePercent - a.changePercent).slice(0, 4)
}

export async function getStockHistory(symbol: string): Promise<PriceHistory[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400))

  const stock = mockStocks.find((s) => s.symbol === symbol)
  if (!stock) return []

  // Generate mock historical data for the last 30 days
  const history: PriceHistory[] = []
  const basePrice = stock.price

  for (let i = 29; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    // Generate realistic price variations
    const variation = (Math.random() - 0.5) * 0.1 // ±5% variation
    const price = basePrice * (1 + variation * (i / 30))

    history.push({
      date: date.toISOString().split("T")[0],
      price: Math.max(price, 0.01), // Ensure positive price
    })
  }

  return history
}
