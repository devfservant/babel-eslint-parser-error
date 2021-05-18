# babel-eslint-parser-error

This repository aims to reproduce the error: "Parsing error: Cannot read property 'push' of undefined".

Related issue: https://github.com/babel/babel/issues/13331

### Steps to reproduce

*  Clone the project
*  Install the dependencies
*  Run the command: `npx eslint "packages/**" --debug`

### Debug logs

```
PS C:\Users\me\Workspace\babel-eslint-parser-error> npx eslint "packages/**" --debug
  eslint:cli CLI args: [ 'packages/**', '--debug' ] +0ms
  eslint:cli Running on files +11ms
  eslintrc:config-array-factory Loading .eslintignore file: C:\Users\me\Workspace\babel-eslint-parser-error\.eslintignore +0ms
  eslintrc:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/**/node_modules/*' ], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: false } ] +0ms
  eslintrc:ignore-pattern   processed: { basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', patterns: [ '/**/node_modules/*' ] } +3ms
  eslintrc:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/**/node_modules/*' ], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: false } ] +2ms
  eslintrc:ignore-pattern   processed: { basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', patterns: [ '/**/node_modules/*' ] } +1ms
  eslint:file-enumerator Start to iterate files: [ 'packages/**' ] +0ms
  eslint:file-enumerator Glob: C:\Users\me\Workspace\babel-eslint-parser-error\packages\** +2ms
  eslint:file-enumerator recursive? true +3ms
  eslint:file-enumerator Enter the directory: C:\Users\me\Workspace\babel-eslint-parser-error\packages +0ms
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages. +0ms
  eslintrc:cascading-config-array-factory No cache found: C:\Users\me\Workspace\babel-eslint-parser-error\packages. +1ms
  eslintrc:config-array-factory Config file not found on C:\Users\me\Workspace\babel-eslint-parser-error\packages +19ms
  eslintrc:cascading-config-array-factory No cache found: C:\Users\me\Workspace\babel-eslint-parser-error. +2ms
  eslintrc:config-array-factory Loading legacy config file: C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +3ms
  eslintrc:config-array-factory Config file found: C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +197ms
  eslintrc:config-array-factory Loading {extends:"standard"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +2ms
  eslintrc:config-array-factory Loaded: eslint-config-standard@16.0.2 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-standard\index.js) +8ms
  eslintrc:config-array-factory Loading JS config file: C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-standard\index.js +2ms
  eslintrc:config-array-factory Loading plugin "import" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-standard\index.js +11ms     
  eslintrc:config-array-factory Loaded: eslint-plugin-import@2.23.2 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-import\lib\index.js) +7ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-import\lib\index.js loaded in: 1421ms +1s
  eslintrc:config-array-factory Loading plugin "node" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-standard\index.js +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-node@11.1.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-node\lib\index.js) +6ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-node\lib\index.js loaded in: 1454ms +1s
  eslintrc:config-array-factory Loading plugin "promise" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-standard\index.js +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-promise@5.1.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js) +6ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js loaded in: 134ms +135ms
  eslintrc:config-array-factory Loading {extends:"eslint:recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loading JS config file: C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint\conf\eslint-recommended.js +0ms
  eslintrc:config-array-factory Loading {extends:"plugin:eslint-comments/recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +8ms   
  eslintrc:config-array-factory Loading plugin "eslint-comments" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +0ms
  eslintrc:config-array-factory Loaded: eslint-plugin-eslint-comments@3.2.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-comments\index.js) +4ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-comments\index.js loaded in: 98ms +98ms
  eslintrc:config-array-factory Loading plugin "eslint-comments" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-comments\index.js +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-eslint-comments@3.2.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-comments\index.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-comments\index.js loaded in: 0ms +1ms      
  eslintrc:config-array-factory Loading {extends:"plugin:eslint-plugin/recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +0ms     
  eslintrc:config-array-factory Loading plugin "eslint-plugin" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-eslint-plugin@2.3.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-plugin\lib\index.js) +3ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-plugin\lib\index.js loaded in: 102ms +103ms  eslintrc:config-array-factory Loading {extends:"plugin:jest/recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loading plugin "jest" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-jest@24.3.6 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-jest\lib\index.js) +3ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-jest\lib\index.js loaded in: 1386ms +1s
  eslintrc:config-array-factory Loading plugin "jest" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-jest\lib\index.js +0ms
  eslintrc:config-array-factory Loaded: eslint-plugin-jest@24.3.6 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-jest\lib\index.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-jest\lib\index.js loaded in: 0ms +1ms
  eslintrc:config-array-factory Loading {extends:"plugin:prettier/recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loading plugin "prettier" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-prettier@3.4.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js) +3ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js loaded in: 23ms +25ms
  eslintrc:config-array-factory Loading {extends:"prettier"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js +1ms
  eslintrc:config-array-factory Loaded: eslint-config-prettier@7.2.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-prettier\index.js) 
+5ms
  eslintrc:config-array-factory Loading JS config file: C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-prettier\index.js +1ms
  eslintrc:config-array-factory Loading plugin "prettier" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js +11ms
  eslintrc:config-array-factory Loaded: eslint-plugin-prettier@3.4.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js loaded in: 0ms 
+1ms
  eslintrc:config-array-factory Loading {extends:"plugin:promise/recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loading plugin "promise" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-promise@5.1.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js) +0ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js loaded in: 0ms +1ms
  eslintrc:config-array-factory Loading plugin "promise" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js +1ms      
  eslintrc:config-array-factory Loaded: eslint-plugin-promise@5.1.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js loaded in: 0ms +0ms
  eslintrc:config-array-factory Loading {extends:"plugin:react/recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loading plugin "react" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +3ms
  eslintrc:config-array-factory Loaded: eslint-plugin-react@7.23.2 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react\index.js) +8ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react\index.js loaded in: 1297ms +1s
  eslintrc:config-array-factory Loading plugin "react" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react\index.js +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-react@7.23.2 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react\index.js) +2ms 
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react\index.js loaded in: 0ms +0ms
  eslintrc:config-array-factory Loading {extends:"plugin:security/recommended"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loading plugin "security" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-security@1.4.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-security\index.js) 
+6ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-security\index.js loaded in: 165ms +166ms
  eslintrc:config-array-factory Loading plugin "security" from C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-security\index.js +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-security@1.4.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-security\index.js) 
+1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-security\index.js loaded in: 0ms +1ms
  eslintrc:config-array-factory Loading {extends:"prettier/react"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory package.json was not found: Cannot find module 'eslint-config-prettier/react/package.json'
Require stack:
- C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +4ms
  eslintrc:config-array-factory Loaded: eslint-config-prettier/react (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-prettier\react.js) 
+1ms
  eslintrc:config-array-factory Loading JS config file: C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-prettier\react.js +1ms
  eslintrc:config-array-factory Loading {extends:"prettier/standard"} relative to C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +7ms
  eslintrc:config-array-factory package.json was not found: Cannot find module 'eslint-config-prettier/standard/package.json'
Require stack:
- C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +4ms
  eslintrc:config-array-factory Loaded: eslint-config-prettier/standard (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-prettier\standard.js) +2ms
  eslintrc:config-array-factory Loading JS config file: C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-config-prettier\standard.js +1ms        
  eslintrc:config-array-factory Loading parser "@babel/eslint-parser" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +7ms
  eslintrc:config-array-factory Loaded: @babel/eslint-parser@7.14.3 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-parser\lib\index.cjs) +5ms
  eslintrc:config-array-factory Loading plugin "@babel" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +2s
  eslintrc:config-array-factory Loaded: @babel/eslint-plugin@7.13.16 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-plugin\lib\index.js) +7ms
  eslint:rules Loading rule 'accessor-pairs' (remaining=283) +0ms
  eslint:rules Loading rule 'array-bracket-newline' (remaining=282) +24ms
  eslint:rules Loading rule 'array-bracket-spacing' (remaining=281) +12ms
  eslint:rules Loading rule 'array-callback-return' (remaining=280) +11ms
  eslint:rules Loading rule 'array-element-newline' (remaining=279) +10ms
  eslint:rules Loading rule 'arrow-body-style' (remaining=278) +10ms
  eslint:rules Loading rule 'arrow-parens' (remaining=277) +9ms
  eslint:rules Loading rule 'arrow-spacing' (remaining=276) +8ms
  eslint:rules Loading rule 'block-scoped-var' (remaining=275) +9ms
  eslint:rules Loading rule 'block-spacing' (remaining=274) +9ms
  eslint:rules Loading rule 'brace-style' (remaining=273) +8ms
  eslint:rules Loading rule 'callback-return' (remaining=272) +9ms
  eslint:rules Loading rule 'camelcase' (remaining=271) +9ms
  eslint:rules Loading rule 'capitalized-comments' (remaining=270) +8ms
  eslint:rules Loading rule 'class-methods-use-this' (remaining=269) +14ms
  eslint:rules Loading rule 'comma-dangle' (remaining=268) +6ms
  eslint:rules Loading rule 'comma-spacing' (remaining=267) +6ms
  eslint:rules Loading rule 'comma-style' (remaining=266) +7ms
  eslint:rules Loading rule 'complexity' (remaining=265) +6ms
  eslint:rules Loading rule 'computed-property-spacing' (remaining=264) +7ms
  eslint:rules Loading rule 'consistent-return' (remaining=263) +10ms
  eslint:rules Loading rule 'consistent-this' (remaining=262) +11ms
  eslint:rules Loading rule 'constructor-super' (remaining=261) +13ms
  eslint:rules Loading rule 'curly' (remaining=260) +14ms
  eslint:rules Loading rule 'default-case' (remaining=259) +15ms
  eslint:rules Loading rule 'default-case-last' (remaining=258) +13ms
  eslint:rules Loading rule 'default-param-last' (remaining=257) +13ms
  eslint:rules Loading rule 'dot-location' (remaining=256) +9ms
  eslint:rules Loading rule 'dot-notation' (remaining=255) +12ms
  eslint:rules Loading rule 'eol-last' (remaining=254) +20ms
  eslint:rules Loading rule 'eqeqeq' (remaining=253) +11ms
  eslint:rules Loading rule 'for-direction' (remaining=252) +9ms
  eslint:rules Loading rule 'func-call-spacing' (remaining=251) +8ms
  eslint:rules Loading rule 'func-name-matching' (remaining=250) +9ms
  eslint:rules Loading rule 'func-names' (remaining=249) +8ms
  eslint:rules Loading rule 'func-style' (remaining=248) +6ms
  eslint:rules Loading rule 'function-call-argument-newline' (remaining=247) +10ms
  eslint:rules Loading rule 'function-paren-newline' (remaining=246) +6ms
  eslint:rules Loading rule 'generator-star-spacing' (remaining=245) +7ms
  eslint:rules Loading rule 'getter-return' (remaining=244) +6ms
  eslint:rules Loading rule 'global-require' (remaining=243) +7ms
  eslint:rules Loading rule 'grouped-accessor-pairs' (remaining=242) +6ms
  eslint:rules Loading rule 'guard-for-in' (remaining=241) +11ms
  eslint:rules Loading rule 'handle-callback-err' (remaining=240) +11ms
  eslint:rules Loading rule 'id-blacklist' (remaining=239) +11ms
  eslint:rules Loading rule 'id-denylist' (remaining=238) +11ms
  eslint:rules Loading rule 'id-length' (remaining=237) +11ms
  eslint:rules Loading rule 'id-match' (remaining=236) +12ms
  eslint:rules Loading rule 'implicit-arrow-linebreak' (remaining=235) +12ms
  eslint:rules Loading rule 'indent' (remaining=234) +11ms
  eslint:rules Loading rule 'indent-legacy' (remaining=233) +27ms
  eslint:rules Loading rule 'init-declarations' (remaining=232) +13ms
  eslint:rules Loading rule 'jsx-quotes' (remaining=231) +10ms
  eslint:rules Loading rule 'key-spacing' (remaining=230) +11ms
  eslint:rules Loading rule 'keyword-spacing' (remaining=229) +12ms
  eslint:rules Loading rule 'line-comment-position' (remaining=228) +12ms
  eslint:rules Loading rule 'linebreak-style' (remaining=227) +13ms
  eslint:rules Loading rule 'lines-around-comment' (remaining=226) +12ms
  eslint:rules Loading rule 'lines-around-directive' (remaining=225) +11ms
  eslint:rules Loading rule 'lines-between-class-members' (remaining=224) +11ms
  eslint:rules Loading rule 'max-classes-per-file' (remaining=223) +11ms
  eslint:rules Loading rule 'max-depth' (remaining=222) +10ms
  eslint:rules Loading rule 'max-len' (remaining=221) +11ms
  eslint:rules Loading rule 'max-lines' (remaining=220) +11ms
  eslint:rules Loading rule 'max-lines-per-function' (remaining=219) +12ms
  eslint:rules Loading rule 'max-nested-callbacks' (remaining=218) +11ms
  eslint:rules Loading rule 'max-params' (remaining=217) +11ms
  eslint:rules Loading rule 'max-statements' (remaining=216) +11ms
  eslint:rules Loading rule 'max-statements-per-line' (remaining=215) +12ms
  eslint:rules Loading rule 'multiline-comment-style' (remaining=214) +11ms
  eslint:rules Loading rule 'multiline-ternary' (remaining=213) +11ms
  eslint:rules Loading rule 'new-cap' (remaining=212) +11ms
  eslint:rules Loading rule 'new-parens' (remaining=211) +12ms
  eslint:rules Loading rule 'newline-after-var' (remaining=210) +10ms
  eslint:rules Loading rule 'newline-before-return' (remaining=209) +11ms
  eslint:rules Loading rule 'newline-per-chained-call' (remaining=208) +11ms
  eslint:rules Loading rule 'no-alert' (remaining=207) +11ms
  eslint:rules Loading rule 'no-array-constructor' (remaining=206) +10ms
  eslint:rules Loading rule 'no-async-promise-executor' (remaining=205) +11ms
  eslint:rules Loading rule 'no-await-in-loop' (remaining=204) +8ms
  eslint:rules Loading rule 'no-bitwise' (remaining=203) +9ms
  eslint:rules Loading rule 'no-buffer-constructor' (remaining=202) +8ms
  eslint:rules Loading rule 'no-caller' (remaining=201) +7ms
  eslint:rules Loading rule 'no-case-declarations' (remaining=200) +7ms
  eslint:rules Loading rule 'no-catch-shadow' (remaining=199) +7ms
  eslint:rules Loading rule 'no-class-assign' (remaining=198) +9ms
  eslint:rules Loading rule 'no-compare-neg-zero' (remaining=197) +6ms
  eslint:rules Loading rule 'no-cond-assign' (remaining=196) +10ms
  eslint:rules Loading rule 'no-confusing-arrow' (remaining=195) +7ms
  eslint:rules Loading rule 'no-console' (remaining=194) +10ms
  eslint:rules Loading rule 'no-const-assign' (remaining=193) +7ms
  eslint:rules Loading rule 'no-constant-condition' (remaining=192) +9ms
  eslint:rules Loading rule 'no-constructor-return' (remaining=191) +8ms
  eslint:rules Loading rule 'no-continue' (remaining=190) +9ms
  eslint:rules Loading rule 'no-control-regex' (remaining=189) +6ms
  eslint:rules Loading rule 'no-debugger' (remaining=188) +14ms
  eslint:rules Loading rule 'no-delete-var' (remaining=187) +10ms
  eslint:rules Loading rule 'no-div-regex' (remaining=186) +7ms
  eslint:rules Loading rule 'no-dupe-args' (remaining=185) +10ms
  eslint:rules Loading rule 'no-dupe-class-members' (remaining=184) +8ms
  eslint:rules Loading rule 'no-dupe-else-if' (remaining=183) +10ms
  eslint:rules Loading rule 'no-dupe-keys' (remaining=182) +8ms
  eslint:rules Loading rule 'no-duplicate-case' (remaining=181) +12ms
  eslint:rules Loading rule 'no-duplicate-imports' (remaining=180) +13ms
  eslint:rules Loading rule 'no-else-return' (remaining=179) +10ms
  eslint:rules Loading rule 'no-empty' (remaining=178) +21ms
  eslint:rules Loading rule 'no-empty-character-class' (remaining=177) +8ms
  eslint:rules Loading rule 'no-empty-function' (remaining=176) +10ms
  eslint:rules Loading rule 'no-empty-pattern' (remaining=175) +9ms
  eslint:rules Loading rule 'no-eq-null' (remaining=174) +10ms
  eslint:rules Loading rule 'no-eval' (remaining=173) +9ms
  eslint:rules Loading rule 'no-ex-assign' (remaining=172) +11ms
  eslint:rules Loading rule 'no-extend-native' (remaining=171) +9ms
  eslint:rules Loading rule 'no-extra-bind' (remaining=170) +29ms
  eslint:rules Loading rule 'no-extra-boolean-cast' (remaining=169) +11ms
  eslint:rules Loading rule 'no-extra-label' (remaining=168) +11ms
  eslint:rules Loading rule 'no-extra-parens' (remaining=167) +10ms
  eslint:rules Loading rule 'no-extra-semi' (remaining=166) +13ms
  eslint:rules Loading rule 'no-fallthrough' (remaining=165) +11ms
  eslint:rules Loading rule 'no-floating-decimal' (remaining=164) +10ms
  eslint:rules Loading rule 'no-func-assign' (remaining=163) +11ms
  eslint:rules Loading rule 'no-global-assign' (remaining=162) +12ms
  eslint:rules Loading rule 'no-implicit-coercion' (remaining=161) +10ms
  eslint:rules Loading rule 'no-implicit-globals' (remaining=160) +12ms
  eslint:rules Loading rule 'no-implied-eval' (remaining=159) +11ms
  eslint:rules Loading rule 'no-import-assign' (remaining=158) +11ms
  eslint:rules Loading rule 'no-inline-comments' (remaining=157) +11ms
  eslint:rules Loading rule 'no-inner-declarations' (remaining=156) +11ms
  eslint:rules Loading rule 'no-invalid-regexp' (remaining=155) +10ms
  eslint:rules Loading rule 'no-invalid-this' (remaining=154) +10ms
  eslint:rules Loading rule 'no-irregular-whitespace' (remaining=153) +8ms
  eslint:rules Loading rule 'no-iterator' (remaining=152) +9ms
  eslint:rules Loading rule 'no-label-var' (remaining=151) +7ms
  eslint:rules Loading rule 'no-labels' (remaining=150) +7ms
  eslint:rules Loading rule 'no-lone-blocks' (remaining=149) +7ms
  eslint:rules Loading rule 'no-lonely-if' (remaining=148) +8ms
  eslint:rules Loading rule 'no-loop-func' (remaining=147) +9ms
  eslint:rules Loading rule 'no-loss-of-precision' (remaining=146) +9ms
  eslint:rules Loading rule 'no-magic-numbers' (remaining=145) +10ms
  eslint:rules Loading rule 'no-misleading-character-class' (remaining=144) +12ms
  eslint:rules Loading rule 'no-mixed-operators' (remaining=143) +51ms
  eslint:rules Loading rule 'no-mixed-requires' (remaining=142) +9ms
  eslint:rules Loading rule 'no-mixed-spaces-and-tabs' (remaining=141) +9ms
  eslint:rules Loading rule 'no-multi-assign' (remaining=140) +9ms
  eslint:rules Loading rule 'no-multi-spaces' (remaining=139) +6ms
  eslint:rules Loading rule 'no-multi-str' (remaining=138) +8ms
  eslint:rules Loading rule 'no-multiple-empty-lines' (remaining=137) +9ms
  eslint:rules Loading rule 'no-native-reassign' (remaining=136) +9ms
  eslint:rules Loading rule 'no-negated-condition' (remaining=135) +10ms
  eslint:rules Loading rule 'no-negated-in-lhs' (remaining=134) +9ms
  eslint:rules Loading rule 'no-nested-ternary' (remaining=133) +10ms
  eslint:rules Loading rule 'no-new' (remaining=132) +10ms
  eslint:rules Loading rule 'no-new-func' (remaining=131) +11ms
  eslint:rules Loading rule 'no-new-object' (remaining=130) +9ms
  eslint:rules Loading rule 'no-new-require' (remaining=129) +10ms
  eslint:rules Loading rule 'no-new-symbol' (remaining=128) +9ms
  eslint:rules Loading rule 'no-new-wrappers' (remaining=127) +10ms
  eslint:rules Loading rule 'no-nonoctal-decimal-escape' (remaining=126) +9ms
  eslint:rules Loading rule 'no-obj-calls' (remaining=125) +10ms
  eslint:rules Loading rule 'no-octal' (remaining=124) +10ms
  eslint:rules Loading rule 'no-octal-escape' (remaining=123) +10ms
  eslint:rules Loading rule 'no-param-reassign' (remaining=122) +10ms
  eslint:rules Loading rule 'no-path-concat' (remaining=121) +11ms
  eslint:rules Loading rule 'no-plusplus' (remaining=120) +10ms
  eslint:rules Loading rule 'no-process-env' (remaining=119) +10ms
  eslint:rules Loading rule 'no-process-exit' (remaining=118) +10ms
  eslint:rules Loading rule 'no-promise-executor-return' (remaining=117) +11ms
  eslint:rules Loading rule 'no-proto' (remaining=116) +10ms
  eslint:rules Loading rule 'no-prototype-builtins' (remaining=115) +10ms
  eslint:rules Loading rule 'no-redeclare' (remaining=114) +12ms
  eslint:rules Loading rule 'no-regex-spaces' (remaining=113) +9ms
  eslint:rules Loading rule 'no-restricted-exports' (remaining=112) +8ms
  eslint:rules Loading rule 'no-restricted-globals' (remaining=111) +10ms
  eslint:rules Loading rule 'no-restricted-imports' (remaining=110) +11ms
  eslint:rules Loading rule 'no-restricted-modules' (remaining=109) +17ms
  eslint:rules Loading rule 'no-restricted-properties' (remaining=108) +9ms
  eslint:rules Loading rule 'no-restricted-syntax' (remaining=107) +7ms
  eslint:rules Loading rule 'no-return-assign' (remaining=106) +8ms
  eslint:rules Loading rule 'no-return-await' (remaining=105) +6ms
  eslint:rules Loading rule 'no-script-url' (remaining=104) +7ms
  eslint:rules Loading rule 'no-self-assign' (remaining=103) +7ms
  eslint:rules Loading rule 'no-self-compare' (remaining=102) +12ms
  eslint:rules Loading rule 'no-sequences' (remaining=101) +9ms
  eslint:rules Loading rule 'no-setter-return' (remaining=100) +12ms
  eslint:rules Loading rule 'no-shadow' (remaining=99) +13ms
  eslint:rules Loading rule 'no-shadow-restricted-names' (remaining=98) +18ms
  eslint:rules Loading rule 'no-spaced-func' (remaining=97) +11ms
  eslint:rules Loading rule 'no-sparse-arrays' (remaining=96) +12ms
  eslint:rules Loading rule 'no-sync' (remaining=95) +13ms
  eslint:rules Loading rule 'no-tabs' (remaining=94) +13ms
  eslint:rules Loading rule 'no-template-curly-in-string' (remaining=93) +12ms
  eslint:rules Loading rule 'no-ternary' (remaining=92) +11ms
  eslint:rules Loading rule 'no-this-before-super' (remaining=91) +10ms
  eslint:rules Loading rule 'no-throw-literal' (remaining=90) +8ms
  eslint:rules Loading rule 'no-trailing-spaces' (remaining=89) +8ms
  eslint:rules Loading rule 'no-undef' (remaining=88) +8ms
  eslint:rules Loading rule 'no-undef-init' (remaining=87) +12ms
  eslint:rules Loading rule 'no-undefined' (remaining=86) +11ms
  eslint:rules Loading rule 'no-underscore-dangle' (remaining=85) +13ms
  eslint:rules Loading rule 'no-unexpected-multiline' (remaining=84) +12ms
  eslint:rules Loading rule 'no-unmodified-loop-condition' (remaining=83) +11ms
  eslint:rules Loading rule 'no-unneeded-ternary' (remaining=82) +11ms
  eslint:rules Loading rule 'no-unreachable' (remaining=81) +12ms
  eslint:rules Loading rule 'no-unreachable-loop' (remaining=80) +12ms
  eslint:rules Loading rule 'no-unsafe-finally' (remaining=79) +11ms
  eslint:rules Loading rule 'no-unsafe-negation' (remaining=78) +12ms
  eslint:rules Loading rule 'no-unsafe-optional-chaining' (remaining=77) +12ms
  eslint:rules Loading rule 'no-unused-expressions' (remaining=76) +11ms
  eslint:rules Loading rule 'no-unused-labels' (remaining=75) +11ms
  eslint:rules Loading rule 'no-unused-vars' (remaining=74) +12ms
  eslint:rules Loading rule 'no-use-before-define' (remaining=73) +12ms
  eslint:rules Loading rule 'no-useless-backreference' (remaining=72) +11ms
  eslint:rules Loading rule 'no-useless-call' (remaining=71) +10ms
  eslint:rules Loading rule 'no-useless-catch' (remaining=70) +10ms
  eslint:rules Loading rule 'no-useless-computed-key' (remaining=69) +10ms
  eslint:rules Loading rule 'no-useless-concat' (remaining=68) +10ms
  eslint:rules Loading rule 'no-useless-constructor' (remaining=67) +10ms
  eslint:rules Loading rule 'no-useless-escape' (remaining=66) +10ms
  eslint:rules Loading rule 'no-useless-rename' (remaining=65) +11ms
  eslint:rules Loading rule 'no-useless-return' (remaining=64) +8ms
  eslint:rules Loading rule 'no-var' (remaining=63) +12ms
  eslint:rules Loading rule 'no-void' (remaining=62) +11ms
  eslint:rules Loading rule 'no-warning-comments' (remaining=61) +8ms
  eslint:rules Loading rule 'no-whitespace-before-property' (remaining=60) +8ms
  eslint:rules Loading rule 'no-with' (remaining=59) +10ms
  eslint:rules Loading rule 'nonblock-statement-body-position' (remaining=58) +10ms
  eslint:rules Loading rule 'object-curly-newline' (remaining=57) +11ms
  eslint:rules Loading rule 'object-curly-spacing' (remaining=56) +9ms
  eslint:rules Loading rule 'object-property-newline' (remaining=55) +9ms
  eslint:rules Loading rule 'object-shorthand' (remaining=54) +7ms
  eslint:rules Loading rule 'one-var' (remaining=53) +10ms
  eslint:rules Loading rule 'one-var-declaration-per-line' (remaining=52) +7ms
  eslint:rules Loading rule 'operator-assignment' (remaining=51) +8ms
  eslint:rules Loading rule 'operator-linebreak' (remaining=50) +11ms
  eslint:rules Loading rule 'padded-blocks' (remaining=49) +11ms
  eslint:rules Loading rule 'padding-line-between-statements' (remaining=48) +11ms
  eslint:rules Loading rule 'prefer-arrow-callback' (remaining=47) +13ms
  eslint:rules Loading rule 'prefer-const' (remaining=46) +11ms
  eslint:rules Loading rule 'prefer-destructuring' (remaining=45) +9ms
  eslint:rules Loading rule 'prefer-exponentiation-operator' (remaining=44) +10ms
  eslint:rules Loading rule 'prefer-named-capture-group' (remaining=43) +9ms
  eslint:rules Loading rule 'prefer-numeric-literals' (remaining=42) +9ms
  eslint:rules Loading rule 'prefer-object-spread' (remaining=41) +11ms
  eslint:rules Loading rule 'prefer-promise-reject-errors' (remaining=40) +10ms
  eslint:rules Loading rule 'prefer-reflect' (remaining=39) +12ms
  eslint:rules Loading rule 'prefer-regex-literals' (remaining=38) +12ms
  eslint:rules Loading rule 'prefer-rest-params' (remaining=37) +10ms
  eslint:rules Loading rule 'prefer-spread' (remaining=36) +11ms
  eslint:rules Loading rule 'prefer-template' (remaining=35) +10ms
  eslint:rules Loading rule 'quote-props' (remaining=34) +9ms
  eslint:rules Loading rule 'quotes' (remaining=33) +10ms
  eslint:rules Loading rule 'radix' (remaining=32) +9ms
  eslint:rules Loading rule 'require-atomic-updates' (remaining=31) +9ms
  eslint:rules Loading rule 'require-await' (remaining=30) +8ms
  eslint:rules Loading rule 'require-jsdoc' (remaining=29) +10ms
  eslint:rules Loading rule 'require-unicode-regexp' (remaining=28) +10ms
  eslint:rules Loading rule 'require-yield' (remaining=27) +11ms
  eslint:rules Loading rule 'rest-spread-spacing' (remaining=26) +11ms
  eslint:rules Loading rule 'semi' (remaining=25) +10ms
  eslint:rules Loading rule 'semi-spacing' (remaining=24) +11ms
  eslint:rules Loading rule 'semi-style' (remaining=23) +11ms
  eslint:rules Loading rule 'sort-imports' (remaining=22) +10ms
  eslint:rules Loading rule 'sort-keys' (remaining=21) +10ms
  eslint:rules Loading rule 'sort-vars' (remaining=20) +21ms
  eslint:rules Loading rule 'space-before-blocks' (remaining=19) +11ms
  eslint:rules Loading rule 'space-before-function-paren' (remaining=18) +11ms
  eslint:rules Loading rule 'space-in-parens' (remaining=17) +10ms
  eslint:rules Loading rule 'space-infix-ops' (remaining=16) +11ms
  eslint:rules Loading rule 'space-unary-ops' (remaining=15) +10ms
  eslint:rules Loading rule 'spaced-comment' (remaining=14) +10ms
  eslint:rules Loading rule 'strict' (remaining=13) +11ms
  eslint:rules Loading rule 'switch-colon-spacing' (remaining=12) +10ms
  eslint:rules Loading rule 'symbol-description' (remaining=11) +10ms
  eslint:rules Loading rule 'template-curly-spacing' (remaining=10) +10ms
  eslint:rules Loading rule 'template-tag-spacing' (remaining=9) +10ms
  eslint:rules Loading rule 'unicode-bom' (remaining=8) +10ms
  eslint:rules Loading rule 'use-isnan' (remaining=7) +10ms
  eslint:rules Loading rule 'valid-jsdoc' (remaining=6) +10ms
  eslint:rules Loading rule 'valid-typeof' (remaining=5) +36ms
  eslint:rules Loading rule 'vars-on-top' (remaining=4) +10ms
  eslint:rules Loading rule 'wrap-iife' (remaining=3) +10ms
  eslint:rules Loading rule 'wrap-regex' (remaining=2) +10ms
  eslint:rules Loading rule 'yield-star-spacing' (remaining=1) +10ms
  eslint:rules Loading rule 'yoda' (remaining=0) +11ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\@babel\eslint-plugin\lib\index.js loaded in: 3058ms +3s
  eslintrc:config-array-factory Loading plugin "eslint-plugin" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-eslint-plugin@2.3.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-plugin\lib\index.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-eslint-plugin\lib\index.js loaded in: 0ms +1ms    
  eslintrc:config-array-factory Loading plugin "jest" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-jest@24.3.6 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-jest\lib\index.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-jest\lib\index.js loaded in: 0ms +1ms
  eslintrc:config-array-factory Loading plugin "json" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-json@2.1.2 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-json\src\index.js) +7ms  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-json\src\index.js loaded in: 455ms +456ms
  eslintrc:config-array-factory Loading plugin "prettier" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-prettier@3.4.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js loaded in: 0ms 
+2ms
  eslintrc:config-array-factory Loading plugin "promise" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-promise@5.1.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js) +1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-promise\index.js loaded in: 0ms +1ms
  eslintrc:config-array-factory Loading plugin "react" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-react@7.23.2 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react\index.js) +1ms 
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react\index.js loaded in: 0ms +1ms
  eslintrc:config-array-factory Loading plugin "react-hooks" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-react-hooks@4.2.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react-hooks\index.js) +6ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-react-hooks\index.js loaded in: 15ms +16ms
  eslintrc:config-array-factory Loading plugin "security" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-security@1.4.0 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-security\index.js) 
+1ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-security\index.js loaded in: 0ms +1ms
  eslintrc:config-array-factory Loading plugin "xss" from C:\Users\me\Workspace\babel-eslint-parser-error\.eslintrc +1ms
  eslintrc:config-array-factory Loaded: eslint-plugin-xss@0.1.10 (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-xss\lib\index.js) +6ms
  eslintrc:config-array-factory Plugin C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint-plugin-xss\lib\index.js loaded in: 49ms +50ms
  eslintrc:cascading-config-array-factory No cache found: C:\Users\me\Workspace. +12s
  eslintrc:config-array-factory Config file not found on C:\Users\me\Workspace +4ms
  eslintrc:cascading-config-array-factory No cache found: C:\Users\me. +2ms
  eslintrc:cascading-config-array-factory Stop traversing because of considered root. +1ms
  eslintrc:cascading-config-array-factory Configuration was determined: ConfigArray(18) [ { type: 'config', name: 'DefaultIgnorePattern', filePath: '', criteria: null, env: undefined, globals: undefined, ignorePattern: IgnorePattern { patterns: [Array], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: false }, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: undefined, settings: undefined }, { type: 'config', name: '.eslintrc » eslint-config-standard', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-config-standard\\index.js', criteria: null, env: { es2021: true, node: true }, globals: { document: 'readonly', navigator: 'readonly', window: 'readonly' }, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: { ecmaVersion: 2021, ecmaFeatures: [Object], sourceType: 'module' }, plugins: { import: [Object], node: [Object], promise: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'no-var': 'warn', 'accessor-pairs': [Array], 'array-bracket-spacing': [Array], 'array-callback-return': [Array], 'arrow-spacing': [Array], 'block-spacing': [Array], 'brace-style': [Array], camelcase: [Array], 'comma-dangle': [Array], 'comma-spacing': [Array], 'comma-style': [Array], 'computed-property-spacing': [Array], 'constructor-super': 'error', curly: [Array], 'default-case-last': 'error', 'dot-location': [Array], 'dot-notation': [Array], 'eol-last': 'error', eqeqeq: [Array], 'func-call-spacing': [Array], 'generator-star-spacing': [Array], indent: [Array], 'key-spacing': [Array], 'keyword-spacing': [Array], 'lines-between-class-members': [Array], 'multiline-ternary': [Array], 'new-cap': [Array], 'new-parens': 'error', 'no-array-constructor': 'error', 'no-async-promise-executor': 'error', 'no-caller': 'error', 'no-case-declarations': 'error', 'no-class-assign': 'error', 'no-compare-neg-zero': 'error', 'no-cond-assign': 'error', 'no-const-assign': 'error', 'no-constant-condition': [Array], 'no-control-regex': 'error', 'no-debugger': 'error', 'no-delete-var': 'error', 'no-dupe-args': 'error', 'no-dupe-class-members': 'error', 'no-dupe-keys': 'error', 'no-duplicate-case': 'error', 'no-useless-backreference': 'error', 'no-empty': [Array], 'no-empty-character-class': 'error', 'no-empty-pattern': 'error', 'no-eval': 'error', 'no-ex-assign': 'error', 'no-extend-native': 'error', 'no-extra-bind': 'error', 'no-extra-boolean-cast': 'error', 'no-extra-parens': [Array], 'no-fallthrough': 'error', 'no-floating-decimal': 'error', 'no-func-assign': 'error', 'no-global-assign': 'error', 'no-implied-eval': 'error', 'no-import-assign': 'error', 'no-invalid-regexp': 'error', 'no-irregular-whitespace': 'error', 'no-iterator': 'error', 'no-labels': [Array], 'no-lone-blocks': 'error', 'no-loss-of-precision': 'error', 'no-misleading-character-class': 'error', 'no-prototype-builtins': 'error', 'no-useless-catch': 'error', 'no-mixed-operators': [Array], 'no-mixed-spaces-and-tabs': 'error', 'no-multi-spaces': 'error', 'no-multi-str': 'error', 'no-multiple-empty-lines': [Array], 'no-new': 'error', 'no-new-func': 'error', 'no-new-object': 'error', 'no-new-symbol': 'error', 'no-new-wrappers': 'error', 'no-obj-calls': 'error', 'no-octal': 'error', 'no-octal-escape': 'error', 'no-proto': 'error', 'no-redeclare': [Array], 'no-regex-spaces': 'error', 'no-return-assign': [Array], 'no-self-assign': [Array], 'no-self-compare': 'error', 'no-sequences': 'error', 'no-shadow-restricted-names': 'error', 'no-sparse-arrays': 'error', 'no-tabs': 'error', 'no-template-curly-in-string': 'error', 'no-this-before-super': 'error', 'no-throw-literal': 'error', 'no-trailing-spaces': 'error', 'no-undef': 'error', 'no-undef-init': 'error', 'no-unexpected-multiline': 'error', 'no-unmodified-loop-condition': 'error', 'no-unneeded-ternary': [Array], 'no-unreachable': 'error', 'no-unreachable-loop': 'error', 'no-unsafe-finally': 'error', 'no-unsafe-negation': 'error', 'no-unused-expressions': [Array], 'no-unused-vars': [Array], 'no-use-before-define': [Array], 'no-useless-call': 'error', 'no-useless-computed-key': 'error', 'no-useless-constructor': 'error', 'no-useless-escape': 'error', 'no-useless-rename': 'error', 'no-useless-return': 'error', 'no-void': 'error', 'no-whitespace-before-property': 'error', 'no-with': 'error', 'object-curly-newline': [Array], 'object-curly-spacing': [Array], 'object-property-newline': [Array], 'one-var': [Array], 'operator-linebreak': [Array], 'padded-blocks': [Array], 'prefer-const': [Array], 'prefer-promise-reject-errors': 'error', 'prefer-regex-literals': [Array], 'quote-props': [Array], quotes: [Array], 'rest-spread-spacing': [Array], semi: [Array], 'semi-spacing': [Array], 'space-before-blocks': [Array], 'space-before-function-paren': [Array], 'space-in-parens': [Array], 'space-infix-ops': 'error', 'space-unary-ops': [Array], 'spaced-comment': [Array], 'symbol-description': 'error', 'template-curly-spacing': [Array], 'template-tag-spacing': [Array], 'unicode-bom': [Array], 'use-isnan': [Array], 'valid-typeof': [Array], 'wrap-iife': [Array], 'yield-star-spacing': [Array], yoda: [Array], 'import/export': 'error', 'import/first': 'error', 'import/no-absolute-path': [Array], 'import/no-duplicates': 'error', 'import/no-named-default': 'error', 'import/no-webpack-loader-syntax': 'error', 'node/handle-callback-err': [Array], 'node/no-callback-literal': 'error', 'node/no-deprecated-api': 'error', 'node/no-exports-assign': 'error', 'node/no-new-require': 'error', 'node/no-path-concat': 'error', 'node/process-exit-as-throw': 'error', 'promise/param-names': 'error' }, settings: undefined }, { type: 'config', name: '.eslintrc » eslint:recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint\\conf\\eslint-recommended.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'constructor-super': 'error', 'for-direction': 'error', 'getter-return': 'error', 'no-async-promise-executor': 'error', 'no-case-declarations': 'error', 'no-class-assign': 'error', 'no-compare-neg-zero': 'error', 'no-cond-assign': 'error', 'no-const-assign': 'error', 'no-constant-condition': 
'error', 'no-control-regex': 'error', 'no-debugger': 'error', 'no-delete-var': 'error', 'no-dupe-args': 'error', 'no-dupe-class-members': 'error', 'no-dupe-else-if': 'error', 'no-dupe-keys': 'error', 'no-duplicate-case': 'error', 'no-empty': 'error', 'no-empty-character-class': 'error', 'no-empty-pattern': 'error', 'no-ex-assign': 'error', 'no-extra-boolean-cast': 'error', 'no-extra-semi': 'error', 'no-fallthrough': 'error', 'no-func-assign': 'error', 'no-global-assign': 'error', 'no-import-assign': 'error', 'no-inner-declarations': 'error', 'no-invalid-regexp': 'error', 'no-irregular-whitespace': 'error', 'no-misleading-character-class': 'error', 'no-mixed-spaces-and-tabs': 'error', 'no-new-symbol': 'error', 'no-obj-calls': 'error', 'no-octal': 'error', 'no-prototype-builtins': 'error', 'no-redeclare': 'error', 'no-regex-spaces': 'error', 'no-self-assign': 'error', 'no-setter-return': 'error', 'no-shadow-restricted-names': 'error', 'no-sparse-arrays': 'error', 'no-this-before-super': 'error', 'no-undef': 'error', 'no-unexpected-multiline': 'error', 'no-unreachable': 'error', 'no-unsafe-finally': 'error', 'no-unsafe-negation': 'error', 'no-unused-labels': 'error', 'no-unused-vars': 'error', 'no-useless-catch': 'error', 'no-useless-escape': 'error', 'no-with': 'error', 'require-yield': 'error', 'use-isnan': 'error', 'valid-typeof': 'error' }, settings: undefined }, { type: 'config', name: '.eslintrc » 
plugin:eslint-comments/recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-eslint-comments\\index.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: { 'eslint-comments': [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'eslint-comments/disable-enable-pair': 'error', 'eslint-comments/no-aggregating-enable': 'error', 'eslint-comments/no-duplicate-disable': 'error', 'eslint-comments/no-unlimited-disable': 'error', 'eslint-comments/no-unused-enable': 'error' }, settings: undefined }, { type: 'config', name: '.eslintrc » plugin:eslint-plugin/recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-eslint-plugin\\lib\\index.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'eslint-plugin/fixer-return': 'error', 'eslint-plugin/no-deprecated-report-api': 'error', 'eslint-plugin/no-identical-tests': 'error', 'eslint-plugin/no-missing-placeholders': 'error', 'eslint-plugin/no-unused-placeholders': 'error', 'eslint-plugin/no-useless-token-range': 'error', 'eslint-plugin/require-meta-fixable': 'error' }, settings: undefined }, { type: 'implicit-processor', name: '.eslintrc » plugin:jest/recommended#processors["jest/.snap"]', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-jest\\lib\\index.js', criteria: { includes: [Array], excludes: null, basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error' }, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: 'jest/.snap', reportUnusedDisableDirectives: undefined, root: undefined, rules: undefined, settings: undefined }, { type: 'config', name: '.eslintrc » plugin:jest/recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-jest\\lib\\index.js', criteria: null, env: { 'jest/globals': true }, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: { jest: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'jest/expect-expect': 'warn', 'jest/no-commented-out-tests': 'warn', 'jest/no-conditional-expect': 'error', 'jest/no-deprecated-functions': 'error', 'jest/no-disabled-tests': 'warn', 'jest/no-done-callback': 'error', 'jest/no-export': 'error', 'jest/no-focused-tests': 'error', 'jest/no-identical-title': 'error', 'jest/no-interpolation-in-snapshots': 'error', 'jest/no-jasmine-globals': 'error', 'jest/no-jest-import': 'error', 'jest/no-mocks-import': 'error', 'jest/no-standalone-expect': 'error', 'jest/no-test-prefixes': 'error', 'jest/no-try-expect': 'error', 'jest/valid-describe': 'error', 'jest/valid-expect-in-promise': 'error', 'jest/valid-expect': 'error', 'jest/valid-title': 'error' }, settings: undefined }, { type: 'config', name: '.eslintrc » plugin:prettier/recommended » eslint-config-prettier', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-config-prettier\\index.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { curly: 0, 'lines-around-comment': 0, 'max-len': 0, 'no-confusing-arrow': 0, 'no-mixed-operators': 0, 'no-tabs': 0, 'no-unexpected-multiline': 0, quotes: 0, 'array-bracket-newline': 'off', 'array-bracket-spacing': 'off', 'array-element-newline': 'off', 'arrow-parens': 'off', 'arrow-spacing': 'off', 'block-spacing': 'off', 'brace-style': 'off', 'comma-dangle': 'off', 'comma-spacing': 'off', 'comma-style': 'off', 'computed-property-spacing': 'off', 'dot-location': 'off', 'eol-last': 'off', 'func-call-spacing': 'off', 'function-call-argument-newline': 'off', 'function-paren-newline': 'off', 'generator-star': 'off', 'generator-star-spacing': 'off', 'implicit-arrow-linebreak': 'off', indent: 'off', 'jsx-quotes': 'off', 'key-spacing': 'off', 'keyword-spacing': 'off', 'linebreak-style': 'off', 'multiline-ternary': 'off', 'newline-per-chained-call': 'off', 'new-parens': 'off', 'no-arrow-condition': 'off', 'no-comma-dangle': 'off', 'no-extra-parens': 'off', 'no-extra-semi': 'off', 'no-floating-decimal': 'off', 'no-mixed-spaces-and-tabs': 'off', 'no-multi-spaces': 'off', 'no-multiple-empty-lines': 'off', 'no-reserved-keys': 'off', 'no-space-before-semi': 'off', 'no-trailing-spaces': 'off', 'no-whitespace-before-property': 'off', 'no-wrap-func': 'off', 'nonblock-statement-body-position': 'off', 'object-curly-newline': 'off', 'object-curly-spacing': 'off', 'object-property-newline': 'off', 'one-var-declaration-per-line': 'off', 'operator-linebreak': 'off', 'padded-blocks': 'off', 'quote-props': 'off', 'rest-spread-spacing': 'off', semi: 'off', 'semi-spacing': 'off', 'semi-style': 'off', 'space-after-function-name': 'off', 'space-after-keywords': 'off', 'space-before-blocks': 'off', 'space-before-function-paren': 'off', 'space-before-function-parentheses': 'off', 'space-before-keywords': 'off', 'space-in-brackets': 'off', 'space-in-parens': 'off', 'space-infix-ops': 'off', 'space-return-throw-case': 'off', 'space-unary-ops': 'off', 'space-unary-word-ops': 'off', 'switch-colon-spacing': 'off', 'template-curly-spacing': 'off', 'template-tag-spacing': 'off', 'unicode-bom': 'off', 'wrap-iife': 'off', 'wrap-regex': 'off', 'yield-star-spacing': 'off', 'indent-legacy': 'off', 'no-spaced-func': 'off' }, settings: undefined }, { type: 'config', name: '.eslintrc » plugin:prettier/recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-prettier\\eslint-plugin-prettier.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: { prettier: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'prettier/prettier': 'error', 'arrow-body-style': 'off', 'prefer-arrow-callback': 'off' }, settings: undefined }, { type: 'config', name: '.eslintrc » plugin:promise/recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-promise\\index.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: { promise: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'promise/always-return': 'error', 'promise/no-return-wrap': 'error', 'promise/param-names': 'error', 'promise/catch-or-return': 'error', 'promise/no-native': 'off', 'promise/no-nesting': 'warn', 'promise/no-promise-in-callback': 'warn', 'promise/no-callback-in-promise': 'warn', 'promise/avoid-new': 'off', 'promise/no-new-statics': 'error', 'promise/no-return-in-finally': 'warn', 'promise/valid-params': 'warn' }, settings: undefined }, { type: 'config', name: '.eslintrc » plugin:react/recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-react\\index.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: { ecmaFeatures: [Object] }, plugins: { react: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'react/display-name': 2, 'react/jsx-key': 2, 'react/jsx-no-comment-textnodes': 2, 'react/jsx-no-duplicate-props': 
2, 'react/jsx-no-target-blank': 2, 'react/jsx-no-undef': 2, 'react/jsx-uses-react': 2, 'react/jsx-uses-vars': 2, 'react/no-children-prop': 2, 'react/no-danger-with-children': 2, 
'react/no-deprecated': 2, 'react/no-direct-mutation-state': 2, 'react/no-find-dom-node': 2, 'react/no-is-mounted': 2, 'react/no-render-return-value': 2, 'react/no-string-refs': 2, 'react/no-unescaped-entities': 2, 'react/no-unknown-property': 2, 'react/no-unsafe': 0, 'react/prop-types': 2, 'react/react-in-jsx-scope': 2, 'react/require-render-return': 2 }, settings: undefined }, { type: 'config', name: '.eslintrc » plugin:security/recommended', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-plugin-security\\index.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: { security: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'security/detect-buffer-noassert': 'warn', 'security/detect-child-process': 'warn', 'security/detect-disable-mustache-escape': 'warn', 'security/detect-eval-with-expression': 'warn', 'security/detect-new-buffer': 'warn', 'security/detect-no-csrf-before-method-override': 'warn', 'security/detect-non-literal-fs-filename': 'warn', 'security/detect-non-literal-regexp': 'warn', 'security/detect-non-literal-require': 'warn', 'security/detect-object-injection': 'warn', 'security/detect-possible-timing-attacks': 'warn', 'security/detect-pseudoRandomBytes': 'warn', 'security/detect-unsafe-regex': 'warn' }, settings: undefined }, { type: 'config', name: '.eslintrc » eslint-config-prettier/react', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-config-prettier\\react.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'react/jsx-child-element-spacing': 'off', 'react/jsx-closing-bracket-location': 'off', 'react/jsx-closing-tag-location': 'off', 'react/jsx-curly-newline': 'off', 'react/jsx-curly-spacing': 'off', 'react/jsx-equals-spacing': 'off', 'react/jsx-first-prop-new-line': 'off', 'react/jsx-indent': 'off', 'react/jsx-indent-props': 'off', 'react/jsx-max-props-per-line': 'off', 'react/jsx-newline': 'off', 'react/jsx-one-expression-per-line': 'off', 'react/jsx-props-no-multi-spaces': 'off', 'react/jsx-tag-spacing': 'off', 'react/jsx-wrap-multilines': 'off', 'react/jsx-space-before-closing': 'off' }, settings: undefined }, { type: 'config', name: '.eslintrc » eslint-config-prettier/standard', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\eslint-config-prettier\\standard.js', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { 'standard/array-bracket-even-spacing': 'off', 'standard/computed-property-even-spacing': 'off', 'standard/object-curly-even-spacing': 'off' }, settings: undefined }, { type: 'implicit-processor', name: '.eslintrc#processors["jest/.snap"]', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\.eslintrc', criteria: { includes: [Array], excludes: null, basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error' }, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: 'jest/.snap', reportUnusedDisableDirectives: undefined, root: undefined, rules: undefined, settings: undefined }, { type: 'implicit-processor', name: '.eslintrc#processors["json/.json"]', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\.eslintrc', criteria: { includes: [Array], excludes: null, basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error' }, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: 'json/.json', reportUnusedDisableDirectives: undefined, root: undefined, rules: undefined, settings: undefined }, { type: 'config', name: '.eslintrc', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\.eslintrc', criteria: null, env: { es6: true, browser: true, jest: true, 'jest/globals': true }, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: { error: null, filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\node_modules\\@babel\\eslint-parser\\lib\\index.cjs', id: '@babel/eslint-parser', importerName: '.eslintrc', importerPath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\.eslintrc' }, parserOptions: { babelOptions: [Object] }, plugins: { '@babel': [Object], 'eslint-plugin': [Object], jest: [Object], json: [Object], prettier: [Object], promise: [Object], react: [Object], 'react-hooks': [Object], security: [Object], xss: [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { '@babel/new-cap': 'error', '@babel/no-invalid-this': 'error', 'prettier/prettier': 'off', 
'promise/catch-or-return': [Array], 'react-hooks/exhaustive-deps': 'warn', 'react-hooks/rules-of-hooks': 'error', 'react/display-name': 'off', 'react/jsx-uses-react': 'error', 'react/jsx-uses-vars': 'error', 'react/prop-types': 'off', 'security/detect-non-literal-regexp': 'off', 'security/detect-object-injection': 'off', 'xss/no-location-href-assign': 'error', 'xss/no-mixed-html': 'error' }, settings: { react: [Object] } }, { type: 'ignore', name: '.eslintignore', filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\.eslintignore', criteria: null, env: undefined, globals: undefined, ignorePattern: IgnorePattern { patterns: [Array], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: true }, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: undefined, settings: undefined } ] on C:\Users\me\Workspace\babel-eslint-parser-error\packages +243ms
  eslintrc:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/**/node_modules/*' ], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: false }, IgnorePattern { patterns: [ 'node_modules/', 'build/', 'dist/', '.cache/' ], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: true 
} ] +12s
  eslintrc:ignore-pattern   processed: { basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', patterns: [ '/**/node_modules/*', 'node_modules/', 'build/', 'dist/', '.cache/' ] } +4ms
  eslintrc:ignore-pattern Check {
  filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\packages\\middlewares\\',
  dot: false,
  relativePath: 'packages/middlewares/',
  result: false
} +4ms
  eslint:file-enumerator Enter the directory: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares +12s
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares. +150ms
  eslintrc:cascading-config-array-factory No cache found: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares. +1ms
  eslintrc:config-array-factory Loading package.json config file: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\package.json +398ms
  eslintrc:config-array-factory Loading JSON config file: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\package.json +0ms
  eslintrc:config-array-factory Error reading package.json file: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\package.json +3ms
  eslintrc:config-array-factory Config file not found on C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares +1ms
  eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages. +8ms
  eslintrc:ignore-pattern Check {
  filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\packages\\middlewares\\index.js',
  dot: false,
  relativePath: 'packages/middlewares/index.js',
  result: false
} +13ms
  eslint:file-enumerator Yield: index.js +13ms
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares. +4ms
  eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares. +0ms
  eslint:cli-engine Lint C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\index.js +0ms
  eslint:linter Linting code for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\index.js (pass 1) +0ms
  eslint:linter Verify +1ms
  eslint:linter With ConfigArray: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\index.js +1ms
  eslint:linter Generating fixed text for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\index.js (pass 1) +3s
  eslint:source-code-fixer Applying fixes +0ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +1ms
  eslintrc:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/**/node_modules/*' ], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: false }, IgnorePattern { patterns: [ 'node_modules/', 'build/', 'dist/', '.cache/' ], basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', loose: true 
} ] +3s
  eslintrc:ignore-pattern   processed: { basePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error', patterns: [ '/**/node_modules/*', 'node_modules/', 'build/', 'dist/', '.cache/' ] } +3ms
  eslintrc:ignore-pattern Check {
  filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\packages\\middlewares\\package.json',
  dot: false,
  relativePath: 'packages/middlewares/package.json',
  result: false
} +2ms
  eslint:file-enumerator Yield: package.json +3s
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares. +3s
  eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares. +0ms
  eslint:cli-engine Lint C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\package.json +3s
  eslint:linter Linting code for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\package.json (pass 1) +18ms
  eslint:linter Verify +1ms
  eslint:linter With ConfigArray: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\package.json +0ms
  eslint:linter Apply the processor: 'json/.json' +1ms
  eslint:linter A code block was found: '(unnamed)' +9ms
  eslint:linter Generating fixed text for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\package.json (pass 1) +32ms
  eslint:source-code-fixer Applying fixes +59ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +0ms
  eslintrc:ignore-pattern Check {
  filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\packages\\middlewares\\src\\',
  dot: false,
  relativePath: 'packages/middlewares/src/',
  result: false
} +53ms
  eslint:file-enumerator Enter the directory: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src +52ms
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +52ms
  eslintrc:cascading-config-array-factory No cache found: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +1ms
  eslintrc:config-array-factory Config file not found on C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src +3s
  eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares. +2ms
  eslintrc:ignore-pattern Check {
  filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\packages\\middlewares\\src\\helmet.js',
  dot: false,
  relativePath: 'packages/middlewares/src/helmet.js',
  result: false
} +7ms
  eslint:file-enumerator Yield: helmet.js +8ms
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +5ms
  eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +0ms
  eslint:cli-engine Lint C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.js +63ms
  eslint:linter Linting code for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.js (pass 1) +20ms
  eslint:linter Verify +1ms
  eslint:linter With ConfigArray: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.js +1ms
  eslint:linter Generating fixed text for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.js (pass 1) +127ms
  eslint:source-code-fixer Applying fixes +149ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +1ms
  eslintrc:ignore-pattern Check {
  filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\packages\\middlewares\\src\\helmet.test.js',
  dot: false,
  relativePath: 'packages/middlewares/src/helmet.test.js',
  result: false
} +143ms
  eslint:file-enumerator Yield: helmet.test.js +144ms
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +144ms
  eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +1ms
  eslint:cli-engine Lint C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js +145ms
  eslint:linter Linting code for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js (pass 1) +16ms
  eslint:linter Verify +1ms
  eslint:linter With ConfigArray: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js +1ms
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
    at Linter.verify (C:\Users\me\Workspace\babel-eslint-parser-error\node_modules\eslint\lib\linter\linter.js:1228:25) +6ms
  eslint:linter Generating fixed text for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js (pass 1) +5ms
  eslint:source-code-fixer Applying fixes +28ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +1ms
  eslintrc:ignore-pattern Check {
  filePath: 'C:\\Users\\me\\Workspace\\babel-eslint-parser-error\\packages\\middlewares\\src\\index.js',
  dot: false,
  relativePath: 'packages/middlewares/src/index.js',
  result: false
} +29ms
  eslint:file-enumerator Yield: index.js +28ms
  eslintrc:cascading-config-array-factory Load config files for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +27ms
  eslintrc:cascading-config-array-factory Cache hit: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src. +1ms
  eslint:cli-engine Lint C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\index.js +28ms
  eslint:linter Linting code for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\index.js (pass 1) +15ms
  eslint:linter Verify +1ms
  eslint:linter With ConfigArray: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\index.js +0ms
  eslint:linter Generating fixed text for C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\index.js (pass 1) +34ms
  eslint:source-code-fixer Applying fixes +49ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +1ms
  eslint:file-enumerator Leave the directory: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src +47ms
  eslint:file-enumerator Leave the directory: C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares +1ms
  eslint:file-enumerator Leave the directory: C:\Users\me\Workspace\babel-eslint-parser-error\packages +1ms
  eslint:file-enumerator Complete iterating files: ["packages/**"] +0ms
  eslint:cli-engine Linting complete in: 15696ms +42ms

C:\Users\me\Workspace\babel-eslint-parser-error\packages\middlewares\src\helmet.test.js
  0:0  error  Parsing error: Cannot read property 'push' of undefined

✖ 1 problem (1 error, 0 warnings)
```
