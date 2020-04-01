# Block

**块语句**（或其他语言的复合语句）用于组合零个或多个语句。该块由一对大括号界定，可以是[labelled：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label)

## 语法

### 声明块

> { StatementList }

### 标记声明块

> LabelIdentifier: { StatementList }

**`StatementList`**

在块语句中分组的语句。

**`LabelIdentifier`**

用于视觉识别的可选[label](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label)或[break](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break)的目标。

## 描述

其他语言中通常将语句块称为**复合语句**。它允许你使用多个语句，其中 JavaScript 只需要一个语句。将语句组合成块是 JavaScript 中的常见做法。相反的做法是可以使用一个[空语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)，你不提供任何语句，虽然一个是必需的。

### 块级作用域

#### 使用 **`var`**

通过 var 声明的变量**没有**块级作用域。在语句块里声明的变量作用域是其所在的函数或者 script 标签内，你可以在语句块外面访问到它。换句话说，语句块 不会生成一个新的作用域。尽管单独的语句块是合法的语句，但在 JavaScript 中你不会想使用单独的语句块，因为它们不像你想象的 C 或 Java 中的语句块那样处理事物。例如：

```JavaScript
var x = 1;
{
  var x = 2;
}
console.log(x); // 输出 2
```

该会输出 2，因为块中的 `var x`语句与块前面的`var x`语句作用域相同。在 C 或 Java 中，这段代码会输出 1。

#### 使用 **`let`** 和 **`const`**

相比之下，使用 `let` 和 `const` 声明的变量是有块级作用域的。

```JavaScript
let x = 1;
{
  let x = 2;
}
console.log(x); // 输出 1
```

`x = 2`被限制在块级作用域中, 也就是它被声明时所在的块级作用域。

`const`的结果也是一样的：

```JavaScript
const c = 1;
{
  const c = 2;
}
console.log(c); // 输出1, 而且不会报错
```

注意块级作用域里的常量声明`const c = 2` 并不会抛出`SyntaxError: Identifier 'c' has already been declared`这样的语法错误，因为这是一个新的作用域。

##### 使用 let 声明的变量在块级作用域内能强制执行更新变量，下面的两个例子对比：

```JavaScript
var a = [];
for (var i = 0; i < 10; i++) {
      a[i] = function () {console.log(i);};
}
a[0]();                // 10
a[1]();                // 10
a[6]();                // 10

/********************/

var a = [];
for (let i = 0; i < 10; i++) {
      a[i] = function () {console.log(i);};
}
a[0]();                // 0
a[1]();                // 1
a[6]();                // 6
```

#### 使用 **`function`**

[函数声明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)同样被限制在声明他的语句块内:

```JavaScript
foo('outside');  // TypeError: foo is not a function
{
  function foo(location) {
   console.log('foo is called ' + location);
  }
  foo('inside'); // 正常工作并且打印 'foo is called inside'
}
```
