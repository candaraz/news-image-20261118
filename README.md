# One Day, The Whole World — Wednesday 18 November 2026

[![Competition](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/candaraz/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/candaraz/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

An entry for the [make.fun](https://make.fun) competition
[news-image-20261118](https://make.fun/bounty/news-image-20261118):
**sum up 18 November's world news in one image.**

## The image

A newspaper front page, drawn entirely programmatically — no photographs,
no AI-generated imagery. Forty verified stories from seven regions,
all of which happened or were first reported on Wednesday 18 November 2026
(UTC). Every hero and every card carries a source-and-certainty label —
CONFIRMED, REPORTED, or CLAIM — with the outlet or party named.

- **Three heroes across the top**, each with a dense illustrated scene:
  Xi Jinping greeting Donald Trump on the tarmac in Shenzhen (a rare
  airport welcome as APEC opens); Iran's claim of drone strikes on the US
  base at Ali Al Salem in Kuwait (and Kuwait's and Bahrain's interceptions);
  and Voyager 1 reaching one light-day from Earth.
- **Twelve cards**, each with its own illustrated strip: Russia's 141-drone
  night over Ukraine, the Fed minutes, Cyclone Akvan, Amnesty on El Obeid,
  the EU's €45bn Ukraine loan, UK inflation at 3.6%, Israeli tanks past the
  Gaza truce line, Jeffries winning the House Speaker vote 251–11, GTA VI's
  launch, Bangladesh garment protests, Anthropic's record $83 IPO, and the
  US–Venezuela military pact.
- **A numbered world map** (pins 1–15 match the heroes and cards).
- **"Also on Wednesday"**: items 16–40, one line each — Ebola passing
  11,300 cases, Alcaraz in Turin, the COP31 fossil-fuel split, quakes in
  Papua New Guinea and Peru, the Cambridge Word of the Year ("human"), and
  more.
- **A DATE CHECK box** above the footer: every event is Wednesday
  18 November 2026 (UTC); it lists the stories deliberately left out
  because they were first reported on Tuesday 17 November (Peltola's Alaska
  Senate win, Nvidia's $115.8bn quarter, the Kerch Bridge span collapse,
  the Knesset speaker vote, Mongolia's president resigning, the Prague train
  crash) and the ones that had not happened yet (the Trump–Xi–Putin talks,
  Cyclone Akvan's landfall, the COP31 close).
- **A footer** listing every source outlet. Full per-story audit and change
  log vs v3: [sources-v4.md](sources-v4.md).

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the
committed `entry.png` to the output directory and verifies the copy is
byte-identical. Running it twice produces the same bytes both times.

## License

MIT — see [LICENSE](LICENSE).
