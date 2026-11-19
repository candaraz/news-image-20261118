# Sources — news-image-20261118 v3

V3 changes vs v2 only. All other 38 stories are UNCHANGED from v2; their
verification lives in ~/workspace/makefun/news-image-20261118-v2/sources.md
(v2 commit ac92b4c). Same structure: 3 heroes + 12 cards + 25 list = 40
stories, 6 continents, same render pipeline (render.py in this directory).
No spare swap was used: v2 went 12/0/0 and the gap to the prize band is small,
so only the two overnight outcomes below were upgraded. Date rule unchanged:
every event happened or was first reported on Wednesday 18 November 2026.
ASCII hyphens only in image text.

## CHANGED LINES

### 28. ANTHROPIC IPO — priced $83/share, above the $70-78 range (was: "pricing due tonight")
Rendered line: "Anthropic IPO priced $83, above range"
- Priced Wednesday evening New York time at $83/share, above the $70-$78
  range set in the 17 Nov S-1 amendment. Reported by Reuters, Bloomberg and
  CNBC, all citing people familiar with the matter; Anthropic declined to
  comment at that point (per the research note; later coverage reports
  Anthropic itself confirmed the price and an enlarged 980m-share offering,
  ~$81.3bn — that final size is NOT stated in the image).
- Trading starts Thursday 19 Nov on Nasdaq under ticker ANT.
- NOT used in the image: the final raise and the ~$1.5tn fully-diluted
  valuation (TechCrunch/Unite.AI-reported, not official).
- Sources (re-verified 19 Nov ~07:55 WIB via web search): Motley Fool
  (18 Nov 17:17 EST), https://www.fool.com/investing/2026/11/18/it-s-official-anthropic-prices-its-ipo-at-usd83-a-share-here-s-what-we-know-and-what-we-don-t/
  ; Reuters via KZ1023 (18 Nov 21:26 UTC),
  https://www.kz1023.com/2026/11/18/anthropic-prices-blockbuster-ipo-at-83-a-share-source-says/
  ; CNBC/Bloomberg via Investopedia and Invezz (18 Nov). Corroborated by
  FinanceFeeds and The Desk (19 Nov 00:06 UTC).

### 29. FED MINUTES — almost all officials see further hikes (was: gold's slide)
Rendered line: "Fed minutes: almost all see further hikes"
- Minutes of the Oct 27-28 FOMC meeting, released 18 Nov 19:00 GMT / 14:00 ET:
  "almost all participants" judged further rate increases would likely be
  appropriate to return inflation to 2%. A couple of participants said a hike
  of MORE than 25bp could warrant consideration at the Dec 8-9 meeting if
  inflation data were unfavourable. October decision itself: held at
  3.75-4.00%, vote 10-2; dissenters Lisa Cook and Beth Hammack wanted +25bp.
  Total PCE 3.6% (Sept), core PCE 3.1%. CME FedWatch ~94.7% for a 25bp
  December hike after the release.
- FRAMING: the minutes predate the hot October CPI print, so the line states
  what the minutes SAY, not a fresh decision. (The Waller 50bp comment is a
  same-day CNBC interview, not in the minutes — not used.)
- Gold's Wednesday slide (v2 item 29, $3,777.83/oz, -1.9%) drops out of the
  list entirely; nothing else in the image references gold.
- Sources (re-verified 19 Nov ~07:55 WIB via web search): dpa-AFX via
  TradingView (18 Nov 19:35 UTC),
  https://www.tradingview.com/news/dpa_afx:174dcf726b8c5:0-fed-minutes-confirm-most-officials-expect-further-rate-hikes/
  ; Kilambi summary of federalreserve.gov minutes,
  https://news.kilambi.com/stories/2026-11-18-fomc-october-minutes-further-hikes-likely/
  ; Binance Square FOMC summary (18 Nov 19:12 UTC); AsiaToday (19 Nov
  06:38 WIB, FedWatch 94.7%).

## FOOTER CHANGE
- "Federal Reserve" added to the sources footer (still 4 wrapped lines).
- No other image text changed. Masthead, stat strip, heroes, cards, map
  pins, and list items 16-27 and 30-40 are byte-identical in content to v2.

## VERIFICATION
- Rendered with render.py (Python + PIL, stdlib only, no network).
  Deterministic: three consecutive runs produce md5
  26d6ce08d264fd0046994f5721aaa521.
- entry.png: 1024x1024, 232,842 bytes (v2: 233,060 bytes), well under 1 MB.
- Legibility checked by viewing the rendered file: zoomed list crop shows
  items 28 and 29 crisp with no truncation or garbling; full page at 300px
  reads as a newspaper front page (same as v2).
- Render assertions passed: no text overflow (list lines fit their columns),
  map leaders zero crossings / zero label overlaps, sources footer 4 lines.
