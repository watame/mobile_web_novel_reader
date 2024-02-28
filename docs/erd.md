---
# https://vitepress.dev/reference/default-theme-config
layout: doc
title: DB仕様書
next: false
prev: false
---

# ER図

```mermaid
erDiagram
    Book {
        id INT "ID"
        ncode VARCHAR(255) "小説コード"
    }
    ReadHistory {
        id INT "ID"
        book_id INT "小説テーブル_ID"
        read_episode INT "既読した話数"
    }
    Follow {
        id INT "ID"
        book_id INT "小説テーブル_ID"
    }
    Book ||--o{ ReadHistory : "has"
    Book ||--o{ Follow : "has"
```

## Table定義
### Book(小説テーブル)
| 物理名 | 論理名 | PK/FK | NULL | データ型 |デフォルト| 備考|
| --- | --- | --- | --- | --- | --- | --- |
| id | ID | PK | FALSE | INT | ||
| ncode | 小説コード | | FALSE | VARCHAR(255) |||


### ReadHistory(既読テーブル)
| 物理名 | 論理名 | PK/FK | NULL | データ型 |デフォルト| 備考|
| --- | --- | --- | --- | --- | --- | --- |
| id | ID | PK | FALSE | INT | ||
| book_id | 小説テーブル_ID | FK | FALSE | INT | ||複合ユニーク|
| read_episode | 既読した話数 | | FALSE | INT | 0 |複合ユニーク|

### Follow(お気に入りテーブル)
| 物理名 | 論理名 | PK/FK | NULL | データ型 |デフォルト| 備考|
| --- | --- | --- | --- | --- | --- | --- |
| id | ID | PK | FALSE | INT | ||
| book_id | 小説テーブル_ID | FK | FALSE | INT | ||