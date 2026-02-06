# QUICK START: Upload to GitHub in 5 Minutes

## Prerequisites
- Git installed on your PC: https://git-scm.com/download/win
- GitHub account: https://github.com/signup

## Step-by-Step Guide

### 1️⃣ Create Repository on GitHub (2 min)
1. Log in to https://github.com
2. Click **+** (top right) → **New repository**
3. Repository name: `portfolio` or `my-portfolio`
4. Description: "Full Stack Developer Portfolio"
5. Choose **Public** (so others can see it)
6. Click **Create repository**

### 2️⃣ Copy Your Repository Link
After creating, you'll see a page with:
```
https://github.com/YOUR_USERNAME/portfolio.git
```
Copy this link (we'll need it)

### 3️⃣ Configure Git (Run in PowerShell)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

### 4️⃣ Push Your Code (Run in PowerShell)
```powershell
cd D:\Nextjs\my_portfolio

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

### 5️⃣ Verify on GitHub
- Go to https://github.com/YOUR_USERNAME/portfolio
- You should see all your files there ✅

---

## Connect Vercel to GitHub

1. Go to https://vercel.com
2. Click **Add New...** → **Project**
3. Click **Import Git Repository**
4. Paste: `https://github.com/YOUR_USERNAME/portfolio.git`
5. Click **Import**
6. Click **Deploy**
7. Wait 2-3 minutes...
8. Your site is live! 🎉

---

## Future Updates

Whenever you make changes:
```powershell
cd D:\Nextjs\my_portfolio
git add .
git commit -m "Updated projects page"
git push
```

Vercel automatically redeploys! No extra steps needed.

---

## Troubleshooting

**Error: "fatal: could not read Username"**
- Windows may prompt for credentials
- Enter your GitHub username and password (or personal access token)

**My changes aren't showing on the live site**
- Wait 2-3 minutes for Vercel to deploy
- Check deployment status at vercel.com
- Clear browser cache (Ctrl + Shift + Delete)

**Need help?**
- GitHub Guide: https://docs.github.com/en
- Vercel Docs: https://vercel.com/docs
