# classes

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
