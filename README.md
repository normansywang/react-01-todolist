# React App 01 - To do List

View the application via: https://normansywang.github.io/react-01-todolist/

## Functions
1. Input tasks to the to do list
2. Click the tasks to indicate completed
3. `New tasks` and `Completed` filter

## React App + GitHub Pages
This React App is deployed to GitHub Pages, here are some notes to deploy your React App to GitHub Pages:

1. Install `gh-pages` in your project:
```
npm install gh-pages --save-dev
```

2. Modify `package.json`
    - Add `homepage` property
    - Add deploy scripts in `scripts` property
```
{
  ...
  "homepage": "https://{github_username}.github.io/{repository_name}/",
  ...
}

```
   
```
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    ...
}
```

3. Commit and deploy
```
git add .
git commit -m "commit messages"
git push

npm run deploy
```

## Check you Raect app
1. Go to your GitHub Repository and check if the changes updated
2. Go to the `branches` and see if two branches exist
    - `main` branch: storing the source codes
    - `gh-pages` branch: the built React App
4. Browse the link in your `homepage` property to check the React App (**The page is usually available in minutes after deployment**)


