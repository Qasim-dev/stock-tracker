import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Stock } from "./types"

interface WatchlistStore {
  watchlist: Stock[]
  addToWatchlist: (stock: Stock) => void
  removeFromWatchlist: (symbol: string) => void
  isInWatchlist: (symbol: string) => boolean
}

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],
      addToWatchlist: (stock) =>
        set((state) => ({
          watchlist: state.watchlist.some((s) => s.symbol === stock.symbol)
            ? state.watchlist
            : [...state.watchlist, stock],
        })),
      removeFromWatchlist: (symbol) =>
        set((state) => ({
          watchlist: state.watchlist.filter((stock) => stock.symbol !== symbol),
        })),
      isInWatchlist: (symbol) => get().watchlist.some((stock) => stock.symbol === symbol),
    }),
    {
      name: "stock-watchlist",
    },
  ),
)
