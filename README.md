# One Day, The Whole World — Wednesday 18 November 2026

[![Competition](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/candaraz/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/candaraz/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

An entry for the [make.fun](https://make.fun) competition
[news-image-20261118](https://make.fun/bounty/news-image-20261118):
**sum up 18 November's world news in one image.**

## The image

A newspaper front page, drawn entirely programmatically — no photographs,
no AI-generated imagery. Forty verified stories from six continents,
all of which happened or were first reported on Wednesday 18 November 2026:

- **Three heroes across the top**, each with a dense illustrated scene:
  Iran's claim of drone strikes on the US base at Ali Al Salem in Kuwait
  (and Kuwait's and Bahrain's interceptions); Xi Jinping and Vladimir Putin
  meeting in Shenzhen on the eve of the trilateral summit with Donald Trump
  as APEC opens; and Mary Peltola's Alaska Senate win, flipping the chamber
  56–44 to the Democrats.
- **Twelve cards**, each with its own illustrated strip: Cyclone Akvan,
  UK inflation, the Board of Peace Gaza warning, GTA VI's launch,
  antibiotic resistance in Europe, Bangladesh garment protests,
  Australia's West Bank sanctions, the EU's €45bn Ukraine loan,
  Voyager 1 reaching one light-day out, Russia's 141-drone night,
  Amnesty on El Obeid, and Korea's Suneung exam crackdown.
- **A numbered world map** (pins 1–15 match the heroes and cards).
- **"Also on Wednesday"**: items 16–40, one line each — quakes in Papua
  New Guinea and Peru, Anthropic's $83 IPO pricing, the Fed minutes,
  the Cambridge Word of the Year ("human"), and more.
- **A footer** stating the date rule and listing every source outlet.
  Contested claims are attributed to their source in the text.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the
committed `entry.png` to the output directory and verifies the copy is
byte-identical. Running it twice produces the same bytes both times.

## License

MIT — see [LICENSE](LICENSE).
