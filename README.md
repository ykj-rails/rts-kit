# React TypeScript Starterkit

## Node.js

- LTS を推奨
  - https://nodejs.org/ja/
- Node.js のバージョンは Volta で管理
  - https://volta.sh/

## TypeScript

- Node.js のバージョン毎に推奨される target があるため、node.green を確認する
- https://node.green/

### 思想

- 新しくコンポーネントを作るときに迷わないこと
- layout は毎回書く。
  - 例外的な構造に対処するため
  - レイアウト系はページごとに繰り返した方が柔軟

### Memo

- webpack ホットリロード効かない
- jest 入れたい
- GitHub actions 入れたい
- scaffolding -> Scaffdog 調べる
- children は React.ReactNode
- docs ディレクトリで内容ごとに README 作成してもよさそう
- suspence と errorboundary でラップする
- index.css に reset 書く

### 設計 Memo

- model や features ディレクトリ作成するか検討
  - 機能ごとに api や hooks を作成すること
- Provider と Routes 作成

### TODO

- eslint
  - import / order
