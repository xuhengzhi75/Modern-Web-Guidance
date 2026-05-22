# Notice

This repository is a Chinese research and adoption companion for Google Chrome's Modern Web Guidance project.

Primary upstream sources:

- Chrome documentation: https://developer.chrome.com/docs/modern-web-guidance
- Upstream repository: https://github.com/GoogleChrome/modern-web-guidance
- Source and feedback repository: https://github.com/GoogleChrome/modern-web-guidance-src
- npm package: https://www.npmjs.com/package/modern-web-guidance

The upstream npm package and repository are published under Apache-2.0. Chrome developer documentation pages state that documentation content is licensed under Creative Commons Attribution 4.0 and code samples under Apache 2.0 unless otherwise noted.

This repository intentionally does not mirror the full upstream guide corpus. It provides:

- bilingual indexes,
- Chinese summaries and translations,
- testing notes,
- competitive analysis,
- adoption recommendations.

For the latest canonical guide text, use the official CLI:

```bash
npx -y modern-web-guidance@latest search "<query>"
npx -y modern-web-guidance@latest retrieve "<guide-id>"
```
