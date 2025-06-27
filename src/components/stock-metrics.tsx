import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Stock } from "@/lib/types"

interface StockMetricsProps {
  stock: Stock
}

export function StockMetrics({ stock }: StockMetricsProps) {
  const metrics = [
    { label: "Market Cap", value: `$${(stock.marketCap / 1e9).toFixed(2)}B` },
    { label: "Volume", value: stock.volume.toLocaleString() },
    { label: "P/E Ratio", value: stock.peRatio?.toFixed(2) || "N/A" },
    { label: "52W High", value: `$${stock.high52w.toFixed(2)}` },
    { label: "52W Low", value: `$${stock.low52w.toFixed(2)}` },
    { label: "Dividend Yield", value: stock.dividendYield ? `${stock.dividendYield.toFixed(2)}%` : "N/A" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
              <span className="font-medium">{metric.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
