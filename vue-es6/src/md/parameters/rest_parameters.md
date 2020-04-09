# 剩余参数

**剩余参数**语法允许我们将一个不定数量的参数表示为一个数组。

## 语法

> function(a, b, ...theArgs) { }

---

## 描述

如果函数的最后一个命名参数以`...`为前缀，则它将成为一个由剩余参数组成的真数组，其中从`0`（包括）到`theArgs.length`（排除）的元素由传递给函数的实际参数提供。

### 剩余参数和`arguments`对象的区别

剩余参数和`arguments`对象之间的区别主要有三个：

- 剩余参数只包含那些没有对应形参的实参，而`arguments`对象包含了传给函数的所有实参。
- `arguments`对象不是一个真正的数组，而剩余参数是真正的`Array`实例，也就是说你能够在它上面直接使用所有的数组方法，比如`sort`，`map`，`forEach`或`pop`。
- `arguments`对象还有一些附加的属性 （如`callee`属性）。

### 从`arguments`到数组

引入了剩余参数来减少由参数引起的样板代码。

```JavaScript
// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {

  var normalArray = Array.prototype.slice.call(arguments);
  // -- or --
  var normalArray = [].slice.call(arguments);
  // -- or --
  var normalArray = Array.from(arguments);

  var first = normalArray.shift(); // OK, gives the first argument
  var first = arguments.shift(); // ERROR (arguments is not a normal array)

}

// Now we can easily gain access to a normal array using a rest parameter

function f(...args) {
  var normalArray = args;
  var first = normalArray.shift(); // OK, gives the first argument
}
```

### 解构剩余参数

剩余参数可以被解构，这意味着他们的数据可以被解包到不同的变量中。请参阅[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

```JavaScript
function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b and c are undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)
```

---

## 示例

因为`theArgs`是个数组，所以你可以使用`length`属性得到剩余参数的个数：

```JavaScript
function fun1(...theArgs) {
  alert(theArgs.length);
}

fun1();  // 弹出 "0", 因为theArgs没有元素
fun1(5); // 弹出 "1", 因为theArgs只有一个元素
fun1(5, 6, 7); // 弹出 "3", 因为theArgs有三个元素
```

下例中，剩余参数包含了从第二个到最后的所有实参，然后用第一个实参依次乘以它们：

```JavaScript
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr);  // [2, 4, 6]
```

下例演示了你可以在剩余参数上使用任意的数组方法，而`arguments`对象不可以：

```JavaScript
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

alert(sortRestArgs(5,3,7,1)); // 弹出 1,3,5,7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // 不会执行到这里
}

alert(sortArguments(5,3,7,1)); // 抛出TypeError异常:arguments.sort is not a function
```

为了在`arguments`对象上使用`Array`方法，它必须首先被转换为一个真正的数组。

```JavaScript
function sortArguments() {
  var args = Array.prototype.slice.call(arguments);
  var sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // shows 1, 3, 5, 7
```
