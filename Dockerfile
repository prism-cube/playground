FROM node:16-bullseye-slim
# 作業ディレクトリを変更
WORKDIR /playground
# 依存パッケージインストール
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
# アプリケーションコード全体をコピー
COPY . .
# 3000ポートを公開
EXPOSE 3000
# コンテナ実行時に組み込みサーバを起動
CMD [ "yarn", "dev" ]