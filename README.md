How to update my portfolio in github page

npm run build
cd dist
git init
git add .
git commit -m "Deploy build"
git branch -M gh-pages
git remote add origin https://github.com/Jaydee028/Portfolio.git
git push -f origin gh-pages
cd ..
