import Link from "next/link"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Stock } from "@/lib/types"

interface StockCardProps {
  stock: Stock
}

export function StockCard({ stock }: StockCardProps) {
  const isPositive = stock.change >= 0
  const changeColor = isPositive ? "text-green-600" : "text-red-600"
  const TrendIcon = isPositive ? TrendingUp : TrendingDown

  return (
    <Link href={`/stock/${stock.symbol}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{stock.symbol}</CardTitle>
            <Badge variant="secondary">{stock.exchange}</Badge>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{stock.name}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
              <div className={`flex items-center gap-1 ${changeColor}`}>
                <TrendIcon className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {isPositive ? "+" : ""}${stock.change.toFixed(2)} ({isPositive ? "+" : ""}
                  {stock.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
