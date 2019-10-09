# Demo of npm power
This package show the power of npm package manager. 
Both packages package1 and package2 use React, but **package1** use v16 and **package2** use v15. Package **package** has both **package1** and **package2** as dependencies.

If you run package main script you will see that each package use correct version of React package.

```
cd package
npm i
node index.js
```

### expected output
```
package1: react version=15.6.2
package2: react version=16.10.2
package: react version=16.1.1
```