# 餐饮可视化大屏项目 (Catering Visualization Dashboard)

## 项目介绍
本项目是一个基于 **React** 和 **Vite** 的现代化餐饮数据可视化大屏系统。
旨在通过直观的图表展示餐饮项目的核心运营数据，包括销售情况、菜品偏好、用户画像及销售趋势等，帮助管理者快速掌握经营状况。

## 项目功能

1. **销售价格区间分析**
   - 展示不同价格区间（<30, <60, <100等）的销量分布。
   - 使用饼图直观呈现各价位段的市场占比。

2. **菜品口味偏好分析**
   - 可视化展示25种不同口味（如麻辣、清淡、蒜香等）的受欢迎程度。
   - 支持数据缩放（DataZoom）查看详细排名。
   - 使用渐变色柱状图增强视觉体验。

3. **用户画像分析**
   - 展示用户的性别比例和年龄段分布。
   - 帮助了解主要消费群体特征。

4. **销售趋势分析**
   - 展示近期销售数据的变化趋势。
   - 使用平滑曲线面积图，清晰呈现增长态势。

5. **大屏展示模式**
   - 适配大屏展示，采用深色主题（Dark Mode）。
   - 响应式布局，自动适配不同分辨率屏幕。

## 项目目录结构

```
project/
├── frontend/                 # 前端项目目录
│   ├── src/
│   │   ├── components/       # 图表组件
│   │   │   ├── ChartContainer.tsx
│   │   │   ├── FlavorChart.tsx
│   │   │   ├── SalesPriceChart.tsx
│   │   │   ├── SalesTrendChart.tsx
│   │   │   └── UserDemographicsChart.tsx
│   │   ├── data/            # 模拟数据及常量
│   │   │   └── mockData.ts
│   │   ├── lib/             # 工具函数
│   │   │   └── utils.ts
│   │   ├── App.tsx          # 主应用入口/布局
│   │   ├── index.css        # 全局样式 & Tailwind配置
│   │   └── main.tsx         # 渲染入口
│   ├── tailwind.config.js   # Tailwind 配置文件
│   ├── vite.config.ts       # Vite 配置文件
│   └── package.json         # 项目依赖配置
└── README.md                # 项目说明文档
```

## 项目部署

### 环境要求
- Node.js (推荐 v18+)
- pnpm (推荐) 或 npm/yarn

### 本地运行
1. 进入前端目录：
   ```bash
   cd frontend
   ```
2. 安装依赖：
   ```bash
   pnpm install
   ```
3. 启动开发服务器：
   ```bash
   pnpm dev
   ```
   访问 `http://localhost:5173` 查看效果。

### 构建部署
1. 编译项目：
   ```bash
   pnpm build
   ```
2. 构建产物将位于 `frontend/dist` 目录，可部署至任何静态服务器（如 Nginx, Vercel, Netlify）。

## 技术栈
- **核心框架**: React + Vite + TypeScript
- **样式方案**: Tailwind CSS
- **图表库**: ECharts (echarts-for-react)
- **图标库**: Lucide React
