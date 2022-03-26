# エラー時は停止
set -e

cd ~/Programming/website/solid-portfolio-app


npm run build

mkdir dist/static
cd dist/static
echo www.kazu-gor.com > CNAME

npm run deploy

git add .
git commit -m "update: deployed"
git push
