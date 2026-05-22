---
name: chrome-extensions-zh
description: Chrome Extensions 官方 Skill 的中文翻译与落地入口。当任务涉及 Chrome 扩展、Manifest V3、content script、side panel、popup、service worker、chrome.* API 或 Chrome Web Store 发布时使用。
---

# Chrome Extensions 中文版

这是官方 `chrome-extensions` Skill 的中文索引与落地说明。它面向 Chrome 扩展开发和上架，尤其适合让编码 Agent 避免生成“看起来合理但运行不起来”的扩展代码。

## 适用场景

- 创建或修改 Chrome/Chromium 浏览器扩展。
- 编辑 `manifest.json`。
- 使用 content script、side panel、popup、扩展服务工作线程、DevTools 面板、omnibox、右键菜单或 `chrome.*` API。
- 准备 Chrome Web Store 上架材料、权限说明、隐私政策或审核检查清单。

## 常见高风险点

- 图标：manifest 中引用的图片文件必须真实存在，并且尺寸正确；没有图标时宁可移除字段。
- 侧边栏：只声明 `side_panel.default_path` 不会自动打开，必须提供显式触发方式。
- 动态代码：扩展页受 CSP 限制，需要用沙箱页、Blob URL 或 `srcdoc` 隔离执行。
- 权限：读取 `tab.url`、注入脚本、访问页面内容都需要准确声明权限。
- 服务工作线程：扩展 service worker 会被回收，状态不能只放在变量里，应持久化到 `chrome.storage`。
- 消息通信：异步处理消息时要保持响应通道打开。
- 内容脚本：批量处理 DOM 时要分批并让出主线程，避免阻塞页面。
- 上架审核：权限、隐私政策、商店文案必须和实际行为一致。

## 团队落地规则

1. 先用 `chrome-extensions` Skill 生成或审查扩展架构。
2. 再用人工清单检查 manifest、权限、资源路径、CSP、消息通信和上架材料。
3. 如果扩展还涉及网页 UI、性能或可访问性，再额外调用 `modern-web-guidance`。
