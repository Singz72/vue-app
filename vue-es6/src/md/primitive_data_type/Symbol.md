# Symbol

symbol 是一种基本数据类型 （primitive data type）。
`Symbol()`函数会返回 symbol 类型的值，该类型具有静态属性和静态方法。
它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："`new Symbol()`"。

每个从`Symbol()`返回的 symbol 值都是唯一的。
一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的。

## 语法

> Symbol([description])

### 参数

**`description`**

可选的，字符串类型。
对 symbol 的描述，可用于调试但不是访问 symbol 本身。

---

## 描述

直接使用`Symbol()`创建新的 symbol 类型，并用一个可选的字符串作为其描述。

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

上面的代码创建了三个新的 symbol 类型。
注意，`Symbol("foo")`不会强制将字符串 “foo” 转换成 symbol 类型。它每次都会创建一个新的 symbol 类型：

```js
Symbol("foo") === Symbol("foo"); // false
```

下面带有`new`运算符的语法将抛出`TypeError`错误：

```js
const sym = new Symbol(); // TypeError
```

这会阻止创建一个显式的 Symbol 包装器对象而不是一个 Symbol 值。
围绕原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。
然而，现有的原始包装器对象，如`new Boolean`、`new String`以及`new Number`，因为遗留原因仍可被创建。

如果你真的想创建一个 Symbol 包装器对象 (`Symbol wrapper object`)，你可以使用`Object()`函数：

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

### 全局共享 Symbol

上面使用`Symbol()`函数的语法，不会在你的整个代码库中创建一个可用的全局 symbol 类型。
要创建跨文件可用的 symbol，甚至跨域（每个都有它自己的全局作用域）, 使用`Symbol.for()`方法和`Symbol.keyFor()`方法从全局的 symbol 注册表设置和取得 symbol。

### 在对象中查找 Symbol 属性

`Object.getOwnPropertySymbols()`方法让你在查找一个给定对象的符号属性时返回一个 symbol 类型的数组。
注意，每个初始化的对象都是没有自己的 symbol 属性的，因此这个数组可能为空，除非你已经在对象上设置了 symbol 属性。

---

## 方法

**`Symbol.for(key)`**

使用给定的 key 搜索现有的 symbol，如果找到则返回该 symbol。
否则将使用给定的 key 在全局 symbol 注册表中创建一个新的 symbol。

**`Symbol.keyFor(sym)`**

从全局 symbol 注册表中，为给定的 symbol 检索一个共享的 symbol key。

---

## Symbol 原型

所有 Symbols 继承自`Symbol.prototype`。

### 属性

**`Symbol.prototype.constructor`**

返回创建实例原型的函数. 默认为 Symbol 函数。

**`Symbol.prototype.description`**

一个包含 symbol 描述的只读字符串。

### 方法

**`Symbol.prototype.toSource()`**

返回包含`Symbol`对象源码的字符串。覆盖`Object.prototype.toSource()`方法。

**`Symbol.prototype.toString()`**

返回包含 Symbol 描述符的字符串。 覆盖`Object.prototype.toString()`方法。

**`Symbol.prototype.valueOf()`**

返回`Symbol`对象的初始值.。覆盖`Object.prototype.valueOf()`方法。

**`Symbol.prototype[@@toPrimitive]`**

返回`Symbol`对象的初始值。

---

## 示例

### 对 symbol 使用 typeof 运算符

`typeof`运算符能帮助你识别 symbol 类型

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Symbol 类型转换

当使用 symbol 值进行类型转换时需要注意一些事情：

- 尝试将一个 symbol 值转换为一个 number 值时，会抛出一个 TypeError 错误 (e.g. +sym or sym | 0).
- 使用宽松相等时， Object(sym) == sym returns true.
- 这会阻止你从一个 symbol 值隐式地创建一个新的 string 类型的属性名。例如，Symbol("foo") + "bar" 将抛出一个 TypeError (can't convert symbol to string).
- "safer" String(sym) conversion 的作用会像 symbol 类型调用 Symbol.prototype.toString() 一样，但是注意 new String(sym) 将抛出异常。

### Symbols 与 for...in 迭代

Symbols 在 for...in 迭代中不可枚举。另外，Object.getOwnPropertyNames() 不会返回 symbol 对象的属性，但是你能使用 Object.getOwnPropertySymbols() 得到它们。

```js
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
  console.log(i); // logs "c" and "d"
}
```

### Symbols 与 JSON.stringify()

当使用 JSON.stringify() 时，以 symbol 值作为键的属性会被完全忽略：

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

### Symbol 包装器对象作为属性的键

当一个 Symbol 包装器对象作为一个属性的键时，这个对象将被强制转换为它包装过的 symbol 值：

```js
var sym = Symbol("foo");
var obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // still 1
```
