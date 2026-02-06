Image enhancement instructions

1. Save your original photo as `public/profile-original.jpg`.
   - Recommended: crop to square (1:1) and at least 800x800px.

2. Install the `sharp` package (only once):

```powershell
cd D:\Nextjs\my_portfolio
npm install sharp
```

3. Run the enhancer script:

```powershell
npm run enhance-image
```

This will create two files:
- `public/profile.jpg` (optimized jpeg)
- `public/profile.webp` (webp variant)

4. Commit and push the generated images to GitHub:

```powershell
git add public/profile.jpg public/profile.webp
git commit -m "Add enhanced profile images"
git push
```

Notes:
- If `sharp` fails to install on Windows due to missing build tools, try installing the prebuilt binaries or follow the sharp docs: https://sharp.pixelplumbing.com/install
- If you prefer, you can also upload `public/profile.jpg` directly to the repository via the GitHub web UI.
