# babel-eslint-parser-error

This repository aims to reproduce the error: "Parsing error: Cannot read property 'push' of undefined"

### Steps to reproduce

*  Clone the project
*  Run the command: `npx eslint "packages/**" --debug`

### Debug logs

```
eslint:file-enumerator Yield: helmet.test.js +71ms
eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +71ms
eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +1ms
eslint:cli-engine Lint C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js +73ms
eslint:linter Linting code for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js (pass 1) +11ms
eslint:linter Verify +1ms
eslint:linter With ConfigArray: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js +0ms
eslint:linter Parsing error: Cannot read property 'push' of undefined
eslint:linter TypeError: Cannot read property 'push' of undefined
  at maybeParse (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-parser\lib\worker\maybeParse.cjs:24:19)
  at handleMessage (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-parser\lib\worker\index.cjs:31:16)
  at exports.maybeParse (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-parser\lib\client.cjs:9:41)
  at baseParse (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-parser\lib\index.cjs:47:7)
  at Object.exports.parseForESLint (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-parser\lib\index.cjs:63:15)
  at parse (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint\lib\linter\linter.js:655:22)
  at Linter._verifyWithoutProcessors (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint\lib\linter\linter.js:1129:33)
  at Linter._verifyWithoutProcessors (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-comments\lib\utils\patch.js:166:36)       
  at Linter._verifyWithConfigArray (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint\lib\linter\linter.js:1273:21)
  at Linter.verify (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint\lib\linter\linter.js:1228:25) +5ms
eslint:linter Generating fixed text for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js (pass 1) +5ms
eslint:source-code-fixer Applying fixes +22ms
eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +1ms
```
