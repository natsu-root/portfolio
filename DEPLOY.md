# Deploy Angular Portfolio to GitHub Pages

This guide will walk you through deploying your Angular portfolio to GitHub Pages.

## Method 1: Deploy to GitHub Pages (Recommended - Free Hosting)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `portfolio` (or any name you prefer)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Initialize Git and Push Code

Open terminal/command prompt in your project folder:

```bash
# Navigate to your project folder
cd angular-portfolio

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Angular Portfolio"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Install angular-cli-ghpages

```bash
# Install the GitHub Pages deployment tool
npm install -g angular-cli-ghpages

# Or install locally
npm install --save-dev angular-cli-ghpages
```

### Step 4: Update angular.json for GitHub Pages

Your `angular.json` already has the `baseHref` set. Verify it looks like this:

```json
"options": {
  "outputPath": "dist/portfolio",
  "baseHref": "/portfolio/",
  ...
}
```

**Note**: If your repository name is different, update `baseHref` accordingly:
- Repository: `portfolio` → `baseHref: "/portfolio/"`
- Repository: `my-portfolio` → `baseHref: "/my-portfolio/"`
- Repository: `USERNAME.github.io` → `baseHref: "/"`

### Step 5: Build and Deploy

```bash
# Build for production
ng build --configuration production

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

Or use this one-liner:

```bash
ng build --configuration production && npx angular-cli-ghpages --dir=dist/portfolio/browser
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/(root)** folder
6. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## Method 2: Using GitHub Actions (Automatic Deployment)

### Step 1: Create GitHub Actions Workflow

Create folder `.github/workflows/` in your project:

```bash
mkdir -p .github/workflows
```

Create file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install Dependencies
      run: npm ci
      
    - name: Build
      run: npm run build -- --configuration production
      
    - name: Deploy to GitHub Pages
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        branch: gh-pages
        folder: dist/portfolio/browser
```

### Step 2: Push and Automatic Deploy

```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push
```

Every push to `main` branch will automatically deploy your site!

---

## Method 3: Manual Upload (Simplest)

### Step 1: Build Project

```bash
ng build --configuration production
```

### Step 2: Create Repository on GitHub

1. Create new repository named `YOUR_USERNAME.github.io`
   - **Important**: Must be exactly your username!
   - Example: username is `johndoe` → repository `johndoe.github.io`

2. Or create any repository (e.g., `portfolio`)

### Step 3: Upload Build Files

**Option A - Direct Upload:**
1. Go to your repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop all files from `dist/portfolio/browser/` folder
4. Click **Commit changes**

**Option B - Using Git:**
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
cd YOUR_USERNAME.github.io

# Copy build files
cp -r ../angular-portfolio/dist/portfolio/browser/* .

# Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push
```

### Step 4: Enable GitHub Pages

1. Repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, folder: /(root)
4. Save

Your site: `https://YOUR_USERNAME.github.io`

---

## Troubleshooting

### Issue: 404 errors or assets not loading

**Solution**: Check your `baseHref` in `angular.json`:

```json
"baseHref": "/REPOSITORY_NAME/"
```

For username.github.io repository:
```json
"baseHref": "/"
```

### Issue: Routing not working on refresh

**Solution**: Add `404.html` that redirects to `index.html`:

Create `src/404.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=./index.html">
</head>
<body>
  Redirecting...
</body>
</html>
```

Add to `angular.json` assets:
```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/404.html"
]
```

### Issue: Images not showing

**Solution**: Use relative paths:
- ❌ `src="/assets/images/photo.jpg"`
- ✅ `src="assets/images/photo.jpg"`

---

## Custom Domain (Optional)

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In your repository: Settings → Pages → Custom domain
3. Enter your domain: `www.yourdomain.com`
4. Add DNS records:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: CNAME, Name: www, Value: YOUR_USERNAME.github.io
5. Wait for DNS propagation (up to 24 hours)

---

## Quick Reference Commands

```bash
# Daily development
ng serve                    # Start dev server
ng build --watch           # Build and watch for changes

# Production build
ng build --configuration production

# Deploy updates
git add .
git commit -m "Update portfolio"
git push

# Then GitHub Actions will auto-deploy
# Or manually deploy with:
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

---

## Your Portfolio URL

After deployment, your portfolio will be available at:

| Repository Name | URL |
|----------------|-----|
| `portfolio` | `https://YOUR_USERNAME.github.io/portfolio/` |
| `my-portfolio` | `https://YOUR_USERNAME.github.io/my-portfolio/` |
| `YOUR_USERNAME.github.io` | `https://YOUR_USERNAME.github.io/` |

---

**Happy Deploying!** 🚀
