# 🚀 Cloudflare Pages Deployer (GitHub Actions + Static Sites)

A reusable GitHub Actions workflow for building and deploying static frontend applications (Next.js, Vite, React, etc.) to Cloudflare Pages.

This project demonstrates how to automate deployments using GitHub Actions and securely integrate with Cloudflare.

---

## 📌 Features

* ✅ Automatic deployment on push to `main`
* ⚡ GitHub Actions CI/CD pipeline
* 🔐 Secure credential handling with GitHub Secrets
* 🌍 Deploys to Cloudflare Pages
* 🔄 Supports multiple frameworks (Next.js, Vite, etc.)
* 🧠 Auto-detects build output (`dist/` or `out/`)

---

## 🧱 Project Structure

```text
.
├── README.md
├── deploy.yml (template)
└── .github/
    └── workflows/
        └── deploy.yml (used in actual project)
```

---

## ⚙️ Prerequisites

Before using this workflow:

* GitHub repository
* Cloudflare account
* Cloudflare Pages project
* A frontend app (Next.js, Vite, React, etc.)

---

## ⚠️ Framework Output Directory (IMPORTANT)

Different frameworks output to different folders:

| Framework               | Build Output |
| ----------------------- | ------------ |
| Vite / React            | `dist/`      |
| Next.js (static export) | `out/`       |

---

### 🔹 Next.js setup (only if using Next.js)

```js
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

---

## ☁️ Step 1: Create a Cloudflare Pages Project

1. Go to Cloudflare Dashboard
2. Navigate to **Workers & Pages**
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

* Cloudflare Dashboard
* Workers & Pages section

---

## 🔐 Step 4: Add GitHub Secrets

Go to:

**Settings → Secrets → Actions**

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

## 🚀 Final Workflow (Auto-detects build folder)

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
          node-version: 18
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

### Build Phase

```yaml
npm ci
npm run build
```

### Detection Phase

Automatically finds:

* `dist/` → Vite
* `out/` → Next.js

### Deploy Phase

```bash
wrangler pages deploy <detected-folder>
```

---

## 🚀 Deploy

```bash
git add .
git commit -m "Deploy setup"
git push origin main
```

Then check:
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

Error:

```text
No build output found
```

✔ Fix:

```bash
npm run build
```

Check:

* Vite → `dist/`
* Next.js → `out/`

---

### ❌ ENOENT error

```text
no such file or directory
```

✔ Fix:
Wrong deploy folder (dist vs out)

---

### ❌ Auth errors

✔ Fix:

* Check API token permissions
* Ensure correct Account ID

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

* DevOps projects
* CI/CD pipelines
* Cloudflare automation
* Portfolio projects

---

## ⭐ Support

If this helped you:

* ⭐ Star the repo
* Share on LinkedIn

---

## 📣 License

MIT License

---
