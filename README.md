# 🚀 Cloudflare Pages Deployer (Next.js + GitHub Actions)

A reusable GitHub Actions workflow for building and deploying a static Next.js application to Cloudflare Pages.

This project demonstrates how to automate deployment using GitHub Actions and securely integrate with Cloudflare.

---

## 📌 Features

* ✅ Automatic deployment on push to `main`
* ⚡ Uses GitHub Actions for CI/CD
* 🔐 Secure credential handling with GitHub Secrets
* 🌍 Deploys to Cloudflare Pages
* 📦 Supports static Next.js export (`out` directory)

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

Before using this workflow, make sure you have:

* A GitHub repository
* A Cloudflare account
* A Cloudflare Pages project
* A Next.js project configured for static export

---

## 🧪 Step 1: Configure Next.js for Static Export

Your project must generate an `out` folder.

Add this to your `next.config.js` or `next.config.mjs`:

```js
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

### 💡 What this does

* Converts your Next.js app into a static site
* Generates all files inside the `out/` directory
* This folder will be deployed to Cloudflare

---

## ☁️ Step 2: Create a Cloudflare Pages Project

1. Go to Cloudflare Dashboard
2. Navigate to **Workers & Pages**
3. Click **Create application → Pages**
4. Create a new project
5. Copy your **Project Name**

Example:

```text
my-nextjs-app
```

---

## 🔑 Step 3: Create a Cloudflare API Token

1. Go to **My Profile → API Tokens**
2. Click **Create Token**
3. Choose **Custom Token**
4. Add permission:

```text
Account → Cloudflare Pages → Edit
```

5. Create token and copy it

⚠️ Keep this token secure.

---

## 🆔 Step 4: Get your Cloudflare Account ID

1. Go to Cloudflare Dashboard
2. Open **Workers & Pages**
3. Find **Account ID**

---

## 🔐 Step 5: Add GitHub Secrets

Go to your GitHub repo:

**Settings → Secrets and variables → Actions**

Add:

```text
PAGES_DEPLOY_API
PAGES_DEPLOY_ACCOUNT
CLOUDFLARE_PROJECT_NAME
```

### Example values:

```text
PAGES_DEPLOY_API=your_api_token
PAGES_DEPLOY_ACCOUNT=your_account_id
CLOUDFLARE_PROJECT_NAME=my-nextjs-app
```

---

## 🛠️ Step 6: Add the GitHub Actions Workflow

Create this file:

```text
.github/workflows/deploy.yml
```

Paste the following:

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

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: \${{ secrets.PAGES_DEPLOY_API }}
          accountId: \${{ secrets.PAGES_DEPLOY_ACCOUNT }}
          command: pages deploy out --project-name=\${{ secrets.CLOUDFLARE_PROJECT_NAME }}
```

---

## 🔍 Step 7: How the Workflow Works

### Trigger

```yaml
on:
  push:
    branches:
      - main
```

Runs the workflow when you push to `main`.

---

### Build Process

```yaml
npm ci
npm run build
```

* Installs dependencies
* Builds your Next.js app
* Outputs static files to `out/`

---

### Deployment

```yaml
pages deploy out
```

* Uploads your static site to Cloudflare Pages
* Uses your project name and account

---

## 🚀 Step 8: Deploy Your Project

Run:

```bash
git add .
git commit -m "Add deploy workflow"
git push origin main
```

Then:

1. Go to **GitHub → Actions**
2. Watch the workflow run
3. Confirm all steps pass

---

## 🌍 Step 9: Access Your Live Site

Your site will be available at:

```text
https://your-project-name.pages.dev
```

---

## 🧪 Demo

* 🔗 Demo Repo: https://github.com/yourusername/cloudflare-pages-deployer-demo
* 🌍 Live URL: https://your-project.pages.dev

---

## ⚠️ Common Issues

### ❌ `out` folder missing

✔ Fix:
Make sure you added:

```js
output: 'export'
```

---

### ❌ Invalid API token

✔ Fix:
Check token permissions:

```text
Cloudflare Pages → Edit
```

---

### ❌ Wrong project name

✔ Fix:
Ensure it matches exactly in Cloudflare

---

### ❌ Workflow fails

✔ Fix:
Check GitHub Actions logs for errors

---

## 🏆 Recommended Setup

### Repo 1 (this repo)

```text
cloudflare-pages-deployer
```

* reusable workflow
* guide (README)

### Repo 2 (demo)

```text
cloudflare-pages-deployer-demo
```

* working Next.js app
* live deployment

---

## 🔐 Security Notes

* Never hardcode API keys
* Always use GitHub Secrets
* Keep tokens private

---

## 💼 Use Case

This project is useful for:

* DevOps learning
* CI/CD pipelines
* Automating deployments
* Cloudflare Pages workflows

---

## 📣 License

MIT License

---

## ⭐ If you found this useful

Give this repo a star ⭐ and share it!

---
