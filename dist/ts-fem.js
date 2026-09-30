var cu = Object.defineProperty;
var lu = (e, i, t) => i in e ? cu(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var se = (e, i, t) => (lu(e, typeof i != "symbol" ? i + "" : i, t), t);
function Or() {
  return Or = Object.assign ? Object.assign.bind() : function(e) {
    for (var i = 1; i < arguments.length; i++) {
      var t = arguments[i];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Or.apply(this, arguments);
}
var Fi = {
  // minimum relative difference between two compared values,
  // used by all comparison functions
  epsilon: 1e-12,
  // type of default matrix output. Choose 'matrix' (default) or 'array'
  matrix: "Matrix",
  // type of default number output. Choose 'number' (default) 'BigNumber', or 'Fraction
  number: "number",
  // number of significant digits in BigNumbers
  precision: 64,
  // predictable output type of functions. When true, output type depends only
  // on the input types. When false (default), output type can vary depending
  // on input values. For example `math.sqrt(-4)` returns `complex('2i')` when
  // predictable is false, and returns `NaN` when true.
  predictable: !1,
  // random seed for seeded pseudo random number generation
  // null = randomly seed
  randomSeed: null
};
function qe(e) {
  return typeof e == "number";
}
function Re(e) {
  return !e || typeof e != "object" || typeof e.constructor != "function" ? !1 : e.isBigNumber === !0 && typeof e.constructor.prototype == "object" && e.constructor.prototype.isBigNumber === !0 || typeof e.constructor.isDecimal == "function" && e.constructor.isDecimal(e) === !0;
}
function Wt(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isComplex === !0 || !1;
}
function kt(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isFraction === !0 || !1;
}
function bi(e) {
  return e && e.constructor.prototype.isUnit === !0 || !1;
}
function ir(e) {
  return typeof e == "string";
}
var Me = Array.isArray;
function _e(e) {
  return e && e.constructor.prototype.isMatrix === !0 || !1;
}
function lt(e) {
  return Array.isArray(e) || _e(e);
}
function Mi(e) {
  return e && e.isDenseMatrix && e.constructor.prototype.isMatrix === !0 || !1;
}
function Si(e) {
  return e && e.isSparseMatrix && e.constructor.prototype.isMatrix === !0 || !1;
}
function Bi(e) {
  return e && e.constructor.prototype.isRange === !0 || !1;
}
function bt(e) {
  return e && e.constructor.prototype.isIndex === !0 || !1;
}
function hu(e) {
  return typeof e == "boolean";
}
function vu(e) {
  return e && e.constructor.prototype.isResultSet === !0 || !1;
}
function pu(e) {
  return e && e.constructor.prototype.isHelp === !0 || !1;
}
function du(e) {
  return typeof e == "function";
}
function mu(e) {
  return e instanceof Date;
}
function gu(e) {
  return e instanceof RegExp;
}
function Ni(e) {
  return !!(e && typeof e == "object" && e.constructor === Object && !Wt(e) && !kt(e));
}
function Du(e) {
  return e === null;
}
function wu(e) {
  return e === void 0;
}
function yu(e) {
  return e && e.isAccessorNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Au(e) {
  return e && e.isArrayNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Eu(e) {
  return e && e.isAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Cu(e) {
  return e && e.isBlockNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Fu(e) {
  return e && e.isConditionalNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function bu(e) {
  return e && e.isConstantNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Mu(e) {
  return e && e.isFunctionAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Su(e) {
  return e && e.isFunctionNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Bu(e) {
  return e && e.isIndexNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Nu(e) {
  return e && e.isNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function xu(e) {
  return e && e.isObjectNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function _u(e) {
  return e && e.isOperatorNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function zu(e) {
  return e && e.isParenthesisNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Tu(e) {
  return e && e.isRangeNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Iu(e) {
  return e && e.isRelationalNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Lu(e) {
  return e && e.isSymbolNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Ou(e) {
  return e && e.constructor.prototype.isChain === !0 || !1;
}
function lr(e) {
  var i = typeof e;
  return i === "object" ? e === null ? "null" : Re(e) ? "BigNumber" : e.constructor && e.constructor.name ? e.constructor.name : "Object" : i;
}
function Fe(e) {
  var i = typeof e;
  if (i === "number" || i === "string" || i === "boolean" || e === null || e === void 0)
    return e;
  if (typeof e.clone == "function")
    return e.clone();
  if (Array.isArray(e))
    return e.map(function(t) {
      return Fe(t);
    });
  if (e instanceof Date)
    return new Date(e.valueOf());
  if (Re(e))
    return e;
  if (Ni(e))
    return qu(e, Fe);
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(e, ")"));
}
function qu(e, i) {
  var t = {};
  for (var n in e)
    Xr(e, n) && (t[n] = i(e[n]));
  return t;
}
function $u(e, i) {
  for (var t in i)
    Xr(i, t) && (e[t] = i[t]);
  return e;
}
function qr(e, i) {
  var t, n, r;
  if (Array.isArray(e)) {
    if (!Array.isArray(i) || e.length !== i.length)
      return !1;
    for (n = 0, r = e.length; n < r; n++)
      if (!qr(e[n], i[n]))
        return !1;
    return !0;
  } else {
    if (typeof e == "function")
      return e === i;
    if (e instanceof Object) {
      if (Array.isArray(i) || !(i instanceof Object))
        return !1;
      for (t in e)
        if (!(t in i) || !qr(e[t], i[t]))
          return !1;
      for (t in i)
        if (!(t in e))
          return !1;
      return !0;
    } else
      return e === i;
  }
}
function Xr(e, i) {
  return e && Object.hasOwnProperty.call(e, i);
}
function Pu(e, i) {
  for (var t = {}, n = 0; n < i.length; n++) {
    var r = i[n], a = e[r];
    a !== void 0 && (t[r] = a);
  }
  return t;
}
var Ru = ["Matrix", "Array"], Uu = ["number", "BigNumber", "Fraction"], je = function(i) {
  if (i)
    throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(Fi);
};
Or(je, Fi, {
  MATRIX_OPTIONS: Ru,
  NUMBER_OPTIONS: Uu
});
function hn() {
  return !0;
}
function nr() {
  return !1;
}
function zr() {
}
const vn = "Argument is not a typed-function.";
function xi() {
  function e(N) {
    return typeof N == "object" && N !== null && N.constructor === Object;
  }
  const i = [{
    name: "number",
    test: function(N) {
      return typeof N == "number";
    }
  }, {
    name: "string",
    test: function(N) {
      return typeof N == "string";
    }
  }, {
    name: "boolean",
    test: function(N) {
      return typeof N == "boolean";
    }
  }, {
    name: "Function",
    test: function(N) {
      return typeof N == "function";
    }
  }, {
    name: "Array",
    test: Array.isArray
  }, {
    name: "Date",
    test: function(N) {
      return N instanceof Date;
    }
  }, {
    name: "RegExp",
    test: function(N) {
      return N instanceof RegExp;
    }
  }, {
    name: "Object",
    test: e
  }, {
    name: "null",
    test: function(N) {
      return N === null;
    }
  }, {
    name: "undefined",
    test: function(N) {
      return N === void 0;
    }
  }], t = {
    name: "any",
    test: hn,
    isAny: !0
  };
  let n, r, a = 0, u = {
    createCount: 0
  };
  function f(N) {
    const _ = n.get(N);
    if (_)
      return _;
    let O = 'Unknown type "' + N + '"';
    const R = N.toLowerCase();
    let H;
    for (H of r)
      if (H.toLowerCase() === R) {
        O += '. Did you mean "' + H + '" ?';
        break;
      }
    throw new TypeError(O);
  }
  function c(N) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const O = _ ? f(_).index : r.length, R = [];
    for (let Y = 0; Y < N.length; ++Y) {
      if (!N[Y] || typeof N[Y].name != "string" || typeof N[Y].test != "function")
        throw new TypeError("Object with properties {name: string, test: function} expected");
      const ue = N[Y].name;
      if (n.has(ue))
        throw new TypeError('Duplicate type name "' + ue + '"');
      R.push(ue), n.set(ue, {
        name: ue,
        test: N[Y].test,
        isAny: N[Y].isAny,
        index: O + Y,
        conversionsTo: []
        // Newly added type can't have any conversions to it
      });
    }
    const H = r.slice(O);
    r = r.slice(0, O).concat(R).concat(H);
    for (let Y = O + R.length; Y < r.length; ++Y)
      n.get(r[Y]).index = Y;
  }
  function h() {
    n = /* @__PURE__ */ new Map(), r = [], a = 0, c([t], !1);
  }
  h(), c(i);
  function s() {
    let N;
    for (N of r)
      n.get(N).conversionsTo = [];
    a = 0;
  }
  function o(N) {
    const _ = r.filter((O) => {
      const R = n.get(O);
      return !R.isAny && R.test(N);
    });
    return _.length ? _ : ["any"];
  }
  function l(N) {
    return N && typeof N == "function" && "_typedFunctionData" in N;
  }
  function v(N, _, O) {
    if (!l(N))
      throw new TypeError(vn);
    const R = O && O.exact, H = Array.isArray(_) ? _.join(",") : _, Y = A(H), ue = m(Y);
    if (!R || ue in N.signatures) {
      const Ne = N._typedFunctionData.signatureMap.get(ue);
      if (Ne)
        return Ne;
    }
    const te = Y.length;
    let ae;
    if (R) {
      ae = [];
      let Ne;
      for (Ne in N.signatures)
        ae.push(N._typedFunctionData.signatureMap.get(Ne));
    } else
      ae = N._typedFunctionData.signatures;
    for (let Ne = 0; Ne < te; ++Ne) {
      const Ie = Y[Ne], Ue = [];
      let Ke;
      for (Ke of ae) {
        const Xe = b(Ke.params, Ne);
        if (!(!Xe || Ie.restParam && !Xe.restParam)) {
          if (!Xe.hasAny) {
            const ur = D(Xe);
            if (Ie.types.some((or) => !ur.has(or.name)))
              continue;
          }
          Ue.push(Ke);
        }
      }
      if (ae = Ue, ae.length === 0)
        break;
    }
    let re;
    for (re of ae)
      if (re.params.length <= te)
        return re;
    throw new TypeError("Signature not found (signature: " + (N.name || "unnamed") + "(" + m(Y, ", ") + "))");
  }
  function g(N, _, O) {
    return v(N, _, O).implementation;
  }
  function p(N, _) {
    const O = f(_);
    if (O.test(N))
      return N;
    const R = O.conversionsTo;
    if (R.length === 0)
      throw new Error("There are no conversions to " + _ + " defined.");
    for (let H = 0; H < R.length; H++)
      if (f(R[H].from).test(N))
        return R[H].convert(N);
    throw new Error("Cannot convert " + N + " to " + _);
  }
  function m(N) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return N.map((O) => O.name).join(_);
  }
  function d(N) {
    const _ = N.indexOf("...") === 0, R = (_ ? N.length > 3 ? N.slice(3) : "any" : N).split("|").map((te) => f(te.trim()));
    let H = !1, Y = _ ? "..." : "";
    return {
      types: R.map(function(te) {
        return H = te.isAny || H, Y += te.name + "|", {
          name: te.name,
          typeIndex: te.index,
          test: te.test,
          isAny: te.isAny,
          conversion: null,
          conversionIndex: -1
        };
      }),
      name: Y.slice(0, -1),
      // remove trailing '|' from above
      hasAny: H,
      hasConversion: !1,
      restParam: _
    };
  }
  function y(N) {
    const _ = N.types.map((ue) => ue.name), O = Z(_);
    let R = N.hasAny, H = N.name;
    const Y = O.map(function(ue) {
      const te = f(ue.from);
      return R = te.isAny || R, H += "|" + ue.from, {
        name: ue.from,
        typeIndex: te.index,
        test: te.test,
        isAny: te.isAny,
        conversion: ue,
        conversionIndex: ue.index
      };
    });
    return {
      types: N.types.concat(Y),
      name: H,
      hasAny: R,
      hasConversion: Y.length > 0,
      restParam: N.restParam
    };
  }
  function D(N) {
    return N.typeSet || (N.typeSet = /* @__PURE__ */ new Set(), N.types.forEach((_) => N.typeSet.add(_.name))), N.typeSet;
  }
  function A(N) {
    const _ = [];
    if (typeof N != "string")
      throw new TypeError("Signatures must be strings");
    const O = N.trim();
    if (O === "")
      return _;
    const R = O.split(",");
    for (let H = 0; H < R.length; ++H) {
      const Y = d(R[H].trim());
      if (Y.restParam && H !== R.length - 1)
        throw new SyntaxError('Unexpected rest parameter "' + R[H] + '": only allowed for the last parameter');
      if (Y.types.length === 0)
        return null;
      _.push(Y);
    }
    return _;
  }
  function E(N) {
    const _ = X(N);
    return _ ? _.restParam : !1;
  }
  function w(N) {
    if (!N || N.types.length === 0)
      return hn;
    if (N.types.length === 1)
      return f(N.types[0].name).test;
    if (N.types.length === 2) {
      const _ = f(N.types[0].name).test, O = f(N.types[1].name).test;
      return function(H) {
        return _(H) || O(H);
      };
    } else {
      const _ = N.types.map(function(O) {
        return f(O.name).test;
      });
      return function(R) {
        for (let H = 0; H < _.length; H++)
          if (_[H](R))
            return !0;
        return !1;
      };
    }
  }
  function F(N) {
    let _, O, R;
    if (E(N)) {
      _ = Q(N).map(w);
      const H = _.length, Y = w(X(N)), ue = function(te) {
        for (let ae = H; ae < te.length; ae++)
          if (!Y(te[ae]))
            return !1;
        return !0;
      };
      return function(ae) {
        for (let re = 0; re < _.length; re++)
          if (!_[re](ae[re]))
            return !1;
        return ue(ae) && ae.length >= H + 1;
      };
    } else
      return N.length === 0 ? function(Y) {
        return Y.length === 0;
      } : N.length === 1 ? (O = w(N[0]), function(Y) {
        return O(Y[0]) && Y.length === 1;
      }) : N.length === 2 ? (O = w(N[0]), R = w(N[1]), function(Y) {
        return O(Y[0]) && R(Y[1]) && Y.length === 2;
      }) : (_ = N.map(w), function(Y) {
        for (let ue = 0; ue < _.length; ue++)
          if (!_[ue](Y[ue]))
            return !1;
        return Y.length === _.length;
      });
  }
  function b(N, _) {
    return _ < N.length ? N[_] : E(N) ? X(N) : null;
  }
  function C(N, _) {
    const O = b(N, _);
    return O ? D(O) : /* @__PURE__ */ new Set();
  }
  function S(N) {
    return N.conversion === null || N.conversion === void 0;
  }
  function M(N, _) {
    const O = /* @__PURE__ */ new Set();
    return N.forEach((R) => {
      const H = C(R.params, _);
      let Y;
      for (Y of H)
        O.add(Y);
    }), O.has("any") ? ["any"] : Array.from(O);
  }
  function B(N, _, O) {
    let R, H;
    const Y = N || "unnamed";
    let ue = O, te;
    for (te = 0; te < _.length; te++) {
      const Ie = [];
      if (ue.forEach((Ue) => {
        const Ke = b(Ue.params, te), Xe = w(Ke);
        (te < Ue.params.length || E(Ue.params)) && Xe(_[te]) && Ie.push(Ue);
      }), Ie.length === 0) {
        if (H = M(ue, te), H.length > 0) {
          const Ue = o(_[te]);
          return R = new TypeError("Unexpected type of argument in function " + Y + " (expected: " + H.join(" or ") + ", actual: " + Ue.join(" | ") + ", index: " + te + ")"), R.data = {
            category: "wrongType",
            fn: Y,
            index: te,
            actual: Ue,
            expected: H
          }, R;
        }
      } else
        ue = Ie;
    }
    const ae = ue.map(function(Ie) {
      return E(Ie.params) ? 1 / 0 : Ie.params.length;
    });
    if (_.length < Math.min.apply(null, ae))
      return H = M(ue, te), R = new TypeError("Too few arguments in function " + Y + " (expected: " + H.join(" or ") + ", index: " + _.length + ")"), R.data = {
        category: "tooFewArgs",
        fn: Y,
        index: _.length,
        expected: H
      }, R;
    const re = Math.max.apply(null, ae);
    if (_.length > re)
      return R = new TypeError("Too many arguments in function " + Y + " (expected: " + re + ", actual: " + _.length + ")"), R.data = {
        category: "tooManyArgs",
        fn: Y,
        index: _.length,
        expectedLength: re
      }, R;
    const Ne = [];
    for (let Ie = 0; Ie < _.length; ++Ie)
      Ne.push(o(_[Ie]).join("|"));
    return R = new TypeError('Arguments of type "' + Ne.join(", ") + '" do not match any of the defined signatures of function ' + Y + "."), R.data = {
      category: "mismatch",
      actual: Ne
    }, R;
  }
  function I(N) {
    let _ = r.length + 1;
    for (let O = 0; O < N.types.length; O++)
      S(N.types[O]) && (_ = Math.min(_, N.types[O].typeIndex));
    return _;
  }
  function T(N) {
    let _ = a + 1;
    for (let O = 0; O < N.types.length; O++)
      S(N.types[O]) || (_ = Math.min(_, N.types[O].conversionIndex));
    return _;
  }
  function L(N, _) {
    if (N.hasAny) {
      if (!_.hasAny)
        return 1;
    } else if (_.hasAny)
      return -1;
    if (N.restParam) {
      if (!_.restParam)
        return 1;
    } else if (_.restParam)
      return -1;
    if (N.hasConversion) {
      if (!_.hasConversion)
        return 1;
    } else if (_.hasConversion)
      return -1;
    const O = I(N) - I(_);
    if (O < 0)
      return -1;
    if (O > 0)
      return 1;
    const R = T(N) - T(_);
    return R < 0 ? -1 : R > 0 ? 1 : 0;
  }
  function x(N, _) {
    const O = N.params, R = _.params, H = X(O), Y = X(R), ue = E(O), te = E(R);
    if (ue && H.hasAny) {
      if (!te || !Y.hasAny)
        return 1;
    } else if (te && Y.hasAny)
      return -1;
    let ae = 0, re = 0, Ne;
    for (Ne of O)
      Ne.hasAny && ++ae, Ne.hasConversion && ++re;
    let Ie = 0, Ue = 0;
    for (Ne of R)
      Ne.hasAny && ++Ie, Ne.hasConversion && ++Ue;
    if (ae !== Ie)
      return ae - Ie;
    if (ue && H.hasConversion) {
      if (!te || !Y.hasConversion)
        return 1;
    } else if (te && Y.hasConversion)
      return -1;
    if (re !== Ue)
      return re - Ue;
    if (ue) {
      if (!te)
        return 1;
    } else if (te)
      return -1;
    const Ke = (O.length - R.length) * (ue ? -1 : 1);
    if (Ke !== 0)
      return Ke;
    const Xe = [];
    let ur = 0;
    for (let _r = 0; _r < O.length; ++_r) {
      const ot = L(O[_r], R[_r]);
      Xe.push(ot), ur += ot;
    }
    if (ur !== 0)
      return ur;
    let or;
    for (or of Xe)
      if (or !== 0)
        return or;
    return 0;
  }
  function Z(N) {
    if (N.length === 0)
      return [];
    const _ = N.map(f);
    N.length > 1 && _.sort((H, Y) => H.index - Y.index);
    let O = _[0].conversionsTo;
    if (N.length === 1)
      return O;
    O = O.concat([]);
    const R = new Set(N);
    for (let H = 1; H < _.length; ++H) {
      let Y;
      for (Y of _[H].conversionsTo)
        R.has(Y.from) || (O.push(Y), R.add(Y.from));
    }
    return O;
  }
  function q(N, _) {
    let O = _;
    if (N.some((H) => H.hasConversion)) {
      const H = E(N), Y = N.map(z);
      O = function() {
        const te = [], ae = H ? arguments.length - 1 : arguments.length;
        for (let re = 0; re < ae; re++)
          te[re] = Y[re](arguments[re]);
        return H && (te[ae] = arguments[ae].map(Y[ae])), _.apply(this, te);
      };
    }
    let R = O;
    if (E(N)) {
      const H = N.length - 1;
      R = function() {
        return O.apply(this, J(arguments, 0, H).concat([J(arguments, H)]));
      };
    }
    return R;
  }
  function z(N) {
    let _, O, R, H;
    const Y = [], ue = [];
    switch (N.types.forEach(function(te) {
      te.conversion && (Y.push(f(te.conversion.from).test), ue.push(te.conversion.convert));
    }), ue.length) {
      case 0:
        return function(ae) {
          return ae;
        };
      case 1:
        return _ = Y[0], R = ue[0], function(ae) {
          return _(ae) ? R(ae) : ae;
        };
      case 2:
        return _ = Y[0], O = Y[1], R = ue[0], H = ue[1], function(ae) {
          return _(ae) ? R(ae) : O(ae) ? H(ae) : ae;
        };
      default:
        return function(ae) {
          for (let re = 0; re < ue.length; re++)
            if (Y[re](ae))
              return ue[re](ae);
          return ae;
        };
    }
  }
  function V(N) {
    function _(O, R, H) {
      if (R < O.length) {
        const Y = O[R];
        let ue = [];
        if (Y.restParam) {
          const te = Y.types.filter(S);
          te.length < Y.types.length && ue.push({
            types: te,
            name: "..." + te.map((ae) => ae.name).join("|"),
            hasAny: te.some((ae) => ae.isAny),
            hasConversion: !1,
            restParam: !0
          }), ue.push(Y);
        } else
          ue = Y.types.map(function(te) {
            return {
              types: [te],
              name: te.name,
              hasAny: te.isAny,
              hasConversion: te.conversion,
              restParam: !1
            };
          });
        return j(ue, function(te) {
          return _(O, R + 1, H.concat([te]));
        });
      } else
        return [H];
    }
    return _(N, 0, []);
  }
  function K(N, _) {
    const O = Math.max(N.length, _.length);
    for (let te = 0; te < O; te++) {
      const ae = C(N, te), re = C(_, te);
      let Ne = !1, Ie;
      for (Ie of re)
        if (ae.has(Ie)) {
          Ne = !0;
          break;
        }
      if (!Ne)
        return !1;
    }
    const R = N.length, H = _.length, Y = E(N), ue = E(_);
    return Y ? ue ? R === H : H >= R : ue ? R >= H : R === H;
  }
  function P(N) {
    return N.map((_) => Ae(_) ? me(_.referToSelf.callback) : we(_) ? le(_.referTo.references, _.referTo.callback) : _);
  }
  function $(N, _, O) {
    const R = [];
    let H;
    for (H of N) {
      let Y = O[H];
      if (typeof Y != "number")
        throw new TypeError('No definition for referenced signature "' + H + '"');
      if (Y = _[Y], typeof Y != "function")
        return !1;
      R.push(Y);
    }
    return R;
  }
  function G(N, _, O) {
    const R = P(N), H = new Array(R.length).fill(!1);
    let Y = !0;
    for (; Y; ) {
      Y = !1;
      let ue = !0;
      for (let te = 0; te < R.length; ++te) {
        if (H[te])
          continue;
        const ae = R[te];
        if (Ae(ae))
          R[te] = ae.referToSelf.callback(O), R[te].referToSelf = ae.referToSelf, H[te] = !0, ue = !1;
        else if (we(ae)) {
          const re = $(ae.referTo.references, R, _);
          re ? (R[te] = ae.referTo.callback.apply(this, re), R[te].referTo = ae.referTo, H[te] = !0, ue = !1) : Y = !0;
        }
      }
      if (ue && Y)
        throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return R;
  }
  function ne(N) {
    const _ = /\bthis(\(|\.signatures\b)/;
    Object.keys(N).forEach((O) => {
      const R = N[O];
      if (_.test(R.toString()))
        throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function k(N, _) {
    if (u.createCount++, Object.keys(_).length === 0)
      throw new SyntaxError("No signatures provided");
    u.warnAgainstDeprecatedThis && ne(_);
    const O = [], R = [], H = {}, Y = [];
    let ue;
    for (ue in _) {
      if (!Object.prototype.hasOwnProperty.call(_, ue))
        continue;
      const Be = A(ue);
      if (!Be)
        continue;
      O.forEach(function(Qr) {
        if (K(Qr, Be))
          throw new TypeError('Conflicting signatures "' + m(Qr) + '" and "' + m(Be) + '".');
      }), O.push(Be);
      const We = R.length;
      R.push(_[ue]);
      const su = Be.map(y);
      let st;
      for (st of V(su)) {
        const Qr = m(st);
        Y.push({
          params: st,
          name: Qr,
          fn: We
        }), st.every((fu) => !fu.hasConversion) && (H[Qr] = We);
      }
    }
    Y.sort(x);
    const te = G(R, H, Jr);
    let ae;
    for (ae in H)
      Object.prototype.hasOwnProperty.call(H, ae) && (H[ae] = te[H[ae]]);
    const re = [], Ne = /* @__PURE__ */ new Map();
    for (ae of Y)
      Ne.has(ae.name) || (ae.fn = te[ae.fn], re.push(ae), Ne.set(ae.name, ae));
    const Ie = re[0] && re[0].params.length <= 2 && !E(re[0].params), Ue = re[1] && re[1].params.length <= 2 && !E(re[1].params), Ke = re[2] && re[2].params.length <= 2 && !E(re[2].params), Xe = re[3] && re[3].params.length <= 2 && !E(re[3].params), ur = re[4] && re[4].params.length <= 2 && !E(re[4].params), or = re[5] && re[5].params.length <= 2 && !E(re[5].params), _r = Ie && Ue && Ke && Xe && ur && or;
    for (let Be = 0; Be < re.length; ++Be)
      re[Be].test = F(re[Be].params);
    const ot = Ie ? w(re[0].params[0]) : nr, Ia = Ue ? w(re[1].params[0]) : nr, La = Ke ? w(re[2].params[0]) : nr, Oa = Xe ? w(re[3].params[0]) : nr, qa = ur ? w(re[4].params[0]) : nr, $a = or ? w(re[5].params[0]) : nr, Pa = Ie ? w(re[0].params[1]) : nr, Ra = Ue ? w(re[1].params[1]) : nr, Ua = Ke ? w(re[2].params[1]) : nr, Va = Xe ? w(re[3].params[1]) : nr, Ga = ur ? w(re[4].params[1]) : nr, Za = or ? w(re[5].params[1]) : nr;
    for (let Be = 0; Be < re.length; ++Be)
      re[Be].implementation = q(re[Be].params, re[Be].fn);
    const Ya = Ie ? re[0].implementation : zr, Ja = Ue ? re[1].implementation : zr, Qa = Ke ? re[2].implementation : zr, Xa = Xe ? re[3].implementation : zr, Ha = ur ? re[4].implementation : zr, Ka = or ? re[5].implementation : zr, Wa = Ie ? re[0].params.length : -1, ka = Ue ? re[1].params.length : -1, ja = Ke ? re[2].params.length : -1, eu = Xe ? re[3].params.length : -1, ru = ur ? re[4].params.length : -1, tu = or ? re[5].params.length : -1, nu = _r ? 6 : 0, iu = re.length, au = re.map((Be) => Be.test), uu = re.map((Be) => Be.implementation), ou = function() {
      for (let We = nu; We < iu; We++)
        if (au[We](arguments))
          return uu[We].apply(this, arguments);
      return u.onMismatch(N, arguments, re);
    };
    function Jr(Be, We) {
      return arguments.length === Wa && ot(Be) && Pa(We) ? Ya.apply(this, arguments) : arguments.length === ka && Ia(Be) && Ra(We) ? Ja.apply(this, arguments) : arguments.length === ja && La(Be) && Ua(We) ? Qa.apply(this, arguments) : arguments.length === eu && Oa(Be) && Va(We) ? Xa.apply(this, arguments) : arguments.length === ru && qa(Be) && Ga(We) ? Ha.apply(this, arguments) : arguments.length === tu && $a(Be) && Za(We) ? Ka.apply(this, arguments) : ou.apply(this, arguments);
    }
    try {
      Object.defineProperty(Jr, "name", {
        value: N
      });
    } catch {
    }
    return Jr.signatures = H, Jr._typedFunctionData = {
      signatures: re,
      signatureMap: Ne
    }, Jr;
  }
  function U(N, _, O) {
    throw B(N, _, O);
  }
  function Q(N) {
    return J(N, 0, N.length - 1);
  }
  function X(N) {
    return N[N.length - 1];
  }
  function J(N, _, O) {
    return Array.prototype.slice.call(N, _, O);
  }
  function oe(N, _) {
    for (let O = 0; O < N.length; O++)
      if (_(N[O]))
        return N[O];
  }
  function j(N, _) {
    return Array.prototype.concat.apply([], N.map(_));
  }
  function fe() {
    const N = Q(arguments).map((O) => m(A(O))), _ = X(arguments);
    if (typeof _ != "function")
      throw new TypeError("Callback function expected as last argument");
    return le(N, _);
  }
  function le(N, _) {
    return {
      referTo: {
        references: N,
        callback: _
      }
    };
  }
  function me(N) {
    if (typeof N != "function")
      throw new TypeError("Callback function expected as first argument");
    return {
      referToSelf: {
        callback: N
      }
    };
  }
  function we(N) {
    return N && typeof N.referTo == "object" && Array.isArray(N.referTo.references) && typeof N.referTo.callback == "function";
  }
  function Ae(N) {
    return N && typeof N.referToSelf == "object" && typeof N.referToSelf.callback == "function";
  }
  function he(N, _) {
    if (!N)
      return _;
    if (_ && _ !== N) {
      const O = new Error("Function names do not match (expected: " + N + ", actual: " + _ + ")");
      throw O.data = {
        actual: _,
        expected: N
      }, O;
    }
    return N;
  }
  function be(N) {
    let _;
    for (const O in N)
      Object.prototype.hasOwnProperty.call(N, O) && (l(N[O]) || typeof N[O].signature == "string") && (_ = he(_, N[O].name));
    return _;
  }
  function Ee(N, _) {
    let O;
    for (O in _)
      if (Object.prototype.hasOwnProperty.call(_, O)) {
        if (O in N && _[O] !== N[O]) {
          const R = new Error('Signature "' + O + '" is defined twice');
          throw R.data = {
            signature: O,
            sourceFunction: _[O],
            destFunction: N[O]
          }, R;
        }
        N[O] = _[O];
      }
  }
  const Se = u;
  u = function(N) {
    const _ = typeof N == "string", O = _ ? 1 : 0;
    let R = _ ? N : "";
    const H = {};
    for (let Y = O; Y < arguments.length; ++Y) {
      const ue = arguments[Y];
      let te = {}, ae;
      if (typeof ue == "function" ? (ae = ue.name, typeof ue.signature == "string" ? te[ue.signature] = ue : l(ue) && (te = ue.signatures)) : e(ue) && (te = ue, _ || (ae = be(ue))), Object.keys(te).length === 0) {
        const re = new TypeError("Argument to 'typed' at index " + Y + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw re.data = {
          index: Y,
          argument: ue
        }, re;
      }
      _ || (R = he(R, ae)), Ee(H, te);
    }
    return k(R || "", H);
  }, u.create = xi, u.createCount = Se.createCount, u.onMismatch = U, u.throwMismatchError = U, u.createError = B, u.clear = h, u.clearConversions = s, u.addTypes = c, u._findType = f, u.referTo = fe, u.referToSelf = me, u.convert = p, u.findSignature = v, u.find = g, u.isTypedFunction = l, u.warnAgainstDeprecatedThis = !0, u.addType = function(N, _) {
    let O = "any";
    _ !== !1 && n.has("Object") && (O = "Object"), u.addTypes([N], O);
  };
  function Ve(N) {
    if (!N || typeof N.from != "string" || typeof N.to != "string" || typeof N.convert != "function")
      throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (N.to === N.from)
      throw new SyntaxError('Illegal to define conversion from "' + N.from + '" to itself.');
  }
  return u.addConversion = function(N) {
    Ve(N);
    const _ = f(N.to);
    if (_.conversionsTo.every(function(O) {
      return O.from !== N.from;
    }))
      _.conversionsTo.push({
        from: N.from,
        convert: N.convert,
        index: a++
      });
    else
      throw new Error('There is already a conversion from "' + N.from + '" to "' + _.name + '"');
  }, u.addConversions = function(N) {
    N.forEach(u.addConversion);
  }, u.removeConversion = function(N) {
    Ve(N);
    const _ = f(N.to), O = oe(_.conversionsTo, (H) => H.from === N.from);
    if (!O)
      throw new Error("Attempt to remove nonexistent conversion from " + N.from + " to " + N.to);
    if (O.convert !== N.convert)
      throw new Error("Conversion to remove does not match existing conversion");
    const R = _.conversionsTo.indexOf(O);
    _.conversionsTo.splice(R, 1);
  }, u.resolve = function(N, _) {
    if (!l(N))
      throw new TypeError(vn);
    const O = N._typedFunctionData.signatures;
    for (let R = 0; R < O.length; ++R)
      if (O[R].test(_))
        return O[R];
    return null;
  }, u;
}
const pn = xi();
function ze(e) {
  return typeof e == "boolean" ? !0 : isFinite(e) ? e === Math.round(e) : !1;
}
var Vu = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
};
function Lt(e, i, t) {
  var n = {
    2: "0b",
    8: "0o",
    16: "0x"
  }, r = n[i], a = "";
  if (t) {
    if (t < 1)
      throw new Error("size must be in greater than 0");
    if (!ze(t))
      throw new Error("size must be an integer");
    if (e > 2 ** (t - 1) - 1 || e < -(2 ** (t - 1)))
      throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
    if (!ze(e))
      throw new Error("Value must be an integer");
    e < 0 && (e = e + 2 ** t), a = "i".concat(t);
  }
  var u = "";
  return e < 0 && (e = -e, u = "-"), "".concat(u).concat(r).concat(e.toString(i)).concat(a);
}
function Rt(e, i) {
  if (typeof i == "function")
    return i(e);
  if (e === 1 / 0)
    return "Infinity";
  if (e === -1 / 0)
    return "-Infinity";
  if (isNaN(e))
    return "NaN";
  var t = "auto", n, r;
  if (i && (i.notation && (t = i.notation), qe(i) ? n = i : qe(i.precision) && (n = i.precision), i.wordSize && (r = i.wordSize, typeof r != "number")))
    throw new Error('Option "wordSize" must be a number');
  switch (t) {
    case "fixed":
      return Zu(e, n);
    case "exponential":
      return _i(e, n);
    case "engineering":
      return Gu(e, n);
    case "bin":
      return Lt(e, 2, r);
    case "oct":
      return Lt(e, 8, r);
    case "hex":
      return Lt(e, 16, r);
    case "auto":
      return Yu(e, n, i && i).replace(/((\.\d*?)(0+))($|e)/, function() {
        var a = arguments[2], u = arguments[4];
        return a !== "." ? a + u : u;
      });
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Mt(e) {
  var i = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!i)
    throw new SyntaxError("Invalid number " + e);
  var t = i[1], n = i[2], r = parseFloat(i[4] || "0"), a = n.indexOf(".");
  r += a !== -1 ? a - 1 : n.length - 1;
  var u = n.replace(".", "").replace(/^0*/, function(f) {
    return r -= f.length, "";
  }).replace(/0*$/, "").split("").map(function(f) {
    return parseInt(f);
  });
  return u.length === 0 && (u.push(0), r++), {
    sign: t,
    coefficients: u,
    exponent: r
  };
}
function Gu(e, i) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var t = Mt(e), n = St(t, i), r = n.exponent, a = n.coefficients, u = r % 3 === 0 ? r : r < 0 ? r - 3 - r % 3 : r - r % 3;
  if (qe(i))
    for (; i > a.length || r - u + 1 > a.length; )
      a.push(0);
  else
    for (var f = Math.abs(r - u) - (a.length - 1), c = 0; c < f; c++)
      a.push(0);
  for (var h = Math.abs(r - u), s = 1; h > 0; )
    s++, h--;
  var o = a.slice(s).join(""), l = qe(i) && o.length || o.match(/[1-9]/) ? "." + o : "", v = a.slice(0, s).join("") + l + "e" + (r >= 0 ? "+" : "") + u.toString();
  return n.sign + v;
}
function Zu(e, i) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var t = Mt(e), n = typeof i == "number" ? St(t, t.exponent + 1 + i) : t, r = n.coefficients, a = n.exponent + 1, u = a + (i || 0);
  return r.length < u && (r = r.concat(Ir(u - r.length))), a < 0 && (r = Ir(-a + 1).concat(r), a = 1), a < r.length && r.splice(a, 0, a === 0 ? "0." : "."), n.sign + r.join("");
}
function _i(e, i) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var t = Mt(e), n = i ? St(t, i) : t, r = n.coefficients, a = n.exponent;
  r.length < i && (r = r.concat(Ir(i - r.length)));
  var u = r.shift();
  return n.sign + u + (r.length > 0 ? "." + r.join("") : "") + "e" + (a >= 0 ? "+" : "") + a;
}
function Yu(e, i, t) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var n = t && t.lowerExp !== void 0 ? t.lowerExp : -3, r = t && t.upperExp !== void 0 ? t.upperExp : 5, a = Mt(e), u = i ? St(a, i) : a;
  if (u.exponent < n || u.exponent >= r)
    return _i(e, i);
  var f = u.coefficients, c = u.exponent;
  f.length < i && (f = f.concat(Ir(i - f.length))), f = f.concat(Ir(c - f.length + 1 + (f.length < i ? i - f.length : 0))), f = Ir(-c).concat(f);
  var h = c > 0 ? c : 0;
  return h < f.length - 1 && f.splice(h + 1, 0, "."), u.sign + f.join("");
}
function St(e, i) {
  for (var t = {
    sign: e.sign,
    coefficients: e.coefficients,
    exponent: e.exponent
  }, n = t.coefficients; i <= 0; )
    n.unshift(0), t.exponent++, i++;
  if (n.length > i) {
    var r = n.splice(i, n.length - i);
    if (r[0] >= 5) {
      var a = i - 1;
      for (n[a]++; n[a] === 10; )
        n.pop(), a === 0 && (n.unshift(0), t.exponent++, a++), a--, n[a]++;
    }
  }
  return t;
}
function Ir(e) {
  for (var i = [], t = 0; t < e; t++)
    i.push(0);
  return i;
}
function Ju(e) {
  return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
var Qu = Number.EPSILON || 2220446049250313e-31;
function yr(e, i, t) {
  if (t == null)
    return e === i;
  if (e === i)
    return !0;
  if (isNaN(e) || isNaN(i))
    return !1;
  if (isFinite(e) && isFinite(i)) {
    var n = Math.abs(e - i);
    return n <= Qu ? !0 : n <= Math.max(Math.abs(e), Math.abs(i)) * t;
  }
  return !1;
}
function Ot(e, i, t) {
  var n = e.constructor, r = new n(2), a = "";
  if (t) {
    if (t < 1)
      throw new Error("size must be in greater than 0");
    if (!ze(t))
      throw new Error("size must be an integer");
    if (e.greaterThan(r.pow(t - 1).sub(1)) || e.lessThan(r.pow(t - 1).mul(-1)))
      throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
    if (!e.isInteger())
      throw new Error("Value must be an integer");
    e.lessThan(0) && (e = e.add(r.pow(t))), a = "i".concat(t);
  }
  switch (i) {
    case 2:
      return "".concat(e.toBinary()).concat(a);
    case 8:
      return "".concat(e.toOctal()).concat(a);
    case 16:
      return "".concat(e.toHexadecimal()).concat(a);
    default:
      throw new Error("Base ".concat(i, " not supported "));
  }
}
function Xu(e, i) {
  if (typeof i == "function")
    return i(e);
  if (!e.isFinite())
    return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
  var t = "auto", n, r;
  if (i !== void 0 && (i.notation && (t = i.notation), typeof i == "number" ? n = i : i.precision !== void 0 && (n = i.precision), i.wordSize && (r = i.wordSize, typeof r != "number")))
    throw new Error('Option "wordSize" must be a number');
  switch (t) {
    case "fixed":
      return Ku(e, n);
    case "exponential":
      return dn(e, n);
    case "engineering":
      return Hu(e, n);
    case "bin":
      return Ot(e, 2, r);
    case "oct":
      return Ot(e, 8, r);
    case "hex":
      return Ot(e, 16, r);
    case "auto": {
      var a = i && i.lowerExp !== void 0 ? i.lowerExp : -3, u = i && i.upperExp !== void 0 ? i.upperExp : 5;
      if (e.isZero())
        return "0";
      var f, c = e.toSignificantDigits(n), h = c.e;
      return h >= a && h < u ? f = c.toFixed() : f = dn(e, n), f.replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2], o = arguments[4];
        return s !== "." ? s + o : o;
      });
    }
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Hu(e, i) {
  var t = e.e, n = t % 3 === 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3, r = e.mul(Math.pow(10, -n)), a = r.toPrecision(i);
  if (a.indexOf("e") !== -1) {
    var u = e.constructor;
    a = new u(a).toFixed();
  }
  return a + "e" + (t >= 0 ? "+" : "") + n.toString();
}
function dn(e, i) {
  return i !== void 0 ? e.toExponential(i - 1) : e.toExponential();
}
function Ku(e, i) {
  return e.toFixed(i);
}
function Le(e, i) {
  var t = Wu(e, i);
  return i && typeof i == "object" && "truncate" in i && t.length > i.truncate ? t.substring(0, i.truncate - 3) + "..." : t;
}
function Wu(e, i) {
  if (typeof e == "number")
    return Rt(e, i);
  if (Re(e))
    return Xu(e, i);
  if (ku(e))
    return !i || i.fraction !== "decimal" ? e.s * e.n + "/" + e.d : e.toString();
  if (Array.isArray(e))
    return zi(e, i);
  if (ir(e))
    return mn(e);
  if (typeof e == "function")
    return e.syntax ? String(e.syntax) : "function";
  if (e && typeof e == "object") {
    if (typeof e.format == "function")
      return e.format(i);
    if (e && e.toString(i) !== {}.toString())
      return e.toString(i);
    var t = Object.keys(e).map((n) => mn(n) + ": " + Le(e[n], i));
    return "{" + t.join(", ") + "}";
  }
  return String(e);
}
function mn(e) {
  for (var i = String(e), t = "", n = 0; n < i.length; ) {
    var r = i.charAt(n);
    t += r in gn ? gn[r] : r, n++;
  }
  return '"' + t + '"';
}
var gn = {
  '"': '\\"',
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
function zi(e, i) {
  if (Array.isArray(e)) {
    for (var t = "[", n = e.length, r = 0; r < n; r++)
      r !== 0 && (t += ", "), t += zi(e[r], i);
    return t += "]", t;
  } else
    return Le(e, i);
}
function ku(e) {
  return e && typeof e == "object" && typeof e.s == "number" && typeof e.n == "number" && typeof e.d == "number" || !1;
}
function Ce(e, i, t) {
  if (!(this instanceof Ce))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = e, this.expected = i, this.relation = t, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(i) ? "[" + i.join(", ") + "]" : i) + ")", this.stack = new Error().stack;
}
Ce.prototype = new RangeError();
Ce.prototype.constructor = RangeError;
Ce.prototype.name = "DimensionError";
Ce.prototype.isDimensionError = !0;
function Sr(e, i, t) {
  if (!(this instanceof Sr))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.index = e, arguments.length < 3 ? (this.min = 0, this.max = i) : (this.min = i, this.max = t), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
Sr.prototype = new RangeError();
Sr.prototype.constructor = RangeError;
Sr.prototype.name = "IndexError";
Sr.prototype.isIndexError = !0;
function $e(e) {
  for (var i = []; Array.isArray(e); )
    i.push(e.length), e = e[0];
  return i;
}
function Ti(e, i, t) {
  var n, r = e.length;
  if (r !== i[t])
    throw new Ce(r, i[t]);
  if (t < i.length - 1) {
    var a = t + 1;
    for (n = 0; n < r; n++) {
      var u = e[n];
      if (!Array.isArray(u))
        throw new Ce(i.length - 1, i.length, "<");
      Ti(e[n], i, a);
    }
  } else
    for (n = 0; n < r; n++)
      if (Array.isArray(e[n]))
        throw new Ce(i.length + 1, i.length, ">");
}
function Dn(e, i) {
  var t = i.length === 0;
  if (t) {
    if (Array.isArray(e))
      throw new Ce(e.length, 0);
  } else
    Ti(e, i, 0);
}
function ht(e, i) {
  var t = e.isMatrix ? e._size : $e(e), n = i._sourceSize;
  n.forEach((r, a) => {
    if (r !== null && r !== t[a])
      throw new Ce(r, t[a]);
  });
}
function xe(e, i) {
  if (e !== void 0) {
    if (!qe(e) || !ze(e))
      throw new TypeError("Index must be an integer (value: " + e + ")");
    if (e < 0 || typeof i == "number" && e >= i)
      throw new Sr(e, i);
  }
}
function $r(e) {
  for (var i = 0; i < e._dimensions.length; ++i) {
    var t = e._dimensions[i];
    if (t._data && Me(t._data)) {
      if (t._size[0] === 0)
        return !0;
    } else if (t.isRange) {
      if (t.start === t.end)
        return !0;
    } else if (ir(t) && t.length === 0)
      return !0;
  }
  return !1;
}
function vt(e, i, t) {
  if (!Array.isArray(i))
    throw new TypeError("Array expected");
  if (i.length === 0)
    throw new Error("Resizing to scalar is not supported");
  i.forEach(function(r) {
    if (!qe(r) || !ze(r) || r < 0)
      throw new TypeError("Invalid size, must contain positive integers (size: " + Le(i) + ")");
  }), (qe(e) || Re(e)) && (e = [e]);
  var n = t !== void 0 ? t : 0;
  return Ut(e, i, 0, n), e;
}
function Ut(e, i, t, n) {
  var r, a, u = e.length, f = i[t], c = Math.min(u, f);
  if (e.length = f, t < i.length - 1) {
    var h = t + 1;
    for (r = 0; r < c; r++)
      a = e[r], Array.isArray(a) || (a = [a], e[r] = a), Ut(a, i, h, n);
    for (r = c; r < f; r++)
      a = [], e[r] = a, Ut(a, i, h, n);
  } else {
    for (r = 0; r < c; r++)
      for (; Array.isArray(e[r]); )
        e[r] = e[r][0];
    for (r = c; r < f; r++)
      e[r] = n;
  }
}
function jt(e, i) {
  var t = Vt(e), n = t.length;
  if (!Array.isArray(e) || !Array.isArray(i))
    throw new TypeError("Array expected");
  if (i.length === 0)
    throw new Ce(0, n, "!=");
  i = en(i, n);
  var r = Ii(i);
  if (n !== r)
    throw new Ce(r, n, "!=");
  try {
    return ju(t, i);
  } catch (a) {
    throw a instanceof Ce ? new Ce(r, n, "!=") : a;
  }
}
function en(e, i) {
  var t = Ii(e), n = e.slice(), r = -1, a = e.indexOf(r), u = e.indexOf(r, a + 1) >= 0;
  if (u)
    throw new Error("More than one wildcard in sizes");
  var f = a >= 0, c = i % t === 0;
  if (f)
    if (c)
      n[a] = -i / t;
    else
      throw new Error("Could not replace wildcard, since " + i + " is no multiple of " + -t);
  return n;
}
function Ii(e) {
  return e.reduce((i, t) => i * t, 1);
}
function ju(e, i) {
  for (var t = e, n, r = i.length - 1; r > 0; r--) {
    var a = i[r];
    n = [];
    for (var u = t.length / a, f = 0; f < u; f++)
      n.push(t.slice(f * a, (f + 1) * a));
    t = n;
  }
  return t;
}
function wn(e, i) {
  for (var t = i || $e(e); Array.isArray(e) && e.length === 1; )
    e = e[0], t.shift();
  for (var n = t.length; t[n - 1] === 1; )
    n--;
  return n < t.length && (e = Li(e, n, 0), t.length = n), e;
}
function Li(e, i, t) {
  var n, r;
  if (t < i) {
    var a = t + 1;
    for (n = 0, r = e.length; n < r; n++)
      e[n] = Li(e[n], i, a);
  } else
    for (; Array.isArray(e); )
      e = e[0];
  return e;
}
function Oi(e, i, t, n) {
  var r = n || $e(e);
  if (t)
    for (var a = 0; a < t; a++)
      e = [e], r.unshift(1);
  for (e = qi(e, i, 0); r.length < i; )
    r.push(1);
  return e;
}
function qi(e, i, t) {
  var n, r;
  if (Array.isArray(e)) {
    var a = t + 1;
    for (n = 0, r = e.length; n < r; n++)
      e[n] = qi(e[n], i, a);
  } else
    for (var u = t; u < i; u++)
      e = [e];
  return e;
}
function Vt(e) {
  if (!Array.isArray(e))
    return e;
  var i = [];
  return e.forEach(function t(n) {
    Array.isArray(n) ? n.forEach(t) : i.push(n);
  }), i;
}
function Hr(e, i) {
  for (var t, n = 0, r = 0; r < e.length; r++) {
    var a = e[r], u = Array.isArray(a);
    if (r === 0 && u && (n = a.length), u && a.length !== n)
      return;
    var f = u ? Hr(a, i) : i(a);
    if (t === void 0)
      t = f;
    else if (t !== f)
      return "mixed";
  }
  return t;
}
function $i(e, i, t, n) {
  if (n < t) {
    if (e.length !== i.length)
      throw new Ce(e.length, i.length);
    for (var r = [], a = 0; a < e.length; a++)
      r[a] = $i(e[a], i[a], t, n + 1);
    return r;
  } else
    return e.concat(i);
}
function Pi() {
  var e = Array.prototype.slice.call(arguments, 0, -1), i = Array.prototype.slice.call(arguments, -1);
  if (e.length === 1)
    return e[0];
  if (e.length > 1)
    return e.slice(1).reduce(function(t, n) {
      return $i(t, n, i, 0);
    }, e[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function eo() {
  for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
    i[t] = arguments[t];
  for (var n = i.map((l) => l.length), r = Math.max(...n), a = new Array(r).fill(null), u = 0; u < i.length; u++)
    for (var f = i[u], c = n[u], h = 0; h < c; h++) {
      var s = r - c + h;
      f[h] > a[s] && (a[s] = f[h]);
    }
  for (var o = 0; o < i.length; o++)
    pt(i[o], a);
  return a;
}
function pt(e, i) {
  for (var t = i.length, n = e.length, r = 0; r < n; r++) {
    var a = t - n + r;
    if (e[r] < i[a] && e[r] > 1 || e[r] > i[a])
      throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(e, ") not possible to broadcast dimension ").concat(n, " with size ").concat(e[r], " to size ").concat(i[a]));
  }
}
function yn(e, i) {
  var t = $e(e);
  if (qr(t, i))
    return e;
  pt(t, i);
  var n = eo(t, i), r = n.length, a = [...Array(r - t.length).fill(1), ...t], u = to(e);
  t.length < r && (u = jt(u, a), t = $e(u));
  for (var f = 0; f < r; f++)
    t[f] < n[f] && (u = ro(u, n[f], f), t = $e(u));
  return u;
}
function ro(e, i, t) {
  return Pi(...Array(i).fill(e), t);
}
function to(e) {
  return Or([], e);
}
function ee(e, i, t, n) {
  function r(a) {
    var u = Pu(a, i.map(ao));
    return no(e, i, a), t(u);
  }
  return r.isFactory = !0, r.fn = e, r.dependencies = i.slice().sort(), n && (r.meta = n), r;
}
function no(e, i, t) {
  var n = i.filter((a) => !io(a)).every((a) => t[a] !== void 0);
  if (!n) {
    var r = i.filter((a) => t[a] === void 0);
    throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(r.map((a) => '"'.concat(a, '"')).join(", "), "."));
  }
}
function io(e) {
  return e && e[0] === "?";
}
function ao(e) {
  return e && e[0] === "?" ? e.slice(1) : e;
}
function Ri(e, i) {
  if (Gi(e) && Vi(e, i))
    return e[i];
  throw typeof e[i] == "function" && oo(e, i) ? new Error('Cannot access method "' + i + '" as a property') : new Error('No access to property "' + i + '"');
}
function Ui(e, i, t) {
  if (Gi(e) && Vi(e, i))
    return e[i] = t, t;
  throw new Error('No access to property "' + i + '"');
}
function uo(e, i) {
  return i in e;
}
function Vi(e, i) {
  return !e || typeof e != "object" ? !1 : Xr(so, i) ? !0 : !(i in Object.prototype || i in Function.prototype);
}
function oo(e, i) {
  return e == null || typeof e[i] != "function" || Xr(e, i) && Object.getPrototypeOf && i in Object.getPrototypeOf(e) ? !1 : Xr(fo, i) ? !0 : !(i in Object.prototype || i in Function.prototype);
}
function Gi(e) {
  return typeof e == "object" && e && e.constructor === Object;
}
var so = {
  length: !0,
  name: !0
}, fo = {
  toString: !0,
  valueOf: !0,
  toLocaleString: !0
};
class co {
  constructor(i) {
    this.wrappedObject = i;
  }
  keys() {
    return Object.keys(this.wrappedObject);
  }
  get(i) {
    return Ri(this.wrappedObject, i);
  }
  set(i, t) {
    return Ui(this.wrappedObject, i, t), this;
  }
  has(i) {
    return uo(this.wrappedObject, i);
  }
}
function lo(e) {
  return e ? e instanceof Map || e instanceof co || typeof e.set == "function" && typeof e.get == "function" && typeof e.keys == "function" && typeof e.has == "function" : !1;
}
var Zi = function() {
  return Zi = pn.create, pn;
}, ho = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], vo = /* @__PURE__ */ ee("typed", ho, function(i) {
  var {
    BigNumber: t,
    Complex: n,
    DenseMatrix: r,
    Fraction: a
  } = i, u = Zi();
  return u.clear(), u.addTypes([
    {
      name: "number",
      test: qe
    },
    {
      name: "Complex",
      test: Wt
    },
    {
      name: "BigNumber",
      test: Re
    },
    {
      name: "Fraction",
      test: kt
    },
    {
      name: "Unit",
      test: bi
    },
    // The following type matches a valid variable name, i.e., an alphanumeric
    // string starting with an alphabetic character. It is used (at least)
    // in the definition of the derivative() function, as the argument telling
    // what to differentiate over must (currently) be a variable.
    {
      name: "identifier",
      test: (f) => ir && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(f)
    },
    {
      name: "string",
      test: ir
    },
    {
      name: "Chain",
      test: Ou
    },
    {
      name: "Array",
      test: Me
    },
    {
      name: "Matrix",
      test: _e
    },
    {
      name: "DenseMatrix",
      test: Mi
    },
    {
      name: "SparseMatrix",
      test: Si
    },
    {
      name: "Range",
      test: Bi
    },
    {
      name: "Index",
      test: bt
    },
    {
      name: "boolean",
      test: hu
    },
    {
      name: "ResultSet",
      test: vu
    },
    {
      name: "Help",
      test: pu
    },
    {
      name: "function",
      test: du
    },
    {
      name: "Date",
      test: mu
    },
    {
      name: "RegExp",
      test: gu
    },
    {
      name: "null",
      test: Du
    },
    {
      name: "undefined",
      test: wu
    },
    {
      name: "AccessorNode",
      test: yu
    },
    {
      name: "ArrayNode",
      test: Au
    },
    {
      name: "AssignmentNode",
      test: Eu
    },
    {
      name: "BlockNode",
      test: Cu
    },
    {
      name: "ConditionalNode",
      test: Fu
    },
    {
      name: "ConstantNode",
      test: bu
    },
    {
      name: "FunctionNode",
      test: Su
    },
    {
      name: "FunctionAssignmentNode",
      test: Mu
    },
    {
      name: "IndexNode",
      test: Bu
    },
    {
      name: "Node",
      test: Nu
    },
    {
      name: "ObjectNode",
      test: xu
    },
    {
      name: "OperatorNode",
      test: _u
    },
    {
      name: "ParenthesisNode",
      test: zu
    },
    {
      name: "RangeNode",
      test: Tu
    },
    {
      name: "RelationalNode",
      test: Iu
    },
    {
      name: "SymbolNode",
      test: Lu
    },
    {
      name: "Map",
      test: lo
    },
    {
      name: "Object",
      test: Ni
    }
    // order 'Object' last, it matches on other classes too
  ]), u.addConversions([{
    from: "number",
    to: "BigNumber",
    convert: function(c) {
      if (t || qt(c), Ju(c) > 15)
        throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + c + "). Use function bignumber(x) to convert to BigNumber.");
      return new t(c);
    }
  }, {
    from: "number",
    to: "Complex",
    convert: function(c) {
      return n || ft(c), new n(c, 0);
    }
  }, {
    from: "BigNumber",
    to: "Complex",
    convert: function(c) {
      return n || ft(c), new n(c.toNumber(), 0);
    }
  }, {
    from: "Fraction",
    to: "BigNumber",
    convert: function(c) {
      throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
    }
  }, {
    from: "Fraction",
    to: "Complex",
    convert: function(c) {
      return n || ft(c), new n(c.valueOf(), 0);
    }
  }, {
    from: "number",
    to: "Fraction",
    convert: function(c) {
      a || $t(c);
      var h = new a(c);
      if (h.valueOf() !== c)
        throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + c + "). Use function fraction(x) to convert to Fraction.");
      return h;
    }
  }, {
    // FIXME: add conversion from Fraction to number, for example for `sqrt(fraction(1,3))`
    //  from: 'Fraction',
    //  to: 'number',
    //  convert: function (x) {
    //    return x.valueOf()
    //  }
    // }, {
    from: "string",
    to: "number",
    convert: function(c) {
      var h = Number(c);
      if (isNaN(h))
        throw new Error('Cannot convert "' + c + '" to a number');
      return h;
    }
  }, {
    from: "string",
    to: "BigNumber",
    convert: function(c) {
      t || qt(c);
      try {
        return new t(c);
      } catch {
        throw new Error('Cannot convert "' + c + '" to BigNumber');
      }
    }
  }, {
    from: "string",
    to: "Fraction",
    convert: function(c) {
      a || $t(c);
      try {
        return new a(c);
      } catch {
        throw new Error('Cannot convert "' + c + '" to Fraction');
      }
    }
  }, {
    from: "string",
    to: "Complex",
    convert: function(c) {
      n || ft(c);
      try {
        return new n(c);
      } catch {
        throw new Error('Cannot convert "' + c + '" to Complex');
      }
    }
  }, {
    from: "boolean",
    to: "number",
    convert: function(c) {
      return +c;
    }
  }, {
    from: "boolean",
    to: "BigNumber",
    convert: function(c) {
      return t || qt(c), new t(+c);
    }
  }, {
    from: "boolean",
    to: "Fraction",
    convert: function(c) {
      return a || $t(c), new a(+c);
    }
  }, {
    from: "boolean",
    to: "string",
    convert: function(c) {
      return String(c);
    }
  }, {
    from: "Array",
    to: "Matrix",
    convert: function(c) {
      return r || po(), new r(c);
    }
  }, {
    from: "Matrix",
    to: "Array",
    convert: function(c) {
      return c.valueOf();
    }
  }]), u.onMismatch = (f, c, h) => {
    var s = u.createError(f, c, h);
    if (["wrongType", "mismatch"].includes(s.data.category) && c.length === 1 && lt(c[0]) && // check if the function can be unary:
    h.some((l) => !l.params.includes(","))) {
      var o = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
      throw o.data = s.data, o;
    }
    throw s;
  }, u.onMismatch = (f, c, h) => {
    var s = u.createError(f, c, h);
    if (["wrongType", "mismatch"].includes(s.data.category) && c.length === 1 && lt(c[0]) && // check if the function can be unary:
    h.some((l) => !l.params.includes(","))) {
      var o = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
      throw o.data = s.data, o;
    }
    throw s;
  }, u;
});
function qt(e) {
  throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"));
}
function ft(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"));
}
function po() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function $t(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."));
}
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Tr = 9e15, Er = 1e9, Gt = "0123456789abcdef", dt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", mt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Zt = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Tr,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Tr,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Yi, pr, ge = !0, Bt = "[DecimalError] ", Ar = Bt + "Invalid argument: ", Ji = Bt + "Precision limit exceeded", Qi = Bt + "crypto unavailable", Xi = "[object Decimal]", Qe = Math.floor, Ge = Math.pow, mo = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, go = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Do = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Hi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, fr = 1e7, de = 7, wo = 9007199254740991, yo = dt.length - 1, Yt = mt.length - 1, W = { toStringTag: Xi };
W.absoluteValue = W.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), pe(e);
};
W.ceil = function() {
  return pe(new this.constructor(this), this.e + 1, 2);
};
W.clampedTo = W.clamp = function(e, i) {
  var t, n = this, r = n.constructor;
  if (e = new r(e), i = new r(i), !e.s || !i.s)
    return new r(NaN);
  if (e.gt(i))
    throw Error(Ar + i);
  return t = n.cmp(e), t < 0 ? e : n.cmp(i) > 0 ? i : new r(n);
};
W.comparedTo = W.cmp = function(e) {
  var i, t, n, r, a = this, u = a.d, f = (e = new a.constructor(e)).d, c = a.s, h = e.s;
  if (!u || !f)
    return !c || !h ? NaN : c !== h ? c : u === f ? 0 : !u ^ c < 0 ? 1 : -1;
  if (!u[0] || !f[0])
    return u[0] ? c : f[0] ? -h : 0;
  if (c !== h)
    return c;
  if (a.e !== e.e)
    return a.e > e.e ^ c < 0 ? 1 : -1;
  for (n = u.length, r = f.length, i = 0, t = n < r ? n : r; i < t; ++i)
    if (u[i] !== f[i])
      return u[i] > f[i] ^ c < 0 ? 1 : -1;
  return n === r ? 0 : n > r ^ c < 0 ? 1 : -1;
};
W.cosine = W.cos = function() {
  var e, i, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (e = n.precision, i = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + de, n.rounding = 1, t = Ao(n, ea(n, t)), n.precision = e, n.rounding = i, pe(pr == 2 || pr == 3 ? t.neg() : t, e, i, !0)) : new n(1) : new n(NaN);
};
W.cubeRoot = W.cbrt = function() {
  var e, i, t, n, r, a, u, f, c, h, s = this, o = s.constructor;
  if (!s.isFinite() || s.isZero())
    return new o(s);
  for (ge = !1, a = s.s * Ge(s.s * s, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = Ye(s.d), e = s.e, (a = (e - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = Ge(t, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new o(t), n.s = s.s) : n = new o(a.toString()), u = (e = o.precision) + 3; ; )
    if (f = n, c = f.times(f).times(f), h = c.plus(s), n = Te(h.plus(s).times(f), h.plus(c), u + 2, 1), Ye(f.d).slice(0, u) === (t = Ye(n.d)).slice(0, u))
      if (t = t.slice(u - 3, u + 1), t == "9999" || !r && t == "4999") {
        if (!r && (pe(f, e + 1, 0), f.times(f).times(f).eq(s))) {
          n = f;
          break;
        }
        u += 4, r = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (pe(n, e + 1, 1), i = !n.times(n).times(n).eq(s));
        break;
      }
  return ge = !0, pe(n, e, o.rounding, i);
};
W.decimalPlaces = W.dp = function() {
  var e, i = this.d, t = NaN;
  if (i) {
    if (e = i.length - 1, t = (e - Qe(this.e / de)) * de, e = i[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
W.dividedBy = W.div = function(e) {
  return Te(this, new this.constructor(e));
};
W.dividedToIntegerBy = W.divToInt = function(e) {
  var i = this, t = i.constructor;
  return pe(Te(i, new t(e), 0, 1, 1), t.precision, t.rounding);
};
W.equals = W.eq = function(e) {
  return this.cmp(e) === 0;
};
W.floor = function() {
  return pe(new this.constructor(this), this.e + 1, 3);
};
W.greaterThan = W.gt = function(e) {
  return this.cmp(e) > 0;
};
W.greaterThanOrEqualTo = W.gte = function(e) {
  var i = this.cmp(e);
  return i == 1 || i === 0;
};
W.hyperbolicCosine = W.cosh = function() {
  var e, i, t, n, r, a = this, u = a.constructor, f = new u(1);
  if (!a.isFinite())
    return new u(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return f;
  t = u.precision, n = u.rounding, u.precision = t + Math.max(a.e, a.sd()) + 4, u.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), i = (1 / xt(4, e)).toString()) : (e = 16, i = "2.3283064365386962890625e-10"), a = Pr(u, 1, a.times(i), new u(1), !0);
  for (var c, h = e, s = new u(8); h--; )
    c = a.times(a), a = f.minus(c.times(s.minus(c.times(s))));
  return pe(a, u.precision = t, u.rounding = n, !0);
};
W.hyperbolicSine = W.sinh = function() {
  var e, i, t, n, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (i = a.precision, t = a.rounding, a.precision = i + Math.max(r.e, r.sd()) + 4, a.rounding = 1, n = r.d.length, n < 3)
    r = Pr(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, r = r.times(1 / xt(5, e)), r = Pr(a, 2, r, r, !0);
    for (var u, f = new a(5), c = new a(16), h = new a(20); e--; )
      u = r.times(r), r = r.times(f.plus(u.times(c.times(u).plus(h))));
  }
  return a.precision = i, a.rounding = t, pe(r, i, t, !0);
};
W.hyperbolicTangent = W.tanh = function() {
  var e, i, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, i = n.rounding, n.precision = e + 7, n.rounding = 1, Te(t.sinh(), t.cosh(), n.precision = e, n.rounding = i)) : new n(t.s);
};
W.inverseCosine = W.acos = function() {
  var e, i = this, t = i.constructor, n = i.abs().cmp(1), r = t.precision, a = t.rounding;
  return n !== -1 ? n === 0 ? i.isNeg() ? sr(t, r, a) : new t(0) : new t(NaN) : i.isZero() ? sr(t, r + 4, a).times(0.5) : (t.precision = r + 6, t.rounding = 1, i = i.asin(), e = sr(t, r + 4, a).times(0.5), t.precision = r, t.rounding = a, e.minus(i));
};
W.inverseHyperbolicCosine = W.acosh = function() {
  var e, i, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, i = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, ge = !1, t = t.times(t).minus(1).sqrt().plus(t), ge = !0, n.precision = e, n.rounding = i, t.ln()) : new n(t);
};
W.inverseHyperbolicSine = W.asinh = function() {
  var e, i, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, i = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, ge = !1, t = t.times(t).plus(1).sqrt().plus(t), ge = !0, n.precision = e, n.rounding = i, t.ln());
};
W.inverseHyperbolicTangent = W.atanh = function() {
  var e, i, t, n, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, i = a.rounding, n = r.sd(), Math.max(n, e) < 2 * -r.e - 1 ? pe(new a(r), e, i, !0) : (a.precision = t = n - r.e, r = Te(r.plus(1), new a(1).minus(r), t + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = i, r.times(0.5))) : new a(NaN);
};
W.inverseSine = W.asin = function() {
  var e, i, t, n, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (i = r.abs().cmp(1), t = a.precision, n = a.rounding, i !== -1 ? i === 0 ? (e = sr(a, t + 4, n).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = t + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = t, a.rounding = n, r.times(2)));
};
W.inverseTangent = W.atan = function() {
  var e, i, t, n, r, a, u, f, c, h = this, s = h.constructor, o = s.precision, l = s.rounding;
  if (h.isFinite()) {
    if (h.isZero())
      return new s(h);
    if (h.abs().eq(1) && o + 4 <= Yt)
      return u = sr(s, o + 4, l).times(0.25), u.s = h.s, u;
  } else {
    if (!h.s)
      return new s(NaN);
    if (o + 4 <= Yt)
      return u = sr(s, o + 4, l).times(0.5), u.s = h.s, u;
  }
  for (s.precision = f = o + 10, s.rounding = 1, t = Math.min(28, f / de + 2 | 0), e = t; e; --e)
    h = h.div(h.times(h).plus(1).sqrt().plus(1));
  for (ge = !1, i = Math.ceil(f / de), n = 1, c = h.times(h), u = new s(h), r = h; e !== -1; )
    if (r = r.times(c), a = u.minus(r.div(n += 2)), r = r.times(c), u = a.plus(r.div(n += 2)), u.d[i] !== void 0)
      for (e = i; u.d[e] === a.d[e] && e--; )
        ;
  return t && (u = u.times(2 << t - 1)), ge = !0, pe(u, s.precision = o, s.rounding = l, !0);
};
W.isFinite = function() {
  return !!this.d;
};
W.isInteger = W.isInt = function() {
  return !!this.d && Qe(this.e / de) > this.d.length - 2;
};
W.isNaN = function() {
  return !this.s;
};
W.isNegative = W.isNeg = function() {
  return this.s < 0;
};
W.isPositive = W.isPos = function() {
  return this.s > 0;
};
W.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
W.lessThan = W.lt = function(e) {
  return this.cmp(e) < 0;
};
W.lessThanOrEqualTo = W.lte = function(e) {
  return this.cmp(e) < 1;
};
W.logarithm = W.log = function(e) {
  var i, t, n, r, a, u, f, c, h = this, s = h.constructor, o = s.precision, l = s.rounding, v = 5;
  if (e == null)
    e = new s(10), i = !0;
  else {
    if (e = new s(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new s(NaN);
    i = e.eq(10);
  }
  if (t = h.d, h.s < 0 || !t || !t[0] || h.eq(1))
    return new s(t && !t[0] ? -1 / 0 : h.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (i)
    if (t.length > 1)
      a = !0;
    else {
      for (r = t[0]; r % 10 === 0; )
        r /= 10;
      a = r !== 1;
    }
  if (ge = !1, f = o + v, u = wr(h, f), n = i ? gt(s, f + 10) : wr(e, f), c = Te(u, n, f, 1), Kr(c.d, r = o, l))
    do
      if (f += 10, u = wr(h, f), n = i ? gt(s, f + 10) : wr(e, f), c = Te(u, n, f, 1), !a) {
        +Ye(c.d).slice(r + 1, r + 15) + 1 == 1e14 && (c = pe(c, o + 1, 0));
        break;
      }
    while (Kr(c.d, r += 10, l));
  return ge = !0, pe(c, o, l);
};
W.minus = W.sub = function(e) {
  var i, t, n, r, a, u, f, c, h, s, o, l, v = this, g = v.constructor;
  if (e = new g(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new g(NaN) : v.d ? e.s = -e.s : e = new g(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (h = v.d, l = e.d, f = g.precision, c = g.rounding, !h[0] || !l[0]) {
    if (l[0])
      e.s = -e.s;
    else if (h[0])
      e = new g(v);
    else
      return new g(c === 3 ? -0 : 0);
    return ge ? pe(e, f, c) : e;
  }
  if (t = Qe(e.e / de), s = Qe(v.e / de), h = h.slice(), a = s - t, a) {
    for (o = a < 0, o ? (i = h, a = -a, u = l.length) : (i = l, t = s, u = h.length), n = Math.max(Math.ceil(f / de), u) + 2, a > n && (a = n, i.length = 1), i.reverse(), n = a; n--; )
      i.push(0);
    i.reverse();
  } else {
    for (n = h.length, u = l.length, o = n < u, o && (u = n), n = 0; n < u; n++)
      if (h[n] != l[n]) {
        o = h[n] < l[n];
        break;
      }
    a = 0;
  }
  for (o && (i = h, h = l, l = i, e.s = -e.s), u = h.length, n = l.length - u; n > 0; --n)
    h[u++] = 0;
  for (n = l.length; n > a; ) {
    if (h[--n] < l[n]) {
      for (r = n; r && h[--r] === 0; )
        h[r] = fr - 1;
      --h[r], h[n] += fr;
    }
    h[n] -= l[n];
  }
  for (; h[--u] === 0; )
    h.pop();
  for (; h[0] === 0; h.shift())
    --t;
  return h[0] ? (e.d = h, e.e = Nt(h, t), ge ? pe(e, f, c) : e) : new g(c === 3 ? -0 : 0);
};
W.modulo = W.mod = function(e) {
  var i, t = this, n = t.constructor;
  return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? pe(new n(t), n.precision, n.rounding) : (ge = !1, n.modulo == 9 ? (i = Te(t, e.abs(), 0, 3, 1), i.s *= e.s) : i = Te(t, e, 0, n.modulo, 1), i = i.times(e), ge = !0, t.minus(i));
};
W.naturalExponential = W.exp = function() {
  return Jt(this);
};
W.naturalLogarithm = W.ln = function() {
  return wr(this);
};
W.negated = W.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, pe(e);
};
W.plus = W.add = function(e) {
  var i, t, n, r, a, u, f, c, h, s, o = this, l = o.constructor;
  if (e = new l(e), !o.d || !e.d)
    return !o.s || !e.s ? e = new l(NaN) : o.d || (e = new l(e.d || o.s === e.s ? o : NaN)), e;
  if (o.s != e.s)
    return e.s = -e.s, o.minus(e);
  if (h = o.d, s = e.d, f = l.precision, c = l.rounding, !h[0] || !s[0])
    return s[0] || (e = new l(o)), ge ? pe(e, f, c) : e;
  if (a = Qe(o.e / de), n = Qe(e.e / de), h = h.slice(), r = a - n, r) {
    for (r < 0 ? (t = h, r = -r, u = s.length) : (t = s, n = a, u = h.length), a = Math.ceil(f / de), u = a > u ? a + 1 : u + 1, r > u && (r = u, t.length = 1), t.reverse(); r--; )
      t.push(0);
    t.reverse();
  }
  for (u = h.length, r = s.length, u - r < 0 && (r = u, t = s, s = h, h = t), i = 0; r; )
    i = (h[--r] = h[r] + s[r] + i) / fr | 0, h[r] %= fr;
  for (i && (h.unshift(i), ++n), u = h.length; h[--u] == 0; )
    h.pop();
  return e.d = h, e.e = Nt(h, n), ge ? pe(e, f, c) : e;
};
W.precision = W.sd = function(e) {
  var i, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Ar + e);
  return t.d ? (i = Ki(t.d), e && t.e + 1 > i && (i = t.e + 1)) : i = NaN, i;
};
W.round = function() {
  var e = this, i = e.constructor;
  return pe(new i(e), e.e + 1, i.rounding);
};
W.sine = W.sin = function() {
  var e, i, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, i = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + de, n.rounding = 1, t = Co(n, ea(n, t)), n.precision = e, n.rounding = i, pe(pr > 2 ? t.neg() : t, e, i, !0)) : new n(NaN);
};
W.squareRoot = W.sqrt = function() {
  var e, i, t, n, r, a, u = this, f = u.d, c = u.e, h = u.s, s = u.constructor;
  if (h !== 1 || !f || !f[0])
    return new s(!h || h < 0 && (!f || f[0]) ? NaN : f ? u : 1 / 0);
  for (ge = !1, h = Math.sqrt(+u), h == 0 || h == 1 / 0 ? (i = Ye(f), (i.length + c) % 2 == 0 && (i += "0"), h = Math.sqrt(i), c = Qe((c + 1) / 2) - (c < 0 || c % 2), h == 1 / 0 ? i = "5e" + c : (i = h.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + c), n = new s(i)) : n = new s(h.toString()), t = (c = s.precision) + 3; ; )
    if (a = n, n = a.plus(Te(u, a, t + 2, 1)).times(0.5), Ye(a.d).slice(0, t) === (i = Ye(n.d)).slice(0, t))
      if (i = i.slice(t - 3, t + 1), i == "9999" || !r && i == "4999") {
        if (!r && (pe(a, c + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
        t += 4, r = 1;
      } else {
        (!+i || !+i.slice(1) && i.charAt(0) == "5") && (pe(n, c + 1, 1), e = !n.times(n).eq(u));
        break;
      }
  return ge = !0, pe(n, c, s.rounding, e);
};
W.tangent = W.tan = function() {
  var e, i, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, i = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = Te(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = i, pe(pr == 2 || pr == 4 ? t.neg() : t, e, i, !0)) : new n(NaN);
};
W.times = W.mul = function(e) {
  var i, t, n, r, a, u, f, c, h, s = this, o = s.constructor, l = s.d, v = (e = new o(e)).d;
  if (e.s *= s.s, !l || !l[0] || !v || !v[0])
    return new o(!e.s || l && !l[0] && !v || v && !v[0] && !l ? NaN : !l || !v ? e.s / 0 : e.s * 0);
  for (t = Qe(s.e / de) + Qe(e.e / de), c = l.length, h = v.length, c < h && (a = l, l = v, v = a, u = c, c = h, h = u), a = [], u = c + h, n = u; n--; )
    a.push(0);
  for (n = h; --n >= 0; ) {
    for (i = 0, r = c + n; r > n; )
      f = a[r] + v[n] * l[r - n - 1] + i, a[r--] = f % fr | 0, i = f / fr | 0;
    a[r] = (a[r] + i) % fr | 0;
  }
  for (; !a[--u]; )
    a.pop();
  return i ? ++t : a.shift(), e.d = a, e.e = Nt(a, t), ge ? pe(e, o.precision, o.rounding) : e;
};
W.toBinary = function(e, i) {
  return rn(this, 2, e, i);
};
W.toDecimalPlaces = W.toDP = function(e, i) {
  var t = this, n = t.constructor;
  return t = new n(t), e === void 0 ? t : (ke(e, 0, Er), i === void 0 ? i = n.rounding : ke(i, 0, 8), pe(t, e + t.e + 1, i));
};
W.toExponential = function(e, i) {
  var t, n = this, r = n.constructor;
  return e === void 0 ? t = hr(n, !0) : (ke(e, 0, Er), i === void 0 ? i = r.rounding : ke(i, 0, 8), n = pe(new r(n), e + 1, i), t = hr(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
W.toFixed = function(e, i) {
  var t, n, r = this, a = r.constructor;
  return e === void 0 ? t = hr(r) : (ke(e, 0, Er), i === void 0 ? i = a.rounding : ke(i, 0, 8), n = pe(new a(r), e + r.e + 1, i), t = hr(n, !1, e + n.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
W.toFraction = function(e) {
  var i, t, n, r, a, u, f, c, h, s, o, l, v = this, g = v.d, p = v.constructor;
  if (!g)
    return new p(v);
  if (h = t = new p(1), n = c = new p(0), i = new p(n), a = i.e = Ki(g) - v.e - 1, u = a % de, i.d[0] = Ge(10, u < 0 ? de + u : u), e == null)
    e = a > 0 ? i : h;
  else {
    if (f = new p(e), !f.isInt() || f.lt(h))
      throw Error(Ar + f);
    e = f.gt(i) ? a > 0 ? i : h : f;
  }
  for (ge = !1, f = new p(Ye(g)), s = p.precision, p.precision = a = g.length * de * 2; o = Te(f, i, 0, 1, 1), r = t.plus(o.times(n)), r.cmp(e) != 1; )
    t = n, n = r, r = h, h = c.plus(o.times(r)), c = r, r = i, i = f.minus(o.times(r)), f = r;
  return r = Te(e.minus(t), n, 0, 1, 1), c = c.plus(r.times(h)), t = t.plus(r.times(n)), c.s = h.s = v.s, l = Te(h, n, a, 1).minus(v).abs().cmp(Te(c, t, a, 1).minus(v).abs()) < 1 ? [h, n] : [c, t], p.precision = s, ge = !0, l;
};
W.toHexadecimal = W.toHex = function(e, i) {
  return rn(this, 16, e, i);
};
W.toNearest = function(e, i) {
  var t = this, n = t.constructor;
  if (t = new n(t), e == null) {
    if (!t.d)
      return t;
    e = new n(1), i = n.rounding;
  } else {
    if (e = new n(e), i === void 0 ? i = n.rounding : ke(i, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (ge = !1, t = Te(t, e, 0, i, 1).times(e), ge = !0, pe(t)) : (e.s = t.s, t = e), t;
};
W.toNumber = function() {
  return +this;
};
W.toOctal = function(e, i) {
  return rn(this, 8, e, i);
};
W.toPower = W.pow = function(e) {
  var i, t, n, r, a, u, f = this, c = f.constructor, h = +(e = new c(e));
  if (!f.d || !e.d || !f.d[0] || !e.d[0])
    return new c(Ge(+f, h));
  if (f = new c(f), f.eq(1))
    return f;
  if (n = c.precision, a = c.rounding, e.eq(1))
    return pe(f, n, a);
  if (i = Qe(e.e / de), i >= e.d.length - 1 && (t = h < 0 ? -h : h) <= wo)
    return r = Wi(c, f, t, n), e.s < 0 ? new c(1).div(r) : pe(r, n, a);
  if (u = f.s, u < 0) {
    if (i < e.d.length - 1)
      return new c(NaN);
    if (e.d[i] & 1 || (u = 1), f.e == 0 && f.d[0] == 1 && f.d.length == 1)
      return f.s = u, f;
  }
  return t = Ge(+f, h), i = t == 0 || !isFinite(t) ? Qe(h * (Math.log("0." + Ye(f.d)) / Math.LN10 + f.e + 1)) : new c(t + "").e, i > c.maxE + 1 || i < c.minE - 1 ? new c(i > 0 ? u / 0 : 0) : (ge = !1, c.rounding = f.s = 1, t = Math.min(12, (i + "").length), r = Jt(e.times(wr(f, n + t)), n), r.d && (r = pe(r, n + 5, 1), Kr(r.d, n, a) && (i = n + 10, r = pe(Jt(e.times(wr(f, i + t)), i), i + 5, 1), +Ye(r.d).slice(n + 1, n + 15) + 1 == 1e14 && (r = pe(r, n + 1, 0)))), r.s = u, ge = !0, c.rounding = a, pe(r, n, a));
};
W.toPrecision = function(e, i) {
  var t, n = this, r = n.constructor;
  return e === void 0 ? t = hr(n, n.e <= r.toExpNeg || n.e >= r.toExpPos) : (ke(e, 1, Er), i === void 0 ? i = r.rounding : ke(i, 0, 8), n = pe(new r(n), e, i), t = hr(n, e <= n.e || n.e <= r.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
W.toSignificantDigits = W.toSD = function(e, i) {
  var t = this, n = t.constructor;
  return e === void 0 ? (e = n.precision, i = n.rounding) : (ke(e, 1, Er), i === void 0 ? i = n.rounding : ke(i, 0, 8)), pe(new n(t), e, i);
};
W.toString = function() {
  var e = this, i = e.constructor, t = hr(e, e.e <= i.toExpNeg || e.e >= i.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
W.truncated = W.trunc = function() {
  return pe(new this.constructor(this), this.e + 1, 1);
};
W.valueOf = W.toJSON = function() {
  var e = this, i = e.constructor, t = hr(e, e.e <= i.toExpNeg || e.e >= i.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function Ye(e) {
  var i, t, n, r = e.length - 1, a = "", u = e[0];
  if (r > 0) {
    for (a += u, i = 1; i < r; i++)
      n = e[i] + "", t = de - n.length, t && (a += gr(t)), a += n;
    u = e[i], n = u + "", t = de - n.length, t && (a += gr(t));
  } else if (u === 0)
    return "0";
  for (; u % 10 === 0; )
    u /= 10;
  return a + u;
}
function ke(e, i, t) {
  if (e !== ~~e || e < i || e > t)
    throw Error(Ar + e);
}
function Kr(e, i, t, n) {
  var r, a, u, f;
  for (a = e[0]; a >= 10; a /= 10)
    --i;
  return --i < 0 ? (i += de, r = 0) : (r = Math.ceil((i + 1) / de), i %= de), a = Ge(10, de - i), f = e[r] % a | 0, n == null ? i < 3 ? (i == 0 ? f = f / 100 | 0 : i == 1 && (f = f / 10 | 0), u = t < 4 && f == 99999 || t > 3 && f == 49999 || f == 5e4 || f == 0) : u = (t < 4 && f + 1 == a || t > 3 && f + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == Ge(10, i - 2) - 1 || (f == a / 2 || f == 0) && (e[r + 1] / a / 100 | 0) == 0 : i < 4 ? (i == 0 ? f = f / 1e3 | 0 : i == 1 ? f = f / 100 | 0 : i == 2 && (f = f / 10 | 0), u = (n || t < 4) && f == 9999 || !n && t > 3 && f == 4999) : u = ((n || t < 4) && f + 1 == a || !n && t > 3 && f + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == Ge(10, i - 3) - 1, u;
}
function ct(e, i, t) {
  for (var n, r = [0], a, u = 0, f = e.length; u < f; ) {
    for (a = r.length; a--; )
      r[a] *= i;
    for (r[0] += Gt.indexOf(e.charAt(u++)), n = 0; n < r.length; n++)
      r[n] > t - 1 && (r[n + 1] === void 0 && (r[n + 1] = 0), r[n + 1] += r[n] / t | 0, r[n] %= t);
  }
  return r.reverse();
}
function Ao(e, i) {
  var t, n, r;
  if (i.isZero())
    return i;
  n = i.d.length, n < 32 ? (t = Math.ceil(n / 3), r = (1 / xt(4, t)).toString()) : (t = 16, r = "2.3283064365386962890625e-10"), e.precision += t, i = Pr(e, 1, i.times(r), new e(1));
  for (var a = t; a--; ) {
    var u = i.times(i);
    i = u.times(u).minus(u).times(8).plus(1);
  }
  return e.precision -= t, i;
}
var Te = /* @__PURE__ */ function() {
  function e(n, r, a) {
    var u, f = 0, c = n.length;
    for (n = n.slice(); c--; )
      u = n[c] * r + f, n[c] = u % a | 0, f = u / a | 0;
    return f && n.unshift(f), n;
  }
  function i(n, r, a, u) {
    var f, c;
    if (a != u)
      c = a > u ? 1 : -1;
    else
      for (f = c = 0; f < a; f++)
        if (n[f] != r[f]) {
          c = n[f] > r[f] ? 1 : -1;
          break;
        }
    return c;
  }
  function t(n, r, a, u) {
    for (var f = 0; a--; )
      n[a] -= f, f = n[a] < r[a] ? 1 : 0, n[a] = f * u + n[a] - r[a];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, r, a, u, f, c) {
    var h, s, o, l, v, g, p, m, d, y, D, A, E, w, F, b, C, S, M, B, I = n.constructor, T = n.s == r.s ? 1 : -1, L = n.d, x = r.d;
    if (!L || !L[0] || !x || !x[0])
      return new I(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !r.s || (L ? x && L[0] == x[0] : !x) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !x ? T * 0 : T / 0
        )
      );
    for (c ? (v = 1, s = n.e - r.e) : (c = fr, v = de, s = Qe(n.e / v) - Qe(r.e / v)), M = x.length, C = L.length, d = new I(T), y = d.d = [], o = 0; x[o] == (L[o] || 0); o++)
      ;
    if (x[o] > (L[o] || 0) && s--, a == null ? (w = a = I.precision, u = I.rounding) : f ? w = a + (n.e - r.e) + 1 : w = a, w < 0)
      y.push(1), g = !0;
    else {
      if (w = w / v + 2 | 0, o = 0, M == 1) {
        for (l = 0, x = x[0], w++; (o < C || l) && w--; o++)
          F = l * c + (L[o] || 0), y[o] = F / x | 0, l = F % x | 0;
        g = l || o < C;
      } else {
        for (l = c / (x[0] + 1) | 0, l > 1 && (x = e(x, l, c), L = e(L, l, c), M = x.length, C = L.length), b = M, D = L.slice(0, M), A = D.length; A < M; )
          D[A++] = 0;
        B = x.slice(), B.unshift(0), S = x[0], x[1] >= c / 2 && ++S;
        do
          l = 0, h = i(x, D, M, A), h < 0 ? (E = D[0], M != A && (E = E * c + (D[1] || 0)), l = E / S | 0, l > 1 ? (l >= c && (l = c - 1), p = e(x, l, c), m = p.length, A = D.length, h = i(p, D, m, A), h == 1 && (l--, t(p, M < m ? B : x, m, c))) : (l == 0 && (h = l = 1), p = x.slice()), m = p.length, m < A && p.unshift(0), t(D, p, A, c), h == -1 && (A = D.length, h = i(x, D, M, A), h < 1 && (l++, t(D, M < A ? B : x, A, c))), A = D.length) : h === 0 && (l++, D = [0]), y[o++] = l, h && D[0] ? D[A++] = L[b] || 0 : (D = [L[b]], A = 1);
        while ((b++ < C || D[0] !== void 0) && w--);
        g = D[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (v == 1)
      d.e = s, Yi = g;
    else {
      for (o = 1, l = y[0]; l >= 10; l /= 10)
        o++;
      d.e = o + s * v - 1, pe(d, f ? a + d.e + 1 : a, u, g);
    }
    return d;
  };
}();
function pe(e, i, t, n) {
  var r, a, u, f, c, h, s, o, l, v = e.constructor;
  e:
    if (i != null) {
      if (o = e.d, !o)
        return e;
      for (r = 1, f = o[0]; f >= 10; f /= 10)
        r++;
      if (a = i - r, a < 0)
        a += de, u = i, s = o[l = 0], c = s / Ge(10, r - u - 1) % 10 | 0;
      else if (l = Math.ceil((a + 1) / de), f = o.length, l >= f)
        if (n) {
          for (; f++ <= l; )
            o.push(0);
          s = c = 0, r = 1, a %= de, u = a - de + 1;
        } else
          break e;
      else {
        for (s = f = o[l], r = 1; f >= 10; f /= 10)
          r++;
        a %= de, u = a - de + r, c = u < 0 ? 0 : s / Ge(10, r - u - 1) % 10 | 0;
      }
      if (n = n || i < 0 || o[l + 1] !== void 0 || (u < 0 ? s : s % Ge(10, r - u - 1)), h = t < 4 ? (c || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (t == 4 || n || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? u > 0 ? s / Ge(10, r - u) : 0 : o[l - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), i < 1 || !o[0])
        return o.length = 0, h ? (i -= e.e + 1, o[0] = Ge(10, (de - i % de) % de), e.e = -i || 0) : o[0] = e.e = 0, e;
      if (a == 0 ? (o.length = l, f = 1, l--) : (o.length = l + 1, f = Ge(10, de - a), o[l] = u > 0 ? (s / Ge(10, r - u) % Ge(10, u) | 0) * f : 0), h)
        for (; ; )
          if (l == 0) {
            for (a = 1, u = o[0]; u >= 10; u /= 10)
              a++;
            for (u = o[0] += f, f = 1; u >= 10; u /= 10)
              f++;
            a != f && (e.e++, o[0] == fr && (o[0] = 1));
            break;
          } else {
            if (o[l] += f, o[l] != fr)
              break;
            o[l--] = 0, f = 1;
          }
      for (a = o.length; o[--a] === 0; )
        o.pop();
    }
  return ge && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function hr(e, i, t) {
  if (!e.isFinite())
    return ji(e);
  var n, r = e.e, a = Ye(e.d), u = a.length;
  return i ? (t && (n = t - u) > 0 ? a = a.charAt(0) + "." + a.slice(1) + gr(n) : u > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + gr(-r - 1) + a, t && (n = t - u) > 0 && (a += gr(n))) : r >= u ? (a += gr(r + 1 - u), t && (n = t - r - 1) > 0 && (a = a + "." + gr(n))) : ((n = r + 1) < u && (a = a.slice(0, n) + "." + a.slice(n)), t && (n = t - u) > 0 && (r + 1 === u && (a += "."), a += gr(n))), a;
}
function Nt(e, i) {
  var t = e[0];
  for (i *= de; t >= 10; t /= 10)
    i++;
  return i;
}
function gt(e, i, t) {
  if (i > yo)
    throw ge = !0, t && (e.precision = t), Error(Ji);
  return pe(new e(dt), i, 1, !0);
}
function sr(e, i, t) {
  if (i > Yt)
    throw Error(Ji);
  return pe(new e(mt), i, t, !0);
}
function Ki(e) {
  var i = e.length - 1, t = i * de + 1;
  if (i = e[i], i) {
    for (; i % 10 == 0; i /= 10)
      t--;
    for (i = e[0]; i >= 10; i /= 10)
      t++;
  }
  return t;
}
function gr(e) {
  for (var i = ""; e--; )
    i += "0";
  return i;
}
function Wi(e, i, t, n) {
  var r, a = new e(1), u = Math.ceil(n / de + 4);
  for (ge = !1; ; ) {
    if (t % 2 && (a = a.times(i), En(a.d, u) && (r = !0)), t = Qe(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    i = i.times(i), En(i.d, u);
  }
  return ge = !0, a;
}
function An(e) {
  return e.d[e.d.length - 1] & 1;
}
function ki(e, i, t) {
  for (var n, r = new e(i[0]), a = 0; ++a < i.length; )
    if (n = new e(i[a]), n.s)
      r[t](n) && (r = n);
    else {
      r = n;
      break;
    }
  return r;
}
function Jt(e, i) {
  var t, n, r, a, u, f, c, h = 0, s = 0, o = 0, l = e.constructor, v = l.rounding, g = l.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new l(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (i == null ? (ge = !1, c = g) : c = i, f = new l(0.03125); e.e > -2; )
    e = e.times(f), o += 5;
  for (n = Math.log(Ge(2, o)) / Math.LN10 * 2 + 5 | 0, c += n, t = a = u = new l(1), l.precision = c; ; ) {
    if (a = pe(a.times(e), c, 1), t = t.times(++s), f = u.plus(Te(a, t, c, 1)), Ye(f.d).slice(0, c) === Ye(u.d).slice(0, c)) {
      for (r = o; r--; )
        u = pe(u.times(u), c, 1);
      if (i == null)
        if (h < 3 && Kr(u.d, c - n, v, h))
          l.precision = c += 10, t = a = f = new l(1), s = 0, h++;
        else
          return pe(u, l.precision = g, v, ge = !0);
      else
        return l.precision = g, u;
    }
    u = f;
  }
}
function wr(e, i) {
  var t, n, r, a, u, f, c, h, s, o, l, v = 1, g = 10, p = e, m = p.d, d = p.constructor, y = d.rounding, D = d.precision;
  if (p.s < 0 || !m || !m[0] || !p.e && m[0] == 1 && m.length == 1)
    return new d(m && !m[0] ? -1 / 0 : p.s != 1 ? NaN : m ? 0 : p);
  if (i == null ? (ge = !1, s = D) : s = i, d.precision = s += g, t = Ye(m), n = t.charAt(0), Math.abs(a = p.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; )
      p = p.times(e), t = Ye(p.d), n = t.charAt(0), v++;
    a = p.e, n > 1 ? (p = new d("0." + t), a++) : p = new d(n + "." + t.slice(1));
  } else
    return h = gt(d, s + 2, D).times(a + ""), p = wr(new d(n + "." + t.slice(1)), s - g).plus(h), d.precision = D, i == null ? pe(p, D, y, ge = !0) : p;
  for (o = p, c = u = p = Te(p.minus(1), p.plus(1), s, 1), l = pe(p.times(p), s, 1), r = 3; ; ) {
    if (u = pe(u.times(l), s, 1), h = c.plus(Te(u, new d(r), s, 1)), Ye(h.d).slice(0, s) === Ye(c.d).slice(0, s))
      if (c = c.times(2), a !== 0 && (c = c.plus(gt(d, s + 2, D).times(a + ""))), c = Te(c, new d(v), s, 1), i == null)
        if (Kr(c.d, s - g, y, f))
          d.precision = s += g, h = u = p = Te(o.minus(1), o.plus(1), s, 1), l = pe(p.times(p), s, 1), r = f = 1;
        else
          return pe(c, d.precision = D, y, ge = !0);
      else
        return d.precision = D, c;
    c = h, r += 2;
  }
}
function ji(e) {
  return String(e.s * e.s / 0);
}
function Qt(e, i) {
  var t, n, r;
  for ((t = i.indexOf(".")) > -1 && (i = i.replace(".", "")), (n = i.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +i.slice(n + 1), i = i.substring(0, n)) : t < 0 && (t = i.length), n = 0; i.charCodeAt(n) === 48; n++)
    ;
  for (r = i.length; i.charCodeAt(r - 1) === 48; --r)
    ;
  if (i = i.slice(n, r), i) {
    if (r -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % de, t < 0 && (n += de), n < r) {
      for (n && e.d.push(+i.slice(0, n)), r -= de; n < r; )
        e.d.push(+i.slice(n, n += de));
      i = i.slice(n), n = de - i.length;
    } else
      n -= r;
    for (; n--; )
      i += "0";
    e.d.push(+i), ge && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Eo(e, i) {
  var t, n, r, a, u, f, c, h, s;
  if (i.indexOf("_") > -1) {
    if (i = i.replace(/(\d)_(?=\d)/g, "$1"), Hi.test(i))
      return Qt(e, i);
  } else if (i === "Infinity" || i === "NaN")
    return +i || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (go.test(i))
    t = 16, i = i.toLowerCase();
  else if (mo.test(i))
    t = 2;
  else if (Do.test(i))
    t = 8;
  else
    throw Error(Ar + i);
  for (a = i.search(/p/i), a > 0 ? (c = +i.slice(a + 1), i = i.substring(2, a)) : i = i.slice(2), a = i.indexOf("."), u = a >= 0, n = e.constructor, u && (i = i.replace(".", ""), f = i.length, a = f - a, r = Wi(n, new n(t), a, a * 2)), h = ct(i, t, fr), s = h.length - 1, a = s; h[a] === 0; --a)
    h.pop();
  return a < 0 ? new n(e.s * 0) : (e.e = Nt(h, s), e.d = h, ge = !1, u && (e = Te(e, r, f * 4)), c && (e = e.times(Math.abs(c) < 54 ? Ge(2, c) : Rr.pow(2, c))), ge = !0, e);
}
function Co(e, i) {
  var t, n = i.d.length;
  if (n < 3)
    return i.isZero() ? i : Pr(e, 2, i, i);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, i = i.times(1 / xt(5, t)), i = Pr(e, 2, i, i);
  for (var r, a = new e(5), u = new e(16), f = new e(20); t--; )
    r = i.times(i), i = i.times(a.plus(r.times(u.times(r).minus(f))));
  return i;
}
function Pr(e, i, t, n, r) {
  var a, u, f, c, h = e.precision, s = Math.ceil(h / de);
  for (ge = !1, c = t.times(t), f = new e(n); ; ) {
    if (u = Te(f.times(c), new e(i++ * i++), h, 1), f = r ? n.plus(u) : n.minus(u), n = Te(u.times(c), new e(i++ * i++), h, 1), u = f.plus(n), u.d[s] !== void 0) {
      for (a = s; u.d[a] === f.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = f, f = n, n = u, u = a;
  }
  return ge = !0, u.d.length = s + 1, u;
}
function xt(e, i) {
  for (var t = e; --i; )
    t *= e;
  return t;
}
function ea(e, i) {
  var t, n = i.s < 0, r = sr(e, e.precision, 1), a = r.times(0.5);
  if (i = i.abs(), i.lte(a))
    return pr = n ? 4 : 1, i;
  if (t = i.divToInt(r), t.isZero())
    pr = n ? 3 : 2;
  else {
    if (i = i.minus(t.times(r)), i.lte(a))
      return pr = An(t) ? n ? 2 : 3 : n ? 4 : 1, i;
    pr = An(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return i.minus(r).abs();
}
function rn(e, i, t, n) {
  var r, a, u, f, c, h, s, o, l, v = e.constructor, g = t !== void 0;
  if (g ? (ke(t, 1, Er), n === void 0 ? n = v.rounding : ke(n, 0, 8)) : (t = v.precision, n = v.rounding), !e.isFinite())
    s = ji(e);
  else {
    for (s = hr(e), u = s.indexOf("."), g ? (r = 2, i == 16 ? t = t * 4 - 3 : i == 8 && (t = t * 3 - 2)) : r = i, u >= 0 && (s = s.replace(".", ""), l = new v(1), l.e = s.length - u, l.d = ct(hr(l), 10, r), l.e = l.d.length), o = ct(s, 10, r), a = c = o.length; o[--c] == 0; )
      o.pop();
    if (!o[0])
      s = g ? "0p+0" : "0";
    else {
      if (u < 0 ? a-- : (e = new v(e), e.d = o, e.e = a, e = Te(e, l, t, n, 0, r), o = e.d, a = e.e, h = Yi), u = o[t], f = r / 2, h = h || o[t + 1] !== void 0, h = n < 4 ? (u !== void 0 || h) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : u > f || u === f && (n === 4 || h || n === 6 && o[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), o.length = t, h)
        for (; ++o[--t] > r - 1; )
          o[t] = 0, t || (++a, o.unshift(1));
      for (c = o.length; !o[c - 1]; --c)
        ;
      for (u = 0, s = ""; u < c; u++)
        s += Gt.charAt(o[u]);
      if (g) {
        if (c > 1)
          if (i == 16 || i == 8) {
            for (u = i == 16 ? 4 : 3, --c; c % u; c++)
              s += "0";
            for (o = ct(s, r, i), c = o.length; !o[c - 1]; --c)
              ;
            for (u = 1, s = "1."; u < c; u++)
              s += Gt.charAt(o[u]);
          } else
            s = s.charAt(0) + "." + s.slice(1);
        s = s + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          s = "0" + s;
        s = "0." + s;
      } else if (++a > c)
        for (a -= c; a--; )
          s += "0";
      else
        a < c && (s = s.slice(0, a) + "." + s.slice(a));
    }
    s = (i == 16 ? "0x" : i == 2 ? "0b" : i == 8 ? "0o" : "") + s;
  }
  return e.s < 0 ? "-" + s : s;
}
function En(e, i) {
  if (e.length > i)
    return e.length = i, !0;
}
function Fo(e) {
  return new this(e).abs();
}
function bo(e) {
  return new this(e).acos();
}
function Mo(e) {
  return new this(e).acosh();
}
function So(e, i) {
  return new this(e).plus(i);
}
function Bo(e) {
  return new this(e).asin();
}
function No(e) {
  return new this(e).asinh();
}
function xo(e) {
  return new this(e).atan();
}
function _o(e) {
  return new this(e).atanh();
}
function zo(e, i) {
  e = new this(e), i = new this(i);
  var t, n = this.precision, r = this.rounding, a = n + 4;
  return !e.s || !i.s ? t = new this(NaN) : !e.d && !i.d ? (t = sr(this, a, 1).times(i.s > 0 ? 0.25 : 0.75), t.s = e.s) : !i.d || e.isZero() ? (t = i.s < 0 ? sr(this, n, r) : new this(0), t.s = e.s) : !e.d || i.isZero() ? (t = sr(this, a, 1).times(0.5), t.s = e.s) : i.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(Te(e, i, a, 1)), i = sr(this, a, 1), this.precision = n, this.rounding = r, t = e.s < 0 ? t.minus(i) : t.plus(i)) : t = this.atan(Te(e, i, a, 1)), t;
}
function To(e) {
  return new this(e).cbrt();
}
function Io(e) {
  return pe(e = new this(e), e.e + 1, 2);
}
function Lo(e, i, t) {
  return new this(e).clamp(i, t);
}
function Oo(e) {
  if (!e || typeof e != "object")
    throw Error(Bt + "Object expected");
  var i, t, n, r = e.defaults === !0, a = [
    "precision",
    1,
    Er,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Tr,
    0,
    "toExpPos",
    0,
    Tr,
    "maxE",
    0,
    Tr,
    "minE",
    -Tr,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < a.length; i += 3)
    if (t = a[i], r && (this[t] = Zt[t]), (n = e[t]) !== void 0)
      if (Qe(n) === n && n >= a[i + 1] && n <= a[i + 2])
        this[t] = n;
      else
        throw Error(Ar + t + ": " + n);
  if (t = "crypto", r && (this[t] = Zt[t]), (n = e[t]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Qi);
      else
        this[t] = !1;
    else
      throw Error(Ar + t + ": " + n);
  return this;
}
function qo(e) {
  return new this(e).cos();
}
function $o(e) {
  return new this(e).cosh();
}
function ra(e) {
  var i, t, n;
  function r(a) {
    var u, f, c, h = this;
    if (!(h instanceof r))
      return new r(a);
    if (h.constructor = r, Cn(a)) {
      h.s = a.s, ge ? !a.d || a.e > r.maxE ? (h.e = NaN, h.d = null) : a.e < r.minE ? (h.e = 0, h.d = [0]) : (h.e = a.e, h.d = a.d.slice()) : (h.e = a.e, h.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (c = typeof a, c === "number") {
      if (a === 0) {
        h.s = 1 / a < 0 ? -1 : 1, h.e = 0, h.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, h.s = -1) : h.s = 1, a === ~~a && a < 1e7) {
        for (u = 0, f = a; f >= 10; f /= 10)
          u++;
        ge ? u > r.maxE ? (h.e = NaN, h.d = null) : u < r.minE ? (h.e = 0, h.d = [0]) : (h.e = u, h.d = [a]) : (h.e = u, h.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (h.s = NaN), h.e = NaN, h.d = null;
        return;
      }
      return Qt(h, a.toString());
    } else if (c !== "string")
      throw Error(Ar + a);
    return (f = a.charCodeAt(0)) === 45 ? (a = a.slice(1), h.s = -1) : (f === 43 && (a = a.slice(1)), h.s = 1), Hi.test(a) ? Qt(h, a) : Eo(h, a);
  }
  if (r.prototype = W, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = Oo, r.clone = ra, r.isDecimal = Cn, r.abs = Fo, r.acos = bo, r.acosh = Mo, r.add = So, r.asin = Bo, r.asinh = No, r.atan = xo, r.atanh = _o, r.atan2 = zo, r.cbrt = To, r.ceil = Io, r.clamp = Lo, r.cos = qo, r.cosh = $o, r.div = Po, r.exp = Ro, r.floor = Uo, r.hypot = Vo, r.ln = Go, r.log = Zo, r.log10 = Jo, r.log2 = Yo, r.max = Qo, r.min = Xo, r.mod = Ho, r.mul = Ko, r.pow = Wo, r.random = ko, r.round = jo, r.sign = es, r.sin = rs, r.sinh = ts, r.sqrt = ns, r.sub = is, r.sum = as, r.tan = us, r.tanh = os, r.trunc = ss, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], i = 0; i < n.length; )
      e.hasOwnProperty(t = n[i++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function Po(e, i) {
  return new this(e).div(i);
}
function Ro(e) {
  return new this(e).exp();
}
function Uo(e) {
  return pe(e = new this(e), e.e + 1, 3);
}
function Vo() {
  var e, i, t = new this(0);
  for (ge = !1, e = 0; e < arguments.length; )
    if (i = new this(arguments[e++]), i.d)
      t.d && (t = t.plus(i.times(i)));
    else {
      if (i.s)
        return ge = !0, new this(1 / 0);
      t = i;
    }
  return ge = !0, t.sqrt();
}
function Cn(e) {
  return e instanceof Rr || e && e.toStringTag === Xi || !1;
}
function Go(e) {
  return new this(e).ln();
}
function Zo(e, i) {
  return new this(e).log(i);
}
function Yo(e) {
  return new this(e).log(2);
}
function Jo(e) {
  return new this(e).log(10);
}
function Qo() {
  return ki(this, arguments, "lt");
}
function Xo() {
  return ki(this, arguments, "gt");
}
function Ho(e, i) {
  return new this(e).mod(i);
}
function Ko(e, i) {
  return new this(e).mul(i);
}
function Wo(e, i) {
  return new this(e).pow(i);
}
function ko(e) {
  var i, t, n, r, a = 0, u = new this(1), f = [];
  if (e === void 0 ? e = this.precision : ke(e, 1, Er), n = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (i = crypto.getRandomValues(new Uint32Array(n)); a < n; )
        r = i[a], r >= 429e7 ? i[a] = crypto.getRandomValues(new Uint32Array(1))[0] : f[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (i = crypto.randomBytes(n *= 4); a < n; )
        r = i[a] + (i[a + 1] << 8) + (i[a + 2] << 16) + ((i[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(i, a) : (f.push(r % 1e7), a += 4);
      a = n / 4;
    } else
      throw Error(Qi);
  else
    for (; a < n; )
      f[a++] = Math.random() * 1e7 | 0;
  for (n = f[--a], e %= de, n && e && (r = Ge(10, de - e), f[a] = (n / r | 0) * r); f[a] === 0; a--)
    f.pop();
  if (a < 0)
    t = 0, f = [0];
  else {
    for (t = -1; f[0] === 0; t -= de)
      f.shift();
    for (n = 1, r = f[0]; r >= 10; r /= 10)
      n++;
    n < de && (t -= de - n);
  }
  return u.e = t, u.d = f, u;
}
function jo(e) {
  return pe(e = new this(e), e.e + 1, this.rounding);
}
function es(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function rs(e) {
  return new this(e).sin();
}
function ts(e) {
  return new this(e).sinh();
}
function ns(e) {
  return new this(e).sqrt();
}
function is(e, i) {
  return new this(e).sub(i);
}
function as() {
  var e = 0, i = arguments, t = new this(i[e]);
  for (ge = !1; t.s && ++e < i.length; )
    t = t.plus(i[e]);
  return ge = !0, pe(t, this.precision, this.rounding);
}
function us(e) {
  return new this(e).tan();
}
function os(e) {
  return new this(e).tanh();
}
function ss(e) {
  return pe(e = new this(e), e.e + 1, 1);
}
W[Symbol.for("nodejs.util.inspect.custom")] = W.toString;
W[Symbol.toStringTag] = "Decimal";
var Rr = W.constructor = ra(Zt);
dt = new Rr(dt);
mt = new Rr(mt);
var fs = "BigNumber", cs = ["?on", "config"], ls = /* @__PURE__ */ ee(fs, cs, (e) => {
  var {
    on: i,
    config: t
  } = e, n = Rr.clone({
    precision: t.precision,
    modulo: Rr.EUCLID
  });
  return n.prototype = Object.create(n.prototype), n.prototype.type = "BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON = function() {
    return {
      mathjs: "BigNumber",
      value: this.toString()
    };
  }, n.fromJSON = function(r) {
    return new n(r.value);
  }, i && i("config", function(r, a) {
    r.precision !== a.precision && n.config({
      precision: r.precision
    });
  }), n;
}, {
  isClass: !0
});
function ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var na = { exports: {} };
/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(e, i) {
  (function(t) {
    var n = Math.cosh || function(o) {
      return Math.abs(o) < 1e-9 ? 1 - o : (Math.exp(o) + Math.exp(-o)) * 0.5;
    }, r = Math.sinh || function(o) {
      return Math.abs(o) < 1e-9 ? o : (Math.exp(o) - Math.exp(-o)) * 0.5;
    }, a = function(o) {
      var l = Math.PI / 4;
      if (-l > o || o > l)
        return Math.cos(o) - 1;
      var v = o * o;
      return v * (v * (v * (v * (v * (v * (v * (v / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, u = function(o, l) {
      var v = Math.abs(o), g = Math.abs(l);
      return v < 3e3 && g < 3e3 ? Math.sqrt(v * v + g * g) : (v < g ? (v = g, g = o / l) : g = l / o, v * Math.sqrt(1 + g * g));
    }, f = function() {
      throw SyntaxError("Invalid Param");
    };
    function c(o, l) {
      var v = Math.abs(o), g = Math.abs(l);
      return o === 0 ? Math.log(g) : l === 0 ? Math.log(v) : v < 3e3 && g < 3e3 ? Math.log(o * o + l * l) * 0.5 : (o = o / 2, l = l / 2, 0.5 * Math.log(o * o + l * l) + Math.LN2);
    }
    var h = function(o, l) {
      var v = { re: 0, im: 0 };
      if (o == null)
        v.re = v.im = 0;
      else if (l !== void 0)
        v.re = o, v.im = l;
      else
        switch (typeof o) {
          case "object":
            if ("im" in o && "re" in o)
              v.re = o.re, v.im = o.im;
            else if ("abs" in o && "arg" in o) {
              if (!Number.isFinite(o.abs) && Number.isFinite(o.arg))
                return s.INFINITY;
              v.re = o.abs * Math.cos(o.arg), v.im = o.abs * Math.sin(o.arg);
            } else if ("r" in o && "phi" in o) {
              if (!Number.isFinite(o.r) && Number.isFinite(o.phi))
                return s.INFINITY;
              v.re = o.r * Math.cos(o.phi), v.im = o.r * Math.sin(o.phi);
            } else
              o.length === 2 ? (v.re = o[0], v.im = o[1]) : f();
            break;
          case "string":
            v.im = /* void */
            v.re = 0;
            var g = o.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), p = 1, m = 0;
            g === null && f();
            for (var d = 0; d < g.length; d++) {
              var y = g[d];
              y === " " || y === "	" || y === `
` || (y === "+" ? p++ : y === "-" ? m++ : y === "i" || y === "I" ? (p + m === 0 && f(), g[d + 1] !== " " && !isNaN(g[d + 1]) ? (v.im += parseFloat((m % 2 ? "-" : "") + g[d + 1]), d++) : v.im += parseFloat((m % 2 ? "-" : "") + "1"), p = m = 0) : ((p + m === 0 || isNaN(y)) && f(), g[d + 1] === "i" || g[d + 1] === "I" ? (v.im += parseFloat((m % 2 ? "-" : "") + y), d++) : v.re += parseFloat((m % 2 ? "-" : "") + y), p = m = 0));
            }
            p + m > 0 && f();
            break;
          case "number":
            v.im = 0, v.re = o;
            break;
          default:
            f();
        }
      return isNaN(v.re) || isNaN(v.im), v;
    };
    function s(o, l) {
      if (!(this instanceof s))
        return new s(o, l);
      var v = h(o, l);
      this.re = v.re, this.im = v.im;
    }
    s.prototype = {
      re: 0,
      im: 0,
      /**
       * Calculates the sign of a complex number, which is a normalized complex
       *
       * @returns {Complex}
       */
      sign: function() {
        var o = this.abs();
        return new s(
          this.re / o,
          this.im / o
        );
      },
      /**
       * Adds two complex numbers
       *
       * @returns {Complex}
       */
      add: function(o, l) {
        var v = new s(o, l);
        return this.isInfinite() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : new s(
          this.re + v.re,
          this.im + v.im
        );
      },
      /**
       * Subtracts two complex numbers
       *
       * @returns {Complex}
       */
      sub: function(o, l) {
        var v = new s(o, l);
        return this.isInfinite() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : new s(
          this.re - v.re,
          this.im - v.im
        );
      },
      /**
       * Multiplies two complex numbers
       *
       * @returns {Complex}
       */
      mul: function(o, l) {
        var v = new s(o, l);
        return this.isInfinite() && v.isZero() || this.isZero() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : v.im === 0 && this.im === 0 ? new s(this.re * v.re, 0) : new s(
          this.re * v.re - this.im * v.im,
          this.re * v.im + this.im * v.re
        );
      },
      /**
       * Divides two complex numbers
       *
       * @returns {Complex}
       */
      div: function(o, l) {
        var v = new s(o, l);
        if (this.isZero() && v.isZero() || this.isInfinite() && v.isInfinite())
          return s.NAN;
        if (this.isInfinite() || v.isZero())
          return s.INFINITY;
        if (this.isZero() || v.isInfinite())
          return s.ZERO;
        o = this.re, l = this.im;
        var g = v.re, p = v.im, m, d;
        return p === 0 ? new s(o / g, l / g) : Math.abs(g) < Math.abs(p) ? (d = g / p, m = g * d + p, new s(
          (o * d + l) / m,
          (l * d - o) / m
        )) : (d = p / g, m = p * d + g, new s(
          (o + l * d) / m,
          (l - o * d) / m
        ));
      },
      /**
       * Calculate the power of two complex numbers
       *
       * @returns {Complex}
       */
      pow: function(o, l) {
        var v = new s(o, l);
        if (o = this.re, l = this.im, v.isZero())
          return s.ONE;
        if (v.im === 0) {
          if (l === 0 && o > 0)
            return new s(Math.pow(o, v.re), 0);
          if (o === 0)
            switch ((v.re % 4 + 4) % 4) {
              case 0:
                return new s(Math.pow(l, v.re), 0);
              case 1:
                return new s(0, Math.pow(l, v.re));
              case 2:
                return new s(-Math.pow(l, v.re), 0);
              case 3:
                return new s(0, -Math.pow(l, v.re));
            }
        }
        if (o === 0 && l === 0 && v.re > 0 && v.im >= 0)
          return s.ZERO;
        var g = Math.atan2(l, o), p = c(o, l);
        return o = Math.exp(v.re * p - v.im * g), l = v.im * p + v.re * g, new s(
          o * Math.cos(l),
          o * Math.sin(l)
        );
      },
      /**
       * Calculate the complex square root
       *
       * @returns {Complex}
       */
      sqrt: function() {
        var o = this.re, l = this.im, v = this.abs(), g, p;
        if (o >= 0) {
          if (l === 0)
            return new s(Math.sqrt(o), 0);
          g = 0.5 * Math.sqrt(2 * (v + o));
        } else
          g = Math.abs(l) / Math.sqrt(2 * (v - o));
        return o <= 0 ? p = 0.5 * Math.sqrt(2 * (v - o)) : p = Math.abs(l) / Math.sqrt(2 * (v + o)), new s(g, l < 0 ? -p : p);
      },
      /**
       * Calculate the complex exponent
       *
       * @returns {Complex}
       */
      exp: function() {
        var o = Math.exp(this.re);
        return this.im, new s(
          o * Math.cos(this.im),
          o * Math.sin(this.im)
        );
      },
      /**
       * Calculate the complex exponent and subtracts one.
       *
       * This may be more accurate than `Complex(x).exp().sub(1)` if
       * `x` is small.
       *
       * @returns {Complex}
       */
      expm1: function() {
        var o = this.re, l = this.im;
        return new s(
          Math.expm1(o) * Math.cos(l) + a(l),
          Math.exp(o) * Math.sin(l)
        );
      },
      /**
       * Calculate the natural log
       *
       * @returns {Complex}
       */
      log: function() {
        var o = this.re, l = this.im;
        return new s(
          c(o, l),
          Math.atan2(l, o)
        );
      },
      /**
       * Calculate the magnitude of the complex number
       *
       * @returns {number}
       */
      abs: function() {
        return u(this.re, this.im);
      },
      /**
       * Calculate the angle of the complex number
       *
       * @returns {number}
       */
      arg: function() {
        return Math.atan2(this.im, this.re);
      },
      /**
       * Calculate the sine of the complex number
       *
       * @returns {Complex}
       */
      sin: function() {
        var o = this.re, l = this.im;
        return new s(
          Math.sin(o) * n(l),
          Math.cos(o) * r(l)
        );
      },
      /**
       * Calculate the cosine
       *
       * @returns {Complex}
       */
      cos: function() {
        var o = this.re, l = this.im;
        return new s(
          Math.cos(o) * n(l),
          -Math.sin(o) * r(l)
        );
      },
      /**
       * Calculate the tangent
       *
       * @returns {Complex}
       */
      tan: function() {
        var o = 2 * this.re, l = 2 * this.im, v = Math.cos(o) + n(l);
        return new s(
          Math.sin(o) / v,
          r(l) / v
        );
      },
      /**
       * Calculate the cotangent
       *
       * @returns {Complex}
       */
      cot: function() {
        var o = 2 * this.re, l = 2 * this.im, v = Math.cos(o) - n(l);
        return new s(
          -Math.sin(o) / v,
          r(l) / v
        );
      },
      /**
       * Calculate the secant
       *
       * @returns {Complex}
       */
      sec: function() {
        var o = this.re, l = this.im, v = 0.5 * n(2 * l) + 0.5 * Math.cos(2 * o);
        return new s(
          Math.cos(o) * n(l) / v,
          Math.sin(o) * r(l) / v
        );
      },
      /**
       * Calculate the cosecans
       *
       * @returns {Complex}
       */
      csc: function() {
        var o = this.re, l = this.im, v = 0.5 * n(2 * l) - 0.5 * Math.cos(2 * o);
        return new s(
          Math.sin(o) * n(l) / v,
          -Math.cos(o) * r(l) / v
        );
      },
      /**
       * Calculate the complex arcus sinus
       *
       * @returns {Complex}
       */
      asin: function() {
        var o = this.re, l = this.im, v = new s(
          l * l - o * o + 1,
          -2 * o * l
        ).sqrt(), g = new s(
          v.re - l,
          v.im + o
        ).log();
        return new s(g.im, -g.re);
      },
      /**
       * Calculate the complex arcus cosinus
       *
       * @returns {Complex}
       */
      acos: function() {
        var o = this.re, l = this.im, v = new s(
          l * l - o * o + 1,
          -2 * o * l
        ).sqrt(), g = new s(
          v.re - l,
          v.im + o
        ).log();
        return new s(Math.PI / 2 - g.im, g.re);
      },
      /**
       * Calculate the complex arcus tangent
       *
       * @returns {Complex}
       */
      atan: function() {
        var o = this.re, l = this.im;
        if (o === 0) {
          if (l === 1)
            return new s(0, 1 / 0);
          if (l === -1)
            return new s(0, -1 / 0);
        }
        var v = o * o + (1 - l) * (1 - l), g = new s(
          (1 - l * l - o * o) / v,
          -2 * o / v
        ).log();
        return new s(-0.5 * g.im, 0.5 * g.re);
      },
      /**
       * Calculate the complex arcus cotangent
       *
       * @returns {Complex}
       */
      acot: function() {
        var o = this.re, l = this.im;
        if (l === 0)
          return new s(Math.atan2(1, o), 0);
        var v = o * o + l * l;
        return v !== 0 ? new s(
          o / v,
          -l / v
        ).atan() : new s(
          o !== 0 ? o / 0 : 0,
          l !== 0 ? -l / 0 : 0
        ).atan();
      },
      /**
       * Calculate the complex arcus secant
       *
       * @returns {Complex}
       */
      asec: function() {
        var o = this.re, l = this.im;
        if (o === 0 && l === 0)
          return new s(0, 1 / 0);
        var v = o * o + l * l;
        return v !== 0 ? new s(
          o / v,
          -l / v
        ).acos() : new s(
          o !== 0 ? o / 0 : 0,
          l !== 0 ? -l / 0 : 0
        ).acos();
      },
      /**
       * Calculate the complex arcus cosecans
       *
       * @returns {Complex}
       */
      acsc: function() {
        var o = this.re, l = this.im;
        if (o === 0 && l === 0)
          return new s(Math.PI / 2, 1 / 0);
        var v = o * o + l * l;
        return v !== 0 ? new s(
          o / v,
          -l / v
        ).asin() : new s(
          o !== 0 ? o / 0 : 0,
          l !== 0 ? -l / 0 : 0
        ).asin();
      },
      /**
       * Calculate the complex sinh
       *
       * @returns {Complex}
       */
      sinh: function() {
        var o = this.re, l = this.im;
        return new s(
          r(o) * Math.cos(l),
          n(o) * Math.sin(l)
        );
      },
      /**
       * Calculate the complex cosh
       *
       * @returns {Complex}
       */
      cosh: function() {
        var o = this.re, l = this.im;
        return new s(
          n(o) * Math.cos(l),
          r(o) * Math.sin(l)
        );
      },
      /**
       * Calculate the complex tanh
       *
       * @returns {Complex}
       */
      tanh: function() {
        var o = 2 * this.re, l = 2 * this.im, v = n(o) + Math.cos(l);
        return new s(
          r(o) / v,
          Math.sin(l) / v
        );
      },
      /**
       * Calculate the complex coth
       *
       * @returns {Complex}
       */
      coth: function() {
        var o = 2 * this.re, l = 2 * this.im, v = n(o) - Math.cos(l);
        return new s(
          r(o) / v,
          -Math.sin(l) / v
        );
      },
      /**
       * Calculate the complex coth
       *
       * @returns {Complex}
       */
      csch: function() {
        var o = this.re, l = this.im, v = Math.cos(2 * l) - n(2 * o);
        return new s(
          -2 * r(o) * Math.cos(l) / v,
          2 * n(o) * Math.sin(l) / v
        );
      },
      /**
       * Calculate the complex sech
       *
       * @returns {Complex}
       */
      sech: function() {
        var o = this.re, l = this.im, v = Math.cos(2 * l) + n(2 * o);
        return new s(
          2 * n(o) * Math.cos(l) / v,
          -2 * r(o) * Math.sin(l) / v
        );
      },
      /**
       * Calculate the complex asinh
       *
       * @returns {Complex}
       */
      asinh: function() {
        var o = this.im;
        this.im = -this.re, this.re = o;
        var l = this.asin();
        return this.re = -this.im, this.im = o, o = l.re, l.re = -l.im, l.im = o, l;
      },
      /**
       * Calculate the complex acosh
       *
       * @returns {Complex}
       */
      acosh: function() {
        var o = this.acos();
        if (o.im <= 0) {
          var l = o.re;
          o.re = -o.im, o.im = l;
        } else {
          var l = o.im;
          o.im = -o.re, o.re = l;
        }
        return o;
      },
      /**
       * Calculate the complex atanh
       *
       * @returns {Complex}
       */
      atanh: function() {
        var o = this.re, l = this.im, v = o > 1 && l === 0, g = 1 - o, p = 1 + o, m = g * g + l * l, d = m !== 0 ? new s(
          (p * g - l * l) / m,
          (l * g + p * l) / m
        ) : new s(
          o !== -1 ? o / 0 : 0,
          l !== 0 ? l / 0 : 0
        ), y = d.re;
        return d.re = c(d.re, d.im) / 2, d.im = Math.atan2(d.im, y) / 2, v && (d.im = -d.im), d;
      },
      /**
       * Calculate the complex acoth
       *
       * @returns {Complex}
       */
      acoth: function() {
        var o = this.re, l = this.im;
        if (o === 0 && l === 0)
          return new s(0, Math.PI / 2);
        var v = o * o + l * l;
        return v !== 0 ? new s(
          o / v,
          -l / v
        ).atanh() : new s(
          o !== 0 ? o / 0 : 0,
          l !== 0 ? -l / 0 : 0
        ).atanh();
      },
      /**
       * Calculate the complex acsch
       *
       * @returns {Complex}
       */
      acsch: function() {
        var o = this.re, l = this.im;
        if (l === 0)
          return new s(
            o !== 0 ? Math.log(o + Math.sqrt(o * o + 1)) : 1 / 0,
            0
          );
        var v = o * o + l * l;
        return v !== 0 ? new s(
          o / v,
          -l / v
        ).asinh() : new s(
          o !== 0 ? o / 0 : 0,
          l !== 0 ? -l / 0 : 0
        ).asinh();
      },
      /**
       * Calculate the complex asech
       *
       * @returns {Complex}
       */
      asech: function() {
        var o = this.re, l = this.im;
        if (this.isZero())
          return s.INFINITY;
        var v = o * o + l * l;
        return v !== 0 ? new s(
          o / v,
          -l / v
        ).acosh() : new s(
          o !== 0 ? o / 0 : 0,
          l !== 0 ? -l / 0 : 0
        ).acosh();
      },
      /**
       * Calculate the complex inverse 1/z
       *
       * @returns {Complex}
       */
      inverse: function() {
        if (this.isZero())
          return s.INFINITY;
        if (this.isInfinite())
          return s.ZERO;
        var o = this.re, l = this.im, v = o * o + l * l;
        return new s(o / v, -l / v);
      },
      /**
       * Returns the complex conjugate
       *
       * @returns {Complex}
       */
      conjugate: function() {
        return new s(this.re, -this.im);
      },
      /**
       * Gets the negated complex number
       *
       * @returns {Complex}
       */
      neg: function() {
        return new s(-this.re, -this.im);
      },
      /**
       * Ceils the actual complex number
       *
       * @returns {Complex}
       */
      ceil: function(o) {
        return o = Math.pow(10, o || 0), new s(
          Math.ceil(this.re * o) / o,
          Math.ceil(this.im * o) / o
        );
      },
      /**
       * Floors the actual complex number
       *
       * @returns {Complex}
       */
      floor: function(o) {
        return o = Math.pow(10, o || 0), new s(
          Math.floor(this.re * o) / o,
          Math.floor(this.im * o) / o
        );
      },
      /**
       * Ceils the actual complex number
       *
       * @returns {Complex}
       */
      round: function(o) {
        return o = Math.pow(10, o || 0), new s(
          Math.round(this.re * o) / o,
          Math.round(this.im * o) / o
        );
      },
      /**
       * Compares two complex numbers
       *
       * **Note:** new Complex(Infinity).equals(Infinity) === false
       *
       * @returns {boolean}
       */
      equals: function(o, l) {
        var v = new s(o, l);
        return Math.abs(v.re - this.re) <= s.EPSILON && Math.abs(v.im - this.im) <= s.EPSILON;
      },
      /**
       * Clones the actual object
       *
       * @returns {Complex}
       */
      clone: function() {
        return new s(this.re, this.im);
      },
      /**
       * Gets a string of the actual complex number
       *
       * @returns {string}
       */
      toString: function() {
        var o = this.re, l = this.im, v = "";
        return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(o) < s.EPSILON && (o = 0), Math.abs(l) < s.EPSILON && (l = 0), l === 0 ? v + o : (o !== 0 ? (v += o, v += " ", l < 0 ? (l = -l, v += "-") : v += "+", v += " ") : l < 0 && (l = -l, v += "-"), l !== 1 && (v += l), v + "i"));
      },
      /**
       * Returns the actual number as a vector
       *
       * @returns {Array}
       */
      toVector: function() {
        return [this.re, this.im];
      },
      /**
       * Returns the actual real value of the current object
       *
       * @returns {number|null}
       */
      valueOf: function() {
        return this.im === 0 ? this.re : null;
      },
      /**
       * Determines whether a complex number is not on the Riemann sphere.
       *
       * @returns {boolean}
       */
      isNaN: function() {
        return isNaN(this.re) || isNaN(this.im);
      },
      /**
       * Determines whether or not a complex number is at the zero pole of the
       * Riemann sphere.
       *
       * @returns {boolean}
       */
      isZero: function() {
        return this.im === 0 && this.re === 0;
      },
      /**
       * Determines whether a complex number is not at the infinity pole of the
       * Riemann sphere.
       *
       * @returns {boolean}
       */
      isFinite: function() {
        return isFinite(this.re) && isFinite(this.im);
      },
      /**
       * Determines whether or not a complex number is at the infinity pole of the
       * Riemann sphere.
       *
       * @returns {boolean}
       */
      isInfinite: function() {
        return !(this.isNaN() || this.isFinite());
      }
    }, s.ZERO = new s(0, 0), s.ONE = new s(1, 0), s.I = new s(0, 1), s.PI = new s(Math.PI, 0), s.E = new s(Math.E, 0), s.INFINITY = new s(1 / 0, 1 / 0), s.NAN = new s(NaN, NaN), s.EPSILON = 1e-15, Object.defineProperty(s, "__esModule", { value: !0 }), s.default = s, s.Complex = s, e.exports = s;
  })();
})(na);
var hs = na.exports;
const Ze = /* @__PURE__ */ ta(hs);
var vs = "Complex", ps = [], ds = /* @__PURE__ */ ee(vs, ps, () => (Object.defineProperty(Ze, "name", {
  value: "Complex"
}), Ze.prototype.constructor = Ze, Ze.prototype.type = "Complex", Ze.prototype.isComplex = !0, Ze.prototype.toJSON = function() {
  return {
    mathjs: "Complex",
    re: this.re,
    im: this.im
  };
}, Ze.prototype.toPolar = function() {
  return {
    r: this.abs(),
    phi: this.arg()
  };
}, Ze.prototype.format = function(e) {
  var i = "", t = this.im, n = this.re, r = Rt(this.re, e), a = Rt(this.im, e), u = qe(e) ? e : e ? e.precision : null;
  if (u !== null) {
    var f = Math.pow(10, -u);
    Math.abs(n / t) < f && (n = 0), Math.abs(t / n) < f && (t = 0);
  }
  return t === 0 ? i = r : n === 0 ? t === 1 ? i = "i" : t === -1 ? i = "-i" : i = a + "i" : t < 0 ? t === -1 ? i = r + " - i" : i = r + " - " + a.substring(1) + "i" : t === 1 ? i = r + " + i" : i = r + " + " + a + "i", i;
}, Ze.fromPolar = function(e) {
  switch (arguments.length) {
    case 1: {
      var i = arguments[0];
      if (typeof i == "object")
        return Ze(i);
      throw new TypeError("Input has to be an object with r and phi keys.");
    }
    case 2: {
      var t = arguments[0], n = arguments[1];
      if (qe(t)) {
        if (bi(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), qe(n))
          return new Ze({
            r: t,
            phi: n
          });
        throw new TypeError("Phi is not a number nor an angle unit.");
      } else
        throw new TypeError("Radius r is not a number.");
    }
    default:
      throw new SyntaxError("Wrong number of arguments in function fromPolar");
  }
}, Ze.prototype.valueOf = Ze.prototype.toString, Ze.fromJSON = function(e) {
  return new Ze(e);
}, Ze.compare = function(e, i) {
  return e.re > i.re ? 1 : e.re < i.re ? -1 : e.im > i.im ? 1 : e.im < i.im ? -1 : 0;
}, Ze), {
  isClass: !0
}), ia = { exports: {} };
/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(e, i) {
  (function(t) {
    var n = 2e3, r = {
      s: 1,
      n: 0,
      d: 1
    };
    function a(d, y) {
      if (isNaN(d = parseInt(d, 10)))
        throw p();
      return d * y;
    }
    function u(d, y) {
      if (y === 0)
        throw g();
      var D = Object.create(v.prototype);
      D.s = d < 0 ? -1 : 1, d = d < 0 ? -d : d;
      var A = l(d, y);
      return D.n = d / A, D.d = y / A, D;
    }
    function f(d) {
      for (var y = {}, D = d, A = 2, E = 4; E <= D; ) {
        for (; D % A === 0; )
          D /= A, y[A] = (y[A] || 0) + 1;
        E += 1 + 2 * A++;
      }
      return D !== d ? D > 1 && (y[D] = (y[D] || 0) + 1) : y[d] = (y[d] || 0) + 1, y;
    }
    var c = function(d, y) {
      var D = 0, A = 1, E = 1, w = 0, F = 0, b = 0, C = 1, S = 1, M = 0, B = 1, I = 1, T = 1, L = 1e7, x;
      if (d != null)
        if (y !== void 0) {
          if (D = d, A = y, E = D * A, D % 1 !== 0 || A % 1 !== 0)
            throw m();
        } else
          switch (typeof d) {
            case "object": {
              if ("d" in d && "n" in d)
                D = d.n, A = d.d, "s" in d && (D *= d.s);
              else if (0 in d)
                D = d[0], 1 in d && (A = d[1]);
              else
                throw p();
              E = D * A;
              break;
            }
            case "number": {
              if (d < 0 && (E = d, d = -d), d % 1 === 0)
                D = d;
              else if (d > 0) {
                for (d >= 1 && (S = Math.pow(10, Math.floor(1 + Math.log(d) / Math.LN10)), d /= S); B <= L && T <= L; )
                  if (x = (M + I) / (B + T), d === x) {
                    B + T <= L ? (D = M + I, A = B + T) : T > B ? (D = I, A = T) : (D = M, A = B);
                    break;
                  } else
                    d > x ? (M += I, B += T) : (I += M, T += B), B > L ? (D = I, A = T) : (D = M, A = B);
                D *= S;
              } else
                (isNaN(d) || isNaN(y)) && (A = D = NaN);
              break;
            }
            case "string": {
              if (B = d.match(/\d+|./g), B === null)
                throw p();
              if (B[M] === "-" ? (E = -1, M++) : B[M] === "+" && M++, B.length === M + 1 ? F = a(B[M++], E) : B[M + 1] === "." || B[M] === "." ? (B[M] !== "." && (w = a(B[M++], E)), M++, (M + 1 === B.length || B[M + 1] === "(" && B[M + 3] === ")" || B[M + 1] === "'" && B[M + 3] === "'") && (F = a(B[M], E), C = Math.pow(10, B[M].length), M++), (B[M] === "(" && B[M + 2] === ")" || B[M] === "'" && B[M + 2] === "'") && (b = a(B[M + 1], E), S = Math.pow(10, B[M + 1].length) - 1, M += 3)) : B[M + 1] === "/" || B[M + 1] === ":" ? (F = a(B[M], E), C = a(B[M + 2], 1), M += 3) : B[M + 3] === "/" && B[M + 1] === " " && (w = a(B[M], E), F = a(B[M + 2], E), C = a(B[M + 4], 1), M += 5), B.length <= M) {
                A = C * S, E = /* void */
                D = b + A * w + S * F;
                break;
              }
            }
            default:
              throw p();
          }
      if (A === 0)
        throw g();
      r.s = E < 0 ? -1 : 1, r.n = Math.abs(D), r.d = Math.abs(A);
    };
    function h(d, y, D) {
      for (var A = 1; y > 0; d = d * d % D, y >>= 1)
        y & 1 && (A = A * d % D);
      return A;
    }
    function s(d, y) {
      for (; y % 2 === 0; y /= 2)
        ;
      for (; y % 5 === 0; y /= 5)
        ;
      if (y === 1)
        return 0;
      for (var D = 10 % y, A = 1; D !== 1; A++)
        if (D = D * 10 % y, A > n)
          return 0;
      return A;
    }
    function o(d, y, D) {
      for (var A = 1, E = h(10, D, y), w = 0; w < 300; w++) {
        if (A === E)
          return w;
        A = A * 10 % y, E = E * 10 % y;
      }
      return 0;
    }
    function l(d, y) {
      if (!d)
        return y;
      if (!y)
        return d;
      for (; ; ) {
        if (d %= y, !d)
          return y;
        if (y %= d, !y)
          return d;
      }
    }
    function v(d, y) {
      if (c(d, y), this instanceof v)
        d = l(r.d, r.n), this.s = r.s, this.n = r.n / d, this.d = r.d / d;
      else
        return u(r.s * r.n, r.d);
    }
    var g = function() {
      return new Error("Division by Zero");
    }, p = function() {
      return new Error("Invalid argument");
    }, m = function() {
      return new Error("Parameters must be integer");
    };
    v.prototype = {
      s: 1,
      n: 0,
      d: 1,
      /**
       * Calculates the absolute value
       *
       * Ex: new Fraction(-4).abs() => 4
       **/
      abs: function() {
        return u(this.n, this.d);
      },
      /**
       * Inverts the sign of the current fraction
       *
       * Ex: new Fraction(-4).neg() => 4
       **/
      neg: function() {
        return u(-this.s * this.n, this.d);
      },
      /**
       * Adds two rational numbers
       *
       * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
       **/
      add: function(d, y) {
        return c(d, y), u(
          this.s * this.n * r.d + r.s * this.d * r.n,
          this.d * r.d
        );
      },
      /**
       * Subtracts two rational numbers
       *
       * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
       **/
      sub: function(d, y) {
        return c(d, y), u(
          this.s * this.n * r.d - r.s * this.d * r.n,
          this.d * r.d
        );
      },
      /**
       * Multiplies two rational numbers
       *
       * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
       **/
      mul: function(d, y) {
        return c(d, y), u(
          this.s * r.s * this.n * r.n,
          this.d * r.d
        );
      },
      /**
       * Divides two rational numbers
       *
       * Ex: new Fraction("-17.(345)").inverse().div(3)
       **/
      div: function(d, y) {
        return c(d, y), u(
          this.s * r.s * this.n * r.d,
          this.d * r.n
        );
      },
      /**
       * Clones the actual object
       *
       * Ex: new Fraction("-17.(345)").clone()
       **/
      clone: function() {
        return u(this.s * this.n, this.d);
      },
      /**
       * Calculates the modulo of two rational numbers - a more precise fmod
       *
       * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
       **/
      mod: function(d, y) {
        if (isNaN(this.n) || isNaN(this.d))
          return new v(NaN);
        if (d === void 0)
          return u(this.s * this.n % this.d, 1);
        if (c(d, y), r.n === 0 && this.d === 0)
          throw g();
        return u(
          this.s * (r.d * this.n) % (r.n * this.d),
          r.d * this.d
        );
      },
      /**
       * Calculates the fractional gcd of two rational numbers
       *
       * Ex: new Fraction(5,8).gcd(3,7) => 1/56
       */
      gcd: function(d, y) {
        return c(d, y), u(l(r.n, this.n) * l(r.d, this.d), r.d * this.d);
      },
      /**
       * Calculates the fractional lcm of two rational numbers
       *
       * Ex: new Fraction(5,8).lcm(3,7) => 15
       */
      lcm: function(d, y) {
        return c(d, y), r.n === 0 && this.n === 0 ? u(0, 1) : u(r.n * this.n, l(r.n, this.n) * l(r.d, this.d));
      },
      /**
       * Calculates the ceil of a rational number
       *
       * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
       **/
      ceil: function(d) {
        return d = Math.pow(10, d || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : u(Math.ceil(d * this.s * this.n / this.d), d);
      },
      /**
       * Calculates the floor of a rational number
       *
       * Ex: new Fraction('4.(3)').floor() => (4 / 1)
       **/
      floor: function(d) {
        return d = Math.pow(10, d || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : u(Math.floor(d * this.s * this.n / this.d), d);
      },
      /**
       * Rounds a rational numbers
       *
       * Ex: new Fraction('4.(3)').round() => (4 / 1)
       **/
      round: function(d) {
        return d = Math.pow(10, d || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : u(Math.round(d * this.s * this.n / this.d), d);
      },
      /**
       * Gets the inverse of the fraction, means numerator and denominator are exchanged
       *
       * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
       **/
      inverse: function() {
        return u(this.s * this.d, this.n);
      },
      /**
       * Calculates the fraction to some rational exponent, if possible
       *
       * Ex: new Fraction(-1,2).pow(-3) => -8
       */
      pow: function(d, y) {
        if (c(d, y), r.d === 1)
          return r.s < 0 ? u(Math.pow(this.s * this.d, r.n), Math.pow(this.n, r.n)) : u(Math.pow(this.s * this.n, r.n), Math.pow(this.d, r.n));
        if (this.s < 0)
          return null;
        var D = f(this.n), A = f(this.d), E = 1, w = 1;
        for (var F in D)
          if (F !== "1") {
            if (F === "0") {
              E = 0;
              break;
            }
            if (D[F] *= r.n, D[F] % r.d === 0)
              D[F] /= r.d;
            else
              return null;
            E *= Math.pow(F, D[F]);
          }
        for (var F in A)
          if (F !== "1") {
            if (A[F] *= r.n, A[F] % r.d === 0)
              A[F] /= r.d;
            else
              return null;
            w *= Math.pow(F, A[F]);
          }
        return r.s < 0 ? u(w, E) : u(E, w);
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      equals: function(d, y) {
        return c(d, y), this.s * this.n * r.d === r.s * r.n * this.d;
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      compare: function(d, y) {
        c(d, y);
        var D = this.s * this.n * r.d - r.s * r.n * this.d;
        return (0 < D) - (D < 0);
      },
      simplify: function(d) {
        if (isNaN(this.n) || isNaN(this.d))
          return this;
        d = d || 1e-3;
        for (var y = this.abs(), D = y.toContinued(), A = 1; A < D.length; A++) {
          for (var E = u(D[A - 1], 1), w = A - 2; w >= 0; w--)
            E = E.inverse().add(D[w]);
          if (Math.abs(E.sub(y).valueOf()) < d)
            return E.mul(this.s);
        }
        return this;
      },
      /**
       * Check if two rational numbers are divisible
       *
       * Ex: new Fraction(19.6).divisible(1.5);
       */
      divisible: function(d, y) {
        return c(d, y), !(!(r.n * this.d) || this.n * r.d % (r.n * this.d));
      },
      /**
       * Returns a decimal representation of the fraction
       *
       * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
       **/
      valueOf: function() {
        return this.s * this.n / this.d;
      },
      /**
       * Returns a string-fraction representation of a Fraction object
       *
       * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
       **/
      toFraction: function(d) {
        var y, D = "", A = this.n, E = this.d;
        return this.s < 0 && (D += "-"), E === 1 ? D += A : (d && (y = Math.floor(A / E)) > 0 && (D += y, D += " ", A %= E), D += A, D += "/", D += E), D;
      },
      /**
       * Returns a latex representation of a Fraction object
       *
       * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
       **/
      toLatex: function(d) {
        var y, D = "", A = this.n, E = this.d;
        return this.s < 0 && (D += "-"), E === 1 ? D += A : (d && (y = Math.floor(A / E)) > 0 && (D += y, A %= E), D += "\\frac{", D += A, D += "}{", D += E, D += "}"), D;
      },
      /**
       * Returns an array of continued fraction elements
       *
       * Ex: new Fraction("7/8").toContinued() => [0,1,7]
       */
      toContinued: function() {
        var d, y = this.n, D = this.d, A = [];
        if (isNaN(y) || isNaN(D))
          return A;
        do
          A.push(Math.floor(y / D)), d = y % D, y = D, D = d;
        while (y !== 1);
        return A;
      },
      /**
       * Creates a string representation of a fraction with all digits
       *
       * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
       **/
      toString: function(d) {
        var y = this.n, D = this.d;
        if (isNaN(y) || isNaN(D))
          return "NaN";
        d = d || 15;
        var A = s(y, D), E = o(y, D, A), w = this.s < 0 ? "-" : "";
        if (w += y / D | 0, y %= D, y *= 10, y && (w += "."), A) {
          for (var F = E; F--; )
            w += y / D | 0, y %= D, y *= 10;
          w += "(";
          for (var F = A; F--; )
            w += y / D | 0, y %= D, y *= 10;
          w += ")";
        } else
          for (var F = d; y && F--; )
            w += y / D | 0, y %= D, y *= 10;
        return w;
      }
    }, Object.defineProperty(v, "__esModule", { value: !0 }), v.default = v, v.Fraction = v, e.exports = v;
  })();
})(ia);
var ms = ia.exports;
const vr = /* @__PURE__ */ ta(ms);
var gs = "Fraction", Ds = [], ws = /* @__PURE__ */ ee(gs, Ds, () => (Object.defineProperty(vr, "name", {
  value: "Fraction"
}), vr.prototype.constructor = vr, vr.prototype.type = "Fraction", vr.prototype.isFraction = !0, vr.prototype.toJSON = function() {
  return {
    mathjs: "Fraction",
    n: this.s * this.n,
    d: this.d
  };
}, vr.fromJSON = function(e) {
  return new vr(e);
}, vr), {
  isClass: !0
}), ys = "Matrix", As = [], Es = /* @__PURE__ */ ee(ys, As, () => {
  function e() {
    if (!(this instanceof e))
      throw new SyntaxError("Constructor must be called with the new operator");
  }
  return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  }, e.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  }, e.prototype.create = function(i, t) {
    throw new Error("Cannot invoke create on a Matrix interface");
  }, e.prototype.subset = function(i, t, n) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  }, e.prototype.get = function(i) {
    throw new Error("Cannot invoke get on a Matrix interface");
  }, e.prototype.set = function(i, t, n) {
    throw new Error("Cannot invoke set on a Matrix interface");
  }, e.prototype.resize = function(i, t) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  }, e.prototype.reshape = function(i, t) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  }, e.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  }, e.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  }, e.prototype.map = function(i, t) {
    throw new Error("Cannot invoke map on a Matrix interface");
  }, e.prototype.forEach = function(i) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  }, e.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  }, e.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  }, e.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  }, e.prototype.format = function(i) {
    throw new Error("Cannot invoke format on a Matrix interface");
  }, e.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  }, e;
}, {
  isClass: !0
});
function aa(e) {
  return Object.keys(e.signatures || {}).reduce(function(i, t) {
    var n = (t.match(/,/g) || []).length + 1;
    return Math.max(i, n);
  }, -1);
}
var Cs = "DenseMatrix", Fs = ["Matrix"], bs = /* @__PURE__ */ ee(Cs, Fs, (e) => {
  var {
    Matrix: i
  } = e;
  function t(s, o) {
    if (!(this instanceof t))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (o && !ir(o))
      throw new Error("Invalid datatype: " + o);
    if (_e(s))
      s.type === "DenseMatrix" ? (this._data = Fe(s._data), this._size = Fe(s._size), this._datatype = o || s._datatype) : (this._data = s.toArray(), this._size = s.size(), this._datatype = o || s._datatype);
    else if (s && Me(s.data) && Me(s.size))
      this._data = s.data, this._size = s.size, Dn(this._data, this._size), this._datatype = o || s.datatype;
    else if (Me(s))
      this._data = h(s), this._size = $e(this._data), Dn(this._data, this._size), this._datatype = o;
    else {
      if (s)
        throw new TypeError("Unsupported type of data (" + lr(s) + ")");
      this._data = [], this._size = [0], this._datatype = o;
    }
  }
  t.prototype = new i(), t.prototype.createDenseMatrix = function(s, o) {
    return new t(s, o);
  }, Object.defineProperty(t, "name", {
    value: "DenseMatrix"
  }), t.prototype.constructor = t, t.prototype.type = "DenseMatrix", t.prototype.isDenseMatrix = !0, t.prototype.getDataType = function() {
    return Hr(this._data, lr);
  }, t.prototype.storage = function() {
    return "dense";
  }, t.prototype.datatype = function() {
    return this._datatype;
  }, t.prototype.create = function(s, o) {
    return new t(s, o);
  }, t.prototype.subset = function(s, o, l) {
    switch (arguments.length) {
      case 1:
        return n(this, s);
      case 2:
      case 3:
        return a(this, s, o, l);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, t.prototype.get = function(s) {
    if (!Me(s))
      throw new TypeError("Array expected");
    if (s.length !== this._size.length)
      throw new Ce(s.length, this._size.length);
    for (var o = 0; o < s.length; o++)
      xe(s[o], this._size[o]);
    for (var l = this._data, v = 0, g = s.length; v < g; v++) {
      var p = s[v];
      xe(p, l.length), l = l[p];
    }
    return l;
  }, t.prototype.set = function(s, o, l) {
    if (!Me(s))
      throw new TypeError("Array expected");
    if (s.length < this._size.length)
      throw new Ce(s.length, this._size.length, "<");
    var v, g, p, m = s.map(function(y) {
      return y + 1;
    });
    c(this, m, l);
    var d = this._data;
    for (v = 0, g = s.length - 1; v < g; v++)
      p = s[v], xe(p, d.length), d = d[p];
    return p = s[s.length - 1], xe(p, d.length), d[p] = o, this;
  };
  function n(s, o) {
    if (!bt(o))
      throw new TypeError("Invalid index");
    var l = o.isScalar();
    if (l)
      return s.get(o.min());
    var v = o.size();
    if (v.length !== s._size.length)
      throw new Ce(v.length, s._size.length);
    for (var g = o.min(), p = o.max(), m = 0, d = s._size.length; m < d; m++)
      xe(g[m], s._size[m]), xe(p[m], s._size[m]);
    return new t(r(s._data, o, v.length, 0), s._datatype);
  }
  function r(s, o, l, v) {
    var g = v === l - 1, p = o.dimension(v);
    return g ? p.map(function(m) {
      return xe(m, s.length), s[m];
    }).valueOf() : p.map(function(m) {
      xe(m, s.length);
      var d = s[m];
      return r(d, o, l, v + 1);
    }).valueOf();
  }
  function a(s, o, l, v) {
    if (!o || o.isIndex !== !0)
      throw new TypeError("Invalid index");
    var g = o.size(), p = o.isScalar(), m;
    if (_e(l) ? (m = l.size(), l = l.valueOf()) : m = $e(l), p) {
      if (m.length !== 0)
        throw new TypeError("Scalar expected");
      s.set(o.min(), l, v);
    } else {
      if (!qr(m, g))
        try {
          m.length === 0 ? l = yn([l], g) : l = yn(l, g), m = $e(l);
        } catch {
        }
      if (g.length < s._size.length)
        throw new Ce(g.length, s._size.length, "<");
      if (m.length < g.length) {
        for (var d = 0, y = 0; g[d] === 1 && m[d] === 1; )
          d++;
        for (; g[d] === 1; )
          y++, d++;
        l = Oi(l, g.length, y, m);
      }
      if (!qr(g, m))
        throw new Ce(g, m, ">");
      var D = o.max().map(function(w) {
        return w + 1;
      });
      c(s, D, v);
      var A = g.length, E = 0;
      u(s._data, o, l, A, E);
    }
    return s;
  }
  function u(s, o, l, v, g) {
    var p = g === v - 1, m = o.dimension(g);
    p ? m.forEach(function(d, y) {
      xe(d), s[d] = l[y[0]];
    }) : m.forEach(function(d, y) {
      xe(d), u(s[d], o, l[y[0]], v, g + 1);
    });
  }
  t.prototype.resize = function(s, o, l) {
    if (!lt(s))
      throw new TypeError("Array or Matrix expected");
    var v = s.valueOf().map((p) => Array.isArray(p) && p.length === 1 ? p[0] : p), g = l ? this.clone() : this;
    return f(g, v, o);
  };
  function f(s, o, l) {
    if (o.length === 0) {
      for (var v = s._data; Me(v); )
        v = v[0];
      return v;
    }
    return s._size = o.slice(0), s._data = vt(s._data, s._size, l), s;
  }
  t.prototype.reshape = function(s, o) {
    var l = o ? this.clone() : this;
    l._data = jt(l._data, s);
    var v = l._size.reduce((g, p) => g * p);
    return l._size = en(s, v), l;
  };
  function c(s, o, l) {
    for (var v = s._size.slice(0), g = !1; v.length < o.length; )
      v.push(0), g = !0;
    for (var p = 0, m = o.length; p < m; p++)
      o[p] > v[p] && (v[p] = o[p], g = !0);
    g && f(s, v, l);
  }
  t.prototype.clone = function() {
    var s = new t({
      data: Fe(this._data),
      size: Fe(this._size),
      datatype: this._datatype
    });
    return s;
  }, t.prototype.size = function() {
    return this._size.slice(0);
  }, t.prototype.map = function(s) {
    var o = this, l = aa(s), v = function m(d, y) {
      return Me(d) ? d.map(function(D, A) {
        return m(D, y.concat(A));
      }) : l === 1 ? s(d) : l === 2 ? s(d, y) : s(d, y, o);
    }, g = v(this._data, []), p = this._datatype !== void 0 ? Hr(g, lr) : void 0;
    return new t(g, p);
  }, t.prototype.forEach = function(s) {
    var o = this, l = function v(g, p) {
      Me(g) ? g.forEach(function(m, d) {
        v(m, p.concat(d));
      }) : s(g, p, o);
    };
    l(this._data, []);
  }, t.prototype[Symbol.iterator] = function* () {
    var s = function* o(l, v) {
      if (Me(l))
        for (var g = 0; g < l.length; g++)
          yield* o(l[g], v.concat(g));
      else
        yield {
          value: l,
          index: v
        };
    };
    yield* s(this._data, []);
  }, t.prototype.rows = function() {
    var s = [], o = this.size();
    if (o.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    var l = this._data;
    for (var v of l)
      s.push(new t([v], this._datatype));
    return s;
  }, t.prototype.columns = function() {
    var s = this, o = [], l = this.size();
    if (l.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    for (var v = this._data, g = function(d) {
      var y = v.map((D) => [D[d]]);
      o.push(new t(y, s._datatype));
    }, p = 0; p < l[1]; p++)
      g(p);
    return o;
  }, t.prototype.toArray = function() {
    return Fe(this._data);
  }, t.prototype.valueOf = function() {
    return this._data;
  }, t.prototype.format = function(s) {
    return Le(this._data, s);
  }, t.prototype.toString = function() {
    return Le(this._data);
  }, t.prototype.toJSON = function() {
    return {
      mathjs: "DenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  }, t.prototype.diagonal = function(s) {
    if (s) {
      if (Re(s) && (s = s.toNumber()), !qe(s) || !ze(s))
        throw new TypeError("The parameter k must be an integer number");
    } else
      s = 0;
    for (var o = s > 0 ? s : 0, l = s < 0 ? -s : 0, v = this._size[0], g = this._size[1], p = Math.min(v - l, g - o), m = [], d = 0; d < p; d++)
      m[d] = this._data[d + l][d + o];
    return new t({
      data: m,
      size: [p],
      datatype: this._datatype
    });
  }, t.diagonal = function(s, o, l, v) {
    if (!Me(s))
      throw new TypeError("Array expected, size parameter");
    if (s.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (s = s.map(function(F) {
      if (Re(F) && (F = F.toNumber()), !qe(F) || !ze(F) || F < 1)
        throw new Error("Size values must be positive integers");
      return F;
    }), l) {
      if (Re(l) && (l = l.toNumber()), !qe(l) || !ze(l))
        throw new TypeError("The parameter k must be an integer number");
    } else
      l = 0;
    var g = l > 0 ? l : 0, p = l < 0 ? -l : 0, m = s[0], d = s[1], y = Math.min(m - p, d - g), D;
    if (Me(o)) {
      if (o.length !== y)
        throw new Error("Invalid value array length");
      D = function(b) {
        return o[b];
      };
    } else if (_e(o)) {
      var A = o.size();
      if (A.length !== 1 || A[0] !== y)
        throw new Error("Invalid matrix length");
      D = function(b) {
        return o.get([b]);
      };
    } else
      D = function() {
        return o;
      };
    v || (v = Re(D(0)) ? D(0).mul(0) : 0);
    var E = [];
    if (s.length > 0) {
      E = vt(E, s, v);
      for (var w = 0; w < y; w++)
        E[w + p][w + g] = D(w);
    }
    return new t({
      data: E,
      size: [m, d]
    });
  }, t.fromJSON = function(s) {
    return new t(s);
  }, t.prototype.swapRows = function(s, o) {
    if (!qe(s) || !ze(s) || !qe(o) || !ze(o))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return xe(s, this._size[0]), xe(o, this._size[0]), t._swapRows(s, o, this._data), this;
  }, t._swapRows = function(s, o, l) {
    var v = l[s];
    l[s] = l[o], l[o] = v;
  };
  function h(s) {
    return _e(s) ? h(s.valueOf()) : Me(s) ? s.map(h) : s;
  }
  return t;
}, {
  isClass: !0
});
function er(e, i, t) {
  return e && typeof e.map == "function" ? e.map(function(n) {
    return er(n, i);
  }) : i(e);
}
var Fn = "isInteger", Ms = ["typed"], Ss = /* @__PURE__ */ ee(Fn, Ms, (e) => {
  var {
    typed: i
  } = e;
  return i(Fn, {
    number: ze,
    // TODO: what to do with isInteger(add(0.1, 0.2))  ?
    BigNumber: function(n) {
      return n.isInt();
    },
    Fraction: function(n) {
      return n.d === 1 && isFinite(n.n);
    },
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), tn = "number", _t = "number, number";
function ua(e) {
  return Math.abs(e);
}
ua.signature = tn;
function oa(e, i) {
  return e + i;
}
oa.signature = _t;
function sa(e, i) {
  return e - i;
}
sa.signature = _t;
function fa(e, i) {
  return e * i;
}
fa.signature = _t;
function ca(e) {
  return -e;
}
ca.signature = tn;
function Xt(e) {
  return Vu(e);
}
Xt.signature = tn;
function la(e, i) {
  return e * e < 1 && i === 1 / 0 || e * e > 1 && i === -1 / 0 ? 0 : Math.pow(e, i);
}
la.signature = _t;
var ha = "number";
function va(e) {
  return e > 0;
}
va.signature = ha;
function pa(e) {
  return e === 0;
}
pa.signature = ha;
var bn = "isPositive", Bs = ["typed"], Ns = /* @__PURE__ */ ee(bn, Bs, (e) => {
  var {
    typed: i
  } = e;
  return i(bn, {
    number: va,
    BigNumber: function(n) {
      return !n.isNeg() && !n.isZero() && !n.isNaN();
    },
    Fraction: function(n) {
      return n.s > 0 && n.n > 0;
    },
    Unit: i.referToSelf((t) => (n) => i.find(t, n.valueType())(n.value)),
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), Mn = "isZero", xs = ["typed"], _s = /* @__PURE__ */ ee(Mn, xs, (e) => {
  var {
    typed: i
  } = e;
  return i(Mn, {
    number: pa,
    BigNumber: function(n) {
      return n.isZero();
    },
    Complex: function(n) {
      return n.re === 0 && n.im === 0;
    },
    Fraction: function(n) {
      return n.d === 1 && n.n === 0;
    },
    Unit: i.referToSelf((t) => (n) => i.find(t, n.valueType())(n.value)),
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), Sn = "typeOf", zs = ["typed"], Ts = /* @__PURE__ */ ee(Sn, zs, (e) => {
  var {
    typed: i
  } = e;
  return i(Sn, {
    any: lr
  });
});
function Wr(e, i, t) {
  if (t == null)
    return e.eq(i);
  if (e.eq(i))
    return !0;
  if (e.isNaN() || i.isNaN())
    return !1;
  if (e.isFinite() && i.isFinite()) {
    var n = e.minus(i).abs();
    if (n.isZero())
      return !0;
    var r = e.constructor.max(e.abs(), i.abs());
    return n.lte(r.times(t));
  }
  return !1;
}
function Is(e, i, t) {
  return yr(e.re, i.re, t) && yr(e.im, i.im, t);
}
var kr = /* @__PURE__ */ ee("compareUnits", ["typed"], (e) => {
  var {
    typed: i
  } = e;
  return {
    "Unit, Unit": i.referToSelf((t) => (n, r) => {
      if (!n.equalBase(r))
        throw new Error("Cannot compare units with different base");
      return i.find(t, [n.valueType(), r.valueType()])(n.value, r.value);
    })
  };
}), Dt = "equalScalar", Ls = ["typed", "config"], Os = /* @__PURE__ */ ee(Dt, Ls, (e) => {
  var {
    typed: i,
    config: t
  } = e, n = kr({
    typed: i
  });
  return i(Dt, {
    "boolean, boolean": function(a, u) {
      return a === u;
    },
    "number, number": function(a, u) {
      return yr(a, u, t.epsilon);
    },
    "BigNumber, BigNumber": function(a, u) {
      return a.eq(u) || Wr(a, u, t.epsilon);
    },
    "Fraction, Fraction": function(a, u) {
      return a.equals(u);
    },
    "Complex, Complex": function(a, u) {
      return Is(a, u, t.epsilon);
    }
  }, n);
});
ee(Dt, ["typed", "config"], (e) => {
  var {
    typed: i,
    config: t
  } = e;
  return i(Dt, {
    "number, number": function(r, a) {
      return yr(r, a, t.epsilon);
    }
  });
});
var qs = "SparseMatrix", $s = ["typed", "equalScalar", "Matrix"], Ps = /* @__PURE__ */ ee(qs, $s, (e) => {
  var {
    typed: i,
    equalScalar: t,
    Matrix: n
  } = e;
  function r(p, m) {
    if (!(this instanceof r))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (m && !ir(m))
      throw new Error("Invalid datatype: " + m);
    if (_e(p))
      a(this, p, m);
    else if (p && Me(p.index) && Me(p.ptr) && Me(p.size))
      this._values = p.values, this._index = p.index, this._ptr = p.ptr, this._size = p.size, this._datatype = m || p.datatype;
    else if (Me(p))
      u(this, p, m);
    else {
      if (p)
        throw new TypeError("Unsupported type of data (" + lr(p) + ")");
      this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = m;
    }
  }
  function a(p, m, d) {
    m.type === "SparseMatrix" ? (p._values = m._values ? Fe(m._values) : void 0, p._index = Fe(m._index), p._ptr = Fe(m._ptr), p._size = Fe(m._size), p._datatype = d || m._datatype) : u(p, m.valueOf(), d || m._datatype);
  }
  function u(p, m, d) {
    p._values = [], p._index = [], p._ptr = [], p._datatype = d;
    var y = m.length, D = 0, A = t, E = 0;
    if (ir(d) && (A = i.find(t, [d, d]) || t, E = i.convert(0, d)), y > 0) {
      var w = 0;
      do {
        p._ptr.push(p._index.length);
        for (var F = 0; F < y; F++) {
          var b = m[F];
          if (Me(b)) {
            if (w === 0 && D < b.length && (D = b.length), w < b.length) {
              var C = b[w];
              A(C, E) || (p._values.push(C), p._index.push(F));
            }
          } else
            w === 0 && D < 1 && (D = 1), A(b, E) || (p._values.push(b), p._index.push(F));
        }
        w++;
      } while (w < D);
    }
    p._ptr.push(p._index.length), p._size = [y, D];
  }
  r.prototype = new n(), r.prototype.createSparseMatrix = function(p, m) {
    return new r(p, m);
  }, Object.defineProperty(r, "name", {
    value: "SparseMatrix"
  }), r.prototype.constructor = r, r.prototype.type = "SparseMatrix", r.prototype.isSparseMatrix = !0, r.prototype.getDataType = function() {
    return Hr(this._values, lr);
  }, r.prototype.storage = function() {
    return "sparse";
  }, r.prototype.datatype = function() {
    return this._datatype;
  }, r.prototype.create = function(p, m) {
    return new r(p, m);
  }, r.prototype.density = function() {
    var p = this._size[0], m = this._size[1];
    return p !== 0 && m !== 0 ? this._index.length / (p * m) : 0;
  }, r.prototype.subset = function(p, m, d) {
    if (!this._values)
      throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return f(this, p);
      case 2:
      case 3:
        return c(this, p, m, d);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function f(p, m) {
    if (!bt(m))
      throw new TypeError("Invalid index");
    var d = m.isScalar();
    if (d)
      return p.get(m.min());
    var y = m.size();
    if (y.length !== p._size.length)
      throw new Ce(y.length, p._size.length);
    var D, A, E, w, F = m.min(), b = m.max();
    for (D = 0, A = p._size.length; D < A; D++)
      xe(F[D], p._size[D]), xe(b[D], p._size[D]);
    var C = p._values, S = p._index, M = p._ptr, B = m.dimension(0), I = m.dimension(1), T = [], L = [];
    B.forEach(function(z, V) {
      L[z] = V[0], T[z] = !0;
    });
    var x = C ? [] : void 0, Z = [], q = [];
    return I.forEach(function(z) {
      for (q.push(Z.length), E = M[z], w = M[z + 1]; E < w; E++)
        D = S[E], T[D] === !0 && (Z.push(L[D]), x && x.push(C[E]));
    }), q.push(Z.length), new r({
      values: x,
      index: Z,
      ptr: q,
      size: y,
      datatype: p._datatype
    });
  }
  function c(p, m, d, y) {
    if (!m || m.isIndex !== !0)
      throw new TypeError("Invalid index");
    var D = m.size(), A = m.isScalar(), E;
    if (_e(d) ? (E = d.size(), d = d.toArray()) : E = $e(d), A) {
      if (E.length !== 0)
        throw new TypeError("Scalar expected");
      p.set(m.min(), d, y);
    } else {
      if (D.length !== 1 && D.length !== 2)
        throw new Ce(D.length, p._size.length, "<");
      if (E.length < D.length) {
        for (var w = 0, F = 0; D[w] === 1 && E[w] === 1; )
          w++;
        for (; D[w] === 1; )
          F++, w++;
        d = Oi(d, D.length, F, E);
      }
      if (!qr(D, E))
        throw new Ce(D, E, ">");
      if (D.length === 1) {
        var b = m.dimension(0);
        b.forEach(function(M, B) {
          xe(M), p.set([M, 0], d[B[0]], y);
        });
      } else {
        var C = m.dimension(0), S = m.dimension(1);
        C.forEach(function(M, B) {
          xe(M), S.forEach(function(I, T) {
            xe(I), p.set([M, I], d[B[0]][T[0]], y);
          });
        });
      }
    }
    return p;
  }
  r.prototype.get = function(p) {
    if (!Me(p))
      throw new TypeError("Array expected");
    if (p.length !== this._size.length)
      throw new Ce(p.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke get on a Pattern only matrix");
    var m = p[0], d = p[1];
    xe(m, this._size[0]), xe(d, this._size[1]);
    var y = h(m, this._ptr[d], this._ptr[d + 1], this._index);
    return y < this._ptr[d + 1] && this._index[y] === m ? this._values[y] : 0;
  }, r.prototype.set = function(p, m, d) {
    if (!Me(p))
      throw new TypeError("Array expected");
    if (p.length !== this._size.length)
      throw new Ce(p.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke set on a Pattern only matrix");
    var y = p[0], D = p[1], A = this._size[0], E = this._size[1], w = t, F = 0;
    ir(this._datatype) && (w = i.find(t, [this._datatype, this._datatype]) || t, F = i.convert(0, this._datatype)), (y > A - 1 || D > E - 1) && (l(this, Math.max(y + 1, A), Math.max(D + 1, E), d), A = this._size[0], E = this._size[1]), xe(y, A), xe(D, E);
    var b = h(y, this._ptr[D], this._ptr[D + 1], this._index);
    return b < this._ptr[D + 1] && this._index[b] === y ? w(m, F) ? s(b, D, this._values, this._index, this._ptr) : this._values[b] = m : w(m, F) || o(b, y, D, m, this._values, this._index, this._ptr), this;
  };
  function h(p, m, d, y) {
    if (d - m === 0)
      return d;
    for (var D = m; D < d; D++)
      if (y[D] === p)
        return D;
    return m;
  }
  function s(p, m, d, y, D) {
    d.splice(p, 1), y.splice(p, 1);
    for (var A = m + 1; A < D.length; A++)
      D[A]--;
  }
  function o(p, m, d, y, D, A, E) {
    D.splice(p, 0, y), A.splice(p, 0, m);
    for (var w = d + 1; w < E.length; w++)
      E[w]++;
  }
  r.prototype.resize = function(p, m, d) {
    if (!lt(p))
      throw new TypeError("Array or Matrix expected");
    var y = p.valueOf().map((A) => Array.isArray(A) && A.length === 1 ? A[0] : A);
    if (y.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    y.forEach(function(A) {
      if (!qe(A) || !ze(A) || A < 0)
        throw new TypeError("Invalid size, must contain positive integers (size: " + Le(y) + ")");
    });
    var D = d ? this.clone() : this;
    return l(D, y[0], y[1], m);
  };
  function l(p, m, d, y) {
    var D = y || 0, A = t, E = 0;
    ir(p._datatype) && (A = i.find(t, [p._datatype, p._datatype]) || t, E = i.convert(0, p._datatype), D = i.convert(D, p._datatype));
    var w = !A(D, E), F = p._size[0], b = p._size[1], C, S, M;
    if (d > b) {
      for (S = b; S < d; S++)
        if (p._ptr[S] = p._values.length, w)
          for (C = 0; C < F; C++)
            p._values.push(D), p._index.push(C);
      p._ptr[d] = p._values.length;
    } else
      d < b && (p._ptr.splice(d + 1, b - d), p._values.splice(p._ptr[d], p._values.length), p._index.splice(p._ptr[d], p._index.length));
    if (b = d, m > F) {
      if (w) {
        var B = 0;
        for (S = 0; S < b; S++) {
          p._ptr[S] = p._ptr[S] + B, M = p._ptr[S + 1] + B;
          var I = 0;
          for (C = F; C < m; C++, I++)
            p._values.splice(M + I, 0, D), p._index.splice(M + I, 0, C), B++;
        }
        p._ptr[b] = p._values.length;
      }
    } else if (m < F) {
      var T = 0;
      for (S = 0; S < b; S++) {
        p._ptr[S] = p._ptr[S] - T;
        var L = p._ptr[S], x = p._ptr[S + 1] - T;
        for (M = L; M < x; M++)
          C = p._index[M], C > m - 1 && (p._values.splice(M, 1), p._index.splice(M, 1), T++);
      }
      p._ptr[S] = p._values.length;
    }
    return p._size[0] = m, p._size[1] = d, p;
  }
  r.prototype.reshape = function(p, m) {
    if (!Me(p))
      throw new TypeError("Array expected");
    if (p.length !== 2)
      throw new Error("Sparse matrices can only be reshaped in two dimensions");
    p.forEach(function(z) {
      if (!qe(z) || !ze(z) || z <= -2 || z === 0)
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Le(p) + ")");
    });
    var d = this._size[0] * this._size[1];
    p = en(p, d);
    var y = p[0] * p[1];
    if (d !== y)
      throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var D = m ? this.clone() : this;
    if (this._size[0] === p[0] && this._size[1] === p[1])
      return D;
    for (var A = [], E = 0; E < D._ptr.length; E++)
      for (var w = 0; w < D._ptr[E + 1] - D._ptr[E]; w++)
        A.push(E);
    for (var F = D._values.slice(), b = D._index.slice(), C = 0; C < D._index.length; C++) {
      var S = b[C], M = A[C], B = S * D._size[1] + M;
      A[C] = B % p[1], b[C] = Math.floor(B / p[1]);
    }
    D._values.length = 0, D._index.length = 0, D._ptr.length = p[1] + 1, D._size = p.slice();
    for (var I = 0; I < D._ptr.length; I++)
      D._ptr[I] = 0;
    for (var T = 0; T < F.length; T++) {
      var L = b[T], x = A[T], Z = F[T], q = h(L, D._ptr[x], D._ptr[x + 1], D._index);
      o(q, L, x, Z, D._values, D._index, D._ptr);
    }
    return D;
  }, r.prototype.clone = function() {
    var p = new r({
      values: this._values ? Fe(this._values) : void 0,
      index: Fe(this._index),
      ptr: Fe(this._ptr),
      size: Fe(this._size),
      datatype: this._datatype
    });
    return p;
  }, r.prototype.size = function() {
    return this._size.slice(0);
  }, r.prototype.map = function(p, m) {
    if (!this._values)
      throw new Error("Cannot invoke map on a Pattern only matrix");
    var d = this, y = this._size[0], D = this._size[1], A = aa(p), E = function(F, b, C) {
      return A === 1 ? p(F) : A === 2 ? p(F, [b, C]) : p(F, [b, C], d);
    };
    return v(this, 0, y - 1, 0, D - 1, E, m);
  };
  function v(p, m, d, y, D, A, E) {
    var w = [], F = [], b = [], C = t, S = 0;
    ir(p._datatype) && (C = i.find(t, [p._datatype, p._datatype]) || t, S = i.convert(0, p._datatype));
    for (var M = function($, G, ne) {
      $ = A($, G, ne), C($, S) || (w.push($), F.push(G));
    }, B = y; B <= D; B++) {
      b.push(w.length);
      var I = p._ptr[B], T = p._ptr[B + 1];
      if (E)
        for (var L = I; L < T; L++) {
          var x = p._index[L];
          x >= m && x <= d && M(p._values[L], x - m, B - y);
        }
      else {
        for (var Z = {}, q = I; q < T; q++) {
          var z = p._index[q];
          Z[z] = p._values[q];
        }
        for (var V = m; V <= d; V++) {
          var K = V in Z ? Z[V] : 0;
          M(K, V - m, B - y);
        }
      }
    }
    return b.push(w.length), new r({
      values: w,
      index: F,
      ptr: b,
      size: [d - m + 1, D - y + 1]
    });
  }
  r.prototype.forEach = function(p, m) {
    if (!this._values)
      throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var d = this, y = this._size[0], D = this._size[1], A = 0; A < D; A++) {
      var E = this._ptr[A], w = this._ptr[A + 1];
      if (m)
        for (var F = E; F < w; F++) {
          var b = this._index[F];
          p(this._values[F], [b, A], d);
        }
      else {
        for (var C = {}, S = E; S < w; S++) {
          var M = this._index[S];
          C[M] = this._values[S];
        }
        for (var B = 0; B < y; B++) {
          var I = B in C ? C[B] : 0;
          p(I, [B, A], d);
        }
      }
    }
  }, r.prototype[Symbol.iterator] = function* () {
    if (!this._values)
      throw new Error("Cannot iterate a Pattern only matrix");
    for (var p = this._size[1], m = 0; m < p; m++)
      for (var d = this._ptr[m], y = this._ptr[m + 1], D = d; D < y; D++) {
        var A = this._index[D];
        yield {
          value: this._values[D],
          index: [A, m]
        };
      }
  }, r.prototype.toArray = function() {
    return g(this._values, this._index, this._ptr, this._size, !0);
  }, r.prototype.valueOf = function() {
    return g(this._values, this._index, this._ptr, this._size, !1);
  };
  function g(p, m, d, y, D) {
    var A = y[0], E = y[1], w = [], F, b;
    for (F = 0; F < A; F++)
      for (w[F] = [], b = 0; b < E; b++)
        w[F][b] = 0;
    for (b = 0; b < E; b++)
      for (var C = d[b], S = d[b + 1], M = C; M < S; M++)
        F = m[M], w[F][b] = p ? D ? Fe(p[M]) : p[M] : 1;
    return w;
  }
  return r.prototype.format = function(p) {
    for (var m = this._size[0], d = this._size[1], y = this.density(), D = "Sparse Matrix [" + Le(m, p) + " x " + Le(d, p) + "] density: " + Le(y, p) + `
`, A = 0; A < d; A++)
      for (var E = this._ptr[A], w = this._ptr[A + 1], F = E; F < w; F++) {
        var b = this._index[F];
        D += `
    (` + Le(b, p) + ", " + Le(A, p) + ") ==> " + (this._values ? Le(this._values[F], p) : "X");
      }
    return D;
  }, r.prototype.toString = function() {
    return Le(this.toArray());
  }, r.prototype.toJSON = function() {
    return {
      mathjs: "SparseMatrix",
      values: this._values,
      index: this._index,
      ptr: this._ptr,
      size: this._size,
      datatype: this._datatype
    };
  }, r.prototype.diagonal = function(p) {
    if (p) {
      if (Re(p) && (p = p.toNumber()), !qe(p) || !ze(p))
        throw new TypeError("The parameter k must be an integer number");
    } else
      p = 0;
    var m = p > 0 ? p : 0, d = p < 0 ? -p : 0, y = this._size[0], D = this._size[1], A = Math.min(y - d, D - m), E = [], w = [], F = [];
    F[0] = 0;
    for (var b = m; b < D && E.length < A; b++)
      for (var C = this._ptr[b], S = this._ptr[b + 1], M = C; M < S; M++) {
        var B = this._index[M];
        if (B === b - m + d) {
          E.push(this._values[M]), w[E.length - 1] = B - d;
          break;
        }
      }
    return F.push(E.length), new r({
      values: E,
      index: w,
      ptr: F,
      size: [A, 1]
    });
  }, r.fromJSON = function(p) {
    return new r(p);
  }, r.diagonal = function(p, m, d, y, D) {
    if (!Me(p))
      throw new TypeError("Array expected, size parameter");
    if (p.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (p = p.map(function(z) {
      if (Re(z) && (z = z.toNumber()), !qe(z) || !ze(z) || z < 1)
        throw new Error("Size values must be positive integers");
      return z;
    }), d) {
      if (Re(d) && (d = d.toNumber()), !qe(d) || !ze(d))
        throw new TypeError("The parameter k must be an integer number");
    } else
      d = 0;
    var A = t, E = 0;
    ir(D) && (A = i.find(t, [D, D]) || t, E = i.convert(0, D));
    var w = d > 0 ? d : 0, F = d < 0 ? -d : 0, b = p[0], C = p[1], S = Math.min(b - F, C - w), M;
    if (Me(m)) {
      if (m.length !== S)
        throw new Error("Invalid value array length");
      M = function(V) {
        return m[V];
      };
    } else if (_e(m)) {
      var B = m.size();
      if (B.length !== 1 || B[0] !== S)
        throw new Error("Invalid matrix length");
      M = function(V) {
        return m.get([V]);
      };
    } else
      M = function() {
        return m;
      };
    for (var I = [], T = [], L = [], x = 0; x < C; x++) {
      L.push(I.length);
      var Z = x - w;
      if (Z >= 0 && Z < S) {
        var q = M(Z);
        A(q, E) || (T.push(Z + F), I.push(q));
      }
    }
    return L.push(I.length), new r({
      values: I,
      index: T,
      ptr: L,
      size: [b, C]
    });
  }, r.prototype.swapRows = function(p, m) {
    if (!qe(p) || !ze(p) || !qe(m) || !ze(m))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return xe(p, this._size[0]), xe(m, this._size[0]), r._swapRows(p, m, this._size[1], this._values, this._index, this._ptr), this;
  }, r._forEachRow = function(p, m, d, y, D) {
    for (var A = y[p], E = y[p + 1], w = A; w < E; w++)
      D(d[w], m[w]);
  }, r._swapRows = function(p, m, d, y, D, A) {
    for (var E = 0; E < d; E++) {
      var w = A[E], F = A[E + 1], b = h(p, w, F, D), C = h(m, w, F, D);
      if (b < F && C < F && D[b] === p && D[C] === m) {
        if (y) {
          var S = y[b];
          y[b] = y[C], y[C] = S;
        }
        continue;
      }
      if (b < F && D[b] === p && (C >= F || D[C] !== m)) {
        var M = y ? y[b] : void 0;
        D.splice(C, 0, m), y && y.splice(C, 0, M), D.splice(C <= b ? b + 1 : b, 1), y && y.splice(C <= b ? b + 1 : b, 1);
        continue;
      }
      if (C < F && D[C] === m && (b >= F || D[b] !== p)) {
        var B = y ? y[C] : void 0;
        D.splice(b, 0, p), y && y.splice(b, 0, B), D.splice(b <= C ? C + 1 : C, 1), y && y.splice(b <= C ? C + 1 : C, 1);
      }
    }
  }, r;
}, {
  isClass: !0
}), Rs = "number", Us = ["typed"];
function Vs(e) {
  var i = e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (i) {
    var t = {
      "0b": 2,
      "0o": 8,
      "0x": 16
    }[i[1]], n = i[2], r = i[3];
    return {
      input: e,
      radix: t,
      integerPart: n,
      fractionalPart: r
    };
  } else
    return null;
}
function Gs(e) {
  for (var i = parseInt(e.integerPart, e.radix), t = 0, n = 0; n < e.fractionalPart.length; n++) {
    var r = parseInt(e.fractionalPart[n], e.radix);
    t += r / Math.pow(e.radix, n + 1);
  }
  var a = i + t;
  if (isNaN(a))
    throw new SyntaxError('String "' + e.input + '" is not a valid number');
  return a;
}
var Zs = /* @__PURE__ */ ee(Rs, Us, (e) => {
  var {
    typed: i
  } = e, t = i("number", {
    "": function() {
      return 0;
    },
    number: function(r) {
      return r;
    },
    string: function(r) {
      if (r === "NaN")
        return NaN;
      var a = Vs(r);
      if (a)
        return Gs(a);
      var u = 0, f = r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      f && (u = Number(f[2]), r = f[1]);
      var c = Number(r);
      if (isNaN(c))
        throw new SyntaxError('String "' + r + '" is not a valid number');
      if (f) {
        if (c > 2 ** u - 1)
          throw new SyntaxError('String "'.concat(r, '" is out of range'));
        c >= 2 ** (u - 1) && (c = c - 2 ** u);
      }
      return c;
    },
    BigNumber: function(r) {
      return r.toNumber();
    },
    Fraction: function(r) {
      return r.valueOf();
    },
    Unit: i.referToSelf((n) => (r) => {
      var a = r.clone();
      return a.value = n(r.value), a;
    }),
    null: function(r) {
      return 0;
    },
    "Unit, string | Unit": function(r, a) {
      return r.toNumber(a);
    },
    "Array | Matrix": i.referToSelf((n) => (r) => er(r, n))
  });
  return t.fromJSON = function(n) {
    return parseFloat(n.value);
  }, t;
}), Ys = "bignumber", Js = ["typed", "BigNumber"], Qs = /* @__PURE__ */ ee(Ys, Js, (e) => {
  var {
    typed: i,
    BigNumber: t
  } = e;
  return i("bignumber", {
    "": function() {
      return new t(0);
    },
    number: function(r) {
      return new t(r + "");
    },
    string: function(r) {
      var a = r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (a) {
        var u = a[2], f = t(a[1]), c = new t(2).pow(Number(u));
        if (f.gt(c.sub(1)))
          throw new SyntaxError('String "'.concat(r, '" is out of range'));
        var h = new t(2).pow(Number(u) - 1);
        return f.gte(h) ? f.sub(c) : f;
      }
      return new t(r);
    },
    BigNumber: function(r) {
      return r;
    },
    Unit: i.referToSelf((n) => (r) => {
      var a = r.clone();
      return a.value = n(r.value), a;
    }),
    Fraction: function(r) {
      return new t(r.n).div(r.d).times(r.s);
    },
    null: function(r) {
      return new t(0);
    },
    "Array | Matrix": i.referToSelf((n) => (r) => er(r, n))
  });
}), Xs = "complex", Hs = ["typed", "Complex"], Ks = /* @__PURE__ */ ee(Xs, Hs, (e) => {
  var {
    typed: i,
    Complex: t
  } = e;
  return i("complex", {
    "": function() {
      return t.ZERO;
    },
    number: function(r) {
      return new t(r, 0);
    },
    "number, number": function(r, a) {
      return new t(r, a);
    },
    // TODO: this signature should be redundant
    "BigNumber, BigNumber": function(r, a) {
      return new t(r.toNumber(), a.toNumber());
    },
    Fraction: function(r) {
      return new t(r.valueOf(), 0);
    },
    Complex: function(r) {
      return r.clone();
    },
    string: function(r) {
      return t(r);
    },
    null: function(r) {
      return t(0);
    },
    Object: function(r) {
      if ("re" in r && "im" in r)
        return new t(r.re, r.im);
      if ("r" in r && "phi" in r || "abs" in r && "arg" in r)
        return new t(r);
      throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)");
    },
    "Array | Matrix": i.referToSelf((n) => (r) => er(r, n))
  });
}), Ws = "fraction", ks = ["typed", "Fraction"], js = /* @__PURE__ */ ee(Ws, ks, (e) => {
  var {
    typed: i,
    Fraction: t
  } = e;
  return i("fraction", {
    number: function(r) {
      if (!isFinite(r) || isNaN(r))
        throw new Error(r + " cannot be represented as a fraction");
      return new t(r);
    },
    string: function(r) {
      return new t(r);
    },
    "number, number": function(r, a) {
      return new t(r, a);
    },
    null: function(r) {
      return new t(0);
    },
    BigNumber: function(r) {
      return new t(r.toString());
    },
    Fraction: function(r) {
      return r;
    },
    Unit: i.referToSelf((n) => (r) => {
      var a = r.clone();
      return a.value = n(r.value), a;
    }),
    Object: function(r) {
      return new t(r);
    },
    "Array | Matrix": i.referToSelf((n) => (r) => er(r, n))
  });
}), Bn = "matrix", ef = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], rf = /* @__PURE__ */ ee(Bn, ef, (e) => {
  var {
    typed: i,
    Matrix: t,
    DenseMatrix: n,
    SparseMatrix: r
  } = e;
  return i(Bn, {
    "": function() {
      return a([]);
    },
    string: function(f) {
      return a([], f);
    },
    "string, string": function(f, c) {
      return a([], f, c);
    },
    Array: function(f) {
      return a(f);
    },
    Matrix: function(f) {
      return a(f, f.storage());
    },
    "Array | Matrix, string": a,
    "Array | Matrix, string, string": a
  });
  function a(u, f, c) {
    if (f === "dense" || f === "default" || f === void 0)
      return new n(u, c);
    if (f === "sparse")
      return new r(u, c);
    throw new TypeError("Unknown matrix type " + JSON.stringify(f) + ".");
  }
}), Nn = "matrixFromColumns", tf = ["typed", "matrix", "flatten", "size"], nf = /* @__PURE__ */ ee(Nn, tf, (e) => {
  var {
    typed: i,
    matrix: t,
    flatten: n,
    size: r
  } = e;
  return i(Nn, {
    "...Array": function(c) {
      return a(c);
    },
    "...Matrix": function(c) {
      return t(a(c.map((h) => h.toArray())));
    }
    // TODO implement this properly for SparseMatrix
  });
  function a(f) {
    if (f.length === 0)
      throw new TypeError("At least one column is needed to construct a matrix.");
    for (var c = u(f[0]), h = [], s = 0; s < c; s++)
      h[s] = [];
    for (var o of f) {
      var l = u(o);
      if (l !== c)
        throw new TypeError("The vectors had different length: " + (c | 0) + " ≠ " + (l | 0));
      for (var v = n(o), g = 0; g < c; g++)
        h[g].push(v[g]);
    }
    return h;
  }
  function u(f) {
    var c = r(f);
    if (c.length === 1)
      return c[0];
    if (c.length === 2) {
      if (c[0] === 1)
        return c[1];
      if (c[1] === 1)
        return c[0];
      throw new TypeError("At least one of the arguments is not a vector.");
    } else
      throw new TypeError("Only one- or two-dimensional vectors are supported.");
  }
}), xn = "unaryMinus", af = ["typed"], uf = /* @__PURE__ */ ee(xn, af, (e) => {
  var {
    typed: i
  } = e;
  return i(xn, {
    number: ca,
    "Complex | BigNumber | Fraction": (t) => t.neg(),
    Unit: i.referToSelf((t) => (n) => {
      var r = n.clone();
      return r.value = i.find(t, r.valueType())(n.value), r;
    }),
    // deep map collection, skip zeros since unaryMinus(0) = 0
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
    // TODO: add support for string
  });
}), _n = "abs", of = ["typed"], sf = /* @__PURE__ */ ee(_n, of, (e) => {
  var {
    typed: i
  } = e;
  return i(_n, {
    number: ua,
    "Complex | BigNumber | Fraction | Unit": (t) => t.abs(),
    // deep map collection, skip zeros since abs(0) = 0
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), zn = "addScalar", ff = ["typed"], cf = /* @__PURE__ */ ee(zn, ff, (e) => {
  var {
    typed: i
  } = e;
  return i(zn, {
    "number, number": oa,
    "Complex, Complex": function(n, r) {
      return n.add(r);
    },
    "BigNumber, BigNumber": function(n, r) {
      return n.plus(r);
    },
    "Fraction, Fraction": function(n, r) {
      return n.add(r);
    },
    "Unit, Unit": i.referToSelf((t) => (n, r) => {
      if (n.value === null || n.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (r.value === null || r.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!n.equalBase(r))
        throw new Error("Units do not match");
      var a = n.clone();
      return a.value = i.find(t, [a.valueType(), r.valueType()])(a.value, r.value), a.fixPrefix = !1, a;
    })
  });
}), Tn = "subtractScalar", lf = ["typed"], hf = /* @__PURE__ */ ee(Tn, lf, (e) => {
  var {
    typed: i
  } = e;
  return i(Tn, {
    "number, number": sa,
    "Complex, Complex": function(n, r) {
      return n.sub(r);
    },
    "BigNumber, BigNumber": function(n, r) {
      return n.minus(r);
    },
    "Fraction, Fraction": function(n, r) {
      return n.sub(r);
    },
    "Unit, Unit": i.referToSelf((t) => (n, r) => {
      if (n.value === null || n.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (r.value === null || r.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!n.equalBase(r))
        throw new Error("Units do not match");
      var a = n.clone();
      return a.value = i.find(t, [a.valueType(), r.valueType()])(a.value, r.value), a.fixPrefix = !1, a;
    })
  });
}), vf = "matAlgo11xS0s", pf = ["typed", "equalScalar"], df = /* @__PURE__ */ ee(vf, pf, (e) => {
  var {
    typed: i,
    equalScalar: t
  } = e;
  return function(r, a, u, f) {
    var c = r._values, h = r._index, s = r._ptr, o = r._size, l = r._datatype;
    if (!c)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = o[0], g = o[1], p, m = t, d = 0, y = u;
    typeof l == "string" && (p = l, m = i.find(t, [p, p]), d = i.convert(0, p), a = i.convert(a, p), y = i.find(u, [p, p]));
    for (var D = [], A = [], E = [], w = 0; w < g; w++) {
      E[w] = A.length;
      for (var F = s[w], b = s[w + 1], C = F; C < b; C++) {
        var S = h[C], M = f ? y(a, c[C]) : y(c[C], a);
        m(M, d) || (A.push(S), D.push(M));
      }
    }
    return E[g] = A.length, r.createSparseMatrix({
      values: D,
      index: A,
      ptr: E,
      size: [v, g],
      datatype: p
    });
  };
}), mf = "matAlgo12xSfs", gf = ["typed", "DenseMatrix"], Ur = /* @__PURE__ */ ee(mf, gf, (e) => {
  var {
    typed: i,
    DenseMatrix: t
  } = e;
  return function(r, a, u, f) {
    var c = r._values, h = r._index, s = r._ptr, o = r._size, l = r._datatype;
    if (!c)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = o[0], g = o[1], p, m = u;
    typeof l == "string" && (p = l, a = i.convert(a, p), m = i.find(u, [p, p]));
    for (var d = [], y = [], D = [], A = 0; A < g; A++) {
      for (var E = A + 1, w = s[A], F = s[A + 1], b = w; b < F; b++) {
        var C = h[b];
        y[C] = c[b], D[C] = E;
      }
      for (var S = 0; S < v; S++)
        A === 0 && (d[S] = []), D[S] === E ? d[S][A] = f ? m(a, y[S]) : m(y[S], a) : d[S][A] = f ? m(a, 0) : m(0, a);
    }
    return new t({
      data: d,
      size: [v, g],
      datatype: p
    });
  };
}), Df = "matAlgo14xDs", wf = ["typed"], da = /* @__PURE__ */ ee(Df, wf, (e) => {
  var {
    typed: i
  } = e;
  return function(r, a, u, f) {
    var c = r._data, h = r._size, s = r._datatype, o, l = u;
    typeof s == "string" && (o = s, a = i.convert(a, o), l = i.find(u, [o, o]));
    var v = h.length > 0 ? t(l, 0, h, h[0], c, a, f) : [];
    return r.createDenseMatrix({
      data: v,
      size: Fe(h),
      datatype: o
    });
  };
  function t(n, r, a, u, f, c, h) {
    var s = [];
    if (r === a.length - 1)
      for (var o = 0; o < u; o++)
        s[o] = h ? n(c, f[o]) : n(f[o], c);
    else
      for (var l = 0; l < u; l++)
        s[l] = t(n, r + 1, a, a[r + 1], f[l], c, h);
    return s;
  }
}), yf = "matAlgo03xDSf", Af = ["typed"], Vr = /* @__PURE__ */ ee(yf, Af, (e) => {
  var {
    typed: i
  } = e;
  return function(n, r, a, u) {
    var f = n._data, c = n._size, h = n._datatype, s = r._values, o = r._index, l = r._ptr, v = r._size, g = r._datatype;
    if (c.length !== v.length)
      throw new Ce(c.length, v.length);
    if (c[0] !== v[0] || c[1] !== v[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + v + ")");
    if (!s)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var p = c[0], m = c[1], d, y = 0, D = a;
    typeof h == "string" && h === g && (d = h, y = i.convert(0, d), D = i.find(a, [d, d]));
    for (var A = [], E = 0; E < p; E++)
      A[E] = [];
    for (var w = [], F = [], b = 0; b < m; b++) {
      for (var C = b + 1, S = l[b], M = l[b + 1], B = S; B < M; B++) {
        var I = o[B];
        w[I] = u ? D(s[B], f[I][b]) : D(f[I][b], s[B]), F[I] = C;
      }
      for (var T = 0; T < p; T++)
        F[T] === C ? A[T][b] = w[T] : A[T][b] = u ? D(y, f[T][b]) : D(f[T][b], y);
    }
    return n.createDenseMatrix({
      data: A,
      size: [p, m],
      datatype: d
    });
  };
}), Ef = "matAlgo05xSfSf", Cf = ["typed", "equalScalar"], Ff = /* @__PURE__ */ ee(Ef, Cf, (e) => {
  var {
    typed: i,
    equalScalar: t
  } = e;
  return function(r, a, u) {
    var f = r._values, c = r._index, h = r._ptr, s = r._size, o = r._datatype, l = a._values, v = a._index, g = a._ptr, p = a._size, m = a._datatype;
    if (s.length !== p.length)
      throw new Ce(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    var d = s[0], y = s[1], D, A = t, E = 0, w = u;
    typeof o == "string" && o === m && (D = o, A = i.find(t, [D, D]), E = i.convert(0, D), w = i.find(u, [D, D]));
    var F = f && l ? [] : void 0, b = [], C = [], S = F ? [] : void 0, M = F ? [] : void 0, B = [], I = [], T, L, x, Z;
    for (L = 0; L < y; L++) {
      C[L] = b.length;
      var q = L + 1;
      for (x = h[L], Z = h[L + 1]; x < Z; x++)
        T = c[x], b.push(T), B[T] = q, S && (S[T] = f[x]);
      for (x = g[L], Z = g[L + 1]; x < Z; x++)
        T = v[x], B[T] !== q && b.push(T), I[T] = q, M && (M[T] = l[x]);
      if (F)
        for (x = C[L]; x < b.length; ) {
          T = b[x];
          var z = B[T], V = I[T];
          if (z === q || V === q) {
            var K = z === q ? S[T] : E, P = V === q ? M[T] : E, $ = w(K, P);
            A($, E) ? b.splice(x, 1) : (F.push($), x++);
          }
        }
    }
    return C[y] = b.length, r.createSparseMatrix({
      values: F,
      index: b,
      ptr: C,
      size: [d, y],
      datatype: D
    });
  };
}), bf = "matAlgo13xDD", Mf = ["typed"], Sf = /* @__PURE__ */ ee(bf, Mf, (e) => {
  var {
    typed: i
  } = e;
  return function(r, a, u) {
    var f = r._data, c = r._size, h = r._datatype, s = a._data, o = a._size, l = a._datatype, v = [];
    if (c.length !== o.length)
      throw new Ce(c.length, o.length);
    for (var g = 0; g < c.length; g++) {
      if (c[g] !== o[g])
        throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + o + ")");
      v[g] = c[g];
    }
    var p, m = u;
    typeof h == "string" && h === l && (p = h, m = i.find(u, [p, p]));
    var d = v.length > 0 ? t(m, 0, v, v[0], f, s) : [];
    return r.createDenseMatrix({
      data: d,
      size: v,
      datatype: p
    });
  };
  function t(n, r, a, u, f, c) {
    var h = [];
    if (r === a.length - 1)
      for (var s = 0; s < u; s++)
        h[s] = n(f[s], c[s]);
    else
      for (var o = 0; o < u; o++)
        h[o] = t(n, r + 1, a, a[r + 1], f[o], c[o]);
    return h;
  }
}), Bf = "broadcast", Nf = ["concat"], xf = /* @__PURE__ */ ee(Bf, Nf, (e) => {
  var {
    concat: i
  } = e;
  return function(r, a) {
    var u = Math.max(r._size.length, a._size.length);
    if (r._size.length === a._size.length && r._size.every((g, p) => g === a._size[p]))
      return [r, a];
    for (var f = t(r._size, u, 0), c = t(a._size, u, 0), h = [], s = 0; s < u; s++)
      h[s] = Math.max(f[s], c[s]);
    pt(f, h), pt(c, h);
    var o = r.clone(), l = a.clone();
    o._size.length < u ? o.reshape(t(o._size, u, 1)) : l._size.length < u && l.reshape(t(l._size, u, 1));
    for (var v = 0; v < u; v++)
      o._size[v] < h[v] && (o = n(o, h[v], v)), l._size[v] < h[v] && (l = n(l, h[v], v));
    return [o, l];
  };
  function t(r, a, u) {
    return [...Array(a - r.length).fill(u), ...r];
  }
  function n(r, a, u) {
    return i(...Array(a).fill(r), u);
  }
}), _f = "matrixAlgorithmSuite", zf = ["typed", "matrix", "concat"], Br = /* @__PURE__ */ ee(_f, zf, (e) => {
  var {
    typed: i,
    matrix: t,
    concat: n
  } = e, r = Sf({
    typed: i
  }), a = da({
    typed: i
  }), u = xf({
    concat: n
  });
  return function(c) {
    var h = c.elop, s = c.SD || c.DS, o;
    h ? (o = {
      "DenseMatrix, DenseMatrix": (p, m) => r(...u(p, m), h),
      "Array, Array": (p, m) => r(...u(t(p), t(m)), h).valueOf(),
      "Array, DenseMatrix": (p, m) => r(...u(t(p), m), h),
      "DenseMatrix, Array": (p, m) => r(...u(p, t(m)), h)
    }, c.SS && (o["SparseMatrix, SparseMatrix"] = (p, m) => c.SS(...u(p, m), h, !1)), c.DS && (o["DenseMatrix, SparseMatrix"] = (p, m) => c.DS(...u(p, m), h, !1), o["Array, SparseMatrix"] = (p, m) => c.DS(...u(t(p), m), h, !1)), s && (o["SparseMatrix, DenseMatrix"] = (p, m) => s(...u(m, p), h, !0), o["SparseMatrix, Array"] = (p, m) => s(...u(t(m), p), h, !0))) : (o = {
      "DenseMatrix, DenseMatrix": i.referToSelf((p) => (m, d) => r(...u(m, d), p)),
      "Array, Array": i.referToSelf((p) => (m, d) => r(...u(t(m), t(d)), p).valueOf()),
      "Array, DenseMatrix": i.referToSelf((p) => (m, d) => r(...u(t(m), d), p)),
      "DenseMatrix, Array": i.referToSelf((p) => (m, d) => r(...u(m, t(d)), p))
    }, c.SS && (o["SparseMatrix, SparseMatrix"] = i.referToSelf((p) => (m, d) => c.SS(...u(m, d), p, !1))), c.DS && (o["DenseMatrix, SparseMatrix"] = i.referToSelf((p) => (m, d) => c.DS(...u(m, d), p, !1)), o["Array, SparseMatrix"] = i.referToSelf((p) => (m, d) => c.DS(...u(t(m), d), p, !1))), s && (o["SparseMatrix, DenseMatrix"] = i.referToSelf((p) => (m, d) => s(...u(d, m), p, !0)), o["SparseMatrix, Array"] = i.referToSelf((p) => (m, d) => s(...u(t(d), m), p, !0))));
    var l = c.scalar || "any", v = c.Ds || c.Ss;
    v && (h ? (o["DenseMatrix," + l] = (p, m) => a(p, m, h, !1), o[l + ", DenseMatrix"] = (p, m) => a(m, p, h, !0), o["Array," + l] = (p, m) => a(t(p), m, h, !1).valueOf(), o[l + ", Array"] = (p, m) => a(t(m), p, h, !0).valueOf()) : (o["DenseMatrix," + l] = i.referToSelf((p) => (m, d) => a(m, d, p, !1)), o[l + ", DenseMatrix"] = i.referToSelf((p) => (m, d) => a(d, m, p, !0)), o["Array," + l] = i.referToSelf((p) => (m, d) => a(t(m), d, p, !1).valueOf()), o[l + ", Array"] = i.referToSelf((p) => (m, d) => a(t(d), m, p, !0).valueOf())));
    var g = c.sS !== void 0 ? c.sS : c.Ss;
    return h ? (c.Ss && (o["SparseMatrix," + l] = (p, m) => c.Ss(p, m, h, !1)), g && (o[l + ", SparseMatrix"] = (p, m) => g(m, p, h, !0))) : (c.Ss && (o["SparseMatrix," + l] = i.referToSelf((p) => (m, d) => c.Ss(m, d, p, !1))), g && (o[l + ", SparseMatrix"] = i.referToSelf((p) => (m, d) => g(d, m, p, !0)))), h && h.signatures && $u(o, h.signatures), o;
  };
}), Tf = "matAlgo01xDSid", If = ["typed"], ma = /* @__PURE__ */ ee(Tf, If, (e) => {
  var {
    typed: i
  } = e;
  return function(n, r, a, u) {
    var f = n._data, c = n._size, h = n._datatype, s = r._values, o = r._index, l = r._ptr, v = r._size, g = r._datatype;
    if (c.length !== v.length)
      throw new Ce(c.length, v.length);
    if (c[0] !== v[0] || c[1] !== v[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + v + ")");
    if (!s)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var p = c[0], m = c[1], d = typeof h == "string" && h === g ? h : void 0, y = d ? i.find(a, [d, d]) : a, D, A, E = [];
    for (D = 0; D < p; D++)
      E[D] = [];
    var w = [], F = [];
    for (A = 0; A < m; A++) {
      for (var b = A + 1, C = l[A], S = l[A + 1], M = C; M < S; M++)
        D = o[M], w[D] = u ? y(s[M], f[D][A]) : y(f[D][A], s[M]), F[D] = b;
      for (D = 0; D < p; D++)
        F[D] === b ? E[D][A] = w[D] : E[D][A] = f[D][A];
    }
    return n.createDenseMatrix({
      data: E,
      size: [p, m],
      datatype: d
    });
  };
}), Lf = "matAlgo04xSidSid", Of = ["typed", "equalScalar"], qf = /* @__PURE__ */ ee(Lf, Of, (e) => {
  var {
    typed: i,
    equalScalar: t
  } = e;
  return function(r, a, u) {
    var f = r._values, c = r._index, h = r._ptr, s = r._size, o = r._datatype, l = a._values, v = a._index, g = a._ptr, p = a._size, m = a._datatype;
    if (s.length !== p.length)
      throw new Ce(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    var d = s[0], y = s[1], D, A = t, E = 0, w = u;
    typeof o == "string" && o === m && (D = o, A = i.find(t, [D, D]), E = i.convert(0, D), w = i.find(u, [D, D]));
    var F = f && l ? [] : void 0, b = [], C = [], S = f && l ? [] : void 0, M = f && l ? [] : void 0, B = [], I = [], T, L, x, Z, q;
    for (L = 0; L < y; L++) {
      C[L] = b.length;
      var z = L + 1;
      for (Z = h[L], q = h[L + 1], x = Z; x < q; x++)
        T = c[x], b.push(T), B[T] = z, S && (S[T] = f[x]);
      for (Z = g[L], q = g[L + 1], x = Z; x < q; x++)
        if (T = v[x], B[T] === z) {
          if (S) {
            var V = w(S[T], l[x]);
            A(V, E) ? B[T] = null : S[T] = V;
          }
        } else
          b.push(T), I[T] = z, M && (M[T] = l[x]);
      if (S && M)
        for (x = C[L]; x < b.length; )
          T = b[x], B[T] === z ? (F[x] = S[T], x++) : I[T] === z ? (F[x] = M[T], x++) : b.splice(x, 1);
    }
    return C[y] = b.length, r.createSparseMatrix({
      values: F,
      index: b,
      ptr: C,
      size: [d, y],
      datatype: D
    });
  };
}), $f = "matAlgo10xSids", Pf = ["typed", "DenseMatrix"], ga = /* @__PURE__ */ ee($f, Pf, (e) => {
  var {
    typed: i,
    DenseMatrix: t
  } = e;
  return function(r, a, u, f) {
    var c = r._values, h = r._index, s = r._ptr, o = r._size, l = r._datatype;
    if (!c)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = o[0], g = o[1], p, m = u;
    typeof l == "string" && (p = l, a = i.convert(a, p), m = i.find(u, [p, p]));
    for (var d = [], y = [], D = [], A = 0; A < g; A++) {
      for (var E = A + 1, w = s[A], F = s[A + 1], b = w; b < F; b++) {
        var C = h[b];
        y[C] = c[b], D[C] = E;
      }
      for (var S = 0; S < v; S++)
        A === 0 && (d[S] = []), D[S] === E ? d[S][A] = f ? m(a, y[S]) : m(y[S], a) : d[S][A] = a;
    }
    return new t({
      data: d,
      size: [v, g],
      datatype: p
    });
  };
}), Rf = "multiplyScalar", Uf = ["typed"], Vf = /* @__PURE__ */ ee(Rf, Uf, (e) => {
  var {
    typed: i
  } = e;
  return i("multiplyScalar", {
    "number, number": fa,
    "Complex, Complex": function(n, r) {
      return n.mul(r);
    },
    "BigNumber, BigNumber": function(n, r) {
      return n.times(r);
    },
    "Fraction, Fraction": function(n, r) {
      return n.mul(r);
    },
    "number | Fraction | BigNumber | Complex, Unit": (t, n) => n.multiply(t),
    "Unit, number | Fraction | BigNumber | Complex | Unit": (t, n) => t.multiply(n)
  });
}), In = "multiply", Gf = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], Zf = /* @__PURE__ */ ee(In, Gf, (e) => {
  var {
    typed: i,
    matrix: t,
    addScalar: n,
    multiplyScalar: r,
    equalScalar: a,
    dot: u
  } = e, f = df({
    typed: i,
    equalScalar: a
  }), c = da({
    typed: i
  });
  function h(E, w) {
    switch (E.length) {
      case 1:
        switch (w.length) {
          case 1:
            if (E[0] !== w[0])
              throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            break;
          case 2:
            if (E[0] !== w[0])
              throw new RangeError("Dimension mismatch in multiplication. Vector length (" + E[0] + ") must match Matrix rows (" + w[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + w.length + " dimensions)");
        }
        break;
      case 2:
        switch (w.length) {
          case 1:
            if (E[1] !== w[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + E[1] + ") must match Vector length (" + w[0] + ")");
            break;
          case 2:
            if (E[1] !== w[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + E[1] + ") must match Matrix B rows (" + w[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + w.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + E.length + " dimensions)");
    }
  }
  function s(E, w, F) {
    if (F === 0)
      throw new Error("Cannot multiply two empty vectors");
    return u(E, w);
  }
  function o(E, w) {
    if (w.storage() !== "dense")
      throw new Error("Support for SparseMatrix not implemented");
    return l(E, w);
  }
  function l(E, w) {
    var F = E._data, b = E._size, C = E._datatype, S = w._data, M = w._size, B = w._datatype, I = b[0], T = M[1], L, x = n, Z = r;
    C && B && C === B && typeof C == "string" && (L = C, x = i.find(n, [L, L]), Z = i.find(r, [L, L]));
    for (var q = [], z = 0; z < T; z++) {
      for (var V = Z(F[0], S[0][z]), K = 1; K < I; K++)
        V = x(V, Z(F[K], S[K][z]));
      q[z] = V;
    }
    return E.createDenseMatrix({
      data: q,
      size: [T],
      datatype: L
    });
  }
  var v = i("_multiplyMatrixVector", {
    "DenseMatrix, any": p,
    "SparseMatrix, any": y
  }), g = i("_multiplyMatrixMatrix", {
    "DenseMatrix, DenseMatrix": m,
    "DenseMatrix, SparseMatrix": d,
    "SparseMatrix, DenseMatrix": D,
    "SparseMatrix, SparseMatrix": A
  });
  function p(E, w) {
    var F = E._data, b = E._size, C = E._datatype, S = w._data, M = w._datatype, B = b[0], I = b[1], T, L = n, x = r;
    C && M && C === M && typeof C == "string" && (T = C, L = i.find(n, [T, T]), x = i.find(r, [T, T]));
    for (var Z = [], q = 0; q < B; q++) {
      for (var z = F[q], V = x(z[0], S[0]), K = 1; K < I; K++)
        V = L(V, x(z[K], S[K]));
      Z[q] = V;
    }
    return E.createDenseMatrix({
      data: Z,
      size: [B],
      datatype: T
    });
  }
  function m(E, w) {
    var F = E._data, b = E._size, C = E._datatype, S = w._data, M = w._size, B = w._datatype, I = b[0], T = b[1], L = M[1], x, Z = n, q = r;
    C && B && C === B && typeof C == "string" && (x = C, Z = i.find(n, [x, x]), q = i.find(r, [x, x]));
    for (var z = [], V = 0; V < I; V++) {
      var K = F[V];
      z[V] = [];
      for (var P = 0; P < L; P++) {
        for (var $ = q(K[0], S[0][P]), G = 1; G < T; G++)
          $ = Z($, q(K[G], S[G][P]));
        z[V][P] = $;
      }
    }
    return E.createDenseMatrix({
      data: z,
      size: [I, L],
      datatype: x
    });
  }
  function d(E, w) {
    var F = E._data, b = E._size, C = E._datatype, S = w._values, M = w._index, B = w._ptr, I = w._size, T = w._datatype;
    if (!S)
      throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var L = b[0], x = I[1], Z, q = n, z = r, V = a, K = 0;
    C && T && C === T && typeof C == "string" && (Z = C, q = i.find(n, [Z, Z]), z = i.find(r, [Z, Z]), V = i.find(a, [Z, Z]), K = i.convert(0, Z));
    for (var P = [], $ = [], G = [], ne = w.createSparseMatrix({
      values: P,
      index: $,
      ptr: G,
      size: [L, x],
      datatype: Z
    }), k = 0; k < x; k++) {
      G[k] = $.length;
      var U = B[k], Q = B[k + 1];
      if (Q > U)
        for (var X = 0, J = 0; J < L; J++) {
          for (var oe = J + 1, j = void 0, fe = U; fe < Q; fe++) {
            var le = M[fe];
            X !== oe ? (j = z(F[J][le], S[fe]), X = oe) : j = q(j, z(F[J][le], S[fe]));
          }
          X === oe && !V(j, K) && ($.push(J), P.push(j));
        }
    }
    return G[x] = $.length, ne;
  }
  function y(E, w) {
    var F = E._values, b = E._index, C = E._ptr, S = E._datatype;
    if (!F)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var M = w._data, B = w._datatype, I = E._size[0], T = w._size[0], L = [], x = [], Z = [], q, z = n, V = r, K = a, P = 0;
    S && B && S === B && typeof S == "string" && (q = S, z = i.find(n, [q, q]), V = i.find(r, [q, q]), K = i.find(a, [q, q]), P = i.convert(0, q));
    var $ = [], G = [];
    Z[0] = 0;
    for (var ne = 0; ne < T; ne++) {
      var k = M[ne];
      if (!K(k, P))
        for (var U = C[ne], Q = C[ne + 1], X = U; X < Q; X++) {
          var J = b[X];
          G[J] ? $[J] = z($[J], V(k, F[X])) : (G[J] = !0, x.push(J), $[J] = V(k, F[X]));
        }
    }
    for (var oe = x.length, j = 0; j < oe; j++) {
      var fe = x[j];
      L[j] = $[fe];
    }
    return Z[1] = x.length, E.createSparseMatrix({
      values: L,
      index: x,
      ptr: Z,
      size: [I, 1],
      datatype: q
    });
  }
  function D(E, w) {
    var F = E._values, b = E._index, C = E._ptr, S = E._datatype;
    if (!F)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var M = w._data, B = w._datatype, I = E._size[0], T = w._size[0], L = w._size[1], x, Z = n, q = r, z = a, V = 0;
    S && B && S === B && typeof S == "string" && (x = S, Z = i.find(n, [x, x]), q = i.find(r, [x, x]), z = i.find(a, [x, x]), V = i.convert(0, x));
    for (var K = [], P = [], $ = [], G = E.createSparseMatrix({
      values: K,
      index: P,
      ptr: $,
      size: [I, L],
      datatype: x
    }), ne = [], k = [], U = 0; U < L; U++) {
      $[U] = P.length;
      for (var Q = U + 1, X = 0; X < T; X++) {
        var J = M[X][U];
        if (!z(J, V))
          for (var oe = C[X], j = C[X + 1], fe = oe; fe < j; fe++) {
            var le = b[fe];
            k[le] !== Q ? (k[le] = Q, P.push(le), ne[le] = q(J, F[fe])) : ne[le] = Z(ne[le], q(J, F[fe]));
          }
      }
      for (var me = $[U], we = P.length, Ae = me; Ae < we; Ae++) {
        var he = P[Ae];
        K[Ae] = ne[he];
      }
    }
    return $[L] = P.length, G;
  }
  function A(E, w) {
    var F = E._values, b = E._index, C = E._ptr, S = E._datatype, M = w._values, B = w._index, I = w._ptr, T = w._datatype, L = E._size[0], x = w._size[1], Z = F && M, q, z = n, V = r;
    S && T && S === T && typeof S == "string" && (q = S, z = i.find(n, [q, q]), V = i.find(r, [q, q]));
    for (var K = Z ? [] : void 0, P = [], $ = [], G = E.createSparseMatrix({
      values: K,
      index: P,
      ptr: $,
      size: [L, x],
      datatype: q
    }), ne = Z ? [] : void 0, k = [], U, Q, X, J, oe, j, fe, le, me = 0; me < x; me++) {
      $[me] = P.length;
      var we = me + 1;
      for (oe = I[me], j = I[me + 1], J = oe; J < j; J++)
        if (le = B[J], Z)
          for (Q = C[le], X = C[le + 1], U = Q; U < X; U++)
            fe = b[U], k[fe] !== we ? (k[fe] = we, P.push(fe), ne[fe] = V(M[J], F[U])) : ne[fe] = z(ne[fe], V(M[J], F[U]));
        else
          for (Q = C[le], X = C[le + 1], U = Q; U < X; U++)
            fe = b[U], k[fe] !== we && (k[fe] = we, P.push(fe));
      if (Z)
        for (var Ae = $[me], he = P.length, be = Ae; be < he; be++) {
          var Ee = P[be];
          K[be] = ne[Ee];
        }
    }
    return $[x] = P.length, G;
  }
  return i(In, r, {
    // we extend the signatures of multiplyScalar with signatures dealing with matrices
    "Array, Array": i.referTo("Matrix, Matrix", (E) => (w, F) => {
      h($e(w), $e(F));
      var b = E(t(w), t(F));
      return _e(b) ? b.valueOf() : b;
    }),
    "Matrix, Matrix": function(w, F) {
      var b = w.size(), C = F.size();
      return h(b, C), b.length === 1 ? C.length === 1 ? s(w, F, b[0]) : o(w, F) : C.length === 1 ? v(w, F) : g(w, F);
    },
    "Matrix, Array": i.referTo("Matrix,Matrix", (E) => (w, F) => E(w, t(F))),
    "Array, Matrix": i.referToSelf((E) => (w, F) => E(t(w, F.storage()), F)),
    "SparseMatrix, any": function(w, F) {
      return f(w, F, r, !1);
    },
    "DenseMatrix, any": function(w, F) {
      return c(w, F, r, !1);
    },
    "any, SparseMatrix": function(w, F) {
      return f(F, w, r, !0);
    },
    "any, DenseMatrix": function(w, F) {
      return c(F, w, r, !0);
    },
    "Array, any": function(w, F) {
      return c(t(w), F, r, !1).valueOf();
    },
    "any, Array": function(w, F) {
      return c(t(F), w, r, !0).valueOf();
    },
    "any, any": r,
    "any, any, ...any": i.referToSelf((E) => (w, F, b) => {
      for (var C = E(w, F), S = 0; S < b.length; S++)
        C = E(C, b[S]);
      return C;
    })
  });
}), Ln = "sign", Yf = ["typed", "BigNumber", "Fraction", "complex"], Jf = /* @__PURE__ */ ee(Ln, Yf, (e) => {
  var {
    typed: i,
    BigNumber: t,
    complex: n,
    Fraction: r
  } = e;
  return i(Ln, {
    number: Xt,
    Complex: function(u) {
      return u.im === 0 ? n(Xt(u.re)) : u.sign();
    },
    BigNumber: function(u) {
      return new t(u.cmp(0));
    },
    Fraction: function(u) {
      return new r(u.s, 1);
    },
    // deep map collection, skip zeros since sign(0) = 0
    "Array | Matrix": i.referToSelf((a) => (u) => er(u, a)),
    Unit: i.referToSelf((a) => (u) => {
      if (!u._isDerived() && u.units[0].unit.offset !== 0)
        throw new TypeError("sign is ambiguous for units with offset");
      return i.find(a, u.valueType())(u.value);
    })
  });
}), Qf = "sqrt", Xf = ["config", "typed", "Complex"], Hf = /* @__PURE__ */ ee(Qf, Xf, (e) => {
  var {
    config: i,
    typed: t,
    Complex: n
  } = e;
  return t("sqrt", {
    number: r,
    Complex: function(u) {
      return u.sqrt();
    },
    BigNumber: function(u) {
      return !u.isNegative() || i.predictable ? u.sqrt() : r(u.toNumber());
    },
    Unit: function(u) {
      return u.pow(0.5);
    }
  });
  function r(a) {
    return isNaN(a) ? NaN : a >= 0 || i.predictable ? Math.sqrt(a) : new n(a, 0).sqrt();
  }
}), On = "subtract", Kf = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], Wf = /* @__PURE__ */ ee(On, Kf, (e) => {
  var {
    typed: i,
    matrix: t,
    equalScalar: n,
    subtractScalar: r,
    unaryMinus: a,
    DenseMatrix: u,
    concat: f
  } = e, c = ma({
    typed: i
  }), h = Vr({
    typed: i
  }), s = Ff({
    typed: i,
    equalScalar: n
  }), o = ga({
    typed: i,
    DenseMatrix: u
  }), l = Ur({
    typed: i,
    DenseMatrix: u
  }), v = Br({
    typed: i,
    matrix: t,
    concat: f
  });
  return i(On, {
    "any, any": r
  }, v({
    elop: r,
    SS: s,
    DS: c,
    SD: h,
    Ss: l,
    sS: o
  }));
}), kf = "matAlgo07xSSf", jf = ["typed", "DenseMatrix"], jr = /* @__PURE__ */ ee(kf, jf, (e) => {
  var {
    typed: i,
    DenseMatrix: t
  } = e;
  return function(a, u, f) {
    var c = a._size, h = a._datatype, s = u._size, o = u._datatype;
    if (c.length !== s.length)
      throw new Ce(c.length, s.length);
    if (c[0] !== s[0] || c[1] !== s[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + s + ")");
    var l = c[0], v = c[1], g, p = 0, m = f;
    typeof h == "string" && h === o && (g = h, p = i.convert(0, g), m = i.find(f, [g, g]));
    var d, y, D = [];
    for (d = 0; d < l; d++)
      D[d] = [];
    var A = [], E = [], w = [], F = [];
    for (y = 0; y < v; y++) {
      var b = y + 1;
      for (n(a, y, w, A, b), n(u, y, F, E, b), d = 0; d < l; d++) {
        var C = w[d] === b ? A[d] : p, S = F[d] === b ? E[d] : p;
        D[d][y] = m(C, S);
      }
    }
    return new t({
      data: D,
      size: [l, v],
      datatype: g
    });
  };
  function n(r, a, u, f, c) {
    for (var h = r._values, s = r._index, o = r._ptr, l = o[a], v = o[a + 1]; l < v; l++) {
      var g = s[l];
      u[g] = c, f[g] = h[l];
    }
  }
}), qn = "conj", ec = ["typed"], rc = /* @__PURE__ */ ee(qn, ec, (e) => {
  var {
    typed: i
  } = e;
  return i(qn, {
    "number | BigNumber | Fraction": (t) => t,
    Complex: (t) => t.conjugate(),
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), $n = "im", tc = ["typed"], nc = /* @__PURE__ */ ee($n, tc, (e) => {
  var {
    typed: i
  } = e;
  return i($n, {
    number: () => 0,
    "BigNumber | Fraction": (t) => t.mul(0),
    Complex: (t) => t.im,
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), Pn = "re", ic = ["typed"], ac = /* @__PURE__ */ ee(Pn, ic, (e) => {
  var {
    typed: i
  } = e;
  return i(Pn, {
    "number | BigNumber | Fraction": (t) => t,
    Complex: (t) => t.re,
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), Rn = "concat", uc = ["typed", "matrix", "isInteger"], oc = /* @__PURE__ */ ee(Rn, uc, (e) => {
  var {
    typed: i,
    matrix: t,
    isInteger: n
  } = e;
  return i(Rn, {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    "...Array | Matrix | number | BigNumber": function(a) {
      var u, f = a.length, c = -1, h, s = !1, o = [];
      for (u = 0; u < f; u++) {
        var l = a[u];
        if (_e(l) && (s = !0), qe(l) || Re(l)) {
          if (u !== f - 1)
            throw new Error("Dimension must be specified as last argument");
          if (h = c, c = l.valueOf(), !n(c))
            throw new TypeError("Integer number expected for dimension");
          if (c < 0 || u > 0 && c > h)
            throw new Sr(c, h + 1);
        } else {
          var v = Fe(l).valueOf(), g = $e(v);
          if (o[u] = v, h = c, c = g.length - 1, u > 0 && c !== h)
            throw new Ce(h + 1, c + 1);
        }
      }
      if (o.length === 0)
        throw new SyntaxError("At least one matrix expected");
      for (var p = o.shift(); o.length; )
        p = Pi(p, o.shift(), c);
      return s ? t(p) : p;
    },
    "...string": function(a) {
      return a.join("");
    }
  });
}), Un = "column", sc = ["typed", "Index", "matrix", "range"], fc = /* @__PURE__ */ ee(Un, sc, (e) => {
  var {
    typed: i,
    Index: t,
    matrix: n,
    range: r
  } = e;
  return i(Un, {
    "Matrix, number": a,
    "Array, number": function(f, c) {
      return a(n(Fe(f)), c).valueOf();
    }
  });
  function a(u, f) {
    if (u.size().length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    xe(f, u.size()[1]);
    var c = r(0, u.size()[0]), h = new t(c, f), s = u.subset(h);
    return _e(s) ? s : n([[s]]);
  }
}), Vn = "diag", cc = ["typed", "matrix", "DenseMatrix", "SparseMatrix"], lc = /* @__PURE__ */ ee(Vn, cc, (e) => {
  var {
    typed: i,
    matrix: t,
    DenseMatrix: n,
    SparseMatrix: r
  } = e;
  return i(Vn, {
    // FIXME: simplify this huge amount of signatures as soon as typed-function supports optional arguments
    Array: function(h) {
      return a(h, 0, $e(h), null);
    },
    "Array, number": function(h, s) {
      return a(h, s, $e(h), null);
    },
    "Array, BigNumber": function(h, s) {
      return a(h, s.toNumber(), $e(h), null);
    },
    "Array, string": function(h, s) {
      return a(h, 0, $e(h), s);
    },
    "Array, number, string": function(h, s, o) {
      return a(h, s, $e(h), o);
    },
    "Array, BigNumber, string": function(h, s, o) {
      return a(h, s.toNumber(), $e(h), o);
    },
    Matrix: function(h) {
      return a(h, 0, h.size(), h.storage());
    },
    "Matrix, number": function(h, s) {
      return a(h, s, h.size(), h.storage());
    },
    "Matrix, BigNumber": function(h, s) {
      return a(h, s.toNumber(), h.size(), h.storage());
    },
    "Matrix, string": function(h, s) {
      return a(h, 0, h.size(), s);
    },
    "Matrix, number, string": function(h, s, o) {
      return a(h, s, h.size(), o);
    },
    "Matrix, BigNumber, string": function(h, s, o) {
      return a(h, s.toNumber(), h.size(), o);
    }
  });
  function a(c, h, s, o) {
    if (!ze(h))
      throw new TypeError("Second parameter in function diag must be an integer");
    var l = h > 0 ? h : 0, v = h < 0 ? -h : 0;
    switch (s.length) {
      case 1:
        return u(c, h, o, s[0], v, l);
      case 2:
        return f(c, h, o, s, v, l);
    }
    throw new RangeError("Matrix for function diag must be 2 dimensional");
  }
  function u(c, h, s, o, l, v) {
    var g = [o + l, o + v];
    if (s && s !== "sparse" && s !== "dense")
      throw new TypeError("Unknown matrix type ".concat(s, '"'));
    var p = s === "sparse" ? r.diagonal(g, c, h) : n.diagonal(g, c, h);
    return s !== null ? p : p.valueOf();
  }
  function f(c, h, s, o, l, v) {
    if (_e(c)) {
      var g = c.diagonal(h);
      return s !== null ? s !== g.storage() ? t(g, s) : g : g.valueOf();
    }
    for (var p = Math.min(o[0] - l, o[1] - v), m = [], d = 0; d < p; d++)
      m[d] = c[d + l][d + v];
    return s !== null ? t(m) : m;
  }
}), Gn = "flatten", hc = ["typed", "matrix"], vc = /* @__PURE__ */ ee(Gn, hc, (e) => {
  var {
    typed: i,
    matrix: t
  } = e;
  return i(Gn, {
    Array: function(r) {
      return Vt(r);
    },
    Matrix: function(r) {
      var a = Vt(r.toArray());
      return t(a);
    }
  });
}), Zn = "getMatrixDataType", pc = ["typed"], dc = /* @__PURE__ */ ee(Zn, pc, (e) => {
  var {
    typed: i
  } = e;
  return i(Zn, {
    Array: function(n) {
      return Hr(n, lr);
    },
    Matrix: function(n) {
      return n.getDataType();
    }
  });
}), Yn = "identity", mc = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], gc = /* @__PURE__ */ ee(Yn, mc, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    BigNumber: r,
    DenseMatrix: a,
    SparseMatrix: u
  } = e;
  return i(Yn, {
    "": function() {
      return t.matrix === "Matrix" ? n([]) : [];
    },
    string: function(s) {
      return n(s);
    },
    "number | BigNumber": function(s) {
      return c(s, s, t.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, string": function(s, o) {
      return c(s, s, o);
    },
    "number | BigNumber, number | BigNumber": function(s, o) {
      return c(s, o, t.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, number | BigNumber, string": function(s, o, l) {
      return c(s, o, l);
    },
    Array: function(s) {
      return f(s);
    },
    "Array, string": function(s, o) {
      return f(s, o);
    },
    Matrix: function(s) {
      return f(s.valueOf(), s.storage());
    },
    "Matrix, string": function(s, o) {
      return f(s.valueOf(), o);
    }
  });
  function f(h, s) {
    switch (h.length) {
      case 0:
        return s ? n(s) : [];
      case 1:
        return c(h[0], h[0], s);
      case 2:
        return c(h[0], h[1], s);
      default:
        throw new Error("Vector containing two values expected");
    }
  }
  function c(h, s, o) {
    var l = Re(h) || Re(s) ? r : null;
    if (Re(h) && (h = h.toNumber()), Re(s) && (s = s.toNumber()), !ze(h) || h < 1)
      throw new Error("Parameters in function identity must be positive integers");
    if (!ze(s) || s < 1)
      throw new Error("Parameters in function identity must be positive integers");
    var v = l ? new r(1) : 1, g = l ? new l(0) : 0, p = [h, s];
    if (o) {
      if (o === "sparse")
        return u.diagonal(p, v, 0, g);
      if (o === "dense")
        return a.diagonal(p, v, 0, g);
      throw new TypeError('Unknown matrix type "'.concat(o, '"'));
    }
    for (var m = vt([], p, g), d = h < s ? h : s, y = 0; y < d; y++)
      m[y][y] = v;
    return m;
  }
});
function Da() {
  throw new Error('No "bignumber" implementation available');
}
function Dc() {
  throw new Error('No "fraction" implementation available');
}
function wa() {
  throw new Error('No "matrix" implementation available');
}
var Jn = "range", wc = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], yc = /* @__PURE__ */ ee(Jn, wc, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    bignumber: r,
    smaller: a,
    smallerEq: u,
    larger: f,
    largerEq: c,
    add: h,
    isPositive: s
  } = e;
  return i(Jn, {
    // TODO: simplify signatures when typed-function supports default values and optional arguments
    // TODO: a number or boolean should not be converted to string here
    string: l,
    "string, boolean": l,
    "number, number": function(m, d) {
      return o(v(m, d, 1, !1));
    },
    "number, number, number": function(m, d, y) {
      return o(v(m, d, y, !1));
    },
    "number, number, boolean": function(m, d, y) {
      return o(v(m, d, 1, y));
    },
    "number, number, number, boolean": function(m, d, y, D) {
      return o(v(m, d, y, D));
    },
    "BigNumber, BigNumber": function(m, d) {
      var y = m.constructor;
      return o(v(m, d, new y(1), !1));
    },
    "BigNumber, BigNumber, BigNumber": function(m, d, y) {
      return o(v(m, d, y, !1));
    },
    "BigNumber, BigNumber, boolean": function(m, d, y) {
      var D = m.constructor;
      return o(v(m, d, new D(1), y));
    },
    "BigNumber, BigNumber, BigNumber, boolean": function(m, d, y, D) {
      return o(v(m, d, y, D));
    },
    "Unit, Unit, Unit": function(m, d, y) {
      return o(v(m, d, y, !1));
    },
    "Unit, Unit, Unit, boolean": function(m, d, y, D) {
      return o(v(m, d, y, D));
    }
  });
  function o(p) {
    return t.matrix === "Matrix" ? n ? n(p) : wa() : p;
  }
  function l(p, m) {
    var d = g(p);
    if (!d)
      throw new SyntaxError('String "' + p + '" is no valid range');
    return t.number === "BigNumber" ? (r === void 0 && Da(), o(v(r(d.start), r(d.end), r(d.step)))) : o(v(d.start, d.end, d.step, m));
  }
  function v(p, m, d, y) {
    for (var D = [], A = s(d) ? y ? u : a : y ? c : f, E = p; A(E, m); )
      D.push(E), E = h(E, d);
    return D;
  }
  function g(p) {
    var m = p.split(":"), d = m.map(function(D) {
      return Number(D);
    }), y = d.some(function(D) {
      return isNaN(D);
    });
    if (y)
      return null;
    switch (d.length) {
      case 2:
        return {
          start: d[0],
          end: d[1],
          step: 1
        };
      case 3:
        return {
          start: d[0],
          end: d[2],
          step: d[1]
        };
      default:
        return null;
    }
  }
}), Qn = "reshape", Ac = ["typed", "isInteger", "matrix"], Ec = /* @__PURE__ */ ee(Qn, Ac, (e) => {
  var {
    typed: i,
    isInteger: t
  } = e;
  return i(Qn, {
    "Matrix, Array": function(r, a) {
      return r.reshape(a, !0);
    },
    "Array, Array": function(r, a) {
      return a.forEach(function(u) {
        if (!t(u))
          throw new TypeError("Invalid size for dimension: " + u);
      }), jt(r, a);
    }
  });
}), Xn = "size", Cc = ["typed", "config", "?matrix"], Fc = /* @__PURE__ */ ee(Xn, Cc, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n
  } = e;
  return i(Xn, {
    Matrix: function(a) {
      return a.create(a.size());
    },
    Array: $e,
    string: function(a) {
      return t.matrix === "Array" ? [a.length] : n([a.length]);
    },
    "number | Complex | BigNumber | Unit | boolean | null": function(a) {
      return t.matrix === "Array" ? [] : n ? n([]) : wa();
    }
  });
}), Hn = "squeeze", bc = ["typed", "matrix"], Mc = /* @__PURE__ */ ee(Hn, bc, (e) => {
  var {
    typed: i,
    matrix: t
  } = e;
  return i(Hn, {
    Array: function(r) {
      return wn(Fe(r));
    },
    Matrix: function(r) {
      var a = wn(r.toArray());
      return Array.isArray(a) ? t(a) : a;
    },
    any: function(r) {
      return Fe(r);
    }
  });
}), Kn = "subset", Sc = ["typed", "matrix", "zeros", "add"], Bc = /* @__PURE__ */ ee(Kn, Sc, (e) => {
  var {
    typed: i,
    matrix: t,
    zeros: n,
    add: r
  } = e;
  return i(Kn, {
    // get subset
    "Matrix, Index": function(f, c) {
      return $r(c) ? t() : (ht(f, c), f.subset(c));
    },
    "Array, Index": i.referTo("Matrix, Index", function(u) {
      return function(f, c) {
        var h = u(t(f), c);
        return c.isScalar() ? h : h.valueOf();
      };
    }),
    "Object, Index": xc,
    "string, Index": Nc,
    // set subset
    "Matrix, Index, any, any": function(f, c, h, s) {
      return $r(c) ? f : (ht(f, c), f.clone().subset(c, a(h, c), s));
    },
    "Array, Index, any, any": i.referTo("Matrix, Index, any, any", function(u) {
      return function(f, c, h, s) {
        var o = u(t(f), c, h, s);
        return o.isMatrix ? o.valueOf() : o;
      };
    }),
    "Array, Index, any": i.referTo("Matrix, Index, any, any", function(u) {
      return function(f, c, h) {
        return u(t(f), c, h, void 0).valueOf();
      };
    }),
    "Matrix, Index, any": i.referTo("Matrix, Index, any, any", function(u) {
      return function(f, c, h) {
        return u(f, c, h, void 0);
      };
    }),
    "string, Index, string": Wn,
    "string, Index, string, string": Wn,
    "Object, Index, any": _c
  });
  function a(u, f) {
    if (typeof u == "string")
      throw new Error("can't boradcast a string");
    if (f._isScalar)
      return u;
    var c = f.size();
    if (c.every((h) => h > 0))
      try {
        return r(u, n(c));
      } catch {
        return u;
      }
    else
      return u;
  }
});
function Nc(e, i) {
  if (!bt(i))
    throw new TypeError("Index expected");
  if ($r(i))
    return "";
  if (ht(Array.from(e), i), i.size().length !== 1)
    throw new Ce(i.size().length, 1);
  var t = e.length;
  xe(i.min()[0], t), xe(i.max()[0], t);
  var n = i.dimension(0), r = "";
  return n.forEach(function(a) {
    r += e.charAt(a);
  }), r;
}
function Wn(e, i, t, n) {
  if (!i || i.isIndex !== !0)
    throw new TypeError("Index expected");
  if ($r(i))
    return e;
  if (ht(Array.from(e), i), i.size().length !== 1)
    throw new Ce(i.size().length, 1);
  if (n !== void 0) {
    if (typeof n != "string" || n.length !== 1)
      throw new TypeError("Single character expected as defaultValue");
  } else
    n = " ";
  var r = i.dimension(0), a = r.size()[0];
  if (a !== t.length)
    throw new Ce(r.size()[0], t.length);
  var u = e.length;
  xe(i.min()[0]), xe(i.max()[0]);
  for (var f = [], c = 0; c < u; c++)
    f[c] = e.charAt(c);
  if (r.forEach(function(o, l) {
    f[o] = t.charAt(l[0]);
  }), f.length > u)
    for (var h = u - 1, s = f.length; h < s; h++)
      f[h] || (f[h] = n);
  return f.join("");
}
function xc(e, i) {
  if (!$r(i)) {
    if (i.size().length !== 1)
      throw new Ce(i.size(), 1);
    var t = i.dimension(0);
    if (typeof t != "string")
      throw new TypeError("String expected as index to retrieve an object property");
    return Ri(e, t);
  }
}
function _c(e, i, t) {
  if ($r(i))
    return e;
  if (i.size().length !== 1)
    throw new Ce(i.size(), 1);
  var n = i.dimension(0);
  if (typeof n != "string")
    throw new TypeError("String expected as index to retrieve an object property");
  var r = Fe(e);
  return Ui(r, n, t), r;
}
var kn = "transpose", zc = ["typed", "matrix"], Tc = /* @__PURE__ */ ee(kn, zc, (e) => {
  var {
    typed: i,
    matrix: t
  } = e;
  return i(kn, {
    Array: (u) => n(t(u)).valueOf(),
    Matrix: n,
    any: Fe
    // scalars
  });
  function n(u) {
    var f = u.size(), c;
    switch (f.length) {
      case 1:
        c = u.clone();
        break;
      case 2:
        {
          var h = f[0], s = f[1];
          if (s === 0)
            throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Le(f) + ")");
          switch (u.storage()) {
            case "dense":
              c = r(u, h, s);
              break;
            case "sparse":
              c = a(u, h, s);
              break;
          }
        }
        break;
      default:
        throw new RangeError("Matrix must be a vector or two dimensional (size: " + Le(f) + ")");
    }
    return c;
  }
  function r(u, f, c) {
    for (var h = u._data, s = [], o, l = 0; l < c; l++) {
      o = s[l] = [];
      for (var v = 0; v < f; v++)
        o[v] = Fe(h[v][l]);
    }
    return u.createDenseMatrix({
      data: s,
      size: [c, f],
      datatype: u._datatype
    });
  }
  function a(u, f, c) {
    for (var h = u._values, s = u._index, o = u._ptr, l = h ? [] : void 0, v = [], g = [], p = [], m = 0; m < f; m++)
      p[m] = 0;
    var d, y, D;
    for (d = 0, y = s.length; d < y; d++)
      p[s[d]]++;
    for (var A = 0, E = 0; E < f; E++)
      g.push(A), A += p[E], p[E] = g[E];
    for (g.push(A), D = 0; D < c; D++)
      for (var w = o[D], F = o[D + 1], b = w; b < F; b++) {
        var C = p[s[b]]++;
        v[C] = D, h && (l[C] = Fe(h[b]));
      }
    return u.createSparseMatrix({
      values: l,
      index: v,
      ptr: g,
      size: [c, f],
      datatype: u._datatype
    });
  }
}), jn = "ctranspose", Ic = ["typed", "transpose", "conj"], Lc = /* @__PURE__ */ ee(jn, Ic, (e) => {
  var {
    typed: i,
    transpose: t,
    conj: n
  } = e;
  return i(jn, {
    any: function(a) {
      return n(t(a));
    }
  });
}), ei = "zeros", Oc = ["typed", "config", "matrix", "BigNumber"], qc = /* @__PURE__ */ ee(ei, Oc, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    BigNumber: r
  } = e;
  return i(ei, {
    "": function() {
      return t.matrix === "Array" ? a([]) : a([], "default");
    },
    // math.zeros(m, n, p, ..., format)
    // TODO: more accurate signature '...number | BigNumber, string' as soon as typed-function supports this
    "...number | BigNumber | string": function(h) {
      var s = h[h.length - 1];
      if (typeof s == "string") {
        var o = h.pop();
        return a(h, o);
      } else
        return t.matrix === "Array" ? a(h) : a(h, "default");
    },
    Array: a,
    Matrix: function(h) {
      var s = h.storage();
      return a(h.valueOf(), s);
    },
    "Array | Matrix, string": function(h, s) {
      return a(h.valueOf(), s);
    }
  });
  function a(c, h) {
    var s = u(c), o = s ? new r(0) : 0;
    if (f(c), h) {
      var l = n(h);
      return c.length > 0 ? l.resize(c, o) : l;
    } else {
      var v = [];
      return c.length > 0 ? vt(v, c, o) : v;
    }
  }
  function u(c) {
    var h = !1;
    return c.forEach(function(s, o, l) {
      Re(s) && (h = !0, l[o] = s.toNumber());
    }), h;
  }
  function f(c) {
    c.forEach(function(h) {
      if (typeof h != "number" || !ze(h) || h < 0)
        throw new Error("Parameters in function zeros must be positive integers");
    });
  }
}), $c = "numeric", Pc = ["number", "?bignumber", "?fraction"], Rc = /* @__PURE__ */ ee($c, Pc, (e) => {
  var {
    number: i,
    bignumber: t,
    fraction: n
  } = e, r = {
    string: !0,
    number: !0,
    BigNumber: !0,
    Fraction: !0
  }, a = {
    number: (u) => i(u),
    BigNumber: t ? (u) => t(u) : Da,
    Fraction: n ? (u) => n(u) : Dc
  };
  return function(f) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number", h = arguments.length > 2 ? arguments[2] : void 0;
    if (h !== void 0)
      throw new SyntaxError("numeric() takes one or two arguments");
    var s = lr(f);
    if (!(s in r))
      throw new TypeError("Cannot convert " + f + ' of type "' + s + '"; valid input types are ' + Object.keys(r).join(", "));
    if (!(c in a))
      throw new TypeError("Cannot convert " + f + ' to type "' + c + '"; valid output types are ' + Object.keys(a).join(", "));
    return c === s ? f : a[c](f);
  };
}), ri = "divideScalar", Uc = ["typed", "numeric"], Vc = /* @__PURE__ */ ee(ri, Uc, (e) => {
  var {
    typed: i,
    numeric: t
  } = e;
  return i(ri, {
    "number, number": function(r, a) {
      return r / a;
    },
    "Complex, Complex": function(r, a) {
      return r.div(a);
    },
    "BigNumber, BigNumber": function(r, a) {
      return r.div(a);
    },
    "Fraction, Fraction": function(r, a) {
      return r.div(a);
    },
    "Unit, number | Complex | Fraction | BigNumber | Unit": (n, r) => n.divide(r),
    "number | Fraction | Complex | BigNumber, Unit": (n, r) => r.divideInto(n)
  });
}), ti = "pow", Gc = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], Zc = /* @__PURE__ */ ee(ti, Gc, (e) => {
  var {
    typed: i,
    config: t,
    identity: n,
    multiply: r,
    matrix: a,
    inv: u,
    number: f,
    fraction: c,
    Complex: h
  } = e;
  return i(ti, {
    "number, number": s,
    "Complex, Complex": function(g, p) {
      return g.pow(p);
    },
    "BigNumber, BigNumber": function(g, p) {
      return p.isInteger() || g >= 0 || t.predictable ? g.pow(p) : new h(g.toNumber(), 0).pow(p.toNumber(), 0);
    },
    "Fraction, Fraction": function(g, p) {
      var m = g.pow(p);
      if (m != null)
        return m;
      if (t.predictable)
        throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");
      return s(g.valueOf(), p.valueOf());
    },
    "Array, number": o,
    "Array, BigNumber": function(g, p) {
      return o(g, p.toNumber());
    },
    "Matrix, number": l,
    "Matrix, BigNumber": function(g, p) {
      return l(g, p.toNumber());
    },
    "Unit, number | BigNumber": function(g, p) {
      return g.pow(p);
    }
  });
  function s(v, g) {
    if (t.predictable && !ze(g) && v < 0)
      try {
        var p = c(g), m = f(p);
        if ((g === m || Math.abs((g - m) / g) < 1e-14) && p.d % 2 === 1)
          return (p.n % 2 === 0 ? 1 : -1) * Math.pow(-v, g);
      } catch {
      }
    return t.predictable && (v < -1 && g === 1 / 0 || v > -1 && v < 0 && g === -1 / 0) ? NaN : ze(g) || v >= 0 || t.predictable ? la(v, g) : v * v < 1 && g === 1 / 0 || v * v > 1 && g === -1 / 0 ? 0 : new h(v, 0).pow(g, 0);
  }
  function o(v, g) {
    if (!ze(g))
      throw new TypeError("For A^b, b must be an integer (value is " + g + ")");
    var p = $e(v);
    if (p.length !== 2)
      throw new Error("For A^b, A must be 2 dimensional (A has " + p.length + " dimensions)");
    if (p[0] !== p[1])
      throw new Error("For A^b, A must be square (size is " + p[0] + "x" + p[1] + ")");
    if (g < 0)
      try {
        return o(u(v), -g);
      } catch (y) {
        throw y.message === "Cannot calculate inverse, determinant is zero" ? new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + g + ")") : y;
      }
    for (var m = n(p[0]).valueOf(), d = v; g >= 1; )
      (g & 1) === 1 && (m = r(d, m)), g >>= 1, d = r(d, d);
    return m;
  }
  function l(v, g) {
    return a(o(v.valueOf(), g));
  }
});
function zt(e) {
  var {
    DenseMatrix: i
  } = e;
  return function(n, r, a) {
    var u = n.size();
    if (u.length !== 2)
      throw new RangeError("Matrix must be two dimensional (size: " + Le(u) + ")");
    var f = u[0], c = u[1];
    if (f !== c)
      throw new RangeError("Matrix must be square (size: " + Le(u) + ")");
    var h = [];
    if (_e(r)) {
      var s = r.size(), o = r._data;
      if (s.length === 1) {
        if (s[0] !== f)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var l = 0; l < f; l++)
          h[l] = [o[l]];
        return new i({
          data: h,
          size: [f, 1],
          datatype: r._datatype
        });
      }
      if (s.length === 2) {
        if (s[0] !== f || s[1] !== 1)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        if (Mi(r)) {
          if (a) {
            h = [];
            for (var v = 0; v < f; v++)
              h[v] = [o[v][0]];
            return new i({
              data: h,
              size: [f, 1],
              datatype: r._datatype
            });
          }
          return r;
        }
        if (Si(r)) {
          for (var g = 0; g < f; g++)
            h[g] = [0];
          for (var p = r._values, m = r._index, d = r._ptr, y = d[1], D = d[0]; D < y; D++) {
            var A = m[D];
            h[A][0] = p[D];
          }
          return new i({
            data: h,
            size: [f, 1],
            datatype: r._datatype
          });
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
    if (Me(r)) {
      var E = $e(r);
      if (E.length === 1) {
        if (E[0] !== f)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var w = 0; w < f; w++)
          h[w] = [r[w]];
        return new i({
          data: h,
          size: [f, 1]
        });
      }
      if (E.length === 2) {
        if (E[0] !== f || E[1] !== 1)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var F = 0; F < f; F++)
          h[F] = [r[F][0]];
        return new i({
          data: h,
          size: [f, 1]
        });
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
  };
}
var ni = "lsolve", Yc = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Jc = /* @__PURE__ */ ee(ni, Yc, (e) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    multiplyScalar: r,
    subtractScalar: a,
    equalScalar: u,
    DenseMatrix: f
  } = e, c = zt({
    DenseMatrix: f
  });
  return i(ni, {
    "SparseMatrix, Array | Matrix": function(l, v) {
      return s(l, v);
    },
    "DenseMatrix, Array | Matrix": function(l, v) {
      return h(l, v);
    },
    "Array, Array | Matrix": function(l, v) {
      var g = t(l), p = h(g, v);
      return p.valueOf();
    }
  });
  function h(o, l) {
    l = c(o, l, !0);
    for (var v = l._data, g = o._size[0], p = o._size[1], m = [], d = o._data, y = 0; y < p; y++) {
      var D = v[y][0] || 0, A = void 0;
      if (u(D, 0))
        A = 0;
      else {
        var E = d[y][y];
        if (u(E, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        A = n(D, E);
        for (var w = y + 1; w < g; w++)
          v[w] = [a(v[w][0] || 0, r(A, d[w][y]))];
      }
      m[y] = [A];
    }
    return new f({
      data: m,
      size: [g, 1]
    });
  }
  function s(o, l) {
    l = c(o, l, !0);
    for (var v = l._data, g = o._size[0], p = o._size[1], m = o._values, d = o._index, y = o._ptr, D = [], A = 0; A < p; A++) {
      var E = v[A][0] || 0;
      if (u(E, 0))
        D[A] = [0];
      else {
        for (var w = 0, F = [], b = [], C = y[A], S = y[A + 1], M = C; M < S; M++) {
          var B = d[M];
          B === A ? w = m[M] : B > A && (F.push(m[M]), b.push(B));
        }
        if (u(w, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        for (var I = n(E, w), T = 0, L = b.length; T < L; T++) {
          var x = b[T];
          v[x] = [a(v[x][0] || 0, r(I, F[T]))];
        }
        D[A] = [I];
      }
    }
    return new f({
      data: D,
      size: [g, 1]
    });
  }
}), ii = "usolve", Qc = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Xc = /* @__PURE__ */ ee(ii, Qc, (e) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    multiplyScalar: r,
    subtractScalar: a,
    equalScalar: u,
    DenseMatrix: f
  } = e, c = zt({
    DenseMatrix: f
  });
  return i(ii, {
    "SparseMatrix, Array | Matrix": function(l, v) {
      return s(l, v);
    },
    "DenseMatrix, Array | Matrix": function(l, v) {
      return h(l, v);
    },
    "Array, Array | Matrix": function(l, v) {
      var g = t(l), p = h(g, v);
      return p.valueOf();
    }
  });
  function h(o, l) {
    l = c(o, l, !0);
    for (var v = l._data, g = o._size[0], p = o._size[1], m = [], d = o._data, y = p - 1; y >= 0; y--) {
      var D = v[y][0] || 0, A = void 0;
      if (u(D, 0))
        A = 0;
      else {
        var E = d[y][y];
        if (u(E, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        A = n(D, E);
        for (var w = y - 1; w >= 0; w--)
          v[w] = [a(v[w][0] || 0, r(A, d[w][y]))];
      }
      m[y] = [A];
    }
    return new f({
      data: m,
      size: [g, 1]
    });
  }
  function s(o, l) {
    l = c(o, l, !0);
    for (var v = l._data, g = o._size[0], p = o._size[1], m = o._values, d = o._index, y = o._ptr, D = [], A = p - 1; A >= 0; A--) {
      var E = v[A][0] || 0;
      if (u(E, 0))
        D[A] = [0];
      else {
        for (var w = 0, F = [], b = [], C = y[A], S = y[A + 1], M = S - 1; M >= C; M--) {
          var B = d[M];
          B === A ? w = m[M] : B < A && (F.push(m[M]), b.push(B));
        }
        if (u(w, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        for (var I = n(E, w), T = 0, L = b.length; T < L; T++) {
          var x = b[T];
          v[x] = [a(v[x][0], r(I, F[T]))];
        }
        D[A] = [I];
      }
    }
    return new f({
      data: D,
      size: [g, 1]
    });
  }
}), ai = "usolveAll", Hc = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Kc = /* @__PURE__ */ ee(ai, Hc, (e) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    multiplyScalar: r,
    subtractScalar: a,
    equalScalar: u,
    DenseMatrix: f
  } = e, c = zt({
    DenseMatrix: f
  });
  return i(ai, {
    "SparseMatrix, Array | Matrix": function(l, v) {
      return s(l, v);
    },
    "DenseMatrix, Array | Matrix": function(l, v) {
      return h(l, v);
    },
    "Array, Array | Matrix": function(l, v) {
      var g = t(l), p = h(g, v);
      return p.map((m) => m.valueOf());
    }
  });
  function h(o, l) {
    for (var v = [c(o, l, !0)._data.map((b) => b[0])], g = o._data, p = o._size[0], m = o._size[1], d = m - 1; d >= 0; d--)
      for (var y = v.length, D = 0; D < y; D++) {
        var A = v[D];
        if (u(g[d][d], 0))
          if (u(A[d], 0)) {
            if (D === 0) {
              var w = [...A];
              w[d] = 1;
              for (var F = d - 1; F >= 0; F--)
                w[F] = a(w[F], g[F][d]);
              v.push(w);
            }
          } else {
            if (D === 0)
              return [];
            v.splice(D, 1), D -= 1, y -= 1;
          }
        else {
          A[d] = n(A[d], g[d][d]);
          for (var E = d - 1; E >= 0; E--)
            A[E] = a(A[E], r(A[d], g[E][d]));
        }
      }
    return v.map((b) => new f({
      data: b.map((C) => [C]),
      size: [p, 1]
    }));
  }
  function s(o, l) {
    for (var v = [c(o, l, !0)._data.map((K) => K[0])], g = o._size[0], p = o._size[1], m = o._values, d = o._index, y = o._ptr, D = p - 1; D >= 0; D--)
      for (var A = v.length, E = 0; E < A; E++) {
        for (var w = v[E], F = [], b = [], C = y[D], S = y[D + 1], M = 0, B = S - 1; B >= C; B--) {
          var I = d[B];
          I === D ? M = m[B] : I < D && (F.push(m[B]), b.push(I));
        }
        if (u(M, 0))
          if (u(w[D], 0)) {
            if (E === 0) {
              var Z = [...w];
              Z[D] = 1;
              for (var q = 0, z = b.length; q < z; q++) {
                var V = b[q];
                Z[V] = a(Z[V], F[q]);
              }
              v.push(Z);
            }
          } else {
            if (E === 0)
              return [];
            v.splice(E, 1), E -= 1, A -= 1;
          }
        else {
          w[D] = n(w[D], M);
          for (var T = 0, L = b.length; T < L; T++) {
            var x = b[T];
            w[x] = a(w[x], r(w[D], F[T]));
          }
        }
      }
    return v.map((K) => new f({
      data: K.map((P) => [P]),
      size: [g, 1]
    }));
  }
}), wt = "equal", Wc = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], kc = /* @__PURE__ */ ee(wt, Wc, (e) => {
  var {
    typed: i,
    matrix: t,
    equalScalar: n,
    DenseMatrix: r,
    concat: a
  } = e, u = Vr({
    typed: i
  }), f = jr({
    typed: i,
    DenseMatrix: r
  }), c = Ur({
    typed: i,
    DenseMatrix: r
  }), h = Br({
    typed: i,
    matrix: t,
    concat: a
  });
  return i(wt, jc({
    typed: i,
    equalScalar: n
  }), h({
    elop: n,
    SS: f,
    DS: u,
    Ss: c
  }));
}), jc = ee(wt, ["typed", "equalScalar"], (e) => {
  var {
    typed: i,
    equalScalar: t
  } = e;
  return i(wt, {
    "any, any": function(r, a) {
      return r === null ? a === null : a === null ? r === null : r === void 0 ? a === void 0 : a === void 0 ? r === void 0 : t(r, a);
    }
  });
}), yt = "smaller", el = ["typed", "config", "matrix", "DenseMatrix", "concat"], rl = /* @__PURE__ */ ee(yt, el, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: r,
    concat: a
  } = e, u = Vr({
    typed: i
  }), f = jr({
    typed: i,
    DenseMatrix: r
  }), c = Ur({
    typed: i,
    DenseMatrix: r
  }), h = Br({
    typed: i,
    matrix: n,
    concat: a
  }), s = kr({
    typed: i
  });
  return i(yt, tl({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, l) => o < l,
    "BigNumber, BigNumber": function(l, v) {
      return l.lt(v) && !Wr(l, v, t.epsilon);
    },
    "Fraction, Fraction": (o, l) => o.compare(l) === -1,
    "Complex, Complex": function(l, v) {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: f,
    DS: u,
    Ss: c
  }));
}), tl = /* @__PURE__ */ ee(yt, ["typed", "config"], (e) => {
  var {
    typed: i,
    config: t
  } = e;
  return i(yt, {
    "number, number": function(r, a) {
      return r < a && !yr(r, a, t.epsilon);
    }
  });
}), At = "smallerEq", nl = ["typed", "config", "matrix", "DenseMatrix", "concat"], il = /* @__PURE__ */ ee(At, nl, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: r,
    concat: a
  } = e, u = Vr({
    typed: i
  }), f = jr({
    typed: i,
    DenseMatrix: r
  }), c = Ur({
    typed: i,
    DenseMatrix: r
  }), h = Br({
    typed: i,
    matrix: n,
    concat: a
  }), s = kr({
    typed: i
  });
  return i(At, al({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, l) => o <= l,
    "BigNumber, BigNumber": function(l, v) {
      return l.lte(v) || Wr(l, v, t.epsilon);
    },
    "Fraction, Fraction": (o, l) => o.compare(l) !== 1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: f,
    DS: u,
    Ss: c
  }));
}), al = /* @__PURE__ */ ee(At, ["typed", "config"], (e) => {
  var {
    typed: i,
    config: t
  } = e;
  return i(At, {
    "number, number": function(r, a) {
      return r <= a || yr(r, a, t.epsilon);
    }
  });
}), Et = "larger", ul = ["typed", "config", "matrix", "DenseMatrix", "concat"], ol = /* @__PURE__ */ ee(Et, ul, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: r,
    concat: a
  } = e, u = Vr({
    typed: i
  }), f = jr({
    typed: i,
    DenseMatrix: r
  }), c = Ur({
    typed: i,
    DenseMatrix: r
  }), h = Br({
    typed: i,
    matrix: n,
    concat: a
  }), s = kr({
    typed: i
  });
  return i(Et, sl({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, l) => o > l,
    "BigNumber, BigNumber": function(l, v) {
      return l.gt(v) && !Wr(l, v, t.epsilon);
    },
    "Fraction, Fraction": (o, l) => o.compare(l) === 1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: f,
    DS: u,
    Ss: c
  }));
}), sl = /* @__PURE__ */ ee(Et, ["typed", "config"], (e) => {
  var {
    typed: i,
    config: t
  } = e;
  return i(Et, {
    "number, number": function(r, a) {
      return r > a && !yr(r, a, t.epsilon);
    }
  });
}), Ct = "largerEq", fl = ["typed", "config", "matrix", "DenseMatrix", "concat"], cl = /* @__PURE__ */ ee(Ct, fl, (e) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: r,
    concat: a
  } = e, u = Vr({
    typed: i
  }), f = jr({
    typed: i,
    DenseMatrix: r
  }), c = Ur({
    typed: i,
    DenseMatrix: r
  }), h = Br({
    typed: i,
    matrix: n,
    concat: a
  }), s = kr({
    typed: i
  });
  return i(Ct, ll({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, l) => o >= l,
    "BigNumber, BigNumber": function(l, v) {
      return l.gte(v) || Wr(l, v, t.epsilon);
    },
    "Fraction, Fraction": (o, l) => o.compare(l) !== -1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: f,
    DS: u,
    Ss: c
  }));
}), ll = /* @__PURE__ */ ee(Ct, ["typed", "config"], (e) => {
  var {
    typed: i,
    config: t
  } = e;
  return i(Ct, {
    "number, number": function(r, a) {
      return r >= a || yr(r, a, t.epsilon);
    }
  });
}), hl = "ImmutableDenseMatrix", vl = ["smaller", "DenseMatrix"], pl = /* @__PURE__ */ ee(hl, vl, (e) => {
  var {
    smaller: i,
    DenseMatrix: t
  } = e;
  function n(r, a) {
    if (!(this instanceof n))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (a && !ir(a))
      throw new Error("Invalid datatype: " + a);
    if (_e(r) || Me(r)) {
      var u = new t(r, a);
      this._data = u._data, this._size = u._size, this._datatype = u._datatype, this._min = null, this._max = null;
    } else if (r && Me(r.data) && Me(r.size))
      this._data = r.data, this._size = r.size, this._datatype = r.datatype, this._min = typeof r.min < "u" ? r.min : null, this._max = typeof r.max < "u" ? r.max : null;
    else {
      if (r)
        throw new TypeError("Unsupported type of data (" + lr(r) + ")");
      this._data = [], this._size = [0], this._datatype = a, this._min = null, this._max = null;
    }
  }
  return n.prototype = new t(), n.prototype.type = "ImmutableDenseMatrix", n.prototype.isImmutableDenseMatrix = !0, n.prototype.subset = function(r) {
    switch (arguments.length) {
      case 1: {
        var a = t.prototype.subset.call(this, r);
        return _e(a) ? new n({
          data: a._data,
          size: a._size,
          datatype: a._datatype
        }) : a;
      }
      case 2:
      case 3:
        throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, n.prototype.set = function() {
    throw new Error("Cannot invoke set on an Immutable Matrix instance");
  }, n.prototype.resize = function() {
    throw new Error("Cannot invoke resize on an Immutable Matrix instance");
  }, n.prototype.reshape = function() {
    throw new Error("Cannot invoke reshape on an Immutable Matrix instance");
  }, n.prototype.clone = function() {
    return new n({
      data: Fe(this._data),
      size: Fe(this._size),
      datatype: this._datatype
    });
  }, n.prototype.toJSON = function() {
    return {
      mathjs: "ImmutableDenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  }, n.fromJSON = function(r) {
    return new n(r);
  }, n.prototype.swapRows = function() {
    throw new Error("Cannot invoke swapRows on an Immutable Matrix instance");
  }, n.prototype.min = function() {
    if (this._min === null) {
      var r = null;
      this.forEach(function(a) {
        (r === null || i(a, r)) && (r = a);
      }), this._min = r !== null ? r : void 0;
    }
    return this._min;
  }, n.prototype.max = function() {
    if (this._max === null) {
      var r = null;
      this.forEach(function(a) {
        (r === null || i(r, a)) && (r = a);
      }), this._max = r !== null ? r : void 0;
    }
    return this._max;
  }, n;
}, {
  isClass: !0
}), dl = "Index", ml = ["ImmutableDenseMatrix", "getMatrixDataType"], gl = /* @__PURE__ */ ee(dl, ml, (e) => {
  var {
    ImmutableDenseMatrix: i,
    getMatrixDataType: t
  } = e;
  function n(a) {
    if (!(this instanceof n))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._dimensions = [], this._sourceSize = [], this._isScalar = !0;
    for (var u = 0, f = arguments.length; u < f; u++) {
      var c = arguments[u], h = Me(c), s = _e(c), o = null;
      if (Bi(c))
        this._dimensions.push(c), this._isScalar = !1;
      else if (h || s) {
        var l = void 0;
        t(c) === "boolean" ? (h && (l = r(ui(c).valueOf())), s && (l = r(ui(c._data).valueOf())), o = c.valueOf().length) : l = r(c.valueOf()), this._dimensions.push(l);
        var v = l.size();
        (v.length !== 1 || v[0] !== 1 || o !== null) && (this._isScalar = !1);
      } else if (typeof c == "number")
        this._dimensions.push(r([c]));
      else if (typeof c == "string")
        this._dimensions.push(c);
      else
        throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
      this._sourceSize.push(o);
    }
  }
  n.prototype.type = "Index", n.prototype.isIndex = !0;
  function r(a) {
    for (var u = 0, f = a.length; u < f; u++)
      if (typeof a[u] != "number" || !ze(a[u]))
        throw new TypeError("Index parameters must be positive integer numbers");
    return new i(a);
  }
  return n.prototype.clone = function() {
    var a = new n();
    return a._dimensions = Fe(this._dimensions), a._isScalar = this._isScalar, a._sourceSize = this._sourceSize, a;
  }, n.create = function(a) {
    var u = new n();
    return n.apply(u, a), u;
  }, n.prototype.size = function() {
    for (var a = [], u = 0, f = this._dimensions.length; u < f; u++) {
      var c = this._dimensions[u];
      a[u] = typeof c == "string" ? 1 : c.size()[0];
    }
    return a;
  }, n.prototype.max = function() {
    for (var a = [], u = 0, f = this._dimensions.length; u < f; u++) {
      var c = this._dimensions[u];
      a[u] = typeof c == "string" ? c : c.max();
    }
    return a;
  }, n.prototype.min = function() {
    for (var a = [], u = 0, f = this._dimensions.length; u < f; u++) {
      var c = this._dimensions[u];
      a[u] = typeof c == "string" ? c : c.min();
    }
    return a;
  }, n.prototype.forEach = function(a) {
    for (var u = 0, f = this._dimensions.length; u < f; u++)
      a(this._dimensions[u], u, this);
  }, n.prototype.dimension = function(a) {
    return this._dimensions[a] || null;
  }, n.prototype.isObjectProperty = function() {
    return this._dimensions.length === 1 && typeof this._dimensions[0] == "string";
  }, n.prototype.getObjectProperty = function() {
    return this.isObjectProperty() ? this._dimensions[0] : null;
  }, n.prototype.isScalar = function() {
    return this._isScalar;
  }, n.prototype.toArray = function() {
    for (var a = [], u = 0, f = this._dimensions.length; u < f; u++) {
      var c = this._dimensions[u];
      a.push(typeof c == "string" ? c : c.toArray());
    }
    return a;
  }, n.prototype.valueOf = n.prototype.toArray, n.prototype.toString = function() {
    for (var a = [], u = 0, f = this._dimensions.length; u < f; u++) {
      var c = this._dimensions[u];
      typeof c == "string" ? a.push(JSON.stringify(c)) : a.push(c.toString());
    }
    return "[" + a.join(", ") + "]";
  }, n.prototype.toJSON = function() {
    return {
      mathjs: "Index",
      dimensions: this._dimensions
    };
  }, n.fromJSON = function(a) {
    return n.create(a.dimensions);
  }, n;
}, {
  isClass: !0
});
function ui(e) {
  var i = [];
  return e.forEach((t, n) => {
    t && i.push(n);
  }), i;
}
var Dl = "FibonacciHeap", wl = ["smaller", "larger"], yl = /* @__PURE__ */ ee(Dl, wl, (e) => {
  var {
    smaller: i,
    larger: t
  } = e, n = 1 / Math.log((1 + Math.sqrt(5)) / 2);
  function r() {
    if (!(this instanceof r))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._minimum = null, this._size = 0;
  }
  r.prototype.type = "FibonacciHeap", r.prototype.isFibonacciHeap = !0, r.prototype.insert = function(s, o) {
    var l = {
      key: s,
      value: o,
      degree: 0
    };
    if (this._minimum) {
      var v = this._minimum;
      l.left = v, l.right = v.right, v.right = l, l.right.left = l, i(s, v.key) && (this._minimum = l);
    } else
      l.left = l, l.right = l, this._minimum = l;
    return this._size++, l;
  }, r.prototype.size = function() {
    return this._size;
  }, r.prototype.clear = function() {
    this._minimum = null, this._size = 0;
  }, r.prototype.isEmpty = function() {
    return this._size === 0;
  }, r.prototype.extractMinimum = function() {
    var s = this._minimum;
    if (s === null)
      return s;
    for (var o = this._minimum, l = s.degree, v = s.child; l > 0; ) {
      var g = v.right;
      v.left.right = v.right, v.right.left = v.left, v.left = o, v.right = o.right, o.right = v, v.right.left = v, v.parent = null, v = g, l--;
    }
    return s.left.right = s.right, s.right.left = s.left, s === s.right ? o = null : (o = s.right, o = h(o, this._size)), this._size--, this._minimum = o, s;
  }, r.prototype.remove = function(s) {
    this._minimum = a(this._minimum, s, -1), this.extractMinimum();
  };
  function a(s, o, l) {
    o.key = l;
    var v = o.parent;
    return v && i(o.key, v.key) && (u(s, o, v), f(s, v)), i(o.key, s.key) && (s = o), s;
  }
  function u(s, o, l) {
    o.left.right = o.right, o.right.left = o.left, l.degree--, l.child === o && (l.child = o.right), l.degree === 0 && (l.child = null), o.left = s, o.right = s.right, s.right = o, o.right.left = o, o.parent = null, o.mark = !1;
  }
  function f(s, o) {
    var l = o.parent;
    l && (o.mark ? (u(s, o, l), f(l)) : o.mark = !0);
  }
  var c = function(o, l) {
    o.left.right = o.right, o.right.left = o.left, o.parent = l, l.child ? (o.left = l.child, o.right = l.child.right, l.child.right = o, o.right.left = o) : (l.child = o, o.right = o, o.left = o), l.degree++, o.mark = !1;
  };
  function h(s, o) {
    var l = Math.floor(Math.log(o) * n) + 1, v = new Array(l), g = 0, p = s;
    if (p)
      for (g++, p = p.right; p !== s; )
        g++, p = p.right;
    for (var m; g > 0; ) {
      for (var d = p.degree, y = p.right; m = v[d], !!m; ) {
        if (t(p.key, m.key)) {
          var D = m;
          m = p, p = D;
        }
        c(m, p), v[d] = null, d++;
      }
      v[d] = p, p = y, g--;
    }
    s = null;
    for (var A = 0; A < l; A++)
      m = v[A], m && (s ? (m.left.right = m.right, m.right.left = m.left, m.left = s, m.right = s.right, s.right = m, m.right.left = m, i(m.key, s.key) && (s = m)) : s = m);
    return s;
  }
  return r;
}, {
  isClass: !0
}), Al = "Spa", El = ["addScalar", "equalScalar", "FibonacciHeap"], Cl = /* @__PURE__ */ ee(Al, El, (e) => {
  var {
    addScalar: i,
    equalScalar: t,
    FibonacciHeap: n
  } = e;
  function r() {
    if (!(this instanceof r))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._values = [], this._heap = new n();
  }
  return r.prototype.type = "Spa", r.prototype.isSpa = !0, r.prototype.set = function(a, u) {
    if (this._values[a])
      this._values[a].value = u;
    else {
      var f = this._heap.insert(a, u);
      this._values[a] = f;
    }
  }, r.prototype.get = function(a) {
    var u = this._values[a];
    return u ? u.value : 0;
  }, r.prototype.accumulate = function(a, u) {
    var f = this._values[a];
    f ? f.value = i(f.value, u) : (f = this._heap.insert(a, u), this._values[a] = f);
  }, r.prototype.forEach = function(a, u, f) {
    var c = this._heap, h = this._values, s = [], o = c.extractMinimum();
    for (o && s.push(o); o && o.key <= u; )
      o.key >= a && (t(o.value, 0) || f(o.key, o.value, this)), o = c.extractMinimum(), o && s.push(o);
    for (var l = 0; l < s.length; l++) {
      var v = s[l];
      o = c.insert(v.key, v.value), h[o.key] = o;
    }
  }, r.prototype.swap = function(a, u) {
    var f = this._values[a], c = this._values[u];
    if (!f && c)
      f = this._heap.insert(a, c.value), this._heap.remove(c), this._values[a] = f, this._values[u] = void 0;
    else if (f && !c)
      c = this._heap.insert(u, f.value), this._heap.remove(f), this._values[u] = c, this._values[a] = void 0;
    else if (f && c) {
      var h = f.value;
      f.value = c.value, c.value = h;
    }
  }, r;
}, {
  isClass: !0
}), Fl = "atan", bl = ["typed"], Ml = /* @__PURE__ */ ee(Fl, bl, (e) => {
  var {
    typed: i
  } = e;
  return i("atan", {
    number: function(n) {
      return Math.atan(n);
    },
    Complex: function(n) {
      return n.atan();
    },
    BigNumber: function(n) {
      return n.atan();
    }
  });
}), ya = /* @__PURE__ */ ee("trigUnit", ["typed"], (e) => {
  var {
    typed: i
  } = e;
  return {
    Unit: i.referToSelf((t) => (n) => {
      if (!n.hasBase(n.constructor.BASE_UNITS.ANGLE))
        throw new TypeError("Unit in function cot is no angle");
      return i.find(t, n.valueType())(n.value);
    })
  };
}), oi = "cos", Sl = ["typed"], Bl = /* @__PURE__ */ ee(oi, Sl, (e) => {
  var {
    typed: i
  } = e, t = ya({
    typed: i
  });
  return i(oi, {
    number: Math.cos,
    "Complex | BigNumber": (n) => n.cos()
  }, t);
}), si = "sin", Nl = ["typed"], xl = /* @__PURE__ */ ee(si, Nl, (e) => {
  var {
    typed: i
  } = e, t = ya({
    typed: i
  });
  return i(si, {
    number: Math.sin,
    "Complex | BigNumber": (n) => n.sin()
  }, t);
}), fi = "add", _l = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"], zl = /* @__PURE__ */ ee(fi, _l, (e) => {
  var {
    typed: i,
    matrix: t,
    addScalar: n,
    equalScalar: r,
    DenseMatrix: a,
    SparseMatrix: u,
    concat: f
  } = e, c = ma({
    typed: i
  }), h = qf({
    typed: i,
    equalScalar: r
  }), s = ga({
    typed: i,
    DenseMatrix: a
  }), o = Br({
    typed: i,
    matrix: t,
    concat: f
  });
  return i(fi, {
    "any, any": n,
    "any, any, ...any": i.referToSelf((l) => (v, g, p) => {
      for (var m = l(v, g), d = 0; d < p.length; d++)
        m = l(m, p[d]);
      return m;
    })
  }, o({
    elop: n,
    DS: c,
    SS: h,
    Ss: s
  }));
}), ci = "norm", Tl = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], Il = /* @__PURE__ */ ee(ci, Tl, (e) => {
  var {
    typed: i,
    abs: t,
    add: n,
    pow: r,
    conj: a,
    sqrt: u,
    multiply: f,
    equalScalar: c,
    larger: h,
    smaller: s,
    matrix: o,
    ctranspose: l,
    eigs: v
  } = e;
  return i(ci, {
    number: Math.abs,
    Complex: function(b) {
      return b.abs();
    },
    BigNumber: function(b) {
      return b.abs();
    },
    boolean: function(b) {
      return Math.abs(b);
    },
    Array: function(b) {
      return w(o(b), 2);
    },
    Matrix: function(b) {
      return w(b, 2);
    },
    "Array, number | BigNumber | string": function(b, C) {
      return w(o(b), C);
    },
    "Matrix, number | BigNumber | string": function(b, C) {
      return w(b, C);
    }
  });
  function g(F) {
    var b = 0;
    return F.forEach(function(C) {
      var S = t(C);
      h(S, b) && (b = S);
    }, !0), b;
  }
  function p(F) {
    var b;
    return F.forEach(function(C) {
      var S = t(C);
      (!b || s(S, b)) && (b = S);
    }, !0), b || 0;
  }
  function m(F, b) {
    if (b === Number.POSITIVE_INFINITY || b === "inf")
      return g(F);
    if (b === Number.NEGATIVE_INFINITY || b === "-inf")
      return p(F);
    if (b === "fro")
      return w(F, 2);
    if (typeof b == "number" && !isNaN(b)) {
      if (!c(b, 0)) {
        var C = 0;
        return F.forEach(function(S) {
          C = n(r(t(S), b), C);
        }, !0), r(C, 1 / b);
      }
      return Number.POSITIVE_INFINITY;
    }
    throw new Error("Unsupported parameter value");
  }
  function d(F) {
    var b = 0;
    return F.forEach(function(C, S) {
      b = n(b, f(C, a(C)));
    }), t(u(b));
  }
  function y(F) {
    var b = [], C = 0;
    return F.forEach(function(S, M) {
      var B = M[1], I = n(b[B] || 0, t(S));
      h(I, C) && (C = I), b[B] = I;
    }, !0), C;
  }
  function D(F) {
    var b = F.size();
    if (b[0] !== b[1])
      throw new RangeError("Invalid matrix dimensions");
    var C = l(F), S = f(C, F), M = v(S).values.toArray(), B = M[M.length - 1];
    return t(u(B));
  }
  function A(F) {
    var b = [], C = 0;
    return F.forEach(function(S, M) {
      var B = M[0], I = n(b[B] || 0, t(S));
      h(I, C) && (C = I), b[B] = I;
    }, !0), C;
  }
  function E(F, b) {
    if (b === 1)
      return y(F);
    if (b === Number.POSITIVE_INFINITY || b === "inf")
      return A(F);
    if (b === "fro")
      return d(F);
    if (b === 2)
      return D(F);
    throw new Error("Unsupported parameter value " + b);
  }
  function w(F, b) {
    var C = F.size();
    if (C.length === 1)
      return m(F, b);
    if (C.length === 2) {
      if (C[0] && C[1])
        return E(F, b);
      throw new RangeError("Invalid matrix dimensions");
    }
  }
}), li = "dot", Ll = ["typed", "addScalar", "multiplyScalar", "conj", "size"], Ol = /* @__PURE__ */ ee(li, Ll, (e) => {
  var {
    typed: i,
    addScalar: t,
    multiplyScalar: n,
    conj: r,
    size: a
  } = e;
  return i(li, {
    "Array | DenseMatrix, Array | DenseMatrix": f,
    "SparseMatrix, SparseMatrix": c
  });
  function u(s, o) {
    var l = h(s), v = h(o), g, p;
    if (l.length === 1)
      g = l[0];
    else if (l.length === 2 && l[1] === 1)
      g = l[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + l.join(", ") + ")");
    if (v.length === 1)
      p = v[0];
    else if (v.length === 2 && v[1] === 1)
      p = v[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + v.join(", ") + ")");
    if (g !== p)
      throw new RangeError("Vectors must have equal length (" + g + " != " + p + ")");
    if (g === 0)
      throw new RangeError("Cannot calculate the dot product of empty vectors");
    return g;
  }
  function f(s, o) {
    var l = u(s, o), v = _e(s) ? s._data : s, g = _e(s) ? s._datatype : void 0, p = _e(o) ? o._data : o, m = _e(o) ? o._datatype : void 0, d = h(s).length === 2, y = h(o).length === 2, D = t, A = n;
    if (g && m && g === m && typeof g == "string") {
      var E = g;
      D = i.find(t, [E, E]), A = i.find(n, [E, E]);
    }
    if (!d && !y) {
      for (var w = A(r(v[0]), p[0]), F = 1; F < l; F++)
        w = D(w, A(r(v[F]), p[F]));
      return w;
    }
    if (!d && y) {
      for (var b = A(r(v[0]), p[0][0]), C = 1; C < l; C++)
        b = D(b, A(r(v[C]), p[C][0]));
      return b;
    }
    if (d && !y) {
      for (var S = A(r(v[0][0]), p[0]), M = 1; M < l; M++)
        S = D(S, A(r(v[M][0]), p[M]));
      return S;
    }
    if (d && y) {
      for (var B = A(r(v[0][0]), p[0][0]), I = 1; I < l; I++)
        B = D(B, A(r(v[I][0]), p[I][0]));
      return B;
    }
  }
  function c(s, o) {
    u(s, o);
    for (var l = s._index, v = s._values, g = o._index, p = o._values, m = 0, d = t, y = n, D = 0, A = 0; D < l.length && A < g.length; ) {
      var E = l[D], w = g[A];
      if (E < w) {
        D++;
        continue;
      }
      if (E > w) {
        A++;
        continue;
      }
      E === w && (m = d(m, y(v[D], p[A])), D++, A++);
    }
    return m;
  }
  function h(s) {
    return _e(s) ? s.size() : a(s);
  }
}), hi = "index", ql = ["typed", "Index"], $l = /* @__PURE__ */ ee(hi, ql, (e) => {
  var {
    typed: i,
    Index: t
  } = e;
  return i(hi, {
    "...number | string | BigNumber | Range | Array | Matrix": function(r) {
      var a = r.map(function(f) {
        return Re(f) ? f.toNumber() : Me(f) || _e(f) ? f.map(function(c) {
          return Re(c) ? c.toNumber() : c;
        }) : f;
      }), u = new t();
      return t.apply(u, a), u;
    }
  });
}), vi = "lup", Pl = ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"], Rl = /* @__PURE__ */ ee(vi, Pl, (e) => {
  var {
    typed: i,
    matrix: t,
    abs: n,
    addScalar: r,
    divideScalar: a,
    multiplyScalar: u,
    subtractScalar: f,
    larger: c,
    equalScalar: h,
    unaryMinus: s,
    DenseMatrix: o,
    SparseMatrix: l,
    Spa: v
  } = e;
  return i(vi, {
    DenseMatrix: function(d) {
      return g(d);
    },
    SparseMatrix: function(d) {
      return p(d);
    },
    Array: function(d) {
      var y = t(d), D = g(y);
      return {
        L: D.L.valueOf(),
        U: D.U.valueOf(),
        p: D.p
      };
    }
  });
  function g(m) {
    var d = m._size[0], y = m._size[1], D = Math.min(d, y), A = Fe(m._data), E = [], w = [d, D], F = [], b = [D, y], C, S, M, B = [];
    for (C = 0; C < d; C++)
      B[C] = C;
    for (S = 0; S < y; S++) {
      if (S > 0)
        for (C = 0; C < d; C++) {
          var I = Math.min(C, S), T = 0;
          for (M = 0; M < I; M++)
            T = r(T, u(A[C][M], A[M][S]));
          A[C][S] = f(A[C][S], T);
        }
      var L = S, x = 0, Z = 0;
      for (C = S; C < d; C++) {
        var q = A[C][S], z = n(q);
        c(z, x) && (L = C, x = z, Z = q);
      }
      if (S !== L && (B[S] = [B[L], B[L] = B[S]][0], o._swapRows(S, L, A)), S < d)
        for (C = S + 1; C < d; C++) {
          var V = A[C][S];
          h(V, 0) || (A[C][S] = a(A[C][S], Z));
        }
    }
    for (S = 0; S < y; S++)
      for (C = 0; C < d; C++) {
        if (S === 0 && (C < y && (F[C] = []), E[C] = []), C < S) {
          C < y && (F[C][S] = A[C][S]), S < d && (E[C][S] = 0);
          continue;
        }
        if (C === S) {
          C < y && (F[C][S] = A[C][S]), S < d && (E[C][S] = 1);
          continue;
        }
        C < y && (F[C][S] = 0), S < d && (E[C][S] = A[C][S]);
      }
    var K = new o({
      data: E,
      size: w
    }), P = new o({
      data: F,
      size: b
    }), $ = [];
    for (C = 0, D = B.length; C < D; C++)
      $[B[C]] = C;
    return {
      L: K,
      U: P,
      p: $,
      toString: function() {
        return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p;
      }
    };
  }
  function p(m) {
    var d = m._size[0], y = m._size[1], D = Math.min(d, y), A = m._values, E = m._index, w = m._ptr, F = [], b = [], C = [], S = [d, D], M = [], B = [], I = [], T = [D, y], L, x, Z, q = [], z = [];
    for (L = 0; L < d; L++)
      q[L] = L, z[L] = L;
    var V = function($, G) {
      var ne = z[$], k = z[G];
      q[ne] = G, q[k] = $, z[$] = k, z[G] = ne;
    }, K = function() {
      var $ = new v();
      x < d && (C.push(F.length), F.push(1), b.push(x)), I.push(M.length);
      var G = w[x], ne = w[x + 1];
      for (Z = G; Z < ne; Z++)
        L = E[Z], $.set(q[L], A[Z]);
      x > 0 && $.forEach(0, x - 1, function(X, J) {
        l._forEachRow(X, F, b, C, function(oe, j) {
          oe > X && $.accumulate(oe, s(u(j, J)));
        });
      });
      var k = x, U = $.get(x), Q = n(U);
      $.forEach(x + 1, d - 1, function(X, J) {
        var oe = n(J);
        c(oe, Q) && (k = X, Q = oe, U = J);
      }), x !== k && (l._swapRows(x, k, S[1], F, b, C), l._swapRows(x, k, T[1], M, B, I), $.swap(x, k), V(x, k)), $.forEach(0, d - 1, function(X, J) {
        X <= x ? (M.push(J), B.push(X)) : (J = a(J, U), h(J, 0) || (F.push(J), b.push(X)));
      });
    };
    for (x = 0; x < y; x++)
      K();
    return I.push(M.length), C.push(F.length), {
      L: new l({
        values: F,
        index: b,
        ptr: C,
        size: S
      }),
      U: new l({
        values: M,
        index: B,
        ptr: I,
        size: T
      }),
      p: q,
      toString: function() {
        return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p;
      }
    };
  }
}), pi = "qr", Ul = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"], Vl = /* @__PURE__ */ ee(pi, Ul, (e) => {
  var {
    typed: i,
    matrix: t,
    zeros: n,
    identity: r,
    isZero: a,
    equal: u,
    sign: f,
    sqrt: c,
    conj: h,
    unaryMinus: s,
    addScalar: o,
    divideScalar: l,
    multiplyScalar: v,
    subtractScalar: g,
    complex: p
  } = e;
  return Or(i(pi, {
    DenseMatrix: function(A) {
      return d(A);
    },
    SparseMatrix: function(A) {
      return y();
    },
    Array: function(A) {
      var E = t(A), w = d(E);
      return {
        Q: w.Q.valueOf(),
        R: w.R.valueOf()
      };
    }
  }), {
    _denseQRimpl: m
  });
  function m(D) {
    var A = D._size[0], E = D._size[1], w = r([A], "dense"), F = w._data, b = D.clone(), C = b._data, S, M, B, I = n([A], "");
    for (B = 0; B < Math.min(E, A); ++B) {
      var T = C[B][B], L = s(u(T, 0) ? 1 : f(T)), x = h(L), Z = 0;
      for (S = B; S < A; S++)
        Z = o(Z, v(C[S][B], h(C[S][B])));
      var q = v(L, c(Z));
      if (!a(q)) {
        var z = g(T, q);
        for (I[B] = 1, S = B + 1; S < A; S++)
          I[S] = l(C[S][B], z);
        var V = s(h(l(z, q))), K = void 0;
        for (M = B; M < E; M++) {
          for (K = 0, S = B; S < A; S++)
            K = o(K, v(h(I[S]), C[S][M]));
          for (K = v(K, V), S = B; S < A; S++)
            C[S][M] = v(g(C[S][M], v(I[S], K)), x);
        }
        for (S = 0; S < A; S++) {
          for (K = 0, M = B; M < A; M++)
            K = o(K, v(F[S][M], I[M]));
          for (K = v(K, V), M = B; M < A; ++M)
            F[S][M] = l(g(F[S][M], v(K, h(I[M]))), x);
        }
      }
    }
    return {
      Q: w,
      R: b,
      toString: function() {
        return "Q: " + this.Q.toString() + `
R: ` + this.R.toString();
      }
    };
  }
  function d(D) {
    var A = m(D), E = A.R._data;
    if (D._data.length > 0)
      for (var w = E[0][0].type === "Complex" ? p(0) : 0, F = 0; F < E.length; ++F)
        for (var b = 0; b < F && b < (E[0] || []).length; ++b)
          E[F][b] = w;
    return A;
  }
  function y(D) {
    throw new Error("qr not implemented for sparse matrices yet");
  }
});
function Gl(e, i, t, n) {
  for (var r = e._values, a = e._index, u = e._ptr, f = e._size, c = e._datatype, h = f[0], s = f[1], o = n && e._values ? [] : null, l = [], v = [], g = 0, p = 0; p < s; p++) {
    v[p] = g;
    for (var m = t ? t[p] : p, d = u[m], y = u[m + 1], D = d; D < y; D++) {
      var A = i ? i[a[D]] : a[D];
      l[g] = A, o && (o[g] = r[D]), g++;
    }
  }
  return v[s] = g, e.createSparseMatrix({
    values: o,
    index: l,
    ptr: v,
    size: [h, s],
    datatype: c
  });
}
function Aa(e, i, t, n, r, a, u) {
  var f = 0;
  for (t[u] = e; f >= 0; ) {
    var c = t[u + f], h = t[n + c];
    h === -1 ? (f--, a[i++] = c) : (t[n + c] = t[r + h], ++f, t[u + f] = h);
  }
  return i;
}
function Zl(e, i) {
  if (!e)
    return null;
  var t = 0, n, r = [], a = [], u = 0, f = i, c = 2 * i;
  for (n = 0; n < i; n++)
    a[u + n] = -1;
  for (n = i - 1; n >= 0; n--)
    e[n] !== -1 && (a[f + n] = a[u + e[n]], a[u + e[n]] = n);
  for (n = 0; n < i; n++)
    e[n] === -1 && (t = Aa(n, t, a, u, f, r, c));
  return r;
}
function Yl(e, i) {
  if (!e)
    return null;
  var t = e._index, n = e._ptr, r = e._size, a = r[0], u = r[1], f = [], c = [], h = 0, s = u, o, l;
  if (i)
    for (o = 0; o < a; o++)
      c[s + o] = -1;
  for (var v = 0; v < u; v++) {
    f[v] = -1, c[h + v] = -1;
    for (var g = n[v], p = n[v + 1], m = g; m < p; m++) {
      var d = t[m];
      for (o = i ? c[s + d] : d; o !== -1 && o < v; o = l)
        l = c[h + o], c[h + o] = v, l === -1 && (f[o] = v);
      i && (c[s + d] = v);
    }
  }
  return f;
}
function Jl(e, i, t) {
  for (var n = e._values, r = e._index, a = e._ptr, u = e._size, f = u[1], c = 0, h = 0; h < f; h++) {
    var s = a[h];
    for (a[h] = c; s < a[h + 1]; s++)
      i(r[s], h, n ? n[s] : 1, t) && (r[c] = r[s], n && (n[c] = n[s]), c++);
  }
  return a[f] = c, r.splice(c, r.length - c), n && n.splice(c, n.length - c), c;
}
function Dr(e) {
  return -e - 2;
}
var Ql = "csAmd", Xl = ["add", "multiply", "transpose"], Hl = /* @__PURE__ */ ee(Ql, Xl, (e) => {
  var {
    add: i,
    multiply: t,
    transpose: n
  } = e;
  return function(s, o) {
    if (!o || s <= 0 || s > 3)
      return null;
    var l = o._size, v = l[0], g = l[1], p = 0, m = Math.max(16, 10 * Math.sqrt(g));
    m = Math.min(g - 2, m);
    var d = r(s, o, v, g, m);
    Jl(d, c, null);
    for (var y = d._index, D = d._ptr, A = D[g], E = [], w = [], F = 0, b = g + 1, C = 2 * (g + 1), S = 3 * (g + 1), M = 4 * (g + 1), B = 5 * (g + 1), I = 6 * (g + 1), T = 7 * (g + 1), L = E, x = a(g, D, w, F, S, L, C, T, b, I, M, B), Z = u(g, D, w, B, M, I, m, b, S, L, C), q = 0, z, V, K, P, $, G, ne, k, U, Q, X, J, oe, j, fe, le; Z < g; ) {
      for (K = -1; q < g && (K = w[S + q]) === -1; q++)
        ;
      w[C + K] !== -1 && (L[w[C + K]] = -1), w[S + q] = w[C + K];
      var me = w[M + K], we = w[b + K];
      Z += we;
      var Ae = 0;
      w[b + K] = -we;
      var he = D[K], be = me === 0 ? he : A, Ee = be;
      for (P = 1; P <= me + 1; P++) {
        for (P > me ? (G = K, ne = he, k = w[F + K] - me) : (G = y[he++], ne = D[G], k = w[F + G]), $ = 1; $ <= k; $++)
          z = y[ne++], !((U = w[b + z]) <= 0) && (Ae += U, w[b + z] = -U, y[Ee++] = z, w[C + z] !== -1 && (L[w[C + z]] = L[z]), L[z] !== -1 ? w[C + L[z]] = w[C + z] : w[S + w[B + z]] = w[C + z]);
        G !== K && (D[G] = Dr(K), w[I + G] = 0);
      }
      for (me !== 0 && (A = Ee), w[B + K] = Ae, D[K] = be, w[F + K] = Ee - be, w[M + K] = -2, x = f(x, p, w, I, g), Q = be; Q < Ee; Q++)
        if (z = y[Q], !((X = w[M + z]) <= 0)) {
          U = -w[b + z];
          var Se = x - U;
          for (he = D[z], J = D[z] + X - 1; he <= J; he++)
            G = y[he], w[I + G] >= x ? w[I + G] -= U : w[I + G] !== 0 && (w[I + G] = w[B + G] + Se);
        }
      for (Q = be; Q < Ee; Q++) {
        for (z = y[Q], J = D[z], oe = J + w[M + z] - 1, j = J, fe = 0, le = 0, he = J; he <= oe; he++)
          if (G = y[he], w[I + G] !== 0) {
            var Ve = w[I + G] - x;
            Ve > 0 ? (le += Ve, y[j++] = G, fe += G) : (D[G] = Dr(K), w[I + G] = 0);
          }
        w[M + z] = j - J + 1;
        var N = j, _ = J + w[F + z];
        for (he = oe + 1; he < _; he++) {
          V = y[he];
          var O = w[b + V];
          O <= 0 || (le += O, y[j++] = V, fe += V);
        }
        le === 0 ? (D[z] = Dr(K), U = -w[b + z], Ae -= U, we += U, Z += U, w[b + z] = 0, w[M + z] = -1) : (w[B + z] = Math.min(w[B + z], le), y[j] = y[N], y[N] = y[J], y[J] = K, w[F + z] = j - J + 1, fe = (fe < 0 ? -fe : fe) % g, w[C + z] = w[T + fe], w[T + fe] = z, L[z] = fe);
      }
      for (w[B + K] = Ae, p = Math.max(p, Ae), x = f(x + p, p, w, I, g), Q = be; Q < Ee; Q++)
        if (z = y[Q], !(w[b + z] >= 0))
          for (fe = L[z], z = w[T + fe], w[T + fe] = -1; z !== -1 && w[C + z] !== -1; z = w[C + z], x++) {
            for (k = w[F + z], X = w[M + z], he = D[z] + 1; he <= D[z] + k - 1; he++)
              w[I + y[he]] = x;
            var R = z;
            for (V = w[C + z]; V !== -1; ) {
              var H = w[F + V] === k && w[M + V] === X;
              for (he = D[V] + 1; H && he <= D[V] + k - 1; he++)
                w[I + y[he]] !== x && (H = 0);
              H ? (D[V] = Dr(z), w[b + z] += w[b + V], w[b + V] = 0, w[M + V] = -1, V = w[C + V], w[C + R] = V) : (R = V, V = w[C + V]);
            }
          }
      for (he = be, Q = be; Q < Ee; Q++)
        z = y[Q], !((U = -w[b + z]) <= 0) && (w[b + z] = U, le = w[B + z] + Ae - U, le = Math.min(le, g - Z - U), w[S + le] !== -1 && (L[w[S + le]] = z), w[C + z] = w[S + le], L[z] = -1, w[S + le] = z, q = Math.min(q, le), w[B + z] = le, y[he++] = z);
      w[b + K] = we, (w[F + K] = he - be) === 0 && (D[K] = -1, w[I + K] = 0), me !== 0 && (A = he);
    }
    for (z = 0; z < g; z++)
      D[z] = Dr(D[z]);
    for (V = 0; V <= g; V++)
      w[S + V] = -1;
    for (V = g; V >= 0; V--)
      w[b + V] > 0 || (w[C + V] = w[S + D[V]], w[S + D[V]] = V);
    for (G = g; G >= 0; G--)
      w[b + G] <= 0 || D[G] !== -1 && (w[C + G] = w[S + D[G]], w[S + D[G]] = G);
    for (K = 0, z = 0; z <= g; z++)
      D[z] === -1 && (K = Aa(z, K, w, S, C, E, I));
    return E.splice(E.length - 1, 1), E;
  };
  function r(h, s, o, l, v) {
    var g = n(s);
    if (h === 1 && l === o)
      return i(s, g);
    if (h === 2) {
      for (var p = g._index, m = g._ptr, d = 0, y = 0; y < o; y++) {
        var D = m[y];
        if (m[y] = d, !(m[y + 1] - D > v))
          for (var A = m[y + 1]; D < A; D++)
            p[d++] = p[D];
      }
      return m[o] = d, s = n(g), t(g, s);
    }
    return t(g, s);
  }
  function a(h, s, o, l, v, g, p, m, d, y, D, A) {
    for (var E = 0; E < h; E++)
      o[l + E] = s[E + 1] - s[E];
    o[l + h] = 0;
    for (var w = 0; w <= h; w++)
      o[v + w] = -1, g[w] = -1, o[p + w] = -1, o[m + w] = -1, o[d + w] = 1, o[y + w] = 1, o[D + w] = 0, o[A + w] = o[l + w];
    var F = f(0, 0, o, y, h);
    return o[D + h] = -2, s[h] = -1, o[y + h] = 0, F;
  }
  function u(h, s, o, l, v, g, p, m, d, y, D) {
    for (var A = 0, E = 0; E < h; E++) {
      var w = o[l + E];
      if (w === 0)
        o[v + E] = -2, A++, s[E] = -1, o[g + E] = 0;
      else if (w > p)
        o[m + E] = 0, o[v + E] = -1, A++, s[E] = Dr(h), o[m + h]++;
      else {
        var F = o[d + w];
        F !== -1 && (y[F] = E), o[D + E] = o[d + w], o[d + w] = E;
      }
    }
    return A;
  }
  function f(h, s, o, l, v) {
    if (h < 2 || h + s < 0) {
      for (var g = 0; g < v; g++)
        o[l + g] !== 0 && (o[l + g] = 1);
      h = 2;
    }
    return h;
  }
  function c(h, s) {
    return h !== s;
  }
});
function Kl(e, i, t, n, r, a, u) {
  var f, c, h = 0, s;
  if (e <= i || t[n + i] <= t[r + e])
    return -1;
  t[r + e] = t[n + i];
  var o = t[a + e];
  if (t[a + e] = i, o === -1)
    h = 1, s = e;
  else {
    for (h = 2, s = o; s !== t[u + s]; s = t[u + s])
      ;
    for (f = o; f !== s; f = c)
      c = t[u + f], t[u + f] = s;
  }
  return {
    jleaf: h,
    q: s
  };
}
var Wl = "csCounts", kl = ["transpose"], jl = /* @__PURE__ */ ee(Wl, kl, (e) => {
  var {
    transpose: i
  } = e;
  return function(t, n, r, a) {
    if (!t || !n || !r)
      return null;
    var u = t._size, f = u[0], c = u[1], h, s, o, l, v, g, p, m = 4 * c + (a ? c + f + 1 : 0), d = [], y = 0, D = c, A = 2 * c, E = 3 * c, w = 4 * c, F = 5 * c + 1;
    for (o = 0; o < m; o++)
      d[o] = -1;
    var b = [], C = i(t), S = C._index, M = C._ptr;
    for (o = 0; o < c; o++)
      for (s = r[o], b[s] = d[E + s] === -1 ? 1 : 0; s !== -1 && d[E + s] === -1; s = n[s])
        d[E + s] = o;
    if (a) {
      for (o = 0; o < c; o++)
        d[r[o]] = o;
      for (h = 0; h < f; h++) {
        for (o = c, g = M[h], p = M[h + 1], v = g; v < p; v++)
          o = Math.min(o, d[S[v]]);
        d[F + h] = d[w + o], d[w + o] = h;
      }
    }
    for (h = 0; h < c; h++)
      d[y + h] = h;
    for (o = 0; o < c; o++) {
      for (s = r[o], n[s] !== -1 && b[n[s]]--, l = a ? d[w + o] : s; l !== -1; l = a ? d[F + l] : -1)
        for (v = M[l]; v < M[l + 1]; v++) {
          h = S[v];
          var B = Kl(h, s, d, E, D, A, y);
          B.jleaf >= 1 && b[s]++, B.jleaf === 2 && b[B.q]--;
        }
      n[s] !== -1 && (d[y + s] = n[s]);
    }
    for (s = 0; s < c; s++)
      n[s] !== -1 && (b[n[s]] += b[s]);
    return b;
  };
}), e0 = "csSqr", r0 = ["add", "multiply", "transpose"], t0 = /* @__PURE__ */ ee(e0, r0, (e) => {
  var {
    add: i,
    multiply: t,
    transpose: n
  } = e, r = Hl({
    add: i,
    multiply: t,
    transpose: n
  }), a = jl({
    transpose: n
  });
  return function(c, h, s) {
    var o = h._ptr, l = h._size, v = l[1], g, p = {};
    if (p.q = r(c, h), c && !p.q)
      return null;
    if (s) {
      var m = c ? Gl(h, null, p.q, 0) : h;
      p.parent = Yl(m, 1);
      var d = Zl(p.parent, v);
      if (p.cp = a(m, p.parent, d, 1), m && p.parent && p.cp && u(m, p))
        for (p.unz = 0, g = 0; g < v; g++)
          p.unz += p.cp[g];
    } else
      p.unz = 4 * o[v] + v, p.lnz = p.unz;
    return p;
  };
  function u(f, c) {
    var h = f._ptr, s = f._index, o = f._size, l = o[0], v = o[1];
    c.pinv = [], c.leftmost = [];
    var g = c.parent, p = c.pinv, m = c.leftmost, d = [], y = 0, D = l, A = l + v, E = l + 2 * v, w, F, b, C, S;
    for (F = 0; F < v; F++)
      d[D + F] = -1, d[A + F] = -1, d[E + F] = 0;
    for (w = 0; w < l; w++)
      m[w] = -1;
    for (F = v - 1; F >= 0; F--)
      for (C = h[F], S = h[F + 1], b = C; b < S; b++)
        m[s[b]] = F;
    for (w = l - 1; w >= 0; w--)
      p[w] = -1, F = m[w], F !== -1 && (d[E + F]++ === 0 && (d[A + F] = w), d[y + w] = d[D + F], d[D + F] = w);
    for (c.lnz = 0, c.m2 = l, F = 0; F < v; F++)
      if (w = d[D + F], c.lnz++, w < 0 && (w = c.m2++), p[w] = F, !(--E[F] <= 0)) {
        c.lnz += d[E + F];
        var M = g[F];
        M !== -1 && (d[E + M] === 0 && (d[A + M] = d[A + F]), d[y + d[A + F]] = d[D + M], d[D + M] = d[y + w], d[E + M] += d[E + F]);
      }
    for (w = 0; w < l; w++)
      p[w] < 0 && (p[w] = F++);
    return !0;
  }
});
function Ht(e, i) {
  return e[i] < 0;
}
function Ea(e, i) {
  e[i] = Dr(e[i]);
}
function di(e) {
  return e < 0 ? Dr(e) : e;
}
function n0(e, i, t, n, r) {
  var a = i._index, u = i._ptr, f = i._size, c = f[1], h, s, o, l = 0;
  for (n[0] = e; l >= 0; ) {
    e = n[l];
    var v = r ? r[e] : e;
    Ht(u, e) || (Ea(u, e), n[c + l] = v < 0 ? 0 : di(u[v]));
    var g = 1;
    for (s = n[c + l], o = v < 0 ? 0 : di(u[v + 1]); s < o; s++)
      if (h = a[s], !Ht(u, h)) {
        n[c + l] = s, n[++l] = h, g = 0;
        break;
      }
    g && (l--, n[--t] = e);
  }
  return t;
}
function i0(e, i, t, n, r) {
  var a = e._ptr, u = e._size, f = i._index, c = i._ptr, h = u[1], s, o, l, v = h;
  for (o = c[t], l = c[t + 1], s = o; s < l; s++) {
    var g = f[s];
    Ht(a, g) || (v = n0(g, e, v, n, r));
  }
  for (s = v; s < h; s++)
    Ea(a, n[s]);
  return v;
}
var a0 = "csSpsolve", u0 = ["divideScalar", "multiply", "subtract"], o0 = /* @__PURE__ */ ee(a0, u0, (e) => {
  var {
    divideScalar: i,
    multiply: t,
    subtract: n
  } = e;
  return function(a, u, f, c, h, s, o) {
    var l = a._values, v = a._index, g = a._ptr, p = a._size, m = p[1], d = u._values, y = u._index, D = u._ptr, A, E, w, F, b = i0(a, u, f, c, s);
    for (A = b; A < m; A++)
      h[c[A]] = 0;
    for (E = D[f], w = D[f + 1], A = E; A < w; A++)
      h[y[A]] = d[A];
    for (var C = b; C < m; C++) {
      var S = c[C], M = s ? s[S] : S;
      if (!(M < 0))
        for (E = g[M], w = g[M + 1], h[S] = i(h[S], l[o ? E : w - 1]), A = o ? E + 1 : E, F = o ? w : w - 1; A < F; A++) {
          var B = v[A];
          h[B] = n(h[B], t(l[A], h[S]));
        }
    }
    return b;
  };
}), s0 = "csLu", f0 = ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"], c0 = /* @__PURE__ */ ee(s0, f0, (e) => {
  var {
    abs: i,
    divideScalar: t,
    multiply: n,
    subtract: r,
    larger: a,
    largerEq: u,
    SparseMatrix: f
  } = e, c = o0({
    divideScalar: t,
    multiply: n,
    subtract: r
  });
  return function(s, o, l) {
    if (!s)
      return null;
    var v = s._size, g = v[1], p, m = 100, d = 100;
    o && (p = o.q, m = o.lnz || m, d = o.unz || d);
    var y = [], D = [], A = [], E = new f({
      values: y,
      index: D,
      ptr: A,
      size: [g, g]
    }), w = [], F = [], b = [], C = new f({
      values: w,
      index: F,
      ptr: b,
      size: [g, g]
    }), S = [], M, B, I = [], T = [];
    for (M = 0; M < g; M++)
      I[M] = 0, S[M] = -1, A[M + 1] = 0;
    m = 0, d = 0;
    for (var L = 0; L < g; L++) {
      A[L] = m, b[L] = d;
      var x = p ? p[L] : L, Z = c(E, s, x, T, I, S, 1), q = -1, z = -1;
      for (B = Z; B < g; B++)
        if (M = T[B], S[M] < 0) {
          var V = i(I[M]);
          a(V, z) && (z = V, q = M);
        } else
          F[d] = S[M], w[d++] = I[M];
      if (q === -1 || z <= 0)
        return null;
      S[x] < 0 && u(i(I[x]), n(z, l)) && (q = x);
      var K = I[q];
      for (F[d] = L, w[d++] = K, S[q] = L, D[m] = q, y[m++] = 1, B = Z; B < g; B++)
        M = T[B], S[M] < 0 && (D[m] = M, y[m++] = t(I[M], K)), I[M] = 0;
    }
    for (A[g] = m, b[g] = d, B = 0; B < m; B++)
      D[B] = S[D[B]];
    return y.splice(m, y.length - m), D.splice(m, D.length - m), w.splice(d, w.length - d), F.splice(d, F.length - d), {
      L: E,
      U: C,
      pinv: S
    };
  };
}), mi = "slu", l0 = ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"], h0 = /* @__PURE__ */ ee(mi, l0, (e) => {
  var {
    typed: i,
    abs: t,
    add: n,
    multiply: r,
    transpose: a,
    divideScalar: u,
    subtract: f,
    larger: c,
    largerEq: h,
    SparseMatrix: s
  } = e, o = t0({
    add: n,
    multiply: r,
    transpose: a
  }), l = c0({
    abs: t,
    divideScalar: u,
    multiply: r,
    subtract: f,
    larger: c,
    largerEq: h,
    SparseMatrix: s
  });
  return i(mi, {
    "SparseMatrix, number, number": function(g, p, m) {
      if (!ze(p) || p < 0 || p > 3)
        throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
      if (m < 0 || m > 1)
        throw new Error("Partial pivoting threshold must be a number from 0 to 1");
      var d = o(p, g, !1), y = l(g, d, m);
      return {
        L: y.L,
        U: y.U,
        p: y.pinv,
        q: d.q,
        toString: function() {
          return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
p: ` + this.p.toString() + (this.q ? `
q: ` + this.q.toString() : "") + `
`;
        }
      };
    }
  });
});
function gi(e, i) {
  var t, n = i.length, r = [];
  if (e)
    for (t = 0; t < n; t++)
      r[e[t]] = i[t];
  else
    for (t = 0; t < n; t++)
      r[t] = i[t];
  return r;
}
var Di = "lusolve", v0 = ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"], p0 = /* @__PURE__ */ ee(Di, v0, (e) => {
  var {
    typed: i,
    matrix: t,
    lup: n,
    slu: r,
    usolve: a,
    lsolve: u,
    DenseMatrix: f
  } = e, c = zt({
    DenseMatrix: f
  });
  return i(Di, {
    "Array, Array | Matrix": function(l, v) {
      l = t(l);
      var g = n(l), p = s(g.L, g.U, g.p, null, v);
      return p.valueOf();
    },
    "DenseMatrix, Array | Matrix": function(l, v) {
      var g = n(l);
      return s(g.L, g.U, g.p, null, v);
    },
    "SparseMatrix, Array | Matrix": function(l, v) {
      var g = n(l);
      return s(g.L, g.U, g.p, null, v);
    },
    "SparseMatrix, Array | Matrix, number, number": function(l, v, g, p) {
      var m = r(l, g, p);
      return s(m.L, m.U, m.p, m.q, v);
    },
    "Object, Array | Matrix": function(l, v) {
      return s(l.L, l.U, l.p, l.q, v);
    }
  });
  function h(o) {
    if (_e(o))
      return o;
    if (Me(o))
      return t(o);
    throw new TypeError("Invalid Matrix LU decomposition");
  }
  function s(o, l, v, g, p) {
    o = h(o), l = h(l), v && (p = c(o, p, !0), p._data = gi(v, p._data));
    var m = u(o, p), d = a(l, m);
    return g && (d._data = gi(g, d._data)), d;
  }
}), wi = "det", d0 = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"], m0 = /* @__PURE__ */ ee(wi, d0, (e) => {
  var {
    typed: i,
    matrix: t,
    subtractScalar: n,
    multiply: r,
    divideScalar: a,
    isZero: u,
    unaryMinus: f
  } = e;
  return i(wi, {
    any: function(s) {
      return Fe(s);
    },
    "Array | Matrix": function(s) {
      var o;
      switch (_e(s) ? o = s.size() : Array.isArray(s) ? (s = t(s), o = s.size()) : o = [], o.length) {
        case 0:
          return Fe(s);
        case 1:
          if (o[0] === 1)
            return Fe(s.valueOf()[0]);
          if (o[0] === 0)
            return 1;
          throw new RangeError("Matrix must be square (size: " + Le(o) + ")");
        case 2: {
          var l = o[0], v = o[1];
          if (l === v)
            return c(s.clone().valueOf(), l);
          if (v === 0)
            return 1;
          throw new RangeError("Matrix must be square (size: " + Le(o) + ")");
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + Le(o) + ")");
      }
    }
  });
  function c(h, s, o) {
    if (s === 1)
      return Fe(h[0][0]);
    if (s === 2)
      return n(r(h[0][0], h[1][1]), r(h[1][0], h[0][1]));
    for (var l = !1, v = new Array(s).fill(0).map((F, b) => b), g = 0; g < s; g++) {
      var p = v[g];
      if (u(h[p][g])) {
        var m = void 0;
        for (m = g + 1; m < s; m++)
          if (!u(h[v[m]][g])) {
            p = v[m], v[m] = v[g], v[g] = p, l = !l;
            break;
          }
        if (m === s)
          return h[p][g];
      }
      for (var d = h[p][g], y = g === 0 ? 1 : h[v[g - 1]][g - 1], D = g + 1; D < s; D++)
        for (var A = v[D], E = g + 1; E < s; E++)
          h[A][E] = a(n(r(h[A][E], d), r(h[A][g], h[p][E])), y);
    }
    var w = h[v[s - 1]][s - 1];
    return l ? f(w) : w;
  }
}), yi = "inv", g0 = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], D0 = /* @__PURE__ */ ee(yi, g0, (e) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    addScalar: r,
    multiply: a,
    unaryMinus: u,
    det: f,
    identity: c,
    abs: h
  } = e;
  return i(yi, {
    "Array | Matrix": function(l) {
      var v = _e(l) ? l.size() : $e(l);
      switch (v.length) {
        case 1:
          if (v[0] === 1)
            return _e(l) ? t([n(1, l.valueOf()[0])]) : [n(1, l[0])];
          throw new RangeError("Matrix must be square (size: " + Le(v) + ")");
        case 2: {
          var g = v[0], p = v[1];
          if (g === p)
            return _e(l) ? t(s(l.valueOf(), g, p), l.storage()) : s(l, g, p);
          throw new RangeError("Matrix must be square (size: " + Le(v) + ")");
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + Le(v) + ")");
      }
    },
    any: function(l) {
      return n(1, l);
    }
  });
  function s(o, l, v) {
    var g, p, m, d, y;
    if (l === 1) {
      if (d = o[0][0], d === 0)
        throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(1, d)]];
    } else if (l === 2) {
      var D = f(o);
      if (D === 0)
        throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(o[1][1], D), n(u(o[0][1]), D)], [n(u(o[1][0]), D), n(o[0][0], D)]];
    } else {
      var A = o.concat();
      for (g = 0; g < l; g++)
        A[g] = A[g].concat();
      for (var E = c(l).valueOf(), w = 0; w < v; w++) {
        var F = h(A[w][w]), b = w;
        for (g = w + 1; g < l; )
          h(A[g][w]) > F && (F = h(A[g][w]), b = g), g++;
        if (F === 0)
          throw Error("Cannot calculate inverse, determinant is zero");
        g = b, g !== w && (y = A[w], A[w] = A[g], A[g] = y, y = E[w], E[w] = E[g], E[g] = y);
        var C = A[w], S = E[w];
        for (g = 0; g < l; g++) {
          var M = A[g], B = E[g];
          if (g !== w) {
            if (M[w] !== 0) {
              for (m = n(u(M[w]), C[w]), p = w; p < v; p++)
                M[p] = r(M[p], a(m, C[p]));
              for (p = 0; p < v; p++)
                B[p] = r(B[p], a(m, S[p]));
            }
          } else {
            for (m = C[w], p = w; p < v; p++)
              M[p] = n(M[p], m);
            for (p = 0; p < v; p++)
              B[p] = n(B[p], m);
          }
        }
      }
      return E;
    }
  }
});
function w0(e) {
  var {
    addScalar: i,
    subtract: t,
    flatten: n,
    multiply: r,
    multiplyScalar: a,
    divideScalar: u,
    sqrt: f,
    abs: c,
    bignumber: h,
    diag: s,
    size: o,
    reshape: l,
    inv: v,
    qr: g,
    usolve: p,
    usolveAll: m,
    equal: d,
    complex: y,
    larger: D,
    smaller: A,
    matrixFromColumns: E,
    dot: w
  } = e;
  function F(P, $, G, ne) {
    var k = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, U = b(P, $, G, ne, k);
    C(P, $, G, ne, k, U);
    var {
      values: Q,
      C: X
    } = S(P, $, G, ne, k);
    if (k) {
      var J = M(P, $, X, U, Q, G, ne);
      return {
        values: Q,
        eigenvectors: J
      };
    }
    return {
      values: Q
    };
  }
  function b(P, $, G, ne, k) {
    var U = ne === "BigNumber", Q = ne === "Complex", X = U ? h(0) : 0, J = U ? h(1) : Q ? y(1) : 1, oe = U ? h(1) : 1, j = U ? h(10) : 2, fe = a(j, j), le;
    k && (le = Array($).fill(J));
    for (var me = !1; !me; ) {
      me = !0;
      for (var we = 0; we < $; we++) {
        for (var Ae = X, he = X, be = 0; be < $; be++)
          we !== be && (Ae = i(Ae, c(P[be][we])), he = i(he, c(P[we][be])));
        if (!d(Ae, 0) && !d(he, 0)) {
          for (var Ee = oe, Se = Ae, Ve = u(he, j), N = a(he, j); A(Se, Ve); )
            Se = a(Se, fe), Ee = a(Ee, j);
          for (; D(Se, N); )
            Se = u(Se, fe), Ee = u(Ee, j);
          var _ = A(u(i(Se, he), Ee), a(i(Ae, he), 0.95));
          if (_) {
            me = !1;
            for (var O = u(1, Ee), R = 0; R < $; R++)
              we !== R && (P[we][R] = a(P[we][R], O), P[R][we] = a(P[R][we], Ee));
            k && (le[we] = a(le[we], O));
          }
        }
      }
    }
    return k ? s(le) : null;
  }
  function C(P, $, G, ne, k, U) {
    var Q = ne === "BigNumber", X = ne === "Complex", J = Q ? h(0) : X ? y(0) : 0;
    Q && (G = h(G));
    for (var oe = 0; oe < $ - 2; oe++) {
      for (var j = 0, fe = J, le = oe + 1; le < $; le++) {
        var me = P[le][oe];
        A(c(fe), c(me)) && (fe = me, j = le);
      }
      if (!A(c(fe), G)) {
        if (j !== oe + 1) {
          var we = P[j];
          P[j] = P[oe + 1], P[oe + 1] = we;
          for (var Ae = 0; Ae < $; Ae++) {
            var he = P[Ae][j];
            P[Ae][j] = P[Ae][oe + 1], P[Ae][oe + 1] = he;
          }
          if (k) {
            var be = U[j];
            U[j] = U[oe + 1], U[oe + 1] = be;
          }
        }
        for (var Ee = oe + 2; Ee < $; Ee++) {
          var Se = u(P[Ee][oe], fe);
          if (Se !== 0) {
            for (var Ve = 0; Ve < $; Ve++)
              P[Ee][Ve] = t(P[Ee][Ve], a(Se, P[oe + 1][Ve]));
            for (var N = 0; N < $; N++)
              P[N][oe + 1] = i(P[N][oe + 1], a(Se, P[N][Ee]));
            if (k)
              for (var _ = 0; _ < $; _++)
                U[Ee][_] = t(U[Ee][_], a(Se, U[oe + 1][_]));
          }
        }
      }
    }
    return U;
  }
  function S(P, $, G, ne, k) {
    var U = ne === "BigNumber", Q = ne === "Complex", X = U ? h(1) : Q ? y(1) : 1;
    U && (G = h(G));
    for (var J = Fe(P), oe = [], j = $, fe = [], le = k ? s(Array($).fill(X)) : void 0, me = k ? s(Array(j).fill(X)) : void 0, we = 0; we <= 100; ) {
      we += 1;
      for (var Ae = J[j - 1][j - 1], he = 0; he < j; he++)
        J[he][he] = t(J[he][he], Ae);
      var {
        Q: be,
        R: Ee
      } = g(J);
      J = r(Ee, be);
      for (var Se = 0; Se < j; Se++)
        J[Se][Se] = i(J[Se][Se], Ae);
      if (k && (me = r(me, be)), j === 1 || A(c(J[j - 1][j - 2]), G)) {
        we = 0, oe.push(J[j - 1][j - 1]), k && (fe.unshift([[1]]), T(me, $), le = r(le, me), j > 1 && (me = s(Array(j - 1).fill(X)))), j -= 1, J.pop();
        for (var Ve = 0; Ve < j; Ve++)
          J[Ve].pop();
      } else if (j === 2 || A(c(J[j - 2][j - 3]), G)) {
        we = 0;
        var N = B(J[j - 2][j - 2], J[j - 2][j - 1], J[j - 1][j - 2], J[j - 1][j - 1]);
        oe.push(...N), k && (fe.unshift(I(J[j - 2][j - 2], J[j - 2][j - 1], J[j - 1][j - 2], J[j - 1][j - 1], N[0], N[1], G, ne)), T(me, $), le = r(le, me), j > 2 && (me = s(Array(j - 2).fill(X)))), j -= 2, J.pop(), J.pop();
        for (var _ = 0; _ < j; _++)
          J[_].pop(), J[_].pop();
      }
      if (j === 0)
        break;
    }
    if (oe.sort((H, Y) => +t(c(H), c(Y))), we > 100) {
      var O = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + oe.join(", "));
      throw O.values = oe, O.vectors = [], O;
    }
    var R = k ? r(le, L(fe, $)) : void 0;
    return {
      values: oe,
      C: R
    };
  }
  function M(P, $, G, ne, k, U, Q) {
    var X = v(G), J = r(X, P, G), oe = Q === "BigNumber", j = Q === "Complex", fe = oe ? h(0) : j ? y(0) : 0, le = oe ? h(1) : j ? y(1) : 1, me = [], we = [];
    for (var Ae of k) {
      var he = x(me, Ae, d);
      he === -1 ? (me.push(Ae), we.push(1)) : we[he] += 1;
    }
    for (var be = [], Ee = me.length, Se = Array($).fill(fe), Ve = s(Array($).fill(le)), N = function() {
      var R = me[_], H = t(J, r(R, Ve)), Y = m(H, Se);
      for (Y.shift(); Y.length < we[_]; ) {
        var ue = Z(H, $, Y, U, Q);
        if (ue === null)
          break;
        Y.push(ue);
      }
      var te = r(v(ne), G);
      Y = Y.map((ae) => r(te, ae)), be.push(...Y.map((ae) => ({
        value: R,
        vector: n(ae)
      })));
    }, _ = 0; _ < Ee; _++)
      N();
    return be;
  }
  function B(P, $, G, ne) {
    var k = i(P, ne), U = t(a(P, ne), a($, G)), Q = a(k, 0.5), X = a(f(t(a(k, k), a(4, U))), 0.5);
    return [i(Q, X), t(Q, X)];
  }
  function I(P, $, G, ne, k, U, Q, X) {
    var J = X === "BigNumber", oe = X === "Complex", j = J ? h(0) : oe ? y(0) : 0, fe = J ? h(1) : oe ? y(1) : 1;
    if (A(c(G), Q))
      return [[fe, j], [j, fe]];
    if (D(c(t(k, U)), Q))
      return [[t(k, ne), t(U, ne)], [G, G]];
    var le = t(P, k), me = t(ne, k);
    return A(c($), Q) && A(c(me), Q) ? [[le, fe], [G, j]] : [[$, j], [me, fe]];
  }
  function T(P, $) {
    for (var G = 0; G < P.length; G++)
      P[G].push(...Array($ - P[G].length).fill(0));
    for (var ne = P.length; ne < $; ne++)
      P.push(Array($).fill(0)), P[ne][ne] = 1;
    return P;
  }
  function L(P, $) {
    for (var G = [], ne = 0; ne < $; ne++)
      G[ne] = Array($).fill(0);
    var k = 0;
    for (var U of P) {
      for (var Q = U.length, X = 0; X < Q; X++)
        for (var J = 0; J < Q; J++)
          G[k + X][k + J] = U[X][J];
      k += Q;
    }
    return G;
  }
  function x(P, $, G) {
    for (var ne = 0; ne < P.length; ne++)
      if (G(P[ne], $))
        return ne;
    return -1;
  }
  function Z(P, $, G, ne, k) {
    for (var U = k === "BigNumber" ? h(1e3) : 1e3, Q, X = 0; X < 5; ++X) {
      Q = q($, G, k);
      try {
        Q = p(P, Q);
      } catch {
        continue;
      }
      if (D(V(Q), U))
        break;
    }
    if (X >= 5)
      return null;
    for (X = 0; ; ) {
      var J = p(P, Q);
      if (A(V(z(Q, [J])), ne))
        break;
      if (++X >= 10)
        return null;
      Q = K(J);
    }
    return Q;
  }
  function q(P, $, G) {
    var ne = G === "BigNumber", k = G === "Complex", U = Array(P).fill(0).map((Q) => 2 * Math.random() - 1);
    return ne && (U = U.map((Q) => h(Q))), k && (U = U.map((Q) => y(Q))), U = z(U, $), K(U, G);
  }
  function z(P, $) {
    var G = o(P);
    for (var ne of $)
      ne = l(ne, G), P = t(P, r(u(w(ne, P), w(ne, ne)), ne));
    return P;
  }
  function V(P) {
    return c(f(w(P, P)));
  }
  function K(P, $) {
    var G = $ === "BigNumber", ne = $ === "Complex", k = G ? h(1) : ne ? y(1) : 1;
    return r(u(k, V(P)), P);
  }
  return F;
}
function y0(e) {
  var {
    config: i,
    addScalar: t,
    subtract: n,
    abs: r,
    atan: a,
    cos: u,
    sin: f,
    multiplyScalar: c,
    inv: h,
    bignumber: s,
    multiply: o,
    add: l
  } = e;
  function v(C, S) {
    var M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.epsilon, B = arguments.length > 3 ? arguments[3] : void 0, I = arguments.length > 4 ? arguments[4] : void 0;
    if (B === "number")
      return g(C, M, I);
    if (B === "BigNumber")
      return p(C, M, I);
    throw TypeError("Unsupported data type: " + B);
  }
  function g(C, S, M) {
    var B = C.length, I = Math.abs(S / B), T, L;
    if (M) {
      L = new Array(B);
      for (var x = 0; x < B; x++)
        L[x] = Array(B).fill(0), L[x][x] = 1;
    }
    for (var Z = w(C); Math.abs(Z[1]) >= Math.abs(I); ) {
      var q = Z[0][0], z = Z[0][1];
      T = m(C[q][q], C[z][z], C[q][z]), C = E(C, T, q, z), M && (L = y(L, T, q, z)), Z = w(C);
    }
    for (var V = Array(B).fill(0), K = 0; K < B; K++)
      V[K] = C[K][K];
    return b(Fe(V), L, M);
  }
  function p(C, S, M) {
    var B = C.length, I = r(S / B), T, L;
    if (M) {
      L = new Array(B);
      for (var x = 0; x < B; x++)
        L[x] = Array(B).fill(0), L[x][x] = 1;
    }
    for (var Z = F(C); r(Z[1]) >= r(I); ) {
      var q = Z[0][0], z = Z[0][1];
      T = d(C[q][q], C[z][z], C[q][z]), C = A(C, T, q, z), M && (L = D(L, T, q, z)), Z = F(C);
    }
    for (var V = Array(B).fill(0), K = 0; K < B; K++)
      V[K] = C[K][K];
    return b(Fe(V), L, M);
  }
  function m(C, S, M) {
    var B = S - C;
    return Math.abs(B) <= i.epsilon ? Math.PI / 4 : 0.5 * Math.atan(2 * M / (S - C));
  }
  function d(C, S, M) {
    var B = n(S, C);
    return r(B) <= i.epsilon ? s(-1).acos().div(4) : c(0.5, a(o(2, M, h(B))));
  }
  function y(C, S, M, B) {
    for (var I = C.length, T = Math.cos(S), L = Math.sin(S), x = Array(I).fill(0), Z = Array(I).fill(0), q = 0; q < I; q++)
      x[q] = T * C[q][M] - L * C[q][B], Z[q] = L * C[q][M] + T * C[q][B];
    for (var z = 0; z < I; z++)
      C[z][M] = x[z], C[z][B] = Z[z];
    return C;
  }
  function D(C, S, M, B) {
    for (var I = C.length, T = u(S), L = f(S), x = Array(I).fill(s(0)), Z = Array(I).fill(s(0)), q = 0; q < I; q++)
      x[q] = n(c(T, C[q][M]), c(L, C[q][B])), Z[q] = t(c(L, C[q][M]), c(T, C[q][B]));
    for (var z = 0; z < I; z++)
      C[z][M] = x[z], C[z][B] = Z[z];
    return C;
  }
  function A(C, S, M, B) {
    for (var I = C.length, T = s(u(S)), L = s(f(S)), x = c(T, T), Z = c(L, L), q = Array(I).fill(s(0)), z = Array(I).fill(s(0)), V = o(s(2), T, L, C[M][B]), K = t(n(c(x, C[M][M]), V), c(Z, C[B][B])), P = l(c(Z, C[M][M]), V, c(x, C[B][B])), $ = 0; $ < I; $++)
      q[$] = n(c(T, C[M][$]), c(L, C[B][$])), z[$] = t(c(L, C[M][$]), c(T, C[B][$]));
    C[M][M] = K, C[B][B] = P, C[M][B] = s(0), C[B][M] = s(0);
    for (var G = 0; G < I; G++)
      G !== M && G !== B && (C[M][G] = q[G], C[G][M] = q[G], C[B][G] = z[G], C[G][B] = z[G]);
    return C;
  }
  function E(C, S, M, B) {
    for (var I = C.length, T = Math.cos(S), L = Math.sin(S), x = T * T, Z = L * L, q = Array(I).fill(0), z = Array(I).fill(0), V = x * C[M][M] - 2 * T * L * C[M][B] + Z * C[B][B], K = Z * C[M][M] + 2 * T * L * C[M][B] + x * C[B][B], P = 0; P < I; P++)
      q[P] = T * C[M][P] - L * C[B][P], z[P] = L * C[M][P] + T * C[B][P];
    C[M][M] = V, C[B][B] = K, C[M][B] = 0, C[B][M] = 0;
    for (var $ = 0; $ < I; $++)
      $ !== M && $ !== B && (C[M][$] = q[$], C[$][M] = q[$], C[B][$] = z[$], C[$][B] = z[$]);
    return C;
  }
  function w(C) {
    for (var S = C.length, M = 0, B = [0, 1], I = 0; I < S; I++)
      for (var T = I + 1; T < S; T++)
        Math.abs(M) < Math.abs(C[I][T]) && (M = Math.abs(C[I][T]), B = [I, T]);
    return [B, M];
  }
  function F(C) {
    for (var S = C.length, M = 0, B = [0, 1], I = 0; I < S; I++)
      for (var T = I + 1; T < S; T++)
        r(M) < r(C[I][T]) && (M = r(C[I][T]), B = [I, T]);
    return [B, M];
  }
  function b(C, S, M) {
    var B = C.length, I = Array(B), T;
    if (M) {
      T = Array(B);
      for (var L = 0; L < B; L++)
        T[L] = Array(B);
    }
    for (var x = 0; x < B; x++) {
      for (var Z = 0, q = C[0], z = 0; z < C.length; z++)
        r(C[z]) < r(q) && (Z = z, q = C[Z]);
      if (I[x] = C.splice(Z, 1)[0], M)
        for (var V = 0; V < B; V++)
          T[x][V] = S[V][Z], S[V].splice(Z, 1);
    }
    if (!M)
      return {
        values: I
      };
    var K = T.map((P, $) => ({
      value: I[$],
      vector: P
    }));
    return {
      values: I,
      eigenvectors: K
    };
  }
  return v;
}
var A0 = "eigs", E0 = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], C0 = /* @__PURE__ */ ee(A0, E0, (e) => {
  var {
    config: i,
    typed: t,
    matrix: n,
    addScalar: r,
    subtract: a,
    equal: u,
    abs: f,
    atan: c,
    cos: h,
    sin: s,
    multiplyScalar: o,
    divideScalar: l,
    inv: v,
    bignumber: g,
    multiply: p,
    add: m,
    larger: d,
    column: y,
    flatten: D,
    number: A,
    complex: E,
    sqrt: w,
    diag: F,
    size: b,
    reshape: C,
    qr: S,
    usolve: M,
    usolveAll: B,
    im: I,
    re: T,
    smaller: L,
    matrixFromColumns: x,
    dot: Z
  } = e, q = y0({
    config: i,
    addScalar: r,
    subtract: a,
    column: y,
    flatten: D,
    equal: u,
    abs: f,
    atan: c,
    cos: h,
    sin: s,
    multiplyScalar: o,
    inv: v,
    bignumber: g,
    complex: E,
    multiply: p,
    add: m
  }), z = w0({
    config: i,
    addScalar: r,
    subtract: a,
    multiply: p,
    multiplyScalar: o,
    flatten: D,
    divideScalar: l,
    sqrt: w,
    abs: f,
    bignumber: g,
    diag: F,
    size: b,
    reshape: C,
    qr: S,
    inv: v,
    usolve: M,
    usolveAll: B,
    equal: u,
    complex: E,
    larger: d,
    smaller: L,
    matrixFromColumns: x,
    dot: Z
  });
  return t("eigs", {
    // The conversion to matrix in the first two implementations,
    // just to convert back to an array right away in
    // computeValuesAndVectors, is unfortunate, and should perhaps be
    // streamlined. It is done because the Matrix object carries some
    // type information about its entries, and so constructing the matrix
    // is a roundabout way of doing type detection.
    Array: function(U) {
      return V(n(U));
    },
    "Array, number|BigNumber": function(U, Q) {
      return V(n(U), {
        precision: Q
      });
    },
    "Array, Object"(k, U) {
      return V(n(k), U);
    },
    Matrix: function(U) {
      return V(U, {
        matricize: !0
      });
    },
    "Matrix, number|BigNumber": function(U, Q) {
      return V(U, {
        precision: Q,
        matricize: !0
      });
    },
    "Matrix, Object": function(U, Q) {
      var X = {
        matricize: !0
      };
      return Or(X, Q), V(U, X);
    }
  });
  function V(k) {
    var U, Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = "eigenvectors" in Q ? Q.eigenvectors : !0, J = (U = Q.precision) !== null && U !== void 0 ? U : i.epsilon, oe = K(k, J, X);
    return Q.matricize && (oe.values = n(oe.values), X && (oe.eigenvectors = oe.eigenvectors.map((j) => {
      var {
        value: fe,
        vector: le
      } = j;
      return {
        value: fe,
        vector: n(le)
      };
    }))), X && Object.defineProperty(oe, "vectors", {
      enumerable: !1,
      // to make sure that the eigenvectors can still be
      // converted to string.
      get: () => {
        throw new Error("eigs(M).vectors replaced with eigs(M).eigenvectors");
      }
    }), oe;
  }
  function K(k, U, Q) {
    var X = k.toArray(), J = k.size();
    if (J.length !== 2 || J[0] !== J[1])
      throw new RangeError("Matrix must be square (size: ".concat(Le(J), ")"));
    var oe = J[0];
    if ($(X, oe, U) && (G(X, oe), P(X, oe, U))) {
      var j = ne(k, X, oe);
      return q(X, oe, U, j, Q);
    }
    var fe = ne(k, X, oe);
    return z(X, oe, U, fe, Q);
  }
  function P(k, U, Q) {
    for (var X = 0; X < U; X++)
      for (var J = X; J < U; J++)
        if (d(g(f(a(k[X][J], k[J][X]))), Q))
          return !1;
    return !0;
  }
  function $(k, U, Q) {
    for (var X = 0; X < U; X++)
      for (var J = 0; J < U; J++)
        if (d(g(f(I(k[X][J]))), Q))
          return !1;
    return !0;
  }
  function G(k, U) {
    for (var Q = 0; Q < U; Q++)
      for (var X = 0; X < U; X++)
        k[Q][X] = T(k[Q][X]);
  }
  function ne(k, U, Q) {
    var X = k.datatype();
    if (X === "number" || X === "BigNumber" || X === "Complex")
      return X;
    for (var J = !1, oe = !1, j = !1, fe = 0; fe < Q; fe++)
      for (var le = 0; le < Q; le++) {
        var me = U[fe][le];
        if (qe(me) || kt(me))
          J = !0;
        else if (Re(me))
          oe = !0;
        else if (Wt(me))
          j = !0;
        else
          throw TypeError("Unsupported type in Matrix: " + lr(me));
      }
    if (oe && j && console.warn("Complex BigNumbers not supported, this operation will lose precission."), j) {
      for (var we = 0; we < Q; we++)
        for (var Ae = 0; Ae < Q; Ae++)
          U[we][Ae] = E(U[we][Ae]);
      return "Complex";
    }
    if (oe) {
      for (var he = 0; he < Q; he++)
        for (var be = 0; be < Q; be++)
          U[he][be] = g(U[he][be]);
      return "BigNumber";
    }
    if (J) {
      for (var Ee = 0; Ee < Q; Ee++)
        for (var Se = 0; Se < Q; Se++)
          U[Ee][Se] = A(U[Ee][Se]);
      return "number";
    } else
      throw TypeError("Matrix contains unsupported types only.");
  }
}), et = /* @__PURE__ */ ls({
  config: je
}), Tt = /* @__PURE__ */ ds({}), nn = /* @__PURE__ */ ws({}), an = /* @__PURE__ */ Es({}), Je = /* @__PURE__ */ bs({
  Matrix: an
}), ce = /* @__PURE__ */ vo({
  BigNumber: et,
  Complex: Tt,
  DenseMatrix: Je,
  Fraction: nn
}), rt = /* @__PURE__ */ sf({
  typed: ce
}), Cr = /* @__PURE__ */ cf({
  typed: ce
}), F0 = /* @__PURE__ */ Ml({
  typed: ce
}), un = /* @__PURE__ */ Qs({
  BigNumber: et,
  typed: ce
}), on = /* @__PURE__ */ Ks({
  Complex: Tt,
  typed: ce
}), It = /* @__PURE__ */ rc({
  typed: ce
}), b0 = /* @__PURE__ */ Bl({
  typed: ce
}), cr = /* @__PURE__ */ Os({
  config: je,
  typed: ce
}), M0 = /* @__PURE__ */ dc({
  typed: ce
}), S0 = /* @__PURE__ */ nc({
  typed: ce
}), Ca = /* @__PURE__ */ Ss({
  typed: ce
}), B0 = /* @__PURE__ */ Ns({
  typed: ce
}), Fa = /* @__PURE__ */ _s({
  typed: ce
}), Fr = /* @__PURE__ */ Vf({
  typed: ce
}), sn = /* @__PURE__ */ Zs({
  typed: ce
}), N0 = /* @__PURE__ */ ac({
  typed: ce
}), x0 = /* @__PURE__ */ Jf({
  BigNumber: et,
  Fraction: nn,
  complex: on,
  typed: ce
}), _0 = /* @__PURE__ */ xl({
  typed: ce
}), Gr = /* @__PURE__ */ Ps({
  Matrix: an,
  equalScalar: cr,
  typed: ce
}), Nr = /* @__PURE__ */ hf({
  typed: ce
}), z0 = /* @__PURE__ */ Ts({
  typed: ce
}), fn = /* @__PURE__ */ Hf({
  Complex: Tt,
  config: je,
  typed: ce
}), tt = /* @__PURE__ */ uf({
  typed: ce
}), ba = /* @__PURE__ */ js({
  Fraction: nn,
  typed: ce
}), ye = /* @__PURE__ */ rf({
  DenseMatrix: Je,
  Matrix: an,
  SparseMatrix: Gr,
  typed: ce
}), T0 = /* @__PURE__ */ Rc({
  bignumber: un,
  fraction: ba,
  number: sn
}), I0 = /* @__PURE__ */ Ec({
  isInteger: Ca,
  matrix: ye,
  typed: ce
}), nt = /* @__PURE__ */ Fc({
  matrix: ye,
  config: je,
  typed: ce
}), br = /* @__PURE__ */ Mc({
  matrix: ye,
  typed: ce
}), Oe = /* @__PURE__ */ Tc({
  matrix: ye,
  typed: ce
}), He = /* @__PURE__ */ qc({
  BigNumber: et,
  config: je,
  matrix: ye,
  typed: ce
}), xr = /* @__PURE__ */ oc({
  isInteger: Ca,
  matrix: ye,
  typed: ce
}), L0 = /* @__PURE__ */ Lc({
  conj: It,
  transpose: Oe,
  typed: ce
}), O0 = /* @__PURE__ */ lc({
  DenseMatrix: Je,
  SparseMatrix: Gr,
  matrix: ye,
  typed: ce
}), dr = /* @__PURE__ */ Vc({
  numeric: T0,
  typed: ce
}), Ma = /* @__PURE__ */ kc({
  DenseMatrix: Je,
  concat: xr,
  equalScalar: cr,
  matrix: ye,
  typed: ce
}), Sa = /* @__PURE__ */ vc({
  matrix: ye,
  typed: ce
}), it = /* @__PURE__ */ gc({
  BigNumber: et,
  DenseMatrix: Je,
  SparseMatrix: Gr,
  config: je,
  matrix: ye,
  typed: ce
}), Ba = /* @__PURE__ */ cl({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: ye,
  typed: ce
}), q0 = /* @__PURE__ */ Jc({
  DenseMatrix: Je,
  divideScalar: dr,
  equalScalar: cr,
  matrix: ye,
  multiplyScalar: Fr,
  subtractScalar: Nr,
  typed: ce
}), $0 = /* @__PURE__ */ nf({
  flatten: Sa,
  matrix: ye,
  size: nt,
  typed: ce
}), P0 = /* @__PURE__ */ Vl({
  addScalar: Cr,
  complex: on,
  conj: It,
  divideScalar: dr,
  equal: Ma,
  identity: it,
  isZero: Fa,
  matrix: ye,
  multiplyScalar: Fr,
  sign: x0,
  sqrt: fn,
  subtractScalar: Nr,
  typed: ce,
  unaryMinus: tt,
  zeros: He
}), at = /* @__PURE__ */ rl({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: ye,
  typed: ce
}), tr = /* @__PURE__ */ Wf({
  DenseMatrix: Je,
  concat: xr,
  equalScalar: cr,
  matrix: ye,
  subtractScalar: Nr,
  typed: ce,
  unaryMinus: tt
}), Na = /* @__PURE__ */ Xc({
  DenseMatrix: Je,
  divideScalar: dr,
  equalScalar: cr,
  matrix: ye,
  multiplyScalar: Fr,
  subtractScalar: Nr,
  typed: ce
}), ar = /* @__PURE__ */ zl({
  DenseMatrix: Je,
  SparseMatrix: Gr,
  addScalar: Cr,
  concat: xr,
  equalScalar: cr,
  matrix: ye,
  typed: ce
}), xa = /* @__PURE__ */ Ol({
  addScalar: Cr,
  conj: It,
  multiplyScalar: Fr,
  size: nt,
  typed: ce
}), R0 = /* @__PURE__ */ pl({
  DenseMatrix: Je,
  smaller: at
}), _a = /* @__PURE__ */ gl({
  ImmutableDenseMatrix: R0,
  getMatrixDataType: M0
}), Zr = /* @__PURE__ */ ol({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: ye,
  typed: ce
}), ie = /* @__PURE__ */ Zf({
  addScalar: Cr,
  dot: xa,
  equalScalar: cr,
  matrix: ye,
  multiplyScalar: Fr,
  typed: ce
}), U0 = /* @__PURE__ */ h0({
  SparseMatrix: Gr,
  abs: rt,
  add: ar,
  divideScalar: dr,
  larger: Zr,
  largerEq: Ba,
  multiply: ie,
  subtract: tr,
  transpose: Oe,
  typed: ce
}), De = /* @__PURE__ */ Bc({
  add: ar,
  matrix: ye,
  typed: ce,
  zeros: He
}), V0 = /* @__PURE__ */ Kc({
  DenseMatrix: Je,
  divideScalar: dr,
  equalScalar: cr,
  matrix: ye,
  multiplyScalar: Fr,
  subtractScalar: Nr,
  typed: ce
}), G0 = /* @__PURE__ */ m0({
  divideScalar: dr,
  isZero: Fa,
  matrix: ye,
  multiply: ie,
  subtractScalar: Nr,
  typed: ce,
  unaryMinus: tt
}), Z0 = /* @__PURE__ */ yl({
  larger: Zr,
  smaller: at
}), ve = /* @__PURE__ */ $l({
  Index: _a,
  typed: ce
}), Y0 = /* @__PURE__ */ il({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: ye,
  typed: ce
}), Lr = /* @__PURE__ */ yc({
  bignumber: un,
  matrix: ye,
  add: ar,
  config: je,
  isPositive: B0,
  larger: Zr,
  largerEq: Ba,
  smaller: at,
  smallerEq: Y0,
  typed: ce
}), J0 = /* @__PURE__ */ Cl({
  FibonacciHeap: Z0,
  addScalar: Cr,
  equalScalar: cr
}), Q0 = /* @__PURE__ */ fc({
  Index: _a,
  matrix: ye,
  range: Lr,
  typed: ce
}), rr = /* @__PURE__ */ D0({
  abs: rt,
  addScalar: Cr,
  det: G0,
  divideScalar: dr,
  identity: it,
  matrix: ye,
  multiply: ie,
  typed: ce,
  unaryMinus: tt
}), X0 = /* @__PURE__ */ Rl({
  DenseMatrix: Je,
  Spa: J0,
  SparseMatrix: Gr,
  abs: rt,
  addScalar: Cr,
  divideScalar: dr,
  equalScalar: cr,
  larger: Zr,
  matrix: ye,
  multiplyScalar: Fr,
  subtractScalar: Nr,
  typed: ce,
  unaryMinus: tt
}), H0 = /* @__PURE__ */ Zc({
  Complex: Tt,
  config: je,
  fraction: ba,
  identity: it,
  inv: rr,
  matrix: ye,
  multiply: ie,
  number: sn,
  typed: ce
}), K0 = /* @__PURE__ */ p0({
  DenseMatrix: Je,
  lsolve: q0,
  lup: X0,
  matrix: ye,
  slu: U0,
  typed: ce,
  usolve: Na
}), W0 = /* @__PURE__ */ C0({
  abs: rt,
  add: ar,
  addScalar: Cr,
  atan: F0,
  bignumber: un,
  column: Q0,
  complex: on,
  config: je,
  cos: b0,
  diag: O0,
  divideScalar: dr,
  dot: xa,
  equal: Ma,
  flatten: Sa,
  im: S0,
  inv: rr,
  larger: Zr,
  matrix: ye,
  matrixFromColumns: $0,
  multiply: ie,
  multiplyScalar: Fr,
  number: sn,
  qr: P0,
  re: N0,
  reshape: I0,
  sin: _0,
  size: nt,
  smaller: at,
  sqrt: fn,
  subtract: tr,
  typed: ce,
  usolve: Na,
  usolveAll: V0
}), Ai = /* @__PURE__ */ Il({
  abs: rt,
  add: ar,
  conj: It,
  ctranspose: L0,
  eigs: W0,
  equalScalar: cr,
  larger: Zr,
  matrix: ye,
  multiply: ie,
  pow: H0,
  smaller: at,
  sqrt: fn,
  typed: ce
});
class k0 {
  /**
   * Node constructor
   * @param label number
   * @param coords coordinates
   * @param bcs boundary conditions {code:string]:boolean}
   */
  constructor(i, t, n = [0, 0, 0], r = []) {
    se(this, "label");
    // Node number
    se(this, "domain");
    // domain reference
    se(this, "coords");
    // ([float,float,float])* coordinates [m]
    //bcs: Set<DofID>; // for each DOF (identified by string id) the bc is applied
    //Note: prescribed values to be specified via boundaryCondition class
    se(this, "bcs");
    //Node local coordinate system. In this c.s. boundary conditions are applied and results obtained
    /**
     * Triplet defining the local coordinate system in node.
     * Value at position (i,j) represents angle between e'(i) and e(j),
     * where e' is base vector of local coordinate system and e is
     * base vector of global c.s.
     */
    se(this, "lcs");
    this.label = i.toString(), this.domain = t, this.coords = n, this.bcs = new Set(r), this.lcs = void 0;
  }
  /**
   * Change properties
   * @param label new label
   * @param coords new coordinates
   * @param bcs new dictionary with applied boundary conditions
   */
  change(i, t, n = []) {
    i != null && (this.label = i.toString()), t != null && (this.coords = t), n != null && (this.bcs = new Set(n));
  }
  change2(i) {
    i.label != null && (this.label = i.label.toString()), i.coords != null && (this.coords = i.coords), i.bcs != null && (this.bcs = new Set(i.bcs)), i.lcs != null && this.updateLcs(i.lcs);
  }
  getLocationArray(i) {
    return this.domain.solver.getNodeLocationArray(this.label, i);
  }
  getUnknowns(i, t) {
    const n = this.getLocationArray(t);
    return De(i.r, ve(n));
  }
  getEigenValueUnknowns(i, t, n) {
    const r = this.getLocationArray(t);
    return De(i.eigenVectors[n], ve(r));
  }
  /**
   * Returns receiver transformation matrix (from nodal to global c.s., ie. rg=t*r_n)
   * @param dofs dofs mask to consider
   */
  getTransformationMtrx(i) {
    const t = i.length;
    if (this.lcs == null)
      return it(t);
    {
      const n = He([t, t]);
      for (let r = 0; r < t; r++) {
        const a = i[r];
        switch (a) {
          case Pe.Dx:
          case Pe.Dy:
          case Pe.Dz:
            for (let u = 0; u < t; u++) {
              const f = i[u];
              (f == Pe.Dx || f == Pe.Dy || f == Pe.Dz) && (n[r][u] = this.lcs[f][a]);
            }
            break;
          case Pe.Rx:
          case Pe.Ry:
          case Pe.Rz:
            for (let u = 0; u < t; u++) {
              const f = i[u];
              (f == Pe.Rx || f == Pe.Ry || f == Pe.Rz) && (n[r][u] = this.lcs[f - Pe.Rx][a - Pe.Rx]);
            }
            break;
          default:
            throw new TypeError("Unknown DofID: " + a);
        }
      }
      return ye(n);
    }
  }
  /**
   * Updates the reciver lcs triplet according to given lcs orientation
   * @param lcs
   */
  updateLcs(i) {
    if (i == null)
      this.lcs = void 0;
    else {
      this.lcs = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      const t = Ai(i.locx), n = Ai(i.locy);
      for (let r = 0; r < 3; r++)
        this.lcs[0][r] = i.locx[r] / t, this.lcs[1][r] = i.locy[r] / n;
      this.lcs[2][0] = this.lcs[0][1] * this.lcs[1][2] - this.lcs[0][2] * this.lcs[1][1], this.lcs[2][1] = this.lcs[0][2] * this.lcs[1][0] - this.lcs[0][0] * this.lcs[1][2], this.lcs[2][2] = this.lcs[0][0] * this.lcs[1][1] - this.lcs[0][1] * this.lcs[1][0];
    }
  }
  /**
   * Returns true if receiver has local c.s.
   */
  hasLcs() {
    return this.lcs != null;
  }
  getReactions(i, t = !1) {
    if (t && this.hasLcs()) {
      const n = this.domain.solver.getNodeDofIDs(this.label), r = this.getLocationArray(n), a = [];
      for (let f = 0; f < n.length; f++)
        this.bcs.has(n[f]) ? a.push(De(i.R, ve([r[f] - this.domain.solver.neq]))) : a.push(0);
      const u = this.getTransformationMtrx(n);
      return {
        dofs: n,
        values: ie(u, a).toArray()
      };
    } else if (this.bcs.size > 0) {
      const n = Array.from(this.bcs), r = this.getLocationArray(n), a = tr(r, this.domain.solver.neq), u = De(i.R, ve(a));
      return z0(u) === "number" ? { dofs: n, values: [u] } : { dofs: n, values: u };
    } else
      return { dofs: [], values: [] };
  }
}
class j0 {
  // domain reference
  /**
   * Constructor
   * @param label new label
   * @param nodes element nodes
   * @param mat element material number
   * @param cs element cross section number
   */
  constructor(i, t, n, r, a) {
    se(this, "label");
    //element number
    se(this, "nodes");
    // element nodes
    se(this, "mat");
    // material
    se(this, "cs");
    // cross section
    se(this, "domain");
    this.label = i.toString(), this.nodes = n.map((u) => u.toString()), this.mat = r.toString(), this.cs = a.toString(), this.domain = t;
  }
  /**
   * Change receiver properties
   * @param label new label
   * @param nodes nodes
   * @param mat new material (number)
   * @param cs new cross section (number)
   */
  change(i, t, n, r) {
    i != null && (this.label = i.toString()), t != null && (this.nodes = t.map((a) => a.toString())), n != null && (this.mat = n.toString()), r != null && (this.cs = r.toString());
  }
  /**
   * Returns Material (object) associated to element
   */
  getMaterial() {
    return this.domain.getMaterial(this.mat);
  }
  /**
   * Returns Cross Section (object) associated to element
   */
  getCS() {
    return this.domain.getCS(this.cs);
  }
  /**
   * Returns array of DOFs for given node
   * @param node node id
   */
  getNodeDofs(i) {
    return [];
  }
  /**
   * Computes global stiffness matrix of element
   */
  computeStiffness() {
  }
  /**
   * Computes global mass matrix of element
   */
  computeMassMatrix() {
  }
  /**
   * Returns element code numbers
   */
  getLocationArray() {
  }
  /**
   * Returns object with element geometry
   */
  computeGeo() {
  }
  /**
   * Returns element transformation matrix frol global to local c.s
   */
  computeT() {
    return ye();
  }
}
class eh extends j0 {
  /**
   * Constructor
   * @param label element label (num)
   * @param nodes element nodes
   * @param mat element material (num)
   * @param cs element cross section (num)
   * @param hinges array of two boolean values indicating if hinge is present at start or end
   */
  constructor(t, n, r, a, u, f = [!1, !1]) {
    super(t, n, r, a, u);
    se(this, "hinges");
    // indicates element hinges
    se(this, "diagonalMassMatrix", !1);
    this.hinges = f;
  }
  getNodeDofs(t) {
    return [Pe.Dx, Pe.Dz, Pe.Ry];
  }
  getLocationArray() {
    let t = Array();
    for (const n of this.nodes)
      t = t.concat(this.domain.solver.getNodeLocationArray(n, [Pe.Dx, Pe.Dz, Pe.Ry]));
    return t;
  }
  // evaluates l, dx, dz
  /**
   * Returns Beam2D geometry object containing l: length, dx: element projection in to x axis, dz: element projection in z axis
   */
  computeGeo() {
    const t = this.domain.getNode(this.nodes[0]).coords, n = this.domain.getNode(this.nodes[1]).coords, r = n[0] - t[0], a = n[2] - t[2];
    return { l: Math.sqrt(r * r + a * a), dx: r, dz: a };
  }
  /**
   * Returns tru if element has start or end hinge (or both)
   */
  hasHinges() {
    return this.hinges[0] || this.hinges[1];
  }
  /**
   * Computes element transformation matrix from local to global (nodal) c.s.
   */
  computeT() {
    const t = this.computeGeo(), n = t.dx / t.l, r = t.dz / t.l;
    let a = ye([
      [n, r, 0, 0, 0, 0],
      [-r, n, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, n, r, 0],
      [0, 0, 0, -r, n, 0],
      [0, 0, 0, 0, 0, 1]
    ]);
    if (this.domain.getNode(this.nodes[0]).hasLcs() || this.domain.getNode(this.nodes[1]).hasLcs()) {
      let u = He(6);
      u = De(
        u,
        ve([0, 1, 2], [0, 1, 2]),
        this.domain.getNode(this.nodes[0]).getTransformationMtrx(this.getNodeDofs(this.nodes[0]))
      ), u = De(
        u,
        ve([3, 4, 5], [3, 4, 5]),
        this.domain.getNode(this.nodes[1]).getTransformationMtrx(this.getNodeDofs(this.nodes[1]))
      ), a = ie(a, u);
    }
    return a;
  }
  /**
   * Computes Beam2D local stifness matrix
   * @param retCondenseSubMats when true, extended info on condensed DOFs is provided
   */
  computeLocalStiffnessMtrx(t = !1) {
    const n = this.computeGeo(), r = this.getMaterial(), a = this.getCS(), u = r.e * a.a, f = r.e * a.iy, c = n.l, h = c * c, s = h * c, o = 12 * f / (a.k * r.g * a.a * c * c), l = 1 + o, v = ye([
      [u / c, 0, 0, -u / c, 0, 0],
      [0, 12 * f / s / l, -6 * f / h / l, 0, -12 * f / s / l, -6 * f / h / l],
      [0, -6 * f / h / l, (4 + o) * f / c / l, 0, 6 * f / h / l, (2 - o) * f / c / l],
      [-u / c, 0, 0, u / c, 0, 0],
      [0, -12 * f / s / l, 6 * f / h / l, 0, 12 * f / s / l, 6 * f / h / l],
      [0, -6 * f / h / l, (2 - o) * f / c / l, 0, 6 * f / h / l, (4 + o) * f / c / l]
    ]);
    if (this.hasHinges()) {
      if (this.hinges[0] && this.hinges[1])
        var g = [0, 1, 3, 4], p = [2, 5];
      else if (this.hinges[0])
        var g = [0, 1, 3, 4, 5], p = [2];
      else if (this.hinges[1])
        var g = [0, 1, 2, 3, 4], p = [5];
      const m = v.subset(ve(g, g)), d = v.subset(ve(g, p)), y = v.subset(ve(p, p)), D = tr(m, ie(ie(d, rr(y)), Oe(d)));
      let A = He(6, 6);
      return A = De(A, ve(g, g), D), t ? {
        answer: A,
        a: g,
        b: p,
        kaa: m,
        kab: d,
        kbb: y
      } : { answer: A };
    }
    return { answer: v };
  }
  /**
   * Computes local initial stress matrix
   * @param N normal force
   */
  computeLocalInitialStressMtrx(t) {
    const n = this.computeGeo(), r = this.getMaterial(), a = this.getCS(), u = n.l, f = u * u, c = t / u, h = 12 * r.e * a.iy / (a.k * r.g * a.a * u * u), s = h * h, o = ye([
      [0, 0, 0, 0, 0, 0],
      [0, 6 / 5 + 2 * h + s, -u / 10, 0, -6 / 5 - 2 * h - s, -u / 10],
      [
        0,
        -u / 10,
        2 * f / 15 + f * h / 6 + f * s / 12,
        0,
        u / 10,
        -f / 30 - f * h / 6 - f * s / 12
      ],
      [0, 0, 0, 0, 0, 0],
      [0, -6 / 5 - 2 * h - s, u / 10, 0, 6 / 5 + 2 * h + s, u / 10],
      [
        0,
        -u / 10,
        -f / 30 - f * h / 6 - f * s / 12,
        0,
        u / 10,
        2 * f / 15 + f * h / 6 + f * s / 12
      ]
    ]);
    ie(o, c / (1 + h) / (1 + h));
    const l = Math.min(Math.abs(o[1][1]), Math.abs(o[2][2])) / 1e3;
    if (o[0][0] = l, o[0][3] = -l, o[3][0] = -l, o[3][3] = l, this.hasHinges()) {
      const v = this.computeLocalStiffnessMtrx(!0), g = nt(v.a)[0], p = He(6, g);
      De(p, ve(v.a, Lr(0, g)), it(g)), De(
        p,
        ve(v.b, Lr(0, g)),
        ie(ie(rr(v.kbb), Oe(v.kab)), -1)
      );
      const m = ie(Oe(p), ie(o, p)), d = He(6, 6);
      return De(v.a, ve(v.a, v.a), m), d;
    }
    return o;
  }
  /**
   * Computes Beam2D local stifness matrix
   * @param retCondenseSubMats when true, extended info on condensed DOFs is provided
   */
  computeLocalMassMatrix(t = !1) {
    const n = this.computeGeo(), r = this.getMaterial(), a = this.getCS(), u = n.l, f = u * u;
    if (!this.diagonalMassMatrix)
      return ie(
        r.d * a.a * u / 420,
        ye([
          [140, 0, 0, 70, 0, 0],
          [0, 156, -22 * u, 0, 54, 13 * u],
          [0, -22 * u, 4 * u * u, 0, -13 * u, -3 * u * u],
          [70, 0, 0, 140, 0, 0],
          [0, 54, -13 * u, 0, 156, 22 * u],
          [0, 13 * u, -3 * u * u, 0, 22 * u, 4 * u * u]
        ])
      );
    const c = 1 / 78;
    return ie(
      r.d * a.a * u,
      ye([
        [1 / 2, 0, 0, 0, 0, 0],
        [0, 1 / 2, 0, 0, 0, 0],
        [0, 0, c * f, 0, 0, 0],
        [0, 0, 0, 1 / 2, 0, 0],
        [0, 0, 0, 0, 1 / 2, 0],
        [0, 0, 0, 0, 0, c * f]
      ])
    );
  }
  /**
   * Evaluate element stiffness matrix in global c.s.
   */
  computeStiffness() {
    this.computeGeo();
    const t = this.computeLocalStiffnessMtrx(), n = this.computeT();
    return ie(ie(Oe(n), t.answer), n);
  }
  /**
   * Evaluate element mass matrix in global c.s.
   */
  computeMassMatrix() {
    this.computeGeo();
    const t = this.computeLocalMassMatrix(), n = this.computeT();
    return ie(ie(Oe(n), t), n);
  }
  /**
   * Evaluates initial stress matrix in global c.s.
   * @param N Element normal force
   */
  computeInitialStressMatrix(t) {
    const n = this.computeLocalInitialStressMtrx(t), r = this.computeT();
    return ie(ie(Oe(r), n), r);
  }
  /**
   * Computes element end displacement vector (in element local c.s.)
   * @param r global vector of unknowns
   */
  computeEndDisplacement(t) {
    const n = this.computeT(), r = this.getLocationArray();
    let a = ie(n, De(t.r, ve(r)));
    if (this.hasHinges()) {
      const u = this.computeLocalStiffnessMtrx(!0);
      let f = He(6);
      for (const c of t.getElementLoadsOnElement(this.label))
        f = ar(f, c.getLoadVectorForClampedBeam());
      this.hasHinges() && (a = De(
        a,
        ve(u.b),
        ie(
          rr(u.kbb),
          ie(
            ar(
              De(f, ve(u.b)),
              br(ie(Oe(u.kab), De(a, ve(u.a))))
            ),
            -1
          )
        )
      ));
    }
    return a;
  }
  /**
   * Computes element end forces (in element local c.s.)
   * @param lc load case reference
   */
  computeEndForces(t) {
    const n = this.computeT(), r = this.getLocationArray(), a = ie(n, De(t.r, ve(r))), u = this.computeLocalStiffnessMtrx(!0);
    let f = ie(u.answer, a), c = He(6);
    for (const h of t.getElementLoadsOnElement(this.label))
      c = ar(c, h.getLoadVectorForClampedBeam());
    if (this.hasHinges()) {
      const h = ie(u.kab, rr(u.kbb));
      if (u.b.length == 1) {
        const s = c.get(u.b);
        for (let o = 0; o < u.a.length; o++)
          f.set([u.a[o]], f.get([u.a[o]]) + c.get([u.a[o]]) - h.get([o, 0]) * s);
      } else {
        const s = tr(
          De(c, ve(u.a)),
          ie(h, De(c, ve(u.b)))
        );
        f = ar(f, De(f, ve(u.a), s));
      }
    } else
      f = ar(f, c);
    return f;
  }
  // Hermite-interpolated local deflection at normalized position xl in [0,1], plus load contributions
  evalLocalDeflAt(t, n, r, a) {
    let u = (1 - 3 * r * r + 2 * r * r * r) * t.get([1]) + n * (-r + 2 * r * r - r * r * r) * t.get([2]) + (3 * r * r - 2 * r * r * r) * t.get([4]) + n * (r * r - r * r * r) * t.get([5]), f = (1 - r) * t.get([0]) + r * t.get([3]);
    for (const c of a) {
      const h = c.computeBeamDeflectionContrib(r);
      u += h.w, f += h.u;
    }
    return { u: f, w: u };
  }
  // Transforms a local (u,w) deflection pair to global c.s. using the element's cos/sin
  toGlobalDefl(t, n, r, a) {
    return { u: t * r - n * a, w: n * r + t * a };
  }
  /**
   * Computes nseg+1 values of local deflections
   * @param lc reference to load case
   * @param nseg deflection will be evaluated in nseg+1 points generated along the element
   */
  computeLocalDefl(t, n) {
    const r = this.computeEndDisplacement(t), u = this.computeGeo().l, f = t.getElementLoadsOnElement(this.label), c = [], h = [];
    for (let s = 0; s <= n; s++) {
      const o = this.evalLocalDeflAt(r, u, s / n, f);
      c.push(o.u), h.push(o.w);
    }
    return { u: c, w: h };
  }
  /**
   * Computes nseg+1 values of global deflections
   * @param lc reference to load case
   * @param nseg deflection will be evaluated in nseg+1 points generated along the element
   */
  computeGlobalDefl(t, n) {
    const r = this.computeLocalDefl(t, n), a = this.computeGeo(), u = a.dx / a.l, f = a.dz / a.l, c = [], h = [];
    for (let s = 0; s <= n; s++) {
      const o = this.toGlobalDefl(r.u[s], r.w[s], u, f);
      c.push(o.u), h.push(o.w);
    }
    return { u: c, w: h };
  }
  /**
   * Computes local deflection at a single point along the element
   * @param lc reference to load case
   * @param x distance from element start (in local c.s.)
   */
  computeLocalDeflAt(t, n) {
    const r = this.computeEndDisplacement(t), u = this.computeGeo().l, f = t.getElementLoadsOnElement(this.label);
    return this.evalLocalDeflAt(r, u, n / u, f);
  }
  /**
   * The slope of the deflection curve, dw/dx, at a normalized position.
   *
   * The Hermite polynomials of `evalLocalDeflAt` differentiated term by term. They are written in
   * x/l, so each brings a factor of the length out with it - which is why the two translation terms
   * are divided by it and the two rotation terms are not.
   */
  evalLocalSlopeAt(t, n, r, a) {
    let u = (-6 * r + 6 * r * r) * t.get([1]) / n + (-1 + 4 * r - 3 * r * r) * t.get([2]) + (6 * r - 6 * r * r) * t.get([4]) / n + (2 * r - 3 * r * r) * t.get([5]);
    for (const f of a)
      u += f.computeBeamSlopeContrib(r);
    return u;
  }
  /**
   * Computes the rotation of the cross section at a single point along the element
   *
   * The rotation is minus the slope of the deflection curve, which is the convention the end
   * displacement vector already uses: asked at either end, this returns the nodal rotation the
   * solver found there.
   *
   * A rotation about y is the same number in the element's axes and in the global ones - turning
   * the plane does not turn the section within it - so there is no global counterpart to this.
   *
   * @param lc reference to load case
   * @param x distance from element start (in local c.s.)
   */
  computeLocalRotationAt(t, n) {
    const r = this.computeEndDisplacement(t), u = this.computeGeo().l, f = t.getElementLoadsOnElement(this.label);
    return -this.evalLocalSlopeAt(r, u, n / u, f);
  }
  /**
   * Computes nseg+1 values of the cross section rotation
   * @param lc reference to load case
   * @param nseg rotation will be evaluated in nseg+1 points generated along the element
   */
  computeLocalRotation(t, n) {
    const r = this.computeEndDisplacement(t), u = this.computeGeo().l, f = t.getElementLoadsOnElement(this.label), c = [];
    for (let h = 0; h <= n; h++)
      c.push(-this.evalLocalSlopeAt(r, u, h / n, f));
    return c;
  }
  /**
   * Computes global deflection at a single point along the element
   * @param lc reference to load case
   * @param x distance from element start (in local c.s.)
   */
  computeGlobalDeflAt(t, n) {
    const r = this.computeLocalDeflAt(t, n), a = this.computeGeo(), u = a.dx / a.l, f = a.dz / a.l;
    return this.toGlobalDefl(r.u, r.w, u, f);
  }
  /**
   * Computes element end displacement vector (in element local c.s.)
   * @param r global vector of unknowns
   */
  computeEndDisplacementEigenMode(t, n) {
    const r = this.computeT(), a = this.getLocationArray();
    let u = ie(r, De(t.eigenVectors[n], ve(a)));
    if (this.hasHinges()) {
      const f = this.computeLocalStiffnessMtrx(!0), c = He(6);
      this.hasHinges() && (u = De(
        u,
        ve(f.b),
        ie(
          rr(f.kbb),
          ie(
            ar(
              De(c, ve(f.b)),
              br(ie(Oe(f.kab), De(u, ve(f.a))))
            ),
            -1
          )
        )
      ));
    }
    return u;
  }
  /**
   * Computes nseg+1 values of local deflections
   * @param lc reference to load case
   * @param nseg deflection will be evaluated in nseg+1 points generated along the element
   */
  computeLocalEigenMode(t, n, r) {
    const a = this.computeEndDisplacementEigenMode(t, n), u = [], f = [], h = this.computeGeo().l;
    for (let s = 0; s <= r; s++) {
      const o = s / r, l = (1 - 3 * o * o + 2 * o * o * o) * a.get([1]) + h * (-o + 2 * o * o - o * o * o) * a.get([2]) + (3 * o * o - 2 * o * o * o) * a.get([4]) + h * (o * o - o * o * o) * a.get([5]), v = (1 - o) * a.get([0]) + o * a.get([3]);
      u.push(v), f.push(l);
    }
    return { u, w: f };
  }
  /**
   * Computes nseg+1 values of global deflections
   * @param lc reference to load case
   * @param ntheig n-th eigen value
   * @param nseg deflection will be evaluated in nseg+1 points generated along the element
   */
  computeGlobalEigenMode(t, n, r) {
    const a = this.computeLocalEigenMode(t, n, r), u = this.computeGeo(), f = u.dx / u.l, c = u.dz / u.l, h = [], s = [];
    for (let o = 0; o <= r; o++)
      h.push(a.u[o] * f - a.w[o] * c), s.push(a.w[o] * f + a.u[o] * c);
    return { u: h, w: s };
  }
  /**
   * Computes the values of normal force along element
   * @param lc load case reference
   * @param nseg number of points-1
   */
  computeNormalForce(t, n) {
    const r = this.computeEndForces(t), a = this.computeGeo(), u = [], f = [], c = t.getElementLoadsOnElement(this.label);
    for (let h = 0; h <= n; h++) {
      const s = a.l * h / n;
      let o = -r.get([0]);
      for (const l of c)
        o += l.computeBeamNContrib(s);
      u.push(s), f.push(o);
    }
    return { x: u, N: f };
  }
  computeNormalForceAt(t, n) {
    const r = this.computeEndForces(t), a = t.getElementLoadsOnElement(this.label);
    let u = -r.get([0]);
    for (const f of a)
      u += f.computeBeamNContrib(n);
    return u;
  }
  /**
   * Computes the values of shear force along element
   * @param lc load case reference
   * @param nseg number of points-1
   */
  computeShearForce(t, n) {
    const r = this.computeEndForces(t), a = this.computeGeo(), u = [], f = [], c = t.getElementLoadsOnElement(this.label);
    for (let h = 0; h <= n; h++) {
      const s = a.l * h / n;
      let o = -r.get([1]);
      for (const l of c)
        o += l.computeBeamVContrib(s);
      u.push(s), f.push(o);
    }
    return { x: u, V: f };
  }
  computeShearForceAt(t, n) {
    const r = this.computeEndForces(t), a = t.getElementLoadsOnElement(this.label);
    let u = -r.get([1]);
    for (const f of a)
      u += f.computeBeamVContrib(n);
    return u;
  }
  /**
   * Computes the values of bending moment along element
   * @param lc load case reference
   * @param nseg number of points-1
   */
  computeBendingMoment(t, n) {
    const r = this.computeEndForces(t), a = this.computeGeo(), u = [], f = [], c = t.getElementLoadsOnElement(this.label);
    for (let h = 0; h <= n; h++) {
      const s = a.l * h / n;
      let o = -r.get([2]) - r.get([1]) * s;
      for (const l of c)
        o += l.computeBeamMContrib(s);
      u.push(s), f.push(o);
    }
    return { x: u, M: f };
  }
  computeBendingMomentAt(t, n) {
    const r = this.computeEndForces(t), a = t.getElementLoadsOnElement(this.label);
    let u = -r.get([2]) - r.get([1]) * n;
    for (const f of a)
      u += f.computeBeamMContrib(n);
    return u;
  }
}
class cn {
  /**
   * Returns load vector for clamped beam
   * @param elem element number
   */
  constructor(i, t) {
    se(this, "target");
    // component number the target is applied
    se(this, "domain");
    /**
     * Whether this load is taken into account.
     *
     * A load switched off stays in the model with its values intact - it simply does not reach the
     * load vector, and the element results do not see it either. Solve again and it is as if it were
     * not there; switch it back on and the numbers it had return.
     */
    se(this, "active", !0);
    /** A name for this load, for telling several of them apart. Empty unless someone gives it one. */
    se(this, "label", "");
    this.target = i.toString(), this.domain = t;
  }
  /**
   * Evaluates the contribution to the load vector
   */
  getLoadVector() {
    return [];
  }
  /**
   * Returns load code numbers
   */
  getLocationArray() {
    return [];
  }
}
class rh extends cn {
  constructor(t, n, r = {}) {
    super(t, n);
    se(this, "values");
    this.values = r;
  }
  change(t, n) {
    this.target = t.toString(), this.values = n;
  }
  getLoadVector() {
    const t = this.domain.solver.getNodeDofIDs(this.target), n = Array();
    for (const r of t)
      r in this.values ? n.push(this.values[r]) : n.push(0);
    return n;
  }
  getLocationArray() {
    return this.domain.solver.getNodeLocationArray(this.target, this.domain.solver.getNodeDofIDs(this.target));
  }
}
class ut extends cn {
  getLoadVectorForClampedBeam() {
    return [];
  }
  computeBeamDeflectionContrib(i) {
    return { u: 0, w: 0 };
  }
  /**
   * The slope this load adds to the deflection curve, dw/dx, at a normalized position.
   *
   * The rotation of a cross section is minus this. It is kept as a slope rather than as a rotation
   * so that the sign convention is settled once, where the terms are summed, rather than in every
   * load that contributes one.
   */
  computeBeamSlopeContrib(i) {
    return 0;
  }
  computeBeamNContrib(i) {
    return 0;
  }
  computeBeamVContrib(i) {
    return 0;
  }
  computeBeamMContrib(i) {
    return 0;
  }
}
class th extends ut {
  constructor(t, n, r, a) {
    super(t, n);
    se(this, "values");
    // Fx, Fz, My, distance x
    se(this, "lcs");
    this.values = r, this.lcs = a;
  }
  change(t, n, r) {
    this.target = t.toString(), this.values = n, this.lcs = r;
  }
  getGlobalIntensities() {
    const t = this.values[0], n = this.values[1], r = this.values[2];
    if (this.lcs) {
      const a = this.domain.getElement(this.target).computeGeo(), u = a.dx / a.l, f = a.dz / a.l;
      return { fx: t * u - n * f, fz: t * f + n * u, my: r };
    } else
      return { fx: t, fz: n, my: r };
  }
  getLocalIntensities() {
    const t = this.values[0], n = this.values[1], r = this.values[2], a = this.domain.getElement(this.target).computeGeo(), u = a.l, f = a.dx, c = a.dz, h = f / u, s = c / u;
    return this.lcs ? { fx: t, fz: n, my: r } : {
      fx: t * h + n * s,
      fz: -t * s + n * h,
      my: r
    };
  }
  getLoadVectorForClampedBeam() {
    const t = this.domain.getElement(this.target).computeGeo(), n = this.getLocalIntensities(), r = n.fx, a = n.fz, u = n.my, f = t.l, c = this.values[3], h = f - c;
    return [
      -h / f * r,
      h / f * (c * (c - h) / f / f - 1) * a - 6 * c * h * u / (f * f * f),
      c * h * h / f / f * a - h * (h - 2 * c) * u / (f * f),
      -c / f * r,
      c / f * (h * (h - c) / f / f - 1) * a + 6 * c * h * u / (f * f * f),
      -c * c * h / f / f * a - c * (c - 2 * h) * u / (f * f)
    ];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), r = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0), u = a.a, f = a.b, c = a.kab, h = a.kbb;
      let s = [0, 0, 0, 0, 0, 0];
      const o = ie(c, rr(h));
      if (f.length == 1) {
        const l = r[f[0]];
        for (let v = 0; v < u.length; v++)
          s[u[v]] = r[u[v]] - o.get([v, 0]) * l;
        return ie(ie(Oe(n), s), -1).toArray();
      } else {
        const l = tr(De(r, ve(u)), ie(o, De(r, ve(f))));
        return s = De(s, ve(u), l), ie(ie(Oe(n), s), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), r), -1).toArray();
  }
  computeBeamDeflectionContrib(t) {
    const n = this.getLocalIntensities(), u = this.domain.elements.get(this.target).computeGeo().l, f = n.fx, c = n.fz, h = n.my, s = this.domain.getElement(this.target).getMaterial().e, o = this.domain.getElement(this.target).getCS().a, l = this.domain.getElement(this.target).getCS().iy, v = this.values[3], g = u - v, p = g / u * (v * (v - g) / u / u - 1) * c, m = v * g * g / u / u * c, d = -6 * v * g * h / (u * u * u), y = -g * (g - 2 * v) * h / (u * u), D = s * l, A = s * o, E = t * u;
    let w = 0, F = 0;
    return E < v ? w += g / u * f * E / A : w += g / u * f * v / A - v / u * f * (E - v) / A, E > v ? F = (p * Math.pow(E, 3) / 6 + m * Math.pow(E, 2) / 2 + c * Math.pow(E - v, 3) / 6) / D : F = (p * Math.pow(E, 3) / 6 + m * Math.pow(E, 2) / 2) / D, E > v ? F += (d * Math.pow(E, 3) / 6 + y * Math.pow(E, 2) / 2 + h * Math.pow(E - v, 2) / 2) / D : F += (d * Math.pow(E, 3) / 6 + y * Math.pow(E, 2) / 2) / D, { u: w, w: F };
  }
  /**
   * The derivative of the deflection above. It is written in x already, so this is term by term -
   * and the branch is the same one, which is what makes the slope one sided at the load: a force
   * breaks the slope of the moment, and with it the curvature, but not the slope of the deflection,
   * so the two sides agree here while the shear either side of it does not.
   */
  computeBeamSlopeContrib(t) {
    const n = this.getLocalIntensities(), u = this.domain.elements.get(this.target).computeGeo().l, f = n.fz, c = n.my, h = this.domain.getElement(this.target).getMaterial().e, s = this.domain.getElement(this.target).getCS().iy, o = this.values[3], l = u - o, v = l / u * (o * (o - l) / u / u - 1) * f, g = o * l * l / u / u * f, p = -6 * o * l * c / (u * u * u), m = -l * (l - 2 * o) * c / (u * u), d = h * s, y = t * u;
    let D = (v * y * y / 2 + g * y + p * y * y / 2 + m * y) / d;
    return y > o && (D += (f * Math.pow(y - o, 2) / 2 + c * (y - o)) / d), D;
  }
  computeBeamNContrib(t) {
    const n = this.getLocalIntensities(), r = this.values[3];
    return t < r ? 0 : -n.fx;
  }
  computeBeamVContrib(t) {
    const n = this.getLocalIntensities(), r = this.values[3];
    return t < r ? 0 : -n.fz;
  }
  computeBeamMContrib(t) {
    const n = this.getLocalIntensities(), r = this.values[3];
    return t < r ? 0 : -n.fz * (t - r) - n.my;
  }
}
function Pt(e, i, t, n, r, a) {
  const u = e * e, f = u * e, c = 12 * i * r / (a * t * n * e * e), h = 1 + c;
  return ye([
    [i * n / e, 0, 0, -(i * n) / e, 0, 0],
    [0, 12 * i * r / f / h, -6 * i * r / u / h, 0, -12 * i * r / f / h, -6 * i * r / u / h],
    [
      0,
      -6 * i * r / u / h,
      (4 + c) * i * r / e / h,
      0,
      6 * i * r / u / h,
      (2 - c) * i * r / e / h
    ],
    [-(i * n) / e, 0, 0, i * n / e, 0, 0],
    [0, -12 * i * r / f / h, 6 * i * r / u / h, 0, 12 * i * r / f / h, 6 * i * r / u / h],
    [
      0,
      -6 * i * r / u / h,
      (2 - c) * i * r / e / h,
      0,
      6 * i * r / u / h,
      (4 + c) * i * r / e / h
    ]
  ]);
}
const Ft = class Ft extends ut {
  constructor(t, n, r, a) {
    super(t, n);
    se(this, "values");
    // Du, Dw, Dphi, distance x
    se(this, "lcs");
    this.values = r, this.lcs = a;
  }
  change(t, n, r) {
    this.target = t.toString(), this.values = n, this.lcs = r;
  }
  getLocalIntensities() {
    const t = this.values[0], n = this.values[1], r = this.values[2];
    if (this.lcs)
      return { du: t, dw: n, dphi: r };
    {
      const a = this.domain.getElement(this.target).computeGeo(), u = a.dx / a.l, f = a.dz / a.l;
      return { du: t * u + n * f, dw: -t * f + n * u, dphi: r };
    }
  }
  /**
   * Splits the element into two sub-beams (length a and b=l-a) at the imposed deformation
   * point and solves for the end displacements r_C1 (end of segment a) and r_C2 (start of
   * segment b) that satisfy internal equilibrium for a clamped-clamped (r_A=r_B=0) beam
   * with the prescribed relative jump r_C2-r_C1 = [Du, Dw, Dphi] enforced at the cut.
   */
  getSegmentEndDisplacements() {
    const t = this.domain.getElement(this.target), r = t.computeGeo().l, a = t.getMaterial(), u = t.getCS(), f = this.getLocalIntensities(), c = this.values[3], h = r - c, s = [f.du, f.dw, f.dphi], o = r * Ft.MIN_SEGMENT_RATIO;
    if (c <= o || h <= o) {
      const E = Pt(r, a.e, a.g, u.a, u.iy, u.k);
      if (c <= o)
        return {
          a: 0,
          b: r,
          l: r,
          kacEnd: E.subset(ve([0, 1, 2], [0, 1, 2])),
          kbcStart: E.subset(ve([3, 4, 5], [0, 1, 2])),
          rC1: s,
          rC2: s
        };
      const w = s.map((F) => -F);
      return {
        a: r,
        b: 0,
        l: r,
        kacEnd: E.subset(ve([0, 1, 2], [3, 4, 5])),
        kbcStart: E.subset(ve([3, 4, 5], [3, 4, 5])),
        rC1: w,
        rC2: w
      };
    }
    const l = Pt(c, a.e, a.g, u.a, u.iy, u.k), v = Pt(h, a.e, a.g, u.a, u.iy, u.k), g = l.subset(ve([0, 1, 2], [3, 4, 5])), p = l.subset(ve([3, 4, 5], [3, 4, 5])), m = v.subset(ve([0, 1, 2], [0, 1, 2])), d = v.subset(ve([3, 4, 5], [0, 1, 2])), y = rr(ar(p, m)), D = ie(ie(y, m), s).valueOf().map((E) => -E), A = ie(ie(y, p), s).valueOf();
    return { a: c, b: h, l: r, kacEnd: g, kbcStart: d, rC1: D, rC2: A };
  }
  getLoadVectorForClampedBeam() {
    const { kacEnd: t, kbcStart: n, rC1: r, rC2: a } = this.getSegmentEndDisplacements(), u = ie(t, r).valueOf(), f = ie(n, a).valueOf();
    return [u[0], u[1], u[2], f[0], f[1], f[2]];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), r = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0), u = a.a, f = a.b, c = a.kab, h = a.kbb;
      let s = [0, 0, 0, 0, 0, 0];
      const o = ie(c, rr(h));
      if (f.length == 1) {
        const l = r[f[0]];
        for (let v = 0; v < u.length; v++)
          s[u[v]] = r[u[v]] - o.get([v, 0]) * l;
        return ie(ie(Oe(n), s), -1).toArray();
      } else {
        const l = tr(De(r, ve(u)), ie(o, De(r, ve(f))));
        return s = De(s, ve(u), l), ie(ie(Oe(n), s), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), r), -1).toArray();
  }
  // Deflection of the clamped-clamped primary structure (r_A=r_B=0), interpolated with
  // standard Hermite shape functions on each side of the imposed deformation point.
  computeBeamDeflectionContrib(t) {
    const { a: n, b: r, l: a, rC1: u, rC2: f } = this.getSegmentEndDisplacements(), c = t * a;
    if (c <= n) {
      const h = n === 0 ? 0 : c / n, s = h * u[0], o = (3 * h * h - 2 * h * h * h) * u[1] + n * (h * h - h * h * h) * u[2];
      return { u: s, w: o };
    } else {
      const h = c - n, s = r === 0 ? 0 : h / r, o = (1 - s) * f[0], l = (1 - 3 * s * s + 2 * s * s * s) * f[1] + r * (-s + 2 * s * s - s * s * s) * f[2];
      return { u: o, w: l };
    }
  }
  /**
   * The derivative of the deflection above, taken within whichever sub-beam the point falls in.
   *
   * Each sub-beam has its own normalized coordinate, so each brings its own length out of the
   * derivative. A sub-beam of no length is the degenerate case the deflection already guards: there
   * is no interval to differentiate over, and the slope belongs to the other one.
   */
  computeBeamSlopeContrib(t) {
    const { a: n, b: r, l: a, rC1: u, rC2: f } = this.getSegmentEndDisplacements(), c = t * a;
    if (c <= n) {
      if (n === 0)
        return 0;
      const s = c / n;
      return (6 * s - 6 * s * s) / n * u[1] + (2 * s - 3 * s * s) * u[2];
    }
    if (r === 0)
      return 0;
    const h = (c - n) / r;
    return (-6 * h + 6 * h * h) / r * f[1] + (-1 + 4 * h - 3 * h * h) * f[2];
  }
  // An imposed deformation is a "dislocation": it produces a jump in displacement, not
  // in internal forces, so N, V and M stay continuous (no contribution to add here).
  computeBeamNContrib(t) {
    return 0;
  }
  computeBeamVContrib(t) {
    return 0;
  }
  computeBeamMContrib(t) {
    return 0;
  }
};
/** Below this fraction of the element length a sub-beam counts as having no length at all. */
se(Ft, "MIN_SEGMENT_RATIO", 1e-9);
let Kt = Ft;
class nh extends ut {
  // true if values in element local c.s (along length)
  constructor(t, n, r, a) {
    super(t, n);
    se(this, "values");
    // fx, fz intensities
    se(this, "lcs");
    this.values = r, this.lcs = a;
  }
  change(t, n, r) {
    this.target = t.toString(), this.values = n, this.lcs = r;
  }
  getGlobalIntensities() {
    const t = this.values[0], n = this.values[1];
    if (this.lcs) {
      const r = this.domain.getElement(this.target).computeGeo(), a = r.dx / r.l, u = r.dz / r.l;
      return { fx: t * a - n * u, fz: t * u + n * a, my: 0 };
    } else
      return { fx: t, fz: n, my: 0 };
  }
  getLocalIntensities() {
    const t = this.values[0], n = this.values[1], r = this.domain.getElement(this.target).computeGeo(), a = r.l, u = r.dx, f = r.dz, c = u / a, h = f / a;
    return this.lcs ? { fx: t, fz: n } : {
      fx: t * c + n * h,
      fz: -t * h + n * c
    };
  }
  // in local c.s
  getLoadVectorForClampedBeam() {
    const t = this.domain.getElement(this.target).computeGeo(), n = this.getLocalIntensities(), r = n.fx, a = n.fz, u = t.l;
    return [-0.5 * u * r, -0.5 * u * a, 1 / 12 * a * u * u, -0.5 * u * r, -0.5 * u * a, -1 / 12 * a * u * u];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), r = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0);
      let u = [0, 0, 0, 0, 0, 0];
      const f = ie(a.kab, rr(a.kbb));
      if (a.b.length == 1) {
        const c = r[a.b[0]];
        for (let h = 0; h < a.a.length; h++)
          u[a.a[h]] = r[a.a[h]] - f.get([h, 0]) * c;
        return ie(ie(Oe(n), u), -1).toArray();
      } else {
        const c = tr(
          De(r, ve(a.a)),
          ie(f, De(r, ve(a.b)))
        );
        return u = De(u, ve(a.a), c), ie(ie(Oe(n), u), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), r), -1).toArray();
  }
  computeBeamDeflectionContrib(t) {
    const n = this.getLocalIntensities(), r = this.domain.elements.get(this.target), u = r.computeGeo().l;
    return { u: 0, w: n.fz * u * u * u * u * (t * t * t * t / 24 - t * t * t / 12 + t * t / 24) / (r.getMaterial().e * r.getCS().iy) };
  }
  /**
   * The derivative of the deflection above, term by term: the fourth power falls to a third, and
   * the factor of the length falls with it because the polynomial is in x/l and this is in x.
   */
  computeBeamSlopeContrib(t) {
    const n = this.getLocalIntensities(), r = this.domain.elements.get(this.target), u = r.computeGeo().l;
    return n.fz * u * u * u * (t * t * t / 6 - t * t / 4 + t / 12) / (r.getMaterial().e * r.getCS().iy);
  }
  computeBeamNContrib(t) {
    return -this.getLocalIntensities().fx * t;
  }
  computeBeamVContrib(t) {
    return -this.getLocalIntensities().fz * t;
  }
  computeBeamMContrib(t) {
    return -this.getLocalIntensities().fz * t * t / 2;
  }
}
const ih = 1e-12, mr = (e) => e > 0 ? e : 0, ln = (e) => (e.q1 - e.q0) / (e.b - e.a), Yr = (e) => !(e.b - e.a > ih), Mr = (e, i) => {
  if (Yr(e))
    return 0;
  const t = ln(e), n = e.q0 - t * e.a, { a: r, b: a } = e;
  return n * (Math.pow(a, i + 1) - Math.pow(r, i + 1)) / (i + 1) + t * (Math.pow(a, i + 2) - Math.pow(r, i + 2)) / (i + 2);
}, Ei = (e, i) => {
  if (Yr(e))
    return 0;
  const t = Math.min(Math.max(i, e.a), e.b);
  return Mr({ ...e, b: t, q1: za(e, t) }, 0);
}, ah = (e, i) => {
  if (Yr(e))
    return 0;
  const t = Math.min(Math.max(i, e.a), e.b), n = { ...e, b: t, q1: za(e, t) };
  return Mr(n, 0) * i - Mr(n, 1);
}, za = (e, i) => {
  if (Yr(e))
    return 0;
  const t = Math.min(Math.max(i, e.a), e.b);
  return e.q0 + ln(e) * (t - e.a);
}, Ci = (e, i) => {
  const t = Mr(e, 0), n = Mr(e, 1), r = Mr(e, 2), a = Mr(e, 3);
  return {
    /** deflection at the first node */
    w1: t - 3 * r / (i * i) + 2 * a / (i * i * i),
    /** rotation at the first node */
    r1: n - 2 * r / i + a / (i * i),
    /** deflection at the second node */
    w2: 3 * r / (i * i) - 2 * a / (i * i * i),
    /** rotation at the second node */
    r2: -r / i + a / (i * i),
    /** axial, at the first and the second node */
    u1: t - n / i,
    u2: n / i
  };
}, Ta = (e, i) => {
  const t = ln(e), { a: n, b: r, q0: a, q1: u } = e, f = (v) => a * Math.pow(mr(v - n), 4) / 24 + t * Math.pow(mr(v - n), 5) / 120 - u * Math.pow(mr(v - r), 4) / 24 - t * Math.pow(mr(v - r), 5) / 120, c = (v) => a * Math.pow(mr(v - n), 3) / 6 + t * Math.pow(mr(v - n), 4) / 24 - u * Math.pow(mr(v - r), 3) / 6 - t * Math.pow(mr(v - r), 4) / 24, h = f(i), s = c(i), o = 12 * h / (i * i * i) - 6 * s / (i * i), l = 2 * s / i - 6 * h / (i * i);
  return { p: f, dp: c, c2: l, c3: o };
}, uh = (e, i, t) => {
  if (Yr(e))
    return 0;
  const { p: n, c2: r, c3: a } = Ta(e, i);
  return n(t) + r * t * t / 2 + a * t * t * t / 6;
}, oh = (e, i, t) => {
  if (Yr(e))
    return 0;
  const { dp: n, c2: r, c3: a } = Ta(e, i);
  return n(t) + r * t + a * t * t / 2;
};
class sh extends ut {
  constructor(t, n, r, a, u, f, c) {
    super(t, n);
    se(this, "startValues");
    // fx, fz where the load starts
    se(this, "endValues");
    // fx, fz where the load ends
    se(this, "lcs");
    // true if values provided in element local c.s.
    /**
     * Where the load sits on the element, as distances from its first node.
     *
     * Left alone it covers the whole element, which is what a trapezoidal load used to be and what
     * the closed forms below were written for. Given a position, it covers that part of it and the
     * intensities belong to the ends of the load rather than to the ends of the element.
     */
    se(this, "from");
    se(this, "to");
    this.startValues = r, this.endValues = a, this.lcs = u, this.from = f, this.to = c;
  }
  change(t, n, r, a, u, f) {
    this.target = t.toString(), this.startValues = n, this.endValues = r, this.lcs = a, this.from = u, this.to = f;
  }
  /** The length of the element this load is on. */
  elementLength() {
    return this.domain.getElement(this.target).computeGeo().l;
  }
  /**
   * Whether the load covers the whole element.
   *
   * The answer decides which arithmetic is used: over the whole element the original closed forms
   * stand untouched, and only a load given a position goes the other way.
   */
  partial() {
    const t = this.elementLength(), { a: n, b: r } = this.span(0, 0);
    return !(Math.abs(n) < 1e-12 && Math.abs(r - t) < 1e-12);
  }
  /** Where the load sits and what it carries there, in the element's own length units. */
  span(t, n) {
    const r = this.elementLength(), a = (c) => Math.min(Math.max(c, 0), r), u = a(this.from ?? 0), f = a(this.to ?? r);
    return u <= f ? { a: u, b: f, q0: t, q1: n } : (
      // given back to front, it is still the same load
      { a: f, b: u, q0: n, q1: t }
    );
  }
  getGlobalIntensities() {
    const t = { fx: this.startValues[0], fz: this.startValues[1] }, n = { fx: this.endValues[0], fz: this.endValues[1] };
    if (this.lcs) {
      const r = this.domain.getElement(this.target).computeGeo(), a = r.dx / r.l, u = r.dz / r.l;
      return {
        start: { fx: t.fx * a - t.fz * u, fz: t.fx * u + t.fz * a },
        end: { fx: n.fx * a - n.fz * u, fz: n.fx * u + n.fz * a }
      };
    }
    return { start: t, end: n };
  }
  getLocalIntensities() {
    const t = { fx: this.startValues[0], fz: this.startValues[1] }, n = { fx: this.endValues[0], fz: this.endValues[1] };
    if (!this.lcs) {
      const r = this.domain.getElement(this.target).computeGeo(), a = r.dx / r.l, u = r.dz / r.l;
      return {
        start: { fx: t.fx * a + t.fz * u, fz: -t.fx * u + t.fz * a },
        end: { fx: n.fx * a + n.fz * u, fz: -n.fx * u + n.fz * a }
      };
    }
    return { start: t, end: n };
  }
  // load vector in local c.s.
  getLoadVectorForClampedBeam() {
    const n = this.domain.getElement(this.target).computeGeo().l, r = this.getLocalIntensities();
    if (this.partial()) {
      const p = Ci(this.span(r.start.fz, r.end.fz), n), m = Ci(this.span(r.start.fx, r.end.fx), n);
      return [-m.u1, -p.w1, p.r1, -m.u2, -p.w2, p.r2];
    }
    const a = r.start.fx, u = r.end.fx, f = r.start.fz, c = r.end.fz, h = -n / 6 * (2 * a + u), s = -n / 6 * (a + 2 * u), o = -n / 20 * (7 * f + 3 * c), l = -n / 20 * (3 * f + 7 * c), v = n * n * (f / 20 + c / 30), g = -n * n * (f / 30 + c / 20);
    return [h, o, v, s, l, g];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), r = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0);
      let u = [0, 0, 0, 0, 0, 0];
      const f = ie(a.kab, rr(a.kbb));
      if (a.b.length == 1) {
        const c = r[a.b[0]];
        for (let h = 0; h < a.a.length; h++)
          u[a.a[h]] = r[a.a[h]] - f.get([h, 0]) * c;
        return ie(ie(Oe(n), u), -1).toArray();
      } else {
        const c = tr(
          De(r, ve(a.a)),
          ie(f, De(r, ve(a.b)))
        );
        return u = De(u, ve(a.a), c), ie(ie(Oe(n), u), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), r), -1).toArray();
  }
  computeBeamDeflectionContrib(t) {
    const n = this.domain.getElement(this.target), a = n.computeGeo().l, u = this.getLocalIntensities(), f = u.start.fz, c = u.end.fz, h = c - f;
    if (this.partial()) {
      const p = n.getMaterial().e * n.getCS().iy;
      return { u: 0, w: uh(this.span(f, c), a, t * a) / p };
    }
    const s = t, o = Math.pow(s, 4) / 24 - Math.pow(s, 3) / 12 + Math.pow(s, 2) / 24, l = Math.pow(s, 5) / 120 - Math.pow(s, 3) / 40 + Math.pow(s, 2) / 60, v = n.getMaterial().e * n.getCS().iy;
    return { u: 0, w: a ** 4 / v * (f * o + h * l) };
  }
  /** The derivative of the two polynomials above, in x rather than in x/l. */
  computeBeamSlopeContrib(t) {
    const n = this.domain.getElement(this.target), a = n.computeGeo().l, u = this.getLocalIntensities(), f = u.start.fz, c = u.end.fz, h = c - f, s = t;
    if (this.partial()) {
      const g = n.getMaterial().e * n.getCS().iy;
      return oh(this.span(f, c), a, t * a) / g;
    }
    const o = Math.pow(s, 3) / 6 - Math.pow(s, 2) / 4 + s / 12, l = Math.pow(s, 4) / 24 - 3 * Math.pow(s, 2) / 40 + s / 30, v = n.getMaterial().e * n.getCS().iy;
    return a ** 3 / v * (f * o + h * l);
  }
  computeBeamNContrib(t) {
    const n = this.getLocalIntensities(), a = this.domain.getElement(this.target).computeGeo().l, u = n.start.fx, f = n.end.fx, c = f - u;
    return this.partial() ? -Ei(this.span(u, f), t) : -(u * t + 0.5 * c * (t * t) / a);
  }
  computeBeamVContrib(t) {
    const n = this.getLocalIntensities(), a = this.domain.getElement(this.target).computeGeo().l, u = n.start.fz, f = n.end.fz, c = f - u;
    return this.partial() ? -Ei(this.span(u, f), t) : -(u * t + 0.5 * c * (t * t) / a);
  }
  computeBeamMContrib(t) {
    const n = this.getLocalIntensities(), a = this.domain.getElement(this.target).computeGeo().l, u = n.start.fz, f = n.end.fz, c = f - u;
    return this.partial() ? -ah(this.span(u, f), t) : -(0.5 * u * t * t + c / (6 * a) * t * t * t);
  }
}
class fh extends ut {
  // fx, fz intensities
  constructor(t, n, r) {
    super(t, n);
    se(this, "values");
    this.values = r;
  }
  change(t, n) {
    this.target = t.toString(), this.values = n;
  }
  // in local c.s
  getLoadVectorForClampedBeam() {
    const t = this.domain.getElement(this.target).getMaterial(), n = this.domain.getElement(this.target).getCS(), r = t.e, a = t.alpha, u = n.a, f = n.iy, c = n.h, h = this.values[1] - this.values[2];
    return [
      +r * u * a * this.values[0],
      0,
      +(r * f * a * h) / c,
      -r * u * a * this.values[0],
      0,
      -(r * f * a * h) / c
    ];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), r = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0);
      let u = [0, 0, 0, 0, 0, 0];
      const f = ie(a.kab, rr(a.kbb));
      if (a.b.length == 1) {
        const c = r[a.b[0]];
        for (let h = 0; h < a.a.length; h++)
          u[a.a[h]] = r[a.a[h]] - f.get([h, 0]) * c;
        return ie(ie(Oe(n), u), -1).toArray();
      } else {
        const c = tr(
          De(r, ve(a.a)),
          ie(f, De(r, ve(a.b)))
        );
        return u = De(u, ve(a.a), c), ie(ie(Oe(n), u), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), r), -1).toArray();
  }
  computeBeamDeflectionContrib(t) {
    return { u: 0, w: 0 };
  }
  /** A temperature load bends the element through its end forces, not through a term of its own. */
  computeBeamSlopeContrib(t) {
    return 0;
  }
  computeBeamNContrib(t) {
    return 0;
  }
  computeBeamVContrib(t) {
    return 0;
  }
  computeBeamMContrib(t) {
    return 0;
  }
}
class ch extends cn {
  // prescribed values of individual DOFs
  /**
   * Constructor
   */
  constructor(t, n, r) {
    super(t, n);
    se(this, "prescribedValues");
    this.prescribedValues = r;
  }
  getNodePrescribedDisplacementVector() {
    const t = new Array(), n = this.domain.solver.getNodeDofIDs(this.target);
    for (const r of n)
      r in this.prescribedValues ? t.push(this.prescribedValues[r]) : t.push(0);
    return t;
  }
  getLocationArray() {
    return this.domain.solver.getNodeLocationArray(this.target, this.domain.solver.getNodeDofIDs(this.target));
  }
}
const lh = {};
class hh {
  // torsional stiffness moment [m4]
  /**
   * Constructor
   * @param label string label of receiver
   * @param a cross section area of receiver [m2]. > 0.0
   * @param iy area moment of inertia (second moment of area) with respect to y axis [m4]. > 0.0
   * @param iz area moment of inertia (second moment of area) with respect to z axis [m4]. > 0.0
   * @param dyz product moment of area with respect to yz axes [m4]
   * @param h height of receiver [m]
   * @param k Timoshenko's shear coefficient [-]
   * @param j torsional stiffness moment [m4]
   */
  constructor(i, t = {}) {
    se(this, "label");
    // label of receiver
    se(this, "a");
    // cross section area of receiver [m2]. > 0.0
    se(this, "iy");
    // area moment of inertia (second moment of area) with respect to y axis [m4]. > 0.0
    se(this, "iz");
    // area moment of inertia (second moment of area) with respect to z axis [m4]. > 0.0
    se(this, "dyz");
    // product moment of area with respect to yz axes [m4]
    se(this, "h");
    // height of receiver [m]
    se(this, "k");
    // Timoshenko's shear coefficient [-]
    se(this, "j");
    this.label = i.toString(), t = { ...lh, ...t }, this.a = t.a, this.iy = t.iy, this.iz = t.iz, this.dyz = t.dyz, this.h = t.h, this.k = t.k, this.j = t.j;
  }
  /**
   * Change receiver properties
   * @param a cross section area of receiver [m2]. > 0.0
   * @param iy area moment of inertia (second moment of area) with respect to y axis [m4]. > 0.0
   * @param iz area moment of inertia (second moment of area) with respect to z axis [m4]. > 0.0
   * @param dyz product moment of area with respect to yz axes [m4]
   * @param h height of receiver [m]
   * @param k Timoshenko's shear coefficient [-]
   * @param j torsional stiffness moment [m4]
   */
  change(i) {
    i.a != null && (this.a = i.a), i.iy != null && (this.iy = i.iy), i.iz != null && (this.iz = i.iz), i.dyz != null && (this.dyz = i.dyz), i.h != null && (this.h = i.h), i.k != null && (this.k = i.k), i.j != null && (this.j = i.j);
  }
}
const vh = { e: 1, g: 1, alpha: 1, d: 1 };
class ph {
  // mass density [kg/m3]
  /**
   * @param  label int label of receiver
   * @param  e Young's modulus of receiver [Pa]
   * @param g  Shear modulus of receiver [Pa]
   * @param alpha thermal dillatation coefficient [K-1]
   * @param d mass density of receiver [kg/m3]
   */
  constructor(i, t = {}) {
    se(this, "label");
    //  label
    se(this, "e");
    // Young's modulus [Pa]
    se(this, "g");
    // Shear modulus [Pa]
    se(this, "alpha");
    // thermal dillatation coefficient [K-1]
    se(this, "d");
    this.label = i.toString(), t = { ...vh, ...t }, this.e = t.e, this.g = t.g, this.alpha = t.alpha, this.d = t.d;
  }
  /**
   * Change receiver properties
   * @param  e Young's modulus of receiver [Pa]
   * @param g  Shear modulus of receiver [Pa]
   * @param alpha thermal dillatation coefficient [K-1]
   * @param d mass density of receiver [kg/m3]
   */
  change(i) {
    i.e !== void 0 && (this.e = i.e), i.g !== void 0 && (this.g = i.g), i.alpha !== void 0 && (this.alpha = i.alpha), i.d !== void 0 && (this.d = i.d);
  }
}
class dh {
  /**
   * Constructor
   */
  constructor(i) {
    se(this, "solver");
    se(this, "nodes", /* @__PURE__ */ new Map());
    se(this, "elements", /* @__PURE__ */ new Map());
    se(this, "materials", /* @__PURE__ */ new Map());
    se(this, "crossSections", /* @__PURE__ */ new Map());
    this.solver = i;
  }
  getNode(i) {
    const t = i.toString();
    if (this.nodes.has(t))
      return this.nodes.get(t);
    throw new RangeError("Node label " + i + " does not exists");
  }
  getElement(i) {
    const t = i.toString();
    if (this.elements.has(t))
      return this.elements.get(t);
    throw new RangeError("Element label " + i + " does not exists");
  }
  getMaterial(i) {
    const t = i.toString();
    if (this.materials.has(t))
      return this.materials.get(t);
    throw new RangeError("Material label " + i + " does not exists");
  }
  getCS(i) {
    const t = i.toString();
    if (this.crossSections.has(t))
      return this.crossSections.get(t);
    throw new RangeError("CrossSection label " + i + " does not exists");
  }
  // class factory
  createNode(i, t = [0, 0, 0], n = []) {
    const r = new k0(i, this, t, n);
    return this.nodes.set(i.toString(), r), r;
  }
  createBeam2D(i, t, n, r, a = [!1, !1]) {
    const u = new eh(i, this, t, n, r, a);
    return this.elements.set(i.toString(), u), u;
  }
  createMaterial(i, t = {}) {
    const n = new ph(i, t);
    return this.materials.set(i.toString(), n), n;
  }
  createCrossSection(i, t = {}) {
    const n = new hh(i, t);
    return this.crossSections.set(i.toString(), n), n;
  }
}
class mh {
  constructor() {
    se(this, "domain");
    se(this, "neq");
    // number of unknowns
    se(this, "pneq");
    // number of prescribed unknowns
    se(this, "k");
    se(this, "m");
    se(this, "f");
    se(this, "loadCases", new Array());
    se(this, "codeNumberGenerated", !1);
    // code numbers assigned to supported as well as free DOFs
    se(this, "nodeCodeNumbers", /* @__PURE__ */ new Map());
    this.domain = new dh(this), this.loadCases.push(new gh("DefaultLC", this.domain));
  }
  getNodeLocationArray(i, t) {
    let n = [];
    for (const r of t)
      n = n.concat(this.nodeCodeNumbers.get(i)[r]);
    return n;
  }
  getNodeDofIDs(i) {
    const t = [];
    for (const n in this.nodeCodeNumbers.get(i))
      t.push(parseInt(n));
    return t;
  }
  generateCodeNumbers() {
    const i = /* @__PURE__ */ new Map();
    for (const [r, a] of this.domain.nodes)
      this.nodeCodeNumbers.set(r, {}), i.set(r, /* @__PURE__ */ new Set());
    for (const [r, a] of this.domain.elements)
      for (const u of a.nodes) {
        const f = a.getNodeDofs(u);
        for (const c of f)
          if (i.has(u))
            i.get(u).add(c);
          else
            throw console.log(u, u in i, i.get(u)), new RangeError("Node label " + u + " does not exists");
      }
    this.neq = 0, this.pneq = 0;
    for (const [r, a] of this.domain.nodes)
      for (const u of i.get(r))
        a.bcs.has(u) ? this.pneq++ : this.neq++;
    let t = 0, n = this.neq;
    for (const [r, a] of this.domain.nodes)
      for (const u of i.get(r))
        a.bcs.has(u) ? this.nodeCodeNumbers.get(r)[u] = n++ : this.nodeCodeNumbers.get(r)[u] = t++;
    this.codeNumberGenerated = !0;
  }
  assembleVecLC(i, t, n, r) {
    for (let a = 0; a < n.length; a++)
      i.set([n[a], r], i.get([n[a], r]) + t[a]);
  }
  assembleVec(i, t, n) {
    for (let r = 0; r < n.length; r++)
      i.set([n[r]], i.get([n[r]]) + t[r]);
  }
}
class wh extends mh {
  assemble() {
    this.k = He(this.neq + this.pneq, this.neq + this.pneq);
    for (const [i, t] of this.domain.elements) {
      const n = t.computeStiffness(), r = t.getLocationArray(), a = nt(r)[0];
      for (let u = 0; u < a; u++) {
        const f = r[u];
        for (let c = 0; c < a; c++) {
          const h = r[c];
          this.k.set([f, h], this.k.get([f, h]) + n.get([u, c]));
        }
      }
    }
    this.f = He(this.neq + this.pneq, this.loadCases.length);
    for (let i = 0; i < this.loadCases.length; i++) {
      this.loadCases[i].r = He(this.neq + this.pneq);
      const t = this.loadCases[i];
      for (const n of t.nodalLoadList)
        n.active && this.assembleVecLC(this.f, n.getLoadVector(), n.getLocationArray(), i);
      for (const n of t.elementLoadList)
        n.active && this.assembleVecLC(this.f, n.getLoadVector(), n.getLocationArray(), i);
      for (const n of t.prescribedBC)
        n.active && this.assembleVec(t.r, n.getNodePrescribedDisplacementVector(), n.getLocationArray());
    }
  }
  solve() {
    const i = /* @__PURE__ */ new Date();
    this.codeNumberGenerated || this.generateCodeNumbers();
    const t = Lr(0, this.neq), n = Lr(this.neq, this.neq + this.pneq);
    if (this.assemble(), this.neq > 0)
      for (let u = 0; u < this.loadCases.length; u++) {
        this.loadCases[u].solved = !1;
        const f = De(this.loadCases[u].r, ve(n)), c = ie(De(this.k, ve(t, n)), f);
        let h = De(this.k, ve(t, t));
        typeof h == "number" && (h = ye([[h]]));
        let s = De(this.f, ve(t, [u]));
        typeof s == "number" && (s = ye([s]));
        const o = tr(br(s), c), l = br(K0(h, o));
        this.loadCases[u].r = De(this.loadCases[u].r, ve(Lr(0, this.neq)), l), this.loadCases[u].R = De(ie(this.k, this.loadCases[u].r), ve(n)), this.loadCases[u].R = tr(
          this.loadCases[u].R,
          br(De(this.f, ve(n, [u])))
        ), this.loadCases[u].solved = !0;
      }
    else
      for (let u = 0; u < this.loadCases.length; u++)
        this.loadCases[u].R = br(ie(this.k, this.loadCases[u].r)), this.loadCases[u].R = tr(
          this.loadCases[u].R,
          br(De(this.f, ve(n, [u])))
        ), this.loadCases[u].solved = !0;
    const a = (/* @__PURE__ */ new Date()).getTime() - i.getTime();
    console.log("Solution took ", Math.round(a * 100) / 100, " [ms]");
  }
}
class gh {
  /**
   * Creates a new loadcase
   * @param label load case name
   */
  constructor(i, t) {
    se(this, "label");
    se(this, "domain");
    // domain reference
    // dictionary (map), key is node number, value is PrescribedDisplacement object applied
    se(this, "bcMap", {});
    // Array of loads applied
    se(this, "nodalLoadList", new Array());
    se(this, "elementLoadList", new Array());
    se(this, "prescribedBC", new Array());
    // solution vector
    se(this, "r", He(0));
    // vector of reactions
    se(this, "R", He(0));
    // omegas
    se(this, "eigenNumbers", []);
    se(this, "eigenVectors", []);
    se(this, "solved", !1);
    this.label = i, this.domain = t;
  }
  /**
   * Returns list of applied element loads on element with given number
   * param e element number
   */
  getElementLoadsOnElement(i) {
    const t = [];
    for (const n of this.elementLoadList)
      n.target == i && n.active && t.push(n);
    return t;
  }
  //class factory
  createNodalLoad(i, t = {}) {
    const n = new rh(i, this.domain, t);
    return this.nodalLoadList.push(n), n;
  }
  createBeamElementUniformEdgeLoad(i, t, n) {
    const r = new nh(i, this.domain, t, n);
    return this.elementLoadList.push(r), r;
  }
  /** `from` and `to` are distances from the element's first node; left out, the load covers it all. */
  createBeamElementTrapezoidalEdgeLoad(i, t, n, r, a, u) {
    const f = new sh(i, this.domain, t, n, r, a, u);
    return this.elementLoadList.push(f), f;
  }
  createBeamConcentratedLoad(i, t, n) {
    const r = new th(i, this.domain, t, n);
    return this.elementLoadList.push(r), r;
  }
  createBeamConcentratedDeformation(i, t, n) {
    const r = new Kt(i, this.domain, t, n);
    return this.elementLoadList.push(r), r;
  }
  createBeamTemperatureLoad(i, t) {
    const n = new fh(i, this.domain, t);
    return this.elementLoadList.push(n), n;
  }
  createPrescribedDisplacement(i, t) {
    const n = new ch(i, this.domain, t);
    return this.prescribedBC.push(n), n;
  }
}
var Pe = /* @__PURE__ */ ((e) => (e[e.Dx = 0] = "Dx", e[e.Dy = 1] = "Dy", e[e.Dz = 2] = "Dz", e[e.Rx = 3] = "Rx", e[e.Ry = 4] = "Ry", e[e.Rz = 5] = "Rz", e))(Pe || {});
export {
  eh as Beam2D,
  Kt as BeamConcentratedDeformation,
  th as BeamConcentratedLoad,
  ut as BeamElementLoad,
  sh as BeamElementTrapezoidalEdgeLoad,
  nh as BeamElementUniformEdgeLoad,
  fh as BeamTemperatureLoad,
  hh as CrossSection,
  Pe as DofID,
  dh as Domain,
  j0 as Element,
  wh as LinearStaticSolver,
  cn as Load,
  gh as LoadCase,
  ph as Material,
  rh as NodalLoad,
  k0 as Node,
  ch as PrescribedDisplacement,
  mh as Solver
};
