TypeScript Jest Mock Affect Other Test File Demo
=========================================================

我原来以为在jest中，如果两个测试使用了同一个module，它们对于该module的修改可能会互相影响。

实际上发现，每个test文件都是单独执行，不会影响。

这样看来，如果两个test文件互相影响的话，那么可能的原因就是它们依赖了某个非内存中的数据（比如文件、数据库之类）

```
npm install
npm test
```
