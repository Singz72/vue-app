# WeakSet

`WeakMap`对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

## 语法

> new WeakMap([iterable])

### 参数

**`iterable`**

`Iterable`是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。
每个键值对会被加到新的`WeakMap`里。`null`会被当做`undefined`。

---

## 描述

`WeakMap`的`key`只能是`Object`类型。 原始数据类型 是不能作为`key`的（比如`Symbol`）。

在 JavaScript 里，map API 可以通过使其四个 API 方法共用两个数组(一个存放键,一个存放值)来实现。给这种 map 设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。当从该 map 取值的时候，需要遍历所有的键，然后使用索引从存储值的数组中检索出相应的值。

但这样的实现会有两个很大的缺点，首先赋值和搜索操作都是`O(n)`的时间复杂度(`n`是键值对的个数)，因为这两个操作都需要遍历全部整个数组来进行匹配。另外一个缺点是可能会导致内存泄漏，因为数组会一直引用着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他任何引用存在了。

相比之下，原生的`WeakMap`持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。原生`WeakMap`的结构是特殊且有效的，其用于映射的`key`只有在其没有被回收时才是有效的。

正由于这样的弱引用，`WeakMap`的`key`是不可枚举的 (没有方法能给出所有的`key`)。如果`key`是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果。因此，如果你想要这种类型对象的`key`值的列表，你应该使用`Map`。

基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用`WeakMap`。

---

## WeakMap 实例

所有`WeakMap`实例继承自`WeakMap.prototype`.

### 属性

**`WeakMap.prototype.constructor`**

返回创建`WeakMap`实例的原型函数。 `WeakMap`函数是默认的。

### 方法

**`WeakMap.prototype.delete(key)`**

移除`key`的关联对象。执行后`WeakMap.prototype.has(key)`返回`false`。

**`WeakMap.prototype.get(key)`**

返回`key`关联对象, 或者`undefined`(没有`key`关联对象时)。

**`WeakMap.prototype.has(key)`**

根据是否有`key`关联对象返回一个`Boolean`值。

**`WeakMap.prototype.set(key, value)`**

在`WeakMap`中设置一组`key`关联对象，返回这个`WeakMap`对象。

---

## 示例

### 使用 WeakMap

```js
const wm1 = new WeakMap(),
  wm2 = new WeakMap(),
  wm3 = new WeakMap();
const o1 = {},
  o2 = function() {},
  o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value可以是任意值,包括一个对象或一个函数
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个WeakMap对象

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined,wm2中没有o2这个键
wm2.get(o3); // undefined,值就是undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (即使值是undefined)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### 实现一 个带有 .clear() 方法的类 WeakMap 类

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
```
