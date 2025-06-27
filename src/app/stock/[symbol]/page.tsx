import { notFound } from "next/navigation"
import { getStockDetails, getStockHistory } from "@/lib/stock-api"
import { StockHeader } from "@/components/stock-header"
import { PriceChart } from "@/components/price-chart"
import { StockMetrics } from "@/components/stock-metrics"
import { WatchlistButton } from "@/components/watchlist-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StockPageProps {
  params: Promise<{ symbol: string }>
}

export default async function StockPage({ params }: StockPageProps) {
  const { symbol } = await params
  const upperSymbol = symbol.toUpperCase()

  const stock = await getStockDetails(upperSymbol)
  if (!stock) {
    notFound()
  }

  const history = await getStockHistory(upperSymbol)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <StockHeader stock={stock} />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Price Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Price Chart</CardTitle>
                <WatchlistButton symbol={stock.symbol} />
              </CardHeader>
              <CardContent>
                <PriceChart data={history} symbol={stock.symbol} />
              </CardContent>
            </Card>
          </div>

          <div>
            <StockMetrics stock={stock} />
          </div>
        </div>
      </div>
    </div>
  )
}
