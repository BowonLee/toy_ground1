---
description: Deploy Vite App to GitHub Pages via GitHub Actions
---

# GitHub Actions 배포 절차

이 워크플로우는 Vite로 빌드된 React 앱을 GitHub Pages에 배포하는 과정을 설명합니다.

## 1. 사전 준비
1.  **GitHub 저장소 생성**: GitHub에 새로운 Public (또는 Private) 저장소를 생성합니다.
2.  **Git 초기화 및 연결**: 로컬 프로젝트를 Git으로 초기화하고 원격 저장소와 연결합니다.

## 2. 프로젝트 설정
### `vite.config.js` 수정
GitHub Pages는 루트 도메인이 아닌 하위 경로(예: `https://user.github.io/repo-name/`)에서 호스팅되므로 `base` 설정이 필요합니다.

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<REPOSITORY_NAME>/', // 예: '/toyground/'
})
```

## 3. GitHub Actions 워크플로우 생성
`.github/workflows/deploy.yml` 파일을 생성하여 배포 자동화를 설정합니다.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 4. GitHub 저장소 설정
1.  GitHub 저장소의 **Settings** > **Pages**로 이동합니다.
2.  **Build and deployment** 섹션의 **Source**를 **GitHub Actions**로 변경합니다.

## 5. 배포 확인
1.  코드를 GitHub에 푸시합니다 (`git push origin main`).
2.  GitHub 저장소의 **Actions** 탭에서 워크플로우가 실행되는지 확인합니다.
3.  완료되면 **Settings** > **Pages**에 표시된 URL로 접속하여 배포된 사이트를 확인합니다.
