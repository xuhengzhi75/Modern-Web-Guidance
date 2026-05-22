# Modern Web Guidance 调研与中文落地包

本仓库是对 [Chrome Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) 的调研、整理、中文化和团队落地实践包。它不是上游仓库镜像，而是面向中文团队的二次组织：把官方 AI Agent Skill 分为英文原版索引与中文翻译版，补充测试方法、竞品分析、深度解读报告和分享文章。

## 已完成内容

- 工程化：当前目录已整理为独立项目，可运行结构测试，并准备推送 GitHub。
- 项目整理：`source-skills/en/` 放英文原版索引，`source-skills/zh/` 放中文翻译版。
- 项目测试：`npm test` 验证仓库结构；并用官方 CLI 验证 `search`、`retrieve`、`list` 三类能力。
- 竞品分析：覆盖 Anthropic Skills、Vercel Agent Skills、Addy Osmani Agent Skills、GitHub Awesome Copilot、WordPress Agent Skills、AgentSkills 规范等项目。
- 深度材料：调研报告、使用引导、团队落地建议、好评/差评归纳、对外分享文章均在 `docs/` 下。

## 目录

| 路径 | 内容 |
| --- | --- |
| `source-skills/en/` | 英文原版索引与上游使用方式 |
| `source-skills/zh/` | 中文翻译版 Skill 说明 |
| `data/skill-catalog.en.json` | 英文分类数据 |
| `data/skill-catalog.zh.json` | 中文分类数据 |
| `docs/01-project-organization.md` | 项目分类与结构说明 |
| `docs/02-testing-validation.md` | 测试方法、结果与结论 |
| `docs/03-competitive-analysis.md` | 竞品分析 |
| `docs/04-deep-research-report.md` | 深度调研报告 |
| `docs/05-sharing-article.md` | 可用于团队分享/公众号的文章草稿 |
| `tests/verify_structure.mjs` | 本项目结构验证脚本 |

## 快速验证

```bash
npm test
```

官方 CLI 可按需验证：

```bash
npx -y modern-web-guidance@latest search "optimize LCP image priority"
npx -y modern-web-guidance@latest retrieve "optimize-image-priority"
npx -y modern-web-guidance@latest list
```

## 使用建议

将 `source-skills/zh/modern-web-guidance/SKILL.md` 作为中文团队的阅读入口；真正让编码 Agent 工作时，仍建议调用官方 npm 包保持内容新鲜。团队内部可把浏览器支持策略写进 `AGENTS.md` 或 `CLAUDE.md`，例如：

```md
Browser Support: 允许使用 Baseline Newly Available 特性，但必须做特性检测；面向核心链路时优先使用 Baseline Widely Available 特性。
```

## 来源与许可

上游项目来自 [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance)，npm 包为 `modern-web-guidance`。本仓库报告和中文整理遵循 Apache-2.0；引用官方文档时保留来源链接。详见 `NOTICE.md`。
