# 竞品分析

调研日期：2026-05-22

## 结论先行

Modern Web Guidance 的优势不在生态规模，而在“Web 平台专家知识 + CLI 检索 + 真实用例指南”的垂直深度。它比通用 Skill 集更懂现代浏览器 API，但在生态成熟度、跨工具安装体验、社区案例和安全扫描方面仍弱于更大的 Agent Skills 生态。

## 对比项目

GitHub 数据为 2026-05-22 通过 GitHub API 查询，星标和 fork 会随时间变化。
原始快照已保存到 `data/competitive-snapshot.json`。技术论坛和公开讨论检索中，Modern Web Guidance 作为 2026 年 5 月刚进入公开预览的项目，独立长评较少；更可验证的正负反馈主要来自上游 source 仓库 issue、README、npm 和官方文档。

| 项目 | 定位 | Stars | Forks | 优势 | 局限 |
| --- | --- | ---: | ---: | --- | --- |
| `GoogleChrome/modern-web-guidance` | Chrome/Web 平台现代前端指南 | 539 | 13 | Web API 专家内容、CLI 可检索、覆盖现代特性与真实用例。 | 预览期，社区反馈较少，内容偏现代浏览器，需要团队定义兼容策略。 |
| `GoogleChrome/modern-web-guidance-src` | 上游源内容与反馈仓库 | 255 | 14 | issue 里能看到持续补指南、补 eval、纠偏反馈。 | 面向贡献者，不是终端使用入口。 |
| `anthropics/skills` | Agent Skills 公共仓库 | 138878 | 16386 | 格式影响力强，生态入口大。 | 不专注现代 Web 平台细节。 |
| `obra/superpowers` | Agentic skills 方法论与工程流程 | 201608 | 17961 | 强调工程过程、计划、调试、验证。 | 更像工作流框架，不提供具体 Web API 指南。 |
| `vercel-labs/agent-skills` | Vercel 官方 Agent Skills 集合 | 26923 | 2446 | 与 Vercel/Next.js/部署生态贴近。 | 平台导向明显，现代原生 Web API 深度不如 Chrome 项目。 |
| `vercel-labs/skills` | `npx skills` 工具 | 19573 | 1576 | 安装和分发体验好。 | 本身是工具层，不是 Web 知识库。 |
| `addyosmani/agent-skills` | 生产级工程 Skill 集 | 44618 | 4927 | 工程经验强，覆盖性能、质量、架构习惯。 | 更偏工程通用实践，未必追踪最新平台 API。 |
| `github/awesome-copilot` | Copilot 指令、agents、skills 社区集合 | 33567 | 4082 | 社区广、适合找样例。 | 质量参差，需要筛选；不提供统一检索 CLI。 |
| `agentskills/agentskills` | Agent Skills 规范与文档 | 19102 | 1168 | 规范层价值高，利于跨工具兼容。 | 不是垂直知识包。 |
| `google/skills` | Google 产品与技术的 Agent Skills | 10253 | 789 | Google 技术栈广度高。 | 与 Modern Web Guidance 相比，Web 平台主题更分散。 |
| `WordPress/agent-skills` | WordPress 专家知识 Skill | 1526 | 213 | 领域专家知识密度高，适合 WordPress 生态。 | 领域窄，不解决通用现代 Web API 问题。 |

## 维度评分

| 维度 | Modern Web Guidance | 通用 Agent Skills 集合 | 平台型 Skills | 方法论型 Skills |
| --- | --- | --- | --- | --- |
| Web API 新鲜度 | 高 | 中 | 中 | 低 |
| 真实实现约束 | 高 | 中 | 中高 | 中 |
| 社区规模 | 低 | 高 | 高 | 高 |
| 检索体验 | 高 | 视项目而定 | 中高 | 低 |
| 可迁移性 | 高 | 高 | 中 | 高 |
| 风险 | 新特性误用、兼容策略缺失 | 质量不一 | 平台锁定 | 缺少具体实现细节 |

## 好评信号

- 官方文档和 README 明确定位：解决 Agent 因训练数据滞后而生成旧式前端代码的问题。
- 上游 README 显示项目由 Chrome、Edge 和 Web 开发社区支持，说明它不是单一产品营销资料。
- CLI 搜索和拉取方式适合 Agent 工作流，不要求把完整指南长期塞进上下文。
- 上游 source 仓库 issue 中持续出现新增 use case、补 eval、修链接、补 Cursor/ Codex 入口等动作，说明项目维护活跃。

## 差评与风险信号

- 仍是 preview release，内容和指南 id 可能变化。
- 上游主仓库关闭 issue，反馈入口转移到 source 仓库，普通使用者可能不容易发现。
- source 仓库已有关于“guide 命中但语义不完全匹配”的讨论，例如滚动驱动动画和滚动触发动画的区分问题。
- 也有可访问性语义层级、skip link、broken links 等反馈，说明专家内容仍在校准。
- 对较早浏览器、企业内嵌 WebView、低版本 Safari、受限 Tauri/Electron 环境，必须额外定义兼容策略。

## 差异化定位

Modern Web Guidance 最适合作为“前端 Agent 的现代平台知识检索器”，而不是替代：

- 设计系统文档；
- 项目自身组件规范；
- 浏览器兼容策略；
- 自动化测试；
- 人工代码 review。

它的最佳位置是在 Agent 开始写代码之前：先问“这个前端能力是否已有现代原生平台做法”，再让 Agent 按项目环境落地。

## 主要资料来源

- Chrome 官方文档：https://developer.chrome.com/docs/modern-web-guidance
- Get started：https://developer.chrome.com/docs/modern-web-guidance/get-started
- Explore skills：https://developer.chrome.com/docs/modern-web-guidance/explore-skills
- Use cases：https://developer.chrome.com/docs/modern-web-guidance/use-cases
- 上游仓库：https://github.com/GoogleChrome/modern-web-guidance
- 上游 source/feedback 仓库：https://github.com/GoogleChrome/modern-web-guidance-src
- npm 包：https://www.npmjs.com/package/modern-web-guidance
