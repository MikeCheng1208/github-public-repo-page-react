# github-public-repo-page-react

 - 透過 `create-react-app` 起新專案
 - 使用 `React Hooks` 拆分邏輯及組件
 - 使用 `styled-components` 處理 `css` 樣式
 - 非同步的處理使用 `axios` 
 - 此專案覺得使用 `context` 比 `redux` 來的更適合，故此專案並沒有導入 `redux`

---

### Project setup
```
npm intall
```

### Compiles and hot-reloads for development
```
npm run start
```

### 專案結構
    |-- .gitignore,
    |-- package-lock.json,
    |-- package.json,
    |-- README.md,
    |-- public,
    |-- src,
        |-- App.js,
        |-- index.js,
        |-- api,                      // API 管理
        |   |-- github.js,
        |   |-- index.js,
        |-- assets,                   // 頁面上面用到的圖片與 icon
        |   |-- cancel-button.svg,
        |   |-- check-mark.svg,
        |   |-- edit.svg,
        |   |-- notFound.jpg,
        |   |-- star.svg,
        |-- components,               // 組件
        |   |-- Loading,              //  |-- loading 動畫
        |   |   |-- index.js,
        |   |-- ReposList,            //  |-- Repos 的列表卡片
        |   |   |-- index.js,
        |   |-- UserTitle,            //  |-- user的圖片跟搜尋框
        |       |-- index.js,
        |-- Context,                  // Context
        |   |-- index.js,
        |-- hooks,                    // Hooks
        |   |-- useScrollBottom.js,   //  |-- 偵測卷軸是否滑到最底
        |-- lib,                      // 自己寫的function
        |   |-- Debounce.js,
        |-- test,
            |-- App.test.js,
