import * as ir from "react";
import lt, { createContext as nf, useContext as of, useMemo as Ur, useState as yr, useRef as Or, useEffect as Mr, useCallback as mr, useLayoutEffect as ua } from "react";
import { createPortal as h1 } from "react-dom";
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function eo(r) {
  if (r.__esModule)
    return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var Eu = { exports: {} }, Qo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dl;
function d1() {
  if (dl)
    return Qo;
  dl = 1;
  var r = lt, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, p, b) {
    var _, B = {}, C = null, R = null;
    b !== void 0 && (C = "" + b), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (R = p.ref);
    for (_ in p)
      n.call(p, _) && !i.hasOwnProperty(_) && (B[_] = p[_]);
    if (u && u.defaultProps)
      for (_ in p = u.defaultProps, p)
        B[_] === void 0 && (B[_] = p[_]);
    return { $$typeof: t, type: u, key: C, ref: R, props: B, _owner: o.current };
  }
  return Qo.Fragment = e, Qo.jsx = c, Qo.jsxs = c, Qo;
}
var ts = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl;
function p1() {
  return pl || (pl = 1, process.env.NODE_ENV !== "production" && function() {
    var r = lt, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), O = Symbol.iterator, U = "@@iterator";
    function T(D) {
      if (D === null || typeof D != "object")
        return null;
      var ot = O && D[O] || D[U];
      return typeof ot == "function" ? ot : null;
    }
    var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(D) {
      {
        for (var ot = arguments.length, rt = new Array(ot > 1 ? ot - 1 : 0), dt = 1; dt < ot; dt++)
          rt[dt - 1] = arguments[dt];
        L("error", D, rt);
      }
    }
    function L(D, ot, rt) {
      {
        var dt = P.ReactDebugCurrentFrame, de = dt.getStackAddendum();
        de !== "" && (ot += "%s", rt = rt.concat([de]));
        var St = rt.map(function(bt) {
          return String(bt);
        });
        St.unshift("Warning: " + ot), Function.prototype.apply.call(console[D], console, St);
      }
    }
    var z = !1, N = !1, $ = !1, q = !1, W = !1, tt;
    tt = Symbol.for("react.module.reference");
    function ht(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === i || W || D === o || D === b || D === _ || q || D === R || z || N || $ || typeof D == "object" && D !== null && (D.$$typeof === C || D.$$typeof === B || D.$$typeof === c || D.$$typeof === u || D.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === tt || D.getModuleId !== void 0));
    }
    function J(D, ot, rt) {
      var dt = D.displayName;
      if (dt)
        return dt;
      var de = ot.displayName || ot.name || "";
      return de !== "" ? rt + "(" + de + ")" : rt;
    }
    function mt(D) {
      return D.displayName || "Context";
    }
    function I(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case n:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case b:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case u:
            var ot = D;
            return mt(ot) + ".Consumer";
          case c:
            var rt = D;
            return mt(rt._context) + ".Provider";
          case p:
            return J(D, D.render, "ForwardRef");
          case B:
            var dt = D.displayName || null;
            return dt !== null ? dt : I(D.type) || "Memo";
          case C: {
            var de = D, St = de._payload, bt = de._init;
            try {
              return I(bt(St));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var f = Object.assign, d = 0, y, w, v, x, A, m, l;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function j() {
      {
        if (d === 0) {
          y = console.log, w = console.info, v = console.warn, x = console.error, A = console.group, m = console.groupCollapsed, l = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        d++;
      }
    }
    function H() {
      {
        if (d--, d === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: f({}, D, {
              value: y
            }),
            info: f({}, D, {
              value: w
            }),
            warn: f({}, D, {
              value: v
            }),
            error: f({}, D, {
              value: x
            }),
            group: f({}, D, {
              value: A
            }),
            groupCollapsed: f({}, D, {
              value: m
            }),
            groupEnd: f({}, D, {
              value: l
            })
          });
        }
        d < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = P.ReactCurrentDispatcher, ft;
    function it(D, ot, rt) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (de) {
            var dt = de.stack.trim().match(/\n( *(at )?)/);
            ft = dt && dt[1] || "";
          }
        return `
` + ft + D;
      }
    }
    var ut = !1, Vt;
    {
      var Bt = typeof WeakMap == "function" ? WeakMap : Map;
      Vt = new Bt();
    }
    function _t(D, ot) {
      if (!D || ut)
        return "";
      {
        var rt = Vt.get(D);
        if (rt !== void 0)
          return rt;
      }
      var dt;
      ut = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var St;
      St = K.current, K.current = null, j();
      try {
        if (ot) {
          var bt = function() {
            throw Error();
          };
          if (Object.defineProperty(bt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(bt, []);
            } catch (ar) {
              dt = ar;
            }
            Reflect.construct(D, [], bt);
          } else {
            try {
              bt.call();
            } catch (ar) {
              dt = ar;
            }
            D.call(bt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ar) {
            dt = ar;
          }
          D();
        }
      } catch (ar) {
        if (ar && dt && typeof ar.stack == "string") {
          for (var ee = ar.stack.split(`
`), Ne = dt.stack.split(`
`), Be = ee.length - 1, Me = Ne.length - 1; Be >= 1 && Me >= 0 && ee[Be] !== Ne[Me]; )
            Me--;
          for (; Be >= 1 && Me >= 0; Be--, Me--)
            if (ee[Be] !== Ne[Me]) {
              if (Be !== 1 || Me !== 1)
                do
                  if (Be--, Me--, Me < 0 || ee[Be] !== Ne[Me]) {
                    var Ze = `
` + ee[Be].replace(" at new ", " at ");
                    return D.displayName && Ze.includes("<anonymous>") && (Ze = Ze.replace("<anonymous>", D.displayName)), typeof D == "function" && Vt.set(D, Ze), Ze;
                  }
                while (Be >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        ut = !1, K.current = St, H(), Error.prepareStackTrace = de;
      }
      var Cr = D ? D.displayName || D.name : "", wn = Cr ? it(Cr) : "";
      return typeof D == "function" && Vt.set(D, wn), wn;
    }
    function Wt(D, ot, rt) {
      return _t(D, !1);
    }
    function vt(D) {
      var ot = D.prototype;
      return !!(ot && ot.isReactComponent);
    }
    function Rt(D, ot, rt) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return _t(D, vt(D));
      if (typeof D == "string")
        return it(D);
      switch (D) {
        case b:
          return it("Suspense");
        case _:
          return it("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case p:
            return Wt(D.render);
          case B:
            return Rt(D.type, ot, rt);
          case C: {
            var dt = D, de = dt._payload, St = dt._init;
            try {
              return Rt(St(de), ot, rt);
            } catch {
            }
          }
        }
      return "";
    }
    var qe = Object.prototype.hasOwnProperty, Lt = {}, Pt = P.ReactDebugCurrentFrame;
    function nr(D) {
      if (D) {
        var ot = D._owner, rt = Rt(D.type, D._source, ot ? ot.type : null);
        Pt.setExtraStackFrame(rt);
      } else
        Pt.setExtraStackFrame(null);
    }
    function Ft(D, ot, rt, dt, de) {
      {
        var St = Function.call.bind(qe);
        for (var bt in D)
          if (St(D, bt)) {
            var ee = void 0;
            try {
              if (typeof D[bt] != "function") {
                var Ne = Error((dt || "React class") + ": " + rt + " type `" + bt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[bt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              ee = D[bt](ot, bt, dt, rt, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Be) {
              ee = Be;
            }
            ee && !(ee instanceof Error) && (nr(de), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", dt || "React class", rt, bt, typeof ee), nr(null)), ee instanceof Error && !(ee.message in Lt) && (Lt[ee.message] = !0, nr(de), F("Failed %s type: %s", rt, ee.message), nr(null));
          }
      }
    }
    var kt = Array.isArray;
    function Zt(D) {
      return kt(D);
    }
    function Ot(D) {
      {
        var ot = typeof Symbol == "function" && Symbol.toStringTag, rt = ot && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return rt;
      }
    }
    function Nt(D) {
      try {
        return he(D), !1;
      } catch {
        return !0;
      }
    }
    function he(D) {
      return "" + D;
    }
    function $t(D) {
      if (Nt(D))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ot(D)), he(D);
    }
    var h = P.ReactCurrentOwner, s = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, a, g, S;
    S = {};
    function M(D) {
      if (qe.call(D, "ref")) {
        var ot = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ot && ot.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function k(D) {
      if (qe.call(D, "key")) {
        var ot = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ot && ot.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Q(D, ot) {
      if (typeof D.ref == "string" && h.current && ot && h.current.stateNode !== ot) {
        var rt = I(h.current.type);
        S[rt] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(h.current.type), D.ref), S[rt] = !0);
      }
    }
    function nt(D, ot) {
      {
        var rt = function() {
          a || (a = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ot));
        };
        rt.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: rt,
          configurable: !0
        });
      }
    }
    function et(D, ot) {
      {
        var rt = function() {
          g || (g = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ot));
        };
        rt.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: rt,
          configurable: !0
        });
      }
    }
    var wt = function(D, ot, rt, dt, de, St, bt) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: ot,
        ref: rt,
        props: bt,
        // Record the component responsible for creating this element.
        _owner: St
      };
      return ee._store = {}, Object.defineProperty(ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.defineProperty(ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
    };
    function X(D, ot, rt, dt, de) {
      {
        var St, bt = {}, ee = null, Ne = null;
        rt !== void 0 && ($t(rt), ee = "" + rt), k(ot) && ($t(ot.key), ee = "" + ot.key), M(ot) && (Ne = ot.ref, Q(ot, de));
        for (St in ot)
          qe.call(ot, St) && !s.hasOwnProperty(St) && (bt[St] = ot[St]);
        if (D && D.defaultProps) {
          var Be = D.defaultProps;
          for (St in Be)
            bt[St] === void 0 && (bt[St] = Be[St]);
        }
        if (ee || Ne) {
          var Me = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          ee && nt(bt, Me), Ne && et(bt, Me);
        }
        return wt(D, ee, Ne, de, dt, h.current, bt);
      }
    }
    var Yt = P.ReactCurrentOwner, Gn = P.ReactDebugCurrentFrame;
    function Kt(D) {
      if (D) {
        var ot = D._owner, rt = Rt(D.type, D._source, ot ? ot.type : null);
        Gn.setExtraStackFrame(rt);
      } else
        Gn.setExtraStackFrame(null);
    }
    var Xt;
    Xt = !1;
    function On(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Qt() {
      {
        if (Yt.current) {
          var D = I(Yt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function re(D) {
      {
        if (D !== void 0) {
          var ot = D.fileName.replace(/^.*[\\\/]/, ""), rt = D.lineNumber;
          return `

Check your code at ` + ot + ":" + rt + ".";
        }
        return "";
      }
    }
    var Vn = {};
    function ne(D) {
      {
        var ot = Qt();
        if (!ot) {
          var rt = typeof D == "string" ? D : D.displayName || D.name;
          rt && (ot = `

Check the top-level render call using <` + rt + ">.");
        }
        return ot;
      }
    }
    function te(D, ot) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var rt = ne(ot);
        if (Vn[rt])
          return;
        Vn[rt] = !0;
        var dt = "";
        D && D._owner && D._owner !== Yt.current && (dt = " It was passed a child from " + I(D._owner.type) + "."), Kt(D), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', rt, dt), Kt(null);
      }
    }
    function Zn(D, ot) {
      {
        if (typeof D != "object")
          return;
        if (Zt(D))
          for (var rt = 0; rt < D.length; rt++) {
            var dt = D[rt];
            On(dt) && te(dt, ot);
          }
        else if (On(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var de = T(D);
          if (typeof de == "function" && de !== D.entries)
            for (var St = de.call(D), bt; !(bt = St.next()).done; )
              On(bt.value) && te(bt.value, ot);
        }
      }
    }
    function ie(D) {
      {
        var ot = D.type;
        if (ot == null || typeof ot == "string")
          return;
        var rt;
        if (typeof ot == "function")
          rt = ot.propTypes;
        else if (typeof ot == "object" && (ot.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ot.$$typeof === B))
          rt = ot.propTypes;
        else
          return;
        if (rt) {
          var dt = I(ot);
          Ft(rt, D.props, "prop", dt, D);
        } else if (ot.PropTypes !== void 0 && !Xt) {
          Xt = !0;
          var de = I(ot);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof ot.getDefaultProps == "function" && !ot.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oe(D) {
      {
        for (var ot = Object.keys(D.props), rt = 0; rt < ot.length; rt++) {
          var dt = ot[rt];
          if (dt !== "children" && dt !== "key") {
            Kt(D), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", dt), Kt(null);
            break;
          }
        }
        D.ref !== null && (Kt(D), F("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    function Yn(D, ot, rt, dt, de, St) {
      {
        var bt = ht(D);
        if (!bt) {
          var ee = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = re(de);
          Ne ? ee += Ne : ee += Qt();
          var Be;
          D === null ? Be = "null" : Zt(D) ? Be = "array" : D !== void 0 && D.$$typeof === t ? (Be = "<" + (I(D.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof D, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, ee);
        }
        var Me = X(D, ot, rt, de, St);
        if (Me == null)
          return Me;
        if (bt) {
          var Ze = ot.children;
          if (Ze !== void 0)
            if (dt)
              if (Zt(Ze)) {
                for (var Cr = 0; Cr < Ze.length; Cr++)
                  Zn(Ze[Cr], D);
                Object.freeze && Object.freeze(Ze);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zn(Ze, D);
        }
        return D === n ? oe(Me) : ie(Me), Me;
      }
    }
    function se(D, ot, rt) {
      return Yn(D, ot, rt, !0);
    }
    function ae(D, ot, rt) {
      return Yn(D, ot, rt, !1);
    }
    var vi = ae, ce = se;
    ts.Fragment = n, ts.jsx = vi, ts.jsxs = ce;
  }()), ts;
}
process.env.NODE_ENV === "production" ? Eu.exports = d1() : Eu.exports = p1();
var Ue = Eu.exports, f0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var t = {}.hasOwnProperty;
    function e() {
      for (var i = "", c = 0; c < arguments.length; c++) {
        var u = arguments[c];
        u && (i = o(i, n(u)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return e.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var c = "";
      for (var u in i)
        t.call(i, u) && i[u] && (c = o(c, u));
      return c;
    }
    function o(i, c) {
      return c ? i ? i + " " + c : i + c : i;
    }
    r.exports ? (e.default = e, r.exports = e) : window.classNames = e;
  })();
})(f0);
var g1 = f0.exports;
const y1 = /* @__PURE__ */ gn(g1);
var ue = {}, Ca = {};
Ca.byteLength = b1;
Ca.toByteArray = x1;
Ca.fromByteArray = S1;
var _n = [], Qr = [], m1 = typeof Uint8Array < "u" ? Uint8Array : Array, cc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var po = 0, w1 = cc.length; po < w1; ++po)
  _n[po] = cc[po], Qr[cc.charCodeAt(po)] = po;
Qr["-".charCodeAt(0)] = 62;
Qr["_".charCodeAt(0)] = 63;
function l0(r) {
  var t = r.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = r.indexOf("=");
  e === -1 && (e = t);
  var n = e === t ? 0 : 4 - e % 4;
  return [e, n];
}
function b1(r) {
  var t = l0(r), e = t[0], n = t[1];
  return (e + n) * 3 / 4 - n;
}
function v1(r, t, e) {
  return (t + e) * 3 / 4 - e;
}
function x1(r) {
  var t, e = l0(r), n = e[0], o = e[1], i = new m1(v1(r, n, o)), c = 0, u = o > 0 ? n - 4 : n, p;
  for (p = 0; p < u; p += 4)
    t = Qr[r.charCodeAt(p)] << 18 | Qr[r.charCodeAt(p + 1)] << 12 | Qr[r.charCodeAt(p + 2)] << 6 | Qr[r.charCodeAt(p + 3)], i[c++] = t >> 16 & 255, i[c++] = t >> 8 & 255, i[c++] = t & 255;
  return o === 2 && (t = Qr[r.charCodeAt(p)] << 2 | Qr[r.charCodeAt(p + 1)] >> 4, i[c++] = t & 255), o === 1 && (t = Qr[r.charCodeAt(p)] << 10 | Qr[r.charCodeAt(p + 1)] << 4 | Qr[r.charCodeAt(p + 2)] >> 2, i[c++] = t >> 8 & 255, i[c++] = t & 255), i;
}
function E1(r) {
  return _n[r >> 18 & 63] + _n[r >> 12 & 63] + _n[r >> 6 & 63] + _n[r & 63];
}
function _1(r, t, e) {
  for (var n, o = [], i = t; i < e; i += 3)
    n = (r[i] << 16 & 16711680) + (r[i + 1] << 8 & 65280) + (r[i + 2] & 255), o.push(E1(n));
  return o.join("");
}
function S1(r) {
  for (var t, e = r.length, n = e % 3, o = [], i = 16383, c = 0, u = e - n; c < u; c += i)
    o.push(_1(r, c, c + i > u ? u : c + i));
  return n === 1 ? (t = r[e - 1], o.push(
    _n[t >> 2] + _n[t << 4 & 63] + "=="
  )) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1], o.push(
    _n[t >> 10] + _n[t >> 4 & 63] + _n[t << 2 & 63] + "="
  )), o.join("");
}
var sf = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
sf.read = function(r, t, e, n, o) {
  var i, c, u = o * 8 - n - 1, p = (1 << u) - 1, b = p >> 1, _ = -7, B = e ? o - 1 : 0, C = e ? -1 : 1, R = r[t + B];
  for (B += C, i = R & (1 << -_) - 1, R >>= -_, _ += u; _ > 0; i = i * 256 + r[t + B], B += C, _ -= 8)
    ;
  for (c = i & (1 << -_) - 1, i >>= -_, _ += n; _ > 0; c = c * 256 + r[t + B], B += C, _ -= 8)
    ;
  if (i === 0)
    i = 1 - b;
  else {
    if (i === p)
      return c ? NaN : (R ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), i = i - b;
  }
  return (R ? -1 : 1) * c * Math.pow(2, i - n);
};
sf.write = function(r, t, e, n, o, i) {
  var c, u, p, b = i * 8 - o - 1, _ = (1 << b) - 1, B = _ >> 1, C = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, R = n ? 0 : i - 1, O = n ? 1 : -1, U = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, c = _) : (c = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -c)) < 1 && (c--, p *= 2), c + B >= 1 ? t += C / p : t += C * Math.pow(2, 1 - B), t * p >= 2 && (c++, p /= 2), c + B >= _ ? (u = 0, c = _) : c + B >= 1 ? (u = (t * p - 1) * Math.pow(2, o), c = c + B) : (u = t * Math.pow(2, B - 1) * Math.pow(2, o), c = 0)); o >= 8; r[e + R] = u & 255, R += O, u /= 256, o -= 8)
    ;
  for (c = c << o | u, b += o; b > 0; r[e + R] = c & 255, R += O, c /= 256, b -= 8)
    ;
  r[e + R - O] |= U * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = Ca, e = sf, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = u, r.SlowBuffer = F, r.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  r.kMaxLength = o, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const h = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(h, s), h.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(h) {
    if (h > o)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
    const s = new Uint8Array(h);
    return Object.setPrototypeOf(s, u.prototype), s;
  }
  function u(h, s, a) {
    if (typeof h == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return B(h);
    }
    return p(h, s, a);
  }
  u.poolSize = 8192;
  function p(h, s, a) {
    if (typeof h == "string")
      return C(h, s);
    if (ArrayBuffer.isView(h))
      return O(h);
    if (h == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    if (Zt(h, ArrayBuffer) || h && Zt(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Zt(h, SharedArrayBuffer) || h && Zt(h.buffer, SharedArrayBuffer)))
      return U(h, s, a);
    if (typeof h == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const g = h.valueOf && h.valueOf();
    if (g != null && g !== h)
      return u.from(g, s, a);
    const S = T(h);
    if (S)
      return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
      return u.from(h[Symbol.toPrimitive]("string"), s, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
    );
  }
  u.from = function(h, s, a) {
    return p(h, s, a);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function b(h) {
    if (typeof h != "number")
      throw new TypeError('"size" argument must be of type number');
    if (h < 0)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
  }
  function _(h, s, a) {
    return b(h), h <= 0 ? c(h) : s !== void 0 ? typeof a == "string" ? c(h).fill(s, a) : c(h).fill(s) : c(h);
  }
  u.alloc = function(h, s, a) {
    return _(h, s, a);
  };
  function B(h) {
    return b(h), c(h < 0 ? 0 : P(h) | 0);
  }
  u.allocUnsafe = function(h) {
    return B(h);
  }, u.allocUnsafeSlow = function(h) {
    return B(h);
  };
  function C(h, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = L(h, s) | 0;
    let g = c(a);
    const S = g.write(h, s);
    return S !== a && (g = g.slice(0, S)), g;
  }
  function R(h) {
    const s = h.length < 0 ? 0 : P(h.length) | 0, a = c(s);
    for (let g = 0; g < s; g += 1)
      a[g] = h[g] & 255;
    return a;
  }
  function O(h) {
    if (Zt(h, Uint8Array)) {
      const s = new Uint8Array(h);
      return U(s.buffer, s.byteOffset, s.byteLength);
    }
    return R(h);
  }
  function U(h, s, a) {
    if (s < 0 || h.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (h.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return s === void 0 && a === void 0 ? g = new Uint8Array(h) : a === void 0 ? g = new Uint8Array(h, s) : g = new Uint8Array(h, s, a), Object.setPrototypeOf(g, u.prototype), g;
  }
  function T(h) {
    if (u.isBuffer(h)) {
      const s = P(h.length) | 0, a = c(s);
      return a.length === 0 || h.copy(a, 0, 0, s), a;
    }
    if (h.length !== void 0)
      return typeof h.length != "number" || Ot(h.length) ? c(0) : R(h);
    if (h.type === "Buffer" && Array.isArray(h.data))
      return R(h.data);
  }
  function P(h) {
    if (h >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return h | 0;
  }
  function F(h) {
    return +h != h && (h = 0), u.alloc(+h);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (Zt(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), Zt(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let g = s.length, S = a.length;
    for (let M = 0, k = Math.min(g, S); M < k; ++M)
      if (s[M] !== a[M]) {
        g = s[M], S = a[M];
        break;
      }
    return g < S ? -1 : S < g ? 1 : 0;
  }, u.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(s, a) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return u.alloc(0);
    let g;
    if (a === void 0)
      for (a = 0, g = 0; g < s.length; ++g)
        a += s[g].length;
    const S = u.allocUnsafe(a);
    let M = 0;
    for (g = 0; g < s.length; ++g) {
      let k = s[g];
      if (Zt(k, Uint8Array))
        M + k.length > S.length ? (u.isBuffer(k) || (k = u.from(k)), k.copy(S, M)) : Uint8Array.prototype.set.call(
          S,
          k,
          M
        );
      else if (u.isBuffer(k))
        k.copy(S, M);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      M += k.length;
    }
    return S;
  };
  function L(h, s) {
    if (u.isBuffer(h))
      return h.length;
    if (ArrayBuffer.isView(h) || Zt(h, ArrayBuffer))
      return h.byteLength;
    if (typeof h != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
      );
    const a = h.length, g = arguments.length > 2 && arguments[2] === !0;
    if (!g && a === 0)
      return 0;
    let S = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return Lt(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return Ft(h).length;
        default:
          if (S)
            return g ? -1 : Lt(h).length;
          s = ("" + s).toLowerCase(), S = !0;
      }
  }
  u.byteLength = L;
  function z(h, s, a) {
    let g = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (h || (h = "utf8"); ; )
      switch (h) {
        case "hex":
          return x(this, s, a);
        case "utf8":
        case "utf-8":
          return f(this, s, a);
        case "ascii":
          return w(this, s, a);
        case "latin1":
        case "binary":
          return v(this, s, a);
        case "base64":
          return I(this, s, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return A(this, s, a);
        default:
          if (g)
            throw new TypeError("Unknown encoding: " + h);
          h = (h + "").toLowerCase(), g = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function N(h, s, a) {
    const g = h[s];
    h[s] = h[a], h[a] = g;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      N(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      N(this, a, a + 3), N(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      N(this, a, a + 7), N(this, a + 1, a + 6), N(this, a + 2, a + 5), N(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? f(this, 0, s) : z.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const a = r.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (s += " ... "), "<Buffer " + s + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(s, a, g, S, M) {
    if (Zt(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), g === void 0 && (g = s ? s.length : 0), S === void 0 && (S = 0), M === void 0 && (M = this.length), a < 0 || g > s.length || S < 0 || M > this.length)
      throw new RangeError("out of range index");
    if (S >= M && a >= g)
      return 0;
    if (S >= M)
      return -1;
    if (a >= g)
      return 1;
    if (a >>>= 0, g >>>= 0, S >>>= 0, M >>>= 0, this === s)
      return 0;
    let k = M - S, Q = g - a;
    const nt = Math.min(k, Q), et = this.slice(S, M), wt = s.slice(a, g);
    for (let X = 0; X < nt; ++X)
      if (et[X] !== wt[X]) {
        k = et[X], Q = wt[X];
        break;
      }
    return k < Q ? -1 : Q < k ? 1 : 0;
  };
  function $(h, s, a, g, S) {
    if (h.length === 0)
      return -1;
    if (typeof a == "string" ? (g = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Ot(a) && (a = S ? 0 : h.length - 1), a < 0 && (a = h.length + a), a >= h.length) {
      if (S)
        return -1;
      a = h.length - 1;
    } else if (a < 0)
      if (S)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, g)), u.isBuffer(s))
      return s.length === 0 ? -1 : q(h, s, a, g, S);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(h, s, a) : Uint8Array.prototype.lastIndexOf.call(h, s, a) : q(h, [s], a, g, S);
    throw new TypeError("val must be string, number or Buffer");
  }
  function q(h, s, a, g, S) {
    let M = 1, k = h.length, Q = s.length;
    if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
      if (h.length < 2 || s.length < 2)
        return -1;
      M = 2, k /= 2, Q /= 2, a /= 2;
    }
    function nt(wt, X) {
      return M === 1 ? wt[X] : wt.readUInt16BE(X * M);
    }
    let et;
    if (S) {
      let wt = -1;
      for (et = a; et < k; et++)
        if (nt(h, et) === nt(s, wt === -1 ? 0 : et - wt)) {
          if (wt === -1 && (wt = et), et - wt + 1 === Q)
            return wt * M;
        } else
          wt !== -1 && (et -= et - wt), wt = -1;
    } else
      for (a + Q > k && (a = k - Q), et = a; et >= 0; et--) {
        let wt = !0;
        for (let X = 0; X < Q; X++)
          if (nt(h, et + X) !== nt(s, X)) {
            wt = !1;
            break;
          }
        if (wt)
          return et;
      }
    return -1;
  }
  u.prototype.includes = function(s, a, g) {
    return this.indexOf(s, a, g) !== -1;
  }, u.prototype.indexOf = function(s, a, g) {
    return $(this, s, a, g, !0);
  }, u.prototype.lastIndexOf = function(s, a, g) {
    return $(this, s, a, g, !1);
  };
  function W(h, s, a, g) {
    a = Number(a) || 0;
    const S = h.length - a;
    g ? (g = Number(g), g > S && (g = S)) : g = S;
    const M = s.length;
    g > M / 2 && (g = M / 2);
    let k;
    for (k = 0; k < g; ++k) {
      const Q = parseInt(s.substr(k * 2, 2), 16);
      if (Ot(Q))
        return k;
      h[a + k] = Q;
    }
    return k;
  }
  function tt(h, s, a, g) {
    return kt(Lt(s, h.length - a), h, a, g);
  }
  function ht(h, s, a, g) {
    return kt(Pt(s), h, a, g);
  }
  function J(h, s, a, g) {
    return kt(Ft(s), h, a, g);
  }
  function mt(h, s, a, g) {
    return kt(nr(s, h.length - a), h, a, g);
  }
  u.prototype.write = function(s, a, g, S) {
    if (a === void 0)
      S = "utf8", g = this.length, a = 0;
    else if (g === void 0 && typeof a == "string")
      S = a, g = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(g) ? (g = g >>> 0, S === void 0 && (S = "utf8")) : (S = g, g = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const M = this.length - a;
    if ((g === void 0 || g > M) && (g = M), s.length > 0 && (g < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let k = !1;
    for (; ; )
      switch (S) {
        case "hex":
          return W(this, s, a, g);
        case "utf8":
        case "utf-8":
          return tt(this, s, a, g);
        case "ascii":
        case "latin1":
        case "binary":
          return ht(this, s, a, g);
        case "base64":
          return J(this, s, a, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return mt(this, s, a, g);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + S);
          S = ("" + S).toLowerCase(), k = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function I(h, s, a) {
    return s === 0 && a === h.length ? t.fromByteArray(h) : t.fromByteArray(h.slice(s, a));
  }
  function f(h, s, a) {
    a = Math.min(h.length, a);
    const g = [];
    let S = s;
    for (; S < a; ) {
      const M = h[S];
      let k = null, Q = M > 239 ? 4 : M > 223 ? 3 : M > 191 ? 2 : 1;
      if (S + Q <= a) {
        let nt, et, wt, X;
        switch (Q) {
          case 1:
            M < 128 && (k = M);
            break;
          case 2:
            nt = h[S + 1], (nt & 192) === 128 && (X = (M & 31) << 6 | nt & 63, X > 127 && (k = X));
            break;
          case 3:
            nt = h[S + 1], et = h[S + 2], (nt & 192) === 128 && (et & 192) === 128 && (X = (M & 15) << 12 | (nt & 63) << 6 | et & 63, X > 2047 && (X < 55296 || X > 57343) && (k = X));
            break;
          case 4:
            nt = h[S + 1], et = h[S + 2], wt = h[S + 3], (nt & 192) === 128 && (et & 192) === 128 && (wt & 192) === 128 && (X = (M & 15) << 18 | (nt & 63) << 12 | (et & 63) << 6 | wt & 63, X > 65535 && X < 1114112 && (k = X));
        }
      }
      k === null ? (k = 65533, Q = 1) : k > 65535 && (k -= 65536, g.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), g.push(k), S += Q;
    }
    return y(g);
  }
  const d = 4096;
  function y(h) {
    const s = h.length;
    if (s <= d)
      return String.fromCharCode.apply(String, h);
    let a = "", g = 0;
    for (; g < s; )
      a += String.fromCharCode.apply(
        String,
        h.slice(g, g += d)
      );
    return a;
  }
  function w(h, s, a) {
    let g = "";
    a = Math.min(h.length, a);
    for (let S = s; S < a; ++S)
      g += String.fromCharCode(h[S] & 127);
    return g;
  }
  function v(h, s, a) {
    let g = "";
    a = Math.min(h.length, a);
    for (let S = s; S < a; ++S)
      g += String.fromCharCode(h[S]);
    return g;
  }
  function x(h, s, a) {
    const g = h.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > g) && (a = g);
    let S = "";
    for (let M = s; M < a; ++M)
      S += Nt[h[M]];
    return S;
  }
  function A(h, s, a) {
    const g = h.slice(s, a);
    let S = "";
    for (let M = 0; M < g.length - 1; M += 2)
      S += String.fromCharCode(g[M] + g[M + 1] * 256);
    return S;
  }
  u.prototype.slice = function(s, a) {
    const g = this.length;
    s = ~~s, a = a === void 0 ? g : ~~a, s < 0 ? (s += g, s < 0 && (s = 0)) : s > g && (s = g), a < 0 ? (a += g, a < 0 && (a = 0)) : a > g && (a = g), a < s && (a = s);
    const S = this.subarray(s, a);
    return Object.setPrototypeOf(S, u.prototype), S;
  };
  function m(h, s, a) {
    if (h % 1 !== 0 || h < 0)
      throw new RangeError("offset is not uint");
    if (h + s > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s], M = 1, k = 0;
    for (; ++k < a && (M *= 256); )
      S += this[s + k] * M;
    return S;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s + --a], M = 1;
    for (; a > 0 && (M *= 256); )
      S += this[s + --a] * M;
    return S;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(s, a) {
    return s = s >>> 0, a || m(s, 1, this.length), this[s];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(s, a) {
    return s = s >>> 0, a || m(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(s, a) {
    return s = s >>> 0, a || m(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, u.prototype.readBigUInt64LE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, M = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + g * 2 ** 24;
    return BigInt(S) + (BigInt(M) << BigInt(32));
  }), u.prototype.readBigUInt64BE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], M = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g;
    return (BigInt(S) << BigInt(32)) + BigInt(M);
  }), u.prototype.readIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s], M = 1, k = 0;
    for (; ++k < a && (M *= 256); )
      S += this[s + k] * M;
    return M *= 128, S >= M && (S -= Math.pow(2, 8 * a)), S;
  }, u.prototype.readIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = a, M = 1, k = this[s + --S];
    for (; S > 0 && (M *= 256); )
      k += this[s + --S] * M;
    return M *= 128, k >= M && (k -= Math.pow(2, 8 * a)), k;
  }, u.prototype.readInt8 = function(s, a) {
    return s = s >>> 0, a || m(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, a) {
    s = s >>> 0, a || m(s, 2, this.length);
    const g = this[s] | this[s + 1] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt16BE = function(s, a) {
    s = s >>> 0, a || m(s, 2, this.length);
    const g = this[s + 1] | this[s] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt32LE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (g << 24);
    return (BigInt(S) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = (a << 24) + // Overflow
    this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(S) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g);
  }), u.prototype.readFloatLE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), e.read(this, s, !0, 23, 4);
  }, u.prototype.readFloatBE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), e.read(this, s, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(s, a) {
    return s = s >>> 0, a || m(s, 8, this.length), e.read(this, s, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(s, a) {
    return s = s >>> 0, a || m(s, 8, this.length), e.read(this, s, !1, 52, 8);
  };
  function l(h, s, a, g, S, M) {
    if (!u.isBuffer(h))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > S || s < M)
      throw new RangeError('"value" argument is out of bounds');
    if (a + g > h.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !S) {
      const Q = Math.pow(2, 8 * g) - 1;
      l(this, s, a, g, Q, 0);
    }
    let M = 1, k = 0;
    for (this[a] = s & 255; ++k < g && (M *= 256); )
      this[a + k] = s / M & 255;
    return a + g;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !S) {
      const Q = Math.pow(2, 8 * g) - 1;
      l(this, s, a, g, Q, 0);
    }
    let M = g - 1, k = 1;
    for (this[a + M] = s & 255; --M >= 0 && (k *= 256); )
      this[a + M] = s / k & 255;
    return a + g;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 1, 255, 0), this[a] = s & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 65535, 0), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 65535, 0), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 4294967295, 0), this[a + 3] = s >>> 24, this[a + 2] = s >>> 16, this[a + 1] = s >>> 8, this[a] = s & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 4294967295, 0), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  };
  function E(h, s, a, g, S) {
    _t(s, g, S, h, a, 7);
    let M = Number(s & BigInt(4294967295));
    h[a++] = M, M = M >> 8, h[a++] = M, M = M >> 8, h[a++] = M, M = M >> 8, h[a++] = M;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return h[a++] = k, k = k >> 8, h[a++] = k, k = k >> 8, h[a++] = k, k = k >> 8, h[a++] = k, a;
  }
  function j(h, s, a, g, S) {
    _t(s, g, S, h, a, 7);
    let M = Number(s & BigInt(4294967295));
    h[a + 7] = M, M = M >> 8, h[a + 6] = M, M = M >> 8, h[a + 5] = M, M = M >> 8, h[a + 4] = M;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return h[a + 3] = k, k = k >> 8, h[a + 2] = k, k = k >> 8, h[a + 1] = k, k = k >> 8, h[a] = k, a + 8;
  }
  u.prototype.writeBigUInt64LE = he(function(s, a = 0) {
    return E(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = he(function(s, a = 0) {
    return j(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, !S) {
      const nt = Math.pow(2, 8 * g - 1);
      l(this, s, a, g, nt - 1, -nt);
    }
    let M = 0, k = 1, Q = 0;
    for (this[a] = s & 255; ++M < g && (k *= 256); )
      s < 0 && Q === 0 && this[a + M - 1] !== 0 && (Q = 1), this[a + M] = (s / k >> 0) - Q & 255;
    return a + g;
  }, u.prototype.writeIntBE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, !S) {
      const nt = Math.pow(2, 8 * g - 1);
      l(this, s, a, g, nt - 1, -nt);
    }
    let M = g - 1, k = 1, Q = 0;
    for (this[a + M] = s & 255; --M >= 0 && (k *= 256); )
      s < 0 && Q === 0 && this[a + M + 1] !== 0 && (Q = 1), this[a + M] = (s / k >> 0) - Q & 255;
    return a + g;
  }, u.prototype.writeInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[a] = s & 255, a + 1;
  }, u.prototype.writeInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 32767, -32768), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 32767, -32768), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 2147483647, -2147483648), this[a] = s & 255, this[a + 1] = s >>> 8, this[a + 2] = s >>> 16, this[a + 3] = s >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  }, u.prototype.writeBigInt64LE = he(function(s, a = 0) {
    return E(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = he(function(s, a = 0) {
    return j(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function H(h, s, a, g, S, M) {
    if (a + g > h.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function K(h, s, a, g, S) {
    return s = +s, a = a >>> 0, S || H(h, s, a, 4), e.write(h, s, a, g, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(s, a, g) {
    return K(this, s, a, !0, g);
  }, u.prototype.writeFloatBE = function(s, a, g) {
    return K(this, s, a, !1, g);
  };
  function ft(h, s, a, g, S) {
    return s = +s, a = a >>> 0, S || H(h, s, a, 8), e.write(h, s, a, g, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(s, a, g) {
    return ft(this, s, a, !0, g);
  }, u.prototype.writeDoubleBE = function(s, a, g) {
    return ft(this, s, a, !1, g);
  }, u.prototype.copy = function(s, a, g, S) {
    if (!u.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (g || (g = 0), !S && S !== 0 && (S = this.length), a >= s.length && (a = s.length), a || (a = 0), S > 0 && S < g && (S = g), S === g || s.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (g < 0 || g >= this.length)
      throw new RangeError("Index out of range");
    if (S < 0)
      throw new RangeError("sourceEnd out of bounds");
    S > this.length && (S = this.length), s.length - a < S - g && (S = s.length - a + g);
    const M = S - g;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, g, S) : Uint8Array.prototype.set.call(
      s,
      this.subarray(g, S),
      a
    ), M;
  }, u.prototype.fill = function(s, a, g, S) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (S = a, a = 0, g = this.length) : typeof g == "string" && (S = g, g = this.length), S !== void 0 && typeof S != "string")
        throw new TypeError("encoding must be a string");
      if (typeof S == "string" && !u.isEncoding(S))
        throw new TypeError("Unknown encoding: " + S);
      if (s.length === 1) {
        const k = s.charCodeAt(0);
        (S === "utf8" && k < 128 || S === "latin1") && (s = k);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < g)
      throw new RangeError("Out of range index");
    if (g <= a)
      return this;
    a = a >>> 0, g = g === void 0 ? this.length : g >>> 0, s || (s = 0);
    let M;
    if (typeof s == "number")
      for (M = a; M < g; ++M)
        this[M] = s;
    else {
      const k = u.isBuffer(s) ? s : u.from(s, S), Q = k.length;
      if (Q === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (M = 0; M < g - a; ++M)
        this[M + a] = k[M % Q];
    }
    return this;
  };
  const it = {};
  function ut(h, s, a) {
    it[h] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
      }
      get code() {
        return h;
      }
      set code(S) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: S,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${h}]: ${this.message}`;
      }
    };
  }
  ut(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(h) {
      return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ut(
    "ERR_INVALID_ARG_TYPE",
    function(h, s) {
      return `The "${h}" argument must be of type number. Received type ${typeof s}`;
    },
    TypeError
  ), ut(
    "ERR_OUT_OF_RANGE",
    function(h, s, a) {
      let g = `The value of "${h}" is out of range.`, S = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? S = Vt(String(a)) : typeof a == "bigint" && (S = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (S = Vt(S)), S += "n"), g += ` It must be ${s}. Received ${S}`, g;
    },
    RangeError
  );
  function Vt(h) {
    let s = "", a = h.length;
    const g = h[0] === "-" ? 1 : 0;
    for (; a >= g + 4; a -= 3)
      s = `_${h.slice(a - 3, a)}${s}`;
    return `${h.slice(0, a)}${s}`;
  }
  function Bt(h, s, a) {
    Wt(s, "offset"), (h[s] === void 0 || h[s + a] === void 0) && vt(s, h.length - (a + 1));
  }
  function _t(h, s, a, g, S, M) {
    if (h > a || h < s) {
      const k = typeof s == "bigint" ? "n" : "";
      let Q;
      throw M > 3 ? s === 0 || s === BigInt(0) ? Q = `>= 0${k} and < 2${k} ** ${(M + 1) * 8}${k}` : Q = `>= -(2${k} ** ${(M + 1) * 8 - 1}${k}) and < 2 ** ${(M + 1) * 8 - 1}${k}` : Q = `>= ${s}${k} and <= ${a}${k}`, new it.ERR_OUT_OF_RANGE("value", Q, h);
    }
    Bt(g, S, M);
  }
  function Wt(h, s) {
    if (typeof h != "number")
      throw new it.ERR_INVALID_ARG_TYPE(s, "number", h);
  }
  function vt(h, s, a) {
    throw Math.floor(h) !== h ? (Wt(h, a), new it.ERR_OUT_OF_RANGE(a || "offset", "an integer", h)) : s < 0 ? new it.ERR_BUFFER_OUT_OF_BOUNDS() : new it.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      h
    );
  }
  const Rt = /[^+/0-9A-Za-z-_]/g;
  function qe(h) {
    if (h = h.split("=")[0], h = h.trim().replace(Rt, ""), h.length < 2)
      return "";
    for (; h.length % 4 !== 0; )
      h = h + "=";
    return h;
  }
  function Lt(h, s) {
    s = s || 1 / 0;
    let a;
    const g = h.length;
    let S = null;
    const M = [];
    for (let k = 0; k < g; ++k) {
      if (a = h.charCodeAt(k), a > 55295 && a < 57344) {
        if (!S) {
          if (a > 56319) {
            (s -= 3) > -1 && M.push(239, 191, 189);
            continue;
          } else if (k + 1 === g) {
            (s -= 3) > -1 && M.push(239, 191, 189);
            continue;
          }
          S = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && M.push(239, 191, 189), S = a;
          continue;
        }
        a = (S - 55296 << 10 | a - 56320) + 65536;
      } else
        S && (s -= 3) > -1 && M.push(239, 191, 189);
      if (S = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        M.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        M.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        M.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        M.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return M;
  }
  function Pt(h) {
    const s = [];
    for (let a = 0; a < h.length; ++a)
      s.push(h.charCodeAt(a) & 255);
    return s;
  }
  function nr(h, s) {
    let a, g, S;
    const M = [];
    for (let k = 0; k < h.length && !((s -= 2) < 0); ++k)
      a = h.charCodeAt(k), g = a >> 8, S = a % 256, M.push(S), M.push(g);
    return M;
  }
  function Ft(h) {
    return t.toByteArray(qe(h));
  }
  function kt(h, s, a, g) {
    let S;
    for (S = 0; S < g && !(S + a >= s.length || S >= h.length); ++S)
      s[S + a] = h[S];
    return S;
  }
  function Zt(h, s) {
    return h instanceof s || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === s.name;
  }
  function Ot(h) {
    return h !== h;
  }
  const Nt = function() {
    const h = "0123456789abcdef", s = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const g = a * 16;
      for (let S = 0; S < 16; ++S)
        s[g + S] = h[a] + h[S];
    }
    return s;
  }();
  function he(h) {
    return typeof BigInt > "u" ? $t : h;
  }
  function $t() {
    throw new Error("BigInt not supported");
  }
})(ue);
function gl(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function B1(r) {
  return r instanceof Uint8Array || r != null && typeof r == "object" && r.constructor.name === "Uint8Array";
}
function h0(r, ...t) {
  if (!B1(r))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function A1(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  gl(r.outputLen), gl(r.blockLen);
}
function fa(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function I1(r, t) {
  h0(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const uc = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function d0(r) {
  return r instanceof Uint8Array || r != null && typeof r == "object" && r.constructor.name === "Uint8Array";
}
const fc = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), bn = (r, t) => r << 32 - t | r >>> t, M1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!M1)
  throw new Error("Non little-endian hardware is not supported");
function R1(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function af(r) {
  if (typeof r == "string" && (r = R1(r)), !d0(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function k1(...r) {
  let t = 0;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (!d0(o))
      throw new Error("Uint8Array expected");
    t += o.length;
  }
  const e = new Uint8Array(t);
  for (let n = 0, o = 0; n < r.length; n++) {
    const i = r[n];
    e.set(i, o), o += i.length;
  }
  return e;
}
let p0 = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function g0(r) {
  const t = (n) => r().update(af(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function y0(r = 32) {
  if (uc && typeof uc.getRandomValues == "function")
    return uc.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
function T1(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const o = BigInt(32), i = BigInt(4294967295), c = Number(e >> o & i), u = Number(e & i), p = n ? 4 : 0, b = n ? 0 : 4;
  r.setUint32(t + p, c, n), r.setUint32(t + b, u, n);
}
let m0 = class extends p0 {
  constructor(t, e, n, o) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = fc(this.buffer);
  }
  update(t) {
    fa(this);
    const { view: e, buffer: n, blockLen: o } = this;
    t = af(t);
    const i = t.length;
    for (let c = 0; c < i; ) {
      const u = Math.min(o - this.pos, i - c);
      if (u === o) {
        const p = fc(t);
        for (; o <= i - c; c += o)
          this.process(p, c);
        continue;
      }
      n.set(t.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === o && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    fa(this), I1(t, this), this.finished = !0;
    const { buffer: e, view: n, blockLen: o, isLE: i } = this;
    let { pos: c } = this;
    e[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > o - c && (this.process(n, 0), c = 0);
    for (let B = c; B < o; B++)
      e[B] = 0;
    T1(n, o - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const u = fc(t), p = this.outputLen;
    if (p % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const b = p / 4, _ = this.get();
    if (b > _.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let B = 0; B < b; B++)
      u.setUint32(4 * B, _[B], i);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const n = t.slice(0, e);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: n, length: o, finished: i, destroyed: c, pos: u } = this;
    return t.length = o, t.pos = u, t.finished = i, t.destroyed = c, o % e && t.buffer.set(n), t;
  }
};
const Ps = /* @__PURE__ */ BigInt(2 ** 32 - 1), _u = /* @__PURE__ */ BigInt(32);
function w0(r, t = !1) {
  return t ? { h: Number(r & Ps), l: Number(r >> _u & Ps) } : { h: Number(r >> _u & Ps) | 0, l: Number(r & Ps) | 0 };
}
function C1(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let o = 0; o < r.length; o++) {
    const { h: i, l: c } = w0(r[o], t);
    [e[o], n[o]] = [i, c];
  }
  return [e, n];
}
const L1 = (r, t) => BigInt(r >>> 0) << _u | BigInt(t >>> 0), U1 = (r, t, e) => r >>> e, O1 = (r, t, e) => r << 32 - e | t >>> e, F1 = (r, t, e) => r >>> e | t << 32 - e, N1 = (r, t, e) => r << 32 - e | t >>> e, $1 = (r, t, e) => r << 64 - e | t >>> e - 32, P1 = (r, t, e) => r >>> e - 32 | t << 64 - e, D1 = (r, t) => t, z1 = (r, t) => r, q1 = (r, t, e) => r << e | t >>> 32 - e, W1 = (r, t, e) => t << e | r >>> 32 - e, j1 = (r, t, e) => t << e - 32 | r >>> 64 - e, H1 = (r, t, e) => r << e - 32 | t >>> 64 - e;
function K1(r, t, e, n) {
  const o = (t >>> 0) + (n >>> 0);
  return { h: r + e + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const G1 = (r, t, e) => (r >>> 0) + (t >>> 0) + (e >>> 0), V1 = (r, t, e, n) => t + e + n + (r / 2 ** 32 | 0) | 0, Z1 = (r, t, e, n) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0), Y1 = (r, t, e, n, o) => t + e + n + o + (r / 2 ** 32 | 0) | 0, X1 = (r, t, e, n, o) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0) + (o >>> 0), J1 = (r, t, e, n, o, i) => t + e + n + o + i + (r / 2 ** 32 | 0) | 0, Q1 = {
  fromBig: w0,
  split: C1,
  toBig: L1,
  shrSH: U1,
  shrSL: O1,
  rotrSH: F1,
  rotrSL: N1,
  rotrBH: $1,
  rotrBL: P1,
  rotr32H: D1,
  rotr32L: z1,
  rotlSH: q1,
  rotlSL: W1,
  rotlBH: j1,
  rotlBL: H1,
  add: K1,
  add3L: G1,
  add3H: V1,
  add4L: Z1,
  add4H: Y1,
  add5H: J1,
  add5L: X1
}, fe = Q1, [tg, eg] = /* @__PURE__ */ (() => fe.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((r) => BigInt(r))))(), Xn = /* @__PURE__ */ new Uint32Array(80), Jn = /* @__PURE__ */ new Uint32Array(80);
let rg = class extends m0 {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: e, Bh: n, Bl: o, Ch: i, Cl: c, Dh: u, Dl: p, Eh: b, El: _, Fh: B, Fl: C, Gh: R, Gl: O, Hh: U, Hl: T } = this;
    return [t, e, n, o, i, c, u, p, b, _, B, C, R, O, U, T];
  }
  // prettier-ignore
  set(t, e, n, o, i, c, u, p, b, _, B, C, R, O, U, T) {
    this.Ah = t | 0, this.Al = e | 0, this.Bh = n | 0, this.Bl = o | 0, this.Ch = i | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = p | 0, this.Eh = b | 0, this.El = _ | 0, this.Fh = B | 0, this.Fl = C | 0, this.Gh = R | 0, this.Gl = O | 0, this.Hh = U | 0, this.Hl = T | 0;
  }
  process(t, e) {
    for (let L = 0; L < 16; L++, e += 4)
      Xn[L] = t.getUint32(e), Jn[L] = t.getUint32(e += 4);
    for (let L = 16; L < 80; L++) {
      const z = Xn[L - 15] | 0, N = Jn[L - 15] | 0, $ = fe.rotrSH(z, N, 1) ^ fe.rotrSH(z, N, 8) ^ fe.shrSH(z, N, 7), q = fe.rotrSL(z, N, 1) ^ fe.rotrSL(z, N, 8) ^ fe.shrSL(z, N, 7), W = Xn[L - 2] | 0, tt = Jn[L - 2] | 0, ht = fe.rotrSH(W, tt, 19) ^ fe.rotrBH(W, tt, 61) ^ fe.shrSH(W, tt, 6), J = fe.rotrSL(W, tt, 19) ^ fe.rotrBL(W, tt, 61) ^ fe.shrSL(W, tt, 6), mt = fe.add4L(q, J, Jn[L - 7], Jn[L - 16]), I = fe.add4H(mt, $, ht, Xn[L - 7], Xn[L - 16]);
      Xn[L] = I | 0, Jn[L] = mt | 0;
    }
    let { Ah: n, Al: o, Bh: i, Bl: c, Ch: u, Cl: p, Dh: b, Dl: _, Eh: B, El: C, Fh: R, Fl: O, Gh: U, Gl: T, Hh: P, Hl: F } = this;
    for (let L = 0; L < 80; L++) {
      const z = fe.rotrSH(B, C, 14) ^ fe.rotrSH(B, C, 18) ^ fe.rotrBH(B, C, 41), N = fe.rotrSL(B, C, 14) ^ fe.rotrSL(B, C, 18) ^ fe.rotrBL(B, C, 41), $ = B & R ^ ~B & U, q = C & O ^ ~C & T, W = fe.add5L(F, N, q, eg[L], Jn[L]), tt = fe.add5H(W, P, z, $, tg[L], Xn[L]), ht = W | 0, J = fe.rotrSH(n, o, 28) ^ fe.rotrBH(n, o, 34) ^ fe.rotrBH(n, o, 39), mt = fe.rotrSL(n, o, 28) ^ fe.rotrBL(n, o, 34) ^ fe.rotrBL(n, o, 39), I = n & i ^ n & u ^ i & u, f = o & c ^ o & p ^ c & p;
      P = U | 0, F = T | 0, U = R | 0, T = O | 0, R = B | 0, O = C | 0, { h: B, l: C } = fe.add(b | 0, _ | 0, tt | 0, ht | 0), b = u | 0, _ = p | 0, u = i | 0, p = c | 0, i = n | 0, c = o | 0;
      const d = fe.add3L(ht, mt, f);
      n = fe.add3H(d, tt, J, I), o = d | 0;
    }
    ({ h: n, l: o } = fe.add(this.Ah | 0, this.Al | 0, n | 0, o | 0)), { h: i, l: c } = fe.add(this.Bh | 0, this.Bl | 0, i | 0, c | 0), { h: u, l: p } = fe.add(this.Ch | 0, this.Cl | 0, u | 0, p | 0), { h: b, l: _ } = fe.add(this.Dh | 0, this.Dl | 0, b | 0, _ | 0), { h: B, l: C } = fe.add(this.Eh | 0, this.El | 0, B | 0, C | 0), { h: R, l: O } = fe.add(this.Fh | 0, this.Fl | 0, R | 0, O | 0), { h: U, l: T } = fe.add(this.Gh | 0, this.Gl | 0, U | 0, T | 0), { h: P, l: F } = fe.add(this.Hh | 0, this.Hl | 0, P | 0, F | 0), this.set(n, o, i, c, u, p, b, _, B, C, R, O, U, T, P, F);
  }
  roundClean() {
    Xn.fill(0), Jn.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
const ng = /* @__PURE__ */ g0(() => new rg());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const b0 = BigInt(0), La = BigInt(1), ig = BigInt(2);
function In(r) {
  return r instanceof Uint8Array || r != null && typeof r == "object" && r.constructor.name === "Uint8Array";
}
const og = /* @__PURE__ */ Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function Qi(r) {
  if (!In(r))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += og[r[e]];
  return t;
}
function v0(r) {
  const t = r.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function cf(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return BigInt(r === "" ? "0" : `0x${r}`);
}
const Fn = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function yl(r) {
  if (r >= Fn._0 && r <= Fn._9)
    return r - Fn._0;
  if (r >= Fn._A && r <= Fn._F)
    return r - (Fn._A - 10);
  if (r >= Fn._a && r <= Fn._f)
    return r - (Fn._a - 10);
}
function Oo(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  const t = r.length, e = t / 2;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const n = new Uint8Array(e);
  for (let o = 0, i = 0; o < e; o++, i += 2) {
    const c = yl(r.charCodeAt(i)), u = yl(r.charCodeAt(i + 1));
    if (c === void 0 || u === void 0) {
      const p = r[i] + r[i + 1];
      throw new Error('hex string expected, got non-hex character "' + p + '" at index ' + i);
    }
    n[o] = c * 16 + u;
  }
  return n;
}
function Gi(r) {
  return cf(Qi(r));
}
function Mo(r) {
  if (!In(r))
    throw new Error("Uint8Array expected");
  return cf(Qi(Uint8Array.from(r).reverse()));
}
function Fo(r, t) {
  return Oo(r.toString(16).padStart(t * 2, "0"));
}
function ms(r, t) {
  return Fo(r, t).reverse();
}
function sg(r) {
  return Oo(v0(r));
}
function Qe(r, t, e) {
  let n;
  if (typeof t == "string")
    try {
      n = Oo(t);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (In(t))
    n = Uint8Array.from(t);
  else
    throw new Error(`${r} must be hex string or Uint8Array`);
  const o = n.length;
  if (typeof e == "number" && o !== e)
    throw new Error(`${r} expected ${e} bytes, got ${o}`);
  return n;
}
function to(...r) {
  let t = 0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (!In(i))
      throw new Error("Uint8Array expected");
    t += i.length;
  }
  let e = new Uint8Array(t), n = 0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    e.set(i, n), n += i.length;
  }
  return e;
}
function ag(r, t) {
  if (r.length !== t.length)
    return !1;
  let e = 0;
  for (let n = 0; n < r.length; n++)
    e |= r[n] ^ t[n];
  return e === 0;
}
function cg(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function ug(r) {
  let t;
  for (t = 0; r > b0; r >>= La, t += 1)
    ;
  return t;
}
function fg(r, t) {
  return r >> BigInt(t) & La;
}
const lg = (r, t, e) => r | (e ? La : b0) << BigInt(t), uf = (r) => (ig << BigInt(r - 1)) - La, lc = (r) => new Uint8Array(r), ml = (r) => Uint8Array.from(r);
function x0(r, t, e) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function")
    throw new Error("hmacFn must be a function");
  let n = lc(r), o = lc(r), i = 0;
  const c = () => {
    n.fill(1), o.fill(0), i = 0;
  }, u = (...B) => e(o, n, ...B), p = (B = lc()) => {
    o = u(ml([0]), B), n = u(), B.length !== 0 && (o = u(ml([1]), B), n = u());
  }, b = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let B = 0;
    const C = [];
    for (; B < t; ) {
      n = u();
      const R = n.slice();
      C.push(R), B += n.length;
    }
    return to(...C);
  };
  return (B, C) => {
    c(), p(B);
    let R;
    for (; !(R = C(b())); )
      p();
    return c(), R;
  };
}
const hg = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || In(r),
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, t) => t.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function Ko(r, t, e = {}) {
  const n = (o, i, c) => {
    const u = hg[i];
    if (typeof u != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const p = r[o];
    if (!(c && p === void 0) && !u(p, r))
      throw new Error(`Invalid param ${String(o)}=${p} (${typeof p}), expected ${i}`);
  };
  for (const [o, i] of Object.entries(t))
    n(o, i, !1);
  for (const [o, i] of Object.entries(e))
    n(o, i, !0);
  return r;
}
const dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: fg,
  bitLen: ug,
  bitMask: uf,
  bitSet: lg,
  bytesToHex: Qi,
  bytesToNumberBE: Gi,
  bytesToNumberLE: Mo,
  concatBytes: to,
  createHmacDrbg: x0,
  ensureBytes: Qe,
  equalBytes: ag,
  hexToBytes: Oo,
  hexToNumber: cf,
  isBytes: In,
  numberToBytesBE: Fo,
  numberToBytesLE: ms,
  numberToHexUnpadded: v0,
  numberToVarBytesBE: sg,
  utf8ToBytes: cg,
  validateObject: Ko
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const sr = BigInt(0), ze = BigInt(1), Li = BigInt(2), pg = BigInt(3), Su = BigInt(4), wl = BigInt(5), bl = BigInt(8);
BigInt(9);
BigInt(16);
function Fe(r, t) {
  const e = r % t;
  return e >= sr ? e : t + e;
}
function gg(r, t, e) {
  if (e <= sr || t < sr)
    throw new Error("Expected power/modulo > 0");
  if (e === ze)
    return sr;
  let n = ze;
  for (; t > sr; )
    t & ze && (n = n * r % e), r = r * r % e, t >>= ze;
  return n;
}
function We(r, t, e) {
  let n = r;
  for (; t-- > sr; )
    n *= n, n %= e;
  return n;
}
function Bu(r, t) {
  if (r === sr || t <= sr)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = Fe(r, t), n = t, o = sr, i = ze;
  for (; e !== sr; ) {
    const u = n / e, p = n % e, b = o - i * u;
    n = e, e = p, o = i, i = b;
  }
  if (n !== ze)
    throw new Error("invert: does not exist");
  return Fe(o, t);
}
function yg(r) {
  const t = (r - ze) / Li;
  let e, n, o;
  for (e = r - ze, n = 0; e % Li === sr; e /= Li, n++)
    ;
  for (o = Li; o < r && gg(o, t, r) !== r - ze; o++)
    ;
  if (n === 1) {
    const c = (r + ze) / Su;
    return function(p, b) {
      const _ = p.pow(b, c);
      if (!p.eql(p.sqr(_), b))
        throw new Error("Cannot find square root");
      return _;
    };
  }
  const i = (e + ze) / Li;
  return function(u, p) {
    if (u.pow(p, t) === u.neg(u.ONE))
      throw new Error("Cannot find square root");
    let b = n, _ = u.pow(u.mul(u.ONE, o), e), B = u.pow(p, i), C = u.pow(p, e);
    for (; !u.eql(C, u.ONE); ) {
      if (u.eql(C, u.ZERO))
        return u.ZERO;
      let R = 1;
      for (let U = u.sqr(C); R < b && !u.eql(U, u.ONE); R++)
        U = u.sqr(U);
      const O = u.pow(_, ze << BigInt(b - R - 1));
      _ = u.sqr(O), B = u.mul(B, O), C = u.mul(C, _), b = R;
    }
    return B;
  };
}
function mg(r) {
  if (r % Su === pg) {
    const t = (r + ze) / Su;
    return function(n, o) {
      const i = n.pow(o, t);
      if (!n.eql(n.sqr(i), o))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % bl === wl) {
    const t = (r - wl) / bl;
    return function(n, o) {
      const i = n.mul(o, Li), c = n.pow(i, t), u = n.mul(o, c), p = n.mul(n.mul(u, Li), c), b = n.mul(u, n.sub(p, n.ONE));
      if (!n.eql(n.sqr(b), o))
        throw new Error("Cannot find square root");
      return b;
    };
  }
  return yg(r);
}
const wg = (r, t) => (Fe(r, t) & ze) === ze, bg = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function vg(r) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = bg.reduce((n, o) => (n[o] = "function", n), t);
  return Ko(r, e);
}
function xg(r, t, e) {
  if (e < sr)
    throw new Error("Expected power > 0");
  if (e === sr)
    return r.ONE;
  if (e === ze)
    return t;
  let n = r.ONE, o = t;
  for (; e > sr; )
    e & ze && (n = r.mul(n, o)), o = r.sqr(o), e >>= ze;
  return n;
}
function Eg(r, t) {
  const e = new Array(t.length), n = t.reduce((i, c, u) => r.is0(c) ? i : (e[u] = i, r.mul(i, c)), r.ONE), o = r.inv(n);
  return t.reduceRight((i, c, u) => r.is0(c) ? i : (e[u] = r.mul(i, e[u]), r.mul(i, c)), o), e;
}
function E0(r, t) {
  const e = t !== void 0 ? t : r.toString(2).length, n = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: n };
}
function _0(r, t, e = !1, n = {}) {
  if (r <= sr)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: o, nByteLength: i } = E0(r, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const c = mg(r), u = Object.freeze({
    ORDER: r,
    BITS: o,
    BYTES: i,
    MASK: uf(o),
    ZERO: sr,
    ONE: ze,
    create: (p) => Fe(p, r),
    isValid: (p) => {
      if (typeof p != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof p}`);
      return sr <= p && p < r;
    },
    is0: (p) => p === sr,
    isOdd: (p) => (p & ze) === ze,
    neg: (p) => Fe(-p, r),
    eql: (p, b) => p === b,
    sqr: (p) => Fe(p * p, r),
    add: (p, b) => Fe(p + b, r),
    sub: (p, b) => Fe(p - b, r),
    mul: (p, b) => Fe(p * b, r),
    pow: (p, b) => xg(u, p, b),
    div: (p, b) => Fe(p * Bu(b, r), r),
    // Same as above, but doesn't normalize
    sqrN: (p) => p * p,
    addN: (p, b) => p + b,
    subN: (p, b) => p - b,
    mulN: (p, b) => p * b,
    inv: (p) => Bu(p, r),
    sqrt: n.sqrt || ((p) => c(u, p)),
    invertBatch: (p) => Eg(u, p),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (p, b, _) => _ ? b : p,
    toBytes: (p) => e ? ms(p, i) : Fo(p, i),
    fromBytes: (p) => {
      if (p.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${p.length}`);
      return e ? Mo(p) : Gi(p);
    }
  });
  return Object.freeze(u);
}
function _g(r, t) {
  if (!r.isOdd)
    throw new Error("Field doesn't have isOdd");
  const e = r.sqrt(t);
  return r.isOdd(e) ? r.neg(e) : e;
}
function S0(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const t = r.toString(2).length;
  return Math.ceil(t / 8);
}
function B0(r) {
  const t = S0(r);
  return t + Math.ceil(t / 2);
}
function Sg(r, t, e = !1) {
  const n = r.length, o = S0(t), i = B0(t);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const c = e ? Gi(r) : Mo(r), u = Fe(c, t - ze) + ze;
  return e ? ms(u, o) : Fo(u, o);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Bg = BigInt(0), hc = BigInt(1);
function A0(r, t) {
  const e = (o, i) => {
    const c = i.negate();
    return o ? c : i;
  }, n = (o) => {
    const i = Math.ceil(t / o) + 1, c = 2 ** (o - 1);
    return { windows: i, windowSize: c };
  };
  return {
    constTimeNegate: e,
    // non-const time multiplication ladder
    unsafeLadder(o, i) {
      let c = r.ZERO, u = o;
      for (; i > Bg; )
        i & hc && (c = c.add(u)), u = u.double(), i >>= hc;
      return c;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(o, i) {
      const { windows: c, windowSize: u } = n(i), p = [];
      let b = o, _ = b;
      for (let B = 0; B < c; B++) {
        _ = b, p.push(_);
        for (let C = 1; C < u; C++)
          _ = _.add(b), p.push(_);
        b = _.double();
      }
      return p;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(o, i, c) {
      const { windows: u, windowSize: p } = n(o);
      let b = r.ZERO, _ = r.BASE;
      const B = BigInt(2 ** o - 1), C = 2 ** o, R = BigInt(o);
      for (let O = 0; O < u; O++) {
        const U = O * p;
        let T = Number(c & B);
        c >>= R, T > p && (T -= C, c += hc);
        const P = U, F = U + Math.abs(T) - 1, L = O % 2 !== 0, z = T < 0;
        T === 0 ? _ = _.add(e(L, i[P])) : b = b.add(e(z, i[F]));
      }
      return { p: b, f: _ };
    },
    wNAFCached(o, i, c, u) {
      const p = o._WINDOW_SIZE || 1;
      let b = i.get(o);
      return b || (b = this.precomputeWindow(o, p), p !== 1 && i.set(o, u(b))), this.wNAF(p, b, c);
    }
  };
}
function ff(r) {
  return vg(r.Fp), Ko(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...E0(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const un = BigInt(0), zr = BigInt(1), Ds = BigInt(2), Ag = BigInt(8), Ig = { zip215: !0 };
function Mg(r) {
  const t = ff(r);
  return Ko(r, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...t });
}
function Rg(r) {
  const t = Mg(r), { Fp: e, n, prehash: o, hash: i, randomBytes: c, nByteLength: u, h: p } = t, b = Ds << BigInt(u * 8) - zr, _ = e.create, B = t.uvRatio || ((v, x) => {
    try {
      return { isValid: !0, value: e.sqrt(v * e.inv(x)) };
    } catch {
      return { isValid: !1, value: un };
    }
  }), C = t.adjustScalarBytes || ((v) => v), R = t.domain || ((v, x, A) => {
    if (x.length || A)
      throw new Error("Contexts/pre-hash are not supported");
    return v;
  }), O = (v) => typeof v == "bigint" && un < v, U = (v, x) => O(v) && O(x) && v < x, T = (v) => v === un || U(v, b);
  function P(v, x) {
    if (U(v, x))
      return v;
    throw new Error(`Expected valid scalar < ${x}, got ${typeof v} ${v}`);
  }
  function F(v) {
    return v === un ? v : P(v, n);
  }
  const L = /* @__PURE__ */ new Map();
  function z(v) {
    if (!(v instanceof N))
      throw new Error("ExtendedPoint expected");
  }
  class N {
    constructor(x, A, m, l) {
      if (this.ex = x, this.ey = A, this.ez = m, this.et = l, !T(x))
        throw new Error("x required");
      if (!T(A))
        throw new Error("y required");
      if (!T(m))
        throw new Error("z required");
      if (!T(l))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(x) {
      if (x instanceof N)
        throw new Error("extended point not allowed");
      const { x: A, y: m } = x || {};
      if (!T(A) || !T(m))
        throw new Error("invalid affine point");
      return new N(A, m, zr, _(A * m));
    }
    static normalizeZ(x) {
      const A = e.invertBatch(x.map((m) => m.ez));
      return x.map((m, l) => m.toAffine(A[l])).map(N.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(x) {
      this._WINDOW_SIZE = x, L.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: x, d: A } = t;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: m, ey: l, ez: E, et: j } = this, H = _(m * m), K = _(l * l), ft = _(E * E), it = _(ft * ft), ut = _(H * x), Vt = _(ft * _(ut + K)), Bt = _(it + _(A * _(H * K)));
      if (Vt !== Bt)
        throw new Error("bad point: equation left != right (1)");
      const _t = _(m * l), Wt = _(E * j);
      if (_t !== Wt)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(x) {
      z(x);
      const { ex: A, ey: m, ez: l } = this, { ex: E, ey: j, ez: H } = x, K = _(A * H), ft = _(E * l), it = _(m * H), ut = _(j * l);
      return K === ft && it === ut;
    }
    is0() {
      return this.equals(N.ZERO);
    }
    negate() {
      return new N(_(-this.ex), this.ey, this.ez, _(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: x } = t, { ex: A, ey: m, ez: l } = this, E = _(A * A), j = _(m * m), H = _(Ds * _(l * l)), K = _(x * E), ft = A + m, it = _(_(ft * ft) - E - j), ut = K + j, Vt = ut - H, Bt = K - j, _t = _(it * Vt), Wt = _(ut * Bt), vt = _(it * Bt), Rt = _(Vt * ut);
      return new N(_t, Wt, Rt, vt);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(x) {
      z(x);
      const { a: A, d: m } = t, { ex: l, ey: E, ez: j, et: H } = this, { ex: K, ey: ft, ez: it, et: ut } = x;
      if (A === BigInt(-1)) {
        const Zt = _((E - l) * (ft + K)), Ot = _((E + l) * (ft - K)), Nt = _(Ot - Zt);
        if (Nt === un)
          return this.double();
        const he = _(j * Ds * ut), $t = _(H * Ds * it), h = $t + he, s = Ot + Zt, a = $t - he, g = _(h * Nt), S = _(s * a), M = _(h * a), k = _(Nt * s);
        return new N(g, S, k, M);
      }
      const Vt = _(l * K), Bt = _(E * ft), _t = _(H * m * ut), Wt = _(j * it), vt = _((l + E) * (K + ft) - Vt - Bt), Rt = Wt - _t, qe = Wt + _t, Lt = _(Bt - A * Vt), Pt = _(vt * Rt), nr = _(qe * Lt), Ft = _(vt * Lt), kt = _(Rt * qe);
      return new N(Pt, nr, kt, Ft);
    }
    subtract(x) {
      return this.add(x.negate());
    }
    wNAF(x) {
      return W.wNAFCached(this, L, x, N.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(x) {
      const { p: A, f: m } = this.wNAF(P(x, n));
      return N.normalizeZ([A, m])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(x) {
      let A = F(x);
      return A === un ? q : this.equals(q) || A === zr ? this : this.equals($) ? this.wNAF(A).p : W.unsafeLadder(this, A);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(p).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return W.unsafeLadder(this, n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(x) {
      const { ex: A, ey: m, ez: l } = this, E = this.is0();
      x == null && (x = E ? Ag : e.inv(l));
      const j = _(A * x), H = _(m * x), K = _(l * x);
      if (E)
        return { x: un, y: zr };
      if (K !== zr)
        throw new Error("invZ was invalid");
      return { x: j, y: H };
    }
    clearCofactor() {
      const { h: x } = t;
      return x === zr ? this : this.multiplyUnsafe(x);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(x, A = !1) {
      const { d: m, a: l } = t, E = e.BYTES;
      x = Qe("pointHex", x, E);
      const j = x.slice(), H = x[E - 1];
      j[E - 1] = H & -129;
      const K = Mo(j);
      K === un || (A ? P(K, b) : P(K, e.ORDER));
      const ft = _(K * K), it = _(ft - zr), ut = _(m * ft - l);
      let { isValid: Vt, value: Bt } = B(it, ut);
      if (!Vt)
        throw new Error("Point.fromHex: invalid y coordinate");
      const _t = (Bt & zr) === zr, Wt = (H & 128) !== 0;
      if (!A && Bt === un && Wt)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return Wt !== _t && (Bt = _(-Bt)), N.fromAffine({ x: Bt, y: K });
    }
    static fromPrivateKey(x) {
      return J(x).point;
    }
    toRawBytes() {
      const { x, y: A } = this.toAffine(), m = ms(A, e.BYTES);
      return m[m.length - 1] |= x & zr ? 128 : 0, m;
    }
    toHex() {
      return Qi(this.toRawBytes());
    }
  }
  N.BASE = new N(t.Gx, t.Gy, zr, _(t.Gx * t.Gy)), N.ZERO = new N(un, zr, zr, un);
  const { BASE: $, ZERO: q } = N, W = A0(N, u * 8);
  function tt(v) {
    return Fe(v, n);
  }
  function ht(v) {
    return tt(Mo(v));
  }
  function J(v) {
    const x = u;
    v = Qe("private key", v, x);
    const A = Qe("hashed private key", i(v), 2 * x), m = C(A.slice(0, x)), l = A.slice(x, 2 * x), E = ht(m), j = $.multiply(E), H = j.toRawBytes();
    return { head: m, prefix: l, scalar: E, point: j, pointBytes: H };
  }
  function mt(v) {
    return J(v).pointBytes;
  }
  function I(v = new Uint8Array(), ...x) {
    const A = to(...x);
    return ht(i(R(A, Qe("context", v), !!o)));
  }
  function f(v, x, A = {}) {
    v = Qe("message", v), o && (v = o(v));
    const { prefix: m, scalar: l, pointBytes: E } = J(x), j = I(A.context, m, v), H = $.multiply(j).toRawBytes(), K = I(A.context, H, E, v), ft = tt(j + K * l);
    F(ft);
    const it = to(H, ms(ft, e.BYTES));
    return Qe("result", it, u * 2);
  }
  const d = Ig;
  function y(v, x, A, m = d) {
    const { context: l, zip215: E } = m, j = e.BYTES;
    v = Qe("signature", v, 2 * j), x = Qe("message", x), o && (x = o(x));
    const H = Mo(v.slice(j, 2 * j));
    let K, ft, it;
    try {
      K = N.fromHex(A, E), ft = N.fromHex(v.slice(0, j), E), it = $.multiplyUnsafe(H);
    } catch {
      return !1;
    }
    if (!E && K.isSmallOrder())
      return !1;
    const ut = I(l, ft.toRawBytes(), K.toRawBytes(), x);
    return ft.add(K.multiplyUnsafe(ut)).subtract(it).clearCofactor().equals(N.ZERO);
  }
  return $._setWindowSize(8), {
    CURVE: t,
    getPublicKey: mt,
    sign: f,
    verify: y,
    ExtendedPoint: N,
    utils: {
      getExtendedPublicKey: J,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => c(e.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(v = 8, x = N.BASE) {
        return x._setWindowSize(v), x.multiply(BigInt(3)), x;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const lf = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), vl = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const kg = BigInt(1), Au = BigInt(2), Tg = BigInt(5), xl = BigInt(10), Cg = BigInt(20), Lg = BigInt(40), El = BigInt(80);
function Ug(r) {
  const t = lf, n = r * r % t * r % t, o = We(n, Au, t) * n % t, i = We(o, kg, t) * r % t, c = We(i, Tg, t) * i % t, u = We(c, xl, t) * c % t, p = We(u, Cg, t) * u % t, b = We(p, Lg, t) * p % t, _ = We(b, El, t) * b % t, B = We(_, El, t) * b % t, C = We(B, xl, t) * c % t;
  return { pow_p_5_8: We(C, Au, t) * r % t, b2: n };
}
function Og(r) {
  return r[0] &= 248, r[31] &= 127, r[31] |= 64, r;
}
function Fg(r, t) {
  const e = lf, n = Fe(t * t * t, e), o = Fe(n * n * t, e), i = Ug(r * o).pow_p_5_8;
  let c = Fe(r * n * i, e);
  const u = Fe(t * c * c, e), p = c, b = Fe(c * vl, e), _ = u === r, B = u === Fe(-r, e), C = u === Fe(-r * vl, e);
  return _ && (c = p), (B || C) && (c = b), wg(c, e) && (c = Fe(-c, e)), { isValid: _ || B, value: c };
}
const zn = _0(lf, void 0, !0), Ng = {
  // Param: a
  a: BigInt(-1),
  // Fp.create(-1) is proper; our way still works and is faster
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: zn,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: ng,
  randomBytes: y0,
  adjustScalarBytes: Og,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: Fg
}, Ua = /* @__PURE__ */ Rg(Ng), $g = (zn.ORDER + BigInt(3)) / BigInt(8);
zn.pow(Au, $g);
zn.sqrt(zn.neg(zn.ONE));
(zn.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
_g(zn, zn.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var hf = { exports: {} };
const Pg = {}, df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pg
}, Symbol.toStringTag, { value: "Module" })), I0 = /* @__PURE__ */ eo(df);
hf.exports;
(function(r) {
  (function(t, e) {
    function n(I, f) {
      if (!I)
        throw new Error(f || "Assertion failed");
    }
    function o(I, f) {
      I.super_ = f;
      var d = function() {
      };
      d.prototype = f.prototype, I.prototype = new d(), I.prototype.constructor = I;
    }
    function i(I, f, d) {
      if (i.isBN(I))
        return I;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, I !== null && ((f === "le" || f === "be") && (d = f, f = 10), this._init(I || 0, f || 10, d || "be"));
    }
    typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = I0.Buffer;
    } catch {
    }
    i.isBN = function(f) {
      return f instanceof i ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === i.wordSize && Array.isArray(f.words);
    }, i.max = function(f, d) {
      return f.cmp(d) > 0 ? f : d;
    }, i.min = function(f, d) {
      return f.cmp(d) < 0 ? f : d;
    }, i.prototype._init = function(f, d, y) {
      if (typeof f == "number")
        return this._initNumber(f, d, y);
      if (typeof f == "object")
        return this._initArray(f, d, y);
      d === "hex" && (d = 16), n(d === (d | 0) && d >= 2 && d <= 36), f = f.toString().replace(/\s+/g, "");
      var w = 0;
      f[0] === "-" && (w++, this.negative = 1), w < f.length && (d === 16 ? this._parseHex(f, w, y) : (this._parseBase(f, d, w), y === "le" && this._initArray(this.toArray(), d, y)));
    }, i.prototype._initNumber = function(f, d, y) {
      f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [f & 67108863], this.length = 1) : f < 4503599627370496 ? (this.words = [
        f & 67108863,
        f / 67108864 & 67108863
      ], this.length = 2) : (n(f < 9007199254740992), this.words = [
        f & 67108863,
        f / 67108864 & 67108863,
        1
      ], this.length = 3), y === "le" && this._initArray(this.toArray(), d, y);
    }, i.prototype._initArray = function(f, d, y) {
      if (n(typeof f.length == "number"), f.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);
      for (var w = 0; w < this.length; w++)
        this.words[w] = 0;
      var v, x, A = 0;
      if (y === "be")
        for (w = f.length - 1, v = 0; w >= 0; w -= 3)
          x = f[w] | f[w - 1] << 8 | f[w - 2] << 16, this.words[v] |= x << A & 67108863, this.words[v + 1] = x >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, v++);
      else if (y === "le")
        for (w = 0, v = 0; w < f.length; w += 3)
          x = f[w] | f[w + 1] << 8 | f[w + 2] << 16, this.words[v] |= x << A & 67108863, this.words[v + 1] = x >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, v++);
      return this._strip();
    };
    function u(I, f) {
      var d = I.charCodeAt(f);
      if (d >= 48 && d <= 57)
        return d - 48;
      if (d >= 65 && d <= 70)
        return d - 55;
      if (d >= 97 && d <= 102)
        return d - 87;
      n(!1, "Invalid character in " + I);
    }
    function p(I, f, d) {
      var y = u(I, d);
      return d - 1 >= f && (y |= u(I, d - 1) << 4), y;
    }
    i.prototype._parseHex = function(f, d, y) {
      this.length = Math.ceil((f.length - d) / 6), this.words = new Array(this.length);
      for (var w = 0; w < this.length; w++)
        this.words[w] = 0;
      var v = 0, x = 0, A;
      if (y === "be")
        for (w = f.length - 1; w >= d; w -= 2)
          A = p(f, d, w) << v, this.words[x] |= A & 67108863, v >= 18 ? (v -= 18, x += 1, this.words[x] |= A >>> 26) : v += 8;
      else {
        var m = f.length - d;
        for (w = m % 2 === 0 ? d + 1 : d; w < f.length; w += 2)
          A = p(f, d, w) << v, this.words[x] |= A & 67108863, v >= 18 ? (v -= 18, x += 1, this.words[x] |= A >>> 26) : v += 8;
      }
      this._strip();
    };
    function b(I, f, d, y) {
      for (var w = 0, v = 0, x = Math.min(I.length, d), A = f; A < x; A++) {
        var m = I.charCodeAt(A) - 48;
        w *= y, m >= 49 ? v = m - 49 + 10 : m >= 17 ? v = m - 17 + 10 : v = m, n(m >= 0 && v < y, "Invalid character"), w += v;
      }
      return w;
    }
    i.prototype._parseBase = function(f, d, y) {
      this.words = [0], this.length = 1;
      for (var w = 0, v = 1; v <= 67108863; v *= d)
        w++;
      w--, v = v / d | 0;
      for (var x = f.length - y, A = x % w, m = Math.min(x, x - A) + y, l = 0, E = y; E < m; E += w)
        l = b(f, E, E + w, d), this.imuln(v), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
      if (A !== 0) {
        var j = 1;
        for (l = b(f, E, f.length, d), E = 0; E < A; E++)
          j *= d;
        this.imuln(j), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
      }
      this._strip();
    }, i.prototype.copy = function(f) {
      f.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        f.words[d] = this.words[d];
      f.length = this.length, f.negative = this.negative, f.red = this.red;
    };
    function _(I, f) {
      I.words = f.words, I.length = f.length, I.negative = f.negative, I.red = f.red;
    }
    if (i.prototype._move = function(f) {
      _(f, this);
    }, i.prototype.clone = function() {
      var f = new i(null);
      return this.copy(f), f;
    }, i.prototype._expand = function(f) {
      for (; this.length < f; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = B;
      } catch {
        i.prototype.inspect = B;
      }
    else
      i.prototype.inspect = B;
    function B() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var C = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], R = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], O = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(f, d) {
      f = f || 10, d = d | 0 || 1;
      var y;
      if (f === 16 || f === "hex") {
        y = "";
        for (var w = 0, v = 0, x = 0; x < this.length; x++) {
          var A = this.words[x], m = ((A << w | v) & 16777215).toString(16);
          v = A >>> 24 - w & 16777215, w += 2, w >= 26 && (w -= 26, x--), v !== 0 || x !== this.length - 1 ? y = C[6 - m.length] + m + y : y = m + y;
        }
        for (v !== 0 && (y = v.toString(16) + y); y.length % d !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var l = R[f], E = O[f];
        y = "";
        var j = this.clone();
        for (j.negative = 0; !j.isZero(); ) {
          var H = j.modrn(E).toString(f);
          j = j.idivn(E), j.isZero() ? y = H + y : y = C[l - H.length] + H + y;
        }
        for (this.isZero() && (y = "0" + y); y.length % d !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var f = this.words[0];
      return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, c && (i.prototype.toBuffer = function(f, d) {
      return this.toArrayLike(c, f, d);
    }), i.prototype.toArray = function(f, d) {
      return this.toArrayLike(Array, f, d);
    };
    var U = function(f, d) {
      return f.allocUnsafe ? f.allocUnsafe(d) : new f(d);
    };
    i.prototype.toArrayLike = function(f, d, y) {
      this._strip();
      var w = this.byteLength(), v = y || Math.max(1, w);
      n(w <= v, "byte array longer than desired length"), n(v > 0, "Requested array length <= 0");
      var x = U(f, v), A = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + A](x, w), x;
    }, i.prototype._toArrayLikeLE = function(f, d) {
      for (var y = 0, w = 0, v = 0, x = 0; v < this.length; v++) {
        var A = this.words[v] << x | w;
        f[y++] = A & 255, y < f.length && (f[y++] = A >> 8 & 255), y < f.length && (f[y++] = A >> 16 & 255), x === 6 ? (y < f.length && (f[y++] = A >> 24 & 255), w = 0, x = 0) : (w = A >>> 24, x += 2);
      }
      if (y < f.length)
        for (f[y++] = w; y < f.length; )
          f[y++] = 0;
    }, i.prototype._toArrayLikeBE = function(f, d) {
      for (var y = f.length - 1, w = 0, v = 0, x = 0; v < this.length; v++) {
        var A = this.words[v] << x | w;
        f[y--] = A & 255, y >= 0 && (f[y--] = A >> 8 & 255), y >= 0 && (f[y--] = A >> 16 & 255), x === 6 ? (y >= 0 && (f[y--] = A >> 24 & 255), w = 0, x = 0) : (w = A >>> 24, x += 2);
      }
      if (y >= 0)
        for (f[y--] = w; y >= 0; )
          f[y--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(f) {
      return 32 - Math.clz32(f);
    } : i.prototype._countBits = function(f) {
      var d = f, y = 0;
      return d >= 4096 && (y += 13, d >>>= 13), d >= 64 && (y += 7, d >>>= 7), d >= 8 && (y += 4, d >>>= 4), d >= 2 && (y += 2, d >>>= 2), y + d;
    }, i.prototype._zeroBits = function(f) {
      if (f === 0)
        return 26;
      var d = f, y = 0;
      return d & 8191 || (y += 13, d >>>= 13), d & 127 || (y += 7, d >>>= 7), d & 15 || (y += 4, d >>>= 4), d & 3 || (y += 2, d >>>= 2), d & 1 || y++, y;
    }, i.prototype.bitLength = function() {
      var f = this.words[this.length - 1], d = this._countBits(f);
      return (this.length - 1) * 26 + d;
    };
    function T(I) {
      for (var f = new Array(I.bitLength()), d = 0; d < f.length; d++) {
        var y = d / 26 | 0, w = d % 26;
        f[d] = I.words[y] >>> w & 1;
      }
      return f;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var f = 0, d = 0; d < this.length; d++) {
        var y = this._zeroBits(this.words[d]);
        if (f += y, y !== 26)
          break;
      }
      return f;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(f) {
      return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(f) {
      return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(f) {
      for (; this.length < f.length; )
        this.words[this.length++] = 0;
      for (var d = 0; d < f.length; d++)
        this.words[d] = this.words[d] | f.words[d];
      return this._strip();
    }, i.prototype.ior = function(f) {
      return n((this.negative | f.negative) === 0), this.iuor(f);
    }, i.prototype.or = function(f) {
      return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
    }, i.prototype.uor = function(f) {
      return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
    }, i.prototype.iuand = function(f) {
      var d;
      this.length > f.length ? d = f : d = this;
      for (var y = 0; y < d.length; y++)
        this.words[y] = this.words[y] & f.words[y];
      return this.length = d.length, this._strip();
    }, i.prototype.iand = function(f) {
      return n((this.negative | f.negative) === 0), this.iuand(f);
    }, i.prototype.and = function(f) {
      return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
    }, i.prototype.uand = function(f) {
      return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
    }, i.prototype.iuxor = function(f) {
      var d, y;
      this.length > f.length ? (d = this, y = f) : (d = f, y = this);
      for (var w = 0; w < y.length; w++)
        this.words[w] = d.words[w] ^ y.words[w];
      if (this !== d)
        for (; w < d.length; w++)
          this.words[w] = d.words[w];
      return this.length = d.length, this._strip();
    }, i.prototype.ixor = function(f) {
      return n((this.negative | f.negative) === 0), this.iuxor(f);
    }, i.prototype.xor = function(f) {
      return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
    }, i.prototype.uxor = function(f) {
      return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
    }, i.prototype.inotn = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = Math.ceil(f / 26) | 0, y = f % 26;
      this._expand(d), y > 0 && d--;
      for (var w = 0; w < d; w++)
        this.words[w] = ~this.words[w] & 67108863;
      return y > 0 && (this.words[w] = ~this.words[w] & 67108863 >> 26 - y), this._strip();
    }, i.prototype.notn = function(f) {
      return this.clone().inotn(f);
    }, i.prototype.setn = function(f, d) {
      n(typeof f == "number" && f >= 0);
      var y = f / 26 | 0, w = f % 26;
      return this._expand(y + 1), d ? this.words[y] = this.words[y] | 1 << w : this.words[y] = this.words[y] & ~(1 << w), this._strip();
    }, i.prototype.iadd = function(f) {
      var d;
      if (this.negative !== 0 && f.negative === 0)
        return this.negative = 0, d = this.isub(f), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f.negative !== 0)
        return f.negative = 0, d = this.isub(f), f.negative = 1, d._normSign();
      var y, w;
      this.length > f.length ? (y = this, w = f) : (y = f, w = this);
      for (var v = 0, x = 0; x < w.length; x++)
        d = (y.words[x] | 0) + (w.words[x] | 0) + v, this.words[x] = d & 67108863, v = d >>> 26;
      for (; v !== 0 && x < y.length; x++)
        d = (y.words[x] | 0) + v, this.words[x] = d & 67108863, v = d >>> 26;
      if (this.length = y.length, v !== 0)
        this.words[this.length] = v, this.length++;
      else if (y !== this)
        for (; x < y.length; x++)
          this.words[x] = y.words[x];
      return this;
    }, i.prototype.add = function(f) {
      var d;
      return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, d = this.sub(f), f.negative ^= 1, d) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = f.sub(this), this.negative = 1, d) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
    }, i.prototype.isub = function(f) {
      if (f.negative !== 0) {
        f.negative = 0;
        var d = this.iadd(f);
        return f.negative = 1, d._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();
      var y = this.cmp(f);
      if (y === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var w, v;
      y > 0 ? (w = this, v = f) : (w = f, v = this);
      for (var x = 0, A = 0; A < v.length; A++)
        d = (w.words[A] | 0) - (v.words[A] | 0) + x, x = d >> 26, this.words[A] = d & 67108863;
      for (; x !== 0 && A < w.length; A++)
        d = (w.words[A] | 0) + x, x = d >> 26, this.words[A] = d & 67108863;
      if (x === 0 && A < w.length && w !== this)
        for (; A < w.length; A++)
          this.words[A] = w.words[A];
      return this.length = Math.max(this.length, A), w !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(f) {
      return this.clone().isub(f);
    };
    function P(I, f, d) {
      d.negative = f.negative ^ I.negative;
      var y = I.length + f.length | 0;
      d.length = y, y = y - 1 | 0;
      var w = I.words[0] | 0, v = f.words[0] | 0, x = w * v, A = x & 67108863, m = x / 67108864 | 0;
      d.words[0] = A;
      for (var l = 1; l < y; l++) {
        for (var E = m >>> 26, j = m & 67108863, H = Math.min(l, f.length - 1), K = Math.max(0, l - I.length + 1); K <= H; K++) {
          var ft = l - K | 0;
          w = I.words[ft] | 0, v = f.words[K] | 0, x = w * v + j, E += x / 67108864 | 0, j = x & 67108863;
        }
        d.words[l] = j | 0, m = E | 0;
      }
      return m !== 0 ? d.words[l] = m | 0 : d.length--, d._strip();
    }
    var F = function(f, d, y) {
      var w = f.words, v = d.words, x = y.words, A = 0, m, l, E, j = w[0] | 0, H = j & 8191, K = j >>> 13, ft = w[1] | 0, it = ft & 8191, ut = ft >>> 13, Vt = w[2] | 0, Bt = Vt & 8191, _t = Vt >>> 13, Wt = w[3] | 0, vt = Wt & 8191, Rt = Wt >>> 13, qe = w[4] | 0, Lt = qe & 8191, Pt = qe >>> 13, nr = w[5] | 0, Ft = nr & 8191, kt = nr >>> 13, Zt = w[6] | 0, Ot = Zt & 8191, Nt = Zt >>> 13, he = w[7] | 0, $t = he & 8191, h = he >>> 13, s = w[8] | 0, a = s & 8191, g = s >>> 13, S = w[9] | 0, M = S & 8191, k = S >>> 13, Q = v[0] | 0, nt = Q & 8191, et = Q >>> 13, wt = v[1] | 0, X = wt & 8191, Yt = wt >>> 13, Gn = v[2] | 0, Kt = Gn & 8191, Xt = Gn >>> 13, On = v[3] | 0, Qt = On & 8191, re = On >>> 13, Vn = v[4] | 0, ne = Vn & 8191, te = Vn >>> 13, Zn = v[5] | 0, ie = Zn & 8191, oe = Zn >>> 13, Yn = v[6] | 0, se = Yn & 8191, ae = Yn >>> 13, vi = v[7] | 0, ce = vi & 8191, D = vi >>> 13, ot = v[8] | 0, rt = ot & 8191, dt = ot >>> 13, de = v[9] | 0, St = de & 8191, bt = de >>> 13;
      y.negative = f.negative ^ d.negative, y.length = 19, m = Math.imul(H, nt), l = Math.imul(H, et), l = l + Math.imul(K, nt) | 0, E = Math.imul(K, et);
      var ee = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (ee >>> 26) | 0, ee &= 67108863, m = Math.imul(it, nt), l = Math.imul(it, et), l = l + Math.imul(ut, nt) | 0, E = Math.imul(ut, et), m = m + Math.imul(H, X) | 0, l = l + Math.imul(H, Yt) | 0, l = l + Math.imul(K, X) | 0, E = E + Math.imul(K, Yt) | 0;
      var Ne = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, m = Math.imul(Bt, nt), l = Math.imul(Bt, et), l = l + Math.imul(_t, nt) | 0, E = Math.imul(_t, et), m = m + Math.imul(it, X) | 0, l = l + Math.imul(it, Yt) | 0, l = l + Math.imul(ut, X) | 0, E = E + Math.imul(ut, Yt) | 0, m = m + Math.imul(H, Kt) | 0, l = l + Math.imul(H, Xt) | 0, l = l + Math.imul(K, Kt) | 0, E = E + Math.imul(K, Xt) | 0;
      var Be = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, m = Math.imul(vt, nt), l = Math.imul(vt, et), l = l + Math.imul(Rt, nt) | 0, E = Math.imul(Rt, et), m = m + Math.imul(Bt, X) | 0, l = l + Math.imul(Bt, Yt) | 0, l = l + Math.imul(_t, X) | 0, E = E + Math.imul(_t, Yt) | 0, m = m + Math.imul(it, Kt) | 0, l = l + Math.imul(it, Xt) | 0, l = l + Math.imul(ut, Kt) | 0, E = E + Math.imul(ut, Xt) | 0, m = m + Math.imul(H, Qt) | 0, l = l + Math.imul(H, re) | 0, l = l + Math.imul(K, Qt) | 0, E = E + Math.imul(K, re) | 0;
      var Me = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, m = Math.imul(Lt, nt), l = Math.imul(Lt, et), l = l + Math.imul(Pt, nt) | 0, E = Math.imul(Pt, et), m = m + Math.imul(vt, X) | 0, l = l + Math.imul(vt, Yt) | 0, l = l + Math.imul(Rt, X) | 0, E = E + Math.imul(Rt, Yt) | 0, m = m + Math.imul(Bt, Kt) | 0, l = l + Math.imul(Bt, Xt) | 0, l = l + Math.imul(_t, Kt) | 0, E = E + Math.imul(_t, Xt) | 0, m = m + Math.imul(it, Qt) | 0, l = l + Math.imul(it, re) | 0, l = l + Math.imul(ut, Qt) | 0, E = E + Math.imul(ut, re) | 0, m = m + Math.imul(H, ne) | 0, l = l + Math.imul(H, te) | 0, l = l + Math.imul(K, ne) | 0, E = E + Math.imul(K, te) | 0;
      var Ze = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, m = Math.imul(Ft, nt), l = Math.imul(Ft, et), l = l + Math.imul(kt, nt) | 0, E = Math.imul(kt, et), m = m + Math.imul(Lt, X) | 0, l = l + Math.imul(Lt, Yt) | 0, l = l + Math.imul(Pt, X) | 0, E = E + Math.imul(Pt, Yt) | 0, m = m + Math.imul(vt, Kt) | 0, l = l + Math.imul(vt, Xt) | 0, l = l + Math.imul(Rt, Kt) | 0, E = E + Math.imul(Rt, Xt) | 0, m = m + Math.imul(Bt, Qt) | 0, l = l + Math.imul(Bt, re) | 0, l = l + Math.imul(_t, Qt) | 0, E = E + Math.imul(_t, re) | 0, m = m + Math.imul(it, ne) | 0, l = l + Math.imul(it, te) | 0, l = l + Math.imul(ut, ne) | 0, E = E + Math.imul(ut, te) | 0, m = m + Math.imul(H, ie) | 0, l = l + Math.imul(H, oe) | 0, l = l + Math.imul(K, ie) | 0, E = E + Math.imul(K, oe) | 0;
      var Cr = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, m = Math.imul(Ot, nt), l = Math.imul(Ot, et), l = l + Math.imul(Nt, nt) | 0, E = Math.imul(Nt, et), m = m + Math.imul(Ft, X) | 0, l = l + Math.imul(Ft, Yt) | 0, l = l + Math.imul(kt, X) | 0, E = E + Math.imul(kt, Yt) | 0, m = m + Math.imul(Lt, Kt) | 0, l = l + Math.imul(Lt, Xt) | 0, l = l + Math.imul(Pt, Kt) | 0, E = E + Math.imul(Pt, Xt) | 0, m = m + Math.imul(vt, Qt) | 0, l = l + Math.imul(vt, re) | 0, l = l + Math.imul(Rt, Qt) | 0, E = E + Math.imul(Rt, re) | 0, m = m + Math.imul(Bt, ne) | 0, l = l + Math.imul(Bt, te) | 0, l = l + Math.imul(_t, ne) | 0, E = E + Math.imul(_t, te) | 0, m = m + Math.imul(it, ie) | 0, l = l + Math.imul(it, oe) | 0, l = l + Math.imul(ut, ie) | 0, E = E + Math.imul(ut, oe) | 0, m = m + Math.imul(H, se) | 0, l = l + Math.imul(H, ae) | 0, l = l + Math.imul(K, se) | 0, E = E + Math.imul(K, ae) | 0;
      var wn = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (wn >>> 26) | 0, wn &= 67108863, m = Math.imul($t, nt), l = Math.imul($t, et), l = l + Math.imul(h, nt) | 0, E = Math.imul(h, et), m = m + Math.imul(Ot, X) | 0, l = l + Math.imul(Ot, Yt) | 0, l = l + Math.imul(Nt, X) | 0, E = E + Math.imul(Nt, Yt) | 0, m = m + Math.imul(Ft, Kt) | 0, l = l + Math.imul(Ft, Xt) | 0, l = l + Math.imul(kt, Kt) | 0, E = E + Math.imul(kt, Xt) | 0, m = m + Math.imul(Lt, Qt) | 0, l = l + Math.imul(Lt, re) | 0, l = l + Math.imul(Pt, Qt) | 0, E = E + Math.imul(Pt, re) | 0, m = m + Math.imul(vt, ne) | 0, l = l + Math.imul(vt, te) | 0, l = l + Math.imul(Rt, ne) | 0, E = E + Math.imul(Rt, te) | 0, m = m + Math.imul(Bt, ie) | 0, l = l + Math.imul(Bt, oe) | 0, l = l + Math.imul(_t, ie) | 0, E = E + Math.imul(_t, oe) | 0, m = m + Math.imul(it, se) | 0, l = l + Math.imul(it, ae) | 0, l = l + Math.imul(ut, se) | 0, E = E + Math.imul(ut, ae) | 0, m = m + Math.imul(H, ce) | 0, l = l + Math.imul(H, D) | 0, l = l + Math.imul(K, ce) | 0, E = E + Math.imul(K, D) | 0;
      var ar = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, m = Math.imul(a, nt), l = Math.imul(a, et), l = l + Math.imul(g, nt) | 0, E = Math.imul(g, et), m = m + Math.imul($t, X) | 0, l = l + Math.imul($t, Yt) | 0, l = l + Math.imul(h, X) | 0, E = E + Math.imul(h, Yt) | 0, m = m + Math.imul(Ot, Kt) | 0, l = l + Math.imul(Ot, Xt) | 0, l = l + Math.imul(Nt, Kt) | 0, E = E + Math.imul(Nt, Xt) | 0, m = m + Math.imul(Ft, Qt) | 0, l = l + Math.imul(Ft, re) | 0, l = l + Math.imul(kt, Qt) | 0, E = E + Math.imul(kt, re) | 0, m = m + Math.imul(Lt, ne) | 0, l = l + Math.imul(Lt, te) | 0, l = l + Math.imul(Pt, ne) | 0, E = E + Math.imul(Pt, te) | 0, m = m + Math.imul(vt, ie) | 0, l = l + Math.imul(vt, oe) | 0, l = l + Math.imul(Rt, ie) | 0, E = E + Math.imul(Rt, oe) | 0, m = m + Math.imul(Bt, se) | 0, l = l + Math.imul(Bt, ae) | 0, l = l + Math.imul(_t, se) | 0, E = E + Math.imul(_t, ae) | 0, m = m + Math.imul(it, ce) | 0, l = l + Math.imul(it, D) | 0, l = l + Math.imul(ut, ce) | 0, E = E + Math.imul(ut, D) | 0, m = m + Math.imul(H, rt) | 0, l = l + Math.imul(H, dt) | 0, l = l + Math.imul(K, rt) | 0, E = E + Math.imul(K, dt) | 0;
      var xi = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (xi >>> 26) | 0, xi &= 67108863, m = Math.imul(M, nt), l = Math.imul(M, et), l = l + Math.imul(k, nt) | 0, E = Math.imul(k, et), m = m + Math.imul(a, X) | 0, l = l + Math.imul(a, Yt) | 0, l = l + Math.imul(g, X) | 0, E = E + Math.imul(g, Yt) | 0, m = m + Math.imul($t, Kt) | 0, l = l + Math.imul($t, Xt) | 0, l = l + Math.imul(h, Kt) | 0, E = E + Math.imul(h, Xt) | 0, m = m + Math.imul(Ot, Qt) | 0, l = l + Math.imul(Ot, re) | 0, l = l + Math.imul(Nt, Qt) | 0, E = E + Math.imul(Nt, re) | 0, m = m + Math.imul(Ft, ne) | 0, l = l + Math.imul(Ft, te) | 0, l = l + Math.imul(kt, ne) | 0, E = E + Math.imul(kt, te) | 0, m = m + Math.imul(Lt, ie) | 0, l = l + Math.imul(Lt, oe) | 0, l = l + Math.imul(Pt, ie) | 0, E = E + Math.imul(Pt, oe) | 0, m = m + Math.imul(vt, se) | 0, l = l + Math.imul(vt, ae) | 0, l = l + Math.imul(Rt, se) | 0, E = E + Math.imul(Rt, ae) | 0, m = m + Math.imul(Bt, ce) | 0, l = l + Math.imul(Bt, D) | 0, l = l + Math.imul(_t, ce) | 0, E = E + Math.imul(_t, D) | 0, m = m + Math.imul(it, rt) | 0, l = l + Math.imul(it, dt) | 0, l = l + Math.imul(ut, rt) | 0, E = E + Math.imul(ut, dt) | 0, m = m + Math.imul(H, St) | 0, l = l + Math.imul(H, bt) | 0, l = l + Math.imul(K, St) | 0, E = E + Math.imul(K, bt) | 0;
      var Ei = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ei >>> 26) | 0, Ei &= 67108863, m = Math.imul(M, X), l = Math.imul(M, Yt), l = l + Math.imul(k, X) | 0, E = Math.imul(k, Yt), m = m + Math.imul(a, Kt) | 0, l = l + Math.imul(a, Xt) | 0, l = l + Math.imul(g, Kt) | 0, E = E + Math.imul(g, Xt) | 0, m = m + Math.imul($t, Qt) | 0, l = l + Math.imul($t, re) | 0, l = l + Math.imul(h, Qt) | 0, E = E + Math.imul(h, re) | 0, m = m + Math.imul(Ot, ne) | 0, l = l + Math.imul(Ot, te) | 0, l = l + Math.imul(Nt, ne) | 0, E = E + Math.imul(Nt, te) | 0, m = m + Math.imul(Ft, ie) | 0, l = l + Math.imul(Ft, oe) | 0, l = l + Math.imul(kt, ie) | 0, E = E + Math.imul(kt, oe) | 0, m = m + Math.imul(Lt, se) | 0, l = l + Math.imul(Lt, ae) | 0, l = l + Math.imul(Pt, se) | 0, E = E + Math.imul(Pt, ae) | 0, m = m + Math.imul(vt, ce) | 0, l = l + Math.imul(vt, D) | 0, l = l + Math.imul(Rt, ce) | 0, E = E + Math.imul(Rt, D) | 0, m = m + Math.imul(Bt, rt) | 0, l = l + Math.imul(Bt, dt) | 0, l = l + Math.imul(_t, rt) | 0, E = E + Math.imul(_t, dt) | 0, m = m + Math.imul(it, St) | 0, l = l + Math.imul(it, bt) | 0, l = l + Math.imul(ut, St) | 0, E = E + Math.imul(ut, bt) | 0;
      var _i = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (_i >>> 26) | 0, _i &= 67108863, m = Math.imul(M, Kt), l = Math.imul(M, Xt), l = l + Math.imul(k, Kt) | 0, E = Math.imul(k, Xt), m = m + Math.imul(a, Qt) | 0, l = l + Math.imul(a, re) | 0, l = l + Math.imul(g, Qt) | 0, E = E + Math.imul(g, re) | 0, m = m + Math.imul($t, ne) | 0, l = l + Math.imul($t, te) | 0, l = l + Math.imul(h, ne) | 0, E = E + Math.imul(h, te) | 0, m = m + Math.imul(Ot, ie) | 0, l = l + Math.imul(Ot, oe) | 0, l = l + Math.imul(Nt, ie) | 0, E = E + Math.imul(Nt, oe) | 0, m = m + Math.imul(Ft, se) | 0, l = l + Math.imul(Ft, ae) | 0, l = l + Math.imul(kt, se) | 0, E = E + Math.imul(kt, ae) | 0, m = m + Math.imul(Lt, ce) | 0, l = l + Math.imul(Lt, D) | 0, l = l + Math.imul(Pt, ce) | 0, E = E + Math.imul(Pt, D) | 0, m = m + Math.imul(vt, rt) | 0, l = l + Math.imul(vt, dt) | 0, l = l + Math.imul(Rt, rt) | 0, E = E + Math.imul(Rt, dt) | 0, m = m + Math.imul(Bt, St) | 0, l = l + Math.imul(Bt, bt) | 0, l = l + Math.imul(_t, St) | 0, E = E + Math.imul(_t, bt) | 0;
      var Si = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Si >>> 26) | 0, Si &= 67108863, m = Math.imul(M, Qt), l = Math.imul(M, re), l = l + Math.imul(k, Qt) | 0, E = Math.imul(k, re), m = m + Math.imul(a, ne) | 0, l = l + Math.imul(a, te) | 0, l = l + Math.imul(g, ne) | 0, E = E + Math.imul(g, te) | 0, m = m + Math.imul($t, ie) | 0, l = l + Math.imul($t, oe) | 0, l = l + Math.imul(h, ie) | 0, E = E + Math.imul(h, oe) | 0, m = m + Math.imul(Ot, se) | 0, l = l + Math.imul(Ot, ae) | 0, l = l + Math.imul(Nt, se) | 0, E = E + Math.imul(Nt, ae) | 0, m = m + Math.imul(Ft, ce) | 0, l = l + Math.imul(Ft, D) | 0, l = l + Math.imul(kt, ce) | 0, E = E + Math.imul(kt, D) | 0, m = m + Math.imul(Lt, rt) | 0, l = l + Math.imul(Lt, dt) | 0, l = l + Math.imul(Pt, rt) | 0, E = E + Math.imul(Pt, dt) | 0, m = m + Math.imul(vt, St) | 0, l = l + Math.imul(vt, bt) | 0, l = l + Math.imul(Rt, St) | 0, E = E + Math.imul(Rt, bt) | 0;
      var Bi = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Bi >>> 26) | 0, Bi &= 67108863, m = Math.imul(M, ne), l = Math.imul(M, te), l = l + Math.imul(k, ne) | 0, E = Math.imul(k, te), m = m + Math.imul(a, ie) | 0, l = l + Math.imul(a, oe) | 0, l = l + Math.imul(g, ie) | 0, E = E + Math.imul(g, oe) | 0, m = m + Math.imul($t, se) | 0, l = l + Math.imul($t, ae) | 0, l = l + Math.imul(h, se) | 0, E = E + Math.imul(h, ae) | 0, m = m + Math.imul(Ot, ce) | 0, l = l + Math.imul(Ot, D) | 0, l = l + Math.imul(Nt, ce) | 0, E = E + Math.imul(Nt, D) | 0, m = m + Math.imul(Ft, rt) | 0, l = l + Math.imul(Ft, dt) | 0, l = l + Math.imul(kt, rt) | 0, E = E + Math.imul(kt, dt) | 0, m = m + Math.imul(Lt, St) | 0, l = l + Math.imul(Lt, bt) | 0, l = l + Math.imul(Pt, St) | 0, E = E + Math.imul(Pt, bt) | 0;
      var Ai = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ai >>> 26) | 0, Ai &= 67108863, m = Math.imul(M, ie), l = Math.imul(M, oe), l = l + Math.imul(k, ie) | 0, E = Math.imul(k, oe), m = m + Math.imul(a, se) | 0, l = l + Math.imul(a, ae) | 0, l = l + Math.imul(g, se) | 0, E = E + Math.imul(g, ae) | 0, m = m + Math.imul($t, ce) | 0, l = l + Math.imul($t, D) | 0, l = l + Math.imul(h, ce) | 0, E = E + Math.imul(h, D) | 0, m = m + Math.imul(Ot, rt) | 0, l = l + Math.imul(Ot, dt) | 0, l = l + Math.imul(Nt, rt) | 0, E = E + Math.imul(Nt, dt) | 0, m = m + Math.imul(Ft, St) | 0, l = l + Math.imul(Ft, bt) | 0, l = l + Math.imul(kt, St) | 0, E = E + Math.imul(kt, bt) | 0;
      var Ii = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ii >>> 26) | 0, Ii &= 67108863, m = Math.imul(M, se), l = Math.imul(M, ae), l = l + Math.imul(k, se) | 0, E = Math.imul(k, ae), m = m + Math.imul(a, ce) | 0, l = l + Math.imul(a, D) | 0, l = l + Math.imul(g, ce) | 0, E = E + Math.imul(g, D) | 0, m = m + Math.imul($t, rt) | 0, l = l + Math.imul($t, dt) | 0, l = l + Math.imul(h, rt) | 0, E = E + Math.imul(h, dt) | 0, m = m + Math.imul(Ot, St) | 0, l = l + Math.imul(Ot, bt) | 0, l = l + Math.imul(Nt, St) | 0, E = E + Math.imul(Nt, bt) | 0;
      var Mi = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Mi >>> 26) | 0, Mi &= 67108863, m = Math.imul(M, ce), l = Math.imul(M, D), l = l + Math.imul(k, ce) | 0, E = Math.imul(k, D), m = m + Math.imul(a, rt) | 0, l = l + Math.imul(a, dt) | 0, l = l + Math.imul(g, rt) | 0, E = E + Math.imul(g, dt) | 0, m = m + Math.imul($t, St) | 0, l = l + Math.imul($t, bt) | 0, l = l + Math.imul(h, St) | 0, E = E + Math.imul(h, bt) | 0;
      var Ri = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ri >>> 26) | 0, Ri &= 67108863, m = Math.imul(M, rt), l = Math.imul(M, dt), l = l + Math.imul(k, rt) | 0, E = Math.imul(k, dt), m = m + Math.imul(a, St) | 0, l = l + Math.imul(a, bt) | 0, l = l + Math.imul(g, St) | 0, E = E + Math.imul(g, bt) | 0;
      var ki = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (ki >>> 26) | 0, ki &= 67108863, m = Math.imul(M, St), l = Math.imul(M, bt), l = l + Math.imul(k, St) | 0, E = Math.imul(k, bt);
      var Ti = (A + m | 0) + ((l & 8191) << 13) | 0;
      return A = (E + (l >>> 13) | 0) + (Ti >>> 26) | 0, Ti &= 67108863, x[0] = ee, x[1] = Ne, x[2] = Be, x[3] = Me, x[4] = Ze, x[5] = Cr, x[6] = wn, x[7] = ar, x[8] = xi, x[9] = Ei, x[10] = _i, x[11] = Si, x[12] = Bi, x[13] = Ai, x[14] = Ii, x[15] = Mi, x[16] = Ri, x[17] = ki, x[18] = Ti, A !== 0 && (x[19] = A, y.length++), y;
    };
    Math.imul || (F = P);
    function L(I, f, d) {
      d.negative = f.negative ^ I.negative, d.length = I.length + f.length;
      for (var y = 0, w = 0, v = 0; v < d.length - 1; v++) {
        var x = w;
        w = 0;
        for (var A = y & 67108863, m = Math.min(v, f.length - 1), l = Math.max(0, v - I.length + 1); l <= m; l++) {
          var E = v - l, j = I.words[E] | 0, H = f.words[l] | 0, K = j * H, ft = K & 67108863;
          x = x + (K / 67108864 | 0) | 0, ft = ft + A | 0, A = ft & 67108863, x = x + (ft >>> 26) | 0, w += x >>> 26, x &= 67108863;
        }
        d.words[v] = A, y = x, x = w;
      }
      return y !== 0 ? d.words[v] = y : d.length--, d._strip();
    }
    function z(I, f, d) {
      return L(I, f, d);
    }
    i.prototype.mulTo = function(f, d) {
      var y, w = this.length + f.length;
      return this.length === 10 && f.length === 10 ? y = F(this, f, d) : w < 63 ? y = P(this, f, d) : w < 1024 ? y = L(this, f, d) : y = z(this, f, d), y;
    }, i.prototype.mul = function(f) {
      var d = new i(null);
      return d.words = new Array(this.length + f.length), this.mulTo(f, d);
    }, i.prototype.mulf = function(f) {
      var d = new i(null);
      return d.words = new Array(this.length + f.length), z(this, f, d);
    }, i.prototype.imul = function(f) {
      return this.clone().mulTo(f, this);
    }, i.prototype.imuln = function(f) {
      var d = f < 0;
      d && (f = -f), n(typeof f == "number"), n(f < 67108864);
      for (var y = 0, w = 0; w < this.length; w++) {
        var v = (this.words[w] | 0) * f, x = (v & 67108863) + (y & 67108863);
        y >>= 26, y += v / 67108864 | 0, y += x >>> 26, this.words[w] = x & 67108863;
      }
      return y !== 0 && (this.words[w] = y, this.length++), d ? this.ineg() : this;
    }, i.prototype.muln = function(f) {
      return this.clone().imuln(f);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(f) {
      var d = T(f);
      if (d.length === 0)
        return new i(1);
      for (var y = this, w = 0; w < d.length && d[w] === 0; w++, y = y.sqr())
        ;
      if (++w < d.length)
        for (var v = y.sqr(); w < d.length; w++, v = v.sqr())
          d[w] !== 0 && (y = y.mul(v));
      return y;
    }, i.prototype.iushln = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = f % 26, y = (f - d) / 26, w = 67108863 >>> 26 - d << 26 - d, v;
      if (d !== 0) {
        var x = 0;
        for (v = 0; v < this.length; v++) {
          var A = this.words[v] & w, m = (this.words[v] | 0) - A << d;
          this.words[v] = m | x, x = A >>> 26 - d;
        }
        x && (this.words[v] = x, this.length++);
      }
      if (y !== 0) {
        for (v = this.length - 1; v >= 0; v--)
          this.words[v + y] = this.words[v];
        for (v = 0; v < y; v++)
          this.words[v] = 0;
        this.length += y;
      }
      return this._strip();
    }, i.prototype.ishln = function(f) {
      return n(this.negative === 0), this.iushln(f);
    }, i.prototype.iushrn = function(f, d, y) {
      n(typeof f == "number" && f >= 0);
      var w;
      d ? w = (d - d % 26) / 26 : w = 0;
      var v = f % 26, x = Math.min((f - v) / 26, this.length), A = 67108863 ^ 67108863 >>> v << v, m = y;
      if (w -= x, w = Math.max(0, w), m) {
        for (var l = 0; l < x; l++)
          m.words[l] = this.words[l];
        m.length = x;
      }
      if (x !== 0)
        if (this.length > x)
          for (this.length -= x, l = 0; l < this.length; l++)
            this.words[l] = this.words[l + x];
        else
          this.words[0] = 0, this.length = 1;
      var E = 0;
      for (l = this.length - 1; l >= 0 && (E !== 0 || l >= w); l--) {
        var j = this.words[l] | 0;
        this.words[l] = E << 26 - v | j >>> v, E = j & A;
      }
      return m && E !== 0 && (m.words[m.length++] = E), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(f, d, y) {
      return n(this.negative === 0), this.iushrn(f, d, y);
    }, i.prototype.shln = function(f) {
      return this.clone().ishln(f);
    }, i.prototype.ushln = function(f) {
      return this.clone().iushln(f);
    }, i.prototype.shrn = function(f) {
      return this.clone().ishrn(f);
    }, i.prototype.ushrn = function(f) {
      return this.clone().iushrn(f);
    }, i.prototype.testn = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = f % 26, y = (f - d) / 26, w = 1 << d;
      if (this.length <= y)
        return !1;
      var v = this.words[y];
      return !!(v & w);
    }, i.prototype.imaskn = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = f % 26, y = (f - d) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y)
        return this;
      if (d !== 0 && y++, this.length = Math.min(y, this.length), d !== 0) {
        var w = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= w;
      }
      return this._strip();
    }, i.prototype.maskn = function(f) {
      return this.clone().imaskn(f);
    }, i.prototype.iaddn = function(f) {
      return n(typeof f == "number"), n(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
    }, i.prototype._iaddn = function(f) {
      this.words[0] += f;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
        this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, i.prototype.isubn = function(f) {
      if (n(typeof f == "number"), n(f < 67108864), f < 0)
        return this.iaddn(-f);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(f), this.negative = 1, this;
      if (this.words[0] -= f, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var d = 0; d < this.length && this.words[d] < 0; d++)
          this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(f) {
      return this.clone().iaddn(f);
    }, i.prototype.subn = function(f) {
      return this.clone().isubn(f);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(f, d, y) {
      var w = f.length + y, v;
      this._expand(w);
      var x, A = 0;
      for (v = 0; v < f.length; v++) {
        x = (this.words[v + y] | 0) + A;
        var m = (f.words[v] | 0) * d;
        x -= m & 67108863, A = (x >> 26) - (m / 67108864 | 0), this.words[v + y] = x & 67108863;
      }
      for (; v < this.length - y; v++)
        x = (this.words[v + y] | 0) + A, A = x >> 26, this.words[v + y] = x & 67108863;
      if (A === 0)
        return this._strip();
      for (n(A === -1), A = 0, v = 0; v < this.length; v++)
        x = -(this.words[v] | 0) + A, A = x >> 26, this.words[v] = x & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(f, d) {
      var y = this.length - f.length, w = this.clone(), v = f, x = v.words[v.length - 1] | 0, A = this._countBits(x);
      y = 26 - A, y !== 0 && (v = v.ushln(y), w.iushln(y), x = v.words[v.length - 1] | 0);
      var m = w.length - v.length, l;
      if (d !== "mod") {
        l = new i(null), l.length = m + 1, l.words = new Array(l.length);
        for (var E = 0; E < l.length; E++)
          l.words[E] = 0;
      }
      var j = w.clone()._ishlnsubmul(v, 1, m);
      j.negative === 0 && (w = j, l && (l.words[m] = 1));
      for (var H = m - 1; H >= 0; H--) {
        var K = (w.words[v.length + H] | 0) * 67108864 + (w.words[v.length + H - 1] | 0);
        for (K = Math.min(K / x | 0, 67108863), w._ishlnsubmul(v, K, H); w.negative !== 0; )
          K--, w.negative = 0, w._ishlnsubmul(v, 1, H), w.isZero() || (w.negative ^= 1);
        l && (l.words[H] = K);
      }
      return l && l._strip(), w._strip(), d !== "div" && y !== 0 && w.iushrn(y), {
        div: l || null,
        mod: w
      };
    }, i.prototype.divmod = function(f, d, y) {
      if (n(!f.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var w, v, x;
      return this.negative !== 0 && f.negative === 0 ? (x = this.neg().divmod(f, d), d !== "mod" && (w = x.div.neg()), d !== "div" && (v = x.mod.neg(), y && v.negative !== 0 && v.iadd(f)), {
        div: w,
        mod: v
      }) : this.negative === 0 && f.negative !== 0 ? (x = this.divmod(f.neg(), d), d !== "mod" && (w = x.div.neg()), {
        div: w,
        mod: x.mod
      }) : this.negative & f.negative ? (x = this.neg().divmod(f.neg(), d), d !== "div" && (v = x.mod.neg(), y && v.negative !== 0 && v.isub(f)), {
        div: x.div,
        mod: v
      }) : f.length > this.length || this.cmp(f) < 0 ? {
        div: new i(0),
        mod: this
      } : f.length === 1 ? d === "div" ? {
        div: this.divn(f.words[0]),
        mod: null
      } : d === "mod" ? {
        div: null,
        mod: new i(this.modrn(f.words[0]))
      } : {
        div: this.divn(f.words[0]),
        mod: new i(this.modrn(f.words[0]))
      } : this._wordDiv(f, d);
    }, i.prototype.div = function(f) {
      return this.divmod(f, "div", !1).div;
    }, i.prototype.mod = function(f) {
      return this.divmod(f, "mod", !1).mod;
    }, i.prototype.umod = function(f) {
      return this.divmod(f, "mod", !0).mod;
    }, i.prototype.divRound = function(f) {
      var d = this.divmod(f);
      if (d.mod.isZero())
        return d.div;
      var y = d.div.negative !== 0 ? d.mod.isub(f) : d.mod, w = f.ushrn(1), v = f.andln(1), x = y.cmp(w);
      return x < 0 || v === 1 && x === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, i.prototype.modrn = function(f) {
      var d = f < 0;
      d && (f = -f), n(f <= 67108863);
      for (var y = (1 << 26) % f, w = 0, v = this.length - 1; v >= 0; v--)
        w = (y * w + (this.words[v] | 0)) % f;
      return d ? -w : w;
    }, i.prototype.modn = function(f) {
      return this.modrn(f);
    }, i.prototype.idivn = function(f) {
      var d = f < 0;
      d && (f = -f), n(f <= 67108863);
      for (var y = 0, w = this.length - 1; w >= 0; w--) {
        var v = (this.words[w] | 0) + y * 67108864;
        this.words[w] = v / f | 0, y = v % f;
      }
      return this._strip(), d ? this.ineg() : this;
    }, i.prototype.divn = function(f) {
      return this.clone().idivn(f);
    }, i.prototype.egcd = function(f) {
      n(f.negative === 0), n(!f.isZero());
      var d = this, y = f.clone();
      d.negative !== 0 ? d = d.umod(f) : d = d.clone();
      for (var w = new i(1), v = new i(0), x = new i(0), A = new i(1), m = 0; d.isEven() && y.isEven(); )
        d.iushrn(1), y.iushrn(1), ++m;
      for (var l = y.clone(), E = d.clone(); !d.isZero(); ) {
        for (var j = 0, H = 1; !(d.words[0] & H) && j < 26; ++j, H <<= 1)
          ;
        if (j > 0)
          for (d.iushrn(j); j-- > 0; )
            (w.isOdd() || v.isOdd()) && (w.iadd(l), v.isub(E)), w.iushrn(1), v.iushrn(1);
        for (var K = 0, ft = 1; !(y.words[0] & ft) && K < 26; ++K, ft <<= 1)
          ;
        if (K > 0)
          for (y.iushrn(K); K-- > 0; )
            (x.isOdd() || A.isOdd()) && (x.iadd(l), A.isub(E)), x.iushrn(1), A.iushrn(1);
        d.cmp(y) >= 0 ? (d.isub(y), w.isub(x), v.isub(A)) : (y.isub(d), x.isub(w), A.isub(v));
      }
      return {
        a: x,
        b: A,
        gcd: y.iushln(m)
      };
    }, i.prototype._invmp = function(f) {
      n(f.negative === 0), n(!f.isZero());
      var d = this, y = f.clone();
      d.negative !== 0 ? d = d.umod(f) : d = d.clone();
      for (var w = new i(1), v = new i(0), x = y.clone(); d.cmpn(1) > 0 && y.cmpn(1) > 0; ) {
        for (var A = 0, m = 1; !(d.words[0] & m) && A < 26; ++A, m <<= 1)
          ;
        if (A > 0)
          for (d.iushrn(A); A-- > 0; )
            w.isOdd() && w.iadd(x), w.iushrn(1);
        for (var l = 0, E = 1; !(y.words[0] & E) && l < 26; ++l, E <<= 1)
          ;
        if (l > 0)
          for (y.iushrn(l); l-- > 0; )
            v.isOdd() && v.iadd(x), v.iushrn(1);
        d.cmp(y) >= 0 ? (d.isub(y), w.isub(v)) : (y.isub(d), v.isub(w));
      }
      var j;
      return d.cmpn(1) === 0 ? j = w : j = v, j.cmpn(0) < 0 && j.iadd(f), j;
    }, i.prototype.gcd = function(f) {
      if (this.isZero())
        return f.abs();
      if (f.isZero())
        return this.abs();
      var d = this.clone(), y = f.clone();
      d.negative = 0, y.negative = 0;
      for (var w = 0; d.isEven() && y.isEven(); w++)
        d.iushrn(1), y.iushrn(1);
      do {
        for (; d.isEven(); )
          d.iushrn(1);
        for (; y.isEven(); )
          y.iushrn(1);
        var v = d.cmp(y);
        if (v < 0) {
          var x = d;
          d = y, y = x;
        } else if (v === 0 || y.cmpn(1) === 0)
          break;
        d.isub(y);
      } while (!0);
      return y.iushln(w);
    }, i.prototype.invm = function(f) {
      return this.egcd(f).a.umod(f);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(f) {
      return this.words[0] & f;
    }, i.prototype.bincn = function(f) {
      n(typeof f == "number");
      var d = f % 26, y = (f - d) / 26, w = 1 << d;
      if (this.length <= y)
        return this._expand(y + 1), this.words[y] |= w, this;
      for (var v = w, x = y; v !== 0 && x < this.length; x++) {
        var A = this.words[x] | 0;
        A += v, v = A >>> 26, A &= 67108863, this.words[x] = A;
      }
      return v !== 0 && (this.words[x] = v, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(f) {
      var d = f < 0;
      if (this.negative !== 0 && !d)
        return -1;
      if (this.negative === 0 && d)
        return 1;
      this._strip();
      var y;
      if (this.length > 1)
        y = 1;
      else {
        d && (f = -f), n(f <= 67108863, "Number is too big");
        var w = this.words[0] | 0;
        y = w === f ? 0 : w < f ? -1 : 1;
      }
      return this.negative !== 0 ? -y | 0 : y;
    }, i.prototype.cmp = function(f) {
      if (this.negative !== 0 && f.negative === 0)
        return -1;
      if (this.negative === 0 && f.negative !== 0)
        return 1;
      var d = this.ucmp(f);
      return this.negative !== 0 ? -d | 0 : d;
    }, i.prototype.ucmp = function(f) {
      if (this.length > f.length)
        return 1;
      if (this.length < f.length)
        return -1;
      for (var d = 0, y = this.length - 1; y >= 0; y--) {
        var w = this.words[y] | 0, v = f.words[y] | 0;
        if (w !== v) {
          w < v ? d = -1 : w > v && (d = 1);
          break;
        }
      }
      return d;
    }, i.prototype.gtn = function(f) {
      return this.cmpn(f) === 1;
    }, i.prototype.gt = function(f) {
      return this.cmp(f) === 1;
    }, i.prototype.gten = function(f) {
      return this.cmpn(f) >= 0;
    }, i.prototype.gte = function(f) {
      return this.cmp(f) >= 0;
    }, i.prototype.ltn = function(f) {
      return this.cmpn(f) === -1;
    }, i.prototype.lt = function(f) {
      return this.cmp(f) === -1;
    }, i.prototype.lten = function(f) {
      return this.cmpn(f) <= 0;
    }, i.prototype.lte = function(f) {
      return this.cmp(f) <= 0;
    }, i.prototype.eqn = function(f) {
      return this.cmpn(f) === 0;
    }, i.prototype.eq = function(f) {
      return this.cmp(f) === 0;
    }, i.red = function(f) {
      return new J(f);
    }, i.prototype.toRed = function(f) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(f) {
      return this.red = f, this;
    }, i.prototype.forceRed = function(f) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(f);
    }, i.prototype.redAdd = function(f) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
    }, i.prototype.redIAdd = function(f) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
    }, i.prototype.redSub = function(f) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
    }, i.prototype.redISub = function(f) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
    }, i.prototype.redShl = function(f) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
    }, i.prototype.redMul = function(f) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
    }, i.prototype.redIMul = function(f) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(f) {
      return n(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
    };
    var N = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function $(I, f) {
      this.name = I, this.p = new i(f, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    $.prototype._tmp = function() {
      var f = new i(null);
      return f.words = new Array(Math.ceil(this.n / 13)), f;
    }, $.prototype.ireduce = function(f) {
      var d = f, y;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), y = d.bitLength();
      while (y > this.n);
      var w = y < this.n ? -1 : d.ucmp(this.p);
      return w === 0 ? (d.words[0] = 0, d.length = 1) : w > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, $.prototype.split = function(f, d) {
      f.iushrn(this.n, 0, d);
    }, $.prototype.imulK = function(f) {
      return f.imul(this.k);
    };
    function q() {
      $.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(q, $), q.prototype.split = function(f, d) {
      for (var y = 4194303, w = Math.min(f.length, 9), v = 0; v < w; v++)
        d.words[v] = f.words[v];
      if (d.length = w, f.length <= 9) {
        f.words[0] = 0, f.length = 1;
        return;
      }
      var x = f.words[9];
      for (d.words[d.length++] = x & y, v = 10; v < f.length; v++) {
        var A = f.words[v] | 0;
        f.words[v - 10] = (A & y) << 4 | x >>> 22, x = A;
      }
      x >>>= 22, f.words[v - 10] = x, x === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
    }, q.prototype.imulK = function(f) {
      f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;
      for (var d = 0, y = 0; y < f.length; y++) {
        var w = f.words[y] | 0;
        d += w * 977, f.words[y] = d & 67108863, d = w * 64 + (d / 67108864 | 0);
      }
      return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
    };
    function W() {
      $.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(W, $);
    function tt() {
      $.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(tt, $);
    function ht() {
      $.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(ht, $), ht.prototype.imulK = function(f) {
      for (var d = 0, y = 0; y < f.length; y++) {
        var w = (f.words[y] | 0) * 19 + d, v = w & 67108863;
        w >>>= 26, f.words[y] = v, d = w;
      }
      return d !== 0 && (f.words[f.length++] = d), f;
    }, i._prime = function(f) {
      if (N[f])
        return N[f];
      var d;
      if (f === "k256")
        d = new q();
      else if (f === "p224")
        d = new W();
      else if (f === "p192")
        d = new tt();
      else if (f === "p25519")
        d = new ht();
      else
        throw new Error("Unknown prime " + f);
      return N[f] = d, d;
    };
    function J(I) {
      if (typeof I == "string") {
        var f = i._prime(I);
        this.m = f.p, this.prime = f;
      } else
        n(I.gtn(1), "modulus must be greater than 1"), this.m = I, this.prime = null;
    }
    J.prototype._verify1 = function(f) {
      n(f.negative === 0, "red works only with positives"), n(f.red, "red works only with red numbers");
    }, J.prototype._verify2 = function(f, d) {
      n((f.negative | d.negative) === 0, "red works only with positives"), n(
        f.red && f.red === d.red,
        "red works only with red numbers"
      );
    }, J.prototype.imod = function(f) {
      return this.prime ? this.prime.ireduce(f)._forceRed(this) : (_(f, f.umod(this.m)._forceRed(this)), f);
    }, J.prototype.neg = function(f) {
      return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
    }, J.prototype.add = function(f, d) {
      this._verify2(f, d);
      var y = f.add(d);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this);
    }, J.prototype.iadd = function(f, d) {
      this._verify2(f, d);
      var y = f.iadd(d);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y;
    }, J.prototype.sub = function(f, d) {
      this._verify2(f, d);
      var y = f.sub(d);
      return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this);
    }, J.prototype.isub = function(f, d) {
      this._verify2(f, d);
      var y = f.isub(d);
      return y.cmpn(0) < 0 && y.iadd(this.m), y;
    }, J.prototype.shl = function(f, d) {
      return this._verify1(f), this.imod(f.ushln(d));
    }, J.prototype.imul = function(f, d) {
      return this._verify2(f, d), this.imod(f.imul(d));
    }, J.prototype.mul = function(f, d) {
      return this._verify2(f, d), this.imod(f.mul(d));
    }, J.prototype.isqr = function(f) {
      return this.imul(f, f.clone());
    }, J.prototype.sqr = function(f) {
      return this.mul(f, f);
    }, J.prototype.sqrt = function(f) {
      if (f.isZero())
        return f.clone();
      var d = this.m.andln(3);
      if (n(d % 2 === 1), d === 3) {
        var y = this.m.add(new i(1)).iushrn(2);
        return this.pow(f, y);
      }
      for (var w = this.m.subn(1), v = 0; !w.isZero() && w.andln(1) === 0; )
        v++, w.iushrn(1);
      n(!w.isZero());
      var x = new i(1).toRed(this), A = x.redNeg(), m = this.m.subn(1).iushrn(1), l = this.m.bitLength();
      for (l = new i(2 * l * l).toRed(this); this.pow(l, m).cmp(A) !== 0; )
        l.redIAdd(A);
      for (var E = this.pow(l, w), j = this.pow(f, w.addn(1).iushrn(1)), H = this.pow(f, w), K = v; H.cmp(x) !== 0; ) {
        for (var ft = H, it = 0; ft.cmp(x) !== 0; it++)
          ft = ft.redSqr();
        n(it < K);
        var ut = this.pow(E, new i(1).iushln(K - it - 1));
        j = j.redMul(ut), E = ut.redSqr(), H = H.redMul(E), K = it;
      }
      return j;
    }, J.prototype.invm = function(f) {
      var d = f._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, J.prototype.pow = function(f, d) {
      if (d.isZero())
        return new i(1).toRed(this);
      if (d.cmpn(1) === 0)
        return f.clone();
      var y = 4, w = new Array(1 << y);
      w[0] = new i(1).toRed(this), w[1] = f;
      for (var v = 2; v < w.length; v++)
        w[v] = this.mul(w[v - 1], f);
      var x = w[0], A = 0, m = 0, l = d.bitLength() % 26;
      for (l === 0 && (l = 26), v = d.length - 1; v >= 0; v--) {
        for (var E = d.words[v], j = l - 1; j >= 0; j--) {
          var H = E >> j & 1;
          if (x !== w[0] && (x = this.sqr(x)), H === 0 && A === 0) {
            m = 0;
            continue;
          }
          A <<= 1, A |= H, m++, !(m !== y && (v !== 0 || j !== 0)) && (x = this.mul(x, w[A]), m = 0, A = 0);
        }
        l = 26;
      }
      return x;
    }, J.prototype.convertTo = function(f) {
      var d = f.umod(this.m);
      return d === f ? d.clone() : d;
    }, J.prototype.convertFrom = function(f) {
      var d = f.clone();
      return d.red = null, d;
    }, i.mont = function(f) {
      return new mt(f);
    };
    function mt(I) {
      J.call(this, I), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(mt, J), mt.prototype.convertTo = function(f) {
      return this.imod(f.ushln(this.shift));
    }, mt.prototype.convertFrom = function(f) {
      var d = this.imod(f.mul(this.rinv));
      return d.red = null, d;
    }, mt.prototype.imul = function(f, d) {
      if (f.isZero() || d.isZero())
        return f.words[0] = 0, f.length = 1, f;
      var y = f.imul(d), w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), v = y.isub(w).iushrn(this.shift), x = v;
      return v.cmp(this.m) >= 0 ? x = v.isub(this.m) : v.cmpn(0) < 0 && (x = v.iadd(this.m)), x._forceRed(this);
    }, mt.prototype.mul = function(f, d) {
      if (f.isZero() || d.isZero())
        return new i(0)._forceRed(this);
      var y = f.mul(d), w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), v = y.isub(w).iushrn(this.shift), x = v;
      return v.cmp(this.m) >= 0 ? x = v.isub(this.m) : v.cmpn(0) < 0 && (x = v.iadd(this.m)), x._forceRed(this);
    }, mt.prototype.invm = function(f) {
      var d = this.imod(f._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(r, He);
})(hf);
var M0 = hf.exports;
const _l = /* @__PURE__ */ gn(M0);
var Iu = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(r, t) {
  var e = ue, n = e.Buffer;
  function o(c, u) {
    for (var p in c)
      u[p] = c[p];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? r.exports = e : (o(e, t), t.Buffer = i);
  function i(c, u, p) {
    return n(c, u, p);
  }
  i.prototype = Object.create(n.prototype), o(n, i), i.from = function(c, u, p) {
    if (typeof c == "number")
      throw new TypeError("Argument must not be a number");
    return n(c, u, p);
  }, i.alloc = function(c, u, p) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    var b = n(c);
    return u !== void 0 ? typeof p == "string" ? b.fill(u, p) : b.fill(u) : b.fill(0), b;
  }, i.allocUnsafe = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return n(c);
  }, i.allocUnsafeSlow = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return e.SlowBuffer(c);
  };
})(Iu, Iu.exports);
var Dg = Iu.exports, zs = Dg.Buffer;
function zg(r) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var n = 0; n < r.length; n++) {
    var o = r.charAt(n), i = o.charCodeAt(0);
    if (t[i] !== 255)
      throw new TypeError(o + " is ambiguous");
    t[i] = n;
  }
  var c = r.length, u = r.charAt(0), p = Math.log(c) / Math.log(256), b = Math.log(256) / Math.log(c);
  function _(R) {
    if ((Array.isArray(R) || R instanceof Uint8Array) && (R = zs.from(R)), !zs.isBuffer(R))
      throw new TypeError("Expected Buffer");
    if (R.length === 0)
      return "";
    for (var O = 0, U = 0, T = 0, P = R.length; T !== P && R[T] === 0; )
      T++, O++;
    for (var F = (P - T) * b + 1 >>> 0, L = new Uint8Array(F); T !== P; ) {
      for (var z = R[T], N = 0, $ = F - 1; (z !== 0 || N < U) && $ !== -1; $--, N++)
        z += 256 * L[$] >>> 0, L[$] = z % c >>> 0, z = z / c >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      U = N, T++;
    }
    for (var q = F - U; q !== F && L[q] === 0; )
      q++;
    for (var W = u.repeat(O); q < F; ++q)
      W += r.charAt(L[q]);
    return W;
  }
  function B(R) {
    if (typeof R != "string")
      throw new TypeError("Expected String");
    if (R.length === 0)
      return zs.alloc(0);
    for (var O = 0, U = 0, T = 0; R[O] === u; )
      U++, O++;
    for (var P = (R.length - O) * p + 1 >>> 0, F = new Uint8Array(P); R[O]; ) {
      var L = t[R.charCodeAt(O)];
      if (L === 255)
        return;
      for (var z = 0, N = P - 1; (L !== 0 || z < T) && N !== -1; N--, z++)
        L += c * F[N] >>> 0, F[N] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      T = z, O++;
    }
    for (var $ = P - T; $ !== P && F[$] === 0; )
      $++;
    var q = zs.allocUnsafe(U + (P - $));
    q.fill(0, 0, U);
    for (var W = U; $ !== P; )
      q[W++] = F[$++];
    return q;
  }
  function C(R) {
    var O = B(R);
    if (O)
      return O;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: _,
    decodeUnsafe: B,
    decode: C
  };
}
var qg = zg, Wg = qg, jg = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", R0 = Wg(jg);
const or = /* @__PURE__ */ gn(R0), Hg = (r, t, e) => r & t ^ ~r & e, Kg = (r, t, e) => r & t ^ r & e ^ t & e, Gg = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Qn = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ti = /* @__PURE__ */ new Uint32Array(64);
let Vg = class extends m0 {
  constructor() {
    super(64, 32, 8, !1), this.A = Qn[0] | 0, this.B = Qn[1] | 0, this.C = Qn[2] | 0, this.D = Qn[3] | 0, this.E = Qn[4] | 0, this.F = Qn[5] | 0, this.G = Qn[6] | 0, this.H = Qn[7] | 0;
  }
  get() {
    const { A: t, B: e, C: n, D: o, E: i, F: c, G: u, H: p } = this;
    return [t, e, n, o, i, c, u, p];
  }
  // prettier-ignore
  set(t, e, n, o, i, c, u, p) {
    this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = o | 0, this.E = i | 0, this.F = c | 0, this.G = u | 0, this.H = p | 0;
  }
  process(t, e) {
    for (let B = 0; B < 16; B++, e += 4)
      ti[B] = t.getUint32(e, !1);
    for (let B = 16; B < 64; B++) {
      const C = ti[B - 15], R = ti[B - 2], O = bn(C, 7) ^ bn(C, 18) ^ C >>> 3, U = bn(R, 17) ^ bn(R, 19) ^ R >>> 10;
      ti[B] = U + ti[B - 7] + O + ti[B - 16] | 0;
    }
    let { A: n, B: o, C: i, D: c, E: u, F: p, G: b, H: _ } = this;
    for (let B = 0; B < 64; B++) {
      const C = bn(u, 6) ^ bn(u, 11) ^ bn(u, 25), R = _ + C + Hg(u, p, b) + Gg[B] + ti[B] | 0, U = (bn(n, 2) ^ bn(n, 13) ^ bn(n, 22)) + Kg(n, o, i) | 0;
      _ = b, b = p, p = u, u = c + R | 0, c = i, i = o, o = n, n = R + U | 0;
    }
    n = n + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, p = p + this.F | 0, b = b + this.G | 0, _ = _ + this.H | 0, this.set(n, o, i, c, u, p, b, _);
  }
  roundClean() {
    ti.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
const Mu = /* @__PURE__ */ g0(() => new Vg());
var pr = {};
function $n(r, t, e) {
  return t <= r && r <= e;
}
function Oa(r) {
  if (r === void 0)
    return {};
  if (r === Object(r))
    return r;
  throw TypeError("Could not convert argument to dictionary");
}
function Zg(r) {
  for (var t = String(r), e = t.length, n = 0, o = []; n < e; ) {
    var i = t.charCodeAt(n);
    if (i < 55296 || i > 57343)
      o.push(i);
    else if (56320 <= i && i <= 57343)
      o.push(65533);
    else if (55296 <= i && i <= 56319)
      if (n === e - 1)
        o.push(65533);
      else {
        var c = r.charCodeAt(n + 1);
        if (56320 <= c && c <= 57343) {
          var u = i & 1023, p = c & 1023;
          o.push(65536 + (u << 10) + p), n += 1;
        } else
          o.push(65533);
      }
    n += 1;
  }
  return o;
}
function Yg(r) {
  for (var t = "", e = 0; e < r.length; ++e) {
    var n = r[e];
    n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode(
      (n >> 10) + 55296,
      (n & 1023) + 56320
    ));
  }
  return t;
}
var la = -1;
function pf(r) {
  this.tokens = [].slice.call(r);
}
pf.prototype = {
  /**
   * @return {boolean} True if end-of-stream has been hit.
   */
  endOfStream: function() {
    return !this.tokens.length;
  },
  /**
   * When a token is read from a stream, the first token in the
   * stream must be returned and subsequently removed, and
   * end-of-stream must be returned otherwise.
   *
   * @return {number} Get the next token from the stream, or
   * end_of_stream.
   */
  read: function() {
    return this.tokens.length ? this.tokens.shift() : la;
  },
  /**
   * When one or more tokens are prepended to a stream, those tokens
   * must be inserted, in given order, before the first token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
   */
  prepend: function(r) {
    if (Array.isArray(r))
      for (var t = (
        /**@type {!Array.<number>}*/
        r
      ); t.length; )
        this.tokens.unshift(t.pop());
    else
      this.tokens.unshift(r);
  },
  /**
   * When one or more tokens are pushed to a stream, those tokens
   * must be inserted, in given order, after the last token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
   */
  push: function(r) {
    if (Array.isArray(r))
      for (var t = (
        /**@type {!Array.<number>}*/
        r
      ); t.length; )
        this.tokens.push(t.shift());
    else
      this.tokens.push(r);
  }
};
var No = -1;
function dc(r, t) {
  if (r)
    throw TypeError("Decoder error");
  return t || 65533;
}
var ha = "utf-8";
function da(r, t) {
  if (!(this instanceof da))
    return new da(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : ha, r !== ha)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = Oa(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!t.fatal, this._ignoreBOM = !!t.ignoreBOM, Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
da.prototype = {
  /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */
  decode: function(t, e) {
    var n;
    typeof t == "object" && t instanceof ArrayBuffer ? n = new Uint8Array(t) : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer ? n = new Uint8Array(
      t.buffer,
      t.byteOffset,
      t.byteLength
    ) : n = new Uint8Array(0), e = Oa(e), this._streaming || (this._decoder = new Xg({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = !!e.stream;
    for (var o = new pf(n), i = [], c; !o.endOfStream() && (c = this._decoder.handler(o, o.read()), c !== No); )
      c !== null && (Array.isArray(c) ? i.push.apply(
        i,
        /**@type {!Array.<number>}*/
        c
      ) : i.push(c));
    if (!this._streaming) {
      do {
        if (c = this._decoder.handler(o, o.read()), c === No)
          break;
        c !== null && (Array.isArray(c) ? i.push.apply(
          i,
          /**@type {!Array.<number>}*/
          c
        ) : i.push(c));
      } while (!o.endOfStream());
      this._decoder = null;
    }
    return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), Yg(i);
  }
};
function pa(r, t) {
  if (!(this instanceof pa))
    return new pa(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : ha, r !== ha)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = Oa(t), this._streaming = !1, this._encoder = null, this._options = { fatal: !!t.fatal }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
pa.prototype = {
  /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */
  encode: function(t, e) {
    t = t ? String(t) : "", e = Oa(e), this._streaming || (this._encoder = new Jg(this._options)), this._streaming = !!e.stream;
    for (var n = [], o = new pf(Zg(t)), i; !o.endOfStream() && (i = this._encoder.handler(o, o.read()), i !== No); )
      Array.isArray(i) ? n.push.apply(
        n,
        /**@type {!Array.<number>}*/
        i
      ) : n.push(i);
    if (!this._streaming) {
      for (; i = this._encoder.handler(o, o.read()), i !== No; )
        Array.isArray(i) ? n.push.apply(
          n,
          /**@type {!Array.<number>}*/
          i
        ) : n.push(i);
      this._encoder = null;
    }
    return new Uint8Array(n);
  }
};
function Xg(r) {
  var t = r.fatal, e = 0, n = 0, o = 0, i = 128, c = 191;
  this.handler = function(u, p) {
    if (p === la && o !== 0)
      return o = 0, dc(t);
    if (p === la)
      return No;
    if (o === 0) {
      if ($n(p, 0, 127))
        return p;
      if ($n(p, 194, 223))
        o = 1, e = p - 192;
      else if ($n(p, 224, 239))
        p === 224 && (i = 160), p === 237 && (c = 159), o = 2, e = p - 224;
      else if ($n(p, 240, 244))
        p === 240 && (i = 144), p === 244 && (c = 143), o = 3, e = p - 240;
      else
        return dc(t);
      return e = e << 6 * o, null;
    }
    if (!$n(p, i, c))
      return e = o = n = 0, i = 128, c = 191, u.prepend(p), dc(t);
    if (i = 128, c = 191, n += 1, e += p - 128 << 6 * (o - n), n !== o)
      return null;
    var b = e;
    return e = o = n = 0, b;
  };
}
function Jg(r) {
  r.fatal, this.handler = function(t, e) {
    if (e === la)
      return No;
    if ($n(e, 0, 127))
      return e;
    var n, o;
    $n(e, 128, 2047) ? (n = 1, o = 192) : $n(e, 2048, 65535) ? (n = 2, o = 224) : $n(e, 65536, 1114111) && (n = 3, o = 240);
    for (var i = [(e >> 6 * n) + o]; n > 0; ) {
      var c = e >> 6 * (n - 1);
      i.push(128 | c & 63), n -= 1;
    }
    return i;
  };
}
const Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextDecoder: da,
  TextEncoder: pa
}, Symbol.toStringTag, { value: "Module" })), ty = /* @__PURE__ */ eo(Qg);
var ey = He && He.__createBinding || (Object.create ? function(r, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(r, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(r, t, e, n) {
  n === void 0 && (n = e), r[n] = t[e];
}), ry = He && He.__setModuleDefault || (Object.create ? function(r, t) {
  Object.defineProperty(r, "default", { enumerable: !0, value: t });
} : function(r, t) {
  r.default = t;
}), Rn = He && He.__decorate || function(r, t, e, n) {
  var o = arguments.length, i = o < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(r, t, e, n);
  else
    for (var u = r.length - 1; u >= 0; u--)
      (c = r[u]) && (i = (o < 3 ? c(i) : o > 3 ? c(t, e, i) : c(t, e)) || i);
  return o > 3 && i && Object.defineProperty(t, e, i), i;
}, ny = He && He.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var t = {};
  if (r != null)
    for (var e in r)
      e !== "default" && Object.hasOwnProperty.call(r, e) && ey(t, r, e);
  return ry(t, r), t;
}, k0 = He && He.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(pr, "__esModule", { value: !0 });
var T0 = pr.deserializeUnchecked = N0 = pr.deserialize = F0 = pr.serialize = pr.BinaryReader = pr.BinaryWriter = pr.BorshError = pr.baseDecode = pr.baseEncode = void 0;
const li = k0(M0), C0 = k0(R0), iy = ny(ty), oy = typeof TextDecoder != "function" ? iy.TextDecoder : TextDecoder, sy = new oy("utf-8", { fatal: !0 });
function ay(r) {
  return typeof r == "string" && (r = Buffer.from(r, "utf8")), C0.default.encode(Buffer.from(r));
}
pr.baseEncode = ay;
function cy(r) {
  return Buffer.from(C0.default.decode(r));
}
pr.baseDecode = cy;
const pc = 1024;
let Rr = class extends Error {
  constructor(t) {
    super(t), this.fieldPath = [], this.originalMessage = t;
  }
  addToFieldPath(t) {
    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
  }
};
pr.BorshError = Rr;
let L0 = class {
  constructor() {
    this.buf = Buffer.alloc(pc), this.length = 0;
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(pc)]));
  }
  writeU8(t) {
    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1;
  }
  writeU16(t) {
    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2;
  }
  writeU32(t) {
    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4;
  }
  writeU64(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new li.default(t).toArray("le", 8)));
  }
  writeU128(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new li.default(t).toArray("le", 16)));
  }
  writeU256(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new li.default(t).toArray("le", 32)));
  }
  writeU512(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new li.default(t).toArray("le", 64)));
  }
  writeBuffer(t) {
    this.buf = Buffer.concat([
      Buffer.from(this.buf.subarray(0, this.length)),
      t,
      Buffer.alloc(pc)
    ]), this.length += t.length;
  }
  writeString(t) {
    this.maybeResize();
    const e = Buffer.from(t, "utf8");
    this.writeU32(e.length), this.writeBuffer(e);
  }
  writeFixedArray(t) {
    this.writeBuffer(Buffer.from(t));
  }
  writeArray(t, e) {
    this.maybeResize(), this.writeU32(t.length);
    for (const n of t)
      this.maybeResize(), e(n);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
};
pr.BinaryWriter = L0;
function kn(r, t, e) {
  const n = e.value;
  e.value = function(...o) {
    try {
      return n.apply(this, o);
    } catch (i) {
      if (i instanceof RangeError) {
        const c = i.code;
        if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(c) >= 0)
          throw new Rr("Reached the end of buffer when deserializing");
      }
      throw i;
    }
  };
}
let Yr = class {
  constructor(t) {
    this.buf = t, this.offset = 0;
  }
  readU8() {
    const t = this.buf.readUInt8(this.offset);
    return this.offset += 1, t;
  }
  readU16() {
    const t = this.buf.readUInt16LE(this.offset);
    return this.offset += 2, t;
  }
  readU32() {
    const t = this.buf.readUInt32LE(this.offset);
    return this.offset += 4, t;
  }
  readU64() {
    const t = this.readBuffer(8);
    return new li.default(t, "le");
  }
  readU128() {
    const t = this.readBuffer(16);
    return new li.default(t, "le");
  }
  readU256() {
    const t = this.readBuffer(32);
    return new li.default(t, "le");
  }
  readU512() {
    const t = this.readBuffer(64);
    return new li.default(t, "le");
  }
  readBuffer(t) {
    if (this.offset + t > this.buf.length)
      throw new Rr(`Expected buffer length ${t} isn't within bounds`);
    const e = this.buf.slice(this.offset, this.offset + t);
    return this.offset += t, e;
  }
  readString() {
    const t = this.readU32(), e = this.readBuffer(t);
    try {
      return sy.decode(e);
    } catch (n) {
      throw new Rr(`Error decoding UTF-8 string: ${n}`);
    }
  }
  readFixedArray(t) {
    return new Uint8Array(this.readBuffer(t));
  }
  readArray(t) {
    const e = this.readU32(), n = Array();
    for (let o = 0; o < e; ++o)
      n.push(t());
    return n;
  }
};
Rn([
  kn
], Yr.prototype, "readU8", null);
Rn([
  kn
], Yr.prototype, "readU16", null);
Rn([
  kn
], Yr.prototype, "readU32", null);
Rn([
  kn
], Yr.prototype, "readU64", null);
Rn([
  kn
], Yr.prototype, "readU128", null);
Rn([
  kn
], Yr.prototype, "readU256", null);
Rn([
  kn
], Yr.prototype, "readU512", null);
Rn([
  kn
], Yr.prototype, "readString", null);
Rn([
  kn
], Yr.prototype, "readFixedArray", null);
Rn([
  kn
], Yr.prototype, "readArray", null);
pr.BinaryReader = Yr;
function U0(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Ui(r, t, e, n, o) {
  try {
    if (typeof n == "string")
      o[`write${U0(n)}`](e);
    else if (n instanceof Array)
      if (typeof n[0] == "number") {
        if (e.length !== n[0])
          throw new Rr(`Expecting byte array of length ${n[0]}, but got ${e.length} bytes`);
        o.writeFixedArray(e);
      } else if (n.length === 2 && typeof n[1] == "number") {
        if (e.length !== n[1])
          throw new Rr(`Expecting byte array of length ${n[1]}, but got ${e.length} bytes`);
        for (let i = 0; i < n[1]; i++)
          Ui(r, null, e[i], n[0], o);
      } else
        o.writeArray(e, (i) => {
          Ui(r, t, i, n[0], o);
        });
    else if (n.kind !== void 0)
      switch (n.kind) {
        case "option": {
          e == null ? o.writeU8(0) : (o.writeU8(1), Ui(r, t, e, n.type, o));
          break;
        }
        case "map": {
          o.writeU32(e.size), e.forEach((i, c) => {
            Ui(r, t, c, n.key, o), Ui(r, t, i, n.value, o);
          });
          break;
        }
        default:
          throw new Rr(`FieldType ${n} unrecognized`);
      }
    else
      O0(r, e, o);
  } catch (i) {
    throw i instanceof Rr && i.addToFieldPath(t), i;
  }
}
function O0(r, t, e) {
  if (typeof t.borshSerialize == "function") {
    t.borshSerialize(e);
    return;
  }
  const n = r.get(t.constructor);
  if (!n)
    throw new Rr(`Class ${t.constructor.name} is missing in schema`);
  if (n.kind === "struct")
    n.fields.map(([o, i]) => {
      Ui(r, o, t[o], i, e);
    });
  else if (n.kind === "enum") {
    const o = t[n.field];
    for (let i = 0; i < n.values.length; ++i) {
      const [c, u] = n.values[i];
      if (c === o) {
        e.writeU8(i), Ui(r, c, t[c], u, e);
        break;
      }
    }
  } else
    throw new Rr(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function uy(r, t, e = L0) {
  const n = new e();
  return O0(r, t, n), n.toArray();
}
var F0 = pr.serialize = uy;
function Oi(r, t, e, n) {
  try {
    if (typeof e == "string")
      return n[`read${U0(e)}`]();
    if (e instanceof Array) {
      if (typeof e[0] == "number")
        return n.readFixedArray(e[0]);
      if (typeof e[1] == "number") {
        const o = [];
        for (let i = 0; i < e[1]; i++)
          o.push(Oi(r, null, e[0], n));
        return o;
      } else
        return n.readArray(() => Oi(r, t, e[0], n));
    }
    if (e.kind === "option")
      return n.readU8() ? Oi(r, t, e.type, n) : void 0;
    if (e.kind === "map") {
      let o = /* @__PURE__ */ new Map();
      const i = n.readU32();
      for (let c = 0; c < i; c++) {
        const u = Oi(r, t, e.key, n), p = Oi(r, t, e.value, n);
        o.set(u, p);
      }
      return o;
    }
    return gf(r, e, n);
  } catch (o) {
    throw o instanceof Rr && o.addToFieldPath(t), o;
  }
}
function gf(r, t, e) {
  if (typeof t.borshDeserialize == "function")
    return t.borshDeserialize(e);
  const n = r.get(t);
  if (!n)
    throw new Rr(`Class ${t.name} is missing in schema`);
  if (n.kind === "struct") {
    const o = {};
    for (const [i, c] of r.get(t).fields)
      o[i] = Oi(r, i, c, e);
    return new t(o);
  }
  if (n.kind === "enum") {
    const o = e.readU8();
    if (o >= n.values.length)
      throw new Rr(`Enum index: ${o} is out of range`);
    const [i, c] = n.values[o], u = Oi(r, i, c, e);
    return new t({ [i]: u });
  }
  throw new Rr(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function fy(r, t, e, n = Yr) {
  const o = new n(e), i = gf(r, t, o);
  if (o.offset < e.length)
    throw new Rr(`Unexpected ${e.length - o.offset} bytes after deserialized data`);
  return i;
}
var N0 = pr.deserialize = fy;
function ly(r, t, e, n = Yr) {
  const o = new n(e);
  return gf(r, t, o);
}
T0 = pr.deserializeUnchecked = ly;
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.s16 = V.s8 = V.nu64be = V.u48be = V.u40be = V.u32be = V.u24be = V.u16be = fr = V.nu64 = V.u48 = V.u40 = Dt = V.u32 = V.u24 = rn = V.u16 = _e = V.u8 = Vi = V.offset = V.greedy = V.Constant = V.UTF8 = V.CString = V.Blob = V.Boolean = V.BitField = V.BitStructure = V.VariantLayout = V.Union = V.UnionLayoutDiscriminator = V.UnionDiscriminator = V.Structure = V.Sequence = V.DoubleBE = V.Double = V.FloatBE = V.Float = V.NearInt64BE = V.NearInt64 = V.NearUInt64BE = V.NearUInt64 = V.IntBE = V.Int = V.UIntBE = V.UInt = V.OffsetLayout = V.GreedyCount = V.ExternalLayout = V.bindConstructorLayout = V.nameWithProperty = V.Layout = V.uint8ArrayToBuffer = V.checkUint8Array = void 0;
V.constant = V.utf8 = V.cstr = Te = V.blob = V.unionLayoutDiscriminator = V.union = Ir = V.seq = V.bits = Ct = V.struct = V.f64be = V.f64 = V.f32be = V.f32 = V.ns64be = V.s48be = V.s40be = V.s32be = V.s24be = V.s16be = jr = V.ns64 = V.s48 = V.s40 = V.s32 = V.s24 = void 0;
const yf = ue;
function Go(r) {
  if (!(r instanceof Uint8Array))
    throw new TypeError("b must be a Uint8Array");
}
V.checkUint8Array = Go;
function be(r) {
  return Go(r), yf.Buffer.from(r.buffer, r.byteOffset, r.length);
}
V.uint8ArrayToBuffer = be;
let Ae = class {
  constructor(t, e) {
    if (!Number.isInteger(t))
      throw new TypeError("span must be an integer");
    this.span = t, this.property = e;
  }
  /** Function to create an Object into which decoded properties will
   * be written.
   *
   * Used only for layouts that {@link Layout#decode|decode} to Object
   * instances, which means:
   * * {@link Structure}
   * * {@link Union}
   * * {@link VariantLayout}
   * * {@link BitStructure}
   *
   * If left undefined the JavaScript representation of these layouts
   * will be Object instances.
   *
   * See {@link bindConstructorLayout}.
   */
  makeDestinationObject() {
    return {};
  }
  /**
   * Calculate the span of a specific instance of a layout.
   *
   * @param {Uint8Array} b - the buffer that contains an encoded instance.
   *
   * @param {Number} [offset] - the offset at which the encoded instance
   * starts.  If absent a zero offset is inferred.
   *
   * @return {Number} - the number of bytes covered by the layout
   * instance.  If this method is not overridden in a subclass the
   * definition-time constant {@link Layout#span|span} will be
   * returned.
   *
   * @throws {RangeError} - if the length of the value cannot be
   * determined.
   */
  getSpan(t, e) {
    if (0 > this.span)
      throw new RangeError("indeterminate span");
    return this.span;
  }
  /**
   * Replicate the layout using a new property.
   *
   * This function must be used to get a structurally-equivalent layout
   * with a different name since all {@link Layout} instances are
   * immutable.
   *
   * **NOTE** This is a shallow copy.  All fields except {@link
   * Layout#property|property} are strictly equal to the origin layout.
   *
   * @param {String} property - the value for {@link
   * Layout#property|property} in the replica.
   *
   * @returns {Layout} - the copy with {@link Layout#property|property}
   * set to `property`.
   */
  replicate(t) {
    const e = Object.create(this.constructor.prototype);
    return Object.assign(e, this), e.property = t, e;
  }
  /**
   * Create an object from layout properties and an array of values.
   *
   * **NOTE** This function returns `undefined` if invoked on a layout
   * that does not return its value as an Object.  Objects are
   * returned for things that are a {@link Structure}, which includes
   * {@link VariantLayout|variant layouts} if they are structures, and
   * excludes {@link Union}s.  If you want this feature for a union
   * you must use {@link Union.getVariant|getVariant} to select the
   * desired layout.
   *
   * @param {Array} values - an array of values that correspond to the
   * default order for properties.  As with {@link Layout#decode|decode}
   * layout elements that have no property name are skipped when
   * iterating over the array values.  Only the top-level properties are
   * assigned; arguments are not assigned to properties of contained
   * layouts.  Any unused values are ignored.
   *
   * @return {(Object|undefined)}
   */
  fromArray(t) {
  }
};
V.Layout = Ae;
function mf(r, t) {
  return t.property ? r + "[" + t.property + "]" : r;
}
V.nameWithProperty = mf;
function hy(r, t) {
  if (typeof r != "function")
    throw new TypeError("Class must be constructor");
  if (Object.prototype.hasOwnProperty.call(r, "layout_"))
    throw new Error("Class is already bound to a layout");
  if (!(t && t instanceof Ae))
    throw new TypeError("layout must be a Layout");
  if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
    throw new Error("layout is already bound to a constructor");
  r.layout_ = t, t.boundConstructor_ = r, t.makeDestinationObject = () => new r(), Object.defineProperty(r.prototype, "encode", {
    value(e, n) {
      return t.encode(this, e, n);
    },
    writable: !0
  }), Object.defineProperty(r, "decode", {
    value(e, n) {
      return t.decode(e, n);
    },
    writable: !0
  });
}
V.bindConstructorLayout = hy;
let Fr = class extends Ae {
  /**
   * Return `true` iff the external layout decodes to an unsigned
   * integer layout.
   *
   * In that case it can be used as the source of {@link
   * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
   * or as {@link UnionLayoutDiscriminator#layout|external union
   * discriminators}.
   *
   * @abstract
   */
  isCount() {
    throw new Error("ExternalLayout is abstract");
  }
};
V.ExternalLayout = Fr;
let $0 = class extends Fr {
  constructor(t = 1, e) {
    if (!Number.isInteger(t) || 0 >= t)
      throw new TypeError("elementSpan must be a (positive) integer");
    super(-1, e), this.elementSpan = t;
  }
  /** @override */
  isCount() {
    return !0;
  }
  /** @override */
  decode(t, e = 0) {
    Go(t);
    const n = t.length - e;
    return Math.floor(n / this.elementSpan);
  }
  /** @override */
  encode(t, e, n) {
    return 0;
  }
};
V.GreedyCount = $0;
let wf = class extends Fr {
  constructor(t, e = 0, n) {
    if (!(t instanceof Ae))
      throw new TypeError("layout must be a Layout");
    if (!Number.isInteger(e))
      throw new TypeError("offset must be integer or undefined");
    super(t.span, n || t.property), this.layout = t, this.offset = e;
  }
  /** @override */
  isCount() {
    return this.layout instanceof an || this.layout instanceof ln;
  }
  /** @override */
  decode(t, e = 0) {
    return this.layout.decode(t, e + this.offset);
  }
  /** @override */
  encode(t, e, n = 0) {
    return this.layout.encode(t, e, n + this.offset);
  }
};
V.OffsetLayout = wf;
let an = class extends Ae {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readUIntLE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeUIntLE(t, n, this.span), this.span;
  }
};
V.UInt = an;
let ln = class extends Ae {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readUIntBE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeUIntBE(t, n, this.span), this.span;
  }
};
V.UIntBE = ln;
let ro = class extends Ae {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readIntLE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeIntLE(t, n, this.span), this.span;
  }
};
V.Int = ro;
let Vo = class extends Ae {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readIntBE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeIntBE(t, n, this.span), this.span;
  }
};
V.IntBE = Vo;
const Ru = Math.pow(2, 32);
function Fa(r) {
  const t = Math.floor(r / Ru), e = r - t * Ru;
  return { hi32: t, lo32: e };
}
function Na(r, t) {
  return r * Ru + t;
}
let P0 = class extends Ae {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = be(t), o = n.readUInt32LE(e), i = n.readUInt32LE(e + 4);
    return Na(i, o);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Fa(t), i = be(e);
    return i.writeUInt32LE(o.lo32, n), i.writeUInt32LE(o.hi32, n + 4), 8;
  }
};
V.NearUInt64 = P0;
let D0 = class extends Ae {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = be(t), o = n.readUInt32BE(e), i = n.readUInt32BE(e + 4);
    return Na(o, i);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Fa(t), i = be(e);
    return i.writeUInt32BE(o.hi32, n), i.writeUInt32BE(o.lo32, n + 4), 8;
  }
};
V.NearUInt64BE = D0;
let z0 = class extends Ae {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = be(t), o = n.readUInt32LE(e), i = n.readInt32LE(e + 4);
    return Na(i, o);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Fa(t), i = be(e);
    return i.writeUInt32LE(o.lo32, n), i.writeInt32LE(o.hi32, n + 4), 8;
  }
};
V.NearInt64 = z0;
let q0 = class extends Ae {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = be(t), o = n.readInt32BE(e), i = n.readUInt32BE(e + 4);
    return Na(o, i);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Fa(t), i = be(e);
    return i.writeInt32BE(o.hi32, n), i.writeUInt32BE(o.lo32, n + 4), 8;
  }
};
V.NearInt64BE = q0;
let W0 = class extends Ae {
  constructor(t) {
    super(4, t);
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readFloatLE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeFloatLE(t, n), 4;
  }
};
V.Float = W0;
let j0 = class extends Ae {
  constructor(t) {
    super(4, t);
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readFloatBE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeFloatBE(t, n), 4;
  }
};
V.FloatBE = j0;
let H0 = class extends Ae {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readDoubleLE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeDoubleLE(t, n), 8;
  }
};
V.Double = H0;
let K0 = class extends Ae {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    return be(t).readDoubleBE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return be(e).writeDoubleBE(t, n), 8;
  }
};
V.DoubleBE = K0;
let G0 = class extends Ae {
  constructor(t, e, n) {
    if (!(t instanceof Ae))
      throw new TypeError("elementLayout must be a Layout");
    if (!(e instanceof Fr && e.isCount() || Number.isInteger(e) && 0 <= e))
      throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
    let o = -1;
    !(e instanceof Fr) && 0 < t.span && (o = e * t.span), super(o, n), this.elementLayout = t, this.count = e;
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0, o = this.count;
    if (o instanceof Fr && (o = o.decode(t, e)), 0 < this.elementLayout.span)
      n = o * this.elementLayout.span;
    else {
      let i = 0;
      for (; i < o; )
        n += this.elementLayout.getSpan(t, e + n), ++i;
    }
    return n;
  }
  /** @override */
  decode(t, e = 0) {
    const n = [];
    let o = 0, i = this.count;
    for (i instanceof Fr && (i = i.decode(t, e)); o < i; )
      n.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), o += 1;
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link Sequence}.
   *
   * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
   * the unused space in the buffer is left unchanged.  If `src` is
   * longer than {@link Sequence#count|count} the unneeded elements are
   * ignored.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */
  encode(t, e, n = 0) {
    const o = this.elementLayout, i = t.reduce((c, u) => c + o.encode(u, e, n + c), 0);
    return this.count instanceof Fr && this.count.encode(t.length, e, n), i;
  }
};
V.Sequence = G0;
let V0 = class extends Ae {
  constructor(t, e, n) {
    if (!(Array.isArray(t) && t.reduce((i, c) => i && c instanceof Ae, !0)))
      throw new TypeError("fields must be array of Layout instances");
    typeof e == "boolean" && n === void 0 && (n = e, e = void 0);
    for (const i of t)
      if (0 > i.span && i.property === void 0)
        throw new Error("fields cannot contain unnamed variable-length layout");
    let o = -1;
    try {
      o = t.reduce((i, c) => i + c.getSpan(), 0);
    } catch {
    }
    super(o, e), this.fields = t, this.decodePrefixes = !!n;
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0;
    try {
      n = this.fields.reduce((o, i) => {
        const c = i.getSpan(t, e);
        return e += c, o + c;
      }, 0);
    } catch {
      throw new RangeError("indeterminate span");
    }
    return n;
  }
  /** @override */
  decode(t, e = 0) {
    Go(t);
    const n = this.makeDestinationObject();
    for (const o of this.fields)
      if (o.property !== void 0 && (n[o.property] = o.decode(t, e)), e += o.getSpan(t, e), this.decodePrefixes && t.length === e)
        break;
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link Structure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the buffer is
   * left unmodified. */
  encode(t, e, n = 0) {
    const o = n;
    let i = 0, c = 0;
    for (const u of this.fields) {
      let p = u.span;
      if (c = 0 < p ? p : 0, u.property !== void 0) {
        const b = t[u.property];
        b !== void 0 && (c = u.encode(b, e, n), 0 > p && (p = u.getSpan(e, n)));
      }
      i = n, n += p;
    }
    return i + c - o;
  }
  /** @override */
  fromArray(t) {
    const e = this.makeDestinationObject();
    for (const n of this.fields)
      n.property !== void 0 && 0 < t.length && (e[n.property] = t.shift());
    return e;
  }
  /**
   * Get access to the layout of a given property.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Layout} - the layout associated with `property`, or
   * undefined if there is no such property.
   */
  layoutFor(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    for (const e of this.fields)
      if (e.property === t)
        return e;
  }
  /**
   * Get the offset of a structure member.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Number} - the offset in bytes to the start of `property`
   * within the structure, or undefined if `property` is not a field
   * within the structure.  If the property is a member but follows a
   * variable-length structure member a negative number will be
   * returned.
   */
  offsetOf(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    let e = 0;
    for (const n of this.fields) {
      if (n.property === t)
        return e;
      0 > n.span ? e = -1 : 0 <= e && (e += n.span);
    }
  }
};
V.Structure = V0;
let bf = class {
  constructor(t) {
    this.property = t;
  }
  /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
   *
   * The implementation of this method need not reference the buffer if
   * variant information is available through other means. */
  decode(t, e) {
    throw new Error("UnionDiscriminator is abstract");
  }
  /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
   *
   * The implementation of this method need not store the value if
   * variant information is maintained through other means. */
  encode(t, e, n) {
    throw new Error("UnionDiscriminator is abstract");
  }
};
V.UnionDiscriminator = bf;
let ga = class extends bf {
  constructor(t, e) {
    if (!(t instanceof Fr && t.isCount()))
      throw new TypeError("layout must be an unsigned integer ExternalLayout");
    super(e || t.property || "variant"), this.layout = t;
  }
  /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
  decode(t, e) {
    return this.layout.decode(t, e);
  }
  /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
  encode(t, e, n) {
    return this.layout.encode(t, e, n);
  }
};
V.UnionLayoutDiscriminator = ga;
let vf = class extends Ae {
  constructor(t, e, n) {
    let o;
    if (t instanceof an || t instanceof ln)
      o = new ga(new wf(t));
    else if (t instanceof Fr && t.isCount())
      o = new ga(t);
    else if (t instanceof bf)
      o = t;
    else
      throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
    if (e === void 0 && (e = null), !(e === null || e instanceof Ae))
      throw new TypeError("defaultLayout must be null or a Layout");
    if (e !== null) {
      if (0 > e.span)
        throw new Error("defaultLayout must have constant span");
      e.property === void 0 && (e = e.replicate("content"));
    }
    let i = -1;
    e && (i = e.span, 0 <= i && (t instanceof an || t instanceof ln) && (i += o.layout.span)), super(i, n), this.discriminator = o, this.usesPrefixDiscriminator = t instanceof an || t instanceof ln, this.defaultLayout = e, this.registry = {};
    let c = this.defaultGetSourceVariant.bind(this);
    this.getSourceVariant = function(u) {
      return c(u);
    }, this.configGetSourceVariant = function(u) {
      c = u.bind(this);
    };
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    const n = this.getVariant(t, e);
    if (!n)
      throw new Error("unable to determine span for unrecognized variant");
    return n.getSpan(t, e);
  }
  /**
   * Method to infer a registered Union variant compatible with `src`.
   *
   * The first satisfied rule in the following sequence defines the
   * return value:
   * * If `src` has properties matching the Union discriminator and
   *   the default layout, `undefined` is returned regardless of the
   *   value of the discriminator property (this ensures the default
   *   layout will be used);
   * * If `src` has a property matching the Union discriminator, the
   *   value of the discriminator identifies a registered variant, and
   *   either (a) the variant has no layout, or (b) `src` has the
   *   variant's property, then the variant is returned (because the
   *   source satisfies the constraints of the variant it identifies);
   * * If `src` does not have a property matching the Union
   *   discriminator, but does have a property matching a registered
   *   variant, then the variant is returned (because the source
   *   matches a variant without an explicit conflict);
   * * An error is thrown (because we either can't identify a variant,
   *   or we were explicitly told the variant but can't satisfy it).
   *
   * @param {Object} src - an object presumed to be compatible with
   * the content of the Union.
   *
   * @return {(undefined|VariantLayout)} - as described above.
   *
   * @throws {Error} - if `src` cannot be associated with a default or
   * registered variant.
   */
  defaultGetSourceVariant(t) {
    if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
      if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property))
        return;
      const e = this.registry[t[this.discriminator.property]];
      if (e && (!e.layout || e.property && Object.prototype.hasOwnProperty.call(t, e.property)))
        return e;
    } else
      for (const e in this.registry) {
        const n = this.registry[e];
        if (n.property && Object.prototype.hasOwnProperty.call(t, n.property))
          return n;
      }
    throw new Error("unable to infer src variant");
  }
  /** Implement {@link Layout#decode|decode} for {@link Union}.
   *
   * If the variant is {@link Union#addVariant|registered} the return
   * value is an instance of that variant, with no explicit
   * discriminator.  Otherwise the {@link Union#defaultLayout|default
   * layout} is used to decode the content. */
  decode(t, e = 0) {
    let n;
    const o = this.discriminator, i = o.decode(t, e), c = this.registry[i];
    if (c === void 0) {
      const u = this.defaultLayout;
      let p = 0;
      this.usesPrefixDiscriminator && (p = o.layout.span), n = this.makeDestinationObject(), n[o.property] = i, n[u.property] = u.decode(t, e + p);
    } else
      n = c.decode(t, e);
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link Union}.
   *
   * This API assumes the `src` object is consistent with the union's
   * {@link Union#defaultLayout|default layout}.  To encode variants
   * use the appropriate variant-specific {@link VariantLayout#encode}
   * method. */
  encode(t, e, n = 0) {
    const o = this.getSourceVariant(t);
    if (o === void 0) {
      const i = this.discriminator, c = this.defaultLayout;
      let u = 0;
      return this.usesPrefixDiscriminator && (u = i.layout.span), i.encode(t[i.property], e, n), u + c.encode(t[c.property], e, n + u);
    }
    return o.encode(t, e, n);
  }
  /** Register a new variant structure within a union.  The newly
   * created variant is returned.
   *
   * @param {Number} variant - initializer for {@link
   * VariantLayout#variant|variant}.
   *
   * @param {Layout} layout - initializer for {@link
   * VariantLayout#layout|layout}.
   *
   * @param {String} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {VariantLayout} */
  addVariant(t, e, n) {
    const o = new Z0(this, t, e, n);
    return this.registry[t] = o, o;
  }
  /**
   * Get the layout associated with a registered variant.
   *
   * If `vb` does not produce a registered variant the function returns
   * `undefined`.
   *
   * @param {(Number|Uint8Array)} vb - either the variant number, or a
   * buffer from which the discriminator is to be read.
   *
   * @param {Number} offset - offset into `vb` for the start of the
   * union.  Used only when `vb` is an instance of {Uint8Array}.
   *
   * @return {({VariantLayout}|undefined)}
   */
  getVariant(t, e = 0) {
    let n;
    return t instanceof Uint8Array ? n = this.discriminator.decode(t, e) : n = t, this.registry[n];
  }
};
V.Union = vf;
let Z0 = class extends Ae {
  constructor(t, e, n, o) {
    if (!(t instanceof vf))
      throw new TypeError("union must be a Union");
    if (!Number.isInteger(e) || 0 > e)
      throw new TypeError("variant must be a (non-negative) integer");
    if (typeof n == "string" && o === void 0 && (o = n, n = null), n) {
      if (!(n instanceof Ae))
        throw new TypeError("layout must be a Layout");
      if (t.defaultLayout !== null && 0 <= n.span && n.span > t.defaultLayout.span)
        throw new Error("variant span exceeds span of containing union");
      if (typeof o != "string")
        throw new TypeError("variant must have a String property");
    }
    let i = t.span;
    0 > t.span && (i = n ? n.span : 0, 0 <= i && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span)), super(i, o), this.union = t, this.variant = e, this.layout = n || null;
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0;
    this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
    let o = 0;
    return this.layout && (o = this.layout.getSpan(t, e + n)), n + o;
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.makeDestinationObject();
    if (this !== this.union.getVariant(t, e))
      throw new Error("variant mismatch");
    let o = 0;
    return this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(t, e + o) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n;
  }
  /** @override */
  encode(t, e, n = 0) {
    let o = 0;
    if (this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(t, this.property))
      throw new TypeError("variant lacks property " + this.property);
    this.union.discriminator.encode(this.variant, e, n);
    let i = o;
    if (this.layout && (this.layout.encode(t[this.property], e, n + o), i += this.layout.getSpan(e, n + o), 0 <= this.union.span && i > this.union.span))
      throw new Error("encoded variant overruns containing union");
    return i;
  }
  /** Delegate {@link Layout#fromArray|fromArray} to {@link
   * VariantLayout#layout|layout}. */
  fromArray(t) {
    if (this.layout)
      return this.layout.fromArray(t);
  }
};
V.VariantLayout = Z0;
function wo(r) {
  return 0 > r && (r += 4294967296), r;
}
let xf = class extends Ae {
  constructor(t, e, n) {
    if (!(t instanceof an || t instanceof ln))
      throw new TypeError("word must be a UInt or UIntBE layout");
    if (typeof e == "string" && n === void 0 && (n = e, e = !1), 4 < t.span)
      throw new RangeError("word cannot exceed 32 bits");
    super(t.span, n), this.word = t, this.msb = !!e, this.fields = [];
    let o = 0;
    this._packedSetValue = function(i) {
      return o = wo(i), this;
    }, this._packedGetValue = function() {
      return o;
    };
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.makeDestinationObject(), o = this.word.decode(t, e);
    this._packedSetValue(o);
    for (const i of this.fields)
      i.property !== void 0 && (n[i.property] = i.decode(t));
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the packed
   * value is left unmodified.  Unused bits are also left unmodified. */
  encode(t, e, n = 0) {
    const o = this.word.decode(e, n);
    this._packedSetValue(o);
    for (const i of this.fields)
      if (i.property !== void 0) {
        const c = t[i.property];
        c !== void 0 && i.encode(c);
      }
    return this.word.encode(this._packedGetValue(), e, n);
  }
  /** Register a new bitfield with a containing bit structure.  The
   * resulting bitfield is returned.
   *
   * @param {Number} bits - initializer for {@link BitField#bits|bits}.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {BitField} */
  addField(t, e) {
    const n = new Ef(this, t, e);
    return this.fields.push(n), n;
  }
  /** As with {@link BitStructure#addField|addField} for single-bit
   * fields with `boolean` value representation.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {Boolean} */
  // `Boolean` conflicts with the native primitive type
  // eslint-disable-next-line @typescript-eslint/ban-types
  addBoolean(t) {
    const e = new Y0(this, t);
    return this.fields.push(e), e;
  }
  /**
   * Get access to the bit field for a given property.
   *
   * @param {String} property - the bit field of interest.
   *
   * @return {BitField} - the field associated with `property`, or
   * undefined if there is no such property.
   */
  fieldFor(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    for (const e of this.fields)
      if (e.property === t)
        return e;
  }
};
V.BitStructure = xf;
let Ef = class {
  constructor(t, e, n) {
    if (!(t instanceof xf))
      throw new TypeError("container must be a BitStructure");
    if (!Number.isInteger(e) || 0 >= e)
      throw new TypeError("bits must be positive integer");
    const o = 8 * t.span, i = t.fields.reduce((c, u) => c + u.bits, 0);
    if (e + i > o)
      throw new Error("bits too long for span remainder (" + (o - i) + " of " + o + " remain)");
    this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, e === 32 && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = o - i - e), this.wordMask = wo(this.valueMask << this.start), this.property = n;
  }
  /** Store a value into the corresponding subsequence of the containing
   * bit field. */
  decode(t, e) {
    const n = this.container._packedGetValue();
    return wo(n & this.wordMask) >>> this.start;
  }
  /** Store a value into the corresponding subsequence of the containing
   * bit field.
   *
   * **NOTE** This is not a specialization of {@link
   * Layout#encode|Layout.encode} and there is no return value. */
  encode(t) {
    if (typeof t != "number" || !Number.isInteger(t) || t !== wo(t & this.valueMask))
      throw new TypeError(mf("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
    const e = this.container._packedGetValue(), n = wo(t << this.start);
    this.container._packedSetValue(wo(e & ~this.wordMask) | n);
  }
};
V.BitField = Ef;
let Y0 = class extends Ef {
  constructor(t, e) {
    super(t, 1, e);
  }
  /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
   *
   * @returns {boolean} */
  decode(t, e) {
    return !!super.decode(t, e);
  }
  /** @override */
  encode(t) {
    typeof t == "boolean" && (t = +t), super.encode(t);
  }
};
V.Boolean = Y0;
let X0 = class extends Ae {
  constructor(t, e) {
    if (!(t instanceof Fr && t.isCount() || Number.isInteger(t) && 0 <= t))
      throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
    let n = -1;
    t instanceof Fr || (n = t), super(n, e), this.length = t;
  }
  /** @override */
  getSpan(t, e) {
    let n = this.span;
    return 0 > n && (n = this.length.decode(t, e)), n;
  }
  /** @override */
  decode(t, e = 0) {
    let n = this.span;
    return 0 > n && (n = this.length.decode(t, e)), be(t).slice(e, e + n);
  }
  /** Implement {@link Layout#encode|encode} for {@link Blob}.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */
  encode(t, e, n) {
    let o = this.length;
    if (this.length instanceof Fr && (o = t.length), !(t instanceof Uint8Array && o === t.length))
      throw new TypeError(mf("Blob.encode", this) + " requires (length " + o + ") Uint8Array as src");
    if (n + o > e.length)
      throw new RangeError("encoding overruns Uint8Array");
    const i = be(t);
    return be(e).write(i.toString("hex"), n, o, "hex"), this.length instanceof Fr && this.length.encode(o, e, n), o;
  }
};
V.Blob = X0;
let J0 = class extends Ae {
  constructor(t) {
    super(-1, t);
  }
  /** @override */
  getSpan(t, e = 0) {
    Go(t);
    let n = e;
    for (; n < t.length && t[n] !== 0; )
      n += 1;
    return 1 + n - e;
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.getSpan(t, e);
    return be(t).slice(e, e + n - 1).toString("utf-8");
  }
  /** @override */
  encode(t, e, n = 0) {
    typeof t != "string" && (t = String(t));
    const o = yf.Buffer.from(t, "utf8"), i = o.length;
    if (n + i > e.length)
      throw new RangeError("encoding overruns Buffer");
    const c = be(e);
    return o.copy(c, n), c[n + i] = 0, i + 1;
  }
};
V.CString = J0;
let Q0 = class extends Ae {
  constructor(t, e) {
    if (typeof t == "string" && e === void 0 && (e = t, t = void 0), t === void 0)
      t = -1;
    else if (!Number.isInteger(t))
      throw new TypeError("maxSpan must be an integer");
    super(-1, e), this.maxSpan = t;
  }
  /** @override */
  getSpan(t, e = 0) {
    return Go(t), t.length - e;
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.getSpan(t, e);
    if (0 <= this.maxSpan && this.maxSpan < n)
      throw new RangeError("text length exceeds maxSpan");
    return be(t).slice(e, e + n).toString("utf-8");
  }
  /** @override */
  encode(t, e, n = 0) {
    typeof t != "string" && (t = String(t));
    const o = yf.Buffer.from(t, "utf8"), i = o.length;
    if (0 <= this.maxSpan && this.maxSpan < i)
      throw new RangeError("text length exceeds maxSpan");
    if (n + i > e.length)
      throw new RangeError("encoding overruns Buffer");
    return o.copy(be(e), n), i;
  }
};
V.UTF8 = Q0;
let td = class extends Ae {
  constructor(t, e) {
    super(0, e), this.value = t;
  }
  /** @override */
  decode(t, e) {
    return this.value;
  }
  /** @override */
  encode(t, e, n) {
    return 0;
  }
};
V.Constant = td;
V.greedy = (r, t) => new $0(r, t);
var Vi = V.offset = (r, t, e) => new wf(r, t, e), _e = V.u8 = (r) => new an(1, r), rn = V.u16 = (r) => new an(2, r);
V.u24 = (r) => new an(3, r);
var Dt = V.u32 = (r) => new an(4, r);
V.u40 = (r) => new an(5, r);
V.u48 = (r) => new an(6, r);
var fr = V.nu64 = (r) => new P0(r);
V.u16be = (r) => new ln(2, r);
V.u24be = (r) => new ln(3, r);
V.u32be = (r) => new ln(4, r);
V.u40be = (r) => new ln(5, r);
V.u48be = (r) => new ln(6, r);
V.nu64be = (r) => new D0(r);
V.s8 = (r) => new ro(1, r);
V.s16 = (r) => new ro(2, r);
V.s24 = (r) => new ro(3, r);
V.s32 = (r) => new ro(4, r);
V.s40 = (r) => new ro(5, r);
V.s48 = (r) => new ro(6, r);
var jr = V.ns64 = (r) => new z0(r);
V.s16be = (r) => new Vo(2, r);
V.s24be = (r) => new Vo(3, r);
V.s32be = (r) => new Vo(4, r);
V.s40be = (r) => new Vo(5, r);
V.s48be = (r) => new Vo(6, r);
V.ns64be = (r) => new q0(r);
V.f32 = (r) => new W0(r);
V.f32be = (r) => new j0(r);
V.f64 = (r) => new H0(r);
V.f64be = (r) => new K0(r);
var Ct = V.struct = (r, t, e) => new V0(r, t, e);
V.bits = (r, t, e) => new xf(r, t, e);
var Ir = V.seq = (r, t, e) => new G0(r, t, e);
V.union = (r, t, e) => new vf(r, t, e);
V.unionLayoutDiscriminator = (r, t) => new ga(r, t);
var Te = V.blob = (r, t) => new X0(r, t);
V.cstr = (r) => new J0(r);
V.utf8 = (r, t) => new Q0(r, t);
V.constant = (r, t) => new td(r, t);
var As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
function dy(r) {
  {
    const t = Buffer.from(r);
    t.reverse();
    const e = t.toString("hex");
    return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
  }
}
var py = As.toBigIntLE = dy;
function gy(r) {
  {
    const t = r.toString("hex");
    return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
  }
}
As.toBigIntBE = gy;
function yy(r, t) {
  {
    const e = r.toString(16), n = Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
    return n.reverse(), n;
  }
}
var my = As.toBufferLE = yy;
function wy(r, t) {
  {
    const e = r.toString(16);
    return Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
  }
}
As.toBufferBE = wy;
let by = class extends TypeError {
  constructor(t, e) {
    let n;
    const {
      message: o,
      ...i
    } = t, {
      path: c
    } = t, u = c.length === 0 ? o : "At path: " + c.join(".") + " -- " + o;
    super(u), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
      var p;
      return (p = n) != null ? p : n = [t, ...e()];
    };
  }
};
function vy(r) {
  return yi(r) && typeof r[Symbol.iterator] == "function";
}
function yi(r) {
  return typeof r == "object" && r != null;
}
function dn(r) {
  return typeof r == "string" ? JSON.stringify(r) : "" + r;
}
function xy(r) {
  const {
    done: t,
    value: e
  } = r.next();
  return t ? void 0 : e;
}
function Ey(r, t, e, n) {
  if (r === !0)
    return;
  r === !1 ? r = {} : typeof r == "string" && (r = {
    message: r
  });
  const {
    path: o,
    branch: i
  } = t, {
    type: c
  } = e, {
    refinement: u,
    message: p = "Expected a value of type `" + c + "`" + (u ? " with refinement `" + u + "`" : "") + ", but received: `" + dn(n) + "`"
  } = r;
  return {
    value: n,
    type: c,
    refinement: u,
    key: o[o.length - 1],
    path: o,
    branch: i,
    ...r,
    message: p
  };
}
function* Sl(r, t, e, n) {
  vy(r) || (r = [r]);
  for (const o of r) {
    const i = Ey(o, t, e, n);
    i && (yield i);
  }
}
function* _f(r, t, e = {}) {
  const {
    path: n = [],
    branch: o = [r],
    coerce: i = !1,
    mask: c = !1
  } = e, u = {
    path: n,
    branch: o
  };
  if (i && (r = t.coercer(r, u), c && t.type !== "type" && yi(t.schema) && yi(r) && !Array.isArray(r)))
    for (const b in r)
      t.schema[b] === void 0 && delete r[b];
  let p = !0;
  for (const b of t.validator(r, u))
    p = !1, yield [b, void 0];
  for (let [b, _, B] of t.entries(r, u)) {
    const C = _f(_, B, {
      path: b === void 0 ? n : [...n, b],
      branch: b === void 0 ? o : [...o, _],
      coerce: i,
      mask: c
    });
    for (const R of C)
      R[0] ? (p = !1, yield [R[0], void 0]) : i && (_ = R[1], b === void 0 ? r = _ : r instanceof Map ? r.set(b, _) : r instanceof Set ? r.add(_) : yi(r) && (r[b] = _));
  }
  if (p)
    for (const b of t.refiner(r, u))
      p = !1, yield [b, void 0];
  p && (yield [void 0, r]);
}
let Tn = class {
  constructor(t) {
    const {
      type: e,
      schema: n,
      validator: o,
      refiner: i,
      coercer: c = (p) => p,
      entries: u = function* () {
      }
    } = t;
    this.type = e, this.schema = n, this.entries = u, this.coercer = c, o ? this.validator = (p, b) => {
      const _ = o(p, b);
      return Sl(_, b, this, p);
    } : this.validator = () => [], i ? this.refiner = (p, b) => {
      const _ = i(p, b);
      return Sl(_, b, this, p);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t) {
    return _y(t, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t) {
    return gt(t, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return ed(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t) {
    return Sy(t, this);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(t, e = {}) {
    return Is(t, this, e);
  }
};
function _y(r, t) {
  const e = Is(r, t);
  if (e[0])
    throw e[0];
}
function gt(r, t) {
  const e = Is(r, t, {
    coerce: !0
  });
  if (e[0])
    throw e[0];
  return e[1];
}
function Sy(r, t) {
  const e = Is(r, t, {
    coerce: !0,
    mask: !0
  });
  if (e[0])
    throw e[0];
  return e[1];
}
function ed(r, t) {
  return !Is(r, t)[0];
}
function Is(r, t, e = {}) {
  const n = _f(r, t, e), o = xy(n);
  return o[0] ? [new by(o[0], function* () {
    for (const c of n)
      c[0] && (yield c[0]);
  }), void 0] : [void 0, o[1]];
}
function no(r, t) {
  return new Tn({
    type: r,
    schema: null,
    validator: t
  });
}
function By() {
  return no("any", () => !0);
}
function Et(r) {
  return new Tn({
    type: "array",
    schema: r,
    *entries(t) {
      if (r && Array.isArray(t))
        for (const [e, n] of t.entries())
          yield [e, n, r];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array value, but received: " + dn(t);
    }
  });
}
function Mn() {
  return no("boolean", (r) => typeof r == "boolean");
}
function Sf(r) {
  return no("instance", (t) => t instanceof r || "Expected a `" + r.name + "` instance, but received: " + dn(t));
}
function Pe(r) {
  const t = dn(r), e = typeof r;
  return new Tn({
    type: "literal",
    schema: e === "string" || e === "number" || e === "boolean" ? r : null,
    validator(n) {
      return n === r || "Expected the literal `" + t + "`, but received: " + dn(n);
    }
  });
}
function Ay() {
  return no("never", () => !1);
}
function xt(r) {
  return new Tn({
    ...r,
    validator: (t, e) => t === null || r.validator(t, e),
    refiner: (t, e) => t === null || r.refiner(t, e)
  });
}
function G() {
  return no("number", (r) => typeof r == "number" && !isNaN(r) || "Expected a number, but received: " + dn(r));
}
function jt(r) {
  return new Tn({
    ...r,
    validator: (t, e) => t === void 0 || r.validator(t, e),
    refiner: (t, e) => t === void 0 || r.refiner(t, e)
  });
}
function rd(r, t) {
  return new Tn({
    type: "record",
    schema: null,
    *entries(e) {
      if (yi(e))
        for (const n in e) {
          const o = e[n];
          yield [n, n, r], yield [n, o, t];
        }
    },
    validator(e) {
      return yi(e) || "Expected an object, but received: " + dn(e);
    }
  });
}
function pt() {
  return no("string", (r) => typeof r == "string" || "Expected a string, but received: " + dn(r));
}
function Bf(r) {
  const t = Ay();
  return new Tn({
    type: "tuple",
    schema: null,
    *entries(e) {
      if (Array.isArray(e)) {
        const n = Math.max(r.length, e.length);
        for (let o = 0; o < n; o++)
          yield [o, e[o], r[o] || t];
      }
    },
    validator(e) {
      return Array.isArray(e) || "Expected an array, but received: " + dn(e);
    }
  });
}
function at(r) {
  const t = Object.keys(r);
  return new Tn({
    type: "type",
    schema: r,
    *entries(e) {
      if (yi(e))
        for (const n of t)
          yield [n, e[n], r[n]];
    },
    validator(e) {
      return yi(e) || "Expected an object, but received: " + dn(e);
    }
  });
}
function Pr(r) {
  const t = r.map((e) => e.type).join(" | ");
  return new Tn({
    type: "union",
    schema: null,
    validator(e, n) {
      const o = [];
      for (const i of r) {
        const [...c] = _f(e, i, n), [u] = c;
        if (u[0])
          for (const [p] of c)
            p && o.push(p);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + t + "`, but received: " + dn(e), ...o];
    }
  });
}
function Ms() {
  return no("unknown", () => !0);
}
function Rs(r, t, e) {
  return new Tn({
    ...r,
    coercer: (n, o) => ed(n, t) ? r.coercer(e(n, o), o) : r.coercer(n, o)
  });
}
var qs, Iy = new Uint8Array(16);
function nd() {
  if (!qs && (qs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !qs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return qs(Iy);
}
const My = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function $a(r) {
  return typeof r == "string" && My.test(r);
}
var cr = [];
for (var gc = 0; gc < 256; ++gc)
  cr.push((gc + 256).toString(16).substr(1));
function Pa(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = (cr[r[t + 0]] + cr[r[t + 1]] + cr[r[t + 2]] + cr[r[t + 3]] + "-" + cr[r[t + 4]] + cr[r[t + 5]] + "-" + cr[r[t + 6]] + cr[r[t + 7]] + "-" + cr[r[t + 8]] + cr[r[t + 9]] + "-" + cr[r[t + 10]] + cr[r[t + 11]] + cr[r[t + 12]] + cr[r[t + 13]] + cr[r[t + 14]] + cr[r[t + 15]]).toLowerCase();
  if (!$a(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
}
var Bl, yc, mc = 0, wc = 0;
function Ry(r, t, e) {
  var n = t && e || 0, o = t || new Array(16);
  r = r || {};
  var i = r.node || Bl, c = r.clockseq !== void 0 ? r.clockseq : yc;
  if (i == null || c == null) {
    var u = r.random || (r.rng || nd)();
    i == null && (i = Bl = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), c == null && (c = yc = (u[6] << 8 | u[7]) & 16383);
  }
  var p = r.msecs !== void 0 ? r.msecs : Date.now(), b = r.nsecs !== void 0 ? r.nsecs : wc + 1, _ = p - mc + (b - wc) / 1e4;
  if (_ < 0 && r.clockseq === void 0 && (c = c + 1 & 16383), (_ < 0 || p > mc) && r.nsecs === void 0 && (b = 0), b >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  mc = p, wc = b, yc = c, p += 122192928e5;
  var B = ((p & 268435455) * 1e4 + b) % 4294967296;
  o[n++] = B >>> 24 & 255, o[n++] = B >>> 16 & 255, o[n++] = B >>> 8 & 255, o[n++] = B & 255;
  var C = p / 4294967296 * 1e4 & 268435455;
  o[n++] = C >>> 8 & 255, o[n++] = C & 255, o[n++] = C >>> 24 & 15 | 16, o[n++] = C >>> 16 & 255, o[n++] = c >>> 8 | 128, o[n++] = c & 255;
  for (var R = 0; R < 6; ++R)
    o[n + R] = i[R];
  return t || Pa(o);
}
function id(r) {
  if (!$a(r))
    throw TypeError("Invalid UUID");
  var t, e = new Uint8Array(16);
  return e[0] = (t = parseInt(r.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(r.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(r.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(r.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
}
function ky(r) {
  r = unescape(encodeURIComponent(r));
  for (var t = [], e = 0; e < r.length; ++e)
    t.push(r.charCodeAt(e));
  return t;
}
var Ty = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Cy = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function od(r, t, e) {
  function n(o, i, c, u) {
    if (typeof o == "string" && (o = ky(o)), typeof i == "string" && (i = id(i)), i.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var p = new Uint8Array(16 + o.length);
    if (p.set(i), p.set(o, i.length), p = e(p), p[6] = p[6] & 15 | t, p[8] = p[8] & 63 | 128, c) {
      u = u || 0;
      for (var b = 0; b < 16; ++b)
        c[u + b] = p[b];
      return c;
    }
    return Pa(p);
  }
  try {
    n.name = r;
  } catch {
  }
  return n.DNS = Ty, n.URL = Cy, n;
}
function Ly(r) {
  if (typeof r == "string") {
    var t = unescape(encodeURIComponent(r));
    r = new Uint8Array(t.length);
    for (var e = 0; e < t.length; ++e)
      r[e] = t.charCodeAt(e);
  }
  return Uy(Oy(Fy(r), r.length * 8));
}
function Uy(r) {
  for (var t = [], e = r.length * 32, n = "0123456789abcdef", o = 0; o < e; o += 8) {
    var i = r[o >> 5] >>> o % 32 & 255, c = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    t.push(c);
  }
  return t;
}
function sd(r) {
  return (r + 64 >>> 9 << 4) + 14 + 1;
}
function Oy(r, t) {
  r[t >> 5] |= 128 << t % 32, r[sd(t) - 1] = t;
  for (var e = 1732584193, n = -271733879, o = -1732584194, i = 271733878, c = 0; c < r.length; c += 16) {
    var u = e, p = n, b = o, _ = i;
    e = br(e, n, o, i, r[c], 7, -680876936), i = br(i, e, n, o, r[c + 1], 12, -389564586), o = br(o, i, e, n, r[c + 2], 17, 606105819), n = br(n, o, i, e, r[c + 3], 22, -1044525330), e = br(e, n, o, i, r[c + 4], 7, -176418897), i = br(i, e, n, o, r[c + 5], 12, 1200080426), o = br(o, i, e, n, r[c + 6], 17, -1473231341), n = br(n, o, i, e, r[c + 7], 22, -45705983), e = br(e, n, o, i, r[c + 8], 7, 1770035416), i = br(i, e, n, o, r[c + 9], 12, -1958414417), o = br(o, i, e, n, r[c + 10], 17, -42063), n = br(n, o, i, e, r[c + 11], 22, -1990404162), e = br(e, n, o, i, r[c + 12], 7, 1804603682), i = br(i, e, n, o, r[c + 13], 12, -40341101), o = br(o, i, e, n, r[c + 14], 17, -1502002290), n = br(n, o, i, e, r[c + 15], 22, 1236535329), e = vr(e, n, o, i, r[c + 1], 5, -165796510), i = vr(i, e, n, o, r[c + 6], 9, -1069501632), o = vr(o, i, e, n, r[c + 11], 14, 643717713), n = vr(n, o, i, e, r[c], 20, -373897302), e = vr(e, n, o, i, r[c + 5], 5, -701558691), i = vr(i, e, n, o, r[c + 10], 9, 38016083), o = vr(o, i, e, n, r[c + 15], 14, -660478335), n = vr(n, o, i, e, r[c + 4], 20, -405537848), e = vr(e, n, o, i, r[c + 9], 5, 568446438), i = vr(i, e, n, o, r[c + 14], 9, -1019803690), o = vr(o, i, e, n, r[c + 3], 14, -187363961), n = vr(n, o, i, e, r[c + 8], 20, 1163531501), e = vr(e, n, o, i, r[c + 13], 5, -1444681467), i = vr(i, e, n, o, r[c + 2], 9, -51403784), o = vr(o, i, e, n, r[c + 7], 14, 1735328473), n = vr(n, o, i, e, r[c + 12], 20, -1926607734), e = xr(e, n, o, i, r[c + 5], 4, -378558), i = xr(i, e, n, o, r[c + 8], 11, -2022574463), o = xr(o, i, e, n, r[c + 11], 16, 1839030562), n = xr(n, o, i, e, r[c + 14], 23, -35309556), e = xr(e, n, o, i, r[c + 1], 4, -1530992060), i = xr(i, e, n, o, r[c + 4], 11, 1272893353), o = xr(o, i, e, n, r[c + 7], 16, -155497632), n = xr(n, o, i, e, r[c + 10], 23, -1094730640), e = xr(e, n, o, i, r[c + 13], 4, 681279174), i = xr(i, e, n, o, r[c], 11, -358537222), o = xr(o, i, e, n, r[c + 3], 16, -722521979), n = xr(n, o, i, e, r[c + 6], 23, 76029189), e = xr(e, n, o, i, r[c + 9], 4, -640364487), i = xr(i, e, n, o, r[c + 12], 11, -421815835), o = xr(o, i, e, n, r[c + 15], 16, 530742520), n = xr(n, o, i, e, r[c + 2], 23, -995338651), e = Er(e, n, o, i, r[c], 6, -198630844), i = Er(i, e, n, o, r[c + 7], 10, 1126891415), o = Er(o, i, e, n, r[c + 14], 15, -1416354905), n = Er(n, o, i, e, r[c + 5], 21, -57434055), e = Er(e, n, o, i, r[c + 12], 6, 1700485571), i = Er(i, e, n, o, r[c + 3], 10, -1894986606), o = Er(o, i, e, n, r[c + 10], 15, -1051523), n = Er(n, o, i, e, r[c + 1], 21, -2054922799), e = Er(e, n, o, i, r[c + 8], 6, 1873313359), i = Er(i, e, n, o, r[c + 15], 10, -30611744), o = Er(o, i, e, n, r[c + 6], 15, -1560198380), n = Er(n, o, i, e, r[c + 13], 21, 1309151649), e = Er(e, n, o, i, r[c + 4], 6, -145523070), i = Er(i, e, n, o, r[c + 11], 10, -1120210379), o = Er(o, i, e, n, r[c + 2], 15, 718787259), n = Er(n, o, i, e, r[c + 9], 21, -343485551), e = hi(e, u), n = hi(n, p), o = hi(o, b), i = hi(i, _);
  }
  return [e, n, o, i];
}
function Fy(r) {
  if (r.length === 0)
    return [];
  for (var t = r.length * 8, e = new Uint32Array(sd(t)), n = 0; n < t; n += 8)
    e[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return e;
}
function hi(r, t) {
  var e = (r & 65535) + (t & 65535), n = (r >> 16) + (t >> 16) + (e >> 16);
  return n << 16 | e & 65535;
}
function Ny(r, t) {
  return r << t | r >>> 32 - t;
}
function Da(r, t, e, n, o, i) {
  return hi(Ny(hi(hi(t, r), hi(n, i)), o), e);
}
function br(r, t, e, n, o, i, c) {
  return Da(t & e | ~t & n, r, t, o, i, c);
}
function vr(r, t, e, n, o, i, c) {
  return Da(t & n | e & ~n, r, t, o, i, c);
}
function xr(r, t, e, n, o, i, c) {
  return Da(t ^ e ^ n, r, t, o, i, c);
}
function Er(r, t, e, n, o, i, c) {
  return Da(e ^ (t | ~n), r, t, o, i, c);
}
var $y = od("v3", 48, Ly);
const Py = $y;
function Dy(r, t, e) {
  r = r || {};
  var n = r.random || (r.rng || nd)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    e = e || 0;
    for (var o = 0; o < 16; ++o)
      t[e + o] = n[o];
    return t;
  }
  return Pa(n);
}
function zy(r, t, e, n) {
  switch (r) {
    case 0:
      return t & e ^ ~t & n;
    case 1:
      return t ^ e ^ n;
    case 2:
      return t & e ^ t & n ^ e & n;
    case 3:
      return t ^ e ^ n;
  }
}
function bc(r, t) {
  return r << t | r >>> 32 - t;
}
function qy(r) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    var n = unescape(encodeURIComponent(r));
    r = [];
    for (var o = 0; o < n.length; ++o)
      r.push(n.charCodeAt(o));
  } else
    Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  for (var i = r.length / 4 + 2, c = Math.ceil(i / 16), u = new Array(c), p = 0; p < c; ++p) {
    for (var b = new Uint32Array(16), _ = 0; _ < 16; ++_)
      b[_] = r[p * 64 + _ * 4] << 24 | r[p * 64 + _ * 4 + 1] << 16 | r[p * 64 + _ * 4 + 2] << 8 | r[p * 64 + _ * 4 + 3];
    u[p] = b;
  }
  u[c - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), u[c - 1][14] = Math.floor(u[c - 1][14]), u[c - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (var B = 0; B < c; ++B) {
    for (var C = new Uint32Array(80), R = 0; R < 16; ++R)
      C[R] = u[B][R];
    for (var O = 16; O < 80; ++O)
      C[O] = bc(C[O - 3] ^ C[O - 8] ^ C[O - 14] ^ C[O - 16], 1);
    for (var U = e[0], T = e[1], P = e[2], F = e[3], L = e[4], z = 0; z < 80; ++z) {
      var N = Math.floor(z / 20), $ = bc(U, 5) + zy(N, T, P, F) + L + t[N] + C[z] >>> 0;
      L = F, F = P, P = bc(T, 30) >>> 0, T = U, U = $;
    }
    e[0] = e[0] + U >>> 0, e[1] = e[1] + T >>> 0, e[2] = e[2] + P >>> 0, e[3] = e[3] + F >>> 0, e[4] = e[4] + L >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var Wy = od("v5", 80, qy);
const jy = Wy, Hy = "00000000-0000-0000-0000-000000000000";
function Ky(r) {
  if (!$a(r))
    throw TypeError("Invalid UUID");
  return parseInt(r.substr(14, 1), 16);
}
const Gy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: Hy,
  parse: id,
  stringify: Pa,
  v1: Ry,
  v3: Py,
  v4: Dy,
  v5: jy,
  validate: $a,
  version: Ky
}, Symbol.toStringTag, { value: "Module" })), ad = /* @__PURE__ */ eo(Gy), Vy = ad.v4, Zy = function(r, t, e, n) {
  if (typeof r != "string")
    throw new TypeError(r + " must be a string");
  n = n || {};
  const o = typeof n.version == "number" ? n.version : 2;
  if (o !== 1 && o !== 2)
    throw new TypeError(o + " must be 1 or 2");
  const i = {
    method: r
  };
  if (o === 2 && (i.jsonrpc = "2.0"), t) {
    if (typeof t != "object" && !Array.isArray(t))
      throw new TypeError(t + " must be an object, array or omitted");
    i.params = t;
  }
  if (typeof e > "u") {
    const c = typeof n.generator == "function" ? n.generator : function() {
      return Vy();
    };
    i.id = c(i, n);
  } else
    o === 2 && e === null ? n.notificationIdNull && (i.id = null) : i.id = e;
  return i;
};
var Yy = Zy;
const Xy = ad.v4, Jy = Yy, ws = function(r, t) {
  if (!(this instanceof ws))
    return new ws(r, t);
  t || (t = {}), this.options = {
    reviver: typeof t.reviver < "u" ? t.reviver : null,
    replacer: typeof t.replacer < "u" ? t.replacer : null,
    generator: typeof t.generator < "u" ? t.generator : function() {
      return Xy();
    },
    version: typeof t.version < "u" ? t.version : 2,
    notificationIdNull: typeof t.notificationIdNull == "boolean" ? t.notificationIdNull : !1
  }, this.callServer = r;
};
var Qy = ws;
ws.prototype.request = function(r, t, e, n) {
  const o = this;
  let i = null;
  const c = Array.isArray(r) && typeof t == "function";
  if (this.options.version === 1 && c)
    throw new TypeError("JSON-RPC 1.0 does not support batching");
  if (c || !c && r && typeof r == "object" && typeof t == "function")
    n = t, i = r;
  else {
    typeof e == "function" && (n = e, e = void 0);
    const b = typeof n == "function";
    try {
      i = Jy(r, t, e, {
        generator: this.options.generator,
        version: this.options.version,
        notificationIdNull: this.options.notificationIdNull
      });
    } catch (_) {
      if (b)
        return n(_);
      throw _;
    }
    if (!b)
      return i;
  }
  let p;
  try {
    p = JSON.stringify(i, this.options.replacer);
  } catch (b) {
    return n(b);
  }
  return this.callServer(p, function(b, _) {
    o._parseResponse(b, _, n);
  }), i;
};
ws.prototype._parseResponse = function(r, t, e) {
  if (r) {
    e(r);
    return;
  }
  if (!t)
    return e();
  let n;
  try {
    n = JSON.parse(t, this.options.reviver);
  } catch (o) {
    return e(o);
  }
  if (e.length === 3)
    if (Array.isArray(n)) {
      const o = function(c) {
        return typeof c.error < "u";
      }, i = function(c) {
        return !o(c);
      };
      return e(null, n.filter(o), n.filter(i));
    } else
      return e(null, n.error, n.result);
  e(null, n);
};
const tm = /* @__PURE__ */ gn(Qy);
var cd = {}, ud = { exports: {} };
(function(r) {
  function t(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
})(ud);
var Af = ud.exports, vc = { exports: {} }, xc = { exports: {} }, Al;
function ks() {
  return Al || (Al = 1, function(r) {
    function t(e) {
      "@babel/helpers - typeof";
      return r.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(xc)), xc.exports;
}
var Il;
function em() {
  return Il || (Il = 1, function(r) {
    var t = ks().default;
    function e() {
      r.exports = e = function() {
        return o;
      }, r.exports.__esModule = !0, r.exports.default = r.exports;
      var n, o = {}, i = Object.prototype, c = i.hasOwnProperty, u = Object.defineProperty || function(x, A, m) {
        x[A] = m.value;
      }, p = typeof Symbol == "function" ? Symbol : {}, b = p.iterator || "@@iterator", _ = p.asyncIterator || "@@asyncIterator", B = p.toStringTag || "@@toStringTag";
      function C(x, A, m) {
        return Object.defineProperty(x, A, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), x[A];
      }
      try {
        C({}, "");
      } catch {
        C = function(m, l, E) {
          return m[l] = E;
        };
      }
      function R(x, A, m, l) {
        var E = A && A.prototype instanceof z ? A : z, j = Object.create(E.prototype), H = new w(l || []);
        return u(j, "_invoke", {
          value: I(x, m, H)
        }), j;
      }
      function O(x, A, m) {
        try {
          return {
            type: "normal",
            arg: x.call(A, m)
          };
        } catch (l) {
          return {
            type: "throw",
            arg: l
          };
        }
      }
      o.wrap = R;
      var U = "suspendedStart", T = "suspendedYield", P = "executing", F = "completed", L = {};
      function z() {
      }
      function N() {
      }
      function $() {
      }
      var q = {};
      C(q, b, function() {
        return this;
      });
      var W = Object.getPrototypeOf, tt = W && W(W(v([])));
      tt && tt !== i && c.call(tt, b) && (q = tt);
      var ht = $.prototype = z.prototype = Object.create(q);
      function J(x) {
        ["next", "throw", "return"].forEach(function(A) {
          C(x, A, function(m) {
            return this._invoke(A, m);
          });
        });
      }
      function mt(x, A) {
        function m(E, j, H, K) {
          var ft = O(x[E], x, j);
          if (ft.type !== "throw") {
            var it = ft.arg, ut = it.value;
            return ut && t(ut) == "object" && c.call(ut, "__await") ? A.resolve(ut.__await).then(function(Vt) {
              m("next", Vt, H, K);
            }, function(Vt) {
              m("throw", Vt, H, K);
            }) : A.resolve(ut).then(function(Vt) {
              it.value = Vt, H(it);
            }, function(Vt) {
              return m("throw", Vt, H, K);
            });
          }
          K(ft.arg);
        }
        var l;
        u(this, "_invoke", {
          value: function(j, H) {
            function K() {
              return new A(function(ft, it) {
                m(j, H, ft, it);
              });
            }
            return l = l ? l.then(K, K) : K();
          }
        });
      }
      function I(x, A, m) {
        var l = U;
        return function(E, j) {
          if (l === P)
            throw new Error("Generator is already running");
          if (l === F) {
            if (E === "throw")
              throw j;
            return {
              value: n,
              done: !0
            };
          }
          for (m.method = E, m.arg = j; ; ) {
            var H = m.delegate;
            if (H) {
              var K = f(H, m);
              if (K) {
                if (K === L)
                  continue;
                return K;
              }
            }
            if (m.method === "next")
              m.sent = m._sent = m.arg;
            else if (m.method === "throw") {
              if (l === U)
                throw l = F, m.arg;
              m.dispatchException(m.arg);
            } else
              m.method === "return" && m.abrupt("return", m.arg);
            l = P;
            var ft = O(x, A, m);
            if (ft.type === "normal") {
              if (l = m.done ? F : T, ft.arg === L)
                continue;
              return {
                value: ft.arg,
                done: m.done
              };
            }
            ft.type === "throw" && (l = F, m.method = "throw", m.arg = ft.arg);
          }
        };
      }
      function f(x, A) {
        var m = A.method, l = x.iterator[m];
        if (l === n)
          return A.delegate = null, m === "throw" && x.iterator.return && (A.method = "return", A.arg = n, f(x, A), A.method === "throw") || m !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + m + "' method")), L;
        var E = O(l, x.iterator, A.arg);
        if (E.type === "throw")
          return A.method = "throw", A.arg = E.arg, A.delegate = null, L;
        var j = E.arg;
        return j ? j.done ? (A[x.resultName] = j.value, A.next = x.nextLoc, A.method !== "return" && (A.method = "next", A.arg = n), A.delegate = null, L) : j : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, L);
      }
      function d(x) {
        var A = {
          tryLoc: x[0]
        };
        1 in x && (A.catchLoc = x[1]), 2 in x && (A.finallyLoc = x[2], A.afterLoc = x[3]), this.tryEntries.push(A);
      }
      function y(x) {
        var A = x.completion || {};
        A.type = "normal", delete A.arg, x.completion = A;
      }
      function w(x) {
        this.tryEntries = [{
          tryLoc: "root"
        }], x.forEach(d, this), this.reset(!0);
      }
      function v(x) {
        if (x || x === "") {
          var A = x[b];
          if (A)
            return A.call(x);
          if (typeof x.next == "function")
            return x;
          if (!isNaN(x.length)) {
            var m = -1, l = function E() {
              for (; ++m < x.length; )
                if (c.call(x, m))
                  return E.value = x[m], E.done = !1, E;
              return E.value = n, E.done = !0, E;
            };
            return l.next = l;
          }
        }
        throw new TypeError(t(x) + " is not iterable");
      }
      return N.prototype = $, u(ht, "constructor", {
        value: $,
        configurable: !0
      }), u($, "constructor", {
        value: N,
        configurable: !0
      }), N.displayName = C($, B, "GeneratorFunction"), o.isGeneratorFunction = function(x) {
        var A = typeof x == "function" && x.constructor;
        return !!A && (A === N || (A.displayName || A.name) === "GeneratorFunction");
      }, o.mark = function(x) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(x, $) : (x.__proto__ = $, C(x, B, "GeneratorFunction")), x.prototype = Object.create(ht), x;
      }, o.awrap = function(x) {
        return {
          __await: x
        };
      }, J(mt.prototype), C(mt.prototype, _, function() {
        return this;
      }), o.AsyncIterator = mt, o.async = function(x, A, m, l, E) {
        E === void 0 && (E = Promise);
        var j = new mt(R(x, A, m, l), E);
        return o.isGeneratorFunction(A) ? j : j.next().then(function(H) {
          return H.done ? H.value : j.next();
        });
      }, J(ht), C(ht, B, "Generator"), C(ht, b, function() {
        return this;
      }), C(ht, "toString", function() {
        return "[object Generator]";
      }), o.keys = function(x) {
        var A = Object(x), m = [];
        for (var l in A)
          m.push(l);
        return m.reverse(), function E() {
          for (; m.length; ) {
            var j = m.pop();
            if (j in A)
              return E.value = j, E.done = !1, E;
          }
          return E.done = !0, E;
        };
      }, o.values = v, w.prototype = {
        constructor: w,
        reset: function(A) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(y), !A)
            for (var m in this)
              m.charAt(0) === "t" && c.call(this, m) && !isNaN(+m.slice(1)) && (this[m] = n);
        },
        stop: function() {
          this.done = !0;
          var A = this.tryEntries[0].completion;
          if (A.type === "throw")
            throw A.arg;
          return this.rval;
        },
        dispatchException: function(A) {
          if (this.done)
            throw A;
          var m = this;
          function l(it, ut) {
            return H.type = "throw", H.arg = A, m.next = it, ut && (m.method = "next", m.arg = n), !!ut;
          }
          for (var E = this.tryEntries.length - 1; E >= 0; --E) {
            var j = this.tryEntries[E], H = j.completion;
            if (j.tryLoc === "root")
              return l("end");
            if (j.tryLoc <= this.prev) {
              var K = c.call(j, "catchLoc"), ft = c.call(j, "finallyLoc");
              if (K && ft) {
                if (this.prev < j.catchLoc)
                  return l(j.catchLoc, !0);
                if (this.prev < j.finallyLoc)
                  return l(j.finallyLoc);
              } else if (K) {
                if (this.prev < j.catchLoc)
                  return l(j.catchLoc, !0);
              } else {
                if (!ft)
                  throw new Error("try statement without catch or finally");
                if (this.prev < j.finallyLoc)
                  return l(j.finallyLoc);
              }
            }
          }
        },
        abrupt: function(A, m) {
          for (var l = this.tryEntries.length - 1; l >= 0; --l) {
            var E = this.tryEntries[l];
            if (E.tryLoc <= this.prev && c.call(E, "finallyLoc") && this.prev < E.finallyLoc) {
              var j = E;
              break;
            }
          }
          j && (A === "break" || A === "continue") && j.tryLoc <= m && m <= j.finallyLoc && (j = null);
          var H = j ? j.completion : {};
          return H.type = A, H.arg = m, j ? (this.method = "next", this.next = j.finallyLoc, L) : this.complete(H);
        },
        complete: function(A, m) {
          if (A.type === "throw")
            throw A.arg;
          return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && m && (this.next = m), L;
        },
        finish: function(A) {
          for (var m = this.tryEntries.length - 1; m >= 0; --m) {
            var l = this.tryEntries[m];
            if (l.finallyLoc === A)
              return this.complete(l.completion, l.afterLoc), y(l), L;
          }
        },
        catch: function(A) {
          for (var m = this.tryEntries.length - 1; m >= 0; --m) {
            var l = this.tryEntries[m];
            if (l.tryLoc === A) {
              var E = l.completion;
              if (E.type === "throw") {
                var j = E.arg;
                y(l);
              }
              return j;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(A, m, l) {
          return this.delegate = {
            iterator: v(A),
            resultName: m,
            nextLoc: l
          }, this.method === "next" && (this.arg = n), L;
        }
      }, o;
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(vc)), vc.exports;
}
var Ec, Ml;
function rm() {
  if (Ml)
    return Ec;
  Ml = 1;
  var r = em()();
  Ec = r;
  try {
    regeneratorRuntime = r;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
  }
  return Ec;
}
var _c = { exports: {} }, Rl;
function nm() {
  return Rl || (Rl = 1, function(r) {
    function t(n, o, i, c, u, p, b) {
      try {
        var _ = n[p](b), B = _.value;
      } catch (C) {
        i(C);
        return;
      }
      _.done ? o(B) : Promise.resolve(B).then(c, u);
    }
    function e(n) {
      return function() {
        var o = this, i = arguments;
        return new Promise(function(c, u) {
          var p = n.apply(o, i);
          function b(B) {
            t(p, c, u, b, _, "next", B);
          }
          function _(B) {
            t(p, c, u, b, _, "throw", B);
          }
          b(void 0);
        });
      };
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(_c)), _c.exports;
}
var Sc = { exports: {} }, kl;
function If() {
  return kl || (kl = 1, function(r) {
    function t(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Sc)), Sc.exports;
}
var Bc = { exports: {} }, Ac = { exports: {} }, Ic = { exports: {} }, Tl;
function im() {
  return Tl || (Tl = 1, function(r) {
    var t = ks().default;
    function e(n, o) {
      if (t(n) != "object" || !n)
        return n;
      var i = n[Symbol.toPrimitive];
      if (i !== void 0) {
        var c = i.call(n, o || "default");
        if (t(c) != "object")
          return c;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(n);
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Ic)), Ic.exports;
}
var Cl;
function om() {
  return Cl || (Cl = 1, function(r) {
    var t = ks().default, e = im();
    function n(o) {
      var i = e(o, "string");
      return t(i) == "symbol" ? i : String(i);
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Ac)), Ac.exports;
}
var Ll;
function Mf() {
  return Ll || (Ll = 1, function(r) {
    var t = om();
    function e(o, i) {
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(o, t(u.key), u);
      }
    }
    function n(o, i, c) {
      return i && e(o.prototype, i), c && e(o, c), Object.defineProperty(o, "prototype", {
        writable: !1
      }), o;
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Bc)), Bc.exports;
}
var Mc = { exports: {} }, Rc = { exports: {} }, Ul;
function sm() {
  return Ul || (Ul = 1, function(r) {
    function t(e, n) {
      return r.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, c) {
        return i.__proto__ = c, i;
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e, n);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Rc)), Rc.exports;
}
var Ol;
function fd() {
  return Ol || (Ol = 1, function(r) {
    var t = sm();
    function e(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Super expression must either be null or a function");
      n.prototype = Object.create(o && o.prototype, {
        constructor: {
          value: n,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(n, "prototype", {
        writable: !1
      }), o && t(n, o);
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Mc)), Mc.exports;
}
var kc = { exports: {} }, Tc = { exports: {} }, Fl;
function am() {
  return Fl || (Fl = 1, function(r) {
    function t(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Tc)), Tc.exports;
}
var Nl;
function ld() {
  return Nl || (Nl = 1, function(r) {
    var t = ks().default, e = am();
    function n(o, i) {
      if (i && (t(i) === "object" || typeof i == "function"))
        return i;
      if (i !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return e(o);
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(kc)), kc.exports;
}
var Cc = { exports: {} }, $l;
function hd() {
  return $l || ($l = 1, function(r) {
    function t(e) {
      return r.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(Cc)), Cc.exports;
}
var Lc = { exports: {} }, Pl;
function Rf() {
  return Pl || (Pl = 1, function(r) {
    var t = Object.prototype.hasOwnProperty, e = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = !1));
    function o(p, b, _) {
      this.fn = p, this.context = b, this.once = _ || !1;
    }
    function i(p, b, _, B, C) {
      if (typeof _ != "function")
        throw new TypeError("The listener must be a function");
      var R = new o(_, B || p, C), O = e ? e + b : b;
      return p._events[O] ? p._events[O].fn ? p._events[O] = [p._events[O], R] : p._events[O].push(R) : (p._events[O] = R, p._eventsCount++), p;
    }
    function c(p, b) {
      --p._eventsCount === 0 ? p._events = new n() : delete p._events[b];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var b = [], _, B;
      if (this._eventsCount === 0)
        return b;
      for (B in _ = this._events)
        t.call(_, B) && b.push(e ? B.slice(1) : B);
      return Object.getOwnPropertySymbols ? b.concat(Object.getOwnPropertySymbols(_)) : b;
    }, u.prototype.listeners = function(b) {
      var _ = e ? e + b : b, B = this._events[_];
      if (!B)
        return [];
      if (B.fn)
        return [B.fn];
      for (var C = 0, R = B.length, O = new Array(R); C < R; C++)
        O[C] = B[C].fn;
      return O;
    }, u.prototype.listenerCount = function(b) {
      var _ = e ? e + b : b, B = this._events[_];
      return B ? B.fn ? 1 : B.length : 0;
    }, u.prototype.emit = function(b, _, B, C, R, O) {
      var U = e ? e + b : b;
      if (!this._events[U])
        return !1;
      var T = this._events[U], P = arguments.length, F, L;
      if (T.fn) {
        switch (T.once && this.removeListener(b, T.fn, void 0, !0), P) {
          case 1:
            return T.fn.call(T.context), !0;
          case 2:
            return T.fn.call(T.context, _), !0;
          case 3:
            return T.fn.call(T.context, _, B), !0;
          case 4:
            return T.fn.call(T.context, _, B, C), !0;
          case 5:
            return T.fn.call(T.context, _, B, C, R), !0;
          case 6:
            return T.fn.call(T.context, _, B, C, R, O), !0;
        }
        for (L = 1, F = new Array(P - 1); L < P; L++)
          F[L - 1] = arguments[L];
        T.fn.apply(T.context, F);
      } else {
        var z = T.length, N;
        for (L = 0; L < z; L++)
          switch (T[L].once && this.removeListener(b, T[L].fn, void 0, !0), P) {
            case 1:
              T[L].fn.call(T[L].context);
              break;
            case 2:
              T[L].fn.call(T[L].context, _);
              break;
            case 3:
              T[L].fn.call(T[L].context, _, B);
              break;
            case 4:
              T[L].fn.call(T[L].context, _, B, C);
              break;
            default:
              if (!F)
                for (N = 1, F = new Array(P - 1); N < P; N++)
                  F[N - 1] = arguments[N];
              T[L].fn.apply(T[L].context, F);
          }
      }
      return !0;
    }, u.prototype.on = function(b, _, B) {
      return i(this, b, _, B, !1);
    }, u.prototype.once = function(b, _, B) {
      return i(this, b, _, B, !0);
    }, u.prototype.removeListener = function(b, _, B, C) {
      var R = e ? e + b : b;
      if (!this._events[R])
        return this;
      if (!_)
        return c(this, R), this;
      var O = this._events[R];
      if (O.fn)
        O.fn === _ && (!C || O.once) && (!B || O.context === B) && c(this, R);
      else {
        for (var U = 0, T = [], P = O.length; U < P; U++)
          (O[U].fn !== _ || C && !O[U].once || B && O[U].context !== B) && T.push(O[U]);
        T.length ? this._events[R] = T.length === 1 ? T[0] : T : c(this, R);
      }
      return this;
    }, u.prototype.removeAllListeners = function(b) {
      var _;
      return b ? (_ = e ? e + b : b, this._events[_] && c(this, _)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, r.exports = u;
  }(Lc)), Lc.exports;
}
var go = {}, Dl;
function cm() {
  if (Dl)
    return go;
  Dl = 1;
  var r = Af;
  Object.defineProperty(go, "__esModule", {
    value: !0
  }), go.DefaultDataPack = void 0, go.createError = i;
  var t = r(If()), e = r(Mf()), n = /* @__PURE__ */ new Map([[-32e3, "Event not provided"], [-32600, "Invalid Request"], [-32601, "Method not found"], [-32602, "Invalid params"], [-32603, "Internal error"], [-32604, "Params not found"], [-32605, "Method forbidden"], [-32606, "Event forbidden"], [-32700, "Parse error"]]), o = /* @__PURE__ */ function() {
    function c() {
      (0, t.default)(this, c);
    }
    return (0, e.default)(c, [{
      key: "encode",
      value: function(p) {
        return JSON.stringify(p);
      }
    }, {
      key: "decode",
      value: function(p) {
        return JSON.parse(p);
      }
    }]), c;
  }();
  go.DefaultDataPack = o;
  function i(c, u) {
    var p = {
      code: c,
      message: n.get(c) || "Internal Server Error"
    };
    return u && (p.data = u), p;
  }
  return go;
}
(function(r) {
  var t = Af;
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var e = t(rm()), n = t(nm()), o = t(ks()), i = t(If()), c = t(Mf()), u = t(fd()), p = t(ld()), b = t(hd()), _ = Rf(), B = cm();
  function C(T) {
    var P = R();
    return function() {
      var L = (0, b.default)(T), z;
      if (P) {
        var N = (0, b.default)(this).constructor;
        z = Reflect.construct(L, arguments, N);
      } else
        z = L.apply(this, arguments);
      return (0, p.default)(this, z);
    };
  }
  function R() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var O = function(T, P) {
    var F = {};
    for (var L in T)
      Object.prototype.hasOwnProperty.call(T, L) && P.indexOf(L) < 0 && (F[L] = T[L]);
    if (T != null && typeof Object.getOwnPropertySymbols == "function")
      for (var z = 0, L = Object.getOwnPropertySymbols(T); z < L.length; z++)
        P.indexOf(L[z]) < 0 && Object.prototype.propertyIsEnumerable.call(T, L[z]) && (F[L[z]] = T[L[z]]);
    return F;
  }, U = /* @__PURE__ */ function(T) {
    (0, u.default)(F, T);
    var P = C(F);
    function F(L) {
      var z, N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080", $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, q = arguments.length > 3 ? arguments[3] : void 0, W = arguments.length > 4 ? arguments[4] : void 0;
      (0, i.default)(this, F);
      var tt = $.autoconnect, ht = tt === void 0 ? !0 : tt, J = $.reconnect, mt = J === void 0 ? !0 : J, I = $.reconnect_interval, f = I === void 0 ? 1e3 : I, d = $.max_reconnects, y = d === void 0 ? 5 : d, w = O($, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
      return z = P.call(this), z.webSocketFactory = L, z.queue = {}, z.rpc_id = 0, z.address = N, z.autoconnect = ht, z.ready = !1, z.reconnect = mt, z.reconnect_timer_id = void 0, z.reconnect_interval = f, z.max_reconnects = y, z.rest_options = w, z.current_reconnects = 0, z.generate_request_id = q || function() {
        return ++z.rpc_id;
      }, W ? z.dataPack = W : z.dataPack = new B.DefaultDataPack(), z.autoconnect && z._connect(z.address, Object.assign({
        autoconnect: z.autoconnect,
        reconnect: z.reconnect,
        reconnect_interval: z.reconnect_interval,
        max_reconnects: z.max_reconnects
      }, z.rest_options)), z;
    }
    return (0, c.default)(F, [{
      key: "connect",
      value: function() {
        this.socket || this._connect(this.address, Object.assign({
          autoconnect: this.autoconnect,
          reconnect: this.reconnect,
          reconnect_interval: this.reconnect_interval,
          max_reconnects: this.max_reconnects
        }, this.rest_options));
      }
      /**
       * Calls a registered RPC method on server.
       * @method
       * @param {String} method - RPC method name
       * @param {Object|Array} params - optional method parameters
       * @param {Number} timeout - RPC reply timeout value
       * @param {Object} ws_opts - options passed to ws
       * @return {Promise}
       */
    }, {
      key: "call",
      value: function(z, N, $, q) {
        var W = this;
        return !q && (0, o.default)($) === "object" && (q = $, $ = null), new Promise(function(tt, ht) {
          if (!W.ready)
            return ht(new Error("socket not ready"));
          var J = W.generate_request_id(z, N), mt = {
            jsonrpc: "2.0",
            method: z,
            params: N || void 0,
            id: J
          };
          W.socket.send(W.dataPack.encode(mt), q, function(I) {
            if (I)
              return ht(I);
            W.queue[J] = {
              promise: [tt, ht]
            }, $ && (W.queue[J].timeout = setTimeout(function() {
              delete W.queue[J], ht(new Error("reply timeout"));
            }, $));
          });
        });
      }
      /**
       * Logins with the other side of the connection.
       * @method
       * @param {Object} params - Login credentials object
       * @return {Promise}
       */
    }, {
      key: "login",
      value: function() {
        var L = (0, n.default)(/* @__PURE__ */ e.default.mark(function N($) {
          var q;
          return e.default.wrap(function(tt) {
            for (; ; )
              switch (tt.prev = tt.next) {
                case 0:
                  return tt.next = 2, this.call("rpc.login", $);
                case 2:
                  if (q = tt.sent, q) {
                    tt.next = 5;
                    break;
                  }
                  throw new Error("authentication failed");
                case 5:
                  return tt.abrupt("return", q);
                case 6:
                case "end":
                  return tt.stop();
              }
          }, N, this);
        }));
        function z(N) {
          return L.apply(this, arguments);
        }
        return z;
      }()
      /**
       * Fetches a list of client's methods registered on server.
       * @method
       * @return {Array}
       */
    }, {
      key: "listMethods",
      value: function() {
        var L = (0, n.default)(/* @__PURE__ */ e.default.mark(function N() {
          return e.default.wrap(function(q) {
            for (; ; )
              switch (q.prev = q.next) {
                case 0:
                  return q.next = 2, this.call("__listMethods");
                case 2:
                  return q.abrupt("return", q.sent);
                case 3:
                case "end":
                  return q.stop();
              }
          }, N, this);
        }));
        function z() {
          return L.apply(this, arguments);
        }
        return z;
      }()
      /**
       * Sends a JSON-RPC 2.0 notification to server.
       * @method
       * @param {String} method - RPC method name
       * @param {Object} params - optional method parameters
       * @return {Promise}
       */
    }, {
      key: "notify",
      value: function(z, N) {
        var $ = this;
        return new Promise(function(q, W) {
          if (!$.ready)
            return W(new Error("socket not ready"));
          var tt = {
            jsonrpc: "2.0",
            method: z,
            params: N
          };
          $.socket.send($.dataPack.encode(tt), function(ht) {
            if (ht)
              return W(ht);
            q();
          });
        });
      }
      /**
       * Subscribes for a defined event.
       * @method
       * @param {String|Array} event - event name
       * @return {Undefined}
       * @throws {Error}
       */
    }, {
      key: "subscribe",
      value: function() {
        var L = (0, n.default)(/* @__PURE__ */ e.default.mark(function N($) {
          var q;
          return e.default.wrap(function(tt) {
            for (; ; )
              switch (tt.prev = tt.next) {
                case 0:
                  return typeof $ == "string" && ($ = [$]), tt.next = 3, this.call("rpc.on", $);
                case 3:
                  if (q = tt.sent, !(typeof $ == "string" && q[$] !== "ok")) {
                    tt.next = 6;
                    break;
                  }
                  throw new Error("Failed subscribing to an event '" + $ + "' with: " + q[$]);
                case 6:
                  return tt.abrupt("return", q);
                case 7:
                case "end":
                  return tt.stop();
              }
          }, N, this);
        }));
        function z(N) {
          return L.apply(this, arguments);
        }
        return z;
      }()
      /**
       * Unsubscribes from a defined event.
       * @method
       * @param {String|Array} event - event name
       * @return {Undefined}
       * @throws {Error}
       */
    }, {
      key: "unsubscribe",
      value: function() {
        var L = (0, n.default)(/* @__PURE__ */ e.default.mark(function N($) {
          var q;
          return e.default.wrap(function(tt) {
            for (; ; )
              switch (tt.prev = tt.next) {
                case 0:
                  return typeof $ == "string" && ($ = [$]), tt.next = 3, this.call("rpc.off", $);
                case 3:
                  if (q = tt.sent, !(typeof $ == "string" && q[$] !== "ok")) {
                    tt.next = 6;
                    break;
                  }
                  throw new Error("Failed unsubscribing from an event with: " + q);
                case 6:
                  return tt.abrupt("return", q);
                case 7:
                case "end":
                  return tt.stop();
              }
          }, N, this);
        }));
        function z(N) {
          return L.apply(this, arguments);
        }
        return z;
      }()
      /**
       * Closes a WebSocket connection gracefully.
       * @method
       * @param {Number} code - socket close code
       * @param {String} data - optional data to be sent before closing
       * @return {Undefined}
       */
    }, {
      key: "close",
      value: function(z, N) {
        this.socket.close(z || 1e3, N);
      }
      /**
       * Connection/Message handler.
       * @method
       * @private
       * @param {String} address - WebSocket API address
       * @param {Object} options - ws options object
       * @return {Undefined}
       */
    }, {
      key: "_connect",
      value: function(z, N) {
        var $ = this;
        clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(z, N), this.socket.addEventListener("open", function() {
          $.ready = !0, $.emit("open"), $.current_reconnects = 0;
        }), this.socket.addEventListener("message", function(q) {
          var W = q.data;
          W instanceof ArrayBuffer && (W = Buffer.from(W).toString());
          try {
            W = $.dataPack.decode(W);
          } catch {
            return;
          }
          if (W.notification && $.listeners(W.notification).length) {
            if (!Object.keys(W.params).length)
              return $.emit(W.notification);
            var tt = [W.notification];
            if (W.params.constructor === Object)
              tt.push(W.params);
            else
              for (var ht = 0; ht < W.params.length; ht++)
                tt.push(W.params[ht]);
            return Promise.resolve().then(function() {
              $.emit.apply($, tt);
            });
          }
          if (!$.queue[W.id])
            return W.method ? Promise.resolve().then(function() {
              $.emit(W.method, W == null ? void 0 : W.params);
            }) : void 0;
          "error" in W == "result" in W && $.queue[W.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), $.queue[W.id].timeout && clearTimeout($.queue[W.id].timeout), W.error ? $.queue[W.id].promise[1](W.error) : $.queue[W.id].promise[0](W.result), delete $.queue[W.id];
        }), this.socket.addEventListener("error", function(q) {
          return $.emit("error", q);
        }), this.socket.addEventListener("close", function(q) {
          var W = q.code, tt = q.reason;
          $.ready && setTimeout(function() {
            return $.emit("close", W, tt);
          }, 0), $.ready = !1, $.socket = void 0, W !== 1e3 && ($.current_reconnects++, $.reconnect && ($.max_reconnects > $.current_reconnects || $.max_reconnects === 0) && ($.reconnect_timer_id = setTimeout(function() {
            return $._connect(z, N);
          }, $.reconnect_interval)));
        });
      }
    }]), F;
  }(_.EventEmitter);
  r.default = U;
})(cd);
const um = /* @__PURE__ */ gn(cd);
var dd = {};
(function(r) {
  var t = Af;
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = B;
  var e = t(If()), n = t(Mf()), o = t(fd()), i = t(ld()), c = t(hd()), u = Rf();
  function p(C) {
    var R = b();
    return function() {
      var U = (0, c.default)(C), T;
      if (R) {
        var P = (0, c.default)(this).constructor;
        T = Reflect.construct(U, arguments, P);
      } else
        T = U.apply(this, arguments);
      return (0, i.default)(this, T);
    };
  }
  function b() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var _ = /* @__PURE__ */ function(C) {
    (0, o.default)(O, C);
    var R = p(O);
    function O(U, T, P) {
      var F;
      return (0, e.default)(this, O), F = R.call(this), F.socket = new window.WebSocket(U, P), F.socket.onopen = function() {
        return F.emit("open");
      }, F.socket.onmessage = function(L) {
        return F.emit("message", L.data);
      }, F.socket.onerror = function(L) {
        return F.emit("error", L);
      }, F.socket.onclose = function(L) {
        F.emit("close", L.code, L.reason);
      }, F;
    }
    return (0, n.default)(O, [{
      key: "send",
      value: function(T, P, F) {
        var L = F || P;
        try {
          this.socket.send(T), L();
        } catch (z) {
          L(z);
        }
      }
      /**
       * Closes an underlying socket
       * @method
       * @param {Number} code - status code explaining why the connection is being closed
       * @param {String} reason - a description why the connection is closing
       * @return {Undefined}
       * @throws {Error}
       */
    }, {
      key: "close",
      value: function(T, P) {
        this.socket.close(T, P);
      }
    }, {
      key: "addEventListener",
      value: function(T, P, F) {
        this.socket.addEventListener(T, P, F);
      }
    }]), O;
  }(u.EventEmitter);
  function B(C, R) {
    return new _(C, R);
  }
})(dd);
const fm = /* @__PURE__ */ gn(dd);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function lm(r) {
  const t = ff(r);
  Ko(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: e, Fp: n, a: o } = t;
  if (e) {
    if (!n.eql(o, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof e != "object" || typeof e.beta != "bigint" || typeof e.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: hm, hexToBytes: dm } = dg, $i = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(r) {
    const { Err: t } = $i;
    if (r.length < 2 || r[0] !== 2)
      throw new t("Invalid signature integer tag");
    const e = r[1], n = r.subarray(2, e + 2);
    if (!e || n.length !== e)
      throw new t("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: hm(n), l: r.subarray(e + 2) };
  },
  toSig(r) {
    const { Err: t } = $i, e = typeof r == "string" ? dm(r) : r;
    if (!In(e))
      throw new Error("ui8a expected");
    let n = e.length;
    if (n < 2 || e[0] != 48)
      throw new t("Invalid signature tag");
    if (e[1] !== n - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: o, l: i } = $i._parseInt(e.subarray(2)), { d: c, l: u } = $i._parseInt(i);
    if (u.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: o, s: c };
  },
  hexFromSig(r) {
    const t = (b) => Number.parseInt(b[0], 16) & 8 ? "00" + b : b, e = (b) => {
      const _ = b.toString(16);
      return _.length & 1 ? `0${_}` : _;
    }, n = t(e(r.s)), o = t(e(r.r)), i = n.length / 2, c = o.length / 2, u = e(i), p = e(c);
    return `30${e(c + i + 4)}02${p}${o}02${u}${n}`;
  }
}, Pn = BigInt(0), en = BigInt(1);
BigInt(2);
const zl = BigInt(3);
BigInt(4);
function pm(r) {
  const t = lm(r), { Fp: e } = t, n = t.toBytes || ((O, U, T) => {
    const P = U.toAffine();
    return to(Uint8Array.from([4]), e.toBytes(P.x), e.toBytes(P.y));
  }), o = t.fromBytes || ((O) => {
    const U = O.subarray(1), T = e.fromBytes(U.subarray(0, e.BYTES)), P = e.fromBytes(U.subarray(e.BYTES, 2 * e.BYTES));
    return { x: T, y: P };
  });
  function i(O) {
    const { a: U, b: T } = t, P = e.sqr(O), F = e.mul(P, O);
    return e.add(e.add(F, e.mul(O, U)), T);
  }
  if (!e.eql(e.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function c(O) {
    return typeof O == "bigint" && Pn < O && O < t.n;
  }
  function u(O) {
    if (!c(O))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function p(O) {
    const { allowedPrivateKeyLengths: U, nByteLength: T, wrapPrivateKey: P, n: F } = t;
    if (U && typeof O != "bigint") {
      if (In(O) && (O = Qi(O)), typeof O != "string" || !U.includes(O.length))
        throw new Error("Invalid key");
      O = O.padStart(T * 2, "0");
    }
    let L;
    try {
      L = typeof O == "bigint" ? O : Gi(Qe("private key", O, T));
    } catch {
      throw new Error(`private key must be ${T} bytes, hex or bigint, not ${typeof O}`);
    }
    return P && (L = Fe(L, F)), u(L), L;
  }
  const b = /* @__PURE__ */ new Map();
  function _(O) {
    if (!(O instanceof B))
      throw new Error("ProjectivePoint expected");
  }
  class B {
    constructor(U, T, P) {
      if (this.px = U, this.py = T, this.pz = P, U == null || !e.isValid(U))
        throw new Error("x required");
      if (T == null || !e.isValid(T))
        throw new Error("y required");
      if (P == null || !e.isValid(P))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(U) {
      const { x: T, y: P } = U || {};
      if (!U || !e.isValid(T) || !e.isValid(P))
        throw new Error("invalid affine point");
      if (U instanceof B)
        throw new Error("projective point not allowed");
      const F = (L) => e.eql(L, e.ZERO);
      return F(T) && F(P) ? B.ZERO : new B(T, P, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(U) {
      const T = e.invertBatch(U.map((P) => P.pz));
      return U.map((P, F) => P.toAffine(T[F])).map(B.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(U) {
      const T = B.fromAffine(o(Qe("pointHex", U)));
      return T.assertValidity(), T;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(U) {
      return B.BASE.multiply(p(U));
    }
    // "Private method", don't use it directly
    _setWindowSize(U) {
      this._WINDOW_SIZE = U, b.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !e.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: U, y: T } = this.toAffine();
      if (!e.isValid(U) || !e.isValid(T))
        throw new Error("bad point: x or y not FE");
      const P = e.sqr(T), F = i(U);
      if (!e.eql(P, F))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: U } = this.toAffine();
      if (e.isOdd)
        return !e.isOdd(U);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(U) {
      _(U);
      const { px: T, py: P, pz: F } = this, { px: L, py: z, pz: N } = U, $ = e.eql(e.mul(T, N), e.mul(L, F)), q = e.eql(e.mul(P, N), e.mul(z, F));
      return $ && q;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new B(this.px, e.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: U, b: T } = t, P = e.mul(T, zl), { px: F, py: L, pz: z } = this;
      let N = e.ZERO, $ = e.ZERO, q = e.ZERO, W = e.mul(F, F), tt = e.mul(L, L), ht = e.mul(z, z), J = e.mul(F, L);
      return J = e.add(J, J), q = e.mul(F, z), q = e.add(q, q), N = e.mul(U, q), $ = e.mul(P, ht), $ = e.add(N, $), N = e.sub(tt, $), $ = e.add(tt, $), $ = e.mul(N, $), N = e.mul(J, N), q = e.mul(P, q), ht = e.mul(U, ht), J = e.sub(W, ht), J = e.mul(U, J), J = e.add(J, q), q = e.add(W, W), W = e.add(q, W), W = e.add(W, ht), W = e.mul(W, J), $ = e.add($, W), ht = e.mul(L, z), ht = e.add(ht, ht), W = e.mul(ht, J), N = e.sub(N, W), q = e.mul(ht, tt), q = e.add(q, q), q = e.add(q, q), new B(N, $, q);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(U) {
      _(U);
      const { px: T, py: P, pz: F } = this, { px: L, py: z, pz: N } = U;
      let $ = e.ZERO, q = e.ZERO, W = e.ZERO;
      const tt = t.a, ht = e.mul(t.b, zl);
      let J = e.mul(T, L), mt = e.mul(P, z), I = e.mul(F, N), f = e.add(T, P), d = e.add(L, z);
      f = e.mul(f, d), d = e.add(J, mt), f = e.sub(f, d), d = e.add(T, F);
      let y = e.add(L, N);
      return d = e.mul(d, y), y = e.add(J, I), d = e.sub(d, y), y = e.add(P, F), $ = e.add(z, N), y = e.mul(y, $), $ = e.add(mt, I), y = e.sub(y, $), W = e.mul(tt, d), $ = e.mul(ht, I), W = e.add($, W), $ = e.sub(mt, W), W = e.add(mt, W), q = e.mul($, W), mt = e.add(J, J), mt = e.add(mt, J), I = e.mul(tt, I), d = e.mul(ht, d), mt = e.add(mt, I), I = e.sub(J, I), I = e.mul(tt, I), d = e.add(d, I), J = e.mul(mt, d), q = e.add(q, J), J = e.mul(y, d), $ = e.mul(f, $), $ = e.sub($, J), J = e.mul(f, mt), W = e.mul(y, W), W = e.add(W, J), new B($, q, W);
    }
    subtract(U) {
      return this.add(U.negate());
    }
    is0() {
      return this.equals(B.ZERO);
    }
    wNAF(U) {
      return R.wNAFCached(this, b, U, (T) => {
        const P = e.invertBatch(T.map((F) => F.pz));
        return T.map((F, L) => F.toAffine(P[L])).map(B.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(U) {
      const T = B.ZERO;
      if (U === Pn)
        return T;
      if (u(U), U === en)
        return this;
      const { endo: P } = t;
      if (!P)
        return R.unsafeLadder(this, U);
      let { k1neg: F, k1: L, k2neg: z, k2: N } = P.splitScalar(U), $ = T, q = T, W = this;
      for (; L > Pn || N > Pn; )
        L & en && ($ = $.add(W)), N & en && (q = q.add(W)), W = W.double(), L >>= en, N >>= en;
      return F && ($ = $.negate()), z && (q = q.negate()), q = new B(e.mul(q.px, P.beta), q.py, q.pz), $.add(q);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(U) {
      u(U);
      let T = U, P, F;
      const { endo: L } = t;
      if (L) {
        const { k1neg: z, k1: N, k2neg: $, k2: q } = L.splitScalar(T);
        let { p: W, f: tt } = this.wNAF(N), { p: ht, f: J } = this.wNAF(q);
        W = R.constTimeNegate(z, W), ht = R.constTimeNegate($, ht), ht = new B(e.mul(ht.px, L.beta), ht.py, ht.pz), P = W.add(ht), F = tt.add(J);
      } else {
        const { p: z, f: N } = this.wNAF(T);
        P = z, F = N;
      }
      return B.normalizeZ([P, F])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(U, T, P) {
      const F = B.BASE, L = (N, $) => $ === Pn || $ === en || !N.equals(F) ? N.multiplyUnsafe($) : N.multiply($), z = L(this, T).add(L(U, P));
      return z.is0() ? void 0 : z;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(U) {
      const { px: T, py: P, pz: F } = this, L = this.is0();
      U == null && (U = L ? e.ONE : e.inv(F));
      const z = e.mul(T, U), N = e.mul(P, U), $ = e.mul(F, U);
      if (L)
        return { x: e.ZERO, y: e.ZERO };
      if (!e.eql($, e.ONE))
        throw new Error("invZ was invalid");
      return { x: z, y: N };
    }
    isTorsionFree() {
      const { h: U, isTorsionFree: T } = t;
      if (U === en)
        return !0;
      if (T)
        return T(B, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: U, clearCofactor: T } = t;
      return U === en ? this : T ? T(B, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(U = !0) {
      return this.assertValidity(), n(B, this, U);
    }
    toHex(U = !0) {
      return Qi(this.toRawBytes(U));
    }
  }
  B.BASE = new B(t.Gx, t.Gy, e.ONE), B.ZERO = new B(e.ZERO, e.ONE, e.ZERO);
  const C = t.nBitLength, R = A0(B, t.endo ? Math.ceil(C / 2) : C);
  return {
    CURVE: t,
    ProjectivePoint: B,
    normPrivateKeyToScalar: p,
    weierstrassEquation: i,
    isWithinCurveOrder: c
  };
}
function gm(r) {
  const t = ff(r);
  return Ko(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function ym(r) {
  const t = gm(r), { Fp: e, n } = t, o = e.BYTES + 1, i = 2 * e.BYTES + 1;
  function c(d) {
    return Pn < d && d < e.ORDER;
  }
  function u(d) {
    return Fe(d, n);
  }
  function p(d) {
    return Bu(d, n);
  }
  const { ProjectivePoint: b, normPrivateKeyToScalar: _, weierstrassEquation: B, isWithinCurveOrder: C } = pm({
    ...t,
    toBytes(d, y, w) {
      const v = y.toAffine(), x = e.toBytes(v.x), A = to;
      return w ? A(Uint8Array.from([y.hasEvenY() ? 2 : 3]), x) : A(Uint8Array.from([4]), x, e.toBytes(v.y));
    },
    fromBytes(d) {
      const y = d.length, w = d[0], v = d.subarray(1);
      if (y === o && (w === 2 || w === 3)) {
        const x = Gi(v);
        if (!c(x))
          throw new Error("Point is not on curve");
        const A = B(x);
        let m = e.sqrt(A);
        const l = (m & en) === en;
        return (w & 1) === 1 !== l && (m = e.neg(m)), { x, y: m };
      } else if (y === i && w === 4) {
        const x = e.fromBytes(v.subarray(0, e.BYTES)), A = e.fromBytes(v.subarray(e.BYTES, 2 * e.BYTES));
        return { x, y: A };
      } else
        throw new Error(`Point of length ${y} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`);
    }
  }), R = (d) => Qi(Fo(d, t.nByteLength));
  function O(d) {
    const y = n >> en;
    return d > y;
  }
  function U(d) {
    return O(d) ? u(-d) : d;
  }
  const T = (d, y, w) => Gi(d.slice(y, w));
  class P {
    constructor(y, w, v) {
      this.r = y, this.s = w, this.recovery = v, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(y) {
      const w = t.nByteLength;
      return y = Qe("compactSignature", y, w * 2), new P(T(y, 0, w), T(y, w, 2 * w));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(y) {
      const { r: w, s: v } = $i.toSig(Qe("DER", y));
      return new P(w, v);
    }
    assertValidity() {
      if (!C(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!C(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(y) {
      return new P(this.r, this.s, y);
    }
    recoverPublicKey(y) {
      const { r: w, s: v, recovery: x } = this, A = q(Qe("msgHash", y));
      if (x == null || ![0, 1, 2, 3].includes(x))
        throw new Error("recovery id invalid");
      const m = x === 2 || x === 3 ? w + t.n : w;
      if (m >= e.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const l = x & 1 ? "03" : "02", E = b.fromHex(l + R(m)), j = p(m), H = u(-A * j), K = u(v * j), ft = b.BASE.multiplyAndAddUnsafe(E, H, K);
      if (!ft)
        throw new Error("point at infinify");
      return ft.assertValidity(), ft;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return O(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new P(this.r, u(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Oo(this.toDERHex());
    }
    toDERHex() {
      return $i.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Oo(this.toCompactHex());
    }
    toCompactHex() {
      return R(this.r) + R(this.s);
    }
  }
  const F = {
    isValidPrivateKey(d) {
      try {
        return _(d), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: _,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const d = B0(t.n);
      return Sg(t.randomBytes(d), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(d = 8, y = b.BASE) {
      return y._setWindowSize(d), y.multiply(BigInt(3)), y;
    }
  };
  function L(d, y = !0) {
    return b.fromPrivateKey(d).toRawBytes(y);
  }
  function z(d) {
    const y = In(d), w = typeof d == "string", v = (y || w) && d.length;
    return y ? v === o || v === i : w ? v === 2 * o || v === 2 * i : d instanceof b;
  }
  function N(d, y, w = !0) {
    if (z(d))
      throw new Error("first arg must be private key");
    if (!z(y))
      throw new Error("second arg must be public key");
    return b.fromHex(y).multiply(_(d)).toRawBytes(w);
  }
  const $ = t.bits2int || function(d) {
    const y = Gi(d), w = d.length * 8 - t.nBitLength;
    return w > 0 ? y >> BigInt(w) : y;
  }, q = t.bits2int_modN || function(d) {
    return u($(d));
  }, W = uf(t.nBitLength);
  function tt(d) {
    if (typeof d != "bigint")
      throw new Error("bigint expected");
    if (!(Pn <= d && d < W))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return Fo(d, t.nByteLength);
  }
  function ht(d, y, w = J) {
    if (["recovered", "canonical"].some((ut) => ut in w))
      throw new Error("sign() legacy options not supported");
    const { hash: v, randomBytes: x } = t;
    let { lowS: A, prehash: m, extraEntropy: l } = w;
    A == null && (A = !0), d = Qe("msgHash", d), m && (d = Qe("prehashed msgHash", v(d)));
    const E = q(d), j = _(y), H = [tt(j), tt(E)];
    if (l != null) {
      const ut = l === !0 ? x(e.BYTES) : l;
      H.push(Qe("extraEntropy", ut));
    }
    const K = to(...H), ft = E;
    function it(ut) {
      const Vt = $(ut);
      if (!C(Vt))
        return;
      const Bt = p(Vt), _t = b.BASE.multiply(Vt).toAffine(), Wt = u(_t.x);
      if (Wt === Pn)
        return;
      const vt = u(Bt * u(ft + Wt * j));
      if (vt === Pn)
        return;
      let Rt = (_t.x === Wt ? 0 : 2) | Number(_t.y & en), qe = vt;
      return A && O(vt) && (qe = U(vt), Rt ^= 1), new P(Wt, qe, Rt);
    }
    return { seed: K, k2sig: it };
  }
  const J = { lowS: t.lowS, prehash: !1 }, mt = { lowS: t.lowS, prehash: !1 };
  function I(d, y, w = J) {
    const { seed: v, k2sig: x } = ht(d, y, w), A = t;
    return x0(A.hash.outputLen, A.nByteLength, A.hmac)(v, x);
  }
  b.BASE._setWindowSize(8);
  function f(d, y, w, v = mt) {
    var _t;
    const x = d;
    if (y = Qe("msgHash", y), w = Qe("publicKey", w), "strict" in v)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: A, prehash: m } = v;
    let l, E;
    try {
      if (typeof x == "string" || In(x))
        try {
          l = P.fromDER(x);
        } catch (Wt) {
          if (!(Wt instanceof $i.Err))
            throw Wt;
          l = P.fromCompact(x);
        }
      else if (typeof x == "object" && typeof x.r == "bigint" && typeof x.s == "bigint") {
        const { r: Wt, s: vt } = x;
        l = new P(Wt, vt);
      } else
        throw new Error("PARSE");
      E = b.fromHex(w);
    } catch (Wt) {
      if (Wt.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (A && l.hasHighS())
      return !1;
    m && (y = t.hash(y));
    const { r: j, s: H } = l, K = q(y), ft = p(H), it = u(K * ft), ut = u(j * ft), Vt = (_t = b.BASE.multiplyAndAddUnsafe(E, it, ut)) == null ? void 0 : _t.toAffine();
    return Vt ? u(Vt.x) === j : !1;
  }
  return {
    CURVE: t,
    getPublicKey: L,
    getSharedSecret: N,
    sign: I,
    verify: f,
    ProjectivePoint: b,
    Signature: P,
    utils: F
  };
}
let pd = class extends p0 {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, A1(t);
    const n = af(e);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o = this.blockLen, i = new Uint8Array(o);
    i.set(n.length > o ? t.create().update(n).digest() : n);
    for (let c = 0; c < i.length; c++)
      i[c] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let c = 0; c < i.length; c++)
      i[c] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return fa(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    fa(this), h0(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: n, finished: o, destroyed: i, blockLen: c, outputLen: u } = this;
    return t = t, t.finished = o, t.destroyed = i, t.blockLen = c, t.outputLen = u, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const gd = (r, t, e) => new pd(r, t).update(e).digest();
gd.create = (r, t) => new pd(r, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function mm(r) {
  return {
    hash: r,
    hmac: (t, ...e) => gd(r, t, k1(...e)),
    randomBytes: y0
  };
}
function wm(r, t) {
  const e = (n) => ym({ ...r, ...mm(n) });
  return Object.freeze({ ...e(t), create: e });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const yd = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), ql = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), bm = BigInt(1), ku = BigInt(2), Wl = (r, t) => (r + t / ku) / t;
function vm(r) {
  const t = yd, e = BigInt(3), n = BigInt(6), o = BigInt(11), i = BigInt(22), c = BigInt(23), u = BigInt(44), p = BigInt(88), b = r * r * r % t, _ = b * b * r % t, B = We(_, e, t) * _ % t, C = We(B, e, t) * _ % t, R = We(C, ku, t) * b % t, O = We(R, o, t) * R % t, U = We(O, i, t) * O % t, T = We(U, u, t) * U % t, P = We(T, p, t) * T % t, F = We(P, u, t) * U % t, L = We(F, e, t) * _ % t, z = We(L, c, t) * O % t, N = We(z, n, t) * b % t, $ = We(N, ku, t);
  if (!Tu.eql(Tu.sqr($), r))
    throw new Error("Cannot find square root");
  return $;
}
const Tu = _0(yd, void 0, void 0, { sqrt: vm }), kf = wm({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Tu,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: ql,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const t = ql, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -bm * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, c = BigInt("0x100000000000000000000000000000000"), u = Wl(i * r, t), p = Wl(-n * r, t);
      let b = Fe(r - u * e - p * o, t), _ = Fe(-u * n - p * i, t);
      const B = b > c, C = _ > c;
      if (B && (b = t - b), C && (_ = t - _), b > c || _ > c)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: B, k1: b, k2neg: C, k2: _ };
    }
  }
}, Mu);
BigInt(0);
kf.ProjectivePoint;
Ua.utils.randomPrivateKey;
function jl(r) {
  try {
    return Ua.ExtendedPoint.fromHex(r), !0;
  } catch {
    return !1;
  }
}
const md = (r, t) => Ua.sign(r, t.slice(0, 32)), xm = Ua.verify, $o = (r) => ue.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? ue.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : ue.Buffer.from(r);
let Em = class {
  constructor(t) {
    Object.assign(this, t);
  }
  encode() {
    return ue.Buffer.from(F0(ta, this));
  }
  static decode(t) {
    return N0(ta, this, t);
  }
  static decodeUnchecked(t) {
    return T0(ta, this, t);
  }
};
const ta = /* @__PURE__ */ new Map();
var wd;
let bd;
const _m = 32, Bn = 32;
function Sm(r) {
  return r._bn !== void 0;
}
let Hl = 1;
bd = Symbol.toStringTag;
let Gt = class bo extends Em {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(t) {
    if (super({}), this._bn = void 0, Sm(t))
      this._bn = t._bn;
    else {
      if (typeof t == "string") {
        const e = or.decode(t);
        if (e.length != Bn)
          throw new Error("Invalid public key input");
        this._bn = new _l(e);
      } else
        this._bn = new _l(t);
      if (this._bn.byteLength() > Bn)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const t = new bo(Hl);
    return Hl += 1, new bo(t.toBuffer());
  }
  /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */
  /**
   * Checks if two publicKeys are equal
   */
  equals(t) {
    return this._bn.eq(t._bn);
  }
  /**
   * Return the base-58 representation of the public key
   */
  toBase58() {
    return or.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  /**
   * Return the byte array representation of the public key in big endian
   */
  toBytes() {
    const t = this.toBuffer();
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  /**
   * Return the Buffer representation of the public key in big endian
   */
  toBuffer() {
    const t = this._bn.toArrayLike(ue.Buffer);
    if (t.length === Bn)
      return t;
    const e = ue.Buffer.alloc(32);
    return t.copy(e, 32 - t.length), e;
  }
  get [bd]() {
    return `PublicKey(${this.toString()})`;
  }
  /**
   * Return the base-58 representation of the public key
   */
  toString() {
    return this.toBase58();
  }
  /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */
  /* eslint-disable require-await */
  static async createWithSeed(t, e, n) {
    const o = ue.Buffer.concat([t.toBuffer(), ue.Buffer.from(e), n.toBuffer()]), i = Mu(o);
    return new bo(i);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(t, e) {
    let n = ue.Buffer.alloc(0);
    t.forEach(function(i) {
      if (i.length > _m)
        throw new TypeError("Max seed length exceeded");
      n = ue.Buffer.concat([n, $o(i)]);
    }), n = ue.Buffer.concat([n, e.toBuffer(), ue.Buffer.from("ProgramDerivedAddress")]);
    const o = Mu(n);
    if (jl(o))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new bo(o);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(t, e) {
    return this.createProgramAddressSync(t, e);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(t, e) {
    let n = 255, o;
    for (; n != 0; ) {
      try {
        const i = t.concat(ue.Buffer.from([n]));
        o = this.createProgramAddressSync(i, e);
      } catch (i) {
        if (i instanceof TypeError)
          throw i;
        n--;
        continue;
      }
      return [o, n];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */
  static async findProgramAddress(t, e) {
    return this.findProgramAddressSync(t, e);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(t) {
    const e = new bo(t);
    return jl(e.toBytes());
  }
};
wd = Gt;
Gt.default = new wd("11111111111111111111111111111111");
ta.set(Gt, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new Gt("BPFLoader1111111111111111111111111111111111");
const Ro = 1280 - 40 - 8, Tf = 127, Po = 64;
class vd extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: block height exceeded.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(vd.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class xd extends Error {
  constructor(t, e) {
    super(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(xd.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class as extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(as.prototype, "name", {
  value: "TransactionExpiredNonceInvalidError"
});
class ya {
  constructor(t, e) {
    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = t, this.accountKeysFromLookups = e;
  }
  keySegments() {
    const t = [this.staticAccountKeys];
    return this.accountKeysFromLookups && (t.push(this.accountKeysFromLookups.writable), t.push(this.accountKeysFromLookups.readonly)), t;
  }
  get(t) {
    for (const e of this.keySegments()) {
      if (t < e.length)
        return e[t];
      t -= e.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(t) {
    if (this.length > 255 + 1)
      throw new Error("Account index overflow encountered during compilation");
    const n = /* @__PURE__ */ new Map();
    this.keySegments().flat().forEach((i, c) => {
      n.set(i.toBase58(), c);
    });
    const o = (i) => {
      const c = n.get(i.toBase58());
      if (c === void 0)
        throw new Error("Encountered an unknown instruction account key during compilation");
      return c;
    };
    return t.map((i) => ({
      programIdIndex: o(i.programId),
      accountKeyIndexes: i.keys.map((c) => o(c.pubkey)),
      data: i.data
    }));
  }
}
const pe = (r = "publicKey") => Te(32, r), Bm = (r = "signature") => Te(64, r), Eo = (r = "string") => {
  const t = Ct([Dt("length"), Dt("lengthPadding"), Te(Vi(Dt(), -8), "chars")], r), e = t.decode.bind(t), n = t.encode.bind(t), o = t;
  return o.decode = (i, c) => e(i, c).chars.toString(), o.encode = (i, c, u) => {
    const p = {
      chars: ue.Buffer.from(i, "utf8")
    };
    return n(p, c, u);
  }, o.alloc = (i) => Dt().span + Dt().span + ue.Buffer.from(i, "utf8").length, o;
}, Am = (r = "authorized") => Ct([pe("staker"), pe("withdrawer")], r), Im = (r = "lockup") => Ct([jr("unixTimestamp"), jr("epoch"), pe("custodian")], r), Mm = (r = "voteInit") => Ct([pe("nodePubkey"), pe("authorizedVoter"), pe("authorizedWithdrawer"), _e("commission")], r), Rm = (r = "voteAuthorizeWithSeedArgs") => Ct([Dt("voteAuthorizationType"), pe("currentAuthorityDerivedKeyOwnerPubkey"), Eo("currentAuthorityDerivedKeySeed"), pe("newAuthorized")], r);
function Hr(r) {
  let t = 0, e = 0;
  for (; ; ) {
    let n = r.shift();
    if (t |= (n & 127) << e * 7, e += 1, !(n & 128))
      break;
  }
  return t;
}
function Kr(r, t) {
  let e = t;
  for (; ; ) {
    let n = e & 127;
    if (e >>= 7, e == 0) {
      r.push(n);
      break;
    } else
      n |= 128, r.push(n);
  }
}
function Oe(r, t) {
  if (!r)
    throw new Error(t || "Assertion failed");
}
class za {
  constructor(t, e) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = t, this.keyMetaMap = e;
  }
  static compile(t, e) {
    const n = /* @__PURE__ */ new Map(), o = (c) => {
      const u = c.toBase58();
      let p = n.get(u);
      return p === void 0 && (p = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, n.set(u, p)), p;
    }, i = o(e);
    i.isSigner = !0, i.isWritable = !0;
    for (const c of t) {
      o(c.programId).isInvoked = !0;
      for (const u of c.keys) {
        const p = o(u.pubkey);
        p.isSigner || (p.isSigner = u.isSigner), p.isWritable || (p.isWritable = u.isWritable);
      }
    }
    return new za(e, n);
  }
  getMessageComponents() {
    const t = [...this.keyMetaMap.entries()];
    Oe(t.length <= 256, "Max static account keys length exceeded");
    const e = t.filter(([, p]) => p.isSigner && p.isWritable), n = t.filter(([, p]) => p.isSigner && !p.isWritable), o = t.filter(([, p]) => !p.isSigner && p.isWritable), i = t.filter(([, p]) => !p.isSigner && !p.isWritable), c = {
      numRequiredSignatures: e.length + n.length,
      numReadonlySignedAccounts: n.length,
      numReadonlyUnsignedAccounts: i.length
    };
    {
      Oe(e.length > 0, "Expected at least one writable signer key");
      const [p] = e[0];
      Oe(p === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const u = [...e.map(([p]) => new Gt(p)), ...n.map(([p]) => new Gt(p)), ...o.map(([p]) => new Gt(p)), ...i.map(([p]) => new Gt(p))];
    return [c, u];
  }
  extractTableLookup(t) {
    const [e, n] = this.drainKeysFoundInLookupTable(t.state.addresses, (c) => !c.isSigner && !c.isInvoked && c.isWritable), [o, i] = this.drainKeysFoundInLookupTable(t.state.addresses, (c) => !c.isSigner && !c.isInvoked && !c.isWritable);
    if (!(e.length === 0 && o.length === 0))
      return [{
        accountKey: t.key,
        writableIndexes: e,
        readonlyIndexes: o
      }, {
        writable: n,
        readonly: i
      }];
  }
  /** @internal */
  drainKeysFoundInLookupTable(t, e) {
    const n = new Array(), o = new Array();
    for (const [i, c] of this.keyMetaMap.entries())
      if (e(c)) {
        const u = new Gt(i), p = t.findIndex((b) => b.equals(u));
        p >= 0 && (Oe(p < 256, "Max lookup table index exceeded"), n.push(p), o.push(u), this.keyMetaMap.delete(i));
      }
    return [n, o];
  }
}
class qn {
  constructor(t) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = t.header, this.accountKeys = t.accountKeys.map((e) => new Gt(e)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((e) => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]));
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: or.decode(t.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new ya(this.staticAccountKeys);
  }
  static compile(t) {
    const e = za.compile(t.instructions, t.payerKey), [n, o] = e.getMessageComponents(), c = new ya(o).compileInstructions(t.instructions).map((u) => ({
      programIdIndex: u.programIdIndex,
      accounts: u.accountKeyIndexes,
      data: or.encode(u.data)
    }));
    return new qn({
      header: n,
      accountKeys: o,
      recentBlockhash: t.recentBlockhash,
      instructions: c
    });
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures;
    if (t >= this.header.numRequiredSignatures) {
      const n = t - e, i = this.accountKeys.length - e - this.header.numReadonlyUnsignedAccounts;
      return n < i;
    } else {
      const n = e - this.header.numReadonlySignedAccounts;
      return t < n;
    }
  }
  isProgramId(t) {
    return this.indexToProgramIds.has(t);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((t, e) => !this.isProgramId(e));
  }
  serialize() {
    const t = this.accountKeys.length;
    let e = [];
    Kr(e, t);
    const n = this.instructions.map((B) => {
      const {
        accounts: C,
        programIdIndex: R
      } = B, O = Array.from(or.decode(B.data));
      let U = [];
      Kr(U, C.length);
      let T = [];
      return Kr(T, O.length), {
        programIdIndex: R,
        keyIndicesCount: ue.Buffer.from(U),
        keyIndices: C,
        dataLength: ue.Buffer.from(T),
        data: O
      };
    });
    let o = [];
    Kr(o, n.length);
    let i = ue.Buffer.alloc(Ro);
    ue.Buffer.from(o).copy(i);
    let c = o.length;
    n.forEach((B) => {
      const R = Ct([_e("programIdIndex"), Te(B.keyIndicesCount.length, "keyIndicesCount"), Ir(_e("keyIndex"), B.keyIndices.length, "keyIndices"), Te(B.dataLength.length, "dataLength"), Ir(_e("userdatum"), B.data.length, "data")]).encode(B, i, c);
      c += R;
    }), i = i.slice(0, c);
    const u = Ct([Te(1, "numRequiredSignatures"), Te(1, "numReadonlySignedAccounts"), Te(1, "numReadonlyUnsignedAccounts"), Te(e.length, "keyCount"), Ir(pe("key"), t, "keys"), pe("recentBlockhash")]), p = {
      numRequiredSignatures: ue.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: ue.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: ue.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: ue.Buffer.from(e),
      keys: this.accountKeys.map((B) => $o(B.toBytes())),
      recentBlockhash: or.decode(this.recentBlockhash)
    };
    let b = ue.Buffer.alloc(2048);
    const _ = u.encode(p, b);
    return i.copy(b, _), b.slice(0, _ + i.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(t) {
    let e = [...t];
    const n = e.shift();
    if (n !== (n & Tf))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const o = e.shift(), i = e.shift(), c = Hr(e);
    let u = [];
    for (let C = 0; C < c; C++) {
      const R = e.slice(0, Bn);
      e = e.slice(Bn), u.push(new Gt(ue.Buffer.from(R)));
    }
    const p = e.slice(0, Bn);
    e = e.slice(Bn);
    const b = Hr(e);
    let _ = [];
    for (let C = 0; C < b; C++) {
      const R = e.shift(), O = Hr(e), U = e.slice(0, O);
      e = e.slice(O);
      const T = Hr(e), P = e.slice(0, T), F = or.encode(ue.Buffer.from(P));
      e = e.slice(T), _.push({
        programIdIndex: R,
        accounts: U,
        data: F
      });
    }
    const B = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: o,
        numReadonlyUnsignedAccounts: i
      },
      recentBlockhash: or.encode(ue.Buffer.from(p)),
      accountKeys: u,
      instructions: _
    };
    return new qn(B);
  }
}
class bs {
  constructor(t) {
    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.addressTableLookups = t.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let t = 0;
    for (const e of this.addressTableLookups)
      t += e.readonlyIndexes.length + e.writableIndexes.length;
    return t;
  }
  getAccountKeys(t) {
    let e;
    if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length)
        throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
      e = t.accountKeysFromLookups;
    } else if (t && "addressLookupTableAccounts" in t && t.addressLookupTableAccounts)
      e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error("Failed to get account keys because address table lookups were not resolved");
    return new ya(this.staticAccountKeys, e);
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures, n = this.staticAccountKeys.length;
    if (t >= n) {
      const o = t - n, i = this.addressTableLookups.reduce((c, u) => c + u.writableIndexes.length, 0);
      return o < i;
    } else if (t >= this.header.numRequiredSignatures) {
      const o = t - e, c = n - e - this.header.numReadonlyUnsignedAccounts;
      return o < c;
    } else {
      const o = e - this.header.numReadonlySignedAccounts;
      return t < o;
    }
  }
  resolveAddressTableLookups(t) {
    const e = {
      writable: [],
      readonly: []
    };
    for (const n of this.addressTableLookups) {
      const o = t.find((i) => i.key.equals(n.accountKey));
      if (!o)
        throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
      for (const i of n.writableIndexes)
        if (i < o.state.addresses.length)
          e.writable.push(o.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
      for (const i of n.readonlyIndexes)
        if (i < o.state.addresses.length)
          e.readonly.push(o.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
    }
    return e;
  }
  static compile(t) {
    const e = za.compile(t.instructions, t.payerKey), n = new Array(), o = {
      writable: new Array(),
      readonly: new Array()
    }, i = t.addressLookupTableAccounts || [];
    for (const _ of i) {
      const B = e.extractTableLookup(_);
      if (B !== void 0) {
        const [C, {
          writable: R,
          readonly: O
        }] = B;
        n.push(C), o.writable.push(...R), o.readonly.push(...O);
      }
    }
    const [c, u] = e.getMessageComponents(), b = new ya(u, o).compileInstructions(t.instructions);
    return new bs({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: t.recentBlockhash,
      compiledInstructions: b,
      addressTableLookups: n
    });
  }
  serialize() {
    const t = Array();
    Kr(t, this.staticAccountKeys.length);
    const e = this.serializeInstructions(), n = Array();
    Kr(n, this.compiledInstructions.length);
    const o = this.serializeAddressTableLookups(), i = Array();
    Kr(i, this.addressTableLookups.length);
    const c = Ct([_e("prefix"), Ct([_e("numRequiredSignatures"), _e("numReadonlySignedAccounts"), _e("numReadonlyUnsignedAccounts")], "header"), Te(t.length, "staticAccountKeysLength"), Ir(pe(), this.staticAccountKeys.length, "staticAccountKeys"), pe("recentBlockhash"), Te(n.length, "instructionsLength"), Te(e.length, "serializedInstructions"), Te(i.length, "addressTableLookupsLength"), Te(o.length, "serializedAddressTableLookups")]), u = new Uint8Array(Ro), p = 128, b = c.encode({
      prefix: p,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(t),
      staticAccountKeys: this.staticAccountKeys.map((_) => _.toBytes()),
      recentBlockhash: or.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(n),
      serializedInstructions: e,
      addressTableLookupsLength: new Uint8Array(i),
      serializedAddressTableLookups: o
    }, u);
    return u.slice(0, b);
  }
  serializeInstructions() {
    let t = 0;
    const e = new Uint8Array(Ro);
    for (const n of this.compiledInstructions) {
      const o = Array();
      Kr(o, n.accountKeyIndexes.length);
      const i = Array();
      Kr(i, n.data.length);
      const c = Ct([_e("programIdIndex"), Te(o.length, "encodedAccountKeyIndexesLength"), Ir(_e(), n.accountKeyIndexes.length, "accountKeyIndexes"), Te(i.length, "encodedDataLength"), Te(n.data.length, "data")]);
      t += c.encode({
        programIdIndex: n.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(o),
        accountKeyIndexes: n.accountKeyIndexes,
        encodedDataLength: new Uint8Array(i),
        data: n.data
      }, e, t);
    }
    return e.slice(0, t);
  }
  serializeAddressTableLookups() {
    let t = 0;
    const e = new Uint8Array(Ro);
    for (const n of this.addressTableLookups) {
      const o = Array();
      Kr(o, n.writableIndexes.length);
      const i = Array();
      Kr(i, n.readonlyIndexes.length);
      const c = Ct([pe("accountKey"), Te(o.length, "encodedWritableIndexesLength"), Ir(_e(), n.writableIndexes.length, "writableIndexes"), Te(i.length, "encodedReadonlyIndexesLength"), Ir(_e(), n.readonlyIndexes.length, "readonlyIndexes")]);
      t += c.encode({
        accountKey: n.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(o),
        writableIndexes: n.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(i),
        readonlyIndexes: n.readonlyIndexes
      }, e, t);
    }
    return e.slice(0, t);
  }
  static deserialize(t) {
    let e = [...t];
    const n = e.shift(), o = n & Tf;
    Oe(n !== o, "Expected versioned message but received legacy message");
    const i = o;
    Oe(i === 0, `Expected versioned message with version 0 but found version ${i}`);
    const c = {
      numRequiredSignatures: e.shift(),
      numReadonlySignedAccounts: e.shift(),
      numReadonlyUnsignedAccounts: e.shift()
    }, u = [], p = Hr(e);
    for (let O = 0; O < p; O++)
      u.push(new Gt(e.splice(0, Bn)));
    const b = or.encode(e.splice(0, Bn)), _ = Hr(e), B = [];
    for (let O = 0; O < _; O++) {
      const U = e.shift(), T = Hr(e), P = e.splice(0, T), F = Hr(e), L = new Uint8Array(e.splice(0, F));
      B.push({
        programIdIndex: U,
        accountKeyIndexes: P,
        data: L
      });
    }
    const C = Hr(e), R = [];
    for (let O = 0; O < C; O++) {
      const U = new Gt(e.splice(0, Bn)), T = Hr(e), P = e.splice(0, T), F = Hr(e), L = e.splice(0, F);
      R.push({
        accountKey: U,
        writableIndexes: P,
        readonlyIndexes: L
      });
    }
    return new bs({
      header: c,
      staticAccountKeys: u,
      recentBlockhash: b,
      compiledInstructions: B,
      addressTableLookups: R
    });
  }
}
const Cf = {
  deserializeMessageVersion(r) {
    const t = r[0], e = t & Tf;
    return e === t ? "legacy" : e;
  },
  deserialize: (r) => {
    const t = Cf.deserializeMessageVersion(r);
    if (t === "legacy")
      return qn.from(r);
    if (t === 0)
      return bs.deserialize(r);
    throw new Error(`Transaction message version ${t} deserialization is not supported`);
  }
};
let ei = /* @__PURE__ */ function(r) {
  return r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", r[r.PROCESSED = 1] = "PROCESSED", r[r.TIMED_OUT = 2] = "TIMED_OUT", r[r.NONCE_INVALID = 3] = "NONCE_INVALID", r;
}({});
const km = ue.Buffer.alloc(Po).fill(0);
class Kl {
  constructor(t) {
    this.keys = void 0, this.programId = void 0, this.data = ue.Buffer.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data);
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey: t,
        isSigner: e,
        isWritable: n
      }) => ({
        pubkey: t.toJSON(),
        isSigner: e,
        isWritable: n
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}
class sn {
  /**
   * The first (payer) Transaction signature
   *
   * @returns {Buffer | null} Buffer of payer's signature
   */
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  /**
   * The transaction fee payer
   */
  // Construct a transaction with a blockhash and lastValidBlockHeight
  // Construct a transaction using a durable nonce
  /**
   * @deprecated `TransactionCtorFields` has been deprecated and will be removed in a future version.
   * Please supply a `TransactionBlockhashCtor` instead.
   */
  /**
   * Construct an empty Transaction
   */
  constructor(t) {
    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!t)
      if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "nonceInfo")) {
        const {
          minContextSlot: e,
          nonceInfo: n
        } = t;
        this.minNonceContextSlot = e, this.nonceInfo = n;
      } else if (Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
        const {
          blockhash: e,
          lastValidBlockHeight: n
        } = t;
        this.recentBlockhash = e, this.lastValidBlockHeight = n;
      } else {
        const {
          recentBlockhash: e,
          nonceInfo: n
        } = t;
        n && (this.nonceInfo = n), this.recentBlockhash = e;
      }
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo ? {
        nonce: this.nonceInfo.nonce,
        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
      } : null,
      instructions: this.instructions.map((t) => t.toJSON()),
      signers: this.signatures.map(({
        publicKey: t
      }) => t.toJSON())
    };
  }
  /**
   * Add one or more instructions to this Transaction
   *
   * @param {Array< Transaction | TransactionInstruction | TransactionInstructionCtorFields >} items - Instructions to add to the Transaction
   */
  add(...t) {
    if (t.length === 0)
      throw new Error("No instructions");
    return t.forEach((e) => {
      "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new Kl(e));
    }), this;
  }
  /**
   * Compile transaction data
   */
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let t, e;
    if (this.nonceInfo ? (t = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? e = [this.nonceInfo.nonceInstruction, ...this.instructions] : e = this.instructions) : (t = this.recentBlockhash, e = this.instructions), !t)
      throw new Error("Transaction recentBlockhash required");
    e.length < 1 && console.warn("No instructions provided");
    let n;
    if (this.feePayer)
      n = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      n = this.signatures[0].publicKey;
    else
      throw new Error("Transaction fee payer required");
    for (let U = 0; U < e.length; U++)
      if (e[U].programId === void 0)
        throw new Error(`Transaction instruction index ${U} has undefined program id`);
    const o = [], i = [];
    e.forEach((U) => {
      U.keys.forEach((P) => {
        i.push({
          ...P
        });
      });
      const T = U.programId.toString();
      o.includes(T) || o.push(T);
    }), o.forEach((U) => {
      i.push({
        pubkey: new Gt(U),
        isSigner: !1,
        isWritable: !1
      });
    });
    const c = [];
    i.forEach((U) => {
      const T = U.pubkey.toString(), P = c.findIndex((F) => F.pubkey.toString() === T);
      P > -1 ? (c[P].isWritable = c[P].isWritable || U.isWritable, c[P].isSigner = c[P].isSigner || U.isSigner) : c.push(U);
    }), c.sort(function(U, T) {
      if (U.isSigner !== T.isSigner)
        return U.isSigner ? -1 : 1;
      if (U.isWritable !== T.isWritable)
        return U.isWritable ? -1 : 1;
      const P = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: !1,
        numeric: !1,
        caseFirst: "lower"
      };
      return U.pubkey.toBase58().localeCompare(T.pubkey.toBase58(), "en", P);
    });
    const u = c.findIndex((U) => U.pubkey.equals(n));
    if (u > -1) {
      const [U] = c.splice(u, 1);
      U.isSigner = !0, U.isWritable = !0, c.unshift(U);
    } else
      c.unshift({
        pubkey: n,
        isSigner: !0,
        isWritable: !0
      });
    for (const U of this.signatures) {
      const T = c.findIndex((P) => P.pubkey.equals(U.publicKey));
      if (T > -1)
        c[T].isSigner || (c[T].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${U.publicKey.toString()}`);
    }
    let p = 0, b = 0, _ = 0;
    const B = [], C = [];
    c.forEach(({
      pubkey: U,
      isSigner: T,
      isWritable: P
    }) => {
      T ? (B.push(U.toString()), p += 1, P || (b += 1)) : (C.push(U.toString()), P || (_ += 1));
    });
    const R = B.concat(C), O = e.map((U) => {
      const {
        data: T,
        programId: P
      } = U;
      return {
        programIdIndex: R.indexOf(P.toString()),
        accounts: U.keys.map((F) => R.indexOf(F.pubkey.toString())),
        data: or.encode(T)
      };
    });
    return O.forEach((U) => {
      Oe(U.programIdIndex >= 0), U.accounts.forEach((T) => Oe(T >= 0));
    }), new qn({
      header: {
        numRequiredSignatures: p,
        numReadonlySignedAccounts: b,
        numReadonlyUnsignedAccounts: _
      },
      accountKeys: R,
      recentBlockhash: t,
      instructions: O
    });
  }
  /**
   * @internal
   */
  _compile() {
    const t = this.compileMessage(), e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
    return this.signatures.length === e.length && this.signatures.every((o, i) => e[i].equals(o.publicKey)) || (this.signatures = e.map((n) => ({
      signature: null,
      publicKey: n
    }))), t;
  }
  /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */
  serializeMessage() {
    return this._compile().serialize();
  }
  /**
   * Get the estimated fee associated with a transaction
   *
   * @param {Connection} connection Connection to RPC Endpoint.
   *
   * @returns {Promise<number | null>} The estimated fee for the transaction
   */
  async getEstimatedFee(t) {
    return (await t.getFeeForMessage(this.compileMessage())).value;
  }
  /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */
  setSigners(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set();
    this.signatures = t.filter((n) => {
      const o = n.toString();
      return e.has(o) ? !1 : (e.add(o), !0);
    }).map((n) => ({
      signature: null,
      publicKey: n
    }));
  }
  /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  sign(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set(), n = [];
    for (const i of t) {
      const c = i.publicKey.toString();
      e.has(c) || (e.add(c), n.push(i));
    }
    this.signatures = n.map((i) => ({
      signature: null,
      publicKey: i.publicKey
    }));
    const o = this._compile();
    this._partialSign(o, ...n);
  }
  /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  partialSign(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set(), n = [];
    for (const i of t) {
      const c = i.publicKey.toString();
      e.has(c) || (e.add(c), n.push(i));
    }
    const o = this._compile();
    this._partialSign(o, ...n);
  }
  /**
   * @internal
   */
  _partialSign(t, ...e) {
    const n = t.serialize();
    e.forEach((o) => {
      const i = md(n, o.secretKey);
      this._addSignature(o.publicKey, $o(i));
    });
  }
  /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * @param {PublicKey} pubkey Public key that will be added to the transaction.
   * @param {Buffer} signature An externally created signature to add to the transaction.
   */
  addSignature(t, e) {
    this._compile(), this._addSignature(t, e);
  }
  /**
   * @internal
   */
  _addSignature(t, e) {
    Oe(e.length === 64);
    const n = this.signatures.findIndex((o) => t.equals(o.publicKey));
    if (n < 0)
      throw new Error(`unknown signer: ${t.toString()}`);
    this.signatures[n].signature = ue.Buffer.from(e);
  }
  /**
   * Verify signatures of a Transaction
   * Optional parameter specifies if we're expecting a fully signed Transaction or a partially signed one.
   * If no boolean is provided, we expect a fully signed Transaction by default.
   *
   * @param {boolean} [requireAllSignatures=true] Require a fully signed Transaction
   */
  verifySignatures(t = !0) {
    return !this._getMessageSignednessErrors(this.serializeMessage(), t);
  }
  /**
   * @internal
   */
  _getMessageSignednessErrors(t, e) {
    const n = {};
    for (const {
      signature: o,
      publicKey: i
    } of this.signatures)
      o === null ? e && (n.missing || (n.missing = [])).push(i) : xm(o, t, i.toBytes()) || (n.invalid || (n.invalid = [])).push(i);
    return n.invalid || n.missing ? n : void 0;
  }
  /**
   * Serialize the Transaction in the wire format.
   *
   * @param {Buffer} [config] Config of transaction.
   *
   * @returns {Buffer} Signature of transaction in wire format.
   */
  serialize(t) {
    const {
      requireAllSignatures: e,
      verifySignatures: n
    } = Object.assign({
      requireAllSignatures: !0,
      verifySignatures: !0
    }, t), o = this.serializeMessage();
    if (n) {
      const i = this._getMessageSignednessErrors(o, e);
      if (i) {
        let c = "Signature verification failed.";
        throw i.invalid && (c += `
Invalid signature for public key${i.invalid.length === 1 ? "" : "(s)"} [\`${i.invalid.map((u) => u.toBase58()).join("`, `")}\`].`), i.missing && (c += `
Missing signature for public key${i.missing.length === 1 ? "" : "(s)"} [\`${i.missing.map((u) => u.toBase58()).join("`, `")}\`].`), new Error(c);
      }
    }
    return this._serialize(o);
  }
  /**
   * @internal
   */
  _serialize(t) {
    const {
      signatures: e
    } = this, n = [];
    Kr(n, e.length);
    const o = n.length + e.length * 64 + t.length, i = ue.Buffer.alloc(o);
    return Oe(e.length < 256), ue.Buffer.from(n).copy(i, 0), e.forEach(({
      signature: c
    }, u) => {
      c !== null && (Oe(c.length === 64, "signature has invalid length"), ue.Buffer.from(c).copy(i, n.length + u * 64));
    }), t.copy(i, n.length + e.length * 64), Oe(i.length <= Ro, `Transaction too large: ${i.length} > ${Ro}`), i;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    return Oe(this.instructions.length === 1), this.instructions[0].keys.map((t) => t.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    return Oe(this.instructions.length === 1), this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */
  get data() {
    return Oe(this.instructions.length === 1), this.instructions[0].data;
  }
  /**
   * Parse a wire transaction into a Transaction object.
   *
   * @param {Buffer | Uint8Array | Array<number>} buffer Signature of wire Transaction
   *
   * @returns {Transaction} Transaction associated with the signature
   */
  static from(t) {
    let e = [...t];
    const n = Hr(e);
    let o = [];
    for (let i = 0; i < n; i++) {
      const c = e.slice(0, Po);
      e = e.slice(Po), o.push(or.encode(ue.Buffer.from(c)));
    }
    return sn.populate(qn.from(e), o);
  }
  /**
   * Populate Transaction object from message and signatures
   *
   * @param {Message} message Message of transaction
   * @param {Array<string>} signatures List of signatures to assign to the transaction
   *
   * @returns {Transaction} The populated Transaction
   */
  static populate(t, e = []) {
    const n = new sn();
    return n.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (n.feePayer = t.accountKeys[0]), e.forEach((o, i) => {
      const c = {
        signature: o == or.encode(km) ? null : or.decode(o),
        publicKey: t.accountKeys[i]
      };
      n.signatures.push(c);
    }), t.instructions.forEach((o) => {
      const i = o.accounts.map((c) => {
        const u = t.accountKeys[c];
        return {
          pubkey: u,
          isSigner: n.signatures.some((p) => p.publicKey.toString() === u.toString()) || t.isAccountSigner(c),
          isWritable: t.isAccountWritable(c)
        };
      });
      n.instructions.push(new Kl({
        keys: i,
        programId: t.accountKeys[o.programIdIndex],
        data: or.decode(o.data)
      }));
    }), n._message = t, n._json = n.toJSON(), n;
  }
}
class vs {
  get version() {
    return this.message.version;
  }
  constructor(t, e) {
    if (this.signatures = void 0, this.message = void 0, e !== void 0)
      Oe(e.length === t.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = e;
    else {
      const n = [];
      for (let o = 0; o < t.header.numRequiredSignatures; o++)
        n.push(new Uint8Array(Po));
      this.signatures = n;
    }
    this.message = t;
  }
  serialize() {
    const t = this.message.serialize(), e = Array();
    Kr(e, this.signatures.length);
    const n = Ct([Te(e.length, "encodedSignaturesLength"), Ir(Bm(), this.signatures.length, "signatures"), Te(t.length, "serializedMessage")]), o = new Uint8Array(2048), i = n.encode({
      encodedSignaturesLength: new Uint8Array(e),
      signatures: this.signatures,
      serializedMessage: t
    }, o);
    return o.slice(0, i);
  }
  static deserialize(t) {
    let e = [...t];
    const n = [], o = Hr(e);
    for (let c = 0; c < o; c++)
      n.push(new Uint8Array(e.splice(0, Po)));
    const i = Cf.deserialize(new Uint8Array(e));
    return new vs(i, n);
  }
  sign(t) {
    const e = this.message.serialize(), n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    for (const o of t) {
      const i = n.findIndex((c) => c.equals(o.publicKey));
      Oe(i >= 0, `Cannot sign with non signer key ${o.publicKey.toBase58()}`), this.signatures[i] = md(e, o.secretKey);
    }
  }
  addSignature(t, e) {
    Oe(e.byteLength === 64, "Signature must be 64 bytes long");
    const o = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((i) => i.equals(t));
    Oe(o >= 0, `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`), this.signatures[o] = e;
  }
}
const Tm = 160, Cm = 64, Lm = Tm / Cm, Um = 1e3 / Lm;
new Gt("SysvarC1ock11111111111111111111111111111111");
new Gt("SysvarEpochSchedu1e111111111111111111111111");
new Gt("Sysvar1nstructions1111111111111111111111111");
new Gt("SysvarRecentB1ockHashes11111111111111111111");
new Gt("SysvarRent111111111111111111111111111111111");
new Gt("SysvarRewards111111111111111111111111111111");
new Gt("SysvarS1otHashes111111111111111111111111111");
new Gt("SysvarS1otHistory11111111111111111111111111");
new Gt("SysvarStakeHistory1111111111111111111111111");
function vo(r) {
  return new Promise((t) => setTimeout(t, r));
}
const Om = fr("lamportsPerSignature"), Ed = Ct([Dt("version"), Dt("state"), pe("authorizedPubkey"), pe("nonce"), Ct([Om], "feeCalculator")]);
Ed.span;
class Lf {
  /**
   * @internal
   */
  constructor(t) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator;
  }
  /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */
  static fromAccountData(t) {
    const e = Ed.decode($o(t), 0);
    return new Lf({
      authorizedPubkey: new Gt(e.authorizedPubkey),
      nonce: new Gt(e.nonce).toString(),
      feeCalculator: e.feeCalculator
    });
  }
}
const Fm = (r) => {
  const t = r.decode.bind(r), e = r.encode.bind(r);
  return {
    decode: t,
    encode: e
  };
}, Nm = (r) => (t) => {
  const e = Te(r, t), {
    encode: n,
    decode: o
  } = Fm(e), i = e;
  return i.decode = (c, u) => {
    const p = o(c, u);
    return py(ue.Buffer.from(p));
  }, i.encode = (c, u, p) => {
    const b = my(c, r);
    return n(b, u, p);
  }, i;
}, Do = Nm(8);
Object.freeze({
  Create: {
    index: 0,
    layout: Ct([Dt("instruction"), jr("lamports"), jr("space"), pe("programId")])
  },
  Assign: {
    index: 1,
    layout: Ct([Dt("instruction"), pe("programId")])
  },
  Transfer: {
    index: 2,
    layout: Ct([Dt("instruction"), Do("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: Ct([Dt("instruction"), pe("base"), Eo("seed"), jr("lamports"), jr("space"), pe("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: Ct([Dt("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: Ct([Dt("instruction"), jr("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: Ct([Dt("instruction"), pe("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: Ct([Dt("instruction"), pe("authorized")])
  },
  Allocate: {
    index: 8,
    layout: Ct([Dt("instruction"), jr("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: Ct([Dt("instruction"), pe("base"), Eo("seed"), jr("space"), pe("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: Ct([Dt("instruction"), pe("base"), Eo("seed"), pe("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: Ct([Dt("instruction"), Do("lamports"), Eo("seed"), pe("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: Ct([Dt("instruction")])
  }
});
new Gt("11111111111111111111111111111111");
new Gt("BPFLoader2111111111111111111111111111111111");
function $m(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Pm = Object.prototype.toString, Dm = Object.keys || function(r) {
  var t = [];
  for (var e in r)
    t.push(e);
  return t;
};
function cs(r, t) {
  var e, n, o, i, c, u, p;
  if (r === !0)
    return "true";
  if (r === !1)
    return "false";
  switch (typeof r) {
    case "object":
      if (r === null)
        return null;
      if (r.toJSON && typeof r.toJSON == "function")
        return cs(r.toJSON(), t);
      if (p = Pm.call(r), p === "[object Array]") {
        for (o = "[", n = r.length - 1, e = 0; e < n; e++)
          o += cs(r[e], !0) + ",";
        return n > -1 && (o += cs(r[e], !0)), o + "]";
      } else if (p === "[object Object]") {
        for (i = Dm(r).sort(), n = i.length, o = "", e = 0; e < n; )
          c = i[e], u = cs(r[c], !1), u !== void 0 && (o && (o += ","), o += JSON.stringify(c) + ":" + u), e++;
        return "{" + o + "}";
      } else
        return JSON.stringify(r);
    case "function":
    case "undefined":
      return t ? null : void 0;
    case "string":
      return JSON.stringify(r);
    default:
      return isFinite(r) ? r : null;
  }
}
var zm = function(r) {
  var t = cs(r, !1);
  if (t !== void 0)
    return "" + t;
}, Gl = /* @__PURE__ */ $m(zm);
const es = 32;
function Uc(r) {
  let t = 0;
  for (; r > 1; )
    r /= 2, t++;
  return t;
}
function qm(r) {
  return r === 0 ? 1 : (r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r |= r >> 32, r + 1);
}
class Wm {
  constructor(t, e, n, o, i) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = n, this.firstNormalEpoch = o, this.firstNormalSlot = i;
  }
  getEpoch(t) {
    return this.getEpochAndSlotIndex(t)[0];
  }
  getEpochAndSlotIndex(t) {
    if (t < this.firstNormalSlot) {
      const e = Uc(qm(t + es + 1)) - Uc(es) - 1, n = this.getSlotsInEpoch(e), o = t - (n - es);
      return [e, o];
    } else {
      const e = t - this.firstNormalSlot, n = Math.floor(e / this.slotsPerEpoch), o = this.firstNormalEpoch + n, i = e % this.slotsPerEpoch;
      return [o, i];
    }
  }
  getFirstSlotInEpoch(t) {
    return t <= this.firstNormalEpoch ? (Math.pow(2, t) - 1) * es : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(t) {
    return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1;
  }
  getSlotsInEpoch(t) {
    return t < this.firstNormalEpoch ? Math.pow(2, t + Uc(es)) : this.slotsPerEpoch;
  }
}
class Vl extends Error {
  constructor(t, e) {
    super(t), this.logs = void 0, this.logs = e;
  }
}
class Ut extends Error {
  constructor({
    code: t,
    message: e,
    data: n
  }, o) {
    super(o != null ? `${o}: ${e}` : e), this.code = void 0, this.data = void 0, this.code = t, this.data = n, this.name = "SolanaJSONRPCError";
  }
}
var jm = globalThis.fetch;
class Hm extends um {
  constructor(t, e, n) {
    const o = (i) => {
      const c = fm(i, {
        autoconnect: !0,
        max_reconnects: 5,
        reconnect: !0,
        reconnect_interval: 1e3,
        ...e
      });
      return "socket" in c ? this.underlyingSocket = c.socket : this.underlyingSocket = c, c;
    };
    super(o, t, e, n), this.underlyingSocket = void 0;
  }
  call(...t) {
    var n;
    const e = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return e === 1 ? super.call(...t) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"));
  }
  notify(...t) {
    var n;
    const e = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return e === 1 ? super.notify(...t) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"));
  }
}
function Km(r, t) {
  let e;
  try {
    e = r.layout.decode(t);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (e.typeIndex !== r.index)
    throw new Error(`invalid account data; account type mismatch ${e.typeIndex} != ${r.index}`);
  return e;
}
const Zl = 56;
class Yl {
  constructor(t) {
    this.key = void 0, this.state = void 0, this.key = t.key, this.state = t.state;
  }
  isActive() {
    const t = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === t;
  }
  static deserialize(t) {
    const e = Km(Gm, t), n = t.length - Zl;
    Oe(n >= 0, "lookup table is invalid"), Oe(n % 32 === 0, "lookup table is invalid");
    const o = n / 32, {
      addresses: i
    } = Ct([Ir(pe(), o, "addresses")]).decode(t.slice(Zl));
    return {
      deactivationSlot: e.deactivationSlot,
      lastExtendedSlot: e.lastExtendedSlot,
      lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
      authority: e.authority.length !== 0 ? new Gt(e.authority[0]) : void 0,
      addresses: i.map((c) => new Gt(c))
    };
  }
}
const Gm = {
  index: 1,
  layout: Ct([
    Dt("typeIndex"),
    Do("deactivationSlot"),
    fr("lastExtendedSlot"),
    _e("lastExtendedStartIndex"),
    _e(),
    // option
    Ir(pe(), Vi(_e(), -1), "authority")
  ])
}, Vm = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function Zm(r) {
  const t = r.match(Vm);
  if (t == null)
    throw TypeError(`Failed to validate endpoint URL \`${r}\``);
  const [
    e,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    n,
    o,
    i
  ] = t, c = r.startsWith("https:") ? "wss:" : "ws:", u = o == null ? null : parseInt(o.slice(1), 10), p = (
    // Only shift the port by +1 as a convention for ws(s) only if given endpoint
    // is explicitly specifying the endpoint port (HTTP-based RPC), assuming
    // we're directly trying to connect to solana-validator's ws listening port.
    // When the endpoint omits the port, we're connecting to the protocol
    // default ports: http(80) or https(443) and it's assumed we're behind a reverse
    // proxy which manages WebSocket upgrade and backend port redirection.
    u == null ? "" : `:${u + 1}`
  );
  return `${c}//${n}${p}${i}`;
}
const Je = Rs(Sf(Gt), pt(), (r) => new Gt(r)), _d = Bf([pt(), Pe("base64")]), Uf = Rs(Sf(ue.Buffer), _d, (r) => ue.Buffer.from(r[0], "base64")), Ym = 30 * 1e3;
function Xm(r) {
  if (/^https?:/.test(r) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return r;
}
function Le(r) {
  let t, e;
  if (typeof r == "string")
    t = r;
  else if (r) {
    const {
      commitment: n,
      ...o
    } = r;
    t = n, e = o;
  }
  return {
    commitment: t,
    config: e
  };
}
function Sd(r) {
  return Pr([at({
    jsonrpc: Pe("2.0"),
    id: pt(),
    result: r
  }), at({
    jsonrpc: Pe("2.0"),
    id: pt(),
    error: at({
      code: Ms(),
      message: pt(),
      data: jt(By())
    })
  })]);
}
const Jm = Sd(Ms());
function le(r) {
  return Rs(Sd(r), Jm, (t) => "error" in t ? t : {
    ...t,
    result: gt(t.result, r)
  });
}
function je(r) {
  return le(at({
    context: at({
      slot: G()
    }),
    value: r
  }));
}
function qa(r) {
  return at({
    context: at({
      slot: G()
    }),
    value: r
  });
}
function Oc(r, t) {
  return r === 0 ? new bs({
    header: t.header,
    staticAccountKeys: t.accountKeys.map((e) => new Gt(e)),
    recentBlockhash: t.recentBlockhash,
    compiledInstructions: t.instructions.map((e) => ({
      programIdIndex: e.programIdIndex,
      accountKeyIndexes: e.accounts,
      data: or.decode(e.data)
    })),
    addressTableLookups: t.addressTableLookups
  }) : new qn(t);
}
const Qm = at({
  foundation: G(),
  foundationTerm: G(),
  initial: G(),
  taper: G(),
  terminal: G()
}), tw = le(Et(xt(at({
  epoch: G(),
  effectiveSlot: G(),
  amount: G(),
  postBalance: G(),
  commission: jt(xt(G()))
})))), ew = Et(at({
  slot: G(),
  prioritizationFee: G()
})), rw = at({
  total: G(),
  validator: G(),
  foundation: G(),
  epoch: G()
}), nw = at({
  epoch: G(),
  slotIndex: G(),
  slotsInEpoch: G(),
  absoluteSlot: G(),
  blockHeight: jt(G()),
  transactionCount: jt(G())
}), iw = at({
  slotsPerEpoch: G(),
  leaderScheduleSlotOffset: G(),
  warmup: Mn(),
  firstNormalEpoch: G(),
  firstNormalSlot: G()
}), ow = rd(pt(), Et(G())), io = xt(Pr([at({}), pt()])), sw = at({
  err: io
}), aw = Pe("receivedSignature"), cw = at({
  "solana-core": pt(),
  "feature-set": jt(G())
}), Xl = je(at({
  err: xt(Pr([at({}), pt()])),
  logs: xt(Et(pt())),
  accounts: jt(xt(Et(xt(at({
    executable: Mn(),
    owner: pt(),
    lamports: G(),
    data: Et(pt()),
    rentEpoch: jt(G())
  }))))),
  unitsConsumed: jt(G()),
  returnData: jt(xt(at({
    programId: pt(),
    data: Bf([pt(), Pe("base64")])
  })))
})), uw = je(at({
  byIdentity: rd(pt(), Et(G())),
  range: at({
    firstSlot: G(),
    lastSlot: G()
  })
}));
function fw(r, t, e, n, o, i) {
  const c = e || jm;
  let u;
  i != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
  let p;
  return n && (p = async (_, B) => {
    const C = await new Promise((R, O) => {
      try {
        n(_, B, (U, T) => R([U, T]));
      } catch (U) {
        O(U);
      }
    });
    return await c(...C);
  }), new tm(async (_, B) => {
    const C = {
      method: "POST",
      body: _,
      agent: u,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, t || {}, lb)
    };
    try {
      let R = 5, O, U = 500;
      for (; p ? O = await p(r, C) : O = await c(r, C), !(O.status !== 429 || o === !0 || (R -= 1, R === 0)); )
        console.error(`Server responded with ${O.status} ${O.statusText}.  Retrying after ${U}ms delay...`), await vo(U), U *= 2;
      const T = await O.text();
      O.ok ? B(null, T) : B(new Error(`${O.status} ${O.statusText}: ${T}`));
    } catch (R) {
      R instanceof Error && B(R);
    }
  }, {});
}
function lw(r) {
  return (t, e) => new Promise((n, o) => {
    r.request(t, e, (i, c) => {
      if (i) {
        o(i);
        return;
      }
      n(c);
    });
  });
}
function hw(r) {
  return (t) => new Promise((e, n) => {
    t.length === 0 && e([]);
    const o = t.map((i) => r.request(i.methodName, i.args));
    r.request(o, (i, c) => {
      if (i) {
        n(i);
        return;
      }
      e(c);
    });
  });
}
const dw = le(Qm), pw = le(rw), gw = le(ew), yw = le(nw), mw = le(iw), ww = le(ow), bw = le(G()), vw = je(at({
  total: G(),
  circulating: G(),
  nonCirculating: G(),
  nonCirculatingAccounts: Et(Je)
})), Cu = at({
  amount: pt(),
  uiAmount: xt(G()),
  decimals: G(),
  uiAmountString: jt(pt())
}), xw = je(Et(at({
  address: Je,
  amount: pt(),
  uiAmount: xt(G()),
  decimals: G(),
  uiAmountString: jt(pt())
}))), Ew = je(Et(at({
  pubkey: Je,
  account: at({
    executable: Mn(),
    owner: Je,
    lamports: G(),
    data: Uf,
    rentEpoch: G()
  })
}))), Lu = at({
  program: pt(),
  parsed: Ms(),
  space: G()
}), _w = je(Et(at({
  pubkey: Je,
  account: at({
    executable: Mn(),
    owner: Je,
    lamports: G(),
    data: Lu,
    rentEpoch: G()
  })
}))), Sw = je(Et(at({
  lamports: G(),
  address: Je
}))), xs = at({
  executable: Mn(),
  owner: Je,
  lamports: G(),
  data: Uf,
  rentEpoch: G()
}), Bw = at({
  pubkey: Je,
  account: xs
}), Aw = Rs(Pr([Sf(ue.Buffer), Lu]), Pr([_d, Lu]), (r) => Array.isArray(r) ? gt(r, Uf) : r), Uu = at({
  executable: Mn(),
  owner: Je,
  lamports: G(),
  data: Aw,
  rentEpoch: G()
}), Iw = at({
  pubkey: Je,
  account: Uu
}), Mw = at({
  state: Pr([Pe("active"), Pe("inactive"), Pe("activating"), Pe("deactivating")]),
  active: G(),
  inactive: G()
}), Rw = le(Et(at({
  signature: pt(),
  slot: G(),
  err: io,
  memo: xt(pt()),
  blockTime: jt(xt(G()))
}))), kw = le(Et(at({
  signature: pt(),
  slot: G(),
  err: io,
  memo: xt(pt()),
  blockTime: jt(xt(G()))
}))), Tw = at({
  subscription: G(),
  result: qa(xs)
}), Cw = at({
  pubkey: Je,
  account: xs
}), Lw = at({
  subscription: G(),
  result: qa(Cw)
}), Uw = at({
  parent: G(),
  slot: G(),
  root: G()
}), Ow = at({
  subscription: G(),
  result: Uw
}), Fw = Pr([at({
  type: Pr([Pe("firstShredReceived"), Pe("completed"), Pe("optimisticConfirmation"), Pe("root")]),
  slot: G(),
  timestamp: G()
}), at({
  type: Pe("createdBank"),
  parent: G(),
  slot: G(),
  timestamp: G()
}), at({
  type: Pe("frozen"),
  slot: G(),
  timestamp: G(),
  stats: at({
    numTransactionEntries: G(),
    numSuccessfulTransactions: G(),
    numFailedTransactions: G(),
    maxTransactionsPerEntry: G()
  })
}), at({
  type: Pe("dead"),
  slot: G(),
  timestamp: G(),
  err: pt()
})]), Nw = at({
  subscription: G(),
  result: Fw
}), $w = at({
  subscription: G(),
  result: qa(Pr([sw, aw]))
}), Pw = at({
  subscription: G(),
  result: G()
}), Dw = at({
  pubkey: pt(),
  gossip: xt(pt()),
  tpu: xt(pt()),
  rpc: xt(pt()),
  version: xt(pt())
}), Jl = at({
  votePubkey: pt(),
  nodePubkey: pt(),
  activatedStake: G(),
  epochVoteAccount: Mn(),
  epochCredits: Et(Bf([G(), G(), G()])),
  commission: G(),
  lastVote: G(),
  rootSlot: xt(G())
}), zw = le(at({
  current: Et(Jl),
  delinquent: Et(Jl)
})), qw = Pr([Pe("processed"), Pe("confirmed"), Pe("finalized")]), Ww = at({
  slot: G(),
  confirmations: xt(G()),
  err: io,
  confirmationStatus: jt(qw)
}), jw = je(Et(xt(Ww))), Hw = le(G()), Bd = at({
  accountKey: Je,
  writableIndexes: Et(G()),
  readonlyIndexes: Et(G())
}), Of = at({
  signatures: Et(pt()),
  message: at({
    accountKeys: Et(pt()),
    header: at({
      numRequiredSignatures: G(),
      numReadonlySignedAccounts: G(),
      numReadonlyUnsignedAccounts: G()
    }),
    instructions: Et(at({
      accounts: Et(G()),
      data: pt(),
      programIdIndex: G()
    })),
    recentBlockhash: pt(),
    addressTableLookups: jt(Et(Bd))
  })
}), Ad = at({
  pubkey: Je,
  signer: Mn(),
  writable: Mn(),
  source: jt(Pr([Pe("transaction"), Pe("lookupTable")]))
}), Id = at({
  accountKeys: Et(Ad),
  signatures: Et(pt())
}), Md = at({
  parsed: Ms(),
  program: pt(),
  programId: Je
}), Rd = at({
  accounts: Et(Je),
  data: pt(),
  programId: Je
}), Kw = Pr([Rd, Md]), Gw = Pr([at({
  parsed: Ms(),
  program: pt(),
  programId: pt()
}), at({
  accounts: Et(pt()),
  data: pt(),
  programId: pt()
})]), kd = Rs(Kw, Gw, (r) => "accounts" in r ? gt(r, Rd) : gt(r, Md)), Td = at({
  signatures: Et(pt()),
  message: at({
    accountKeys: Et(Ad),
    instructions: Et(kd),
    recentBlockhash: pt(),
    addressTableLookups: jt(xt(Et(Bd)))
  })
}), ma = at({
  accountIndex: G(),
  mint: pt(),
  owner: jt(pt()),
  uiTokenAmount: Cu
}), Cd = at({
  writable: Et(Je),
  readonly: Et(Je)
}), Wa = at({
  err: io,
  fee: G(),
  innerInstructions: jt(xt(Et(at({
    index: G(),
    instructions: Et(at({
      accounts: Et(G()),
      data: pt(),
      programIdIndex: G()
    }))
  })))),
  preBalances: Et(G()),
  postBalances: Et(G()),
  logMessages: jt(xt(Et(pt()))),
  preTokenBalances: jt(xt(Et(ma))),
  postTokenBalances: jt(xt(Et(ma))),
  loadedAddresses: jt(Cd),
  computeUnitsConsumed: jt(G())
}), Ff = at({
  err: io,
  fee: G(),
  innerInstructions: jt(xt(Et(at({
    index: G(),
    instructions: Et(kd)
  })))),
  preBalances: Et(G()),
  postBalances: Et(G()),
  logMessages: jt(xt(Et(pt()))),
  preTokenBalances: jt(xt(Et(ma))),
  postTokenBalances: jt(xt(Et(ma))),
  loadedAddresses: jt(Cd),
  computeUnitsConsumed: jt(G())
}), Zo = Pr([Pe(0), Pe("legacy")]), oo = at({
  pubkey: pt(),
  lamports: G(),
  postBalance: xt(G()),
  rewardType: xt(pt()),
  commission: jt(xt(G()))
}), Vw = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  transactions: Et(at({
    transaction: Of,
    meta: xt(Wa),
    version: jt(Zo)
  })),
  rewards: jt(Et(oo)),
  blockTime: xt(G()),
  blockHeight: xt(G())
}))), Zw = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  rewards: jt(Et(oo)),
  blockTime: xt(G()),
  blockHeight: xt(G())
}))), Yw = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  transactions: Et(at({
    transaction: Id,
    meta: xt(Wa),
    version: jt(Zo)
  })),
  rewards: jt(Et(oo)),
  blockTime: xt(G()),
  blockHeight: xt(G())
}))), Xw = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  transactions: Et(at({
    transaction: Td,
    meta: xt(Ff),
    version: jt(Zo)
  })),
  rewards: jt(Et(oo)),
  blockTime: xt(G()),
  blockHeight: xt(G())
}))), Jw = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  transactions: Et(at({
    transaction: Id,
    meta: xt(Ff),
    version: jt(Zo)
  })),
  rewards: jt(Et(oo)),
  blockTime: xt(G()),
  blockHeight: xt(G())
}))), Qw = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  rewards: jt(Et(oo)),
  blockTime: xt(G()),
  blockHeight: xt(G())
}))), tb = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  transactions: Et(at({
    transaction: Of,
    meta: xt(Wa)
  })),
  rewards: jt(Et(oo)),
  blockTime: xt(G())
}))), Ql = le(xt(at({
  blockhash: pt(),
  previousBlockhash: pt(),
  parentSlot: G(),
  signatures: Et(pt()),
  blockTime: xt(G())
}))), Fc = le(xt(at({
  slot: G(),
  meta: xt(Wa),
  blockTime: jt(xt(G())),
  transaction: Of,
  version: jt(Zo)
}))), Ws = le(xt(at({
  slot: G(),
  transaction: Td,
  meta: xt(Ff),
  blockTime: jt(xt(G())),
  version: jt(Zo)
}))), eb = je(at({
  blockhash: pt(),
  feeCalculator: at({
    lamportsPerSignature: G()
  })
})), rb = je(at({
  blockhash: pt(),
  lastValidBlockHeight: G()
})), nb = je(Mn()), ib = at({
  slot: G(),
  numTransactions: G(),
  numSlots: G(),
  samplePeriodSecs: G()
}), ob = le(Et(ib)), sb = je(xt(at({
  feeCalculator: at({
    lamportsPerSignature: G()
  })
}))), ab = le(pt()), cb = le(pt()), ub = at({
  err: io,
  logs: Et(pt()),
  signature: pt()
}), fb = at({
  result: qa(ub),
  subscription: G()
}), lb = {
  "solana-client": "js/0.0.0-development"
};
class hb {
  /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */
  constructor(t, e) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = (() => {
      const b = {};
      return async (_) => {
        const {
          commitment: B,
          config: C
        } = Le(_), R = this._buildArgs([], B, void 0, C), O = Gl(R);
        return b[O] = b[O] ?? (async () => {
          try {
            const U = await this._rpcRequest("getBlockHeight", R), T = gt(U, le(G()));
            if ("error" in T)
              throw new Ut(T.error, "failed to get block height information");
            return T.result;
          } finally {
            delete b[O];
          }
        })(), await b[O];
      };
    })();
    let n, o, i, c, u, p;
    e && typeof e == "string" ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, n = e.wsEndpoint, o = e.httpHeaders, i = e.fetch, c = e.fetchMiddleware, u = e.disableRetryOnRateLimit, p = e.httpAgent), this._rpcEndpoint = Xm(t), this._rpcWsEndpoint = n || Zm(t), this._rpcClient = fw(t, o, i, c, u, p), this._rpcRequest = lw(this._rpcClient), this._rpcBatchRequest = hw(this._rpcClient), this._rpcWebSocket = new Hm(this._rpcWsEndpoint, {
      autoconnect: !1,
      max_reconnects: 1 / 0
    }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
  }
  /**
   * The default commitment used for requests
   */
  get commitment() {
    return this._commitment;
  }
  /**
   * The RPC endpoint
   */
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  /**
   * Fetch the balance for the specified public key, return with context
   */
  async getBalanceAndContext(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgs([t.toBase58()], n, void 0, o), c = await this._rpcRequest("getBalance", i), u = gt(c, je(G()));
    if ("error" in u)
      throw new Ut(u.error, `failed to get balance for ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch the balance for the specified public key
   */
  async getBalance(t, e) {
    return await this.getBalanceAndContext(t, e).then((n) => n.value).catch((n) => {
      throw new Error("failed to get balance of account " + t.toBase58() + ": " + n);
    });
  }
  /**
   * Fetch the estimated production time of a block
   */
  async getBlockTime(t) {
    const e = await this._rpcRequest("getBlockTime", [t]), n = gt(e, le(xt(G())));
    if ("error" in n)
      throw new Ut(n.error, `failed to get block time for slot ${t}`);
    return n.result;
  }
  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */
  async getMinimumLedgerSlot() {
    const t = await this._rpcRequest("minimumLedgerSlot", []), e = gt(t, le(G()));
    if ("error" in e)
      throw new Ut(e.error, "failed to get minimum ledger slot");
    return e.result;
  }
  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */
  async getFirstAvailableBlock() {
    const t = await this._rpcRequest("getFirstAvailableBlock", []), e = gt(t, bw);
    if ("error" in e)
      throw new Ut(e.error, "failed to get first available block");
    return e.result;
  }
  /**
   * Fetch information about the current supply
   */
  async getSupply(t) {
    let e = {};
    typeof t == "string" ? e = {
      commitment: t
    } : t ? e = {
      ...t,
      commitment: t && t.commitment || this.commitment
    } : e = {
      commitment: this.commitment
    };
    const n = await this._rpcRequest("getSupply", [e]), o = gt(n, vw);
    if ("error" in o)
      throw new Ut(o.error, "failed to get supply");
    return o.result;
  }
  /**
   * Fetch the current supply of a token mint
   */
  async getTokenSupply(t, e) {
    const n = this._buildArgs([t.toBase58()], e), o = await this._rpcRequest("getTokenSupply", n), i = gt(o, je(Cu));
    if ("error" in i)
      throw new Ut(i.error, "failed to get token supply");
    return i.result;
  }
  /**
   * Fetch the current balance of a token account
   */
  async getTokenAccountBalance(t, e) {
    const n = this._buildArgs([t.toBase58()], e), o = await this._rpcRequest("getTokenAccountBalance", n), i = gt(o, je(Cu));
    if ("error" in i)
      throw new Ut(i.error, "failed to get token account balance");
    return i.result;
  }
  /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<GetProgramAccountsResponse>}
   */
  async getTokenAccountsByOwner(t, e, n) {
    const {
      commitment: o,
      config: i
    } = Le(n);
    let c = [t.toBase58()];
    "mint" in e ? c.push({
      mint: e.mint.toBase58()
    }) : c.push({
      programId: e.programId.toBase58()
    });
    const u = this._buildArgs(c, o, "base64", i), p = await this._rpcRequest("getTokenAccountsByOwner", u), b = gt(p, Ew);
    if ("error" in b)
      throw new Ut(b.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return b.result;
  }
  /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */
  async getParsedTokenAccountsByOwner(t, e, n) {
    let o = [t.toBase58()];
    "mint" in e ? o.push({
      mint: e.mint.toBase58()
    }) : o.push({
      programId: e.programId.toBase58()
    });
    const i = this._buildArgs(o, n, "jsonParsed"), c = await this._rpcRequest("getTokenAccountsByOwner", i), u = gt(c, _w);
    if ("error" in u)
      throw new Ut(u.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch the 20 largest accounts with their current balances
   */
  async getLargestAccounts(t) {
    const e = {
      ...t,
      commitment: t && t.commitment || this.commitment
    }, n = e.filter || e.commitment ? [e] : [], o = await this._rpcRequest("getLargestAccounts", n), i = gt(o, Sw);
    if ("error" in i)
      throw new Ut(i.error, "failed to get largest accounts");
    return i.result;
  }
  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */
  async getTokenLargestAccounts(t, e) {
    const n = this._buildArgs([t.toBase58()], e), o = await this._rpcRequest("getTokenLargestAccounts", n), i = gt(o, xw);
    if ("error" in i)
      throw new Ut(i.error, "failed to get token largest accounts");
    return i.result;
  }
  /**
   * Fetch all the account info for the specified public key, return with context
   */
  async getAccountInfoAndContext(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgs([t.toBase58()], n, "base64", o), c = await this._rpcRequest("getAccountInfo", i), u = gt(c, je(xt(xs)));
    if ("error" in u)
      throw new Ut(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch parsed account info for the specified public key
   */
  async getParsedAccountInfo(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgs([t.toBase58()], n, "jsonParsed", o), c = await this._rpcRequest("getAccountInfo", i), u = gt(c, je(xt(Uu)));
    if ("error" in u)
      throw new Ut(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch all the account info for the specified public key
   */
  async getAccountInfo(t, e) {
    try {
      return (await this.getAccountInfoAndContext(t, e)).value;
    } catch (n) {
      throw new Error("failed to get info about account " + t.toBase58() + ": " + n);
    }
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleParsedAccounts(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = t.map((b) => b.toBase58()), c = this._buildArgs([i], n, "jsonParsed", o), u = await this._rpcRequest("getMultipleAccounts", c), p = gt(u, je(Et(xt(Uu))));
    if ("error" in p)
      throw new Ut(p.error, `failed to get info for accounts ${i}`);
    return p.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleAccountsInfoAndContext(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = t.map((b) => b.toBase58()), c = this._buildArgs([i], n, "base64", o), u = await this._rpcRequest("getMultipleAccounts", c), p = gt(u, je(Et(xt(xs))));
    if ("error" in p)
      throw new Ut(p.error, `failed to get info for accounts ${i}`);
    return p.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */
  async getMultipleAccountsInfo(t, e) {
    return (await this.getMultipleAccountsInfoAndContext(t, e)).value;
  }
  /**
   * Returns epoch activation information for a stake account that has been delegated
   */
  async getStakeActivation(t, e, n) {
    const {
      commitment: o,
      config: i
    } = Le(e), c = this._buildArgs([t.toBase58()], o, void 0, {
      ...i,
      epoch: n ?? (i == null ? void 0 : i.epoch)
    }), u = await this._rpcRequest("getStakeActivation", c), p = gt(u, le(Mw));
    if ("error" in p)
      throw new Ut(p.error, `failed to get Stake Activation ${t.toBase58()}`);
    return p.result;
  }
  /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getProgramAccounts(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), {
      encoding: i,
      ...c
    } = o || {}, u = this._buildArgs([t.toBase58()], n, i || "base64", c), p = await this._rpcRequest("getProgramAccounts", u), b = Et(Bw), _ = c.withContext === !0 ? gt(p, je(b)) : gt(p, le(b));
    if ("error" in _)
      throw new Ut(_.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return _.result;
  }
  /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */
  async getParsedProgramAccounts(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgs([t.toBase58()], n, "jsonParsed", o), c = await this._rpcRequest("getProgramAccounts", i), u = gt(c, le(Et(Iw)));
    if ("error" in u)
      throw new Ut(u.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return u.result;
  }
  /** @deprecated Instead, call `confirmTransaction` and pass in {@link TransactionConfirmationStrategy} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async confirmTransaction(t, e) {
    var i;
    let n;
    if (typeof t == "string")
      n = t;
    else {
      const c = t;
      if ((i = c.abortSignal) != null && i.aborted)
        return Promise.reject(c.abortSignal.reason);
      n = c.signature;
    }
    let o;
    try {
      o = or.decode(n);
    } catch {
      throw new Error("signature must be base58 encoded: " + n);
    }
    return Oe(o.length === 64, "signature has invalid length"), typeof t == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
      commitment: e || this.commitment,
      signature: n
    }) : "lastValidBlockHeight" in t ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
      commitment: e || this.commitment,
      strategy: t
    }) : await this.confirmTransactionUsingDurableNonceStrategy({
      commitment: e || this.commitment,
      strategy: t
    });
  }
  getCancellationPromise(t) {
    return new Promise((e, n) => {
      t != null && (t.aborted ? n(t.reason) : t.addEventListener("abort", () => {
        n(t.reason);
      }));
    });
  }
  getTransactionConfirmationPromise({
    commitment: t,
    signature: e
  }) {
    let n, o, i = !1;
    const c = new Promise((p, b) => {
      try {
        n = this.onSignature(e, (B, C) => {
          n = void 0;
          const R = {
            context: C,
            value: B
          };
          p({
            __type: ei.PROCESSED,
            response: R
          });
        }, t);
        const _ = new Promise((B) => {
          n == null ? B() : o = this._onSubscriptionStateChange(n, (C) => {
            C === "subscribed" && B();
          });
        });
        (async () => {
          if (await _, i)
            return;
          const B = await this.getSignatureStatus(e);
          if (i || B == null)
            return;
          const {
            context: C,
            value: R
          } = B;
          if (R != null)
            if (R != null && R.err)
              b(R.err);
            else {
              switch (t) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (R.confirmationStatus === "processed")
                    return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (R.confirmationStatus === "processed" || R.confirmationStatus === "confirmed")
                    return;
                  break;
                }
                case "processed":
                case "recent":
              }
              i = !0, p({
                __type: ei.PROCESSED,
                response: {
                  context: C,
                  value: R
                }
              });
            }
        })();
      } catch (_) {
        b(_);
      }
    });
    return {
      abortConfirmation: () => {
        o && (o(), o = void 0), n != null && (this.removeSignatureListener(n), n = void 0);
      },
      confirmationPromise: c
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment: t,
    strategy: {
      abortSignal: e,
      lastValidBlockHeight: n,
      signature: o
    }
  }) {
    let i = !1;
    const c = new Promise((B) => {
      const C = async () => {
        try {
          return await this.getBlockHeight(t);
        } catch {
          return -1;
        }
      };
      (async () => {
        let R = await C();
        if (!i) {
          for (; R <= n; )
            if (await vo(1e3), i || (R = await C(), i))
              return;
          B({
            __type: ei.BLOCKHEIGHT_EXCEEDED
          });
        }
      })();
    }), {
      abortConfirmation: u,
      confirmationPromise: p
    } = this.getTransactionConfirmationPromise({
      commitment: t,
      signature: o
    }), b = this.getCancellationPromise(e);
    let _;
    try {
      const B = await Promise.race([b, p, c]);
      if (B.__type === ei.PROCESSED)
        _ = B.response;
      else
        throw new vd(o);
    } finally {
      i = !0, u();
    }
    return _;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment: t,
    strategy: {
      abortSignal: e,
      minContextSlot: n,
      nonceAccountPubkey: o,
      nonceValue: i,
      signature: c
    }
  }) {
    let u = !1;
    const p = new Promise((R) => {
      let O = i, U = null;
      const T = async () => {
        try {
          const {
            context: P,
            value: F
          } = await this.getNonceAndContext(o, {
            commitment: t,
            minContextSlot: n
          });
          return U = P.slot, F == null ? void 0 : F.nonce;
        } catch {
          return O;
        }
      };
      (async () => {
        if (O = await T(), !u)
          for (; ; ) {
            if (i !== O) {
              R({
                __type: ei.NONCE_INVALID,
                slotInWhichNonceDidAdvance: U
              });
              return;
            }
            if (await vo(2e3), u || (O = await T(), u))
              return;
          }
      })();
    }), {
      abortConfirmation: b,
      confirmationPromise: _
    } = this.getTransactionConfirmationPromise({
      commitment: t,
      signature: c
    }), B = this.getCancellationPromise(e);
    let C;
    try {
      const R = await Promise.race([B, _, p]);
      if (R.__type === ei.PROCESSED)
        C = R.response;
      else {
        let O;
        for (; ; ) {
          const U = await this.getSignatureStatus(c);
          if (U == null)
            break;
          if (U.context.slot < (R.slotInWhichNonceDidAdvance ?? n)) {
            await vo(400);
            continue;
          }
          O = U;
          break;
        }
        if (O != null && O.value) {
          const U = t || "finalized", {
            confirmationStatus: T
          } = O.value;
          switch (U) {
            case "processed":
            case "recent":
              if (T !== "processed" && T !== "confirmed" && T !== "finalized")
                throw new as(c);
              break;
            case "confirmed":
            case "single":
            case "singleGossip":
              if (T !== "confirmed" && T !== "finalized")
                throw new as(c);
              break;
            case "finalized":
            case "max":
            case "root":
              if (T !== "finalized")
                throw new as(c);
              break;
            default:
              ((P) => {
              })(U);
          }
          C = {
            context: O.context,
            value: {
              err: O.value.err
            }
          };
        } else
          throw new as(c);
      }
    } finally {
      u = !0, b();
    }
    return C;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment: t,
    signature: e
  }) {
    let n;
    const o = new Promise((p) => {
      let b = this._confirmTransactionInitialTimeout || 6e4;
      switch (t) {
        case "processed":
        case "recent":
        case "single":
        case "confirmed":
        case "singleGossip": {
          b = this._confirmTransactionInitialTimeout || 3e4;
          break;
        }
      }
      n = setTimeout(() => p({
        __type: ei.TIMED_OUT,
        timeoutMs: b
      }), b);
    }), {
      abortConfirmation: i,
      confirmationPromise: c
    } = this.getTransactionConfirmationPromise({
      commitment: t,
      signature: e
    });
    let u;
    try {
      const p = await Promise.race([c, o]);
      if (p.__type === ei.PROCESSED)
        u = p.response;
      else
        throw new xd(e, p.timeoutMs / 1e3);
    } finally {
      clearTimeout(n), i();
    }
    return u;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getClusterNodes() {
    const t = await this._rpcRequest("getClusterNodes", []), e = gt(t, le(Et(Dw)));
    if ("error" in e)
      throw new Ut(e.error, "failed to get cluster nodes");
    return e.result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getVoteAccounts(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getVoteAccounts", e), o = gt(n, zw);
    if ("error" in o)
      throw new Ut(o.error, "failed to get vote accounts");
    return o.result;
  }
  /**
   * Fetch the current slot that the node is processing
   */
  async getSlot(t) {
    const {
      commitment: e,
      config: n
    } = Le(t), o = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getSlot", o), c = gt(i, le(G()));
    if ("error" in c)
      throw new Ut(c.error, "failed to get slot");
    return c.result;
  }
  /**
   * Fetch the current slot leader of the cluster
   */
  async getSlotLeader(t) {
    const {
      commitment: e,
      config: n
    } = Le(t), o = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getSlotLeader", o), c = gt(i, le(pt()));
    if ("error" in c)
      throw new Ut(c.error, "failed to get slot leader");
    return c.result;
  }
  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */
  async getSlotLeaders(t, e) {
    const n = [t, e], o = await this._rpcRequest("getSlotLeaders", n), i = gt(o, le(Et(Je)));
    if ("error" in i)
      throw new Ut(i.error, "failed to get slot leaders");
    return i.result;
  }
  /**
   * Fetch the current status of a signature
   */
  async getSignatureStatus(t, e) {
    const {
      context: n,
      value: o
    } = await this.getSignatureStatuses([t], e);
    Oe(o.length === 1);
    const i = o[0];
    return {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the current statuses of a batch of signatures
   */
  async getSignatureStatuses(t, e) {
    const n = [t];
    e && n.push(e);
    const o = await this._rpcRequest("getSignatureStatuses", n), i = gt(o, jw);
    if ("error" in i)
      throw new Ut(i.error, "failed to get signature status");
    return i.result;
  }
  /**
   * Fetch the current transaction count of the cluster
   */
  async getTransactionCount(t) {
    const {
      commitment: e,
      config: n
    } = Le(t), o = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getTransactionCount", o), c = gt(i, le(G()));
    if ("error" in c)
      throw new Ut(c.error, "failed to get transaction count");
    return c.result;
  }
  /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since v1.2.8. Please use {@link getSupply} instead.
   */
  async getTotalSupply(t) {
    return (await this.getSupply({
      commitment: t,
      excludeNonCirculatingAccountsList: !0
    })).value.total;
  }
  /**
   * Fetch the cluster InflationGovernor parameters
   */
  async getInflationGovernor(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getInflationGovernor", e), o = gt(n, dw);
    if ("error" in o)
      throw new Ut(o.error, "failed to get inflation");
    return o.result;
  }
  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */
  async getInflationReward(t, e, n) {
    const {
      commitment: o,
      config: i
    } = Le(n), c = this._buildArgs([t.map((b) => b.toBase58())], o, void 0, {
      ...i,
      epoch: e ?? (i == null ? void 0 : i.epoch)
    }), u = await this._rpcRequest("getInflationReward", c), p = gt(u, tw);
    if ("error" in p)
      throw new Ut(p.error, "failed to get inflation reward");
    return p.result;
  }
  /**
   * Fetch the specific inflation values for the current epoch
   */
  async getInflationRate() {
    const t = await this._rpcRequest("getInflationRate", []), e = gt(t, pw);
    if ("error" in e)
      throw new Ut(e.error, "failed to get inflation rate");
    return e.result;
  }
  /**
   * Fetch the Epoch Info parameters
   */
  async getEpochInfo(t) {
    const {
      commitment: e,
      config: n
    } = Le(t), o = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getEpochInfo", o), c = gt(i, yw);
    if ("error" in c)
      throw new Ut(c.error, "failed to get epoch info");
    return c.result;
  }
  /**
   * Fetch the Epoch Schedule parameters
   */
  async getEpochSchedule() {
    const t = await this._rpcRequest("getEpochSchedule", []), e = gt(t, mw);
    if ("error" in e)
      throw new Ut(e.error, "failed to get epoch schedule");
    const n = e.result;
    return new Wm(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot);
  }
  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */
  async getLeaderSchedule() {
    const t = await this._rpcRequest("getLeaderSchedule", []), e = gt(t, ww);
    if ("error" in e)
      throw new Ut(e.error, "failed to get leader schedule");
    return e.result;
  }
  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */
  async getMinimumBalanceForRentExemption(t, e) {
    const n = this._buildArgs([t], e), o = await this._rpcRequest("getMinimumBalanceForRentExemption", n), i = gt(o, Hw);
    return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result;
  }
  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhashAndContext(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getRecentBlockhash", e), o = gt(n, eb);
    if ("error" in o)
      throw new Ut(o.error, "failed to get recent blockhash");
    return o.result;
  }
  /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */
  async getRecentPerformanceSamples(t) {
    const e = await this._rpcRequest("getRecentPerformanceSamples", t ? [t] : []), n = gt(e, ob);
    if ("error" in n)
      throw new Ut(n.error, "failed to get recent performance samples");
    return n.result;
  }
  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getFeeForMessage} instead.
   */
  async getFeeCalculatorForBlockhash(t, e) {
    const n = this._buildArgs([t], e), o = await this._rpcRequest("getFeeCalculatorForBlockhash", n), i = gt(o, sb);
    if ("error" in i)
      throw new Ut(i.error, "failed to get fee calculator");
    const {
      context: c,
      value: u
    } = i.result;
    return {
      context: c,
      value: u !== null ? u.feeCalculator : null
    };
  }
  /**
   * Fetch the fee for a message from the cluster, return with context
   */
  async getFeeForMessage(t, e) {
    const n = $o(t.serialize()).toString("base64"), o = this._buildArgs([n], e), i = await this._rpcRequest("getFeeForMessage", o), c = gt(i, je(xt(G())));
    if ("error" in c)
      throw new Ut(c.error, "failed to get fee for message");
    if (c.result === null)
      throw new Error("invalid blockhash");
    return c.result;
  }
  /**
   * Fetch a list of prioritization fees from recent blocks.
   */
  async getRecentPrioritizationFees(t) {
    var c;
    const e = (c = t == null ? void 0 : t.lockedWritableAccounts) == null ? void 0 : c.map((u) => u.toBase58()), n = e != null && e.length ? [e] : [], o = await this._rpcRequest("getRecentPrioritizationFees", n), i = gt(o, gw);
    if ("error" in i)
      throw new Ut(i.error, "failed to get recent prioritization fees");
    return i.result;
  }
  /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhash(t) {
    try {
      return (await this.getRecentBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhash(t) {
    try {
      return (await this.getLatestBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhashAndContext(t) {
    const {
      commitment: e,
      config: n
    } = Le(t), o = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getLatestBlockhash", o), c = gt(i, rb);
    if ("error" in c)
      throw new Ut(c.error, "failed to get latest blockhash");
    return c.result;
  }
  /**
   * Returns whether a blockhash is still valid or not
   */
  async isBlockhashValid(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgs([t], n, void 0, o), c = await this._rpcRequest("isBlockhashValid", i), u = gt(c, nb);
    if ("error" in u)
      throw new Ut(u.error, "failed to determine if the blockhash `" + t + "`is valid");
    return u.result;
  }
  /**
   * Fetch the node version
   */
  async getVersion() {
    const t = await this._rpcRequest("getVersion", []), e = gt(t, le(cw));
    if ("error" in e)
      throw new Ut(e.error, "failed to get version");
    return e.result;
  }
  /**
   * Fetch the genesis hash
   */
  async getGenesisHash() {
    const t = await this._rpcRequest("getGenesisHash", []), e = gt(t, le(pt()));
    if ("error" in e)
      throw new Ut(e.error, "failed to get genesis hash");
    return e.result;
  }
  /**
   * Fetch a processed block from the cluster.
   *
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getBlock(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgsAtLeastConfirmed([t], n, void 0, o), c = await this._rpcRequest("getBlock", i);
    try {
      switch (o == null ? void 0 : o.transactionDetails) {
        case "accounts": {
          const u = gt(c, Yw);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        case "none": {
          const u = gt(c, Zw);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        default: {
          const u = gt(c, Vw);
          if ("error" in u)
            throw u.error;
          const {
            result: p
          } = u;
          return p ? {
            ...p,
            transactions: p.transactions.map(({
              transaction: b,
              meta: _,
              version: B
            }) => ({
              meta: _,
              transaction: {
                ...b,
                message: Oc(B, b.message)
              },
              version: B
            }))
          } : null;
        }
      }
    } catch (u) {
      throw new Ut(u, "failed to get confirmed block");
    }
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized block
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getParsedBlock(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgsAtLeastConfirmed([t], n, "jsonParsed", o), c = await this._rpcRequest("getBlock", i);
    try {
      switch (o == null ? void 0 : o.transactionDetails) {
        case "accounts": {
          const u = gt(c, Jw);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        case "none": {
          const u = gt(c, Qw);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        default: {
          const u = gt(c, Xw);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
      }
    } catch (u) {
      throw new Ut(u, "failed to get block");
    }
  }
  /*
   * Returns recent block production information from the current or previous epoch
   */
  async getBlockProduction(t) {
    let e, n;
    if (typeof t == "string")
      n = t;
    else if (t) {
      const {
        commitment: u,
        ...p
      } = t;
      n = u, e = p;
    }
    const o = this._buildArgs([], n, "base64", e), i = await this._rpcRequest("getBlockProduction", o), c = gt(i, uw);
    if ("error" in c)
      throw new Ut(c.error, "failed to get block production information");
    return c.result;
  }
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   *
   * @deprecated Instead, call `getTransaction` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransaction(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgsAtLeastConfirmed([t], n, void 0, o), c = await this._rpcRequest("getTransaction", i), u = gt(c, Fc);
    if ("error" in u)
      throw new Ut(u.error, "failed to get transaction");
    const p = u.result;
    return p && {
      ...p,
      transaction: {
        ...p.transaction,
        message: Oc(p.version, p.transaction.message)
      }
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */
  async getParsedTransaction(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = this._buildArgsAtLeastConfirmed([t], n, "jsonParsed", o), c = await this._rpcRequest("getTransaction", i), u = gt(c, Ws);
    if ("error" in u)
      throw new Ut(u.error, "failed to get transaction");
    return u.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */
  async getParsedTransactions(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = t.map((p) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([p], n, "jsonParsed", o)
    }));
    return (await this._rpcBatchRequest(i)).map((p) => {
      const b = gt(p, Ws);
      if ("error" in b)
        throw new Ut(b.error, "failed to get transactions");
      return b.result;
    });
  }
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   *
   * @deprecated Instead, call `getTransactions` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransactions(t, e) {
    const {
      commitment: n,
      config: o
    } = Le(e), i = t.map((p) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([p], n, void 0, o)
    }));
    return (await this._rpcBatchRequest(i)).map((p) => {
      const b = gt(p, Fc);
      if ("error" in b)
        throw new Ut(b.error, "failed to get transactions");
      const _ = b.result;
      return _ && {
        ..._,
        transaction: {
          ..._.transaction,
          message: Oc(_.version, _.transaction.message)
        }
      };
    });
  }
  /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since v1.13.0. Please use {@link getBlock} instead.
   */
  async getConfirmedBlock(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e), o = await this._rpcRequest("getConfirmedBlock", n), i = gt(o, tb);
    if ("error" in i)
      throw new Ut(i.error, "failed to get confirmed block");
    const c = i.result;
    if (!c)
      throw new Error("Confirmed block " + t + " not found");
    const u = {
      ...c,
      transactions: c.transactions.map(({
        transaction: p,
        meta: b
      }) => {
        const _ = new qn(p.message);
        return {
          meta: b,
          transaction: {
            ...p,
            message: _
          }
        };
      })
    };
    return {
      ...u,
      transactions: u.transactions.map(({
        transaction: p,
        meta: b
      }) => ({
        meta: b,
        transaction: sn.populate(p.message, p.signatures)
      }))
    };
  }
  /**
   * Fetch confirmed blocks between two slots
   */
  async getBlocks(t, e, n) {
    const o = this._buildArgsAtLeastConfirmed(e !== void 0 ? [t, e] : [t], n), i = await this._rpcRequest("getBlocks", o), c = gt(i, le(Et(G())));
    if ("error" in c)
      throw new Ut(c.error, "failed to get blocks");
    return c.result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */
  async getBlockSignatures(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), o = await this._rpcRequest("getBlock", n), i = gt(o, Ql);
    if ("error" in i)
      throw new Ut(i.error, "failed to get block");
    const c = i.result;
    if (!c)
      throw new Error("Block " + t + " not found");
    return c;
  }
  /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getBlockSignatures} instead.
   */
  async getConfirmedBlockSignatures(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), o = await this._rpcRequest("getConfirmedBlock", n), i = gt(o, Ql);
    if ("error" in i)
      throw new Ut(i.error, "failed to get confirmed block");
    const c = i.result;
    if (!c)
      throw new Error("Confirmed block " + t + " not found");
    return c;
  }
  /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getTransaction} instead.
   */
  async getConfirmedTransaction(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e), o = await this._rpcRequest("getConfirmedTransaction", n), i = gt(o, Fc);
    if ("error" in i)
      throw new Ut(i.error, "failed to get transaction");
    const c = i.result;
    if (!c)
      return c;
    const u = new qn(c.transaction.message), p = c.transaction.signatures;
    return {
      ...c,
      transaction: sn.populate(u, p)
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransaction} instead.
   */
  async getParsedConfirmedTransaction(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"), o = await this._rpcRequest("getConfirmedTransaction", n), i = gt(o, Ws);
    if ("error" in i)
      throw new Ut(i.error, "failed to get confirmed transaction");
    return i.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransactions} instead.
   */
  async getParsedConfirmedTransactions(t, e) {
    const n = t.map((c) => ({
      methodName: "getConfirmedTransaction",
      args: this._buildArgsAtLeastConfirmed([c], e, "jsonParsed")
    }));
    return (await this._rpcBatchRequest(n)).map((c) => {
      const u = gt(c, Ws);
      if ("error" in u)
        throw new Ut(u.error, "failed to get confirmed transactions");
      return u.result;
    });
  }
  /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */
  async getConfirmedSignaturesForAddress(t, e, n) {
    let o = {}, i = await this.getFirstAvailableBlock();
    for (; !("until" in o) && (e--, !(e <= 0 || e < i)); )
      try {
        const p = await this.getConfirmedBlockSignatures(e, "finalized");
        p.signatures.length > 0 && (o.until = p.signatures[p.signatures.length - 1].toString());
      } catch (p) {
        if (p instanceof Error && p.message.includes("skipped"))
          continue;
        throw p;
      }
    let c = await this.getSlot("finalized");
    for (; !("before" in o) && (n++, !(n > c)); )
      try {
        const p = await this.getConfirmedBlockSignatures(n);
        p.signatures.length > 0 && (o.before = p.signatures[p.signatures.length - 1].toString());
      } catch (p) {
        if (p instanceof Error && p.message.includes("skipped"))
          continue;
        throw p;
      }
    return (await this.getConfirmedSignaturesForAddress2(t, o)).map((p) => p.signature);
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getConfirmedSignaturesForAddress2(t, e, n) {
    const o = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e), i = await this._rpcRequest("getConfirmedSignaturesForAddress2", o), c = gt(i, Rw);
    if ("error" in c)
      throw new Ut(c.error, "failed to get confirmed signatures for address");
    return c.result;
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getSignaturesForAddress(t, e, n) {
    const o = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e), i = await this._rpcRequest("getSignaturesForAddress", o), c = gt(i, kw);
    if ("error" in c)
      throw new Ut(c.error, "failed to get signatures for address");
    return c.result;
  }
  async getAddressLookupTable(t, e) {
    const {
      context: n,
      value: o
    } = await this.getAccountInfoAndContext(t, e);
    let i = null;
    return o !== null && (i = new Yl({
      key: t,
      state: Yl.deserialize(o.data)
    })), {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */
  async getNonceAndContext(t, e) {
    const {
      context: n,
      value: o
    } = await this.getAccountInfoAndContext(t, e);
    let i = null;
    return o !== null && (i = Lf.fromAccountData(o.data)), {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster
   */
  async getNonce(t, e) {
    return await this.getNonceAndContext(t, e).then((n) => n.value).catch((n) => {
      throw new Error("failed to get nonce for account " + t.toBase58() + ": " + n);
    });
  }
  /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */
  async requestAirdrop(t, e) {
    const n = await this._rpcRequest("requestAirdrop", [t.toBase58(), e]), o = gt(n, ab);
    if ("error" in o)
      throw new Ut(o.error, `airdrop to ${t.toBase58()} failed`);
    return o.result;
  }
  /**
   * @internal
   */
  async _blockhashWithExpiryBlockHeight(t) {
    if (!t) {
      for (; this._pollingBlockhash; )
        await vo(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= Ym;
      if (this._blockhashInfo.latestBlockhash !== null && !n)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  /**
   * @internal
   */
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const t = Date.now(), e = this._blockhashInfo.latestBlockhash, n = e ? e.blockhash : null;
      for (let o = 0; o < 50; o++) {
        const i = await this.getLatestBlockhash("finalized");
        if (n !== i.blockhash)
          return this._blockhashInfo = {
            latestBlockhash: i,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, i;
        await vo(Um / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - t}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  /**
   * get the stake minimum delegation
   */
  async getStakeMinimumDelegation(t) {
    const {
      commitment: e,
      config: n
    } = Le(t), o = this._buildArgs([], e, "base64", n), i = await this._rpcRequest("getStakeMinimumDelegation", o), c = gt(i, je(G()));
    if ("error" in c)
      throw new Ut(c.error, "failed to get stake minimum delegation");
    return c.result;
  }
  /**
   * Simulate a transaction
   *
   * @deprecated Instead, call {@link simulateTransaction} with {@link
   * VersionedTransaction} and {@link SimulateTransactionConfig} parameters
   */
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async simulateTransaction(t, e, n) {
    if ("message" in t) {
      const U = t.serialize(), T = ue.Buffer.from(U).toString("base64");
      if (Array.isArray(e) || n !== void 0)
        throw new Error("Invalid arguments");
      const P = e || {};
      P.encoding = "base64", "commitment" in P || (P.commitment = this.commitment);
      const F = [T, P], L = await this._rpcRequest("simulateTransaction", F), z = gt(L, Xl);
      if ("error" in z)
        throw new Error("failed to simulate transaction: " + z.error.message);
      return z.result;
    }
    let o;
    if (t instanceof sn) {
      let O = t;
      o = new sn(), o.feePayer = O.feePayer, o.instructions = t.instructions, o.nonceInfo = O.nonceInfo, o.signatures = O.signatures;
    } else
      o = sn.populate(t), o._message = o._json = void 0;
    if (e !== void 0 && !Array.isArray(e))
      throw new Error("Invalid arguments");
    const i = e;
    if (o.nonceInfo && i)
      o.sign(...i);
    else {
      let O = this._disableBlockhashCaching;
      for (; ; ) {
        const U = await this._blockhashWithExpiryBlockHeight(O);
        if (o.lastValidBlockHeight = U.lastValidBlockHeight, o.recentBlockhash = U.blockhash, !i)
          break;
        if (o.sign(...i), !o.signature)
          throw new Error("!signature");
        const T = o.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(T) && !this._blockhashInfo.transactionSignatures.includes(T)) {
          this._blockhashInfo.simulatedSignatures.push(T);
          break;
        } else
          O = !0;
      }
    }
    const c = o._compile(), u = c.serialize(), b = o._serialize(u).toString("base64"), _ = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (n) {
      const O = (Array.isArray(n) ? n : c.nonProgramIds()).map((U) => U.toBase58());
      _.accounts = {
        encoding: "base64",
        addresses: O
      };
    }
    i && (_.sigVerify = !0);
    const B = [b, _], C = await this._rpcRequest("simulateTransaction", B), R = gt(C, Xl);
    if ("error" in R) {
      let O;
      if ("data" in R.error && (O = R.error.data.logs, O && Array.isArray(O))) {
        const U = `
    `, T = U + O.join(U);
        console.error(R.error.message, T);
      }
      throw new Vl("failed to simulate transaction: " + R.error.message, O);
    }
    return R.result;
  }
  /**
   * Sign and send a transaction
   *
   * @deprecated Instead, call {@link sendTransaction} with a {@link
   * VersionedTransaction}
   */
  /**
   * Send a signed transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Sign and send a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async sendTransaction(t, e, n) {
    if ("version" in t) {
      if (e && Array.isArray(e))
        throw new Error("Invalid arguments");
      const c = t.serialize();
      return await this.sendRawTransaction(c, e);
    }
    if (e === void 0 || !Array.isArray(e))
      throw new Error("Invalid arguments");
    const o = e;
    if (t.nonceInfo)
      t.sign(...o);
    else {
      let c = this._disableBlockhashCaching;
      for (; ; ) {
        const u = await this._blockhashWithExpiryBlockHeight(c);
        if (t.lastValidBlockHeight = u.lastValidBlockHeight, t.recentBlockhash = u.blockhash, t.sign(...o), !t.signature)
          throw new Error("!signature");
        const p = t.signature.toString("base64");
        if (this._blockhashInfo.transactionSignatures.includes(p))
          c = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(p);
          break;
        }
      }
    }
    const i = t.serialize();
    return await this.sendRawTransaction(i, n);
  }
  /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */
  async sendRawTransaction(t, e) {
    const n = $o(t).toString("base64");
    return await this.sendEncodedTransaction(n, e);
  }
  /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */
  async sendEncodedTransaction(t, e) {
    const n = {
      encoding: "base64"
    }, o = e && e.skipPreflight, i = e && e.preflightCommitment || this.commitment;
    e && e.maxRetries != null && (n.maxRetries = e.maxRetries), e && e.minContextSlot != null && (n.minContextSlot = e.minContextSlot), o && (n.skipPreflight = o), i && (n.preflightCommitment = i);
    const c = [t, n], u = await this._rpcRequest("sendTransaction", c), p = gt(u, cb);
    if ("error" in p) {
      let b;
      throw "data" in p.error && (b = p.error.data.logs), new Vl("failed to send transaction: " + p.error.message, b);
    }
    return p.result;
  }
  /**
   * @internal
   */
  _wsOnOpen() {
    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
      (async () => {
        try {
          await this._rpcWebSocket.notify("ping");
        } catch {
        }
      })();
    }, 5e3), this._updateSubscriptions();
  }
  /**
   * @internal
   */
  _wsOnError(t) {
    this._rpcWebSocketConnected = !1, console.error("ws error:", t.message);
  }
  /**
   * @internal
   */
  _wsOnClose(t) {
    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), t === 1e3) {
      this._updateSubscriptions();
      return;
    }
    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, n]) => {
      this._setSubscription(e, {
        ...n,
        state: "pending"
      });
    });
  }
  /**
   * @internal
   */
  _setSubscription(t, e) {
    var o;
    const n = (o = this._subscriptionsByHash[t]) == null ? void 0 : o.state;
    if (this._subscriptionsByHash[t] = e, n !== e.state) {
      const i = this._subscriptionStateChangeCallbacksByHash[t];
      i && i.forEach((c) => {
        try {
          c(e.state);
        } catch {
        }
      });
    }
  }
  /**
   * @internal
   */
  _onSubscriptionStateChange(t, e) {
    var i;
    const n = this._subscriptionHashByClientSubscriptionId[t];
    if (n == null)
      return () => {
      };
    const o = (i = this._subscriptionStateChangeCallbacksByHash)[n] || (i[n] = /* @__PURE__ */ new Set());
    return o.add(e), () => {
      o.delete(e), o.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n];
    };
  }
  /**
   * @internal
   */
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
        this._rpcWebSocketIdleTimeout = null;
        try {
          this._rpcWebSocket.close();
        } catch (n) {
          n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`);
        }
      }, 500));
      return;
    }
    if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();
      return;
    }
    const t = this._rpcWebSocketGeneration, e = () => t === this._rpcWebSocketGeneration;
    await Promise.all(
      // Don't be tempted to change this to `Object.entries`. We call
      // `_updateSubscriptions` recursively when processing the state,
      // so it's important that we look up the *current* version of
      // each subscription, every time we process a hash.
      Object.keys(this._subscriptionsByHash).map(async (n) => {
        const o = this._subscriptionsByHash[n];
        if (o !== void 0)
          switch (o.state) {
            case "pending":
            case "unsubscribed":
              if (o.callbacks.size === 0) {
                delete this._subscriptionsByHash[n], o.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[o.serverSubscriptionId], await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const {
                  args: i,
                  method: c
                } = o;
                try {
                  this._setSubscription(n, {
                    ...o,
                    state: "subscribing"
                  });
                  const u = await this._rpcWebSocket.call(c, i);
                  this._setSubscription(n, {
                    ...o,
                    serverSubscriptionId: u,
                    state: "subscribed"
                  }), this._subscriptionCallbacksByServerSubscriptionId[u] = o.callbacks, await this._updateSubscriptions();
                } catch (u) {
                  if (u instanceof Error && console.error(`${c} error for argument`, i, u.message), !e())
                    return;
                  this._setSubscription(n, {
                    ...o,
                    state: "pending"
                  }), await this._updateSubscriptions();
                }
              })();
              break;
            case "subscribed":
              o.callbacks.size === 0 && await (async () => {
                const {
                  serverSubscriptionId: i,
                  unsubscribeMethod: c
                } = o;
                if (this._subscriptionsAutoDisposedByRpc.has(i))
                  this._subscriptionsAutoDisposedByRpc.delete(i);
                else {
                  this._setSubscription(n, {
                    ...o,
                    state: "unsubscribing"
                  }), this._setSubscription(n, {
                    ...o,
                    state: "unsubscribing"
                  });
                  try {
                    await this._rpcWebSocket.call(c, [i]);
                  } catch (u) {
                    if (u instanceof Error && console.error(`${c} error:`, u.message), !e())
                      return;
                    this._setSubscription(n, {
                      ...o,
                      state: "subscribed"
                    }), await this._updateSubscriptions();
                    return;
                  }
                }
                this._setSubscription(n, {
                  ...o,
                  state: "unsubscribed"
                }), await this._updateSubscriptions();
              })();
              break;
          }
      })
    );
  }
  /**
   * @internal
   */
  _handleServerNotification(t, e) {
    const n = this._subscriptionCallbacksByServerSubscriptionId[t];
    n !== void 0 && n.forEach((o) => {
      try {
        o(
          ...e
        );
      } catch (i) {
        console.error(i);
      }
    });
  }
  /**
   * @internal
   */
  _wsOnAccountNotification(t) {
    const {
      result: e,
      subscription: n
    } = gt(t, Tw);
    this._handleServerNotification(n, [e.value, e.context]);
  }
  /**
   * @internal
   */
  _makeSubscription(t, e) {
    const n = this._nextClientSubscriptionId++, o = Gl(
      [t.method, e],
      !0
      /* isArrayProp */
    ), i = this._subscriptionsByHash[o];
    return i === void 0 ? this._subscriptionsByHash[o] = {
      ...t,
      args: e,
      callbacks: /* @__PURE__ */ new Set([t.callback]),
      state: "pending"
    } : i.callbacks.add(t.callback), this._subscriptionHashByClientSubscriptionId[n] = o, this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n], delete this._subscriptionHashByClientSubscriptionId[n];
      const c = this._subscriptionsByHash[o];
      Oe(c !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), c.callbacks.delete(t.callback), await this._updateSubscriptions();
    }, this._updateSubscriptions(), n;
  }
  /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @return subscription id
   */
  onAccountChange(t, e, n) {
    const o = this._buildArgs(
      [t.toBase58()],
      n || this._commitment || "finalized",
      // Apply connection/server default.
      "base64"
    );
    return this._makeSubscription({
      callback: e,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, o);
  }
  /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "account change");
  }
  /**
   * @internal
   */
  _wsOnProgramAccountNotification(t) {
    const {
      result: e,
      subscription: n
    } = gt(t, Lw);
    this._handleServerNotification(n, [{
      accountId: e.value.pubkey,
      accountInfo: e.value.account
    }, e.context]);
  }
  /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @param filters The program account filters to pass into the RPC method
   * @return subscription id
   */
  onProgramAccountChange(t, e, n, o) {
    const i = this._buildArgs(
      [t.toBase58()],
      n || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      o ? {
        filters: o
      } : void 0
      /* extra */
    );
    return this._makeSubscription({
      callback: e,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, i);
  }
  /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeProgramAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "program account change");
  }
  /**
   * Registers a callback to be invoked whenever logs are emitted.
   */
  onLogs(t, e, n) {
    const o = this._buildArgs(
      [typeof t == "object" ? {
        mentions: [t.toString()]
      } : t],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    );
    return this._makeSubscription({
      callback: e,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, o);
  }
  /**
   * Deregister a logs callback.
   *
   * @param id client subscription id to deregister.
   */
  async removeOnLogsListener(t) {
    await this._unsubscribeClientSubscription(t, "logs");
  }
  /**
   * @internal
   */
  _wsOnLogsNotification(t) {
    const {
      result: e,
      subscription: n
    } = gt(t, fb);
    this._handleServerNotification(n, [e.value, e.context]);
  }
  /**
   * @internal
   */
  _wsOnSlotNotification(t) {
    const {
      result: e,
      subscription: n
    } = gt(t, Ow);
    this._handleServerNotification(n, [e]);
  }
  /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */
  onSlotChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeSlotChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "slot change");
  }
  /**
   * @internal
   */
  _wsOnSlotUpdatesNotification(t) {
    const {
      result: e,
      subscription: n
    } = gt(t, Nw);
    this._handleServerNotification(n, [e]);
  }
  /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */
  onSlotUpdate(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot update notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeSlotUpdateListener(t) {
    await this._unsubscribeClientSubscription(t, "slot update");
  }
  /**
   * @internal
   */
  async _unsubscribeClientSubscription(t, e) {
    const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
    n ? await n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`);
  }
  _buildArgs(t, e, n, o) {
    const i = e || this._commitment;
    if (i || n || o) {
      let c = {};
      n && (c.encoding = n), i && (c.commitment = i), o && (c = Object.assign(c, o)), t.push(c);
    }
    return t;
  }
  /**
   * @internal
   */
  _buildArgsAtLeastConfirmed(t, e, n, o) {
    const i = e || this._commitment;
    if (i && !["confirmed", "finalized"].includes(i))
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    return this._buildArgs(t, e, n, o);
  }
  /**
   * @internal
   */
  _wsOnSignatureNotification(t) {
    const {
      result: e,
      subscription: n
    } = gt(t, $w);
    e.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n), this._handleServerNotification(n, e.value === "receivedSignature" ? [{
      type: "received"
    }, e.context] : [{
      type: "status",
      result: e.value
    }, e.context]);
  }
  /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */
  onSignature(t, e, n) {
    const o = this._buildArgs(
      [t],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    ), i = this._makeSubscription({
      callback: (c, u) => {
        if (c.type === "status") {
          e(c.result, u);
          try {
            this.removeSignatureListener(i);
          } catch {
          }
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, o);
    return i;
  }
  /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */
  onSignatureWithOptions(t, e, n) {
    const {
      commitment: o,
      ...i
    } = {
      ...n,
      commitment: n && n.commitment || this._commitment || "finalized"
      // Apply connection/server default.
    }, c = this._buildArgs([t], o, void 0, i), u = this._makeSubscription({
      callback: (p, b) => {
        e(p, b);
        try {
          this.removeSignatureListener(u);
        } catch {
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, c);
    return u;
  }
  /**
   * Deregister a signature notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeSignatureListener(t) {
    await this._unsubscribeClientSubscription(t, "signature result");
  }
  /**
   * @internal
   */
  _wsOnRootNotification(t) {
    const {
      result: e,
      subscription: n
    } = gt(t, Pw);
    this._handleServerNotification(n, [e]);
  }
  /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */
  onRootChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a root notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeRootChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "root change");
  }
}
Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: Ct([Dt("instruction"), Do("recentSlot"), _e("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: Ct([Dt("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: Ct([Dt("instruction"), Do(), Ir(pe(), Vi(Dt(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: Ct([Dt("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: Ct([Dt("instruction")])
  }
});
new Gt("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: Ct([_e("instruction"), Dt("units"), Dt("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: Ct([_e("instruction"), Dt("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: Ct([_e("instruction"), Dt("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: Ct([_e("instruction"), Do("microLamports")])
  }
});
new Gt("ComputeBudget111111111111111111111111111111");
Ct([_e("numSignatures"), _e("padding"), rn("signatureOffset"), rn("signatureInstructionIndex"), rn("publicKeyOffset"), rn("publicKeyInstructionIndex"), rn("messageDataOffset"), rn("messageDataSize"), rn("messageInstructionIndex")]);
new Gt("Ed25519SigVerify111111111111111111111111111");
kf.utils.isValidPrivateKey;
kf.getPublicKey;
Ct([_e("numSignatures"), rn("signatureOffset"), _e("signatureInstructionIndex"), rn("ethAddressOffset"), _e("ethAddressInstructionIndex"), rn("messageDataOffset"), rn("messageDataSize"), _e("messageInstructionIndex"), Te(20, "ethAddress"), Te(64, "signature"), _e("recoveryId")]);
new Gt("KeccakSecp256k11111111111111111111111111111");
var Ld;
new Gt("StakeConfig11111111111111111111111111111111");
let Ud = class {
  /**
   * Create a new Lockup object
   */
  constructor(t, e, n) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = n;
  }
  /**
   * Default, inactive Lockup value
   */
};
Ld = Ud;
Ud.default = new Ld(0, 0, Gt.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: Ct([Dt("instruction"), Am(), Im()])
  },
  Authorize: {
    index: 1,
    layout: Ct([Dt("instruction"), pe("newAuthorized"), Dt("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: Ct([Dt("instruction")])
  },
  Split: {
    index: 3,
    layout: Ct([Dt("instruction"), jr("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: Ct([Dt("instruction"), jr("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: Ct([Dt("instruction")])
  },
  Merge: {
    index: 7,
    layout: Ct([Dt("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: Ct([Dt("instruction"), pe("newAuthorized"), Dt("stakeAuthorizationType"), Eo("authoritySeed"), pe("authorityOwner")])
  }
});
new Gt("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: Ct([Dt("instruction"), Mm()])
  },
  Authorize: {
    index: 1,
    layout: Ct([Dt("instruction"), pe("newAuthorized"), Dt("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: Ct([Dt("instruction"), jr("lamports")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: Ct([Dt("instruction"), Rm()])
  }
});
new Gt("Vote111111111111111111111111111111111111111");
new Gt("Va1idator1nfo111111111111111111111111111111");
at({
  name: pt(),
  website: jt(pt()),
  details: jt(pt()),
  keybaseUsername: jt(pt())
});
new Gt("Vote111111111111111111111111111111111111111");
Ct([
  pe("nodePubkey"),
  pe("authorizedWithdrawer"),
  _e("commission"),
  fr(),
  // votes.length
  Ir(Ct([fr("slot"), Dt("confirmationCount")]), Vi(Dt(), -8), "votes"),
  _e("rootSlotValid"),
  fr("rootSlot"),
  fr(),
  // authorizedVoters.length
  Ir(Ct([fr("epoch"), pe("authorizedVoter")]), Vi(Dt(), -8), "authorizedVoters"),
  Ct([Ir(Ct([pe("authorizedPubkey"), fr("epochOfLastAuthorizedSwitch"), fr("targetEpoch")]), 32, "buf"), fr("idx"), _e("isEmpty")], "priorVoters"),
  fr(),
  // epochCredits.length
  Ir(Ct([fr("epoch"), fr("credits"), fr("prevCredits")]), Vi(Dt(), -8), "epochCredits"),
  Ct([fr("slot"), fr("timestamp")], "lastTimestamp")
]);
const th = {
  http: {
    devnet: "http://api.devnet.solana.com",
    testnet: "http://api.testnet.solana.com",
    "mainnet-beta": "http://api.mainnet-beta.solana.com/"
  },
  https: {
    devnet: "https://api.devnet.solana.com",
    testnet: "https://api.testnet.solana.com",
    "mainnet-beta": "https://api.mainnet-beta.solana.com/"
  }
};
function Nf(r, t) {
  const e = t === !1 ? "http" : "https";
  if (!r)
    return th[e].devnet;
  const n = th[e][r];
  if (!n)
    throw new Error(`Unknown ${e} cluster: ${r}`);
  return n;
}
const Od = nf({});
function db() {
  return of(Od);
}
const pb = ({ children: r, endpoint: t, config: e = { commitment: "confirmed" } }) => {
  const n = Ur(() => new hb(t, e), [t, e]);
  return lt.createElement(Od.Provider, { value: { connection: n } }, r);
};
var gb = Rf();
const yb = /* @__PURE__ */ gn(gb);
let Tr = class extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(t, e) {
    super(t), this.error = e;
  }
}, ko = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletNotReadyError";
  }
};
class us extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletConfigError";
  }
}
let fs = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletConnectionError";
  }
}, Fd = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectedError";
  }
}, mb = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectionError";
  }
}, _o = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletAccountError";
  }
}, Nd = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletPublicKeyError";
  }
}, An = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletNotConnectedError";
  }
}, Pi = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletSendTransactionError";
  }
}, Di = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletSignTransactionError";
  }
}, $d = class extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletSignMessageError";
  }
};
class eh extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletSignInError";
  }
}
var ke;
(function(r) {
  r.Installed = "Installed", r.NotDetected = "NotDetected", r.Loadable = "Loadable", r.Unsupported = "Unsupported";
})(ke || (ke = {}));
let Pd = class extends yb {
  get connected() {
    return !!this.publicKey;
  }
  async autoConnect() {
    await this.connect();
  }
  async prepareTransaction(t, e, n = {}) {
    const o = this.publicKey;
    if (!o)
      throw new An();
    return t.feePayer = t.feePayer || o, t.recentBlockhash = t.recentBlockhash || (await e.getLatestBlockhash({
      commitment: n.preflightCommitment,
      minContextSlot: n.minContextSlot
    })).blockhash, t;
  }
};
function zi(r) {
  return "version" in r;
}
let wb = class extends Pd {
  async sendTransaction(t, e, n = {}) {
    let o = !0;
    try {
      if (zi(t)) {
        if (!this.supportedTransactionVersions)
          throw new Pi("Sending versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(t.version))
          throw new Pi(`Sending transaction version ${t.version} isn't supported by this wallet`);
        try {
          t = await this.signTransaction(t);
          const i = t.serialize();
          return await e.sendRawTransaction(i, n);
        } catch (i) {
          throw i instanceof Di ? (o = !1, i) : new Pi(i == null ? void 0 : i.message, i);
        }
      } else
        try {
          const { signers: i, ...c } = n;
          t = await this.prepareTransaction(t, e, c), i != null && i.length && t.partialSign(...i), t = await this.signTransaction(t);
          const u = t.serialize();
          return await e.sendRawTransaction(u, c);
        } catch (i) {
          throw i instanceof Di ? (o = !1, i) : new Pi(i == null ? void 0 : i.message, i);
        }
    } catch (i) {
      throw o && this.emit("error", i), i;
    }
  }
  async signAllTransactions(t) {
    for (const n of t)
      if (zi(n)) {
        if (!this.supportedTransactionVersions)
          throw new Di("Signing versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(n.version))
          throw new Di(`Signing transaction version ${n.version} isn't supported by this wallet`);
      }
    const e = [];
    for (const n of t)
      e.push(await this.signTransaction(n));
    return e;
  }
}, bb = class extends wb {
};
class vb extends bb {
}
const ui = "solana:signAndSendTransaction", Nc = "solana:signIn", rs = "solana:signMessage", hr = "solana:signTransaction", Dd = "standard:connect", rh = "standard:disconnect", zd = "standard:events";
function xb(r) {
  return Dd in r.features && zd in r.features && (ui in r.features || hr in r.features);
}
var Es;
(function(r) {
  r.Mainnet = "mainnet-beta", r.Testnet = "testnet", r.Devnet = "devnet";
})(Es || (Es = {}));
class nh extends Tr {
  constructor() {
    super(...arguments), this.name = "WalletNotSelectedError";
  }
}
const Eb = [], ja = {
  autoConnect: !1,
  connecting: !1,
  connected: !1,
  disconnecting: !1,
  select() {
    fn("call", "select");
  },
  connect() {
    return Promise.reject(fn("call", "connect"));
  },
  disconnect() {
    return Promise.reject(fn("call", "disconnect"));
  },
  sendTransaction() {
    return Promise.reject(fn("call", "sendTransaction"));
  },
  signTransaction() {
    return Promise.reject(fn("call", "signTransaction"));
  },
  signAllTransactions() {
    return Promise.reject(fn("call", "signAllTransactions"));
  },
  signMessage() {
    return Promise.reject(fn("call", "signMessage"));
  },
  signIn() {
    return Promise.reject(fn("call", "signIn"));
  }
};
Object.defineProperty(ja, "wallets", {
  get() {
    return fn("read", "wallets"), Eb;
  }
});
Object.defineProperty(ja, "wallet", {
  get() {
    return fn("read", "wallet"), null;
  }
});
Object.defineProperty(ja, "publicKey", {
  get() {
    return fn("read", "publicKey"), null;
  }
});
function fn(r, t) {
  const e = new Error(`You have tried to ${r} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`);
  return console.error(e), e;
}
const qd = nf(ja);
function Ts() {
  return of(qd);
}
function _b(r, t) {
  const e = yr(() => {
    try {
      const i = localStorage.getItem(r);
      if (i)
        return JSON.parse(i);
    } catch (i) {
      typeof window < "u" && console.error(i);
    }
    return t;
  }), n = e[0], o = Or(!0);
  return Mr(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    try {
      n === null ? localStorage.removeItem(r) : localStorage.setItem(r, JSON.stringify(n));
    } catch (i) {
      typeof window < "u" && console.error(i);
    }
  }, [n, r]), e;
}
function $c(r) {
  switch (r) {
    case "processed":
    case "confirmed":
    case "finalized":
    case void 0:
      return r;
    case "recent":
      return "processed";
    case "single":
    case "singleGossip":
      return "confirmed";
    case "max":
    case "root":
      return "finalized";
    default:
      return;
  }
}
const ih = "solana:mainnet", Sb = "solana:devnet", Bb = "solana:testnet", Ab = "solana:localnet", Ib = "https://api.mainnet-beta.solana.com";
function Mb(r) {
  return r.includes(Ib) ? ih : /\bdevnet\b/i.test(r) ? Sb : /\btestnet\b/i.test(r) ? Bb : /\blocalhost\b/i.test(r) || /\b127\.0\.0\.1\b/.test(r) ? Ab : ih;
}
function Rb(r) {
  let t = `${r.domain} wants you to sign in with your Solana account:
`;
  t += `${r.address}`, r.statement && (t += `

${r.statement}`);
  const e = [];
  if (r.uri && e.push(`URI: ${r.uri}`), r.version && e.push(`Version: ${r.version}`), r.chainId && e.push(`Chain ID: ${r.chainId}`), r.nonce && e.push(`Nonce: ${r.nonce}`), r.issuedAt && e.push(`Issued At: ${r.issuedAt}`), r.expirationTime && e.push(`Expiration Time: ${r.expirationTime}`), r.notBefore && e.push(`Not Before: ${r.notBefore}`), r.requestId && e.push(`Request ID: ${r.requestId}`), r.resources) {
    e.push("Resources:");
    for (const n of r.resources)
      e.push(`- ${n}`);
  }
  return e.length && (t += `

${e.join(`
`)}`), t;
}
const Wn = {
  ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
  ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
  ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
  ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
  ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
  ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
  ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION"
};
class jn extends Error {
  constructor(...t) {
    const [e, n, o] = t;
    super(n), this.code = e, this.data = o, this.name = "SolanaMobileWalletAdapterError";
  }
}
class Wd extends Error {
  constructor(...t) {
    const [e, n, o, i] = t;
    super(o), this.code = n, this.data = i, this.jsonRpcMessageId = e, this.name = "SolanaMobileWalletAdapterProtocolError";
  }
}
function tr(r, t, e, n) {
  function o(i) {
    return i instanceof e ? i : new e(function(c) {
      c(i);
    });
  }
  return new (e || (e = Promise))(function(i, c) {
    function u(_) {
      try {
        b(n.next(_));
      } catch (B) {
        c(B);
      }
    }
    function p(_) {
      try {
        b(n.throw(_));
      } catch (B) {
        c(B);
      }
    }
    function b(_) {
      _.done ? i(_.value) : o(_.value).then(u, p);
    }
    b((n = n.apply(r, t || [])).next());
  });
}
function kb(r, t) {
  return tr(this, void 0, void 0, function* () {
    const e = yield crypto.subtle.exportKey("raw", r), n = yield crypto.subtle.sign({ hash: "SHA-256", name: "ECDSA" }, t, e), o = new Uint8Array(e.byteLength + n.byteLength);
    return o.set(new Uint8Array(e), 0), o.set(new Uint8Array(n), e.byteLength), o;
  });
}
function Tb(r) {
  return window.btoa(r);
}
function Cb(r) {
  return Rb(r);
}
function Lb(r) {
  return Tb(Cb(r));
}
const Ub = "solana:signTransactions", oh = "solana:cloneAuthorization";
function Ob(r, t) {
  return new Proxy({}, {
    get(e, n) {
      return e[n] == null && (e[n] = function(o) {
        return tr(this, void 0, void 0, function* () {
          const { method: i, params: c } = Fb(n, o, r), u = yield t(i, c);
          return i === "authorize" && c.sign_in_payload && !u.sign_in_result && (u.sign_in_result = yield $b(c.sign_in_payload, u, t)), Nb(n, u, r);
        });
      }), e[n];
    },
    defineProperty() {
      return !1;
    },
    deleteProperty() {
      return !1;
    }
  });
}
function Fb(r, t, e) {
  let n = t, o = r.toString().replace(/[A-Z]/g, (i) => `_${i.toLowerCase()}`).toLowerCase();
  switch (r) {
    case "authorize": {
      let { chain: i } = n;
      if (e === "legacy") {
        switch (i) {
          case "solana:testnet": {
            i = "testnet";
            break;
          }
          case "solana:devnet": {
            i = "devnet";
            break;
          }
          case "solana:mainnet": {
            i = "mainnet-beta";
            break;
          }
          default:
            i = n.cluster;
        }
        n.cluster = i;
      } else {
        switch (i) {
          case "testnet":
          case "devnet": {
            i = `solana:${i}`;
            break;
          }
          case "mainnet-beta": {
            i = "solana:mainnet";
            break;
          }
        }
        n.chain = i;
      }
    }
    case "reauthorize": {
      const { auth_token: i, identity: c } = n;
      if (i)
        switch (e) {
          case "legacy": {
            o = "reauthorize", n = { auth_token: i, identity: c };
            break;
          }
          default: {
            o = "authorize";
            break;
          }
        }
      break;
    }
  }
  return { method: o, params: n };
}
function Nb(r, t, e) {
  switch (r) {
    case "getCapabilities": {
      const n = t;
      switch (e) {
        case "legacy": {
          const o = [Ub];
          return n.supports_clone_authorization === !0 && o.push(oh), Object.assign(Object.assign({}, n), { features: o });
        }
        case "v1":
          return Object.assign(Object.assign({}, n), { supports_sign_and_send_transactions: !0, supports_clone_authorization: n.features.includes(oh) });
      }
    }
  }
  return t;
}
function $b(r, t, e) {
  var n;
  return tr(this, void 0, void 0, function* () {
    const o = (n = r.domain) !== null && n !== void 0 ? n : window.location.host, i = t.accounts[0].address, c = Lb(Object.assign(Object.assign({}, r), { domain: o, address: i })), u = yield e("sign_messages", {
      addresses: [i],
      payloads: [c]
    });
    return {
      address: i,
      signed_message: c,
      signature: u.signed_payloads[0].slice(c.length)
    };
  });
}
const qi = 4;
function Pb(r) {
  if (r >= 4294967296)
    throw new Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
  const t = new ArrayBuffer(qi);
  return new DataView(t).setUint32(
    0,
    r,
    /* littleEndian */
    !1
  ), new Uint8Array(t);
}
const Ou = 12, jd = 65;
function Db(r, t, e) {
  return tr(this, void 0, void 0, function* () {
    const n = Pb(t), o = new Uint8Array(Ou);
    crypto.getRandomValues(o);
    const i = yield crypto.subtle.encrypt(Kd(n, o), e, new TextEncoder().encode(r)), c = new Uint8Array(n.byteLength + o.byteLength + i.byteLength);
    return c.set(new Uint8Array(n), 0), c.set(new Uint8Array(o), n.byteLength), c.set(new Uint8Array(i), n.byteLength + o.byteLength), c;
  });
}
function Hd(r, t) {
  return tr(this, void 0, void 0, function* () {
    const e = r.slice(0, qi), n = r.slice(qi, qi + Ou), o = r.slice(qi + Ou), i = yield crypto.subtle.decrypt(Kd(e, n), t, o);
    return zb().decode(i);
  });
}
function Kd(r, t) {
  return {
    additionalData: r,
    iv: t,
    name: "AES-GCM",
    tagLength: 128
    // 16 byte tag => 128 bits
  };
}
let Pc;
function zb() {
  return Pc === void 0 && (Pc = new TextDecoder("utf-8")), Pc;
}
function qb() {
  return tr(this, void 0, void 0, function* () {
    return yield crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: "P-256"
      },
      !1,
      ["sign"]
      /* keyUsages */
    );
  });
}
function Wb() {
  return tr(this, void 0, void 0, function* () {
    return yield crypto.subtle.generateKey(
      {
        name: "ECDH",
        namedCurve: "P-256"
      },
      !1,
      ["deriveKey", "deriveBits"]
      /* keyUsages */
    );
  });
}
function jb(r, t) {
  return tr(this, void 0, void 0, function* () {
    const e = JSON.stringify(r), n = r.id;
    return Db(e, n, t);
  });
}
function Hb(r, t) {
  return tr(this, void 0, void 0, function* () {
    const e = yield Hd(r, t), n = JSON.parse(e);
    if (Object.hasOwnProperty.call(n, "error"))
      throw new Wd(n.id, n.error.code, n.error.message);
    return n;
  });
}
function Kb(r, t, e) {
  return tr(this, void 0, void 0, function* () {
    const [n, o] = yield Promise.all([
      crypto.subtle.exportKey("raw", t),
      crypto.subtle.importKey(
        "raw",
        r.slice(0, jd),
        { name: "ECDH", namedCurve: "P-256" },
        !1,
        []
        /* keyUsages */
      )
    ]), i = yield crypto.subtle.deriveBits({ name: "ECDH", public: o }, e, 256), c = yield crypto.subtle.importKey(
      "raw",
      i,
      "HKDF",
      !1,
      ["deriveKey"]
      /* keyUsages */
    );
    return yield crypto.subtle.deriveKey({
      name: "HKDF",
      hash: "SHA-256",
      salt: new Uint8Array(n),
      info: new Uint8Array()
    }, c, { name: "AES-GCM", length: 128 }, !1, ["encrypt", "decrypt"]);
  });
}
function Gb(r, t) {
  return tr(this, void 0, void 0, function* () {
    const e = yield Hd(r, t), n = JSON.parse(e);
    let o = "legacy";
    if (Object.hasOwnProperty.call(n, "v"))
      switch (n.v) {
        case 1:
        case "1":
        case "v1":
          o = "v1";
          break;
        case "legacy":
          o = "legacy";
          break;
        default:
          throw new jn(Wn.ERROR_INVALID_PROTOCOL_VERSION, `Unknown/unsupported protocol version: ${n.v}`);
      }
    return {
      protocol_version: o
    };
  });
}
function Vb() {
  return Gd(49152 + Math.floor(Math.random() * (65535 - 49152 + 1)));
}
function Gd(r) {
  if (r < 49152 || r > 65535)
    throw new jn(Wn.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE, `Association port number must be between 49152 and 65535. ${r} given.`, { port: r });
  return r;
}
function Zb(r) {
  let t = "";
  const e = new Uint8Array(r), n = e.byteLength;
  for (let o = 0; o < n; o++)
    t += String.fromCharCode(e[o]);
  return window.btoa(t);
}
function Yb(r) {
  return r.replace(/[/+=]/g, (t) => ({
    "/": "_",
    "+": "-",
    "=": "."
  })[t]);
}
const Xb = "solana-wallet";
function sh(r) {
  return r.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Jb(r, t) {
  let e = null;
  if (t) {
    try {
      e = new URL(t);
    } catch {
    }
    if ((e == null ? void 0 : e.protocol) !== "https:")
      throw new jn(Wn.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs");
  }
  e || (e = new URL(`${Xb}:/`));
  const n = r.startsWith("/") ? (
    // Method is an absolute path. Replace it wholesale.
    r
  ) : (
    // Method is a relative path. Merge it with the existing one.
    [...sh(e.pathname), ...sh(r)].join("/")
  );
  return new URL(n, e);
}
function Qb(r, t, e, n = ["v1"]) {
  return tr(this, void 0, void 0, function* () {
    const o = Gd(t), i = yield crypto.subtle.exportKey("raw", r), c = Zb(i), u = Jb("v1/associate/local", e);
    return u.searchParams.set("association", Yb(c)), u.searchParams.set("port", `${o}`), n.forEach((p) => {
      u.searchParams.set("v", p);
    }), u;
  });
}
const wa = {
  Firefox: 0,
  Other: 1
};
function tv() {
  return navigator.userAgent.indexOf("Firefox/") !== -1 ? wa.Firefox : wa.Other;
}
function ev() {
  return new Promise((r, t) => {
    function e() {
      clearTimeout(o), window.removeEventListener("blur", n);
    }
    function n() {
      e(), r();
    }
    window.addEventListener("blur", n);
    const o = setTimeout(() => {
      e(), t();
    }, 2e3);
  });
}
let ns = null;
function rv(r) {
  ns == null && (ns = document.createElement("iframe"), ns.style.display = "none", document.body.appendChild(ns)), ns.contentWindow.location.href = r.toString();
}
function nv(r, t) {
  return tr(this, void 0, void 0, function* () {
    const e = Vb(), n = yield Qb(r, e, t);
    if (n.protocol === "https:")
      window.location.assign(n);
    else
      try {
        const o = tv();
        switch (o) {
          case wa.Firefox:
            rv(n);
            break;
          case wa.Other: {
            const i = ev();
            window.location.assign(n), yield i;
            break;
          }
          default:
        }
      } catch {
        throw new jn(Wn.ERROR_WALLET_NOT_FOUND, "Found no installed wallet that supports the mobile wallet protocol.");
      }
    return e;
  });
}
const ah = {
  /**
   * 300 milliseconds is a generally accepted threshold for what someone
   * would consider an acceptable response time for a user interface
   * after having performed a low-attention tapping task. We set the initial
   * interval at which we wait for the wallet to set up the websocket at
   * half this, as per the Nyquist frequency, with a progressive backoff
   * sequence from there. The total wait time is 30s, which allows for the
   * user to be presented with a disambiguation dialog, select a wallet, and
   * for the wallet app to subsequently start.
   */
  retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3],
  timeoutMs: 3e4
}, iv = "com.solana.mobilewalletadapter.v1";
function ov() {
  if (typeof window > "u" || window.isSecureContext !== !0)
    throw new jn(Wn.ERROR_SECURE_CONTEXT_REQUIRED, "The mobile wallet adapter protocol must be used in a secure context (`https`).");
}
function sv(r) {
  let t;
  try {
    t = new URL(r);
  } catch {
    throw new jn(Wn.ERROR_FORBIDDEN_WALLET_BASE_URL, "Invalid base URL supplied by wallet");
  }
  if (t.protocol !== "https:")
    throw new jn(Wn.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs");
}
function ch(r) {
  return new DataView(r).getUint32(
    0,
    /* littleEndian */
    !1
  );
}
function av(r, t) {
  return tr(this, void 0, void 0, function* () {
    ov();
    const e = yield qb(), n = yield nv(e.publicKey, t == null ? void 0 : t.baseUri), o = `ws://localhost:${n}/solana-wallet`;
    let i;
    const c = (() => {
      const _ = [...ah.retryDelayScheduleMs];
      return () => _.length > 1 ? _.shift() : _[0];
    })();
    let u = 1, p = 0, b = { __type: "disconnected" };
    return new Promise((_, B) => {
      let C;
      const R = {}, O = () => tr(this, void 0, void 0, function* () {
        if (b.__type !== "connecting") {
          console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${b.__type}\`.`);
          return;
        }
        const { associationKeypair: N } = b;
        C.removeEventListener("open", O);
        const $ = yield Wb();
        C.send(yield kb($.publicKey, N.privateKey)), b = {
          __type: "hello_req_sent",
          associationPublicKey: N.publicKey,
          ecdhPrivateKey: $.privateKey
        };
      }), U = (N) => {
        N.wasClean ? b = { __type: "disconnected" } : B(new jn(Wn.ERROR_SESSION_CLOSED, `The wallet session dropped unexpectedly (${N.code}: ${N.reason}).`, { closeEvent: N })), F();
      }, T = (N) => tr(this, void 0, void 0, function* () {
        F(), Date.now() - i >= ah.timeoutMs ? B(new jn(Wn.ERROR_SESSION_TIMEOUT, `Failed to connect to the wallet websocket on port ${n}.`)) : (yield new Promise(($) => {
          const q = c();
          L = window.setTimeout($, q);
        }), z());
      }), P = (N) => tr(this, void 0, void 0, function* () {
        const $ = yield N.data.arrayBuffer();
        switch (b.__type) {
          case "connected":
            try {
              const q = $.slice(0, qi), W = ch(q);
              if (W !== p + 1)
                throw new Error("Encrypted message has invalid sequence number");
              p = W;
              const tt = yield Hb($, b.sharedSecret), ht = R[tt.id];
              delete R[tt.id], ht.resolve(tt.result);
            } catch (q) {
              if (q instanceof Wd) {
                const W = R[q.jsonRpcMessageId];
                delete R[q.jsonRpcMessageId], W.reject(q);
              } else
                throw q;
            }
            break;
          case "hello_req_sent": {
            const q = yield Kb($, b.associationPublicKey, b.ecdhPrivateKey), W = $.slice(jd), tt = W.byteLength !== 0 ? yield (() => tr(this, void 0, void 0, function* () {
              const J = W.slice(0, qi), mt = ch(J);
              if (mt !== p + 1)
                throw new Error("Encrypted message has invalid sequence number");
              return p = mt, Gb(W, q);
            }))() : { protocol_version: "legacy" };
            b = { __type: "connected", sharedSecret: q, sessionProperties: tt };
            const ht = Ob(tt.protocol_version, (J, mt) => tr(this, void 0, void 0, function* () {
              const I = u++;
              return C.send(yield jb({
                id: I,
                jsonrpc: "2.0",
                method: J,
                params: mt ?? {}
              }, q)), new Promise((f, d) => {
                R[I] = {
                  resolve(y) {
                    switch (J) {
                      case "authorize":
                      case "reauthorize": {
                        const { wallet_uri_base: w } = y;
                        if (w != null)
                          try {
                            sv(w);
                          } catch (v) {
                            d(v);
                            return;
                          }
                        break;
                      }
                    }
                    f(y);
                  },
                  reject: d
                };
              });
            }));
            try {
              _(yield r(ht));
            } catch (J) {
              B(J);
            } finally {
              F(), C.close();
            }
            break;
          }
        }
      });
      let F, L;
      const z = () => {
        F && F(), b = { __type: "connecting", associationKeypair: e }, i === void 0 && (i = Date.now()), C = new WebSocket(o, [iv]), C.addEventListener("open", O), C.addEventListener("close", U), C.addEventListener("error", T), C.addEventListener("message", P), F = () => {
          window.clearTimeout(L), C.removeEventListener("open", O), C.removeEventListener("close", U), C.removeEventListener("error", T), C.removeEventListener("message", P);
        };
      };
      z();
    });
  });
}
function cv(r) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var n = 0; n < r.length; n++) {
    var o = r.charAt(n), i = o.charCodeAt(0);
    if (t[i] !== 255)
      throw new TypeError(o + " is ambiguous");
    t[i] = n;
  }
  var c = r.length, u = r.charAt(0), p = Math.log(c) / Math.log(256), b = Math.log(256) / Math.log(c);
  function _(R) {
    if (R instanceof Uint8Array || (ArrayBuffer.isView(R) ? R = new Uint8Array(R.buffer, R.byteOffset, R.byteLength) : Array.isArray(R) && (R = Uint8Array.from(R))), !(R instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (R.length === 0)
      return "";
    for (var O = 0, U = 0, T = 0, P = R.length; T !== P && R[T] === 0; )
      T++, O++;
    for (var F = (P - T) * b + 1 >>> 0, L = new Uint8Array(F); T !== P; ) {
      for (var z = R[T], N = 0, $ = F - 1; (z !== 0 || N < U) && $ !== -1; $--, N++)
        z += 256 * L[$] >>> 0, L[$] = z % c >>> 0, z = z / c >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      U = N, T++;
    }
    for (var q = F - U; q !== F && L[q] === 0; )
      q++;
    for (var W = u.repeat(O); q < F; ++q)
      W += r.charAt(L[q]);
    return W;
  }
  function B(R) {
    if (typeof R != "string")
      throw new TypeError("Expected String");
    if (R.length === 0)
      return new Uint8Array();
    for (var O = 0, U = 0, T = 0; R[O] === u; )
      U++, O++;
    for (var P = (R.length - O) * p + 1 >>> 0, F = new Uint8Array(P); R[O]; ) {
      var L = t[R.charCodeAt(O)];
      if (L === 255)
        return;
      for (var z = 0, N = P - 1; (L !== 0 || z < T) && N !== -1; N--, z++)
        L += c * F[N] >>> 0, F[N] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      T = z, O++;
    }
    for (var $ = P - T; $ !== P && F[$] === 0; )
      $++;
    for (var q = new Uint8Array(U + (P - $)), W = U; $ !== P; )
      q[W++] = F[$++];
    return q;
  }
  function C(R) {
    var O = B(R);
    if (O)
      return O;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: _,
    decodeUnsafe: B,
    decode: C
  };
}
var uv = cv;
const fv = uv, lv = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var hv = fv(lv);
const dv = /* @__PURE__ */ gn(hv);
function Dc(r, t) {
  var e = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(r); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[o]) && (e[n[o]] = r[n[o]]);
  return e;
}
function js(r, t, e, n) {
  function o(i) {
    return i instanceof e ? i : new e(function(c) {
      c(i);
    });
  }
  return new (e || (e = Promise))(function(i, c) {
    function u(_) {
      try {
        b(n.next(_));
      } catch (B) {
        c(B);
      }
    }
    function p(_) {
      try {
        b(n.throw(_));
      } catch (B) {
        c(B);
      }
    }
    function b(_) {
      _.done ? i(_.value) : o(_.value).then(u, p);
    }
    b((n = n.apply(r, t || [])).next());
  });
}
function Vd(r) {
  return window.btoa(String.fromCharCode.call(null, ...r));
}
function zc(r) {
  return new Uint8Array(window.atob(r).split("").map((t) => t.charCodeAt(0)));
}
function uh(r) {
  const t = "version" in r ? r.serialize() : r.serialize({
    requireAllSignatures: !1,
    verifySignatures: !1
  });
  return Vd(t);
}
function pv(r) {
  const e = r[0] * Po + 1;
  return Cf.deserializeMessageVersion(r.slice(e, r.length)) === "legacy" ? sn.from(r) : vs.deserialize(r);
}
function gv(r, t) {
  return js(this, void 0, void 0, function* () {
    return yield av((n) => {
      const o = new Proxy({}, {
        get(i, c) {
          if (i[c] == null)
            switch (c) {
              case "signAndSendTransactions":
                i[c] = function(u) {
                  var { minContextSlot: p, commitment: b, skipPreflight: _, maxRetries: B, waitForCommitmentToSendNextTransaction: C, transactions: R } = u, O = Dc(u, ["minContextSlot", "commitment", "skipPreflight", "maxRetries", "waitForCommitmentToSendNextTransaction", "transactions"]);
                  return js(this, void 0, void 0, function* () {
                    const U = R.map(uh), T = {
                      min_context_slot: p,
                      commitment: b,
                      skip_preflight: _,
                      max_retries: B,
                      wait_for_commitment_to_send_next_transaction: C
                    }, { signatures: P } = yield n.signAndSendTransactions(Object.assign(Object.assign(Object.assign({}, O), Object.values(T).some((L) => L != null) ? { options: T } : null), { payloads: U }));
                    return P.map(zc).map(dv.encode);
                  });
                };
                break;
              case "signMessages":
                i[c] = function(u) {
                  var { payloads: p } = u, b = Dc(u, ["payloads"]);
                  return js(this, void 0, void 0, function* () {
                    const _ = p.map(Vd), { signed_payloads: B } = yield n.signMessages(Object.assign(Object.assign({}, b), { payloads: _ }));
                    return B.map(zc);
                  });
                };
                break;
              case "signTransactions":
                i[c] = function(u) {
                  var { transactions: p } = u, b = Dc(u, ["transactions"]);
                  return js(this, void 0, void 0, function* () {
                    const _ = p.map(uh), { signed_payloads: B } = yield n.signTransactions(Object.assign(Object.assign({}, b), { payloads: _ }));
                    return B.map(zc).map(pv);
                  });
                };
                break;
              default: {
                i[c] = n[c];
                break;
              }
            }
          return i[c];
        },
        defineProperty() {
          return !1;
        },
        deleteProperty() {
          return !1;
        }
      });
      return r(o);
    }, t);
  });
}
function me(r, t, e, n) {
  function o(i) {
    return i instanceof e ? i : new e(function(c) {
      c(i);
    });
  }
  return new (e || (e = Promise))(function(i, c) {
    function u(_) {
      try {
        b(n.next(_));
      } catch (B) {
        c(B);
      }
    }
    function p(_) {
      try {
        b(n.throw(_));
      } catch (B) {
        c(B);
      }
    }
    function b(_) {
      _.done ? i(_.value) : o(_.value).then(u, p);
    }
    b((n = n.apply(r, t || [])).next());
  });
}
function ea(r) {
  return new Uint8Array(window.atob(r).split("").map((t) => t.charCodeAt(0)));
}
function yv() {
  return typeof window < "u" && window.isSecureContext && typeof document < "u" && /android/i.test(navigator.userAgent);
}
const ci = "Mobile Wallet Adapter", mv = 64;
function wv(r) {
  const t = ea(r);
  return new Gt(t);
}
function fh(r) {
  return "version" in r;
}
class bv extends vb {
  constructor(t) {
    var e;
    super(), this.supportedTransactionVersions = /* @__PURE__ */ new Set(
      // FIXME(#244): We can't actually know what versions are supported until we know which wallet we're talking to.
      ["legacy", 0]
    ), this.name = ci, this.url = "https://solanamobile.com/wallets", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg==", this._connecting = !1, this._connectionGeneration = 0, this._readyState = yv() ? ke.Loadable : ke.Unsupported, this._authorizationResultCache = t.authorizationResultCache, this._addressSelector = t.addressSelector, this._appIdentity = t.appIdentity, this._chain = (e = t.chain) !== null && e !== void 0 ? e : t.cluster, this._onWalletNotFound = t.onWalletNotFound, this._readyState !== ke.Unsupported && this._authorizationResultCache.get().then((n) => {
      n && this.declareWalletAsInstalled();
    });
  }
  get publicKey() {
    if (this._publicKey == null && this._selectedAddress != null)
      try {
        this._publicKey = wv(this._selectedAddress);
      } catch (t) {
        throw new Nd(t instanceof Error && (t == null ? void 0 : t.message) || "Unknown error", t);
      }
    return this._publicKey ? this._publicKey : null;
  }
  get connected() {
    return !!this._authorizationResult;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  declareWalletAsInstalled() {
    this._readyState !== ke.Installed && this.emit("readyStateChange", this._readyState = ke.Installed);
  }
  runWithGuard(t) {
    return me(this, void 0, void 0, function* () {
      try {
        return yield t();
      } catch (e) {
        throw this.emit("error", e), e;
      }
    });
  }
  /** @deprecated Use `autoConnect()` instead. */
  autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
    return me(this, void 0, void 0, function* () {
      return yield this.autoConnect();
    });
  }
  autoConnect() {
    return me(this, void 0, void 0, function* () {
      if (!(this.connecting || this.connected))
        return yield this.runWithGuard(() => me(this, void 0, void 0, function* () {
          if (this._readyState !== ke.Installed && this._readyState !== ke.Loadable)
            throw new ko();
          this._connecting = !0;
          try {
            const t = yield this._authorizationResultCache.get();
            t && this.handleAuthorizationResult(t);
          } catch (t) {
            throw new fs(t instanceof Error && t.message || "Unknown error", t);
          } finally {
            this._connecting = !1;
          }
        }));
    });
  }
  connect() {
    return me(this, void 0, void 0, function* () {
      if (!(this.connecting || this.connected))
        return yield this.runWithGuard(() => me(this, void 0, void 0, function* () {
          if (this._readyState !== ke.Installed && this._readyState !== ke.Loadable)
            throw new ko();
          this._connecting = !0;
          try {
            yield this.performAuthorization();
          } catch (t) {
            throw new fs(t instanceof Error && t.message || "Unknown error", t);
          } finally {
            this._connecting = !1;
          }
        }));
    });
  }
  performAuthorization(t) {
    return me(this, void 0, void 0, function* () {
      try {
        const e = yield this._authorizationResultCache.get();
        return e ? (this.handleAuthorizationResult(e), e) : yield this.transact((n) => me(this, void 0, void 0, function* () {
          const o = yield n.authorize({
            chain: this._chain,
            identity: this._appIdentity,
            sign_in_payload: t
          });
          return Promise.all([
            this._authorizationResultCache.set(o),
            this.handleAuthorizationResult(o)
          ]), o;
        }));
      } catch (e) {
        throw new fs(e instanceof Error && e.message || "Unknown error", e);
      }
    });
  }
  handleAuthorizationResult(t) {
    var e;
    return me(this, void 0, void 0, function* () {
      const n = (
        // Case 1: We started from having no authorization.
        this._authorizationResult == null || // Case 2: The number of authorized accounts changed.
        ((e = this._authorizationResult) === null || e === void 0 ? void 0 : e.accounts.length) !== t.accounts.length || // Case 3: The new list of addresses isn't exactly the same as the old list, in the same order.
        this._authorizationResult.accounts.some((o, i) => o.address !== t.accounts[i].address)
      );
      if (this._authorizationResult = t, this.declareWalletAsInstalled(), n) {
        const o = yield this._addressSelector.select(t.accounts.map(({ address: i }) => i));
        o !== this._selectedAddress && (this._selectedAddress = o, delete this._publicKey, this.emit(
          "connect",
          // Having just set `this._selectedAddress`, `this.publicKey` is definitely non-null
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.publicKey
        ));
      }
    });
  }
  performReauthorization(t, e) {
    return me(this, void 0, void 0, function* () {
      try {
        const n = yield t.authorize({
          auth_token: e,
          identity: this._appIdentity
        });
        Promise.all([
          this._authorizationResultCache.set(n),
          this.handleAuthorizationResult(n)
        ]);
      } catch (n) {
        throw this.disconnect(), new Fd(n instanceof Error && (n == null ? void 0 : n.message) || "Unknown error", n);
      }
    });
  }
  disconnect() {
    return me(this, void 0, void 0, function* () {
      this._authorizationResultCache.clear(), this._connecting = !1, this._connectionGeneration++, delete this._authorizationResult, delete this._publicKey, delete this._selectedAddress, this.emit("disconnect");
    });
  }
  transact(t) {
    var e;
    return me(this, void 0, void 0, function* () {
      const n = (e = this._authorizationResult) === null || e === void 0 ? void 0 : e.wallet_uri_base, o = n ? { baseUri: n } : void 0, i = this._connectionGeneration;
      try {
        return yield gv(t, o);
      } catch (c) {
        throw this._connectionGeneration !== i && (yield new Promise(() => {
        })), c instanceof Error && c.name === "SolanaMobileWalletAdapterError" && c.code === "ERROR_WALLET_NOT_FOUND" && (yield this._onWalletNotFound(this)), c;
      }
    });
  }
  assertIsAuthorized() {
    if (!this._authorizationResult || !this._selectedAddress)
      throw new An();
    return {
      authToken: this._authorizationResult.auth_token,
      selectedAddress: this._selectedAddress
    };
  }
  performSignTransactions(t) {
    return me(this, void 0, void 0, function* () {
      const { authToken: e } = this.assertIsAuthorized();
      try {
        return yield this.transact((n) => me(this, void 0, void 0, function* () {
          return yield this.performReauthorization(n, e), yield n.signTransactions({
            transactions: t
          });
        }));
      } catch (n) {
        throw new Di(n == null ? void 0 : n.message, n);
      }
    });
  }
  sendTransaction(t, e, n) {
    return me(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => me(this, void 0, void 0, function* () {
        const { authToken: o } = this.assertIsAuthorized(), i = n == null ? void 0 : n.minContextSlot;
        try {
          return yield this.transact((c) => me(this, void 0, void 0, function* () {
            function u() {
              let B;
              switch (e.commitment) {
                case "confirmed":
                case "finalized":
                case "processed":
                  B = e.commitment;
                  break;
                default:
                  B = "finalized";
              }
              let C;
              switch (n == null ? void 0 : n.preflightCommitment) {
                case "confirmed":
                case "finalized":
                case "processed":
                  C = n.preflightCommitment;
                  break;
                case void 0:
                  C = B;
                  break;
                default:
                  C = "finalized";
              }
              return (C === "finalized" ? 2 : C === "confirmed" ? 1 : 0) < (B === "finalized" ? 2 : B === "confirmed" ? 1 : 0) ? C : B;
            }
            const [p, b, _] = yield Promise.all([
              c.getCapabilities(),
              this.performReauthorization(c, o),
              fh(t) ? null : (
                /**
                 * Unlike versioned transactions, legacy `Transaction` objects
                 * may not have an associated `feePayer` or `recentBlockhash`.
                 * This code exists to patch them up in case they are missing.
                 */
                (() => me(this, void 0, void 0, function* () {
                  var B;
                  if (t.feePayer || (t.feePayer = (B = this.publicKey) !== null && B !== void 0 ? B : void 0), t.recentBlockhash == null) {
                    const { blockhash: C } = yield e.getLatestBlockhash({
                      commitment: u()
                    });
                    t.recentBlockhash = C;
                  }
                }))()
              )
            ]);
            if (p.supports_sign_and_send_transactions)
              return (yield c.signAndSendTransactions({
                minContextSlot: i,
                transactions: [t]
              }))[0];
            {
              const [B] = yield c.signTransactions({
                transactions: [t]
              });
              if (fh(B))
                return yield e.sendTransaction(B);
              {
                const C = B.serialize();
                return yield e.sendRawTransaction(C, Object.assign(Object.assign({}, n), { preflightCommitment: u() }));
              }
            }
          }));
        } catch (c) {
          throw new Pi(c == null ? void 0 : c.message, c);
        }
      }));
    });
  }
  signTransaction(t) {
    return me(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => me(this, void 0, void 0, function* () {
        const [e] = yield this.performSignTransactions([t]);
        return e;
      }));
    });
  }
  signAllTransactions(t) {
    return me(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => me(this, void 0, void 0, function* () {
        return yield this.performSignTransactions(t);
      }));
    });
  }
  signMessage(t) {
    return me(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => me(this, void 0, void 0, function* () {
        const { authToken: e, selectedAddress: n } = this.assertIsAuthorized();
        try {
          return yield this.transact((o) => me(this, void 0, void 0, function* () {
            yield this.performReauthorization(o, e);
            const [i] = yield o.signMessages({
              addresses: [n],
              payloads: [t]
            });
            return i.slice(-mv);
          }));
        } catch (o) {
          throw new $d(o == null ? void 0 : o.message, o);
        }
      }));
    });
  }
  signIn(t) {
    return me(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => me(this, void 0, void 0, function* () {
        var e, n;
        if (this._readyState !== ke.Installed && this._readyState !== ke.Loadable)
          throw new ko();
        this._connecting = !0;
        try {
          const o = yield this.performAuthorization(Object.assign(Object.assign({}, t), { domain: (e = t == null ? void 0 : t.domain) !== null && e !== void 0 ? e : window.location.host }));
          if (!o.sign_in_result)
            throw new Error("Sign in failed, no sign in result returned by wallet");
          const i = o.sign_in_result.address;
          return {
            account: Object.assign(Object.assign({}, (n = o.accounts.find((u) => u.address == i)) !== null && n !== void 0 ? n : {
              address: i
            }), { publicKey: ea(i) }),
            signedMessage: ea(o.sign_in_result.signed_message),
            signature: ea(o.sign_in_result.signature)
          };
        } catch (o) {
          throw new fs(o instanceof Error && o.message || "Unknown error", o);
        } finally {
          this._connecting = !1;
        }
      }));
    });
  }
}
function vv() {
  return {
    select(r) {
      return me(this, void 0, void 0, function* () {
        return r[0];
      });
    }
  };
}
const qc = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
function xv() {
  let r;
  try {
    r = window.localStorage;
  } catch {
  }
  return {
    clear() {
      return me(this, void 0, void 0, function* () {
        if (r)
          try {
            r.removeItem(qc);
          } catch {
          }
      });
    },
    get() {
      return me(this, void 0, void 0, function* () {
        if (r)
          try {
            return JSON.parse(r.getItem(qc)) || void 0;
          } catch {
          }
      });
    },
    set(t) {
      return me(this, void 0, void 0, function* () {
        if (r)
          try {
            r.setItem(qc, JSON.stringify(t));
          } catch {
          }
      });
    }
  };
}
function Ev(r) {
  return me(this, void 0, void 0, function* () {
    typeof window < "u" && window.location.assign(r.url);
  });
}
function _v() {
  return Ev;
}
globalThis && globalThis.__classPrivateFieldSet;
globalThis && globalThis.__classPrivateFieldGet;
function Sv(r, t) {
  if (r === t)
    return !0;
  const e = r.length;
  if (e !== t.length)
    return !1;
  for (let n = 0; n < e; n++)
    if (r[n] !== t[n])
      return !1;
  return !0;
}
var Ye = globalThis && globalThis.__classPrivateFieldSet || function(r, t, e, n, o) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !o)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !o : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? o.call(r, e) : o ? o.value = e : t.set(r, e), e;
}, Tt = globalThis && globalThis.__classPrivateFieldGet || function(r, t, e, n) {
  if (e === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !n : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? n : e === "a" ? n.call(r) : n ? n.value : t.get(r);
}, dr, Lr, Wi, ji, Ci, ls, ba, we, va, Fu, ra, Nu, ps, $u, lh, hh, dh, ph;
class Bv extends Pd {
  constructor({ wallet: t }) {
    super(), dr.add(this), Lr.set(this, void 0), Wi.set(this, void 0), ji.set(this, void 0), Ci.set(this, void 0), ls.set(this, void 0), ba.set(this, void 0), we.set(this, void 0), va.set(this, typeof window > "u" || typeof document > "u" ? ke.Unsupported : ke.Installed), $u.set(this, (e) => {
      if ("accounts" in e) {
        const n = Tt(this, we, "f").accounts[0];
        Tt(this, Lr, "f") && !Tt(this, Ci, "f") && n !== Tt(this, Lr, "f") && (n ? Tt(this, dr, "m", ra).call(this, n) : (this.emit("error", new Fd()), Tt(this, dr, "m", Nu).call(this)));
      }
      "features" in e && Tt(this, dr, "m", ps).call(this);
    }), Ye(this, we, t, "f"), Ye(this, Lr, null, "f"), Ye(this, Wi, null, "f"), Ye(this, ji, !1, "f"), Ye(this, Ci, !1, "f"), Ye(this, ls, Tt(this, we, "f").features[zd].on("change", Tt(this, $u, "f")), "f"), Tt(this, dr, "m", ps).call(this);
  }
  get name() {
    return Tt(this, we, "f").name;
  }
  get url() {
    return "https://github.com/solana-labs/wallet-standard";
  }
  get icon() {
    return Tt(this, we, "f").icon;
  }
  get readyState() {
    return Tt(this, va, "f");
  }
  get publicKey() {
    return Tt(this, Wi, "f");
  }
  get connecting() {
    return Tt(this, ji, "f");
  }
  get supportedTransactionVersions() {
    return Tt(this, ba, "f");
  }
  get wallet() {
    return Tt(this, we, "f");
  }
  get standard() {
    return !0;
  }
  destroy() {
    Ye(this, Lr, null, "f"), Ye(this, Wi, null, "f"), Ye(this, ji, !1, "f"), Ye(this, Ci, !1, "f");
    const t = Tt(this, ls, "f");
    t && (Ye(this, ls, null, "f"), t());
  }
  async autoConnect() {
    return Tt(this, dr, "m", Fu).call(this, { silent: !0 });
  }
  async connect() {
    return Tt(this, dr, "m", Fu).call(this);
  }
  async disconnect() {
    if (rh in Tt(this, we, "f").features)
      try {
        Ye(this, Ci, !0, "f"), await Tt(this, we, "f").features[rh].disconnect();
      } catch (t) {
        this.emit("error", new mb(t == null ? void 0 : t.message, t));
      } finally {
        Ye(this, Ci, !1, "f");
      }
    Tt(this, dr, "m", Nu).call(this);
  }
  async sendTransaction(t, e, n = {}) {
    try {
      const o = Tt(this, Lr, "f");
      if (!o)
        throw new An();
      let i;
      if (ui in Tt(this, we, "f").features)
        if (o.features.includes(ui))
          i = ui;
        else if (hr in Tt(this, we, "f").features && o.features.includes(hr))
          i = hr;
        else
          throw new _o();
      else if (hr in Tt(this, we, "f").features) {
        if (!o.features.includes(hr))
          throw new _o();
        i = hr;
      } else
        throw new us();
      const c = Mb(e.rpcEndpoint);
      if (!o.chains.includes(c))
        throw new Pi();
      try {
        const { signers: u, ...p } = n;
        let b;
        if (zi(t) ? (u != null && u.length && t.sign(u), b = t.serialize()) : (t = await this.prepareTransaction(t, e, p), u != null && u.length && t.partialSign(...u), b = new Uint8Array(t.serialize({
          requireAllSignatures: !1,
          verifySignatures: !1
        }))), i === ui) {
          const [_] = await Tt(this, we, "f").features[ui].signAndSendTransaction({
            account: o,
            chain: c,
            transaction: b,
            options: {
              preflightCommitment: $c(p.preflightCommitment || e.commitment),
              skipPreflight: p.skipPreflight,
              maxRetries: p.maxRetries,
              minContextSlot: p.minContextSlot
            }
          });
          return or.encode(_.signature);
        } else {
          const [_] = await Tt(this, we, "f").features[hr].signTransaction({
            account: o,
            chain: c,
            transaction: b,
            options: {
              preflightCommitment: $c(p.preflightCommitment || e.commitment),
              minContextSlot: p.minContextSlot
            }
          });
          return await e.sendRawTransaction(_.signedTransaction, {
            ...p,
            preflightCommitment: $c(p.preflightCommitment || e.commitment)
          });
        }
      } catch (u) {
        throw u instanceof Tr ? u : new Pi(u == null ? void 0 : u.message, u);
      }
    } catch (o) {
      throw this.emit("error", o), o;
    }
  }
}
Lr = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), ls = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), $u = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakSet(), Fu = async function(t) {
  try {
    if (this.connected || this.connecting)
      return;
    if (Tt(this, va, "f") !== ke.Installed)
      throw new ko();
    if (Ye(this, ji, !0, "f"), !Tt(this, we, "f").accounts.length)
      try {
        await Tt(this, we, "f").features[Dd].connect(t);
      } catch (n) {
        throw new fs(n == null ? void 0 : n.message, n);
      }
    const e = Tt(this, we, "f").accounts[0];
    if (!e)
      throw new _o();
    Tt(this, dr, "m", ra).call(this, e);
  } catch (e) {
    throw this.emit("error", e), e;
  } finally {
    Ye(this, ji, !1, "f");
  }
}, ra = function(t) {
  let e;
  try {
    e = new Gt(t.address);
  } catch (n) {
    throw new Nd(n == null ? void 0 : n.message, n);
  }
  Ye(this, Lr, t, "f"), Ye(this, Wi, e, "f"), Tt(this, dr, "m", ps).call(this), this.emit("connect", e);
}, Nu = function() {
  Ye(this, Lr, null, "f"), Ye(this, Wi, null, "f"), Tt(this, dr, "m", ps).call(this), this.emit("disconnect");
}, ps = function() {
  var e, n;
  const t = ui in Tt(this, we, "f").features ? Tt(this, we, "f").features[ui].supportedTransactionVersions : Tt(this, we, "f").features[hr].supportedTransactionVersions;
  Ye(this, ba, Sv(t, ["legacy"]) ? null : new Set(t), "f"), hr in Tt(this, we, "f").features && ((e = Tt(this, Lr, "f")) != null && e.features.includes(hr)) ? (this.signTransaction = Tt(this, dr, "m", lh), this.signAllTransactions = Tt(this, dr, "m", hh)) : (delete this.signTransaction, delete this.signAllTransactions), rs in Tt(this, we, "f").features && ((n = Tt(this, Lr, "f")) != null && n.features.includes(rs)) ? this.signMessage = Tt(this, dr, "m", dh) : delete this.signMessage, Nc in Tt(this, we, "f").features ? this.signIn = Tt(this, dr, "m", ph) : delete this.signIn;
}, lh = async function(t) {
  try {
    const e = Tt(this, Lr, "f");
    if (!e)
      throw new An();
    if (!(hr in Tt(this, we, "f").features))
      throw new us();
    if (!e.features.includes(hr))
      throw new _o();
    try {
      const o = (await Tt(this, we, "f").features[hr].signTransaction({
        account: e,
        transaction: zi(t) ? t.serialize() : new Uint8Array(t.serialize({
          requireAllSignatures: !1,
          verifySignatures: !1
        }))
      }))[0].signedTransaction;
      return zi(t) ? vs.deserialize(o) : sn.from(o);
    } catch (n) {
      throw n instanceof Tr ? n : new Di(n == null ? void 0 : n.message, n);
    }
  } catch (e) {
    throw this.emit("error", e), e;
  }
}, hh = async function(t) {
  try {
    const e = Tt(this, Lr, "f");
    if (!e)
      throw new An();
    if (!(hr in Tt(this, we, "f").features))
      throw new us();
    if (!e.features.includes(hr))
      throw new _o();
    try {
      const n = await Tt(this, we, "f").features[hr].signTransaction(...t.map((o) => ({
        account: e,
        transaction: zi(o) ? o.serialize() : new Uint8Array(o.serialize({
          requireAllSignatures: !1,
          verifySignatures: !1
        }))
      })));
      return t.map((o, i) => {
        const c = n[i].signedTransaction;
        return zi(o) ? vs.deserialize(c) : sn.from(c);
      });
    } catch (n) {
      throw new Di(n == null ? void 0 : n.message, n);
    }
  } catch (e) {
    throw this.emit("error", e), e;
  }
}, dh = async function(t) {
  try {
    const e = Tt(this, Lr, "f");
    if (!e)
      throw new An();
    if (!(rs in Tt(this, we, "f").features))
      throw new us();
    if (!e.features.includes(rs))
      throw new _o();
    try {
      return (await Tt(this, we, "f").features[rs].signMessage({
        account: e,
        message: t
      }))[0].signature;
    } catch (n) {
      throw new $d(n == null ? void 0 : n.message, n);
    }
  } catch (e) {
    throw this.emit("error", e), e;
  }
}, ph = async function(t = {}) {
  try {
    if (!(Nc in Tt(this, we, "f").features))
      throw new us();
    let e;
    try {
      [e] = await Tt(this, we, "f").features[Nc].signIn(t);
    } catch (n) {
      throw new eh(n == null ? void 0 : n.message, n);
    }
    if (!e)
      throw new eh();
    return Tt(this, dr, "m", ra).call(this, e.account), e;
  } catch (e) {
    throw this.emit("error", e), e;
  }
};
const Av = xb;
var Iv = globalThis && globalThis.__classPrivateFieldSet || function(r, t, e, n, o) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !o)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !o : !t.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? o.call(r, e) : o ? o.value = e : t.set(r, e), e;
}, Mv = globalThis && globalThis.__classPrivateFieldGet || function(r, t, e, n) {
  if (e === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !n : !t.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? n : e === "a" ? n.call(r) : n ? n.value : t.get(r);
}, na;
let Wr;
const ia = /* @__PURE__ */ new Set(), So = {};
function Rv() {
  if (Wr || (Wr = Object.freeze({ register: gh, get: kv, on: Tv }), typeof window > "u"))
    return Wr;
  const r = Object.freeze({ register: gh });
  try {
    window.addEventListener("wallet-standard:register-wallet", ({ detail: t }) => t(r));
  } catch (t) {
    console.error(`wallet-standard:register-wallet event listener could not be added
`, t);
  }
  try {
    window.dispatchEvent(new Cv(r));
  } catch (t) {
    console.error(`wallet-standard:app-ready event could not be dispatched
`, t);
  }
  return Wr;
}
function gh(...r) {
  var t;
  return r = r.filter((e) => !ia.has(e)), r.length ? (r.forEach((e) => ia.add(e)), (t = So.register) == null || t.forEach((e) => Pu(() => e(...r))), function() {
    var n;
    r.forEach((o) => ia.delete(o)), (n = So.unregister) == null || n.forEach((o) => Pu(() => o(...r)));
  }) : () => {
  };
}
function kv() {
  return [...ia];
}
function Tv(r, t) {
  var e;
  return (e = So[r]) != null && e.push(t) || (So[r] = [t]), function() {
    var o;
    So[r] = (o = So[r]) == null ? void 0 : o.filter((i) => t !== i);
  };
}
function Pu(r) {
  try {
    r();
  } catch (t) {
    console.error(t);
  }
}
class Cv extends Event {
  constructor(t) {
    super("wallet-standard:app-ready", {
      bubbles: !1,
      cancelable: !1,
      composed: !1
    }), na.set(this, void 0), Iv(this, na, t, "f");
  }
  get detail() {
    return Mv(this, na, "f");
  }
  get type() {
    return "wallet-standard:app-ready";
  }
  /** @deprecated */
  preventDefault() {
    throw new Error("preventDefault cannot be called");
  }
  /** @deprecated */
  stopImmediatePropagation() {
    throw new Error("stopImmediatePropagation cannot be called");
  }
  /** @deprecated */
  stopPropagation() {
    throw new Error("stopPropagation cannot be called");
  }
}
na = /* @__PURE__ */ new WeakMap();
function Lv() {
  if (Wr || (Wr = Rv(), typeof window > "u"))
    return Wr;
  const r = window.navigator.wallets || [];
  if (!Array.isArray(r))
    return console.error("window.navigator.wallets is not an array"), Wr;
  const { register: t } = Wr, e = (...n) => n.forEach((o) => Pu(() => o({ register: t })));
  try {
    Object.defineProperty(window.navigator, "wallets", {
      value: Object.freeze({ push: e })
    });
  } catch {
    return console.error("window.navigator.wallets could not be set"), Wr;
  }
  return e(...r), Wr;
}
function Uv(r) {
  const t = yh(() => /* @__PURE__ */ new Set()), { get: e, on: n } = yh(() => Lv()), [o, i] = yr(() => mh(e()));
  Mr(() => {
    const u = [
      n("register", (...p) => i((b) => [...b, ...mh(p)])),
      n("unregister", (...p) => i((b) => b.filter((_) => p.some((B) => B === _.wallet))))
    ];
    return () => u.forEach((p) => p());
  }, [n]);
  const c = Ov(o);
  return Mr(() => {
    if (!c)
      return;
    const u = new Set(o);
    new Set(c.filter((b) => !u.has(b))).forEach((b) => b.destroy());
  }, [c, o]), Mr(() => () => o.forEach((u) => u.destroy()), []), Ur(() => [
    ...o,
    ...r.filter(({ name: u }) => o.some((p) => p.name === u) ? (t.has(u) || (t.add(u), console.warn(`${u} was registered as a Standard Wallet. The Wallet Adapter for ${u} can be removed from your app.`)), !1) : !0)
  ], [o, r, t]);
}
function yh(r) {
  const t = Or();
  return t.current || (t.current = { value: r() }), t.current.value;
}
function Ov(r) {
  const t = Or();
  return Mr(() => {
    t.current = r;
  }), t.current;
}
function mh(r) {
  return r.filter(Av).map((t) => new Bv({ wallet: t }));
}
var To;
(function(r) {
  r[r.DESKTOP_WEB = 0] = "DESKTOP_WEB", r[r.MOBILE_WEB = 1] = "MOBILE_WEB";
})(To || (To = {}));
function Fv(r) {
  return /(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(r);
}
function Nv({ adapters: r, userAgentString: t }) {
  return r.some((e) => e.name !== ci && e.readyState === ke.Installed) ? To.DESKTOP_WEB : t && // Step 1: Check whether we're on a platform that supports MWA at all.
  /android/i.test(t) && // Step 2: Determine that we are *not* running in a WebView.
  !Fv(t) ? To.MOBILE_WEB : To.DESKTOP_WEB;
}
function $v(r) {
  return r ? /devnet/i.test(r) ? "devnet" : /testnet/i.test(r) ? "testnet" : "mainnet-beta" : "mainnet-beta";
}
function Pv({ children: r, wallets: t, adapter: e, isUnloadingRef: n, onAutoConnectRequest: o, onConnectError: i, onError: c, onSelectWallet: u }) {
  const p = Or(!1), [b, _] = yr(!1), B = Or(!1), [C, R] = yr(!1), [O, U] = yr(() => (e == null ? void 0 : e.publicKey) ?? null), [T, P] = yr(() => (e == null ? void 0 : e.connected) ?? !1), F = Or(c);
  Mr(() => (F.current = c, () => {
    F.current = void 0;
  }), [c]);
  const L = Or((d, y) => (n.current || (F.current ? F.current(d, y) : (console.error(d, y), d instanceof ko && typeof window < "u" && y && window.open(y.url, "_blank"))), d)), [z, N] = yr(() => t.map((d) => ({
    adapter: d,
    readyState: d.readyState
  })).filter(({ readyState: d }) => d !== ke.Unsupported));
  Mr(() => {
    N((y) => t.map((w, v) => {
      const x = y[v];
      return x && x.adapter === w && x.readyState === w.readyState ? x : {
        adapter: w,
        readyState: w.readyState
      };
    }).filter(({ readyState: w }) => w !== ke.Unsupported));
    function d(y) {
      N((w) => {
        const v = w.findIndex(({ adapter: A }) => A === this);
        if (v === -1)
          return w;
        const { adapter: x } = w[v];
        return [
          ...w.slice(0, v),
          { adapter: x, readyState: y },
          ...w.slice(v + 1)
        ].filter(({ readyState: A }) => A !== ke.Unsupported);
      });
    }
    return t.forEach((y) => y.on("readyStateChange", d, y)), () => {
      t.forEach((y) => y.off("readyStateChange", d, y));
    };
  }, [e, t]);
  const $ = Ur(() => z.find((d) => d.adapter === e) ?? null, [e, z]);
  Mr(() => {
    if (!e)
      return;
    const d = (v) => {
      U(v), p.current = !1, _(!1), P(!0), B.current = !1, R(!1);
    }, y = () => {
      n.current || (U(null), p.current = !1, _(!1), P(!1), B.current = !1, R(!1));
    }, w = (v) => {
      L.current(v, e);
    };
    return e.on("connect", d), e.on("disconnect", y), e.on("error", w), () => {
      e.off("connect", d), e.off("disconnect", y), e.off("error", w), y();
    };
  }, [e, n]);
  const q = Or(!1);
  Mr(() => () => {
    q.current = !1;
  }, [e]), Mr(() => {
    q.current || p.current || T || !o || !(($ == null ? void 0 : $.readyState) === ke.Installed || ($ == null ? void 0 : $.readyState) === ke.Loadable) || (p.current = !0, _(!0), q.current = !0, async function() {
      try {
        await o();
      } catch {
        i();
      } finally {
        _(!1), p.current = !1;
      }
    }());
  }, [T, o, i, $]);
  const W = mr(async (d, y, w) => {
    if (!e)
      throw L.current(new nh());
    if (!T)
      throw L.current(new An(), e);
    return await e.sendTransaction(d, y, w);
  }, [e, T]), tt = Ur(() => e && "signTransaction" in e ? async (d) => {
    if (!T)
      throw L.current(new An(), e);
    return await e.signTransaction(d);
  } : void 0, [e, T]), ht = Ur(() => e && "signAllTransactions" in e ? async (d) => {
    if (!T)
      throw L.current(new An(), e);
    return await e.signAllTransactions(d);
  } : void 0, [e, T]), J = Ur(() => e && "signMessage" in e ? async (d) => {
    if (!T)
      throw L.current(new An(), e);
    return await e.signMessage(d);
  } : void 0, [e, T]), mt = Ur(() => e && "signIn" in e ? async (d) => await e.signIn(d) : void 0, [e]), I = mr(async () => {
    if (p.current || B.current || $ != null && $.adapter.connected)
      return;
    if (!$)
      throw L.current(new nh());
    const { adapter: d, readyState: y } = $;
    if (!(y === ke.Installed || y === ke.Loadable))
      throw L.current(new ko(), d);
    p.current = !0, _(!0);
    try {
      await d.connect();
    } catch (w) {
      throw i(), w;
    } finally {
      _(!1), p.current = !1;
    }
  }, [i, $]), f = mr(async () => {
    if (!B.current && e) {
      B.current = !0, R(!0);
      try {
        await e.disconnect();
      } finally {
        R(!1), B.current = !1;
      }
    }
  }, [e]);
  return lt.createElement(qd.Provider, { value: {
    autoConnect: !!o,
    wallets: z,
    wallet: $,
    publicKey: O,
    connected: T,
    connecting: b,
    disconnecting: C,
    select: u,
    connect: I,
    disconnect: f,
    sendTransaction: W,
    signTransaction: tt,
    signAllTransactions: ht,
    signMessage: J,
    signIn: mt
  } }, r);
}
let Wc;
function Dv() {
  var r;
  return Wc === void 0 && (Wc = ((r = globalThis.navigator) == null ? void 0 : r.userAgent) ?? null), Wc;
}
function Hs(r) {
  const t = Dv();
  return Nv({ adapters: r, userAgentString: t }) === To.MOBILE_WEB;
}
function zv() {
  const r = globalThis.location;
  if (r)
    return `${r.protocol}//${r.host}`;
}
function qv({ children: r, wallets: t, autoConnect: e, localStorageKey: n = "walletName", onError: o }) {
  const { connection: i } = db(), c = Uv(t), u = Ur(() => {
    if (!Hs(c))
      return null;
    const F = c.find((L) => L.name === ci);
    return F || new bv({
      addressSelector: vv(),
      appIdentity: {
        uri: zv()
      },
      authorizationResultCache: xv(),
      cluster: $v(i == null ? void 0 : i.rpcEndpoint),
      onWalletNotFound: _v()
    });
  }, [c, i == null ? void 0 : i.rpcEndpoint]), p = Ur(() => u == null || c.indexOf(u) !== -1 ? c : [u, ...c], [c, u]), [b, _] = _b(n, Hs(c) ? ci : null), B = Ur(() => p.find((F) => F.name === b) ?? null, [p, b]), C = mr((F) => {
    b !== F && (B && // Selecting a wallet other than the mobile wallet adapter is not
    // sufficient reason to call `disconnect` on the mobile wallet adapter.
    // Calling `disconnect` on the mobile wallet adapter causes the entire
    // authorization store to be wiped.
    B.name !== ci && B.disconnect(), _(F));
  }, [B, _, b]);
  Mr(() => {
    if (!B)
      return;
    function F() {
      U.current || b === ci && Hs(c) || _(null);
    }
    return B.on("disconnect", F), () => {
      B.off("disconnect", F);
    };
  }, [B, c, _, b]);
  const R = Or(!1), O = Ur(() => {
    if (!(!e || !B))
      return async () => {
        (e === !0 || await e(B)) && (R.current ? await B.connect() : await B.autoConnect());
      };
  }, [e, B]), U = Or(!1);
  Mr(() => {
    if (b === ci && Hs(c)) {
      U.current = !1;
      return;
    }
    function F() {
      U.current = !0;
    }
    return window.addEventListener("beforeunload", F), () => {
      window.removeEventListener("beforeunload", F);
    };
  }, [c, b]);
  const T = mr(() => {
    B && B.name !== ci && C(null);
  }, [B, C]), P = mr((F) => {
    R.current = !0, C(F);
  }, [C]);
  return lt.createElement(Pv, { wallets: p, adapter: B, isUnloadingRef: U, onAutoConnectRequest: O, onConnectError: T, onError: o, onSelectWallet: P }, r);
}
function W8({ state: r, onClick: t, children: e, className: n }) {
  const { publicKey: o } = Ts();
  if (!o)
    return null;
  const i = y1("btn", n);
  return /* @__PURE__ */ Ue.jsx(
    "button",
    {
      className: i,
      onClick: t,
      disabled: r === "loading",
      children: e
    }
  );
}
const Zd = {
  setVisible(r) {
    console.error(Yd("call", "setVisible"));
  },
  visible: !1
};
Object.defineProperty(Zd, "visible", {
  get() {
    return console.error(Yd("read", "visible")), !1;
  }
});
function Yd(r, t) {
  return `You have tried to  ${r} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
}
const Xd = nf(Zd);
function Jd() {
  return of(Xd);
}
function Wv({ onSelectWallet: r }) {
  const { connect: t, connected: e, connecting: n, disconnect: o, disconnecting: i, publicKey: c, select: u, wallet: p, wallets: b } = Ts();
  let _;
  n ? _ = "connecting" : e ? _ = "connected" : i ? _ = "disconnecting" : p ? _ = "has-wallet" : _ = "no-wallet";
  const B = mr(() => {
    t().catch(() => {
    });
  }, [t]), C = mr(() => {
    o().catch(() => {
    });
  }, [o]), R = mr(() => {
    r({ onSelectWallet: u, wallets: b });
  }, [r, u, b]);
  return {
    buttonState: _,
    onConnect: _ === "has-wallet" ? B : void 0,
    onDisconnect: _ !== "disconnecting" && _ !== "no-wallet" ? C : void 0,
    onSelectWallet: R,
    publicKey: c ?? void 0,
    walletIcon: p == null ? void 0 : p.adapter.icon,
    walletName: p == null ? void 0 : p.adapter.name
  };
}
const Qd = (r) => lt.createElement(
  "button",
  { className: `wallet-adapter-button ${r.className || ""}`, disabled: r.disabled, style: r.style, onClick: r.onClick, tabIndex: r.tabIndex || 0, type: "button" },
  r.startIcon && lt.createElement("i", { className: "wallet-adapter-button-start-icon" }, r.startIcon),
  r.children,
  r.endIcon && lt.createElement("i", { className: "wallet-adapter-button-end-icon" }, r.endIcon)
), tp = ({ wallet: r, ...t }) => r && lt.createElement("img", { src: r.adapter.icon, alt: `${r.adapter.name} icon`, ...t });
function jv({ walletIcon: r, walletName: t, ...e }) {
  return lt.createElement(Qd, { ...e, className: "wallet-adapter-button-trigger", startIcon: r && t ? lt.createElement(tp, { wallet: { adapter: { icon: r, name: t } } }) : void 0 });
}
function Hv({ children: r, labels: t, ...e }) {
  const { setVisible: n } = Jd(), { buttonState: o, onConnect: i, onDisconnect: c, publicKey: u, walletIcon: p, walletName: b } = Wv({
    onSelectWallet() {
      n(!0);
    }
  }), [_, B] = yr(!1), [C, R] = yr(!1), O = Or(null);
  Mr(() => {
    const T = (P) => {
      const F = O.current;
      !F || F.contains(P.target) || R(!1);
    };
    return document.addEventListener("mousedown", T), document.addEventListener("touchstart", T), () => {
      document.removeEventListener("mousedown", T), document.removeEventListener("touchstart", T);
    };
  }, []);
  const U = Ur(() => {
    if (r)
      return r;
    if (u) {
      const T = u.toBase58();
      return T.slice(0, 4) + ".." + T.slice(-4);
    } else
      return o === "connecting" || o === "has-wallet" ? t[o] : t["no-wallet"];
  }, [o, r, t, u]);
  return lt.createElement(
    "div",
    { className: "wallet-adapter-dropdown" },
    lt.createElement(jv, { ...e, "aria-expanded": C, style: { pointerEvents: C ? "none" : "auto", ...e.style }, onClick: () => {
      switch (o) {
        case "no-wallet":
          n(!0);
          break;
        case "has-wallet":
          i && i();
          break;
        case "connected":
          R(!0);
          break;
      }
    }, walletIcon: p, walletName: b }, U),
    lt.createElement(
      "ul",
      { "aria-label": "dropdown-list", className: `wallet-adapter-dropdown-list ${C && "wallet-adapter-dropdown-list-active"}`, ref: O, role: "menu" },
      u ? lt.createElement("li", { className: "wallet-adapter-dropdown-list-item", onClick: async () => {
        await navigator.clipboard.writeText(u.toBase58()), B(!0), setTimeout(() => B(!1), 400);
      }, role: "menuitem" }, _ ? t.copied : t["copy-address"]) : null,
      lt.createElement("li", { className: "wallet-adapter-dropdown-list-item", onClick: () => {
        n(!0), R(!1);
      }, role: "menuitem" }, t["change-wallet"]),
      c ? lt.createElement("li", { className: "wallet-adapter-dropdown-list-item", onClick: () => {
        c(), R(!1);
      }, role: "menuitem" }, t.disconnect) : null
    )
  );
}
const wh = ({ id: r, children: t, expanded: e = !1 }) => {
  const n = Or(null), o = Or(!0), i = "height 250ms ease-out", c = () => {
    const p = n.current;
    p && requestAnimationFrame(() => {
      p.style.height = p.scrollHeight + "px";
    });
  }, u = () => {
    const p = n.current;
    p && requestAnimationFrame(() => {
      p.style.height = p.offsetHeight + "px", p.style.overflow = "hidden", requestAnimationFrame(() => {
        p.style.height = "0";
      });
    });
  };
  return ua(() => {
    e ? c() : u();
  }, [e]), ua(() => {
    const p = n.current;
    if (!p)
      return;
    function b() {
      p && (p.style.overflow = e ? "initial" : "hidden", e && (p.style.height = "auto"));
    }
    function _(B) {
      p && B.target === p && B.propertyName === "height" && b();
    }
    return o.current && (b(), o.current = !1), p.addEventListener("transitionend", _), () => p.removeEventListener("transitionend", _);
  }, [e]), lt.createElement("div", { className: "wallet-adapter-collapse", id: r, ref: n, role: "region", style: { height: 0, transition: o.current ? void 0 : i } }, t);
}, jc = ({ handleClick: r, tabIndex: t, wallet: e }) => lt.createElement(
  "li",
  null,
  lt.createElement(
    Qd,
    { onClick: r, startIcon: lt.createElement(tp, { wallet: e }), tabIndex: t },
    e.adapter.name,
    e.readyState === ke.Installed && lt.createElement("span", null, "Detected")
  )
), Kv = () => lt.createElement(
  "svg",
  { width: "97", height: "96", viewBox: "0 0 97 96", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  lt.createElement("circle", { cx: "48.5", cy: "48", r: "48", fill: "url(#paint0_linear_880_5115)", fillOpacity: "0.1" }),
  lt.createElement("circle", { cx: "48.5", cy: "48", r: "47", stroke: "url(#paint1_linear_880_5115)", strokeOpacity: "0.4", strokeWidth: "2" }),
  lt.createElement(
    "g",
    { clipPath: "url(#clip0_880_5115)" },
    lt.createElement("path", { d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z", fill: "url(#paint2_linear_880_5115)" }),
    lt.createElement("path", { d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z", fill: "url(#paint3_linear_880_5115)" })
  ),
  lt.createElement(
    "defs",
    null,
    lt.createElement(
      "linearGradient",
      { id: "paint0_linear_880_5115", x1: "3.41664", y1: "98.0933", x2: "103.05", y2: "8.42498", gradientUnits: "userSpaceOnUse" },
      lt.createElement("stop", { stopColor: "#9945FF" }),
      lt.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      lt.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      lt.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      lt.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      lt.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    lt.createElement(
      "linearGradient",
      { id: "paint1_linear_880_5115", x1: "3.41664", y1: "98.0933", x2: "103.05", y2: "8.42498", gradientUnits: "userSpaceOnUse" },
      lt.createElement("stop", { stopColor: "#9945FF" }),
      lt.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      lt.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      lt.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      lt.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      lt.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    lt.createElement(
      "linearGradient",
      { id: "paint2_linear_880_5115", x1: "25.9583", y1: "68.7101", x2: "67.2337", y2: "23.7879", gradientUnits: "userSpaceOnUse" },
      lt.createElement("stop", { stopColor: "#9945FF" }),
      lt.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      lt.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      lt.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      lt.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      lt.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    lt.createElement(
      "linearGradient",
      { id: "paint3_linear_880_5115", x1: "58.3326", y1: "49.4467", x2: "61.0002", y2: "45.4453", gradientUnits: "userSpaceOnUse" },
      lt.createElement("stop", { stopColor: "#9945FF" }),
      lt.createElement("stop", { offset: "0.14", stopColor: "#8A53F4" }),
      lt.createElement("stop", { offset: "0.42", stopColor: "#6377D6" }),
      lt.createElement("stop", { offset: "0.79", stopColor: "#24B0A7" }),
      lt.createElement("stop", { offset: "0.99", stopColor: "#00D18C" }),
      lt.createElement("stop", { offset: "1", stopColor: "#00D18C" })
    ),
    lt.createElement(
      "clipPath",
      { id: "clip0_880_5115" },
      lt.createElement("rect", { width: "48", height: "48", fill: "white", transform: "translate(24.5 24)" })
    )
  )
), Gv = ({ className: r = "", container: t = "body" }) => {
  const e = Or(null), { wallets: n, select: o } = Ts(), { setVisible: i } = Jd(), [c, u] = yr(!1), [p, b] = yr(!1), [_, B] = yr(null), [C, R] = Ur(() => {
    const L = [], z = [];
    for (const N of n)
      N.readyState === ke.Installed ? L.push(N) : z.push(N);
    return L.length ? [L, z] : [z, []];
  }, [n]), O = mr(() => {
    b(!1), setTimeout(() => i(!1), 150);
  }, [i]), U = mr((L) => {
    L.preventDefault(), O();
  }, [O]), T = mr((L, z) => {
    o(z), U(L);
  }, [o, U]), P = mr(() => u(!c), [c]), F = mr((L) => {
    const z = e.current;
    if (!z)
      return;
    const N = z.querySelectorAll("button"), $ = N[0], q = N[N.length - 1];
    L.shiftKey ? document.activeElement === $ && (q.focus(), L.preventDefault()) : document.activeElement === q && ($.focus(), L.preventDefault());
  }, [e]);
  return ua(() => {
    const L = (N) => {
      N.key === "Escape" ? O() : N.key === "Tab" && F(N);
    }, { overflow: z } = window.getComputedStyle(document.body);
    return setTimeout(() => b(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", L, !1), () => {
      document.body.style.overflow = z, window.removeEventListener("keydown", L, !1);
    };
  }, [O, F]), ua(() => B(document.querySelector(t)), [t]), _ && h1(lt.createElement(
    "div",
    { "aria-labelledby": "wallet-adapter-modal-title", "aria-modal": "true", className: `wallet-adapter-modal ${p && "wallet-adapter-modal-fade-in"} ${r}`, ref: e, role: "dialog" },
    lt.createElement(
      "div",
      { className: "wallet-adapter-modal-container" },
      lt.createElement(
        "div",
        { className: "wallet-adapter-modal-wrapper" },
        lt.createElement(
          "button",
          { onClick: U, className: "wallet-adapter-modal-button-close" },
          lt.createElement(
            "svg",
            { width: "14", height: "14" },
            lt.createElement("path", { d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z" })
          )
        ),
        C.length ? lt.createElement(
          lt.Fragment,
          null,
          lt.createElement("h1", { className: "wallet-adapter-modal-title" }, "Connect a wallet on Solana to continue"),
          lt.createElement(
            "ul",
            { className: "wallet-adapter-modal-list" },
            C.map((L) => lt.createElement(jc, { key: L.adapter.name, handleClick: (z) => T(z, L.adapter.name), wallet: L })),
            R.length ? lt.createElement(wh, { expanded: c, id: "wallet-adapter-modal-collapse" }, R.map((L) => lt.createElement(jc, { key: L.adapter.name, handleClick: (z) => T(z, L.adapter.name), tabIndex: c ? 0 : -1, wallet: L }))) : null
          ),
          R.length ? lt.createElement(
            "button",
            { className: "wallet-adapter-modal-list-more", onClick: P, tabIndex: 0 },
            lt.createElement(
              "span",
              null,
              c ? "Less " : "More ",
              "options"
            ),
            lt.createElement(
              "svg",
              { width: "13", height: "7", viewBox: "0 0 13 7", xmlns: "http://www.w3.org/2000/svg", className: `${c ? "wallet-adapter-modal-list-more-icon-rotate" : ""}` },
              lt.createElement("path", { d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" })
            )
          ) : null
        ) : lt.createElement(
          lt.Fragment,
          null,
          lt.createElement("h1", { className: "wallet-adapter-modal-title" }, "You'll need a wallet on Solana to continue"),
          lt.createElement(
            "div",
            { className: "wallet-adapter-modal-middle" },
            lt.createElement(Kv, null)
          ),
          R.length ? lt.createElement(
            lt.Fragment,
            null,
            lt.createElement(
              "button",
              { className: "wallet-adapter-modal-list-more", onClick: P, tabIndex: 0 },
              lt.createElement(
                "span",
                null,
                c ? "Hide " : "Already have a wallet? View ",
                "options"
              ),
              lt.createElement(
                "svg",
                { width: "13", height: "7", viewBox: "0 0 13 7", xmlns: "http://www.w3.org/2000/svg", className: `${c ? "wallet-adapter-modal-list-more-icon-rotate" : ""}` },
                lt.createElement("path", { d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" })
              )
            ),
            lt.createElement(
              wh,
              { expanded: c, id: "wallet-adapter-modal-collapse" },
              lt.createElement("ul", { className: "wallet-adapter-modal-list" }, R.map((L) => lt.createElement(jc, { key: L.adapter.name, handleClick: (z) => T(z, L.adapter.name), tabIndex: c ? 0 : -1, wallet: L })))
            )
          ) : null
        )
      )
    ),
    lt.createElement("div", { className: "wallet-adapter-modal-overlay", onMouseDown: U })
  ), _);
}, ep = ({ children: r, ...t }) => {
  const [e, n] = yr(!1);
  return lt.createElement(
    Xd.Provider,
    { value: {
      visible: e,
      setVisible: n
    } },
    r,
    e && lt.createElement(Gv, { ...t })
  );
}, Vv = {
  "change-wallet": "Change wallet",
  connecting: "Connecting ...",
  "copy-address": "Copy address",
  copied: "Copied",
  disconnect: "Disconnect",
  "has-wallet": "Connect",
  "no-wallet": "Select Wallet"
};
function Zv(r) {
  return lt.createElement(Hv, { ...r, labels: Vv });
}
let Yv = { data: "" }, Xv = (r) => typeof window == "object" ? ((r ? r.querySelector("#_goober") : window._goober) || Object.assign((r || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : r || Yv, Jv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Qv = /\/\*[^]*?\*\/|  +/g, bh = /\n+/g, fi = (r, t) => {
  let e = "", n = "", o = "";
  for (let i in r) {
    let c = r[i];
    i[0] == "@" ? i[1] == "i" ? e = i + " " + c + ";" : n += i[1] == "f" ? fi(c, i) : i + "{" + fi(c, i[1] == "k" ? "" : t) + "}" : typeof c == "object" ? n += fi(c, t ? t.replace(/([^,])+/g, (u) => i.replace(/(^:.*)|([^,])+/g, (p) => /&/.test(p) ? p.replace(/&/g, u) : u ? u + " " + p : p)) : i) : c != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += fi.p ? fi.p(i, c) : i + ":" + c + ";");
  }
  return e + (t && o ? t + "{" + o + "}" : o) + n;
}, Nn = {}, rp = (r) => {
  if (typeof r == "object") {
    let t = "";
    for (let e in r)
      t += e + rp(r[e]);
    return t;
  }
  return r;
}, tx = (r, t, e, n, o) => {
  let i = rp(r), c = Nn[i] || (Nn[i] = ((p) => {
    let b = 0, _ = 11;
    for (; b < p.length; )
      _ = 101 * _ + p.charCodeAt(b++) >>> 0;
    return "go" + _;
  })(i));
  if (!Nn[c]) {
    let p = i !== r ? r : ((b) => {
      let _, B, C = [{}];
      for (; _ = Jv.exec(b.replace(Qv, "")); )
        _[4] ? C.shift() : _[3] ? (B = _[3].replace(bh, " ").trim(), C.unshift(C[0][B] = C[0][B] || {})) : C[0][_[1]] = _[2].replace(bh, " ").trim();
      return C[0];
    })(r);
    Nn[c] = fi(o ? { ["@keyframes " + c]: p } : p, e ? "" : "." + c);
  }
  let u = e && Nn.g ? Nn.g : null;
  return e && (Nn.g = Nn[c]), ((p, b, _, B) => {
    B ? b.data = b.data.replace(B, p) : b.data.indexOf(p) === -1 && (b.data = _ ? p + b.data : b.data + p);
  })(Nn[c], t, n, u), c;
}, ex = (r, t, e) => r.reduce((n, o, i) => {
  let c = t[i];
  if (c && c.call) {
    let u = c(e), p = u && u.props && u.props.className || /^go/.test(u) && u;
    c = p ? "." + p : u && typeof u == "object" ? u.props ? "" : fi(u, "") : u === !1 ? "" : u;
  }
  return n + o + (c ?? "");
}, "");
function Ha(r) {
  let t = this || {}, e = r.call ? r(t.p) : r;
  return tx(e.unshift ? e.raw ? ex(e, [].slice.call(arguments, 1), t.p) : e.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {}) : e, Xv(t.target), t.g, t.o, t.k);
}
let np, Du, zu;
Ha.bind({ g: 1 });
let Hn = Ha.bind({ k: 1 });
function rx(r, t, e, n) {
  fi.p = t, np = r, Du = e, zu = n;
}
function wi(r, t) {
  let e = this || {};
  return function() {
    let n = arguments;
    function o(i, c) {
      let u = Object.assign({}, i), p = u.className || o.className;
      e.p = Object.assign({ theme: Du && Du() }, u), e.o = / *go\d+/.test(p), u.className = Ha.apply(e, n) + (p ? " " + p : ""), t && (u.ref = c);
      let b = r;
      return r[0] && (b = u.as || r, delete u.as), zu && b[0] && zu(u), np(b, u);
    }
    return t ? t(o) : o;
  };
}
var nx = (r) => typeof r == "function", xa = (r, t) => nx(r) ? r(t) : r, ix = (() => {
  let r = 0;
  return () => (++r).toString();
})(), ip = (() => {
  let r;
  return () => {
    if (r === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      r = !t || t.matches;
    }
    return r;
  };
})(), ox = 20, oa = /* @__PURE__ */ new Map(), sx = 1e3, vh = (r) => {
  if (oa.has(r))
    return;
  let t = setTimeout(() => {
    oa.delete(r), so({ type: 4, toastId: r });
  }, sx);
  oa.set(r, t);
}, ax = (r) => {
  let t = oa.get(r);
  t && clearTimeout(t);
}, qu = (r, t) => {
  switch (t.type) {
    case 0:
      return { ...r, toasts: [t.toast, ...r.toasts].slice(0, ox) };
    case 1:
      return t.toast.id && ax(t.toast.id), { ...r, toasts: r.toasts.map((i) => i.id === t.toast.id ? { ...i, ...t.toast } : i) };
    case 2:
      let { toast: e } = t;
      return r.toasts.find((i) => i.id === e.id) ? qu(r, { type: 1, toast: e }) : qu(r, { type: 0, toast: e });
    case 3:
      let { toastId: n } = t;
      return n ? vh(n) : r.toasts.forEach((i) => {
        vh(i.id);
      }), { ...r, toasts: r.toasts.map((i) => i.id === n || n === void 0 ? { ...i, visible: !1 } : i) };
    case 4:
      return t.toastId === void 0 ? { ...r, toasts: [] } : { ...r, toasts: r.toasts.filter((i) => i.id !== t.toastId) };
    case 5:
      return { ...r, pausedAt: t.time };
    case 6:
      let o = t.time - (r.pausedAt || 0);
      return { ...r, pausedAt: void 0, toasts: r.toasts.map((i) => ({ ...i, pauseDuration: i.pauseDuration + o })) };
  }
}, sa = [], aa = { toasts: [], pausedAt: void 0 }, so = (r) => {
  aa = qu(aa, r), sa.forEach((t) => {
    t(aa);
  });
}, cx = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, ux = (r = {}) => {
  let [t, e] = yr(aa);
  Mr(() => (sa.push(e), () => {
    let o = sa.indexOf(e);
    o > -1 && sa.splice(o, 1);
  }), [t]);
  let n = t.toasts.map((o) => {
    var i, c;
    return { ...r, ...r[o.type], ...o, duration: o.duration || ((i = r[o.type]) == null ? void 0 : i.duration) || (r == null ? void 0 : r.duration) || cx[o.type], style: { ...r.style, ...(c = r[o.type]) == null ? void 0 : c.style, ...o.style } };
  });
  return { ...t, toasts: n };
}, fx = (r, t = "blank", e) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: r, pauseDuration: 0, ...e, id: (e == null ? void 0 : e.id) || ix() }), Cs = (r) => (t, e) => {
  let n = fx(t, r, e);
  return so({ type: 2, toast: n }), n.id;
}, Zr = (r, t) => Cs("blank")(r, t);
Zr.error = Cs("error");
Zr.success = Cs("success");
Zr.loading = Cs("loading");
Zr.custom = Cs("custom");
Zr.dismiss = (r) => {
  so({ type: 3, toastId: r });
};
Zr.remove = (r) => so({ type: 4, toastId: r });
Zr.promise = (r, t, e) => {
  let n = Zr.loading(t.loading, { ...e, ...e == null ? void 0 : e.loading });
  return r.then((o) => (Zr.success(xa(t.success, o), { id: n, ...e, ...e == null ? void 0 : e.success }), o)).catch((o) => {
    Zr.error(xa(t.error, o), { id: n, ...e, ...e == null ? void 0 : e.error });
  }), r;
};
var lx = (r, t) => {
  so({ type: 1, toast: { id: r, height: t } });
}, hx = () => {
  so({ type: 5, time: Date.now() });
}, dx = (r) => {
  let { toasts: t, pausedAt: e } = ux(r);
  Mr(() => {
    if (e)
      return;
    let i = Date.now(), c = t.map((u) => {
      if (u.duration === 1 / 0)
        return;
      let p = (u.duration || 0) + u.pauseDuration - (i - u.createdAt);
      if (p < 0) {
        u.visible && Zr.dismiss(u.id);
        return;
      }
      return setTimeout(() => Zr.dismiss(u.id), p);
    });
    return () => {
      c.forEach((u) => u && clearTimeout(u));
    };
  }, [t, e]);
  let n = mr(() => {
    e && so({ type: 6, time: Date.now() });
  }, [e]), o = mr((i, c) => {
    let { reverseOrder: u = !1, gutter: p = 8, defaultPosition: b } = c || {}, _ = t.filter((R) => (R.position || b) === (i.position || b) && R.height), B = _.findIndex((R) => R.id === i.id), C = _.filter((R, O) => O < B && R.visible).length;
    return _.filter((R) => R.visible).slice(...u ? [C + 1] : [0, C]).reduce((R, O) => R + (O.height || 0) + p, 0);
  }, [t]);
  return { toasts: t, handlers: { updateHeight: lx, startPause: hx, endPause: n, calculateOffset: o } };
}, px = Hn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, gx = Hn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, yx = Hn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, mx = wi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(r) => r.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${px} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${gx} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(r) => r.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${yx} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, wx = Hn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, bx = wi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(r) => r.secondary || "#e0e0e0"};
  border-right-color: ${(r) => r.primary || "#616161"};
  animation: ${wx} 1s linear infinite;
`, vx = Hn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, xx = Hn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Ex = wi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(r) => r.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${xx} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(r) => r.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, _x = wi("div")`
  position: absolute;
`, Sx = wi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Bx = Hn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ax = wi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Bx} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Ix = ({ toast: r }) => {
  let { icon: t, type: e, iconTheme: n } = r;
  return t !== void 0 ? typeof t == "string" ? ir.createElement(Ax, null, t) : t : e === "blank" ? null : ir.createElement(Sx, null, ir.createElement(bx, { ...n }), e !== "loading" && ir.createElement(_x, null, e === "error" ? ir.createElement(mx, { ...n }) : ir.createElement(Ex, { ...n })));
}, Mx = (r) => `
0% {transform: translate3d(0,${r * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Rx = (r) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${r * -150}%,-1px) scale(.6); opacity:0;}
`, kx = "0%{opacity:0;} 100%{opacity:1;}", Tx = "0%{opacity:1;} 100%{opacity:0;}", Cx = wi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Lx = wi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ux = (r, t) => {
  let e = r.includes("top") ? 1 : -1, [n, o] = ip() ? [kx, Tx] : [Mx(e), Rx(e)];
  return { animation: t ? `${Hn(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Hn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, Ox = ir.memo(({ toast: r, position: t, style: e, children: n }) => {
  let o = r.height ? Ux(r.position || t || "top-center", r.visible) : { opacity: 0 }, i = ir.createElement(Ix, { toast: r }), c = ir.createElement(Lx, { ...r.ariaProps }, xa(r.message, r));
  return ir.createElement(Cx, { className: r.className, style: { ...o, ...e, ...r.style } }, typeof n == "function" ? n({ icon: i, message: c }) : ir.createElement(ir.Fragment, null, i, c));
});
rx(ir.createElement);
var Fx = ({ id: r, className: t, style: e, onHeightUpdate: n, children: o }) => {
  let i = ir.useCallback((c) => {
    if (c) {
      let u = () => {
        let p = c.getBoundingClientRect().height;
        n(r, p);
      };
      u(), new MutationObserver(u).observe(c, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [r, n]);
  return ir.createElement("div", { ref: i, className: t, style: e }, o);
}, Nx = (r, t) => {
  let e = r.includes("top"), n = e ? { top: 0 } : { bottom: 0 }, o = r.includes("center") ? { justifyContent: "center" } : r.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: ip() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (e ? 1 : -1)}px)`, ...n, ...o };
}, $x = Ha`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, Ks = 16, Px = ({ reverseOrder: r, position: t = "top-center", toastOptions: e, gutter: n, children: o, containerStyle: i, containerClassName: c }) => {
  let { toasts: u, handlers: p } = dx(e);
  return ir.createElement("div", { style: { position: "fixed", zIndex: 9999, top: Ks, left: Ks, right: Ks, bottom: Ks, pointerEvents: "none", ...i }, className: c, onMouseEnter: p.startPause, onMouseLeave: p.endPause }, u.map((b) => {
    let _ = b.position || t, B = p.calculateOffset(b, { reverseOrder: r, gutter: n, defaultPosition: t }), C = Nx(_, B);
    return ir.createElement(Fx, { id: b.id, key: b.id, onHeightUpdate: p.updateHeight, className: b.visible ? $x : "", style: C }, b.type === "custom" ? xa(b.message, b) : o ? o(b) : ir.createElement(Ox, { toast: b, position: _ }));
  }));
}, yo = Zr;
async function Hc(r, t) {
  const e = await fetch(r, t);
  if (e.status !== 200)
    throw new Error(e.statusText);
  return await e.json();
}
Nf(Es.Mainnet);
Nf(Es.Testnet);
Nf(Es.Devnet);
`${process.env.HELIUS_API_KEY}`;
const Dx = `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`, zx = Dx;
function qx() {
  const { publicKey: r, signTransaction: t, connected: e } = Ts(), [n, o] = yr(""), [i, c] = yr(""), [u, p] = yr("initial");
  async function b({
    isToken: _ = !1,
    address: B,
    amount: C,
    tokenAddress: R
  }) {
    if (e && r && t && u !== "loading") {
      console.log("PK: ", r), p("loading");
      const O = yo.loading("Creating transaction...", {
        id: `buttonToast${_ ? "Token" : ""}`
      });
      try {
        let { tx: U } = await Hc(
          "/api/tx/create",
          {
            method: "POST",
            body: JSON.stringify({
              payerAddress: r.toBase58(),
              receiverAddress: B ? new Gt(B).toBase58() : void 0,
              amount: C,
              type: _ ? "token" : "sol",
              tokenAddress: R
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        console.log("payload: ", {
          method: "POST",
          body: JSON.stringify({
            payerAddress: r.toBase58(),
            receiverAddress: B ? new Gt(B).toBase58() : void 0,
            amount: C,
            type: _ ? "token" : "sol",
            tokenAddress: R
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        const T = sn.from(Buffer.from(U, "base64")), F = (await t(T)).serialize().toString("base64");
        let { txSignature: L } = await Hc("/api/tx/send", {
          method: "POST",
          body: JSON.stringify({ signedTx: F }),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        p("success"), yo.success(
          ($) => /* @__PURE__ */ Ue.jsx(
            "a",
            {
              href: `https://solscan.io/tx/${L}`,
              target: "_blank",
              rel: "noreferrer",
              children: "Transaction created"
            }
          ),
          { id: O, duration: 1e4 }
        );
        const z = yo.loading("Confirming transaction...");
        (await Hc(
          "/api/tx/confirm",
          {
            method: "POST",
            body: JSON.stringify({ txSignature: L }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
        )).confirmed ? yo.success("Transaction confirmed", {
          id: z
        }) : yo.success("Error confirming transaction", {
          id: z
        });
      } catch {
        p("error"), yo.error("Error creating transaction Here", { id: O });
      }
    }
  }
  return { token: i, amount: n, txState: u, onTxClick: b, setToken: c, setAmount: o, setTxState: p };
}
function j8() {
  const { connected: r } = Ts(), { amount: t, setAmount: e, token: n, setToken: o, onTxClick: i } = qx();
  return /* @__PURE__ */ Ue.jsxs("div", { className: "w-screen h-screen flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ Ue.jsx("h2", { className: "text-3xl", children: "Solana Namespace Toolkit" }),
    /* @__PURE__ */ Ue.jsx("hr", { style: { color: "gray", backgroundColor: "gray", height: 35 } }),
    /* @__PURE__ */ Ue.jsx("p", { children: "1. Trigger Wallet Connect" }),
    /* @__PURE__ */ Ue.jsx(Zv, { className: "btn" }),
    /* @__PURE__ */ Ue.jsx("hr", { style: { color: "gray", backgroundColor: "gray", height: 35 } }),
    /* @__PURE__ */ Ue.jsx("p", { children: "2. Transfer Tokens to Address" }),
    r ? /* @__PURE__ */ Ue.jsxs("div", { className: "w-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ Ue.jsx("label", { children: "Amount" }),
      /* @__PURE__ */ Ue.jsx(
        "input",
        {
          type: "text",
          className: "w-[20%] mb-5",
          onChange: (c) => e(c.target.value)
        }
      ),
      /* @__PURE__ */ Ue.jsx("label", { children: "Address" }),
      /* @__PURE__ */ Ue.jsx(
        "input",
        {
          type: "text",
          className: "w-[20%] mb-5",
          onChange: (c) => o(c.target.value)
        }
      ),
      /* @__PURE__ */ Ue.jsx(
        "button",
        {
          className: "border-b border-emerald-300 p-1",
          onClick: () => i({
            isToken: !0,
            address: "HPaeP1UwhNtiDexKrjeJNWmam7QnTKQNnuvMx3Ama2f7",
            amount: t,
            tokenAddress: n
          }),
          children: "Submit"
        }
      )
    ] }) : /* @__PURE__ */ Ue.jsx("p", { children: "Not Connected" }),
    /* @__PURE__ */ Ue.jsx("div", { className: "mb-5" }),
    /* @__PURE__ */ Ue.jsx("p", { children: "SILLY: 7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs" })
  ] });
}
var op = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = !1));
  function o(p, b, _) {
    this.fn = p, this.context = b, this.once = _ || !1;
  }
  function i(p, b, _, B, C) {
    if (typeof _ != "function")
      throw new TypeError("The listener must be a function");
    var R = new o(_, B || p, C), O = e ? e + b : b;
    return p._events[O] ? p._events[O].fn ? p._events[O] = [p._events[O], R] : p._events[O].push(R) : (p._events[O] = R, p._eventsCount++), p;
  }
  function c(p, b) {
    --p._eventsCount === 0 ? p._events = new n() : delete p._events[b];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var b = [], _, B;
    if (this._eventsCount === 0)
      return b;
    for (B in _ = this._events)
      t.call(_, B) && b.push(e ? B.slice(1) : B);
    return Object.getOwnPropertySymbols ? b.concat(Object.getOwnPropertySymbols(_)) : b;
  }, u.prototype.listeners = function(b) {
    var _ = e ? e + b : b, B = this._events[_];
    if (!B)
      return [];
    if (B.fn)
      return [B.fn];
    for (var C = 0, R = B.length, O = new Array(R); C < R; C++)
      O[C] = B[C].fn;
    return O;
  }, u.prototype.listenerCount = function(b) {
    var _ = e ? e + b : b, B = this._events[_];
    return B ? B.fn ? 1 : B.length : 0;
  }, u.prototype.emit = function(b, _, B, C, R, O) {
    var U = e ? e + b : b;
    if (!this._events[U])
      return !1;
    var T = this._events[U], P = arguments.length, F, L;
    if (T.fn) {
      switch (T.once && this.removeListener(b, T.fn, void 0, !0), P) {
        case 1:
          return T.fn.call(T.context), !0;
        case 2:
          return T.fn.call(T.context, _), !0;
        case 3:
          return T.fn.call(T.context, _, B), !0;
        case 4:
          return T.fn.call(T.context, _, B, C), !0;
        case 5:
          return T.fn.call(T.context, _, B, C, R), !0;
        case 6:
          return T.fn.call(T.context, _, B, C, R, O), !0;
      }
      for (L = 1, F = new Array(P - 1); L < P; L++)
        F[L - 1] = arguments[L];
      T.fn.apply(T.context, F);
    } else {
      var z = T.length, N;
      for (L = 0; L < z; L++)
        switch (T[L].once && this.removeListener(b, T[L].fn, void 0, !0), P) {
          case 1:
            T[L].fn.call(T[L].context);
            break;
          case 2:
            T[L].fn.call(T[L].context, _);
            break;
          case 3:
            T[L].fn.call(T[L].context, _, B);
            break;
          case 4:
            T[L].fn.call(T[L].context, _, B, C);
            break;
          default:
            if (!F)
              for (N = 1, F = new Array(P - 1); N < P; N++)
                F[N - 1] = arguments[N];
            T[L].fn.apply(T[L].context, F);
        }
    }
    return !0;
  }, u.prototype.on = function(b, _, B) {
    return i(this, b, _, B, !1);
  }, u.prototype.once = function(b, _, B) {
    return i(this, b, _, B, !0);
  }, u.prototype.removeListener = function(b, _, B, C) {
    var R = e ? e + b : b;
    if (!this._events[R])
      return this;
    if (!_)
      return c(this, R), this;
    var O = this._events[R];
    if (O.fn)
      O.fn === _ && (!C || O.once) && (!B || O.context === B) && c(this, R);
    else {
      for (var U = 0, T = [], P = O.length; U < P; U++)
        (O[U].fn !== _ || C && !O[U].once || B && O[U].context !== B) && T.push(O[U]);
      T.length ? this._events[R] = T.length === 1 ? T[0] : T : c(this, R);
    }
    return this;
  }, u.prototype.removeAllListeners = function(b) {
    var _;
    return b ? (_ = e ? e + b : b, this._events[_] && c(this, _)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, r.exports = u;
})(op);
var $f = op.exports;
const Wx = /* @__PURE__ */ gn($f);
class yn extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(t, e) {
    super(t), this.error = e;
  }
}
class jx extends yn {
  constructor() {
    super(...arguments), this.name = "WalletNotReadyError";
  }
}
class Hx extends yn {
  constructor() {
    super(...arguments), this.name = "WalletConnectionError";
  }
}
class Kx extends yn {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectedError";
  }
}
class Gx extends yn {
  constructor() {
    super(...arguments), this.name = "WalletDisconnectionError";
  }
}
class Vx extends yn {
  constructor() {
    super(...arguments), this.name = "WalletAccountError";
  }
}
class xh extends yn {
  constructor() {
    super(...arguments), this.name = "WalletPublicKeyError";
  }
}
class hs extends yn {
  constructor() {
    super(...arguments), this.name = "WalletNotConnectedError";
  }
}
class ds extends yn {
  constructor() {
    super(...arguments), this.name = "WalletSendTransactionError";
  }
}
class Zx extends yn {
  constructor() {
    super(...arguments), this.name = "WalletSignMessageError";
  }
}
class Bo extends yn {
  constructor() {
    super(...arguments), this.name = "WalletSignTransactionError";
  }
}
var En;
(function(r) {
  r.Installed = "Installed", r.NotDetected = "NotDetected", r.Loadable = "Loadable", r.Unsupported = "Unsupported";
})(En || (En = {}));
class Yx extends Wx {
  get connected() {
    return !!this.publicKey;
  }
  async autoConnect() {
    await this.connect();
  }
  async prepareTransaction(t, e, n = {}) {
    const o = this.publicKey;
    if (!o)
      throw new hs();
    return t.feePayer = t.feePayer || o, t.recentBlockhash = t.recentBlockhash || (await e.getLatestBlockhash({
      commitment: n.preflightCommitment,
      minContextSlot: n.minContextSlot
    })).blockhash, t;
  }
}
function Xx(r) {
  if (typeof window > "u" || typeof document > "u")
    return;
  const t = [];
  function e() {
    if (r())
      for (const i of t)
        i();
  }
  const n = (
    // TODO: #334 Replace with idle callback strategy.
    setInterval(e, 1e3)
  );
  t.push(() => clearInterval(n)), // Implies that `DOMContentLoaded` has not yet fired.
  document.readyState === "loading" && (document.addEventListener("DOMContentLoaded", e, { once: !0 }), t.push(() => document.removeEventListener("DOMContentLoaded", e))), // If the `complete` state has been reached, we're too late.
  document.readyState !== "complete" && (window.addEventListener("load", e, { once: !0 }), t.push(() => window.removeEventListener("load", e))), e();
}
function Jx() {
  if (!navigator)
    return !1;
  const r = navigator.userAgent.toLowerCase(), t = r.includes("iphone") || r.includes("ipad"), e = r.includes("safari");
  return t && e;
}
var Eh;
(function(r) {
  r.Mainnet = "mainnet-beta", r.Testnet = "testnet", r.Devnet = "devnet";
})(Eh || (Eh = {}));
function Wu(r) {
  return "version" in r;
}
class Qx extends Yx {
  async sendTransaction(t, e, n = {}) {
    let o = !0;
    try {
      if (Wu(t)) {
        if (!this.supportedTransactionVersions)
          throw new ds("Sending versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(t.version))
          throw new ds(`Sending transaction version ${t.version} isn't supported by this wallet`);
        try {
          t = await this.signTransaction(t);
          const i = t.serialize();
          return await e.sendRawTransaction(i, n);
        } catch (i) {
          throw i instanceof Bo ? (o = !1, i) : new ds(i == null ? void 0 : i.message, i);
        }
      } else
        try {
          const { signers: i, ...c } = n;
          t = await this.prepareTransaction(t, e, c), i != null && i.length && t.partialSign(...i), t = await this.signTransaction(t);
          const u = t.serialize();
          return await e.sendRawTransaction(u, c);
        } catch (i) {
          throw i instanceof Bo ? (o = !1, i) : new ds(i == null ? void 0 : i.message, i);
        }
    } catch (i) {
      throw o && this.emit("error", i), i;
    }
  }
  async signAllTransactions(t) {
    for (const n of t)
      if (Wu(n)) {
        if (!this.supportedTransactionVersions)
          throw new Bo("Signing versioned transactions isn't supported by this wallet");
        if (!this.supportedTransactionVersions.has(n.version))
          throw new Bo(`Signing transaction version ${n.version} isn't supported by this wallet`);
      }
    const e = [];
    for (const n of t)
      e.push(await this.signTransaction(n));
    return e;
  }
}
class t2 extends Qx {
}
var Ke = {}, Ls = {};
Ls.byteLength = n2;
Ls.toByteArray = o2;
Ls.fromByteArray = c2;
var Sn = [], tn = [], e2 = typeof Uint8Array < "u" ? Uint8Array : Array, Kc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var mo = 0, r2 = Kc.length; mo < r2; ++mo)
  Sn[mo] = Kc[mo], tn[Kc.charCodeAt(mo)] = mo;
tn["-".charCodeAt(0)] = 62;
tn["_".charCodeAt(0)] = 63;
function sp(r) {
  var t = r.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = r.indexOf("=");
  e === -1 && (e = t);
  var n = e === t ? 0 : 4 - e % 4;
  return [e, n];
}
function n2(r) {
  var t = sp(r), e = t[0], n = t[1];
  return (e + n) * 3 / 4 - n;
}
function i2(r, t, e) {
  return (t + e) * 3 / 4 - e;
}
function o2(r) {
  var t, e = sp(r), n = e[0], o = e[1], i = new e2(i2(r, n, o)), c = 0, u = o > 0 ? n - 4 : n, p;
  for (p = 0; p < u; p += 4)
    t = tn[r.charCodeAt(p)] << 18 | tn[r.charCodeAt(p + 1)] << 12 | tn[r.charCodeAt(p + 2)] << 6 | tn[r.charCodeAt(p + 3)], i[c++] = t >> 16 & 255, i[c++] = t >> 8 & 255, i[c++] = t & 255;
  return o === 2 && (t = tn[r.charCodeAt(p)] << 2 | tn[r.charCodeAt(p + 1)] >> 4, i[c++] = t & 255), o === 1 && (t = tn[r.charCodeAt(p)] << 10 | tn[r.charCodeAt(p + 1)] << 4 | tn[r.charCodeAt(p + 2)] >> 2, i[c++] = t >> 8 & 255, i[c++] = t & 255), i;
}
function s2(r) {
  return Sn[r >> 18 & 63] + Sn[r >> 12 & 63] + Sn[r >> 6 & 63] + Sn[r & 63];
}
function a2(r, t, e) {
  for (var n, o = [], i = t; i < e; i += 3)
    n = (r[i] << 16 & 16711680) + (r[i + 1] << 8 & 65280) + (r[i + 2] & 255), o.push(s2(n));
  return o.join("");
}
function c2(r) {
  for (var t, e = r.length, n = e % 3, o = [], i = 16383, c = 0, u = e - n; c < u; c += i)
    o.push(a2(r, c, c + i > u ? u : c + i));
  return n === 1 ? (t = r[e - 1], o.push(
    Sn[t >> 2] + Sn[t << 4 & 63] + "=="
  )) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1], o.push(
    Sn[t >> 10] + Sn[t >> 4 & 63] + Sn[t << 2 & 63] + "="
  )), o.join("");
}
var Ka = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ka.read = function(r, t, e, n, o) {
  var i, c, u = o * 8 - n - 1, p = (1 << u) - 1, b = p >> 1, _ = -7, B = e ? o - 1 : 0, C = e ? -1 : 1, R = r[t + B];
  for (B += C, i = R & (1 << -_) - 1, R >>= -_, _ += u; _ > 0; i = i * 256 + r[t + B], B += C, _ -= 8)
    ;
  for (c = i & (1 << -_) - 1, i >>= -_, _ += n; _ > 0; c = c * 256 + r[t + B], B += C, _ -= 8)
    ;
  if (i === 0)
    i = 1 - b;
  else {
    if (i === p)
      return c ? NaN : (R ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), i = i - b;
  }
  return (R ? -1 : 1) * c * Math.pow(2, i - n);
};
Ka.write = function(r, t, e, n, o, i) {
  var c, u, p, b = i * 8 - o - 1, _ = (1 << b) - 1, B = _ >> 1, C = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, R = n ? 0 : i - 1, O = n ? 1 : -1, U = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, c = _) : (c = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -c)) < 1 && (c--, p *= 2), c + B >= 1 ? t += C / p : t += C * Math.pow(2, 1 - B), t * p >= 2 && (c++, p /= 2), c + B >= _ ? (u = 0, c = _) : c + B >= 1 ? (u = (t * p - 1) * Math.pow(2, o), c = c + B) : (u = t * Math.pow(2, B - 1) * Math.pow(2, o), c = 0)); o >= 8; r[e + R] = u & 255, R += O, u /= 256, o -= 8)
    ;
  for (c = c << o | u, b += o; b > 0; r[e + R] = c & 255, R += O, c /= 256, b -= 8)
    ;
  r[e + R - O] |= U * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = Ls, e = Ka, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = u, r.SlowBuffer = F, r.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  r.kMaxLength = o, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const h = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(h, s), h.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(h) {
    if (h > o)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
    const s = new Uint8Array(h);
    return Object.setPrototypeOf(s, u.prototype), s;
  }
  function u(h, s, a) {
    if (typeof h == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return B(h);
    }
    return p(h, s, a);
  }
  u.poolSize = 8192;
  function p(h, s, a) {
    if (typeof h == "string")
      return C(h, s);
    if (ArrayBuffer.isView(h))
      return O(h);
    if (h == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    if (Zt(h, ArrayBuffer) || h && Zt(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Zt(h, SharedArrayBuffer) || h && Zt(h.buffer, SharedArrayBuffer)))
      return U(h, s, a);
    if (typeof h == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const g = h.valueOf && h.valueOf();
    if (g != null && g !== h)
      return u.from(g, s, a);
    const S = T(h);
    if (S)
      return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
      return u.from(h[Symbol.toPrimitive]("string"), s, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
    );
  }
  u.from = function(h, s, a) {
    return p(h, s, a);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function b(h) {
    if (typeof h != "number")
      throw new TypeError('"size" argument must be of type number');
    if (h < 0)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
  }
  function _(h, s, a) {
    return b(h), h <= 0 ? c(h) : s !== void 0 ? typeof a == "string" ? c(h).fill(s, a) : c(h).fill(s) : c(h);
  }
  u.alloc = function(h, s, a) {
    return _(h, s, a);
  };
  function B(h) {
    return b(h), c(h < 0 ? 0 : P(h) | 0);
  }
  u.allocUnsafe = function(h) {
    return B(h);
  }, u.allocUnsafeSlow = function(h) {
    return B(h);
  };
  function C(h, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = L(h, s) | 0;
    let g = c(a);
    const S = g.write(h, s);
    return S !== a && (g = g.slice(0, S)), g;
  }
  function R(h) {
    const s = h.length < 0 ? 0 : P(h.length) | 0, a = c(s);
    for (let g = 0; g < s; g += 1)
      a[g] = h[g] & 255;
    return a;
  }
  function O(h) {
    if (Zt(h, Uint8Array)) {
      const s = new Uint8Array(h);
      return U(s.buffer, s.byteOffset, s.byteLength);
    }
    return R(h);
  }
  function U(h, s, a) {
    if (s < 0 || h.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (h.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return s === void 0 && a === void 0 ? g = new Uint8Array(h) : a === void 0 ? g = new Uint8Array(h, s) : g = new Uint8Array(h, s, a), Object.setPrototypeOf(g, u.prototype), g;
  }
  function T(h) {
    if (u.isBuffer(h)) {
      const s = P(h.length) | 0, a = c(s);
      return a.length === 0 || h.copy(a, 0, 0, s), a;
    }
    if (h.length !== void 0)
      return typeof h.length != "number" || Ot(h.length) ? c(0) : R(h);
    if (h.type === "Buffer" && Array.isArray(h.data))
      return R(h.data);
  }
  function P(h) {
    if (h >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return h | 0;
  }
  function F(h) {
    return +h != h && (h = 0), u.alloc(+h);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (Zt(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), Zt(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let g = s.length, S = a.length;
    for (let M = 0, k = Math.min(g, S); M < k; ++M)
      if (s[M] !== a[M]) {
        g = s[M], S = a[M];
        break;
      }
    return g < S ? -1 : S < g ? 1 : 0;
  }, u.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(s, a) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return u.alloc(0);
    let g;
    if (a === void 0)
      for (a = 0, g = 0; g < s.length; ++g)
        a += s[g].length;
    const S = u.allocUnsafe(a);
    let M = 0;
    for (g = 0; g < s.length; ++g) {
      let k = s[g];
      if (Zt(k, Uint8Array))
        M + k.length > S.length ? (u.isBuffer(k) || (k = u.from(k)), k.copy(S, M)) : Uint8Array.prototype.set.call(
          S,
          k,
          M
        );
      else if (u.isBuffer(k))
        k.copy(S, M);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      M += k.length;
    }
    return S;
  };
  function L(h, s) {
    if (u.isBuffer(h))
      return h.length;
    if (ArrayBuffer.isView(h) || Zt(h, ArrayBuffer))
      return h.byteLength;
    if (typeof h != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
      );
    const a = h.length, g = arguments.length > 2 && arguments[2] === !0;
    if (!g && a === 0)
      return 0;
    let S = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return Lt(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return Ft(h).length;
        default:
          if (S)
            return g ? -1 : Lt(h).length;
          s = ("" + s).toLowerCase(), S = !0;
      }
  }
  u.byteLength = L;
  function z(h, s, a) {
    let g = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (h || (h = "utf8"); ; )
      switch (h) {
        case "hex":
          return x(this, s, a);
        case "utf8":
        case "utf-8":
          return f(this, s, a);
        case "ascii":
          return w(this, s, a);
        case "latin1":
        case "binary":
          return v(this, s, a);
        case "base64":
          return I(this, s, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return A(this, s, a);
        default:
          if (g)
            throw new TypeError("Unknown encoding: " + h);
          h = (h + "").toLowerCase(), g = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function N(h, s, a) {
    const g = h[s];
    h[s] = h[a], h[a] = g;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      N(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      N(this, a, a + 3), N(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      N(this, a, a + 7), N(this, a + 1, a + 6), N(this, a + 2, a + 5), N(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? f(this, 0, s) : z.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const a = r.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (s += " ... "), "<Buffer " + s + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(s, a, g, S, M) {
    if (Zt(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), g === void 0 && (g = s ? s.length : 0), S === void 0 && (S = 0), M === void 0 && (M = this.length), a < 0 || g > s.length || S < 0 || M > this.length)
      throw new RangeError("out of range index");
    if (S >= M && a >= g)
      return 0;
    if (S >= M)
      return -1;
    if (a >= g)
      return 1;
    if (a >>>= 0, g >>>= 0, S >>>= 0, M >>>= 0, this === s)
      return 0;
    let k = M - S, Q = g - a;
    const nt = Math.min(k, Q), et = this.slice(S, M), wt = s.slice(a, g);
    for (let X = 0; X < nt; ++X)
      if (et[X] !== wt[X]) {
        k = et[X], Q = wt[X];
        break;
      }
    return k < Q ? -1 : Q < k ? 1 : 0;
  };
  function $(h, s, a, g, S) {
    if (h.length === 0)
      return -1;
    if (typeof a == "string" ? (g = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Ot(a) && (a = S ? 0 : h.length - 1), a < 0 && (a = h.length + a), a >= h.length) {
      if (S)
        return -1;
      a = h.length - 1;
    } else if (a < 0)
      if (S)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, g)), u.isBuffer(s))
      return s.length === 0 ? -1 : q(h, s, a, g, S);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(h, s, a) : Uint8Array.prototype.lastIndexOf.call(h, s, a) : q(h, [s], a, g, S);
    throw new TypeError("val must be string, number or Buffer");
  }
  function q(h, s, a, g, S) {
    let M = 1, k = h.length, Q = s.length;
    if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
      if (h.length < 2 || s.length < 2)
        return -1;
      M = 2, k /= 2, Q /= 2, a /= 2;
    }
    function nt(wt, X) {
      return M === 1 ? wt[X] : wt.readUInt16BE(X * M);
    }
    let et;
    if (S) {
      let wt = -1;
      for (et = a; et < k; et++)
        if (nt(h, et) === nt(s, wt === -1 ? 0 : et - wt)) {
          if (wt === -1 && (wt = et), et - wt + 1 === Q)
            return wt * M;
        } else
          wt !== -1 && (et -= et - wt), wt = -1;
    } else
      for (a + Q > k && (a = k - Q), et = a; et >= 0; et--) {
        let wt = !0;
        for (let X = 0; X < Q; X++)
          if (nt(h, et + X) !== nt(s, X)) {
            wt = !1;
            break;
          }
        if (wt)
          return et;
      }
    return -1;
  }
  u.prototype.includes = function(s, a, g) {
    return this.indexOf(s, a, g) !== -1;
  }, u.prototype.indexOf = function(s, a, g) {
    return $(this, s, a, g, !0);
  }, u.prototype.lastIndexOf = function(s, a, g) {
    return $(this, s, a, g, !1);
  };
  function W(h, s, a, g) {
    a = Number(a) || 0;
    const S = h.length - a;
    g ? (g = Number(g), g > S && (g = S)) : g = S;
    const M = s.length;
    g > M / 2 && (g = M / 2);
    let k;
    for (k = 0; k < g; ++k) {
      const Q = parseInt(s.substr(k * 2, 2), 16);
      if (Ot(Q))
        return k;
      h[a + k] = Q;
    }
    return k;
  }
  function tt(h, s, a, g) {
    return kt(Lt(s, h.length - a), h, a, g);
  }
  function ht(h, s, a, g) {
    return kt(Pt(s), h, a, g);
  }
  function J(h, s, a, g) {
    return kt(Ft(s), h, a, g);
  }
  function mt(h, s, a, g) {
    return kt(nr(s, h.length - a), h, a, g);
  }
  u.prototype.write = function(s, a, g, S) {
    if (a === void 0)
      S = "utf8", g = this.length, a = 0;
    else if (g === void 0 && typeof a == "string")
      S = a, g = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(g) ? (g = g >>> 0, S === void 0 && (S = "utf8")) : (S = g, g = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const M = this.length - a;
    if ((g === void 0 || g > M) && (g = M), s.length > 0 && (g < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let k = !1;
    for (; ; )
      switch (S) {
        case "hex":
          return W(this, s, a, g);
        case "utf8":
        case "utf-8":
          return tt(this, s, a, g);
        case "ascii":
        case "latin1":
        case "binary":
          return ht(this, s, a, g);
        case "base64":
          return J(this, s, a, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return mt(this, s, a, g);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + S);
          S = ("" + S).toLowerCase(), k = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function I(h, s, a) {
    return s === 0 && a === h.length ? t.fromByteArray(h) : t.fromByteArray(h.slice(s, a));
  }
  function f(h, s, a) {
    a = Math.min(h.length, a);
    const g = [];
    let S = s;
    for (; S < a; ) {
      const M = h[S];
      let k = null, Q = M > 239 ? 4 : M > 223 ? 3 : M > 191 ? 2 : 1;
      if (S + Q <= a) {
        let nt, et, wt, X;
        switch (Q) {
          case 1:
            M < 128 && (k = M);
            break;
          case 2:
            nt = h[S + 1], (nt & 192) === 128 && (X = (M & 31) << 6 | nt & 63, X > 127 && (k = X));
            break;
          case 3:
            nt = h[S + 1], et = h[S + 2], (nt & 192) === 128 && (et & 192) === 128 && (X = (M & 15) << 12 | (nt & 63) << 6 | et & 63, X > 2047 && (X < 55296 || X > 57343) && (k = X));
            break;
          case 4:
            nt = h[S + 1], et = h[S + 2], wt = h[S + 3], (nt & 192) === 128 && (et & 192) === 128 && (wt & 192) === 128 && (X = (M & 15) << 18 | (nt & 63) << 12 | (et & 63) << 6 | wt & 63, X > 65535 && X < 1114112 && (k = X));
        }
      }
      k === null ? (k = 65533, Q = 1) : k > 65535 && (k -= 65536, g.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), g.push(k), S += Q;
    }
    return y(g);
  }
  const d = 4096;
  function y(h) {
    const s = h.length;
    if (s <= d)
      return String.fromCharCode.apply(String, h);
    let a = "", g = 0;
    for (; g < s; )
      a += String.fromCharCode.apply(
        String,
        h.slice(g, g += d)
      );
    return a;
  }
  function w(h, s, a) {
    let g = "";
    a = Math.min(h.length, a);
    for (let S = s; S < a; ++S)
      g += String.fromCharCode(h[S] & 127);
    return g;
  }
  function v(h, s, a) {
    let g = "";
    a = Math.min(h.length, a);
    for (let S = s; S < a; ++S)
      g += String.fromCharCode(h[S]);
    return g;
  }
  function x(h, s, a) {
    const g = h.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > g) && (a = g);
    let S = "";
    for (let M = s; M < a; ++M)
      S += Nt[h[M]];
    return S;
  }
  function A(h, s, a) {
    const g = h.slice(s, a);
    let S = "";
    for (let M = 0; M < g.length - 1; M += 2)
      S += String.fromCharCode(g[M] + g[M + 1] * 256);
    return S;
  }
  u.prototype.slice = function(s, a) {
    const g = this.length;
    s = ~~s, a = a === void 0 ? g : ~~a, s < 0 ? (s += g, s < 0 && (s = 0)) : s > g && (s = g), a < 0 ? (a += g, a < 0 && (a = 0)) : a > g && (a = g), a < s && (a = s);
    const S = this.subarray(s, a);
    return Object.setPrototypeOf(S, u.prototype), S;
  };
  function m(h, s, a) {
    if (h % 1 !== 0 || h < 0)
      throw new RangeError("offset is not uint");
    if (h + s > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s], M = 1, k = 0;
    for (; ++k < a && (M *= 256); )
      S += this[s + k] * M;
    return S;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s + --a], M = 1;
    for (; a > 0 && (M *= 256); )
      S += this[s + --a] * M;
    return S;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(s, a) {
    return s = s >>> 0, a || m(s, 1, this.length), this[s];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(s, a) {
    return s = s >>> 0, a || m(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(s, a) {
    return s = s >>> 0, a || m(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, u.prototype.readBigUInt64LE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, M = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + g * 2 ** 24;
    return BigInt(S) + (BigInt(M) << BigInt(32));
  }), u.prototype.readBigUInt64BE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], M = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g;
    return (BigInt(S) << BigInt(32)) + BigInt(M);
  }), u.prototype.readIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s], M = 1, k = 0;
    for (; ++k < a && (M *= 256); )
      S += this[s + k] * M;
    return M *= 128, S >= M && (S -= Math.pow(2, 8 * a)), S;
  }, u.prototype.readIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = a, M = 1, k = this[s + --S];
    for (; S > 0 && (M *= 256); )
      k += this[s + --S] * M;
    return M *= 128, k >= M && (k -= Math.pow(2, 8 * a)), k;
  }, u.prototype.readInt8 = function(s, a) {
    return s = s >>> 0, a || m(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, a) {
    s = s >>> 0, a || m(s, 2, this.length);
    const g = this[s] | this[s + 1] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt16BE = function(s, a) {
    s = s >>> 0, a || m(s, 2, this.length);
    const g = this[s + 1] | this[s] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt32LE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (g << 24);
    return (BigInt(S) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = (a << 24) + // Overflow
    this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(S) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g);
  }), u.prototype.readFloatLE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), e.read(this, s, !0, 23, 4);
  }, u.prototype.readFloatBE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), e.read(this, s, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(s, a) {
    return s = s >>> 0, a || m(s, 8, this.length), e.read(this, s, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(s, a) {
    return s = s >>> 0, a || m(s, 8, this.length), e.read(this, s, !1, 52, 8);
  };
  function l(h, s, a, g, S, M) {
    if (!u.isBuffer(h))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > S || s < M)
      throw new RangeError('"value" argument is out of bounds');
    if (a + g > h.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !S) {
      const Q = Math.pow(2, 8 * g) - 1;
      l(this, s, a, g, Q, 0);
    }
    let M = 1, k = 0;
    for (this[a] = s & 255; ++k < g && (M *= 256); )
      this[a + k] = s / M & 255;
    return a + g;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !S) {
      const Q = Math.pow(2, 8 * g) - 1;
      l(this, s, a, g, Q, 0);
    }
    let M = g - 1, k = 1;
    for (this[a + M] = s & 255; --M >= 0 && (k *= 256); )
      this[a + M] = s / k & 255;
    return a + g;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 1, 255, 0), this[a] = s & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 65535, 0), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 65535, 0), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 4294967295, 0), this[a + 3] = s >>> 24, this[a + 2] = s >>> 16, this[a + 1] = s >>> 8, this[a] = s & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 4294967295, 0), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  };
  function E(h, s, a, g, S) {
    _t(s, g, S, h, a, 7);
    let M = Number(s & BigInt(4294967295));
    h[a++] = M, M = M >> 8, h[a++] = M, M = M >> 8, h[a++] = M, M = M >> 8, h[a++] = M;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return h[a++] = k, k = k >> 8, h[a++] = k, k = k >> 8, h[a++] = k, k = k >> 8, h[a++] = k, a;
  }
  function j(h, s, a, g, S) {
    _t(s, g, S, h, a, 7);
    let M = Number(s & BigInt(4294967295));
    h[a + 7] = M, M = M >> 8, h[a + 6] = M, M = M >> 8, h[a + 5] = M, M = M >> 8, h[a + 4] = M;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return h[a + 3] = k, k = k >> 8, h[a + 2] = k, k = k >> 8, h[a + 1] = k, k = k >> 8, h[a] = k, a + 8;
  }
  u.prototype.writeBigUInt64LE = he(function(s, a = 0) {
    return E(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = he(function(s, a = 0) {
    return j(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, !S) {
      const nt = Math.pow(2, 8 * g - 1);
      l(this, s, a, g, nt - 1, -nt);
    }
    let M = 0, k = 1, Q = 0;
    for (this[a] = s & 255; ++M < g && (k *= 256); )
      s < 0 && Q === 0 && this[a + M - 1] !== 0 && (Q = 1), this[a + M] = (s / k >> 0) - Q & 255;
    return a + g;
  }, u.prototype.writeIntBE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, !S) {
      const nt = Math.pow(2, 8 * g - 1);
      l(this, s, a, g, nt - 1, -nt);
    }
    let M = g - 1, k = 1, Q = 0;
    for (this[a + M] = s & 255; --M >= 0 && (k *= 256); )
      s < 0 && Q === 0 && this[a + M + 1] !== 0 && (Q = 1), this[a + M] = (s / k >> 0) - Q & 255;
    return a + g;
  }, u.prototype.writeInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[a] = s & 255, a + 1;
  }, u.prototype.writeInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 32767, -32768), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 32767, -32768), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 2147483647, -2147483648), this[a] = s & 255, this[a + 1] = s >>> 8, this[a + 2] = s >>> 16, this[a + 3] = s >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  }, u.prototype.writeBigInt64LE = he(function(s, a = 0) {
    return E(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = he(function(s, a = 0) {
    return j(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function H(h, s, a, g, S, M) {
    if (a + g > h.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function K(h, s, a, g, S) {
    return s = +s, a = a >>> 0, S || H(h, s, a, 4), e.write(h, s, a, g, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(s, a, g) {
    return K(this, s, a, !0, g);
  }, u.prototype.writeFloatBE = function(s, a, g) {
    return K(this, s, a, !1, g);
  };
  function ft(h, s, a, g, S) {
    return s = +s, a = a >>> 0, S || H(h, s, a, 8), e.write(h, s, a, g, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(s, a, g) {
    return ft(this, s, a, !0, g);
  }, u.prototype.writeDoubleBE = function(s, a, g) {
    return ft(this, s, a, !1, g);
  }, u.prototype.copy = function(s, a, g, S) {
    if (!u.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (g || (g = 0), !S && S !== 0 && (S = this.length), a >= s.length && (a = s.length), a || (a = 0), S > 0 && S < g && (S = g), S === g || s.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (g < 0 || g >= this.length)
      throw new RangeError("Index out of range");
    if (S < 0)
      throw new RangeError("sourceEnd out of bounds");
    S > this.length && (S = this.length), s.length - a < S - g && (S = s.length - a + g);
    const M = S - g;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, g, S) : Uint8Array.prototype.set.call(
      s,
      this.subarray(g, S),
      a
    ), M;
  }, u.prototype.fill = function(s, a, g, S) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (S = a, a = 0, g = this.length) : typeof g == "string" && (S = g, g = this.length), S !== void 0 && typeof S != "string")
        throw new TypeError("encoding must be a string");
      if (typeof S == "string" && !u.isEncoding(S))
        throw new TypeError("Unknown encoding: " + S);
      if (s.length === 1) {
        const k = s.charCodeAt(0);
        (S === "utf8" && k < 128 || S === "latin1") && (s = k);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < g)
      throw new RangeError("Out of range index");
    if (g <= a)
      return this;
    a = a >>> 0, g = g === void 0 ? this.length : g >>> 0, s || (s = 0);
    let M;
    if (typeof s == "number")
      for (M = a; M < g; ++M)
        this[M] = s;
    else {
      const k = u.isBuffer(s) ? s : u.from(s, S), Q = k.length;
      if (Q === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (M = 0; M < g - a; ++M)
        this[M + a] = k[M % Q];
    }
    return this;
  };
  const it = {};
  function ut(h, s, a) {
    it[h] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
      }
      get code() {
        return h;
      }
      set code(S) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: S,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${h}]: ${this.message}`;
      }
    };
  }
  ut(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(h) {
      return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ut(
    "ERR_INVALID_ARG_TYPE",
    function(h, s) {
      return `The "${h}" argument must be of type number. Received type ${typeof s}`;
    },
    TypeError
  ), ut(
    "ERR_OUT_OF_RANGE",
    function(h, s, a) {
      let g = `The value of "${h}" is out of range.`, S = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? S = Vt(String(a)) : typeof a == "bigint" && (S = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (S = Vt(S)), S += "n"), g += ` It must be ${s}. Received ${S}`, g;
    },
    RangeError
  );
  function Vt(h) {
    let s = "", a = h.length;
    const g = h[0] === "-" ? 1 : 0;
    for (; a >= g + 4; a -= 3)
      s = `_${h.slice(a - 3, a)}${s}`;
    return `${h.slice(0, a)}${s}`;
  }
  function Bt(h, s, a) {
    Wt(s, "offset"), (h[s] === void 0 || h[s + a] === void 0) && vt(s, h.length - (a + 1));
  }
  function _t(h, s, a, g, S, M) {
    if (h > a || h < s) {
      const k = typeof s == "bigint" ? "n" : "";
      let Q;
      throw M > 3 ? s === 0 || s === BigInt(0) ? Q = `>= 0${k} and < 2${k} ** ${(M + 1) * 8}${k}` : Q = `>= -(2${k} ** ${(M + 1) * 8 - 1}${k}) and < 2 ** ${(M + 1) * 8 - 1}${k}` : Q = `>= ${s}${k} and <= ${a}${k}`, new it.ERR_OUT_OF_RANGE("value", Q, h);
    }
    Bt(g, S, M);
  }
  function Wt(h, s) {
    if (typeof h != "number")
      throw new it.ERR_INVALID_ARG_TYPE(s, "number", h);
  }
  function vt(h, s, a) {
    throw Math.floor(h) !== h ? (Wt(h, a), new it.ERR_OUT_OF_RANGE(a || "offset", "an integer", h)) : s < 0 ? new it.ERR_BUFFER_OUT_OF_BOUNDS() : new it.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      h
    );
  }
  const Rt = /[^+/0-9A-Za-z-_]/g;
  function qe(h) {
    if (h = h.split("=")[0], h = h.trim().replace(Rt, ""), h.length < 2)
      return "";
    for (; h.length % 4 !== 0; )
      h = h + "=";
    return h;
  }
  function Lt(h, s) {
    s = s || 1 / 0;
    let a;
    const g = h.length;
    let S = null;
    const M = [];
    for (let k = 0; k < g; ++k) {
      if (a = h.charCodeAt(k), a > 55295 && a < 57344) {
        if (!S) {
          if (a > 56319) {
            (s -= 3) > -1 && M.push(239, 191, 189);
            continue;
          } else if (k + 1 === g) {
            (s -= 3) > -1 && M.push(239, 191, 189);
            continue;
          }
          S = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && M.push(239, 191, 189), S = a;
          continue;
        }
        a = (S - 55296 << 10 | a - 56320) + 65536;
      } else
        S && (s -= 3) > -1 && M.push(239, 191, 189);
      if (S = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        M.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        M.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        M.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        M.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return M;
  }
  function Pt(h) {
    const s = [];
    for (let a = 0; a < h.length; ++a)
      s.push(h.charCodeAt(a) & 255);
    return s;
  }
  function nr(h, s) {
    let a, g, S;
    const M = [];
    for (let k = 0; k < h.length && !((s -= 2) < 0); ++k)
      a = h.charCodeAt(k), g = a >> 8, S = a % 256, M.push(S), M.push(g);
    return M;
  }
  function Ft(h) {
    return t.toByteArray(qe(h));
  }
  function kt(h, s, a, g) {
    let S;
    for (S = 0; S < g && !(S + a >= s.length || S >= h.length); ++S)
      s[S + a] = h[S];
    return S;
  }
  function Zt(h, s) {
    return h instanceof s || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === s.name;
  }
  function Ot(h) {
    return h !== h;
  }
  const Nt = function() {
    const h = "0123456789abcdef", s = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const g = a * 16;
      for (let S = 0; S < 16; ++S)
        s[g + S] = h[a] + h[S];
    }
    return s;
  }();
  function he(h) {
    return typeof BigInt > "u" ? $t : h;
  }
  function $t() {
    throw new Error("BigInt not supported");
  }
})(Ke);
function ju(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function u2(r) {
  if (typeof r != "boolean")
    throw new Error(`Expected boolean, not ${r}`);
}
function ap(r, ...t) {
  if (!(r instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function f2(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  ju(r.outputLen), ju(r.blockLen);
}
function l2(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function h2(r, t) {
  ap(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const Vr = {
  number: ju,
  bool: u2,
  bytes: ap,
  hash: f2,
  exists: l2,
  output: h2
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const d2 = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), Gc = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), vn = (r, t) => r << 32 - t | r >>> t, p2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!p2)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function g2(r) {
  if (typeof r != "string")
    throw new TypeError(`utf8ToBytes expected string, got ${typeof r}`);
  return new TextEncoder().encode(r);
}
function Us(r) {
  if (typeof r == "string" && (r = g2(r)), !(r instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof r})`);
  return r;
}
class Pf {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function ao(r) {
  const t = (n) => r().update(Us(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function y2(r) {
  const t = (n, o) => r(o).update(Us(n)).digest(), e = r({});
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = (n) => r(n), t;
}
function m2(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const o = BigInt(32), i = BigInt(4294967295), c = Number(e >> o & i), u = Number(e & i), p = n ? 4 : 0, b = n ? 0 : 4;
  r.setUint32(t + p, c, n), r.setUint32(t + b, u, n);
}
class cp extends Pf {
  constructor(t, e, n, o) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Gc(this.buffer);
  }
  update(t) {
    Vr.exists(this);
    const { view: e, buffer: n, blockLen: o } = this;
    t = Us(t);
    const i = t.length;
    for (let c = 0; c < i; ) {
      const u = Math.min(o - this.pos, i - c);
      if (u === o) {
        const p = Gc(t);
        for (; o <= i - c; c += o)
          this.process(p, c);
        continue;
      }
      n.set(t.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === o && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Vr.exists(this), Vr.output(t, this), this.finished = !0;
    const { buffer: e, view: n, blockLen: o, isLE: i } = this;
    let { pos: c } = this;
    e[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > o - c && (this.process(n, 0), c = 0);
    for (let B = c; B < o; B++)
      e[B] = 0;
    m2(n, o - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const u = Gc(t), p = this.outputLen;
    if (p % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const b = p / 4, _ = this.get();
    if (b > _.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let B = 0; B < b; B++)
      u.setUint32(4 * B, _[B], i);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const n = t.slice(0, e);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: n, length: o, finished: i, destroyed: c, pos: u } = this;
    return t.length = o, t.pos = u, t.finished = i, t.destroyed = c, o % e && t.buffer.set(n), t;
  }
}
const Gs = BigInt(2 ** 32 - 1), Hu = BigInt(32);
function up(r, t = !1) {
  return t ? { h: Number(r & Gs), l: Number(r >> Hu & Gs) } : { h: Number(r >> Hu & Gs) | 0, l: Number(r & Gs) | 0 };
}
function w2(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let o = 0; o < r.length; o++) {
    const { h: i, l: c } = up(r[o], t);
    [e[o], n[o]] = [i, c];
  }
  return [e, n];
}
const b2 = (r, t) => BigInt(r >>> 0) << Hu | BigInt(t >>> 0), v2 = (r, t, e) => r >>> e, x2 = (r, t, e) => r << 32 - e | t >>> e, E2 = (r, t, e) => r >>> e | t << 32 - e, _2 = (r, t, e) => r << 32 - e | t >>> e, S2 = (r, t, e) => r << 64 - e | t >>> e - 32, B2 = (r, t, e) => r >>> e - 32 | t << 64 - e, A2 = (r, t) => t, I2 = (r, t) => r, M2 = (r, t, e) => r << e | t >>> 32 - e, R2 = (r, t, e) => t << e | r >>> 32 - e, k2 = (r, t, e) => t << e - 32 | r >>> 64 - e, T2 = (r, t, e) => r << e - 32 | t >>> 64 - e;
function C2(r, t, e, n) {
  const o = (t >>> 0) + (n >>> 0);
  return { h: r + e + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const L2 = (r, t, e) => (r >>> 0) + (t >>> 0) + (e >>> 0), U2 = (r, t, e, n) => t + e + n + (r / 2 ** 32 | 0) | 0, O2 = (r, t, e, n) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0), F2 = (r, t, e, n, o) => t + e + n + o + (r / 2 ** 32 | 0) | 0, N2 = (r, t, e, n, o) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0) + (o >>> 0), $2 = (r, t, e, n, o, i) => t + e + n + o + i + (r / 2 ** 32 | 0) | 0, Jt = {
  fromBig: up,
  split: w2,
  toBig: b2,
  shrSH: v2,
  shrSL: x2,
  rotrSH: E2,
  rotrSL: _2,
  rotrBH: S2,
  rotrBL: B2,
  rotr32H: A2,
  rotr32L: I2,
  rotlSH: M2,
  rotlSL: R2,
  rotlBH: k2,
  rotlBL: T2,
  add: C2,
  add3L: L2,
  add3H: U2,
  add4L: O2,
  add4H: F2,
  add5H: $2,
  add5L: N2
}, [P2, D2] = Jt.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((r) => BigInt(r))), ri = new Uint32Array(80), ni = new Uint32Array(80);
class Ga extends cp {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: e, Bh: n, Bl: o, Ch: i, Cl: c, Dh: u, Dl: p, Eh: b, El: _, Fh: B, Fl: C, Gh: R, Gl: O, Hh: U, Hl: T } = this;
    return [t, e, n, o, i, c, u, p, b, _, B, C, R, O, U, T];
  }
  // prettier-ignore
  set(t, e, n, o, i, c, u, p, b, _, B, C, R, O, U, T) {
    this.Ah = t | 0, this.Al = e | 0, this.Bh = n | 0, this.Bl = o | 0, this.Ch = i | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = p | 0, this.Eh = b | 0, this.El = _ | 0, this.Fh = B | 0, this.Fl = C | 0, this.Gh = R | 0, this.Gl = O | 0, this.Hh = U | 0, this.Hl = T | 0;
  }
  process(t, e) {
    for (let L = 0; L < 16; L++, e += 4)
      ri[L] = t.getUint32(e), ni[L] = t.getUint32(e += 4);
    for (let L = 16; L < 80; L++) {
      const z = ri[L - 15] | 0, N = ni[L - 15] | 0, $ = Jt.rotrSH(z, N, 1) ^ Jt.rotrSH(z, N, 8) ^ Jt.shrSH(z, N, 7), q = Jt.rotrSL(z, N, 1) ^ Jt.rotrSL(z, N, 8) ^ Jt.shrSL(z, N, 7), W = ri[L - 2] | 0, tt = ni[L - 2] | 0, ht = Jt.rotrSH(W, tt, 19) ^ Jt.rotrBH(W, tt, 61) ^ Jt.shrSH(W, tt, 6), J = Jt.rotrSL(W, tt, 19) ^ Jt.rotrBL(W, tt, 61) ^ Jt.shrSL(W, tt, 6), mt = Jt.add4L(q, J, ni[L - 7], ni[L - 16]), I = Jt.add4H(mt, $, ht, ri[L - 7], ri[L - 16]);
      ri[L] = I | 0, ni[L] = mt | 0;
    }
    let { Ah: n, Al: o, Bh: i, Bl: c, Ch: u, Cl: p, Dh: b, Dl: _, Eh: B, El: C, Fh: R, Fl: O, Gh: U, Gl: T, Hh: P, Hl: F } = this;
    for (let L = 0; L < 80; L++) {
      const z = Jt.rotrSH(B, C, 14) ^ Jt.rotrSH(B, C, 18) ^ Jt.rotrBH(B, C, 41), N = Jt.rotrSL(B, C, 14) ^ Jt.rotrSL(B, C, 18) ^ Jt.rotrBL(B, C, 41), $ = B & R ^ ~B & U, q = C & O ^ ~C & T, W = Jt.add5L(F, N, q, D2[L], ni[L]), tt = Jt.add5H(W, P, z, $, P2[L], ri[L]), ht = W | 0, J = Jt.rotrSH(n, o, 28) ^ Jt.rotrBH(n, o, 34) ^ Jt.rotrBH(n, o, 39), mt = Jt.rotrSL(n, o, 28) ^ Jt.rotrBL(n, o, 34) ^ Jt.rotrBL(n, o, 39), I = n & i ^ n & u ^ i & u, f = o & c ^ o & p ^ c & p;
      P = U | 0, F = T | 0, U = R | 0, T = O | 0, R = B | 0, O = C | 0, { h: B, l: C } = Jt.add(b | 0, _ | 0, tt | 0, ht | 0), b = u | 0, _ = p | 0, u = i | 0, p = c | 0, i = n | 0, c = o | 0;
      const d = Jt.add3L(ht, mt, f);
      n = Jt.add3H(d, tt, J, I), o = d | 0;
    }
    ({ h: n, l: o } = Jt.add(this.Ah | 0, this.Al | 0, n | 0, o | 0)), { h: i, l: c } = Jt.add(this.Bh | 0, this.Bl | 0, i | 0, c | 0), { h: u, l: p } = Jt.add(this.Ch | 0, this.Cl | 0, u | 0, p | 0), { h: b, l: _ } = Jt.add(this.Dh | 0, this.Dl | 0, b | 0, _ | 0), { h: B, l: C } = Jt.add(this.Eh | 0, this.El | 0, B | 0, C | 0), { h: R, l: O } = Jt.add(this.Fh | 0, this.Fl | 0, R | 0, O | 0), { h: U, l: T } = Jt.add(this.Gh | 0, this.Gl | 0, U | 0, T | 0), { h: P, l: F } = Jt.add(this.Hh | 0, this.Hl | 0, P | 0, F | 0), this.set(n, o, i, c, u, p, b, _, B, C, R, O, U, T, P, F);
  }
  roundClean() {
    ri.fill(0), ni.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class z2 extends Ga {
  constructor() {
    super(), this.Ah = -1942145080, this.Al = 424955298, this.Bh = 1944164710, this.Bl = -1982016298, this.Ch = 502970286, this.Cl = 855612546, this.Dh = 1738396948, this.Dl = 1479516111, this.Eh = 258812777, this.El = 2077511080, this.Fh = 2011393907, this.Fl = 79989058, this.Gh = 1067287976, this.Gl = 1780299464, this.Hh = 286451373, this.Hl = -1848208735, this.outputLen = 28;
  }
}
class q2 extends Ga {
  constructor() {
    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
  }
}
class W2 extends Ga {
  constructor() {
    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
  }
}
const j2 = ao(() => new Ga());
ao(() => new z2());
ao(() => new q2());
ao(() => new W2());
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const wr = BigInt(0), ye = BigInt(1), Co = BigInt(2), _h = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), Ve = Object.freeze({
  a: BigInt(-1),
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
  l: _h,
  n: _h,
  h: BigInt(8),
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
}), fp = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"), gs = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
const H2 = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), K2 = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), G2 = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), V2 = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
class Re {
  constructor(t, e, n, o) {
    this.x = t, this.y = e, this.z = n, this.t = o;
  }
  static fromAffine(t) {
    if (!(t instanceof $r))
      throw new TypeError("ExtendedPoint#fromAffine: expected Point");
    return t.equals($r.ZERO) ? Re.ZERO : new Re(t.x, t.y, ye, st(t.x * t.y));
  }
  static toAffineBatch(t) {
    const e = X2(t.map((n) => n.z));
    return t.map((n, o) => n.toAffine(e[o]));
  }
  static normalizeZ(t) {
    return this.toAffineBatch(t).map(this.fromAffine);
  }
  equals(t) {
    Sh(t);
    const { x: e, y: n, z: o } = this, { x: i, y: c, z: u } = t, p = st(e * u), b = st(i * o), _ = st(n * u), B = st(c * o);
    return p === b && _ === B;
  }
  negate() {
    return new Re(st(-this.x), this.y, this.z, st(-this.t));
  }
  double() {
    const { x: t, y: e, z: n } = this, { a: o } = Ve, i = st(t * t), c = st(e * e), u = st(Co * st(n * n)), p = st(o * i), b = t + e, _ = st(st(b * b) - i - c), B = p + c, C = B - u, R = p - c, O = st(_ * C), U = st(B * R), T = st(_ * R), P = st(C * B);
    return new Re(O, U, P, T);
  }
  add(t) {
    Sh(t);
    const { x: e, y: n, z: o, t: i } = this, { x: c, y: u, z: p, t: b } = t, _ = st((n - e) * (u + c)), B = st((n + e) * (u - c)), C = st(B - _);
    if (C === wr)
      return this.double();
    const R = st(o * Co * b), O = st(i * Co * p), U = O + R, T = B + _, P = O - R, F = st(U * C), L = st(T * P), z = st(U * P), N = st(C * T);
    return new Re(F, L, N, z);
  }
  subtract(t) {
    return this.add(t.negate());
  }
  precomputeWindow(t) {
    const e = 1 + 256 / t, n = [];
    let o = this, i = o;
    for (let c = 0; c < e; c++) {
      i = o, n.push(i);
      for (let u = 1; u < 2 ** (t - 1); u++)
        i = i.add(o), n.push(i);
      o = i.double();
    }
    return n;
  }
  wNAF(t, e) {
    !e && this.equals(Re.BASE) && (e = $r.BASE);
    const n = e && e._WINDOW_SIZE || 1;
    if (256 % n)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let o = e && Ku.get(e);
    o || (o = this.precomputeWindow(n), e && n !== 1 && (o = Re.normalizeZ(o), Ku.set(e, o)));
    let i = Re.ZERO, c = Re.ZERO;
    const u = 1 + 256 / n, p = 2 ** (n - 1), b = BigInt(2 ** n - 1), _ = 2 ** n, B = BigInt(n);
    for (let C = 0; C < u; C++) {
      const R = C * p;
      let O = Number(t & b);
      if (t >>= B, O > p && (O -= _, t += ye), O === 0) {
        let U = o[R];
        C % 2 && (U = U.negate()), c = c.add(U);
      } else {
        let U = o[R + Math.abs(O) - 1];
        O < 0 && (U = U.negate()), i = i.add(U);
      }
    }
    return Re.normalizeZ([i, c])[0];
  }
  multiply(t, e) {
    return this.wNAF(Vu(t, Ve.l), e);
  }
  multiplyUnsafe(t) {
    let e = Vu(t, Ve.l, !1);
    const n = Re.BASE, o = Re.ZERO;
    if (e === wr)
      return o;
    if (this.equals(o) || e === ye)
      return this;
    if (this.equals(n))
      return this.wNAF(e);
    let i = o, c = this;
    for (; e > wr; )
      e & ye && (i = i.add(c)), c = c.double(), e >>= ye;
    return i;
  }
  isSmallOrder() {
    return this.multiplyUnsafe(Ve.h).equals(Re.ZERO);
  }
  isTorsionFree() {
    return this.multiplyUnsafe(Ve.l).equals(Re.ZERO);
  }
  toAffine(t = Ya(this.z)) {
    const { x: e, y: n, z: o } = this, i = st(e * t), c = st(n * t);
    if (st(o * t) !== ye)
      throw new Error("invZ was invalid");
    return new $r(i, c);
  }
  fromRistrettoBytes() {
    Zc();
  }
  toRistrettoBytes() {
    Zc();
  }
  fromRistrettoHash() {
    Zc();
  }
}
Re.BASE = new Re(Ve.Gx, Ve.Gy, ye, st(Ve.Gx * Ve.Gy));
Re.ZERO = new Re(wr, ye, ye, wr);
function Sh(r) {
  if (!(r instanceof Re))
    throw new TypeError("ExtendedPoint expected");
}
function Vc(r) {
  if (!(r instanceof on))
    throw new TypeError("RistrettoPoint expected");
}
function Zc() {
  throw new Error("Legacy method: switch to RistrettoPoint");
}
class on {
  constructor(t) {
    this.ep = t;
  }
  static calcElligatorRistrettoMap(t) {
    const { d: e } = Ve, n = st(gs * t * t), o = st((n + ye) * G2);
    let i = BigInt(-1);
    const c = st((i - e * n) * st(n + e));
    let { isValid: u, value: p } = zf(o, c), b = st(p * t);
    ai(b) || (b = st(-b)), u || (p = b), u || (i = n);
    const _ = st(i * (n - ye) * V2 - c), B = p * p, C = st((p + p) * c), R = st(_ * H2), O = st(ye - B), U = st(ye + B);
    return new Re(st(C * U), st(O * R), st(R * U), st(C * O));
  }
  static hashToCurve(t) {
    t = _s(t, 64);
    const e = Yc(t.slice(0, 32)), n = this.calcElligatorRistrettoMap(e), o = Yc(t.slice(32, 64)), i = this.calcElligatorRistrettoMap(o);
    return new on(n.add(i));
  }
  static fromHex(t) {
    t = _s(t, 32);
    const { a: e, d: n } = Ve, o = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", i = Yc(t);
    if (!tE(Ea(i), t) || ai(i))
      throw new Error(o);
    const c = st(i * i), u = st(ye + e * c), p = st(ye - e * c), b = st(u * u), _ = st(p * p), B = st(e * n * b - _), { isValid: C, value: R } = Ah(st(B * _)), O = st(R * p), U = st(R * O * B);
    let T = st((i + i) * O);
    ai(T) && (T = st(-T));
    const P = st(u * U), F = st(T * P);
    if (!C || ai(F) || P === wr)
      throw new Error(o);
    return new on(new Re(T, P, ye, F));
  }
  toRawBytes() {
    let { x: t, y: e, z: n, t: o } = this.ep;
    const i = st(st(n + e) * st(n - e)), c = st(t * e), u = st(c * c), { value: p } = Ah(st(i * u)), b = st(p * i), _ = st(p * c), B = st(b * _ * o);
    let C;
    if (ai(o * B)) {
      let O = st(e * gs), U = st(t * gs);
      t = O, e = U, C = st(b * K2);
    } else
      C = _;
    ai(t * B) && (e = st(-e));
    let R = st((n - e) * C);
    return ai(R) && (R = st(-R)), Ea(R);
  }
  toHex() {
    return Va(this.toRawBytes());
  }
  toString() {
    return this.toHex();
  }
  equals(t) {
    Vc(t);
    const e = this.ep, n = t.ep, o = st(e.x * n.y) === st(e.y * n.x), i = st(e.y * n.y) === st(e.x * n.x);
    return o || i;
  }
  add(t) {
    return Vc(t), new on(this.ep.add(t.ep));
  }
  subtract(t) {
    return Vc(t), new on(this.ep.subtract(t.ep));
  }
  multiply(t) {
    return new on(this.ep.multiply(t));
  }
  multiplyUnsafe(t) {
    return new on(this.ep.multiplyUnsafe(t));
  }
}
on.BASE = new on(Re.BASE);
on.ZERO = new on(Re.ZERO);
const Ku = /* @__PURE__ */ new WeakMap();
let $r = class Gu {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  _setWindowSize(t) {
    this._WINDOW_SIZE = t, Ku.delete(this);
  }
  static fromHex(t, e = !0) {
    const { d: n, P: o } = Ve;
    t = _s(t, 32);
    const i = t.slice();
    i[31] = t[31] & -129;
    const c = Za(i);
    if (e && c >= o)
      throw new Error("Expected 0 < hex < P");
    if (!e && c >= fp)
      throw new Error("Expected 0 < hex < 2**256");
    const u = st(c * c), p = st(u - ye), b = st(n * u + ye);
    let { isValid: _, value: B } = zf(p, b);
    if (!_)
      throw new Error("Point.fromHex: invalid y coordinate");
    const C = (B & ye) === ye;
    return (t[31] & 128) !== 0 !== C && (B = st(-B)), new Gu(B, c);
  }
  static async fromPrivateKey(t) {
    return (await hp(t)).point;
  }
  toRawBytes() {
    const t = Ea(this.y);
    return t[31] |= this.x & ye ? 128 : 0, t;
  }
  toHex() {
    return Va(this.toRawBytes());
  }
  toX25519() {
    const { y: t } = this, e = st((ye + t) * Ya(ye - t));
    return Ea(e);
  }
  isTorsionFree() {
    return Re.fromAffine(this).isTorsionFree();
  }
  equals(t) {
    return this.x === t.x && this.y === t.y;
  }
  negate() {
    return new Gu(st(-this.x), this.y);
  }
  add(t) {
    return Re.fromAffine(this).add(Re.fromAffine(t)).toAffine();
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiply(t) {
    return Re.fromAffine(this).multiply(t, this).toAffine();
  }
};
$r.BASE = new $r(Ve.Gx, Ve.Gy);
$r.ZERO = new $r(wr, ye);
function Bh(...r) {
  if (!r.every((n) => n instanceof Uint8Array))
    throw new Error("Expected Uint8Array list");
  if (r.length === 1)
    return r[0];
  const t = r.reduce((n, o) => n + o.length, 0), e = new Uint8Array(t);
  for (let n = 0, o = 0; n < r.length; n++) {
    const i = r[n];
    e.set(i, o), o += i.length;
  }
  return e;
}
const Z2 = Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function Va(r) {
  if (!(r instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += Z2[r[e]];
  return t;
}
function Df(r) {
  if (typeof r != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof r);
  if (r.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex");
  const t = new Uint8Array(r.length / 2);
  for (let e = 0; e < t.length; e++) {
    const n = e * 2, o = r.slice(n, n + 2), i = Number.parseInt(o, 16);
    if (Number.isNaN(i) || i < 0)
      throw new Error("Invalid byte sequence");
    t[e] = i;
  }
  return t;
}
function lp(r) {
  const e = r.toString(16).padStart(64, "0");
  return Df(e);
}
function Ea(r) {
  return lp(r).reverse();
}
function ai(r) {
  return (st(r) & ye) === ye;
}
function Za(r) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  return BigInt("0x" + Va(Uint8Array.from(r).reverse()));
}
const Y2 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Yc(r) {
  return st(Za(r) & Y2);
}
function st(r, t = Ve.P) {
  const e = r % t;
  return e >= wr ? e : t + e;
}
function Ya(r, t = Ve.P) {
  if (r === wr || t <= wr)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = st(r, t), n = t, o = wr, i = ye;
  for (; e !== wr; ) {
    const u = n / e, p = n % e, b = o - i * u;
    n = e, e = p, o = i, i = b;
  }
  if (n !== ye)
    throw new Error("invert: does not exist");
  return st(o, t);
}
function X2(r, t = Ve.P) {
  const e = new Array(r.length), n = r.reduce((i, c, u) => c === wr ? i : (e[u] = i, st(i * c, t)), ye), o = Ya(n, t);
  return r.reduceRight((i, c, u) => c === wr ? i : (e[u] = st(i * e[u], t), st(i * c, t)), o), e;
}
function xn(r, t) {
  const { P: e } = Ve;
  let n = r;
  for (; t-- > wr; )
    n *= n, n %= e;
  return n;
}
function J2(r) {
  const { P: t } = Ve, e = BigInt(5), n = BigInt(10), o = BigInt(20), i = BigInt(40), c = BigInt(80), p = r * r % t * r % t, b = xn(p, Co) * p % t, _ = xn(b, ye) * r % t, B = xn(_, e) * _ % t, C = xn(B, n) * B % t, R = xn(C, o) * C % t, O = xn(R, i) * R % t, U = xn(O, c) * O % t, T = xn(U, c) * O % t, P = xn(T, n) * B % t;
  return { pow_p_5_8: xn(P, Co) * r % t, b2: p };
}
function zf(r, t) {
  const e = st(t * t * t), n = st(e * e * t), o = J2(r * n).pow_p_5_8;
  let i = st(r * e * o);
  const c = st(t * i * i), u = i, p = st(i * gs), b = c === r, _ = c === st(-r), B = c === st(-r * gs);
  return b && (i = u), (_ || B) && (i = p), ai(i) && (i = st(-i)), { isValid: b || _, value: i };
}
function Ah(r) {
  return zf(ye, r);
}
function Q2(r) {
  return st(Za(r), Ve.l);
}
function tE(r, t) {
  if (r.length !== t.length)
    return !1;
  for (let e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
function _s(r, t) {
  const e = r instanceof Uint8Array ? Uint8Array.from(r) : Df(r);
  if (typeof t == "number" && e.length !== t)
    throw new Error(`Expected ${t} bytes`);
  return e;
}
function Vu(r, t, e = !0) {
  if (!t)
    throw new TypeError("Specify max value");
  if (typeof r == "number" && Number.isSafeInteger(r) && (r = BigInt(r)), typeof r == "bigint" && r < t) {
    if (e) {
      if (wr < r)
        return r;
    } else if (wr <= r)
      return r;
  }
  throw new TypeError("Expected valid scalar: 0 < scalar < max");
}
function eE(r) {
  return r[0] &= 248, r[31] &= 127, r[31] |= 64, r;
}
function rE(r) {
  if (r = typeof r == "bigint" || typeof r == "number" ? lp(Vu(r, fp)) : _s(r), r.length !== 32)
    throw new Error("Expected 32 bytes");
  return r;
}
function nE(r) {
  const t = eE(r.slice(0, 32)), e = r.slice(32, 64), n = Q2(t), o = $r.BASE.multiply(n), i = o.toRawBytes();
  return { head: t, prefix: e, scalar: n, point: o, pointBytes: i };
}
let Xc;
async function hp(r) {
  return nE(await zo.sha512(rE(r)));
}
$r.BASE._setWindowSize(8);
const ii = {
  node: df,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, zo = {
  bytesToHex: Va,
  hexToBytes: Df,
  concatBytes: Bh,
  getExtendedPublicKey: hp,
  mod: st,
  invert: Ya,
  TORSION_SUBGROUP: [
    "0100000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
    "0000000000000000000000000000000000000000000000000000000000000080",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
    "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
    "0000000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
  ],
  hashToPrivateScalar: (r) => {
    if (r = _s(r), r.length < 40 || r.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    return st(Za(r), Ve.l - ye) + ye;
  },
  randomBytes: (r = 32) => {
    if (ii.web)
      return ii.web.getRandomValues(new Uint8Array(r));
    if (ii.node) {
      const { randomBytes: t } = ii.node;
      return new Uint8Array(t(r).buffer);
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => zo.randomBytes(32),
  sha512: async (...r) => {
    const t = Bh(...r);
    if (ii.web) {
      const e = await ii.web.subtle.digest("SHA-512", t.buffer);
      return new Uint8Array(e);
    } else {
      if (ii.node)
        return Uint8Array.from(ii.node.createHash("sha512").update(t).digest());
      throw new Error("The environment doesn't have sha512 function");
    }
  },
  precompute(r = 8, t = $r.BASE) {
    const e = t.equals($r.BASE) ? t : new $r(t.x, t.y);
    return e._setWindowSize(r), e.multiply(Co), e;
  },
  sha512Sync: void 0
};
Object.defineProperties(zo, {
  sha512Sync: {
    configurable: !1,
    get() {
      return Xc;
    },
    set(r) {
      Xc || (Xc = r);
    }
  }
});
var qf = { exports: {} };
qf.exports;
(function(r) {
  (function(t, e) {
    function n(I, f) {
      if (!I)
        throw new Error(f || "Assertion failed");
    }
    function o(I, f) {
      I.super_ = f;
      var d = function() {
      };
      d.prototype = f.prototype, I.prototype = new d(), I.prototype.constructor = I;
    }
    function i(I, f, d) {
      if (i.isBN(I))
        return I;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, I !== null && ((f === "le" || f === "be") && (d = f, f = 10), this._init(I || 0, f || 10, d || "be"));
    }
    typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = I0.Buffer;
    } catch {
    }
    i.isBN = function(f) {
      return f instanceof i ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === i.wordSize && Array.isArray(f.words);
    }, i.max = function(f, d) {
      return f.cmp(d) > 0 ? f : d;
    }, i.min = function(f, d) {
      return f.cmp(d) < 0 ? f : d;
    }, i.prototype._init = function(f, d, y) {
      if (typeof f == "number")
        return this._initNumber(f, d, y);
      if (typeof f == "object")
        return this._initArray(f, d, y);
      d === "hex" && (d = 16), n(d === (d | 0) && d >= 2 && d <= 36), f = f.toString().replace(/\s+/g, "");
      var w = 0;
      f[0] === "-" && (w++, this.negative = 1), w < f.length && (d === 16 ? this._parseHex(f, w, y) : (this._parseBase(f, d, w), y === "le" && this._initArray(this.toArray(), d, y)));
    }, i.prototype._initNumber = function(f, d, y) {
      f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [f & 67108863], this.length = 1) : f < 4503599627370496 ? (this.words = [
        f & 67108863,
        f / 67108864 & 67108863
      ], this.length = 2) : (n(f < 9007199254740992), this.words = [
        f & 67108863,
        f / 67108864 & 67108863,
        1
      ], this.length = 3), y === "le" && this._initArray(this.toArray(), d, y);
    }, i.prototype._initArray = function(f, d, y) {
      if (n(typeof f.length == "number"), f.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);
      for (var w = 0; w < this.length; w++)
        this.words[w] = 0;
      var v, x, A = 0;
      if (y === "be")
        for (w = f.length - 1, v = 0; w >= 0; w -= 3)
          x = f[w] | f[w - 1] << 8 | f[w - 2] << 16, this.words[v] |= x << A & 67108863, this.words[v + 1] = x >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, v++);
      else if (y === "le")
        for (w = 0, v = 0; w < f.length; w += 3)
          x = f[w] | f[w + 1] << 8 | f[w + 2] << 16, this.words[v] |= x << A & 67108863, this.words[v + 1] = x >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, v++);
      return this._strip();
    };
    function u(I, f) {
      var d = I.charCodeAt(f);
      if (d >= 48 && d <= 57)
        return d - 48;
      if (d >= 65 && d <= 70)
        return d - 55;
      if (d >= 97 && d <= 102)
        return d - 87;
      n(!1, "Invalid character in " + I);
    }
    function p(I, f, d) {
      var y = u(I, d);
      return d - 1 >= f && (y |= u(I, d - 1) << 4), y;
    }
    i.prototype._parseHex = function(f, d, y) {
      this.length = Math.ceil((f.length - d) / 6), this.words = new Array(this.length);
      for (var w = 0; w < this.length; w++)
        this.words[w] = 0;
      var v = 0, x = 0, A;
      if (y === "be")
        for (w = f.length - 1; w >= d; w -= 2)
          A = p(f, d, w) << v, this.words[x] |= A & 67108863, v >= 18 ? (v -= 18, x += 1, this.words[x] |= A >>> 26) : v += 8;
      else {
        var m = f.length - d;
        for (w = m % 2 === 0 ? d + 1 : d; w < f.length; w += 2)
          A = p(f, d, w) << v, this.words[x] |= A & 67108863, v >= 18 ? (v -= 18, x += 1, this.words[x] |= A >>> 26) : v += 8;
      }
      this._strip();
    };
    function b(I, f, d, y) {
      for (var w = 0, v = 0, x = Math.min(I.length, d), A = f; A < x; A++) {
        var m = I.charCodeAt(A) - 48;
        w *= y, m >= 49 ? v = m - 49 + 10 : m >= 17 ? v = m - 17 + 10 : v = m, n(m >= 0 && v < y, "Invalid character"), w += v;
      }
      return w;
    }
    i.prototype._parseBase = function(f, d, y) {
      this.words = [0], this.length = 1;
      for (var w = 0, v = 1; v <= 67108863; v *= d)
        w++;
      w--, v = v / d | 0;
      for (var x = f.length - y, A = x % w, m = Math.min(x, x - A) + y, l = 0, E = y; E < m; E += w)
        l = b(f, E, E + w, d), this.imuln(v), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
      if (A !== 0) {
        var j = 1;
        for (l = b(f, E, f.length, d), E = 0; E < A; E++)
          j *= d;
        this.imuln(j), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
      }
      this._strip();
    }, i.prototype.copy = function(f) {
      f.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        f.words[d] = this.words[d];
      f.length = this.length, f.negative = this.negative, f.red = this.red;
    };
    function _(I, f) {
      I.words = f.words, I.length = f.length, I.negative = f.negative, I.red = f.red;
    }
    if (i.prototype._move = function(f) {
      _(f, this);
    }, i.prototype.clone = function() {
      var f = new i(null);
      return this.copy(f), f;
    }, i.prototype._expand = function(f) {
      for (; this.length < f; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = B;
      } catch {
        i.prototype.inspect = B;
      }
    else
      i.prototype.inspect = B;
    function B() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var C = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], R = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], O = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(f, d) {
      f = f || 10, d = d | 0 || 1;
      var y;
      if (f === 16 || f === "hex") {
        y = "";
        for (var w = 0, v = 0, x = 0; x < this.length; x++) {
          var A = this.words[x], m = ((A << w | v) & 16777215).toString(16);
          v = A >>> 24 - w & 16777215, w += 2, w >= 26 && (w -= 26, x--), v !== 0 || x !== this.length - 1 ? y = C[6 - m.length] + m + y : y = m + y;
        }
        for (v !== 0 && (y = v.toString(16) + y); y.length % d !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var l = R[f], E = O[f];
        y = "";
        var j = this.clone();
        for (j.negative = 0; !j.isZero(); ) {
          var H = j.modrn(E).toString(f);
          j = j.idivn(E), j.isZero() ? y = H + y : y = C[l - H.length] + H + y;
        }
        for (this.isZero() && (y = "0" + y); y.length % d !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var f = this.words[0];
      return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, c && (i.prototype.toBuffer = function(f, d) {
      return this.toArrayLike(c, f, d);
    }), i.prototype.toArray = function(f, d) {
      return this.toArrayLike(Array, f, d);
    };
    var U = function(f, d) {
      return f.allocUnsafe ? f.allocUnsafe(d) : new f(d);
    };
    i.prototype.toArrayLike = function(f, d, y) {
      this._strip();
      var w = this.byteLength(), v = y || Math.max(1, w);
      n(w <= v, "byte array longer than desired length"), n(v > 0, "Requested array length <= 0");
      var x = U(f, v), A = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + A](x, w), x;
    }, i.prototype._toArrayLikeLE = function(f, d) {
      for (var y = 0, w = 0, v = 0, x = 0; v < this.length; v++) {
        var A = this.words[v] << x | w;
        f[y++] = A & 255, y < f.length && (f[y++] = A >> 8 & 255), y < f.length && (f[y++] = A >> 16 & 255), x === 6 ? (y < f.length && (f[y++] = A >> 24 & 255), w = 0, x = 0) : (w = A >>> 24, x += 2);
      }
      if (y < f.length)
        for (f[y++] = w; y < f.length; )
          f[y++] = 0;
    }, i.prototype._toArrayLikeBE = function(f, d) {
      for (var y = f.length - 1, w = 0, v = 0, x = 0; v < this.length; v++) {
        var A = this.words[v] << x | w;
        f[y--] = A & 255, y >= 0 && (f[y--] = A >> 8 & 255), y >= 0 && (f[y--] = A >> 16 & 255), x === 6 ? (y >= 0 && (f[y--] = A >> 24 & 255), w = 0, x = 0) : (w = A >>> 24, x += 2);
      }
      if (y >= 0)
        for (f[y--] = w; y >= 0; )
          f[y--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(f) {
      return 32 - Math.clz32(f);
    } : i.prototype._countBits = function(f) {
      var d = f, y = 0;
      return d >= 4096 && (y += 13, d >>>= 13), d >= 64 && (y += 7, d >>>= 7), d >= 8 && (y += 4, d >>>= 4), d >= 2 && (y += 2, d >>>= 2), y + d;
    }, i.prototype._zeroBits = function(f) {
      if (f === 0)
        return 26;
      var d = f, y = 0;
      return d & 8191 || (y += 13, d >>>= 13), d & 127 || (y += 7, d >>>= 7), d & 15 || (y += 4, d >>>= 4), d & 3 || (y += 2, d >>>= 2), d & 1 || y++, y;
    }, i.prototype.bitLength = function() {
      var f = this.words[this.length - 1], d = this._countBits(f);
      return (this.length - 1) * 26 + d;
    };
    function T(I) {
      for (var f = new Array(I.bitLength()), d = 0; d < f.length; d++) {
        var y = d / 26 | 0, w = d % 26;
        f[d] = I.words[y] >>> w & 1;
      }
      return f;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var f = 0, d = 0; d < this.length; d++) {
        var y = this._zeroBits(this.words[d]);
        if (f += y, y !== 26)
          break;
      }
      return f;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(f) {
      return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(f) {
      return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(f) {
      for (; this.length < f.length; )
        this.words[this.length++] = 0;
      for (var d = 0; d < f.length; d++)
        this.words[d] = this.words[d] | f.words[d];
      return this._strip();
    }, i.prototype.ior = function(f) {
      return n((this.negative | f.negative) === 0), this.iuor(f);
    }, i.prototype.or = function(f) {
      return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
    }, i.prototype.uor = function(f) {
      return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
    }, i.prototype.iuand = function(f) {
      var d;
      this.length > f.length ? d = f : d = this;
      for (var y = 0; y < d.length; y++)
        this.words[y] = this.words[y] & f.words[y];
      return this.length = d.length, this._strip();
    }, i.prototype.iand = function(f) {
      return n((this.negative | f.negative) === 0), this.iuand(f);
    }, i.prototype.and = function(f) {
      return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
    }, i.prototype.uand = function(f) {
      return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
    }, i.prototype.iuxor = function(f) {
      var d, y;
      this.length > f.length ? (d = this, y = f) : (d = f, y = this);
      for (var w = 0; w < y.length; w++)
        this.words[w] = d.words[w] ^ y.words[w];
      if (this !== d)
        for (; w < d.length; w++)
          this.words[w] = d.words[w];
      return this.length = d.length, this._strip();
    }, i.prototype.ixor = function(f) {
      return n((this.negative | f.negative) === 0), this.iuxor(f);
    }, i.prototype.xor = function(f) {
      return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
    }, i.prototype.uxor = function(f) {
      return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
    }, i.prototype.inotn = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = Math.ceil(f / 26) | 0, y = f % 26;
      this._expand(d), y > 0 && d--;
      for (var w = 0; w < d; w++)
        this.words[w] = ~this.words[w] & 67108863;
      return y > 0 && (this.words[w] = ~this.words[w] & 67108863 >> 26 - y), this._strip();
    }, i.prototype.notn = function(f) {
      return this.clone().inotn(f);
    }, i.prototype.setn = function(f, d) {
      n(typeof f == "number" && f >= 0);
      var y = f / 26 | 0, w = f % 26;
      return this._expand(y + 1), d ? this.words[y] = this.words[y] | 1 << w : this.words[y] = this.words[y] & ~(1 << w), this._strip();
    }, i.prototype.iadd = function(f) {
      var d;
      if (this.negative !== 0 && f.negative === 0)
        return this.negative = 0, d = this.isub(f), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f.negative !== 0)
        return f.negative = 0, d = this.isub(f), f.negative = 1, d._normSign();
      var y, w;
      this.length > f.length ? (y = this, w = f) : (y = f, w = this);
      for (var v = 0, x = 0; x < w.length; x++)
        d = (y.words[x] | 0) + (w.words[x] | 0) + v, this.words[x] = d & 67108863, v = d >>> 26;
      for (; v !== 0 && x < y.length; x++)
        d = (y.words[x] | 0) + v, this.words[x] = d & 67108863, v = d >>> 26;
      if (this.length = y.length, v !== 0)
        this.words[this.length] = v, this.length++;
      else if (y !== this)
        for (; x < y.length; x++)
          this.words[x] = y.words[x];
      return this;
    }, i.prototype.add = function(f) {
      var d;
      return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, d = this.sub(f), f.negative ^= 1, d) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = f.sub(this), this.negative = 1, d) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
    }, i.prototype.isub = function(f) {
      if (f.negative !== 0) {
        f.negative = 0;
        var d = this.iadd(f);
        return f.negative = 1, d._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();
      var y = this.cmp(f);
      if (y === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var w, v;
      y > 0 ? (w = this, v = f) : (w = f, v = this);
      for (var x = 0, A = 0; A < v.length; A++)
        d = (w.words[A] | 0) - (v.words[A] | 0) + x, x = d >> 26, this.words[A] = d & 67108863;
      for (; x !== 0 && A < w.length; A++)
        d = (w.words[A] | 0) + x, x = d >> 26, this.words[A] = d & 67108863;
      if (x === 0 && A < w.length && w !== this)
        for (; A < w.length; A++)
          this.words[A] = w.words[A];
      return this.length = Math.max(this.length, A), w !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(f) {
      return this.clone().isub(f);
    };
    function P(I, f, d) {
      d.negative = f.negative ^ I.negative;
      var y = I.length + f.length | 0;
      d.length = y, y = y - 1 | 0;
      var w = I.words[0] | 0, v = f.words[0] | 0, x = w * v, A = x & 67108863, m = x / 67108864 | 0;
      d.words[0] = A;
      for (var l = 1; l < y; l++) {
        for (var E = m >>> 26, j = m & 67108863, H = Math.min(l, f.length - 1), K = Math.max(0, l - I.length + 1); K <= H; K++) {
          var ft = l - K | 0;
          w = I.words[ft] | 0, v = f.words[K] | 0, x = w * v + j, E += x / 67108864 | 0, j = x & 67108863;
        }
        d.words[l] = j | 0, m = E | 0;
      }
      return m !== 0 ? d.words[l] = m | 0 : d.length--, d._strip();
    }
    var F = function(f, d, y) {
      var w = f.words, v = d.words, x = y.words, A = 0, m, l, E, j = w[0] | 0, H = j & 8191, K = j >>> 13, ft = w[1] | 0, it = ft & 8191, ut = ft >>> 13, Vt = w[2] | 0, Bt = Vt & 8191, _t = Vt >>> 13, Wt = w[3] | 0, vt = Wt & 8191, Rt = Wt >>> 13, qe = w[4] | 0, Lt = qe & 8191, Pt = qe >>> 13, nr = w[5] | 0, Ft = nr & 8191, kt = nr >>> 13, Zt = w[6] | 0, Ot = Zt & 8191, Nt = Zt >>> 13, he = w[7] | 0, $t = he & 8191, h = he >>> 13, s = w[8] | 0, a = s & 8191, g = s >>> 13, S = w[9] | 0, M = S & 8191, k = S >>> 13, Q = v[0] | 0, nt = Q & 8191, et = Q >>> 13, wt = v[1] | 0, X = wt & 8191, Yt = wt >>> 13, Gn = v[2] | 0, Kt = Gn & 8191, Xt = Gn >>> 13, On = v[3] | 0, Qt = On & 8191, re = On >>> 13, Vn = v[4] | 0, ne = Vn & 8191, te = Vn >>> 13, Zn = v[5] | 0, ie = Zn & 8191, oe = Zn >>> 13, Yn = v[6] | 0, se = Yn & 8191, ae = Yn >>> 13, vi = v[7] | 0, ce = vi & 8191, D = vi >>> 13, ot = v[8] | 0, rt = ot & 8191, dt = ot >>> 13, de = v[9] | 0, St = de & 8191, bt = de >>> 13;
      y.negative = f.negative ^ d.negative, y.length = 19, m = Math.imul(H, nt), l = Math.imul(H, et), l = l + Math.imul(K, nt) | 0, E = Math.imul(K, et);
      var ee = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (ee >>> 26) | 0, ee &= 67108863, m = Math.imul(it, nt), l = Math.imul(it, et), l = l + Math.imul(ut, nt) | 0, E = Math.imul(ut, et), m = m + Math.imul(H, X) | 0, l = l + Math.imul(H, Yt) | 0, l = l + Math.imul(K, X) | 0, E = E + Math.imul(K, Yt) | 0;
      var Ne = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, m = Math.imul(Bt, nt), l = Math.imul(Bt, et), l = l + Math.imul(_t, nt) | 0, E = Math.imul(_t, et), m = m + Math.imul(it, X) | 0, l = l + Math.imul(it, Yt) | 0, l = l + Math.imul(ut, X) | 0, E = E + Math.imul(ut, Yt) | 0, m = m + Math.imul(H, Kt) | 0, l = l + Math.imul(H, Xt) | 0, l = l + Math.imul(K, Kt) | 0, E = E + Math.imul(K, Xt) | 0;
      var Be = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, m = Math.imul(vt, nt), l = Math.imul(vt, et), l = l + Math.imul(Rt, nt) | 0, E = Math.imul(Rt, et), m = m + Math.imul(Bt, X) | 0, l = l + Math.imul(Bt, Yt) | 0, l = l + Math.imul(_t, X) | 0, E = E + Math.imul(_t, Yt) | 0, m = m + Math.imul(it, Kt) | 0, l = l + Math.imul(it, Xt) | 0, l = l + Math.imul(ut, Kt) | 0, E = E + Math.imul(ut, Xt) | 0, m = m + Math.imul(H, Qt) | 0, l = l + Math.imul(H, re) | 0, l = l + Math.imul(K, Qt) | 0, E = E + Math.imul(K, re) | 0;
      var Me = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, m = Math.imul(Lt, nt), l = Math.imul(Lt, et), l = l + Math.imul(Pt, nt) | 0, E = Math.imul(Pt, et), m = m + Math.imul(vt, X) | 0, l = l + Math.imul(vt, Yt) | 0, l = l + Math.imul(Rt, X) | 0, E = E + Math.imul(Rt, Yt) | 0, m = m + Math.imul(Bt, Kt) | 0, l = l + Math.imul(Bt, Xt) | 0, l = l + Math.imul(_t, Kt) | 0, E = E + Math.imul(_t, Xt) | 0, m = m + Math.imul(it, Qt) | 0, l = l + Math.imul(it, re) | 0, l = l + Math.imul(ut, Qt) | 0, E = E + Math.imul(ut, re) | 0, m = m + Math.imul(H, ne) | 0, l = l + Math.imul(H, te) | 0, l = l + Math.imul(K, ne) | 0, E = E + Math.imul(K, te) | 0;
      var Ze = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, m = Math.imul(Ft, nt), l = Math.imul(Ft, et), l = l + Math.imul(kt, nt) | 0, E = Math.imul(kt, et), m = m + Math.imul(Lt, X) | 0, l = l + Math.imul(Lt, Yt) | 0, l = l + Math.imul(Pt, X) | 0, E = E + Math.imul(Pt, Yt) | 0, m = m + Math.imul(vt, Kt) | 0, l = l + Math.imul(vt, Xt) | 0, l = l + Math.imul(Rt, Kt) | 0, E = E + Math.imul(Rt, Xt) | 0, m = m + Math.imul(Bt, Qt) | 0, l = l + Math.imul(Bt, re) | 0, l = l + Math.imul(_t, Qt) | 0, E = E + Math.imul(_t, re) | 0, m = m + Math.imul(it, ne) | 0, l = l + Math.imul(it, te) | 0, l = l + Math.imul(ut, ne) | 0, E = E + Math.imul(ut, te) | 0, m = m + Math.imul(H, ie) | 0, l = l + Math.imul(H, oe) | 0, l = l + Math.imul(K, ie) | 0, E = E + Math.imul(K, oe) | 0;
      var Cr = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, m = Math.imul(Ot, nt), l = Math.imul(Ot, et), l = l + Math.imul(Nt, nt) | 0, E = Math.imul(Nt, et), m = m + Math.imul(Ft, X) | 0, l = l + Math.imul(Ft, Yt) | 0, l = l + Math.imul(kt, X) | 0, E = E + Math.imul(kt, Yt) | 0, m = m + Math.imul(Lt, Kt) | 0, l = l + Math.imul(Lt, Xt) | 0, l = l + Math.imul(Pt, Kt) | 0, E = E + Math.imul(Pt, Xt) | 0, m = m + Math.imul(vt, Qt) | 0, l = l + Math.imul(vt, re) | 0, l = l + Math.imul(Rt, Qt) | 0, E = E + Math.imul(Rt, re) | 0, m = m + Math.imul(Bt, ne) | 0, l = l + Math.imul(Bt, te) | 0, l = l + Math.imul(_t, ne) | 0, E = E + Math.imul(_t, te) | 0, m = m + Math.imul(it, ie) | 0, l = l + Math.imul(it, oe) | 0, l = l + Math.imul(ut, ie) | 0, E = E + Math.imul(ut, oe) | 0, m = m + Math.imul(H, se) | 0, l = l + Math.imul(H, ae) | 0, l = l + Math.imul(K, se) | 0, E = E + Math.imul(K, ae) | 0;
      var wn = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (wn >>> 26) | 0, wn &= 67108863, m = Math.imul($t, nt), l = Math.imul($t, et), l = l + Math.imul(h, nt) | 0, E = Math.imul(h, et), m = m + Math.imul(Ot, X) | 0, l = l + Math.imul(Ot, Yt) | 0, l = l + Math.imul(Nt, X) | 0, E = E + Math.imul(Nt, Yt) | 0, m = m + Math.imul(Ft, Kt) | 0, l = l + Math.imul(Ft, Xt) | 0, l = l + Math.imul(kt, Kt) | 0, E = E + Math.imul(kt, Xt) | 0, m = m + Math.imul(Lt, Qt) | 0, l = l + Math.imul(Lt, re) | 0, l = l + Math.imul(Pt, Qt) | 0, E = E + Math.imul(Pt, re) | 0, m = m + Math.imul(vt, ne) | 0, l = l + Math.imul(vt, te) | 0, l = l + Math.imul(Rt, ne) | 0, E = E + Math.imul(Rt, te) | 0, m = m + Math.imul(Bt, ie) | 0, l = l + Math.imul(Bt, oe) | 0, l = l + Math.imul(_t, ie) | 0, E = E + Math.imul(_t, oe) | 0, m = m + Math.imul(it, se) | 0, l = l + Math.imul(it, ae) | 0, l = l + Math.imul(ut, se) | 0, E = E + Math.imul(ut, ae) | 0, m = m + Math.imul(H, ce) | 0, l = l + Math.imul(H, D) | 0, l = l + Math.imul(K, ce) | 0, E = E + Math.imul(K, D) | 0;
      var ar = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, m = Math.imul(a, nt), l = Math.imul(a, et), l = l + Math.imul(g, nt) | 0, E = Math.imul(g, et), m = m + Math.imul($t, X) | 0, l = l + Math.imul($t, Yt) | 0, l = l + Math.imul(h, X) | 0, E = E + Math.imul(h, Yt) | 0, m = m + Math.imul(Ot, Kt) | 0, l = l + Math.imul(Ot, Xt) | 0, l = l + Math.imul(Nt, Kt) | 0, E = E + Math.imul(Nt, Xt) | 0, m = m + Math.imul(Ft, Qt) | 0, l = l + Math.imul(Ft, re) | 0, l = l + Math.imul(kt, Qt) | 0, E = E + Math.imul(kt, re) | 0, m = m + Math.imul(Lt, ne) | 0, l = l + Math.imul(Lt, te) | 0, l = l + Math.imul(Pt, ne) | 0, E = E + Math.imul(Pt, te) | 0, m = m + Math.imul(vt, ie) | 0, l = l + Math.imul(vt, oe) | 0, l = l + Math.imul(Rt, ie) | 0, E = E + Math.imul(Rt, oe) | 0, m = m + Math.imul(Bt, se) | 0, l = l + Math.imul(Bt, ae) | 0, l = l + Math.imul(_t, se) | 0, E = E + Math.imul(_t, ae) | 0, m = m + Math.imul(it, ce) | 0, l = l + Math.imul(it, D) | 0, l = l + Math.imul(ut, ce) | 0, E = E + Math.imul(ut, D) | 0, m = m + Math.imul(H, rt) | 0, l = l + Math.imul(H, dt) | 0, l = l + Math.imul(K, rt) | 0, E = E + Math.imul(K, dt) | 0;
      var xi = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (xi >>> 26) | 0, xi &= 67108863, m = Math.imul(M, nt), l = Math.imul(M, et), l = l + Math.imul(k, nt) | 0, E = Math.imul(k, et), m = m + Math.imul(a, X) | 0, l = l + Math.imul(a, Yt) | 0, l = l + Math.imul(g, X) | 0, E = E + Math.imul(g, Yt) | 0, m = m + Math.imul($t, Kt) | 0, l = l + Math.imul($t, Xt) | 0, l = l + Math.imul(h, Kt) | 0, E = E + Math.imul(h, Xt) | 0, m = m + Math.imul(Ot, Qt) | 0, l = l + Math.imul(Ot, re) | 0, l = l + Math.imul(Nt, Qt) | 0, E = E + Math.imul(Nt, re) | 0, m = m + Math.imul(Ft, ne) | 0, l = l + Math.imul(Ft, te) | 0, l = l + Math.imul(kt, ne) | 0, E = E + Math.imul(kt, te) | 0, m = m + Math.imul(Lt, ie) | 0, l = l + Math.imul(Lt, oe) | 0, l = l + Math.imul(Pt, ie) | 0, E = E + Math.imul(Pt, oe) | 0, m = m + Math.imul(vt, se) | 0, l = l + Math.imul(vt, ae) | 0, l = l + Math.imul(Rt, se) | 0, E = E + Math.imul(Rt, ae) | 0, m = m + Math.imul(Bt, ce) | 0, l = l + Math.imul(Bt, D) | 0, l = l + Math.imul(_t, ce) | 0, E = E + Math.imul(_t, D) | 0, m = m + Math.imul(it, rt) | 0, l = l + Math.imul(it, dt) | 0, l = l + Math.imul(ut, rt) | 0, E = E + Math.imul(ut, dt) | 0, m = m + Math.imul(H, St) | 0, l = l + Math.imul(H, bt) | 0, l = l + Math.imul(K, St) | 0, E = E + Math.imul(K, bt) | 0;
      var Ei = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ei >>> 26) | 0, Ei &= 67108863, m = Math.imul(M, X), l = Math.imul(M, Yt), l = l + Math.imul(k, X) | 0, E = Math.imul(k, Yt), m = m + Math.imul(a, Kt) | 0, l = l + Math.imul(a, Xt) | 0, l = l + Math.imul(g, Kt) | 0, E = E + Math.imul(g, Xt) | 0, m = m + Math.imul($t, Qt) | 0, l = l + Math.imul($t, re) | 0, l = l + Math.imul(h, Qt) | 0, E = E + Math.imul(h, re) | 0, m = m + Math.imul(Ot, ne) | 0, l = l + Math.imul(Ot, te) | 0, l = l + Math.imul(Nt, ne) | 0, E = E + Math.imul(Nt, te) | 0, m = m + Math.imul(Ft, ie) | 0, l = l + Math.imul(Ft, oe) | 0, l = l + Math.imul(kt, ie) | 0, E = E + Math.imul(kt, oe) | 0, m = m + Math.imul(Lt, se) | 0, l = l + Math.imul(Lt, ae) | 0, l = l + Math.imul(Pt, se) | 0, E = E + Math.imul(Pt, ae) | 0, m = m + Math.imul(vt, ce) | 0, l = l + Math.imul(vt, D) | 0, l = l + Math.imul(Rt, ce) | 0, E = E + Math.imul(Rt, D) | 0, m = m + Math.imul(Bt, rt) | 0, l = l + Math.imul(Bt, dt) | 0, l = l + Math.imul(_t, rt) | 0, E = E + Math.imul(_t, dt) | 0, m = m + Math.imul(it, St) | 0, l = l + Math.imul(it, bt) | 0, l = l + Math.imul(ut, St) | 0, E = E + Math.imul(ut, bt) | 0;
      var _i = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (_i >>> 26) | 0, _i &= 67108863, m = Math.imul(M, Kt), l = Math.imul(M, Xt), l = l + Math.imul(k, Kt) | 0, E = Math.imul(k, Xt), m = m + Math.imul(a, Qt) | 0, l = l + Math.imul(a, re) | 0, l = l + Math.imul(g, Qt) | 0, E = E + Math.imul(g, re) | 0, m = m + Math.imul($t, ne) | 0, l = l + Math.imul($t, te) | 0, l = l + Math.imul(h, ne) | 0, E = E + Math.imul(h, te) | 0, m = m + Math.imul(Ot, ie) | 0, l = l + Math.imul(Ot, oe) | 0, l = l + Math.imul(Nt, ie) | 0, E = E + Math.imul(Nt, oe) | 0, m = m + Math.imul(Ft, se) | 0, l = l + Math.imul(Ft, ae) | 0, l = l + Math.imul(kt, se) | 0, E = E + Math.imul(kt, ae) | 0, m = m + Math.imul(Lt, ce) | 0, l = l + Math.imul(Lt, D) | 0, l = l + Math.imul(Pt, ce) | 0, E = E + Math.imul(Pt, D) | 0, m = m + Math.imul(vt, rt) | 0, l = l + Math.imul(vt, dt) | 0, l = l + Math.imul(Rt, rt) | 0, E = E + Math.imul(Rt, dt) | 0, m = m + Math.imul(Bt, St) | 0, l = l + Math.imul(Bt, bt) | 0, l = l + Math.imul(_t, St) | 0, E = E + Math.imul(_t, bt) | 0;
      var Si = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Si >>> 26) | 0, Si &= 67108863, m = Math.imul(M, Qt), l = Math.imul(M, re), l = l + Math.imul(k, Qt) | 0, E = Math.imul(k, re), m = m + Math.imul(a, ne) | 0, l = l + Math.imul(a, te) | 0, l = l + Math.imul(g, ne) | 0, E = E + Math.imul(g, te) | 0, m = m + Math.imul($t, ie) | 0, l = l + Math.imul($t, oe) | 0, l = l + Math.imul(h, ie) | 0, E = E + Math.imul(h, oe) | 0, m = m + Math.imul(Ot, se) | 0, l = l + Math.imul(Ot, ae) | 0, l = l + Math.imul(Nt, se) | 0, E = E + Math.imul(Nt, ae) | 0, m = m + Math.imul(Ft, ce) | 0, l = l + Math.imul(Ft, D) | 0, l = l + Math.imul(kt, ce) | 0, E = E + Math.imul(kt, D) | 0, m = m + Math.imul(Lt, rt) | 0, l = l + Math.imul(Lt, dt) | 0, l = l + Math.imul(Pt, rt) | 0, E = E + Math.imul(Pt, dt) | 0, m = m + Math.imul(vt, St) | 0, l = l + Math.imul(vt, bt) | 0, l = l + Math.imul(Rt, St) | 0, E = E + Math.imul(Rt, bt) | 0;
      var Bi = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Bi >>> 26) | 0, Bi &= 67108863, m = Math.imul(M, ne), l = Math.imul(M, te), l = l + Math.imul(k, ne) | 0, E = Math.imul(k, te), m = m + Math.imul(a, ie) | 0, l = l + Math.imul(a, oe) | 0, l = l + Math.imul(g, ie) | 0, E = E + Math.imul(g, oe) | 0, m = m + Math.imul($t, se) | 0, l = l + Math.imul($t, ae) | 0, l = l + Math.imul(h, se) | 0, E = E + Math.imul(h, ae) | 0, m = m + Math.imul(Ot, ce) | 0, l = l + Math.imul(Ot, D) | 0, l = l + Math.imul(Nt, ce) | 0, E = E + Math.imul(Nt, D) | 0, m = m + Math.imul(Ft, rt) | 0, l = l + Math.imul(Ft, dt) | 0, l = l + Math.imul(kt, rt) | 0, E = E + Math.imul(kt, dt) | 0, m = m + Math.imul(Lt, St) | 0, l = l + Math.imul(Lt, bt) | 0, l = l + Math.imul(Pt, St) | 0, E = E + Math.imul(Pt, bt) | 0;
      var Ai = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ai >>> 26) | 0, Ai &= 67108863, m = Math.imul(M, ie), l = Math.imul(M, oe), l = l + Math.imul(k, ie) | 0, E = Math.imul(k, oe), m = m + Math.imul(a, se) | 0, l = l + Math.imul(a, ae) | 0, l = l + Math.imul(g, se) | 0, E = E + Math.imul(g, ae) | 0, m = m + Math.imul($t, ce) | 0, l = l + Math.imul($t, D) | 0, l = l + Math.imul(h, ce) | 0, E = E + Math.imul(h, D) | 0, m = m + Math.imul(Ot, rt) | 0, l = l + Math.imul(Ot, dt) | 0, l = l + Math.imul(Nt, rt) | 0, E = E + Math.imul(Nt, dt) | 0, m = m + Math.imul(Ft, St) | 0, l = l + Math.imul(Ft, bt) | 0, l = l + Math.imul(kt, St) | 0, E = E + Math.imul(kt, bt) | 0;
      var Ii = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ii >>> 26) | 0, Ii &= 67108863, m = Math.imul(M, se), l = Math.imul(M, ae), l = l + Math.imul(k, se) | 0, E = Math.imul(k, ae), m = m + Math.imul(a, ce) | 0, l = l + Math.imul(a, D) | 0, l = l + Math.imul(g, ce) | 0, E = E + Math.imul(g, D) | 0, m = m + Math.imul($t, rt) | 0, l = l + Math.imul($t, dt) | 0, l = l + Math.imul(h, rt) | 0, E = E + Math.imul(h, dt) | 0, m = m + Math.imul(Ot, St) | 0, l = l + Math.imul(Ot, bt) | 0, l = l + Math.imul(Nt, St) | 0, E = E + Math.imul(Nt, bt) | 0;
      var Mi = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Mi >>> 26) | 0, Mi &= 67108863, m = Math.imul(M, ce), l = Math.imul(M, D), l = l + Math.imul(k, ce) | 0, E = Math.imul(k, D), m = m + Math.imul(a, rt) | 0, l = l + Math.imul(a, dt) | 0, l = l + Math.imul(g, rt) | 0, E = E + Math.imul(g, dt) | 0, m = m + Math.imul($t, St) | 0, l = l + Math.imul($t, bt) | 0, l = l + Math.imul(h, St) | 0, E = E + Math.imul(h, bt) | 0;
      var Ri = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (Ri >>> 26) | 0, Ri &= 67108863, m = Math.imul(M, rt), l = Math.imul(M, dt), l = l + Math.imul(k, rt) | 0, E = Math.imul(k, dt), m = m + Math.imul(a, St) | 0, l = l + Math.imul(a, bt) | 0, l = l + Math.imul(g, St) | 0, E = E + Math.imul(g, bt) | 0;
      var ki = (A + m | 0) + ((l & 8191) << 13) | 0;
      A = (E + (l >>> 13) | 0) + (ki >>> 26) | 0, ki &= 67108863, m = Math.imul(M, St), l = Math.imul(M, bt), l = l + Math.imul(k, St) | 0, E = Math.imul(k, bt);
      var Ti = (A + m | 0) + ((l & 8191) << 13) | 0;
      return A = (E + (l >>> 13) | 0) + (Ti >>> 26) | 0, Ti &= 67108863, x[0] = ee, x[1] = Ne, x[2] = Be, x[3] = Me, x[4] = Ze, x[5] = Cr, x[6] = wn, x[7] = ar, x[8] = xi, x[9] = Ei, x[10] = _i, x[11] = Si, x[12] = Bi, x[13] = Ai, x[14] = Ii, x[15] = Mi, x[16] = Ri, x[17] = ki, x[18] = Ti, A !== 0 && (x[19] = A, y.length++), y;
    };
    Math.imul || (F = P);
    function L(I, f, d) {
      d.negative = f.negative ^ I.negative, d.length = I.length + f.length;
      for (var y = 0, w = 0, v = 0; v < d.length - 1; v++) {
        var x = w;
        w = 0;
        for (var A = y & 67108863, m = Math.min(v, f.length - 1), l = Math.max(0, v - I.length + 1); l <= m; l++) {
          var E = v - l, j = I.words[E] | 0, H = f.words[l] | 0, K = j * H, ft = K & 67108863;
          x = x + (K / 67108864 | 0) | 0, ft = ft + A | 0, A = ft & 67108863, x = x + (ft >>> 26) | 0, w += x >>> 26, x &= 67108863;
        }
        d.words[v] = A, y = x, x = w;
      }
      return y !== 0 ? d.words[v] = y : d.length--, d._strip();
    }
    function z(I, f, d) {
      return L(I, f, d);
    }
    i.prototype.mulTo = function(f, d) {
      var y, w = this.length + f.length;
      return this.length === 10 && f.length === 10 ? y = F(this, f, d) : w < 63 ? y = P(this, f, d) : w < 1024 ? y = L(this, f, d) : y = z(this, f, d), y;
    }, i.prototype.mul = function(f) {
      var d = new i(null);
      return d.words = new Array(this.length + f.length), this.mulTo(f, d);
    }, i.prototype.mulf = function(f) {
      var d = new i(null);
      return d.words = new Array(this.length + f.length), z(this, f, d);
    }, i.prototype.imul = function(f) {
      return this.clone().mulTo(f, this);
    }, i.prototype.imuln = function(f) {
      var d = f < 0;
      d && (f = -f), n(typeof f == "number"), n(f < 67108864);
      for (var y = 0, w = 0; w < this.length; w++) {
        var v = (this.words[w] | 0) * f, x = (v & 67108863) + (y & 67108863);
        y >>= 26, y += v / 67108864 | 0, y += x >>> 26, this.words[w] = x & 67108863;
      }
      return y !== 0 && (this.words[w] = y, this.length++), d ? this.ineg() : this;
    }, i.prototype.muln = function(f) {
      return this.clone().imuln(f);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(f) {
      var d = T(f);
      if (d.length === 0)
        return new i(1);
      for (var y = this, w = 0; w < d.length && d[w] === 0; w++, y = y.sqr())
        ;
      if (++w < d.length)
        for (var v = y.sqr(); w < d.length; w++, v = v.sqr())
          d[w] !== 0 && (y = y.mul(v));
      return y;
    }, i.prototype.iushln = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = f % 26, y = (f - d) / 26, w = 67108863 >>> 26 - d << 26 - d, v;
      if (d !== 0) {
        var x = 0;
        for (v = 0; v < this.length; v++) {
          var A = this.words[v] & w, m = (this.words[v] | 0) - A << d;
          this.words[v] = m | x, x = A >>> 26 - d;
        }
        x && (this.words[v] = x, this.length++);
      }
      if (y !== 0) {
        for (v = this.length - 1; v >= 0; v--)
          this.words[v + y] = this.words[v];
        for (v = 0; v < y; v++)
          this.words[v] = 0;
        this.length += y;
      }
      return this._strip();
    }, i.prototype.ishln = function(f) {
      return n(this.negative === 0), this.iushln(f);
    }, i.prototype.iushrn = function(f, d, y) {
      n(typeof f == "number" && f >= 0);
      var w;
      d ? w = (d - d % 26) / 26 : w = 0;
      var v = f % 26, x = Math.min((f - v) / 26, this.length), A = 67108863 ^ 67108863 >>> v << v, m = y;
      if (w -= x, w = Math.max(0, w), m) {
        for (var l = 0; l < x; l++)
          m.words[l] = this.words[l];
        m.length = x;
      }
      if (x !== 0)
        if (this.length > x)
          for (this.length -= x, l = 0; l < this.length; l++)
            this.words[l] = this.words[l + x];
        else
          this.words[0] = 0, this.length = 1;
      var E = 0;
      for (l = this.length - 1; l >= 0 && (E !== 0 || l >= w); l--) {
        var j = this.words[l] | 0;
        this.words[l] = E << 26 - v | j >>> v, E = j & A;
      }
      return m && E !== 0 && (m.words[m.length++] = E), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(f, d, y) {
      return n(this.negative === 0), this.iushrn(f, d, y);
    }, i.prototype.shln = function(f) {
      return this.clone().ishln(f);
    }, i.prototype.ushln = function(f) {
      return this.clone().iushln(f);
    }, i.prototype.shrn = function(f) {
      return this.clone().ishrn(f);
    }, i.prototype.ushrn = function(f) {
      return this.clone().iushrn(f);
    }, i.prototype.testn = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = f % 26, y = (f - d) / 26, w = 1 << d;
      if (this.length <= y)
        return !1;
      var v = this.words[y];
      return !!(v & w);
    }, i.prototype.imaskn = function(f) {
      n(typeof f == "number" && f >= 0);
      var d = f % 26, y = (f - d) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y)
        return this;
      if (d !== 0 && y++, this.length = Math.min(y, this.length), d !== 0) {
        var w = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= w;
      }
      return this._strip();
    }, i.prototype.maskn = function(f) {
      return this.clone().imaskn(f);
    }, i.prototype.iaddn = function(f) {
      return n(typeof f == "number"), n(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
    }, i.prototype._iaddn = function(f) {
      this.words[0] += f;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
        this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, i.prototype.isubn = function(f) {
      if (n(typeof f == "number"), n(f < 67108864), f < 0)
        return this.iaddn(-f);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(f), this.negative = 1, this;
      if (this.words[0] -= f, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var d = 0; d < this.length && this.words[d] < 0; d++)
          this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(f) {
      return this.clone().iaddn(f);
    }, i.prototype.subn = function(f) {
      return this.clone().isubn(f);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(f, d, y) {
      var w = f.length + y, v;
      this._expand(w);
      var x, A = 0;
      for (v = 0; v < f.length; v++) {
        x = (this.words[v + y] | 0) + A;
        var m = (f.words[v] | 0) * d;
        x -= m & 67108863, A = (x >> 26) - (m / 67108864 | 0), this.words[v + y] = x & 67108863;
      }
      for (; v < this.length - y; v++)
        x = (this.words[v + y] | 0) + A, A = x >> 26, this.words[v + y] = x & 67108863;
      if (A === 0)
        return this._strip();
      for (n(A === -1), A = 0, v = 0; v < this.length; v++)
        x = -(this.words[v] | 0) + A, A = x >> 26, this.words[v] = x & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(f, d) {
      var y = this.length - f.length, w = this.clone(), v = f, x = v.words[v.length - 1] | 0, A = this._countBits(x);
      y = 26 - A, y !== 0 && (v = v.ushln(y), w.iushln(y), x = v.words[v.length - 1] | 0);
      var m = w.length - v.length, l;
      if (d !== "mod") {
        l = new i(null), l.length = m + 1, l.words = new Array(l.length);
        for (var E = 0; E < l.length; E++)
          l.words[E] = 0;
      }
      var j = w.clone()._ishlnsubmul(v, 1, m);
      j.negative === 0 && (w = j, l && (l.words[m] = 1));
      for (var H = m - 1; H >= 0; H--) {
        var K = (w.words[v.length + H] | 0) * 67108864 + (w.words[v.length + H - 1] | 0);
        for (K = Math.min(K / x | 0, 67108863), w._ishlnsubmul(v, K, H); w.negative !== 0; )
          K--, w.negative = 0, w._ishlnsubmul(v, 1, H), w.isZero() || (w.negative ^= 1);
        l && (l.words[H] = K);
      }
      return l && l._strip(), w._strip(), d !== "div" && y !== 0 && w.iushrn(y), {
        div: l || null,
        mod: w
      };
    }, i.prototype.divmod = function(f, d, y) {
      if (n(!f.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var w, v, x;
      return this.negative !== 0 && f.negative === 0 ? (x = this.neg().divmod(f, d), d !== "mod" && (w = x.div.neg()), d !== "div" && (v = x.mod.neg(), y && v.negative !== 0 && v.iadd(f)), {
        div: w,
        mod: v
      }) : this.negative === 0 && f.negative !== 0 ? (x = this.divmod(f.neg(), d), d !== "mod" && (w = x.div.neg()), {
        div: w,
        mod: x.mod
      }) : this.negative & f.negative ? (x = this.neg().divmod(f.neg(), d), d !== "div" && (v = x.mod.neg(), y && v.negative !== 0 && v.isub(f)), {
        div: x.div,
        mod: v
      }) : f.length > this.length || this.cmp(f) < 0 ? {
        div: new i(0),
        mod: this
      } : f.length === 1 ? d === "div" ? {
        div: this.divn(f.words[0]),
        mod: null
      } : d === "mod" ? {
        div: null,
        mod: new i(this.modrn(f.words[0]))
      } : {
        div: this.divn(f.words[0]),
        mod: new i(this.modrn(f.words[0]))
      } : this._wordDiv(f, d);
    }, i.prototype.div = function(f) {
      return this.divmod(f, "div", !1).div;
    }, i.prototype.mod = function(f) {
      return this.divmod(f, "mod", !1).mod;
    }, i.prototype.umod = function(f) {
      return this.divmod(f, "mod", !0).mod;
    }, i.prototype.divRound = function(f) {
      var d = this.divmod(f);
      if (d.mod.isZero())
        return d.div;
      var y = d.div.negative !== 0 ? d.mod.isub(f) : d.mod, w = f.ushrn(1), v = f.andln(1), x = y.cmp(w);
      return x < 0 || v === 1 && x === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, i.prototype.modrn = function(f) {
      var d = f < 0;
      d && (f = -f), n(f <= 67108863);
      for (var y = (1 << 26) % f, w = 0, v = this.length - 1; v >= 0; v--)
        w = (y * w + (this.words[v] | 0)) % f;
      return d ? -w : w;
    }, i.prototype.modn = function(f) {
      return this.modrn(f);
    }, i.prototype.idivn = function(f) {
      var d = f < 0;
      d && (f = -f), n(f <= 67108863);
      for (var y = 0, w = this.length - 1; w >= 0; w--) {
        var v = (this.words[w] | 0) + y * 67108864;
        this.words[w] = v / f | 0, y = v % f;
      }
      return this._strip(), d ? this.ineg() : this;
    }, i.prototype.divn = function(f) {
      return this.clone().idivn(f);
    }, i.prototype.egcd = function(f) {
      n(f.negative === 0), n(!f.isZero());
      var d = this, y = f.clone();
      d.negative !== 0 ? d = d.umod(f) : d = d.clone();
      for (var w = new i(1), v = new i(0), x = new i(0), A = new i(1), m = 0; d.isEven() && y.isEven(); )
        d.iushrn(1), y.iushrn(1), ++m;
      for (var l = y.clone(), E = d.clone(); !d.isZero(); ) {
        for (var j = 0, H = 1; !(d.words[0] & H) && j < 26; ++j, H <<= 1)
          ;
        if (j > 0)
          for (d.iushrn(j); j-- > 0; )
            (w.isOdd() || v.isOdd()) && (w.iadd(l), v.isub(E)), w.iushrn(1), v.iushrn(1);
        for (var K = 0, ft = 1; !(y.words[0] & ft) && K < 26; ++K, ft <<= 1)
          ;
        if (K > 0)
          for (y.iushrn(K); K-- > 0; )
            (x.isOdd() || A.isOdd()) && (x.iadd(l), A.isub(E)), x.iushrn(1), A.iushrn(1);
        d.cmp(y) >= 0 ? (d.isub(y), w.isub(x), v.isub(A)) : (y.isub(d), x.isub(w), A.isub(v));
      }
      return {
        a: x,
        b: A,
        gcd: y.iushln(m)
      };
    }, i.prototype._invmp = function(f) {
      n(f.negative === 0), n(!f.isZero());
      var d = this, y = f.clone();
      d.negative !== 0 ? d = d.umod(f) : d = d.clone();
      for (var w = new i(1), v = new i(0), x = y.clone(); d.cmpn(1) > 0 && y.cmpn(1) > 0; ) {
        for (var A = 0, m = 1; !(d.words[0] & m) && A < 26; ++A, m <<= 1)
          ;
        if (A > 0)
          for (d.iushrn(A); A-- > 0; )
            w.isOdd() && w.iadd(x), w.iushrn(1);
        for (var l = 0, E = 1; !(y.words[0] & E) && l < 26; ++l, E <<= 1)
          ;
        if (l > 0)
          for (y.iushrn(l); l-- > 0; )
            v.isOdd() && v.iadd(x), v.iushrn(1);
        d.cmp(y) >= 0 ? (d.isub(y), w.isub(v)) : (y.isub(d), v.isub(w));
      }
      var j;
      return d.cmpn(1) === 0 ? j = w : j = v, j.cmpn(0) < 0 && j.iadd(f), j;
    }, i.prototype.gcd = function(f) {
      if (this.isZero())
        return f.abs();
      if (f.isZero())
        return this.abs();
      var d = this.clone(), y = f.clone();
      d.negative = 0, y.negative = 0;
      for (var w = 0; d.isEven() && y.isEven(); w++)
        d.iushrn(1), y.iushrn(1);
      do {
        for (; d.isEven(); )
          d.iushrn(1);
        for (; y.isEven(); )
          y.iushrn(1);
        var v = d.cmp(y);
        if (v < 0) {
          var x = d;
          d = y, y = x;
        } else if (v === 0 || y.cmpn(1) === 0)
          break;
        d.isub(y);
      } while (!0);
      return y.iushln(w);
    }, i.prototype.invm = function(f) {
      return this.egcd(f).a.umod(f);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(f) {
      return this.words[0] & f;
    }, i.prototype.bincn = function(f) {
      n(typeof f == "number");
      var d = f % 26, y = (f - d) / 26, w = 1 << d;
      if (this.length <= y)
        return this._expand(y + 1), this.words[y] |= w, this;
      for (var v = w, x = y; v !== 0 && x < this.length; x++) {
        var A = this.words[x] | 0;
        A += v, v = A >>> 26, A &= 67108863, this.words[x] = A;
      }
      return v !== 0 && (this.words[x] = v, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(f) {
      var d = f < 0;
      if (this.negative !== 0 && !d)
        return -1;
      if (this.negative === 0 && d)
        return 1;
      this._strip();
      var y;
      if (this.length > 1)
        y = 1;
      else {
        d && (f = -f), n(f <= 67108863, "Number is too big");
        var w = this.words[0] | 0;
        y = w === f ? 0 : w < f ? -1 : 1;
      }
      return this.negative !== 0 ? -y | 0 : y;
    }, i.prototype.cmp = function(f) {
      if (this.negative !== 0 && f.negative === 0)
        return -1;
      if (this.negative === 0 && f.negative !== 0)
        return 1;
      var d = this.ucmp(f);
      return this.negative !== 0 ? -d | 0 : d;
    }, i.prototype.ucmp = function(f) {
      if (this.length > f.length)
        return 1;
      if (this.length < f.length)
        return -1;
      for (var d = 0, y = this.length - 1; y >= 0; y--) {
        var w = this.words[y] | 0, v = f.words[y] | 0;
        if (w !== v) {
          w < v ? d = -1 : w > v && (d = 1);
          break;
        }
      }
      return d;
    }, i.prototype.gtn = function(f) {
      return this.cmpn(f) === 1;
    }, i.prototype.gt = function(f) {
      return this.cmp(f) === 1;
    }, i.prototype.gten = function(f) {
      return this.cmpn(f) >= 0;
    }, i.prototype.gte = function(f) {
      return this.cmp(f) >= 0;
    }, i.prototype.ltn = function(f) {
      return this.cmpn(f) === -1;
    }, i.prototype.lt = function(f) {
      return this.cmp(f) === -1;
    }, i.prototype.lten = function(f) {
      return this.cmpn(f) <= 0;
    }, i.prototype.lte = function(f) {
      return this.cmp(f) <= 0;
    }, i.prototype.eqn = function(f) {
      return this.cmpn(f) === 0;
    }, i.prototype.eq = function(f) {
      return this.cmp(f) === 0;
    }, i.red = function(f) {
      return new J(f);
    }, i.prototype.toRed = function(f) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(f) {
      return this.red = f, this;
    }, i.prototype.forceRed = function(f) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(f);
    }, i.prototype.redAdd = function(f) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
    }, i.prototype.redIAdd = function(f) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
    }, i.prototype.redSub = function(f) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
    }, i.prototype.redISub = function(f) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
    }, i.prototype.redShl = function(f) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
    }, i.prototype.redMul = function(f) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
    }, i.prototype.redIMul = function(f) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(f) {
      return n(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
    };
    var N = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function $(I, f) {
      this.name = I, this.p = new i(f, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    $.prototype._tmp = function() {
      var f = new i(null);
      return f.words = new Array(Math.ceil(this.n / 13)), f;
    }, $.prototype.ireduce = function(f) {
      var d = f, y;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), y = d.bitLength();
      while (y > this.n);
      var w = y < this.n ? -1 : d.ucmp(this.p);
      return w === 0 ? (d.words[0] = 0, d.length = 1) : w > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, $.prototype.split = function(f, d) {
      f.iushrn(this.n, 0, d);
    }, $.prototype.imulK = function(f) {
      return f.imul(this.k);
    };
    function q() {
      $.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(q, $), q.prototype.split = function(f, d) {
      for (var y = 4194303, w = Math.min(f.length, 9), v = 0; v < w; v++)
        d.words[v] = f.words[v];
      if (d.length = w, f.length <= 9) {
        f.words[0] = 0, f.length = 1;
        return;
      }
      var x = f.words[9];
      for (d.words[d.length++] = x & y, v = 10; v < f.length; v++) {
        var A = f.words[v] | 0;
        f.words[v - 10] = (A & y) << 4 | x >>> 22, x = A;
      }
      x >>>= 22, f.words[v - 10] = x, x === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
    }, q.prototype.imulK = function(f) {
      f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;
      for (var d = 0, y = 0; y < f.length; y++) {
        var w = f.words[y] | 0;
        d += w * 977, f.words[y] = d & 67108863, d = w * 64 + (d / 67108864 | 0);
      }
      return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
    };
    function W() {
      $.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(W, $);
    function tt() {
      $.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(tt, $);
    function ht() {
      $.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(ht, $), ht.prototype.imulK = function(f) {
      for (var d = 0, y = 0; y < f.length; y++) {
        var w = (f.words[y] | 0) * 19 + d, v = w & 67108863;
        w >>>= 26, f.words[y] = v, d = w;
      }
      return d !== 0 && (f.words[f.length++] = d), f;
    }, i._prime = function(f) {
      if (N[f])
        return N[f];
      var d;
      if (f === "k256")
        d = new q();
      else if (f === "p224")
        d = new W();
      else if (f === "p192")
        d = new tt();
      else if (f === "p25519")
        d = new ht();
      else
        throw new Error("Unknown prime " + f);
      return N[f] = d, d;
    };
    function J(I) {
      if (typeof I == "string") {
        var f = i._prime(I);
        this.m = f.p, this.prime = f;
      } else
        n(I.gtn(1), "modulus must be greater than 1"), this.m = I, this.prime = null;
    }
    J.prototype._verify1 = function(f) {
      n(f.negative === 0, "red works only with positives"), n(f.red, "red works only with red numbers");
    }, J.prototype._verify2 = function(f, d) {
      n((f.negative | d.negative) === 0, "red works only with positives"), n(
        f.red && f.red === d.red,
        "red works only with red numbers"
      );
    }, J.prototype.imod = function(f) {
      return this.prime ? this.prime.ireduce(f)._forceRed(this) : (_(f, f.umod(this.m)._forceRed(this)), f);
    }, J.prototype.neg = function(f) {
      return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
    }, J.prototype.add = function(f, d) {
      this._verify2(f, d);
      var y = f.add(d);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this);
    }, J.prototype.iadd = function(f, d) {
      this._verify2(f, d);
      var y = f.iadd(d);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y;
    }, J.prototype.sub = function(f, d) {
      this._verify2(f, d);
      var y = f.sub(d);
      return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this);
    }, J.prototype.isub = function(f, d) {
      this._verify2(f, d);
      var y = f.isub(d);
      return y.cmpn(0) < 0 && y.iadd(this.m), y;
    }, J.prototype.shl = function(f, d) {
      return this._verify1(f), this.imod(f.ushln(d));
    }, J.prototype.imul = function(f, d) {
      return this._verify2(f, d), this.imod(f.imul(d));
    }, J.prototype.mul = function(f, d) {
      return this._verify2(f, d), this.imod(f.mul(d));
    }, J.prototype.isqr = function(f) {
      return this.imul(f, f.clone());
    }, J.prototype.sqr = function(f) {
      return this.mul(f, f);
    }, J.prototype.sqrt = function(f) {
      if (f.isZero())
        return f.clone();
      var d = this.m.andln(3);
      if (n(d % 2 === 1), d === 3) {
        var y = this.m.add(new i(1)).iushrn(2);
        return this.pow(f, y);
      }
      for (var w = this.m.subn(1), v = 0; !w.isZero() && w.andln(1) === 0; )
        v++, w.iushrn(1);
      n(!w.isZero());
      var x = new i(1).toRed(this), A = x.redNeg(), m = this.m.subn(1).iushrn(1), l = this.m.bitLength();
      for (l = new i(2 * l * l).toRed(this); this.pow(l, m).cmp(A) !== 0; )
        l.redIAdd(A);
      for (var E = this.pow(l, w), j = this.pow(f, w.addn(1).iushrn(1)), H = this.pow(f, w), K = v; H.cmp(x) !== 0; ) {
        for (var ft = H, it = 0; ft.cmp(x) !== 0; it++)
          ft = ft.redSqr();
        n(it < K);
        var ut = this.pow(E, new i(1).iushln(K - it - 1));
        j = j.redMul(ut), E = ut.redSqr(), H = H.redMul(E), K = it;
      }
      return j;
    }, J.prototype.invm = function(f) {
      var d = f._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, J.prototype.pow = function(f, d) {
      if (d.isZero())
        return new i(1).toRed(this);
      if (d.cmpn(1) === 0)
        return f.clone();
      var y = 4, w = new Array(1 << y);
      w[0] = new i(1).toRed(this), w[1] = f;
      for (var v = 2; v < w.length; v++)
        w[v] = this.mul(w[v - 1], f);
      var x = w[0], A = 0, m = 0, l = d.bitLength() % 26;
      for (l === 0 && (l = 26), v = d.length - 1; v >= 0; v--) {
        for (var E = d.words[v], j = l - 1; j >= 0; j--) {
          var H = E >> j & 1;
          if (x !== w[0] && (x = this.sqr(x)), H === 0 && A === 0) {
            m = 0;
            continue;
          }
          A <<= 1, A |= H, m++, !(m !== y && (v !== 0 || j !== 0)) && (x = this.mul(x, w[A]), m = 0, A = 0);
        }
        l = 26;
      }
      return x;
    }, J.prototype.convertTo = function(f) {
      var d = f.umod(this.m);
      return d === f ? d.clone() : d;
    }, J.prototype.convertFrom = function(f) {
      var d = f.clone();
      return d.red = null, d;
    }, i.mont = function(f) {
      return new mt(f);
    };
    function mt(I) {
      J.call(this, I), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(mt, J), mt.prototype.convertTo = function(f) {
      return this.imod(f.ushln(this.shift));
    }, mt.prototype.convertFrom = function(f) {
      var d = this.imod(f.mul(this.rinv));
      return d.red = null, d;
    }, mt.prototype.imul = function(f, d) {
      if (f.isZero() || d.isZero())
        return f.words[0] = 0, f.length = 1, f;
      var y = f.imul(d), w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), v = y.isub(w).iushrn(this.shift), x = v;
      return v.cmp(this.m) >= 0 ? x = v.isub(this.m) : v.cmpn(0) < 0 && (x = v.iadd(this.m)), x._forceRed(this);
    }, mt.prototype.mul = function(f, d) {
      if (f.isZero() || d.isZero())
        return new i(0)._forceRed(this);
      var y = f.mul(d), w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), v = y.isub(w).iushrn(this.shift), x = v;
      return v.cmp(this.m) >= 0 ? x = v.isub(this.m) : v.cmpn(0) < 0 && (x = v.iadd(this.m)), x._forceRed(this);
    }, mt.prototype.invm = function(f) {
      var d = this.imod(f._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(r, He);
})(qf);
var dp = qf.exports;
const Ih = /* @__PURE__ */ gn(dp);
var Zu = { exports: {} }, Wf = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = Ls, e = Ka, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = u, r.SlowBuffer = F, r.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  r.kMaxLength = o, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const h = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(h, s), h.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(h) {
    if (h > o)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
    const s = new Uint8Array(h);
    return Object.setPrototypeOf(s, u.prototype), s;
  }
  function u(h, s, a) {
    if (typeof h == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return B(h);
    }
    return p(h, s, a);
  }
  u.poolSize = 8192;
  function p(h, s, a) {
    if (typeof h == "string")
      return C(h, s);
    if (ArrayBuffer.isView(h))
      return O(h);
    if (h == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    if (Zt(h, ArrayBuffer) || h && Zt(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Zt(h, SharedArrayBuffer) || h && Zt(h.buffer, SharedArrayBuffer)))
      return U(h, s, a);
    if (typeof h == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const g = h.valueOf && h.valueOf();
    if (g != null && g !== h)
      return u.from(g, s, a);
    const S = T(h);
    if (S)
      return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
      return u.from(h[Symbol.toPrimitive]("string"), s, a);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
    );
  }
  u.from = function(h, s, a) {
    return p(h, s, a);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function b(h) {
    if (typeof h != "number")
      throw new TypeError('"size" argument must be of type number');
    if (h < 0)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
  }
  function _(h, s, a) {
    return b(h), h <= 0 ? c(h) : s !== void 0 ? typeof a == "string" ? c(h).fill(s, a) : c(h).fill(s) : c(h);
  }
  u.alloc = function(h, s, a) {
    return _(h, s, a);
  };
  function B(h) {
    return b(h), c(h < 0 ? 0 : P(h) | 0);
  }
  u.allocUnsafe = function(h) {
    return B(h);
  }, u.allocUnsafeSlow = function(h) {
    return B(h);
  };
  function C(h, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const a = L(h, s) | 0;
    let g = c(a);
    const S = g.write(h, s);
    return S !== a && (g = g.slice(0, S)), g;
  }
  function R(h) {
    const s = h.length < 0 ? 0 : P(h.length) | 0, a = c(s);
    for (let g = 0; g < s; g += 1)
      a[g] = h[g] & 255;
    return a;
  }
  function O(h) {
    if (Zt(h, Uint8Array)) {
      const s = new Uint8Array(h);
      return U(s.buffer, s.byteOffset, s.byteLength);
    }
    return R(h);
  }
  function U(h, s, a) {
    if (s < 0 || h.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (h.byteLength < s + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return s === void 0 && a === void 0 ? g = new Uint8Array(h) : a === void 0 ? g = new Uint8Array(h, s) : g = new Uint8Array(h, s, a), Object.setPrototypeOf(g, u.prototype), g;
  }
  function T(h) {
    if (u.isBuffer(h)) {
      const s = P(h.length) | 0, a = c(s);
      return a.length === 0 || h.copy(a, 0, 0, s), a;
    }
    if (h.length !== void 0)
      return typeof h.length != "number" || Ot(h.length) ? c(0) : R(h);
    if (h.type === "Buffer" && Array.isArray(h.data))
      return R(h.data);
  }
  function P(h) {
    if (h >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return h | 0;
  }
  function F(h) {
    return +h != h && (h = 0), u.alloc(+h);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== u.prototype;
  }, u.compare = function(s, a) {
    if (Zt(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), Zt(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(s) || !u.isBuffer(a))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === a)
      return 0;
    let g = s.length, S = a.length;
    for (let M = 0, k = Math.min(g, S); M < k; ++M)
      if (s[M] !== a[M]) {
        g = s[M], S = a[M];
        break;
      }
    return g < S ? -1 : S < g ? 1 : 0;
  }, u.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(s, a) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return u.alloc(0);
    let g;
    if (a === void 0)
      for (a = 0, g = 0; g < s.length; ++g)
        a += s[g].length;
    const S = u.allocUnsafe(a);
    let M = 0;
    for (g = 0; g < s.length; ++g) {
      let k = s[g];
      if (Zt(k, Uint8Array))
        M + k.length > S.length ? (u.isBuffer(k) || (k = u.from(k)), k.copy(S, M)) : Uint8Array.prototype.set.call(
          S,
          k,
          M
        );
      else if (u.isBuffer(k))
        k.copy(S, M);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      M += k.length;
    }
    return S;
  };
  function L(h, s) {
    if (u.isBuffer(h))
      return h.length;
    if (ArrayBuffer.isView(h) || Zt(h, ArrayBuffer))
      return h.byteLength;
    if (typeof h != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
      );
    const a = h.length, g = arguments.length > 2 && arguments[2] === !0;
    if (!g && a === 0)
      return 0;
    let S = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return Lt(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return Ft(h).length;
        default:
          if (S)
            return g ? -1 : Lt(h).length;
          s = ("" + s).toLowerCase(), S = !0;
      }
  }
  u.byteLength = L;
  function z(h, s, a) {
    let g = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, s >>>= 0, a <= s))
      return "";
    for (h || (h = "utf8"); ; )
      switch (h) {
        case "hex":
          return x(this, s, a);
        case "utf8":
        case "utf-8":
          return f(this, s, a);
        case "ascii":
          return w(this, s, a);
        case "latin1":
        case "binary":
          return v(this, s, a);
        case "base64":
          return I(this, s, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return A(this, s, a);
        default:
          if (g)
            throw new TypeError("Unknown encoding: " + h);
          h = (h + "").toLowerCase(), g = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function N(h, s, a) {
    const g = h[s];
    h[s] = h[a], h[a] = g;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < s; a += 2)
      N(this, a, a + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < s; a += 4)
      N(this, a, a + 3), N(this, a + 1, a + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < s; a += 8)
      N(this, a, a + 7), N(this, a + 1, a + 6), N(this, a + 2, a + 5), N(this, a + 3, a + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? f(this, 0, s) : z.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const a = r.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (s += " ... "), "<Buffer " + s + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(s, a, g, S, M) {
    if (Zt(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (a === void 0 && (a = 0), g === void 0 && (g = s ? s.length : 0), S === void 0 && (S = 0), M === void 0 && (M = this.length), a < 0 || g > s.length || S < 0 || M > this.length)
      throw new RangeError("out of range index");
    if (S >= M && a >= g)
      return 0;
    if (S >= M)
      return -1;
    if (a >= g)
      return 1;
    if (a >>>= 0, g >>>= 0, S >>>= 0, M >>>= 0, this === s)
      return 0;
    let k = M - S, Q = g - a;
    const nt = Math.min(k, Q), et = this.slice(S, M), wt = s.slice(a, g);
    for (let X = 0; X < nt; ++X)
      if (et[X] !== wt[X]) {
        k = et[X], Q = wt[X];
        break;
      }
    return k < Q ? -1 : Q < k ? 1 : 0;
  };
  function $(h, s, a, g, S) {
    if (h.length === 0)
      return -1;
    if (typeof a == "string" ? (g = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Ot(a) && (a = S ? 0 : h.length - 1), a < 0 && (a = h.length + a), a >= h.length) {
      if (S)
        return -1;
      a = h.length - 1;
    } else if (a < 0)
      if (S)
        a = 0;
      else
        return -1;
    if (typeof s == "string" && (s = u.from(s, g)), u.isBuffer(s))
      return s.length === 0 ? -1 : q(h, s, a, g, S);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(h, s, a) : Uint8Array.prototype.lastIndexOf.call(h, s, a) : q(h, [s], a, g, S);
    throw new TypeError("val must be string, number or Buffer");
  }
  function q(h, s, a, g, S) {
    let M = 1, k = h.length, Q = s.length;
    if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
      if (h.length < 2 || s.length < 2)
        return -1;
      M = 2, k /= 2, Q /= 2, a /= 2;
    }
    function nt(wt, X) {
      return M === 1 ? wt[X] : wt.readUInt16BE(X * M);
    }
    let et;
    if (S) {
      let wt = -1;
      for (et = a; et < k; et++)
        if (nt(h, et) === nt(s, wt === -1 ? 0 : et - wt)) {
          if (wt === -1 && (wt = et), et - wt + 1 === Q)
            return wt * M;
        } else
          wt !== -1 && (et -= et - wt), wt = -1;
    } else
      for (a + Q > k && (a = k - Q), et = a; et >= 0; et--) {
        let wt = !0;
        for (let X = 0; X < Q; X++)
          if (nt(h, et + X) !== nt(s, X)) {
            wt = !1;
            break;
          }
        if (wt)
          return et;
      }
    return -1;
  }
  u.prototype.includes = function(s, a, g) {
    return this.indexOf(s, a, g) !== -1;
  }, u.prototype.indexOf = function(s, a, g) {
    return $(this, s, a, g, !0);
  }, u.prototype.lastIndexOf = function(s, a, g) {
    return $(this, s, a, g, !1);
  };
  function W(h, s, a, g) {
    a = Number(a) || 0;
    const S = h.length - a;
    g ? (g = Number(g), g > S && (g = S)) : g = S;
    const M = s.length;
    g > M / 2 && (g = M / 2);
    let k;
    for (k = 0; k < g; ++k) {
      const Q = parseInt(s.substr(k * 2, 2), 16);
      if (Ot(Q))
        return k;
      h[a + k] = Q;
    }
    return k;
  }
  function tt(h, s, a, g) {
    return kt(Lt(s, h.length - a), h, a, g);
  }
  function ht(h, s, a, g) {
    return kt(Pt(s), h, a, g);
  }
  function J(h, s, a, g) {
    return kt(Ft(s), h, a, g);
  }
  function mt(h, s, a, g) {
    return kt(nr(s, h.length - a), h, a, g);
  }
  u.prototype.write = function(s, a, g, S) {
    if (a === void 0)
      S = "utf8", g = this.length, a = 0;
    else if (g === void 0 && typeof a == "string")
      S = a, g = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(g) ? (g = g >>> 0, S === void 0 && (S = "utf8")) : (S = g, g = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const M = this.length - a;
    if ((g === void 0 || g > M) && (g = M), s.length > 0 && (g < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let k = !1;
    for (; ; )
      switch (S) {
        case "hex":
          return W(this, s, a, g);
        case "utf8":
        case "utf-8":
          return tt(this, s, a, g);
        case "ascii":
        case "latin1":
        case "binary":
          return ht(this, s, a, g);
        case "base64":
          return J(this, s, a, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return mt(this, s, a, g);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + S);
          S = ("" + S).toLowerCase(), k = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function I(h, s, a) {
    return s === 0 && a === h.length ? t.fromByteArray(h) : t.fromByteArray(h.slice(s, a));
  }
  function f(h, s, a) {
    a = Math.min(h.length, a);
    const g = [];
    let S = s;
    for (; S < a; ) {
      const M = h[S];
      let k = null, Q = M > 239 ? 4 : M > 223 ? 3 : M > 191 ? 2 : 1;
      if (S + Q <= a) {
        let nt, et, wt, X;
        switch (Q) {
          case 1:
            M < 128 && (k = M);
            break;
          case 2:
            nt = h[S + 1], (nt & 192) === 128 && (X = (M & 31) << 6 | nt & 63, X > 127 && (k = X));
            break;
          case 3:
            nt = h[S + 1], et = h[S + 2], (nt & 192) === 128 && (et & 192) === 128 && (X = (M & 15) << 12 | (nt & 63) << 6 | et & 63, X > 2047 && (X < 55296 || X > 57343) && (k = X));
            break;
          case 4:
            nt = h[S + 1], et = h[S + 2], wt = h[S + 3], (nt & 192) === 128 && (et & 192) === 128 && (wt & 192) === 128 && (X = (M & 15) << 18 | (nt & 63) << 12 | (et & 63) << 6 | wt & 63, X > 65535 && X < 1114112 && (k = X));
        }
      }
      k === null ? (k = 65533, Q = 1) : k > 65535 && (k -= 65536, g.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), g.push(k), S += Q;
    }
    return y(g);
  }
  const d = 4096;
  function y(h) {
    const s = h.length;
    if (s <= d)
      return String.fromCharCode.apply(String, h);
    let a = "", g = 0;
    for (; g < s; )
      a += String.fromCharCode.apply(
        String,
        h.slice(g, g += d)
      );
    return a;
  }
  function w(h, s, a) {
    let g = "";
    a = Math.min(h.length, a);
    for (let S = s; S < a; ++S)
      g += String.fromCharCode(h[S] & 127);
    return g;
  }
  function v(h, s, a) {
    let g = "";
    a = Math.min(h.length, a);
    for (let S = s; S < a; ++S)
      g += String.fromCharCode(h[S]);
    return g;
  }
  function x(h, s, a) {
    const g = h.length;
    (!s || s < 0) && (s = 0), (!a || a < 0 || a > g) && (a = g);
    let S = "";
    for (let M = s; M < a; ++M)
      S += Nt[h[M]];
    return S;
  }
  function A(h, s, a) {
    const g = h.slice(s, a);
    let S = "";
    for (let M = 0; M < g.length - 1; M += 2)
      S += String.fromCharCode(g[M] + g[M + 1] * 256);
    return S;
  }
  u.prototype.slice = function(s, a) {
    const g = this.length;
    s = ~~s, a = a === void 0 ? g : ~~a, s < 0 ? (s += g, s < 0 && (s = 0)) : s > g && (s = g), a < 0 ? (a += g, a < 0 && (a = 0)) : a > g && (a = g), a < s && (a = s);
    const S = this.subarray(s, a);
    return Object.setPrototypeOf(S, u.prototype), S;
  };
  function m(h, s, a) {
    if (h % 1 !== 0 || h < 0)
      throw new RangeError("offset is not uint");
    if (h + s > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s], M = 1, k = 0;
    for (; ++k < a && (M *= 256); )
      S += this[s + k] * M;
    return S;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s + --a], M = 1;
    for (; a > 0 && (M *= 256); )
      S += this[s + --a] * M;
    return S;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(s, a) {
    return s = s >>> 0, a || m(s, 1, this.length), this[s];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(s, a) {
    return s = s >>> 0, a || m(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(s, a) {
    return s = s >>> 0, a || m(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, u.prototype.readBigUInt64LE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, M = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + g * 2 ** 24;
    return BigInt(S) + (BigInt(M) << BigInt(32));
  }), u.prototype.readBigUInt64BE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = a * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], M = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g;
    return (BigInt(S) << BigInt(32)) + BigInt(M);
  }), u.prototype.readIntLE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = this[s], M = 1, k = 0;
    for (; ++k < a && (M *= 256); )
      S += this[s + k] * M;
    return M *= 128, S >= M && (S -= Math.pow(2, 8 * a)), S;
  }, u.prototype.readIntBE = function(s, a, g) {
    s = s >>> 0, a = a >>> 0, g || m(s, a, this.length);
    let S = a, M = 1, k = this[s + --S];
    for (; S > 0 && (M *= 256); )
      k += this[s + --S] * M;
    return M *= 128, k >= M && (k -= Math.pow(2, 8 * a)), k;
  }, u.prototype.readInt8 = function(s, a) {
    return s = s >>> 0, a || m(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, a) {
    s = s >>> 0, a || m(s, 2, this.length);
    const g = this[s] | this[s + 1] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt16BE = function(s, a) {
    s = s >>> 0, a || m(s, 2, this.length);
    const g = this[s + 1] | this[s] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt32LE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (g << 24);
    return (BigInt(S) << BigInt(32)) + BigInt(a + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = he(function(s) {
    s = s >>> 0, Wt(s, "offset");
    const a = this[s], g = this[s + 7];
    (a === void 0 || g === void 0) && vt(s, this.length - 8);
    const S = (a << 24) + // Overflow
    this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(S) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + g);
  }), u.prototype.readFloatLE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), e.read(this, s, !0, 23, 4);
  }, u.prototype.readFloatBE = function(s, a) {
    return s = s >>> 0, a || m(s, 4, this.length), e.read(this, s, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(s, a) {
    return s = s >>> 0, a || m(s, 8, this.length), e.read(this, s, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(s, a) {
    return s = s >>> 0, a || m(s, 8, this.length), e.read(this, s, !1, 52, 8);
  };
  function l(h, s, a, g, S, M) {
    if (!u.isBuffer(h))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > S || s < M)
      throw new RangeError('"value" argument is out of bounds');
    if (a + g > h.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !S) {
      const Q = Math.pow(2, 8 * g) - 1;
      l(this, s, a, g, Q, 0);
    }
    let M = 1, k = 0;
    for (this[a] = s & 255; ++k < g && (M *= 256); )
      this[a + k] = s / M & 255;
    return a + g;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, g = g >>> 0, !S) {
      const Q = Math.pow(2, 8 * g) - 1;
      l(this, s, a, g, Q, 0);
    }
    let M = g - 1, k = 1;
    for (this[a + M] = s & 255; --M >= 0 && (k *= 256); )
      this[a + M] = s / k & 255;
    return a + g;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 1, 255, 0), this[a] = s & 255, a + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 65535, 0), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 65535, 0), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 4294967295, 0), this[a + 3] = s >>> 24, this[a + 2] = s >>> 16, this[a + 1] = s >>> 8, this[a] = s & 255, a + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 4294967295, 0), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  };
  function E(h, s, a, g, S) {
    _t(s, g, S, h, a, 7);
    let M = Number(s & BigInt(4294967295));
    h[a++] = M, M = M >> 8, h[a++] = M, M = M >> 8, h[a++] = M, M = M >> 8, h[a++] = M;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return h[a++] = k, k = k >> 8, h[a++] = k, k = k >> 8, h[a++] = k, k = k >> 8, h[a++] = k, a;
  }
  function j(h, s, a, g, S) {
    _t(s, g, S, h, a, 7);
    let M = Number(s & BigInt(4294967295));
    h[a + 7] = M, M = M >> 8, h[a + 6] = M, M = M >> 8, h[a + 5] = M, M = M >> 8, h[a + 4] = M;
    let k = Number(s >> BigInt(32) & BigInt(4294967295));
    return h[a + 3] = k, k = k >> 8, h[a + 2] = k, k = k >> 8, h[a + 1] = k, k = k >> 8, h[a] = k, a + 8;
  }
  u.prototype.writeBigUInt64LE = he(function(s, a = 0) {
    return E(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = he(function(s, a = 0) {
    return j(this, s, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, !S) {
      const nt = Math.pow(2, 8 * g - 1);
      l(this, s, a, g, nt - 1, -nt);
    }
    let M = 0, k = 1, Q = 0;
    for (this[a] = s & 255; ++M < g && (k *= 256); )
      s < 0 && Q === 0 && this[a + M - 1] !== 0 && (Q = 1), this[a + M] = (s / k >> 0) - Q & 255;
    return a + g;
  }, u.prototype.writeIntBE = function(s, a, g, S) {
    if (s = +s, a = a >>> 0, !S) {
      const nt = Math.pow(2, 8 * g - 1);
      l(this, s, a, g, nt - 1, -nt);
    }
    let M = g - 1, k = 1, Q = 0;
    for (this[a + M] = s & 255; --M >= 0 && (k *= 256); )
      s < 0 && Q === 0 && this[a + M + 1] !== 0 && (Q = 1), this[a + M] = (s / k >> 0) - Q & 255;
    return a + g;
  }, u.prototype.writeInt8 = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[a] = s & 255, a + 1;
  }, u.prototype.writeInt16LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 32767, -32768), this[a] = s & 255, this[a + 1] = s >>> 8, a + 2;
  }, u.prototype.writeInt16BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 2, 32767, -32768), this[a] = s >>> 8, this[a + 1] = s & 255, a + 2;
  }, u.prototype.writeInt32LE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 2147483647, -2147483648), this[a] = s & 255, this[a + 1] = s >>> 8, this[a + 2] = s >>> 16, this[a + 3] = s >>> 24, a + 4;
  }, u.prototype.writeInt32BE = function(s, a, g) {
    return s = +s, a = a >>> 0, g || l(this, s, a, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[a] = s >>> 24, this[a + 1] = s >>> 16, this[a + 2] = s >>> 8, this[a + 3] = s & 255, a + 4;
  }, u.prototype.writeBigInt64LE = he(function(s, a = 0) {
    return E(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = he(function(s, a = 0) {
    return j(this, s, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function H(h, s, a, g, S, M) {
    if (a + g > h.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function K(h, s, a, g, S) {
    return s = +s, a = a >>> 0, S || H(h, s, a, 4), e.write(h, s, a, g, 23, 4), a + 4;
  }
  u.prototype.writeFloatLE = function(s, a, g) {
    return K(this, s, a, !0, g);
  }, u.prototype.writeFloatBE = function(s, a, g) {
    return K(this, s, a, !1, g);
  };
  function ft(h, s, a, g, S) {
    return s = +s, a = a >>> 0, S || H(h, s, a, 8), e.write(h, s, a, g, 52, 8), a + 8;
  }
  u.prototype.writeDoubleLE = function(s, a, g) {
    return ft(this, s, a, !0, g);
  }, u.prototype.writeDoubleBE = function(s, a, g) {
    return ft(this, s, a, !1, g);
  }, u.prototype.copy = function(s, a, g, S) {
    if (!u.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (g || (g = 0), !S && S !== 0 && (S = this.length), a >= s.length && (a = s.length), a || (a = 0), S > 0 && S < g && (S = g), S === g || s.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (g < 0 || g >= this.length)
      throw new RangeError("Index out of range");
    if (S < 0)
      throw new RangeError("sourceEnd out of bounds");
    S > this.length && (S = this.length), s.length - a < S - g && (S = s.length - a + g);
    const M = S - g;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, g, S) : Uint8Array.prototype.set.call(
      s,
      this.subarray(g, S),
      a
    ), M;
  }, u.prototype.fill = function(s, a, g, S) {
    if (typeof s == "string") {
      if (typeof a == "string" ? (S = a, a = 0, g = this.length) : typeof g == "string" && (S = g, g = this.length), S !== void 0 && typeof S != "string")
        throw new TypeError("encoding must be a string");
      if (typeof S == "string" && !u.isEncoding(S))
        throw new TypeError("Unknown encoding: " + S);
      if (s.length === 1) {
        const k = s.charCodeAt(0);
        (S === "utf8" && k < 128 || S === "latin1") && (s = k);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (a < 0 || this.length < a || this.length < g)
      throw new RangeError("Out of range index");
    if (g <= a)
      return this;
    a = a >>> 0, g = g === void 0 ? this.length : g >>> 0, s || (s = 0);
    let M;
    if (typeof s == "number")
      for (M = a; M < g; ++M)
        this[M] = s;
    else {
      const k = u.isBuffer(s) ? s : u.from(s, S), Q = k.length;
      if (Q === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (M = 0; M < g - a; ++M)
        this[M + a] = k[M % Q];
    }
    return this;
  };
  const it = {};
  function ut(h, s, a) {
    it[h] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
      }
      get code() {
        return h;
      }
      set code(S) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: S,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${h}]: ${this.message}`;
      }
    };
  }
  ut(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(h) {
      return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ut(
    "ERR_INVALID_ARG_TYPE",
    function(h, s) {
      return `The "${h}" argument must be of type number. Received type ${typeof s}`;
    },
    TypeError
  ), ut(
    "ERR_OUT_OF_RANGE",
    function(h, s, a) {
      let g = `The value of "${h}" is out of range.`, S = a;
      return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? S = Vt(String(a)) : typeof a == "bigint" && (S = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (S = Vt(S)), S += "n"), g += ` It must be ${s}. Received ${S}`, g;
    },
    RangeError
  );
  function Vt(h) {
    let s = "", a = h.length;
    const g = h[0] === "-" ? 1 : 0;
    for (; a >= g + 4; a -= 3)
      s = `_${h.slice(a - 3, a)}${s}`;
    return `${h.slice(0, a)}${s}`;
  }
  function Bt(h, s, a) {
    Wt(s, "offset"), (h[s] === void 0 || h[s + a] === void 0) && vt(s, h.length - (a + 1));
  }
  function _t(h, s, a, g, S, M) {
    if (h > a || h < s) {
      const k = typeof s == "bigint" ? "n" : "";
      let Q;
      throw M > 3 ? s === 0 || s === BigInt(0) ? Q = `>= 0${k} and < 2${k} ** ${(M + 1) * 8}${k}` : Q = `>= -(2${k} ** ${(M + 1) * 8 - 1}${k}) and < 2 ** ${(M + 1) * 8 - 1}${k}` : Q = `>= ${s}${k} and <= ${a}${k}`, new it.ERR_OUT_OF_RANGE("value", Q, h);
    }
    Bt(g, S, M);
  }
  function Wt(h, s) {
    if (typeof h != "number")
      throw new it.ERR_INVALID_ARG_TYPE(s, "number", h);
  }
  function vt(h, s, a) {
    throw Math.floor(h) !== h ? (Wt(h, a), new it.ERR_OUT_OF_RANGE(a || "offset", "an integer", h)) : s < 0 ? new it.ERR_BUFFER_OUT_OF_BOUNDS() : new it.ERR_OUT_OF_RANGE(
      a || "offset",
      `>= ${a ? 1 : 0} and <= ${s}`,
      h
    );
  }
  const Rt = /[^+/0-9A-Za-z-_]/g;
  function qe(h) {
    if (h = h.split("=")[0], h = h.trim().replace(Rt, ""), h.length < 2)
      return "";
    for (; h.length % 4 !== 0; )
      h = h + "=";
    return h;
  }
  function Lt(h, s) {
    s = s || 1 / 0;
    let a;
    const g = h.length;
    let S = null;
    const M = [];
    for (let k = 0; k < g; ++k) {
      if (a = h.charCodeAt(k), a > 55295 && a < 57344) {
        if (!S) {
          if (a > 56319) {
            (s -= 3) > -1 && M.push(239, 191, 189);
            continue;
          } else if (k + 1 === g) {
            (s -= 3) > -1 && M.push(239, 191, 189);
            continue;
          }
          S = a;
          continue;
        }
        if (a < 56320) {
          (s -= 3) > -1 && M.push(239, 191, 189), S = a;
          continue;
        }
        a = (S - 55296 << 10 | a - 56320) + 65536;
      } else
        S && (s -= 3) > -1 && M.push(239, 191, 189);
      if (S = null, a < 128) {
        if ((s -= 1) < 0)
          break;
        M.push(a);
      } else if (a < 2048) {
        if ((s -= 2) < 0)
          break;
        M.push(
          a >> 6 | 192,
          a & 63 | 128
        );
      } else if (a < 65536) {
        if ((s -= 3) < 0)
          break;
        M.push(
          a >> 12 | 224,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else if (a < 1114112) {
        if ((s -= 4) < 0)
          break;
        M.push(
          a >> 18 | 240,
          a >> 12 & 63 | 128,
          a >> 6 & 63 | 128,
          a & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return M;
  }
  function Pt(h) {
    const s = [];
    for (let a = 0; a < h.length; ++a)
      s.push(h.charCodeAt(a) & 255);
    return s;
  }
  function nr(h, s) {
    let a, g, S;
    const M = [];
    for (let k = 0; k < h.length && !((s -= 2) < 0); ++k)
      a = h.charCodeAt(k), g = a >> 8, S = a % 256, M.push(S), M.push(g);
    return M;
  }
  function Ft(h) {
    return t.toByteArray(qe(h));
  }
  function kt(h, s, a, g) {
    let S;
    for (S = 0; S < g && !(S + a >= s.length || S >= h.length); ++S)
      s[S + a] = h[S];
    return S;
  }
  function Zt(h, s) {
    return h instanceof s || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === s.name;
  }
  function Ot(h) {
    return h !== h;
  }
  const Nt = function() {
    const h = "0123456789abcdef", s = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const g = a * 16;
      for (let S = 0; S < 16; ++S)
        s[g + S] = h[a] + h[S];
    }
    return s;
  }();
  function he(h) {
    return typeof BigInt > "u" ? $t : h;
  }
  function $t() {
    throw new Error("BigInt not supported");
  }
})(Wf);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(r, t) {
  var e = Wf, n = e.Buffer;
  function o(c, u) {
    for (var p in c)
      u[p] = c[p];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? r.exports = e : (o(e, t), t.Buffer = i);
  function i(c, u, p) {
    return n(c, u, p);
  }
  i.prototype = Object.create(n.prototype), o(n, i), i.from = function(c, u, p) {
    if (typeof c == "number")
      throw new TypeError("Argument must not be a number");
    return n(c, u, p);
  }, i.alloc = function(c, u, p) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    var b = n(c);
    return u !== void 0 ? typeof p == "string" ? b.fill(u, p) : b.fill(u) : b.fill(0), b;
  }, i.allocUnsafe = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return n(c);
  }, i.allocUnsafeSlow = function(c) {
    if (typeof c != "number")
      throw new TypeError("Argument must be a number");
    return e.SlowBuffer(c);
  };
})(Zu, Zu.exports);
var iE = Zu.exports, Vs = iE.Buffer;
function oE(r) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var n = 0; n < r.length; n++) {
    var o = r.charAt(n), i = o.charCodeAt(0);
    if (t[i] !== 255)
      throw new TypeError(o + " is ambiguous");
    t[i] = n;
  }
  var c = r.length, u = r.charAt(0), p = Math.log(c) / Math.log(256), b = Math.log(256) / Math.log(c);
  function _(R) {
    if ((Array.isArray(R) || R instanceof Uint8Array) && (R = Vs.from(R)), !Vs.isBuffer(R))
      throw new TypeError("Expected Buffer");
    if (R.length === 0)
      return "";
    for (var O = 0, U = 0, T = 0, P = R.length; T !== P && R[T] === 0; )
      T++, O++;
    for (var F = (P - T) * b + 1 >>> 0, L = new Uint8Array(F); T !== P; ) {
      for (var z = R[T], N = 0, $ = F - 1; (z !== 0 || N < U) && $ !== -1; $--, N++)
        z += 256 * L[$] >>> 0, L[$] = z % c >>> 0, z = z / c >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      U = N, T++;
    }
    for (var q = F - U; q !== F && L[q] === 0; )
      q++;
    for (var W = u.repeat(O); q < F; ++q)
      W += r.charAt(L[q]);
    return W;
  }
  function B(R) {
    if (typeof R != "string")
      throw new TypeError("Expected String");
    if (R.length === 0)
      return Vs.alloc(0);
    for (var O = 0, U = 0, T = 0; R[O] === u; )
      U++, O++;
    for (var P = (R.length - O) * p + 1 >>> 0, F = new Uint8Array(P); R[O]; ) {
      var L = t[R.charCodeAt(O)];
      if (L === 255)
        return;
      for (var z = 0, N = P - 1; (L !== 0 || z < T) && N !== -1; N--, z++)
        L += c * F[N] >>> 0, F[N] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      T = z, O++;
    }
    for (var $ = P - T; $ !== P && F[$] === 0; )
      $++;
    var q = Vs.allocUnsafe(U + (P - $));
    q.fill(0, 0, U);
    for (var W = U; $ !== P; )
      q[W++] = F[$++];
    return q;
  }
  function C(R) {
    var O = B(R);
    if (O)
      return O;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: _,
    decodeUnsafe: B,
    decode: C
  };
}
var sE = oE, aE = sE, cE = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", pp = aE(cE);
const Mh = /* @__PURE__ */ gn(pp), uE = (r, t, e) => r & t ^ ~r & e, fE = (r, t, e) => r & t ^ r & e ^ t & e, lE = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), oi = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), si = new Uint32Array(64);
class gp extends cp {
  constructor() {
    super(64, 32, 8, !1), this.A = oi[0] | 0, this.B = oi[1] | 0, this.C = oi[2] | 0, this.D = oi[3] | 0, this.E = oi[4] | 0, this.F = oi[5] | 0, this.G = oi[6] | 0, this.H = oi[7] | 0;
  }
  get() {
    const { A: t, B: e, C: n, D: o, E: i, F: c, G: u, H: p } = this;
    return [t, e, n, o, i, c, u, p];
  }
  // prettier-ignore
  set(t, e, n, o, i, c, u, p) {
    this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = o | 0, this.E = i | 0, this.F = c | 0, this.G = u | 0, this.H = p | 0;
  }
  process(t, e) {
    for (let B = 0; B < 16; B++, e += 4)
      si[B] = t.getUint32(e, !1);
    for (let B = 16; B < 64; B++) {
      const C = si[B - 15], R = si[B - 2], O = vn(C, 7) ^ vn(C, 18) ^ C >>> 3, U = vn(R, 17) ^ vn(R, 19) ^ R >>> 10;
      si[B] = U + si[B - 7] + O + si[B - 16] | 0;
    }
    let { A: n, B: o, C: i, D: c, E: u, F: p, G: b, H: _ } = this;
    for (let B = 0; B < 64; B++) {
      const C = vn(u, 6) ^ vn(u, 11) ^ vn(u, 25), R = _ + C + uE(u, p, b) + lE[B] + si[B] | 0, U = (vn(n, 2) ^ vn(n, 13) ^ vn(n, 22)) + fE(n, o, i) | 0;
      _ = b, b = p, p = u, u = c + R | 0, c = i, i = o, o = n, n = R + U | 0;
    }
    n = n + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, p = p + this.F | 0, b = b + this.G | 0, _ = _ + this.H | 0, this.set(n, o, i, c, u, p, b, _);
  }
  roundClean() {
    si.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class hE extends gp {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
const Yu = ao(() => new gp());
ao(() => new hE());
var gr = {};
function Dn(r, t, e) {
  return t <= r && r <= e;
}
function Xa(r) {
  if (r === void 0)
    return {};
  if (r === Object(r))
    return r;
  throw TypeError("Could not convert argument to dictionary");
}
function dE(r) {
  for (var t = String(r), e = t.length, n = 0, o = []; n < e; ) {
    var i = t.charCodeAt(n);
    if (i < 55296 || i > 57343)
      o.push(i);
    else if (56320 <= i && i <= 57343)
      o.push(65533);
    else if (55296 <= i && i <= 56319)
      if (n === e - 1)
        o.push(65533);
      else {
        var c = r.charCodeAt(n + 1);
        if (56320 <= c && c <= 57343) {
          var u = i & 1023, p = c & 1023;
          o.push(65536 + (u << 10) + p), n += 1;
        } else
          o.push(65533);
      }
    n += 1;
  }
  return o;
}
function pE(r) {
  for (var t = "", e = 0; e < r.length; ++e) {
    var n = r[e];
    n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode(
      (n >> 10) + 55296,
      (n & 1023) + 56320
    ));
  }
  return t;
}
var _a = -1;
function jf(r) {
  this.tokens = [].slice.call(r);
}
jf.prototype = {
  /**
   * @return {boolean} True if end-of-stream has been hit.
   */
  endOfStream: function() {
    return !this.tokens.length;
  },
  /**
   * When a token is read from a stream, the first token in the
   * stream must be returned and subsequently removed, and
   * end-of-stream must be returned otherwise.
   *
   * @return {number} Get the next token from the stream, or
   * end_of_stream.
   */
  read: function() {
    return this.tokens.length ? this.tokens.shift() : _a;
  },
  /**
   * When one or more tokens are prepended to a stream, those tokens
   * must be inserted, in given order, before the first token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
   */
  prepend: function(r) {
    if (Array.isArray(r))
      for (var t = (
        /**@type {!Array.<number>}*/
        r
      ); t.length; )
        this.tokens.unshift(t.pop());
    else
      this.tokens.unshift(r);
  },
  /**
   * When one or more tokens are pushed to a stream, those tokens
   * must be inserted, in given order, after the last token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
   */
  push: function(r) {
    if (Array.isArray(r))
      for (var t = (
        /**@type {!Array.<number>}*/
        r
      ); t.length; )
        this.tokens.push(t.shift());
    else
      this.tokens.push(r);
  }
};
var qo = -1;
function Jc(r, t) {
  if (r)
    throw TypeError("Decoder error");
  return t || 65533;
}
var Sa = "utf-8";
function Ba(r, t) {
  if (!(this instanceof Ba))
    return new Ba(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : Sa, r !== Sa)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = Xa(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!t.fatal, this._ignoreBOM = !!t.ignoreBOM, Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
Ba.prototype = {
  /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */
  decode: function(t, e) {
    var n;
    typeof t == "object" && t instanceof ArrayBuffer ? n = new Uint8Array(t) : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer ? n = new Uint8Array(
      t.buffer,
      t.byteOffset,
      t.byteLength
    ) : n = new Uint8Array(0), e = Xa(e), this._streaming || (this._decoder = new gE({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = !!e.stream;
    for (var o = new jf(n), i = [], c; !o.endOfStream() && (c = this._decoder.handler(o, o.read()), c !== qo); )
      c !== null && (Array.isArray(c) ? i.push.apply(
        i,
        /**@type {!Array.<number>}*/
        c
      ) : i.push(c));
    if (!this._streaming) {
      do {
        if (c = this._decoder.handler(o, o.read()), c === qo)
          break;
        c !== null && (Array.isArray(c) ? i.push.apply(
          i,
          /**@type {!Array.<number>}*/
          c
        ) : i.push(c));
      } while (!o.endOfStream());
      this._decoder = null;
    }
    return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), pE(i);
  }
};
function Aa(r, t) {
  if (!(this instanceof Aa))
    return new Aa(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : Sa, r !== Sa)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = Xa(t), this._streaming = !1, this._encoder = null, this._options = { fatal: !!t.fatal }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
Aa.prototype = {
  /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */
  encode: function(t, e) {
    t = t ? String(t) : "", e = Xa(e), this._streaming || (this._encoder = new yE(this._options)), this._streaming = !!e.stream;
    for (var n = [], o = new jf(dE(t)), i; !o.endOfStream() && (i = this._encoder.handler(o, o.read()), i !== qo); )
      Array.isArray(i) ? n.push.apply(
        n,
        /**@type {!Array.<number>}*/
        i
      ) : n.push(i);
    if (!this._streaming) {
      for (; i = this._encoder.handler(o, o.read()), i !== qo; )
        Array.isArray(i) ? n.push.apply(
          n,
          /**@type {!Array.<number>}*/
          i
        ) : n.push(i);
      this._encoder = null;
    }
    return new Uint8Array(n);
  }
};
function gE(r) {
  var t = r.fatal, e = 0, n = 0, o = 0, i = 128, c = 191;
  this.handler = function(u, p) {
    if (p === _a && o !== 0)
      return o = 0, Jc(t);
    if (p === _a)
      return qo;
    if (o === 0) {
      if (Dn(p, 0, 127))
        return p;
      if (Dn(p, 194, 223))
        o = 1, e = p - 192;
      else if (Dn(p, 224, 239))
        p === 224 && (i = 160), p === 237 && (c = 159), o = 2, e = p - 224;
      else if (Dn(p, 240, 244))
        p === 240 && (i = 144), p === 244 && (c = 143), o = 3, e = p - 240;
      else
        return Jc(t);
      return e = e << 6 * o, null;
    }
    if (!Dn(p, i, c))
      return e = o = n = 0, i = 128, c = 191, u.prepend(p), Jc(t);
    if (i = 128, c = 191, n += 1, e += p - 128 << 6 * (o - n), n !== o)
      return null;
    var b = e;
    return e = o = n = 0, b;
  };
}
function yE(r) {
  r.fatal, this.handler = function(t, e) {
    if (e === _a)
      return qo;
    if (Dn(e, 0, 127))
      return e;
    var n, o;
    Dn(e, 128, 2047) ? (n = 1, o = 192) : Dn(e, 2048, 65535) ? (n = 2, o = 224) : Dn(e, 65536, 1114111) && (n = 3, o = 240);
    for (var i = [(e >> 6 * n) + o]; n > 0; ) {
      var c = e >> 6 * (n - 1);
      i.push(128 | c & 63), n -= 1;
    }
    return i;
  };
}
const mE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextDecoder: Ba,
  TextEncoder: Aa
}, Symbol.toStringTag, { value: "Module" })), wE = /* @__PURE__ */ eo(mE);
var bE = He && He.__createBinding || (Object.create ? function(r, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(r, n, { enumerable: !0, get: function() {
    return t[e];
  } });
} : function(r, t, e, n) {
  n === void 0 && (n = e), r[n] = t[e];
}), vE = He && He.__setModuleDefault || (Object.create ? function(r, t) {
  Object.defineProperty(r, "default", { enumerable: !0, value: t });
} : function(r, t) {
  r.default = t;
}), Cn = He && He.__decorate || function(r, t, e, n) {
  var o = arguments.length, i = o < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(r, t, e, n);
  else
    for (var u = r.length - 1; u >= 0; u--)
      (c = r[u]) && (i = (o < 3 ? c(i) : o > 3 ? c(t, e, i) : c(t, e)) || i);
  return o > 3 && i && Object.defineProperty(t, e, i), i;
}, xE = He && He.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var t = {};
  if (r != null)
    for (var e in r)
      e !== "default" && Object.hasOwnProperty.call(r, e) && bE(t, r, e);
  return vE(t, r), t;
}, yp = He && He.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(gr, "__esModule", { value: !0 });
var mp = gr.deserializeUnchecked = _p = gr.deserialize = Ep = gr.serialize = gr.BinaryReader = gr.BinaryWriter = gr.BorshError = gr.baseDecode = gr.baseEncode = void 0;
const di = yp(dp), wp = yp(pp), EE = xE(wE), _E = typeof TextDecoder != "function" ? EE.TextDecoder : TextDecoder, SE = new _E("utf-8", { fatal: !0 });
function BE(r) {
  return typeof r == "string" && (r = Buffer.from(r, "utf8")), wp.default.encode(Buffer.from(r));
}
gr.baseEncode = BE;
function AE(r) {
  return Buffer.from(wp.default.decode(r));
}
gr.baseDecode = AE;
const Qc = 1024;
class kr extends Error {
  constructor(t) {
    super(t), this.fieldPath = [], this.originalMessage = t;
  }
  addToFieldPath(t) {
    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
  }
}
gr.BorshError = kr;
class bp {
  constructor() {
    this.buf = Buffer.alloc(Qc), this.length = 0;
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(Qc)]));
  }
  writeU8(t) {
    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1;
  }
  writeU16(t) {
    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2;
  }
  writeU32(t) {
    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4;
  }
  writeU64(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new di.default(t).toArray("le", 8)));
  }
  writeU128(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new di.default(t).toArray("le", 16)));
  }
  writeU256(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new di.default(t).toArray("le", 32)));
  }
  writeU512(t) {
    this.maybeResize(), this.writeBuffer(Buffer.from(new di.default(t).toArray("le", 64)));
  }
  writeBuffer(t) {
    this.buf = Buffer.concat([
      Buffer.from(this.buf.subarray(0, this.length)),
      t,
      Buffer.alloc(Qc)
    ]), this.length += t.length;
  }
  writeString(t) {
    this.maybeResize();
    const e = Buffer.from(t, "utf8");
    this.writeU32(e.length), this.writeBuffer(e);
  }
  writeFixedArray(t) {
    this.writeBuffer(Buffer.from(t));
  }
  writeArray(t, e) {
    this.maybeResize(), this.writeU32(t.length);
    for (const n of t)
      this.maybeResize(), e(n);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
}
gr.BinaryWriter = bp;
function Ln(r, t, e) {
  const n = e.value;
  e.value = function(...o) {
    try {
      return n.apply(this, o);
    } catch (i) {
      if (i instanceof RangeError) {
        const c = i.code;
        if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(c) >= 0)
          throw new kr("Reached the end of buffer when deserializing");
      }
      throw i;
    }
  };
}
class Xr {
  constructor(t) {
    this.buf = t, this.offset = 0;
  }
  readU8() {
    const t = this.buf.readUInt8(this.offset);
    return this.offset += 1, t;
  }
  readU16() {
    const t = this.buf.readUInt16LE(this.offset);
    return this.offset += 2, t;
  }
  readU32() {
    const t = this.buf.readUInt32LE(this.offset);
    return this.offset += 4, t;
  }
  readU64() {
    const t = this.readBuffer(8);
    return new di.default(t, "le");
  }
  readU128() {
    const t = this.readBuffer(16);
    return new di.default(t, "le");
  }
  readU256() {
    const t = this.readBuffer(32);
    return new di.default(t, "le");
  }
  readU512() {
    const t = this.readBuffer(64);
    return new di.default(t, "le");
  }
  readBuffer(t) {
    if (this.offset + t > this.buf.length)
      throw new kr(`Expected buffer length ${t} isn't within bounds`);
    const e = this.buf.slice(this.offset, this.offset + t);
    return this.offset += t, e;
  }
  readString() {
    const t = this.readU32(), e = this.readBuffer(t);
    try {
      return SE.decode(e);
    } catch (n) {
      throw new kr(`Error decoding UTF-8 string: ${n}`);
    }
  }
  readFixedArray(t) {
    return new Uint8Array(this.readBuffer(t));
  }
  readArray(t) {
    const e = this.readU32(), n = Array();
    for (let o = 0; o < e; ++o)
      n.push(t());
    return n;
  }
}
Cn([
  Ln
], Xr.prototype, "readU8", null);
Cn([
  Ln
], Xr.prototype, "readU16", null);
Cn([
  Ln
], Xr.prototype, "readU32", null);
Cn([
  Ln
], Xr.prototype, "readU64", null);
Cn([
  Ln
], Xr.prototype, "readU128", null);
Cn([
  Ln
], Xr.prototype, "readU256", null);
Cn([
  Ln
], Xr.prototype, "readU512", null);
Cn([
  Ln
], Xr.prototype, "readString", null);
Cn([
  Ln
], Xr.prototype, "readFixedArray", null);
Cn([
  Ln
], Xr.prototype, "readArray", null);
gr.BinaryReader = Xr;
function vp(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Fi(r, t, e, n, o) {
  try {
    if (typeof n == "string")
      o[`write${vp(n)}`](e);
    else if (n instanceof Array)
      if (typeof n[0] == "number") {
        if (e.length !== n[0])
          throw new kr(`Expecting byte array of length ${n[0]}, but got ${e.length} bytes`);
        o.writeFixedArray(e);
      } else if (n.length === 2 && typeof n[1] == "number") {
        if (e.length !== n[1])
          throw new kr(`Expecting byte array of length ${n[1]}, but got ${e.length} bytes`);
        for (let i = 0; i < n[1]; i++)
          Fi(r, null, e[i], n[0], o);
      } else
        o.writeArray(e, (i) => {
          Fi(r, t, i, n[0], o);
        });
    else if (n.kind !== void 0)
      switch (n.kind) {
        case "option": {
          e == null ? o.writeU8(0) : (o.writeU8(1), Fi(r, t, e, n.type, o));
          break;
        }
        case "map": {
          o.writeU32(e.size), e.forEach((i, c) => {
            Fi(r, t, c, n.key, o), Fi(r, t, i, n.value, o);
          });
          break;
        }
        default:
          throw new kr(`FieldType ${n} unrecognized`);
      }
    else
      xp(r, e, o);
  } catch (i) {
    throw i instanceof kr && i.addToFieldPath(t), i;
  }
}
function xp(r, t, e) {
  if (typeof t.borshSerialize == "function") {
    t.borshSerialize(e);
    return;
  }
  const n = r.get(t.constructor);
  if (!n)
    throw new kr(`Class ${t.constructor.name} is missing in schema`);
  if (n.kind === "struct")
    n.fields.map(([o, i]) => {
      Fi(r, o, t[o], i, e);
    });
  else if (n.kind === "enum") {
    const o = t[n.field];
    for (let i = 0; i < n.values.length; ++i) {
      const [c, u] = n.values[i];
      if (c === o) {
        e.writeU8(i), Fi(r, c, t[c], u, e);
        break;
      }
    }
  } else
    throw new kr(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function IE(r, t, e = bp) {
  const n = new e();
  return xp(r, t, n), n.toArray();
}
var Ep = gr.serialize = IE;
function Ni(r, t, e, n) {
  try {
    if (typeof e == "string")
      return n[`read${vp(e)}`]();
    if (e instanceof Array) {
      if (typeof e[0] == "number")
        return n.readFixedArray(e[0]);
      if (typeof e[1] == "number") {
        const o = [];
        for (let i = 0; i < e[1]; i++)
          o.push(Ni(r, null, e[0], n));
        return o;
      } else
        return n.readArray(() => Ni(r, t, e[0], n));
    }
    if (e.kind === "option")
      return n.readU8() ? Ni(r, t, e.type, n) : void 0;
    if (e.kind === "map") {
      let o = /* @__PURE__ */ new Map();
      const i = n.readU32();
      for (let c = 0; c < i; c++) {
        const u = Ni(r, t, e.key, n), p = Ni(r, t, e.value, n);
        o.set(u, p);
      }
      return o;
    }
    return Hf(r, e, n);
  } catch (o) {
    throw o instanceof kr && o.addToFieldPath(t), o;
  }
}
function Hf(r, t, e) {
  if (typeof t.borshDeserialize == "function")
    return t.borshDeserialize(e);
  const n = r.get(t);
  if (!n)
    throw new kr(`Class ${t.name} is missing in schema`);
  if (n.kind === "struct") {
    const o = {};
    for (const [i, c] of r.get(t).fields)
      o[i] = Ni(r, i, c, e);
    return new t(o);
  }
  if (n.kind === "enum") {
    const o = e.readU8();
    if (o >= n.values.length)
      throw new kr(`Enum index: ${o} is out of range`);
    const [i, c] = n.values[o], u = Ni(r, i, c, e);
    return new t({ [i]: u });
  }
  throw new kr(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function ME(r, t, e, n = Xr) {
  const o = new n(e), i = Hf(r, t, o);
  if (o.offset < e.length)
    throw new kr(`Unexpected ${e.length - o.offset} bytes after deserialized data`);
  return i;
}
var _p = gr.deserialize = ME;
function RE(r, t, e, n = Xr) {
  const o = new n(e);
  return Hf(r, t, o);
}
mp = gr.deserializeUnchecked = RE;
var Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.s16 = Z.s8 = Z.nu64be = Z.u48be = Z.u40be = Z.u32be = Z.u24be = Z.u16be = lr = Z.nu64 = Z.u48 = Z.u40 = zt = Z.u32 = Z.u24 = nn = Z.u16 = Xe = Z.u8 = Zi = Z.offset = Z.greedy = Z.Constant = Z.UTF8 = Z.CString = Z.Blob = Z.Boolean = Z.BitField = Z.BitStructure = Z.VariantLayout = Z.Union = Z.UnionLayoutDiscriminator = Z.UnionDiscriminator = Z.Structure = Z.Sequence = Z.DoubleBE = Z.Double = Z.FloatBE = Z.Float = Z.NearInt64BE = Z.NearInt64 = Z.NearUInt64BE = Z.NearUInt64 = Z.IntBE = Z.Int = Z.UIntBE = Z.UInt = Z.OffsetLayout = Z.GreedyCount = Z.ExternalLayout = Z.bindConstructorLayout = Z.nameWithProperty = Z.Layout = Z.uint8ArrayToBuffer = Z.checkUint8Array = void 0;
Z.constant = Z.utf8 = Z.cstr = Wo = Z.blob = Z.unionLayoutDiscriminator = Z.union = Hi = Z.seq = Z.bits = qt = Z.struct = Z.f64be = Z.f64 = Z.f32be = Z.f32 = Z.ns64be = Z.s48be = Z.s40be = Z.s32be = Z.s24be = Z.s16be = Gr = Z.ns64 = Z.s48 = Z.s40 = Z.s32 = Z.s24 = void 0;
const Kf = Wf;
function Yo(r) {
  if (!(r instanceof Uint8Array))
    throw new TypeError("b must be a Uint8Array");
}
Z.checkUint8Array = Yo;
function ve(r) {
  return Yo(r), Kf.Buffer.from(r.buffer, r.byteOffset, r.length);
}
Z.uint8ArrayToBuffer = ve;
class Ie {
  constructor(t, e) {
    if (!Number.isInteger(t))
      throw new TypeError("span must be an integer");
    this.span = t, this.property = e;
  }
  /** Function to create an Object into which decoded properties will
   * be written.
   *
   * Used only for layouts that {@link Layout#decode|decode} to Object
   * instances, which means:
   * * {@link Structure}
   * * {@link Union}
   * * {@link VariantLayout}
   * * {@link BitStructure}
   *
   * If left undefined the JavaScript representation of these layouts
   * will be Object instances.
   *
   * See {@link bindConstructorLayout}.
   */
  makeDestinationObject() {
    return {};
  }
  /**
   * Calculate the span of a specific instance of a layout.
   *
   * @param {Uint8Array} b - the buffer that contains an encoded instance.
   *
   * @param {Number} [offset] - the offset at which the encoded instance
   * starts.  If absent a zero offset is inferred.
   *
   * @return {Number} - the number of bytes covered by the layout
   * instance.  If this method is not overridden in a subclass the
   * definition-time constant {@link Layout#span|span} will be
   * returned.
   *
   * @throws {RangeError} - if the length of the value cannot be
   * determined.
   */
  getSpan(t, e) {
    if (0 > this.span)
      throw new RangeError("indeterminate span");
    return this.span;
  }
  /**
   * Replicate the layout using a new property.
   *
   * This function must be used to get a structurally-equivalent layout
   * with a different name since all {@link Layout} instances are
   * immutable.
   *
   * **NOTE** This is a shallow copy.  All fields except {@link
   * Layout#property|property} are strictly equal to the origin layout.
   *
   * @param {String} property - the value for {@link
   * Layout#property|property} in the replica.
   *
   * @returns {Layout} - the copy with {@link Layout#property|property}
   * set to `property`.
   */
  replicate(t) {
    const e = Object.create(this.constructor.prototype);
    return Object.assign(e, this), e.property = t, e;
  }
  /**
   * Create an object from layout properties and an array of values.
   *
   * **NOTE** This function returns `undefined` if invoked on a layout
   * that does not return its value as an Object.  Objects are
   * returned for things that are a {@link Structure}, which includes
   * {@link VariantLayout|variant layouts} if they are structures, and
   * excludes {@link Union}s.  If you want this feature for a union
   * you must use {@link Union.getVariant|getVariant} to select the
   * desired layout.
   *
   * @param {Array} values - an array of values that correspond to the
   * default order for properties.  As with {@link Layout#decode|decode}
   * layout elements that have no property name are skipped when
   * iterating over the array values.  Only the top-level properties are
   * assigned; arguments are not assigned to properties of contained
   * layouts.  Any unused values are ignored.
   *
   * @return {(Object|undefined)}
   */
  fromArray(t) {
  }
}
Z.Layout = Ie;
function Gf(r, t) {
  return t.property ? r + "[" + t.property + "]" : r;
}
Z.nameWithProperty = Gf;
function kE(r, t) {
  if (typeof r != "function")
    throw new TypeError("Class must be constructor");
  if (Object.prototype.hasOwnProperty.call(r, "layout_"))
    throw new Error("Class is already bound to a layout");
  if (!(t && t instanceof Ie))
    throw new TypeError("layout must be a Layout");
  if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
    throw new Error("layout is already bound to a constructor");
  r.layout_ = t, t.boundConstructor_ = r, t.makeDestinationObject = () => new r(), Object.defineProperty(r.prototype, "encode", {
    value(e, n) {
      return t.encode(this, e, n);
    },
    writable: !0
  }), Object.defineProperty(r, "decode", {
    value(e, n) {
      return t.decode(e, n);
    },
    writable: !0
  });
}
Z.bindConstructorLayout = kE;
class Nr extends Ie {
  /**
   * Return `true` iff the external layout decodes to an unsigned
   * integer layout.
   *
   * In that case it can be used as the source of {@link
   * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
   * or as {@link UnionLayoutDiscriminator#layout|external union
   * discriminators}.
   *
   * @abstract
   */
  isCount() {
    throw new Error("ExternalLayout is abstract");
  }
}
Z.ExternalLayout = Nr;
class Sp extends Nr {
  constructor(t = 1, e) {
    if (!Number.isInteger(t) || 0 >= t)
      throw new TypeError("elementSpan must be a (positive) integer");
    super(-1, e), this.elementSpan = t;
  }
  /** @override */
  isCount() {
    return !0;
  }
  /** @override */
  decode(t, e = 0) {
    Yo(t);
    const n = t.length - e;
    return Math.floor(n / this.elementSpan);
  }
  /** @override */
  encode(t, e, n) {
    return 0;
  }
}
Z.GreedyCount = Sp;
class Vf extends Nr {
  constructor(t, e = 0, n) {
    if (!(t instanceof Ie))
      throw new TypeError("layout must be a Layout");
    if (!Number.isInteger(e))
      throw new TypeError("offset must be integer or undefined");
    super(t.span, n || t.property), this.layout = t, this.offset = e;
  }
  /** @override */
  isCount() {
    return this.layout instanceof cn || this.layout instanceof hn;
  }
  /** @override */
  decode(t, e = 0) {
    return this.layout.decode(t, e + this.offset);
  }
  /** @override */
  encode(t, e, n = 0) {
    return this.layout.encode(t, e, n + this.offset);
  }
}
Z.OffsetLayout = Vf;
class cn extends Ie {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readUIntLE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeUIntLE(t, n, this.span), this.span;
  }
}
Z.UInt = cn;
class hn extends Ie {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readUIntBE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeUIntBE(t, n, this.span), this.span;
  }
}
Z.UIntBE = hn;
class co extends Ie {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readIntLE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeIntLE(t, n, this.span), this.span;
  }
}
Z.Int = co;
class Xo extends Ie {
  constructor(t, e) {
    if (super(t, e), 6 < this.span)
      throw new RangeError("span must not exceed 6 bytes");
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readIntBE(e, this.span);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeIntBE(t, n, this.span), this.span;
  }
}
Z.IntBE = Xo;
const Xu = Math.pow(2, 32);
function Ja(r) {
  const t = Math.floor(r / Xu), e = r - t * Xu;
  return { hi32: t, lo32: e };
}
function Qa(r, t) {
  return r * Xu + t;
}
class Bp extends Ie {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = ve(t), o = n.readUInt32LE(e), i = n.readUInt32LE(e + 4);
    return Qa(i, o);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Ja(t), i = ve(e);
    return i.writeUInt32LE(o.lo32, n), i.writeUInt32LE(o.hi32, n + 4), 8;
  }
}
Z.NearUInt64 = Bp;
class Ap extends Ie {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = ve(t), o = n.readUInt32BE(e), i = n.readUInt32BE(e + 4);
    return Qa(o, i);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Ja(t), i = ve(e);
    return i.writeUInt32BE(o.hi32, n), i.writeUInt32BE(o.lo32, n + 4), 8;
  }
}
Z.NearUInt64BE = Ap;
class Ip extends Ie {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = ve(t), o = n.readUInt32LE(e), i = n.readInt32LE(e + 4);
    return Qa(i, o);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Ja(t), i = ve(e);
    return i.writeUInt32LE(o.lo32, n), i.writeInt32LE(o.hi32, n + 4), 8;
  }
}
Z.NearInt64 = Ip;
class Mp extends Ie {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    const n = ve(t), o = n.readInt32BE(e), i = n.readUInt32BE(e + 4);
    return Qa(o, i);
  }
  /** @override */
  encode(t, e, n = 0) {
    const o = Ja(t), i = ve(e);
    return i.writeInt32BE(o.hi32, n), i.writeUInt32BE(o.lo32, n + 4), 8;
  }
}
Z.NearInt64BE = Mp;
class Rp extends Ie {
  constructor(t) {
    super(4, t);
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readFloatLE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeFloatLE(t, n), 4;
  }
}
Z.Float = Rp;
class kp extends Ie {
  constructor(t) {
    super(4, t);
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readFloatBE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeFloatBE(t, n), 4;
  }
}
Z.FloatBE = kp;
class Tp extends Ie {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readDoubleLE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeDoubleLE(t, n), 8;
  }
}
Z.Double = Tp;
class Cp extends Ie {
  constructor(t) {
    super(8, t);
  }
  /** @override */
  decode(t, e = 0) {
    return ve(t).readDoubleBE(e);
  }
  /** @override */
  encode(t, e, n = 0) {
    return ve(e).writeDoubleBE(t, n), 8;
  }
}
Z.DoubleBE = Cp;
class Lp extends Ie {
  constructor(t, e, n) {
    if (!(t instanceof Ie))
      throw new TypeError("elementLayout must be a Layout");
    if (!(e instanceof Nr && e.isCount() || Number.isInteger(e) && 0 <= e))
      throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
    let o = -1;
    !(e instanceof Nr) && 0 < t.span && (o = e * t.span), super(o, n), this.elementLayout = t, this.count = e;
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0, o = this.count;
    if (o instanceof Nr && (o = o.decode(t, e)), 0 < this.elementLayout.span)
      n = o * this.elementLayout.span;
    else {
      let i = 0;
      for (; i < o; )
        n += this.elementLayout.getSpan(t, e + n), ++i;
    }
    return n;
  }
  /** @override */
  decode(t, e = 0) {
    const n = [];
    let o = 0, i = this.count;
    for (i instanceof Nr && (i = i.decode(t, e)); o < i; )
      n.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), o += 1;
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link Sequence}.
   *
   * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
   * the unused space in the buffer is left unchanged.  If `src` is
   * longer than {@link Sequence#count|count} the unneeded elements are
   * ignored.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */
  encode(t, e, n = 0) {
    const o = this.elementLayout, i = t.reduce((c, u) => c + o.encode(u, e, n + c), 0);
    return this.count instanceof Nr && this.count.encode(t.length, e, n), i;
  }
}
Z.Sequence = Lp;
class Up extends Ie {
  constructor(t, e, n) {
    if (!(Array.isArray(t) && t.reduce((i, c) => i && c instanceof Ie, !0)))
      throw new TypeError("fields must be array of Layout instances");
    typeof e == "boolean" && n === void 0 && (n = e, e = void 0);
    for (const i of t)
      if (0 > i.span && i.property === void 0)
        throw new Error("fields cannot contain unnamed variable-length layout");
    let o = -1;
    try {
      o = t.reduce((i, c) => i + c.getSpan(), 0);
    } catch {
    }
    super(o, e), this.fields = t, this.decodePrefixes = !!n;
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0;
    try {
      n = this.fields.reduce((o, i) => {
        const c = i.getSpan(t, e);
        return e += c, o + c;
      }, 0);
    } catch {
      throw new RangeError("indeterminate span");
    }
    return n;
  }
  /** @override */
  decode(t, e = 0) {
    Yo(t);
    const n = this.makeDestinationObject();
    for (const o of this.fields)
      if (o.property !== void 0 && (n[o.property] = o.decode(t, e)), e += o.getSpan(t, e), this.decodePrefixes && t.length === e)
        break;
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link Structure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the buffer is
   * left unmodified. */
  encode(t, e, n = 0) {
    const o = n;
    let i = 0, c = 0;
    for (const u of this.fields) {
      let p = u.span;
      if (c = 0 < p ? p : 0, u.property !== void 0) {
        const b = t[u.property];
        b !== void 0 && (c = u.encode(b, e, n), 0 > p && (p = u.getSpan(e, n)));
      }
      i = n, n += p;
    }
    return i + c - o;
  }
  /** @override */
  fromArray(t) {
    const e = this.makeDestinationObject();
    for (const n of this.fields)
      n.property !== void 0 && 0 < t.length && (e[n.property] = t.shift());
    return e;
  }
  /**
   * Get access to the layout of a given property.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Layout} - the layout associated with `property`, or
   * undefined if there is no such property.
   */
  layoutFor(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    for (const e of this.fields)
      if (e.property === t)
        return e;
  }
  /**
   * Get the offset of a structure member.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Number} - the offset in bytes to the start of `property`
   * within the structure, or undefined if `property` is not a field
   * within the structure.  If the property is a member but follows a
   * variable-length structure member a negative number will be
   * returned.
   */
  offsetOf(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    let e = 0;
    for (const n of this.fields) {
      if (n.property === t)
        return e;
      0 > n.span ? e = -1 : 0 <= e && (e += n.span);
    }
  }
}
Z.Structure = Up;
class Zf {
  constructor(t) {
    this.property = t;
  }
  /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
   *
   * The implementation of this method need not reference the buffer if
   * variant information is available through other means. */
  decode(t, e) {
    throw new Error("UnionDiscriminator is abstract");
  }
  /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
   *
   * The implementation of this method need not store the value if
   * variant information is maintained through other means. */
  encode(t, e, n) {
    throw new Error("UnionDiscriminator is abstract");
  }
}
Z.UnionDiscriminator = Zf;
class Ia extends Zf {
  constructor(t, e) {
    if (!(t instanceof Nr && t.isCount()))
      throw new TypeError("layout must be an unsigned integer ExternalLayout");
    super(e || t.property || "variant"), this.layout = t;
  }
  /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
  decode(t, e) {
    return this.layout.decode(t, e);
  }
  /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
  encode(t, e, n) {
    return this.layout.encode(t, e, n);
  }
}
Z.UnionLayoutDiscriminator = Ia;
class Yf extends Ie {
  constructor(t, e, n) {
    let o;
    if (t instanceof cn || t instanceof hn)
      o = new Ia(new Vf(t));
    else if (t instanceof Nr && t.isCount())
      o = new Ia(t);
    else if (t instanceof Zf)
      o = t;
    else
      throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
    if (e === void 0 && (e = null), !(e === null || e instanceof Ie))
      throw new TypeError("defaultLayout must be null or a Layout");
    if (e !== null) {
      if (0 > e.span)
        throw new Error("defaultLayout must have constant span");
      e.property === void 0 && (e = e.replicate("content"));
    }
    let i = -1;
    e && (i = e.span, 0 <= i && (t instanceof cn || t instanceof hn) && (i += o.layout.span)), super(i, n), this.discriminator = o, this.usesPrefixDiscriminator = t instanceof cn || t instanceof hn, this.defaultLayout = e, this.registry = {};
    let c = this.defaultGetSourceVariant.bind(this);
    this.getSourceVariant = function(u) {
      return c(u);
    }, this.configGetSourceVariant = function(u) {
      c = u.bind(this);
    };
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    const n = this.getVariant(t, e);
    if (!n)
      throw new Error("unable to determine span for unrecognized variant");
    return n.getSpan(t, e);
  }
  /**
   * Method to infer a registered Union variant compatible with `src`.
   *
   * The first satisfied rule in the following sequence defines the
   * return value:
   * * If `src` has properties matching the Union discriminator and
   *   the default layout, `undefined` is returned regardless of the
   *   value of the discriminator property (this ensures the default
   *   layout will be used);
   * * If `src` has a property matching the Union discriminator, the
   *   value of the discriminator identifies a registered variant, and
   *   either (a) the variant has no layout, or (b) `src` has the
   *   variant's property, then the variant is returned (because the
   *   source satisfies the constraints of the variant it identifies);
   * * If `src` does not have a property matching the Union
   *   discriminator, but does have a property matching a registered
   *   variant, then the variant is returned (because the source
   *   matches a variant without an explicit conflict);
   * * An error is thrown (because we either can't identify a variant,
   *   or we were explicitly told the variant but can't satisfy it).
   *
   * @param {Object} src - an object presumed to be compatible with
   * the content of the Union.
   *
   * @return {(undefined|VariantLayout)} - as described above.
   *
   * @throws {Error} - if `src` cannot be associated with a default or
   * registered variant.
   */
  defaultGetSourceVariant(t) {
    if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
      if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property))
        return;
      const e = this.registry[t[this.discriminator.property]];
      if (e && (!e.layout || e.property && Object.prototype.hasOwnProperty.call(t, e.property)))
        return e;
    } else
      for (const e in this.registry) {
        const n = this.registry[e];
        if (n.property && Object.prototype.hasOwnProperty.call(t, n.property))
          return n;
      }
    throw new Error("unable to infer src variant");
  }
  /** Implement {@link Layout#decode|decode} for {@link Union}.
   *
   * If the variant is {@link Union#addVariant|registered} the return
   * value is an instance of that variant, with no explicit
   * discriminator.  Otherwise the {@link Union#defaultLayout|default
   * layout} is used to decode the content. */
  decode(t, e = 0) {
    let n;
    const o = this.discriminator, i = o.decode(t, e), c = this.registry[i];
    if (c === void 0) {
      const u = this.defaultLayout;
      let p = 0;
      this.usesPrefixDiscriminator && (p = o.layout.span), n = this.makeDestinationObject(), n[o.property] = i, n[u.property] = u.decode(t, e + p);
    } else
      n = c.decode(t, e);
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link Union}.
   *
   * This API assumes the `src` object is consistent with the union's
   * {@link Union#defaultLayout|default layout}.  To encode variants
   * use the appropriate variant-specific {@link VariantLayout#encode}
   * method. */
  encode(t, e, n = 0) {
    const o = this.getSourceVariant(t);
    if (o === void 0) {
      const i = this.discriminator, c = this.defaultLayout;
      let u = 0;
      return this.usesPrefixDiscriminator && (u = i.layout.span), i.encode(t[i.property], e, n), u + c.encode(t[c.property], e, n + u);
    }
    return o.encode(t, e, n);
  }
  /** Register a new variant structure within a union.  The newly
   * created variant is returned.
   *
   * @param {Number} variant - initializer for {@link
   * VariantLayout#variant|variant}.
   *
   * @param {Layout} layout - initializer for {@link
   * VariantLayout#layout|layout}.
   *
   * @param {String} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {VariantLayout} */
  addVariant(t, e, n) {
    const o = new Op(this, t, e, n);
    return this.registry[t] = o, o;
  }
  /**
   * Get the layout associated with a registered variant.
   *
   * If `vb` does not produce a registered variant the function returns
   * `undefined`.
   *
   * @param {(Number|Uint8Array)} vb - either the variant number, or a
   * buffer from which the discriminator is to be read.
   *
   * @param {Number} offset - offset into `vb` for the start of the
   * union.  Used only when `vb` is an instance of {Uint8Array}.
   *
   * @return {({VariantLayout}|undefined)}
   */
  getVariant(t, e = 0) {
    let n;
    return t instanceof Uint8Array ? n = this.discriminator.decode(t, e) : n = t, this.registry[n];
  }
}
Z.Union = Yf;
class Op extends Ie {
  constructor(t, e, n, o) {
    if (!(t instanceof Yf))
      throw new TypeError("union must be a Union");
    if (!Number.isInteger(e) || 0 > e)
      throw new TypeError("variant must be a (non-negative) integer");
    if (typeof n == "string" && o === void 0 && (o = n, n = null), n) {
      if (!(n instanceof Ie))
        throw new TypeError("layout must be a Layout");
      if (t.defaultLayout !== null && 0 <= n.span && n.span > t.defaultLayout.span)
        throw new Error("variant span exceeds span of containing union");
      if (typeof o != "string")
        throw new TypeError("variant must have a String property");
    }
    let i = t.span;
    0 > t.span && (i = n ? n.span : 0, 0 <= i && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span)), super(i, o), this.union = t, this.variant = e, this.layout = n || null;
  }
  /** @override */
  getSpan(t, e = 0) {
    if (0 <= this.span)
      return this.span;
    let n = 0;
    this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
    let o = 0;
    return this.layout && (o = this.layout.getSpan(t, e + n)), n + o;
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.makeDestinationObject();
    if (this !== this.union.getVariant(t, e))
      throw new Error("variant mismatch");
    let o = 0;
    return this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(t, e + o) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n;
  }
  /** @override */
  encode(t, e, n = 0) {
    let o = 0;
    if (this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(t, this.property))
      throw new TypeError("variant lacks property " + this.property);
    this.union.discriminator.encode(this.variant, e, n);
    let i = o;
    if (this.layout && (this.layout.encode(t[this.property], e, n + o), i += this.layout.getSpan(e, n + o), 0 <= this.union.span && i > this.union.span))
      throw new Error("encoded variant overruns containing union");
    return i;
  }
  /** Delegate {@link Layout#fromArray|fromArray} to {@link
   * VariantLayout#layout|layout}. */
  fromArray(t) {
    if (this.layout)
      return this.layout.fromArray(t);
  }
}
Z.VariantLayout = Op;
function xo(r) {
  return 0 > r && (r += 4294967296), r;
}
class Xf extends Ie {
  constructor(t, e, n) {
    if (!(t instanceof cn || t instanceof hn))
      throw new TypeError("word must be a UInt or UIntBE layout");
    if (typeof e == "string" && n === void 0 && (n = e, e = !1), 4 < t.span)
      throw new RangeError("word cannot exceed 32 bits");
    super(t.span, n), this.word = t, this.msb = !!e, this.fields = [];
    let o = 0;
    this._packedSetValue = function(i) {
      return o = xo(i), this;
    }, this._packedGetValue = function() {
      return o;
    };
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.makeDestinationObject(), o = this.word.decode(t, e);
    this._packedSetValue(o);
    for (const i of this.fields)
      i.property !== void 0 && (n[i.property] = i.decode(t));
    return n;
  }
  /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the packed
   * value is left unmodified.  Unused bits are also left unmodified. */
  encode(t, e, n = 0) {
    const o = this.word.decode(e, n);
    this._packedSetValue(o);
    for (const i of this.fields)
      if (i.property !== void 0) {
        const c = t[i.property];
        c !== void 0 && i.encode(c);
      }
    return this.word.encode(this._packedGetValue(), e, n);
  }
  /** Register a new bitfield with a containing bit structure.  The
   * resulting bitfield is returned.
   *
   * @param {Number} bits - initializer for {@link BitField#bits|bits}.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {BitField} */
  addField(t, e) {
    const n = new Jf(this, t, e);
    return this.fields.push(n), n;
  }
  /** As with {@link BitStructure#addField|addField} for single-bit
   * fields with `boolean` value representation.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {Boolean} */
  // `Boolean` conflicts with the native primitive type
  // eslint-disable-next-line @typescript-eslint/ban-types
  addBoolean(t) {
    const e = new Fp(this, t);
    return this.fields.push(e), e;
  }
  /**
   * Get access to the bit field for a given property.
   *
   * @param {String} property - the bit field of interest.
   *
   * @return {BitField} - the field associated with `property`, or
   * undefined if there is no such property.
   */
  fieldFor(t) {
    if (typeof t != "string")
      throw new TypeError("property must be string");
    for (const e of this.fields)
      if (e.property === t)
        return e;
  }
}
Z.BitStructure = Xf;
class Jf {
  constructor(t, e, n) {
    if (!(t instanceof Xf))
      throw new TypeError("container must be a BitStructure");
    if (!Number.isInteger(e) || 0 >= e)
      throw new TypeError("bits must be positive integer");
    const o = 8 * t.span, i = t.fields.reduce((c, u) => c + u.bits, 0);
    if (e + i > o)
      throw new Error("bits too long for span remainder (" + (o - i) + " of " + o + " remain)");
    this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, e === 32 && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = o - i - e), this.wordMask = xo(this.valueMask << this.start), this.property = n;
  }
  /** Store a value into the corresponding subsequence of the containing
   * bit field. */
  decode(t, e) {
    const n = this.container._packedGetValue();
    return xo(n & this.wordMask) >>> this.start;
  }
  /** Store a value into the corresponding subsequence of the containing
   * bit field.
   *
   * **NOTE** This is not a specialization of {@link
   * Layout#encode|Layout.encode} and there is no return value. */
  encode(t) {
    if (typeof t != "number" || !Number.isInteger(t) || t !== xo(t & this.valueMask))
      throw new TypeError(Gf("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
    const e = this.container._packedGetValue(), n = xo(t << this.start);
    this.container._packedSetValue(xo(e & ~this.wordMask) | n);
  }
}
Z.BitField = Jf;
let Fp = class extends Jf {
  constructor(t, e) {
    super(t, 1, e);
  }
  /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
   *
   * @returns {boolean} */
  decode(t, e) {
    return !!super.decode(t, e);
  }
  /** @override */
  encode(t) {
    typeof t == "boolean" && (t = +t), super.encode(t);
  }
};
Z.Boolean = Fp;
class Np extends Ie {
  constructor(t, e) {
    if (!(t instanceof Nr && t.isCount() || Number.isInteger(t) && 0 <= t))
      throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
    let n = -1;
    t instanceof Nr || (n = t), super(n, e), this.length = t;
  }
  /** @override */
  getSpan(t, e) {
    let n = this.span;
    return 0 > n && (n = this.length.decode(t, e)), n;
  }
  /** @override */
  decode(t, e = 0) {
    let n = this.span;
    return 0 > n && (n = this.length.decode(t, e)), ve(t).slice(e, e + n);
  }
  /** Implement {@link Layout#encode|encode} for {@link Blob}.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */
  encode(t, e, n) {
    let o = this.length;
    if (this.length instanceof Nr && (o = t.length), !(t instanceof Uint8Array && o === t.length))
      throw new TypeError(Gf("Blob.encode", this) + " requires (length " + o + ") Uint8Array as src");
    if (n + o > e.length)
      throw new RangeError("encoding overruns Uint8Array");
    const i = ve(t);
    return ve(e).write(i.toString("hex"), n, o, "hex"), this.length instanceof Nr && this.length.encode(o, e, n), o;
  }
}
Z.Blob = Np;
class $p extends Ie {
  constructor(t) {
    super(-1, t);
  }
  /** @override */
  getSpan(t, e = 0) {
    Yo(t);
    let n = e;
    for (; n < t.length && t[n] !== 0; )
      n += 1;
    return 1 + n - e;
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.getSpan(t, e);
    return ve(t).slice(e, e + n - 1).toString("utf-8");
  }
  /** @override */
  encode(t, e, n = 0) {
    typeof t != "string" && (t = String(t));
    const o = Kf.Buffer.from(t, "utf8"), i = o.length;
    if (n + i > e.length)
      throw new RangeError("encoding overruns Buffer");
    const c = ve(e);
    return o.copy(c, n), c[n + i] = 0, i + 1;
  }
}
Z.CString = $p;
class Pp extends Ie {
  constructor(t, e) {
    if (typeof t == "string" && e === void 0 && (e = t, t = void 0), t === void 0)
      t = -1;
    else if (!Number.isInteger(t))
      throw new TypeError("maxSpan must be an integer");
    super(-1, e), this.maxSpan = t;
  }
  /** @override */
  getSpan(t, e = 0) {
    return Yo(t), t.length - e;
  }
  /** @override */
  decode(t, e = 0) {
    const n = this.getSpan(t, e);
    if (0 <= this.maxSpan && this.maxSpan < n)
      throw new RangeError("text length exceeds maxSpan");
    return ve(t).slice(e, e + n).toString("utf-8");
  }
  /** @override */
  encode(t, e, n = 0) {
    typeof t != "string" && (t = String(t));
    const o = Kf.Buffer.from(t, "utf8"), i = o.length;
    if (0 <= this.maxSpan && this.maxSpan < i)
      throw new RangeError("text length exceeds maxSpan");
    if (n + i > e.length)
      throw new RangeError("encoding overruns Buffer");
    return o.copy(ve(e), n), i;
  }
}
Z.UTF8 = Pp;
class Dp extends Ie {
  constructor(t, e) {
    super(0, e), this.value = t;
  }
  /** @override */
  decode(t, e) {
    return this.value;
  }
  /** @override */
  encode(t, e, n) {
    return 0;
  }
}
Z.Constant = Dp;
Z.greedy = (r, t) => new Sp(r, t);
var Zi = Z.offset = (r, t, e) => new Vf(r, t, e), Xe = Z.u8 = (r) => new cn(1, r), nn = Z.u16 = (r) => new cn(2, r);
Z.u24 = (r) => new cn(3, r);
var zt = Z.u32 = (r) => new cn(4, r);
Z.u40 = (r) => new cn(5, r);
Z.u48 = (r) => new cn(6, r);
var lr = Z.nu64 = (r) => new Bp(r);
Z.u16be = (r) => new hn(2, r);
Z.u24be = (r) => new hn(3, r);
Z.u32be = (r) => new hn(4, r);
Z.u40be = (r) => new hn(5, r);
Z.u48be = (r) => new hn(6, r);
Z.nu64be = (r) => new Ap(r);
Z.s8 = (r) => new co(1, r);
Z.s16 = (r) => new co(2, r);
Z.s24 = (r) => new co(3, r);
Z.s32 = (r) => new co(4, r);
Z.s40 = (r) => new co(5, r);
Z.s48 = (r) => new co(6, r);
var Gr = Z.ns64 = (r) => new Ip(r);
Z.s16be = (r) => new Xo(2, r);
Z.s24be = (r) => new Xo(3, r);
Z.s32be = (r) => new Xo(4, r);
Z.s40be = (r) => new Xo(5, r);
Z.s48be = (r) => new Xo(6, r);
Z.ns64be = (r) => new Mp(r);
Z.f32 = (r) => new Rp(r);
Z.f32be = (r) => new kp(r);
Z.f64 = (r) => new Tp(r);
Z.f64be = (r) => new Cp(r);
var qt = Z.struct = (r, t, e) => new Up(r, t, e);
Z.bits = (r, t, e) => new Xf(r, t, e);
var Hi = Z.seq = (r, t, e) => new Lp(r, t, e);
Z.union = (r, t, e) => new Yf(r, t, e);
Z.unionLayoutDiscriminator = (r, t) => new Ia(r, t);
var Wo = Z.blob = (r, t) => new Np(r, t);
Z.cstr = (r) => new $p(r);
Z.utf8 = (r, t) => new Pp(r, t);
Z.constant = (r, t) => new Dp(r, t);
var Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
function TE(r) {
  {
    const t = Buffer.from(r);
    t.reverse();
    const e = t.toString("hex");
    return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
  }
}
var CE = Os.toBigIntLE = TE;
function LE(r) {
  {
    const t = r.toString("hex");
    return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
  }
}
Os.toBigIntBE = LE;
function UE(r, t) {
  {
    const e = r.toString(16), n = Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
    return n.reverse(), n;
  }
}
var OE = Os.toBufferLE = UE;
function FE(r, t) {
  {
    const e = r.toString(16);
    return Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
  }
}
Os.toBufferBE = FE;
class NE extends TypeError {
  constructor(t, e) {
    let n;
    const {
      message: o,
      ...i
    } = t, {
      path: c
    } = t, u = c.length === 0 ? o : "At path: " + c.join(".") + " -- " + o;
    super(u), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
      var p;
      return (p = n) != null ? p : n = [t, ...e()];
    };
  }
}
function $E(r) {
  return mi(r) && typeof r[Symbol.iterator] == "function";
}
function mi(r) {
  return typeof r == "object" && r != null;
}
function pn(r) {
  return typeof r == "string" ? JSON.stringify(r) : "" + r;
}
function PE(r) {
  const {
    done: t,
    value: e
  } = r.next();
  return t ? void 0 : e;
}
function DE(r, t, e, n) {
  if (r === !0)
    return;
  r === !1 ? r = {} : typeof r == "string" && (r = {
    message: r
  });
  const {
    path: o,
    branch: i
  } = t, {
    type: c
  } = e, {
    refinement: u,
    message: p = "Expected a value of type `" + c + "`" + (u ? " with refinement `" + u + "`" : "") + ", but received: `" + pn(n) + "`"
  } = r;
  return {
    value: n,
    type: c,
    refinement: u,
    key: o[o.length - 1],
    path: o,
    branch: i,
    ...r,
    message: p
  };
}
function* Rh(r, t, e, n) {
  $E(r) || (r = [r]);
  for (const o of r) {
    const i = DE(o, t, e, n);
    i && (yield i);
  }
}
function* Qf(r, t, e = {}) {
  const {
    path: n = [],
    branch: o = [r],
    coerce: i = !1,
    mask: c = !1
  } = e, u = {
    path: n,
    branch: o
  };
  if (i && (r = t.coercer(r, u), c && t.type !== "type" && mi(t.schema) && mi(r) && !Array.isArray(r)))
    for (const b in r)
      t.schema[b] === void 0 && delete r[b];
  let p = !0;
  for (const b of t.validator(r, u))
    p = !1, yield [b, void 0];
  for (let [b, _, B] of t.entries(r, u)) {
    const C = Qf(_, B, {
      path: b === void 0 ? n : [...n, b],
      branch: b === void 0 ? o : [...o, _],
      coerce: i,
      mask: c
    });
    for (const R of C)
      R[0] ? (p = !1, yield [R[0], void 0]) : i && (_ = R[1], b === void 0 ? r = _ : r instanceof Map ? r.set(b, _) : r instanceof Set ? r.add(_) : mi(r) && (r[b] = _));
  }
  if (p)
    for (const b of t.refiner(r, u))
      p = !1, yield [b, void 0];
  p && (yield [void 0, r]);
}
let Un = class {
  constructor(t) {
    const {
      type: e,
      schema: n,
      validator: o,
      refiner: i,
      coercer: c = (p) => p,
      entries: u = function* () {
      }
    } = t;
    this.type = e, this.schema = n, this.entries = u, this.coercer = c, o ? this.validator = (p, b) => {
      const _ = o(p, b);
      return Rh(_, b, this, p);
    } : this.validator = () => [], i ? this.refiner = (p, b) => {
      const _ = i(p, b);
      return Rh(_, b, this, p);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t) {
    return zE(t, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t) {
    return Ss(t, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return zp(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t) {
    return qE(t, this);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(t, e = {}) {
    return Fs(t, this, e);
  }
};
function zE(r, t) {
  const e = Fs(r, t);
  if (e[0])
    throw e[0];
}
function Ss(r, t) {
  const e = Fs(r, t, {
    coerce: !0
  });
  if (e[0])
    throw e[0];
  return e[1];
}
function qE(r, t) {
  const e = Fs(r, t, {
    coerce: !0,
    mask: !0
  });
  if (e[0])
    throw e[0];
  return e[1];
}
function zp(r, t) {
  return !Fs(r, t)[0];
}
function Fs(r, t, e = {}) {
  const n = Qf(r, t, e), o = PE(n);
  return o[0] ? [new NE(o[0], function* () {
    for (const c of n)
      c[0] && (yield c[0]);
  }), void 0] : [void 0, o[1]];
}
function uo(r, t) {
  return new Un({
    type: r,
    schema: null,
    validator: t
  });
}
function WE() {
  return uo("any", () => !0);
}
function It(r) {
  return new Un({
    type: "array",
    schema: r,
    *entries(t) {
      if (r && Array.isArray(t))
        for (const [e, n] of t.entries())
          yield [e, n, r];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || "Expected an array value, but received: " + pn(t);
    }
  });
}
function Kn() {
  return uo("boolean", (r) => typeof r == "boolean");
}
function tl(r) {
  return uo("instance", (t) => t instanceof r || "Expected a `" + r.name + "` instance, but received: " + pn(t));
}
function De(r) {
  const t = pn(r), e = typeof r;
  return new Un({
    type: "literal",
    schema: e === "string" || e === "number" || e === "boolean" ? r : null,
    validator(n) {
      return n === r || "Expected the literal `" + t + "`, but received: " + pn(n);
    }
  });
}
function jE() {
  return uo("never", () => !1);
}
function At(r) {
  return new Un({
    ...r,
    validator: (t, e) => t === null || r.validator(t, e),
    refiner: (t, e) => t === null || r.refiner(t, e)
  });
}
function Y() {
  return uo("number", (r) => typeof r == "number" && !isNaN(r) || "Expected a number, but received: " + pn(r));
}
function Ht(r) {
  return new Un({
    ...r,
    validator: (t, e) => t === void 0 || r.validator(t, e),
    refiner: (t, e) => t === void 0 || r.refiner(t, e)
  });
}
function qp(r, t) {
  return new Un({
    type: "record",
    schema: null,
    *entries(e) {
      if (mi(e))
        for (const n in e) {
          const o = e[n];
          yield [n, n, r], yield [n, o, t];
        }
    },
    validator(e) {
      return mi(e) || "Expected an object, but received: " + pn(e);
    }
  });
}
function yt() {
  return uo("string", (r) => typeof r == "string" || "Expected a string, but received: " + pn(r));
}
function el(r) {
  const t = jE();
  return new Un({
    type: "tuple",
    schema: null,
    *entries(e) {
      if (Array.isArray(e)) {
        const n = Math.max(r.length, e.length);
        for (let o = 0; o < n; o++)
          yield [o, e[o], r[o] || t];
      }
    },
    validator(e) {
      return Array.isArray(e) || "Expected an array, but received: " + pn(e);
    }
  });
}
function ct(r) {
  const t = Object.keys(r);
  return new Un({
    type: "type",
    schema: r,
    *entries(e) {
      if (mi(e))
        for (const n of t)
          yield [n, e[n], r[n]];
    },
    validator(e) {
      return mi(e) || "Expected an object, but received: " + pn(e);
    }
  });
}
function Dr(r) {
  const t = r.map((e) => e.type).join(" | ");
  return new Un({
    type: "union",
    schema: null,
    validator(e, n) {
      const o = [];
      for (const i of r) {
        const [...c] = Qf(e, i, n), [u] = c;
        if (u[0])
          for (const [p] of c)
            p && o.push(p);
        else
          return [];
      }
      return ["Expected the value to satisfy a union of `" + t + "`, but received: " + pn(e), ...o];
    }
  });
}
function Ns() {
  return uo("unknown", () => !0);
}
function $s(r, t, e) {
  return new Un({
    ...r,
    coercer: (n, o) => zp(n, t) ? r.coercer(e(n, o), o) : r.coercer(n, o)
  });
}
var rl = {}, Wp = { exports: {} };
(function(r) {
  function t(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
})(Wp);
var nl = Wp.exports, tu = { exports: {} }, eu = { exports: {} }, ru = { exports: {} }, kh;
function tc() {
  return kh || (kh = 1, function(r) {
    function t(e) {
      "@babel/helpers - typeof";
      return r.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(ru)), ru.exports;
}
var nu = { exports: {} }, Th;
function HE() {
  return Th || (Th = 1, function(r) {
    var t = tc().default;
    function e(n, o) {
      if (t(n) !== "object" || n === null)
        return n;
      var i = n[Symbol.toPrimitive];
      if (i !== void 0) {
        var c = i.call(n, o || "default");
        if (t(c) !== "object")
          return c;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(n);
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(nu)), nu.exports;
}
var Ch;
function KE() {
  return Ch || (Ch = 1, function(r) {
    var t = tc().default, e = HE();
    function n(o) {
      var i = e(o, "string");
      return t(i) === "symbol" ? i : String(i);
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(eu)), eu.exports;
}
var Lh;
function il() {
  return Lh || (Lh = 1, function(r) {
    var t = KE();
    function e(o, i) {
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(o, t(u.key), u);
      }
    }
    function n(o, i, c) {
      return i && e(o.prototype, i), c && e(o, c), Object.defineProperty(o, "prototype", {
        writable: !1
      }), o;
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(tu)), tu.exports;
}
var iu = { exports: {} }, Uh;
function ol() {
  return Uh || (Uh = 1, function(r) {
    function t(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(iu)), iu.exports;
}
var ou = { exports: {} }, su = { exports: {} }, Oh;
function GE() {
  return Oh || (Oh = 1, function(r) {
    function t(e, n) {
      return r.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, c) {
        return i.__proto__ = c, i;
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e, n);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(su)), su.exports;
}
var Fh;
function sl() {
  return Fh || (Fh = 1, function(r) {
    var t = GE();
    function e(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Super expression must either be null or a function");
      n.prototype = Object.create(o && o.prototype, {
        constructor: {
          value: n,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(n, "prototype", {
        writable: !1
      }), o && t(n, o);
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(ou)), ou.exports;
}
var au = { exports: {} }, cu = { exports: {} }, Nh;
function VE() {
  return Nh || (Nh = 1, function(r) {
    function t(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(cu)), cu.exports;
}
var $h;
function al() {
  return $h || ($h = 1, function(r) {
    var t = tc().default, e = VE();
    function n(o, i) {
      if (i && (t(i) === "object" || typeof i == "function"))
        return i;
      if (i !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return e(o);
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(au)), au.exports;
}
var uu = { exports: {} }, Ph;
function cl() {
  return Ph || (Ph = 1, function(r) {
    function t(e) {
      return r.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(uu)), uu.exports;
}
var fu = {}, Dh;
function ZE() {
  return Dh || (Dh = 1, function(r) {
    var t = nl;
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = B;
    var e = t(ol()), n = t(il()), o = t(sl()), i = t(al()), c = t(cl()), u = $f;
    function p(C) {
      var R = b();
      return function() {
        var U = (0, c.default)(C), T;
        if (R) {
          var P = (0, c.default)(this).constructor;
          T = Reflect.construct(U, arguments, P);
        } else
          T = U.apply(this, arguments);
        return (0, i.default)(this, T);
      };
    }
    function b() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    var _ = /* @__PURE__ */ function(C) {
      (0, o.default)(O, C);
      var R = p(O);
      function O(U, T, P) {
        var F;
        return (0, e.default)(this, O), F = R.call(this), F.socket = new window.WebSocket(U, P), F.socket.onopen = function() {
          return F.emit("open");
        }, F.socket.onmessage = function(L) {
          return F.emit("message", L.data);
        }, F.socket.onerror = function(L) {
          return F.emit("error", L);
        }, F.socket.onclose = function(L) {
          F.emit("close", L.code, L.reason);
        }, F;
      }
      return (0, n.default)(O, [{
        key: "send",
        value: function(T, P, F) {
          var L = F || P;
          try {
            this.socket.send(T), L();
          } catch (z) {
            L(z);
          }
        }
        /**
         * Closes an underlying socket
         * @method
         * @param {Number} code - status code explaining why the connection is being closed
         * @param {String} reason - a description why the connection is closing
         * @return {Undefined}
         * @throws {Error}
         */
      }, {
        key: "close",
        value: function(T, P) {
          this.socket.close(T, P);
        }
      }, {
        key: "addEventListener",
        value: function(T, P, F) {
          this.socket.addEventListener(T, P, F);
        }
      }]), O;
    }(u.EventEmitter);
    function B(C, R) {
      return new _(C, R);
    }
  }(fu)), fu;
}
var lu = {}, hu = { exports: {} }, zh;
function YE() {
  return zh || (zh = 1, function(r) {
    var t = tc().default;
    function e() {
      r.exports = e = function() {
        return n;
      }, r.exports.__esModule = !0, r.exports.default = r.exports;
      var n = {}, o = Object.prototype, i = o.hasOwnProperty, c = Object.defineProperty || function(d, y, w) {
        d[y] = w.value;
      }, u = typeof Symbol == "function" ? Symbol : {}, p = u.iterator || "@@iterator", b = u.asyncIterator || "@@asyncIterator", _ = u.toStringTag || "@@toStringTag";
      function B(d, y, w) {
        return Object.defineProperty(d, y, {
          value: w,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), d[y];
      }
      try {
        B({}, "");
      } catch {
        B = function(w, v, x) {
          return w[v] = x;
        };
      }
      function C(d, y, w, v) {
        var x = y && y.prototype instanceof U ? y : U, A = Object.create(x.prototype), m = new mt(v || []);
        return c(A, "_invoke", {
          value: W(d, w, m)
        }), A;
      }
      function R(d, y, w) {
        try {
          return {
            type: "normal",
            arg: d.call(y, w)
          };
        } catch (v) {
          return {
            type: "throw",
            arg: v
          };
        }
      }
      n.wrap = C;
      var O = {};
      function U() {
      }
      function T() {
      }
      function P() {
      }
      var F = {};
      B(F, p, function() {
        return this;
      });
      var L = Object.getPrototypeOf, z = L && L(L(I([])));
      z && z !== o && i.call(z, p) && (F = z);
      var N = P.prototype = U.prototype = Object.create(F);
      function $(d) {
        ["next", "throw", "return"].forEach(function(y) {
          B(d, y, function(w) {
            return this._invoke(y, w);
          });
        });
      }
      function q(d, y) {
        function w(x, A, m, l) {
          var E = R(d[x], d, A);
          if (E.type !== "throw") {
            var j = E.arg, H = j.value;
            return H && t(H) == "object" && i.call(H, "__await") ? y.resolve(H.__await).then(function(K) {
              w("next", K, m, l);
            }, function(K) {
              w("throw", K, m, l);
            }) : y.resolve(H).then(function(K) {
              j.value = K, m(j);
            }, function(K) {
              return w("throw", K, m, l);
            });
          }
          l(E.arg);
        }
        var v;
        c(this, "_invoke", {
          value: function(A, m) {
            function l() {
              return new y(function(E, j) {
                w(A, m, E, j);
              });
            }
            return v = v ? v.then(l, l) : l();
          }
        });
      }
      function W(d, y, w) {
        var v = "suspendedStart";
        return function(x, A) {
          if (v === "executing")
            throw new Error("Generator is already running");
          if (v === "completed") {
            if (x === "throw")
              throw A;
            return f();
          }
          for (w.method = x, w.arg = A; ; ) {
            var m = w.delegate;
            if (m) {
              var l = tt(m, w);
              if (l) {
                if (l === O)
                  continue;
                return l;
              }
            }
            if (w.method === "next")
              w.sent = w._sent = w.arg;
            else if (w.method === "throw") {
              if (v === "suspendedStart")
                throw v = "completed", w.arg;
              w.dispatchException(w.arg);
            } else
              w.method === "return" && w.abrupt("return", w.arg);
            v = "executing";
            var E = R(d, y, w);
            if (E.type === "normal") {
              if (v = w.done ? "completed" : "suspendedYield", E.arg === O)
                continue;
              return {
                value: E.arg,
                done: w.done
              };
            }
            E.type === "throw" && (v = "completed", w.method = "throw", w.arg = E.arg);
          }
        };
      }
      function tt(d, y) {
        var w = y.method, v = d.iterator[w];
        if (v === void 0)
          return y.delegate = null, w === "throw" && d.iterator.return && (y.method = "return", y.arg = void 0, tt(d, y), y.method === "throw") || w !== "return" && (y.method = "throw", y.arg = new TypeError("The iterator does not provide a '" + w + "' method")), O;
        var x = R(v, d.iterator, y.arg);
        if (x.type === "throw")
          return y.method = "throw", y.arg = x.arg, y.delegate = null, O;
        var A = x.arg;
        return A ? A.done ? (y[d.resultName] = A.value, y.next = d.nextLoc, y.method !== "return" && (y.method = "next", y.arg = void 0), y.delegate = null, O) : A : (y.method = "throw", y.arg = new TypeError("iterator result is not an object"), y.delegate = null, O);
      }
      function ht(d) {
        var y = {
          tryLoc: d[0]
        };
        1 in d && (y.catchLoc = d[1]), 2 in d && (y.finallyLoc = d[2], y.afterLoc = d[3]), this.tryEntries.push(y);
      }
      function J(d) {
        var y = d.completion || {};
        y.type = "normal", delete y.arg, d.completion = y;
      }
      function mt(d) {
        this.tryEntries = [{
          tryLoc: "root"
        }], d.forEach(ht, this), this.reset(!0);
      }
      function I(d) {
        if (d) {
          var y = d[p];
          if (y)
            return y.call(d);
          if (typeof d.next == "function")
            return d;
          if (!isNaN(d.length)) {
            var w = -1, v = function x() {
              for (; ++w < d.length; )
                if (i.call(d, w))
                  return x.value = d[w], x.done = !1, x;
              return x.value = void 0, x.done = !0, x;
            };
            return v.next = v;
          }
        }
        return {
          next: f
        };
      }
      function f() {
        return {
          value: void 0,
          done: !0
        };
      }
      return T.prototype = P, c(N, "constructor", {
        value: P,
        configurable: !0
      }), c(P, "constructor", {
        value: T,
        configurable: !0
      }), T.displayName = B(P, _, "GeneratorFunction"), n.isGeneratorFunction = function(d) {
        var y = typeof d == "function" && d.constructor;
        return !!y && (y === T || (y.displayName || y.name) === "GeneratorFunction");
      }, n.mark = function(d) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(d, P) : (d.__proto__ = P, B(d, _, "GeneratorFunction")), d.prototype = Object.create(N), d;
      }, n.awrap = function(d) {
        return {
          __await: d
        };
      }, $(q.prototype), B(q.prototype, b, function() {
        return this;
      }), n.AsyncIterator = q, n.async = function(d, y, w, v, x) {
        x === void 0 && (x = Promise);
        var A = new q(C(d, y, w, v), x);
        return n.isGeneratorFunction(y) ? A : A.next().then(function(m) {
          return m.done ? m.value : A.next();
        });
      }, $(N), B(N, _, "Generator"), B(N, p, function() {
        return this;
      }), B(N, "toString", function() {
        return "[object Generator]";
      }), n.keys = function(d) {
        var y = Object(d), w = [];
        for (var v in y)
          w.push(v);
        return w.reverse(), function x() {
          for (; w.length; ) {
            var A = w.pop();
            if (A in y)
              return x.value = A, x.done = !1, x;
          }
          return x.done = !0, x;
        };
      }, n.values = I, mt.prototype = {
        constructor: mt,
        reset: function(y) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(J), !y)
            for (var w in this)
              w.charAt(0) === "t" && i.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = void 0);
        },
        stop: function() {
          this.done = !0;
          var y = this.tryEntries[0].completion;
          if (y.type === "throw")
            throw y.arg;
          return this.rval;
        },
        dispatchException: function(y) {
          if (this.done)
            throw y;
          var w = this;
          function v(j, H) {
            return m.type = "throw", m.arg = y, w.next = j, H && (w.method = "next", w.arg = void 0), !!H;
          }
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var A = this.tryEntries[x], m = A.completion;
            if (A.tryLoc === "root")
              return v("end");
            if (A.tryLoc <= this.prev) {
              var l = i.call(A, "catchLoc"), E = i.call(A, "finallyLoc");
              if (l && E) {
                if (this.prev < A.catchLoc)
                  return v(A.catchLoc, !0);
                if (this.prev < A.finallyLoc)
                  return v(A.finallyLoc);
              } else if (l) {
                if (this.prev < A.catchLoc)
                  return v(A.catchLoc, !0);
              } else {
                if (!E)
                  throw new Error("try statement without catch or finally");
                if (this.prev < A.finallyLoc)
                  return v(A.finallyLoc);
              }
            }
          }
        },
        abrupt: function(y, w) {
          for (var v = this.tryEntries.length - 1; v >= 0; --v) {
            var x = this.tryEntries[v];
            if (x.tryLoc <= this.prev && i.call(x, "finallyLoc") && this.prev < x.finallyLoc) {
              var A = x;
              break;
            }
          }
          A && (y === "break" || y === "continue") && A.tryLoc <= w && w <= A.finallyLoc && (A = null);
          var m = A ? A.completion : {};
          return m.type = y, m.arg = w, A ? (this.method = "next", this.next = A.finallyLoc, O) : this.complete(m);
        },
        complete: function(y, w) {
          if (y.type === "throw")
            throw y.arg;
          return y.type === "break" || y.type === "continue" ? this.next = y.arg : y.type === "return" ? (this.rval = this.arg = y.arg, this.method = "return", this.next = "end") : y.type === "normal" && w && (this.next = w), O;
        },
        finish: function(y) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var v = this.tryEntries[w];
            if (v.finallyLoc === y)
              return this.complete(v.completion, v.afterLoc), J(v), O;
          }
        },
        catch: function(y) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var v = this.tryEntries[w];
            if (v.tryLoc === y) {
              var x = v.completion;
              if (x.type === "throw") {
                var A = x.arg;
                J(v);
              }
              return A;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(y, w, v) {
          return this.delegate = {
            iterator: I(y),
            resultName: w,
            nextLoc: v
          }, this.method === "next" && (this.arg = void 0), O;
        }
      }, n;
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(hu)), hu.exports;
}
var du, qh;
function XE() {
  if (qh)
    return du;
  qh = 1;
  var r = YE()();
  du = r;
  try {
    regeneratorRuntime = r;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
  }
  return du;
}
function Wh(r, t, e, n, o, i, c) {
  try {
    var u = r[i](c), p = u.value;
  } catch (b) {
    e(b);
    return;
  }
  u.done ? t(p) : Promise.resolve(p).then(n, o);
}
function JE(r) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(n, o) {
      var i = r.apply(t, e);
      function c(p) {
        Wh(i, n, o, c, u, "next", p);
      }
      function u(p) {
        Wh(i, n, o, c, u, "throw", p);
      }
      c(void 0);
    });
  };
}
const QE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JE
}, Symbol.toStringTag, { value: "Module" })), t_ = /* @__PURE__ */ eo(QE);
function Ju(r) {
  "@babel/helpers - typeof";
  return Ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ju(r);
}
const e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ju
}, Symbol.toStringTag, { value: "Module" })), r_ = /* @__PURE__ */ eo(e_);
var jh;
function n_() {
  return jh || (jh = 1, function(r) {
    var t = nl;
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var e = t(XE()), n = t(t_), o = t(r_), i = t(ol()), c = t(il()), u = t(sl()), p = t(al()), b = t(cl()), _ = $f;
    function B(U) {
      var T = C();
      return function() {
        var F = (0, b.default)(U), L;
        if (T) {
          var z = (0, b.default)(this).constructor;
          L = Reflect.construct(F, arguments, z);
        } else
          L = F.apply(this, arguments);
        return (0, p.default)(this, L);
      };
    }
    function C() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    var R = function(U, T) {
      var P = {};
      for (var F in U)
        Object.prototype.hasOwnProperty.call(U, F) && T.indexOf(F) < 0 && (P[F] = U[F]);
      if (U != null && typeof Object.getOwnPropertySymbols == "function")
        for (var L = 0, F = Object.getOwnPropertySymbols(U); L < F.length; L++)
          T.indexOf(F[L]) < 0 && Object.prototype.propertyIsEnumerable.call(U, F[L]) && (P[F[L]] = U[F[L]]);
      return P;
    }, O = /* @__PURE__ */ function(U) {
      (0, u.default)(P, U);
      var T = B(P);
      function P(F) {
        var L, z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080", N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, $ = arguments.length > 3 ? arguments[3] : void 0;
        (0, i.default)(this, P);
        var q = N.autoconnect, W = q === void 0 ? !0 : q, tt = N.reconnect, ht = tt === void 0 ? !0 : tt, J = N.reconnect_interval, mt = J === void 0 ? 1e3 : J, I = N.max_reconnects, f = I === void 0 ? 5 : I, d = R(N, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        return L = T.call(this), L.webSocketFactory = F, L.queue = {}, L.rpc_id = 0, L.address = z, L.autoconnect = W, L.ready = !1, L.reconnect = ht, L.reconnect_interval = mt, L.max_reconnects = f, L.rest_options = d, L.current_reconnects = 0, L.generate_request_id = $ || function() {
          return ++L.rpc_id;
        }, L.autoconnect && L._connect(L.address, Object.assign({
          autoconnect: L.autoconnect,
          reconnect: L.reconnect,
          reconnect_interval: L.reconnect_interval,
          max_reconnects: L.max_reconnects
        }, L.rest_options)), L;
      }
      return (0, c.default)(P, [{
        key: "connect",
        value: function() {
          this.socket || this._connect(this.address, Object.assign({
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects
          }, this.rest_options));
        }
        /**
         * Calls a registered RPC method on server.
         * @method
         * @param {String} method - RPC method name
         * @param {Object|Array} params - optional method parameters
         * @param {Number} timeout - RPC reply timeout value
         * @param {Object} ws_opts - options passed to ws
         * @return {Promise}
         */
      }, {
        key: "call",
        value: function(L, z, N, $) {
          var q = this;
          return !$ && (0, o.default)(N) === "object" && ($ = N, N = null), new Promise(function(W, tt) {
            if (!q.ready)
              return tt(new Error("socket not ready"));
            var ht = q.generate_request_id(L, z), J = {
              jsonrpc: "2.0",
              method: L,
              params: z || null,
              id: ht
            };
            q.socket.send(JSON.stringify(J), $, function(mt) {
              if (mt)
                return tt(mt);
              q.queue[ht] = {
                promise: [W, tt]
              }, N && (q.queue[ht].timeout = setTimeout(function() {
                delete q.queue[ht], tt(new Error("reply timeout"));
              }, N));
            });
          });
        }
        /**
         * Logins with the other side of the connection.
         * @method
         * @param {Object} params - Login credentials object
         * @return {Promise}
         */
      }, {
        key: "login",
        value: function() {
          var F = (0, n.default)(/* @__PURE__ */ e.default.mark(function z(N) {
            var $;
            return e.default.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    return W.next = 2, this.call("rpc.login", N);
                  case 2:
                    if ($ = W.sent, $) {
                      W.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return W.abrupt("return", $);
                  case 6:
                  case "end":
                    return W.stop();
                }
            }, z, this);
          }));
          function L(z) {
            return F.apply(this, arguments);
          }
          return L;
        }()
        /**
         * Fetches a list of client's methods registered on server.
         * @method
         * @return {Array}
         */
      }, {
        key: "listMethods",
        value: function() {
          var F = (0, n.default)(/* @__PURE__ */ e.default.mark(function z() {
            return e.default.wrap(function($) {
              for (; ; )
                switch ($.prev = $.next) {
                  case 0:
                    return $.next = 2, this.call("__listMethods");
                  case 2:
                    return $.abrupt("return", $.sent);
                  case 3:
                  case "end":
                    return $.stop();
                }
            }, z, this);
          }));
          function L() {
            return F.apply(this, arguments);
          }
          return L;
        }()
        /**
         * Sends a JSON-RPC 2.0 notification to server.
         * @method
         * @param {String} method - RPC method name
         * @param {Object} params - optional method parameters
         * @return {Promise}
         */
      }, {
        key: "notify",
        value: function(L, z) {
          var N = this;
          return new Promise(function($, q) {
            if (!N.ready)
              return q(new Error("socket not ready"));
            var W = {
              jsonrpc: "2.0",
              method: L,
              params: z || null
            };
            N.socket.send(JSON.stringify(W), function(tt) {
              if (tt)
                return q(tt);
              $();
            });
          });
        }
        /**
         * Subscribes for a defined event.
         * @method
         * @param {String|Array} event - event name
         * @return {Undefined}
         * @throws {Error}
         */
      }, {
        key: "subscribe",
        value: function() {
          var F = (0, n.default)(/* @__PURE__ */ e.default.mark(function z(N) {
            var $;
            return e.default.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    return typeof N == "string" && (N = [N]), W.next = 3, this.call("rpc.on", N);
                  case 3:
                    if ($ = W.sent, !(typeof N == "string" && $[N] !== "ok")) {
                      W.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + N + "' with: " + $[N]);
                  case 6:
                    return W.abrupt("return", $);
                  case 7:
                  case "end":
                    return W.stop();
                }
            }, z, this);
          }));
          function L(z) {
            return F.apply(this, arguments);
          }
          return L;
        }()
        /**
         * Unsubscribes from a defined event.
         * @method
         * @param {String|Array} event - event name
         * @return {Undefined}
         * @throws {Error}
         */
      }, {
        key: "unsubscribe",
        value: function() {
          var F = (0, n.default)(/* @__PURE__ */ e.default.mark(function z(N) {
            var $;
            return e.default.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    return typeof N == "string" && (N = [N]), W.next = 3, this.call("rpc.off", N);
                  case 3:
                    if ($ = W.sent, !(typeof N == "string" && $[N] !== "ok")) {
                      W.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + $);
                  case 6:
                    return W.abrupt("return", $);
                  case 7:
                  case "end":
                    return W.stop();
                }
            }, z, this);
          }));
          function L(z) {
            return F.apply(this, arguments);
          }
          return L;
        }()
        /**
         * Closes a WebSocket connection gracefully.
         * @method
         * @param {Number} code - socket close code
         * @param {String} data - optional data to be sent before closing
         * @return {Undefined}
         */
      }, {
        key: "close",
        value: function(L, z) {
          this.socket.close(L || 1e3, z);
        }
        /**
         * Connection/Message handler.
         * @method
         * @private
         * @param {String} address - WebSocket API address
         * @param {Object} options - ws options object
         * @return {Undefined}
         */
      }, {
        key: "_connect",
        value: function(L, z) {
          var N = this;
          this.socket = this.webSocketFactory(L, z), this.socket.addEventListener("open", function() {
            N.ready = !0, N.emit("open"), N.current_reconnects = 0;
          }), this.socket.addEventListener("message", function($) {
            var q = $.data;
            q instanceof ArrayBuffer && (q = Buffer.from(q).toString());
            try {
              q = JSON.parse(q);
            } catch {
              return;
            }
            if (q.notification && N.listeners(q.notification).length) {
              if (!Object.keys(q.params).length)
                return N.emit(q.notification);
              var W = [q.notification];
              if (q.params.constructor === Object)
                W.push(q.params);
              else
                for (var tt = 0; tt < q.params.length; tt++)
                  W.push(q.params[tt]);
              return Promise.resolve().then(function() {
                N.emit.apply(N, W);
              });
            }
            if (!N.queue[q.id])
              return q.method && q.params ? Promise.resolve().then(function() {
                N.emit(q.method, q.params);
              }) : void 0;
            "error" in q == "result" in q && N.queue[q.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), N.queue[q.id].timeout && clearTimeout(N.queue[q.id].timeout), q.error ? N.queue[q.id].promise[1](q.error) : N.queue[q.id].promise[0](q.result), delete N.queue[q.id];
          }), this.socket.addEventListener("error", function($) {
            return N.emit("error", $);
          }), this.socket.addEventListener("close", function($) {
            var q = $.code, W = $.reason;
            N.ready && setTimeout(function() {
              return N.emit("close", q, W);
            }, 0), N.ready = !1, N.socket = void 0, q !== 1e3 && (N.current_reconnects++, N.reconnect && (N.max_reconnects > N.current_reconnects || N.max_reconnects === 0) && setTimeout(function() {
              return N._connect(L, z);
            }, N.reconnect_interval));
          });
        }
      }]), P;
    }(_.EventEmitter);
    r.default = O;
  }(lu)), lu;
}
var fo = nl;
Object.defineProperty(rl, "__esModule", {
  value: !0
});
rl.Client = void 0;
var i_ = fo(il()), o_ = fo(ol()), s_ = fo(sl()), a_ = fo(al()), Hh = fo(cl()), c_ = fo(ZE()), u_ = fo(n_());
function f_(r) {
  var t = l_();
  return function() {
    var n = (0, Hh.default)(r), o;
    if (t) {
      var i = (0, Hh.default)(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return (0, a_.default)(this, o);
  };
}
function l_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var h_ = /* @__PURE__ */ function(r) {
  (0, s_.default)(e, r);
  var t = f_(e);
  function e() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ws://localhost:8080", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.autoconnect, c = i === void 0 ? !0 : i, u = o.reconnect, p = u === void 0 ? !0 : u, b = o.reconnect_interval, _ = b === void 0 ? 1e3 : b, B = o.max_reconnects, C = B === void 0 ? 5 : B, R = arguments.length > 2 ? arguments[2] : void 0;
    return (0, o_.default)(this, e), t.call(this, c_.default, n, {
      autoconnect: c,
      reconnect: p,
      reconnect_interval: _,
      max_reconnects: C
    }, R);
  }
  return (0, i_.default)(e);
}(u_.default);
rl.Client = h_;
var Zs, d_ = new Uint8Array(16);
function jp() {
  if (!Zs && (Zs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Zs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Zs(d_);
}
const p_ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function ec(r) {
  return typeof r == "string" && p_.test(r);
}
var ur = [];
for (var pu = 0; pu < 256; ++pu)
  ur.push((pu + 256).toString(16).substr(1));
function rc(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = (ur[r[t + 0]] + ur[r[t + 1]] + ur[r[t + 2]] + ur[r[t + 3]] + "-" + ur[r[t + 4]] + ur[r[t + 5]] + "-" + ur[r[t + 6]] + ur[r[t + 7]] + "-" + ur[r[t + 8]] + ur[r[t + 9]] + "-" + ur[r[t + 10]] + ur[r[t + 11]] + ur[r[t + 12]] + ur[r[t + 13]] + ur[r[t + 14]] + ur[r[t + 15]]).toLowerCase();
  if (!ec(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
}
var Kh, gu, yu = 0, mu = 0;
function g_(r, t, e) {
  var n = t && e || 0, o = t || new Array(16);
  r = r || {};
  var i = r.node || Kh, c = r.clockseq !== void 0 ? r.clockseq : gu;
  if (i == null || c == null) {
    var u = r.random || (r.rng || jp)();
    i == null && (i = Kh = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), c == null && (c = gu = (u[6] << 8 | u[7]) & 16383);
  }
  var p = r.msecs !== void 0 ? r.msecs : Date.now(), b = r.nsecs !== void 0 ? r.nsecs : mu + 1, _ = p - yu + (b - mu) / 1e4;
  if (_ < 0 && r.clockseq === void 0 && (c = c + 1 & 16383), (_ < 0 || p > yu) && r.nsecs === void 0 && (b = 0), b >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  yu = p, mu = b, gu = c, p += 122192928e5;
  var B = ((p & 268435455) * 1e4 + b) % 4294967296;
  o[n++] = B >>> 24 & 255, o[n++] = B >>> 16 & 255, o[n++] = B >>> 8 & 255, o[n++] = B & 255;
  var C = p / 4294967296 * 1e4 & 268435455;
  o[n++] = C >>> 8 & 255, o[n++] = C & 255, o[n++] = C >>> 24 & 15 | 16, o[n++] = C >>> 16 & 255, o[n++] = c >>> 8 | 128, o[n++] = c & 255;
  for (var R = 0; R < 6; ++R)
    o[n + R] = i[R];
  return t || rc(o);
}
function Hp(r) {
  if (!ec(r))
    throw TypeError("Invalid UUID");
  var t, e = new Uint8Array(16);
  return e[0] = (t = parseInt(r.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(r.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(r.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(r.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
}
function y_(r) {
  r = unescape(encodeURIComponent(r));
  for (var t = [], e = 0; e < r.length; ++e)
    t.push(r.charCodeAt(e));
  return t;
}
var m_ = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", w_ = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function Kp(r, t, e) {
  function n(o, i, c, u) {
    if (typeof o == "string" && (o = y_(o)), typeof i == "string" && (i = Hp(i)), i.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var p = new Uint8Array(16 + o.length);
    if (p.set(i), p.set(o, i.length), p = e(p), p[6] = p[6] & 15 | t, p[8] = p[8] & 63 | 128, c) {
      u = u || 0;
      for (var b = 0; b < 16; ++b)
        c[u + b] = p[b];
      return c;
    }
    return rc(p);
  }
  try {
    n.name = r;
  } catch {
  }
  return n.DNS = m_, n.URL = w_, n;
}
function b_(r) {
  if (typeof r == "string") {
    var t = unescape(encodeURIComponent(r));
    r = new Uint8Array(t.length);
    for (var e = 0; e < t.length; ++e)
      r[e] = t.charCodeAt(e);
  }
  return v_(x_(E_(r), r.length * 8));
}
function v_(r) {
  for (var t = [], e = r.length * 32, n = "0123456789abcdef", o = 0; o < e; o += 8) {
    var i = r[o >> 5] >>> o % 32 & 255, c = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    t.push(c);
  }
  return t;
}
function Gp(r) {
  return (r + 64 >>> 9 << 4) + 14 + 1;
}
function x_(r, t) {
  r[t >> 5] |= 128 << t % 32, r[Gp(t) - 1] = t;
  for (var e = 1732584193, n = -271733879, o = -1732584194, i = 271733878, c = 0; c < r.length; c += 16) {
    var u = e, p = n, b = o, _ = i;
    e = _r(e, n, o, i, r[c], 7, -680876936), i = _r(i, e, n, o, r[c + 1], 12, -389564586), o = _r(o, i, e, n, r[c + 2], 17, 606105819), n = _r(n, o, i, e, r[c + 3], 22, -1044525330), e = _r(e, n, o, i, r[c + 4], 7, -176418897), i = _r(i, e, n, o, r[c + 5], 12, 1200080426), o = _r(o, i, e, n, r[c + 6], 17, -1473231341), n = _r(n, o, i, e, r[c + 7], 22, -45705983), e = _r(e, n, o, i, r[c + 8], 7, 1770035416), i = _r(i, e, n, o, r[c + 9], 12, -1958414417), o = _r(o, i, e, n, r[c + 10], 17, -42063), n = _r(n, o, i, e, r[c + 11], 22, -1990404162), e = _r(e, n, o, i, r[c + 12], 7, 1804603682), i = _r(i, e, n, o, r[c + 13], 12, -40341101), o = _r(o, i, e, n, r[c + 14], 17, -1502002290), n = _r(n, o, i, e, r[c + 15], 22, 1236535329), e = Sr(e, n, o, i, r[c + 1], 5, -165796510), i = Sr(i, e, n, o, r[c + 6], 9, -1069501632), o = Sr(o, i, e, n, r[c + 11], 14, 643717713), n = Sr(n, o, i, e, r[c], 20, -373897302), e = Sr(e, n, o, i, r[c + 5], 5, -701558691), i = Sr(i, e, n, o, r[c + 10], 9, 38016083), o = Sr(o, i, e, n, r[c + 15], 14, -660478335), n = Sr(n, o, i, e, r[c + 4], 20, -405537848), e = Sr(e, n, o, i, r[c + 9], 5, 568446438), i = Sr(i, e, n, o, r[c + 14], 9, -1019803690), o = Sr(o, i, e, n, r[c + 3], 14, -187363961), n = Sr(n, o, i, e, r[c + 8], 20, 1163531501), e = Sr(e, n, o, i, r[c + 13], 5, -1444681467), i = Sr(i, e, n, o, r[c + 2], 9, -51403784), o = Sr(o, i, e, n, r[c + 7], 14, 1735328473), n = Sr(n, o, i, e, r[c + 12], 20, -1926607734), e = Br(e, n, o, i, r[c + 5], 4, -378558), i = Br(i, e, n, o, r[c + 8], 11, -2022574463), o = Br(o, i, e, n, r[c + 11], 16, 1839030562), n = Br(n, o, i, e, r[c + 14], 23, -35309556), e = Br(e, n, o, i, r[c + 1], 4, -1530992060), i = Br(i, e, n, o, r[c + 4], 11, 1272893353), o = Br(o, i, e, n, r[c + 7], 16, -155497632), n = Br(n, o, i, e, r[c + 10], 23, -1094730640), e = Br(e, n, o, i, r[c + 13], 4, 681279174), i = Br(i, e, n, o, r[c], 11, -358537222), o = Br(o, i, e, n, r[c + 3], 16, -722521979), n = Br(n, o, i, e, r[c + 6], 23, 76029189), e = Br(e, n, o, i, r[c + 9], 4, -640364487), i = Br(i, e, n, o, r[c + 12], 11, -421815835), o = Br(o, i, e, n, r[c + 15], 16, 530742520), n = Br(n, o, i, e, r[c + 2], 23, -995338651), e = Ar(e, n, o, i, r[c], 6, -198630844), i = Ar(i, e, n, o, r[c + 7], 10, 1126891415), o = Ar(o, i, e, n, r[c + 14], 15, -1416354905), n = Ar(n, o, i, e, r[c + 5], 21, -57434055), e = Ar(e, n, o, i, r[c + 12], 6, 1700485571), i = Ar(i, e, n, o, r[c + 3], 10, -1894986606), o = Ar(o, i, e, n, r[c + 10], 15, -1051523), n = Ar(n, o, i, e, r[c + 1], 21, -2054922799), e = Ar(e, n, o, i, r[c + 8], 6, 1873313359), i = Ar(i, e, n, o, r[c + 15], 10, -30611744), o = Ar(o, i, e, n, r[c + 6], 15, -1560198380), n = Ar(n, o, i, e, r[c + 13], 21, 1309151649), e = Ar(e, n, o, i, r[c + 4], 6, -145523070), i = Ar(i, e, n, o, r[c + 11], 10, -1120210379), o = Ar(o, i, e, n, r[c + 2], 15, 718787259), n = Ar(n, o, i, e, r[c + 9], 21, -343485551), e = pi(e, u), n = pi(n, p), o = pi(o, b), i = pi(i, _);
  }
  return [e, n, o, i];
}
function E_(r) {
  if (r.length === 0)
    return [];
  for (var t = r.length * 8, e = new Uint32Array(Gp(t)), n = 0; n < t; n += 8)
    e[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return e;
}
function pi(r, t) {
  var e = (r & 65535) + (t & 65535), n = (r >> 16) + (t >> 16) + (e >> 16);
  return n << 16 | e & 65535;
}
function __(r, t) {
  return r << t | r >>> 32 - t;
}
function nc(r, t, e, n, o, i) {
  return pi(__(pi(pi(t, r), pi(n, i)), o), e);
}
function _r(r, t, e, n, o, i, c) {
  return nc(t & e | ~t & n, r, t, o, i, c);
}
function Sr(r, t, e, n, o, i, c) {
  return nc(t & n | e & ~n, r, t, o, i, c);
}
function Br(r, t, e, n, o, i, c) {
  return nc(t ^ e ^ n, r, t, o, i, c);
}
function Ar(r, t, e, n, o, i, c) {
  return nc(e ^ (t | ~n), r, t, o, i, c);
}
var S_ = Kp("v3", 48, b_);
const B_ = S_;
function A_(r, t, e) {
  r = r || {};
  var n = r.random || (r.rng || jp)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    e = e || 0;
    for (var o = 0; o < 16; ++o)
      t[e + o] = n[o];
    return t;
  }
  return rc(n);
}
function I_(r, t, e, n) {
  switch (r) {
    case 0:
      return t & e ^ ~t & n;
    case 1:
      return t ^ e ^ n;
    case 2:
      return t & e ^ t & n ^ e & n;
    case 3:
      return t ^ e ^ n;
  }
}
function wu(r, t) {
  return r << t | r >>> 32 - t;
}
function M_(r) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    var n = unescape(encodeURIComponent(r));
    r = [];
    for (var o = 0; o < n.length; ++o)
      r.push(n.charCodeAt(o));
  } else
    Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  for (var i = r.length / 4 + 2, c = Math.ceil(i / 16), u = new Array(c), p = 0; p < c; ++p) {
    for (var b = new Uint32Array(16), _ = 0; _ < 16; ++_)
      b[_] = r[p * 64 + _ * 4] << 24 | r[p * 64 + _ * 4 + 1] << 16 | r[p * 64 + _ * 4 + 2] << 8 | r[p * 64 + _ * 4 + 3];
    u[p] = b;
  }
  u[c - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), u[c - 1][14] = Math.floor(u[c - 1][14]), u[c - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (var B = 0; B < c; ++B) {
    for (var C = new Uint32Array(80), R = 0; R < 16; ++R)
      C[R] = u[B][R];
    for (var O = 16; O < 80; ++O)
      C[O] = wu(C[O - 3] ^ C[O - 8] ^ C[O - 14] ^ C[O - 16], 1);
    for (var U = e[0], T = e[1], P = e[2], F = e[3], L = e[4], z = 0; z < 80; ++z) {
      var N = Math.floor(z / 20), $ = wu(U, 5) + I_(N, T, P, F) + L + t[N] + C[z] >>> 0;
      L = F, F = P, P = wu(T, 30) >>> 0, T = U, U = $;
    }
    e[0] = e[0] + U >>> 0, e[1] = e[1] + T >>> 0, e[2] = e[2] + P >>> 0, e[3] = e[3] + F >>> 0, e[4] = e[4] + L >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var R_ = Kp("v5", 80, M_);
const k_ = R_, T_ = "00000000-0000-0000-0000-000000000000";
function C_(r) {
  if (!ec(r))
    throw TypeError("Invalid UUID");
  return parseInt(r.substr(14, 1), 16);
}
const L_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: T_,
  parse: Hp,
  stringify: rc,
  v1: g_,
  v3: B_,
  v4: A_,
  v5: k_,
  validate: ec,
  version: C_
}, Symbol.toStringTag, { value: "Module" })), Vp = /* @__PURE__ */ eo(L_), U_ = Vp.v4, O_ = function(r, t, e, n) {
  if (typeof r != "string")
    throw new TypeError(r + " must be a string");
  n = n || {};
  const o = typeof n.version == "number" ? n.version : 2;
  if (o !== 1 && o !== 2)
    throw new TypeError(o + " must be 1 or 2");
  const i = {
    method: r
  };
  if (o === 2 && (i.jsonrpc = "2.0"), t) {
    if (typeof t != "object" && !Array.isArray(t))
      throw new TypeError(t + " must be an object, array or omitted");
    i.params = t;
  }
  if (typeof e > "u") {
    const c = typeof n.generator == "function" ? n.generator : function() {
      return U_();
    };
    i.id = c(i, n);
  } else
    o === 2 && e === null ? n.notificationIdNull && (i.id = null) : i.id = e;
  return i;
};
var F_ = O_;
const N_ = Vp.v4, $_ = F_, Ma = function(r, t) {
  if (!(this instanceof Ma))
    return new Ma(r, t);
  t || (t = {}), this.options = {
    reviver: typeof t.reviver < "u" ? t.reviver : null,
    replacer: typeof t.replacer < "u" ? t.replacer : null,
    generator: typeof t.generator < "u" ? t.generator : function() {
      return N_();
    },
    version: typeof t.version < "u" ? t.version : 2,
    notificationIdNull: typeof t.notificationIdNull == "boolean" ? t.notificationIdNull : !1
  }, this.callServer = r;
};
Ma.prototype.request = function(r, t, e, n) {
  const o = this;
  let i = null;
  const c = Array.isArray(r) && typeof t == "function";
  if (this.options.version === 1 && c)
    throw new TypeError("JSON-RPC 1.0 does not support batching");
  if (c || !c && r && typeof r == "object" && typeof t == "function")
    n = t, i = r;
  else {
    typeof e == "function" && (n = e, e = void 0);
    const b = typeof n == "function";
    try {
      i = $_(r, t, e, {
        generator: this.options.generator,
        version: this.options.version,
        notificationIdNull: this.options.notificationIdNull
      });
    } catch (_) {
      if (b)
        return n(_);
      throw _;
    }
    if (!b)
      return i;
  }
  let p;
  try {
    p = JSON.stringify(i, this.options.replacer);
  } catch (b) {
    return n(b);
  }
  return this.callServer(p, function(b, _) {
    o._parseResponse(b, _, n);
  }), i;
};
Ma.prototype._parseResponse = function(r, t, e) {
  if (r) {
    e(r);
    return;
  }
  if (!t)
    return e();
  let n;
  try {
    n = JSON.parse(t, this.options.reviver);
  } catch (o) {
    return e(o);
  }
  if (e.length === 3)
    if (Array.isArray(n)) {
      const o = function(c) {
        return typeof c.error < "u";
      }, i = function(c) {
        return !o(c);
      };
      return e(null, n.filter(o), n.filter(i));
    } else
      return e(null, n.error, n.result);
  e(null, n);
};
const [Zp, Yp, Xp] = [[], [], []], P_ = BigInt(0), is = BigInt(1), D_ = BigInt(2), z_ = BigInt(7), q_ = BigInt(256), W_ = BigInt(113);
for (let r = 0, t = is, e = 1, n = 0; r < 24; r++) {
  [e, n] = [n, (2 * e + 3 * n) % 5], Zp.push(2 * (5 * n + e)), Yp.push((r + 1) * (r + 2) / 2 % 64);
  let o = P_;
  for (let i = 0; i < 7; i++)
    t = (t << is ^ (t >> z_) * W_) % q_, t & D_ && (o ^= is << (is << BigInt(i)) - is);
  Xp.push(o);
}
const [j_, H_] = Jt.split(Xp, !0), Gh = (r, t, e) => e > 32 ? Jt.rotlBH(r, t, e) : Jt.rotlSH(r, t, e), Vh = (r, t, e) => e > 32 ? Jt.rotlBL(r, t, e) : Jt.rotlSL(r, t, e);
function K_(r, t = 24) {
  const e = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let c = 0; c < 10; c++)
      e[c] = r[c] ^ r[c + 10] ^ r[c + 20] ^ r[c + 30] ^ r[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const u = (c + 8) % 10, p = (c + 2) % 10, b = e[p], _ = e[p + 1], B = Gh(b, _, 1) ^ e[u], C = Vh(b, _, 1) ^ e[u + 1];
      for (let R = 0; R < 50; R += 10)
        r[c + R] ^= B, r[c + R + 1] ^= C;
    }
    let o = r[2], i = r[3];
    for (let c = 0; c < 24; c++) {
      const u = Yp[c], p = Gh(o, i, u), b = Vh(o, i, u), _ = Zp[c];
      o = r[_], i = r[_ + 1], r[_] = p, r[_ + 1] = b;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let u = 0; u < 10; u++)
        e[u] = r[c + u];
      for (let u = 0; u < 10; u++)
        r[c + u] ^= ~e[(u + 2) % 10] & e[(u + 4) % 10];
    }
    r[0] ^= j_[n], r[1] ^= H_[n];
  }
  e.fill(0);
}
class ic extends Pf {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, e, n, o = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Vr.number(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = d2(this.state);
  }
  keccak() {
    K_(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    Vr.exists(this);
    const { blockLen: e, state: n } = this;
    t = Us(t);
    const o = t.length;
    for (let i = 0; i < o; ) {
      const c = Math.min(e - this.pos, o - i);
      for (let u = 0; u < c; u++)
        n[this.pos++] ^= t[i++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: e, pos: n, blockLen: o } = this;
    t[n] ^= e, e & 128 && n === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    Vr.exists(this, !1), Vr.bytes(t), this.finish();
    const e = this.state, { blockLen: n } = this;
    for (let o = 0, i = t.length; o < i; ) {
      this.posOut >= n && this.keccak();
      const c = Math.min(n - this.posOut, i - o);
      t.set(e.subarray(this.posOut, this.posOut + c), o), this.posOut += c, o += c;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Vr.number(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (Vr.output(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: e, suffix: n, outputLen: o, rounds: i, enableXOF: c } = this;
    return t || (t = new ic(e, n, o, c, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = o, t.enableXOF = c, t.destroyed = this.destroyed, t;
  }
}
const bi = (r, t, e) => ao(() => new ic(t, r, e));
bi(6, 144, 224 / 8);
bi(6, 136, 256 / 8);
bi(6, 104, 384 / 8);
bi(6, 72, 512 / 8);
bi(1, 144, 224 / 8);
bi(1, 136, 256 / 8);
bi(1, 104, 384 / 8);
bi(1, 72, 512 / 8);
const Jp = (r, t, e) => y2((n = {}) => new ic(t, r, n.dkLen === void 0 ? e : n.dkLen, !0));
Jp(31, 168, 128 / 8);
Jp(31, 136, 256 / 8);
class Qp extends Pf {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, Vr.hash(t);
    const n = Us(e);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o = this.blockLen, i = new Uint8Array(o);
    i.set(n.length > o ? t.create().update(n).digest() : n);
    for (let c = 0; c < i.length; c++)
      i[c] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let c = 0; c < i.length; c++)
      i[c] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return Vr.exists(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Vr.exists(this), Vr.bytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: n, finished: o, destroyed: i, blockLen: c, outputLen: u } = this;
    return t = t, t.finished = o, t.destroyed = i, t.blockLen = c, t.outputLen = u, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const t1 = (r, t, e) => new Qp(r, t).update(e).digest();
t1.create = (r, t) => new Qp(r, t);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Se = BigInt(0), $e = BigInt(1), gi = BigInt(2), ys = BigInt(3), Zh = BigInt(8), er = Object.freeze({
  a: Se,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: $e,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
}), Yh = (r, t) => (r + t / gi) / t, Ys = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  splitScalar(r) {
    const { n: t } = er, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -$e * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, c = BigInt("0x100000000000000000000000000000000"), u = Yh(i * r, t), p = Yh(-n * r, t);
    let b = Mt(r - u * e - p * o, t), _ = Mt(-u * n - p * i, t);
    const B = b > c, C = _ > c;
    if (B && (b = t - b), C && (_ = t - _), b > c || _ > c)
      throw new Error("splitScalarEndo: Endomorphism failed, k=" + r);
    return { k1neg: B, k1: b, k2neg: C, k2: _ };
  }
}, Ao = 32, Bs = 32, Xh = Ao + 1, Jh = 2 * Ao + 1;
function Qh(r) {
  const { a: t, b: e } = er, n = Mt(r * r), o = Mt(n * r);
  return Mt(o + t * r + e);
}
const Xs = er.a === Se;
class G_ extends Error {
  constructor(t) {
    super(t);
  }
}
function t0(r) {
  if (!(r instanceof xe))
    throw new TypeError("JacobianPoint expected");
}
class xe {
  constructor(t, e, n) {
    this.x = t, this.y = e, this.z = n;
  }
  static fromAffine(t) {
    if (!(t instanceof Ge))
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    return t.equals(Ge.ZERO) ? xe.ZERO : new xe(t.x, t.y, $e);
  }
  static toAffineBatch(t) {
    const e = J_(t.map((n) => n.z));
    return t.map((n, o) => n.toAffine(e[o]));
  }
  static normalizeZ(t) {
    return xe.toAffineBatch(t).map(xe.fromAffine);
  }
  equals(t) {
    t0(t);
    const { x: e, y: n, z: o } = this, { x: i, y: c, z: u } = t, p = Mt(o * o), b = Mt(u * u), _ = Mt(e * b), B = Mt(i * p), C = Mt(Mt(n * u) * b), R = Mt(Mt(c * o) * p);
    return _ === B && C === R;
  }
  negate() {
    return new xe(this.x, Mt(-this.y), this.z);
  }
  double() {
    const { x: t, y: e, z: n } = this, o = Mt(t * t), i = Mt(e * e), c = Mt(i * i), u = t + i, p = Mt(gi * (Mt(u * u) - o - c)), b = Mt(ys * o), _ = Mt(b * b), B = Mt(_ - gi * p), C = Mt(b * (p - B) - Zh * c), R = Mt(gi * e * n);
    return new xe(B, C, R);
  }
  add(t) {
    t0(t);
    const { x: e, y: n, z: o } = this, { x: i, y: c, z: u } = t;
    if (i === Se || c === Se)
      return this;
    if (e === Se || n === Se)
      return t;
    const p = Mt(o * o), b = Mt(u * u), _ = Mt(e * b), B = Mt(i * p), C = Mt(Mt(n * u) * b), R = Mt(Mt(c * o) * p), O = Mt(B - _), U = Mt(R - C);
    if (O === Se)
      return U === Se ? this.double() : xe.ZERO;
    const T = Mt(O * O), P = Mt(O * T), F = Mt(_ * T), L = Mt(U * U - P - gi * F), z = Mt(U * (F - L) - C * P), N = Mt(o * u * O);
    return new xe(L, z, N);
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiplyUnsafe(t) {
    const e = xe.ZERO;
    if (typeof t == "bigint" && t === Se)
      return e;
    let n = i0(t);
    if (n === $e)
      return this;
    if (!Xs) {
      let B = e, C = this;
      for (; n > Se; )
        n & $e && (B = B.add(C)), C = C.double(), n >>= $e;
      return B;
    }
    let { k1neg: o, k1: i, k2neg: c, k2: u } = Ys.splitScalar(n), p = e, b = e, _ = this;
    for (; i > Se || u > Se; )
      i & $e && (p = p.add(_)), u & $e && (b = b.add(_)), _ = _.double(), i >>= $e, u >>= $e;
    return o && (p = p.negate()), c && (b = b.negate()), b = new xe(Mt(b.x * Ys.beta), b.y, b.z), p.add(b);
  }
  precomputeWindow(t) {
    const e = Xs ? 128 / t + 1 : 256 / t + 1, n = [];
    let o = this, i = o;
    for (let c = 0; c < e; c++) {
      i = o, n.push(i);
      for (let u = 1; u < 2 ** (t - 1); u++)
        i = i.add(o), n.push(i);
      o = i.double();
    }
    return n;
  }
  wNAF(t, e) {
    !e && this.equals(xe.BASE) && (e = Ge.BASE);
    const n = e && e._WINDOW_SIZE || 1;
    if (256 % n)
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    let o = e && Qu.get(e);
    o || (o = this.precomputeWindow(n), e && n !== 1 && (o = xe.normalizeZ(o), Qu.set(e, o)));
    let i = xe.ZERO, c = xe.BASE;
    const u = 1 + (Xs ? 128 / n : 256 / n), p = 2 ** (n - 1), b = BigInt(2 ** n - 1), _ = 2 ** n, B = BigInt(n);
    for (let C = 0; C < u; C++) {
      const R = C * p;
      let O = Number(t & b);
      t >>= B, O > p && (O -= _, t += $e);
      const U = R, T = R + Math.abs(O) - 1, P = C % 2 !== 0, F = O < 0;
      O === 0 ? c = c.add(Js(P, o[U])) : i = i.add(Js(F, o[T]));
    }
    return { p: i, f: c };
  }
  multiply(t, e) {
    let n = i0(t), o, i;
    if (Xs) {
      const { k1neg: c, k1: u, k2neg: p, k2: b } = Ys.splitScalar(n);
      let { p: _, f: B } = this.wNAF(u, e), { p: C, f: R } = this.wNAF(b, e);
      _ = Js(c, _), C = Js(p, C), C = new xe(Mt(C.x * Ys.beta), C.y, C.z), o = _.add(C), i = B.add(R);
    } else {
      const { p: c, f: u } = this.wNAF(n, e);
      o = c, i = u;
    }
    return xe.normalizeZ([o, i])[0];
  }
  toAffine(t) {
    const { x: e, y: n, z: o } = this, i = this.equals(xe.ZERO);
    t == null && (t = i ? Zh : oc(o));
    const c = t, u = Mt(c * c), p = Mt(u * c), b = Mt(e * u), _ = Mt(n * p), B = Mt(o * c);
    if (i)
      return Ge.ZERO;
    if (B !== $e)
      throw new Error("invZ was invalid");
    return new Ge(b, _);
  }
}
xe.BASE = new xe(er.Gx, er.Gy, $e);
xe.ZERO = new xe(Se, $e, Se);
function Js(r, t) {
  const e = t.negate();
  return r ? e : t;
}
const Qu = /* @__PURE__ */ new WeakMap();
class Ge {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  _setWindowSize(t) {
    this._WINDOW_SIZE = t, Qu.delete(this);
  }
  hasEvenY() {
    return this.y % gi === Se;
  }
  static fromCompressedHex(t) {
    const e = t.length === 32, n = Ji(e ? t : t.subarray(1));
    if (!vu(n))
      throw new Error("Point is not on curve");
    const o = Qh(n);
    let i = X_(o);
    const c = (i & $e) === $e;
    e ? c && (i = Mt(-i)) : (t[0] & 1) === 1 !== c && (i = Mt(-i));
    const u = new Ge(n, i);
    return u.assertValidity(), u;
  }
  static fromUncompressedHex(t) {
    const e = Ji(t.subarray(1, Ao + 1)), n = Ji(t.subarray(Ao + 1, Ao * 2 + 1)), o = new Ge(e, n);
    return o.assertValidity(), o;
  }
  static fromHex(t) {
    const e = tf(t), n = e.length, o = e[0];
    if (n === Ao)
      return this.fromCompressedHex(e);
    if (n === Xh && (o === 2 || o === 3))
      return this.fromCompressedHex(e);
    if (n === Jh && o === 4)
      return this.fromUncompressedHex(e);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-${Xh} compressed bytes or ${Jh} uncompressed bytes, not ${n}`);
  }
  static fromPrivateKey(t) {
    return Ge.BASE.multiply(ef(t));
  }
  static fromSignature(t, e, n) {
    const { r: o, s: i } = e3(e);
    if (![0, 1, 2, 3].includes(n))
      throw new Error("Cannot recover: invalid recovery bit");
    const c = t3(tf(t)), { n: u } = er, p = n === 2 || n === 3 ? o + u : o, b = oc(p, u), _ = Mt(-c * b, u), B = Mt(i * b, u), C = n & 1 ? "03" : "02", R = Ge.fromHex(C + Lo(p)), O = Ge.BASE.multiplyAndAddUnsafe(R, _, B);
    if (!O)
      throw new Error("Cannot recover signature: point at infinify");
    return O.assertValidity(), O;
  }
  toRawBytes(t = !1) {
    return Xi(this.toHex(t));
  }
  toHex(t = !1) {
    const e = Lo(this.x);
    return t ? `${this.hasEvenY() ? "02" : "03"}${e}` : `04${e}${Lo(this.y)}`;
  }
  toHexX() {
    return this.toHex(!0).slice(2);
  }
  toRawX() {
    return this.toRawBytes(!0).slice(1);
  }
  assertValidity() {
    const t = "Point is not on elliptic curve", { x: e, y: n } = this;
    if (!vu(e) || !vu(n))
      throw new Error(t);
    const o = Mt(n * n), i = Qh(e);
    if (Mt(o - i) !== Se)
      throw new Error(t);
  }
  equals(t) {
    return this.x === t.x && this.y === t.y;
  }
  negate() {
    return new Ge(this.x, Mt(-this.y));
  }
  double() {
    return xe.fromAffine(this).double().toAffine();
  }
  add(t) {
    return xe.fromAffine(this).add(xe.fromAffine(t)).toAffine();
  }
  subtract(t) {
    return this.add(t.negate());
  }
  multiply(t) {
    return xe.fromAffine(this).multiply(t, this).toAffine();
  }
  multiplyAndAddUnsafe(t, e, n) {
    const o = xe.fromAffine(this), i = e === Se || e === $e || this !== Ge.BASE ? o.multiplyUnsafe(e) : o.multiply(e), c = xe.fromAffine(t).multiplyUnsafe(n), u = i.add(c);
    return u.equals(xe.ZERO) ? void 0 : u.toAffine();
  }
}
Ge.BASE = new Ge(er.Gx, er.Gy);
Ge.ZERO = new Ge(Se, Se);
function e0(r) {
  return Number.parseInt(r[0], 16) >= 8 ? "00" + r : r;
}
function r0(r) {
  if (r.length < 2 || r[0] !== 2)
    throw new Error(`Invalid signature integer tag: ${jo(r)}`);
  const t = r[1], e = r.subarray(2, t + 2);
  if (!t || e.length !== t)
    throw new Error("Invalid signature integer: wrong length");
  if (e[0] === 0 && e[1] <= 127)
    throw new Error("Invalid signature integer: trailing length");
  return { data: Ji(e), left: r.subarray(t + 2) };
}
function V_(r) {
  if (r.length < 2 || r[0] != 48)
    throw new Error(`Invalid signature tag: ${jo(r)}`);
  if (r[1] !== r.length - 2)
    throw new Error("Invalid signature: incorrect length");
  const { data: t, left: e } = r0(r.subarray(2)), { data: n, left: o } = r0(e);
  if (o.length)
    throw new Error(`Invalid signature: left bytes after parsing: ${jo(o)}`);
  return { r: t, s: n };
}
class Yi {
  constructor(t, e) {
    this.r = t, this.s = e, this.assertValidity();
  }
  static fromCompact(t) {
    const e = t instanceof Uint8Array, n = "Signature.fromCompact";
    if (typeof t != "string" && !e)
      throw new TypeError(`${n}: Expected string or Uint8Array`);
    const o = e ? jo(t) : t;
    if (o.length !== 128)
      throw new Error(`${n}: Expected 64-byte hex`);
    return new Yi(Ra(o.slice(0, 64)), Ra(o.slice(64, 128)));
  }
  static fromDER(t) {
    const e = t instanceof Uint8Array;
    if (typeof t != "string" && !e)
      throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
    const { r: n, s: o } = V_(e ? t : Xi(t));
    return new Yi(n, o);
  }
  static fromHex(t) {
    return this.fromDER(t);
  }
  assertValidity() {
    const { r: t, s: e } = this;
    if (!ka(t))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!ka(e))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const t = er.n >> $e;
    return this.s > t;
  }
  normalizeS() {
    return this.hasHighS() ? new Yi(this.r, Mt(-this.s, er.n)) : this;
  }
  toDERRawBytes() {
    return Xi(this.toDERHex());
  }
  toDERHex() {
    const t = e0(ss(this.s)), e = e0(ss(this.r)), n = t.length / 2, o = e.length / 2, i = ss(n), c = ss(o);
    return `30${ss(o + n + 4)}02${c}${e}02${i}${t}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return Xi(this.toCompactHex());
  }
  toCompactHex() {
    return Lo(this.r) + Lo(this.s);
  }
}
function os(...r) {
  if (!r.every((n) => n instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (r.length === 1)
    return r[0];
  const t = r.reduce((n, o) => n + o.length, 0), e = new Uint8Array(t);
  for (let n = 0, o = 0; n < r.length; n++) {
    const i = r[n];
    e.set(i, o), o += i.length;
  }
  return e;
}
const Z_ = Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function jo(r) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += Z_[r[e]];
  return t;
}
const Y_ = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function Lo(r) {
  if (typeof r != "bigint")
    throw new Error("Expected bigint");
  if (!(Se <= r && r < Y_))
    throw new Error("Expected number 0 <= n < 2^256");
  return r.toString(16).padStart(64, "0");
}
function n0(r) {
  const t = Xi(Lo(r));
  if (t.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return t;
}
function ss(r) {
  const t = r.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function Ra(r) {
  if (typeof r != "string")
    throw new TypeError("hexToNumber: expected string, got " + typeof r);
  return BigInt(`0x${r}`);
}
function Xi(r) {
  if (typeof r != "string")
    throw new TypeError("hexToBytes: expected string, got " + typeof r);
  if (r.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + r.length);
  const t = new Uint8Array(r.length / 2);
  for (let e = 0; e < t.length; e++) {
    const n = e * 2, o = r.slice(n, n + 2), i = Number.parseInt(o, 16);
    if (Number.isNaN(i) || i < 0)
      throw new Error("Invalid byte sequence");
    t[e] = i;
  }
  return t;
}
function Ji(r) {
  return Ra(jo(r));
}
function tf(r) {
  return r instanceof Uint8Array ? Uint8Array.from(r) : Xi(r);
}
function i0(r) {
  if (typeof r == "number" && Number.isSafeInteger(r) && r > 0)
    return BigInt(r);
  if (typeof r == "bigint" && ka(r))
    return r;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function Mt(r, t = er.P) {
  const e = r % t;
  return e >= Se ? e : t + e;
}
function Jr(r, t) {
  const { P: e } = er;
  let n = r;
  for (; t-- > Se; )
    n *= n, n %= e;
  return n;
}
function X_(r) {
  const { P: t } = er, e = BigInt(6), n = BigInt(11), o = BigInt(22), i = BigInt(23), c = BigInt(44), u = BigInt(88), p = r * r * r % t, b = p * p * r % t, _ = Jr(b, ys) * b % t, B = Jr(_, ys) * b % t, C = Jr(B, gi) * p % t, R = Jr(C, n) * C % t, O = Jr(R, o) * R % t, U = Jr(O, c) * O % t, T = Jr(U, u) * U % t, P = Jr(T, c) * O % t, F = Jr(P, ys) * b % t, L = Jr(F, i) * R % t, z = Jr(L, e) * p % t, N = Jr(z, gi);
  if (N * N % t !== r)
    throw new Error("Cannot find square root");
  return N;
}
function oc(r, t = er.P) {
  if (r === Se || t <= Se)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = Mt(r, t), n = t, o = Se, i = $e;
  for (; e !== Se; ) {
    const u = n / e, p = n % e, b = o - i * u;
    n = e, e = p, o = i, i = b;
  }
  if (n !== $e)
    throw new Error("invert: does not exist");
  return Mt(o, t);
}
function J_(r, t = er.P) {
  const e = new Array(r.length), n = r.reduce((i, c, u) => c === Se ? i : (e[u] = i, Mt(i * c, t)), $e), o = oc(n, t);
  return r.reduceRight((i, c, u) => c === Se ? i : (e[u] = Mt(i * e[u], t), Mt(i * c, t)), o), e;
}
function Q_(r) {
  const t = r.length * 8 - Bs * 8, e = Ji(r);
  return t > 0 ? e >> BigInt(t) : e;
}
function t3(r, t = !1) {
  const e = Q_(r);
  if (t)
    return e;
  const { n } = er;
  return e >= n ? e - n : e;
}
let Uo, bu;
function ka(r) {
  return Se < r && r < er.n;
}
function vu(r) {
  return Se < r && r < er.P;
}
function ef(r) {
  let t;
  if (typeof r == "bigint")
    t = r;
  else if (typeof r == "number" && Number.isSafeInteger(r) && r > 0)
    t = BigInt(r);
  else if (typeof r == "string") {
    if (r.length !== 2 * Bs)
      throw new Error("Expected 32 bytes of private key");
    t = Ra(r);
  } else if (r instanceof Uint8Array) {
    if (r.length !== Bs)
      throw new Error("Expected 32 bytes of private key");
    t = Ji(r);
  } else
    throw new TypeError("Expected valid private key");
  if (!ka(t))
    throw new Error("Expected private key: 0 < key < n");
  return t;
}
function e3(r) {
  if (r instanceof Yi)
    return r.assertValidity(), r;
  try {
    return Yi.fromDER(r);
  } catch {
    return Yi.fromCompact(r);
  }
}
Ge.BASE._setWindowSize(8);
const qr = {
  node: df,
  web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, Qs = {}, Ki = {
  bytesToHex: jo,
  hexToBytes: Xi,
  concatBytes: os,
  mod: Mt,
  invert: oc,
  isValidPrivateKey(r) {
    try {
      return ef(r), !0;
    } catch {
      return !1;
    }
  },
  _bigintTo32Bytes: n0,
  _normalizePrivateKey: ef,
  hashToPrivateKey: (r) => {
    r = tf(r);
    const t = Bs + 8;
    if (r.length < t || r.length > 1024)
      throw new Error("Expected valid bytes of private key as per FIPS 186");
    const e = Mt(Ji(r), er.n - $e) + $e;
    return n0(e);
  },
  randomBytes: (r = 32) => {
    if (qr.web)
      return qr.web.getRandomValues(new Uint8Array(r));
    if (qr.node) {
      const { randomBytes: t } = qr.node;
      return Uint8Array.from(t(r));
    } else
      throw new Error("The environment doesn't have randomBytes function");
  },
  randomPrivateKey: () => Ki.hashToPrivateKey(Ki.randomBytes(Bs + 8)),
  precompute(r = 8, t = Ge.BASE) {
    const e = t === Ge.BASE ? t : new Ge(t.x, t.y);
    return e._setWindowSize(r), e.multiply(ys), e;
  },
  sha256: async (...r) => {
    if (qr.web) {
      const t = await qr.web.subtle.digest("SHA-256", os(...r));
      return new Uint8Array(t);
    } else if (qr.node) {
      const { createHash: t } = qr.node, e = t("sha256");
      return r.forEach((n) => e.update(n)), Uint8Array.from(e.digest());
    } else
      throw new Error("The environment doesn't have sha256 function");
  },
  hmacSha256: async (r, ...t) => {
    if (qr.web) {
      const e = await qr.web.subtle.importKey("raw", r, { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign"]), n = os(...t), o = await qr.web.subtle.sign("HMAC", e, n);
      return new Uint8Array(o);
    } else if (qr.node) {
      const { createHmac: e } = qr.node, n = e("sha256", r);
      return t.forEach((o) => n.update(o)), Uint8Array.from(n.digest());
    } else
      throw new Error("The environment doesn't have hmac-sha256 function");
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (r, ...t) => {
    let e = Qs[r];
    if (e === void 0) {
      const n = await Ki.sha256(Uint8Array.from(r, (o) => o.charCodeAt(0)));
      e = os(n, n), Qs[r] = e;
    }
    return Ki.sha256(e, ...t);
  },
  taggedHashSync: (r, ...t) => {
    if (typeof Uo != "function")
      throw new G_("sha256Sync is undefined, you need to set it");
    let e = Qs[r];
    if (e === void 0) {
      const n = Uo(Uint8Array.from(r, (o) => o.charCodeAt(0)));
      e = os(n, n), Qs[r] = e;
    }
    return Uo(e, ...t);
  },
  _JacobianPoint: xe
};
Object.defineProperties(Ki, {
  sha256Sync: {
    configurable: !1,
    get() {
      return Uo;
    },
    set(r) {
      Uo || (Uo = r);
    }
  },
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return bu;
    },
    set(r) {
      bu || (bu = r);
    }
  }
});
zo.sha512Sync = (...r) => j2(zo.concatBytes(...r));
zo.randomPrivateKey;
function o0(r) {
  try {
    return $r.fromHex(
      r,
      !0
      /* strict */
    ), !0;
  } catch {
    return !1;
  }
}
const r3 = (r) => Ke.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? Ke.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : Ke.Buffer.from(r);
class n3 {
  constructor(t) {
    Object.assign(this, t);
  }
  encode() {
    return Ke.Buffer.from(Ep(ca, this));
  }
  static decode(t) {
    return _p(ca, this, t);
  }
  static decodeUnchecked(t) {
    return mp(ca, this, t);
  }
}
const ca = /* @__PURE__ */ new Map();
let e1;
const i3 = 32, xu = 32;
function o3(r) {
  return r._bn !== void 0;
}
let s0 = 1;
e1 = Symbol.toStringTag;
class ge extends n3 {
  /** @internal */
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(t) {
    if (super({}), this._bn = void 0, o3(t))
      this._bn = t._bn;
    else {
      if (typeof t == "string") {
        const e = Mh.decode(t);
        if (e.length != xu)
          throw new Error("Invalid public key input");
        this._bn = new Ih(e);
      } else
        this._bn = new Ih(t);
      if (this._bn.byteLength() > xu)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const t = new ge(s0);
    return s0 += 1, new ge(t.toBuffer());
  }
  /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */
  /**
   * Checks if two publicKeys are equal
   */
  equals(t) {
    return this._bn.eq(t._bn);
  }
  /**
   * Return the base-58 representation of the public key
   */
  toBase58() {
    return Mh.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  /**
   * Return the byte array representation of the public key in big endian
   */
  toBytes() {
    const t = this.toBuffer();
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  /**
   * Return the Buffer representation of the public key in big endian
   */
  toBuffer() {
    const t = this._bn.toArrayLike(Ke.Buffer);
    if (t.length === xu)
      return t;
    const e = Ke.Buffer.alloc(32);
    return t.copy(e, 32 - t.length), e;
  }
  get [e1]() {
    return `PublicKey(${this.toString()})`;
  }
  /**
   * Return the base-58 representation of the public key
   */
  toString() {
    return this.toBase58();
  }
  /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */
  /* eslint-disable require-await */
  static async createWithSeed(t, e, n) {
    const o = Ke.Buffer.concat([t.toBuffer(), Ke.Buffer.from(e), n.toBuffer()]), i = Yu(o);
    return new ge(i);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(t, e) {
    let n = Ke.Buffer.alloc(0);
    t.forEach(function(i) {
      if (i.length > i3)
        throw new TypeError("Max seed length exceeded");
      n = Ke.Buffer.concat([n, r3(i)]);
    }), n = Ke.Buffer.concat([n, e.toBuffer(), Ke.Buffer.from("ProgramDerivedAddress")]);
    const o = Yu(n);
    if (o0(o))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new ge(o);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(t, e) {
    return this.createProgramAddressSync(t, e);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(t, e) {
    let n = 255, o;
    for (; n != 0; ) {
      try {
        const i = t.concat(Ke.Buffer.from([n]));
        o = this.createProgramAddressSync(i, e);
      } catch (i) {
        if (i instanceof TypeError)
          throw i;
        n--;
        continue;
      }
      return [o, n];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */
  static async findProgramAddress(t, e) {
    return this.findProgramAddressSync(t, e);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(t) {
    const e = new ge(t);
    return o0(e.toBytes());
  }
}
ge.default = new ge("11111111111111111111111111111111");
ca.set(ge, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new ge("BPFLoader1111111111111111111111111111111111");
const s3 = 64, Ee = (r = "publicKey") => Wo(32, r), Io = (r = "string") => {
  const t = qt([zt("length"), zt("lengthPadding"), Wo(Zi(zt(), -8), "chars")], r), e = t.decode.bind(t), n = t.encode.bind(t), o = t;
  return o.decode = (i, c) => e(i, c).chars.toString(), o.encode = (i, c, u) => {
    const p = {
      chars: Ke.Buffer.from(i, "utf8")
    };
    return n(p, c, u);
  }, o.alloc = (i) => zt().span + zt().span + Ke.Buffer.from(i, "utf8").length, o;
}, a3 = (r = "authorized") => qt([Ee("staker"), Ee("withdrawer")], r), c3 = (r = "lockup") => qt([Gr("unixTimestamp"), Gr("epoch"), Ee("custodian")], r), u3 = (r = "voteInit") => qt([Ee("nodePubkey"), Ee("authorizedVoter"), Ee("authorizedWithdrawer"), Xe("commission")], r), f3 = (r = "voteAuthorizeWithSeedArgs") => qt([zt("voteAuthorizationType"), Ee("currentAuthorityDerivedKeyOwnerPubkey"), Io("currentAuthorityDerivedKeySeed"), Ee("newAuthorized")], r);
let a0;
(function(r) {
  r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", r[r.PROCESSED = 1] = "PROCESSED", r[r.TIMED_OUT = 2] = "TIMED_OUT", r[r.NONCE_INVALID = 3] = "NONCE_INVALID";
})(a0 || (a0 = {}));
Ke.Buffer.alloc(s3).fill(0);
new ge("SysvarC1ock11111111111111111111111111111111");
new ge("SysvarEpochSchedu1e111111111111111111111111");
new ge("Sysvar1nstructions1111111111111111111111111");
new ge("SysvarRecentB1ockHashes11111111111111111111");
new ge("SysvarRent111111111111111111111111111111111");
new ge("SysvarRewards111111111111111111111111111111");
new ge("SysvarS1otHashes111111111111111111111111111");
new ge("SysvarS1otHistory11111111111111111111111111");
new ge("SysvarStakeHistory1111111111111111111111111");
const l3 = lr("lamportsPerSignature"), h3 = qt([zt("version"), zt("state"), Ee("authorizedPubkey"), Ee("nonce"), qt([l3], "feeCalculator")]);
h3.span;
const d3 = (r) => {
  const t = r.decode.bind(r), e = r.encode.bind(r);
  return {
    decode: t,
    encode: e
  };
}, p3 = (r) => (t) => {
  const e = Wo(r, t), {
    encode: n,
    decode: o
  } = d3(e), i = e;
  return i.decode = (c, u) => {
    const p = o(c, u);
    return CE(Ke.Buffer.from(p));
  }, i.encode = (c, u, p) => {
    const b = OE(c, r);
    return n(b, u, p);
  }, i;
}, Ho = p3(8);
Object.freeze({
  Create: {
    index: 0,
    layout: qt([zt("instruction"), Gr("lamports"), Gr("space"), Ee("programId")])
  },
  Assign: {
    index: 1,
    layout: qt([zt("instruction"), Ee("programId")])
  },
  Transfer: {
    index: 2,
    layout: qt([zt("instruction"), Ho("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: qt([zt("instruction"), Ee("base"), Io("seed"), Gr("lamports"), Gr("space"), Ee("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: qt([zt("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: qt([zt("instruction"), Gr("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: qt([zt("instruction"), Ee("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: qt([zt("instruction"), Ee("authorized")])
  },
  Allocate: {
    index: 8,
    layout: qt([zt("instruction"), Gr("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: qt([zt("instruction"), Ee("base"), Io("seed"), Gr("space"), Ee("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: qt([zt("instruction"), Ee("base"), Io("seed"), Ee("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: qt([zt("instruction"), Ho("lamports"), Io("seed"), Ee("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: qt([zt("instruction")])
  }
});
new ge("11111111111111111111111111111111");
new ge("BPFLoader2111111111111111111111111111111111");
qt([
  zt("typeIndex"),
  Ho("deactivationSlot"),
  lr("lastExtendedSlot"),
  Xe("lastExtendedStartIndex"),
  Xe(),
  // option
  Hi(Ee(), Zi(Xe(), -1), "authority")
]);
const rr = $s(tl(ge), yt(), (r) => new ge(r)), r1 = el([yt(), De("base64")]), ul = $s(tl(Ke.Buffer), r1, (r) => Ke.Buffer.from(r[0], "base64"));
function n1(r) {
  return Dr([ct({
    jsonrpc: De("2.0"),
    id: yt(),
    result: r
  }), ct({
    jsonrpc: De("2.0"),
    id: yt(),
    error: ct({
      code: Ns(),
      message: yt(),
      data: Ht(WE())
    })
  })]);
}
const g3 = n1(Ns());
function Ce(r) {
  return $s(n1(r), g3, (t) => "error" in t ? t : {
    ...t,
    result: Ss(t.result, r)
  });
}
function mn(r) {
  return Ce(ct({
    context: ct({
      slot: Y()
    }),
    value: r
  }));
}
function sc(r) {
  return ct({
    context: ct({
      slot: Y()
    }),
    value: r
  });
}
const y3 = ct({
  foundation: Y(),
  foundationTerm: Y(),
  initial: Y(),
  taper: Y(),
  terminal: Y()
});
Ce(It(At(ct({
  epoch: Y(),
  effectiveSlot: Y(),
  amount: Y(),
  postBalance: Y(),
  commission: Ht(At(Y()))
}))));
const m3 = ct({
  total: Y(),
  validator: Y(),
  foundation: Y(),
  epoch: Y()
}), w3 = ct({
  epoch: Y(),
  slotIndex: Y(),
  slotsInEpoch: Y(),
  absoluteSlot: Y(),
  blockHeight: Ht(Y()),
  transactionCount: Ht(Y())
}), b3 = ct({
  slotsPerEpoch: Y(),
  leaderScheduleSlotOffset: Y(),
  warmup: Kn(),
  firstNormalEpoch: Y(),
  firstNormalSlot: Y()
}), v3 = qp(yt(), It(Y())), lo = At(Dr([ct({}), yt()])), x3 = ct({
  err: lo
}), E3 = De("receivedSignature");
ct({
  "solana-core": yt(),
  "feature-set": Ht(Y())
});
mn(ct({
  err: At(Dr([ct({}), yt()])),
  logs: At(It(yt())),
  accounts: Ht(At(It(At(ct({
    executable: Kn(),
    owner: yt(),
    lamports: Y(),
    data: It(yt()),
    rentEpoch: Ht(Y())
  }))))),
  unitsConsumed: Ht(Y()),
  returnData: Ht(At(ct({
    programId: yt(),
    data: el([yt(), De("base64")])
  })))
}));
mn(ct({
  byIdentity: qp(yt(), It(Y())),
  range: ct({
    firstSlot: Y(),
    lastSlot: Y()
  })
}));
Ce(y3);
Ce(m3);
Ce(w3);
Ce(b3);
Ce(v3);
Ce(Y());
mn(ct({
  total: Y(),
  circulating: Y(),
  nonCirculating: Y(),
  nonCirculatingAccounts: It(rr)
}));
const _3 = ct({
  amount: yt(),
  uiAmount: At(Y()),
  decimals: Y(),
  uiAmountString: Ht(yt())
});
mn(It(ct({
  address: rr,
  amount: yt(),
  uiAmount: At(Y()),
  decimals: Y(),
  uiAmountString: Ht(yt())
})));
mn(It(ct({
  pubkey: rr,
  account: ct({
    executable: Kn(),
    owner: rr,
    lamports: Y(),
    data: ul,
    rentEpoch: Y()
  })
})));
const rf = ct({
  program: yt(),
  parsed: Ns(),
  space: Y()
});
mn(It(ct({
  pubkey: rr,
  account: ct({
    executable: Kn(),
    owner: rr,
    lamports: Y(),
    data: rf,
    rentEpoch: Y()
  })
})));
mn(It(ct({
  lamports: Y(),
  address: rr
})));
const fl = ct({
  executable: Kn(),
  owner: rr,
  lamports: Y(),
  data: ul,
  rentEpoch: Y()
});
ct({
  pubkey: rr,
  account: fl
});
const S3 = $s(Dr([tl(Ke.Buffer), rf]), Dr([r1, rf]), (r) => Array.isArray(r) ? Ss(r, ul) : r), B3 = ct({
  executable: Kn(),
  owner: rr,
  lamports: Y(),
  data: S3,
  rentEpoch: Y()
});
ct({
  pubkey: rr,
  account: B3
});
ct({
  state: Dr([De("active"), De("inactive"), De("activating"), De("deactivating")]),
  active: Y(),
  inactive: Y()
});
Ce(It(ct({
  signature: yt(),
  slot: Y(),
  err: lo,
  memo: At(yt()),
  blockTime: Ht(At(Y()))
})));
Ce(It(ct({
  signature: yt(),
  slot: Y(),
  err: lo,
  memo: At(yt()),
  blockTime: Ht(At(Y()))
})));
ct({
  subscription: Y(),
  result: sc(fl)
});
const A3 = ct({
  pubkey: rr,
  account: fl
});
ct({
  subscription: Y(),
  result: sc(A3)
});
const I3 = ct({
  parent: Y(),
  slot: Y(),
  root: Y()
});
ct({
  subscription: Y(),
  result: I3
});
const M3 = Dr([ct({
  type: Dr([De("firstShredReceived"), De("completed"), De("optimisticConfirmation"), De("root")]),
  slot: Y(),
  timestamp: Y()
}), ct({
  type: De("createdBank"),
  parent: Y(),
  slot: Y(),
  timestamp: Y()
}), ct({
  type: De("frozen"),
  slot: Y(),
  timestamp: Y(),
  stats: ct({
    numTransactionEntries: Y(),
    numSuccessfulTransactions: Y(),
    numFailedTransactions: Y(),
    maxTransactionsPerEntry: Y()
  })
}), ct({
  type: De("dead"),
  slot: Y(),
  timestamp: Y(),
  err: yt()
})]);
ct({
  subscription: Y(),
  result: M3
});
ct({
  subscription: Y(),
  result: sc(Dr([x3, E3]))
});
ct({
  subscription: Y(),
  result: Y()
});
ct({
  pubkey: yt(),
  gossip: At(yt()),
  tpu: At(yt()),
  rpc: At(yt()),
  version: At(yt())
});
const c0 = ct({
  votePubkey: yt(),
  nodePubkey: yt(),
  activatedStake: Y(),
  epochVoteAccount: Kn(),
  epochCredits: It(el([Y(), Y(), Y()])),
  commission: Y(),
  lastVote: Y(),
  rootSlot: At(Y())
});
Ce(ct({
  current: It(c0),
  delinquent: It(c0)
}));
const R3 = Dr([De("processed"), De("confirmed"), De("finalized")]), k3 = ct({
  slot: Y(),
  confirmations: At(Y()),
  err: lo,
  confirmationStatus: Ht(R3)
});
mn(It(At(k3)));
Ce(Y());
const i1 = ct({
  accountKey: rr,
  writableIndexes: It(Y()),
  readonlyIndexes: It(Y())
}), ll = ct({
  signatures: It(yt()),
  message: ct({
    accountKeys: It(yt()),
    header: ct({
      numRequiredSignatures: Y(),
      numReadonlySignedAccounts: Y(),
      numReadonlyUnsignedAccounts: Y()
    }),
    instructions: It(ct({
      accounts: It(Y()),
      data: yt(),
      programIdIndex: Y()
    })),
    recentBlockhash: yt(),
    addressTableLookups: Ht(It(i1))
  })
}), o1 = ct({
  pubkey: rr,
  signer: Kn(),
  writable: Kn(),
  source: Ht(Dr([De("transaction"), De("lookupTable")]))
}), s1 = ct({
  accountKeys: It(o1),
  signatures: It(yt())
}), a1 = ct({
  parsed: Ns(),
  program: yt(),
  programId: rr
}), c1 = ct({
  accounts: It(rr),
  data: yt(),
  programId: rr
}), T3 = Dr([c1, a1]), C3 = Dr([ct({
  parsed: Ns(),
  program: yt(),
  programId: yt()
}), ct({
  accounts: It(yt()),
  data: yt(),
  programId: yt()
})]), u1 = $s(T3, C3, (r) => "accounts" in r ? Ss(r, c1) : Ss(r, a1)), f1 = ct({
  signatures: It(yt()),
  message: ct({
    accountKeys: It(o1),
    instructions: It(u1),
    recentBlockhash: yt(),
    addressTableLookups: Ht(At(It(i1)))
  })
}), Ta = ct({
  accountIndex: Y(),
  mint: yt(),
  owner: Ht(yt()),
  uiTokenAmount: _3
}), l1 = ct({
  writable: It(rr),
  readonly: It(rr)
}), ac = ct({
  err: lo,
  fee: Y(),
  innerInstructions: Ht(At(It(ct({
    index: Y(),
    instructions: It(ct({
      accounts: It(Y()),
      data: yt(),
      programIdIndex: Y()
    }))
  })))),
  preBalances: It(Y()),
  postBalances: It(Y()),
  logMessages: Ht(At(It(yt()))),
  preTokenBalances: Ht(At(It(Ta))),
  postTokenBalances: Ht(At(It(Ta))),
  loadedAddresses: Ht(l1),
  computeUnitsConsumed: Ht(Y())
}), hl = ct({
  err: lo,
  fee: Y(),
  innerInstructions: Ht(At(It(ct({
    index: Y(),
    instructions: It(u1)
  })))),
  preBalances: It(Y()),
  postBalances: It(Y()),
  logMessages: Ht(At(It(yt()))),
  preTokenBalances: Ht(At(It(Ta))),
  postTokenBalances: Ht(At(It(Ta))),
  loadedAddresses: Ht(l1),
  computeUnitsConsumed: Ht(Y())
}), Jo = Dr([De(0), De("legacy")]), ho = ct({
  pubkey: yt(),
  lamports: Y(),
  postBalance: At(Y()),
  rewardType: At(yt()),
  commission: Ht(At(Y()))
});
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  transactions: It(ct({
    transaction: ll,
    meta: At(ac),
    version: Ht(Jo)
  })),
  rewards: Ht(It(ho)),
  blockTime: At(Y()),
  blockHeight: At(Y())
})));
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  rewards: Ht(It(ho)),
  blockTime: At(Y()),
  blockHeight: At(Y())
})));
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  transactions: It(ct({
    transaction: s1,
    meta: At(ac),
    version: Ht(Jo)
  })),
  rewards: Ht(It(ho)),
  blockTime: At(Y()),
  blockHeight: At(Y())
})));
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  transactions: It(ct({
    transaction: f1,
    meta: At(hl),
    version: Ht(Jo)
  })),
  rewards: Ht(It(ho)),
  blockTime: At(Y()),
  blockHeight: At(Y())
})));
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  transactions: It(ct({
    transaction: s1,
    meta: At(hl),
    version: Ht(Jo)
  })),
  rewards: Ht(It(ho)),
  blockTime: At(Y()),
  blockHeight: At(Y())
})));
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  rewards: Ht(It(ho)),
  blockTime: At(Y()),
  blockHeight: At(Y())
})));
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  transactions: It(ct({
    transaction: ll,
    meta: At(ac)
  })),
  rewards: Ht(It(ho)),
  blockTime: At(Y())
})));
Ce(At(ct({
  blockhash: yt(),
  previousBlockhash: yt(),
  parentSlot: Y(),
  signatures: It(yt()),
  blockTime: At(Y())
})));
Ce(At(ct({
  slot: Y(),
  meta: ac,
  blockTime: Ht(At(Y())),
  transaction: ll,
  version: Ht(Jo)
})));
Ce(At(ct({
  slot: Y(),
  transaction: f1,
  meta: At(hl),
  blockTime: Ht(At(Y())),
  version: Ht(Jo)
})));
mn(ct({
  blockhash: yt(),
  feeCalculator: ct({
    lamportsPerSignature: Y()
  })
}));
mn(ct({
  blockhash: yt(),
  lastValidBlockHeight: Y()
}));
const L3 = ct({
  slot: Y(),
  numTransactions: Y(),
  numSlots: Y(),
  samplePeriodSecs: Y()
});
Ce(It(L3));
mn(At(ct({
  feeCalculator: ct({
    lamportsPerSignature: Y()
  })
})));
Ce(yt());
Ce(yt());
const U3 = ct({
  err: lo,
  logs: It(yt()),
  signature: yt()
});
ct({
  result: sc(U3),
  subscription: Y()
});
Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: qt([zt("instruction"), Ho("recentSlot"), Xe("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: qt([zt("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: qt([zt("instruction"), Ho(), Hi(Ee(), Zi(zt(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: qt([zt("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: qt([zt("instruction")])
  }
});
new ge("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: qt([Xe("instruction"), zt("units"), zt("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: qt([Xe("instruction"), zt("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: qt([Xe("instruction"), zt("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: qt([Xe("instruction"), Ho("microLamports")])
  }
});
new ge("ComputeBudget111111111111111111111111111111");
qt([Xe("numSignatures"), Xe("padding"), nn("signatureOffset"), nn("signatureInstructionIndex"), nn("publicKeyOffset"), nn("publicKeyInstructionIndex"), nn("messageDataOffset"), nn("messageDataSize"), nn("messageInstructionIndex")]);
new ge("Ed25519SigVerify111111111111111111111111111");
Ki.hmacSha256Sync = (r, ...t) => {
  const e = t1.create(Yu, r);
  return t.forEach((n) => e.update(n)), e.digest();
};
Ki.isValidPrivateKey;
qt([Xe("numSignatures"), nn("signatureOffset"), Xe("signatureInstructionIndex"), nn("ethAddressOffset"), Xe("ethAddressInstructionIndex"), nn("messageDataOffset"), nn("messageDataSize"), Xe("messageInstructionIndex"), Wo(20, "ethAddress"), Wo(64, "signature"), Xe("recoveryId")]);
new ge("KeccakSecp256k11111111111111111111111111111");
new ge("StakeConfig11111111111111111111111111111111");
class u0 {
  /** Unix timestamp of lockup expiration */
  /** Epoch of lockup expiration */
  /** Lockup custodian authority */
  /**
   * Create a new Lockup object
   */
  constructor(t, e, n) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = n;
  }
  /**
   * Default, inactive Lockup value
   */
}
u0.default = new u0(0, 0, ge.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: qt([zt("instruction"), a3(), c3()])
  },
  Authorize: {
    index: 1,
    layout: qt([zt("instruction"), Ee("newAuthorized"), zt("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: qt([zt("instruction")])
  },
  Split: {
    index: 3,
    layout: qt([zt("instruction"), Gr("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: qt([zt("instruction"), Gr("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: qt([zt("instruction")])
  },
  Merge: {
    index: 7,
    layout: qt([zt("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: qt([zt("instruction"), Ee("newAuthorized"), zt("stakeAuthorizationType"), Io("authoritySeed"), Ee("authorityOwner")])
  }
});
new ge("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: qt([zt("instruction"), u3()])
  },
  Authorize: {
    index: 1,
    layout: qt([zt("instruction"), Ee("newAuthorized"), zt("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: qt([zt("instruction"), Gr("lamports")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: qt([zt("instruction"), f3()])
  }
});
new ge("Vote111111111111111111111111111111111111111");
new ge("Va1idator1nfo111111111111111111111111111111");
ct({
  name: yt(),
  website: Ht(yt()),
  details: Ht(yt()),
  keybaseUsername: Ht(yt())
});
new ge("Vote111111111111111111111111111111111111111");
qt([
  Ee("nodePubkey"),
  Ee("authorizedWithdrawer"),
  Xe("commission"),
  lr(),
  // votes.length
  Hi(qt([lr("slot"), zt("confirmationCount")]), Zi(zt(), -8), "votes"),
  Xe("rootSlotValid"),
  lr("rootSlot"),
  lr(),
  // authorizedVoters.length
  Hi(qt([lr("epoch"), Ee("authorizedVoter")]), Zi(zt(), -8), "authorizedVoters"),
  qt([Hi(qt([Ee("authorizedPubkey"), lr("epochOfLastAuthorizedSwitch"), lr("targetEpoch")]), 32, "buf"), lr("idx"), Xe("isEmpty")], "priorVoters"),
  lr(),
  // epochCredits.length
  Hi(qt([lr("epoch"), lr("credits"), lr("prevCredits")]), Zi(zt(), -8), "epochCredits"),
  qt([lr("slot"), lr("timestamp")], "lastTimestamp")
]);
const O3 = "Phantom";
class F3 extends t2 {
  constructor(t = {}) {
    super(), this.name = O3, this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K", this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]), this._readyState = typeof window > "u" || typeof document > "u" ? En.Unsupported : En.NotDetected, this._disconnected = () => {
      const e = this._wallet;
      e && (e.off("disconnect", this._disconnected), e.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new Kx()), this.emit("disconnect"));
    }, this._accountChanged = (e) => {
      const n = this._publicKey;
      if (n) {
        try {
          e = new ge(e.toBytes());
        } catch (o) {
          this.emit("error", new xh(o == null ? void 0 : o.message, o));
          return;
        }
        n.equals(e) || (this._publicKey = e, this.emit("connect", e));
      }
    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== En.Unsupported && (Jx() ? (this._readyState = En.Loadable, this.emit("readyStateChange", this._readyState)) : Xx(() => {
      var e, n, o;
      return (n = (e = window.phantom) == null ? void 0 : e.solana) != null && n.isPhantom || (o = window.solana) != null && o.isPhantom ? (this._readyState = En.Installed, this.emit("readyStateChange", this._readyState), !0) : !1;
    }));
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var t;
    return !!((t = this._wallet) != null && t.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async autoConnect() {
    this.readyState === En.Installed && await this.connect();
  }
  async connect() {
    var t;
    try {
      if (this.connected || this.connecting)
        return;
      if (this.readyState === En.Loadable) {
        const o = encodeURI(window.location.href), i = encodeURI(window.location.origin);
        window.location.href = `https://phantom.app/ul/browse/${o}?ref=${i}`;
        return;
      }
      if (this.readyState !== En.Installed)
        throw new jx();
      this._connecting = !0;
      const e = ((t = window.phantom) == null ? void 0 : t.solana) || window.solana;
      if (!e.isConnected)
        try {
          await e.connect();
        } catch (o) {
          throw new Hx(o == null ? void 0 : o.message, o);
        }
      if (!e.publicKey)
        throw new Vx();
      let n;
      try {
        n = new ge(e.publicKey.toBytes());
      } catch (o) {
        throw new xh(o == null ? void 0 : o.message, o);
      }
      e.on("disconnect", this._disconnected), e.on("accountChanged", this._accountChanged), this._wallet = e, this._publicKey = n, this.emit("connect", n);
    } catch (e) {
      throw this.emit("error", e), e;
    } finally {
      this._connecting = !1;
    }
  }
  async disconnect() {
    const t = this._wallet;
    if (t) {
      t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
      try {
        await t.disconnect();
      } catch (e) {
        this.emit("error", new Gx(e == null ? void 0 : e.message, e));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(t, e, n = {}) {
    try {
      const o = this._wallet;
      if (!o)
        throw new hs();
      try {
        const { signers: i, ...c } = n;
        Wu(t) ? i != null && i.length && t.sign(i) : (t = await this.prepareTransaction(t, e, c), i != null && i.length && t.partialSign(...i)), c.preflightCommitment = c.preflightCommitment || e.commitment;
        const { signature: u } = await o.signAndSendTransaction(t, c);
        return u;
      } catch (i) {
        throw i instanceof yn ? i : new ds(i == null ? void 0 : i.message, i);
      }
    } catch (o) {
      throw this.emit("error", o), o;
    }
  }
  async signTransaction(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new hs();
      try {
        return await e.signTransaction(t) || t;
      } catch (n) {
        throw new Bo(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signAllTransactions(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new hs();
      try {
        return await e.signAllTransactions(t) || t;
      } catch (n) {
        throw new Bo(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
  async signMessage(t) {
    try {
      const e = this._wallet;
      if (!e)
        throw new hs();
      try {
        const { signature: n } = await e.signMessage(t);
        return n;
      } catch (n) {
        throw new Zx(n == null ? void 0 : n.message, n);
      }
    } catch (e) {
      throw this.emit("error", e), e;
    }
  }
}
function N3({
  wallets: r,
  children: t
}) {
  const e = mr((n) => {
    console.error(n);
  }, []);
  return /* @__PURE__ */ Ue.jsx(qv, { wallets: r, autoConnect: !0, onError: e, children: /* @__PURE__ */ Ue.jsx(ep, { children: t }) });
}
function Z8({ children: r }) {
  const t = Ur(() => [new F3()], []);
  return /* @__PURE__ */ Ue.jsx(pb, { endpoint: zx, children: /* @__PURE__ */ Ue.jsx(N3, { wallets: t, children: /* @__PURE__ */ Ue.jsxs(ep, { children: [
    /* @__PURE__ */ Ue.jsx(Px, { position: "bottom-right", reverseOrder: !0 }),
    r
  ] }) }) });
}
export {
  W8 as Button,
  j8 as Form,
  Z8 as Wrapper,
  Hc as fetcher,
  qx as useCreateTxHook
};
