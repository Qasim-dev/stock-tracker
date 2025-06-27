"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StockCard } from "@/components/stock-card"
import { searchStocks } from "@/lib/stock-api"
import type { Stock } from "@/lib/types"

export function StockSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Stock[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return

    setLoading(true)
    try {
      const stocks = await searchStocks(query)
      setResults(stocks)
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search stocks (e.g., AAPL, Apple, Tesla)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {results.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {results.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      )}
    </div>
  )
}
