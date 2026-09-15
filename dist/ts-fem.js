var tu = Object.defineProperty;
var nu = (r, i, t) => i in r ? tu(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var fe = (r, i, t) => (nu(r, typeof i != "symbol" ? i + "" : i, t), t);
function Ir() {
  return Ir = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var t = arguments[i];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Ir.apply(this, arguments);
}
var gi = {
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
function $e(r) {
  return typeof r == "number";
}
function Re(r) {
  return !r || typeof r != "object" || typeof r.constructor != "function" ? !1 : r.isBigNumber === !0 && typeof r.constructor.prototype == "object" && r.constructor.prototype.isBigNumber === !0 || typeof r.constructor.isDecimal == "function" && r.constructor.isDecimal(r) === !0;
}
function Xt(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isComplex === !0 || !1;
}
function Ht(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isFraction === !0 || !1;
}
function Di(r) {
  return r && r.constructor.prototype.isUnit === !0 || !1;
}
function ir(r) {
  return typeof r == "string";
}
var Me = Array.isArray;
function _e(r) {
  return r && r.constructor.prototype.isMatrix === !0 || !1;
}
function st(r) {
  return Array.isArray(r) || _e(r);
}
function yi(r) {
  return r && r.isDenseMatrix && r.constructor.prototype.isMatrix === !0 || !1;
}
function wi(r) {
  return r && r.isSparseMatrix && r.constructor.prototype.isMatrix === !0 || !1;
}
function Ai(r) {
  return r && r.constructor.prototype.isRange === !0 || !1;
}
function Et(r) {
  return r && r.constructor.prototype.isIndex === !0 || !1;
}
function iu(r) {
  return typeof r == "boolean";
}
function au(r) {
  return r && r.constructor.prototype.isResultSet === !0 || !1;
}
function uu(r) {
  return r && r.constructor.prototype.isHelp === !0 || !1;
}
function ou(r) {
  return typeof r == "function";
}
function su(r) {
  return r instanceof Date;
}
function fu(r) {
  return r instanceof RegExp;
}
function Ei(r) {
  return !!(r && typeof r == "object" && r.constructor === Object && !Xt(r) && !Ht(r));
}
function cu(r) {
  return r === null;
}
function lu(r) {
  return r === void 0;
}
function hu(r) {
  return r && r.isAccessorNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function vu(r) {
  return r && r.isArrayNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function pu(r) {
  return r && r.isAssignmentNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function du(r) {
  return r && r.isBlockNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function mu(r) {
  return r && r.isConditionalNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function gu(r) {
  return r && r.isConstantNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function Du(r) {
  return r && r.isFunctionAssignmentNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function yu(r) {
  return r && r.isFunctionNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function wu(r) {
  return r && r.isIndexNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function Au(r) {
  return r && r.isNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function Eu(r) {
  return r && r.isObjectNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function Cu(r) {
  return r && r.isOperatorNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function Fu(r) {
  return r && r.isParenthesisNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function bu(r) {
  return r && r.isRangeNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function Mu(r) {
  return r && r.isRelationalNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function Su(r) {
  return r && r.isSymbolNode === !0 && r.constructor.prototype.isNode === !0 || !1;
}
function xu(r) {
  return r && r.constructor.prototype.isChain === !0 || !1;
}
function lr(r) {
  var i = typeof r;
  return i === "object" ? r === null ? "null" : Re(r) ? "BigNumber" : r.constructor && r.constructor.name ? r.constructor.name : "Object" : i;
}
function Fe(r) {
  var i = typeof r;
  if (i === "number" || i === "string" || i === "boolean" || r === null || r === void 0)
    return r;
  if (typeof r.clone == "function")
    return r.clone();
  if (Array.isArray(r))
    return r.map(function(t) {
      return Fe(t);
    });
  if (r instanceof Date)
    return new Date(r.valueOf());
  if (Re(r))
    return r;
  if (Ei(r))
    return Bu(r, Fe);
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(r, ")"));
}
function Bu(r, i) {
  var t = {};
  for (var n in r)
    Yr(r, n) && (t[n] = i(r[n]));
  return t;
}
function Nu(r, i) {
  for (var t in i)
    Yr(i, t) && (r[t] = i[t]);
  return r;
}
function Lr(r, i) {
  var t, n, e;
  if (Array.isArray(r)) {
    if (!Array.isArray(i) || r.length !== i.length)
      return !1;
    for (n = 0, e = r.length; n < e; n++)
      if (!Lr(r[n], i[n]))
        return !1;
    return !0;
  } else {
    if (typeof r == "function")
      return r === i;
    if (r instanceof Object) {
      if (Array.isArray(i) || !(i instanceof Object))
        return !1;
      for (t in r)
        if (!(t in i) || !Lr(r[t], i[t]))
          return !1;
      for (t in i)
        if (!(t in r))
          return !1;
      return !0;
    } else
      return r === i;
  }
}
function Yr(r, i) {
  return r && Object.hasOwnProperty.call(r, i);
}
function _u(r, i) {
  for (var t = {}, n = 0; n < i.length; n++) {
    var e = i[n], a = r[e];
    a !== void 0 && (t[e] = a);
  }
  return t;
}
var zu = ["Matrix", "Array"], Tu = ["number", "BigNumber", "Fraction"], je = function(i) {
  if (i)
    throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(gi);
};
Ir(je, gi, {
  MATRIX_OPTIONS: zu,
  NUMBER_OPTIONS: Tu
});
function on() {
  return !0;
}
function nr() {
  return !1;
}
function Nr() {
}
const sn = "Argument is not a typed-function.";
function Ci() {
  function r(B) {
    return typeof B == "object" && B !== null && B.constructor === Object;
  }
  const i = [{
    name: "number",
    test: function(B) {
      return typeof B == "number";
    }
  }, {
    name: "string",
    test: function(B) {
      return typeof B == "string";
    }
  }, {
    name: "boolean",
    test: function(B) {
      return typeof B == "boolean";
    }
  }, {
    name: "Function",
    test: function(B) {
      return typeof B == "function";
    }
  }, {
    name: "Array",
    test: Array.isArray
  }, {
    name: "Date",
    test: function(B) {
      return B instanceof Date;
    }
  }, {
    name: "RegExp",
    test: function(B) {
      return B instanceof RegExp;
    }
  }, {
    name: "Object",
    test: r
  }, {
    name: "null",
    test: function(B) {
      return B === null;
    }
  }, {
    name: "undefined",
    test: function(B) {
      return B === void 0;
    }
  }], t = {
    name: "any",
    test: on,
    isAny: !0
  };
  let n, e, a = 0, u = {
    createCount: 0
  };
  function l(B) {
    const _ = n.get(B);
    if (_)
      return _;
    let O = 'Unknown type "' + B + '"';
    const R = B.toLowerCase();
    let H;
    for (H of e)
      if (H.toLowerCase() === R) {
        O += '. Did you mean "' + H + '" ?';
        break;
      }
    throw new TypeError(O);
  }
  function f(B) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const O = _ ? l(_).index : e.length, R = [];
    for (let Y = 0; Y < B.length; ++Y) {
      if (!B[Y] || typeof B[Y].name != "string" || typeof B[Y].test != "function")
        throw new TypeError("Object with properties {name: string, test: function} expected");
      const ue = B[Y].name;
      if (n.has(ue))
        throw new TypeError('Duplicate type name "' + ue + '"');
      R.push(ue), n.set(ue, {
        name: ue,
        test: B[Y].test,
        isAny: B[Y].isAny,
        index: O + Y,
        conversionsTo: []
        // Newly added type can't have any conversions to it
      });
    }
    const H = e.slice(O);
    e = e.slice(0, O).concat(R).concat(H);
    for (let Y = O + R.length; Y < e.length; ++Y)
      n.get(e[Y]).index = Y;
  }
  function h() {
    n = /* @__PURE__ */ new Map(), e = [], a = 0, f([t], !1);
  }
  h(), f(i);
  function s() {
    let B;
    for (B of e)
      n.get(B).conversionsTo = [];
    a = 0;
  }
  function o(B) {
    const _ = e.filter((O) => {
      const R = n.get(O);
      return !R.isAny && R.test(B);
    });
    return _.length ? _ : ["any"];
  }
  function c(B) {
    return B && typeof B == "function" && "_typedFunctionData" in B;
  }
  function v(B, _, O) {
    if (!c(B))
      throw new TypeError(sn);
    const R = O && O.exact, H = Array.isArray(_) ? _.join(",") : _, Y = A(H), ue = m(Y);
    if (!R || ue in B.signatures) {
      const Be = B._typedFunctionData.signatureMap.get(ue);
      if (Be)
        return Be;
    }
    const te = Y.length;
    let ae;
    if (R) {
      ae = [];
      let Be;
      for (Be in B.signatures)
        ae.push(B._typedFunctionData.signatureMap.get(Be));
    } else
      ae = B._typedFunctionData.signatures;
    for (let Be = 0; Be < te; ++Be) {
      const Ie = Y[Be], Ue = [];
      let Ke;
      for (Ke of ae) {
        const Xe = b(Ke.params, Be);
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
    throw new TypeError("Signature not found (signature: " + (B.name || "unnamed") + "(" + m(Y, ", ") + "))");
  }
  function g(B, _, O) {
    return v(B, _, O).implementation;
  }
  function p(B, _) {
    const O = l(_);
    if (O.test(B))
      return B;
    const R = O.conversionsTo;
    if (R.length === 0)
      throw new Error("There are no conversions to " + _ + " defined.");
    for (let H = 0; H < R.length; H++)
      if (l(R[H].from).test(B))
        return R[H].convert(B);
    throw new Error("Cannot convert " + B + " to " + _);
  }
  function m(B) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return B.map((O) => O.name).join(_);
  }
  function d(B) {
    const _ = B.indexOf("...") === 0, R = (_ ? B.length > 3 ? B.slice(3) : "any" : B).split("|").map((te) => l(te.trim()));
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
  function w(B) {
    const _ = B.types.map((ue) => ue.name), O = Z(_);
    let R = B.hasAny, H = B.name;
    const Y = O.map(function(ue) {
      const te = l(ue.from);
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
      types: B.types.concat(Y),
      name: H,
      hasAny: R,
      hasConversion: Y.length > 0,
      restParam: B.restParam
    };
  }
  function D(B) {
    return B.typeSet || (B.typeSet = /* @__PURE__ */ new Set(), B.types.forEach((_) => B.typeSet.add(_.name))), B.typeSet;
  }
  function A(B) {
    const _ = [];
    if (typeof B != "string")
      throw new TypeError("Signatures must be strings");
    const O = B.trim();
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
  function E(B) {
    const _ = X(B);
    return _ ? _.restParam : !1;
  }
  function y(B) {
    if (!B || B.types.length === 0)
      return on;
    if (B.types.length === 1)
      return l(B.types[0].name).test;
    if (B.types.length === 2) {
      const _ = l(B.types[0].name).test, O = l(B.types[1].name).test;
      return function(H) {
        return _(H) || O(H);
      };
    } else {
      const _ = B.types.map(function(O) {
        return l(O.name).test;
      });
      return function(R) {
        for (let H = 0; H < _.length; H++)
          if (_[H](R))
            return !0;
        return !1;
      };
    }
  }
  function F(B) {
    let _, O, R;
    if (E(B)) {
      _ = Q(B).map(y);
      const H = _.length, Y = y(X(B)), ue = function(te) {
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
      return B.length === 0 ? function(Y) {
        return Y.length === 0;
      } : B.length === 1 ? (O = y(B[0]), function(Y) {
        return O(Y[0]) && Y.length === 1;
      }) : B.length === 2 ? (O = y(B[0]), R = y(B[1]), function(Y) {
        return O(Y[0]) && R(Y[1]) && Y.length === 2;
      }) : (_ = B.map(y), function(Y) {
        for (let ue = 0; ue < _.length; ue++)
          if (!_[ue](Y[ue]))
            return !1;
        return Y.length === _.length;
      });
  }
  function b(B, _) {
    return _ < B.length ? B[_] : E(B) ? X(B) : null;
  }
  function C(B, _) {
    const O = b(B, _);
    return O ? D(O) : /* @__PURE__ */ new Set();
  }
  function S(B) {
    return B.conversion === null || B.conversion === void 0;
  }
  function M(B, _) {
    const O = /* @__PURE__ */ new Set();
    return B.forEach((R) => {
      const H = C(R.params, _);
      let Y;
      for (Y of H)
        O.add(Y);
    }), O.has("any") ? ["any"] : Array.from(O);
  }
  function x(B, _, O) {
    let R, H;
    const Y = B || "unnamed";
    let ue = O, te;
    for (te = 0; te < _.length; te++) {
      const Ie = [];
      if (ue.forEach((Ue) => {
        const Ke = b(Ue.params, te), Xe = y(Ke);
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
    const Be = [];
    for (let Ie = 0; Ie < _.length; ++Ie)
      Be.push(o(_[Ie]).join("|"));
    return R = new TypeError('Arguments of type "' + Be.join(", ") + '" do not match any of the defined signatures of function ' + Y + "."), R.data = {
      category: "mismatch",
      actual: Be
    }, R;
  }
  function I(B) {
    let _ = e.length + 1;
    for (let O = 0; O < B.types.length; O++)
      S(B.types[O]) && (_ = Math.min(_, B.types[O].typeIndex));
    return _;
  }
  function T(B) {
    let _ = a + 1;
    for (let O = 0; O < B.types.length; O++)
      S(B.types[O]) || (_ = Math.min(_, B.types[O].conversionIndex));
    return _;
  }
  function L(B, _) {
    if (B.hasAny) {
      if (!_.hasAny)
        return 1;
    } else if (_.hasAny)
      return -1;
    if (B.restParam) {
      if (!_.restParam)
        return 1;
    } else if (_.restParam)
      return -1;
    if (B.hasConversion) {
      if (!_.hasConversion)
        return 1;
    } else if (_.hasConversion)
      return -1;
    const O = I(B) - I(_);
    if (O < 0)
      return -1;
    if (O > 0)
      return 1;
    const R = T(B) - T(_);
    return R < 0 ? -1 : R > 0 ? 1 : 0;
  }
  function N(B, _) {
    const O = B.params, R = _.params, H = X(O), Y = X(R), ue = E(O), te = E(R);
    if (ue && H.hasAny) {
      if (!te || !Y.hasAny)
        return 1;
    } else if (te && Y.hasAny)
      return -1;
    let ae = 0, re = 0, Be;
    for (Be of O)
      Be.hasAny && ++ae, Be.hasConversion && ++re;
    let Ie = 0, Ue = 0;
    for (Be of R)
      Be.hasAny && ++Ie, Be.hasConversion && ++Ue;
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
    for (let Br = 0; Br < O.length; ++Br) {
      const it = L(O[Br], R[Br]);
      Xe.push(it), ur += it;
    }
    if (ur !== 0)
      return ur;
    let or;
    for (or of Xe)
      if (or !== 0)
        return or;
    return 0;
  }
  function Z(B) {
    if (B.length === 0)
      return [];
    const _ = B.map(l);
    B.length > 1 && _.sort((H, Y) => H.index - Y.index);
    let O = _[0].conversionsTo;
    if (B.length === 1)
      return O;
    O = O.concat([]);
    const R = new Set(B);
    for (let H = 1; H < _.length; ++H) {
      let Y;
      for (Y of _[H].conversionsTo)
        R.has(Y.from) || (O.push(Y), R.add(Y.from));
    }
    return O;
  }
  function $(B, _) {
    let O = _;
    if (B.some((H) => H.hasConversion)) {
      const H = E(B), Y = B.map(z);
      O = function() {
        const te = [], ae = H ? arguments.length - 1 : arguments.length;
        for (let re = 0; re < ae; re++)
          te[re] = Y[re](arguments[re]);
        return H && (te[ae] = arguments[ae].map(Y[ae])), _.apply(this, te);
      };
    }
    let R = O;
    if (E(B)) {
      const H = B.length - 1;
      R = function() {
        return O.apply(this, J(arguments, 0, H).concat([J(arguments, H)]));
      };
    }
    return R;
  }
  function z(B) {
    let _, O, R, H;
    const Y = [], ue = [];
    switch (B.types.forEach(function(te) {
      te.conversion && (Y.push(l(te.conversion.from).test), ue.push(te.conversion.convert));
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
  function V(B) {
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
    return _(B, 0, []);
  }
  function K(B, _) {
    const O = Math.max(B.length, _.length);
    for (let te = 0; te < O; te++) {
      const ae = C(B, te), re = C(_, te);
      let Be = !1, Ie;
      for (Ie of re)
        if (ae.has(Ie)) {
          Be = !0;
          break;
        }
      if (!Be)
        return !1;
    }
    const R = B.length, H = _.length, Y = E(B), ue = E(_);
    return Y ? ue ? R === H : H >= R : ue ? R >= H : R === H;
  }
  function P(B) {
    return B.map((_) => Ae(_) ? me(_.referToSelf.callback) : ye(_) ? le(_.referTo.references, _.referTo.callback) : _);
  }
  function q(B, _, O) {
    const R = [];
    let H;
    for (H of B) {
      let Y = O[H];
      if (typeof Y != "number")
        throw new TypeError('No definition for referenced signature "' + H + '"');
      if (Y = _[Y], typeof Y != "function")
        return !1;
      R.push(Y);
    }
    return R;
  }
  function G(B, _, O) {
    const R = P(B), H = new Array(R.length).fill(!1);
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
        else if (ye(ae)) {
          const re = q(ae.referTo.references, R, _);
          re ? (R[te] = ae.referTo.callback.apply(this, re), R[te].referTo = ae.referTo, H[te] = !0, ue = !1) : Y = !0;
        }
      }
      if (ue && Y)
        throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return R;
  }
  function ne(B) {
    const _ = /\bthis(\(|\.signatures\b)/;
    Object.keys(B).forEach((O) => {
      const R = B[O];
      if (_.test(R.toString()))
        throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function k(B, _) {
    if (u.createCount++, Object.keys(_).length === 0)
      throw new SyntaxError("No signatures provided");
    u.warnAgainstDeprecatedThis && ne(_);
    const O = [], R = [], H = {}, Y = [];
    let ue;
    for (ue in _) {
      if (!Object.prototype.hasOwnProperty.call(_, ue))
        continue;
      const xe = A(ue);
      if (!xe)
        continue;
      O.forEach(function(Zr) {
        if (K(Zr, xe))
          throw new TypeError('Conflicting signatures "' + m(Zr) + '" and "' + m(xe) + '".');
      }), O.push(xe);
      const We = R.length;
      R.push(_[ue]);
      const eu = xe.map(w);
      let at;
      for (at of V(eu)) {
        const Zr = m(at);
        Y.push({
          params: at,
          name: Zr,
          fn: We
        }), at.every((ru) => !ru.hasConversion) && (H[Zr] = We);
      }
    }
    Y.sort(N);
    const te = G(R, H, Gr);
    let ae;
    for (ae in H)
      Object.prototype.hasOwnProperty.call(H, ae) && (H[ae] = te[H[ae]]);
    const re = [], Be = /* @__PURE__ */ new Map();
    for (ae of Y)
      Be.has(ae.name) || (ae.fn = te[ae.fn], re.push(ae), Be.set(ae.name, ae));
    const Ie = re[0] && re[0].params.length <= 2 && !E(re[0].params), Ue = re[1] && re[1].params.length <= 2 && !E(re[1].params), Ke = re[2] && re[2].params.length <= 2 && !E(re[2].params), Xe = re[3] && re[3].params.length <= 2 && !E(re[3].params), ur = re[4] && re[4].params.length <= 2 && !E(re[4].params), or = re[5] && re[5].params.length <= 2 && !E(re[5].params), Br = Ie && Ue && Ke && Xe && ur && or;
    for (let xe = 0; xe < re.length; ++xe)
      re[xe].test = F(re[xe].params);
    const it = Ie ? y(re[0].params[0]) : nr, Ma = Ue ? y(re[1].params[0]) : nr, Sa = Ke ? y(re[2].params[0]) : nr, xa = Xe ? y(re[3].params[0]) : nr, Ba = ur ? y(re[4].params[0]) : nr, Na = or ? y(re[5].params[0]) : nr, _a = Ie ? y(re[0].params[1]) : nr, za = Ue ? y(re[1].params[1]) : nr, Ta = Ke ? y(re[2].params[1]) : nr, Ia = Xe ? y(re[3].params[1]) : nr, La = ur ? y(re[4].params[1]) : nr, Oa = or ? y(re[5].params[1]) : nr;
    for (let xe = 0; xe < re.length; ++xe)
      re[xe].implementation = $(re[xe].params, re[xe].fn);
    const $a = Ie ? re[0].implementation : Nr, qa = Ue ? re[1].implementation : Nr, Pa = Ke ? re[2].implementation : Nr, Ra = Xe ? re[3].implementation : Nr, Ua = ur ? re[4].implementation : Nr, Va = or ? re[5].implementation : Nr, Ga = Ie ? re[0].params.length : -1, Za = Ue ? re[1].params.length : -1, Ya = Ke ? re[2].params.length : -1, Ja = Xe ? re[3].params.length : -1, Qa = ur ? re[4].params.length : -1, Xa = or ? re[5].params.length : -1, Ha = Br ? 6 : 0, Ka = re.length, Wa = re.map((xe) => xe.test), ka = re.map((xe) => xe.implementation), ja = function() {
      for (let We = Ha; We < Ka; We++)
        if (Wa[We](arguments))
          return ka[We].apply(this, arguments);
      return u.onMismatch(B, arguments, re);
    };
    function Gr(xe, We) {
      return arguments.length === Ga && it(xe) && _a(We) ? $a.apply(this, arguments) : arguments.length === Za && Ma(xe) && za(We) ? qa.apply(this, arguments) : arguments.length === Ya && Sa(xe) && Ta(We) ? Pa.apply(this, arguments) : arguments.length === Ja && xa(xe) && Ia(We) ? Ra.apply(this, arguments) : arguments.length === Qa && Ba(xe) && La(We) ? Ua.apply(this, arguments) : arguments.length === Xa && Na(xe) && Oa(We) ? Va.apply(this, arguments) : ja.apply(this, arguments);
    }
    try {
      Object.defineProperty(Gr, "name", {
        value: B
      });
    } catch {
    }
    return Gr.signatures = H, Gr._typedFunctionData = {
      signatures: re,
      signatureMap: Be
    }, Gr;
  }
  function U(B, _, O) {
    throw x(B, _, O);
  }
  function Q(B) {
    return J(B, 0, B.length - 1);
  }
  function X(B) {
    return B[B.length - 1];
  }
  function J(B, _, O) {
    return Array.prototype.slice.call(B, _, O);
  }
  function oe(B, _) {
    for (let O = 0; O < B.length; O++)
      if (_(B[O]))
        return B[O];
  }
  function j(B, _) {
    return Array.prototype.concat.apply([], B.map(_));
  }
  function se() {
    const B = Q(arguments).map((O) => m(A(O))), _ = X(arguments);
    if (typeof _ != "function")
      throw new TypeError("Callback function expected as last argument");
    return le(B, _);
  }
  function le(B, _) {
    return {
      referTo: {
        references: B,
        callback: _
      }
    };
  }
  function me(B) {
    if (typeof B != "function")
      throw new TypeError("Callback function expected as first argument");
    return {
      referToSelf: {
        callback: B
      }
    };
  }
  function ye(B) {
    return B && typeof B.referTo == "object" && Array.isArray(B.referTo.references) && typeof B.referTo.callback == "function";
  }
  function Ae(B) {
    return B && typeof B.referToSelf == "object" && typeof B.referToSelf.callback == "function";
  }
  function he(B, _) {
    if (!B)
      return _;
    if (_ && _ !== B) {
      const O = new Error("Function names do not match (expected: " + B + ", actual: " + _ + ")");
      throw O.data = {
        actual: _,
        expected: B
      }, O;
    }
    return B;
  }
  function be(B) {
    let _;
    for (const O in B)
      Object.prototype.hasOwnProperty.call(B, O) && (c(B[O]) || typeof B[O].signature == "string") && (_ = he(_, B[O].name));
    return _;
  }
  function Ee(B, _) {
    let O;
    for (O in _)
      if (Object.prototype.hasOwnProperty.call(_, O)) {
        if (O in B && _[O] !== B[O]) {
          const R = new Error('Signature "' + O + '" is defined twice');
          throw R.data = {
            signature: O,
            sourceFunction: _[O],
            destFunction: B[O]
          }, R;
        }
        B[O] = _[O];
      }
  }
  const Se = u;
  u = function(B) {
    const _ = typeof B == "string", O = _ ? 1 : 0;
    let R = _ ? B : "";
    const H = {};
    for (let Y = O; Y < arguments.length; ++Y) {
      const ue = arguments[Y];
      let te = {}, ae;
      if (typeof ue == "function" ? (ae = ue.name, typeof ue.signature == "string" ? te[ue.signature] = ue : c(ue) && (te = ue.signatures)) : r(ue) && (te = ue, _ || (ae = be(ue))), Object.keys(te).length === 0) {
        const re = new TypeError("Argument to 'typed' at index " + Y + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw re.data = {
          index: Y,
          argument: ue
        }, re;
      }
      _ || (R = he(R, ae)), Ee(H, te);
    }
    return k(R || "", H);
  }, u.create = Ci, u.createCount = Se.createCount, u.onMismatch = U, u.throwMismatchError = U, u.createError = x, u.clear = h, u.clearConversions = s, u.addTypes = f, u._findType = l, u.referTo = se, u.referToSelf = me, u.convert = p, u.findSignature = v, u.find = g, u.isTypedFunction = c, u.warnAgainstDeprecatedThis = !0, u.addType = function(B, _) {
    let O = "any";
    _ !== !1 && n.has("Object") && (O = "Object"), u.addTypes([B], O);
  };
  function Ve(B) {
    if (!B || typeof B.from != "string" || typeof B.to != "string" || typeof B.convert != "function")
      throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (B.to === B.from)
      throw new SyntaxError('Illegal to define conversion from "' + B.from + '" to itself.');
  }
  return u.addConversion = function(B) {
    Ve(B);
    const _ = l(B.to);
    if (_.conversionsTo.every(function(O) {
      return O.from !== B.from;
    }))
      _.conversionsTo.push({
        from: B.from,
        convert: B.convert,
        index: a++
      });
    else
      throw new Error('There is already a conversion from "' + B.from + '" to "' + _.name + '"');
  }, u.addConversions = function(B) {
    B.forEach(u.addConversion);
  }, u.removeConversion = function(B) {
    Ve(B);
    const _ = l(B.to), O = oe(_.conversionsTo, (H) => H.from === B.from);
    if (!O)
      throw new Error("Attempt to remove nonexistent conversion from " + B.from + " to " + B.to);
    if (O.convert !== B.convert)
      throw new Error("Conversion to remove does not match existing conversion");
    const R = _.conversionsTo.indexOf(O);
    _.conversionsTo.splice(R, 1);
  }, u.resolve = function(B, _) {
    if (!c(B))
      throw new TypeError(sn);
    const O = B._typedFunctionData.signatures;
    for (let R = 0; R < O.length; ++R)
      if (O[R].test(_))
        return O[R];
    return null;
  }, u;
}
const fn = Ci();
function ze(r) {
  return typeof r == "boolean" ? !0 : isFinite(r) ? r === Math.round(r) : !1;
}
var Iu = Math.sign || function(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
};
function zt(r, i, t) {
  var n = {
    2: "0b",
    8: "0o",
    16: "0x"
  }, e = n[i], a = "";
  if (t) {
    if (t < 1)
      throw new Error("size must be in greater than 0");
    if (!ze(t))
      throw new Error("size must be an integer");
    if (r > 2 ** (t - 1) - 1 || r < -(2 ** (t - 1)))
      throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
    if (!ze(r))
      throw new Error("Value must be an integer");
    r < 0 && (r = r + 2 ** t), a = "i".concat(t);
  }
  var u = "";
  return r < 0 && (r = -r, u = "-"), "".concat(u).concat(e).concat(r.toString(i)).concat(a);
}
function $t(r, i) {
  if (typeof i == "function")
    return i(r);
  if (r === 1 / 0)
    return "Infinity";
  if (r === -1 / 0)
    return "-Infinity";
  if (isNaN(r))
    return "NaN";
  var t = "auto", n, e;
  if (i && (i.notation && (t = i.notation), $e(i) ? n = i : $e(i.precision) && (n = i.precision), i.wordSize && (e = i.wordSize, typeof e != "number")))
    throw new Error('Option "wordSize" must be a number');
  switch (t) {
    case "fixed":
      return Ou(r, n);
    case "exponential":
      return Fi(r, n);
    case "engineering":
      return Lu(r, n);
    case "bin":
      return zt(r, 2, e);
    case "oct":
      return zt(r, 8, e);
    case "hex":
      return zt(r, 16, e);
    case "auto":
      return $u(r, n, i && i).replace(/((\.\d*?)(0+))($|e)/, function() {
        var a = arguments[2], u = arguments[4];
        return a !== "." ? a + u : u;
      });
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Ct(r) {
  var i = String(r).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!i)
    throw new SyntaxError("Invalid number " + r);
  var t = i[1], n = i[2], e = parseFloat(i[4] || "0"), a = n.indexOf(".");
  e += a !== -1 ? a - 1 : n.length - 1;
  var u = n.replace(".", "").replace(/^0*/, function(l) {
    return e -= l.length, "";
  }).replace(/0*$/, "").split("").map(function(l) {
    return parseInt(l);
  });
  return u.length === 0 && (u.push(0), e++), {
    sign: t,
    coefficients: u,
    exponent: e
  };
}
function Lu(r, i) {
  if (isNaN(r) || !isFinite(r))
    return String(r);
  var t = Ct(r), n = Ft(t, i), e = n.exponent, a = n.coefficients, u = e % 3 === 0 ? e : e < 0 ? e - 3 - e % 3 : e - e % 3;
  if ($e(i))
    for (; i > a.length || e - u + 1 > a.length; )
      a.push(0);
  else
    for (var l = Math.abs(e - u) - (a.length - 1), f = 0; f < l; f++)
      a.push(0);
  for (var h = Math.abs(e - u), s = 1; h > 0; )
    s++, h--;
  var o = a.slice(s).join(""), c = $e(i) && o.length || o.match(/[1-9]/) ? "." + o : "", v = a.slice(0, s).join("") + c + "e" + (e >= 0 ? "+" : "") + u.toString();
  return n.sign + v;
}
function Ou(r, i) {
  if (isNaN(r) || !isFinite(r))
    return String(r);
  var t = Ct(r), n = typeof i == "number" ? Ft(t, t.exponent + 1 + i) : t, e = n.coefficients, a = n.exponent + 1, u = a + (i || 0);
  return e.length < u && (e = e.concat(zr(u - e.length))), a < 0 && (e = zr(-a + 1).concat(e), a = 1), a < e.length && e.splice(a, 0, a === 0 ? "0." : "."), n.sign + e.join("");
}
function Fi(r, i) {
  if (isNaN(r) || !isFinite(r))
    return String(r);
  var t = Ct(r), n = i ? Ft(t, i) : t, e = n.coefficients, a = n.exponent;
  e.length < i && (e = e.concat(zr(i - e.length)));
  var u = e.shift();
  return n.sign + u + (e.length > 0 ? "." + e.join("") : "") + "e" + (a >= 0 ? "+" : "") + a;
}
function $u(r, i, t) {
  if (isNaN(r) || !isFinite(r))
    return String(r);
  var n = t && t.lowerExp !== void 0 ? t.lowerExp : -3, e = t && t.upperExp !== void 0 ? t.upperExp : 5, a = Ct(r), u = i ? Ft(a, i) : a;
  if (u.exponent < n || u.exponent >= e)
    return Fi(r, i);
  var l = u.coefficients, f = u.exponent;
  l.length < i && (l = l.concat(zr(i - l.length))), l = l.concat(zr(f - l.length + 1 + (l.length < i ? i - l.length : 0))), l = zr(-f).concat(l);
  var h = f > 0 ? f : 0;
  return h < l.length - 1 && l.splice(h + 1, 0, "."), u.sign + l.join("");
}
function Ft(r, i) {
  for (var t = {
    sign: r.sign,
    coefficients: r.coefficients,
    exponent: r.exponent
  }, n = t.coefficients; i <= 0; )
    n.unshift(0), t.exponent++, i++;
  if (n.length > i) {
    var e = n.splice(i, n.length - i);
    if (e[0] >= 5) {
      var a = i - 1;
      for (n[a]++; n[a] === 10; )
        n.pop(), a === 0 && (n.unshift(0), t.exponent++, a++), a--, n[a]++;
    }
  }
  return t;
}
function zr(r) {
  for (var i = [], t = 0; t < r; t++)
    i.push(0);
  return i;
}
function qu(r) {
  return r.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
var Pu = Number.EPSILON || 2220446049250313e-31;
function yr(r, i, t) {
  if (t == null)
    return r === i;
  if (r === i)
    return !0;
  if (isNaN(r) || isNaN(i))
    return !1;
  if (isFinite(r) && isFinite(i)) {
    var n = Math.abs(r - i);
    return n <= Pu ? !0 : n <= Math.max(Math.abs(r), Math.abs(i)) * t;
  }
  return !1;
}
function Tt(r, i, t) {
  var n = r.constructor, e = new n(2), a = "";
  if (t) {
    if (t < 1)
      throw new Error("size must be in greater than 0");
    if (!ze(t))
      throw new Error("size must be an integer");
    if (r.greaterThan(e.pow(t - 1).sub(1)) || r.lessThan(e.pow(t - 1).mul(-1)))
      throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
    if (!r.isInteger())
      throw new Error("Value must be an integer");
    r.lessThan(0) && (r = r.add(e.pow(t))), a = "i".concat(t);
  }
  switch (i) {
    case 2:
      return "".concat(r.toBinary()).concat(a);
    case 8:
      return "".concat(r.toOctal()).concat(a);
    case 16:
      return "".concat(r.toHexadecimal()).concat(a);
    default:
      throw new Error("Base ".concat(i, " not supported "));
  }
}
function Ru(r, i) {
  if (typeof i == "function")
    return i(r);
  if (!r.isFinite())
    return r.isNaN() ? "NaN" : r.gt(0) ? "Infinity" : "-Infinity";
  var t = "auto", n, e;
  if (i !== void 0 && (i.notation && (t = i.notation), typeof i == "number" ? n = i : i.precision !== void 0 && (n = i.precision), i.wordSize && (e = i.wordSize, typeof e != "number")))
    throw new Error('Option "wordSize" must be a number');
  switch (t) {
    case "fixed":
      return Vu(r, n);
    case "exponential":
      return cn(r, n);
    case "engineering":
      return Uu(r, n);
    case "bin":
      return Tt(r, 2, e);
    case "oct":
      return Tt(r, 8, e);
    case "hex":
      return Tt(r, 16, e);
    case "auto": {
      var a = i && i.lowerExp !== void 0 ? i.lowerExp : -3, u = i && i.upperExp !== void 0 ? i.upperExp : 5;
      if (r.isZero())
        return "0";
      var l, f = r.toSignificantDigits(n), h = f.e;
      return h >= a && h < u ? l = f.toFixed() : l = cn(r, n), l.replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2], o = arguments[4];
        return s !== "." ? s + o : o;
      });
    }
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Uu(r, i) {
  var t = r.e, n = t % 3 === 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3, e = r.mul(Math.pow(10, -n)), a = e.toPrecision(i);
  if (a.indexOf("e") !== -1) {
    var u = r.constructor;
    a = new u(a).toFixed();
  }
  return a + "e" + (t >= 0 ? "+" : "") + n.toString();
}
function cn(r, i) {
  return i !== void 0 ? r.toExponential(i - 1) : r.toExponential();
}
function Vu(r, i) {
  return r.toFixed(i);
}
function Le(r, i) {
  var t = Gu(r, i);
  return i && typeof i == "object" && "truncate" in i && t.length > i.truncate ? t.substring(0, i.truncate - 3) + "..." : t;
}
function Gu(r, i) {
  if (typeof r == "number")
    return $t(r, i);
  if (Re(r))
    return Ru(r, i);
  if (Zu(r))
    return !i || i.fraction !== "decimal" ? r.s * r.n + "/" + r.d : r.toString();
  if (Array.isArray(r))
    return bi(r, i);
  if (ir(r))
    return ln(r);
  if (typeof r == "function")
    return r.syntax ? String(r.syntax) : "function";
  if (r && typeof r == "object") {
    if (typeof r.format == "function")
      return r.format(i);
    if (r && r.toString(i) !== {}.toString())
      return r.toString(i);
    var t = Object.keys(r).map((n) => ln(n) + ": " + Le(r[n], i));
    return "{" + t.join(", ") + "}";
  }
  return String(r);
}
function ln(r) {
  for (var i = String(r), t = "", n = 0; n < i.length; ) {
    var e = i.charAt(n);
    t += e in hn ? hn[e] : e, n++;
  }
  return '"' + t + '"';
}
var hn = {
  '"': '\\"',
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
function bi(r, i) {
  if (Array.isArray(r)) {
    for (var t = "[", n = r.length, e = 0; e < n; e++)
      e !== 0 && (t += ", "), t += bi(r[e], i);
    return t += "]", t;
  } else
    return Le(r, i);
}
function Zu(r) {
  return r && typeof r == "object" && typeof r.s == "number" && typeof r.n == "number" && typeof r.d == "number" || !1;
}
function Ce(r, i, t) {
  if (!(this instanceof Ce))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = r, this.expected = i, this.relation = t, this.message = "Dimension mismatch (" + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + " " + (this.relation || "!=") + " " + (Array.isArray(i) ? "[" + i.join(", ") + "]" : i) + ")", this.stack = new Error().stack;
}
Ce.prototype = new RangeError();
Ce.prototype.constructor = RangeError;
Ce.prototype.name = "DimensionError";
Ce.prototype.isDimensionError = !0;
function br(r, i, t) {
  if (!(this instanceof br))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.index = r, arguments.length < 3 ? (this.min = 0, this.max = i) : (this.min = i, this.max = t), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
br.prototype = new RangeError();
br.prototype.constructor = RangeError;
br.prototype.name = "IndexError";
br.prototype.isIndexError = !0;
function qe(r) {
  for (var i = []; Array.isArray(r); )
    i.push(r.length), r = r[0];
  return i;
}
function Mi(r, i, t) {
  var n, e = r.length;
  if (e !== i[t])
    throw new Ce(e, i[t]);
  if (t < i.length - 1) {
    var a = t + 1;
    for (n = 0; n < e; n++) {
      var u = r[n];
      if (!Array.isArray(u))
        throw new Ce(i.length - 1, i.length, "<");
      Mi(r[n], i, a);
    }
  } else
    for (n = 0; n < e; n++)
      if (Array.isArray(r[n]))
        throw new Ce(i.length + 1, i.length, ">");
}
function vn(r, i) {
  var t = i.length === 0;
  if (t) {
    if (Array.isArray(r))
      throw new Ce(r.length, 0);
  } else
    Mi(r, i, 0);
}
function ft(r, i) {
  var t = r.isMatrix ? r._size : qe(r), n = i._sourceSize;
  n.forEach((e, a) => {
    if (e !== null && e !== t[a])
      throw new Ce(e, t[a]);
  });
}
function Ne(r, i) {
  if (r !== void 0) {
    if (!$e(r) || !ze(r))
      throw new TypeError("Index must be an integer (value: " + r + ")");
    if (r < 0 || typeof i == "number" && r >= i)
      throw new br(r, i);
  }
}
function Or(r) {
  for (var i = 0; i < r._dimensions.length; ++i) {
    var t = r._dimensions[i];
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
function ct(r, i, t) {
  if (!Array.isArray(i))
    throw new TypeError("Array expected");
  if (i.length === 0)
    throw new Error("Resizing to scalar is not supported");
  i.forEach(function(e) {
    if (!$e(e) || !ze(e) || e < 0)
      throw new TypeError("Invalid size, must contain positive integers (size: " + Le(i) + ")");
  }), ($e(r) || Re(r)) && (r = [r]);
  var n = t !== void 0 ? t : 0;
  return qt(r, i, 0, n), r;
}
function qt(r, i, t, n) {
  var e, a, u = r.length, l = i[t], f = Math.min(u, l);
  if (r.length = l, t < i.length - 1) {
    var h = t + 1;
    for (e = 0; e < f; e++)
      a = r[e], Array.isArray(a) || (a = [a], r[e] = a), qt(a, i, h, n);
    for (e = f; e < l; e++)
      a = [], r[e] = a, qt(a, i, h, n);
  } else {
    for (e = 0; e < f; e++)
      for (; Array.isArray(r[e]); )
        r[e] = r[e][0];
    for (e = f; e < l; e++)
      r[e] = n;
  }
}
function Kt(r, i) {
  var t = Pt(r), n = t.length;
  if (!Array.isArray(r) || !Array.isArray(i))
    throw new TypeError("Array expected");
  if (i.length === 0)
    throw new Ce(0, n, "!=");
  i = Wt(i, n);
  var e = Si(i);
  if (n !== e)
    throw new Ce(e, n, "!=");
  try {
    return Yu(t, i);
  } catch (a) {
    throw a instanceof Ce ? new Ce(e, n, "!=") : a;
  }
}
function Wt(r, i) {
  var t = Si(r), n = r.slice(), e = -1, a = r.indexOf(e), u = r.indexOf(e, a + 1) >= 0;
  if (u)
    throw new Error("More than one wildcard in sizes");
  var l = a >= 0, f = i % t === 0;
  if (l)
    if (f)
      n[a] = -i / t;
    else
      throw new Error("Could not replace wildcard, since " + i + " is no multiple of " + -t);
  return n;
}
function Si(r) {
  return r.reduce((i, t) => i * t, 1);
}
function Yu(r, i) {
  for (var t = r, n, e = i.length - 1; e > 0; e--) {
    var a = i[e];
    n = [];
    for (var u = t.length / a, l = 0; l < u; l++)
      n.push(t.slice(l * a, (l + 1) * a));
    t = n;
  }
  return t;
}
function pn(r, i) {
  for (var t = i || qe(r); Array.isArray(r) && r.length === 1; )
    r = r[0], t.shift();
  for (var n = t.length; t[n - 1] === 1; )
    n--;
  return n < t.length && (r = xi(r, n, 0), t.length = n), r;
}
function xi(r, i, t) {
  var n, e;
  if (t < i) {
    var a = t + 1;
    for (n = 0, e = r.length; n < e; n++)
      r[n] = xi(r[n], i, a);
  } else
    for (; Array.isArray(r); )
      r = r[0];
  return r;
}
function Bi(r, i, t, n) {
  var e = n || qe(r);
  if (t)
    for (var a = 0; a < t; a++)
      r = [r], e.unshift(1);
  for (r = Ni(r, i, 0); e.length < i; )
    e.push(1);
  return r;
}
function Ni(r, i, t) {
  var n, e;
  if (Array.isArray(r)) {
    var a = t + 1;
    for (n = 0, e = r.length; n < e; n++)
      r[n] = Ni(r[n], i, a);
  } else
    for (var u = t; u < i; u++)
      r = [r];
  return r;
}
function Pt(r) {
  if (!Array.isArray(r))
    return r;
  var i = [];
  return r.forEach(function t(n) {
    Array.isArray(n) ? n.forEach(t) : i.push(n);
  }), i;
}
function Jr(r, i) {
  for (var t, n = 0, e = 0; e < r.length; e++) {
    var a = r[e], u = Array.isArray(a);
    if (e === 0 && u && (n = a.length), u && a.length !== n)
      return;
    var l = u ? Jr(a, i) : i(a);
    if (t === void 0)
      t = l;
    else if (t !== l)
      return "mixed";
  }
  return t;
}
function _i(r, i, t, n) {
  if (n < t) {
    if (r.length !== i.length)
      throw new Ce(r.length, i.length);
    for (var e = [], a = 0; a < r.length; a++)
      e[a] = _i(r[a], i[a], t, n + 1);
    return e;
  } else
    return r.concat(i);
}
function zi() {
  var r = Array.prototype.slice.call(arguments, 0, -1), i = Array.prototype.slice.call(arguments, -1);
  if (r.length === 1)
    return r[0];
  if (r.length > 1)
    return r.slice(1).reduce(function(t, n) {
      return _i(t, n, i, 0);
    }, r[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function Ju() {
  for (var r = arguments.length, i = new Array(r), t = 0; t < r; t++)
    i[t] = arguments[t];
  for (var n = i.map((c) => c.length), e = Math.max(...n), a = new Array(e).fill(null), u = 0; u < i.length; u++)
    for (var l = i[u], f = n[u], h = 0; h < f; h++) {
      var s = e - f + h;
      l[h] > a[s] && (a[s] = l[h]);
    }
  for (var o = 0; o < i.length; o++)
    lt(i[o], a);
  return a;
}
function lt(r, i) {
  for (var t = i.length, n = r.length, e = 0; e < n; e++) {
    var a = t - n + e;
    if (r[e] < i[a] && r[e] > 1 || r[e] > i[a])
      throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(r, ") not possible to broadcast dimension ").concat(n, " with size ").concat(r[e], " to size ").concat(i[a]));
  }
}
function dn(r, i) {
  var t = qe(r);
  if (Lr(t, i))
    return r;
  lt(t, i);
  var n = Ju(t, i), e = n.length, a = [...Array(e - t.length).fill(1), ...t], u = Xu(r);
  t.length < e && (u = Kt(u, a), t = qe(u));
  for (var l = 0; l < e; l++)
    t[l] < n[l] && (u = Qu(u, n[l], l), t = qe(u));
  return u;
}
function Qu(r, i, t) {
  return zi(...Array(i).fill(r), t);
}
function Xu(r) {
  return Ir([], r);
}
function ee(r, i, t, n) {
  function e(a) {
    var u = _u(a, i.map(Wu));
    return Hu(r, i, a), t(u);
  }
  return e.isFactory = !0, e.fn = r, e.dependencies = i.slice().sort(), n && (e.meta = n), e;
}
function Hu(r, i, t) {
  var n = i.filter((a) => !Ku(a)).every((a) => t[a] !== void 0);
  if (!n) {
    var e = i.filter((a) => t[a] === void 0);
    throw new Error('Cannot create function "'.concat(r, '", ') + "some dependencies are missing: ".concat(e.map((a) => '"'.concat(a, '"')).join(", "), "."));
  }
}
function Ku(r) {
  return r && r[0] === "?";
}
function Wu(r) {
  return r && r[0] === "?" ? r.slice(1) : r;
}
function Ti(r, i) {
  if (Oi(r) && Li(r, i))
    return r[i];
  throw typeof r[i] == "function" && ju(r, i) ? new Error('Cannot access method "' + i + '" as a property') : new Error('No access to property "' + i + '"');
}
function Ii(r, i, t) {
  if (Oi(r) && Li(r, i))
    return r[i] = t, t;
  throw new Error('No access to property "' + i + '"');
}
function ku(r, i) {
  return i in r;
}
function Li(r, i) {
  return !r || typeof r != "object" ? !1 : Yr(eo, i) ? !0 : !(i in Object.prototype || i in Function.prototype);
}
function ju(r, i) {
  return r == null || typeof r[i] != "function" || Yr(r, i) && Object.getPrototypeOf && i in Object.getPrototypeOf(r) ? !1 : Yr(ro, i) ? !0 : !(i in Object.prototype || i in Function.prototype);
}
function Oi(r) {
  return typeof r == "object" && r && r.constructor === Object;
}
var eo = {
  length: !0,
  name: !0
}, ro = {
  toString: !0,
  valueOf: !0,
  toLocaleString: !0
};
class to {
  constructor(i) {
    this.wrappedObject = i;
  }
  keys() {
    return Object.keys(this.wrappedObject);
  }
  get(i) {
    return Ti(this.wrappedObject, i);
  }
  set(i, t) {
    return Ii(this.wrappedObject, i, t), this;
  }
  has(i) {
    return ku(this.wrappedObject, i);
  }
}
function no(r) {
  return r ? r instanceof Map || r instanceof to || typeof r.set == "function" && typeof r.get == "function" && typeof r.keys == "function" && typeof r.has == "function" : !1;
}
var $i = function() {
  return $i = fn.create, fn;
}, io = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], ao = /* @__PURE__ */ ee("typed", io, function(i) {
  var {
    BigNumber: t,
    Complex: n,
    DenseMatrix: e,
    Fraction: a
  } = i, u = $i();
  return u.clear(), u.addTypes([
    {
      name: "number",
      test: $e
    },
    {
      name: "Complex",
      test: Xt
    },
    {
      name: "BigNumber",
      test: Re
    },
    {
      name: "Fraction",
      test: Ht
    },
    {
      name: "Unit",
      test: Di
    },
    // The following type matches a valid variable name, i.e., an alphanumeric
    // string starting with an alphabetic character. It is used (at least)
    // in the definition of the derivative() function, as the argument telling
    // what to differentiate over must (currently) be a variable.
    {
      name: "identifier",
      test: (l) => ir && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(l)
    },
    {
      name: "string",
      test: ir
    },
    {
      name: "Chain",
      test: xu
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
      test: yi
    },
    {
      name: "SparseMatrix",
      test: wi
    },
    {
      name: "Range",
      test: Ai
    },
    {
      name: "Index",
      test: Et
    },
    {
      name: "boolean",
      test: iu
    },
    {
      name: "ResultSet",
      test: au
    },
    {
      name: "Help",
      test: uu
    },
    {
      name: "function",
      test: ou
    },
    {
      name: "Date",
      test: su
    },
    {
      name: "RegExp",
      test: fu
    },
    {
      name: "null",
      test: cu
    },
    {
      name: "undefined",
      test: lu
    },
    {
      name: "AccessorNode",
      test: hu
    },
    {
      name: "ArrayNode",
      test: vu
    },
    {
      name: "AssignmentNode",
      test: pu
    },
    {
      name: "BlockNode",
      test: du
    },
    {
      name: "ConditionalNode",
      test: mu
    },
    {
      name: "ConstantNode",
      test: gu
    },
    {
      name: "FunctionNode",
      test: yu
    },
    {
      name: "FunctionAssignmentNode",
      test: Du
    },
    {
      name: "IndexNode",
      test: wu
    },
    {
      name: "Node",
      test: Au
    },
    {
      name: "ObjectNode",
      test: Eu
    },
    {
      name: "OperatorNode",
      test: Cu
    },
    {
      name: "ParenthesisNode",
      test: Fu
    },
    {
      name: "RangeNode",
      test: bu
    },
    {
      name: "RelationalNode",
      test: Mu
    },
    {
      name: "SymbolNode",
      test: Su
    },
    {
      name: "Map",
      test: no
    },
    {
      name: "Object",
      test: Ei
    }
    // order 'Object' last, it matches on other classes too
  ]), u.addConversions([{
    from: "number",
    to: "BigNumber",
    convert: function(f) {
      if (t || It(f), qu(f) > 15)
        throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + f + "). Use function bignumber(x) to convert to BigNumber.");
      return new t(f);
    }
  }, {
    from: "number",
    to: "Complex",
    convert: function(f) {
      return n || ut(f), new n(f, 0);
    }
  }, {
    from: "BigNumber",
    to: "Complex",
    convert: function(f) {
      return n || ut(f), new n(f.toNumber(), 0);
    }
  }, {
    from: "Fraction",
    to: "BigNumber",
    convert: function(f) {
      throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
    }
  }, {
    from: "Fraction",
    to: "Complex",
    convert: function(f) {
      return n || ut(f), new n(f.valueOf(), 0);
    }
  }, {
    from: "number",
    to: "Fraction",
    convert: function(f) {
      a || Lt(f);
      var h = new a(f);
      if (h.valueOf() !== f)
        throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + f + "). Use function fraction(x) to convert to Fraction.");
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
    convert: function(f) {
      var h = Number(f);
      if (isNaN(h))
        throw new Error('Cannot convert "' + f + '" to a number');
      return h;
    }
  }, {
    from: "string",
    to: "BigNumber",
    convert: function(f) {
      t || It(f);
      try {
        return new t(f);
      } catch {
        throw new Error('Cannot convert "' + f + '" to BigNumber');
      }
    }
  }, {
    from: "string",
    to: "Fraction",
    convert: function(f) {
      a || Lt(f);
      try {
        return new a(f);
      } catch {
        throw new Error('Cannot convert "' + f + '" to Fraction');
      }
    }
  }, {
    from: "string",
    to: "Complex",
    convert: function(f) {
      n || ut(f);
      try {
        return new n(f);
      } catch {
        throw new Error('Cannot convert "' + f + '" to Complex');
      }
    }
  }, {
    from: "boolean",
    to: "number",
    convert: function(f) {
      return +f;
    }
  }, {
    from: "boolean",
    to: "BigNumber",
    convert: function(f) {
      return t || It(f), new t(+f);
    }
  }, {
    from: "boolean",
    to: "Fraction",
    convert: function(f) {
      return a || Lt(f), new a(+f);
    }
  }, {
    from: "boolean",
    to: "string",
    convert: function(f) {
      return String(f);
    }
  }, {
    from: "Array",
    to: "Matrix",
    convert: function(f) {
      return e || uo(), new e(f);
    }
  }, {
    from: "Matrix",
    to: "Array",
    convert: function(f) {
      return f.valueOf();
    }
  }]), u.onMismatch = (l, f, h) => {
    var s = u.createError(l, f, h);
    if (["wrongType", "mismatch"].includes(s.data.category) && f.length === 1 && st(f[0]) && // check if the function can be unary:
    h.some((c) => !c.params.includes(","))) {
      var o = new TypeError("Function '".concat(l, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(l, ")'."));
      throw o.data = s.data, o;
    }
    throw s;
  }, u.onMismatch = (l, f, h) => {
    var s = u.createError(l, f, h);
    if (["wrongType", "mismatch"].includes(s.data.category) && f.length === 1 && st(f[0]) && // check if the function can be unary:
    h.some((c) => !c.params.includes(","))) {
      var o = new TypeError("Function '".concat(l, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(l, ")'."));
      throw o.data = s.data, o;
    }
    throw s;
  }, u;
});
function It(r) {
  throw new Error("Cannot convert value ".concat(r, " into a BigNumber: no class 'BigNumber' provided"));
}
function ut(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Complex number: no class 'Complex' provided"));
}
function uo() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function Lt(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Fraction, no class 'Fraction' provided."));
}
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var _r = 9e15, Ar = 1e9, Rt = "0123456789abcdef", ht = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", vt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ut = {
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
  minE: -_r,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: _r,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, qi, pr, ge = !0, bt = "[DecimalError] ", wr = bt + "Invalid argument: ", Pi = bt + "Precision limit exceeded", Ri = bt + "crypto unavailable", Ui = "[object Decimal]", Qe = Math.floor, Ge = Math.pow, oo = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, so = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, fo = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Vi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, fr = 1e7, de = 7, co = 9007199254740991, lo = ht.length - 1, Vt = vt.length - 1, W = { toStringTag: Ui };
W.absoluteValue = W.abs = function() {
  var r = new this.constructor(this);
  return r.s < 0 && (r.s = 1), pe(r);
};
W.ceil = function() {
  return pe(new this.constructor(this), this.e + 1, 2);
};
W.clampedTo = W.clamp = function(r, i) {
  var t, n = this, e = n.constructor;
  if (r = new e(r), i = new e(i), !r.s || !i.s)
    return new e(NaN);
  if (r.gt(i))
    throw Error(wr + i);
  return t = n.cmp(r), t < 0 ? r : n.cmp(i) > 0 ? i : new e(n);
};
W.comparedTo = W.cmp = function(r) {
  var i, t, n, e, a = this, u = a.d, l = (r = new a.constructor(r)).d, f = a.s, h = r.s;
  if (!u || !l)
    return !f || !h ? NaN : f !== h ? f : u === l ? 0 : !u ^ f < 0 ? 1 : -1;
  if (!u[0] || !l[0])
    return u[0] ? f : l[0] ? -h : 0;
  if (f !== h)
    return f;
  if (a.e !== r.e)
    return a.e > r.e ^ f < 0 ? 1 : -1;
  for (n = u.length, e = l.length, i = 0, t = n < e ? n : e; i < t; ++i)
    if (u[i] !== l[i])
      return u[i] > l[i] ^ f < 0 ? 1 : -1;
  return n === e ? 0 : n > e ^ f < 0 ? 1 : -1;
};
W.cosine = W.cos = function() {
  var r, i, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (r = n.precision, i = n.rounding, n.precision = r + Math.max(t.e, t.sd()) + de, n.rounding = 1, t = ho(n, Qi(n, t)), n.precision = r, n.rounding = i, pe(pr == 2 || pr == 3 ? t.neg() : t, r, i, !0)) : new n(1) : new n(NaN);
};
W.cubeRoot = W.cbrt = function() {
  var r, i, t, n, e, a, u, l, f, h, s = this, o = s.constructor;
  if (!s.isFinite() || s.isZero())
    return new o(s);
  for (ge = !1, a = s.s * Ge(s.s * s, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = Ye(s.d), r = s.e, (a = (r - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = Ge(t, 1 / 3), r = Qe((r + 1) / 3) - (r % 3 == (r < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + r : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + r), n = new o(t), n.s = s.s) : n = new o(a.toString()), u = (r = o.precision) + 3; ; )
    if (l = n, f = l.times(l).times(l), h = f.plus(s), n = Te(h.plus(s).times(l), h.plus(f), u + 2, 1), Ye(l.d).slice(0, u) === (t = Ye(n.d)).slice(0, u))
      if (t = t.slice(u - 3, u + 1), t == "9999" || !e && t == "4999") {
        if (!e && (pe(l, r + 1, 0), l.times(l).times(l).eq(s))) {
          n = l;
          break;
        }
        u += 4, e = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (pe(n, r + 1, 1), i = !n.times(n).times(n).eq(s));
        break;
      }
  return ge = !0, pe(n, r, o.rounding, i);
};
W.decimalPlaces = W.dp = function() {
  var r, i = this.d, t = NaN;
  if (i) {
    if (r = i.length - 1, t = (r - Qe(this.e / de)) * de, r = i[r], r)
      for (; r % 10 == 0; r /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
W.dividedBy = W.div = function(r) {
  return Te(this, new this.constructor(r));
};
W.dividedToIntegerBy = W.divToInt = function(r) {
  var i = this, t = i.constructor;
  return pe(Te(i, new t(r), 0, 1, 1), t.precision, t.rounding);
};
W.equals = W.eq = function(r) {
  return this.cmp(r) === 0;
};
W.floor = function() {
  return pe(new this.constructor(this), this.e + 1, 3);
};
W.greaterThan = W.gt = function(r) {
  return this.cmp(r) > 0;
};
W.greaterThanOrEqualTo = W.gte = function(r) {
  var i = this.cmp(r);
  return i == 1 || i === 0;
};
W.hyperbolicCosine = W.cosh = function() {
  var r, i, t, n, e, a = this, u = a.constructor, l = new u(1);
  if (!a.isFinite())
    return new u(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  t = u.precision, n = u.rounding, u.precision = t + Math.max(a.e, a.sd()) + 4, u.rounding = 1, e = a.d.length, e < 32 ? (r = Math.ceil(e / 3), i = (1 / St(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), a = $r(u, 1, a.times(i), new u(1), !0);
  for (var f, h = r, s = new u(8); h--; )
    f = a.times(a), a = l.minus(f.times(s.minus(f.times(s))));
  return pe(a, u.precision = t, u.rounding = n, !0);
};
W.hyperbolicSine = W.sinh = function() {
  var r, i, t, n, e = this, a = e.constructor;
  if (!e.isFinite() || e.isZero())
    return new a(e);
  if (i = a.precision, t = a.rounding, a.precision = i + Math.max(e.e, e.sd()) + 4, a.rounding = 1, n = e.d.length, n < 3)
    e = $r(a, 2, e, e, !0);
  else {
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, e = e.times(1 / St(5, r)), e = $r(a, 2, e, e, !0);
    for (var u, l = new a(5), f = new a(16), h = new a(20); r--; )
      u = e.times(e), e = e.times(l.plus(u.times(f.times(u).plus(h))));
  }
  return a.precision = i, a.rounding = t, pe(e, i, t, !0);
};
W.hyperbolicTangent = W.tanh = function() {
  var r, i, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, i = n.rounding, n.precision = r + 7, n.rounding = 1, Te(t.sinh(), t.cosh(), n.precision = r, n.rounding = i)) : new n(t.s);
};
W.inverseCosine = W.acos = function() {
  var r, i = this, t = i.constructor, n = i.abs().cmp(1), e = t.precision, a = t.rounding;
  return n !== -1 ? n === 0 ? i.isNeg() ? sr(t, e, a) : new t(0) : new t(NaN) : i.isZero() ? sr(t, e + 4, a).times(0.5) : (t.precision = e + 6, t.rounding = 1, i = i.asin(), r = sr(t, e + 4, a).times(0.5), t.precision = e, t.rounding = a, r.minus(i));
};
W.inverseHyperbolicCosine = W.acosh = function() {
  var r, i, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (r = n.precision, i = n.rounding, n.precision = r + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, ge = !1, t = t.times(t).minus(1).sqrt().plus(t), ge = !0, n.precision = r, n.rounding = i, t.ln()) : new n(t);
};
W.inverseHyperbolicSine = W.asinh = function() {
  var r, i, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (r = n.precision, i = n.rounding, n.precision = r + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, ge = !1, t = t.times(t).plus(1).sqrt().plus(t), ge = !0, n.precision = r, n.rounding = i, t.ln());
};
W.inverseHyperbolicTangent = W.atanh = function() {
  var r, i, t, n, e = this, a = e.constructor;
  return e.isFinite() ? e.e >= 0 ? new a(e.abs().eq(1) ? e.s / 0 : e.isZero() ? e : NaN) : (r = a.precision, i = a.rounding, n = e.sd(), Math.max(n, r) < 2 * -e.e - 1 ? pe(new a(e), r, i, !0) : (a.precision = t = n - e.e, e = Te(e.plus(1), new a(1).minus(e), t + r, 1), a.precision = r + 4, a.rounding = 1, e = e.ln(), a.precision = r, a.rounding = i, e.times(0.5))) : new a(NaN);
};
W.inverseSine = W.asin = function() {
  var r, i, t, n, e = this, a = e.constructor;
  return e.isZero() ? new a(e) : (i = e.abs().cmp(1), t = a.precision, n = a.rounding, i !== -1 ? i === 0 ? (r = sr(a, t + 4, n).times(0.5), r.s = e.s, r) : new a(NaN) : (a.precision = t + 6, a.rounding = 1, e = e.div(new a(1).minus(e.times(e)).sqrt().plus(1)).atan(), a.precision = t, a.rounding = n, e.times(2)));
};
W.inverseTangent = W.atan = function() {
  var r, i, t, n, e, a, u, l, f, h = this, s = h.constructor, o = s.precision, c = s.rounding;
  if (h.isFinite()) {
    if (h.isZero())
      return new s(h);
    if (h.abs().eq(1) && o + 4 <= Vt)
      return u = sr(s, o + 4, c).times(0.25), u.s = h.s, u;
  } else {
    if (!h.s)
      return new s(NaN);
    if (o + 4 <= Vt)
      return u = sr(s, o + 4, c).times(0.5), u.s = h.s, u;
  }
  for (s.precision = l = o + 10, s.rounding = 1, t = Math.min(28, l / de + 2 | 0), r = t; r; --r)
    h = h.div(h.times(h).plus(1).sqrt().plus(1));
  for (ge = !1, i = Math.ceil(l / de), n = 1, f = h.times(h), u = new s(h), e = h; r !== -1; )
    if (e = e.times(f), a = u.minus(e.div(n += 2)), e = e.times(f), u = a.plus(e.div(n += 2)), u.d[i] !== void 0)
      for (r = i; u.d[r] === a.d[r] && r--; )
        ;
  return t && (u = u.times(2 << t - 1)), ge = !0, pe(u, s.precision = o, s.rounding = c, !0);
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
W.lessThan = W.lt = function(r) {
  return this.cmp(r) < 0;
};
W.lessThanOrEqualTo = W.lte = function(r) {
  return this.cmp(r) < 1;
};
W.logarithm = W.log = function(r) {
  var i, t, n, e, a, u, l, f, h = this, s = h.constructor, o = s.precision, c = s.rounding, v = 5;
  if (r == null)
    r = new s(10), i = !0;
  else {
    if (r = new s(r), t = r.d, r.s < 0 || !t || !t[0] || r.eq(1))
      return new s(NaN);
    i = r.eq(10);
  }
  if (t = h.d, h.s < 0 || !t || !t[0] || h.eq(1))
    return new s(t && !t[0] ? -1 / 0 : h.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (i)
    if (t.length > 1)
      a = !0;
    else {
      for (e = t[0]; e % 10 === 0; )
        e /= 10;
      a = e !== 1;
    }
  if (ge = !1, l = o + v, u = Dr(h, l), n = i ? pt(s, l + 10) : Dr(r, l), f = Te(u, n, l, 1), Qr(f.d, e = o, c))
    do
      if (l += 10, u = Dr(h, l), n = i ? pt(s, l + 10) : Dr(r, l), f = Te(u, n, l, 1), !a) {
        +Ye(f.d).slice(e + 1, e + 15) + 1 == 1e14 && (f = pe(f, o + 1, 0));
        break;
      }
    while (Qr(f.d, e += 10, c));
  return ge = !0, pe(f, o, c);
};
W.minus = W.sub = function(r) {
  var i, t, n, e, a, u, l, f, h, s, o, c, v = this, g = v.constructor;
  if (r = new g(r), !v.d || !r.d)
    return !v.s || !r.s ? r = new g(NaN) : v.d ? r.s = -r.s : r = new g(r.d || v.s !== r.s ? v : NaN), r;
  if (v.s != r.s)
    return r.s = -r.s, v.plus(r);
  if (h = v.d, c = r.d, l = g.precision, f = g.rounding, !h[0] || !c[0]) {
    if (c[0])
      r.s = -r.s;
    else if (h[0])
      r = new g(v);
    else
      return new g(f === 3 ? -0 : 0);
    return ge ? pe(r, l, f) : r;
  }
  if (t = Qe(r.e / de), s = Qe(v.e / de), h = h.slice(), a = s - t, a) {
    for (o = a < 0, o ? (i = h, a = -a, u = c.length) : (i = c, t = s, u = h.length), n = Math.max(Math.ceil(l / de), u) + 2, a > n && (a = n, i.length = 1), i.reverse(), n = a; n--; )
      i.push(0);
    i.reverse();
  } else {
    for (n = h.length, u = c.length, o = n < u, o && (u = n), n = 0; n < u; n++)
      if (h[n] != c[n]) {
        o = h[n] < c[n];
        break;
      }
    a = 0;
  }
  for (o && (i = h, h = c, c = i, r.s = -r.s), u = h.length, n = c.length - u; n > 0; --n)
    h[u++] = 0;
  for (n = c.length; n > a; ) {
    if (h[--n] < c[n]) {
      for (e = n; e && h[--e] === 0; )
        h[e] = fr - 1;
      --h[e], h[n] += fr;
    }
    h[n] -= c[n];
  }
  for (; h[--u] === 0; )
    h.pop();
  for (; h[0] === 0; h.shift())
    --t;
  return h[0] ? (r.d = h, r.e = Mt(h, t), ge ? pe(r, l, f) : r) : new g(f === 3 ? -0 : 0);
};
W.modulo = W.mod = function(r) {
  var i, t = this, n = t.constructor;
  return r = new n(r), !t.d || !r.s || r.d && !r.d[0] ? new n(NaN) : !r.d || t.d && !t.d[0] ? pe(new n(t), n.precision, n.rounding) : (ge = !1, n.modulo == 9 ? (i = Te(t, r.abs(), 0, 3, 1), i.s *= r.s) : i = Te(t, r, 0, n.modulo, 1), i = i.times(r), ge = !0, t.minus(i));
};
W.naturalExponential = W.exp = function() {
  return Gt(this);
};
W.naturalLogarithm = W.ln = function() {
  return Dr(this);
};
W.negated = W.neg = function() {
  var r = new this.constructor(this);
  return r.s = -r.s, pe(r);
};
W.plus = W.add = function(r) {
  var i, t, n, e, a, u, l, f, h, s, o = this, c = o.constructor;
  if (r = new c(r), !o.d || !r.d)
    return !o.s || !r.s ? r = new c(NaN) : o.d || (r = new c(r.d || o.s === r.s ? o : NaN)), r;
  if (o.s != r.s)
    return r.s = -r.s, o.minus(r);
  if (h = o.d, s = r.d, l = c.precision, f = c.rounding, !h[0] || !s[0])
    return s[0] || (r = new c(o)), ge ? pe(r, l, f) : r;
  if (a = Qe(o.e / de), n = Qe(r.e / de), h = h.slice(), e = a - n, e) {
    for (e < 0 ? (t = h, e = -e, u = s.length) : (t = s, n = a, u = h.length), a = Math.ceil(l / de), u = a > u ? a + 1 : u + 1, e > u && (e = u, t.length = 1), t.reverse(); e--; )
      t.push(0);
    t.reverse();
  }
  for (u = h.length, e = s.length, u - e < 0 && (e = u, t = s, s = h, h = t), i = 0; e; )
    i = (h[--e] = h[e] + s[e] + i) / fr | 0, h[e] %= fr;
  for (i && (h.unshift(i), ++n), u = h.length; h[--u] == 0; )
    h.pop();
  return r.d = h, r.e = Mt(h, n), ge ? pe(r, l, f) : r;
};
W.precision = W.sd = function(r) {
  var i, t = this;
  if (r !== void 0 && r !== !!r && r !== 1 && r !== 0)
    throw Error(wr + r);
  return t.d ? (i = Gi(t.d), r && t.e + 1 > i && (i = t.e + 1)) : i = NaN, i;
};
W.round = function() {
  var r = this, i = r.constructor;
  return pe(new i(r), r.e + 1, i.rounding);
};
W.sine = W.sin = function() {
  var r, i, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, i = n.rounding, n.precision = r + Math.max(t.e, t.sd()) + de, n.rounding = 1, t = po(n, Qi(n, t)), n.precision = r, n.rounding = i, pe(pr > 2 ? t.neg() : t, r, i, !0)) : new n(NaN);
};
W.squareRoot = W.sqrt = function() {
  var r, i, t, n, e, a, u = this, l = u.d, f = u.e, h = u.s, s = u.constructor;
  if (h !== 1 || !l || !l[0])
    return new s(!h || h < 0 && (!l || l[0]) ? NaN : l ? u : 1 / 0);
  for (ge = !1, h = Math.sqrt(+u), h == 0 || h == 1 / 0 ? (i = Ye(l), (i.length + f) % 2 == 0 && (i += "0"), h = Math.sqrt(i), f = Qe((f + 1) / 2) - (f < 0 || f % 2), h == 1 / 0 ? i = "5e" + f : (i = h.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + f), n = new s(i)) : n = new s(h.toString()), t = (f = s.precision) + 3; ; )
    if (a = n, n = a.plus(Te(u, a, t + 2, 1)).times(0.5), Ye(a.d).slice(0, t) === (i = Ye(n.d)).slice(0, t))
      if (i = i.slice(t - 3, t + 1), i == "9999" || !e && i == "4999") {
        if (!e && (pe(a, f + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
        t += 4, e = 1;
      } else {
        (!+i || !+i.slice(1) && i.charAt(0) == "5") && (pe(n, f + 1, 1), r = !n.times(n).eq(u));
        break;
      }
  return ge = !0, pe(n, f, s.rounding, r);
};
W.tangent = W.tan = function() {
  var r, i, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, i = n.rounding, n.precision = r + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = Te(t, new n(1).minus(t.times(t)).sqrt(), r + 10, 0), n.precision = r, n.rounding = i, pe(pr == 2 || pr == 4 ? t.neg() : t, r, i, !0)) : new n(NaN);
};
W.times = W.mul = function(r) {
  var i, t, n, e, a, u, l, f, h, s = this, o = s.constructor, c = s.d, v = (r = new o(r)).d;
  if (r.s *= s.s, !c || !c[0] || !v || !v[0])
    return new o(!r.s || c && !c[0] && !v || v && !v[0] && !c ? NaN : !c || !v ? r.s / 0 : r.s * 0);
  for (t = Qe(s.e / de) + Qe(r.e / de), f = c.length, h = v.length, f < h && (a = c, c = v, v = a, u = f, f = h, h = u), a = [], u = f + h, n = u; n--; )
    a.push(0);
  for (n = h; --n >= 0; ) {
    for (i = 0, e = f + n; e > n; )
      l = a[e] + v[n] * c[e - n - 1] + i, a[e--] = l % fr | 0, i = l / fr | 0;
    a[e] = (a[e] + i) % fr | 0;
  }
  for (; !a[--u]; )
    a.pop();
  return i ? ++t : a.shift(), r.d = a, r.e = Mt(a, t), ge ? pe(r, o.precision, o.rounding) : r;
};
W.toBinary = function(r, i) {
  return kt(this, 2, r, i);
};
W.toDecimalPlaces = W.toDP = function(r, i) {
  var t = this, n = t.constructor;
  return t = new n(t), r === void 0 ? t : (ke(r, 0, Ar), i === void 0 ? i = n.rounding : ke(i, 0, 8), pe(t, r + t.e + 1, i));
};
W.toExponential = function(r, i) {
  var t, n = this, e = n.constructor;
  return r === void 0 ? t = hr(n, !0) : (ke(r, 0, Ar), i === void 0 ? i = e.rounding : ke(i, 0, 8), n = pe(new e(n), r + 1, i), t = hr(n, !0, r + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
W.toFixed = function(r, i) {
  var t, n, e = this, a = e.constructor;
  return r === void 0 ? t = hr(e) : (ke(r, 0, Ar), i === void 0 ? i = a.rounding : ke(i, 0, 8), n = pe(new a(e), r + e.e + 1, i), t = hr(n, !1, r + n.e + 1)), e.isNeg() && !e.isZero() ? "-" + t : t;
};
W.toFraction = function(r) {
  var i, t, n, e, a, u, l, f, h, s, o, c, v = this, g = v.d, p = v.constructor;
  if (!g)
    return new p(v);
  if (h = t = new p(1), n = f = new p(0), i = new p(n), a = i.e = Gi(g) - v.e - 1, u = a % de, i.d[0] = Ge(10, u < 0 ? de + u : u), r == null)
    r = a > 0 ? i : h;
  else {
    if (l = new p(r), !l.isInt() || l.lt(h))
      throw Error(wr + l);
    r = l.gt(i) ? a > 0 ? i : h : l;
  }
  for (ge = !1, l = new p(Ye(g)), s = p.precision, p.precision = a = g.length * de * 2; o = Te(l, i, 0, 1, 1), e = t.plus(o.times(n)), e.cmp(r) != 1; )
    t = n, n = e, e = h, h = f.plus(o.times(e)), f = e, e = i, i = l.minus(o.times(e)), l = e;
  return e = Te(r.minus(t), n, 0, 1, 1), f = f.plus(e.times(h)), t = t.plus(e.times(n)), f.s = h.s = v.s, c = Te(h, n, a, 1).minus(v).abs().cmp(Te(f, t, a, 1).minus(v).abs()) < 1 ? [h, n] : [f, t], p.precision = s, ge = !0, c;
};
W.toHexadecimal = W.toHex = function(r, i) {
  return kt(this, 16, r, i);
};
W.toNearest = function(r, i) {
  var t = this, n = t.constructor;
  if (t = new n(t), r == null) {
    if (!t.d)
      return t;
    r = new n(1), i = n.rounding;
  } else {
    if (r = new n(r), i === void 0 ? i = n.rounding : ke(i, 0, 8), !t.d)
      return r.s ? t : r;
    if (!r.d)
      return r.s && (r.s = t.s), r;
  }
  return r.d[0] ? (ge = !1, t = Te(t, r, 0, i, 1).times(r), ge = !0, pe(t)) : (r.s = t.s, t = r), t;
};
W.toNumber = function() {
  return +this;
};
W.toOctal = function(r, i) {
  return kt(this, 8, r, i);
};
W.toPower = W.pow = function(r) {
  var i, t, n, e, a, u, l = this, f = l.constructor, h = +(r = new f(r));
  if (!l.d || !r.d || !l.d[0] || !r.d[0])
    return new f(Ge(+l, h));
  if (l = new f(l), l.eq(1))
    return l;
  if (n = f.precision, a = f.rounding, r.eq(1))
    return pe(l, n, a);
  if (i = Qe(r.e / de), i >= r.d.length - 1 && (t = h < 0 ? -h : h) <= co)
    return e = Zi(f, l, t, n), r.s < 0 ? new f(1).div(e) : pe(e, n, a);
  if (u = l.s, u < 0) {
    if (i < r.d.length - 1)
      return new f(NaN);
    if (r.d[i] & 1 || (u = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = u, l;
  }
  return t = Ge(+l, h), i = t == 0 || !isFinite(t) ? Qe(h * (Math.log("0." + Ye(l.d)) / Math.LN10 + l.e + 1)) : new f(t + "").e, i > f.maxE + 1 || i < f.minE - 1 ? new f(i > 0 ? u / 0 : 0) : (ge = !1, f.rounding = l.s = 1, t = Math.min(12, (i + "").length), e = Gt(r.times(Dr(l, n + t)), n), e.d && (e = pe(e, n + 5, 1), Qr(e.d, n, a) && (i = n + 10, e = pe(Gt(r.times(Dr(l, i + t)), i), i + 5, 1), +Ye(e.d).slice(n + 1, n + 15) + 1 == 1e14 && (e = pe(e, n + 1, 0)))), e.s = u, ge = !0, f.rounding = a, pe(e, n, a));
};
W.toPrecision = function(r, i) {
  var t, n = this, e = n.constructor;
  return r === void 0 ? t = hr(n, n.e <= e.toExpNeg || n.e >= e.toExpPos) : (ke(r, 1, Ar), i === void 0 ? i = e.rounding : ke(i, 0, 8), n = pe(new e(n), r, i), t = hr(n, r <= n.e || n.e <= e.toExpNeg, r)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
W.toSignificantDigits = W.toSD = function(r, i) {
  var t = this, n = t.constructor;
  return r === void 0 ? (r = n.precision, i = n.rounding) : (ke(r, 1, Ar), i === void 0 ? i = n.rounding : ke(i, 0, 8)), pe(new n(t), r, i);
};
W.toString = function() {
  var r = this, i = r.constructor, t = hr(r, r.e <= i.toExpNeg || r.e >= i.toExpPos);
  return r.isNeg() && !r.isZero() ? "-" + t : t;
};
W.truncated = W.trunc = function() {
  return pe(new this.constructor(this), this.e + 1, 1);
};
W.valueOf = W.toJSON = function() {
  var r = this, i = r.constructor, t = hr(r, r.e <= i.toExpNeg || r.e >= i.toExpPos);
  return r.isNeg() ? "-" + t : t;
};
function Ye(r) {
  var i, t, n, e = r.length - 1, a = "", u = r[0];
  if (e > 0) {
    for (a += u, i = 1; i < e; i++)
      n = r[i] + "", t = de - n.length, t && (a += mr(t)), a += n;
    u = r[i], n = u + "", t = de - n.length, t && (a += mr(t));
  } else if (u === 0)
    return "0";
  for (; u % 10 === 0; )
    u /= 10;
  return a + u;
}
function ke(r, i, t) {
  if (r !== ~~r || r < i || r > t)
    throw Error(wr + r);
}
function Qr(r, i, t, n) {
  var e, a, u, l;
  for (a = r[0]; a >= 10; a /= 10)
    --i;
  return --i < 0 ? (i += de, e = 0) : (e = Math.ceil((i + 1) / de), i %= de), a = Ge(10, de - i), l = r[e] % a | 0, n == null ? i < 3 ? (i == 0 ? l = l / 100 | 0 : i == 1 && (l = l / 10 | 0), u = t < 4 && l == 99999 || t > 3 && l == 49999 || l == 5e4 || l == 0) : u = (t < 4 && l + 1 == a || t > 3 && l + 1 == a / 2) && (r[e + 1] / a / 100 | 0) == Ge(10, i - 2) - 1 || (l == a / 2 || l == 0) && (r[e + 1] / a / 100 | 0) == 0 : i < 4 ? (i == 0 ? l = l / 1e3 | 0 : i == 1 ? l = l / 100 | 0 : i == 2 && (l = l / 10 | 0), u = (n || t < 4) && l == 9999 || !n && t > 3 && l == 4999) : u = ((n || t < 4) && l + 1 == a || !n && t > 3 && l + 1 == a / 2) && (r[e + 1] / a / 1e3 | 0) == Ge(10, i - 3) - 1, u;
}
function ot(r, i, t) {
  for (var n, e = [0], a, u = 0, l = r.length; u < l; ) {
    for (a = e.length; a--; )
      e[a] *= i;
    for (e[0] += Rt.indexOf(r.charAt(u++)), n = 0; n < e.length; n++)
      e[n] > t - 1 && (e[n + 1] === void 0 && (e[n + 1] = 0), e[n + 1] += e[n] / t | 0, e[n] %= t);
  }
  return e.reverse();
}
function ho(r, i) {
  var t, n, e;
  if (i.isZero())
    return i;
  n = i.d.length, n < 32 ? (t = Math.ceil(n / 3), e = (1 / St(4, t)).toString()) : (t = 16, e = "2.3283064365386962890625e-10"), r.precision += t, i = $r(r, 1, i.times(e), new r(1));
  for (var a = t; a--; ) {
    var u = i.times(i);
    i = u.times(u).minus(u).times(8).plus(1);
  }
  return r.precision -= t, i;
}
var Te = /* @__PURE__ */ function() {
  function r(n, e, a) {
    var u, l = 0, f = n.length;
    for (n = n.slice(); f--; )
      u = n[f] * e + l, n[f] = u % a | 0, l = u / a | 0;
    return l && n.unshift(l), n;
  }
  function i(n, e, a, u) {
    var l, f;
    if (a != u)
      f = a > u ? 1 : -1;
    else
      for (l = f = 0; l < a; l++)
        if (n[l] != e[l]) {
          f = n[l] > e[l] ? 1 : -1;
          break;
        }
    return f;
  }
  function t(n, e, a, u) {
    for (var l = 0; a--; )
      n[a] -= l, l = n[a] < e[a] ? 1 : 0, n[a] = l * u + n[a] - e[a];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, e, a, u, l, f) {
    var h, s, o, c, v, g, p, m, d, w, D, A, E, y, F, b, C, S, M, x, I = n.constructor, T = n.s == e.s ? 1 : -1, L = n.d, N = e.d;
    if (!L || !L[0] || !N || !N[0])
      return new I(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !e.s || (L ? N && L[0] == N[0] : !N) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !N ? T * 0 : T / 0
        )
      );
    for (f ? (v = 1, s = n.e - e.e) : (f = fr, v = de, s = Qe(n.e / v) - Qe(e.e / v)), M = N.length, C = L.length, d = new I(T), w = d.d = [], o = 0; N[o] == (L[o] || 0); o++)
      ;
    if (N[o] > (L[o] || 0) && s--, a == null ? (y = a = I.precision, u = I.rounding) : l ? y = a + (n.e - e.e) + 1 : y = a, y < 0)
      w.push(1), g = !0;
    else {
      if (y = y / v + 2 | 0, o = 0, M == 1) {
        for (c = 0, N = N[0], y++; (o < C || c) && y--; o++)
          F = c * f + (L[o] || 0), w[o] = F / N | 0, c = F % N | 0;
        g = c || o < C;
      } else {
        for (c = f / (N[0] + 1) | 0, c > 1 && (N = r(N, c, f), L = r(L, c, f), M = N.length, C = L.length), b = M, D = L.slice(0, M), A = D.length; A < M; )
          D[A++] = 0;
        x = N.slice(), x.unshift(0), S = N[0], N[1] >= f / 2 && ++S;
        do
          c = 0, h = i(N, D, M, A), h < 0 ? (E = D[0], M != A && (E = E * f + (D[1] || 0)), c = E / S | 0, c > 1 ? (c >= f && (c = f - 1), p = r(N, c, f), m = p.length, A = D.length, h = i(p, D, m, A), h == 1 && (c--, t(p, M < m ? x : N, m, f))) : (c == 0 && (h = c = 1), p = N.slice()), m = p.length, m < A && p.unshift(0), t(D, p, A, f), h == -1 && (A = D.length, h = i(N, D, M, A), h < 1 && (c++, t(D, M < A ? x : N, A, f))), A = D.length) : h === 0 && (c++, D = [0]), w[o++] = c, h && D[0] ? D[A++] = L[b] || 0 : (D = [L[b]], A = 1);
        while ((b++ < C || D[0] !== void 0) && y--);
        g = D[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (v == 1)
      d.e = s, qi = g;
    else {
      for (o = 1, c = w[0]; c >= 10; c /= 10)
        o++;
      d.e = o + s * v - 1, pe(d, l ? a + d.e + 1 : a, u, g);
    }
    return d;
  };
}();
function pe(r, i, t, n) {
  var e, a, u, l, f, h, s, o, c, v = r.constructor;
  e:
    if (i != null) {
      if (o = r.d, !o)
        return r;
      for (e = 1, l = o[0]; l >= 10; l /= 10)
        e++;
      if (a = i - e, a < 0)
        a += de, u = i, s = o[c = 0], f = s / Ge(10, e - u - 1) % 10 | 0;
      else if (c = Math.ceil((a + 1) / de), l = o.length, c >= l)
        if (n) {
          for (; l++ <= c; )
            o.push(0);
          s = f = 0, e = 1, a %= de, u = a - de + 1;
        } else
          break e;
      else {
        for (s = l = o[c], e = 1; l >= 10; l /= 10)
          e++;
        a %= de, u = a - de + e, f = u < 0 ? 0 : s / Ge(10, e - u - 1) % 10 | 0;
      }
      if (n = n || i < 0 || o[c + 1] !== void 0 || (u < 0 ? s : s % Ge(10, e - u - 1)), h = t < 4 ? (f || n) && (t == 0 || t == (r.s < 0 ? 3 : 2)) : f > 5 || f == 5 && (t == 4 || n || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? u > 0 ? s / Ge(10, e - u) : 0 : o[c - 1]) % 10 & 1 || t == (r.s < 0 ? 8 : 7)), i < 1 || !o[0])
        return o.length = 0, h ? (i -= r.e + 1, o[0] = Ge(10, (de - i % de) % de), r.e = -i || 0) : o[0] = r.e = 0, r;
      if (a == 0 ? (o.length = c, l = 1, c--) : (o.length = c + 1, l = Ge(10, de - a), o[c] = u > 0 ? (s / Ge(10, e - u) % Ge(10, u) | 0) * l : 0), h)
        for (; ; )
          if (c == 0) {
            for (a = 1, u = o[0]; u >= 10; u /= 10)
              a++;
            for (u = o[0] += l, l = 1; u >= 10; u /= 10)
              l++;
            a != l && (r.e++, o[0] == fr && (o[0] = 1));
            break;
          } else {
            if (o[c] += l, o[c] != fr)
              break;
            o[c--] = 0, l = 1;
          }
      for (a = o.length; o[--a] === 0; )
        o.pop();
    }
  return ge && (r.e > v.maxE ? (r.d = null, r.e = NaN) : r.e < v.minE && (r.e = 0, r.d = [0])), r;
}
function hr(r, i, t) {
  if (!r.isFinite())
    return Ji(r);
  var n, e = r.e, a = Ye(r.d), u = a.length;
  return i ? (t && (n = t - u) > 0 ? a = a.charAt(0) + "." + a.slice(1) + mr(n) : u > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (r.e < 0 ? "e" : "e+") + r.e) : e < 0 ? (a = "0." + mr(-e - 1) + a, t && (n = t - u) > 0 && (a += mr(n))) : e >= u ? (a += mr(e + 1 - u), t && (n = t - e - 1) > 0 && (a = a + "." + mr(n))) : ((n = e + 1) < u && (a = a.slice(0, n) + "." + a.slice(n)), t && (n = t - u) > 0 && (e + 1 === u && (a += "."), a += mr(n))), a;
}
function Mt(r, i) {
  var t = r[0];
  for (i *= de; t >= 10; t /= 10)
    i++;
  return i;
}
function pt(r, i, t) {
  if (i > lo)
    throw ge = !0, t && (r.precision = t), Error(Pi);
  return pe(new r(ht), i, 1, !0);
}
function sr(r, i, t) {
  if (i > Vt)
    throw Error(Pi);
  return pe(new r(vt), i, t, !0);
}
function Gi(r) {
  var i = r.length - 1, t = i * de + 1;
  if (i = r[i], i) {
    for (; i % 10 == 0; i /= 10)
      t--;
    for (i = r[0]; i >= 10; i /= 10)
      t++;
  }
  return t;
}
function mr(r) {
  for (var i = ""; r--; )
    i += "0";
  return i;
}
function Zi(r, i, t, n) {
  var e, a = new r(1), u = Math.ceil(n / de + 4);
  for (ge = !1; ; ) {
    if (t % 2 && (a = a.times(i), gn(a.d, u) && (e = !0)), t = Qe(t / 2), t === 0) {
      t = a.d.length - 1, e && a.d[t] === 0 && ++a.d[t];
      break;
    }
    i = i.times(i), gn(i.d, u);
  }
  return ge = !0, a;
}
function mn(r) {
  return r.d[r.d.length - 1] & 1;
}
function Yi(r, i, t) {
  for (var n, e = new r(i[0]), a = 0; ++a < i.length; )
    if (n = new r(i[a]), n.s)
      e[t](n) && (e = n);
    else {
      e = n;
      break;
    }
  return e;
}
function Gt(r, i) {
  var t, n, e, a, u, l, f, h = 0, s = 0, o = 0, c = r.constructor, v = c.rounding, g = c.precision;
  if (!r.d || !r.d[0] || r.e > 17)
    return new c(r.d ? r.d[0] ? r.s < 0 ? 0 : 1 / 0 : 1 : r.s ? r.s < 0 ? 0 : r : NaN);
  for (i == null ? (ge = !1, f = g) : f = i, l = new c(0.03125); r.e > -2; )
    r = r.times(l), o += 5;
  for (n = Math.log(Ge(2, o)) / Math.LN10 * 2 + 5 | 0, f += n, t = a = u = new c(1), c.precision = f; ; ) {
    if (a = pe(a.times(r), f, 1), t = t.times(++s), l = u.plus(Te(a, t, f, 1)), Ye(l.d).slice(0, f) === Ye(u.d).slice(0, f)) {
      for (e = o; e--; )
        u = pe(u.times(u), f, 1);
      if (i == null)
        if (h < 3 && Qr(u.d, f - n, v, h))
          c.precision = f += 10, t = a = l = new c(1), s = 0, h++;
        else
          return pe(u, c.precision = g, v, ge = !0);
      else
        return c.precision = g, u;
    }
    u = l;
  }
}
function Dr(r, i) {
  var t, n, e, a, u, l, f, h, s, o, c, v = 1, g = 10, p = r, m = p.d, d = p.constructor, w = d.rounding, D = d.precision;
  if (p.s < 0 || !m || !m[0] || !p.e && m[0] == 1 && m.length == 1)
    return new d(m && !m[0] ? -1 / 0 : p.s != 1 ? NaN : m ? 0 : p);
  if (i == null ? (ge = !1, s = D) : s = i, d.precision = s += g, t = Ye(m), n = t.charAt(0), Math.abs(a = p.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; )
      p = p.times(r), t = Ye(p.d), n = t.charAt(0), v++;
    a = p.e, n > 1 ? (p = new d("0." + t), a++) : p = new d(n + "." + t.slice(1));
  } else
    return h = pt(d, s + 2, D).times(a + ""), p = Dr(new d(n + "." + t.slice(1)), s - g).plus(h), d.precision = D, i == null ? pe(p, D, w, ge = !0) : p;
  for (o = p, f = u = p = Te(p.minus(1), p.plus(1), s, 1), c = pe(p.times(p), s, 1), e = 3; ; ) {
    if (u = pe(u.times(c), s, 1), h = f.plus(Te(u, new d(e), s, 1)), Ye(h.d).slice(0, s) === Ye(f.d).slice(0, s))
      if (f = f.times(2), a !== 0 && (f = f.plus(pt(d, s + 2, D).times(a + ""))), f = Te(f, new d(v), s, 1), i == null)
        if (Qr(f.d, s - g, w, l))
          d.precision = s += g, h = u = p = Te(o.minus(1), o.plus(1), s, 1), c = pe(p.times(p), s, 1), e = l = 1;
        else
          return pe(f, d.precision = D, w, ge = !0);
      else
        return d.precision = D, f;
    f = h, e += 2;
  }
}
function Ji(r) {
  return String(r.s * r.s / 0);
}
function Zt(r, i) {
  var t, n, e;
  for ((t = i.indexOf(".")) > -1 && (i = i.replace(".", "")), (n = i.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +i.slice(n + 1), i = i.substring(0, n)) : t < 0 && (t = i.length), n = 0; i.charCodeAt(n) === 48; n++)
    ;
  for (e = i.length; i.charCodeAt(e - 1) === 48; --e)
    ;
  if (i = i.slice(n, e), i) {
    if (e -= n, r.e = t = t - n - 1, r.d = [], n = (t + 1) % de, t < 0 && (n += de), n < e) {
      for (n && r.d.push(+i.slice(0, n)), e -= de; n < e; )
        r.d.push(+i.slice(n, n += de));
      i = i.slice(n), n = de - i.length;
    } else
      n -= e;
    for (; n--; )
      i += "0";
    r.d.push(+i), ge && (r.e > r.constructor.maxE ? (r.d = null, r.e = NaN) : r.e < r.constructor.minE && (r.e = 0, r.d = [0]));
  } else
    r.e = 0, r.d = [0];
  return r;
}
function vo(r, i) {
  var t, n, e, a, u, l, f, h, s;
  if (i.indexOf("_") > -1) {
    if (i = i.replace(/(\d)_(?=\d)/g, "$1"), Vi.test(i))
      return Zt(r, i);
  } else if (i === "Infinity" || i === "NaN")
    return +i || (r.s = NaN), r.e = NaN, r.d = null, r;
  if (so.test(i))
    t = 16, i = i.toLowerCase();
  else if (oo.test(i))
    t = 2;
  else if (fo.test(i))
    t = 8;
  else
    throw Error(wr + i);
  for (a = i.search(/p/i), a > 0 ? (f = +i.slice(a + 1), i = i.substring(2, a)) : i = i.slice(2), a = i.indexOf("."), u = a >= 0, n = r.constructor, u && (i = i.replace(".", ""), l = i.length, a = l - a, e = Zi(n, new n(t), a, a * 2)), h = ot(i, t, fr), s = h.length - 1, a = s; h[a] === 0; --a)
    h.pop();
  return a < 0 ? new n(r.s * 0) : (r.e = Mt(h, s), r.d = h, ge = !1, u && (r = Te(r, e, l * 4)), f && (r = r.times(Math.abs(f) < 54 ? Ge(2, f) : qr.pow(2, f))), ge = !0, r);
}
function po(r, i) {
  var t, n = i.d.length;
  if (n < 3)
    return i.isZero() ? i : $r(r, 2, i, i);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, i = i.times(1 / St(5, t)), i = $r(r, 2, i, i);
  for (var e, a = new r(5), u = new r(16), l = new r(20); t--; )
    e = i.times(i), i = i.times(a.plus(e.times(u.times(e).minus(l))));
  return i;
}
function $r(r, i, t, n, e) {
  var a, u, l, f, h = r.precision, s = Math.ceil(h / de);
  for (ge = !1, f = t.times(t), l = new r(n); ; ) {
    if (u = Te(l.times(f), new r(i++ * i++), h, 1), l = e ? n.plus(u) : n.minus(u), n = Te(u.times(f), new r(i++ * i++), h, 1), u = l.plus(n), u.d[s] !== void 0) {
      for (a = s; u.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = n, n = u, u = a;
  }
  return ge = !0, u.d.length = s + 1, u;
}
function St(r, i) {
  for (var t = r; --i; )
    t *= r;
  return t;
}
function Qi(r, i) {
  var t, n = i.s < 0, e = sr(r, r.precision, 1), a = e.times(0.5);
  if (i = i.abs(), i.lte(a))
    return pr = n ? 4 : 1, i;
  if (t = i.divToInt(e), t.isZero())
    pr = n ? 3 : 2;
  else {
    if (i = i.minus(t.times(e)), i.lte(a))
      return pr = mn(t) ? n ? 2 : 3 : n ? 4 : 1, i;
    pr = mn(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return i.minus(e).abs();
}
function kt(r, i, t, n) {
  var e, a, u, l, f, h, s, o, c, v = r.constructor, g = t !== void 0;
  if (g ? (ke(t, 1, Ar), n === void 0 ? n = v.rounding : ke(n, 0, 8)) : (t = v.precision, n = v.rounding), !r.isFinite())
    s = Ji(r);
  else {
    for (s = hr(r), u = s.indexOf("."), g ? (e = 2, i == 16 ? t = t * 4 - 3 : i == 8 && (t = t * 3 - 2)) : e = i, u >= 0 && (s = s.replace(".", ""), c = new v(1), c.e = s.length - u, c.d = ot(hr(c), 10, e), c.e = c.d.length), o = ot(s, 10, e), a = f = o.length; o[--f] == 0; )
      o.pop();
    if (!o[0])
      s = g ? "0p+0" : "0";
    else {
      if (u < 0 ? a-- : (r = new v(r), r.d = o, r.e = a, r = Te(r, c, t, n, 0, e), o = r.d, a = r.e, h = qi), u = o[t], l = e / 2, h = h || o[t + 1] !== void 0, h = n < 4 ? (u !== void 0 || h) && (n === 0 || n === (r.s < 0 ? 3 : 2)) : u > l || u === l && (n === 4 || h || n === 6 && o[t - 1] & 1 || n === (r.s < 0 ? 8 : 7)), o.length = t, h)
        for (; ++o[--t] > e - 1; )
          o[t] = 0, t || (++a, o.unshift(1));
      for (f = o.length; !o[f - 1]; --f)
        ;
      for (u = 0, s = ""; u < f; u++)
        s += Rt.charAt(o[u]);
      if (g) {
        if (f > 1)
          if (i == 16 || i == 8) {
            for (u = i == 16 ? 4 : 3, --f; f % u; f++)
              s += "0";
            for (o = ot(s, e, i), f = o.length; !o[f - 1]; --f)
              ;
            for (u = 1, s = "1."; u < f; u++)
              s += Rt.charAt(o[u]);
          } else
            s = s.charAt(0) + "." + s.slice(1);
        s = s + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          s = "0" + s;
        s = "0." + s;
      } else if (++a > f)
        for (a -= f; a--; )
          s += "0";
      else
        a < f && (s = s.slice(0, a) + "." + s.slice(a));
    }
    s = (i == 16 ? "0x" : i == 2 ? "0b" : i == 8 ? "0o" : "") + s;
  }
  return r.s < 0 ? "-" + s : s;
}
function gn(r, i) {
  if (r.length > i)
    return r.length = i, !0;
}
function mo(r) {
  return new this(r).abs();
}
function go(r) {
  return new this(r).acos();
}
function Do(r) {
  return new this(r).acosh();
}
function yo(r, i) {
  return new this(r).plus(i);
}
function wo(r) {
  return new this(r).asin();
}
function Ao(r) {
  return new this(r).asinh();
}
function Eo(r) {
  return new this(r).atan();
}
function Co(r) {
  return new this(r).atanh();
}
function Fo(r, i) {
  r = new this(r), i = new this(i);
  var t, n = this.precision, e = this.rounding, a = n + 4;
  return !r.s || !i.s ? t = new this(NaN) : !r.d && !i.d ? (t = sr(this, a, 1).times(i.s > 0 ? 0.25 : 0.75), t.s = r.s) : !i.d || r.isZero() ? (t = i.s < 0 ? sr(this, n, e) : new this(0), t.s = r.s) : !r.d || i.isZero() ? (t = sr(this, a, 1).times(0.5), t.s = r.s) : i.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(Te(r, i, a, 1)), i = sr(this, a, 1), this.precision = n, this.rounding = e, t = r.s < 0 ? t.minus(i) : t.plus(i)) : t = this.atan(Te(r, i, a, 1)), t;
}
function bo(r) {
  return new this(r).cbrt();
}
function Mo(r) {
  return pe(r = new this(r), r.e + 1, 2);
}
function So(r, i, t) {
  return new this(r).clamp(i, t);
}
function xo(r) {
  if (!r || typeof r != "object")
    throw Error(bt + "Object expected");
  var i, t, n, e = r.defaults === !0, a = [
    "precision",
    1,
    Ar,
    "rounding",
    0,
    8,
    "toExpNeg",
    -_r,
    0,
    "toExpPos",
    0,
    _r,
    "maxE",
    0,
    _r,
    "minE",
    -_r,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < a.length; i += 3)
    if (t = a[i], e && (this[t] = Ut[t]), (n = r[t]) !== void 0)
      if (Qe(n) === n && n >= a[i + 1] && n <= a[i + 2])
        this[t] = n;
      else
        throw Error(wr + t + ": " + n);
  if (t = "crypto", e && (this[t] = Ut[t]), (n = r[t]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Ri);
      else
        this[t] = !1;
    else
      throw Error(wr + t + ": " + n);
  return this;
}
function Bo(r) {
  return new this(r).cos();
}
function No(r) {
  return new this(r).cosh();
}
function Xi(r) {
  var i, t, n;
  function e(a) {
    var u, l, f, h = this;
    if (!(h instanceof e))
      return new e(a);
    if (h.constructor = e, Dn(a)) {
      h.s = a.s, ge ? !a.d || a.e > e.maxE ? (h.e = NaN, h.d = null) : a.e < e.minE ? (h.e = 0, h.d = [0]) : (h.e = a.e, h.d = a.d.slice()) : (h.e = a.e, h.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (f = typeof a, f === "number") {
      if (a === 0) {
        h.s = 1 / a < 0 ? -1 : 1, h.e = 0, h.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, h.s = -1) : h.s = 1, a === ~~a && a < 1e7) {
        for (u = 0, l = a; l >= 10; l /= 10)
          u++;
        ge ? u > e.maxE ? (h.e = NaN, h.d = null) : u < e.minE ? (h.e = 0, h.d = [0]) : (h.e = u, h.d = [a]) : (h.e = u, h.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (h.s = NaN), h.e = NaN, h.d = null;
        return;
      }
      return Zt(h, a.toString());
    } else if (f !== "string")
      throw Error(wr + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), h.s = -1) : (l === 43 && (a = a.slice(1)), h.s = 1), Vi.test(a) ? Zt(h, a) : vo(h, a);
  }
  if (e.prototype = W, e.ROUND_UP = 0, e.ROUND_DOWN = 1, e.ROUND_CEIL = 2, e.ROUND_FLOOR = 3, e.ROUND_HALF_UP = 4, e.ROUND_HALF_DOWN = 5, e.ROUND_HALF_EVEN = 6, e.ROUND_HALF_CEIL = 7, e.ROUND_HALF_FLOOR = 8, e.EUCLID = 9, e.config = e.set = xo, e.clone = Xi, e.isDecimal = Dn, e.abs = mo, e.acos = go, e.acosh = Do, e.add = yo, e.asin = wo, e.asinh = Ao, e.atan = Eo, e.atanh = Co, e.atan2 = Fo, e.cbrt = bo, e.ceil = Mo, e.clamp = So, e.cos = Bo, e.cosh = No, e.div = _o, e.exp = zo, e.floor = To, e.hypot = Io, e.ln = Lo, e.log = Oo, e.log10 = qo, e.log2 = $o, e.max = Po, e.min = Ro, e.mod = Uo, e.mul = Vo, e.pow = Go, e.random = Zo, e.round = Yo, e.sign = Jo, e.sin = Qo, e.sinh = Xo, e.sqrt = Ho, e.sub = Ko, e.sum = Wo, e.tan = ko, e.tanh = jo, e.trunc = es, r === void 0 && (r = {}), r && r.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], i = 0; i < n.length; )
      r.hasOwnProperty(t = n[i++]) || (r[t] = this[t]);
  return e.config(r), e;
}
function _o(r, i) {
  return new this(r).div(i);
}
function zo(r) {
  return new this(r).exp();
}
function To(r) {
  return pe(r = new this(r), r.e + 1, 3);
}
function Io() {
  var r, i, t = new this(0);
  for (ge = !1, r = 0; r < arguments.length; )
    if (i = new this(arguments[r++]), i.d)
      t.d && (t = t.plus(i.times(i)));
    else {
      if (i.s)
        return ge = !0, new this(1 / 0);
      t = i;
    }
  return ge = !0, t.sqrt();
}
function Dn(r) {
  return r instanceof qr || r && r.toStringTag === Ui || !1;
}
function Lo(r) {
  return new this(r).ln();
}
function Oo(r, i) {
  return new this(r).log(i);
}
function $o(r) {
  return new this(r).log(2);
}
function qo(r) {
  return new this(r).log(10);
}
function Po() {
  return Yi(this, arguments, "lt");
}
function Ro() {
  return Yi(this, arguments, "gt");
}
function Uo(r, i) {
  return new this(r).mod(i);
}
function Vo(r, i) {
  return new this(r).mul(i);
}
function Go(r, i) {
  return new this(r).pow(i);
}
function Zo(r) {
  var i, t, n, e, a = 0, u = new this(1), l = [];
  if (r === void 0 ? r = this.precision : ke(r, 1, Ar), n = Math.ceil(r / de), this.crypto)
    if (crypto.getRandomValues)
      for (i = crypto.getRandomValues(new Uint32Array(n)); a < n; )
        e = i[a], e >= 429e7 ? i[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = e % 1e7;
    else if (crypto.randomBytes) {
      for (i = crypto.randomBytes(n *= 4); a < n; )
        e = i[a] + (i[a + 1] << 8) + (i[a + 2] << 16) + ((i[a + 3] & 127) << 24), e >= 214e7 ? crypto.randomBytes(4).copy(i, a) : (l.push(e % 1e7), a += 4);
      a = n / 4;
    } else
      throw Error(Ri);
  else
    for (; a < n; )
      l[a++] = Math.random() * 1e7 | 0;
  for (n = l[--a], r %= de, n && r && (e = Ge(10, de - r), l[a] = (n / e | 0) * e); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    t = 0, l = [0];
  else {
    for (t = -1; l[0] === 0; t -= de)
      l.shift();
    for (n = 1, e = l[0]; e >= 10; e /= 10)
      n++;
    n < de && (t -= de - n);
  }
  return u.e = t, u.d = l, u;
}
function Yo(r) {
  return pe(r = new this(r), r.e + 1, this.rounding);
}
function Jo(r) {
  return r = new this(r), r.d ? r.d[0] ? r.s : 0 * r.s : r.s || NaN;
}
function Qo(r) {
  return new this(r).sin();
}
function Xo(r) {
  return new this(r).sinh();
}
function Ho(r) {
  return new this(r).sqrt();
}
function Ko(r, i) {
  return new this(r).sub(i);
}
function Wo() {
  var r = 0, i = arguments, t = new this(i[r]);
  for (ge = !1; t.s && ++r < i.length; )
    t = t.plus(i[r]);
  return ge = !0, pe(t, this.precision, this.rounding);
}
function ko(r) {
  return new this(r).tan();
}
function jo(r) {
  return new this(r).tanh();
}
function es(r) {
  return pe(r = new this(r), r.e + 1, 1);
}
W[Symbol.for("nodejs.util.inspect.custom")] = W.toString;
W[Symbol.toStringTag] = "Decimal";
var qr = W.constructor = Xi(Ut);
ht = new qr(ht);
vt = new qr(vt);
var rs = "BigNumber", ts = ["?on", "config"], ns = /* @__PURE__ */ ee(rs, ts, (r) => {
  var {
    on: i,
    config: t
  } = r, n = qr.clone({
    precision: t.precision,
    modulo: qr.EUCLID
  });
  return n.prototype = Object.create(n.prototype), n.prototype.type = "BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON = function() {
    return {
      mathjs: "BigNumber",
      value: this.toString()
    };
  }, n.fromJSON = function(e) {
    return new n(e.value);
  }, i && i("config", function(e, a) {
    e.precision !== a.precision && n.config({
      precision: e.precision
    });
  }), n;
}, {
  isClass: !0
});
function Hi(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ki = { exports: {} };
/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(r, i) {
  (function(t) {
    var n = Math.cosh || function(o) {
      return Math.abs(o) < 1e-9 ? 1 - o : (Math.exp(o) + Math.exp(-o)) * 0.5;
    }, e = Math.sinh || function(o) {
      return Math.abs(o) < 1e-9 ? o : (Math.exp(o) - Math.exp(-o)) * 0.5;
    }, a = function(o) {
      var c = Math.PI / 4;
      if (-c > o || o > c)
        return Math.cos(o) - 1;
      var v = o * o;
      return v * (v * (v * (v * (v * (v * (v * (v / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, u = function(o, c) {
      var v = Math.abs(o), g = Math.abs(c);
      return v < 3e3 && g < 3e3 ? Math.sqrt(v * v + g * g) : (v < g ? (v = g, g = o / c) : g = c / o, v * Math.sqrt(1 + g * g));
    }, l = function() {
      throw SyntaxError("Invalid Param");
    };
    function f(o, c) {
      var v = Math.abs(o), g = Math.abs(c);
      return o === 0 ? Math.log(g) : c === 0 ? Math.log(v) : v < 3e3 && g < 3e3 ? Math.log(o * o + c * c) * 0.5 : (o = o / 2, c = c / 2, 0.5 * Math.log(o * o + c * c) + Math.LN2);
    }
    var h = function(o, c) {
      var v = { re: 0, im: 0 };
      if (o == null)
        v.re = v.im = 0;
      else if (c !== void 0)
        v.re = o, v.im = c;
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
              o.length === 2 ? (v.re = o[0], v.im = o[1]) : l();
            break;
          case "string":
            v.im = /* void */
            v.re = 0;
            var g = o.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), p = 1, m = 0;
            g === null && l();
            for (var d = 0; d < g.length; d++) {
              var w = g[d];
              w === " " || w === "	" || w === `
` || (w === "+" ? p++ : w === "-" ? m++ : w === "i" || w === "I" ? (p + m === 0 && l(), g[d + 1] !== " " && !isNaN(g[d + 1]) ? (v.im += parseFloat((m % 2 ? "-" : "") + g[d + 1]), d++) : v.im += parseFloat((m % 2 ? "-" : "") + "1"), p = m = 0) : ((p + m === 0 || isNaN(w)) && l(), g[d + 1] === "i" || g[d + 1] === "I" ? (v.im += parseFloat((m % 2 ? "-" : "") + w), d++) : v.re += parseFloat((m % 2 ? "-" : "") + w), p = m = 0));
            }
            p + m > 0 && l();
            break;
          case "number":
            v.im = 0, v.re = o;
            break;
          default:
            l();
        }
      return isNaN(v.re) || isNaN(v.im), v;
    };
    function s(o, c) {
      if (!(this instanceof s))
        return new s(o, c);
      var v = h(o, c);
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
      add: function(o, c) {
        var v = new s(o, c);
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
      sub: function(o, c) {
        var v = new s(o, c);
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
      mul: function(o, c) {
        var v = new s(o, c);
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
      div: function(o, c) {
        var v = new s(o, c);
        if (this.isZero() && v.isZero() || this.isInfinite() && v.isInfinite())
          return s.NAN;
        if (this.isInfinite() || v.isZero())
          return s.INFINITY;
        if (this.isZero() || v.isInfinite())
          return s.ZERO;
        o = this.re, c = this.im;
        var g = v.re, p = v.im, m, d;
        return p === 0 ? new s(o / g, c / g) : Math.abs(g) < Math.abs(p) ? (d = g / p, m = g * d + p, new s(
          (o * d + c) / m,
          (c * d - o) / m
        )) : (d = p / g, m = p * d + g, new s(
          (o + c * d) / m,
          (c - o * d) / m
        ));
      },
      /**
       * Calculate the power of two complex numbers
       *
       * @returns {Complex}
       */
      pow: function(o, c) {
        var v = new s(o, c);
        if (o = this.re, c = this.im, v.isZero())
          return s.ONE;
        if (v.im === 0) {
          if (c === 0 && o > 0)
            return new s(Math.pow(o, v.re), 0);
          if (o === 0)
            switch ((v.re % 4 + 4) % 4) {
              case 0:
                return new s(Math.pow(c, v.re), 0);
              case 1:
                return new s(0, Math.pow(c, v.re));
              case 2:
                return new s(-Math.pow(c, v.re), 0);
              case 3:
                return new s(0, -Math.pow(c, v.re));
            }
        }
        if (o === 0 && c === 0 && v.re > 0 && v.im >= 0)
          return s.ZERO;
        var g = Math.atan2(c, o), p = f(o, c);
        return o = Math.exp(v.re * p - v.im * g), c = v.im * p + v.re * g, new s(
          o * Math.cos(c),
          o * Math.sin(c)
        );
      },
      /**
       * Calculate the complex square root
       *
       * @returns {Complex}
       */
      sqrt: function() {
        var o = this.re, c = this.im, v = this.abs(), g, p;
        if (o >= 0) {
          if (c === 0)
            return new s(Math.sqrt(o), 0);
          g = 0.5 * Math.sqrt(2 * (v + o));
        } else
          g = Math.abs(c) / Math.sqrt(2 * (v - o));
        return o <= 0 ? p = 0.5 * Math.sqrt(2 * (v - o)) : p = Math.abs(c) / Math.sqrt(2 * (v + o)), new s(g, c < 0 ? -p : p);
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
        var o = this.re, c = this.im;
        return new s(
          Math.expm1(o) * Math.cos(c) + a(c),
          Math.exp(o) * Math.sin(c)
        );
      },
      /**
       * Calculate the natural log
       *
       * @returns {Complex}
       */
      log: function() {
        var o = this.re, c = this.im;
        return new s(
          f(o, c),
          Math.atan2(c, o)
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
        var o = this.re, c = this.im;
        return new s(
          Math.sin(o) * n(c),
          Math.cos(o) * e(c)
        );
      },
      /**
       * Calculate the cosine
       *
       * @returns {Complex}
       */
      cos: function() {
        var o = this.re, c = this.im;
        return new s(
          Math.cos(o) * n(c),
          -Math.sin(o) * e(c)
        );
      },
      /**
       * Calculate the tangent
       *
       * @returns {Complex}
       */
      tan: function() {
        var o = 2 * this.re, c = 2 * this.im, v = Math.cos(o) + n(c);
        return new s(
          Math.sin(o) / v,
          e(c) / v
        );
      },
      /**
       * Calculate the cotangent
       *
       * @returns {Complex}
       */
      cot: function() {
        var o = 2 * this.re, c = 2 * this.im, v = Math.cos(o) - n(c);
        return new s(
          -Math.sin(o) / v,
          e(c) / v
        );
      },
      /**
       * Calculate the secant
       *
       * @returns {Complex}
       */
      sec: function() {
        var o = this.re, c = this.im, v = 0.5 * n(2 * c) + 0.5 * Math.cos(2 * o);
        return new s(
          Math.cos(o) * n(c) / v,
          Math.sin(o) * e(c) / v
        );
      },
      /**
       * Calculate the cosecans
       *
       * @returns {Complex}
       */
      csc: function() {
        var o = this.re, c = this.im, v = 0.5 * n(2 * c) - 0.5 * Math.cos(2 * o);
        return new s(
          Math.sin(o) * n(c) / v,
          -Math.cos(o) * e(c) / v
        );
      },
      /**
       * Calculate the complex arcus sinus
       *
       * @returns {Complex}
       */
      asin: function() {
        var o = this.re, c = this.im, v = new s(
          c * c - o * o + 1,
          -2 * o * c
        ).sqrt(), g = new s(
          v.re - c,
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
        var o = this.re, c = this.im, v = new s(
          c * c - o * o + 1,
          -2 * o * c
        ).sqrt(), g = new s(
          v.re - c,
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
        var o = this.re, c = this.im;
        if (o === 0) {
          if (c === 1)
            return new s(0, 1 / 0);
          if (c === -1)
            return new s(0, -1 / 0);
        }
        var v = o * o + (1 - c) * (1 - c), g = new s(
          (1 - c * c - o * o) / v,
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
        var o = this.re, c = this.im;
        if (c === 0)
          return new s(Math.atan2(1, o), 0);
        var v = o * o + c * c;
        return v !== 0 ? new s(
          o / v,
          -c / v
        ).atan() : new s(
          o !== 0 ? o / 0 : 0,
          c !== 0 ? -c / 0 : 0
        ).atan();
      },
      /**
       * Calculate the complex arcus secant
       *
       * @returns {Complex}
       */
      asec: function() {
        var o = this.re, c = this.im;
        if (o === 0 && c === 0)
          return new s(0, 1 / 0);
        var v = o * o + c * c;
        return v !== 0 ? new s(
          o / v,
          -c / v
        ).acos() : new s(
          o !== 0 ? o / 0 : 0,
          c !== 0 ? -c / 0 : 0
        ).acos();
      },
      /**
       * Calculate the complex arcus cosecans
       *
       * @returns {Complex}
       */
      acsc: function() {
        var o = this.re, c = this.im;
        if (o === 0 && c === 0)
          return new s(Math.PI / 2, 1 / 0);
        var v = o * o + c * c;
        return v !== 0 ? new s(
          o / v,
          -c / v
        ).asin() : new s(
          o !== 0 ? o / 0 : 0,
          c !== 0 ? -c / 0 : 0
        ).asin();
      },
      /**
       * Calculate the complex sinh
       *
       * @returns {Complex}
       */
      sinh: function() {
        var o = this.re, c = this.im;
        return new s(
          e(o) * Math.cos(c),
          n(o) * Math.sin(c)
        );
      },
      /**
       * Calculate the complex cosh
       *
       * @returns {Complex}
       */
      cosh: function() {
        var o = this.re, c = this.im;
        return new s(
          n(o) * Math.cos(c),
          e(o) * Math.sin(c)
        );
      },
      /**
       * Calculate the complex tanh
       *
       * @returns {Complex}
       */
      tanh: function() {
        var o = 2 * this.re, c = 2 * this.im, v = n(o) + Math.cos(c);
        return new s(
          e(o) / v,
          Math.sin(c) / v
        );
      },
      /**
       * Calculate the complex coth
       *
       * @returns {Complex}
       */
      coth: function() {
        var o = 2 * this.re, c = 2 * this.im, v = n(o) - Math.cos(c);
        return new s(
          e(o) / v,
          -Math.sin(c) / v
        );
      },
      /**
       * Calculate the complex coth
       *
       * @returns {Complex}
       */
      csch: function() {
        var o = this.re, c = this.im, v = Math.cos(2 * c) - n(2 * o);
        return new s(
          -2 * e(o) * Math.cos(c) / v,
          2 * n(o) * Math.sin(c) / v
        );
      },
      /**
       * Calculate the complex sech
       *
       * @returns {Complex}
       */
      sech: function() {
        var o = this.re, c = this.im, v = Math.cos(2 * c) + n(2 * o);
        return new s(
          2 * n(o) * Math.cos(c) / v,
          -2 * e(o) * Math.sin(c) / v
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
        var c = this.asin();
        return this.re = -this.im, this.im = o, o = c.re, c.re = -c.im, c.im = o, c;
      },
      /**
       * Calculate the complex acosh
       *
       * @returns {Complex}
       */
      acosh: function() {
        var o = this.acos();
        if (o.im <= 0) {
          var c = o.re;
          o.re = -o.im, o.im = c;
        } else {
          var c = o.im;
          o.im = -o.re, o.re = c;
        }
        return o;
      },
      /**
       * Calculate the complex atanh
       *
       * @returns {Complex}
       */
      atanh: function() {
        var o = this.re, c = this.im, v = o > 1 && c === 0, g = 1 - o, p = 1 + o, m = g * g + c * c, d = m !== 0 ? new s(
          (p * g - c * c) / m,
          (c * g + p * c) / m
        ) : new s(
          o !== -1 ? o / 0 : 0,
          c !== 0 ? c / 0 : 0
        ), w = d.re;
        return d.re = f(d.re, d.im) / 2, d.im = Math.atan2(d.im, w) / 2, v && (d.im = -d.im), d;
      },
      /**
       * Calculate the complex acoth
       *
       * @returns {Complex}
       */
      acoth: function() {
        var o = this.re, c = this.im;
        if (o === 0 && c === 0)
          return new s(0, Math.PI / 2);
        var v = o * o + c * c;
        return v !== 0 ? new s(
          o / v,
          -c / v
        ).atanh() : new s(
          o !== 0 ? o / 0 : 0,
          c !== 0 ? -c / 0 : 0
        ).atanh();
      },
      /**
       * Calculate the complex acsch
       *
       * @returns {Complex}
       */
      acsch: function() {
        var o = this.re, c = this.im;
        if (c === 0)
          return new s(
            o !== 0 ? Math.log(o + Math.sqrt(o * o + 1)) : 1 / 0,
            0
          );
        var v = o * o + c * c;
        return v !== 0 ? new s(
          o / v,
          -c / v
        ).asinh() : new s(
          o !== 0 ? o / 0 : 0,
          c !== 0 ? -c / 0 : 0
        ).asinh();
      },
      /**
       * Calculate the complex asech
       *
       * @returns {Complex}
       */
      asech: function() {
        var o = this.re, c = this.im;
        if (this.isZero())
          return s.INFINITY;
        var v = o * o + c * c;
        return v !== 0 ? new s(
          o / v,
          -c / v
        ).acosh() : new s(
          o !== 0 ? o / 0 : 0,
          c !== 0 ? -c / 0 : 0
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
        var o = this.re, c = this.im, v = o * o + c * c;
        return new s(o / v, -c / v);
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
      equals: function(o, c) {
        var v = new s(o, c);
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
        var o = this.re, c = this.im, v = "";
        return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(o) < s.EPSILON && (o = 0), Math.abs(c) < s.EPSILON && (c = 0), c === 0 ? v + o : (o !== 0 ? (v += o, v += " ", c < 0 ? (c = -c, v += "-") : v += "+", v += " ") : c < 0 && (c = -c, v += "-"), c !== 1 && (v += c), v + "i"));
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
    }, s.ZERO = new s(0, 0), s.ONE = new s(1, 0), s.I = new s(0, 1), s.PI = new s(Math.PI, 0), s.E = new s(Math.E, 0), s.INFINITY = new s(1 / 0, 1 / 0), s.NAN = new s(NaN, NaN), s.EPSILON = 1e-15, Object.defineProperty(s, "__esModule", { value: !0 }), s.default = s, s.Complex = s, r.exports = s;
  })();
})(Ki);
var is = Ki.exports;
const Ze = /* @__PURE__ */ Hi(is);
var as = "Complex", us = [], os = /* @__PURE__ */ ee(as, us, () => (Object.defineProperty(Ze, "name", {
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
}, Ze.prototype.format = function(r) {
  var i = "", t = this.im, n = this.re, e = $t(this.re, r), a = $t(this.im, r), u = $e(r) ? r : r ? r.precision : null;
  if (u !== null) {
    var l = Math.pow(10, -u);
    Math.abs(n / t) < l && (n = 0), Math.abs(t / n) < l && (t = 0);
  }
  return t === 0 ? i = e : n === 0 ? t === 1 ? i = "i" : t === -1 ? i = "-i" : i = a + "i" : t < 0 ? t === -1 ? i = e + " - i" : i = e + " - " + a.substring(1) + "i" : t === 1 ? i = e + " + i" : i = e + " + " + a + "i", i;
}, Ze.fromPolar = function(r) {
  switch (arguments.length) {
    case 1: {
      var i = arguments[0];
      if (typeof i == "object")
        return Ze(i);
      throw new TypeError("Input has to be an object with r and phi keys.");
    }
    case 2: {
      var t = arguments[0], n = arguments[1];
      if ($e(t)) {
        if (Di(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), $e(n))
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
}, Ze.prototype.valueOf = Ze.prototype.toString, Ze.fromJSON = function(r) {
  return new Ze(r);
}, Ze.compare = function(r, i) {
  return r.re > i.re ? 1 : r.re < i.re ? -1 : r.im > i.im ? 1 : r.im < i.im ? -1 : 0;
}, Ze), {
  isClass: !0
}), Wi = { exports: {} };
/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(r, i) {
  (function(t) {
    var n = 2e3, e = {
      s: 1,
      n: 0,
      d: 1
    };
    function a(d, w) {
      if (isNaN(d = parseInt(d, 10)))
        throw p();
      return d * w;
    }
    function u(d, w) {
      if (w === 0)
        throw g();
      var D = Object.create(v.prototype);
      D.s = d < 0 ? -1 : 1, d = d < 0 ? -d : d;
      var A = c(d, w);
      return D.n = d / A, D.d = w / A, D;
    }
    function l(d) {
      for (var w = {}, D = d, A = 2, E = 4; E <= D; ) {
        for (; D % A === 0; )
          D /= A, w[A] = (w[A] || 0) + 1;
        E += 1 + 2 * A++;
      }
      return D !== d ? D > 1 && (w[D] = (w[D] || 0) + 1) : w[d] = (w[d] || 0) + 1, w;
    }
    var f = function(d, w) {
      var D = 0, A = 1, E = 1, y = 0, F = 0, b = 0, C = 1, S = 1, M = 0, x = 1, I = 1, T = 1, L = 1e7, N;
      if (d != null)
        if (w !== void 0) {
          if (D = d, A = w, E = D * A, D % 1 !== 0 || A % 1 !== 0)
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
                for (d >= 1 && (S = Math.pow(10, Math.floor(1 + Math.log(d) / Math.LN10)), d /= S); x <= L && T <= L; )
                  if (N = (M + I) / (x + T), d === N) {
                    x + T <= L ? (D = M + I, A = x + T) : T > x ? (D = I, A = T) : (D = M, A = x);
                    break;
                  } else
                    d > N ? (M += I, x += T) : (I += M, T += x), x > L ? (D = I, A = T) : (D = M, A = x);
                D *= S;
              } else
                (isNaN(d) || isNaN(w)) && (A = D = NaN);
              break;
            }
            case "string": {
              if (x = d.match(/\d+|./g), x === null)
                throw p();
              if (x[M] === "-" ? (E = -1, M++) : x[M] === "+" && M++, x.length === M + 1 ? F = a(x[M++], E) : x[M + 1] === "." || x[M] === "." ? (x[M] !== "." && (y = a(x[M++], E)), M++, (M + 1 === x.length || x[M + 1] === "(" && x[M + 3] === ")" || x[M + 1] === "'" && x[M + 3] === "'") && (F = a(x[M], E), C = Math.pow(10, x[M].length), M++), (x[M] === "(" && x[M + 2] === ")" || x[M] === "'" && x[M + 2] === "'") && (b = a(x[M + 1], E), S = Math.pow(10, x[M + 1].length) - 1, M += 3)) : x[M + 1] === "/" || x[M + 1] === ":" ? (F = a(x[M], E), C = a(x[M + 2], 1), M += 3) : x[M + 3] === "/" && x[M + 1] === " " && (y = a(x[M], E), F = a(x[M + 2], E), C = a(x[M + 4], 1), M += 5), x.length <= M) {
                A = C * S, E = /* void */
                D = b + A * y + S * F;
                break;
              }
            }
            default:
              throw p();
          }
      if (A === 0)
        throw g();
      e.s = E < 0 ? -1 : 1, e.n = Math.abs(D), e.d = Math.abs(A);
    };
    function h(d, w, D) {
      for (var A = 1; w > 0; d = d * d % D, w >>= 1)
        w & 1 && (A = A * d % D);
      return A;
    }
    function s(d, w) {
      for (; w % 2 === 0; w /= 2)
        ;
      for (; w % 5 === 0; w /= 5)
        ;
      if (w === 1)
        return 0;
      for (var D = 10 % w, A = 1; D !== 1; A++)
        if (D = D * 10 % w, A > n)
          return 0;
      return A;
    }
    function o(d, w, D) {
      for (var A = 1, E = h(10, D, w), y = 0; y < 300; y++) {
        if (A === E)
          return y;
        A = A * 10 % w, E = E * 10 % w;
      }
      return 0;
    }
    function c(d, w) {
      if (!d)
        return w;
      if (!w)
        return d;
      for (; ; ) {
        if (d %= w, !d)
          return w;
        if (w %= d, !w)
          return d;
      }
    }
    function v(d, w) {
      if (f(d, w), this instanceof v)
        d = c(e.d, e.n), this.s = e.s, this.n = e.n / d, this.d = e.d / d;
      else
        return u(e.s * e.n, e.d);
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
      add: function(d, w) {
        return f(d, w), u(
          this.s * this.n * e.d + e.s * this.d * e.n,
          this.d * e.d
        );
      },
      /**
       * Subtracts two rational numbers
       *
       * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
       **/
      sub: function(d, w) {
        return f(d, w), u(
          this.s * this.n * e.d - e.s * this.d * e.n,
          this.d * e.d
        );
      },
      /**
       * Multiplies two rational numbers
       *
       * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
       **/
      mul: function(d, w) {
        return f(d, w), u(
          this.s * e.s * this.n * e.n,
          this.d * e.d
        );
      },
      /**
       * Divides two rational numbers
       *
       * Ex: new Fraction("-17.(345)").inverse().div(3)
       **/
      div: function(d, w) {
        return f(d, w), u(
          this.s * e.s * this.n * e.d,
          this.d * e.n
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
      mod: function(d, w) {
        if (isNaN(this.n) || isNaN(this.d))
          return new v(NaN);
        if (d === void 0)
          return u(this.s * this.n % this.d, 1);
        if (f(d, w), e.n === 0 && this.d === 0)
          throw g();
        return u(
          this.s * (e.d * this.n) % (e.n * this.d),
          e.d * this.d
        );
      },
      /**
       * Calculates the fractional gcd of two rational numbers
       *
       * Ex: new Fraction(5,8).gcd(3,7) => 1/56
       */
      gcd: function(d, w) {
        return f(d, w), u(c(e.n, this.n) * c(e.d, this.d), e.d * this.d);
      },
      /**
       * Calculates the fractional lcm of two rational numbers
       *
       * Ex: new Fraction(5,8).lcm(3,7) => 15
       */
      lcm: function(d, w) {
        return f(d, w), e.n === 0 && this.n === 0 ? u(0, 1) : u(e.n * this.n, c(e.n, this.n) * c(e.d, this.d));
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
      pow: function(d, w) {
        if (f(d, w), e.d === 1)
          return e.s < 0 ? u(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : u(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
        if (this.s < 0)
          return null;
        var D = l(this.n), A = l(this.d), E = 1, y = 1;
        for (var F in D)
          if (F !== "1") {
            if (F === "0") {
              E = 0;
              break;
            }
            if (D[F] *= e.n, D[F] % e.d === 0)
              D[F] /= e.d;
            else
              return null;
            E *= Math.pow(F, D[F]);
          }
        for (var F in A)
          if (F !== "1") {
            if (A[F] *= e.n, A[F] % e.d === 0)
              A[F] /= e.d;
            else
              return null;
            y *= Math.pow(F, A[F]);
          }
        return e.s < 0 ? u(y, E) : u(E, y);
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      equals: function(d, w) {
        return f(d, w), this.s * this.n * e.d === e.s * e.n * this.d;
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      compare: function(d, w) {
        f(d, w);
        var D = this.s * this.n * e.d - e.s * e.n * this.d;
        return (0 < D) - (D < 0);
      },
      simplify: function(d) {
        if (isNaN(this.n) || isNaN(this.d))
          return this;
        d = d || 1e-3;
        for (var w = this.abs(), D = w.toContinued(), A = 1; A < D.length; A++) {
          for (var E = u(D[A - 1], 1), y = A - 2; y >= 0; y--)
            E = E.inverse().add(D[y]);
          if (Math.abs(E.sub(w).valueOf()) < d)
            return E.mul(this.s);
        }
        return this;
      },
      /**
       * Check if two rational numbers are divisible
       *
       * Ex: new Fraction(19.6).divisible(1.5);
       */
      divisible: function(d, w) {
        return f(d, w), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
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
        var w, D = "", A = this.n, E = this.d;
        return this.s < 0 && (D += "-"), E === 1 ? D += A : (d && (w = Math.floor(A / E)) > 0 && (D += w, D += " ", A %= E), D += A, D += "/", D += E), D;
      },
      /**
       * Returns a latex representation of a Fraction object
       *
       * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
       **/
      toLatex: function(d) {
        var w, D = "", A = this.n, E = this.d;
        return this.s < 0 && (D += "-"), E === 1 ? D += A : (d && (w = Math.floor(A / E)) > 0 && (D += w, A %= E), D += "\\frac{", D += A, D += "}{", D += E, D += "}"), D;
      },
      /**
       * Returns an array of continued fraction elements
       *
       * Ex: new Fraction("7/8").toContinued() => [0,1,7]
       */
      toContinued: function() {
        var d, w = this.n, D = this.d, A = [];
        if (isNaN(w) || isNaN(D))
          return A;
        do
          A.push(Math.floor(w / D)), d = w % D, w = D, D = d;
        while (w !== 1);
        return A;
      },
      /**
       * Creates a string representation of a fraction with all digits
       *
       * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
       **/
      toString: function(d) {
        var w = this.n, D = this.d;
        if (isNaN(w) || isNaN(D))
          return "NaN";
        d = d || 15;
        var A = s(w, D), E = o(w, D, A), y = this.s < 0 ? "-" : "";
        if (y += w / D | 0, w %= D, w *= 10, w && (y += "."), A) {
          for (var F = E; F--; )
            y += w / D | 0, w %= D, w *= 10;
          y += "(";
          for (var F = A; F--; )
            y += w / D | 0, w %= D, w *= 10;
          y += ")";
        } else
          for (var F = d; w && F--; )
            y += w / D | 0, w %= D, w *= 10;
        return y;
      }
    }, Object.defineProperty(v, "__esModule", { value: !0 }), v.default = v, v.Fraction = v, r.exports = v;
  })();
})(Wi);
var ss = Wi.exports;
const vr = /* @__PURE__ */ Hi(ss);
var fs = "Fraction", cs = [], ls = /* @__PURE__ */ ee(fs, cs, () => (Object.defineProperty(vr, "name", {
  value: "Fraction"
}), vr.prototype.constructor = vr, vr.prototype.type = "Fraction", vr.prototype.isFraction = !0, vr.prototype.toJSON = function() {
  return {
    mathjs: "Fraction",
    n: this.s * this.n,
    d: this.d
  };
}, vr.fromJSON = function(r) {
  return new vr(r);
}, vr), {
  isClass: !0
}), hs = "Matrix", vs = [], ps = /* @__PURE__ */ ee(hs, vs, () => {
  function r() {
    if (!(this instanceof r))
      throw new SyntaxError("Constructor must be called with the new operator");
  }
  return r.prototype.type = "Matrix", r.prototype.isMatrix = !0, r.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  }, r.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  }, r.prototype.create = function(i, t) {
    throw new Error("Cannot invoke create on a Matrix interface");
  }, r.prototype.subset = function(i, t, n) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  }, r.prototype.get = function(i) {
    throw new Error("Cannot invoke get on a Matrix interface");
  }, r.prototype.set = function(i, t, n) {
    throw new Error("Cannot invoke set on a Matrix interface");
  }, r.prototype.resize = function(i, t) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  }, r.prototype.reshape = function(i, t) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  }, r.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  }, r.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  }, r.prototype.map = function(i, t) {
    throw new Error("Cannot invoke map on a Matrix interface");
  }, r.prototype.forEach = function(i) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  }, r.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  }, r.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  }, r.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  }, r.prototype.format = function(i) {
    throw new Error("Cannot invoke format on a Matrix interface");
  }, r.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  }, r;
}, {
  isClass: !0
});
function ki(r) {
  return Object.keys(r.signatures || {}).reduce(function(i, t) {
    var n = (t.match(/,/g) || []).length + 1;
    return Math.max(i, n);
  }, -1);
}
var ds = "DenseMatrix", ms = ["Matrix"], gs = /* @__PURE__ */ ee(ds, ms, (r) => {
  var {
    Matrix: i
  } = r;
  function t(s, o) {
    if (!(this instanceof t))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (o && !ir(o))
      throw new Error("Invalid datatype: " + o);
    if (_e(s))
      s.type === "DenseMatrix" ? (this._data = Fe(s._data), this._size = Fe(s._size), this._datatype = o || s._datatype) : (this._data = s.toArray(), this._size = s.size(), this._datatype = o || s._datatype);
    else if (s && Me(s.data) && Me(s.size))
      this._data = s.data, this._size = s.size, vn(this._data, this._size), this._datatype = o || s.datatype;
    else if (Me(s))
      this._data = h(s), this._size = qe(this._data), vn(this._data, this._size), this._datatype = o;
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
    return Jr(this._data, lr);
  }, t.prototype.storage = function() {
    return "dense";
  }, t.prototype.datatype = function() {
    return this._datatype;
  }, t.prototype.create = function(s, o) {
    return new t(s, o);
  }, t.prototype.subset = function(s, o, c) {
    switch (arguments.length) {
      case 1:
        return n(this, s);
      case 2:
      case 3:
        return a(this, s, o, c);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, t.prototype.get = function(s) {
    if (!Me(s))
      throw new TypeError("Array expected");
    if (s.length !== this._size.length)
      throw new Ce(s.length, this._size.length);
    for (var o = 0; o < s.length; o++)
      Ne(s[o], this._size[o]);
    for (var c = this._data, v = 0, g = s.length; v < g; v++) {
      var p = s[v];
      Ne(p, c.length), c = c[p];
    }
    return c;
  }, t.prototype.set = function(s, o, c) {
    if (!Me(s))
      throw new TypeError("Array expected");
    if (s.length < this._size.length)
      throw new Ce(s.length, this._size.length, "<");
    var v, g, p, m = s.map(function(w) {
      return w + 1;
    });
    f(this, m, c);
    var d = this._data;
    for (v = 0, g = s.length - 1; v < g; v++)
      p = s[v], Ne(p, d.length), d = d[p];
    return p = s[s.length - 1], Ne(p, d.length), d[p] = o, this;
  };
  function n(s, o) {
    if (!Et(o))
      throw new TypeError("Invalid index");
    var c = o.isScalar();
    if (c)
      return s.get(o.min());
    var v = o.size();
    if (v.length !== s._size.length)
      throw new Ce(v.length, s._size.length);
    for (var g = o.min(), p = o.max(), m = 0, d = s._size.length; m < d; m++)
      Ne(g[m], s._size[m]), Ne(p[m], s._size[m]);
    return new t(e(s._data, o, v.length, 0), s._datatype);
  }
  function e(s, o, c, v) {
    var g = v === c - 1, p = o.dimension(v);
    return g ? p.map(function(m) {
      return Ne(m, s.length), s[m];
    }).valueOf() : p.map(function(m) {
      Ne(m, s.length);
      var d = s[m];
      return e(d, o, c, v + 1);
    }).valueOf();
  }
  function a(s, o, c, v) {
    if (!o || o.isIndex !== !0)
      throw new TypeError("Invalid index");
    var g = o.size(), p = o.isScalar(), m;
    if (_e(c) ? (m = c.size(), c = c.valueOf()) : m = qe(c), p) {
      if (m.length !== 0)
        throw new TypeError("Scalar expected");
      s.set(o.min(), c, v);
    } else {
      if (!Lr(m, g))
        try {
          m.length === 0 ? c = dn([c], g) : c = dn(c, g), m = qe(c);
        } catch {
        }
      if (g.length < s._size.length)
        throw new Ce(g.length, s._size.length, "<");
      if (m.length < g.length) {
        for (var d = 0, w = 0; g[d] === 1 && m[d] === 1; )
          d++;
        for (; g[d] === 1; )
          w++, d++;
        c = Bi(c, g.length, w, m);
      }
      if (!Lr(g, m))
        throw new Ce(g, m, ">");
      var D = o.max().map(function(y) {
        return y + 1;
      });
      f(s, D, v);
      var A = g.length, E = 0;
      u(s._data, o, c, A, E);
    }
    return s;
  }
  function u(s, o, c, v, g) {
    var p = g === v - 1, m = o.dimension(g);
    p ? m.forEach(function(d, w) {
      Ne(d), s[d] = c[w[0]];
    }) : m.forEach(function(d, w) {
      Ne(d), u(s[d], o, c[w[0]], v, g + 1);
    });
  }
  t.prototype.resize = function(s, o, c) {
    if (!st(s))
      throw new TypeError("Array or Matrix expected");
    var v = s.valueOf().map((p) => Array.isArray(p) && p.length === 1 ? p[0] : p), g = c ? this.clone() : this;
    return l(g, v, o);
  };
  function l(s, o, c) {
    if (o.length === 0) {
      for (var v = s._data; Me(v); )
        v = v[0];
      return v;
    }
    return s._size = o.slice(0), s._data = ct(s._data, s._size, c), s;
  }
  t.prototype.reshape = function(s, o) {
    var c = o ? this.clone() : this;
    c._data = Kt(c._data, s);
    var v = c._size.reduce((g, p) => g * p);
    return c._size = Wt(s, v), c;
  };
  function f(s, o, c) {
    for (var v = s._size.slice(0), g = !1; v.length < o.length; )
      v.push(0), g = !0;
    for (var p = 0, m = o.length; p < m; p++)
      o[p] > v[p] && (v[p] = o[p], g = !0);
    g && l(s, v, c);
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
    var o = this, c = ki(s), v = function m(d, w) {
      return Me(d) ? d.map(function(D, A) {
        return m(D, w.concat(A));
      }) : c === 1 ? s(d) : c === 2 ? s(d, w) : s(d, w, o);
    }, g = v(this._data, []), p = this._datatype !== void 0 ? Jr(g, lr) : void 0;
    return new t(g, p);
  }, t.prototype.forEach = function(s) {
    var o = this, c = function v(g, p) {
      Me(g) ? g.forEach(function(m, d) {
        v(m, p.concat(d));
      }) : s(g, p, o);
    };
    c(this._data, []);
  }, t.prototype[Symbol.iterator] = function* () {
    var s = function* o(c, v) {
      if (Me(c))
        for (var g = 0; g < c.length; g++)
          yield* o(c[g], v.concat(g));
      else
        yield {
          value: c,
          index: v
        };
    };
    yield* s(this._data, []);
  }, t.prototype.rows = function() {
    var s = [], o = this.size();
    if (o.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    var c = this._data;
    for (var v of c)
      s.push(new t([v], this._datatype));
    return s;
  }, t.prototype.columns = function() {
    var s = this, o = [], c = this.size();
    if (c.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    for (var v = this._data, g = function(d) {
      var w = v.map((D) => [D[d]]);
      o.push(new t(w, s._datatype));
    }, p = 0; p < c[1]; p++)
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
      if (Re(s) && (s = s.toNumber()), !$e(s) || !ze(s))
        throw new TypeError("The parameter k must be an integer number");
    } else
      s = 0;
    for (var o = s > 0 ? s : 0, c = s < 0 ? -s : 0, v = this._size[0], g = this._size[1], p = Math.min(v - c, g - o), m = [], d = 0; d < p; d++)
      m[d] = this._data[d + c][d + o];
    return new t({
      data: m,
      size: [p],
      datatype: this._datatype
    });
  }, t.diagonal = function(s, o, c, v) {
    if (!Me(s))
      throw new TypeError("Array expected, size parameter");
    if (s.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (s = s.map(function(F) {
      if (Re(F) && (F = F.toNumber()), !$e(F) || !ze(F) || F < 1)
        throw new Error("Size values must be positive integers");
      return F;
    }), c) {
      if (Re(c) && (c = c.toNumber()), !$e(c) || !ze(c))
        throw new TypeError("The parameter k must be an integer number");
    } else
      c = 0;
    var g = c > 0 ? c : 0, p = c < 0 ? -c : 0, m = s[0], d = s[1], w = Math.min(m - p, d - g), D;
    if (Me(o)) {
      if (o.length !== w)
        throw new Error("Invalid value array length");
      D = function(b) {
        return o[b];
      };
    } else if (_e(o)) {
      var A = o.size();
      if (A.length !== 1 || A[0] !== w)
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
      E = ct(E, s, v);
      for (var y = 0; y < w; y++)
        E[y + p][y + g] = D(y);
    }
    return new t({
      data: E,
      size: [m, d]
    });
  }, t.fromJSON = function(s) {
    return new t(s);
  }, t.prototype.swapRows = function(s, o) {
    if (!$e(s) || !ze(s) || !$e(o) || !ze(o))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return Ne(s, this._size[0]), Ne(o, this._size[0]), t._swapRows(s, o, this._data), this;
  }, t._swapRows = function(s, o, c) {
    var v = c[s];
    c[s] = c[o], c[o] = v;
  };
  function h(s) {
    return _e(s) ? h(s.valueOf()) : Me(s) ? s.map(h) : s;
  }
  return t;
}, {
  isClass: !0
});
function er(r, i, t) {
  return r && typeof r.map == "function" ? r.map(function(n) {
    return er(n, i);
  }) : i(r);
}
var yn = "isInteger", Ds = ["typed"], ys = /* @__PURE__ */ ee(yn, Ds, (r) => {
  var {
    typed: i
  } = r;
  return i(yn, {
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
}), jt = "number", xt = "number, number";
function ji(r) {
  return Math.abs(r);
}
ji.signature = jt;
function ea(r, i) {
  return r + i;
}
ea.signature = xt;
function ra(r, i) {
  return r - i;
}
ra.signature = xt;
function ta(r, i) {
  return r * i;
}
ta.signature = xt;
function na(r) {
  return -r;
}
na.signature = jt;
function Yt(r) {
  return Iu(r);
}
Yt.signature = jt;
function ia(r, i) {
  return r * r < 1 && i === 1 / 0 || r * r > 1 && i === -1 / 0 ? 0 : Math.pow(r, i);
}
ia.signature = xt;
var aa = "number";
function ua(r) {
  return r > 0;
}
ua.signature = aa;
function oa(r) {
  return r === 0;
}
oa.signature = aa;
var wn = "isPositive", ws = ["typed"], As = /* @__PURE__ */ ee(wn, ws, (r) => {
  var {
    typed: i
  } = r;
  return i(wn, {
    number: ua,
    BigNumber: function(n) {
      return !n.isNeg() && !n.isZero() && !n.isNaN();
    },
    Fraction: function(n) {
      return n.s > 0 && n.n > 0;
    },
    Unit: i.referToSelf((t) => (n) => i.find(t, n.valueType())(n.value)),
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), An = "isZero", Es = ["typed"], Cs = /* @__PURE__ */ ee(An, Es, (r) => {
  var {
    typed: i
  } = r;
  return i(An, {
    number: oa,
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
}), En = "typeOf", Fs = ["typed"], bs = /* @__PURE__ */ ee(En, Fs, (r) => {
  var {
    typed: i
  } = r;
  return i(En, {
    any: lr
  });
});
function Xr(r, i, t) {
  if (t == null)
    return r.eq(i);
  if (r.eq(i))
    return !0;
  if (r.isNaN() || i.isNaN())
    return !1;
  if (r.isFinite() && i.isFinite()) {
    var n = r.minus(i).abs();
    if (n.isZero())
      return !0;
    var e = r.constructor.max(r.abs(), i.abs());
    return n.lte(e.times(t));
  }
  return !1;
}
function Ms(r, i, t) {
  return yr(r.re, i.re, t) && yr(r.im, i.im, t);
}
var Hr = /* @__PURE__ */ ee("compareUnits", ["typed"], (r) => {
  var {
    typed: i
  } = r;
  return {
    "Unit, Unit": i.referToSelf((t) => (n, e) => {
      if (!n.equalBase(e))
        throw new Error("Cannot compare units with different base");
      return i.find(t, [n.valueType(), e.valueType()])(n.value, e.value);
    })
  };
}), dt = "equalScalar", Ss = ["typed", "config"], xs = /* @__PURE__ */ ee(dt, Ss, (r) => {
  var {
    typed: i,
    config: t
  } = r, n = Hr({
    typed: i
  });
  return i(dt, {
    "boolean, boolean": function(a, u) {
      return a === u;
    },
    "number, number": function(a, u) {
      return yr(a, u, t.epsilon);
    },
    "BigNumber, BigNumber": function(a, u) {
      return a.eq(u) || Xr(a, u, t.epsilon);
    },
    "Fraction, Fraction": function(a, u) {
      return a.equals(u);
    },
    "Complex, Complex": function(a, u) {
      return Ms(a, u, t.epsilon);
    }
  }, n);
});
ee(dt, ["typed", "config"], (r) => {
  var {
    typed: i,
    config: t
  } = r;
  return i(dt, {
    "number, number": function(e, a) {
      return yr(e, a, t.epsilon);
    }
  });
});
var Bs = "SparseMatrix", Ns = ["typed", "equalScalar", "Matrix"], _s = /* @__PURE__ */ ee(Bs, Ns, (r) => {
  var {
    typed: i,
    equalScalar: t,
    Matrix: n
  } = r;
  function e(p, m) {
    if (!(this instanceof e))
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
    var w = m.length, D = 0, A = t, E = 0;
    if (ir(d) && (A = i.find(t, [d, d]) || t, E = i.convert(0, d)), w > 0) {
      var y = 0;
      do {
        p._ptr.push(p._index.length);
        for (var F = 0; F < w; F++) {
          var b = m[F];
          if (Me(b)) {
            if (y === 0 && D < b.length && (D = b.length), y < b.length) {
              var C = b[y];
              A(C, E) || (p._values.push(C), p._index.push(F));
            }
          } else
            y === 0 && D < 1 && (D = 1), A(b, E) || (p._values.push(b), p._index.push(F));
        }
        y++;
      } while (y < D);
    }
    p._ptr.push(p._index.length), p._size = [w, D];
  }
  e.prototype = new n(), e.prototype.createSparseMatrix = function(p, m) {
    return new e(p, m);
  }, Object.defineProperty(e, "name", {
    value: "SparseMatrix"
  }), e.prototype.constructor = e, e.prototype.type = "SparseMatrix", e.prototype.isSparseMatrix = !0, e.prototype.getDataType = function() {
    return Jr(this._values, lr);
  }, e.prototype.storage = function() {
    return "sparse";
  }, e.prototype.datatype = function() {
    return this._datatype;
  }, e.prototype.create = function(p, m) {
    return new e(p, m);
  }, e.prototype.density = function() {
    var p = this._size[0], m = this._size[1];
    return p !== 0 && m !== 0 ? this._index.length / (p * m) : 0;
  }, e.prototype.subset = function(p, m, d) {
    if (!this._values)
      throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return l(this, p);
      case 2:
      case 3:
        return f(this, p, m, d);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function l(p, m) {
    if (!Et(m))
      throw new TypeError("Invalid index");
    var d = m.isScalar();
    if (d)
      return p.get(m.min());
    var w = m.size();
    if (w.length !== p._size.length)
      throw new Ce(w.length, p._size.length);
    var D, A, E, y, F = m.min(), b = m.max();
    for (D = 0, A = p._size.length; D < A; D++)
      Ne(F[D], p._size[D]), Ne(b[D], p._size[D]);
    var C = p._values, S = p._index, M = p._ptr, x = m.dimension(0), I = m.dimension(1), T = [], L = [];
    x.forEach(function(z, V) {
      L[z] = V[0], T[z] = !0;
    });
    var N = C ? [] : void 0, Z = [], $ = [];
    return I.forEach(function(z) {
      for ($.push(Z.length), E = M[z], y = M[z + 1]; E < y; E++)
        D = S[E], T[D] === !0 && (Z.push(L[D]), N && N.push(C[E]));
    }), $.push(Z.length), new e({
      values: N,
      index: Z,
      ptr: $,
      size: w,
      datatype: p._datatype
    });
  }
  function f(p, m, d, w) {
    if (!m || m.isIndex !== !0)
      throw new TypeError("Invalid index");
    var D = m.size(), A = m.isScalar(), E;
    if (_e(d) ? (E = d.size(), d = d.toArray()) : E = qe(d), A) {
      if (E.length !== 0)
        throw new TypeError("Scalar expected");
      p.set(m.min(), d, w);
    } else {
      if (D.length !== 1 && D.length !== 2)
        throw new Ce(D.length, p._size.length, "<");
      if (E.length < D.length) {
        for (var y = 0, F = 0; D[y] === 1 && E[y] === 1; )
          y++;
        for (; D[y] === 1; )
          F++, y++;
        d = Bi(d, D.length, F, E);
      }
      if (!Lr(D, E))
        throw new Ce(D, E, ">");
      if (D.length === 1) {
        var b = m.dimension(0);
        b.forEach(function(M, x) {
          Ne(M), p.set([M, 0], d[x[0]], w);
        });
      } else {
        var C = m.dimension(0), S = m.dimension(1);
        C.forEach(function(M, x) {
          Ne(M), S.forEach(function(I, T) {
            Ne(I), p.set([M, I], d[x[0]][T[0]], w);
          });
        });
      }
    }
    return p;
  }
  e.prototype.get = function(p) {
    if (!Me(p))
      throw new TypeError("Array expected");
    if (p.length !== this._size.length)
      throw new Ce(p.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke get on a Pattern only matrix");
    var m = p[0], d = p[1];
    Ne(m, this._size[0]), Ne(d, this._size[1]);
    var w = h(m, this._ptr[d], this._ptr[d + 1], this._index);
    return w < this._ptr[d + 1] && this._index[w] === m ? this._values[w] : 0;
  }, e.prototype.set = function(p, m, d) {
    if (!Me(p))
      throw new TypeError("Array expected");
    if (p.length !== this._size.length)
      throw new Ce(p.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke set on a Pattern only matrix");
    var w = p[0], D = p[1], A = this._size[0], E = this._size[1], y = t, F = 0;
    ir(this._datatype) && (y = i.find(t, [this._datatype, this._datatype]) || t, F = i.convert(0, this._datatype)), (w > A - 1 || D > E - 1) && (c(this, Math.max(w + 1, A), Math.max(D + 1, E), d), A = this._size[0], E = this._size[1]), Ne(w, A), Ne(D, E);
    var b = h(w, this._ptr[D], this._ptr[D + 1], this._index);
    return b < this._ptr[D + 1] && this._index[b] === w ? y(m, F) ? s(b, D, this._values, this._index, this._ptr) : this._values[b] = m : y(m, F) || o(b, w, D, m, this._values, this._index, this._ptr), this;
  };
  function h(p, m, d, w) {
    if (d - m === 0)
      return d;
    for (var D = m; D < d; D++)
      if (w[D] === p)
        return D;
    return m;
  }
  function s(p, m, d, w, D) {
    d.splice(p, 1), w.splice(p, 1);
    for (var A = m + 1; A < D.length; A++)
      D[A]--;
  }
  function o(p, m, d, w, D, A, E) {
    D.splice(p, 0, w), A.splice(p, 0, m);
    for (var y = d + 1; y < E.length; y++)
      E[y]++;
  }
  e.prototype.resize = function(p, m, d) {
    if (!st(p))
      throw new TypeError("Array or Matrix expected");
    var w = p.valueOf().map((A) => Array.isArray(A) && A.length === 1 ? A[0] : A);
    if (w.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    w.forEach(function(A) {
      if (!$e(A) || !ze(A) || A < 0)
        throw new TypeError("Invalid size, must contain positive integers (size: " + Le(w) + ")");
    });
    var D = d ? this.clone() : this;
    return c(D, w[0], w[1], m);
  };
  function c(p, m, d, w) {
    var D = w || 0, A = t, E = 0;
    ir(p._datatype) && (A = i.find(t, [p._datatype, p._datatype]) || t, E = i.convert(0, p._datatype), D = i.convert(D, p._datatype));
    var y = !A(D, E), F = p._size[0], b = p._size[1], C, S, M;
    if (d > b) {
      for (S = b; S < d; S++)
        if (p._ptr[S] = p._values.length, y)
          for (C = 0; C < F; C++)
            p._values.push(D), p._index.push(C);
      p._ptr[d] = p._values.length;
    } else
      d < b && (p._ptr.splice(d + 1, b - d), p._values.splice(p._ptr[d], p._values.length), p._index.splice(p._ptr[d], p._index.length));
    if (b = d, m > F) {
      if (y) {
        var x = 0;
        for (S = 0; S < b; S++) {
          p._ptr[S] = p._ptr[S] + x, M = p._ptr[S + 1] + x;
          var I = 0;
          for (C = F; C < m; C++, I++)
            p._values.splice(M + I, 0, D), p._index.splice(M + I, 0, C), x++;
        }
        p._ptr[b] = p._values.length;
      }
    } else if (m < F) {
      var T = 0;
      for (S = 0; S < b; S++) {
        p._ptr[S] = p._ptr[S] - T;
        var L = p._ptr[S], N = p._ptr[S + 1] - T;
        for (M = L; M < N; M++)
          C = p._index[M], C > m - 1 && (p._values.splice(M, 1), p._index.splice(M, 1), T++);
      }
      p._ptr[S] = p._values.length;
    }
    return p._size[0] = m, p._size[1] = d, p;
  }
  e.prototype.reshape = function(p, m) {
    if (!Me(p))
      throw new TypeError("Array expected");
    if (p.length !== 2)
      throw new Error("Sparse matrices can only be reshaped in two dimensions");
    p.forEach(function(z) {
      if (!$e(z) || !ze(z) || z <= -2 || z === 0)
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Le(p) + ")");
    });
    var d = this._size[0] * this._size[1];
    p = Wt(p, d);
    var w = p[0] * p[1];
    if (d !== w)
      throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var D = m ? this.clone() : this;
    if (this._size[0] === p[0] && this._size[1] === p[1])
      return D;
    for (var A = [], E = 0; E < D._ptr.length; E++)
      for (var y = 0; y < D._ptr[E + 1] - D._ptr[E]; y++)
        A.push(E);
    for (var F = D._values.slice(), b = D._index.slice(), C = 0; C < D._index.length; C++) {
      var S = b[C], M = A[C], x = S * D._size[1] + M;
      A[C] = x % p[1], b[C] = Math.floor(x / p[1]);
    }
    D._values.length = 0, D._index.length = 0, D._ptr.length = p[1] + 1, D._size = p.slice();
    for (var I = 0; I < D._ptr.length; I++)
      D._ptr[I] = 0;
    for (var T = 0; T < F.length; T++) {
      var L = b[T], N = A[T], Z = F[T], $ = h(L, D._ptr[N], D._ptr[N + 1], D._index);
      o($, L, N, Z, D._values, D._index, D._ptr);
    }
    return D;
  }, e.prototype.clone = function() {
    var p = new e({
      values: this._values ? Fe(this._values) : void 0,
      index: Fe(this._index),
      ptr: Fe(this._ptr),
      size: Fe(this._size),
      datatype: this._datatype
    });
    return p;
  }, e.prototype.size = function() {
    return this._size.slice(0);
  }, e.prototype.map = function(p, m) {
    if (!this._values)
      throw new Error("Cannot invoke map on a Pattern only matrix");
    var d = this, w = this._size[0], D = this._size[1], A = ki(p), E = function(F, b, C) {
      return A === 1 ? p(F) : A === 2 ? p(F, [b, C]) : p(F, [b, C], d);
    };
    return v(this, 0, w - 1, 0, D - 1, E, m);
  };
  function v(p, m, d, w, D, A, E) {
    var y = [], F = [], b = [], C = t, S = 0;
    ir(p._datatype) && (C = i.find(t, [p._datatype, p._datatype]) || t, S = i.convert(0, p._datatype));
    for (var M = function(q, G, ne) {
      q = A(q, G, ne), C(q, S) || (y.push(q), F.push(G));
    }, x = w; x <= D; x++) {
      b.push(y.length);
      var I = p._ptr[x], T = p._ptr[x + 1];
      if (E)
        for (var L = I; L < T; L++) {
          var N = p._index[L];
          N >= m && N <= d && M(p._values[L], N - m, x - w);
        }
      else {
        for (var Z = {}, $ = I; $ < T; $++) {
          var z = p._index[$];
          Z[z] = p._values[$];
        }
        for (var V = m; V <= d; V++) {
          var K = V in Z ? Z[V] : 0;
          M(K, V - m, x - w);
        }
      }
    }
    return b.push(y.length), new e({
      values: y,
      index: F,
      ptr: b,
      size: [d - m + 1, D - w + 1]
    });
  }
  e.prototype.forEach = function(p, m) {
    if (!this._values)
      throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var d = this, w = this._size[0], D = this._size[1], A = 0; A < D; A++) {
      var E = this._ptr[A], y = this._ptr[A + 1];
      if (m)
        for (var F = E; F < y; F++) {
          var b = this._index[F];
          p(this._values[F], [b, A], d);
        }
      else {
        for (var C = {}, S = E; S < y; S++) {
          var M = this._index[S];
          C[M] = this._values[S];
        }
        for (var x = 0; x < w; x++) {
          var I = x in C ? C[x] : 0;
          p(I, [x, A], d);
        }
      }
    }
  }, e.prototype[Symbol.iterator] = function* () {
    if (!this._values)
      throw new Error("Cannot iterate a Pattern only matrix");
    for (var p = this._size[1], m = 0; m < p; m++)
      for (var d = this._ptr[m], w = this._ptr[m + 1], D = d; D < w; D++) {
        var A = this._index[D];
        yield {
          value: this._values[D],
          index: [A, m]
        };
      }
  }, e.prototype.toArray = function() {
    return g(this._values, this._index, this._ptr, this._size, !0);
  }, e.prototype.valueOf = function() {
    return g(this._values, this._index, this._ptr, this._size, !1);
  };
  function g(p, m, d, w, D) {
    var A = w[0], E = w[1], y = [], F, b;
    for (F = 0; F < A; F++)
      for (y[F] = [], b = 0; b < E; b++)
        y[F][b] = 0;
    for (b = 0; b < E; b++)
      for (var C = d[b], S = d[b + 1], M = C; M < S; M++)
        F = m[M], y[F][b] = p ? D ? Fe(p[M]) : p[M] : 1;
    return y;
  }
  return e.prototype.format = function(p) {
    for (var m = this._size[0], d = this._size[1], w = this.density(), D = "Sparse Matrix [" + Le(m, p) + " x " + Le(d, p) + "] density: " + Le(w, p) + `
`, A = 0; A < d; A++)
      for (var E = this._ptr[A], y = this._ptr[A + 1], F = E; F < y; F++) {
        var b = this._index[F];
        D += `
    (` + Le(b, p) + ", " + Le(A, p) + ") ==> " + (this._values ? Le(this._values[F], p) : "X");
      }
    return D;
  }, e.prototype.toString = function() {
    return Le(this.toArray());
  }, e.prototype.toJSON = function() {
    return {
      mathjs: "SparseMatrix",
      values: this._values,
      index: this._index,
      ptr: this._ptr,
      size: this._size,
      datatype: this._datatype
    };
  }, e.prototype.diagonal = function(p) {
    if (p) {
      if (Re(p) && (p = p.toNumber()), !$e(p) || !ze(p))
        throw new TypeError("The parameter k must be an integer number");
    } else
      p = 0;
    var m = p > 0 ? p : 0, d = p < 0 ? -p : 0, w = this._size[0], D = this._size[1], A = Math.min(w - d, D - m), E = [], y = [], F = [];
    F[0] = 0;
    for (var b = m; b < D && E.length < A; b++)
      for (var C = this._ptr[b], S = this._ptr[b + 1], M = C; M < S; M++) {
        var x = this._index[M];
        if (x === b - m + d) {
          E.push(this._values[M]), y[E.length - 1] = x - d;
          break;
        }
      }
    return F.push(E.length), new e({
      values: E,
      index: y,
      ptr: F,
      size: [A, 1]
    });
  }, e.fromJSON = function(p) {
    return new e(p);
  }, e.diagonal = function(p, m, d, w, D) {
    if (!Me(p))
      throw new TypeError("Array expected, size parameter");
    if (p.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (p = p.map(function(z) {
      if (Re(z) && (z = z.toNumber()), !$e(z) || !ze(z) || z < 1)
        throw new Error("Size values must be positive integers");
      return z;
    }), d) {
      if (Re(d) && (d = d.toNumber()), !$e(d) || !ze(d))
        throw new TypeError("The parameter k must be an integer number");
    } else
      d = 0;
    var A = t, E = 0;
    ir(D) && (A = i.find(t, [D, D]) || t, E = i.convert(0, D));
    var y = d > 0 ? d : 0, F = d < 0 ? -d : 0, b = p[0], C = p[1], S = Math.min(b - F, C - y), M;
    if (Me(m)) {
      if (m.length !== S)
        throw new Error("Invalid value array length");
      M = function(V) {
        return m[V];
      };
    } else if (_e(m)) {
      var x = m.size();
      if (x.length !== 1 || x[0] !== S)
        throw new Error("Invalid matrix length");
      M = function(V) {
        return m.get([V]);
      };
    } else
      M = function() {
        return m;
      };
    for (var I = [], T = [], L = [], N = 0; N < C; N++) {
      L.push(I.length);
      var Z = N - y;
      if (Z >= 0 && Z < S) {
        var $ = M(Z);
        A($, E) || (T.push(Z + F), I.push($));
      }
    }
    return L.push(I.length), new e({
      values: I,
      index: T,
      ptr: L,
      size: [b, C]
    });
  }, e.prototype.swapRows = function(p, m) {
    if (!$e(p) || !ze(p) || !$e(m) || !ze(m))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return Ne(p, this._size[0]), Ne(m, this._size[0]), e._swapRows(p, m, this._size[1], this._values, this._index, this._ptr), this;
  }, e._forEachRow = function(p, m, d, w, D) {
    for (var A = w[p], E = w[p + 1], y = A; y < E; y++)
      D(d[y], m[y]);
  }, e._swapRows = function(p, m, d, w, D, A) {
    for (var E = 0; E < d; E++) {
      var y = A[E], F = A[E + 1], b = h(p, y, F, D), C = h(m, y, F, D);
      if (b < F && C < F && D[b] === p && D[C] === m) {
        if (w) {
          var S = w[b];
          w[b] = w[C], w[C] = S;
        }
        continue;
      }
      if (b < F && D[b] === p && (C >= F || D[C] !== m)) {
        var M = w ? w[b] : void 0;
        D.splice(C, 0, m), w && w.splice(C, 0, M), D.splice(C <= b ? b + 1 : b, 1), w && w.splice(C <= b ? b + 1 : b, 1);
        continue;
      }
      if (C < F && D[C] === m && (b >= F || D[b] !== p)) {
        var x = w ? w[C] : void 0;
        D.splice(b, 0, p), w && w.splice(b, 0, x), D.splice(b <= C ? C + 1 : C, 1), w && w.splice(b <= C ? C + 1 : C, 1);
      }
    }
  }, e;
}, {
  isClass: !0
}), zs = "number", Ts = ["typed"];
function Is(r) {
  var i = r.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (i) {
    var t = {
      "0b": 2,
      "0o": 8,
      "0x": 16
    }[i[1]], n = i[2], e = i[3];
    return {
      input: r,
      radix: t,
      integerPart: n,
      fractionalPart: e
    };
  } else
    return null;
}
function Ls(r) {
  for (var i = parseInt(r.integerPart, r.radix), t = 0, n = 0; n < r.fractionalPart.length; n++) {
    var e = parseInt(r.fractionalPart[n], r.radix);
    t += e / Math.pow(r.radix, n + 1);
  }
  var a = i + t;
  if (isNaN(a))
    throw new SyntaxError('String "' + r.input + '" is not a valid number');
  return a;
}
var Os = /* @__PURE__ */ ee(zs, Ts, (r) => {
  var {
    typed: i
  } = r, t = i("number", {
    "": function() {
      return 0;
    },
    number: function(e) {
      return e;
    },
    string: function(e) {
      if (e === "NaN")
        return NaN;
      var a = Is(e);
      if (a)
        return Ls(a);
      var u = 0, l = e.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      l && (u = Number(l[2]), e = l[1]);
      var f = Number(e);
      if (isNaN(f))
        throw new SyntaxError('String "' + e + '" is not a valid number');
      if (l) {
        if (f > 2 ** u - 1)
          throw new SyntaxError('String "'.concat(e, '" is out of range'));
        f >= 2 ** (u - 1) && (f = f - 2 ** u);
      }
      return f;
    },
    BigNumber: function(e) {
      return e.toNumber();
    },
    Fraction: function(e) {
      return e.valueOf();
    },
    Unit: i.referToSelf((n) => (e) => {
      var a = e.clone();
      return a.value = n(e.value), a;
    }),
    null: function(e) {
      return 0;
    },
    "Unit, string | Unit": function(e, a) {
      return e.toNumber(a);
    },
    "Array | Matrix": i.referToSelf((n) => (e) => er(e, n))
  });
  return t.fromJSON = function(n) {
    return parseFloat(n.value);
  }, t;
}), $s = "bignumber", qs = ["typed", "BigNumber"], Ps = /* @__PURE__ */ ee($s, qs, (r) => {
  var {
    typed: i,
    BigNumber: t
  } = r;
  return i("bignumber", {
    "": function() {
      return new t(0);
    },
    number: function(e) {
      return new t(e + "");
    },
    string: function(e) {
      var a = e.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (a) {
        var u = a[2], l = t(a[1]), f = new t(2).pow(Number(u));
        if (l.gt(f.sub(1)))
          throw new SyntaxError('String "'.concat(e, '" is out of range'));
        var h = new t(2).pow(Number(u) - 1);
        return l.gte(h) ? l.sub(f) : l;
      }
      return new t(e);
    },
    BigNumber: function(e) {
      return e;
    },
    Unit: i.referToSelf((n) => (e) => {
      var a = e.clone();
      return a.value = n(e.value), a;
    }),
    Fraction: function(e) {
      return new t(e.n).div(e.d).times(e.s);
    },
    null: function(e) {
      return new t(0);
    },
    "Array | Matrix": i.referToSelf((n) => (e) => er(e, n))
  });
}), Rs = "complex", Us = ["typed", "Complex"], Vs = /* @__PURE__ */ ee(Rs, Us, (r) => {
  var {
    typed: i,
    Complex: t
  } = r;
  return i("complex", {
    "": function() {
      return t.ZERO;
    },
    number: function(e) {
      return new t(e, 0);
    },
    "number, number": function(e, a) {
      return new t(e, a);
    },
    // TODO: this signature should be redundant
    "BigNumber, BigNumber": function(e, a) {
      return new t(e.toNumber(), a.toNumber());
    },
    Fraction: function(e) {
      return new t(e.valueOf(), 0);
    },
    Complex: function(e) {
      return e.clone();
    },
    string: function(e) {
      return t(e);
    },
    null: function(e) {
      return t(0);
    },
    Object: function(e) {
      if ("re" in e && "im" in e)
        return new t(e.re, e.im);
      if ("r" in e && "phi" in e || "abs" in e && "arg" in e)
        return new t(e);
      throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)");
    },
    "Array | Matrix": i.referToSelf((n) => (e) => er(e, n))
  });
}), Gs = "fraction", Zs = ["typed", "Fraction"], Ys = /* @__PURE__ */ ee(Gs, Zs, (r) => {
  var {
    typed: i,
    Fraction: t
  } = r;
  return i("fraction", {
    number: function(e) {
      if (!isFinite(e) || isNaN(e))
        throw new Error(e + " cannot be represented as a fraction");
      return new t(e);
    },
    string: function(e) {
      return new t(e);
    },
    "number, number": function(e, a) {
      return new t(e, a);
    },
    null: function(e) {
      return new t(0);
    },
    BigNumber: function(e) {
      return new t(e.toString());
    },
    Fraction: function(e) {
      return e;
    },
    Unit: i.referToSelf((n) => (e) => {
      var a = e.clone();
      return a.value = n(e.value), a;
    }),
    Object: function(e) {
      return new t(e);
    },
    "Array | Matrix": i.referToSelf((n) => (e) => er(e, n))
  });
}), Cn = "matrix", Js = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], Qs = /* @__PURE__ */ ee(Cn, Js, (r) => {
  var {
    typed: i,
    Matrix: t,
    DenseMatrix: n,
    SparseMatrix: e
  } = r;
  return i(Cn, {
    "": function() {
      return a([]);
    },
    string: function(l) {
      return a([], l);
    },
    "string, string": function(l, f) {
      return a([], l, f);
    },
    Array: function(l) {
      return a(l);
    },
    Matrix: function(l) {
      return a(l, l.storage());
    },
    "Array | Matrix, string": a,
    "Array | Matrix, string, string": a
  });
  function a(u, l, f) {
    if (l === "dense" || l === "default" || l === void 0)
      return new n(u, f);
    if (l === "sparse")
      return new e(u, f);
    throw new TypeError("Unknown matrix type " + JSON.stringify(l) + ".");
  }
}), Fn = "matrixFromColumns", Xs = ["typed", "matrix", "flatten", "size"], Hs = /* @__PURE__ */ ee(Fn, Xs, (r) => {
  var {
    typed: i,
    matrix: t,
    flatten: n,
    size: e
  } = r;
  return i(Fn, {
    "...Array": function(f) {
      return a(f);
    },
    "...Matrix": function(f) {
      return t(a(f.map((h) => h.toArray())));
    }
    // TODO implement this properly for SparseMatrix
  });
  function a(l) {
    if (l.length === 0)
      throw new TypeError("At least one column is needed to construct a matrix.");
    for (var f = u(l[0]), h = [], s = 0; s < f; s++)
      h[s] = [];
    for (var o of l) {
      var c = u(o);
      if (c !== f)
        throw new TypeError("The vectors had different length: " + (f | 0) + " ≠ " + (c | 0));
      for (var v = n(o), g = 0; g < f; g++)
        h[g].push(v[g]);
    }
    return h;
  }
  function u(l) {
    var f = e(l);
    if (f.length === 1)
      return f[0];
    if (f.length === 2) {
      if (f[0] === 1)
        return f[1];
      if (f[1] === 1)
        return f[0];
      throw new TypeError("At least one of the arguments is not a vector.");
    } else
      throw new TypeError("Only one- or two-dimensional vectors are supported.");
  }
}), bn = "unaryMinus", Ks = ["typed"], Ws = /* @__PURE__ */ ee(bn, Ks, (r) => {
  var {
    typed: i
  } = r;
  return i(bn, {
    number: na,
    "Complex | BigNumber | Fraction": (t) => t.neg(),
    Unit: i.referToSelf((t) => (n) => {
      var e = n.clone();
      return e.value = i.find(t, e.valueType())(n.value), e;
    }),
    // deep map collection, skip zeros since unaryMinus(0) = 0
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
    // TODO: add support for string
  });
}), Mn = "abs", ks = ["typed"], js = /* @__PURE__ */ ee(Mn, ks, (r) => {
  var {
    typed: i
  } = r;
  return i(Mn, {
    number: ji,
    "Complex | BigNumber | Fraction | Unit": (t) => t.abs(),
    // deep map collection, skip zeros since abs(0) = 0
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), Sn = "addScalar", ef = ["typed"], rf = /* @__PURE__ */ ee(Sn, ef, (r) => {
  var {
    typed: i
  } = r;
  return i(Sn, {
    "number, number": ea,
    "Complex, Complex": function(n, e) {
      return n.add(e);
    },
    "BigNumber, BigNumber": function(n, e) {
      return n.plus(e);
    },
    "Fraction, Fraction": function(n, e) {
      return n.add(e);
    },
    "Unit, Unit": i.referToSelf((t) => (n, e) => {
      if (n.value === null || n.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (e.value === null || e.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!n.equalBase(e))
        throw new Error("Units do not match");
      var a = n.clone();
      return a.value = i.find(t, [a.valueType(), e.valueType()])(a.value, e.value), a.fixPrefix = !1, a;
    })
  });
}), xn = "subtractScalar", tf = ["typed"], nf = /* @__PURE__ */ ee(xn, tf, (r) => {
  var {
    typed: i
  } = r;
  return i(xn, {
    "number, number": ra,
    "Complex, Complex": function(n, e) {
      return n.sub(e);
    },
    "BigNumber, BigNumber": function(n, e) {
      return n.minus(e);
    },
    "Fraction, Fraction": function(n, e) {
      return n.sub(e);
    },
    "Unit, Unit": i.referToSelf((t) => (n, e) => {
      if (n.value === null || n.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (e.value === null || e.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!n.equalBase(e))
        throw new Error("Units do not match");
      var a = n.clone();
      return a.value = i.find(t, [a.valueType(), e.valueType()])(a.value, e.value), a.fixPrefix = !1, a;
    })
  });
}), af = "matAlgo11xS0s", uf = ["typed", "equalScalar"], of = /* @__PURE__ */ ee(af, uf, (r) => {
  var {
    typed: i,
    equalScalar: t
  } = r;
  return function(e, a, u, l) {
    var f = e._values, h = e._index, s = e._ptr, o = e._size, c = e._datatype;
    if (!f)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = o[0], g = o[1], p, m = t, d = 0, w = u;
    typeof c == "string" && (p = c, m = i.find(t, [p, p]), d = i.convert(0, p), a = i.convert(a, p), w = i.find(u, [p, p]));
    for (var D = [], A = [], E = [], y = 0; y < g; y++) {
      E[y] = A.length;
      for (var F = s[y], b = s[y + 1], C = F; C < b; C++) {
        var S = h[C], M = l ? w(a, f[C]) : w(f[C], a);
        m(M, d) || (A.push(S), D.push(M));
      }
    }
    return E[g] = A.length, e.createSparseMatrix({
      values: D,
      index: A,
      ptr: E,
      size: [v, g],
      datatype: p
    });
  };
}), sf = "matAlgo12xSfs", ff = ["typed", "DenseMatrix"], Pr = /* @__PURE__ */ ee(sf, ff, (r) => {
  var {
    typed: i,
    DenseMatrix: t
  } = r;
  return function(e, a, u, l) {
    var f = e._values, h = e._index, s = e._ptr, o = e._size, c = e._datatype;
    if (!f)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = o[0], g = o[1], p, m = u;
    typeof c == "string" && (p = c, a = i.convert(a, p), m = i.find(u, [p, p]));
    for (var d = [], w = [], D = [], A = 0; A < g; A++) {
      for (var E = A + 1, y = s[A], F = s[A + 1], b = y; b < F; b++) {
        var C = h[b];
        w[C] = f[b], D[C] = E;
      }
      for (var S = 0; S < v; S++)
        A === 0 && (d[S] = []), D[S] === E ? d[S][A] = l ? m(a, w[S]) : m(w[S], a) : d[S][A] = l ? m(a, 0) : m(0, a);
    }
    return new t({
      data: d,
      size: [v, g],
      datatype: p
    });
  };
}), cf = "matAlgo14xDs", lf = ["typed"], sa = /* @__PURE__ */ ee(cf, lf, (r) => {
  var {
    typed: i
  } = r;
  return function(e, a, u, l) {
    var f = e._data, h = e._size, s = e._datatype, o, c = u;
    typeof s == "string" && (o = s, a = i.convert(a, o), c = i.find(u, [o, o]));
    var v = h.length > 0 ? t(c, 0, h, h[0], f, a, l) : [];
    return e.createDenseMatrix({
      data: v,
      size: Fe(h),
      datatype: o
    });
  };
  function t(n, e, a, u, l, f, h) {
    var s = [];
    if (e === a.length - 1)
      for (var o = 0; o < u; o++)
        s[o] = h ? n(f, l[o]) : n(l[o], f);
    else
      for (var c = 0; c < u; c++)
        s[c] = t(n, e + 1, a, a[e + 1], l[c], f, h);
    return s;
  }
}), hf = "matAlgo03xDSf", vf = ["typed"], Rr = /* @__PURE__ */ ee(hf, vf, (r) => {
  var {
    typed: i
  } = r;
  return function(n, e, a, u) {
    var l = n._data, f = n._size, h = n._datatype, s = e._values, o = e._index, c = e._ptr, v = e._size, g = e._datatype;
    if (f.length !== v.length)
      throw new Ce(f.length, v.length);
    if (f[0] !== v[0] || f[1] !== v[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + v + ")");
    if (!s)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var p = f[0], m = f[1], d, w = 0, D = a;
    typeof h == "string" && h === g && (d = h, w = i.convert(0, d), D = i.find(a, [d, d]));
    for (var A = [], E = 0; E < p; E++)
      A[E] = [];
    for (var y = [], F = [], b = 0; b < m; b++) {
      for (var C = b + 1, S = c[b], M = c[b + 1], x = S; x < M; x++) {
        var I = o[x];
        y[I] = u ? D(s[x], l[I][b]) : D(l[I][b], s[x]), F[I] = C;
      }
      for (var T = 0; T < p; T++)
        F[T] === C ? A[T][b] = y[T] : A[T][b] = u ? D(w, l[T][b]) : D(l[T][b], w);
    }
    return n.createDenseMatrix({
      data: A,
      size: [p, m],
      datatype: d
    });
  };
}), pf = "matAlgo05xSfSf", df = ["typed", "equalScalar"], mf = /* @__PURE__ */ ee(pf, df, (r) => {
  var {
    typed: i,
    equalScalar: t
  } = r;
  return function(e, a, u) {
    var l = e._values, f = e._index, h = e._ptr, s = e._size, o = e._datatype, c = a._values, v = a._index, g = a._ptr, p = a._size, m = a._datatype;
    if (s.length !== p.length)
      throw new Ce(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    var d = s[0], w = s[1], D, A = t, E = 0, y = u;
    typeof o == "string" && o === m && (D = o, A = i.find(t, [D, D]), E = i.convert(0, D), y = i.find(u, [D, D]));
    var F = l && c ? [] : void 0, b = [], C = [], S = F ? [] : void 0, M = F ? [] : void 0, x = [], I = [], T, L, N, Z;
    for (L = 0; L < w; L++) {
      C[L] = b.length;
      var $ = L + 1;
      for (N = h[L], Z = h[L + 1]; N < Z; N++)
        T = f[N], b.push(T), x[T] = $, S && (S[T] = l[N]);
      for (N = g[L], Z = g[L + 1]; N < Z; N++)
        T = v[N], x[T] !== $ && b.push(T), I[T] = $, M && (M[T] = c[N]);
      if (F)
        for (N = C[L]; N < b.length; ) {
          T = b[N];
          var z = x[T], V = I[T];
          if (z === $ || V === $) {
            var K = z === $ ? S[T] : E, P = V === $ ? M[T] : E, q = y(K, P);
            A(q, E) ? b.splice(N, 1) : (F.push(q), N++);
          }
        }
    }
    return C[w] = b.length, e.createSparseMatrix({
      values: F,
      index: b,
      ptr: C,
      size: [d, w],
      datatype: D
    });
  };
}), gf = "matAlgo13xDD", Df = ["typed"], yf = /* @__PURE__ */ ee(gf, Df, (r) => {
  var {
    typed: i
  } = r;
  return function(e, a, u) {
    var l = e._data, f = e._size, h = e._datatype, s = a._data, o = a._size, c = a._datatype, v = [];
    if (f.length !== o.length)
      throw new Ce(f.length, o.length);
    for (var g = 0; g < f.length; g++) {
      if (f[g] !== o[g])
        throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + o + ")");
      v[g] = f[g];
    }
    var p, m = u;
    typeof h == "string" && h === c && (p = h, m = i.find(u, [p, p]));
    var d = v.length > 0 ? t(m, 0, v, v[0], l, s) : [];
    return e.createDenseMatrix({
      data: d,
      size: v,
      datatype: p
    });
  };
  function t(n, e, a, u, l, f) {
    var h = [];
    if (e === a.length - 1)
      for (var s = 0; s < u; s++)
        h[s] = n(l[s], f[s]);
    else
      for (var o = 0; o < u; o++)
        h[o] = t(n, e + 1, a, a[e + 1], l[o], f[o]);
    return h;
  }
}), wf = "broadcast", Af = ["concat"], Ef = /* @__PURE__ */ ee(wf, Af, (r) => {
  var {
    concat: i
  } = r;
  return function(e, a) {
    var u = Math.max(e._size.length, a._size.length);
    if (e._size.length === a._size.length && e._size.every((g, p) => g === a._size[p]))
      return [e, a];
    for (var l = t(e._size, u, 0), f = t(a._size, u, 0), h = [], s = 0; s < u; s++)
      h[s] = Math.max(l[s], f[s]);
    lt(l, h), lt(f, h);
    var o = e.clone(), c = a.clone();
    o._size.length < u ? o.reshape(t(o._size, u, 1)) : c._size.length < u && c.reshape(t(c._size, u, 1));
    for (var v = 0; v < u; v++)
      o._size[v] < h[v] && (o = n(o, h[v], v)), c._size[v] < h[v] && (c = n(c, h[v], v));
    return [o, c];
  };
  function t(e, a, u) {
    return [...Array(a - e.length).fill(u), ...e];
  }
  function n(e, a, u) {
    return i(...Array(a).fill(e), u);
  }
}), Cf = "matrixAlgorithmSuite", Ff = ["typed", "matrix", "concat"], Mr = /* @__PURE__ */ ee(Cf, Ff, (r) => {
  var {
    typed: i,
    matrix: t,
    concat: n
  } = r, e = yf({
    typed: i
  }), a = sa({
    typed: i
  }), u = Ef({
    concat: n
  });
  return function(f) {
    var h = f.elop, s = f.SD || f.DS, o;
    h ? (o = {
      "DenseMatrix, DenseMatrix": (p, m) => e(...u(p, m), h),
      "Array, Array": (p, m) => e(...u(t(p), t(m)), h).valueOf(),
      "Array, DenseMatrix": (p, m) => e(...u(t(p), m), h),
      "DenseMatrix, Array": (p, m) => e(...u(p, t(m)), h)
    }, f.SS && (o["SparseMatrix, SparseMatrix"] = (p, m) => f.SS(...u(p, m), h, !1)), f.DS && (o["DenseMatrix, SparseMatrix"] = (p, m) => f.DS(...u(p, m), h, !1), o["Array, SparseMatrix"] = (p, m) => f.DS(...u(t(p), m), h, !1)), s && (o["SparseMatrix, DenseMatrix"] = (p, m) => s(...u(m, p), h, !0), o["SparseMatrix, Array"] = (p, m) => s(...u(t(m), p), h, !0))) : (o = {
      "DenseMatrix, DenseMatrix": i.referToSelf((p) => (m, d) => e(...u(m, d), p)),
      "Array, Array": i.referToSelf((p) => (m, d) => e(...u(t(m), t(d)), p).valueOf()),
      "Array, DenseMatrix": i.referToSelf((p) => (m, d) => e(...u(t(m), d), p)),
      "DenseMatrix, Array": i.referToSelf((p) => (m, d) => e(...u(m, t(d)), p))
    }, f.SS && (o["SparseMatrix, SparseMatrix"] = i.referToSelf((p) => (m, d) => f.SS(...u(m, d), p, !1))), f.DS && (o["DenseMatrix, SparseMatrix"] = i.referToSelf((p) => (m, d) => f.DS(...u(m, d), p, !1)), o["Array, SparseMatrix"] = i.referToSelf((p) => (m, d) => f.DS(...u(t(m), d), p, !1))), s && (o["SparseMatrix, DenseMatrix"] = i.referToSelf((p) => (m, d) => s(...u(d, m), p, !0)), o["SparseMatrix, Array"] = i.referToSelf((p) => (m, d) => s(...u(t(d), m), p, !0))));
    var c = f.scalar || "any", v = f.Ds || f.Ss;
    v && (h ? (o["DenseMatrix," + c] = (p, m) => a(p, m, h, !1), o[c + ", DenseMatrix"] = (p, m) => a(m, p, h, !0), o["Array," + c] = (p, m) => a(t(p), m, h, !1).valueOf(), o[c + ", Array"] = (p, m) => a(t(m), p, h, !0).valueOf()) : (o["DenseMatrix," + c] = i.referToSelf((p) => (m, d) => a(m, d, p, !1)), o[c + ", DenseMatrix"] = i.referToSelf((p) => (m, d) => a(d, m, p, !0)), o["Array," + c] = i.referToSelf((p) => (m, d) => a(t(m), d, p, !1).valueOf()), o[c + ", Array"] = i.referToSelf((p) => (m, d) => a(t(d), m, p, !0).valueOf())));
    var g = f.sS !== void 0 ? f.sS : f.Ss;
    return h ? (f.Ss && (o["SparseMatrix," + c] = (p, m) => f.Ss(p, m, h, !1)), g && (o[c + ", SparseMatrix"] = (p, m) => g(m, p, h, !0))) : (f.Ss && (o["SparseMatrix," + c] = i.referToSelf((p) => (m, d) => f.Ss(m, d, p, !1))), g && (o[c + ", SparseMatrix"] = i.referToSelf((p) => (m, d) => g(d, m, p, !0)))), h && h.signatures && Nu(o, h.signatures), o;
  };
}), bf = "matAlgo01xDSid", Mf = ["typed"], fa = /* @__PURE__ */ ee(bf, Mf, (r) => {
  var {
    typed: i
  } = r;
  return function(n, e, a, u) {
    var l = n._data, f = n._size, h = n._datatype, s = e._values, o = e._index, c = e._ptr, v = e._size, g = e._datatype;
    if (f.length !== v.length)
      throw new Ce(f.length, v.length);
    if (f[0] !== v[0] || f[1] !== v[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + v + ")");
    if (!s)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var p = f[0], m = f[1], d = typeof h == "string" && h === g ? h : void 0, w = d ? i.find(a, [d, d]) : a, D, A, E = [];
    for (D = 0; D < p; D++)
      E[D] = [];
    var y = [], F = [];
    for (A = 0; A < m; A++) {
      for (var b = A + 1, C = c[A], S = c[A + 1], M = C; M < S; M++)
        D = o[M], y[D] = u ? w(s[M], l[D][A]) : w(l[D][A], s[M]), F[D] = b;
      for (D = 0; D < p; D++)
        F[D] === b ? E[D][A] = y[D] : E[D][A] = l[D][A];
    }
    return n.createDenseMatrix({
      data: E,
      size: [p, m],
      datatype: d
    });
  };
}), Sf = "matAlgo04xSidSid", xf = ["typed", "equalScalar"], Bf = /* @__PURE__ */ ee(Sf, xf, (r) => {
  var {
    typed: i,
    equalScalar: t
  } = r;
  return function(e, a, u) {
    var l = e._values, f = e._index, h = e._ptr, s = e._size, o = e._datatype, c = a._values, v = a._index, g = a._ptr, p = a._size, m = a._datatype;
    if (s.length !== p.length)
      throw new Ce(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    var d = s[0], w = s[1], D, A = t, E = 0, y = u;
    typeof o == "string" && o === m && (D = o, A = i.find(t, [D, D]), E = i.convert(0, D), y = i.find(u, [D, D]));
    var F = l && c ? [] : void 0, b = [], C = [], S = l && c ? [] : void 0, M = l && c ? [] : void 0, x = [], I = [], T, L, N, Z, $;
    for (L = 0; L < w; L++) {
      C[L] = b.length;
      var z = L + 1;
      for (Z = h[L], $ = h[L + 1], N = Z; N < $; N++)
        T = f[N], b.push(T), x[T] = z, S && (S[T] = l[N]);
      for (Z = g[L], $ = g[L + 1], N = Z; N < $; N++)
        if (T = v[N], x[T] === z) {
          if (S) {
            var V = y(S[T], c[N]);
            A(V, E) ? x[T] = null : S[T] = V;
          }
        } else
          b.push(T), I[T] = z, M && (M[T] = c[N]);
      if (S && M)
        for (N = C[L]; N < b.length; )
          T = b[N], x[T] === z ? (F[N] = S[T], N++) : I[T] === z ? (F[N] = M[T], N++) : b.splice(N, 1);
    }
    return C[w] = b.length, e.createSparseMatrix({
      values: F,
      index: b,
      ptr: C,
      size: [d, w],
      datatype: D
    });
  };
}), Nf = "matAlgo10xSids", _f = ["typed", "DenseMatrix"], ca = /* @__PURE__ */ ee(Nf, _f, (r) => {
  var {
    typed: i,
    DenseMatrix: t
  } = r;
  return function(e, a, u, l) {
    var f = e._values, h = e._index, s = e._ptr, o = e._size, c = e._datatype;
    if (!f)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = o[0], g = o[1], p, m = u;
    typeof c == "string" && (p = c, a = i.convert(a, p), m = i.find(u, [p, p]));
    for (var d = [], w = [], D = [], A = 0; A < g; A++) {
      for (var E = A + 1, y = s[A], F = s[A + 1], b = y; b < F; b++) {
        var C = h[b];
        w[C] = f[b], D[C] = E;
      }
      for (var S = 0; S < v; S++)
        A === 0 && (d[S] = []), D[S] === E ? d[S][A] = l ? m(a, w[S]) : m(w[S], a) : d[S][A] = a;
    }
    return new t({
      data: d,
      size: [v, g],
      datatype: p
    });
  };
}), zf = "multiplyScalar", Tf = ["typed"], If = /* @__PURE__ */ ee(zf, Tf, (r) => {
  var {
    typed: i
  } = r;
  return i("multiplyScalar", {
    "number, number": ta,
    "Complex, Complex": function(n, e) {
      return n.mul(e);
    },
    "BigNumber, BigNumber": function(n, e) {
      return n.times(e);
    },
    "Fraction, Fraction": function(n, e) {
      return n.mul(e);
    },
    "number | Fraction | BigNumber | Complex, Unit": (t, n) => n.multiply(t),
    "Unit, number | Fraction | BigNumber | Complex | Unit": (t, n) => t.multiply(n)
  });
}), Bn = "multiply", Lf = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], Of = /* @__PURE__ */ ee(Bn, Lf, (r) => {
  var {
    typed: i,
    matrix: t,
    addScalar: n,
    multiplyScalar: e,
    equalScalar: a,
    dot: u
  } = r, l = of({
    typed: i,
    equalScalar: a
  }), f = sa({
    typed: i
  });
  function h(E, y) {
    switch (E.length) {
      case 1:
        switch (y.length) {
          case 1:
            if (E[0] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            break;
          case 2:
            if (E[0] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Vector length (" + E[0] + ") must match Matrix rows (" + y[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + y.length + " dimensions)");
        }
        break;
      case 2:
        switch (y.length) {
          case 1:
            if (E[1] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + E[1] + ") must match Vector length (" + y[0] + ")");
            break;
          case 2:
            if (E[1] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + E[1] + ") must match Matrix B rows (" + y[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + y.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + E.length + " dimensions)");
    }
  }
  function s(E, y, F) {
    if (F === 0)
      throw new Error("Cannot multiply two empty vectors");
    return u(E, y);
  }
  function o(E, y) {
    if (y.storage() !== "dense")
      throw new Error("Support for SparseMatrix not implemented");
    return c(E, y);
  }
  function c(E, y) {
    var F = E._data, b = E._size, C = E._datatype, S = y._data, M = y._size, x = y._datatype, I = b[0], T = M[1], L, N = n, Z = e;
    C && x && C === x && typeof C == "string" && (L = C, N = i.find(n, [L, L]), Z = i.find(e, [L, L]));
    for (var $ = [], z = 0; z < T; z++) {
      for (var V = Z(F[0], S[0][z]), K = 1; K < I; K++)
        V = N(V, Z(F[K], S[K][z]));
      $[z] = V;
    }
    return E.createDenseMatrix({
      data: $,
      size: [T],
      datatype: L
    });
  }
  var v = i("_multiplyMatrixVector", {
    "DenseMatrix, any": p,
    "SparseMatrix, any": w
  }), g = i("_multiplyMatrixMatrix", {
    "DenseMatrix, DenseMatrix": m,
    "DenseMatrix, SparseMatrix": d,
    "SparseMatrix, DenseMatrix": D,
    "SparseMatrix, SparseMatrix": A
  });
  function p(E, y) {
    var F = E._data, b = E._size, C = E._datatype, S = y._data, M = y._datatype, x = b[0], I = b[1], T, L = n, N = e;
    C && M && C === M && typeof C == "string" && (T = C, L = i.find(n, [T, T]), N = i.find(e, [T, T]));
    for (var Z = [], $ = 0; $ < x; $++) {
      for (var z = F[$], V = N(z[0], S[0]), K = 1; K < I; K++)
        V = L(V, N(z[K], S[K]));
      Z[$] = V;
    }
    return E.createDenseMatrix({
      data: Z,
      size: [x],
      datatype: T
    });
  }
  function m(E, y) {
    var F = E._data, b = E._size, C = E._datatype, S = y._data, M = y._size, x = y._datatype, I = b[0], T = b[1], L = M[1], N, Z = n, $ = e;
    C && x && C === x && typeof C == "string" && (N = C, Z = i.find(n, [N, N]), $ = i.find(e, [N, N]));
    for (var z = [], V = 0; V < I; V++) {
      var K = F[V];
      z[V] = [];
      for (var P = 0; P < L; P++) {
        for (var q = $(K[0], S[0][P]), G = 1; G < T; G++)
          q = Z(q, $(K[G], S[G][P]));
        z[V][P] = q;
      }
    }
    return E.createDenseMatrix({
      data: z,
      size: [I, L],
      datatype: N
    });
  }
  function d(E, y) {
    var F = E._data, b = E._size, C = E._datatype, S = y._values, M = y._index, x = y._ptr, I = y._size, T = y._datatype;
    if (!S)
      throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var L = b[0], N = I[1], Z, $ = n, z = e, V = a, K = 0;
    C && T && C === T && typeof C == "string" && (Z = C, $ = i.find(n, [Z, Z]), z = i.find(e, [Z, Z]), V = i.find(a, [Z, Z]), K = i.convert(0, Z));
    for (var P = [], q = [], G = [], ne = y.createSparseMatrix({
      values: P,
      index: q,
      ptr: G,
      size: [L, N],
      datatype: Z
    }), k = 0; k < N; k++) {
      G[k] = q.length;
      var U = x[k], Q = x[k + 1];
      if (Q > U)
        for (var X = 0, J = 0; J < L; J++) {
          for (var oe = J + 1, j = void 0, se = U; se < Q; se++) {
            var le = M[se];
            X !== oe ? (j = z(F[J][le], S[se]), X = oe) : j = $(j, z(F[J][le], S[se]));
          }
          X === oe && !V(j, K) && (q.push(J), P.push(j));
        }
    }
    return G[N] = q.length, ne;
  }
  function w(E, y) {
    var F = E._values, b = E._index, C = E._ptr, S = E._datatype;
    if (!F)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var M = y._data, x = y._datatype, I = E._size[0], T = y._size[0], L = [], N = [], Z = [], $, z = n, V = e, K = a, P = 0;
    S && x && S === x && typeof S == "string" && ($ = S, z = i.find(n, [$, $]), V = i.find(e, [$, $]), K = i.find(a, [$, $]), P = i.convert(0, $));
    var q = [], G = [];
    Z[0] = 0;
    for (var ne = 0; ne < T; ne++) {
      var k = M[ne];
      if (!K(k, P))
        for (var U = C[ne], Q = C[ne + 1], X = U; X < Q; X++) {
          var J = b[X];
          G[J] ? q[J] = z(q[J], V(k, F[X])) : (G[J] = !0, N.push(J), q[J] = V(k, F[X]));
        }
    }
    for (var oe = N.length, j = 0; j < oe; j++) {
      var se = N[j];
      L[j] = q[se];
    }
    return Z[1] = N.length, E.createSparseMatrix({
      values: L,
      index: N,
      ptr: Z,
      size: [I, 1],
      datatype: $
    });
  }
  function D(E, y) {
    var F = E._values, b = E._index, C = E._ptr, S = E._datatype;
    if (!F)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var M = y._data, x = y._datatype, I = E._size[0], T = y._size[0], L = y._size[1], N, Z = n, $ = e, z = a, V = 0;
    S && x && S === x && typeof S == "string" && (N = S, Z = i.find(n, [N, N]), $ = i.find(e, [N, N]), z = i.find(a, [N, N]), V = i.convert(0, N));
    for (var K = [], P = [], q = [], G = E.createSparseMatrix({
      values: K,
      index: P,
      ptr: q,
      size: [I, L],
      datatype: N
    }), ne = [], k = [], U = 0; U < L; U++) {
      q[U] = P.length;
      for (var Q = U + 1, X = 0; X < T; X++) {
        var J = M[X][U];
        if (!z(J, V))
          for (var oe = C[X], j = C[X + 1], se = oe; se < j; se++) {
            var le = b[se];
            k[le] !== Q ? (k[le] = Q, P.push(le), ne[le] = $(J, F[se])) : ne[le] = Z(ne[le], $(J, F[se]));
          }
      }
      for (var me = q[U], ye = P.length, Ae = me; Ae < ye; Ae++) {
        var he = P[Ae];
        K[Ae] = ne[he];
      }
    }
    return q[L] = P.length, G;
  }
  function A(E, y) {
    var F = E._values, b = E._index, C = E._ptr, S = E._datatype, M = y._values, x = y._index, I = y._ptr, T = y._datatype, L = E._size[0], N = y._size[1], Z = F && M, $, z = n, V = e;
    S && T && S === T && typeof S == "string" && ($ = S, z = i.find(n, [$, $]), V = i.find(e, [$, $]));
    for (var K = Z ? [] : void 0, P = [], q = [], G = E.createSparseMatrix({
      values: K,
      index: P,
      ptr: q,
      size: [L, N],
      datatype: $
    }), ne = Z ? [] : void 0, k = [], U, Q, X, J, oe, j, se, le, me = 0; me < N; me++) {
      q[me] = P.length;
      var ye = me + 1;
      for (oe = I[me], j = I[me + 1], J = oe; J < j; J++)
        if (le = x[J], Z)
          for (Q = C[le], X = C[le + 1], U = Q; U < X; U++)
            se = b[U], k[se] !== ye ? (k[se] = ye, P.push(se), ne[se] = V(M[J], F[U])) : ne[se] = z(ne[se], V(M[J], F[U]));
        else
          for (Q = C[le], X = C[le + 1], U = Q; U < X; U++)
            se = b[U], k[se] !== ye && (k[se] = ye, P.push(se));
      if (Z)
        for (var Ae = q[me], he = P.length, be = Ae; be < he; be++) {
          var Ee = P[be];
          K[be] = ne[Ee];
        }
    }
    return q[N] = P.length, G;
  }
  return i(Bn, e, {
    // we extend the signatures of multiplyScalar with signatures dealing with matrices
    "Array, Array": i.referTo("Matrix, Matrix", (E) => (y, F) => {
      h(qe(y), qe(F));
      var b = E(t(y), t(F));
      return _e(b) ? b.valueOf() : b;
    }),
    "Matrix, Matrix": function(y, F) {
      var b = y.size(), C = F.size();
      return h(b, C), b.length === 1 ? C.length === 1 ? s(y, F, b[0]) : o(y, F) : C.length === 1 ? v(y, F) : g(y, F);
    },
    "Matrix, Array": i.referTo("Matrix,Matrix", (E) => (y, F) => E(y, t(F))),
    "Array, Matrix": i.referToSelf((E) => (y, F) => E(t(y, F.storage()), F)),
    "SparseMatrix, any": function(y, F) {
      return l(y, F, e, !1);
    },
    "DenseMatrix, any": function(y, F) {
      return f(y, F, e, !1);
    },
    "any, SparseMatrix": function(y, F) {
      return l(F, y, e, !0);
    },
    "any, DenseMatrix": function(y, F) {
      return f(F, y, e, !0);
    },
    "Array, any": function(y, F) {
      return f(t(y), F, e, !1).valueOf();
    },
    "any, Array": function(y, F) {
      return f(t(F), y, e, !0).valueOf();
    },
    "any, any": e,
    "any, any, ...any": i.referToSelf((E) => (y, F, b) => {
      for (var C = E(y, F), S = 0; S < b.length; S++)
        C = E(C, b[S]);
      return C;
    })
  });
}), Nn = "sign", $f = ["typed", "BigNumber", "Fraction", "complex"], qf = /* @__PURE__ */ ee(Nn, $f, (r) => {
  var {
    typed: i,
    BigNumber: t,
    complex: n,
    Fraction: e
  } = r;
  return i(Nn, {
    number: Yt,
    Complex: function(u) {
      return u.im === 0 ? n(Yt(u.re)) : u.sign();
    },
    BigNumber: function(u) {
      return new t(u.cmp(0));
    },
    Fraction: function(u) {
      return new e(u.s, 1);
    },
    // deep map collection, skip zeros since sign(0) = 0
    "Array | Matrix": i.referToSelf((a) => (u) => er(u, a)),
    Unit: i.referToSelf((a) => (u) => {
      if (!u._isDerived() && u.units[0].unit.offset !== 0)
        throw new TypeError("sign is ambiguous for units with offset");
      return i.find(a, u.valueType())(u.value);
    })
  });
}), Pf = "sqrt", Rf = ["config", "typed", "Complex"], Uf = /* @__PURE__ */ ee(Pf, Rf, (r) => {
  var {
    config: i,
    typed: t,
    Complex: n
  } = r;
  return t("sqrt", {
    number: e,
    Complex: function(u) {
      return u.sqrt();
    },
    BigNumber: function(u) {
      return !u.isNegative() || i.predictable ? u.sqrt() : e(u.toNumber());
    },
    Unit: function(u) {
      return u.pow(0.5);
    }
  });
  function e(a) {
    return isNaN(a) ? NaN : a >= 0 || i.predictable ? Math.sqrt(a) : new n(a, 0).sqrt();
  }
}), _n = "subtract", Vf = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], Gf = /* @__PURE__ */ ee(_n, Vf, (r) => {
  var {
    typed: i,
    matrix: t,
    equalScalar: n,
    subtractScalar: e,
    unaryMinus: a,
    DenseMatrix: u,
    concat: l
  } = r, f = fa({
    typed: i
  }), h = Rr({
    typed: i
  }), s = mf({
    typed: i,
    equalScalar: n
  }), o = ca({
    typed: i,
    DenseMatrix: u
  }), c = Pr({
    typed: i,
    DenseMatrix: u
  }), v = Mr({
    typed: i,
    matrix: t,
    concat: l
  });
  return i(_n, {
    "any, any": e
  }, v({
    elop: e,
    SS: s,
    DS: f,
    SD: h,
    Ss: c,
    sS: o
  }));
}), Zf = "matAlgo07xSSf", Yf = ["typed", "DenseMatrix"], Kr = /* @__PURE__ */ ee(Zf, Yf, (r) => {
  var {
    typed: i,
    DenseMatrix: t
  } = r;
  return function(a, u, l) {
    var f = a._size, h = a._datatype, s = u._size, o = u._datatype;
    if (f.length !== s.length)
      throw new Ce(f.length, s.length);
    if (f[0] !== s[0] || f[1] !== s[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + s + ")");
    var c = f[0], v = f[1], g, p = 0, m = l;
    typeof h == "string" && h === o && (g = h, p = i.convert(0, g), m = i.find(l, [g, g]));
    var d, w, D = [];
    for (d = 0; d < c; d++)
      D[d] = [];
    var A = [], E = [], y = [], F = [];
    for (w = 0; w < v; w++) {
      var b = w + 1;
      for (n(a, w, y, A, b), n(u, w, F, E, b), d = 0; d < c; d++) {
        var C = y[d] === b ? A[d] : p, S = F[d] === b ? E[d] : p;
        D[d][w] = m(C, S);
      }
    }
    return new t({
      data: D,
      size: [c, v],
      datatype: g
    });
  };
  function n(e, a, u, l, f) {
    for (var h = e._values, s = e._index, o = e._ptr, c = o[a], v = o[a + 1]; c < v; c++) {
      var g = s[c];
      u[g] = f, l[g] = h[c];
    }
  }
}), zn = "conj", Jf = ["typed"], Qf = /* @__PURE__ */ ee(zn, Jf, (r) => {
  var {
    typed: i
  } = r;
  return i(zn, {
    "number | BigNumber | Fraction": (t) => t,
    Complex: (t) => t.conjugate(),
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), Tn = "im", Xf = ["typed"], Hf = /* @__PURE__ */ ee(Tn, Xf, (r) => {
  var {
    typed: i
  } = r;
  return i(Tn, {
    number: () => 0,
    "BigNumber | Fraction": (t) => t.mul(0),
    Complex: (t) => t.im,
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), In = "re", Kf = ["typed"], Wf = /* @__PURE__ */ ee(In, Kf, (r) => {
  var {
    typed: i
  } = r;
  return i(In, {
    "number | BigNumber | Fraction": (t) => t,
    Complex: (t) => t.re,
    "Array | Matrix": i.referToSelf((t) => (n) => er(n, t))
  });
}), Ln = "concat", kf = ["typed", "matrix", "isInteger"], jf = /* @__PURE__ */ ee(Ln, kf, (r) => {
  var {
    typed: i,
    matrix: t,
    isInteger: n
  } = r;
  return i(Ln, {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    "...Array | Matrix | number | BigNumber": function(a) {
      var u, l = a.length, f = -1, h, s = !1, o = [];
      for (u = 0; u < l; u++) {
        var c = a[u];
        if (_e(c) && (s = !0), $e(c) || Re(c)) {
          if (u !== l - 1)
            throw new Error("Dimension must be specified as last argument");
          if (h = f, f = c.valueOf(), !n(f))
            throw new TypeError("Integer number expected for dimension");
          if (f < 0 || u > 0 && f > h)
            throw new br(f, h + 1);
        } else {
          var v = Fe(c).valueOf(), g = qe(v);
          if (o[u] = v, h = f, f = g.length - 1, u > 0 && f !== h)
            throw new Ce(h + 1, f + 1);
        }
      }
      if (o.length === 0)
        throw new SyntaxError("At least one matrix expected");
      for (var p = o.shift(); o.length; )
        p = zi(p, o.shift(), f);
      return s ? t(p) : p;
    },
    "...string": function(a) {
      return a.join("");
    }
  });
}), On = "column", ec = ["typed", "Index", "matrix", "range"], rc = /* @__PURE__ */ ee(On, ec, (r) => {
  var {
    typed: i,
    Index: t,
    matrix: n,
    range: e
  } = r;
  return i(On, {
    "Matrix, number": a,
    "Array, number": function(l, f) {
      return a(n(Fe(l)), f).valueOf();
    }
  });
  function a(u, l) {
    if (u.size().length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    Ne(l, u.size()[1]);
    var f = e(0, u.size()[0]), h = new t(f, l), s = u.subset(h);
    return _e(s) ? s : n([[s]]);
  }
}), $n = "diag", tc = ["typed", "matrix", "DenseMatrix", "SparseMatrix"], nc = /* @__PURE__ */ ee($n, tc, (r) => {
  var {
    typed: i,
    matrix: t,
    DenseMatrix: n,
    SparseMatrix: e
  } = r;
  return i($n, {
    // FIXME: simplify this huge amount of signatures as soon as typed-function supports optional arguments
    Array: function(h) {
      return a(h, 0, qe(h), null);
    },
    "Array, number": function(h, s) {
      return a(h, s, qe(h), null);
    },
    "Array, BigNumber": function(h, s) {
      return a(h, s.toNumber(), qe(h), null);
    },
    "Array, string": function(h, s) {
      return a(h, 0, qe(h), s);
    },
    "Array, number, string": function(h, s, o) {
      return a(h, s, qe(h), o);
    },
    "Array, BigNumber, string": function(h, s, o) {
      return a(h, s.toNumber(), qe(h), o);
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
  function a(f, h, s, o) {
    if (!ze(h))
      throw new TypeError("Second parameter in function diag must be an integer");
    var c = h > 0 ? h : 0, v = h < 0 ? -h : 0;
    switch (s.length) {
      case 1:
        return u(f, h, o, s[0], v, c);
      case 2:
        return l(f, h, o, s, v, c);
    }
    throw new RangeError("Matrix for function diag must be 2 dimensional");
  }
  function u(f, h, s, o, c, v) {
    var g = [o + c, o + v];
    if (s && s !== "sparse" && s !== "dense")
      throw new TypeError("Unknown matrix type ".concat(s, '"'));
    var p = s === "sparse" ? e.diagonal(g, f, h) : n.diagonal(g, f, h);
    return s !== null ? p : p.valueOf();
  }
  function l(f, h, s, o, c, v) {
    if (_e(f)) {
      var g = f.diagonal(h);
      return s !== null ? s !== g.storage() ? t(g, s) : g : g.valueOf();
    }
    for (var p = Math.min(o[0] - c, o[1] - v), m = [], d = 0; d < p; d++)
      m[d] = f[d + c][d + v];
    return s !== null ? t(m) : m;
  }
}), qn = "flatten", ic = ["typed", "matrix"], ac = /* @__PURE__ */ ee(qn, ic, (r) => {
  var {
    typed: i,
    matrix: t
  } = r;
  return i(qn, {
    Array: function(e) {
      return Pt(e);
    },
    Matrix: function(e) {
      var a = Pt(e.toArray());
      return t(a);
    }
  });
}), Pn = "getMatrixDataType", uc = ["typed"], oc = /* @__PURE__ */ ee(Pn, uc, (r) => {
  var {
    typed: i
  } = r;
  return i(Pn, {
    Array: function(n) {
      return Jr(n, lr);
    },
    Matrix: function(n) {
      return n.getDataType();
    }
  });
}), Rn = "identity", sc = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], fc = /* @__PURE__ */ ee(Rn, sc, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    BigNumber: e,
    DenseMatrix: a,
    SparseMatrix: u
  } = r;
  return i(Rn, {
    "": function() {
      return t.matrix === "Matrix" ? n([]) : [];
    },
    string: function(s) {
      return n(s);
    },
    "number | BigNumber": function(s) {
      return f(s, s, t.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, string": function(s, o) {
      return f(s, s, o);
    },
    "number | BigNumber, number | BigNumber": function(s, o) {
      return f(s, o, t.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, number | BigNumber, string": function(s, o, c) {
      return f(s, o, c);
    },
    Array: function(s) {
      return l(s);
    },
    "Array, string": function(s, o) {
      return l(s, o);
    },
    Matrix: function(s) {
      return l(s.valueOf(), s.storage());
    },
    "Matrix, string": function(s, o) {
      return l(s.valueOf(), o);
    }
  });
  function l(h, s) {
    switch (h.length) {
      case 0:
        return s ? n(s) : [];
      case 1:
        return f(h[0], h[0], s);
      case 2:
        return f(h[0], h[1], s);
      default:
        throw new Error("Vector containing two values expected");
    }
  }
  function f(h, s, o) {
    var c = Re(h) || Re(s) ? e : null;
    if (Re(h) && (h = h.toNumber()), Re(s) && (s = s.toNumber()), !ze(h) || h < 1)
      throw new Error("Parameters in function identity must be positive integers");
    if (!ze(s) || s < 1)
      throw new Error("Parameters in function identity must be positive integers");
    var v = c ? new e(1) : 1, g = c ? new c(0) : 0, p = [h, s];
    if (o) {
      if (o === "sparse")
        return u.diagonal(p, v, 0, g);
      if (o === "dense")
        return a.diagonal(p, v, 0, g);
      throw new TypeError('Unknown matrix type "'.concat(o, '"'));
    }
    for (var m = ct([], p, g), d = h < s ? h : s, w = 0; w < d; w++)
      m[w][w] = v;
    return m;
  }
});
function la() {
  throw new Error('No "bignumber" implementation available');
}
function cc() {
  throw new Error('No "fraction" implementation available');
}
function ha() {
  throw new Error('No "matrix" implementation available');
}
var Un = "range", lc = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], hc = /* @__PURE__ */ ee(Un, lc, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    bignumber: e,
    smaller: a,
    smallerEq: u,
    larger: l,
    largerEq: f,
    add: h,
    isPositive: s
  } = r;
  return i(Un, {
    // TODO: simplify signatures when typed-function supports default values and optional arguments
    // TODO: a number or boolean should not be converted to string here
    string: c,
    "string, boolean": c,
    "number, number": function(m, d) {
      return o(v(m, d, 1, !1));
    },
    "number, number, number": function(m, d, w) {
      return o(v(m, d, w, !1));
    },
    "number, number, boolean": function(m, d, w) {
      return o(v(m, d, 1, w));
    },
    "number, number, number, boolean": function(m, d, w, D) {
      return o(v(m, d, w, D));
    },
    "BigNumber, BigNumber": function(m, d) {
      var w = m.constructor;
      return o(v(m, d, new w(1), !1));
    },
    "BigNumber, BigNumber, BigNumber": function(m, d, w) {
      return o(v(m, d, w, !1));
    },
    "BigNumber, BigNumber, boolean": function(m, d, w) {
      var D = m.constructor;
      return o(v(m, d, new D(1), w));
    },
    "BigNumber, BigNumber, BigNumber, boolean": function(m, d, w, D) {
      return o(v(m, d, w, D));
    },
    "Unit, Unit, Unit": function(m, d, w) {
      return o(v(m, d, w, !1));
    },
    "Unit, Unit, Unit, boolean": function(m, d, w, D) {
      return o(v(m, d, w, D));
    }
  });
  function o(p) {
    return t.matrix === "Matrix" ? n ? n(p) : ha() : p;
  }
  function c(p, m) {
    var d = g(p);
    if (!d)
      throw new SyntaxError('String "' + p + '" is no valid range');
    return t.number === "BigNumber" ? (e === void 0 && la(), o(v(e(d.start), e(d.end), e(d.step)))) : o(v(d.start, d.end, d.step, m));
  }
  function v(p, m, d, w) {
    for (var D = [], A = s(d) ? w ? u : a : w ? f : l, E = p; A(E, m); )
      D.push(E), E = h(E, d);
    return D;
  }
  function g(p) {
    var m = p.split(":"), d = m.map(function(D) {
      return Number(D);
    }), w = d.some(function(D) {
      return isNaN(D);
    });
    if (w)
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
}), Vn = "reshape", vc = ["typed", "isInteger", "matrix"], pc = /* @__PURE__ */ ee(Vn, vc, (r) => {
  var {
    typed: i,
    isInteger: t
  } = r;
  return i(Vn, {
    "Matrix, Array": function(e, a) {
      return e.reshape(a, !0);
    },
    "Array, Array": function(e, a) {
      return a.forEach(function(u) {
        if (!t(u))
          throw new TypeError("Invalid size for dimension: " + u);
      }), Kt(e, a);
    }
  });
}), Gn = "size", dc = ["typed", "config", "?matrix"], mc = /* @__PURE__ */ ee(Gn, dc, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n
  } = r;
  return i(Gn, {
    Matrix: function(a) {
      return a.create(a.size());
    },
    Array: qe,
    string: function(a) {
      return t.matrix === "Array" ? [a.length] : n([a.length]);
    },
    "number | Complex | BigNumber | Unit | boolean | null": function(a) {
      return t.matrix === "Array" ? [] : n ? n([]) : ha();
    }
  });
}), Zn = "squeeze", gc = ["typed", "matrix"], Dc = /* @__PURE__ */ ee(Zn, gc, (r) => {
  var {
    typed: i,
    matrix: t
  } = r;
  return i(Zn, {
    Array: function(e) {
      return pn(Fe(e));
    },
    Matrix: function(e) {
      var a = pn(e.toArray());
      return Array.isArray(a) ? t(a) : a;
    },
    any: function(e) {
      return Fe(e);
    }
  });
}), Yn = "subset", yc = ["typed", "matrix", "zeros", "add"], wc = /* @__PURE__ */ ee(Yn, yc, (r) => {
  var {
    typed: i,
    matrix: t,
    zeros: n,
    add: e
  } = r;
  return i(Yn, {
    // get subset
    "Matrix, Index": function(l, f) {
      return Or(f) ? t() : (ft(l, f), l.subset(f));
    },
    "Array, Index": i.referTo("Matrix, Index", function(u) {
      return function(l, f) {
        var h = u(t(l), f);
        return f.isScalar() ? h : h.valueOf();
      };
    }),
    "Object, Index": Ec,
    "string, Index": Ac,
    // set subset
    "Matrix, Index, any, any": function(l, f, h, s) {
      return Or(f) ? l : (ft(l, f), l.clone().subset(f, a(h, f), s));
    },
    "Array, Index, any, any": i.referTo("Matrix, Index, any, any", function(u) {
      return function(l, f, h, s) {
        var o = u(t(l), f, h, s);
        return o.isMatrix ? o.valueOf() : o;
      };
    }),
    "Array, Index, any": i.referTo("Matrix, Index, any, any", function(u) {
      return function(l, f, h) {
        return u(t(l), f, h, void 0).valueOf();
      };
    }),
    "Matrix, Index, any": i.referTo("Matrix, Index, any, any", function(u) {
      return function(l, f, h) {
        return u(l, f, h, void 0);
      };
    }),
    "string, Index, string": Jn,
    "string, Index, string, string": Jn,
    "Object, Index, any": Cc
  });
  function a(u, l) {
    if (typeof u == "string")
      throw new Error("can't boradcast a string");
    if (l._isScalar)
      return u;
    var f = l.size();
    if (f.every((h) => h > 0))
      try {
        return e(u, n(f));
      } catch {
        return u;
      }
    else
      return u;
  }
});
function Ac(r, i) {
  if (!Et(i))
    throw new TypeError("Index expected");
  if (Or(i))
    return "";
  if (ft(Array.from(r), i), i.size().length !== 1)
    throw new Ce(i.size().length, 1);
  var t = r.length;
  Ne(i.min()[0], t), Ne(i.max()[0], t);
  var n = i.dimension(0), e = "";
  return n.forEach(function(a) {
    e += r.charAt(a);
  }), e;
}
function Jn(r, i, t, n) {
  if (!i || i.isIndex !== !0)
    throw new TypeError("Index expected");
  if (Or(i))
    return r;
  if (ft(Array.from(r), i), i.size().length !== 1)
    throw new Ce(i.size().length, 1);
  if (n !== void 0) {
    if (typeof n != "string" || n.length !== 1)
      throw new TypeError("Single character expected as defaultValue");
  } else
    n = " ";
  var e = i.dimension(0), a = e.size()[0];
  if (a !== t.length)
    throw new Ce(e.size()[0], t.length);
  var u = r.length;
  Ne(i.min()[0]), Ne(i.max()[0]);
  for (var l = [], f = 0; f < u; f++)
    l[f] = r.charAt(f);
  if (e.forEach(function(o, c) {
    l[o] = t.charAt(c[0]);
  }), l.length > u)
    for (var h = u - 1, s = l.length; h < s; h++)
      l[h] || (l[h] = n);
  return l.join("");
}
function Ec(r, i) {
  if (!Or(i)) {
    if (i.size().length !== 1)
      throw new Ce(i.size(), 1);
    var t = i.dimension(0);
    if (typeof t != "string")
      throw new TypeError("String expected as index to retrieve an object property");
    return Ti(r, t);
  }
}
function Cc(r, i, t) {
  if (Or(i))
    return r;
  if (i.size().length !== 1)
    throw new Ce(i.size(), 1);
  var n = i.dimension(0);
  if (typeof n != "string")
    throw new TypeError("String expected as index to retrieve an object property");
  var e = Fe(r);
  return Ii(e, n, t), e;
}
var Qn = "transpose", Fc = ["typed", "matrix"], bc = /* @__PURE__ */ ee(Qn, Fc, (r) => {
  var {
    typed: i,
    matrix: t
  } = r;
  return i(Qn, {
    Array: (u) => n(t(u)).valueOf(),
    Matrix: n,
    any: Fe
    // scalars
  });
  function n(u) {
    var l = u.size(), f;
    switch (l.length) {
      case 1:
        f = u.clone();
        break;
      case 2:
        {
          var h = l[0], s = l[1];
          if (s === 0)
            throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Le(l) + ")");
          switch (u.storage()) {
            case "dense":
              f = e(u, h, s);
              break;
            case "sparse":
              f = a(u, h, s);
              break;
          }
        }
        break;
      default:
        throw new RangeError("Matrix must be a vector or two dimensional (size: " + Le(l) + ")");
    }
    return f;
  }
  function e(u, l, f) {
    for (var h = u._data, s = [], o, c = 0; c < f; c++) {
      o = s[c] = [];
      for (var v = 0; v < l; v++)
        o[v] = Fe(h[v][c]);
    }
    return u.createDenseMatrix({
      data: s,
      size: [f, l],
      datatype: u._datatype
    });
  }
  function a(u, l, f) {
    for (var h = u._values, s = u._index, o = u._ptr, c = h ? [] : void 0, v = [], g = [], p = [], m = 0; m < l; m++)
      p[m] = 0;
    var d, w, D;
    for (d = 0, w = s.length; d < w; d++)
      p[s[d]]++;
    for (var A = 0, E = 0; E < l; E++)
      g.push(A), A += p[E], p[E] = g[E];
    for (g.push(A), D = 0; D < f; D++)
      for (var y = o[D], F = o[D + 1], b = y; b < F; b++) {
        var C = p[s[b]]++;
        v[C] = D, h && (c[C] = Fe(h[b]));
      }
    return u.createSparseMatrix({
      values: c,
      index: v,
      ptr: g,
      size: [f, l],
      datatype: u._datatype
    });
  }
}), Xn = "ctranspose", Mc = ["typed", "transpose", "conj"], Sc = /* @__PURE__ */ ee(Xn, Mc, (r) => {
  var {
    typed: i,
    transpose: t,
    conj: n
  } = r;
  return i(Xn, {
    any: function(a) {
      return n(t(a));
    }
  });
}), Hn = "zeros", xc = ["typed", "config", "matrix", "BigNumber"], Bc = /* @__PURE__ */ ee(Hn, xc, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    BigNumber: e
  } = r;
  return i(Hn, {
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
  function a(f, h) {
    var s = u(f), o = s ? new e(0) : 0;
    if (l(f), h) {
      var c = n(h);
      return f.length > 0 ? c.resize(f, o) : c;
    } else {
      var v = [];
      return f.length > 0 ? ct(v, f, o) : v;
    }
  }
  function u(f) {
    var h = !1;
    return f.forEach(function(s, o, c) {
      Re(s) && (h = !0, c[o] = s.toNumber());
    }), h;
  }
  function l(f) {
    f.forEach(function(h) {
      if (typeof h != "number" || !ze(h) || h < 0)
        throw new Error("Parameters in function zeros must be positive integers");
    });
  }
}), Nc = "numeric", _c = ["number", "?bignumber", "?fraction"], zc = /* @__PURE__ */ ee(Nc, _c, (r) => {
  var {
    number: i,
    bignumber: t,
    fraction: n
  } = r, e = {
    string: !0,
    number: !0,
    BigNumber: !0,
    Fraction: !0
  }, a = {
    number: (u) => i(u),
    BigNumber: t ? (u) => t(u) : la,
    Fraction: n ? (u) => n(u) : cc
  };
  return function(l) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number", h = arguments.length > 2 ? arguments[2] : void 0;
    if (h !== void 0)
      throw new SyntaxError("numeric() takes one or two arguments");
    var s = lr(l);
    if (!(s in e))
      throw new TypeError("Cannot convert " + l + ' of type "' + s + '"; valid input types are ' + Object.keys(e).join(", "));
    if (!(f in a))
      throw new TypeError("Cannot convert " + l + ' to type "' + f + '"; valid output types are ' + Object.keys(a).join(", "));
    return f === s ? l : a[f](l);
  };
}), Kn = "divideScalar", Tc = ["typed", "numeric"], Ic = /* @__PURE__ */ ee(Kn, Tc, (r) => {
  var {
    typed: i,
    numeric: t
  } = r;
  return i(Kn, {
    "number, number": function(e, a) {
      return e / a;
    },
    "Complex, Complex": function(e, a) {
      return e.div(a);
    },
    "BigNumber, BigNumber": function(e, a) {
      return e.div(a);
    },
    "Fraction, Fraction": function(e, a) {
      return e.div(a);
    },
    "Unit, number | Complex | Fraction | BigNumber | Unit": (n, e) => n.divide(e),
    "number | Fraction | Complex | BigNumber, Unit": (n, e) => e.divideInto(n)
  });
}), Wn = "pow", Lc = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], Oc = /* @__PURE__ */ ee(Wn, Lc, (r) => {
  var {
    typed: i,
    config: t,
    identity: n,
    multiply: e,
    matrix: a,
    inv: u,
    number: l,
    fraction: f,
    Complex: h
  } = r;
  return i(Wn, {
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
    "Matrix, number": c,
    "Matrix, BigNumber": function(g, p) {
      return c(g, p.toNumber());
    },
    "Unit, number | BigNumber": function(g, p) {
      return g.pow(p);
    }
  });
  function s(v, g) {
    if (t.predictable && !ze(g) && v < 0)
      try {
        var p = f(g), m = l(p);
        if ((g === m || Math.abs((g - m) / g) < 1e-14) && p.d % 2 === 1)
          return (p.n % 2 === 0 ? 1 : -1) * Math.pow(-v, g);
      } catch {
      }
    return t.predictable && (v < -1 && g === 1 / 0 || v > -1 && v < 0 && g === -1 / 0) ? NaN : ze(g) || v >= 0 || t.predictable ? ia(v, g) : v * v < 1 && g === 1 / 0 || v * v > 1 && g === -1 / 0 ? 0 : new h(v, 0).pow(g, 0);
  }
  function o(v, g) {
    if (!ze(g))
      throw new TypeError("For A^b, b must be an integer (value is " + g + ")");
    var p = qe(v);
    if (p.length !== 2)
      throw new Error("For A^b, A must be 2 dimensional (A has " + p.length + " dimensions)");
    if (p[0] !== p[1])
      throw new Error("For A^b, A must be square (size is " + p[0] + "x" + p[1] + ")");
    if (g < 0)
      try {
        return o(u(v), -g);
      } catch (w) {
        throw w.message === "Cannot calculate inverse, determinant is zero" ? new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + g + ")") : w;
      }
    for (var m = n(p[0]).valueOf(), d = v; g >= 1; )
      (g & 1) === 1 && (m = e(d, m)), g >>= 1, d = e(d, d);
    return m;
  }
  function c(v, g) {
    return a(o(v.valueOf(), g));
  }
});
function Bt(r) {
  var {
    DenseMatrix: i
  } = r;
  return function(n, e, a) {
    var u = n.size();
    if (u.length !== 2)
      throw new RangeError("Matrix must be two dimensional (size: " + Le(u) + ")");
    var l = u[0], f = u[1];
    if (l !== f)
      throw new RangeError("Matrix must be square (size: " + Le(u) + ")");
    var h = [];
    if (_e(e)) {
      var s = e.size(), o = e._data;
      if (s.length === 1) {
        if (s[0] !== l)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var c = 0; c < l; c++)
          h[c] = [o[c]];
        return new i({
          data: h,
          size: [l, 1],
          datatype: e._datatype
        });
      }
      if (s.length === 2) {
        if (s[0] !== l || s[1] !== 1)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        if (yi(e)) {
          if (a) {
            h = [];
            for (var v = 0; v < l; v++)
              h[v] = [o[v][0]];
            return new i({
              data: h,
              size: [l, 1],
              datatype: e._datatype
            });
          }
          return e;
        }
        if (wi(e)) {
          for (var g = 0; g < l; g++)
            h[g] = [0];
          for (var p = e._values, m = e._index, d = e._ptr, w = d[1], D = d[0]; D < w; D++) {
            var A = m[D];
            h[A][0] = p[D];
          }
          return new i({
            data: h,
            size: [l, 1],
            datatype: e._datatype
          });
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
    if (Me(e)) {
      var E = qe(e);
      if (E.length === 1) {
        if (E[0] !== l)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var y = 0; y < l; y++)
          h[y] = [e[y]];
        return new i({
          data: h,
          size: [l, 1]
        });
      }
      if (E.length === 2) {
        if (E[0] !== l || E[1] !== 1)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var F = 0; F < l; F++)
          h[F] = [e[F][0]];
        return new i({
          data: h,
          size: [l, 1]
        });
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
  };
}
var kn = "lsolve", $c = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], qc = /* @__PURE__ */ ee(kn, $c, (r) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    multiplyScalar: e,
    subtractScalar: a,
    equalScalar: u,
    DenseMatrix: l
  } = r, f = Bt({
    DenseMatrix: l
  });
  return i(kn, {
    "SparseMatrix, Array | Matrix": function(c, v) {
      return s(c, v);
    },
    "DenseMatrix, Array | Matrix": function(c, v) {
      return h(c, v);
    },
    "Array, Array | Matrix": function(c, v) {
      var g = t(c), p = h(g, v);
      return p.valueOf();
    }
  });
  function h(o, c) {
    c = f(o, c, !0);
    for (var v = c._data, g = o._size[0], p = o._size[1], m = [], d = o._data, w = 0; w < p; w++) {
      var D = v[w][0] || 0, A = void 0;
      if (u(D, 0))
        A = 0;
      else {
        var E = d[w][w];
        if (u(E, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        A = n(D, E);
        for (var y = w + 1; y < g; y++)
          v[y] = [a(v[y][0] || 0, e(A, d[y][w]))];
      }
      m[w] = [A];
    }
    return new l({
      data: m,
      size: [g, 1]
    });
  }
  function s(o, c) {
    c = f(o, c, !0);
    for (var v = c._data, g = o._size[0], p = o._size[1], m = o._values, d = o._index, w = o._ptr, D = [], A = 0; A < p; A++) {
      var E = v[A][0] || 0;
      if (u(E, 0))
        D[A] = [0];
      else {
        for (var y = 0, F = [], b = [], C = w[A], S = w[A + 1], M = C; M < S; M++) {
          var x = d[M];
          x === A ? y = m[M] : x > A && (F.push(m[M]), b.push(x));
        }
        if (u(y, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        for (var I = n(E, y), T = 0, L = b.length; T < L; T++) {
          var N = b[T];
          v[N] = [a(v[N][0] || 0, e(I, F[T]))];
        }
        D[A] = [I];
      }
    }
    return new l({
      data: D,
      size: [g, 1]
    });
  }
}), jn = "usolve", Pc = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Rc = /* @__PURE__ */ ee(jn, Pc, (r) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    multiplyScalar: e,
    subtractScalar: a,
    equalScalar: u,
    DenseMatrix: l
  } = r, f = Bt({
    DenseMatrix: l
  });
  return i(jn, {
    "SparseMatrix, Array | Matrix": function(c, v) {
      return s(c, v);
    },
    "DenseMatrix, Array | Matrix": function(c, v) {
      return h(c, v);
    },
    "Array, Array | Matrix": function(c, v) {
      var g = t(c), p = h(g, v);
      return p.valueOf();
    }
  });
  function h(o, c) {
    c = f(o, c, !0);
    for (var v = c._data, g = o._size[0], p = o._size[1], m = [], d = o._data, w = p - 1; w >= 0; w--) {
      var D = v[w][0] || 0, A = void 0;
      if (u(D, 0))
        A = 0;
      else {
        var E = d[w][w];
        if (u(E, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        A = n(D, E);
        for (var y = w - 1; y >= 0; y--)
          v[y] = [a(v[y][0] || 0, e(A, d[y][w]))];
      }
      m[w] = [A];
    }
    return new l({
      data: m,
      size: [g, 1]
    });
  }
  function s(o, c) {
    c = f(o, c, !0);
    for (var v = c._data, g = o._size[0], p = o._size[1], m = o._values, d = o._index, w = o._ptr, D = [], A = p - 1; A >= 0; A--) {
      var E = v[A][0] || 0;
      if (u(E, 0))
        D[A] = [0];
      else {
        for (var y = 0, F = [], b = [], C = w[A], S = w[A + 1], M = S - 1; M >= C; M--) {
          var x = d[M];
          x === A ? y = m[M] : x < A && (F.push(m[M]), b.push(x));
        }
        if (u(y, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        for (var I = n(E, y), T = 0, L = b.length; T < L; T++) {
          var N = b[T];
          v[N] = [a(v[N][0], e(I, F[T]))];
        }
        D[A] = [I];
      }
    }
    return new l({
      data: D,
      size: [g, 1]
    });
  }
}), ei = "usolveAll", Uc = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Vc = /* @__PURE__ */ ee(ei, Uc, (r) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    multiplyScalar: e,
    subtractScalar: a,
    equalScalar: u,
    DenseMatrix: l
  } = r, f = Bt({
    DenseMatrix: l
  });
  return i(ei, {
    "SparseMatrix, Array | Matrix": function(c, v) {
      return s(c, v);
    },
    "DenseMatrix, Array | Matrix": function(c, v) {
      return h(c, v);
    },
    "Array, Array | Matrix": function(c, v) {
      var g = t(c), p = h(g, v);
      return p.map((m) => m.valueOf());
    }
  });
  function h(o, c) {
    for (var v = [f(o, c, !0)._data.map((b) => b[0])], g = o._data, p = o._size[0], m = o._size[1], d = m - 1; d >= 0; d--)
      for (var w = v.length, D = 0; D < w; D++) {
        var A = v[D];
        if (u(g[d][d], 0))
          if (u(A[d], 0)) {
            if (D === 0) {
              var y = [...A];
              y[d] = 1;
              for (var F = d - 1; F >= 0; F--)
                y[F] = a(y[F], g[F][d]);
              v.push(y);
            }
          } else {
            if (D === 0)
              return [];
            v.splice(D, 1), D -= 1, w -= 1;
          }
        else {
          A[d] = n(A[d], g[d][d]);
          for (var E = d - 1; E >= 0; E--)
            A[E] = a(A[E], e(A[d], g[E][d]));
        }
      }
    return v.map((b) => new l({
      data: b.map((C) => [C]),
      size: [p, 1]
    }));
  }
  function s(o, c) {
    for (var v = [f(o, c, !0)._data.map((K) => K[0])], g = o._size[0], p = o._size[1], m = o._values, d = o._index, w = o._ptr, D = p - 1; D >= 0; D--)
      for (var A = v.length, E = 0; E < A; E++) {
        for (var y = v[E], F = [], b = [], C = w[D], S = w[D + 1], M = 0, x = S - 1; x >= C; x--) {
          var I = d[x];
          I === D ? M = m[x] : I < D && (F.push(m[x]), b.push(I));
        }
        if (u(M, 0))
          if (u(y[D], 0)) {
            if (E === 0) {
              var Z = [...y];
              Z[D] = 1;
              for (var $ = 0, z = b.length; $ < z; $++) {
                var V = b[$];
                Z[V] = a(Z[V], F[$]);
              }
              v.push(Z);
            }
          } else {
            if (E === 0)
              return [];
            v.splice(E, 1), E -= 1, A -= 1;
          }
        else {
          y[D] = n(y[D], M);
          for (var T = 0, L = b.length; T < L; T++) {
            var N = b[T];
            y[N] = a(y[N], e(y[D], F[T]));
          }
        }
      }
    return v.map((K) => new l({
      data: K.map((P) => [P]),
      size: [g, 1]
    }));
  }
}), mt = "equal", Gc = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], Zc = /* @__PURE__ */ ee(mt, Gc, (r) => {
  var {
    typed: i,
    matrix: t,
    equalScalar: n,
    DenseMatrix: e,
    concat: a
  } = r, u = Rr({
    typed: i
  }), l = Kr({
    typed: i,
    DenseMatrix: e
  }), f = Pr({
    typed: i,
    DenseMatrix: e
  }), h = Mr({
    typed: i,
    matrix: t,
    concat: a
  });
  return i(mt, Yc({
    typed: i,
    equalScalar: n
  }), h({
    elop: n,
    SS: l,
    DS: u,
    Ss: f
  }));
}), Yc = ee(mt, ["typed", "equalScalar"], (r) => {
  var {
    typed: i,
    equalScalar: t
  } = r;
  return i(mt, {
    "any, any": function(e, a) {
      return e === null ? a === null : a === null ? e === null : e === void 0 ? a === void 0 : a === void 0 ? e === void 0 : t(e, a);
    }
  });
}), gt = "smaller", Jc = ["typed", "config", "matrix", "DenseMatrix", "concat"], Qc = /* @__PURE__ */ ee(gt, Jc, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: e,
    concat: a
  } = r, u = Rr({
    typed: i
  }), l = Kr({
    typed: i,
    DenseMatrix: e
  }), f = Pr({
    typed: i,
    DenseMatrix: e
  }), h = Mr({
    typed: i,
    matrix: n,
    concat: a
  }), s = Hr({
    typed: i
  });
  return i(gt, Xc({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, c) => o < c,
    "BigNumber, BigNumber": function(c, v) {
      return c.lt(v) && !Xr(c, v, t.epsilon);
    },
    "Fraction, Fraction": (o, c) => o.compare(c) === -1,
    "Complex, Complex": function(c, v) {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: l,
    DS: u,
    Ss: f
  }));
}), Xc = /* @__PURE__ */ ee(gt, ["typed", "config"], (r) => {
  var {
    typed: i,
    config: t
  } = r;
  return i(gt, {
    "number, number": function(e, a) {
      return e < a && !yr(e, a, t.epsilon);
    }
  });
}), Dt = "smallerEq", Hc = ["typed", "config", "matrix", "DenseMatrix", "concat"], Kc = /* @__PURE__ */ ee(Dt, Hc, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: e,
    concat: a
  } = r, u = Rr({
    typed: i
  }), l = Kr({
    typed: i,
    DenseMatrix: e
  }), f = Pr({
    typed: i,
    DenseMatrix: e
  }), h = Mr({
    typed: i,
    matrix: n,
    concat: a
  }), s = Hr({
    typed: i
  });
  return i(Dt, Wc({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, c) => o <= c,
    "BigNumber, BigNumber": function(c, v) {
      return c.lte(v) || Xr(c, v, t.epsilon);
    },
    "Fraction, Fraction": (o, c) => o.compare(c) !== 1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: l,
    DS: u,
    Ss: f
  }));
}), Wc = /* @__PURE__ */ ee(Dt, ["typed", "config"], (r) => {
  var {
    typed: i,
    config: t
  } = r;
  return i(Dt, {
    "number, number": function(e, a) {
      return e <= a || yr(e, a, t.epsilon);
    }
  });
}), yt = "larger", kc = ["typed", "config", "matrix", "DenseMatrix", "concat"], jc = /* @__PURE__ */ ee(yt, kc, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: e,
    concat: a
  } = r, u = Rr({
    typed: i
  }), l = Kr({
    typed: i,
    DenseMatrix: e
  }), f = Pr({
    typed: i,
    DenseMatrix: e
  }), h = Mr({
    typed: i,
    matrix: n,
    concat: a
  }), s = Hr({
    typed: i
  });
  return i(yt, el({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, c) => o > c,
    "BigNumber, BigNumber": function(c, v) {
      return c.gt(v) && !Xr(c, v, t.epsilon);
    },
    "Fraction, Fraction": (o, c) => o.compare(c) === 1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: l,
    DS: u,
    Ss: f
  }));
}), el = /* @__PURE__ */ ee(yt, ["typed", "config"], (r) => {
  var {
    typed: i,
    config: t
  } = r;
  return i(yt, {
    "number, number": function(e, a) {
      return e > a && !yr(e, a, t.epsilon);
    }
  });
}), wt = "largerEq", rl = ["typed", "config", "matrix", "DenseMatrix", "concat"], tl = /* @__PURE__ */ ee(wt, rl, (r) => {
  var {
    typed: i,
    config: t,
    matrix: n,
    DenseMatrix: e,
    concat: a
  } = r, u = Rr({
    typed: i
  }), l = Kr({
    typed: i,
    DenseMatrix: e
  }), f = Pr({
    typed: i,
    DenseMatrix: e
  }), h = Mr({
    typed: i,
    matrix: n,
    concat: a
  }), s = Hr({
    typed: i
  });
  return i(wt, nl({
    typed: i,
    config: t
  }), {
    "boolean, boolean": (o, c) => o >= c,
    "BigNumber, BigNumber": function(c, v) {
      return c.gte(v) || Xr(c, v, t.epsilon);
    },
    "Fraction, Fraction": (o, c) => o.compare(c) !== -1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, h({
    SS: l,
    DS: u,
    Ss: f
  }));
}), nl = /* @__PURE__ */ ee(wt, ["typed", "config"], (r) => {
  var {
    typed: i,
    config: t
  } = r;
  return i(wt, {
    "number, number": function(e, a) {
      return e >= a || yr(e, a, t.epsilon);
    }
  });
}), il = "ImmutableDenseMatrix", al = ["smaller", "DenseMatrix"], ul = /* @__PURE__ */ ee(il, al, (r) => {
  var {
    smaller: i,
    DenseMatrix: t
  } = r;
  function n(e, a) {
    if (!(this instanceof n))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (a && !ir(a))
      throw new Error("Invalid datatype: " + a);
    if (_e(e) || Me(e)) {
      var u = new t(e, a);
      this._data = u._data, this._size = u._size, this._datatype = u._datatype, this._min = null, this._max = null;
    } else if (e && Me(e.data) && Me(e.size))
      this._data = e.data, this._size = e.size, this._datatype = e.datatype, this._min = typeof e.min < "u" ? e.min : null, this._max = typeof e.max < "u" ? e.max : null;
    else {
      if (e)
        throw new TypeError("Unsupported type of data (" + lr(e) + ")");
      this._data = [], this._size = [0], this._datatype = a, this._min = null, this._max = null;
    }
  }
  return n.prototype = new t(), n.prototype.type = "ImmutableDenseMatrix", n.prototype.isImmutableDenseMatrix = !0, n.prototype.subset = function(e) {
    switch (arguments.length) {
      case 1: {
        var a = t.prototype.subset.call(this, e);
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
  }, n.fromJSON = function(e) {
    return new n(e);
  }, n.prototype.swapRows = function() {
    throw new Error("Cannot invoke swapRows on an Immutable Matrix instance");
  }, n.prototype.min = function() {
    if (this._min === null) {
      var e = null;
      this.forEach(function(a) {
        (e === null || i(a, e)) && (e = a);
      }), this._min = e !== null ? e : void 0;
    }
    return this._min;
  }, n.prototype.max = function() {
    if (this._max === null) {
      var e = null;
      this.forEach(function(a) {
        (e === null || i(e, a)) && (e = a);
      }), this._max = e !== null ? e : void 0;
    }
    return this._max;
  }, n;
}, {
  isClass: !0
}), ol = "Index", sl = ["ImmutableDenseMatrix", "getMatrixDataType"], fl = /* @__PURE__ */ ee(ol, sl, (r) => {
  var {
    ImmutableDenseMatrix: i,
    getMatrixDataType: t
  } = r;
  function n(a) {
    if (!(this instanceof n))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._dimensions = [], this._sourceSize = [], this._isScalar = !0;
    for (var u = 0, l = arguments.length; u < l; u++) {
      var f = arguments[u], h = Me(f), s = _e(f), o = null;
      if (Ai(f))
        this._dimensions.push(f), this._isScalar = !1;
      else if (h || s) {
        var c = void 0;
        t(f) === "boolean" ? (h && (c = e(ri(f).valueOf())), s && (c = e(ri(f._data).valueOf())), o = f.valueOf().length) : c = e(f.valueOf()), this._dimensions.push(c);
        var v = c.size();
        (v.length !== 1 || v[0] !== 1 || o !== null) && (this._isScalar = !1);
      } else if (typeof f == "number")
        this._dimensions.push(e([f]));
      else if (typeof f == "string")
        this._dimensions.push(f);
      else
        throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
      this._sourceSize.push(o);
    }
  }
  n.prototype.type = "Index", n.prototype.isIndex = !0;
  function e(a) {
    for (var u = 0, l = a.length; u < l; u++)
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
    for (var a = [], u = 0, l = this._dimensions.length; u < l; u++) {
      var f = this._dimensions[u];
      a[u] = typeof f == "string" ? 1 : f.size()[0];
    }
    return a;
  }, n.prototype.max = function() {
    for (var a = [], u = 0, l = this._dimensions.length; u < l; u++) {
      var f = this._dimensions[u];
      a[u] = typeof f == "string" ? f : f.max();
    }
    return a;
  }, n.prototype.min = function() {
    for (var a = [], u = 0, l = this._dimensions.length; u < l; u++) {
      var f = this._dimensions[u];
      a[u] = typeof f == "string" ? f : f.min();
    }
    return a;
  }, n.prototype.forEach = function(a) {
    for (var u = 0, l = this._dimensions.length; u < l; u++)
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
    for (var a = [], u = 0, l = this._dimensions.length; u < l; u++) {
      var f = this._dimensions[u];
      a.push(typeof f == "string" ? f : f.toArray());
    }
    return a;
  }, n.prototype.valueOf = n.prototype.toArray, n.prototype.toString = function() {
    for (var a = [], u = 0, l = this._dimensions.length; u < l; u++) {
      var f = this._dimensions[u];
      typeof f == "string" ? a.push(JSON.stringify(f)) : a.push(f.toString());
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
function ri(r) {
  var i = [];
  return r.forEach((t, n) => {
    t && i.push(n);
  }), i;
}
var cl = "FibonacciHeap", ll = ["smaller", "larger"], hl = /* @__PURE__ */ ee(cl, ll, (r) => {
  var {
    smaller: i,
    larger: t
  } = r, n = 1 / Math.log((1 + Math.sqrt(5)) / 2);
  function e() {
    if (!(this instanceof e))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._minimum = null, this._size = 0;
  }
  e.prototype.type = "FibonacciHeap", e.prototype.isFibonacciHeap = !0, e.prototype.insert = function(s, o) {
    var c = {
      key: s,
      value: o,
      degree: 0
    };
    if (this._minimum) {
      var v = this._minimum;
      c.left = v, c.right = v.right, v.right = c, c.right.left = c, i(s, v.key) && (this._minimum = c);
    } else
      c.left = c, c.right = c, this._minimum = c;
    return this._size++, c;
  }, e.prototype.size = function() {
    return this._size;
  }, e.prototype.clear = function() {
    this._minimum = null, this._size = 0;
  }, e.prototype.isEmpty = function() {
    return this._size === 0;
  }, e.prototype.extractMinimum = function() {
    var s = this._minimum;
    if (s === null)
      return s;
    for (var o = this._minimum, c = s.degree, v = s.child; c > 0; ) {
      var g = v.right;
      v.left.right = v.right, v.right.left = v.left, v.left = o, v.right = o.right, o.right = v, v.right.left = v, v.parent = null, v = g, c--;
    }
    return s.left.right = s.right, s.right.left = s.left, s === s.right ? o = null : (o = s.right, o = h(o, this._size)), this._size--, this._minimum = o, s;
  }, e.prototype.remove = function(s) {
    this._minimum = a(this._minimum, s, -1), this.extractMinimum();
  };
  function a(s, o, c) {
    o.key = c;
    var v = o.parent;
    return v && i(o.key, v.key) && (u(s, o, v), l(s, v)), i(o.key, s.key) && (s = o), s;
  }
  function u(s, o, c) {
    o.left.right = o.right, o.right.left = o.left, c.degree--, c.child === o && (c.child = o.right), c.degree === 0 && (c.child = null), o.left = s, o.right = s.right, s.right = o, o.right.left = o, o.parent = null, o.mark = !1;
  }
  function l(s, o) {
    var c = o.parent;
    c && (o.mark ? (u(s, o, c), l(c)) : o.mark = !0);
  }
  var f = function(o, c) {
    o.left.right = o.right, o.right.left = o.left, o.parent = c, c.child ? (o.left = c.child, o.right = c.child.right, c.child.right = o, o.right.left = o) : (c.child = o, o.right = o, o.left = o), c.degree++, o.mark = !1;
  };
  function h(s, o) {
    var c = Math.floor(Math.log(o) * n) + 1, v = new Array(c), g = 0, p = s;
    if (p)
      for (g++, p = p.right; p !== s; )
        g++, p = p.right;
    for (var m; g > 0; ) {
      for (var d = p.degree, w = p.right; m = v[d], !!m; ) {
        if (t(p.key, m.key)) {
          var D = m;
          m = p, p = D;
        }
        f(m, p), v[d] = null, d++;
      }
      v[d] = p, p = w, g--;
    }
    s = null;
    for (var A = 0; A < c; A++)
      m = v[A], m && (s ? (m.left.right = m.right, m.right.left = m.left, m.left = s, m.right = s.right, s.right = m, m.right.left = m, i(m.key, s.key) && (s = m)) : s = m);
    return s;
  }
  return e;
}, {
  isClass: !0
}), vl = "Spa", pl = ["addScalar", "equalScalar", "FibonacciHeap"], dl = /* @__PURE__ */ ee(vl, pl, (r) => {
  var {
    addScalar: i,
    equalScalar: t,
    FibonacciHeap: n
  } = r;
  function e() {
    if (!(this instanceof e))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._values = [], this._heap = new n();
  }
  return e.prototype.type = "Spa", e.prototype.isSpa = !0, e.prototype.set = function(a, u) {
    if (this._values[a])
      this._values[a].value = u;
    else {
      var l = this._heap.insert(a, u);
      this._values[a] = l;
    }
  }, e.prototype.get = function(a) {
    var u = this._values[a];
    return u ? u.value : 0;
  }, e.prototype.accumulate = function(a, u) {
    var l = this._values[a];
    l ? l.value = i(l.value, u) : (l = this._heap.insert(a, u), this._values[a] = l);
  }, e.prototype.forEach = function(a, u, l) {
    var f = this._heap, h = this._values, s = [], o = f.extractMinimum();
    for (o && s.push(o); o && o.key <= u; )
      o.key >= a && (t(o.value, 0) || l(o.key, o.value, this)), o = f.extractMinimum(), o && s.push(o);
    for (var c = 0; c < s.length; c++) {
      var v = s[c];
      o = f.insert(v.key, v.value), h[o.key] = o;
    }
  }, e.prototype.swap = function(a, u) {
    var l = this._values[a], f = this._values[u];
    if (!l && f)
      l = this._heap.insert(a, f.value), this._heap.remove(f), this._values[a] = l, this._values[u] = void 0;
    else if (l && !f)
      f = this._heap.insert(u, l.value), this._heap.remove(l), this._values[u] = f, this._values[a] = void 0;
    else if (l && f) {
      var h = l.value;
      l.value = f.value, f.value = h;
    }
  }, e;
}, {
  isClass: !0
}), ml = "atan", gl = ["typed"], Dl = /* @__PURE__ */ ee(ml, gl, (r) => {
  var {
    typed: i
  } = r;
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
}), va = /* @__PURE__ */ ee("trigUnit", ["typed"], (r) => {
  var {
    typed: i
  } = r;
  return {
    Unit: i.referToSelf((t) => (n) => {
      if (!n.hasBase(n.constructor.BASE_UNITS.ANGLE))
        throw new TypeError("Unit in function cot is no angle");
      return i.find(t, n.valueType())(n.value);
    })
  };
}), ti = "cos", yl = ["typed"], wl = /* @__PURE__ */ ee(ti, yl, (r) => {
  var {
    typed: i
  } = r, t = va({
    typed: i
  });
  return i(ti, {
    number: Math.cos,
    "Complex | BigNumber": (n) => n.cos()
  }, t);
}), ni = "sin", Al = ["typed"], El = /* @__PURE__ */ ee(ni, Al, (r) => {
  var {
    typed: i
  } = r, t = va({
    typed: i
  });
  return i(ni, {
    number: Math.sin,
    "Complex | BigNumber": (n) => n.sin()
  }, t);
}), ii = "add", Cl = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"], Fl = /* @__PURE__ */ ee(ii, Cl, (r) => {
  var {
    typed: i,
    matrix: t,
    addScalar: n,
    equalScalar: e,
    DenseMatrix: a,
    SparseMatrix: u,
    concat: l
  } = r, f = fa({
    typed: i
  }), h = Bf({
    typed: i,
    equalScalar: e
  }), s = ca({
    typed: i,
    DenseMatrix: a
  }), o = Mr({
    typed: i,
    matrix: t,
    concat: l
  });
  return i(ii, {
    "any, any": n,
    "any, any, ...any": i.referToSelf((c) => (v, g, p) => {
      for (var m = c(v, g), d = 0; d < p.length; d++)
        m = c(m, p[d]);
      return m;
    })
  }, o({
    elop: n,
    DS: f,
    SS: h,
    Ss: s
  }));
}), ai = "norm", bl = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], Ml = /* @__PURE__ */ ee(ai, bl, (r) => {
  var {
    typed: i,
    abs: t,
    add: n,
    pow: e,
    conj: a,
    sqrt: u,
    multiply: l,
    equalScalar: f,
    larger: h,
    smaller: s,
    matrix: o,
    ctranspose: c,
    eigs: v
  } = r;
  return i(ai, {
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
      return y(o(b), 2);
    },
    Matrix: function(b) {
      return y(b, 2);
    },
    "Array, number | BigNumber | string": function(b, C) {
      return y(o(b), C);
    },
    "Matrix, number | BigNumber | string": function(b, C) {
      return y(b, C);
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
      return y(F, 2);
    if (typeof b == "number" && !isNaN(b)) {
      if (!f(b, 0)) {
        var C = 0;
        return F.forEach(function(S) {
          C = n(e(t(S), b), C);
        }, !0), e(C, 1 / b);
      }
      return Number.POSITIVE_INFINITY;
    }
    throw new Error("Unsupported parameter value");
  }
  function d(F) {
    var b = 0;
    return F.forEach(function(C, S) {
      b = n(b, l(C, a(C)));
    }), t(u(b));
  }
  function w(F) {
    var b = [], C = 0;
    return F.forEach(function(S, M) {
      var x = M[1], I = n(b[x] || 0, t(S));
      h(I, C) && (C = I), b[x] = I;
    }, !0), C;
  }
  function D(F) {
    var b = F.size();
    if (b[0] !== b[1])
      throw new RangeError("Invalid matrix dimensions");
    var C = c(F), S = l(C, F), M = v(S).values.toArray(), x = M[M.length - 1];
    return t(u(x));
  }
  function A(F) {
    var b = [], C = 0;
    return F.forEach(function(S, M) {
      var x = M[0], I = n(b[x] || 0, t(S));
      h(I, C) && (C = I), b[x] = I;
    }, !0), C;
  }
  function E(F, b) {
    if (b === 1)
      return w(F);
    if (b === Number.POSITIVE_INFINITY || b === "inf")
      return A(F);
    if (b === "fro")
      return d(F);
    if (b === 2)
      return D(F);
    throw new Error("Unsupported parameter value " + b);
  }
  function y(F, b) {
    var C = F.size();
    if (C.length === 1)
      return m(F, b);
    if (C.length === 2) {
      if (C[0] && C[1])
        return E(F, b);
      throw new RangeError("Invalid matrix dimensions");
    }
  }
}), ui = "dot", Sl = ["typed", "addScalar", "multiplyScalar", "conj", "size"], xl = /* @__PURE__ */ ee(ui, Sl, (r) => {
  var {
    typed: i,
    addScalar: t,
    multiplyScalar: n,
    conj: e,
    size: a
  } = r;
  return i(ui, {
    "Array | DenseMatrix, Array | DenseMatrix": l,
    "SparseMatrix, SparseMatrix": f
  });
  function u(s, o) {
    var c = h(s), v = h(o), g, p;
    if (c.length === 1)
      g = c[0];
    else if (c.length === 2 && c[1] === 1)
      g = c[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + c.join(", ") + ")");
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
  function l(s, o) {
    var c = u(s, o), v = _e(s) ? s._data : s, g = _e(s) ? s._datatype : void 0, p = _e(o) ? o._data : o, m = _e(o) ? o._datatype : void 0, d = h(s).length === 2, w = h(o).length === 2, D = t, A = n;
    if (g && m && g === m && typeof g == "string") {
      var E = g;
      D = i.find(t, [E, E]), A = i.find(n, [E, E]);
    }
    if (!d && !w) {
      for (var y = A(e(v[0]), p[0]), F = 1; F < c; F++)
        y = D(y, A(e(v[F]), p[F]));
      return y;
    }
    if (!d && w) {
      for (var b = A(e(v[0]), p[0][0]), C = 1; C < c; C++)
        b = D(b, A(e(v[C]), p[C][0]));
      return b;
    }
    if (d && !w) {
      for (var S = A(e(v[0][0]), p[0]), M = 1; M < c; M++)
        S = D(S, A(e(v[M][0]), p[M]));
      return S;
    }
    if (d && w) {
      for (var x = A(e(v[0][0]), p[0][0]), I = 1; I < c; I++)
        x = D(x, A(e(v[I][0]), p[I][0]));
      return x;
    }
  }
  function f(s, o) {
    u(s, o);
    for (var c = s._index, v = s._values, g = o._index, p = o._values, m = 0, d = t, w = n, D = 0, A = 0; D < c.length && A < g.length; ) {
      var E = c[D], y = g[A];
      if (E < y) {
        D++;
        continue;
      }
      if (E > y) {
        A++;
        continue;
      }
      E === y && (m = d(m, w(v[D], p[A])), D++, A++);
    }
    return m;
  }
  function h(s) {
    return _e(s) ? s.size() : a(s);
  }
}), oi = "index", Bl = ["typed", "Index"], Nl = /* @__PURE__ */ ee(oi, Bl, (r) => {
  var {
    typed: i,
    Index: t
  } = r;
  return i(oi, {
    "...number | string | BigNumber | Range | Array | Matrix": function(e) {
      var a = e.map(function(l) {
        return Re(l) ? l.toNumber() : Me(l) || _e(l) ? l.map(function(f) {
          return Re(f) ? f.toNumber() : f;
        }) : l;
      }), u = new t();
      return t.apply(u, a), u;
    }
  });
}), si = "lup", _l = ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"], zl = /* @__PURE__ */ ee(si, _l, (r) => {
  var {
    typed: i,
    matrix: t,
    abs: n,
    addScalar: e,
    divideScalar: a,
    multiplyScalar: u,
    subtractScalar: l,
    larger: f,
    equalScalar: h,
    unaryMinus: s,
    DenseMatrix: o,
    SparseMatrix: c,
    Spa: v
  } = r;
  return i(si, {
    DenseMatrix: function(d) {
      return g(d);
    },
    SparseMatrix: function(d) {
      return p(d);
    },
    Array: function(d) {
      var w = t(d), D = g(w);
      return {
        L: D.L.valueOf(),
        U: D.U.valueOf(),
        p: D.p
      };
    }
  });
  function g(m) {
    var d = m._size[0], w = m._size[1], D = Math.min(d, w), A = Fe(m._data), E = [], y = [d, D], F = [], b = [D, w], C, S, M, x = [];
    for (C = 0; C < d; C++)
      x[C] = C;
    for (S = 0; S < w; S++) {
      if (S > 0)
        for (C = 0; C < d; C++) {
          var I = Math.min(C, S), T = 0;
          for (M = 0; M < I; M++)
            T = e(T, u(A[C][M], A[M][S]));
          A[C][S] = l(A[C][S], T);
        }
      var L = S, N = 0, Z = 0;
      for (C = S; C < d; C++) {
        var $ = A[C][S], z = n($);
        f(z, N) && (L = C, N = z, Z = $);
      }
      if (S !== L && (x[S] = [x[L], x[L] = x[S]][0], o._swapRows(S, L, A)), S < d)
        for (C = S + 1; C < d; C++) {
          var V = A[C][S];
          h(V, 0) || (A[C][S] = a(A[C][S], Z));
        }
    }
    for (S = 0; S < w; S++)
      for (C = 0; C < d; C++) {
        if (S === 0 && (C < w && (F[C] = []), E[C] = []), C < S) {
          C < w && (F[C][S] = A[C][S]), S < d && (E[C][S] = 0);
          continue;
        }
        if (C === S) {
          C < w && (F[C][S] = A[C][S]), S < d && (E[C][S] = 1);
          continue;
        }
        C < w && (F[C][S] = 0), S < d && (E[C][S] = A[C][S]);
      }
    var K = new o({
      data: E,
      size: y
    }), P = new o({
      data: F,
      size: b
    }), q = [];
    for (C = 0, D = x.length; C < D; C++)
      q[x[C]] = C;
    return {
      L: K,
      U: P,
      p: q,
      toString: function() {
        return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p;
      }
    };
  }
  function p(m) {
    var d = m._size[0], w = m._size[1], D = Math.min(d, w), A = m._values, E = m._index, y = m._ptr, F = [], b = [], C = [], S = [d, D], M = [], x = [], I = [], T = [D, w], L, N, Z, $ = [], z = [];
    for (L = 0; L < d; L++)
      $[L] = L, z[L] = L;
    var V = function(q, G) {
      var ne = z[q], k = z[G];
      $[ne] = G, $[k] = q, z[q] = k, z[G] = ne;
    }, K = function() {
      var q = new v();
      N < d && (C.push(F.length), F.push(1), b.push(N)), I.push(M.length);
      var G = y[N], ne = y[N + 1];
      for (Z = G; Z < ne; Z++)
        L = E[Z], q.set($[L], A[Z]);
      N > 0 && q.forEach(0, N - 1, function(X, J) {
        c._forEachRow(X, F, b, C, function(oe, j) {
          oe > X && q.accumulate(oe, s(u(j, J)));
        });
      });
      var k = N, U = q.get(N), Q = n(U);
      q.forEach(N + 1, d - 1, function(X, J) {
        var oe = n(J);
        f(oe, Q) && (k = X, Q = oe, U = J);
      }), N !== k && (c._swapRows(N, k, S[1], F, b, C), c._swapRows(N, k, T[1], M, x, I), q.swap(N, k), V(N, k)), q.forEach(0, d - 1, function(X, J) {
        X <= N ? (M.push(J), x.push(X)) : (J = a(J, U), h(J, 0) || (F.push(J), b.push(X)));
      });
    };
    for (N = 0; N < w; N++)
      K();
    return I.push(M.length), C.push(F.length), {
      L: new c({
        values: F,
        index: b,
        ptr: C,
        size: S
      }),
      U: new c({
        values: M,
        index: x,
        ptr: I,
        size: T
      }),
      p: $,
      toString: function() {
        return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p;
      }
    };
  }
}), fi = "qr", Tl = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"], Il = /* @__PURE__ */ ee(fi, Tl, (r) => {
  var {
    typed: i,
    matrix: t,
    zeros: n,
    identity: e,
    isZero: a,
    equal: u,
    sign: l,
    sqrt: f,
    conj: h,
    unaryMinus: s,
    addScalar: o,
    divideScalar: c,
    multiplyScalar: v,
    subtractScalar: g,
    complex: p
  } = r;
  return Ir(i(fi, {
    DenseMatrix: function(A) {
      return d(A);
    },
    SparseMatrix: function(A) {
      return w();
    },
    Array: function(A) {
      var E = t(A), y = d(E);
      return {
        Q: y.Q.valueOf(),
        R: y.R.valueOf()
      };
    }
  }), {
    _denseQRimpl: m
  });
  function m(D) {
    var A = D._size[0], E = D._size[1], y = e([A], "dense"), F = y._data, b = D.clone(), C = b._data, S, M, x, I = n([A], "");
    for (x = 0; x < Math.min(E, A); ++x) {
      var T = C[x][x], L = s(u(T, 0) ? 1 : l(T)), N = h(L), Z = 0;
      for (S = x; S < A; S++)
        Z = o(Z, v(C[S][x], h(C[S][x])));
      var $ = v(L, f(Z));
      if (!a($)) {
        var z = g(T, $);
        for (I[x] = 1, S = x + 1; S < A; S++)
          I[S] = c(C[S][x], z);
        var V = s(h(c(z, $))), K = void 0;
        for (M = x; M < E; M++) {
          for (K = 0, S = x; S < A; S++)
            K = o(K, v(h(I[S]), C[S][M]));
          for (K = v(K, V), S = x; S < A; S++)
            C[S][M] = v(g(C[S][M], v(I[S], K)), N);
        }
        for (S = 0; S < A; S++) {
          for (K = 0, M = x; M < A; M++)
            K = o(K, v(F[S][M], I[M]));
          for (K = v(K, V), M = x; M < A; ++M)
            F[S][M] = c(g(F[S][M], v(K, h(I[M]))), N);
        }
      }
    }
    return {
      Q: y,
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
      for (var y = E[0][0].type === "Complex" ? p(0) : 0, F = 0; F < E.length; ++F)
        for (var b = 0; b < F && b < (E[0] || []).length; ++b)
          E[F][b] = y;
    return A;
  }
  function w(D) {
    throw new Error("qr not implemented for sparse matrices yet");
  }
});
function Ll(r, i, t, n) {
  for (var e = r._values, a = r._index, u = r._ptr, l = r._size, f = r._datatype, h = l[0], s = l[1], o = n && r._values ? [] : null, c = [], v = [], g = 0, p = 0; p < s; p++) {
    v[p] = g;
    for (var m = t ? t[p] : p, d = u[m], w = u[m + 1], D = d; D < w; D++) {
      var A = i ? i[a[D]] : a[D];
      c[g] = A, o && (o[g] = e[D]), g++;
    }
  }
  return v[s] = g, r.createSparseMatrix({
    values: o,
    index: c,
    ptr: v,
    size: [h, s],
    datatype: f
  });
}
function pa(r, i, t, n, e, a, u) {
  var l = 0;
  for (t[u] = r; l >= 0; ) {
    var f = t[u + l], h = t[n + f];
    h === -1 ? (l--, a[i++] = f) : (t[n + f] = t[e + h], ++l, t[u + l] = h);
  }
  return i;
}
function Ol(r, i) {
  if (!r)
    return null;
  var t = 0, n, e = [], a = [], u = 0, l = i, f = 2 * i;
  for (n = 0; n < i; n++)
    a[u + n] = -1;
  for (n = i - 1; n >= 0; n--)
    r[n] !== -1 && (a[l + n] = a[u + r[n]], a[u + r[n]] = n);
  for (n = 0; n < i; n++)
    r[n] === -1 && (t = pa(n, t, a, u, l, e, f));
  return e;
}
function $l(r, i) {
  if (!r)
    return null;
  var t = r._index, n = r._ptr, e = r._size, a = e[0], u = e[1], l = [], f = [], h = 0, s = u, o, c;
  if (i)
    for (o = 0; o < a; o++)
      f[s + o] = -1;
  for (var v = 0; v < u; v++) {
    l[v] = -1, f[h + v] = -1;
    for (var g = n[v], p = n[v + 1], m = g; m < p; m++) {
      var d = t[m];
      for (o = i ? f[s + d] : d; o !== -1 && o < v; o = c)
        c = f[h + o], f[h + o] = v, c === -1 && (l[o] = v);
      i && (f[s + d] = v);
    }
  }
  return l;
}
function ql(r, i, t) {
  for (var n = r._values, e = r._index, a = r._ptr, u = r._size, l = u[1], f = 0, h = 0; h < l; h++) {
    var s = a[h];
    for (a[h] = f; s < a[h + 1]; s++)
      i(e[s], h, n ? n[s] : 1, t) && (e[f] = e[s], n && (n[f] = n[s]), f++);
  }
  return a[l] = f, e.splice(f, e.length - f), n && n.splice(f, n.length - f), f;
}
function gr(r) {
  return -r - 2;
}
var Pl = "csAmd", Rl = ["add", "multiply", "transpose"], Ul = /* @__PURE__ */ ee(Pl, Rl, (r) => {
  var {
    add: i,
    multiply: t,
    transpose: n
  } = r;
  return function(s, o) {
    if (!o || s <= 0 || s > 3)
      return null;
    var c = o._size, v = c[0], g = c[1], p = 0, m = Math.max(16, 10 * Math.sqrt(g));
    m = Math.min(g - 2, m);
    var d = e(s, o, v, g, m);
    ql(d, f, null);
    for (var w = d._index, D = d._ptr, A = D[g], E = [], y = [], F = 0, b = g + 1, C = 2 * (g + 1), S = 3 * (g + 1), M = 4 * (g + 1), x = 5 * (g + 1), I = 6 * (g + 1), T = 7 * (g + 1), L = E, N = a(g, D, y, F, S, L, C, T, b, I, M, x), Z = u(g, D, y, x, M, I, m, b, S, L, C), $ = 0, z, V, K, P, q, G, ne, k, U, Q, X, J, oe, j, se, le; Z < g; ) {
      for (K = -1; $ < g && (K = y[S + $]) === -1; $++)
        ;
      y[C + K] !== -1 && (L[y[C + K]] = -1), y[S + $] = y[C + K];
      var me = y[M + K], ye = y[b + K];
      Z += ye;
      var Ae = 0;
      y[b + K] = -ye;
      var he = D[K], be = me === 0 ? he : A, Ee = be;
      for (P = 1; P <= me + 1; P++) {
        for (P > me ? (G = K, ne = he, k = y[F + K] - me) : (G = w[he++], ne = D[G], k = y[F + G]), q = 1; q <= k; q++)
          z = w[ne++], !((U = y[b + z]) <= 0) && (Ae += U, y[b + z] = -U, w[Ee++] = z, y[C + z] !== -1 && (L[y[C + z]] = L[z]), L[z] !== -1 ? y[C + L[z]] = y[C + z] : y[S + y[x + z]] = y[C + z]);
        G !== K && (D[G] = gr(K), y[I + G] = 0);
      }
      for (me !== 0 && (A = Ee), y[x + K] = Ae, D[K] = be, y[F + K] = Ee - be, y[M + K] = -2, N = l(N, p, y, I, g), Q = be; Q < Ee; Q++)
        if (z = w[Q], !((X = y[M + z]) <= 0)) {
          U = -y[b + z];
          var Se = N - U;
          for (he = D[z], J = D[z] + X - 1; he <= J; he++)
            G = w[he], y[I + G] >= N ? y[I + G] -= U : y[I + G] !== 0 && (y[I + G] = y[x + G] + Se);
        }
      for (Q = be; Q < Ee; Q++) {
        for (z = w[Q], J = D[z], oe = J + y[M + z] - 1, j = J, se = 0, le = 0, he = J; he <= oe; he++)
          if (G = w[he], y[I + G] !== 0) {
            var Ve = y[I + G] - N;
            Ve > 0 ? (le += Ve, w[j++] = G, se += G) : (D[G] = gr(K), y[I + G] = 0);
          }
        y[M + z] = j - J + 1;
        var B = j, _ = J + y[F + z];
        for (he = oe + 1; he < _; he++) {
          V = w[he];
          var O = y[b + V];
          O <= 0 || (le += O, w[j++] = V, se += V);
        }
        le === 0 ? (D[z] = gr(K), U = -y[b + z], Ae -= U, ye += U, Z += U, y[b + z] = 0, y[M + z] = -1) : (y[x + z] = Math.min(y[x + z], le), w[j] = w[B], w[B] = w[J], w[J] = K, y[F + z] = j - J + 1, se = (se < 0 ? -se : se) % g, y[C + z] = y[T + se], y[T + se] = z, L[z] = se);
      }
      for (y[x + K] = Ae, p = Math.max(p, Ae), N = l(N + p, p, y, I, g), Q = be; Q < Ee; Q++)
        if (z = w[Q], !(y[b + z] >= 0))
          for (se = L[z], z = y[T + se], y[T + se] = -1; z !== -1 && y[C + z] !== -1; z = y[C + z], N++) {
            for (k = y[F + z], X = y[M + z], he = D[z] + 1; he <= D[z] + k - 1; he++)
              y[I + w[he]] = N;
            var R = z;
            for (V = y[C + z]; V !== -1; ) {
              var H = y[F + V] === k && y[M + V] === X;
              for (he = D[V] + 1; H && he <= D[V] + k - 1; he++)
                y[I + w[he]] !== N && (H = 0);
              H ? (D[V] = gr(z), y[b + z] += y[b + V], y[b + V] = 0, y[M + V] = -1, V = y[C + V], y[C + R] = V) : (R = V, V = y[C + V]);
            }
          }
      for (he = be, Q = be; Q < Ee; Q++)
        z = w[Q], !((U = -y[b + z]) <= 0) && (y[b + z] = U, le = y[x + z] + Ae - U, le = Math.min(le, g - Z - U), y[S + le] !== -1 && (L[y[S + le]] = z), y[C + z] = y[S + le], L[z] = -1, y[S + le] = z, $ = Math.min($, le), y[x + z] = le, w[he++] = z);
      y[b + K] = ye, (y[F + K] = he - be) === 0 && (D[K] = -1, y[I + K] = 0), me !== 0 && (A = he);
    }
    for (z = 0; z < g; z++)
      D[z] = gr(D[z]);
    for (V = 0; V <= g; V++)
      y[S + V] = -1;
    for (V = g; V >= 0; V--)
      y[b + V] > 0 || (y[C + V] = y[S + D[V]], y[S + D[V]] = V);
    for (G = g; G >= 0; G--)
      y[b + G] <= 0 || D[G] !== -1 && (y[C + G] = y[S + D[G]], y[S + D[G]] = G);
    for (K = 0, z = 0; z <= g; z++)
      D[z] === -1 && (K = pa(z, K, y, S, C, E, I));
    return E.splice(E.length - 1, 1), E;
  };
  function e(h, s, o, c, v) {
    var g = n(s);
    if (h === 1 && c === o)
      return i(s, g);
    if (h === 2) {
      for (var p = g._index, m = g._ptr, d = 0, w = 0; w < o; w++) {
        var D = m[w];
        if (m[w] = d, !(m[w + 1] - D > v))
          for (var A = m[w + 1]; D < A; D++)
            p[d++] = p[D];
      }
      return m[o] = d, s = n(g), t(g, s);
    }
    return t(g, s);
  }
  function a(h, s, o, c, v, g, p, m, d, w, D, A) {
    for (var E = 0; E < h; E++)
      o[c + E] = s[E + 1] - s[E];
    o[c + h] = 0;
    for (var y = 0; y <= h; y++)
      o[v + y] = -1, g[y] = -1, o[p + y] = -1, o[m + y] = -1, o[d + y] = 1, o[w + y] = 1, o[D + y] = 0, o[A + y] = o[c + y];
    var F = l(0, 0, o, w, h);
    return o[D + h] = -2, s[h] = -1, o[w + h] = 0, F;
  }
  function u(h, s, o, c, v, g, p, m, d, w, D) {
    for (var A = 0, E = 0; E < h; E++) {
      var y = o[c + E];
      if (y === 0)
        o[v + E] = -2, A++, s[E] = -1, o[g + E] = 0;
      else if (y > p)
        o[m + E] = 0, o[v + E] = -1, A++, s[E] = gr(h), o[m + h]++;
      else {
        var F = o[d + y];
        F !== -1 && (w[F] = E), o[D + E] = o[d + y], o[d + y] = E;
      }
    }
    return A;
  }
  function l(h, s, o, c, v) {
    if (h < 2 || h + s < 0) {
      for (var g = 0; g < v; g++)
        o[c + g] !== 0 && (o[c + g] = 1);
      h = 2;
    }
    return h;
  }
  function f(h, s) {
    return h !== s;
  }
});
function Vl(r, i, t, n, e, a, u) {
  var l, f, h = 0, s;
  if (r <= i || t[n + i] <= t[e + r])
    return -1;
  t[e + r] = t[n + i];
  var o = t[a + r];
  if (t[a + r] = i, o === -1)
    h = 1, s = r;
  else {
    for (h = 2, s = o; s !== t[u + s]; s = t[u + s])
      ;
    for (l = o; l !== s; l = f)
      f = t[u + l], t[u + l] = s;
  }
  return {
    jleaf: h,
    q: s
  };
}
var Gl = "csCounts", Zl = ["transpose"], Yl = /* @__PURE__ */ ee(Gl, Zl, (r) => {
  var {
    transpose: i
  } = r;
  return function(t, n, e, a) {
    if (!t || !n || !e)
      return null;
    var u = t._size, l = u[0], f = u[1], h, s, o, c, v, g, p, m = 4 * f + (a ? f + l + 1 : 0), d = [], w = 0, D = f, A = 2 * f, E = 3 * f, y = 4 * f, F = 5 * f + 1;
    for (o = 0; o < m; o++)
      d[o] = -1;
    var b = [], C = i(t), S = C._index, M = C._ptr;
    for (o = 0; o < f; o++)
      for (s = e[o], b[s] = d[E + s] === -1 ? 1 : 0; s !== -1 && d[E + s] === -1; s = n[s])
        d[E + s] = o;
    if (a) {
      for (o = 0; o < f; o++)
        d[e[o]] = o;
      for (h = 0; h < l; h++) {
        for (o = f, g = M[h], p = M[h + 1], v = g; v < p; v++)
          o = Math.min(o, d[S[v]]);
        d[F + h] = d[y + o], d[y + o] = h;
      }
    }
    for (h = 0; h < f; h++)
      d[w + h] = h;
    for (o = 0; o < f; o++) {
      for (s = e[o], n[s] !== -1 && b[n[s]]--, c = a ? d[y + o] : s; c !== -1; c = a ? d[F + c] : -1)
        for (v = M[c]; v < M[c + 1]; v++) {
          h = S[v];
          var x = Vl(h, s, d, E, D, A, w);
          x.jleaf >= 1 && b[s]++, x.jleaf === 2 && b[x.q]--;
        }
      n[s] !== -1 && (d[w + s] = n[s]);
    }
    for (s = 0; s < f; s++)
      n[s] !== -1 && (b[n[s]] += b[s]);
    return b;
  };
}), Jl = "csSqr", Ql = ["add", "multiply", "transpose"], Xl = /* @__PURE__ */ ee(Jl, Ql, (r) => {
  var {
    add: i,
    multiply: t,
    transpose: n
  } = r, e = Ul({
    add: i,
    multiply: t,
    transpose: n
  }), a = Yl({
    transpose: n
  });
  return function(f, h, s) {
    var o = h._ptr, c = h._size, v = c[1], g, p = {};
    if (p.q = e(f, h), f && !p.q)
      return null;
    if (s) {
      var m = f ? Ll(h, null, p.q, 0) : h;
      p.parent = $l(m, 1);
      var d = Ol(p.parent, v);
      if (p.cp = a(m, p.parent, d, 1), m && p.parent && p.cp && u(m, p))
        for (p.unz = 0, g = 0; g < v; g++)
          p.unz += p.cp[g];
    } else
      p.unz = 4 * o[v] + v, p.lnz = p.unz;
    return p;
  };
  function u(l, f) {
    var h = l._ptr, s = l._index, o = l._size, c = o[0], v = o[1];
    f.pinv = [], f.leftmost = [];
    var g = f.parent, p = f.pinv, m = f.leftmost, d = [], w = 0, D = c, A = c + v, E = c + 2 * v, y, F, b, C, S;
    for (F = 0; F < v; F++)
      d[D + F] = -1, d[A + F] = -1, d[E + F] = 0;
    for (y = 0; y < c; y++)
      m[y] = -1;
    for (F = v - 1; F >= 0; F--)
      for (C = h[F], S = h[F + 1], b = C; b < S; b++)
        m[s[b]] = F;
    for (y = c - 1; y >= 0; y--)
      p[y] = -1, F = m[y], F !== -1 && (d[E + F]++ === 0 && (d[A + F] = y), d[w + y] = d[D + F], d[D + F] = y);
    for (f.lnz = 0, f.m2 = c, F = 0; F < v; F++)
      if (y = d[D + F], f.lnz++, y < 0 && (y = f.m2++), p[y] = F, !(--E[F] <= 0)) {
        f.lnz += d[E + F];
        var M = g[F];
        M !== -1 && (d[E + M] === 0 && (d[A + M] = d[A + F]), d[w + d[A + F]] = d[D + M], d[D + M] = d[w + y], d[E + M] += d[E + F]);
      }
    for (y = 0; y < c; y++)
      p[y] < 0 && (p[y] = F++);
    return !0;
  }
});
function Jt(r, i) {
  return r[i] < 0;
}
function da(r, i) {
  r[i] = gr(r[i]);
}
function ci(r) {
  return r < 0 ? gr(r) : r;
}
function Hl(r, i, t, n, e) {
  var a = i._index, u = i._ptr, l = i._size, f = l[1], h, s, o, c = 0;
  for (n[0] = r; c >= 0; ) {
    r = n[c];
    var v = e ? e[r] : r;
    Jt(u, r) || (da(u, r), n[f + c] = v < 0 ? 0 : ci(u[v]));
    var g = 1;
    for (s = n[f + c], o = v < 0 ? 0 : ci(u[v + 1]); s < o; s++)
      if (h = a[s], !Jt(u, h)) {
        n[f + c] = s, n[++c] = h, g = 0;
        break;
      }
    g && (c--, n[--t] = r);
  }
  return t;
}
function Kl(r, i, t, n, e) {
  var a = r._ptr, u = r._size, l = i._index, f = i._ptr, h = u[1], s, o, c, v = h;
  for (o = f[t], c = f[t + 1], s = o; s < c; s++) {
    var g = l[s];
    Jt(a, g) || (v = Hl(g, r, v, n, e));
  }
  for (s = v; s < h; s++)
    da(a, n[s]);
  return v;
}
var Wl = "csSpsolve", kl = ["divideScalar", "multiply", "subtract"], jl = /* @__PURE__ */ ee(Wl, kl, (r) => {
  var {
    divideScalar: i,
    multiply: t,
    subtract: n
  } = r;
  return function(a, u, l, f, h, s, o) {
    var c = a._values, v = a._index, g = a._ptr, p = a._size, m = p[1], d = u._values, w = u._index, D = u._ptr, A, E, y, F, b = Kl(a, u, l, f, s);
    for (A = b; A < m; A++)
      h[f[A]] = 0;
    for (E = D[l], y = D[l + 1], A = E; A < y; A++)
      h[w[A]] = d[A];
    for (var C = b; C < m; C++) {
      var S = f[C], M = s ? s[S] : S;
      if (!(M < 0))
        for (E = g[M], y = g[M + 1], h[S] = i(h[S], c[o ? E : y - 1]), A = o ? E + 1 : E, F = o ? y : y - 1; A < F; A++) {
          var x = v[A];
          h[x] = n(h[x], t(c[A], h[S]));
        }
    }
    return b;
  };
}), e0 = "csLu", r0 = ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"], t0 = /* @__PURE__ */ ee(e0, r0, (r) => {
  var {
    abs: i,
    divideScalar: t,
    multiply: n,
    subtract: e,
    larger: a,
    largerEq: u,
    SparseMatrix: l
  } = r, f = jl({
    divideScalar: t,
    multiply: n,
    subtract: e
  });
  return function(s, o, c) {
    if (!s)
      return null;
    var v = s._size, g = v[1], p, m = 100, d = 100;
    o && (p = o.q, m = o.lnz || m, d = o.unz || d);
    var w = [], D = [], A = [], E = new l({
      values: w,
      index: D,
      ptr: A,
      size: [g, g]
    }), y = [], F = [], b = [], C = new l({
      values: y,
      index: F,
      ptr: b,
      size: [g, g]
    }), S = [], M, x, I = [], T = [];
    for (M = 0; M < g; M++)
      I[M] = 0, S[M] = -1, A[M + 1] = 0;
    m = 0, d = 0;
    for (var L = 0; L < g; L++) {
      A[L] = m, b[L] = d;
      var N = p ? p[L] : L, Z = f(E, s, N, T, I, S, 1), $ = -1, z = -1;
      for (x = Z; x < g; x++)
        if (M = T[x], S[M] < 0) {
          var V = i(I[M]);
          a(V, z) && (z = V, $ = M);
        } else
          F[d] = S[M], y[d++] = I[M];
      if ($ === -1 || z <= 0)
        return null;
      S[N] < 0 && u(i(I[N]), n(z, c)) && ($ = N);
      var K = I[$];
      for (F[d] = L, y[d++] = K, S[$] = L, D[m] = $, w[m++] = 1, x = Z; x < g; x++)
        M = T[x], S[M] < 0 && (D[m] = M, w[m++] = t(I[M], K)), I[M] = 0;
    }
    for (A[g] = m, b[g] = d, x = 0; x < m; x++)
      D[x] = S[D[x]];
    return w.splice(m, w.length - m), D.splice(m, D.length - m), y.splice(d, y.length - d), F.splice(d, F.length - d), {
      L: E,
      U: C,
      pinv: S
    };
  };
}), li = "slu", n0 = ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"], i0 = /* @__PURE__ */ ee(li, n0, (r) => {
  var {
    typed: i,
    abs: t,
    add: n,
    multiply: e,
    transpose: a,
    divideScalar: u,
    subtract: l,
    larger: f,
    largerEq: h,
    SparseMatrix: s
  } = r, o = Xl({
    add: n,
    multiply: e,
    transpose: a
  }), c = t0({
    abs: t,
    divideScalar: u,
    multiply: e,
    subtract: l,
    larger: f,
    largerEq: h,
    SparseMatrix: s
  });
  return i(li, {
    "SparseMatrix, number, number": function(g, p, m) {
      if (!ze(p) || p < 0 || p > 3)
        throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
      if (m < 0 || m > 1)
        throw new Error("Partial pivoting threshold must be a number from 0 to 1");
      var d = o(p, g, !1), w = c(g, d, m);
      return {
        L: w.L,
        U: w.U,
        p: w.pinv,
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
function hi(r, i) {
  var t, n = i.length, e = [];
  if (r)
    for (t = 0; t < n; t++)
      e[r[t]] = i[t];
  else
    for (t = 0; t < n; t++)
      e[t] = i[t];
  return e;
}
var vi = "lusolve", a0 = ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"], u0 = /* @__PURE__ */ ee(vi, a0, (r) => {
  var {
    typed: i,
    matrix: t,
    lup: n,
    slu: e,
    usolve: a,
    lsolve: u,
    DenseMatrix: l
  } = r, f = Bt({
    DenseMatrix: l
  });
  return i(vi, {
    "Array, Array | Matrix": function(c, v) {
      c = t(c);
      var g = n(c), p = s(g.L, g.U, g.p, null, v);
      return p.valueOf();
    },
    "DenseMatrix, Array | Matrix": function(c, v) {
      var g = n(c);
      return s(g.L, g.U, g.p, null, v);
    },
    "SparseMatrix, Array | Matrix": function(c, v) {
      var g = n(c);
      return s(g.L, g.U, g.p, null, v);
    },
    "SparseMatrix, Array | Matrix, number, number": function(c, v, g, p) {
      var m = e(c, g, p);
      return s(m.L, m.U, m.p, m.q, v);
    },
    "Object, Array | Matrix": function(c, v) {
      return s(c.L, c.U, c.p, c.q, v);
    }
  });
  function h(o) {
    if (_e(o))
      return o;
    if (Me(o))
      return t(o);
    throw new TypeError("Invalid Matrix LU decomposition");
  }
  function s(o, c, v, g, p) {
    o = h(o), c = h(c), v && (p = f(o, p, !0), p._data = hi(v, p._data));
    var m = u(o, p), d = a(c, m);
    return g && (d._data = hi(g, d._data)), d;
  }
}), pi = "det", o0 = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"], s0 = /* @__PURE__ */ ee(pi, o0, (r) => {
  var {
    typed: i,
    matrix: t,
    subtractScalar: n,
    multiply: e,
    divideScalar: a,
    isZero: u,
    unaryMinus: l
  } = r;
  return i(pi, {
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
          var c = o[0], v = o[1];
          if (c === v)
            return f(s.clone().valueOf(), c);
          if (v === 0)
            return 1;
          throw new RangeError("Matrix must be square (size: " + Le(o) + ")");
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + Le(o) + ")");
      }
    }
  });
  function f(h, s, o) {
    if (s === 1)
      return Fe(h[0][0]);
    if (s === 2)
      return n(e(h[0][0], h[1][1]), e(h[1][0], h[0][1]));
    for (var c = !1, v = new Array(s).fill(0).map((F, b) => b), g = 0; g < s; g++) {
      var p = v[g];
      if (u(h[p][g])) {
        var m = void 0;
        for (m = g + 1; m < s; m++)
          if (!u(h[v[m]][g])) {
            p = v[m], v[m] = v[g], v[g] = p, c = !c;
            break;
          }
        if (m === s)
          return h[p][g];
      }
      for (var d = h[p][g], w = g === 0 ? 1 : h[v[g - 1]][g - 1], D = g + 1; D < s; D++)
        for (var A = v[D], E = g + 1; E < s; E++)
          h[A][E] = a(n(e(h[A][E], d), e(h[A][g], h[p][E])), w);
    }
    var y = h[v[s - 1]][s - 1];
    return c ? l(y) : y;
  }
}), di = "inv", f0 = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], c0 = /* @__PURE__ */ ee(di, f0, (r) => {
  var {
    typed: i,
    matrix: t,
    divideScalar: n,
    addScalar: e,
    multiply: a,
    unaryMinus: u,
    det: l,
    identity: f,
    abs: h
  } = r;
  return i(di, {
    "Array | Matrix": function(c) {
      var v = _e(c) ? c.size() : qe(c);
      switch (v.length) {
        case 1:
          if (v[0] === 1)
            return _e(c) ? t([n(1, c.valueOf()[0])]) : [n(1, c[0])];
          throw new RangeError("Matrix must be square (size: " + Le(v) + ")");
        case 2: {
          var g = v[0], p = v[1];
          if (g === p)
            return _e(c) ? t(s(c.valueOf(), g, p), c.storage()) : s(c, g, p);
          throw new RangeError("Matrix must be square (size: " + Le(v) + ")");
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + Le(v) + ")");
      }
    },
    any: function(c) {
      return n(1, c);
    }
  });
  function s(o, c, v) {
    var g, p, m, d, w;
    if (c === 1) {
      if (d = o[0][0], d === 0)
        throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(1, d)]];
    } else if (c === 2) {
      var D = l(o);
      if (D === 0)
        throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(o[1][1], D), n(u(o[0][1]), D)], [n(u(o[1][0]), D), n(o[0][0], D)]];
    } else {
      var A = o.concat();
      for (g = 0; g < c; g++)
        A[g] = A[g].concat();
      for (var E = f(c).valueOf(), y = 0; y < v; y++) {
        var F = h(A[y][y]), b = y;
        for (g = y + 1; g < c; )
          h(A[g][y]) > F && (F = h(A[g][y]), b = g), g++;
        if (F === 0)
          throw Error("Cannot calculate inverse, determinant is zero");
        g = b, g !== y && (w = A[y], A[y] = A[g], A[g] = w, w = E[y], E[y] = E[g], E[g] = w);
        var C = A[y], S = E[y];
        for (g = 0; g < c; g++) {
          var M = A[g], x = E[g];
          if (g !== y) {
            if (M[y] !== 0) {
              for (m = n(u(M[y]), C[y]), p = y; p < v; p++)
                M[p] = e(M[p], a(m, C[p]));
              for (p = 0; p < v; p++)
                x[p] = e(x[p], a(m, S[p]));
            }
          } else {
            for (m = C[y], p = y; p < v; p++)
              M[p] = n(M[p], m);
            for (p = 0; p < v; p++)
              x[p] = n(x[p], m);
          }
        }
      }
      return E;
    }
  }
});
function l0(r) {
  var {
    addScalar: i,
    subtract: t,
    flatten: n,
    multiply: e,
    multiplyScalar: a,
    divideScalar: u,
    sqrt: l,
    abs: f,
    bignumber: h,
    diag: s,
    size: o,
    reshape: c,
    inv: v,
    qr: g,
    usolve: p,
    usolveAll: m,
    equal: d,
    complex: w,
    larger: D,
    smaller: A,
    matrixFromColumns: E,
    dot: y
  } = r;
  function F(P, q, G, ne) {
    var k = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, U = b(P, q, G, ne, k);
    C(P, q, G, ne, k, U);
    var {
      values: Q,
      C: X
    } = S(P, q, G, ne, k);
    if (k) {
      var J = M(P, q, X, U, Q, G, ne);
      return {
        values: Q,
        eigenvectors: J
      };
    }
    return {
      values: Q
    };
  }
  function b(P, q, G, ne, k) {
    var U = ne === "BigNumber", Q = ne === "Complex", X = U ? h(0) : 0, J = U ? h(1) : Q ? w(1) : 1, oe = U ? h(1) : 1, j = U ? h(10) : 2, se = a(j, j), le;
    k && (le = Array(q).fill(J));
    for (var me = !1; !me; ) {
      me = !0;
      for (var ye = 0; ye < q; ye++) {
        for (var Ae = X, he = X, be = 0; be < q; be++)
          ye !== be && (Ae = i(Ae, f(P[be][ye])), he = i(he, f(P[ye][be])));
        if (!d(Ae, 0) && !d(he, 0)) {
          for (var Ee = oe, Se = Ae, Ve = u(he, j), B = a(he, j); A(Se, Ve); )
            Se = a(Se, se), Ee = a(Ee, j);
          for (; D(Se, B); )
            Se = u(Se, se), Ee = u(Ee, j);
          var _ = A(u(i(Se, he), Ee), a(i(Ae, he), 0.95));
          if (_) {
            me = !1;
            for (var O = u(1, Ee), R = 0; R < q; R++)
              ye !== R && (P[ye][R] = a(P[ye][R], O), P[R][ye] = a(P[R][ye], Ee));
            k && (le[ye] = a(le[ye], O));
          }
        }
      }
    }
    return k ? s(le) : null;
  }
  function C(P, q, G, ne, k, U) {
    var Q = ne === "BigNumber", X = ne === "Complex", J = Q ? h(0) : X ? w(0) : 0;
    Q && (G = h(G));
    for (var oe = 0; oe < q - 2; oe++) {
      for (var j = 0, se = J, le = oe + 1; le < q; le++) {
        var me = P[le][oe];
        A(f(se), f(me)) && (se = me, j = le);
      }
      if (!A(f(se), G)) {
        if (j !== oe + 1) {
          var ye = P[j];
          P[j] = P[oe + 1], P[oe + 1] = ye;
          for (var Ae = 0; Ae < q; Ae++) {
            var he = P[Ae][j];
            P[Ae][j] = P[Ae][oe + 1], P[Ae][oe + 1] = he;
          }
          if (k) {
            var be = U[j];
            U[j] = U[oe + 1], U[oe + 1] = be;
          }
        }
        for (var Ee = oe + 2; Ee < q; Ee++) {
          var Se = u(P[Ee][oe], se);
          if (Se !== 0) {
            for (var Ve = 0; Ve < q; Ve++)
              P[Ee][Ve] = t(P[Ee][Ve], a(Se, P[oe + 1][Ve]));
            for (var B = 0; B < q; B++)
              P[B][oe + 1] = i(P[B][oe + 1], a(Se, P[B][Ee]));
            if (k)
              for (var _ = 0; _ < q; _++)
                U[Ee][_] = t(U[Ee][_], a(Se, U[oe + 1][_]));
          }
        }
      }
    }
    return U;
  }
  function S(P, q, G, ne, k) {
    var U = ne === "BigNumber", Q = ne === "Complex", X = U ? h(1) : Q ? w(1) : 1;
    U && (G = h(G));
    for (var J = Fe(P), oe = [], j = q, se = [], le = k ? s(Array(q).fill(X)) : void 0, me = k ? s(Array(j).fill(X)) : void 0, ye = 0; ye <= 100; ) {
      ye += 1;
      for (var Ae = J[j - 1][j - 1], he = 0; he < j; he++)
        J[he][he] = t(J[he][he], Ae);
      var {
        Q: be,
        R: Ee
      } = g(J);
      J = e(Ee, be);
      for (var Se = 0; Se < j; Se++)
        J[Se][Se] = i(J[Se][Se], Ae);
      if (k && (me = e(me, be)), j === 1 || A(f(J[j - 1][j - 2]), G)) {
        ye = 0, oe.push(J[j - 1][j - 1]), k && (se.unshift([[1]]), T(me, q), le = e(le, me), j > 1 && (me = s(Array(j - 1).fill(X)))), j -= 1, J.pop();
        for (var Ve = 0; Ve < j; Ve++)
          J[Ve].pop();
      } else if (j === 2 || A(f(J[j - 2][j - 3]), G)) {
        ye = 0;
        var B = x(J[j - 2][j - 2], J[j - 2][j - 1], J[j - 1][j - 2], J[j - 1][j - 1]);
        oe.push(...B), k && (se.unshift(I(J[j - 2][j - 2], J[j - 2][j - 1], J[j - 1][j - 2], J[j - 1][j - 1], B[0], B[1], G, ne)), T(me, q), le = e(le, me), j > 2 && (me = s(Array(j - 2).fill(X)))), j -= 2, J.pop(), J.pop();
        for (var _ = 0; _ < j; _++)
          J[_].pop(), J[_].pop();
      }
      if (j === 0)
        break;
    }
    if (oe.sort((H, Y) => +t(f(H), f(Y))), ye > 100) {
      var O = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + oe.join(", "));
      throw O.values = oe, O.vectors = [], O;
    }
    var R = k ? e(le, L(se, q)) : void 0;
    return {
      values: oe,
      C: R
    };
  }
  function M(P, q, G, ne, k, U, Q) {
    var X = v(G), J = e(X, P, G), oe = Q === "BigNumber", j = Q === "Complex", se = oe ? h(0) : j ? w(0) : 0, le = oe ? h(1) : j ? w(1) : 1, me = [], ye = [];
    for (var Ae of k) {
      var he = N(me, Ae, d);
      he === -1 ? (me.push(Ae), ye.push(1)) : ye[he] += 1;
    }
    for (var be = [], Ee = me.length, Se = Array(q).fill(se), Ve = s(Array(q).fill(le)), B = function() {
      var R = me[_], H = t(J, e(R, Ve)), Y = m(H, Se);
      for (Y.shift(); Y.length < ye[_]; ) {
        var ue = Z(H, q, Y, U, Q);
        if (ue === null)
          break;
        Y.push(ue);
      }
      var te = e(v(ne), G);
      Y = Y.map((ae) => e(te, ae)), be.push(...Y.map((ae) => ({
        value: R,
        vector: n(ae)
      })));
    }, _ = 0; _ < Ee; _++)
      B();
    return be;
  }
  function x(P, q, G, ne) {
    var k = i(P, ne), U = t(a(P, ne), a(q, G)), Q = a(k, 0.5), X = a(l(t(a(k, k), a(4, U))), 0.5);
    return [i(Q, X), t(Q, X)];
  }
  function I(P, q, G, ne, k, U, Q, X) {
    var J = X === "BigNumber", oe = X === "Complex", j = J ? h(0) : oe ? w(0) : 0, se = J ? h(1) : oe ? w(1) : 1;
    if (A(f(G), Q))
      return [[se, j], [j, se]];
    if (D(f(t(k, U)), Q))
      return [[t(k, ne), t(U, ne)], [G, G]];
    var le = t(P, k), me = t(ne, k);
    return A(f(q), Q) && A(f(me), Q) ? [[le, se], [G, j]] : [[q, j], [me, se]];
  }
  function T(P, q) {
    for (var G = 0; G < P.length; G++)
      P[G].push(...Array(q - P[G].length).fill(0));
    for (var ne = P.length; ne < q; ne++)
      P.push(Array(q).fill(0)), P[ne][ne] = 1;
    return P;
  }
  function L(P, q) {
    for (var G = [], ne = 0; ne < q; ne++)
      G[ne] = Array(q).fill(0);
    var k = 0;
    for (var U of P) {
      for (var Q = U.length, X = 0; X < Q; X++)
        for (var J = 0; J < Q; J++)
          G[k + X][k + J] = U[X][J];
      k += Q;
    }
    return G;
  }
  function N(P, q, G) {
    for (var ne = 0; ne < P.length; ne++)
      if (G(P[ne], q))
        return ne;
    return -1;
  }
  function Z(P, q, G, ne, k) {
    for (var U = k === "BigNumber" ? h(1e3) : 1e3, Q, X = 0; X < 5; ++X) {
      Q = $(q, G, k);
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
  function $(P, q, G) {
    var ne = G === "BigNumber", k = G === "Complex", U = Array(P).fill(0).map((Q) => 2 * Math.random() - 1);
    return ne && (U = U.map((Q) => h(Q))), k && (U = U.map((Q) => w(Q))), U = z(U, q), K(U, G);
  }
  function z(P, q) {
    var G = o(P);
    for (var ne of q)
      ne = c(ne, G), P = t(P, e(u(y(ne, P), y(ne, ne)), ne));
    return P;
  }
  function V(P) {
    return f(l(y(P, P)));
  }
  function K(P, q) {
    var G = q === "BigNumber", ne = q === "Complex", k = G ? h(1) : ne ? w(1) : 1;
    return e(u(k, V(P)), P);
  }
  return F;
}
function h0(r) {
  var {
    config: i,
    addScalar: t,
    subtract: n,
    abs: e,
    atan: a,
    cos: u,
    sin: l,
    multiplyScalar: f,
    inv: h,
    bignumber: s,
    multiply: o,
    add: c
  } = r;
  function v(C, S) {
    var M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.epsilon, x = arguments.length > 3 ? arguments[3] : void 0, I = arguments.length > 4 ? arguments[4] : void 0;
    if (x === "number")
      return g(C, M, I);
    if (x === "BigNumber")
      return p(C, M, I);
    throw TypeError("Unsupported data type: " + x);
  }
  function g(C, S, M) {
    var x = C.length, I = Math.abs(S / x), T, L;
    if (M) {
      L = new Array(x);
      for (var N = 0; N < x; N++)
        L[N] = Array(x).fill(0), L[N][N] = 1;
    }
    for (var Z = y(C); Math.abs(Z[1]) >= Math.abs(I); ) {
      var $ = Z[0][0], z = Z[0][1];
      T = m(C[$][$], C[z][z], C[$][z]), C = E(C, T, $, z), M && (L = w(L, T, $, z)), Z = y(C);
    }
    for (var V = Array(x).fill(0), K = 0; K < x; K++)
      V[K] = C[K][K];
    return b(Fe(V), L, M);
  }
  function p(C, S, M) {
    var x = C.length, I = e(S / x), T, L;
    if (M) {
      L = new Array(x);
      for (var N = 0; N < x; N++)
        L[N] = Array(x).fill(0), L[N][N] = 1;
    }
    for (var Z = F(C); e(Z[1]) >= e(I); ) {
      var $ = Z[0][0], z = Z[0][1];
      T = d(C[$][$], C[z][z], C[$][z]), C = A(C, T, $, z), M && (L = D(L, T, $, z)), Z = F(C);
    }
    for (var V = Array(x).fill(0), K = 0; K < x; K++)
      V[K] = C[K][K];
    return b(Fe(V), L, M);
  }
  function m(C, S, M) {
    var x = S - C;
    return Math.abs(x) <= i.epsilon ? Math.PI / 4 : 0.5 * Math.atan(2 * M / (S - C));
  }
  function d(C, S, M) {
    var x = n(S, C);
    return e(x) <= i.epsilon ? s(-1).acos().div(4) : f(0.5, a(o(2, M, h(x))));
  }
  function w(C, S, M, x) {
    for (var I = C.length, T = Math.cos(S), L = Math.sin(S), N = Array(I).fill(0), Z = Array(I).fill(0), $ = 0; $ < I; $++)
      N[$] = T * C[$][M] - L * C[$][x], Z[$] = L * C[$][M] + T * C[$][x];
    for (var z = 0; z < I; z++)
      C[z][M] = N[z], C[z][x] = Z[z];
    return C;
  }
  function D(C, S, M, x) {
    for (var I = C.length, T = u(S), L = l(S), N = Array(I).fill(s(0)), Z = Array(I).fill(s(0)), $ = 0; $ < I; $++)
      N[$] = n(f(T, C[$][M]), f(L, C[$][x])), Z[$] = t(f(L, C[$][M]), f(T, C[$][x]));
    for (var z = 0; z < I; z++)
      C[z][M] = N[z], C[z][x] = Z[z];
    return C;
  }
  function A(C, S, M, x) {
    for (var I = C.length, T = s(u(S)), L = s(l(S)), N = f(T, T), Z = f(L, L), $ = Array(I).fill(s(0)), z = Array(I).fill(s(0)), V = o(s(2), T, L, C[M][x]), K = t(n(f(N, C[M][M]), V), f(Z, C[x][x])), P = c(f(Z, C[M][M]), V, f(N, C[x][x])), q = 0; q < I; q++)
      $[q] = n(f(T, C[M][q]), f(L, C[x][q])), z[q] = t(f(L, C[M][q]), f(T, C[x][q]));
    C[M][M] = K, C[x][x] = P, C[M][x] = s(0), C[x][M] = s(0);
    for (var G = 0; G < I; G++)
      G !== M && G !== x && (C[M][G] = $[G], C[G][M] = $[G], C[x][G] = z[G], C[G][x] = z[G]);
    return C;
  }
  function E(C, S, M, x) {
    for (var I = C.length, T = Math.cos(S), L = Math.sin(S), N = T * T, Z = L * L, $ = Array(I).fill(0), z = Array(I).fill(0), V = N * C[M][M] - 2 * T * L * C[M][x] + Z * C[x][x], K = Z * C[M][M] + 2 * T * L * C[M][x] + N * C[x][x], P = 0; P < I; P++)
      $[P] = T * C[M][P] - L * C[x][P], z[P] = L * C[M][P] + T * C[x][P];
    C[M][M] = V, C[x][x] = K, C[M][x] = 0, C[x][M] = 0;
    for (var q = 0; q < I; q++)
      q !== M && q !== x && (C[M][q] = $[q], C[q][M] = $[q], C[x][q] = z[q], C[q][x] = z[q]);
    return C;
  }
  function y(C) {
    for (var S = C.length, M = 0, x = [0, 1], I = 0; I < S; I++)
      for (var T = I + 1; T < S; T++)
        Math.abs(M) < Math.abs(C[I][T]) && (M = Math.abs(C[I][T]), x = [I, T]);
    return [x, M];
  }
  function F(C) {
    for (var S = C.length, M = 0, x = [0, 1], I = 0; I < S; I++)
      for (var T = I + 1; T < S; T++)
        e(M) < e(C[I][T]) && (M = e(C[I][T]), x = [I, T]);
    return [x, M];
  }
  function b(C, S, M) {
    var x = C.length, I = Array(x), T;
    if (M) {
      T = Array(x);
      for (var L = 0; L < x; L++)
        T[L] = Array(x);
    }
    for (var N = 0; N < x; N++) {
      for (var Z = 0, $ = C[0], z = 0; z < C.length; z++)
        e(C[z]) < e($) && (Z = z, $ = C[Z]);
      if (I[N] = C.splice(Z, 1)[0], M)
        for (var V = 0; V < x; V++)
          T[N][V] = S[V][Z], S[V].splice(Z, 1);
    }
    if (!M)
      return {
        values: I
      };
    var K = T.map((P, q) => ({
      value: I[q],
      vector: P
    }));
    return {
      values: I,
      eigenvectors: K
    };
  }
  return v;
}
var v0 = "eigs", p0 = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], d0 = /* @__PURE__ */ ee(v0, p0, (r) => {
  var {
    config: i,
    typed: t,
    matrix: n,
    addScalar: e,
    subtract: a,
    equal: u,
    abs: l,
    atan: f,
    cos: h,
    sin: s,
    multiplyScalar: o,
    divideScalar: c,
    inv: v,
    bignumber: g,
    multiply: p,
    add: m,
    larger: d,
    column: w,
    flatten: D,
    number: A,
    complex: E,
    sqrt: y,
    diag: F,
    size: b,
    reshape: C,
    qr: S,
    usolve: M,
    usolveAll: x,
    im: I,
    re: T,
    smaller: L,
    matrixFromColumns: N,
    dot: Z
  } = r, $ = h0({
    config: i,
    addScalar: e,
    subtract: a,
    column: w,
    flatten: D,
    equal: u,
    abs: l,
    atan: f,
    cos: h,
    sin: s,
    multiplyScalar: o,
    inv: v,
    bignumber: g,
    complex: E,
    multiply: p,
    add: m
  }), z = l0({
    config: i,
    addScalar: e,
    subtract: a,
    multiply: p,
    multiplyScalar: o,
    flatten: D,
    divideScalar: c,
    sqrt: y,
    abs: l,
    bignumber: g,
    diag: F,
    size: b,
    reshape: C,
    qr: S,
    inv: v,
    usolve: M,
    usolveAll: x,
    equal: u,
    complex: E,
    larger: d,
    smaller: L,
    matrixFromColumns: N,
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
      return Ir(X, Q), V(U, X);
    }
  });
  function V(k) {
    var U, Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = "eigenvectors" in Q ? Q.eigenvectors : !0, J = (U = Q.precision) !== null && U !== void 0 ? U : i.epsilon, oe = K(k, J, X);
    return Q.matricize && (oe.values = n(oe.values), X && (oe.eigenvectors = oe.eigenvectors.map((j) => {
      var {
        value: se,
        vector: le
      } = j;
      return {
        value: se,
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
    if (q(X, oe, U) && (G(X, oe), P(X, oe, U))) {
      var j = ne(k, X, oe);
      return $(X, oe, U, j, Q);
    }
    var se = ne(k, X, oe);
    return z(X, oe, U, se, Q);
  }
  function P(k, U, Q) {
    for (var X = 0; X < U; X++)
      for (var J = X; J < U; J++)
        if (d(g(l(a(k[X][J], k[J][X]))), Q))
          return !1;
    return !0;
  }
  function q(k, U, Q) {
    for (var X = 0; X < U; X++)
      for (var J = 0; J < U; J++)
        if (d(g(l(I(k[X][J]))), Q))
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
    for (var J = !1, oe = !1, j = !1, se = 0; se < Q; se++)
      for (var le = 0; le < Q; le++) {
        var me = U[se][le];
        if ($e(me) || Ht(me))
          J = !0;
        else if (Re(me))
          oe = !0;
        else if (Xt(me))
          j = !0;
        else
          throw TypeError("Unsupported type in Matrix: " + lr(me));
      }
    if (oe && j && console.warn("Complex BigNumbers not supported, this operation will lose precission."), j) {
      for (var ye = 0; ye < Q; ye++)
        for (var Ae = 0; Ae < Q; Ae++)
          U[ye][Ae] = E(U[ye][Ae]);
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
}), Wr = /* @__PURE__ */ ns({
  config: je
}), Nt = /* @__PURE__ */ os({}), en = /* @__PURE__ */ ls({}), rn = /* @__PURE__ */ ps({}), Je = /* @__PURE__ */ gs({
  Matrix: rn
}), ce = /* @__PURE__ */ ao({
  BigNumber: Wr,
  Complex: Nt,
  DenseMatrix: Je,
  Fraction: en
}), kr = /* @__PURE__ */ js({
  typed: ce
}), Er = /* @__PURE__ */ rf({
  typed: ce
}), m0 = /* @__PURE__ */ Dl({
  typed: ce
}), tn = /* @__PURE__ */ Ps({
  BigNumber: Wr,
  typed: ce
}), nn = /* @__PURE__ */ Vs({
  Complex: Nt,
  typed: ce
}), _t = /* @__PURE__ */ Qf({
  typed: ce
}), g0 = /* @__PURE__ */ wl({
  typed: ce
}), cr = /* @__PURE__ */ xs({
  config: je,
  typed: ce
}), D0 = /* @__PURE__ */ oc({
  typed: ce
}), y0 = /* @__PURE__ */ Hf({
  typed: ce
}), ma = /* @__PURE__ */ ys({
  typed: ce
}), w0 = /* @__PURE__ */ As({
  typed: ce
}), ga = /* @__PURE__ */ Cs({
  typed: ce
}), Cr = /* @__PURE__ */ If({
  typed: ce
}), an = /* @__PURE__ */ Os({
  typed: ce
}), A0 = /* @__PURE__ */ Wf({
  typed: ce
}), E0 = /* @__PURE__ */ qf({
  BigNumber: Wr,
  Fraction: en,
  complex: nn,
  typed: ce
}), C0 = /* @__PURE__ */ El({
  typed: ce
}), Ur = /* @__PURE__ */ _s({
  Matrix: rn,
  equalScalar: cr,
  typed: ce
}), Sr = /* @__PURE__ */ nf({
  typed: ce
}), F0 = /* @__PURE__ */ bs({
  typed: ce
}), un = /* @__PURE__ */ Uf({
  Complex: Nt,
  config: je,
  typed: ce
}), jr = /* @__PURE__ */ Ws({
  typed: ce
}), Da = /* @__PURE__ */ Ys({
  Fraction: en,
  typed: ce
}), we = /* @__PURE__ */ Qs({
  DenseMatrix: Je,
  Matrix: rn,
  SparseMatrix: Ur,
  typed: ce
}), b0 = /* @__PURE__ */ zc({
  bignumber: tn,
  fraction: Da,
  number: an
}), M0 = /* @__PURE__ */ pc({
  isInteger: ma,
  matrix: we,
  typed: ce
}), et = /* @__PURE__ */ mc({
  matrix: we,
  config: je,
  typed: ce
}), Fr = /* @__PURE__ */ Dc({
  matrix: we,
  typed: ce
}), Oe = /* @__PURE__ */ bc({
  matrix: we,
  typed: ce
}), He = /* @__PURE__ */ Bc({
  BigNumber: Wr,
  config: je,
  matrix: we,
  typed: ce
}), xr = /* @__PURE__ */ jf({
  isInteger: ma,
  matrix: we,
  typed: ce
}), S0 = /* @__PURE__ */ Sc({
  conj: _t,
  transpose: Oe,
  typed: ce
}), x0 = /* @__PURE__ */ nc({
  DenseMatrix: Je,
  SparseMatrix: Ur,
  matrix: we,
  typed: ce
}), dr = /* @__PURE__ */ Ic({
  numeric: b0,
  typed: ce
}), ya = /* @__PURE__ */ Zc({
  DenseMatrix: Je,
  concat: xr,
  equalScalar: cr,
  matrix: we,
  typed: ce
}), wa = /* @__PURE__ */ ac({
  matrix: we,
  typed: ce
}), rt = /* @__PURE__ */ fc({
  BigNumber: Wr,
  DenseMatrix: Je,
  SparseMatrix: Ur,
  config: je,
  matrix: we,
  typed: ce
}), Aa = /* @__PURE__ */ tl({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: we,
  typed: ce
}), B0 = /* @__PURE__ */ qc({
  DenseMatrix: Je,
  divideScalar: dr,
  equalScalar: cr,
  matrix: we,
  multiplyScalar: Cr,
  subtractScalar: Sr,
  typed: ce
}), N0 = /* @__PURE__ */ Hs({
  flatten: wa,
  matrix: we,
  size: et,
  typed: ce
}), _0 = /* @__PURE__ */ Il({
  addScalar: Er,
  complex: nn,
  conj: _t,
  divideScalar: dr,
  equal: ya,
  identity: rt,
  isZero: ga,
  matrix: we,
  multiplyScalar: Cr,
  sign: E0,
  sqrt: un,
  subtractScalar: Sr,
  typed: ce,
  unaryMinus: jr,
  zeros: He
}), tt = /* @__PURE__ */ Qc({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: we,
  typed: ce
}), tr = /* @__PURE__ */ Gf({
  DenseMatrix: Je,
  concat: xr,
  equalScalar: cr,
  matrix: we,
  subtractScalar: Sr,
  typed: ce,
  unaryMinus: jr
}), Ea = /* @__PURE__ */ Rc({
  DenseMatrix: Je,
  divideScalar: dr,
  equalScalar: cr,
  matrix: we,
  multiplyScalar: Cr,
  subtractScalar: Sr,
  typed: ce
}), ar = /* @__PURE__ */ Fl({
  DenseMatrix: Je,
  SparseMatrix: Ur,
  addScalar: Er,
  concat: xr,
  equalScalar: cr,
  matrix: we,
  typed: ce
}), Ca = /* @__PURE__ */ xl({
  addScalar: Er,
  conj: _t,
  multiplyScalar: Cr,
  size: et,
  typed: ce
}), z0 = /* @__PURE__ */ ul({
  DenseMatrix: Je,
  smaller: tt
}), Fa = /* @__PURE__ */ fl({
  ImmutableDenseMatrix: z0,
  getMatrixDataType: D0
}), Vr = /* @__PURE__ */ jc({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: we,
  typed: ce
}), ie = /* @__PURE__ */ Of({
  addScalar: Er,
  dot: Ca,
  equalScalar: cr,
  matrix: we,
  multiplyScalar: Cr,
  typed: ce
}), T0 = /* @__PURE__ */ i0({
  SparseMatrix: Ur,
  abs: kr,
  add: ar,
  divideScalar: dr,
  larger: Vr,
  largerEq: Aa,
  multiply: ie,
  subtract: tr,
  transpose: Oe,
  typed: ce
}), De = /* @__PURE__ */ wc({
  add: ar,
  matrix: we,
  typed: ce,
  zeros: He
}), I0 = /* @__PURE__ */ Vc({
  DenseMatrix: Je,
  divideScalar: dr,
  equalScalar: cr,
  matrix: we,
  multiplyScalar: Cr,
  subtractScalar: Sr,
  typed: ce
}), L0 = /* @__PURE__ */ s0({
  divideScalar: dr,
  isZero: ga,
  matrix: we,
  multiply: ie,
  subtractScalar: Sr,
  typed: ce,
  unaryMinus: jr
}), O0 = /* @__PURE__ */ hl({
  larger: Vr,
  smaller: tt
}), ve = /* @__PURE__ */ Nl({
  Index: Fa,
  typed: ce
}), $0 = /* @__PURE__ */ Kc({
  DenseMatrix: Je,
  concat: xr,
  config: je,
  matrix: we,
  typed: ce
}), Tr = /* @__PURE__ */ hc({
  bignumber: tn,
  matrix: we,
  add: ar,
  config: je,
  isPositive: w0,
  larger: Vr,
  largerEq: Aa,
  smaller: tt,
  smallerEq: $0,
  typed: ce
}), q0 = /* @__PURE__ */ dl({
  FibonacciHeap: O0,
  addScalar: Er,
  equalScalar: cr
}), P0 = /* @__PURE__ */ rc({
  Index: Fa,
  matrix: we,
  range: Tr,
  typed: ce
}), rr = /* @__PURE__ */ c0({
  abs: kr,
  addScalar: Er,
  det: L0,
  divideScalar: dr,
  identity: rt,
  matrix: we,
  multiply: ie,
  typed: ce,
  unaryMinus: jr
}), R0 = /* @__PURE__ */ zl({
  DenseMatrix: Je,
  Spa: q0,
  SparseMatrix: Ur,
  abs: kr,
  addScalar: Er,
  divideScalar: dr,
  equalScalar: cr,
  larger: Vr,
  matrix: we,
  multiplyScalar: Cr,
  subtractScalar: Sr,
  typed: ce,
  unaryMinus: jr
}), U0 = /* @__PURE__ */ Oc({
  Complex: Nt,
  config: je,
  fraction: Da,
  identity: rt,
  inv: rr,
  matrix: we,
  multiply: ie,
  number: an,
  typed: ce
}), V0 = /* @__PURE__ */ u0({
  DenseMatrix: Je,
  lsolve: B0,
  lup: R0,
  matrix: we,
  slu: T0,
  typed: ce,
  usolve: Ea
}), G0 = /* @__PURE__ */ d0({
  abs: kr,
  add: ar,
  addScalar: Er,
  atan: m0,
  bignumber: tn,
  column: P0,
  complex: nn,
  config: je,
  cos: g0,
  diag: x0,
  divideScalar: dr,
  dot: Ca,
  equal: ya,
  flatten: wa,
  im: y0,
  inv: rr,
  larger: Vr,
  matrix: we,
  matrixFromColumns: N0,
  multiply: ie,
  multiplyScalar: Cr,
  number: an,
  qr: _0,
  re: A0,
  reshape: M0,
  sin: C0,
  size: et,
  smaller: tt,
  sqrt: un,
  subtract: tr,
  typed: ce,
  usolve: Ea,
  usolveAll: I0
}), mi = /* @__PURE__ */ Ml({
  abs: kr,
  add: ar,
  conj: _t,
  ctranspose: S0,
  eigs: G0,
  equalScalar: cr,
  larger: Vr,
  matrix: we,
  multiply: ie,
  pow: U0,
  smaller: tt,
  sqrt: un,
  typed: ce
});
class Z0 {
  /**
   * Node constructor
   * @param label number
   * @param coords coordinates
   * @param bcs boundary conditions {code:string]:boolean}
   */
  constructor(i, t, n = [0, 0, 0], e = []) {
    fe(this, "label");
    // Node number
    fe(this, "domain");
    // domain reference
    fe(this, "coords");
    // ([float,float,float])* coordinates [m]
    //bcs: Set<DofID>; // for each DOF (identified by string id) the bc is applied
    //Note: prescribed values to be specified via boundaryCondition class
    fe(this, "bcs");
    //Node local coordinate system. In this c.s. boundary conditions are applied and results obtained
    /**
     * Triplet defining the local coordinate system in node.
     * Value at position (i,j) represents angle between e'(i) and e(j),
     * where e' is base vector of local coordinate system and e is
     * base vector of global c.s.
     */
    fe(this, "lcs");
    this.label = i.toString(), this.domain = t, this.coords = n, this.bcs = new Set(e), this.lcs = void 0;
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
    const e = this.getLocationArray(t);
    return De(i.eigenVectors[n], ve(e));
  }
  /**
   * Returns receiver transformation matrix (from nodal to global c.s., ie. rg=t*r_n)
   * @param dofs dofs mask to consider
   */
  getTransformationMtrx(i) {
    const t = i.length;
    if (this.lcs == null)
      return rt(t);
    {
      const n = He([t, t]);
      for (let e = 0; e < t; e++) {
        const a = i[e];
        switch (a) {
          case Pe.Dx:
          case Pe.Dy:
          case Pe.Dz:
            for (let u = 0; u < t; u++) {
              const l = i[u];
              (l == Pe.Dx || l == Pe.Dy || l == Pe.Dz) && (n[e][u] = this.lcs[l][a]);
            }
            break;
          case Pe.Rx:
          case Pe.Ry:
          case Pe.Rz:
            for (let u = 0; u < t; u++) {
              const l = i[u];
              (l == Pe.Rx || l == Pe.Ry || l == Pe.Rz) && (n[e][u] = this.lcs[l - Pe.Rx][a - Pe.Rx]);
            }
            break;
          default:
            throw new TypeError("Unknown DofID: " + a);
        }
      }
      return we(n);
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
      const t = mi(i.locx), n = mi(i.locy);
      for (let e = 0; e < 3; e++)
        this.lcs[0][e] = i.locx[e] / t, this.lcs[1][e] = i.locy[e] / n;
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
      const n = this.domain.solver.getNodeDofIDs(this.label), e = this.getLocationArray(n), a = [];
      for (let l = 0; l < n.length; l++)
        this.bcs.has(n[l]) ? a.push(De(i.R, ve([e[l] - this.domain.solver.neq]))) : a.push(0);
      const u = this.getTransformationMtrx(n);
      return {
        dofs: n,
        values: ie(u, a).toArray()
      };
    } else if (this.bcs.size > 0) {
      const n = Array.from(this.bcs), e = this.getLocationArray(n), a = tr(e, this.domain.solver.neq), u = De(i.R, ve(a));
      return F0(u) === "number" ? { dofs: n, values: [u] } : { dofs: n, values: u };
    } else
      return { dofs: [], values: [] };
  }
}
class Y0 {
  // domain reference
  /**
   * Constructor
   * @param label new label
   * @param nodes element nodes
   * @param mat element material number
   * @param cs element cross section number
   */
  constructor(i, t, n, e, a) {
    fe(this, "label");
    //element number
    fe(this, "nodes");
    // element nodes
    fe(this, "mat");
    // material
    fe(this, "cs");
    // cross section
    fe(this, "domain");
    this.label = i.toString(), this.nodes = n.map((u) => u.toString()), this.mat = e.toString(), this.cs = a.toString(), this.domain = t;
  }
  /**
   * Change receiver properties
   * @param label new label
   * @param nodes nodes
   * @param mat new material (number)
   * @param cs new cross section (number)
   */
  change(i, t, n, e) {
    i != null && (this.label = i.toString()), t != null && (this.nodes = t.map((a) => a.toString())), n != null && (this.mat = n.toString()), e != null && (this.cs = e.toString());
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
    return we();
  }
}
class J0 extends Y0 {
  /**
   * Constructor
   * @param label element label (num)
   * @param nodes element nodes
   * @param mat element material (num)
   * @param cs element cross section (num)
   * @param hinges array of two boolean values indicating if hinge is present at start or end
   */
  constructor(t, n, e, a, u, l = [!1, !1]) {
    super(t, n, e, a, u);
    fe(this, "hinges");
    // indicates element hinges
    fe(this, "diagonalMassMatrix", !1);
    this.hinges = l;
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
    const t = this.domain.getNode(this.nodes[0]).coords, n = this.domain.getNode(this.nodes[1]).coords, e = n[0] - t[0], a = n[2] - t[2];
    return { l: Math.sqrt(e * e + a * a), dx: e, dz: a };
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
    const t = this.computeGeo(), n = t.dx / t.l, e = t.dz / t.l;
    let a = we([
      [n, e, 0, 0, 0, 0],
      [-e, n, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, n, e, 0],
      [0, 0, 0, -e, n, 0],
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
    const n = this.computeGeo(), e = this.getMaterial(), a = this.getCS(), u = e.e * a.a, l = e.e * a.iy, f = n.l, h = f * f, s = h * f, o = 12 * l / (a.k * e.g * a.a * f * f), c = 1 + o, v = we([
      [u / f, 0, 0, -u / f, 0, 0],
      [0, 12 * l / s / c, -6 * l / h / c, 0, -12 * l / s / c, -6 * l / h / c],
      [0, -6 * l / h / c, (4 + o) * l / f / c, 0, 6 * l / h / c, (2 - o) * l / f / c],
      [-u / f, 0, 0, u / f, 0, 0],
      [0, -12 * l / s / c, 6 * l / h / c, 0, 12 * l / s / c, 6 * l / h / c],
      [0, -6 * l / h / c, (2 - o) * l / f / c, 0, 6 * l / h / c, (4 + o) * l / f / c]
    ]);
    if (this.hasHinges()) {
      if (this.hinges[0] && this.hinges[1])
        var g = [0, 1, 3, 4], p = [2, 5];
      else if (this.hinges[0])
        var g = [0, 1, 3, 4, 5], p = [2];
      else if (this.hinges[1])
        var g = [0, 1, 2, 3, 4], p = [5];
      const m = v.subset(ve(g, g)), d = v.subset(ve(g, p)), w = v.subset(ve(p, p)), D = tr(m, ie(ie(d, rr(w)), Oe(d)));
      let A = He(6, 6);
      return A = De(A, ve(g, g), D), t ? {
        answer: A,
        a: g,
        b: p,
        kaa: m,
        kab: d,
        kbb: w
      } : { answer: A };
    }
    return { answer: v };
  }
  /**
   * Computes local initial stress matrix
   * @param N normal force
   */
  computeLocalInitialStressMtrx(t) {
    const n = this.computeGeo(), e = this.getMaterial(), a = this.getCS(), u = n.l, l = u * u, f = t / u, h = 12 * e.e * a.iy / (a.k * e.g * a.a * u * u), s = h * h, o = we([
      [0, 0, 0, 0, 0, 0],
      [0, 6 / 5 + 2 * h + s, -u / 10, 0, -6 / 5 - 2 * h - s, -u / 10],
      [
        0,
        -u / 10,
        2 * l / 15 + l * h / 6 + l * s / 12,
        0,
        u / 10,
        -l / 30 - l * h / 6 - l * s / 12
      ],
      [0, 0, 0, 0, 0, 0],
      [0, -6 / 5 - 2 * h - s, u / 10, 0, 6 / 5 + 2 * h + s, u / 10],
      [
        0,
        -u / 10,
        -l / 30 - l * h / 6 - l * s / 12,
        0,
        u / 10,
        2 * l / 15 + l * h / 6 + l * s / 12
      ]
    ]);
    ie(o, f / (1 + h) / (1 + h));
    const c = Math.min(Math.abs(o[1][1]), Math.abs(o[2][2])) / 1e3;
    if (o[0][0] = c, o[0][3] = -c, o[3][0] = -c, o[3][3] = c, this.hasHinges()) {
      const v = this.computeLocalStiffnessMtrx(!0), g = et(v.a)[0], p = He(6, g);
      De(p, ve(v.a, Tr(0, g)), rt(g)), De(
        p,
        ve(v.b, Tr(0, g)),
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
    const n = this.computeGeo(), e = this.getMaterial(), a = this.getCS(), u = n.l, l = u * u;
    if (!this.diagonalMassMatrix)
      return ie(
        e.d * a.a * u / 420,
        we([
          [140, 0, 0, 70, 0, 0],
          [0, 156, -22 * u, 0, 54, 13 * u],
          [0, -22 * u, 4 * u * u, 0, -13 * u, -3 * u * u],
          [70, 0, 0, 140, 0, 0],
          [0, 54, -13 * u, 0, 156, 22 * u],
          [0, 13 * u, -3 * u * u, 0, 22 * u, 4 * u * u]
        ])
      );
    const f = 1 / 78;
    return ie(
      e.d * a.a * u,
      we([
        [1 / 2, 0, 0, 0, 0, 0],
        [0, 1 / 2, 0, 0, 0, 0],
        [0, 0, f * l, 0, 0, 0],
        [0, 0, 0, 1 / 2, 0, 0],
        [0, 0, 0, 0, 1 / 2, 0],
        [0, 0, 0, 0, 0, f * l]
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
    const n = this.computeLocalInitialStressMtrx(t), e = this.computeT();
    return ie(ie(Oe(e), n), e);
  }
  /**
   * Computes element end displacement vector (in element local c.s.)
   * @param r global vector of unknowns
   */
  computeEndDisplacement(t) {
    const n = this.computeT(), e = this.getLocationArray();
    let a = ie(n, De(t.r, ve(e)));
    if (this.hasHinges()) {
      const u = this.computeLocalStiffnessMtrx(!0);
      let l = He(6);
      for (const f of t.getElementLoadsOnElement(this.label))
        l = ar(l, f.getLoadVectorForClampedBeam());
      this.hasHinges() && (a = De(
        a,
        ve(u.b),
        ie(
          rr(u.kbb),
          ie(
            ar(
              De(l, ve(u.b)),
              Fr(ie(Oe(u.kab), De(a, ve(u.a))))
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
    const n = this.computeT(), e = this.getLocationArray(), a = ie(n, De(t.r, ve(e))), u = this.computeLocalStiffnessMtrx(!0);
    let l = ie(u.answer, a), f = He(6);
    for (const h of t.getElementLoadsOnElement(this.label))
      f = ar(f, h.getLoadVectorForClampedBeam());
    if (this.hasHinges()) {
      const h = ie(u.kab, rr(u.kbb));
      if (u.b.length == 1) {
        const s = f.get(u.b);
        for (let o = 0; o < u.a.length; o++)
          l.set([u.a[o]], l.get([u.a[o]]) + f.get([u.a[o]]) - h.get([o, 0]) * s);
      } else {
        const s = tr(
          De(f, ve(u.a)),
          ie(h, De(f, ve(u.b)))
        );
        l = ar(l, De(l, ve(u.a), s));
      }
    } else
      l = ar(l, f);
    return l;
  }
  // Hermite-interpolated local deflection at normalized position xl in [0,1], plus load contributions
  evalLocalDeflAt(t, n, e, a) {
    let u = (1 - 3 * e * e + 2 * e * e * e) * t.get([1]) + n * (-e + 2 * e * e - e * e * e) * t.get([2]) + (3 * e * e - 2 * e * e * e) * t.get([4]) + n * (e * e - e * e * e) * t.get([5]), l = (1 - e) * t.get([0]) + e * t.get([3]);
    for (const f of a) {
      const h = f.computeBeamDeflectionContrib(e);
      u += h.w, l += h.u;
    }
    return { u: l, w: u };
  }
  // Transforms a local (u,w) deflection pair to global c.s. using the element's cos/sin
  toGlobalDefl(t, n, e, a) {
    return { u: t * e - n * a, w: n * e + t * a };
  }
  /**
   * Computes nseg+1 values of local deflections
   * @param lc reference to load case
   * @param nseg deflection will be evaluated in nseg+1 points generated along the element
   */
  computeLocalDefl(t, n) {
    const e = this.computeEndDisplacement(t), u = this.computeGeo().l, l = t.getElementLoadsOnElement(this.label), f = [], h = [];
    for (let s = 0; s <= n; s++) {
      const o = this.evalLocalDeflAt(e, u, s / n, l);
      f.push(o.u), h.push(o.w);
    }
    return { u: f, w: h };
  }
  /**
   * Computes nseg+1 values of global deflections
   * @param lc reference to load case
   * @param nseg deflection will be evaluated in nseg+1 points generated along the element
   */
  computeGlobalDefl(t, n) {
    const e = this.computeLocalDefl(t, n), a = this.computeGeo(), u = a.dx / a.l, l = a.dz / a.l, f = [], h = [];
    for (let s = 0; s <= n; s++) {
      const o = this.toGlobalDefl(e.u[s], e.w[s], u, l);
      f.push(o.u), h.push(o.w);
    }
    return { u: f, w: h };
  }
  /**
   * Computes local deflection at a single point along the element
   * @param lc reference to load case
   * @param x distance from element start (in local c.s.)
   */
  computeLocalDeflAt(t, n) {
    const e = this.computeEndDisplacement(t), u = this.computeGeo().l, l = t.getElementLoadsOnElement(this.label);
    return this.evalLocalDeflAt(e, u, n / u, l);
  }
  /**
   * The slope of the deflection curve, dw/dx, at a normalized position.
   *
   * The Hermite polynomials of `evalLocalDeflAt` differentiated term by term. They are written in
   * x/l, so each brings a factor of the length out with it - which is why the two translation terms
   * are divided by it and the two rotation terms are not.
   */
  evalLocalSlopeAt(t, n, e, a) {
    let u = (-6 * e + 6 * e * e) * t.get([1]) / n + (-1 + 4 * e - 3 * e * e) * t.get([2]) + (6 * e - 6 * e * e) * t.get([4]) / n + (2 * e - 3 * e * e) * t.get([5]);
    for (const l of a)
      u += l.computeBeamSlopeContrib(e);
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
    const e = this.computeEndDisplacement(t), u = this.computeGeo().l, l = t.getElementLoadsOnElement(this.label);
    return -this.evalLocalSlopeAt(e, u, n / u, l);
  }
  /**
   * Computes nseg+1 values of the cross section rotation
   * @param lc reference to load case
   * @param nseg rotation will be evaluated in nseg+1 points generated along the element
   */
  computeLocalRotation(t, n) {
    const e = this.computeEndDisplacement(t), u = this.computeGeo().l, l = t.getElementLoadsOnElement(this.label), f = [];
    for (let h = 0; h <= n; h++)
      f.push(-this.evalLocalSlopeAt(e, u, h / n, l));
    return f;
  }
  /**
   * Computes global deflection at a single point along the element
   * @param lc reference to load case
   * @param x distance from element start (in local c.s.)
   */
  computeGlobalDeflAt(t, n) {
    const e = this.computeLocalDeflAt(t, n), a = this.computeGeo(), u = a.dx / a.l, l = a.dz / a.l;
    return this.toGlobalDefl(e.u, e.w, u, l);
  }
  /**
   * Computes element end displacement vector (in element local c.s.)
   * @param r global vector of unknowns
   */
  computeEndDisplacementEigenMode(t, n) {
    const e = this.computeT(), a = this.getLocationArray();
    let u = ie(e, De(t.eigenVectors[n], ve(a)));
    if (this.hasHinges()) {
      const l = this.computeLocalStiffnessMtrx(!0), f = He(6);
      this.hasHinges() && (u = De(
        u,
        ve(l.b),
        ie(
          rr(l.kbb),
          ie(
            ar(
              De(f, ve(l.b)),
              Fr(ie(Oe(l.kab), De(u, ve(l.a))))
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
  computeLocalEigenMode(t, n, e) {
    const a = this.computeEndDisplacementEigenMode(t, n), u = [], l = [], h = this.computeGeo().l;
    for (let s = 0; s <= e; s++) {
      const o = s / e, c = (1 - 3 * o * o + 2 * o * o * o) * a.get([1]) + h * (-o + 2 * o * o - o * o * o) * a.get([2]) + (3 * o * o - 2 * o * o * o) * a.get([4]) + h * (o * o - o * o * o) * a.get([5]), v = (1 - o) * a.get([0]) + o * a.get([3]);
      u.push(v), l.push(c);
    }
    return { u, w: l };
  }
  /**
   * Computes nseg+1 values of global deflections
   * @param lc reference to load case
   * @param ntheig n-th eigen value
   * @param nseg deflection will be evaluated in nseg+1 points generated along the element
   */
  computeGlobalEigenMode(t, n, e) {
    const a = this.computeLocalEigenMode(t, n, e), u = this.computeGeo(), l = u.dx / u.l, f = u.dz / u.l, h = [], s = [];
    for (let o = 0; o <= e; o++)
      h.push(a.u[o] * l - a.w[o] * f), s.push(a.w[o] * l + a.u[o] * f);
    return { u: h, w: s };
  }
  /**
   * Computes the values of normal force along element
   * @param lc load case reference
   * @param nseg number of points-1
   */
  computeNormalForce(t, n) {
    const e = this.computeEndForces(t), a = this.computeGeo(), u = [], l = [], f = t.getElementLoadsOnElement(this.label);
    for (let h = 0; h <= n; h++) {
      const s = a.l * h / n;
      let o = -e.get([0]);
      for (const c of f)
        o += c.computeBeamNContrib(s);
      u.push(s), l.push(o);
    }
    return { x: u, N: l };
  }
  computeNormalForceAt(t, n) {
    const e = this.computeEndForces(t), a = t.getElementLoadsOnElement(this.label);
    let u = -e.get([0]);
    for (const l of a)
      u += l.computeBeamNContrib(n);
    return u;
  }
  /**
   * Computes the values of shear force along element
   * @param lc load case reference
   * @param nseg number of points-1
   */
  computeShearForce(t, n) {
    const e = this.computeEndForces(t), a = this.computeGeo(), u = [], l = [], f = t.getElementLoadsOnElement(this.label);
    for (let h = 0; h <= n; h++) {
      const s = a.l * h / n;
      let o = -e.get([1]);
      for (const c of f)
        o += c.computeBeamVContrib(s);
      u.push(s), l.push(o);
    }
    return { x: u, V: l };
  }
  computeShearForceAt(t, n) {
    const e = this.computeEndForces(t), a = t.getElementLoadsOnElement(this.label);
    let u = -e.get([1]);
    for (const l of a)
      u += l.computeBeamVContrib(n);
    return u;
  }
  /**
   * Computes the values of bending moment along element
   * @param lc load case reference
   * @param nseg number of points-1
   */
  computeBendingMoment(t, n) {
    const e = this.computeEndForces(t), a = this.computeGeo(), u = [], l = [], f = t.getElementLoadsOnElement(this.label);
    for (let h = 0; h <= n; h++) {
      const s = a.l * h / n;
      let o = -e.get([2]) - e.get([1]) * s;
      for (const c of f)
        o += c.computeBeamMContrib(s);
      u.push(s), l.push(o);
    }
    return { x: u, M: l };
  }
  computeBendingMomentAt(t, n) {
    const e = this.computeEndForces(t), a = t.getElementLoadsOnElement(this.label);
    let u = -e.get([2]) - e.get([1]) * n;
    for (const l of a)
      u += l.computeBeamMContrib(n);
    return u;
  }
}
class ba {
  /**
   * Returns load vector for clamped beam
   * @param elem element number
   */
  constructor(i, t) {
    fe(this, "target");
    // component number the target is applied
    fe(this, "domain");
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
class Q0 extends ba {
  constructor(t, n, e = {}) {
    super(t, n);
    fe(this, "values");
    this.values = e;
  }
  change(t, n) {
    this.target = t.toString(), this.values = n;
  }
  getLoadVector() {
    const t = this.domain.solver.getNodeDofIDs(this.target), n = Array();
    for (const e of t)
      e in this.values ? n.push(this.values[e]) : n.push(0);
    return n;
  }
  getLocationArray() {
    return this.domain.solver.getNodeLocationArray(this.target, this.domain.solver.getNodeDofIDs(this.target));
  }
}
class nt extends ba {
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
class X0 extends nt {
  constructor(t, n, e, a) {
    super(t, n);
    fe(this, "values");
    // Fx, Fz, My, distance x
    fe(this, "lcs");
    this.values = e, this.lcs = a;
  }
  change(t, n, e) {
    this.target = t.toString(), this.values = n, this.lcs = e;
  }
  getGlobalIntensities() {
    const t = this.values[0], n = this.values[1], e = this.values[2];
    if (this.lcs) {
      const a = this.domain.getElement(this.target).computeGeo(), u = a.dx / a.l, l = a.dz / a.l;
      return { fx: t * u - n * l, fz: t * l + n * u, my: e };
    } else
      return { fx: t, fz: n, my: e };
  }
  getLocalIntensities() {
    const t = this.values[0], n = this.values[1], e = this.values[2], a = this.domain.getElement(this.target).computeGeo(), u = a.l, l = a.dx, f = a.dz, h = l / u, s = f / u;
    return this.lcs ? { fx: t, fz: n, my: e } : {
      fx: t * h + n * s,
      fz: -t * s + n * h,
      my: e
    };
  }
  getLoadVectorForClampedBeam() {
    const t = this.domain.getElement(this.target).computeGeo(), n = this.getLocalIntensities(), e = n.fx, a = n.fz, u = n.my, l = t.l, f = this.values[3], h = l - f;
    return [
      -h / l * e,
      h / l * (f * (f - h) / l / l - 1) * a - 6 * f * h * u / (l * l * l),
      f * h * h / l / l * a - h * (h - 2 * f) * u / (l * l),
      -f / l * e,
      f / l * (h * (h - f) / l / l - 1) * a + 6 * f * h * u / (l * l * l),
      -f * f * h / l / l * a - f * (f - 2 * h) * u / (l * l)
    ];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), e = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0), u = a.a, l = a.b, f = a.kab, h = a.kbb;
      let s = [0, 0, 0, 0, 0, 0];
      const o = ie(f, rr(h));
      if (l.length == 1) {
        const c = e[l[0]];
        for (let v = 0; v < u.length; v++)
          s[u[v]] = e[u[v]] - o.get([v, 0]) * c;
        return ie(ie(Oe(n), s), -1).toArray();
      } else {
        const c = tr(De(e, ve(u)), ie(o, De(e, ve(l))));
        return s = De(s, ve(u), c), ie(ie(Oe(n), s), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), e), -1).toArray();
  }
  computeBeamDeflectionContrib(t) {
    const n = this.getLocalIntensities(), u = this.domain.elements.get(this.target).computeGeo().l, l = n.fx, f = n.fz, h = n.my, s = this.domain.getElement(this.target).getMaterial().e, o = this.domain.getElement(this.target).getCS().a, c = this.domain.getElement(this.target).getCS().iy, v = this.values[3], g = u - v, p = g / u * (v * (v - g) / u / u - 1) * f, m = v * g * g / u / u * f, d = -6 * v * g * h / (u * u * u), w = -g * (g - 2 * v) * h / (u * u), D = s * c, A = s * o, E = t * u;
    let y = 0, F = 0;
    return E < v ? y += g / u * l * E / A : y += g / u * l * v / A - v / u * l * (E - v) / A, E > v ? F = (p * Math.pow(E, 3) / 6 + m * Math.pow(E, 2) / 2 + f * Math.pow(E - v, 3) / 6) / D : F = (p * Math.pow(E, 3) / 6 + m * Math.pow(E, 2) / 2) / D, E > v ? F += (d * Math.pow(E, 3) / 6 + w * Math.pow(E, 2) / 2 + h * Math.pow(E - v, 2) / 2) / D : F += (d * Math.pow(E, 3) / 6 + w * Math.pow(E, 2) / 2) / D, { u: y, w: F };
  }
  /**
   * The derivative of the deflection above. It is written in x already, so this is term by term -
   * and the branch is the same one, which is what makes the slope one sided at the load: a force
   * breaks the slope of the moment, and with it the curvature, but not the slope of the deflection,
   * so the two sides agree here while the shear either side of it does not.
   */
  computeBeamSlopeContrib(t) {
    const n = this.getLocalIntensities(), u = this.domain.elements.get(this.target).computeGeo().l, l = n.fz, f = n.my, h = this.domain.getElement(this.target).getMaterial().e, s = this.domain.getElement(this.target).getCS().iy, o = this.values[3], c = u - o, v = c / u * (o * (o - c) / u / u - 1) * l, g = o * c * c / u / u * l, p = -6 * o * c * f / (u * u * u), m = -c * (c - 2 * o) * f / (u * u), d = h * s, w = t * u;
    let D = (v * w * w / 2 + g * w + p * w * w / 2 + m * w) / d;
    return w > o && (D += (l * Math.pow(w - o, 2) / 2 + f * (w - o)) / d), D;
  }
  computeBeamNContrib(t) {
    const n = this.getLocalIntensities(), e = this.values[3];
    return t < e ? 0 : -n.fx;
  }
  computeBeamVContrib(t) {
    const n = this.getLocalIntensities(), e = this.values[3];
    return t < e ? 0 : -n.fz;
  }
  computeBeamMContrib(t) {
    const n = this.getLocalIntensities(), e = this.values[3];
    return t < e ? 0 : -n.fz * (t - e) - n.my;
  }
}
function Ot(r, i, t, n, e, a) {
  const u = r * r, l = u * r, f = 12 * i * e / (a * t * n * r * r), h = 1 + f;
  return we([
    [i * n / r, 0, 0, -(i * n) / r, 0, 0],
    [0, 12 * i * e / l / h, -6 * i * e / u / h, 0, -12 * i * e / l / h, -6 * i * e / u / h],
    [
      0,
      -6 * i * e / u / h,
      (4 + f) * i * e / r / h,
      0,
      6 * i * e / u / h,
      (2 - f) * i * e / r / h
    ],
    [-(i * n) / r, 0, 0, i * n / r, 0, 0],
    [0, -12 * i * e / l / h, 6 * i * e / u / h, 0, 12 * i * e / l / h, 6 * i * e / u / h],
    [
      0,
      -6 * i * e / u / h,
      (2 - f) * i * e / r / h,
      0,
      6 * i * e / u / h,
      (4 + f) * i * e / r / h
    ]
  ]);
}
const At = class At extends nt {
  constructor(t, n, e, a) {
    super(t, n);
    fe(this, "values");
    // Du, Dw, Dphi, distance x
    fe(this, "lcs");
    this.values = e, this.lcs = a;
  }
  change(t, n, e) {
    this.target = t.toString(), this.values = n, this.lcs = e;
  }
  getLocalIntensities() {
    const t = this.values[0], n = this.values[1], e = this.values[2];
    if (this.lcs)
      return { du: t, dw: n, dphi: e };
    {
      const a = this.domain.getElement(this.target).computeGeo(), u = a.dx / a.l, l = a.dz / a.l;
      return { du: t * u + n * l, dw: -t * l + n * u, dphi: e };
    }
  }
  /**
   * Splits the element into two sub-beams (length a and b=l-a) at the imposed deformation
   * point and solves for the end displacements r_C1 (end of segment a) and r_C2 (start of
   * segment b) that satisfy internal equilibrium for a clamped-clamped (r_A=r_B=0) beam
   * with the prescribed relative jump r_C2-r_C1 = [Du, Dw, Dphi] enforced at the cut.
   */
  getSegmentEndDisplacements() {
    const t = this.domain.getElement(this.target), e = t.computeGeo().l, a = t.getMaterial(), u = t.getCS(), l = this.getLocalIntensities(), f = this.values[3], h = e - f, s = [l.du, l.dw, l.dphi], o = e * At.MIN_SEGMENT_RATIO;
    if (f <= o || h <= o) {
      const E = Ot(e, a.e, a.g, u.a, u.iy, u.k);
      if (f <= o)
        return {
          a: 0,
          b: e,
          l: e,
          kacEnd: E.subset(ve([0, 1, 2], [0, 1, 2])),
          kbcStart: E.subset(ve([3, 4, 5], [0, 1, 2])),
          rC1: s,
          rC2: s
        };
      const y = s.map((F) => -F);
      return {
        a: e,
        b: 0,
        l: e,
        kacEnd: E.subset(ve([0, 1, 2], [3, 4, 5])),
        kbcStart: E.subset(ve([3, 4, 5], [3, 4, 5])),
        rC1: y,
        rC2: y
      };
    }
    const c = Ot(f, a.e, a.g, u.a, u.iy, u.k), v = Ot(h, a.e, a.g, u.a, u.iy, u.k), g = c.subset(ve([0, 1, 2], [3, 4, 5])), p = c.subset(ve([3, 4, 5], [3, 4, 5])), m = v.subset(ve([0, 1, 2], [0, 1, 2])), d = v.subset(ve([3, 4, 5], [0, 1, 2])), w = rr(ar(p, m)), D = ie(ie(w, m), s).valueOf().map((E) => -E), A = ie(ie(w, p), s).valueOf();
    return { a: f, b: h, l: e, kacEnd: g, kbcStart: d, rC1: D, rC2: A };
  }
  getLoadVectorForClampedBeam() {
    const { kacEnd: t, kbcStart: n, rC1: e, rC2: a } = this.getSegmentEndDisplacements(), u = ie(t, e).valueOf(), l = ie(n, a).valueOf();
    return [u[0], u[1], u[2], l[0], l[1], l[2]];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), e = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0), u = a.a, l = a.b, f = a.kab, h = a.kbb;
      let s = [0, 0, 0, 0, 0, 0];
      const o = ie(f, rr(h));
      if (l.length == 1) {
        const c = e[l[0]];
        for (let v = 0; v < u.length; v++)
          s[u[v]] = e[u[v]] - o.get([v, 0]) * c;
        return ie(ie(Oe(n), s), -1).toArray();
      } else {
        const c = tr(De(e, ve(u)), ie(o, De(e, ve(l))));
        return s = De(s, ve(u), c), ie(ie(Oe(n), s), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), e), -1).toArray();
  }
  // Deflection of the clamped-clamped primary structure (r_A=r_B=0), interpolated with
  // standard Hermite shape functions on each side of the imposed deformation point.
  computeBeamDeflectionContrib(t) {
    const { a: n, b: e, l: a, rC1: u, rC2: l } = this.getSegmentEndDisplacements(), f = t * a;
    if (f <= n) {
      const h = n === 0 ? 0 : f / n, s = h * u[0], o = (3 * h * h - 2 * h * h * h) * u[1] + n * (h * h - h * h * h) * u[2];
      return { u: s, w: o };
    } else {
      const h = f - n, s = e === 0 ? 0 : h / e, o = (1 - s) * l[0], c = (1 - 3 * s * s + 2 * s * s * s) * l[1] + e * (-s + 2 * s * s - s * s * s) * l[2];
      return { u: o, w: c };
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
    const { a: n, b: e, l: a, rC1: u, rC2: l } = this.getSegmentEndDisplacements(), f = t * a;
    if (f <= n) {
      if (n === 0)
        return 0;
      const s = f / n;
      return (6 * s - 6 * s * s) / n * u[1] + (2 * s - 3 * s * s) * u[2];
    }
    if (e === 0)
      return 0;
    const h = (f - n) / e;
    return (-6 * h + 6 * h * h) / e * l[1] + (-1 + 4 * h - 3 * h * h) * l[2];
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
fe(At, "MIN_SEGMENT_RATIO", 1e-9);
let Qt = At;
class H0 extends nt {
  // true if values in element local c.s (along length)
  constructor(t, n, e, a) {
    super(t, n);
    fe(this, "values");
    // fx, fz intensities
    fe(this, "lcs");
    this.values = e, this.lcs = a;
  }
  change(t, n, e) {
    this.target = t.toString(), this.values = n, this.lcs = e;
  }
  getGlobalIntensities() {
    const t = this.values[0], n = this.values[1];
    if (this.lcs) {
      const e = this.domain.getElement(this.target).computeGeo(), a = e.dx / e.l, u = e.dz / e.l;
      return { fx: t * a - n * u, fz: t * u + n * a, my: 0 };
    } else
      return { fx: t, fz: n, my: 0 };
  }
  getLocalIntensities() {
    const t = this.values[0], n = this.values[1], e = this.domain.getElement(this.target).computeGeo(), a = e.l, u = e.dx, l = e.dz, f = u / a, h = l / a;
    return this.lcs ? { fx: t, fz: n } : {
      fx: t * f + n * h,
      fz: -t * h + n * f
    };
  }
  // in local c.s
  getLoadVectorForClampedBeam() {
    const t = this.domain.getElement(this.target).computeGeo(), n = this.getLocalIntensities(), e = n.fx, a = n.fz, u = t.l;
    return [-0.5 * u * e, -0.5 * u * a, 1 / 12 * a * u * u, -0.5 * u * e, -0.5 * u * a, -1 / 12 * a * u * u];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), e = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0);
      let u = [0, 0, 0, 0, 0, 0];
      const l = ie(a.kab, rr(a.kbb));
      if (a.b.length == 1) {
        const f = e[a.b[0]];
        for (let h = 0; h < a.a.length; h++)
          u[a.a[h]] = e[a.a[h]] - l.get([h, 0]) * f;
        return ie(ie(Oe(n), u), -1).toArray();
      } else {
        const f = tr(
          De(e, ve(a.a)),
          ie(l, De(e, ve(a.b)))
        );
        return u = De(u, ve(a.a), f), ie(ie(Oe(n), u), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), e), -1).toArray();
  }
  computeBeamDeflectionContrib(t) {
    const n = this.getLocalIntensities(), e = this.domain.elements.get(this.target), u = e.computeGeo().l;
    return { u: 0, w: n.fz * u * u * u * u * (t * t * t * t / 24 - t * t * t / 12 + t * t / 24) / (e.getMaterial().e * e.getCS().iy) };
  }
  /**
   * The derivative of the deflection above, term by term: the fourth power falls to a third, and
   * the factor of the length falls with it because the polynomial is in x/l and this is in x.
   */
  computeBeamSlopeContrib(t) {
    const n = this.getLocalIntensities(), e = this.domain.elements.get(this.target), u = e.computeGeo().l;
    return n.fz * u * u * u * (t * t * t / 6 - t * t / 4 + t / 12) / (e.getMaterial().e * e.getCS().iy);
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
class K0 extends nt {
  // true if values provided in element local c.s.
  constructor(t, n, e, a, u) {
    super(t, n);
    fe(this, "startValues");
    // fx, fz at element start
    fe(this, "endValues");
    // fx, fz at element end
    fe(this, "lcs");
    this.startValues = e, this.endValues = a, this.lcs = u;
  }
  change(t, n, e, a) {
    this.target = t.toString(), this.startValues = n, this.endValues = e, this.lcs = a;
  }
  getGlobalIntensities() {
    const t = { fx: this.startValues[0], fz: this.startValues[1] }, n = { fx: this.endValues[0], fz: this.endValues[1] };
    if (this.lcs) {
      const e = this.domain.getElement(this.target).computeGeo(), a = e.dx / e.l, u = e.dz / e.l;
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
      const e = this.domain.getElement(this.target).computeGeo(), a = e.dx / e.l, u = e.dz / e.l;
      return {
        start: { fx: t.fx * a + t.fz * u, fz: -t.fx * u + t.fz * a },
        end: { fx: n.fx * a + n.fz * u, fz: -n.fx * u + n.fz * a }
      };
    }
    return { start: t, end: n };
  }
  // load vector in local c.s.
  getLoadVectorForClampedBeam() {
    const n = this.domain.getElement(this.target).computeGeo().l, e = this.getLocalIntensities(), a = e.start.fx, u = e.end.fx, l = e.start.fz, f = e.end.fz, h = -n / 6 * (2 * a + u), s = -n / 6 * (a + 2 * u), o = -n / 20 * (7 * l + 3 * f), c = -n / 20 * (3 * l + 7 * f), v = n * n * (l / 20 + f / 30), g = -n * n * (l / 30 + f / 20);
    return [h, o, v, s, c, g];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), e = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0);
      let u = [0, 0, 0, 0, 0, 0];
      const l = ie(a.kab, rr(a.kbb));
      if (a.b.length == 1) {
        const f = e[a.b[0]];
        for (let h = 0; h < a.a.length; h++)
          u[a.a[h]] = e[a.a[h]] - l.get([h, 0]) * f;
        return ie(ie(Oe(n), u), -1).toArray();
      } else {
        const f = tr(
          De(e, ve(a.a)),
          ie(l, De(e, ve(a.b)))
        );
        return u = De(u, ve(a.a), f), ie(ie(Oe(n), u), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), e), -1).toArray();
  }
  computeBeamDeflectionContrib(t) {
    const n = this.domain.getElement(this.target), a = n.computeGeo().l, u = this.getLocalIntensities(), l = u.start.fz, h = u.end.fz - l, s = t, o = Math.pow(s, 4) / 24 - Math.pow(s, 3) / 12 + Math.pow(s, 2) / 24, c = Math.pow(s, 5) / 120 - Math.pow(s, 3) / 40 + Math.pow(s, 2) / 60, v = n.getMaterial().e * n.getCS().iy;
    return { u: 0, w: a ** 4 / v * (l * o + h * c) };
  }
  /** The derivative of the two polynomials above, in x rather than in x/l. */
  computeBeamSlopeContrib(t) {
    const n = this.domain.getElement(this.target), a = n.computeGeo().l, u = this.getLocalIntensities(), l = u.start.fz, h = u.end.fz - l, s = t, o = Math.pow(s, 3) / 6 - Math.pow(s, 2) / 4 + s / 12, c = Math.pow(s, 4) / 24 - 3 * Math.pow(s, 2) / 40 + s / 30, v = n.getMaterial().e * n.getCS().iy;
    return a ** 3 / v * (l * o + h * c);
  }
  computeBeamNContrib(t) {
    const n = this.getLocalIntensities(), a = this.domain.getElement(this.target).computeGeo().l, u = n.start.fx, f = n.end.fx - u;
    return -(u * t + 0.5 * f * (t * t) / a);
  }
  computeBeamVContrib(t) {
    const n = this.getLocalIntensities(), a = this.domain.getElement(this.target).computeGeo().l, u = n.start.fz, f = n.end.fz - u;
    return -(u * t + 0.5 * f * (t * t) / a);
  }
  computeBeamMContrib(t) {
    const n = this.getLocalIntensities(), a = this.domain.getElement(this.target).computeGeo().l, u = n.start.fz, f = n.end.fz - u;
    return -(0.5 * u * t * t + f / (6 * a) * t * t * t);
  }
}
class W0 extends nt {
  // fx, fz intensities
  constructor(t, n, e) {
    super(t, n);
    fe(this, "values");
    this.values = e;
  }
  change(t, n) {
    this.target = t.toString(), this.values = n;
  }
  // in local c.s
  getLoadVectorForClampedBeam() {
    const t = this.domain.getElement(this.target).getMaterial(), n = this.domain.getElement(this.target).getCS(), e = t.e, a = t.alpha, u = n.a, l = n.iy, f = n.h, h = this.values[1] - this.values[2];
    return [
      +e * u * a * this.values[0],
      0,
      +(e * l * a * h) / f,
      -e * u * a * this.values[0],
      0,
      -(e * l * a * h) / f
    ];
  }
  getLocationArray() {
    return this.domain.getElement(this.target).getLocationArray();
  }
  getLoadVector() {
    const t = this.domain.getElement(this.target), n = t.computeT(), e = this.getLoadVectorForClampedBeam();
    if (t.hasHinges()) {
      const a = t.computeLocalStiffnessMtrx(!0);
      let u = [0, 0, 0, 0, 0, 0];
      const l = ie(a.kab, rr(a.kbb));
      if (a.b.length == 1) {
        const f = e[a.b[0]];
        for (let h = 0; h < a.a.length; h++)
          u[a.a[h]] = e[a.a[h]] - l.get([h, 0]) * f;
        return ie(ie(Oe(n), u), -1).toArray();
      } else {
        const f = tr(
          De(e, ve(a.a)),
          ie(l, De(e, ve(a.b)))
        );
        return u = De(u, ve(a.a), f), ie(ie(Oe(n), u), -1).toArray();
      }
    } else
      return ie(ie(Oe(n), e), -1).toArray();
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
class k0 {
  /**
   * Constructor
   */
  constructor(i, t, n) {
    fe(this, "target");
    // node (umber) subjected to Prescribed Displacement
    fe(this, "prescribedValues");
    // prescribed values of individual DOFs
    fe(this, "domain");
    this.target = i.toString(), this.prescribedValues = n, this.domain = t;
  }
  getNodePrescribedDisplacementVector() {
    const i = new Array(), t = this.domain.solver.getNodeDofIDs(this.target);
    for (const n of t)
      n in this.prescribedValues ? i.push(this.prescribedValues[n]) : i.push(0);
    return i;
  }
  getLocationArray() {
    return this.domain.solver.getNodeLocationArray(this.target, this.domain.solver.getNodeDofIDs(this.target));
  }
}
const j0 = {};
class eh {
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
    fe(this, "label");
    // label of receiver
    fe(this, "a");
    // cross section area of receiver [m2]. > 0.0
    fe(this, "iy");
    // area moment of inertia (second moment of area) with respect to y axis [m4]. > 0.0
    fe(this, "iz");
    // area moment of inertia (second moment of area) with respect to z axis [m4]. > 0.0
    fe(this, "dyz");
    // product moment of area with respect to yz axes [m4]
    fe(this, "h");
    // height of receiver [m]
    fe(this, "k");
    // Timoshenko's shear coefficient [-]
    fe(this, "j");
    this.label = i.toString(), t = { ...j0, ...t }, this.a = t.a, this.iy = t.iy, this.iz = t.iz, this.dyz = t.dyz, this.h = t.h, this.k = t.k, this.j = t.j;
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
const rh = { e: 1, g: 1, alpha: 1, d: 1 };
class th {
  // mass density [kg/m3]
  /**
   * @param  label int label of receiver
   * @param  e Young's modulus of receiver [Pa]
   * @param g  Shear modulus of receiver [Pa]
   * @param alpha thermal dillatation coefficient [K-1]
   * @param d mass density of receiver [kg/m3]
   */
  constructor(i, t = {}) {
    fe(this, "label");
    //  label
    fe(this, "e");
    // Young's modulus [Pa]
    fe(this, "g");
    // Shear modulus [Pa]
    fe(this, "alpha");
    // thermal dillatation coefficient [K-1]
    fe(this, "d");
    this.label = i.toString(), t = { ...rh, ...t }, this.e = t.e, this.g = t.g, this.alpha = t.alpha, this.d = t.d;
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
class nh {
  /**
   * Constructor
   */
  constructor(i) {
    fe(this, "solver");
    fe(this, "nodes", /* @__PURE__ */ new Map());
    fe(this, "elements", /* @__PURE__ */ new Map());
    fe(this, "materials", /* @__PURE__ */ new Map());
    fe(this, "crossSections", /* @__PURE__ */ new Map());
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
    const e = new Z0(i, this, t, n);
    return this.nodes.set(i.toString(), e), e;
  }
  createBeam2D(i, t, n, e, a = [!1, !1]) {
    const u = new J0(i, this, t, n, e, a);
    return this.elements.set(i.toString(), u), u;
  }
  createMaterial(i, t = {}) {
    const n = new th(i, t);
    return this.materials.set(i.toString(), n), n;
  }
  createCrossSection(i, t = {}) {
    const n = new eh(i, t);
    return this.crossSections.set(i.toString(), n), n;
  }
}
class ih {
  constructor() {
    fe(this, "domain");
    fe(this, "neq");
    // number of unknowns
    fe(this, "pneq");
    // number of prescribed unknowns
    fe(this, "k");
    fe(this, "m");
    fe(this, "f");
    fe(this, "loadCases", new Array());
    fe(this, "codeNumberGenerated", !1);
    // code numbers assigned to supported as well as free DOFs
    fe(this, "nodeCodeNumbers", /* @__PURE__ */ new Map());
    this.domain = new nh(this), this.loadCases.push(new ah("DefaultLC", this.domain));
  }
  getNodeLocationArray(i, t) {
    let n = [];
    for (const e of t)
      n = n.concat(this.nodeCodeNumbers.get(i)[e]);
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
    for (const [e, a] of this.domain.nodes)
      this.nodeCodeNumbers.set(e, {}), i.set(e, /* @__PURE__ */ new Set());
    for (const [e, a] of this.domain.elements)
      for (const u of a.nodes) {
        const l = a.getNodeDofs(u);
        for (const f of l)
          if (i.has(u))
            i.get(u).add(f);
          else
            throw console.log(u, u in i, i.get(u)), new RangeError("Node label " + u + " does not exists");
      }
    this.neq = 0, this.pneq = 0;
    for (const [e, a] of this.domain.nodes)
      for (const u of i.get(e))
        a.bcs.has(u) ? this.pneq++ : this.neq++;
    let t = 0, n = this.neq;
    for (const [e, a] of this.domain.nodes)
      for (const u of i.get(e))
        a.bcs.has(u) ? this.nodeCodeNumbers.get(e)[u] = n++ : this.nodeCodeNumbers.get(e)[u] = t++;
    this.codeNumberGenerated = !0;
  }
  assembleVecLC(i, t, n, e) {
    for (let a = 0; a < n.length; a++)
      i.set([n[a], e], i.get([n[a], e]) + t[a]);
  }
  assembleVec(i, t, n) {
    for (let e = 0; e < n.length; e++)
      i.set([n[e]], i.get([n[e]]) + t[e]);
  }
}
class oh extends ih {
  assemble() {
    this.k = He(this.neq + this.pneq, this.neq + this.pneq);
    for (const [i, t] of this.domain.elements) {
      const n = t.computeStiffness(), e = t.getLocationArray(), a = et(e)[0];
      for (let u = 0; u < a; u++) {
        const l = e[u];
        for (let f = 0; f < a; f++) {
          const h = e[f];
          this.k.set([l, h], this.k.get([l, h]) + n.get([u, f]));
        }
      }
    }
    this.f = He(this.neq + this.pneq, this.loadCases.length);
    for (let i = 0; i < this.loadCases.length; i++) {
      this.loadCases[i].r = He(this.neq + this.pneq);
      const t = this.loadCases[i];
      for (const n of t.nodalLoadList)
        this.assembleVecLC(this.f, n.getLoadVector(), n.getLocationArray(), i);
      for (const n of t.elementLoadList)
        this.assembleVecLC(this.f, n.getLoadVector(), n.getLocationArray(), i);
      for (const n of t.prescribedBC)
        this.assembleVec(t.r, n.getNodePrescribedDisplacementVector(), n.getLocationArray());
    }
  }
  solve() {
    const i = /* @__PURE__ */ new Date();
    this.codeNumberGenerated || this.generateCodeNumbers();
    const t = Tr(0, this.neq), n = Tr(this.neq, this.neq + this.pneq);
    if (this.assemble(), this.neq > 0)
      for (let u = 0; u < this.loadCases.length; u++) {
        this.loadCases[u].solved = !1;
        const l = De(this.loadCases[u].r, ve(n)), f = ie(De(this.k, ve(t, n)), l);
        let h = De(this.k, ve(t, t));
        typeof h == "number" && (h = we([[h]]));
        let s = De(this.f, ve(t, [u]));
        typeof s == "number" && (s = we([s]));
        const o = tr(Fr(s), f), c = Fr(V0(h, o));
        this.loadCases[u].r = De(this.loadCases[u].r, ve(Tr(0, this.neq)), c), this.loadCases[u].R = De(ie(this.k, this.loadCases[u].r), ve(n)), this.loadCases[u].R = tr(
          this.loadCases[u].R,
          Fr(De(this.f, ve(n, [u])))
        ), this.loadCases[u].solved = !0;
      }
    else
      for (let u = 0; u < this.loadCases.length; u++)
        this.loadCases[u].R = Fr(ie(this.k, this.loadCases[u].r)), this.loadCases[u].R = tr(
          this.loadCases[u].R,
          Fr(De(this.f, ve(n, [u])))
        ), this.loadCases[u].solved = !0;
    const a = (/* @__PURE__ */ new Date()).getTime() - i.getTime();
    console.log("Solution took ", Math.round(a * 100) / 100, " [ms]");
  }
}
class ah {
  /**
   * Creates a new loadcase
   * @param label load case name
   */
  constructor(i, t) {
    fe(this, "label");
    fe(this, "domain");
    // domain reference
    // dictionary (map), key is node number, value is PrescribedDisplacement object applied
    fe(this, "bcMap", {});
    // Array of loads applied
    fe(this, "nodalLoadList", new Array());
    fe(this, "elementLoadList", new Array());
    fe(this, "prescribedBC", new Array());
    // solution vector
    fe(this, "r", He(0));
    // vector of reactions
    fe(this, "R", He(0));
    // omegas
    fe(this, "eigenNumbers", []);
    fe(this, "eigenVectors", []);
    fe(this, "solved", !1);
    this.label = i, this.domain = t;
  }
  /**
   * Returns list of applied element loads on element with given number
   * param e element number
   */
  getElementLoadsOnElement(i) {
    const t = [];
    for (const n of this.elementLoadList)
      n.target == i && t.push(n);
    return t;
  }
  //class factory
  createNodalLoad(i, t = {}) {
    const n = new Q0(i, this.domain, t);
    return this.nodalLoadList.push(n), n;
  }
  createBeamElementUniformEdgeLoad(i, t, n) {
    const e = new H0(i, this.domain, t, n);
    return this.elementLoadList.push(e), e;
  }
  createBeamElementTrapezoidalEdgeLoad(i, t, n, e) {
    const a = new K0(i, this.domain, t, n, e);
    return this.elementLoadList.push(a), a;
  }
  createBeamConcentratedLoad(i, t, n) {
    const e = new X0(i, this.domain, t, n);
    return this.elementLoadList.push(e), e;
  }
  createBeamConcentratedDeformation(i, t, n) {
    const e = new Qt(i, this.domain, t, n);
    return this.elementLoadList.push(e), e;
  }
  createBeamTemperatureLoad(i, t) {
    const n = new W0(i, this.domain, t);
    return this.elementLoadList.push(n), n;
  }
  createPrescribedDisplacement(i, t) {
    const n = new k0(i, this.domain, t);
    return this.prescribedBC.push(n), n;
  }
}
var Pe = /* @__PURE__ */ ((r) => (r[r.Dx = 0] = "Dx", r[r.Dy = 1] = "Dy", r[r.Dz = 2] = "Dz", r[r.Rx = 3] = "Rx", r[r.Ry = 4] = "Ry", r[r.Rz = 5] = "Rz", r))(Pe || {});
export {
  J0 as Beam2D,
  Qt as BeamConcentratedDeformation,
  X0 as BeamConcentratedLoad,
  nt as BeamElementLoad,
  K0 as BeamElementTrapezoidalEdgeLoad,
  H0 as BeamElementUniformEdgeLoad,
  W0 as BeamTemperatureLoad,
  eh as CrossSection,
  Pe as DofID,
  nh as Domain,
  Y0 as Element,
  oh as LinearStaticSolver,
  ba as Load,
  ah as LoadCase,
  th as Material,
  Q0 as NodalLoad,
  Z0 as Node,
  k0 as PrescribedDisplacement,
  ih as Solver
};
