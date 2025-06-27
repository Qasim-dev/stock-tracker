"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWatchlistStore } from "@/lib/store"
import { useEffect, useState } from "react"

interface WatchlistButtonProps {
  symbol: string
}

export function WatchlistButton({ symbol }: WatchlistButtonProps) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlistStore()
  const [isInWatchlist, setIsInWatchlist] = useState(false)

  useEffect(() => {
    setIsInWatchlist(watchlist.some((stock) => stock.symbol === symbol))
  }, [watchlist, symbol])

  const handleToggle = async () => {
    if (isInWatchlist) {
      removeFromWatchlist(symbol)
    } else {
      // In a real app, you'd fetch the stock data here
      const mockStock = {
        symbol,
        name: `${symbol} Inc.`,
        price: 150.0,
        change: 2.5,
        changePercent: 1.69,
        volume: 1000000,
        marketCap: 2500000000,
        peRatio: 25.5,
        high52w: 180.0,
        low52w: 120.0,
        dividendYield: 1.5,
        exchange: "NASDAQ",
      }
      addToWatchlist(mockStock)
    }
  }

  return (
    <Button variant={isInWatchlist ? "default" : "outline"} size="sm" onClick={handleToggle} className="gap-2">
      <Star className={`h-4 w-4 ${isInWatchlist ? "fill-current" : ""}`} />
      {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    </Button>
  )
}
