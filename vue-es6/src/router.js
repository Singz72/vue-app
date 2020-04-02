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
const ExportDefault = () => import("./docs/module/ExportDefault.vue");

const ExtendsType = () => import("./docs/classes/Extends.vue");
const Species = () => import("./docs/classes/Species.vue");
const SuperType = () => import("./docs/classes/Super.vue");

const GeneratorsType = () => import("./docs/Generators.vue");
const PromiseType = () => import("./docs/Promise.vue");
const ProxyType = () => import("./docs/Proxy.vue");
const ReflectType = () => import("./docs/Reflect.vue");

const SymbolType = () => import("./docs/primitive_data_type/Symbol.vue");
const SetType = () => import("./docs/primitive_data_type/Set.vue");
const MapType = () => import("./docs/primitive_data_type/Map.vue");
const TypedArrayType = () =>
  import("./docs/primitive_data_type/TypedArray.vue");

const ObjectAssign = () => import("./docs/global_Objects_api/ObjectAssign.vue");
const ArrayFrom = () => import("./docs/global_Objects_api/ArrayFrom.vue");
const ArrayOf = () => import("./docs/global_Objects_api/ArrayOf.vue");
const ArrayPrototypeFill = () =>
  import("./docs/global_Objects_api/ArrayPrototypeFill.vue");
const ArrayPrototypeFind = () =>
  import("./docs/global_Objects_api/ArrayPrototypeFind.vue");
const ArrayPrototypeFindIndex = () =>
  import("./docs/global_Objects_api/ArrayPrototypeFindIndex.vue");
const ArrayPrototypeAssign = () =>
  import("./docs/global_Objects_api/ArrayPrototypeAssign.vue");
const ArrayPrototypeCopyWithin = () =>
  import("./docs/global_Objects_api/ArrayPrototypeCopyWithin.vue");
const ArrayPrototypeEntries = () =>
  import("./docs/global_Objects_api/ArrayPrototypeEntries.vue");
const ArrayPrototypeKeys = () =>
  import("./docs/global_Objects_api/ArrayPrototypeKeys.vue");
const ArrayPrototypeValues = () =>
  import("./docs/global_Objects_api/ArrayPrototypeValues.vue");

const StringPrototypeIncluds = () =>
  import("./docs/global_Objects_api/StringPrototypeIncluds.vue");
const StringPrototypeRepeat = () =>
  import("./docs/global_Objects_api/StringPrototypeRepeat.vue");
const StringPrototypeStartsWith = () =>
  import("./docs/global_Objects_api/StringPrototypeStartsWith.vue");
const StringPrototypeEndsWith = () =>
  import("./docs/global_Objects_api/StringPrototypeEndsWith.vue");

const NumberEPSILON = () =>
  import("./docs/global_Objects_api/NumberEPSILON.vue");
const NumberIsInteger = () =>
  import("./docs/global_Objects_api/NumberIsInteger.vue");
const NumberIsSafeInteger = () =>
  import("./docs/global_Objects_api/NumberIsSafeInteger.vue");
const NumberIsFinite = () =>
  import("./docs/global_Objects_api/NumberIsFinite.vue");
const NumberIsNaN = () => import("./docs/global_Objects_api/NumberIsNaN.vue");
const MathAcosh = () => import("./docs/global_Objects_api/MathAcosh.vue");
const MathHypot = () => import("./docs/global_Objects_api/MathHypot.vue");
const MathImul = () => import("./docs/global_Objects_api/MathImul.vue");
const MathSign = () => import("./docs/global_Objects_api/MathSign.vue");
const MathTrunc = () => import("./docs/global_Objects_api/MathTrunc.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/_scope/_block",
      component: Block,
      name: '块级作用域（block）'
    },
    {
      path: "/_scope/_let",
      component: LetType,
      name: '块级变量 let'
    },
    {
      path: "/_scope/_const",
      component: ConstType,
      name: '块级常量 const'
    },
    {
      path: "/arrow_functions",
      component: ArrowFunctions,
      name: '箭头函数'
    },
    {
      path: "/parameters/default_parameters",
      component: DefaultParameters,
      name: '默认参数值'
    },
    {
      path: "/parameters/rest_parameters",
      component: RestParameters,
      name: '剩余参数'
    },
    {
      path: "/parameters/spread_parameters",
      component: SpreadParameters,
      name: '展开运算符'
    },
    {
      path: "/template_strings",
      component: TemplateStrings,
      name: '模版字面量'
    },
    {
      path: "/Object_initializer",
      component: ObjectInitializer,
      name: '对象属性加强'
    },
    {
      path: "/destructuring_assignment",
      component: DestructuringAssignment,
      name: '解构赋值'
    },
    {
      path: "/_module/_import",
      component: ImportType,
      name: '导入（import）'
    },
    {
      path: "/_module/_export",
      component: ExportType,
      name: '导出（export）'
    },
    {
      path: "/_module/export_default",
      component: ExportDefault,
      name: '默认（export default）'
    },
    {
      path: "/_classes/_extends",
      component: ExtendsType,
      name: '使用 extends 实现继承'
    },
    {
      path: "/_classes/_species",
      component: Species,
      name: '重写构造器'
    },
    {
      path: "/_classes/_super",
      component: SuperType,
      name: 'super 关键字'
    },
    {
      path: "/_generators",
      component: GeneratorsType,
      name: '迭代和生成器'
    },
    {
      path: "/_promise",
      component: PromiseType,
      name: 'Promise'
    },
    {
      path: "/_proxy",
      component: ProxyType,
      name: '代理（Proxy）'
    },
    {
      path: "/_reflect",
      component: ReflectType,
      name: '反射（Reflect）'
    },
    {
      path: "/primitive_data_type/_symbol",
      component: SymbolType,
      name: 'Symbol 类型'
    },
    {
      path: "/primitive_data_type/_set",
      component: SetType,
      name: 'Set 类型'
    },
    {
      path: "/primitive_data_type/_map",
      component: MapType,
      name: 'Map 类型'
    },
    {
      path: "/primitive_data_type/_typedArray",
      component: TypedArrayType,
      name: 'TypedArray 类型'
    },

    {
      path: "/global_Objects_api/Object_assign",
      component: ObjectAssign,
      name: 'Object.assign'
    },
    {
      path: "/global_Objects_api/Array_from",
      component: ArrayFrom,
      name: 'Array.from'
    },
    {
      path: "/global_Objects_api/Array_of",
      component: ArrayOf,
      name: 'Array.of'
    },
    {
      path: "/global_Objects_api/Array_prototype_fill",
      component: ArrayPrototypeFill,
      name: 'Array.prototype.fill'
    },
    {
      path: "/global_Objects_api/Array_prototype_find",
      component: ArrayPrototypeFind,
      name: 'Array.prototype.find'
    },
    {
      path: "/global_Objects_api/Array_prototype_findIndex",
      component: ArrayPrototypeFindIndex,
      name: 'Array.prototype.findIndex'
    },
    {
      path: "/global_Objects_api/Array_prototype_assign",
      component: ArrayPrototypeAssign,
      name: 'Array.assign'
    },
    {
      path: "/global_Objects_api/Array_prototype_copyWithin",
      component: ArrayPrototypeCopyWithin,
      name: 'Array.prototype.copyWithin'
    },
    {
      path: "/global_Objects_api/Array_prototype_entries",
      component: ArrayPrototypeEntries,
      name: 'Array.prototype.entries'
    },
    {
      path: "/global_Objects_api/Array_prototype_keys",
      component: ArrayPrototypeKeys,
      name: 'Array.prototype.keys'
    },
    {
      path: "/global_Objects_api/Array_prototype_values",
      component: ArrayPrototypeValues,
      name: 'Array.prototype.values'
    },
    {
      path: "/global_Objects_api/String_prototype_includs",
      component: StringPrototypeIncluds,
      name: 'String.prototype.includs'
    },
    {
      path: "/global_Objects_api/String_prototype_repeat",
      component: StringPrototypeRepeat,
      name: 'String.prototype.repeat'
    },
    {
      path: "/global_Objects_api/String_prototype_startsWith",
      component: StringPrototypeStartsWith,
      name: 'String.prototype.startsWith'
    },
    {
      path: "/global_Objects_api/String_prototype_endsWith",
      component: StringPrototypeEndsWith,
      name: 'String.prototype.endsWith'
    },
    {
      path: "/global_Objects_api/Number_EPSILON",
      component: NumberEPSILON,
      name: 'Number.EPSILON'
    },
    {
      path: "/global_Objects_api/Number_isInteger",
      component: NumberIsInteger,
      name: 'Number.isInteger'
    },
    {
      path: "/global_Objects_api/Number_isSafeInteger",
      component: NumberIsSafeInteger,
      name: 'Number.isSafeInteger'
    },
    {
      path: "/global_Objects_api/Number_isFinite",
      component: NumberIsFinite,
      name: 'Number.isFinite'
    },
    {
      path: "/global_Objects_api/Number_isNaN",
      component: NumberIsNaN,
      name: 'Number.isNaN'
    },
    {
      path: "/global_Objects_api/Math_acosh",
      component: MathAcosh,
      name: 'Math.acosh'
    },
    {
      path: "/global_Objects_api/Math_hypot",
      component: MathHypot,
      name: 'Math.hypot'
    },
    {
      path: "/global_Objects_api/Math_imul",
      component: MathImul,
      name: 'Math.imul'
    },
    {
      path: "/global_Objects_api/Math_sign",
      component: MathSign,
      name: 'Math.sign'
    },
    {
      path: "/global_Objects_api/Math_trunc",
      component: MathTrunc,
      name: 'Math.trunc'
    }
  ]
});

export default router;
