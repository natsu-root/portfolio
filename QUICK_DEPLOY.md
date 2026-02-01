# Quick Deploy Guide - GitHub Pages

## Step-by-Step Instructions

### Step 1: Create GitHub Account & Repository

1. Go to [github.com](https://github.com) and sign up/sign in
2. Click **+** → **New repository**
3. Name: `portfolio` (or your preferred name)
4. Select **Public**
5. Click **Create repository**

### Step 2: Upload Your Code to GitHub

**Option A: Using Git Command Line**

Open terminal in your `angular-portfolio` folder:

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial portfolio commit"

# 4. Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 5. Push code
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop (Easier)**

1. Download [GitHub Desktop](https://desktop.github.com)
2. Click **File** → **Add local repository**
3. Select your `angular-portfolio` folder
4. Click **Publish repository**
5. Enter repository name: `portfolio`
6. Click **Publish**

**Option C: Direct Upload (Simplest)**

1. On your new GitHub repository page
2. Click **uploading an existing file** link
3. Drag and drop ALL files from `angular-portfolio` folder
4. Click **Commit changes**

### Step 3: Enable GitHub Actions Auto-Deploy

I've already set up automatic deployment! Just:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Source**, select **GitHub Actions**
5. That's it! The workflow file is already in `.github/workflows/deploy.yml`

### Step 4: Trigger First Deployment

Make any small change and push:

```bash
# Edit any file (like README.md), then:
git add .
git commit -m "Trigger deployment"
git push
```

Or edit directly on GitHub:
1. Go to any file in your repository
2. Click pencil icon (Edit)
3. Make a small change
4. Click **Commit changes**

### Step 5: View Your Live Website

1. Go to **Settings** → **Pages**
2. Wait for the deployment (2-3 minutes)
3. Your URL will be shown: `https://YOUR_USERNAME.github.io/portfolio/`

---

## Update Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Your update message"
git push
```

GitHub Actions will automatically rebuild and deploy!

---

## Important: Update baseHref

**If your repository name is NOT "portfolio"**, update `angular.json`:

```bash
# Open angular.json
# Find this line:
"baseHref": "/portfolio/",

# Change to your repository name:
"baseHref": "/YOUR_REPO_NAME/",
```

Then commit and push again.

---

## Common Issues

### 1. "Repository not found" error
- Check your GitHub username is correct
- Make sure repository exists

### 2. "Permission denied" error
- Make sure you're logged into GitHub
- Check repository is Public

### 3. Website shows 404
- Wait 2-3 minutes for deployment
- Check GitHub Actions tab for errors
- Verify `baseHref` matches your repository name

### 4. Changes not showing
- Clear browser cache (Ctrl+Shift+R)
- Check GitHub Actions completed successfully

---

## Your Website URL

| If your username is | Your URL will be |
|--------------------|-----------------|
| johndoe | `https://johndoe.github.io/portfolio/` |
| sarahsmith | `https://sarahsmith.github.io/portfolio/` |

---

## Need Help?

1. Check **Actions** tab in your GitHub repository for build errors
2. Read full guide: [DEPLOY.md](./DEPLOY.md)
3. Search error messages on Google/Stack Overflow

---

**Good luck with your portfolio!** 🚀
