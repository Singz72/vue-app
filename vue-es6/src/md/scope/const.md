# const

常量是块级作用域，很像使用`let`语句定义的变量。常量的值不能通过重新赋值来改变，并且不能重新声明。

## 语法

> const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];

**`nameN`**

常量名称，可以是任意合法的标识符。

**`valueN`**

常量值，可以是任意合法的表达式。

---

## 描述

此声明创建一个常量，其作用域可以是全局或本地声明的块。 与`var`变量不同，全局常量不会变为窗口对象的属性。需要一个常数的初始化器；也就是说，您必须在声明的同一语句中指定它的值（这是有道理的，因为以后不能更改）。

`const`声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。例如，在引用内容是对象的情况下，这意味着可以改变对象的内容（例如，其参数）。

关于“暂存死区”的所有讨论都适用于`let`和`const`。

一个常量不能和它所在作用域内的其他变量或函数拥有相同的名称。

---

## 示例

```javascript
// 注意: 常量在声明的时候可以使用大小写，但通常情况下全部用大写字母。

// 定义常量MY_FAV并赋值7
const MY_FAV = 7;

// 报错
MY_FAV = 20;

// 输出 7
console.log("my favorite number is: " + MY_FAV);

// 尝试重新声明会报错
const MY_FAV = 20;

//  MY_FAV 保留给上面的常量，这个操作会失败
var MY_FAV = 20;

// 也会报错
let MY_FAV = 20;

// 注意块范围的性质很重要
if (MY_FAV === 7) {
    // 没问题，并且创建了一个块作用域变量 MY_FAV
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV = 20;

    // MY_FAV 现在为 20
    console.log('my favorite number is ' + MY_FAV);

    // 这被提升到全局上下文并引发错误
    var MY_FAV = 20;
}

// MY_FAV 依旧为7
console.log("my favorite number is " + MY_FAV);

// 常量要求一个初始值
const FOO; // SyntaxError: missing = in const declaration

// 常量可以定义成对象
const MY_OBJECT = {"key": "value"};

// 重写对象和上面一样会失败
MY_OBJECT = {"OTHER_KEY": "value"};

// 对象属性并不在保护的范围内，下面这个声明会成功执行
MY_OBJECT.key = "otherValue";

// 也可以用来定义数组
const MY_ARRAY = [];
// It's possible to push items into the array
// 可以向数组填充数据
MY_ARRAY.push('A'); // ["A"]
// 但是，将一个新数组赋给变量会引发错误
MY_ARRAY = ['B']
```
