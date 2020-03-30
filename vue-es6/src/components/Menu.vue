<template>
  <div class="menu">
    <h2>ES6特性简介列表</h2>
    <ul>
      <li>
        <router-link to="_scope">作用域</router-link>
        <ul>
          <li>
            <router-link to="_block">块级作用域</router-link>
          </li>
          <li>
            <router-link to="_let">块级变量</router-link>
          </li>
          <li>
            <router-link to="_const">const</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="arrow_functions">箭头函数</router-link>
      </li>
      <li>
        <router-link to="_parameters">参数处理</router-link>
        <ul>
          <li>
            <router-link to="default_parameters">默认参数值</router-link>
          </li>
          <li>
            <router-link to="rest_parameters">剩余参数</router-link>
          </li>
          <li>
            <router-link to="spread_parameters">展开运算符</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="template_strings">模版字面量</router-link>
        <ul>
          <li>
            <router-link to="template_strings1">多行字符串</router-link>
          </li>
          <li>
            <router-link to="template_strings2">字符串插值</router-link>
          </li>
          <li>
            <router-link to="template_strings3">带标签的模版字面量</router-link>
          </li>
          <li>
            <router-link to="template_strings4">原始字符串</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="Object_initializer">对象属性加强</router-link>
      </li>
      <li>
        <router-link to="destructuring_assignment">解构赋值</router-link>
      </li>
      <li>
        <router-link to="_module">模块</router-link>
        <ul>
          <li>
            <router-link to="_import">导入(import)</router-link>
          </li>
          <li>
            <router-link to="_export">导出(export)</router-link>
          </li>
          <li>
            <router-link to="export_default">默认(export default)</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="_classes">类</router-link>
        <ul>
          <li>
            <router-link to="_extends">使用extends实现继承</router-link>
          </li>
          <li>
            <router-link to="_species">重写构造器</router-link>
          </li>
          <li>
            <router-link to="_super">super关键字</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="_generatos">迭代和生成器</router-link>
      </li>
      <li>
        <router-link to="_promise">Promise</router-link>
      </li>
      <li>
        <router-link to="_proxy">代理(Proxy)</router-link>
      </li>
      <li>
        <router-link to="_reflect">反射(Reflect)</router-link>
      </li>
      <li>
        新增数据类型
        <ul>
          <li>
            <router-link to="_symbol">Symbol类型</router-link>
          </li>
          <li>
            <router-link to="_set">Set类型</router-link>
          </li>
          <li>
            <router-link to="_map">Map类型</router-link>
          </li>
          <li>
            <router-link to="_typedArray">TypedArray类型</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="_reflect">原有内置对象API增强</router-link>
        <ul>
          <li>
            <router-link to="Object_assign">Object.assign</router-link>
          </li>
          <li>
            <router-link to="Array_from">Array.from</router-link>
          </li>
          <li>
            <router-link to="Array_of">Array.of</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_fill">Array.prototype.fill</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_find">Array.prototype.find</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_findIndex">Array.prototype.findIndex</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_">Array.assign</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_copyWithin">Array.prototype.copyWithin</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_entries">Array.prototype.entries</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_keys">Array.prototype.keys</router-link>
          </li>
          <li>
            <router-link to="Array_prototype_values">Array.prototype.values</router-link>
          </li>
          <li>
            <router-link to="String_prototype_includs">String.prototype.includs</router-link>
          </li>
          <li>
            <router-link to="String_prototype_repeat">String.prototype.repeat</router-link>
          </li>
          <li>
            <router-link to="String_prototype_startsWith">String.prototype.startsWith</router-link>
          </li>
          <li>
            <router-link to="String_prototype_endsWith">String.prototype.endsWith</router-link>
          </li>
          <li>
            <router-link to="Number_EPSILON">Number.EPSILON</router-link>
          </li>
          <li>
            <router-link to="Number_isInteger">Number.isInteger</router-link>
          </li>
          <li>
            <router-link to="Number_isSafeInteger">Number.isSafeInteger</router-link>
          </li>
          <li>
            <router-link to="Number_isFinite">Number.isFinite</router-link>
          </li>
          <li>
            <router-link to="Number_isNaN">Number.isNaN</router-link>
          </li>
          <li>
            <router-link to="Math_acosh">Math.acosh</router-link>
          </li>
          <li>
            <router-link to="Math_hypot">Math.hypot</router-link>
          </li>
          <li>
            <router-link to="Math_imul">Math.imul</router-link>
          </li>
          <li>
            <router-link to="Math_sign">Math.sign</router-link>
          </li>
          <li>
            <router-link to="Math_trunc">Math.trunc</router-link>
          </li>
        </ul>
      </li>
      <li>尾递归优化</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "menu",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  height: 100%;
  padding: 0 30px;
  border-right: 1px solid #cccccc;
  box-shadow: 0 0 0.5rem #9da5ab;
  overflow-y: scroll;
}
</style>
