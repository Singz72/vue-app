# Reflect

`Reflect`是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与`proxy handlers`的方法相同。
`Reflect`不是一个函数对象，因此它是不可构造的。

## 描述

与大多数全局对象不同，`Reflect`不是一个构造函数。
你不能将其与一个`new`运算符一起使用，或者将`Reflect`对象作为一个函数来调用。
`Reflect`的所有属性和方法都是静态的（就像`Math`对象）。

---

## 方法

`Reflect`对象提供以下静态函数，它们具有与处理器对象方法相同的名称。
这些方法中的一些与`Object`上的对应方法相同。

**`Reflect.apply()`**

对一个函数进行调用操作，同时可以传入一个数组作为调用参数。
和`Function.prototype.apply()`功能类似。

**`Reflect.construct()`**

对构造函数进行`new`操作，相当于执行`new target(...args)`。

**`Reflect.defineProperty()`**

和`Object.defineProperty()`类似。

**`Reflect.deleteProperty()`**

作为函数的`delete`操作符，相当于执行`delete target[name]`。

**`Reflect.get()`**

获取对象身上某个属性的值，类似于`target[name]`。

**`Reflect.getOwnPropertyDescriptor()`**

类似于`Object.getOwnPropertyDescriptor()`。

**`Reflect.getPrototypeOf()`**

类似于`Object.getPrototypeOf()`。

**`Reflect.has()`**

判断一个对象是否存在某个属性，和`in`运算符 的功能完全相同。

**`Reflect.isExtensible()`**

类似于`Object.isExtensible()`。

**`Reflect.ownKeys()`**

返回一个包含所有自身属性（不包含继承属性）的数组。(类似于`Object.keys()`, 但不会受`enumerable`影响).

**`Reflect.preventExtensions()`**

类似于`Object.preventExtensions()`。返回一个`Boolean`。

**`Reflect.set()`**

将值分配给属性的函数。返回一个`Boolean`，如果更新成功，则返回`true`。

**`Reflect.setPrototypeOf()`**

类似于`Object.setPrototypeOf()`。
