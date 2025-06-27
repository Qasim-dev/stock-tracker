"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { PriceHistory } from "@/lib/types"

interface PriceChartProps {
  data: PriceHistory[]
  symbol: string
}

export function PriceChart({ data, symbol }: PriceChartProps) {
  const chartConfig = {
    price: {
      label: "Price",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <div className="h-[400px] w-full">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={["dataMin - 5", "dataMax + 5"]}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <Line type="monotone" dataKey="price" stroke="var(--color-price)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
