import { getTrendingStocks } from "@/lib/stock-api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StockCard } from "@/components/stock-card"
import { TrendingUp } from "lucide-react"

export async function TrendingStocks() {
  const trendingStocks = await getTrendingStocks()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          Trending Stocks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {trendingStocks.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
