# 🚀 Deployment Guide for Your Portfolio

Your Next.js portfolio is ready to deploy! Follow these simple steps.

## Step 1: Initialize Git Repository

```powershell
cd c:\Users\eswarabhatla_saikris\Downloads\Code\portfolio-nextjs

# Initialize git
git init
git add .
git commit -m "Initial portfolio commit"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Name it: `ekrishnas.github.io` (optional - for GitHub Pages subdomain)
   OR any name like `portfolio`, `personal-site`, etc.
3. Make it **Public**
4. Click "Create repository"
5. Copy the repository URL

## Step 3: Push to GitHub

```powershell
# Replace with your actual GitHub repository URL
git remote add origin https://github.com/ekrishnas/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel (Easiest!)

### Option A: One-Click Deploy (Recommended)

1. Go to https://vercel.com
2. Sign up with GitHub (easier!)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Your portfolio will be live in 2-3 minutes!

### Option B: Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd c:\Users\eswarabhatla_saikris\Downloads\Code\portfolio-nextjs

# Deploy
vercel
```

## Your Portfolio Will Be Live At:

- **Vercel URL**: `https://your-project.vercel.app`
- Example: `https://ekrishnas-portfolio.vercel.app`

## What to Do Next

### 1. Update Your Resume/LinkedIn with Portfolio URL
Add your portfolio link to:
- Resume
- LinkedIn profile
- Email signature
- GitHub bio

### 2. Optional: Custom Domain

In Vercel dashboard:
1. Go to Settings → Domains
2. Add your custom domain (e.g., `ekrishnas.dev`)
3. Update DNS records as instructed

### 3. Share Your Portfolio

✨ Your portfolio is now live and shareable:
- Twitter/X: "Just launched my professional portfolio! Check it out:"
- LinkedIn: Share the link with your network
- Email: Send to recruiters and connections

## Quick Troubleshooting

**Issue**: Vercel deployment fails
- **Solution**: Check that all dependencies are installed locally: `npm install`

**Issue**: Portfolio looks different on live vs local
- **Solution**: Clear browser cache and do a hard refresh (Ctrl+Shift+R)

**Issue**: Links not working
- **Solution**: Ensure all social links in `src/data/portfolio.ts` are correct

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs

---

**Your portfolio is production-ready! 🎉**

Once deployed, share it everywhere. Good luck with your career opportunities!
