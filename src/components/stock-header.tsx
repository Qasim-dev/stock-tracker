import { TrendingUp, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Stock } from "@/lib/types"

interface StockHeaderProps {
  stock: Stock
}

export function StockHeader({ stock }: StockHeaderProps) {
  const isPositive = stock.change >= 0
  const changeColor = isPositive ? "text-green-600" : "text-red-600"
  const TrendIcon = isPositive ? TrendingUp : TrendingDown

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{stock.symbol}</h1>
            <Badge variant="secondary">{stock.exchange}</Badge>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">{stock.name}</p>
        </div>

        <div className="text-right">
          <p className="text-4xl font-bold mb-1">${stock.price.toFixed(2)}</p>
          <div className={`flex items-center justify-end gap-1 ${changeColor}`}>
            <TrendIcon className="h-5 w-5" />
            <span className="text-lg font-medium">
              {isPositive ? "+" : ""}${stock.change.toFixed(2)} ({isPositive ? "+" : ""}
              {stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
