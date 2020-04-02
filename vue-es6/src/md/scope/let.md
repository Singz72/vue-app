# let

**let** 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。

## 语法

> let var1 [= value1], var2 [= value2]] [, ..., varN [= valueN]];

### 参数

**`var1`**,**`var2`**,...,**`varN`**

变量名。必须是合法的标识符。

**`value1`**,**`value2`**,...,**`valueN`**

变量初始值。可以是任意合法的表达式。

---

## 描述

`let`允许你声明一个作用域被限制在`块`级中的变量、语句或者表达式。与`var`关键字不同的是，`var`声明的变量只能是全局或者整个函数块的。`var`与`let`的不同之处在于后者是在编译时才初始化。

就`const`一样， `let`不会在全局声明时（在最顶部的范围）创建`window`对象的属性。

### 作用域规则

`let`声明的变量只在其声明的块或子块中可用，这一点，与`var`相似。二者之间最主要的区别在于`var`声明的变量的作用域是整个封闭函数。

```javascript
function varTest() {
  var x = 1;

  {
    var x = 2; // 同样的变量!
    console.log(x); // 2
  }

  console.log(x); // 2
}

function letTest() {
  let x = 1;

  {
    let x = 2; // 不同的变量
    console.log(x); // 2
  }

  console.log(x); // 1
}
```

在程序和方法的最顶端，`let`不像`var`一样，`let`不会在全局对象里新建一个属性。比如：

位于函数或代码顶部的`var`声明会给全局对象新增属性, 而`let`不会。例如:

```javascript
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### 模仿私有成员

在处理构造函数的时候，可以通过`let`声明而不是闭包来创建一个或多个私有变量。

```javascript
var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

可以使用`var`创建和闭包具有相同隐私模式的局部变量，但是它们需要函数作用域（通常是模块模式中的 IIFE），而不仅仅是上面示例中的块作用域。

### 重复声明

在同一个函数或块作用域中重复声明同一个变量会引起`SyntaxError`。

```javascript
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

在`switch`语句中只有一个块，你可能因此而遇到错误。

```javascript
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```

然而，需要特别指出的是，一个嵌套在`case`子句中的块会创建一个新的块作用域的词法环境，就不会产生上诉重复声明的错误。

```javascript
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

### 暂存死区

与通过`var`声明的有初始化值`undefined`的变量不同，通过`let`声明的变量直到它们的定义被执行时才初始化。在变量初始化前访问该变量会导致`ReferenceError`。该变量处在一个自块顶部到初始化处理的“暂存死区”中。

```javascript
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```

### 暂存死区与 `typeof`

与通过`var`声明的变量, 有初始化值`undefined`和只是未声明的变量不同的是，如果使用`typeof`检测在暂存死区中的变量, 会抛出`ReferenceError`异常:

```javascript
console.log(typeof undeclaredVariable); // undefined
var undeclaredVariable = 10;

console.log(typeof i);
// Uncaught ReferenceError: i is not defined
let i = 10;
```

### 暂存死区和静态作用域/词法作用域的相关例子

由于词法作用域，表达式`foo + 55`内的标识符`foo`被认为是 if 块的 foo 变量，而不是值为 33 的块外面的变量 foo。

在同一行，这个 if 块中的`foo`已经在词法环境中被创建了，但是还没有到达（或者终止）它的初始化（这是语句本身的一部分）。

这个 if 块里的`foo`还依旧在暂存死区里。

```javascript
function test() {
  var foo = 33;

  if (true) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

在以下情况下，这种现象可能会使您感到困惑。`let n of n.a`已经在 for 循环块的私有范围内。因此，标识符`n.a`被解析为位于指令本身("let n")中的“n”对象的属性“a”。

在没有执行到它的初始化语句之前，它仍旧存在于暂存死区中。

```javascript
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) {
    // ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

---

## 其他情况

用在块级作用域中时，`let`将变量的作用域限制在块内, 而`var`声明的变量的作用域是在函数内。

```javascript
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

而这种`var`与`let`合并的声明方式会报`SyntaxError`错误, 因为`var`会将变量提升至块的顶部, 这会导致隐式地重复声明变量。

```javascript
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```
