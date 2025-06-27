import { StockSearch } from "@/components/stock-search"
import { Watchlist } from "@/components/watchlist"
import { TrendingStocks } from "@/components/trending-stocks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Stock Tracker Pro</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Track your favorite stocks in real-time</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Search Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Search Stocks</CardTitle>
                <CardDescription>Find stocks by company name or ticker symbol</CardDescription>
              </CardHeader>
              <CardContent>
                <StockSearch />
              </CardContent>
            </Card>

            {/* Trending Stocks */}
            <div className="mt-6">
              <TrendingStocks />
            </div>
          </div>

          {/* Watchlist Sidebar */}
          <div>
            <Watchlist />
          </div>
        </div>
      </div>
    </div>
  )
}
