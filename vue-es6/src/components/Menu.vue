<template>
  <div class="menu-container">
    <div class="menu-container-title">ES6特性简介列表</div>
    <ul>
      <li>
        作用域
        <ul>
          <li>
            <router-link to="/_scope/_block">块级作用域(block)</router-link>
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
        </ul>
      </li>
      <li>
        <router-link to="/classes">类(class)</router-link>
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
            <router-link to="/primitive_data_type/_weakSet">WeakSet类型</router-link>
          </li>
          <li>
            <router-link to="/primitive_data_type/_map">Map类型</router-link>
          </li>
          <li>
            <router-link to="/primitive_data_type/_weakMap">WeakMap类型</router-link>
          </li>
          <li>
            <router-link to="/primitive_data_type/_typedArray">TypedArray类型</router-link>
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
.menu-container-title {
  font-size: 2.4em;
  margin: 0.8em 0;
  font-weight: bolder;
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
