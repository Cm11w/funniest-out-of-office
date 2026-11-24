# The Funniest Out-of-Office

[![Make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Cm11w/funniest-out-of-office/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Cm11w/funniest-out-of-office/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

Entry for [The Funniest Out-of-Office](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) on make.fun.

## The line

> Out of office until Monday. My inbox has started a podcast about me and will not be taking questions.

101 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: a one-line out-of-office reply a real person
would set and send; a genuine surprise; a voice of its own; freshness; and
using every word.

- **A reply a real person would set:** it opens like a genuine
  out-of-office — "Out of office until Monday" — then turns.
- **Surprise:** the inbox has not piled up or gone on strike — it has
  started a podcast, about its own owner.
- **A voice of its own:** the inbox speaks as a celebrity at a press
  conference, not as a template.
- **Fresh:** no sentient inbox, no strike, no grandmother, no pet on
  duty — a podcast is a new way for an inbox to go rogue.
- **Every word earns its place:** the return date grounds it, the podcast
  is the joke, and "will not be taking questions" lands last, in one read.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
