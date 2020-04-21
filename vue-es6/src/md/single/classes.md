# classes

> ECMAScript 2015 中引入的 JavaScript 类实质上是 JavaScript 现有的基于原型的继承的语法糖。类语法不会为 JavaScript 引入新的面向对象的继承模型。

## 定义类

类实际上是个“特殊的函数”，就像你能够定义的函数表达式和函数声明一样，类语法有两个组成部分：类表达式和类声明。

### 类声明

定义一个类的方法是使用**类声明**。要声明一个类，可以使用带有`class`关键字的类名。

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
```

#### 提升

**函数声明**和**类声明**之间的一个重要区别是函数声明会提升，类声明不会。你首先需要声明你的类，然后访问他，否则会抛出一个`ReferenceError`

```js
let p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### 类表达式

**类表达式**是定义一个类的另一种方式。类表达式可以是具名或匿名的。

一个具名类表达式的名称是类内的一个局部属性，它可以通过类本身（而不是实例）的`name`属性来获取。

```js
// 匿名类
let Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};
console.log(Rectangle.name); //Rectangle

// 具名类
let Rectangle = class Rectangle2 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};
console.log(Rectangle.name); // Rectangle2
```

注意：类表达式也同样受到类声明中提到的类型提升的限制。

---

## 类体和方法定义

一个类的类体是一对花括号/打括号`{}`中间的部分。这是你定义类成员的位置，如方法或构造函数。

### 严格模式

类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter 和 setter 都在严格模式下执行。

### 构造函数

`constructor`是一个特殊的方法，这种方法用于创建和初始化一个由`class`创建的对象。一个类只能拥有一个名为`constructor`的特殊方法。如果类包含多个`constructor`方法，则将抛出一个`SyntaxError`。

一个构造函数可以使用`super`关键字来调用一个父类的构造函数。

### 原型方法

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.width * this.height;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area()); // 100
```

### 静态方法

`static`关键字用来定义一个类的一个静态方法。
调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法。
静态方法通常用于为一个应用程序创建工具函数。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
```

### 用原型和静态方法包装

当一个对象调用静态或原型方法时，如果该对象没有`this`值（或`this`作为布尔，字符串，数字，未定义或`null`) ，那么`this`值在被调用的函数内部将为`undefined`。不会发生自动包装。即使我们以非严格模式编写代码，它的行为也是一样的，因为所有的函数、方法、构造函数、getters 或 setters 都在严格模式下执行。因此如果我们没有指定`this`的值，`this`值将为`undefined`。

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // Animal {}

let speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
let eat = Animal.eat;
eat(); // undefined
```

如果我们使用传统的基于函数的类来编写上述代码，那么基于调用该函数的`this`值将发生自动装箱。

```js
function Animal() {}

Animal.prototype.speak = function() {
  return this;
};

Animal.eat = function() {
  return this;
};

let obj = new Animal();
let speak = obj.speak;
speak(); // global object

let eat = Animal.eat;
eat(); // global object
```

### 实例属性

实例的属性必须定义在类的方法里：

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

静态的或原型的数据属性必须定义在类定义的外面。

```js
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

### 字段声明

公共和私有字段声明是 JavaScript 标准委员会 TC39 提出的实验性功能（第 3 阶段）。浏览器中的支持是有限的，但是可以通过 Babel 等系统构建后使用此功能。

#### 公有字段声明

使用 JavaScript 字段声明语法。

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

通过预先声明字段，类定义变得更加自我记录，并且字段始终存在。

正如上面看到的，这个字段可以用也可以不用默认值来声明。

#### 私有字段声明

使用私有字段，可以按以下方式细化定义。

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

从类外部引用私有字段是错误的。它们只能在类里面中读取或写入。通过定义在类外部不可见的内容，可以确保类的用户不会依赖于内部，因为内部可能在不同版本之间发生变化。

私有字段仅能在字段声明中预先定义。

私有字段不能通过在之后赋值来创建它们，这种方式只适用普通属性。

---

## 使用 extends 创建子类

`extends`关键字在类声明或类表达式中用于创建一个类作为另一个类的一个子类。

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

var d = new Dog("Mitzie");
d.speak(); // 'Mitzie barks.'
```

如果子类中定义了构造函数，那么它必须先调用`super()`才能使用`this`。

也可以继承传统的基于函数的“类”：

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + " barks.");
  }
}

var d = new Dog("Mitzie");
d.speak(); //Mitzie makes a noise.  Mitzie barks.
```

请注意，类不能继承常规对象（不可构造的）。如果要继承常规对象，可以改用`Object.setPrototypeOf()`：

```js
var Animal = {
  speak() {
    console.log(this.name + " makes a noise.");
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal); // 如果不这样会做，在调用speak时会返回TypeError

var d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
```

---

## Species

你可能希望在派生数组类`MyArray`中返回`Array`对象。这种`species`方式允许你覆盖默认的构造函数。

例如，当使用像`map()`返回默认构造函数的方法时，您希望这些方法返回一个父`Array`对象，而不是`MyArray`对象。`Symbol.species`符号可以让你这样做：

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray);
// false
console.log(mapped instanceof Array);
// true
```

---

## 使用 super 调用超类

`super`关键字用于调用对象的父对象上的函数。

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + " roars.");
  }
}
```

---

## Mix-ins

抽象子类或者 mix-ins 是类的模板。 一个 ECMAScript 类只能有一个单超类，所以想要从工具类来多重继承的行为是不可能的。子类继承的只能是父类提供的功能性。因此，例如，从工具类的多重继承是不可能的。该功能必须由超类提供。

一个以超类作为输入的函数和一个继承该超类的子类作为输出可以用于在 ECMAScript 中实现混合：

```js
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

使用 mix-ins 的类可以像下面这样写：

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```
