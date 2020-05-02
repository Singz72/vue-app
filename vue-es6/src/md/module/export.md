# export

> 在创建 JavaScript 模块时，export 语句用于从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们。
>
> 无论您是否声明，导出的模块都处于严格模式。 export 语句不能用在嵌入式脚本中。

## 语法

存在两种 exports 导出方式：

1. 命名导出（每个模块包含任意数量）
2. 默认导出（每个模块包含一个）

```js
// 导出单个特性
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function FunctionName(){...}
export class ClassName {...}

// 导出列表
export { name1, name2, …, nameN };

// 重命名导出
export { variable1 as name1, variable2 as name2, …, nameN };

// 解构导出并重命名
export const { name1, name2: bar } = o;

// 默认导出
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

**`nameN`**

要导出的标识符（以便其他脚本通过`import`语句进行导入）.

---

## 描述

有两种不同的导出方式，命名导出和默认导出。你能够在每一个模块中定义多个命名导出，但是只允许有一个默认导出。每种方式对应于上述的一种语法：

- 命名导出

```js
// 导出早前定义的函数
export { myFunction };

// 导出常量
export const foo = Math.sqrt(2);
```

- 默认导出（函数）

```js
export default function() {}
```

- 默认导出（类）

```js
export default class {}
```

在导出多个值时，命名导出非常有用。在导入期间，必须使用相应对象的相同名称。但是，可以使用任何名称导入默认导出，例如：

```js
let k;
export default k = 12; // 在 test.js文件中定义导出

import m from "./test"; // 由于k 是默认导出，所以可以自由使用import m 替代import k

console.log(m); // 输出为 12
```

下面的语法不能从导入的模块导出默认导出值：

```js
export * from …;
```

如果需要导出默认值，请使用下列代码：

```js
export { default } from "mod";
```

---

## 示例

### 使用命名导出

在模块中，我们可以使用以下代码：

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function() {
    console.log("From graph draw function");
  },
};
export { cube, foo, graph };
```

这样的话，在其它脚本中，我们可以这样使用它：

```js
// 在html中应使用带有module类型的script。
// 示例:
//   <script type="module" src="./demo.js"></script>
//
// 在http服务器上访问，否则将会有一个CORS保护报错。
//
// script demo.js

import { cube, foo, graph } from "my-module.js";
graph.options = {
  color: "blue",
  thickness: "3px",
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

### 使用默认导出

如果我们要导出一个值或模块中的返回值，就可以使用默认导出：

```js
// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

然后，在另一个脚本中，可以直接导入默认导出：

```js
// module "my-module.js"
import cube from "my-module.js";
console.log(cube(3)); // 27​​​​​
```

注意，不能使用`var`、`let`或`const`用于导出默认值`export default`

### 模块重定向

如果我们想要在当前模块中，导出指定导入模块的默认导出（等于是创建了一个“重定向”）：

```js
// module "redirect-module.js"
export { default } from "./other-module";
export * from "./other-module";
```
