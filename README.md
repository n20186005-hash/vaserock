# Vase Rock ｜ 小琉球花瓶岩

小琉球花瓶岩的单页旅行指南站点，基于 [Astro](https://astro.build/) 构建的静态站点，
并部署到 **Cloudflare Workers（Workers Static Assets 模式）**。

## 技术栈

- Astro `output: "static"`（不依赖 `@astrojs/cloudflare` 适配器）
- Tailwind CSS v4
- @astrojs/sitemap
- 动态接口（天气）由 Cloudflare Workers 入口 `src/worker.js` 提供

## 目录结构

```
astro.config.mjs        # Astro 配置（output: static）
wrangler.jsonc          # Cloudflare Workers 部署配置（Static Assets 模式）
src/
  worker.js             # Workers 入口：重定向 / API / 静态资源 / 响应头
  pages/                # Astro 页面
  components/           # Astro 组件
  data/                 # 站点数据（site.ts / guides.ts）
public/                 # 静态资源（构建时复制到 dist/）
functions/              # ⚠️ 已废弃（Pages Functions），逻辑已迁移至 src/worker.js
```

## 本地开发

启动 Astro 开发服务器（仅预览站点内容，不含 Workers 运行时）：

```bash
pnpm install
pnpm run dev
```

使用 Wrangler 在本地模拟 Workers + Static Assets 的完整运行环境
（含 `/api/weather`、重定向与安全响应头）：

```bash
pnpm install
pnpm run build        # 先构建静态资源到 dist/
pnpm run cf:dev       # 启动 wrangler dev，默认 http://localhost:8787
```

## 正式部署

一键构建并部署到 Cloudflare Workers：

```bash
pnpm run deploy
# 等价于：pnpm build && wrangler deploy
```

部署前请确保：

- `wrangler.jsonc` 中的 `name`、`compatibility_date` 配置正确；
- `assets.directory` 指向构建产物目录 `./dist`；
- 域名 DNS 已指向 Cloudflare（如需 `www -> apex` 跳转，Worker 已内置 301 处理）。

## 迁移说明（Cloudflare Pages → Workers）

- 原 `functions/` 下的 Pages Functions 已重构进 `src/worker.js` 的
  `export default { async fetch(request, env, ctx) }`，参数映射：
  `context.request → request`、`context.env → env`、`context.waitUntil → ctx.waitUntil`。
- `public/_redirects` 与 `public/_headers` 已移除，重定向与响应头全部由
  `src/worker.js` 接管，避免 Wrangler 解析 `_redirects` 报
  `Only relative URLs are allowed [code: 100324]` 错误。
- 静态资源通过 `env.ASSETS.fetch(request)` 回源，`/_astro/` 资源注入
  `Cache-Control: public, max-age=31536000, immutable` 长期缓存头。
