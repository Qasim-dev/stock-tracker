# FundingPips – Senior Frontend Assessment

Welcome to the FundingPips frontend challenge. This assessment is designed to evaluate how you think and build as a **senior engineer** — your architecture decisions, trade-offs, and execution matter more than pixel-perfect delivery.

We’re looking for engineers who can build scalable systems, make smart trade-offs, and deliver clean, maintainable code with minimal supervision.

---

## 📌 The Challenge

Build a real-time stock tracking application where users can:

- 🔍 Search for stocks by name or ticker symbol
- 📈 View live stock price updates
- 📊 Analyze historical price trends
- ⭐ Manage a personal watchlist

---

## 🛠️ Requirements

**Tech Stack:**

- Framework: `Next.js 15` (React 19, App Router, RSC support)
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- State: Your choice of `Zustand`, `React Context`, or `Redux Toolkit`

**Core Features (Required):**

- ✅ Search stocks by name/symbol (via API or mocked)
- ✅ Display stock data (basic details + price)
- ✅ Watchlist management (add/remove)
- ✅ Use RSCs vs Client Components appropriately
- ✅ Mobile-responsive, clean UI

**Bonus Features (Optional):**

- ⚡ Real-time updates (polling or WebSocket)
- 🔐 Authentication (e.g. Firebase, OAuth)
- 📦 Dockerfile for local setup
- 🧪 One unit + one integration test (Jest + RTL)

---

## ✍️ Evaluation Criteria

We’ll assess submissions on the following dimensions:

| Area                   | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| 🏗️ Architecture        | Project structure, component composition, separation of concerns       |
| 🧠 React Usage         | Effective use of RSCs vs client components, minimal JS sent to browser |
| 🧹 Code Quality        | Modularity, clean abstractions, TypeScript usage                       |
| ⚡ Performance         | API optimization, caching, use of ISR/SSR strategies                   |
| 🔍 UX & Error Handling | Loading states, invalid tickers, API error resilience                  |
| 🧪 Testing (bonus)     | Unit/integration test quality, test structure, mocking strategies      |
| 💬 Thought Process     | Clarity of trade-offs, justification of decisions                      |

---

## 📄 Deliverables

Submit:

1. A GitHub repo with your code
2. A live demo on Vercel/Netlify (optional but encouraged)
3. A short `DECISIONS.md` file answering:
   - What trade-offs did you make and why?
   - What would you do with more time?
   - How would you scale this for real users?

Optional: Include a short Loom/video walkthrough explaining your approach (max 5 minutes).

---

## ⏱️ Time Expectations

You shouldn't spend more than **4–6 hours** on this challenge. We value signal and strategy over perfect polish.

---

## 🚀 Quick Tips

- https://www.alphavantage.co/ offers a free stocks api
- Keep your RSC vs Client Component boundaries clean
- Cache or mock API data as needed
- Think like you're shipping v1 of a real product, not just a toy project
- Be opinionated — tell us why you did what you did

---

## 🙌 Final Notes

This assessment isn't just about code — it’s about how you think, prioritize, and build systems that scale. If anything is unclear, feel free to ask us for clarification.

Good luck — and happy shipping! 🚀
