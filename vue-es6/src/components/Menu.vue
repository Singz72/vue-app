<template>
  <div class="menu-container">
    <h2>ES6特性简介列表</h2>
    <ul>
      <li>
        作用域
        <ul>
          <li>
            <router-link to="/_scope/_block">块级作用域</router-link>
          </li>
          <li>
            <router-link to="/_scope/_let">块级变量let</router-link>
          </li>
          <li>
            <router-link to="/_scope/_const">块级常量const</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/arrow_functions">箭头函数</router-link>
      </li>
      <li>
        参数处理
        <ul>
          <li>
            <router-link to="/parameters/default_parameters">默认参数值</router-link>
          </li>
          <li>
            <router-link to="/parameters/rest_parameters">剩余参数</router-link>
          </li>
          <li>
            <router-link to="/parameters/spread_parameters">展开运算符</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/template_strings">模版字面量</router-link>
      </li>

      <li>
        <router-link to="/Object_initializer">对象属性加强</router-link>
      </li>
      <li>
        <router-link to="/destructuring_assignment">解构赋值</router-link>
      </li>
      <li>
        模块
        <ul>
          <li>
            <router-link to="/_module/_import">导入(import)</router-link>
          </li>
          <li>
            <router-link to="/_module/_export">导出(export)</router-link>
          </li>
          <li>
            <router-link to="/_module/export_default">默认(export default)</router-link>
          </li>
        </ul>
      </li>
      <li>
        类
        <ul>
          <li>
            <router-link to="/_classes/_extends">使用extends实现继承</router-link>
          </li>
          <li>
            <router-link to="/_classes/_species">重写构造器</router-link>
          </li>
          <li>
            <router-link to="/_classes/_super">super关键字</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/_generators">迭代和生成器</router-link>
      </li>
      <li>
        <router-link to="/_promise">Promise</router-link>
      </li>
      <li>
        <router-link to="/_proxy">代理(Proxy)</router-link>
      </li>
      <li>
        <router-link to="/_reflect">反射(Reflect)</router-link>
      </li>
      <li>
        新增数据类型
        <ul>
          <li>
            <router-link to="/primitive_data_type/_symbol">Symbol类型</router-link>
          </li>
          <li>
            <router-link to="/primitive_data_type/_set">Set类型</router-link>
          </li>
          <li>
            <router-link to="/primitive_data_type/_map">Map类型</router-link>
          </li>
          <li>
            <router-link to="/primitive_data_type/_typedArray">TypedArray类型</router-link>
          </li>
        </ul>
      </li>
      <li>
        原有内置对象API增强
        <ul>
          <li>
            <router-link to="/global_Objects_api/Object_assign">Object.assign</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_from">Array.from</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_of">Array.of</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_prototype_fill">Array.prototype.fill</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_prototype_find">Array.prototype.find</router-link>
          </li>
          <li>
            <router-link
              to="/global_Objects_api/Array_prototype_findIndex"
            >Array.prototype.findIndex</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_prototype_assign">Array.assign</router-link>
          </li>
          <li>
            <router-link
              to="/global_Objects_api/Array_prototype_copyWithin"
            >Array.prototype.copyWithin</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_prototype_entries">Array.prototype.entries</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_prototype_keys">Array.prototype.keys</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Array_prototype_values">Array.prototype.values</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/String_prototype_includs">String.prototype.includs</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/String_prototype_repeat">String.prototype.repeat</router-link>
          </li>
          <li>
            <router-link
              to="/global_Objects_api/String_prototype_startsWith"
            >String.prototype.startsWith</router-link>
          </li>
          <li>
            <router-link
              to="/global_Objects_api/String_prototype_endsWith"
            >String.prototype.endsWith</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Number_EPSILON">Number.EPSILON</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Number_isInteger">Number.isInteger</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Number_isSafeInteger">Number.isSafeInteger</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Number_isFinite">Number.isFinite</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Number_isNaN">Number.isNaN</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Math_acosh">Math.acosh</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Math_hypot">Math.hypot</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Math_imul">Math.imul</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Math_sign">Math.sign</router-link>
          </li>
          <li>
            <router-link to="/global_Objects_api/Math_trunc">Math.trunc</router-link>
          </li>
        </ul>
      </li>
      <!-- <li>尾递归优化</li> -->
    </ul>
    <div class="record">
      <a href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备17020743号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-container",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-container {
  height: 100%;
  padding: 0 30px;
  border-right: 1px solid #cccccc;
  box-shadow: 0 0 0.5rem #9da5ab;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 290px;
  box-sizing: border-box;
}
.record {
  padding: 40px 0 10px 0;
  line-height: 18px;
  vertical-align: middle;
  font-size: 12px;
}
.record a {
  color: rgba(37, 43, 58, 0.7);
}
.record a:hover {
  color: #c7000b;
}
</style>
