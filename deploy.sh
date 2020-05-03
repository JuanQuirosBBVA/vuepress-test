#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
yarn docs:build

# navigate into the build output directory
cd dist
mkdir tutorial
cp -r ../docs/.vuepress/dist/* tutorial/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:JuanQuirosBBVA/JuanQuirosBBVA.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/jlquiroscass/CeliFormacion.git master:gh-pages

cd -