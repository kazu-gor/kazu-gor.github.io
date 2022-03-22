# エラー時は停止
set -e

npm run build

npm run deploy
