import Vue from "vue";
import VueRouter from "vue-router";

const Block = () => import("./docs/scope/Block.vue");
const LetType = () => import("./docs/scope/Let.vue");
const ConstType = () => import("./docs/scope/Const.vue");

const ArrowFunctions = () => import("./docs/ArrowFunctions.vue");

const DefaultParameters = () =>
  import("./docs/parameters/DefaultParameters.vue");
const RestParameters = () => import("./docs/parameters/RestParameters.vue");
const SpreadParameters = () => import("./docs/parameters/SpreadParameters.vue");

const TemplateStrings = () => import("./docs/TemplateStrings.vue");

const ObjectInitializer = () => import("./docs/ObjectInitializer.vue");

const DestructuringAssignment = () =>
  import("./docs/DestructuringAssignment.vue");

const ImportType = () => import("./docs/module/Import.vue");
const ExportType = () => import("./docs/module/Export.vue");

const Classes = () => import("./docs/Classes.vue");

const GeneratorsType = () => import("./docs/Generators.vue");
const PromiseType = () => import("./docs/Promise.vue");
const ProxyType = () => import("./docs/Proxy.vue");
const ReflectType = () => import("./docs/Reflect.vue");

const SymbolType = () => import("./docs/primitive_data_type/Symbol.vue");
const SetType = () => import("./docs/primitive_data_type/Set.vue");
const WeakSetType = () => import("./docs/primitive_data_type/WeakSet.vue");
const MapType = () => import("./docs/primitive_data_type/Map.vue");
const WeakMapType = () => import("./docs/primitive_data_type/WeakMap.vue");
const TypedArrayType = () =>
  import("./docs/primitive_data_type/TypedArray.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Block,
      name: "块级作用域（block）",
    },
    {
      path: "/_scope/_block",
      component: Block,
      name: "块级作用域（block）",
    },
    {
      path: "/_scope/_let",
      component: LetType,
      name: "块级变量 let",
    },
    {
      path: "/_scope/_const",
      component: ConstType,
      name: "块级常量 const",
    },
    {
      path: "/arrow_functions",
      component: ArrowFunctions,
      name: "箭头函数",
    },
    {
      path: "/parameters/default_parameters",
      component: DefaultParameters,
      name: "默认参数值",
    },
    {
      path: "/parameters/rest_parameters",
      component: RestParameters,
      name: "剩余参数",
    },
    {
      path: "/parameters/spread_parameters",
      component: SpreadParameters,
      name: "展开运算符",
    },
    {
      path: "/template_strings",
      component: TemplateStrings,
      name: "模版字面量",
    },
    {
      path: "/Object_initializer",
      component: ObjectInitializer,
      name: "对象初始化",
    },
    {
      path: "/destructuring_assignment",
      component: DestructuringAssignment,
      name: "解构赋值",
    },
    {
      path: "/_module/_import",
      component: ImportType,
      name: "导入（import）",
    },
    {
      path: "/_module/_export",
      component: ExportType,
      name: "导出（export）",
    },
    {
      path: "/classes",
      component: Classes,
      name: "类（class）",
    },
    {
      path: "/_generators",
      component: GeneratorsType,
      name: "迭代和生成器",
    },
    {
      path: "/_promise",
      component: PromiseType,
      name: "Promise",
    },
    {
      path: "/_proxy",
      component: ProxyType,
      name: "代理（Proxy）",
    },
    {
      path: "/_reflect",
      component: ReflectType,
      name: "反射（Reflect）",
    },
    {
      path: "/primitive_data_type/_symbol",
      component: SymbolType,
      name: "Symbol 类型",
    },
    {
      path: "/primitive_data_type/_set",
      component: SetType,
      name: "Set 类型",
    },
    {
      path: "/primitive_data_type/_weakSet",
      component: WeakSetType,
      name: "WeakSet 类型",
    },
    {
      path: "/primitive_data_type/_map",
      component: MapType,
      name: "Map 类型",
    },
    {
      path: "/primitive_data_type/_weakMap",
      component: WeakMapType,
      name: "WeakMap 类型",
    },
    {
      path: "/primitive_data_type/_typedArray",
      component: TypedArrayType,
      name: "TypedArray 类型",
    },
  ],
});

export default router;
