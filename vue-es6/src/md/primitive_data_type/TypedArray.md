# TypedArray

一个**类型化数组（`TypedArray`）**对象描述了一个底层的二进制数据缓冲区（binary data buffer）的一个类数组视图（view）。
事实上，没有名为`TypedArray`的全局属性，也没有一个名为`TypedArray`的构造函数。
相反，有许多不同的全局属性，它们的值是特定元素类型的类型化数组构造函数，如下所示。
在下面的页面中，你会发现一些，与包含任何类型的元素的任意类型化数组一起使用的通用属性和方法。

```js
// create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]
```

---

## 语法

```js
// 下面代码是语法格式，不能直接运行，
// TypedArray 关键字需要替换为底部列出的构造函数。
new TypedArray(); // ES2017中新增
new TypedArray(length);
new TypedArray(typedArray);
new TypedArray(object);
new TypedArray(buffer [, byteOffset [, length]]);

// TypedArray 指的是以下的其中之一：

Int8Array();
Uint8Array();
Uint8ClampedArray();
Int16Array();
Uint16Array();
Int32Array();
Uint32Array();
Float32Array();
Float64Array();
```

### 参数

**`length`**

当传入`length`参数时，一个内部的数组缓冲区会被创建在内存中，该缓存区的大小（类型化数组中`byteLength`属性的值）是传入的`length`乘以数组中每个元素的字节数（`BYTES_PER_ELEMENT`），每个元素的值都为`0`。(每个元素的字节数是由具体的构造函数决定的，比如`Int16Array()`的每个元素的字节数为`2`，`Int32Array()`的每个元素的字节数为`4`)

**`typedArray`**

当传入一个任意类型化数组对象作为`typedArray`参数时（比如`Int32Array`），`typedArray`会被复制到一个新的类型数组中。`typedArray`中的每个值在被复制到新的数组之前，会被转化为相应类型的构造函数。新的生成的类型化数组对象将会有跟传入的数组相同的长度（比如原来的类型化数组的`length==2`，那么新生成的数组的`length`也是`2`，只是数组中的每一项进行了转化）。

**`object`**

当传入一个`object`作为参数时，就像通过`TypedArray.from()`方法创建一个新的类型化数组一样。

**`buffer`**, **`byteOffset`**, **`length`**

当传入一个`buffer`参数，或者再另外加上可选参数`byteOffset`和`length`时，一个新的类型化数组视图将会被创建，并可用于呈现传入的`ArrayBuffer`实例。`byteOffset`和`length`参数指定了类型化数组视图将要暴露的内存范围。如果两者都未传入，那么整个`buffer`都会被呈现；如果仅仅忽略`length`，那么`buffer`中偏移了`byteOffset`后剩下的`buffer`将会被呈现。

---

## 描述

ECMAScript 2015 定义了一个`TypeArray`构造器作为所有的类型化数组构造器（`Int8Array`, `Int16Array`等）的原型（`[[Prototype]]`）。该构造器并不会直接暴露出来：即没有全局的 `TypedArray`和`TypeArray`属性，只能通过使用类似于`Object.getPrototypeOf(Int8Array.prototype)`的方式直接访问。所有的类型化数组构造器都会继承`TypeArray`构造器函数的公共属性和方法。此外，所有的类型化数组的原型（如`Int8Array.prototype`）都以`TypeArray.prototype`作为原型。

`TypedArray`构造器自身不是特别有用，直接调用或使用 new 表达式实例化都会抛出一个`TypeError`异常，除非在支持子类化（`subclassing`）创建对象的 JS 引擎下运行。但直到现在还没有这样的 JS 引擎出现。因此`TypeArray`仅仅在对所有的类型化数组构造器（`Int8Array`等）的方法和属性进行`polyfill`的时候比较有用.

当创建一个`TypedArray`实例（如`Int8Array`）时，一个数组缓冲区将被创建在内存中，如果一个`ArrayBuffer`对象被当作参数传给构造函数，那么将使用传入的`ArrayBuffer`代替（即缓冲区被创建到`ArrayBuffer`中）。缓冲区的地址被存储在实例的内部属性中，并且所有`TypedArray.prototype`上的方法，例如`set value`和`get value`等，都会在这个数组缓冲区上进行操作。

### 属性访问

你可以使用标准数组索引语法获取类型化数组中的元素（也就是和访问普通数组元素一样，如`foo[1]`），然而，在类型化数组上获取或者设置属性的值时，并不会在这个属性的原型链中进行搜索，即使在索引超出了边界的时候。
在原型中添加的属性将会在`ArrayBuffer`中查询而不是在对象的属性中。
但是你依然可以像其他对象一样使用命名的属性来访问（`foo.bar`的形式）；具体见下面的例子：

```js
// 使用标准数组语法来获取和设置属性值
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// 原型中添加的属性访问不到（此时索引值未超边界，20 < 32）
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0

// 即使索引值超出了边界也一样不能访问（20 > 8）
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined

// 使用负数索引也不行
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// 但是可以使用命名属性的方式访问到
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```
