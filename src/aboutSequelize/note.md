### sequelize使用ts
1. 安装 TypeScript 和相关类型定义
npm install typescript @types/node @types/sequelize --save-dev

2. 初始化 TypeScript 配置文件
npx tsc --init

3. 修改tsconfig.json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
} 

4. 添加运行脚本
    "build": "tsc", // 将ts文件编译为js文件
    "start": "node dist/aboutSequelize/index.js", // 运行js文件

### 每次修改文件后，都要重新build再run start, 能否通过一个命令来解决
nodemon: 一个监视文件变化并自动重启应用的工具
--watch 'src/**/*.ts':
告诉 nodemon 监视哪些文件
src/**/*.ts 是一个 glob 模式
src/ 表示 src 目录
** 表示任意深度的子目录
*.ts 表示所有 .ts 文件
所以整体表示"监视 src 目录及其所有子目录下的所有 .ts 文件"
--exec 'ts-node':
当检测到文件变化时执行的命令
ts-node 是一个可以直接运行 TypeScript 文件的工具
不需要先编译成 JavaScript



