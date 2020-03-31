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
      component: Block
    },
    {
      path: "/_scope/_let",
      component: LetType
    },
    {
      path: "/_scope/_const",
      component: ConstType
    },
    {
      path: "/arrow_functions",
      component: ArrowFunctions
    },
    {
      path: "/parameters/default_parameters",
      component: DefaultParameters
    },
    {
      path: "/parameters/rest_parameters",
      component: RestParameters
    },
    {
      path: "/parameters/spread_parameters",
      component: SpreadParameters
    },
    {
      path: "/template_strings",
      component: TemplateStrings
    },
    {
      path: "/Object_initializer",
      component: ObjectInitializer
    },
    {
      path: "/destructuring_assignment",
      component: DestructuringAssignment
    },
    {
      path: "/_module/_import",
      component: ImportType
    },
    {
      path: "/_module/_export",
      component: ExportType
    },
    {
      path: "/_module/export_default",
      component: ExportDefault
    },
    {
      path: "/_classes/_extends",
      component: ExtendsType
    },
    {
      path: "/_classes/_species",
      component: Species
    },
    {
      path: "/_classes/_super",
      component: SuperType
    },
    {
      path: "/_generators",
      component: GeneratorsType
    },
    {
      path: "/_promise",
      component: PromiseType
    },
    {
      path: "/_proxy",
      component: ProxyType
    },
    {
      path: "/_reflect",
      component: ReflectType
    },
    {
      path: "/primitive_data_type/_symbol",
      component: SymbolType
    },
    {
      path: "/primitive_data_type/_set",
      component: SetType
    },
    {
      path: "/primitive_data_type/_map",
      component: MapType
    },
    {
      path: "/primitive_data_type/_typedArray",
      component: TypedArrayType
    },

    {
      path: "/global_Objects_api/Object_assign",
      component: ObjectAssign
    },
    {
      path: "/global_Objects_api/Array_from",
      component: ArrayFrom
    },
    {
      path: "/global_Objects_api/Array_of",
      component: ArrayOf
    },
    {
      path: "/global_Objects_api/Array_prototype_fill",
      component: ArrayPrototypeFill
    },
    {
      path: "/global_Objects_api/Array_prototype_find",
      component: ArrayPrototypeFind
    },
    {
      path: "/global_Objects_api/Array_prototype_findIndex",
      component: ArrayPrototypeFindIndex
    },
    {
      path: "/global_Objects_api/Array_prototype_assign",
      component: ArrayPrototypeAssign
    },
    {
      path: "/global_Objects_api/Array_prototype_copyWithin",
      component: ArrayPrototypeCopyWithin
    },
    {
      path: "/global_Objects_api/Array_prototype_entries",
      component: ArrayPrototypeEntries
    },
    {
      path: "/global_Objects_api/Array_prototype_keys",
      component: ArrayPrototypeKeys
    },
    {
      path: "/global_Objects_api/Array_prototype_values",
      component: ArrayPrototypeValues
    },
    {
      path: "/global_Objects_api/String_prototype_includs",
      component: StringPrototypeIncluds
    },
    {
      path: "/global_Objects_api/String_prototype_repeat",
      component: StringPrototypeRepeat
    },
    {
      path: "/global_Objects_api/String_prototype_startsWith",
      component: StringPrototypeStartsWith
    },
    {
      path: "/global_Objects_api/String_prototype_endsWith",
      component: StringPrototypeEndsWith
    },
    {
      path: "/global_Objects_api/Number_EPSILON",
      component: NumberEPSILON
    },
    {
      path: "/global_Objects_api/Number_isInteger",
      component: NumberIsInteger
    },
    {
      path: "/global_Objects_api/Number_isSafeInteger",
      component: NumberIsSafeInteger
    },
    {
      path: "/global_Objects_api/Number_isFinite",
      component: NumberIsFinite
    },
    {
      path: "/global_Objects_api/Number_isNaN",
      component: NumberIsNaN
    },
    {
      path: "/global_Objects_api/Math_acosh",
      component: MathAcosh
    },
    {
      path: "/global_Objects_api/Math_hypot",
      component: MathHypot
    },
    {
      path: "/global_Objects_api/Math_imul",
      component: MathImul
    },
    {
      path: "/global_Objects_api/Math_sign",
      component: MathSign
    },
    {
      path: "/global_Objects_api/Math_trunc",
      component: MathTrunc
    }
  ]
});

export default router;
