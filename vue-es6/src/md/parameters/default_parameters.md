# default_parameters

**函数默认参数**允许在没有值或`undefined`被传入时使用默认形参。

## 语法

> function [name]([param1[ = defaultValue1 ], ..., paramN[ = defaultValueN ]]]) { statements }

---

## 描述

**JavaScript** 中函数的参数默认是`undefined`。然而，在某些情况下可能需要设置一个不同的默认值。这是默认参数可以帮助的地方。

以前，一般设置默认参数的方法是在函数体测试参数是否为`undefined`，如果是的话就设置为默认的值。

下面的例子中，如果在调用`multiply`时，参数`b`的值没有提供，那么它的值就为`undefined`。如果直接执行`a * b`，函数会返回`NaN`。

```JavaScript
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5);    // NaN !
```

为了防止这种情况，第二行代码解决了这个问题，其中如果只使用一个参数调用`multiply`，则`b`设置为`1`：

```JavaScript
function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5);    // 5
```

有了默认参数，我们不需要再在函数体内做不必要的检查。现在你可以在函数头将`b`的默认值置为`1`：

```JavaScript
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5);    // 5
```

---

## 示例

### 传入`undefined` vs 其他假值

在第二次调用中，即使第一个参数在调用时显式设置为`undefined`（虽然不是`null`或其他 falsy 值），但是`num`参数的值是默认值。

```JavaScript
function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test('');        // 'string' (num is set to '')
test(null);      // 'object' (num is set to null)
```

### 调用时解析

在函数被调用时，参数默认值会被解析，所以不像 Python 中的例子，每次函数调用时都会创建一个新的参数对象。

```JavaScript
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); //[1]
append(2); //[2], not [1, 2]
```

这个规则对于函数和变量也是适用的。

```JavaScript
function callSomething(thing = something()) {
 return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### 默认参数可用于后面的默认参数

已经遇到的参数可用于以后的默认参数：

```JavaScript
function greet(name, greeting, message = greeting + ' ' + name) {
    return [name, greeting, message];
}

greet('David', 'Hi');  // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!');  // ["David", "Hi", "Happy Birthday!"]
```

以下这个例子近似模拟了一些比较简单的情况，并说明了特殊情况是怎么被处理的。

```JavaScript
function go() {
  return ':P';
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = this.value) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]


withoutDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### 函数嵌套定义

在 Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30) 中引入。在函数体内的函数声明不能引用内部的默认参数，并且会在 SpiderMonkey 抛出一个`ReferenceError`（现在是`TypeError`），参见 bug 1022967。默认参数总是会被首先执行，而在函数体内部的函数声明会在之后生效。

```JavaScript
// Doesn't work! Throws ReferenceError.
function f(a = go()) {
  function go() { return ':P'; }
}
```

### 位于默认参数之后非默认参数

在 Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2)之前，以下代码会造成`SyntaxError`错误。这已经在 bug 1022967 中修复，并在以后的版本中按预期方式工作。参数仍然设置为从左到右，覆盖默认参数，即使后面的参数没有默认值。

```JavaScript
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### 有默认值的解构参数

你可以通过解构赋值为参数赋值：

```JavaScript
function f([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z;
}

f(); // 6
```
