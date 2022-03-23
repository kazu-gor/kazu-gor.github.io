# エラー時は停止
set -e

cd ~/Programming/website/solid-portfolio-app


npm run build
npm run deploy

git add .
git commit -m "update: deployed"
git push
