# 🚀 Cloudflare Pages Deployer (GitHub Actions)

A reusable GitHub Actions workflow for building and deploying static frontend applications to Cloudflare Pages.

This project provides a simple, flexible CI/CD pipeline that works with multiple frameworks by automatically detecting the correct build output directory.

---

## 📌 Features

* ✅ Automatic deployment on push to `main`
* ⚡ GitHub Actions CI/CD pipeline
* 🔐 Secure credential handling with GitHub Secrets
* 🌍 Deploys to Cloudflare Pages
* 🔄 Supports multiple frameworks (Vite, React, Next.js static, etc.)
* 🧠 Auto-detects build output (`dist/`, `out/`, `build/`, `public/`)

---

## 🧱 Project Structure

```text
.
├── README.md
├── deploy.yml (template)
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ⚙️ Supported Frameworks

This workflow supports **any static site** that outputs a build folder.

### Common examples:

| Framework               | Output Folder |
| ----------------------- | ------------- |
| Vite (React, Vue)       | `dist/`       |
| Next.js (static export) | `out/`        |
| Create React App        | `build/`      |
| Static HTML             | `public/`     |

---

## ⚠️ Important: Static Only

This workflow works only for:

* Static sites
* Frontend-only apps
* Exported builds

❌ Not supported:

* SSR apps
* Full-stack frameworks with server runtime
* Cloudflare Workers-based apps

---

## ☁️ Step 1: Create Cloudflare Pages Project

1. Go to Cloudflare Dashboard
2. Open **Workers & Pages**
3. Create a new Pages project
4. Copy your **Project Name**

---

## 🔑 Step 2: Create API Token

1. Go to **My Profile → API Tokens**
2. Create **Custom Token**
3. Add permission:

```text
Account → Cloudflare Pages → Edit
```

---

## 🆔 Step 3: Get Account ID

Find it in:

* Cloudflare dashboard
* Workers & Pages section

---

## 🔐 Step 4: Add GitHub Secrets

Go to:

**Settings → Secrets and variables → Actions**

Add:

```text
PAGES_DEPLOY_API
PAGES_DEPLOY_ACCOUNT
CLOUDFLARE_PROJECT_NAME
```

---

## 🛠️ Step 5: Add Workflow

Create:

```text
.github/workflows/deploy.yml
```

---

## 🚀 Final Workflow

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Detect build directory
        id: build-dir
        run: |
          if [ -d "dist" ]; then
            echo "dir=dist" >> $GITHUB_OUTPUT
          elif [ -d "out" ]; then
            echo "dir=out" >> $GITHUB_OUTPUT
          elif [ -d "build" ]; then
            echo "dir=build" >> $GITHUB_OUTPUT
          elif [ -d "public" ]; then
            echo "dir=public" >> $GITHUB_OUTPUT
          else
            echo "❌ No build output found!"
            exit 1
          fi

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.PAGES_DEPLOY_API }}
          accountId: ${{ secrets.PAGES_DEPLOY_ACCOUNT }}
          command: pages deploy ${{ steps.build-dir.outputs.dir }} --project-name=${{ secrets.CLOUDFLARE_PROJECT_NAME }}
```

---

## 🔍 How It Works

### 1. Build

```bash
npm ci
npm run build
```

### 2. Detect output folder

Automatically finds:

* `dist/`
* `out/`
* `build/`
* `public/`

### 3. Deploy

```bash
wrangler pages deploy <folder>
```

---

## 🚀 Deploy

```bash
git add .
git commit -m "Add deploy workflow"
git push origin main
```

Then go to:
👉 GitHub → Actions

---

## 🌍 Live URL

```text
https://your-project-name.pages.dev
```

---

## 🧪 Demo

* 🔗 Demo Repo: https://github.com/yourusername/cloudflare-pages-deployer-demo
* 🌍 Live URL: https://kdeelz-cloud-dep.pages.dev/

---

## ⚠️ Common Issues

### ❌ No build folder found

✔ Fix:

```bash
npm run build
```

---

### ❌ ENOENT error

✔ Fix:
Wrong output folder (`dist` vs `out`)

---

### ❌ Auth errors

✔ Fix:

* Check API token permissions
* Verify Account ID

---

### ❌ Wrong project name

✔ Fix:
Must match Cloudflare exactly

---

## 🏆 Recommended Setup

### Main Repo

```text
cloudflare-pages-deployer
```

### Demo Repo

```text
cloudflare-pages-deployer-demo
```

---

## 🔐 Security

* Never expose API keys
* Always use GitHub Secrets

---

## 💼 Use Cases

* DevOps learning
* CI/CD pipelines
* Cloudflare Pages automation
* Portfolio projects

---

## ⭐ Support

If this helped you:

* ⭐ Star the repo
* Share on LinkedIn

---

## 📣 License

MIT License
