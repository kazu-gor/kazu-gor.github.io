# エラー時は停止
set -e

echo Changing directory to solid-app...
cd ~/Programming/website/solid-portfolio-app

echo Building app...
npm run build

echo mkdir...
mkdir dist/static

echo cd dist/static...
cd dist/static

echo Creating CNAME and README...
echo www.kazu-gor.com > CNAME
echo ghPages > README.md

echo Deploying...
npm run deploy

echo Pushing to Git repo...
cd ~/Programming/website/solid-portfolio-app

git add .
git commit -m "update: deployed"
git push
