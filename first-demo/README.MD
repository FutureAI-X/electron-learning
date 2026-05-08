### 一 启动方式
```
npm run start
```

### 二 文件说明
```
package.json        NPM项目文件
package-lock.json   NPM项目文件
main_test.js        Electron 案例1 主进程文件
main.js             Electron 案例2 主进程文件
index.html          Electron 案例2 页面文件
```

### 三 案例说明
本目录提供了两个案例, 默认启动案例为 `Electron 渲染案例`
#### 3.1 Electron 启动案例
**启动方式**<br>
将 `package.json` 中的 `main` 参数值改为 `main_test.js`, 然后执行 `npm run start`

**相关文件**<br>
`main_test.js`

#### 3.2 Electron 渲染案例
**启动方式**<br>
将 `package.json` 中的 `main` 改为 `main.js`, 然后执行 `npm run start`

**相关文件**<br>
`main.js`、`index.html`