# map

> Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

## 描述

一个 Map 对象在迭代时会根据对象中元素的插入顺序来进行--一个`for...of`循环在每次迭代后会返回一个形为`[key,value]`的数组

### 键的相等

- 键的比较是基于`sameValueZero`算法。
- `NaN`是与`NaN`相等的（虽然`NaN !== NaN`），剩下所有其他的值是根据`===`运算符的结果判断是否相等。
- 在目前的 ECMAScript 规范中，`-0`和`+0`被认为是相等的。

---

## 构造函数

**`Map()`**

创建`Map`对象

---

## Map 实例

所有的`Map`对象实例都会继承`Map.prototype`。

### 属性

**`Map.prototype.constructor`**

返回一个函数，它创建了实例的原型。默认是`Map`函数。

**`Map.prototype.size`**

返回`Map`对象的键/值对的数量。

### 方法

**`Map.prototype.clear()`**

移除`Map`对象的所有键/值对 。

**`Map.prototype.delete(key)`**

如果`Map`对象中存在该元素，则移除它并返回`true`；否则如果该元素不存在则返回`false`。
随后调用`Map.prototype.has(key)`将返回`false`。

**`Map.prototype.entries()`**

返回一个新的`Iterator`对象，它按插入顺序包含了`Map`对象中每个元素的`[key, value]`数组。

**`Map.prototype.forEach(callbackFn[, thisArg])`**

按插入顺序，为`Map`对象里的每一键值对调用一次`callbackFn`函数。如果为`forEach`提供了`thisArg`，它将在每次回调中作为`this`值。

**`Map.prototype.get(key)`**

返回键对应的值，如果不存在，则返回`undefined`。

**`Map.prototype.has(key)`**

返回一个布尔值，表示`Map`实例是否包含键对应的值。

**`Map.prototype.keys()`**

返回一个新的`Iterator`对象， 它按插入顺序包含了`Map`对象中每个元素的键 。

**`Map.prototype.set(key, value)`**

设置`Map`对象中键的值。返回该`Map`对象。

**`Map.prototype.values()`**

返回一个新的`Iterator`对象，它按插入顺序包含了`Map`对象中每个元素的值 。

**`Map.prototype[@@iterator]()`**

返回一个新的`Iterator`对象，它按插入顺序包含了`Map`对象中每个元素的`[key, value]`数组。

---

## 示例

### 使用 Map 对象

```js
let myMap = new Map();

let keyObj = {};
let keyFunc = function() {};
let keyString = "a string";

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString); // "和键'a string'关联的值"
myMap.get(keyObj); // "和键keyObj关联的值"
myMap.get(keyFunc); // "和键keyFunc关联的值"

myMap.get("a string"); // "和键'a string'关联的值"
// 因为keyString === 'a string'
myMap.get({}); // undefined, 因为keyObj !== {}
myMap.get(function() {}); // undefined, 因为keyFunc !== function () {}
```

### 将 NaN 作为 Map 的键

`NaN`也可以作为`Map`对象的键。虽然`NaN`和任何值甚至和自己都不相等(`NaN !== NaN`返回`true`)，但下面的例子表明，`NaN`作为`Map`的键来说是没有区别的:

```js
let myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

let otherNaN = Number("foo");
myMap.get(otherNaN); // NaN
```

### 使用 for...of 迭代 Map

Map 可以使用 for..of 循环来实现迭代：

```js
let myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (let [key, value] of myMap) {
  console.log(key + " = " + value);
}
// 将会显示两个log。一个是"0 = zero"另一个是"1 = one"

for (let key of myMap.keys()) {
  console.log(key);
}
// 将会显示两个log。 一个是 "0" 另一个是 "1"

for (let value of myMap.values()) {
  console.log(value);
}
// 将会显示两个log。 一个是 "zero" 另一个是 "one"

for (let [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// 将会显示两个log。 一个是 "0 = zero" 另一个是 "1 = one"
```

### 使用 forEach() 方法迭代 Map

`Map`也可以通过`forEach()`方法迭代：

```js
myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
});
// 将会显示两个logs。 一个是 "0 = zero" 另一个是 "1 = one"
```

### Map 与数组的关系

```js
let kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]
```

### 复制或合并 Maps

```js
let original = new Map([[1, "one"]]);

let clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用
```
