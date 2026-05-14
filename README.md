# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


============================================

Whenever you make new changes to your code and want them to appear on the live website (bhagyaveda.in), the process is now super simple!

Here are the exact steps you need to follow every time:

Step 1: Deploy your changes
Once you are happy with your code changes, simply open your terminal in VS Code (making sure you are in the Bhagyaveda folder) and run:

# bash
# npm run deploy
# What this does: It automatically builds your latest code and pushes the updated files directly to the gh-pages branch, which updates the live website.

# Step 2: Wait a minute
# After the command finishes successfully, it usually takes GitHub Pages about 1 to 2 minutes to process the update.

# Step 3: Refresh the live site
# Go to your live website (https://bhagyaveda.in) and do a Hard Refresh to clear your browser cache and see the new changes:

Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
💡 Highly Recommended (Save your work!)
While npm run deploy updates the live site, it does not save your code changes to your main GitHub repository. To make sure you don't lose your work, you should also commit and push your code like you normally do:

# bash
# git add .
# git commit -m "Describe what changes you made"
# git push origin v1
# That's it! Just remember: npm run deploy is your magic button to update the live website.
