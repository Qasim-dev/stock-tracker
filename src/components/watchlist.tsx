"use client"

import { Star, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useWatchlistStore } from "@/lib/store"
import { StockCard } from "@/components/stock-card"

export function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlistStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          My Watchlist
        </CardTitle>
      </CardHeader>
      <CardContent>
        {watchlist.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No stocks in your watchlist yet. Search and add some!</p>
        ) : (
          <div className="space-y-3">
            {watchlist.map((stock) => (
              <div key={stock.symbol} className="relative">
                <StockCard stock={stock} />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault()
                    removeFromWatchlist(stock.symbol)
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
