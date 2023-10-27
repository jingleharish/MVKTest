/*! For license information please see main.c871abeb.js.LICENSE.txt */
!(function () {
  var e = {
      576: function (e, t, n) {
        "use strict";
        var r = n(102),
          o = n(153);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = v.hasOwnProperty(t) ? v[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          j = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          _ = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          z = Object.assign;
        function F(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var B = !1;
        function D(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  s = a.length - 1;
                1 <= i && 0 <= s && o[i] !== a[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (o[i] !== a[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || o[i] !== a[s])) {
                        var l = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function q(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = D(e.type, !1));
            case 11:
              return (e = D(e.type.render, !1));
            case 1:
              return (e = D(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case O:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case j:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case _:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function $(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return z({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return z({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function ae(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function je() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Oe() {}
        var Te = !1;
        function _e(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Re(e, t, n);
          } finally {
            (Te = !1), (null !== Se || null !== Ee) && (Oe(), je());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Le = !1;
          }
        function Ae(e, t, n, r, o, a, i, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ie = !1,
          ze = null,
          Fe = !1,
          Be = null,
          De = {
            onError: function (e) {
              (Ie = !0), (ze = e);
            },
          };
        function qe(e, t, n, r, o, a, i, s, l) {
          (Ie = !1), (ze = null), Ae.apply(De, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Ue(e) !== e) throw Error(a(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Ve(o), e;
                    if (i === r) return Ve(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = o), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var $e = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Ye = o.unstable_shouldYield,
          Ge = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Je = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var s = i & ~o;
            0 !== s ? (r = dt(s)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          Et,
          Ct,
          Nt = !1,
          jt = [],
          Rt = null,
          Ot = null,
          Tt = null,
          _t = new Map(),
          Pt = new Map(),
          Lt = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              _t.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function zt(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Dt() {
          (Nt = !1),
            null !== Rt && Ft(Rt) && (Rt = null),
            null !== Ot && Ft(Ot) && (Ot = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            _t.forEach(Bt),
            Pt.forEach(Bt);
        }
        function qt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Dt)));
        }
        function Ut(e) {
          function t(t) {
            return qt(t, e);
          }
          if (0 < jt.length) {
            qt(jt[0], e);
            for (var n = 1; n < jt.length; n++) {
              var r = jt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && qt(Rt, e),
              null !== Ot && qt(Ot, e),
              null !== Tt && qt(Tt, e),
              _t.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            zt(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), $t(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), $t(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function $t(e, t, n, r) {
          if (Vt) {
            var o = Yt(e, t, n, r);
            if (null === o) Vr(e, t, r, Kt, n), At(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Rt = It(Rt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Ot = It(Ot, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Tt = It(Tt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return _t.set(a, It(_t.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Pt.set(a, It(Pt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && xt(a),
                  null === (a = Yt(e, t, n, r)) && Vr(e, t, r, Kt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Yt(e, t, n, r) {
          if (((Kt = null), null !== (e = bo((e = xe(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          dn = z({}, un, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = z({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = on(pn),
          mn = on(z({}, pn, { dataTransfer: 0 })),
          vn = on(z({}, dn, { relatedTarget: 0 })),
          yn = on(
            z({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = z({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(gn),
          wn = on(z({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Nn = z({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          jn = on(Nn),
          Rn = on(
            z({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = on(
            z({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Tn = on(
            z({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _n = z({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Pn = on(_n),
          Ln = [9, 13, 27, 32],
          Mn = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var In = c && "TextEvent" in window && !An,
          zn = c && (!Mn || (An && 8 < An && 11 >= An)),
          Fn = String.fromCharCode(32),
          Bn = !1;
        function Dn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function qn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ne(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          $n = null;
        function Kn(e) {
          Fr(e, 0);
        }
        function Yn(e) {
          if ($(xo(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), ($n = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn($n)) {
            var t = [];
            Wn(t, $n, e, xe(e)), _e(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), ($n = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn($n);
        }
        function ar(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && lr(gr, r)) ||
              ((gr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Nr = Cr("animationend"),
          jr = Cr("animationiteration"),
          Rr = Cr("animationstart"),
          Or = Cr("transitionend"),
          Tr = new Map(),
          _r =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Pr(e, t) {
          Tr.set(e, t), l(t, [e]);
        }
        for (var Lr = 0; Lr < _r.length; Lr++) {
          var Mr = _r[Lr];
          Pr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Pr(Nr, "onAnimationEnd"),
          Pr(jr, "onAnimationIteration"),
          Pr(Rr, "onAnimationStart"),
          Pr("dblclick", "onDoubleClick"),
          Pr("focusin", "onFocus"),
          Pr("focusout", "onBlur"),
          Pr(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, s, l, u) {
              if ((qe.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(a(198));
                var c = ze;
                (Ie = !1), (ze = null), Fe || ((Fe = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && o.isPropagationStopped()))
                    break e;
                  zr(o, s, u), (a = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (s = r[i]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && o.isPropagationStopped())
                  )
                    break e;
                  zr(o, s, u), (a = l);
                }
            }
          }
          if (Fe) throw ((e = Be), (Fe = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[vo];
          void 0 === n && (n = t[vo] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Dr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var qr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[qr]) {
            (e[qr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Dr(t, !1, e), Dr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[qr] || ((t[qr] = !0), Dr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var o = Wt;
              break;
            case 4:
              o = Qt;
              break;
            default:
              o = $t;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var s = r.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = bo(s))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = a = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          _e(function () {
            var r = a,
              o = xe(n),
              i = [];
            e: {
              var s = Tr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = jn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = On;
                    break;
                  case Nr:
                  case jr:
                  case Rr:
                    l = yn;
                    break;
                  case Or:
                    l = Tn;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = Pn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Rn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Pe(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, o)),
                  i.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (d = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == l ? s : xo(l)),
                  (p = null == u ? s : xo(u)),
                  ((s = new c(m, h + "leave", l, n, o)).target = d),
                  (s.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(f, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = l; p; p = $r(p)) h++;
                    for (p = 0, m = f; m; m = $r(m)) p++;
                    for (; 0 < h - p; ) (c = $r(c)), h--;
                    for (; 0 < p - h; ) (f = $r(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = $r(c)), (f = $r(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Kr(i, s, l, c, !1),
                  null !== u && null !== d && Kr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xo(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var v = Gn;
              else if (Vn(s))
                if (Xn) v = ir;
                else {
                  v = or;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (v = ar);
              switch (
                (v && (v = v(e, r))
                  ? Wn(i, v, n, o)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? xo(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(y) || "true" === y.contentEditable) &&
                    ((vr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var g;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Dn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (zn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (g = en())
                    : ((Jt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = qn(n)) && (b.data = g))),
                (g = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return qn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Mn && Dn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = g));
            }
            Fr(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Pe(e, n)) && r.unshift(Wr(e, a, o)),
              null != (a = Pe(e, t)) && r.push(Wr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              o
                ? null != (l = Pe(n, a)) && i.unshift(Wr(n, l, s))
                : o || (null != (l = Pe(n, a)) && i.push(Wr(n, l, s)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Gr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(so);
                }
              : ro;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Ut(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          vo = "__reactEvents$" + fo,
          yo = "__reactListeners$" + fo,
          go = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var So = [],
          Eo = -1;
        function Co(e) {
          return { current: e };
        }
        function No(e) {
          0 > Eo || ((e.current = So[Eo]), (So[Eo] = null), Eo--);
        }
        function jo(e, t) {
          Eo++, (So[Eo] = e.current), (e.current = t);
        }
        var Ro = {},
          Oo = Co(Ro),
          To = Co(!1),
          _o = Ro;
        function Po(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ro;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Lo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Mo() {
          No(To), No(Oo);
        }
        function Ao(e, t, n) {
          if (Oo.current !== Ro) throw Error(a(168));
          jo(Oo, t), jo(To, n);
        }
        function Io(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, H(e) || "Unknown", o));
          return z({}, n, r);
        }
        function zo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ro),
            (_o = Oo.current),
            jo(Oo, e),
            jo(To, To.current),
            !0
          );
        }
        function Fo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Io(e, t, _o)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              No(To),
              No(Oo),
              jo(Oo, e))
            : No(To),
            jo(To, n);
        }
        var Bo = null,
          Do = !1,
          qo = !1;
        function Uo(e) {
          null === Bo ? (Bo = [e]) : Bo.push(e);
        }
        function Ho() {
          if (!qo && null !== Bo) {
            qo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Bo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Bo = null), (Do = !1);
            } catch (o) {
              throw (null !== Bo && (Bo = Bo.slice(e + 1)), $e(Ze, Ho), o);
            } finally {
              (bt = t), (qo = !1);
            }
          }
          return null;
        }
        var Vo = [],
          Wo = 0,
          Qo = null,
          $o = 0,
          Ko = [],
          Yo = 0,
          Go = null,
          Xo = 1,
          Jo = "";
        function Zo(e, t) {
          (Vo[Wo++] = $o), (Vo[Wo++] = Qo), (Qo = e), ($o = t);
        }
        function ea(e, t, n) {
          (Ko[Yo++] = Xo), (Ko[Yo++] = Jo), (Ko[Yo++] = Go), (Go = e);
          var r = Xo;
          e = Jo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Xo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Jo = a + e);
          } else (Xo = (1 << a) | (n << o) | r), (Jo = e);
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Qo; )
            (Qo = Vo[--Wo]), (Vo[Wo] = null), ($o = Vo[--Wo]), (Vo[Wo] = null);
          for (; e === Go; )
            (Go = Ko[--Yo]),
              (Ko[Yo] = null),
              (Jo = Ko[--Yo]),
              (Ko[Yo] = null),
              (Xo = Ko[--Yo]),
              (Ko[Yo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function sa(e, t) {
          var n = _u(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Go ? { id: Xo, overflow: Jo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = _u(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!la(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(n.nextSibling);
                var r = ra;
                t && la(e, t)
                  ? sa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function da(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) sa(e, t), (t = uo(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var va = w.ReactCurrentBatchConfig;
        function ya(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = z({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ga = Co(null),
          ba = null,
          wa = null,
          xa = null;
        function ka() {
          xa = wa = ba = null;
        }
        function Sa(e) {
          var t = ga.current;
          No(ga), (e._currentValue = t);
        }
        function Ea(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ca(e, t) {
          (ba = e),
            (xa = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Na(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wa)
            ) {
              if (null === ba) throw Error(a(308));
              (wa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else wa = wa.next = e;
          return t;
        }
        var ja = null;
        function Ra(e) {
          null === ja ? (ja = [e]) : ja.push(e);
        }
        function Oa(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Ra(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Ta(e, r)
          );
        }
        function Ta(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var _a = !1;
        function Pa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function La(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ma(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Aa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Rl))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Ta(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ra(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Ta(e, n)
          );
        }
        function Ia(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function za(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fa(e, t, n, r) {
          var o = e.updateQueue;
          _a = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === i ? (a = u) : (i.next = u), (i = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = l = null, s = a; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = s;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = z({}, d, f);
                      break e;
                    case 2:
                      _a = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (o.baseState = l),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Il |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Ba(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Da = new r.Component().refs;
        function qa(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : z({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ua = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              a = Ma(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Aa(e, a, o)) && (nu(t, e, o, r), Ia(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              a = Ma(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Aa(e, a, o)) && (nu(t, e, o, r), Ia(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              o = Ma(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Aa(e, o, r)) && (nu(t, e, r, n), Ia(t, e, r));
          },
        };
        function Ha(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(o, a);
        }
        function Va(e, t, n) {
          var r = !1,
            o = Ro,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Na(a))
              : ((o = Lo(t) ? _o : Oo.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Po(e, o)
                  : Ro)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ua),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Wa(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ua.enqueueReplaceState(t, t.state, null);
        }
        function Qa(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Da), Pa(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = Na(a))
            : ((a = Lo(t) ? _o : Oo.current), (o.context = Po(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (qa(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Ua.enqueueReplaceState(o, o.state, null),
              Fa(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function $a(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Da && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ka(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ya(e) {
          return (0, e._init)(e._payload);
        }
        function Ga(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === P &&
                    Ya(a) === t.type))
              ? (((r = o(t, n.props)).ref = $a(e, t, n)), (r.return = e), r)
              : (((r = Mu(n.type, n.key, n.props, null, e.mode, r)).ref = $a(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = zu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Mu(t.type, t.key, t.props, null, e.mode, n)).ref = $a(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case P:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              Ka(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === o ? u(e, t, n, r) : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case P:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== o ? null : d(e, t, n, r, null);
              Ka(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case P:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || A(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              Ka(t, r);
            }
            return null;
          }
          function m(o, a, s, l) {
            for (
              var u = null, c = null, d = a, m = (a = 0), v = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var y = p(o, d, s[m], l);
              if (null === y) {
                null === d && (d = v);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (a = i(y, a, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = v);
            }
            if (m === s.length) return n(o, d), aa && Zo(o, m), u;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(o, s[m], l)) &&
                  ((a = i(d, a, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return aa && Zo(o, m), u;
            }
            for (d = r(o, d); m < s.length; m++)
              null !== (v = h(d, o, m, s[m], l)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (a = i(v, a, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, m),
              u
            );
          }
          function v(o, s, l, u) {
            var c = A(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var d = (c = null), m = s, v = (s = 0), y = null, g = l.next();
              null !== m && !g.done;
              v++, g = l.next()
            ) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(o, m, g.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (s = i(b, s, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (g.done) return n(o, m), aa && Zo(o, v), c;
            if (null === m) {
              for (; !g.done; v++, g = l.next())
                null !== (g = f(o, g.value, u)) &&
                  ((s = i(g, s, v)),
                  null === d ? (c = g) : (d.sibling = g),
                  (d = g));
              return aa && Zo(o, v), c;
            }
            for (m = r(o, m); !g.done; v++, g = l.next())
              null !== (g = h(m, o, v, g.value, u)) &&
                (e &&
                  null !== g.alternate &&
                  m.delete(null === g.key ? v : g.key),
                (s = i(g, s, v)),
                null === d ? (c = g) : (d.sibling = g),
                (d = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, v),
              c
            );
          }
          return function e(r, a, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === P &&
                            Ya(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = $a(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((a = Au(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = a))
                      : (((l = Mu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = $a(r, a, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Fu(i, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case P:
                  return e(r, a, (c = i._init)(i._payload), l);
              }
              if (te(i)) return m(r, a, i, l);
              if (A(i)) return v(r, a, i, l);
              Ka(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = zu(i, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var Xa = Ga(!0),
          Ja = Ga(!1),
          Za = {},
          ei = Co(Za),
          ti = Co(Za),
          ni = Co(Za);
        function ri(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((jo(ni, t), jo(ti, e), jo(ei, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          No(ei), jo(ei, t);
        }
        function ai() {
          No(ei), No(ti), No(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = le(t, e.type);
          t !== n && (jo(ti, e), jo(ei, n));
        }
        function si(e) {
          ti.current === e && (No(ei), No(ti));
        }
        var li = Co(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          vi = null,
          yi = null,
          gi = !1,
          bi = !1,
          wi = 0,
          xi = 0;
        function ki() {
          throw Error(a(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (yi = vi = null),
                (t.updateQueue = null),
                (fi.current = us),
                (e = n(r, o));
            } while (bi);
          }
          if (
            ((fi.current = is),
            (t = null !== vi && null !== vi.next),
            (hi = 0),
            (yi = vi = mi = null),
            (gi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ni() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function ji() {
          if (null === vi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vi.next;
          var t = null === yi ? mi.memoizedState : yi.next;
          if (null !== t) (yi = t), (vi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Ri(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oi(e) {
          var t = ji(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = vi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var s = o.next;
              (o.next = i.next), (i.next = s);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
                  (mi.lanes |= d),
                  (Il |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (mi.lanes |= i), (Il |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ti(e) {
          var t = ji(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== o);
            sr(i, t.memoizedState) || (ws = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function _i() {}
        function Pi(e, t) {
          var n = mi,
            r = ji(),
            o = t(),
            i = !sr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (ws = !0)),
            (r = r.queue),
            Vi(Ai.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Bi(9, Mi.bind(null, n, r, o, t), void 0, null),
              null === Ol)
            )
              throw Error(a(349));
            0 !== (30 & hi) || Li(n, t, o);
          }
          return o;
        }
        function Li(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Mi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ii(t) && zi(e);
        }
        function Ai(e, t, n) {
          return n(function () {
            Ii(t) && zi(e);
          });
        }
        function Ii(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zi(e) {
          var t = Ta(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Fi(e) {
          var t = Ni();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ri,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Bi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Di() {
          return ji().memoizedState;
        }
        function qi(e, t, n, r) {
          var o = Ni();
          (mi.flags |= e),
            (o.memoizedState = Bi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ui(e, t, n, r) {
          var o = ji();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (((a = i.destroy), null !== r && Si(r, i.deps)))
              return void (o.memoizedState = Bi(t, n, a, r));
          }
          (mi.flags |= e), (o.memoizedState = Bi(1 | t, n, a, r));
        }
        function Hi(e, t) {
          return qi(8390656, 8, e, t);
        }
        function Vi(e, t) {
          return Ui(2048, 8, e, t);
        }
        function Wi(e, t) {
          return Ui(4, 2, e, t);
        }
        function Qi(e, t) {
          return Ui(4, 4, e, t);
        }
        function $i(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ki(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ui(4, 4, $i.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Gi(e, t) {
          var n = ji();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = ji();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Il |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function es() {
          return ji().memoizedState;
        }
        function ts(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            os(t, n);
          else if (null !== (n = Oa(e, t, n, r))) {
            nu(n, e, r, eu()), as(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = tu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) os(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), sr(s, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), Ra(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Oa(e, t, o, r)) &&
              (nu(n, e, r, (o = eu())), as(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function os(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function as(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var is = {
            readContext: Na,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Na,
            useCallback: function (e, t) {
              return (Ni().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Na,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                qi(4194308, 4, $i.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return qi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return qi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ni();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ni();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ni().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (Ni().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ni().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = Ni();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ol)) throw Error(a(349));
                0 !== (30 & hi) || Li(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Hi(Ai.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Bi(9, Mi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ni(),
                t = Ol.identifierPrefix;
              if (aa) {
                var n = Jo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xo & ~(1 << (32 - it(Xo) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Na,
            useCallback: Gi,
            useContext: Na,
            useEffect: Vi,
            useImperativeHandle: Ki,
            useInsertionEffect: Wi,
            useLayoutEffect: Qi,
            useMemo: Xi,
            useReducer: Oi,
            useRef: Di,
            useState: function () {
              return Oi(Ri);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Ji(ji(), vi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Ri)[0], ji().memoizedState];
            },
            useMutableSource: _i,
            useSyncExternalStore: Pi,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Na,
            useCallback: Gi,
            useContext: Na,
            useEffect: Vi,
            useImperativeHandle: Ki,
            useInsertionEffect: Wi,
            useLayoutEffect: Qi,
            useMemo: Xi,
            useReducer: Ti,
            useRef: Di,
            useState: function () {
              return Ti(Ri);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = ji();
              return null === vi
                ? (t.memoizedState = e)
                : Ji(t, vi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Ri)[0], ji().memoizedState];
            },
            useMutableSource: _i,
            useSyncExternalStore: Pi,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += q(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function ds(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ps = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Ma(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vl || ((Vl = !0), (Wl = r)), fs(0, t);
            }),
            n
          );
        }
        function ms(e, t, n) {
          (n = Ma(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fs(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fs(0, t),
                  "function" !== typeof r &&
                    (null === Ql ? (Ql = new Set([this])) : Ql.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ps();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function ys(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gs(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ma(-1, 1)).tag = 2), Aa(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Ja(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function ks(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ca(t, o),
            (r = Ei(e, t, n, r, a, o)),
            (n = Ci()),
            null === e || ws
              ? (aa && n && ta(t), (t.flags |= 1), xs(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vs(e, t, o))
          );
        }
        function Ss(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Pu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Mu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Es(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return Vs(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Es(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Vs(e, t, o);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return js(e, t, n, r, o);
        }
        function Cs(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                jo(Ll, Pl),
                (Pl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  jo(Ll, Pl),
                  (Pl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                jo(Ll, Pl),
                (Pl |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              jo(Ll, Pl),
              (Pl |= r);
          return xs(e, t, o, n), t.child;
        }
        function Ns(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function js(e, t, n, r, o) {
          var a = Lo(n) ? _o : Oo.current;
          return (
            (a = Po(t, a)),
            Ca(t, o),
            (n = Ei(e, t, n, r, a, o)),
            (r = Ci()),
            null === e || ws
              ? (aa && r && ta(t), (t.flags |= 1), xs(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vs(e, t, o))
          );
        }
        function Rs(e, t, n, r, o) {
          if (Lo(n)) {
            var a = !0;
            zo(t);
          } else a = !1;
          if ((Ca(t, o), null === t.stateNode))
            Hs(e, t), Va(t, n, r), Qa(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              s = t.memoizedProps;
            i.props = s;
            var l = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Na(u))
              : (u = Po(t, (u = Lo(n) ? _o : Oo.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Wa(t, i, r, u)),
              (_a = !1);
            var f = t.memoizedState;
            (i.state = f),
              Fa(t, r, i, o),
              (l = t.memoizedState),
              s !== r || f !== l || To.current || _a
                ? ("function" === typeof c &&
                    (qa(t, n, c, r), (l = t.memoizedState)),
                  (s = _a || Ha(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = u),
                  (r = s))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              La(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ya(t.type, s)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Na(l))
                : (l = Po(t, (l = Lo(n) ? _o : Oo.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== d || f !== l) && Wa(t, i, r, l)),
              (_a = !1),
              (f = t.memoizedState),
              (i.state = f),
              Fa(t, r, i, o);
            var h = t.memoizedState;
            s !== d || f !== h || To.current || _a
              ? ("function" === typeof p &&
                  (qa(t, n, p, r), (h = t.memoizedState)),
                (u = _a || Ha(t, n, u, r, f, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Os(e, t, n, r, a, o);
        }
        function Os(e, t, n, r, o, a) {
          Ns(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Fo(t, n, !1), Vs(e, t, a);
          (r = t.stateNode), (bs.current = t);
          var s =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, s, a)))
              : xs(e, t, s, a),
            (t.memoizedState = r.state),
            o && Fo(t, n, !0),
            t.child
          );
        }
        function Ts(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ao(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ao(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function _s(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Ps,
          Ls,
          Ms,
          As = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Is(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function zs(e, t, n) {
          var r,
            o = t.pendingProps,
            i = li.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            jo(li, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Iu(l, o, 0, null)),
                      (e = Au(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Is(n)),
                      (t.memoizedState = As),
                      e)
                    : Fs(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bs(e, t, s, (r = ds(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Iu(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = Au(i, o, s, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, s),
                    (t.child.memoizedState = Is(s)),
                    (t.memoizedState = As),
                    i);
              if (0 === (1 & t.mode)) return Bs(e, t, s, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Bs(e, t, s, (r = ds((i = Error(a(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), ws || l)) {
                if (null !== (r = Ol)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | s)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Ta(e, o), nu(r, e, o, -1));
                }
                return mu(), Bs(e, t, s, (r = ds(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ju.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Ko[Yo++] = Xo),
                    (Ko[Yo++] = Jo),
                    (Ko[Yo++] = Go),
                    (Xo = e.id),
                    (Jo = e.overflow),
                    (Go = t)),
                  (t = Fs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, o, r, i, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (s = Lu(r, s))
                : ((s = Au(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Is(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = As),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Lu(s, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Fs(e, t) {
          return (
            ((t = Iu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bs(e, t, n, r) {
          return (
            null !== r && ma(r),
            Xa(t, e.child, null, n),
            ((e = Fs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ds(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ea(e.return, t, n);
        }
        function qs(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Us(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = li.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ds(e, n, t);
                else if (19 === e.tag) Ds(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((jo(li, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  qs(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ui(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                qs(t, !0, n, null, a);
                break;
              case "together":
                qs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Il |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ws(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function $s(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qs(t), null;
            case 1:
            case 17:
              return Lo(t.type) && Mo(), Qs(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                No(To),
                No(Oo),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (iu(ia), (ia = null)))),
                Qs(t),
                null
              );
            case 5:
              si(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ls(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Qs(t), null;
                }
                if (((e = ri(ei.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Ar.length; o++) Br(Ar[o], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      G(r, i), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Br("invalid", r);
                  }
                  for (var l in (ge(n, i), (o = null), i))
                    if (i.hasOwnProperty(l)) {
                      var u = i[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Ps(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Ar.length; o++) Br(Ar[o], e);
                        o = r;
                        break;
                      case "source":
                        Br("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (o = r);
                        break;
                      case "details":
                        Br("toggle", e), (o = r);
                        break;
                      case "input":
                        G(e, r), (o = Y(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = z({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Br("invalid", e);
                    }
                    for (i in (ge(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Br("scroll", e)
                              : null != c && b(e, i, c, l));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qs(t), null;
            case 6:
              if (e && null != t.stateNode) Ms(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Qs(t), null;
            case 13:
              if (
                (No(li),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qs(t), (i = !1);
                } else null !== ia && (iu(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & li.current)
                        ? 0 === Ml && (Ml = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qs(t),
                  null);
            case 4:
              return (
                ai(), null === e && Ur(t.stateNode.containerInfo), Qs(t), null
              );
            case 10:
              return Sa(t.type._context), Qs(t), null;
            case 19:
              if ((No(li), null === (i = t.memoizedState))) return Qs(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) Ws(i, !1);
                else {
                  if (0 !== Ml || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ui(e))) {
                        for (
                          t.flags |= 128,
                            Ws(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return jo(li, (1 & li.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Ul &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ws(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ws(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !aa)
                    )
                      return Qs(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Ul &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ws(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = li.current),
                  jo(li, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qs(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Pl) &&
                    (Qs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ks(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Lo(t.type) && Mo(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                No(To),
                No(Oo),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return si(t), null;
            case 13:
              if (
                (No(li),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return No(li), null;
            case 4:
              return ai(), null;
            case 10:
              return Sa(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ps = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ls = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = Y(e, o)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (o = z({}, o, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ge(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var l = o[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Br("scroll", e),
                            i || l === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ms = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ys = !1,
          Gs = !1,
          Xs = "function" === typeof WeakSet ? WeakSet : Set,
          Js = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && el(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ol(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function al(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[vo],
              delete t[yo],
              delete t[go]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function il(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || il(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var cl = null,
          dl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) pl(e, t, n), (n = n.sibling);
        }
        function pl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Gs || Zs(n, t);
            case 6:
              var r = cl,
                o = dl;
              (cl = null),
                fl(e, t, n),
                (dl = o),
                null !== (cl = r) &&
                  (dl
                    ? ((e = cl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cl.removeChild(n.stateNode));
              break;
            case 18:
              null !== cl &&
                (dl
                  ? ((e = cl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    Ut(e))
                  : lo(cl, n.stateNode));
              break;
            case 4:
              (r = cl),
                (o = dl),
                (cl = n.stateNode.containerInfo),
                (dl = !0),
                fl(e, t, n),
                (cl = r),
                (dl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      el(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !Gs &&
                (Zs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Eu(n, t, s);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gs = (r = Gs) || null !== n.memoizedState),
                  fl(e, t, n),
                  (Gs = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function hl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xs()),
              t.forEach(function (t) {
                var r = Ru.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (cl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (cl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === cl) throw Error(a(160));
                pl(i, s, o), (cl = null), (dl = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Eu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vl(t, e), (t = t.sibling);
        }
        function vl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), yl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (v) {
                  Eu(e, e.return, v);
                }
                try {
                  nl(5, e, e.return);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 1:
              ml(t, e), yl(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                yl(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, "");
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(o, i),
                      be(l, s);
                    var c = be(l, i);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ve(o, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(o, f)
                        : "children" === d
                        ? fe(o, f)
                        : b(o, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        J(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (v) {
                    Eu(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              break;
            case 4:
            default:
              ml(t, e), yl(e);
              break;
            case 13:
              ml(t, e),
                yl(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (ql = Xe())),
                4 & r && hl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gs = (c = Gs) || d), ml(t, e), (Gs = c))
                  : ml(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Js = e, d = e.child; null !== d; ) {
                    for (f = Js = d; null !== Js; ) {
                      switch (((h = (p = Js).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, p, p.return);
                          break;
                        case 1:
                          Zs(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Eu(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zs(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xl(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Js = h)) : xl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), yl(e), 4 & r && hl(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (il(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), (r.flags &= -33)),
                    ul(e, sl(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ll(e, sl(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gl(e, t, n) {
          (Js = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Js; ) {
            var o = Js,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Ys;
              if (!i) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Gs;
                s = Ys;
                var u = Gs;
                if (((Ys = i), (Gs = l) && !u))
                  for (Js = o; null !== Js; )
                    (l = (i = Js).child),
                      22 === i.tag && null !== i.memoizedState
                        ? kl(o)
                        : null !== l
                        ? ((l.return = i), (Js = l))
                        : kl(o);
                for (; null !== a; ) (Js = a), bl(a, t, n), (a = a.sibling);
                (Js = o), (Ys = s), (Gs = u);
              }
              wl(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Js = a))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gs)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ya(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ba(t, i, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ba(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Gs || (512 & t.flags && ol(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Js = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function xl(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (t === e) {
              Js = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function kl(e) {
          for (; null !== Js; ) {
            var t = Js;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, o, l);
                    }
                  }
                  var a = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Eu(t, a, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Eu(t, i, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              Js = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Js = s);
              break;
            }
            Js = t.return;
          }
        }
        var Sl,
          El = Math.ceil,
          Cl = w.ReactCurrentDispatcher,
          Nl = w.ReactCurrentOwner,
          jl = w.ReactCurrentBatchConfig,
          Rl = 0,
          Ol = null,
          Tl = null,
          _l = 0,
          Pl = 0,
          Ll = Co(0),
          Ml = 0,
          Al = null,
          Il = 0,
          zl = 0,
          Fl = 0,
          Bl = null,
          Dl = null,
          ql = 0,
          Ul = 1 / 0,
          Hl = null,
          Vl = !1,
          Wl = null,
          Ql = null,
          $l = !1,
          Kl = null,
          Yl = 0,
          Gl = 0,
          Xl = null,
          Jl = -1,
          Zl = 0;
        function eu() {
          return 0 !== (6 & Rl) ? Xe() : -1 !== Jl ? Jl : (Jl = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Rl) && 0 !== _l
            ? _l & -_l
            : null !== va.transition
            ? (0 === Zl && (Zl = mt()), Zl)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Gl) throw ((Gl = 0), (Xl = null), Error(a(185)));
          yt(e, n, r),
            (0 !== (2 & Rl) && e === Ol) ||
              (e === Ol && (0 === (2 & Rl) && (zl |= n), 4 === Ml && su(e, _l)),
              ru(e, r),
              1 === n &&
                0 === Rl &&
                0 === (1 & t.mode) &&
                ((Ul = Xe() + 500), Do && Ho()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                s = 1 << i,
                l = o[i];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (o[i] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Ol ? _l : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Do = !0), Uo(e);
                  })(lu.bind(null, e))
                : Uo(lu.bind(null, e)),
                io(function () {
                  0 === (6 & Rl) && Ho();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if (((Jl = -1), (Zl = 0), 0 !== (6 & Rl))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ol ? _l : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var o = Rl;
            Rl |= 2;
            var i = hu();
            for (
              (Ol === e && _l === t) ||
              ((Hl = null), (Ul = Xe() + 500), fu(e, t));
              ;

            )
              try {
                gu();
                break;
              } catch (l) {
                pu(e, l);
              }
            ka(),
              (Cl.current = i),
              (Rl = o),
              null !== Tl ? (t = 0) : ((Ol = null), (_l = 0), (t = Ml));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = au(e, o))),
              1 === t)
            )
              throw ((n = Al), fu(e, 0), su(e, r), ru(e, Xe()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(a(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = au(e, i))),
                  1 === t))
              )
                throw ((n = Al), fu(e, 0), su(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  xu(e, Dl, Hl);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = ql + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(xu.bind(null, e, Dl, Hl), t);
                    break;
                  }
                  xu(e, Dl, Hl);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - it(r);
                    (i = 1 << s), (s = t[s]) > o && (o = s), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(xu.bind(null, e, Dl, Hl), r);
                    break;
                  }
                  xu(e, Dl, Hl);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Bl;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Dl), (Dl = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Dl ? (Dl = e) : Dl.push.apply(Dl, e);
        }
        function su(e, t) {
          for (
            t &= ~Fl,
              t &= ~zl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lu(e) {
          if (0 !== (6 & Rl)) throw Error(a(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Al), fu(e, 0), su(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, Dl, Hl),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = Rl;
          Rl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rl = n) && ((Ul = Xe() + 500), Do && Ho());
          }
        }
        function cu(e) {
          null !== Kl && 0 === Kl.tag && 0 === (6 & Rl) && ku();
          var t = Rl;
          Rl |= 1;
          var n = jl.transition,
            r = bt;
          try {
            if (((jl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (jl.transition = n), 0 === (6 & (Rl = t)) && Ho();
          }
        }
        function du() {
          (Pl = Ll.current), No(Ll);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Mo();
                  break;
                case 3:
                  ai(), No(To), No(Oo), di();
                  break;
                case 5:
                  si(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  No(li);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ol = e),
            (Tl = e = Lu(e.current, null)),
            (_l = Pl = t),
            (Ml = 0),
            (Al = null),
            (Fl = zl = Il = 0),
            (Dl = Bl = null),
            null !== ja)
          ) {
            for (t = 0; t < ja.length; t++)
              if (null !== (r = (n = ja[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            ja = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((ka(), (fi.current = is), gi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = vi = mi = null),
                (bi = !1),
                (wi = 0),
                (Nl.current = null),
                null === n || null === n.return)
              ) {
                (Ml = 1), (Al = t), (Tl = null);
                break;
              }
              e: {
                var i = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = _l),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = ys(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      gs(h, s, l, 0, t),
                      1 & h.mode && vs(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vs(i, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & l.mode) {
                  var y = ys(s);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gs(y, s, l, 0, t),
                      ma(cs(u, l));
                    break e;
                  }
                }
                (i = u = cs(u, l)),
                  4 !== Ml && (Ml = 2),
                  null === Bl ? (Bl = [i]) : Bl.push(i),
                  (i = s);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        za(i, hs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ql || !Ql.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          za(i, ms(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (w) {
              (t = w), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cl.current;
          return (Cl.current = is), null === e ? is : e;
        }
        function mu() {
          (0 !== Ml && 3 !== Ml && 2 !== Ml) || (Ml = 4),
            null === Ol ||
              (0 === (268435455 & Il) && 0 === (268435455 & zl)) ||
              su(Ol, _l);
        }
        function vu(e, t) {
          var n = Rl;
          Rl |= 2;
          var r = hu();
          for ((Ol === e && _l === t) || ((Hl = null), fu(e, t)); ; )
            try {
              yu();
              break;
            } catch (o) {
              pu(e, o);
            }
          if ((ka(), (Rl = n), (Cl.current = r), null !== Tl))
            throw Error(a(261));
          return (Ol = null), (_l = 0), Ml;
        }
        function yu() {
          for (; null !== Tl; ) bu(Tl);
        }
        function gu() {
          for (; null !== Tl && !Ye(); ) bu(Tl);
        }
        function bu(e) {
          var t = Sl(e.alternate, e, Pl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Tl = t),
            (Nl.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = $s(n, t, Pl))) return void (Tl = n);
            } else {
              if (null !== (n = Ks(n, t)))
                return (n.flags &= 32767), void (Tl = n);
              if (null === e) return (Ml = 6), void (Tl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === Ml && (Ml = 5);
        }
        function xu(e, t, n) {
          var r = bt,
            o = jl.transition;
          try {
            (jl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Kl);
                if (0 !== (6 & Rl)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Ol && ((Tl = Ol = null), (_l = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    $l ||
                    (($l = !0),
                    Ou(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = jl.transition), (jl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Rl;
                  (Rl |= 4),
                    (Nl.current = null),
                    (function (e, t) {
                      if (((eo = Vt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (l = s + o),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === o && (l = s),
                                    p === i && ++d === r && (u = s),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Js = t;
                        null !== Js;

                      )
                        if (
                          ((e = (t = Js).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Js = e);
                        else
                          for (; null !== Js; ) {
                            t = Js;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        y = m.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : ya(t.type, v),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (x) {
                              Eu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Js = e);
                              break;
                            }
                            Js = t.return;
                          }
                      (m = tl), (tl = !1);
                    })(e, n),
                    vl(n, e),
                    hr(to),
                    (Vt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    gl(n, e, o),
                    Ge(),
                    (Rl = l),
                    (bt = s),
                    (jl.transition = i);
                } else e.current = n;
                if (
                  ($l && (($l = !1), (Kl = e), (Yl = o)),
                  (i = e.pendingLanes),
                  0 === i && (Ql = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Vl) throw ((Vl = !1), (e = Wl), (Wl = null), e);
                0 !== (1 & Yl) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xl
                      ? Gl++
                      : ((Gl = 0), (Xl = e))
                    : (Gl = 0),
                  Ho();
              })(e, t, n, r);
          } finally {
            (jl.transition = o), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Kl) {
            var e = wt(Yl),
              t = jl.transition,
              n = bt;
            try {
              if (((jl.transition = null), (bt = 16 > e ? 16 : e), null === Kl))
                var r = !1;
              else {
                if (((e = Kl), (Kl = null), (Yl = 0), 0 !== (6 & Rl)))
                  throw Error(a(331));
                var o = Rl;
                for (Rl |= 4, Js = e.current; null !== Js; ) {
                  var i = Js,
                    s = i.child;
                  if (0 !== (16 & Js.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Js = c; null !== Js; ) {
                          var d = Js;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Js = f);
                          else
                            for (; null !== Js; ) {
                              var p = (d = Js).sibling,
                                h = d.return;
                              if ((al(d), d === c)) {
                                Js = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Js = p);
                                break;
                              }
                              Js = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var y = v.sibling;
                            (v.sibling = null), (v = y);
                          } while (null !== v);
                        }
                      }
                      Js = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Js = s);
                  else
                    e: for (; null !== Js; ) {
                      if (0 !== (2048 & (i = Js).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Js = g);
                        break e;
                      }
                      Js = i.return;
                    }
                }
                var b = e.current;
                for (Js = b; null !== Js; ) {
                  var w = (s = Js).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Js = w);
                  else
                    e: for (s = b; null !== Js; ) {
                      if (0 !== (2048 & (l = Js).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (k) {
                          Eu(l, l.return, k);
                        }
                      if (l === s) {
                        Js = null;
                        break e;
                      }
                      var x = l.sibling;
                      if (null !== x) {
                        (x.return = l.return), (Js = x);
                        break e;
                      }
                      Js = l.return;
                    }
                }
                if (
                  ((Rl = o),
                  Ho(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (jl.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Aa(e, (t = hs(0, (t = cs(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (yt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ql || !Ql.has(r)))
                ) {
                  (t = Aa(t, (e = ms(t, (e = cs(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (yt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ol === e &&
              (_l & n) === n &&
              (4 === Ml ||
              (3 === Ml && (130023424 & _l) === _l && 500 > Xe() - ql)
                ? fu(e, 0)
                : (Fl |= n)),
            ru(e, t);
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ta(e, t)) && (yt(e, t, n), ru(e, n));
        }
        function ju(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nu(e, n);
        }
        function Ru(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Nu(e, n);
        }
        function Ou(e, t) {
          return $e(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function _u(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function Pu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = _u(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Mu(e, t, n, r, o, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Pu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Au(n.children, o, i, t);
              case E:
                (s = 8), (o |= 8);
                break;
              case C:
                return (
                  ((e = _u(12, n, t, 2 | o)).elementType = C), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = _u(13, n, t, o)).elementType = O), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = _u(19, n, t, o)).elementType = T), (e.lanes = i), e
                );
              case L:
                return Iu(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      s = 10;
                      break e;
                    case j:
                      s = 9;
                      break e;
                    case R:
                      s = 11;
                      break e;
                    case _:
                      s = 14;
                      break e;
                    case P:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = _u(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = _u(7, e, r, t)).lanes = n), e;
        }
        function Iu(e, t, n, r) {
          return (
            ((e = _u(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zu(e, t, n) {
          return ((e = _u(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = _u(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Du(e, t, n, r, o, a, i, s, l) {
          return (
            (e = new Bu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = _u(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Pa(a),
            e
          );
        }
        function qu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Uu(e) {
          if (!e) return Ro;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Lo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Lo(n)) return Io(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, o, a, i, s, l) {
          return (
            ((e = Du(n, r, !0, e, 0, a, 0, s, l)).context = Uu(null)),
            (n = e.current),
            ((a = Ma((r = eu()), (o = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Aa(n, a, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ru(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var o = t.current,
            a = eu(),
            i = tu(o);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ma(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Aa(o, t, i)) && (nu(e, o, i, a), Ia(e, o, i)),
            i
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        Sl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || To.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ts(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Lo(t.type) && zo(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        jo(ga, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (jo(li, 1 & li.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? zs(e, t, n)
                            : (jo(li, 1 & li.current),
                              null !== (e = Vs(e, t, n)) ? e.sibling : null);
                        jo(li, 1 & li.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Us(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          jo(li, li.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cs(e, t, n);
                    }
                    return Vs(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), aa && 0 !== (1048576 & t.flags) && ea(t, $o, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hs(e, t), (e = t.pendingProps);
              var o = Po(t, Oo.current);
              Ca(t, n), (o = Ei(null, t, r, e, o, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Lo(r) ? ((i = !0), zo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Pa(t),
                    (o.updater = Ua),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Qa(t, r, e, n),
                    (t = Os(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    xs(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hs(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Pu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === _) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ya(r, e)),
                  o)
                ) {
                  case 0:
                    t = js(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Rs(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ss(null, t, r, ya(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                js(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Rs(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 3:
              e: {
                if ((Ts(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  La(e, t),
                  Fa(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = _s(e, t, r, n, (o = cs(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = _s(e, t, r, n, (o = cs(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Ja(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Vs(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(r, o)
                  ? (s = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                Ns(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return zs(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ks(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (s = o.value),
                  jo(ga, r._currentValue),
                  (r._currentValue = s),
                  null !== i)
                )
                  if (sr(i.value, s)) {
                    if (i.children === o.children && !To.current) {
                      t = Vs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        s = i.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ma(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ea(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Ea(s, n, t),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                xs(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ca(t, n),
                (r = r((o = Na(o)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = ya((r = t.type), t.pendingProps)),
                Ss(e, t, r, (o = ya(r.type, o)), n)
              );
            case 15:
              return Es(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ya(r, o)),
                Hs(e, t),
                (t.tag = 1),
                Lo(r) ? ((e = !0), zo(t)) : (e = !1),
                Ca(t, n),
                Va(t, r, o),
                Qa(t, r, o, n),
                Os(null, t, r, !0, e, n)
              );
            case 19:
              return Us(e, t, n);
            case 22:
              return Cs(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = Wu(i);
                s.call(e);
              };
            }
            Vu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Wu(i);
                    a.call(e);
                  };
                }
                var i = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Wu(l);
                  s.call(e);
                };
              }
              var l = Du(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = l),
                (e[mo] = l.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Vu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Wu(i);
        }
        (Gu.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vu(e, t, null, null);
          }),
          (Gu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Vu(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Gu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && zt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    ru(t, Xe()),
                    0 === (6 & Rl) && ((Ul = Xe() + 500), Ho()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ta(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ta(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ta(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      $(r), J(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Re = uu),
          (Oe = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, xo, ko, Ne, je, uu],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(a(200));
            return qu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Du(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              s = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, o, 0, i, s)),
              (e[mo] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Gu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      565: function (e, t, n) {
        "use strict";
        var r = n(181);
        (t.s = r.createRoot), r.hydrateRoot;
      },
      181: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(576));
      },
      183: function (e, t, n) {
        "use strict";
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          a = n(102),
          i = l(a),
          s = l(n(925));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        var d = "____GITHUB_CORNER_SUPER_SECRET___",
          f = (0, s.default)(),
          p = (function (e) {
            function t() {
              return (
                u(this, t),
                c(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              o(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (!document.getElementById(d)) {
                      var e =
                          document.head ||
                          document.getElementsByTagName("head")[0],
                        t = document.createElement("style");
                      (t.type = "text/css"),
                        (t.id = d),
                        t.styleSheet
                          ? (t.styleSheet.cssText = f)
                          : t.appendChild(document.createTextNode(f)),
                        e.appendChild(t);
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.href,
                      n = e.size,
                      o = e.direction,
                      a = e.octoColor,
                      s = e.bannerColor,
                      l = e.ariaLabel,
                      u = e.className,
                      c = e.svgStyle,
                      d = (function (e, t) {
                        var n = {};
                        for (var r in e)
                          t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                              (n[r] = e[r]));
                        return n;
                      })(e, [
                        "href",
                        "size",
                        "direction",
                        "octoColor",
                        "bannerColor",
                        "ariaLabel",
                        "className",
                        "svgStyle",
                      ]),
                      f = { position: "absolute", top: 0, fill: a },
                      p = {},
                      h = "",
                      m = "",
                      v = "";
                    "left" === o
                      ? ((h = "M250 0L135 115h-15l-12 27L0 250V0z"),
                        (m =
                          "M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16"),
                        (v =
                          "M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z"),
                        (f.left = 0),
                        (p.WebkitTransformOrigin = "120px 144px"),
                        (p.transformOrigin = "120px 144px"))
                      : ((h = "M0 0l115 115h15l12 27 108 108V0z"),
                        (m =
                          "M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"),
                        (v =
                          "M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"),
                        (f.right = 0),
                        (p.WebkitTransformOrigin = "130px 106px"),
                        (p.transformOrigin = "130px 106px"));
                    var y = "string" === typeof u ? " " + u : "";
                    return i.default.createElement(
                      "a",
                      r({}, d, {
                        href: t,
                        className: "github-corner" + y,
                        "aria-label": l,
                      }),
                      i.default.createElement(
                        "svg",
                        {
                          width: n,
                          height: n,
                          viewBox: "0 0 250 250",
                          style: r({}, f, c),
                        },
                        i.default.createElement("path", {
                          className: "octo-banner",
                          d: h,
                          fill: s,
                        }),
                        i.default.createElement("path", {
                          className: "octo-arm",
                          d: m,
                          style: p,
                        }),
                        i.default.createElement("path", {
                          className: "octo-body",
                          d: v,
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(a.Component);
        (p.defaultProps = {
          href: "/",
          size: 80,
          direction: "right",
          octoColor: "#fff",
          bannerColor: "#151513",
          ariaLabel: "Open GitHub project",
        }),
          (t.Z = p);
      },
      925: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            return "\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n";
          });
      },
      986: function (e, t, n) {
        "use strict";
        var r = n(102);
        var o =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          a = r.useState,
          i = r.useEffect,
          s = r.useLayoutEffect,
          l = r.useDebugValue;
        function u(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !o(e, n);
          } catch (r) {
            return !0;
          }
        }
        var c =
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = a({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  c = r[1];
                return (
                  s(
                    function () {
                      (o.value = n),
                        (o.getSnapshot = t),
                        u(o) && c({ inst: o });
                    },
                    [e, n, t]
                  ),
                  i(
                    function () {
                      return (
                        u(o) && c({ inst: o }),
                        e(function () {
                          u(o) && c({ inst: o });
                        })
                      );
                    },
                    [e]
                  ),
                  l(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
      },
      299: function (e, t, n) {
        "use strict";
        var r = n(102),
          o = n(294);
        var a =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          i = o.useSyncExternalStore,
          s = r.useRef,
          l = r.useEffect,
          u = r.useMemo,
          c = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
          var d = s(null);
          if (null === d.current) {
            var f = { hasValue: !1, value: null };
            d.current = f;
          } else f = d.current;
          d = u(
            function () {
              function e(e) {
                if (!l) {
                  if (
                    ((l = !0), (i = e), (e = r(e)), void 0 !== o && f.hasValue)
                  ) {
                    var t = f.value;
                    if (o(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), a(i, e))) return t;
                var n = r(e);
                return void 0 !== o && o(t, n) ? t : ((i = e), (s = n));
              }
              var i,
                s,
                l = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, n, r, o]
          );
          var p = i(e, d[0], d[1]);
          return (
            l(
              function () {
                (f.hasValue = !0), (f.value = p);
              },
              [p]
            ),
            c(p),
            p
          );
        };
      },
      294: function (e, t, n) {
        "use strict";
        e.exports = n(986);
      },
      393: function (e, t, n) {
        "use strict";
        e.exports = n(299);
      },
      39: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ("string" === a || "number" === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = o.apply(null, n);
                    i && e.push(i);
                  }
                } else if ("object" === a) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var s in n) r.call(n, s) && n[s] && e.push(s);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      705: function (e, t, n) {
        "use strict";
        var r = n(615),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          s = {};
        function l(e) {
          return r.isMemo(e) ? i : s[e.$$typeof] || o;
        }
        (s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (s[r.Memo] = i);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r);
            }
            var i = c(n);
            d && (i = i.concat(d(n)));
            for (var s = l(t), m = l(n), v = 0; v < i.length; ++v) {
              var y = i[v];
              if (!a[y] && (!r || !r[y]) && (!m || !m[y]) && (!s || !s[y])) {
                var g = f(n, y);
                try {
                  u(t, y, g);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      138: function (e) {
        e.exports = function (e, t, n, r) {
          var o = new Blob("undefined" !== typeof r ? [r, e] : [e], {
            type: n || "application/octet-stream",
          });
          if ("undefined" !== typeof window.navigator.msSaveBlob)
            window.navigator.msSaveBlob(o, t);
          else {
            var a =
                window.URL && window.URL.createObjectURL
                  ? window.URL.createObjectURL(o)
                  : window.webkitURL.createObjectURL(o),
              i = document.createElement("a");
            (i.style.display = "none"),
              (i.href = a),
              i.setAttribute("download", t),
              "undefined" === typeof i.download &&
                i.setAttribute("target", "_blank"),
              document.body.appendChild(i),
              i.click(),
              setTimeout(function () {
                document.body.removeChild(i), window.URL.revokeObjectURL(a);
              }, 200);
          }
        };
      },
      976: function (e, t, n) {
        "use strict";
        var r = n(938);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, a, i) {
              if (i !== r) {
                var s = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      608: function (e, t, n) {
        e.exports = n(976)();
      },
      938: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      602: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          s = n ? Symbol.for("react.profiler") : 60114,
          l = n ? Symbol.for("react.provider") : 60109,
          u = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          v = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          g = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function x(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case a:
                  case s:
                  case i:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case f:
                      case v:
                      case m:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function k(e) {
          return x(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = u),
          (t.ContextProvider = l),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = a),
          (t.Lazy = v),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = s),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || x(e) === c;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return x(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return x(e) === l;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return x(e) === f;
          }),
          (t.isFragment = function (e) {
            return x(e) === a;
          }),
          (t.isLazy = function (e) {
            return x(e) === v;
          }),
          (t.isMemo = function (e) {
            return x(e) === m;
          }),
          (t.isPortal = function (e) {
            return x(e) === o;
          }),
          (t.isProfiler = function (e) {
            return x(e) === s;
          }),
          (t.isStrictMode = function (e) {
            return x(e) === i;
          }),
          (t.isSuspense = function (e) {
            return x(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === a ||
              e === d ||
              e === s ||
              e === i ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === m ||
                  e.$$typeof === l ||
                  e.$$typeof === u ||
                  e.$$typeof === f ||
                  e.$$typeof === g ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = x);
      },
      615: function (e, t, n) {
        "use strict";
        e.exports = n(602);
      },
      999: function (e, t) {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.server_context"),
          d = Symbol.for("react.forward_ref"),
          f = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          h = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          v = Symbol.for("react.offscreen");
        function y(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case a:
                  case s:
                  case i:
                  case f:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case u:
                      case d:
                      case m:
                      case h:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        (n = Symbol.for("react.module.reference")),
          (t.isContextConsumer = function (e) {
            return y(e) === u;
          });
      },
      451: function (e, t, n) {
        "use strict";
        e.exports = n(999);
      },
      756: function (e, t, n) {
        "use strict";
        var r = n(102),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      629: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var o,
            a = {},
            i = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === a[o] && (a[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: s,
            props: a,
            _owner: S.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var j = /\/+/g;
        function R(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, o, a, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === a ? "." + R(l, 0) : a),
              x(i)
                ? ((o = ""),
                  null != e && (o = e.replace(j, "$&/") + "/"),
                  O(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(j, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + R((s = e[u]), u);
              l += O(s, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += O((s = s.value), t, o, (c = a + R(s, u++)), i);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function _(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          L = { transition: null },
          M = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: _,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      102: function (e, t, n) {
        "use strict";
        e.exports = n(629);
      },
      301: function (e, t, n) {
        "use strict";
        e.exports = n(756);
      },
      142: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < o && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(k);
            else {
              var t = r(c);
              null !== t && M(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), g(N), (N = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !O()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var s = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && o(u),
                  w(n);
              } else o(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              null !== d && M(x, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          N = -1,
          j = 5,
          R = -1;
        function O() {
          return !(t.unstable_now() - R < j);
        }
        function T() {
          if (null !== C) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var _ = new MessageChannel(),
            P = _.port2;
          (_.port1.onmessage = T),
            (S = function () {
              P.postMessage(null);
            });
        } else
          S = function () {
            y(T, 0);
          };
        function L(e) {
          (C = e), E || ((E = !0), S());
        }
        function M(e, n) {
          N = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (j = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (g(N), (N = -1)) : (v = !0), M(x, a - i)))
                : ((e.sortIndex = s), n(u, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      153: function (e, t, n) {
        "use strict";
        e.exports = n(142);
      },
      514: function (e) {
        "use strict";
        var t = function () {};
        e.exports = t;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & o && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(a, i),
          a
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = globalThis.QUIZ_MATE_ASSETS_URL + "/"),
    (function () {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          Decoder: function () {
            return rs;
          },
          Encoder: function () {
            return ns;
          },
          PacketType: function () {
            return es;
          },
          protocol: function () {
            return ts;
          },
        });
      var t = n(565),
        r = n(294),
        o = n(393),
        a = n(181);
      var i = function (e) {
          e();
        },
        s = function () {
          return i;
        },
        l = n(102),
        u = n.t(l, 2),
        c = (0, l.createContext)(null);
      var d = function () {
        throw new Error("uSES not initialized!");
      };
      function f(e) {
        if (Array.isArray(e)) return e;
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e, t) {
        if (e) {
          if ("string" === typeof e) return p(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? p(e, t)
              : void 0
          );
        }
      }
      function m() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function v(e, t) {
        return (
          f(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = a.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (c) {
                (u = !0), (o = c);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          h(e, t) ||
          m()
        );
      }
      function y(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function g(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return p(e);
          })(e) ||
          y(e) ||
          h(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          b.apply(this, arguments)
        );
      }
      function w(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var x = n(705),
        k = n.n(x),
        S = n(451),
        E = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
      function C(e, t, n, r, o) {
        var a,
          i,
          s,
          l,
          u,
          c = o.areStatesEqual,
          d = o.areOwnPropsEqual,
          f = o.areStatePropsEqual,
          p = !1;
        function h(o, p) {
          var h = !d(p, i),
            m = !c(o, a, p, i);
          return (
            (a = o),
            (i = p),
            h && m
              ? ((s = e(a, i)),
                t.dependsOnOwnProps && (l = t(r, i)),
                (u = n(s, l, i)))
              : h
              ? (e.dependsOnOwnProps && (s = e(a, i)),
                t.dependsOnOwnProps && (l = t(r, i)),
                (u = n(s, l, i)))
              : m
              ? (function () {
                  var t = e(a, i),
                    r = !f(t, s);
                  return (s = t), r && (u = n(s, l, i)), u;
                })()
              : u
          );
        }
        return function (o, c) {
          return p
            ? h(o, c)
            : ((s = e((a = o), (i = c))),
              (l = t(r, i)),
              (u = n(s, l, i)),
              (p = !0),
              u);
        };
      }
      function N(e, t) {
        var n = t.initMapStateToProps,
          r = t.initMapDispatchToProps,
          o = t.initMergeProps,
          a = w(t, E);
        return C(n(e, a), r(e, a), o(e, a), e, a);
      }
      function j(e) {
        return function (t) {
          var n = e(t);
          function r() {
            return n;
          }
          return (r.dependsOnOwnProps = !1), r;
        };
      }
      function R(e) {
        return e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function O(e, t) {
        return function (t, n) {
          n.displayName;
          var r = function (e, t) {
            return r.dependsOnOwnProps
              ? r.mapToProps(e, t)
              : r.mapToProps(e, void 0);
          };
          return (
            (r.dependsOnOwnProps = !0),
            (r.mapToProps = function (t, n) {
              (r.mapToProps = e), (r.dependsOnOwnProps = R(e));
              var o = r(t, n);
              return (
                "function" === typeof o &&
                  ((r.mapToProps = o),
                  (r.dependsOnOwnProps = R(o)),
                  (o = r(t, n))),
                o
              );
            }),
            r
          );
        };
      }
      function T(e, t) {
        return function (n, r) {
          throw new Error(
            "Invalid value of type "
              .concat(typeof e, " for ")
              .concat(t, " argument when connecting component ")
              .concat(r.wrappedComponentName, ".")
          );
        };
      }
      function _(e) {
        return e && "object" === typeof e
          ? j(function (t) {
              return (function (e, t) {
                var n = {},
                  r = function () {
                    var r = e[o];
                    "function" === typeof r &&
                      (n[o] = function () {
                        return t(r.apply(void 0, arguments));
                      });
                  };
                for (var o in e) r();
                return n;
              })(e, t);
            })
          : e
          ? "function" === typeof e
            ? O(e)
            : T(e, "mapDispatchToProps")
          : j(function (e) {
              return { dispatch: e };
            });
      }
      function P(e) {
        return e
          ? "function" === typeof e
            ? O(e)
            : T(e, "mapStateToProps")
          : j(function () {
              return {};
            });
      }
      function L(e, t, n) {
        return b({}, n, e, t);
      }
      function M(e) {
        return e
          ? "function" === typeof e
            ? (function (e) {
                return function (t, n) {
                  n.displayName;
                  var r,
                    o = n.areMergedPropsEqual,
                    a = !1;
                  return function (t, n, i) {
                    var s = e(t, n, i);
                    return a ? o(s, r) || (r = s) : ((a = !0), (r = s)), r;
                  };
                };
              })(e)
            : T(e, "mergeProps")
          : function () {
              return L;
            };
      }
      var A = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function I(e, t) {
        var n,
          r = A;
        function o() {
          i.onStateChange && i.onStateChange();
        }
        function a() {
          n ||
            ((n = t ? t.addNestedSub(o) : e.subscribe(o)),
            (r = (function () {
              var e = s(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    o = (n = { callback: e, next: null, prev: n });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        o.next ? (o.next.prev = o.prev) : (n = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }
        var i = {
          addNestedSub: function (e) {
            return a(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: a,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = A));
          },
          getListeners: function () {
            return r;
          },
        };
        return i;
      }
      var z = !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      )
        ? l.useLayoutEffect
        : l.useEffect;
      function F(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e === 1 / t
          : e !== e && t !== t;
      }
      function B(e, t) {
        if (F(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++)
          if (
            !Object.prototype.hasOwnProperty.call(t, n[o]) ||
            !F(e[n[o]], t[n[o]])
          )
            return !1;
        return !0;
      }
      var D = ["reactReduxForwardedRef"],
        q = d,
        U = [null, null];
      function H(e, t, n) {
        z(function () {
          return e.apply(void 0, g(t));
        }, n);
      }
      function V(e, t, n, r, o, a) {
        (e.current = r),
          (n.current = !1),
          o.current && ((o.current = null), a());
      }
      function W(e, t, n, r, o, a, i, s, l, u, c) {
        if (!e) return function () {};
        var d = !1,
          f = null,
          p = function () {
            if (!d && s.current) {
              var e,
                n,
                p = t.getState();
              try {
                e = r(p, o.current);
              } catch (h) {
                (n = h), (f = h);
              }
              n || (f = null),
                e === a.current
                  ? i.current || u()
                  : ((a.current = e), (l.current = e), (i.current = !0), c());
            }
          };
        (n.onStateChange = p), n.trySubscribe(), p();
        return function () {
          if (((d = !0), n.tryUnsubscribe(), (n.onStateChange = null), f))
            throw f;
        };
      }
      function Q(e, t) {
        return e === t;
      }
      var $ = function (e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = (r.pure, r.areStatesEqual),
          a = void 0 === o ? Q : o,
          i = r.areOwnPropsEqual,
          s = void 0 === i ? B : i,
          u = r.areStatePropsEqual,
          d = void 0 === u ? B : u,
          f = r.areMergedPropsEqual,
          p = void 0 === f ? B : f,
          h = r.forwardRef,
          m = void 0 !== h && h,
          y = r.context,
          g = void 0 === y ? c : y,
          x = g,
          E = P(e),
          C = _(t),
          j = M(n),
          R = Boolean(e),
          O = function (e) {
            var t = e.displayName || e.name || "Component",
              n = "Connect(".concat(t, ")"),
              r = {
                shouldHandleStateChanges: R,
                displayName: n,
                wrappedComponentName: t,
                WrappedComponent: e,
                initMapStateToProps: E,
                initMapDispatchToProps: C,
                initMergeProps: j,
                areStatesEqual: a,
                areStatePropsEqual: d,
                areOwnPropsEqual: s,
                areMergedPropsEqual: p,
              };
            function o(t) {
              var n = (0, l.useMemo)(
                  function () {
                    var e = t.reactReduxForwardedRef,
                      n = w(t, D);
                    return [t.context, e, n];
                  },
                  [t]
                ),
                o = v(n, 3),
                a = o[0],
                i = o[1],
                s = o[2],
                u = (0, l.useMemo)(
                  function () {
                    return a &&
                      a.Consumer &&
                      (0, S.isContextConsumer)(
                        l.createElement(a.Consumer, null)
                      )
                      ? a
                      : x;
                  },
                  [a, x]
                ),
                c = (0, l.useContext)(u),
                d =
                  Boolean(t.store) &&
                  Boolean(t.store.getState) &&
                  Boolean(t.store.dispatch),
                f = Boolean(c) && Boolean(c.store);
              var p = d ? t.store : c.store,
                h = f ? c.getServerState : p.getState,
                m = (0, l.useMemo)(
                  function () {
                    return N(p.dispatch, r);
                  },
                  [p]
                ),
                y = (0, l.useMemo)(
                  function () {
                    if (!R) return U;
                    var e = I(p, d ? void 0 : c.subscription),
                      t = e.notifyNestedSubs.bind(e);
                    return [e, t];
                  },
                  [p, d, c]
                ),
                g = v(y, 2),
                k = g[0],
                E = g[1],
                C = (0, l.useMemo)(
                  function () {
                    return d ? c : b({}, c, { subscription: k });
                  },
                  [d, c, k]
                ),
                j = (0, l.useRef)(),
                O = (0, l.useRef)(s),
                T = (0, l.useRef)(),
                _ = (0, l.useRef)(!1),
                P = ((0, l.useRef)(!1), (0, l.useRef)(!1)),
                L = (0, l.useRef)();
              z(function () {
                return (
                  (P.current = !0),
                  function () {
                    P.current = !1;
                  }
                );
              }, []);
              var M,
                A = (0, l.useMemo)(
                  function () {
                    return function () {
                      return T.current && s === O.current
                        ? T.current
                        : m(p.getState(), s);
                    };
                  },
                  [p, s]
                ),
                F = (0, l.useMemo)(
                  function () {
                    return function (e) {
                      return k
                        ? W(R, p, k, m, O, j, _, P, T, E, e)
                        : function () {};
                    };
                  },
                  [k]
                );
              H(V, [O, j, _, s, T, E]);
              try {
                M = q(
                  F,
                  A,
                  h
                    ? function () {
                        return m(h(), s);
                      }
                    : A
                );
              } catch (Q) {
                throw (
                  (L.current &&
                    (Q.message +=
                      "\nThe error may be correlated with this previous error:\n".concat(
                        L.current.stack,
                        "\n\n"
                      )),
                  Q)
                );
              }
              z(function () {
                (L.current = void 0), (T.current = void 0), (j.current = M);
              });
              var B = (0, l.useMemo)(
                function () {
                  return l.createElement(e, b({}, M, { ref: i }));
                },
                [i, e, M]
              );
              return (0, l.useMemo)(
                function () {
                  return R ? l.createElement(u.Provider, { value: C }, B) : B;
                },
                [u, B, C]
              );
            }
            var i = l.memo(o);
            if (
              ((i.WrappedComponent = e), (i.displayName = o.displayName = n), m)
            ) {
              var u = l.forwardRef(function (e, t) {
                return l.createElement(
                  i,
                  b({}, e, { reactReduxForwardedRef: t })
                );
              });
              return (u.displayName = n), (u.WrappedComponent = e), k()(u, e);
            }
            return k()(i, e);
          };
        return O;
      };
      var K = function (e) {
        var t = e.store,
          n = e.context,
          r = e.children,
          o = e.serverState,
          a = (0, l.useMemo)(
            function () {
              var e = I(t);
              return {
                store: t,
                subscription: e,
                getServerState: o
                  ? function () {
                      return o;
                    }
                  : void 0,
              };
            },
            [t, o]
          ),
          i = (0, l.useMemo)(
            function () {
              return t.getState();
            },
            [t]
          );
        z(
          function () {
            var e = a.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              i !== t.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = void 0);
              }
            );
          },
          [a, i]
        );
        var s = n || c;
        return l.createElement(s.Provider, { value: a }, r);
      };
      var Y, G, X;
      function J(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Z(e) {
        return (
          (Z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Z(e)
        );
      }
      function ee(e) {
        var t = (function (e, t) {
          if ("object" !== Z(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Z(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Z(t) ? t : String(t);
      }
      function te(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ee(r.key), r);
        }
      }
      function ne(e, t, n) {
        return (
          t && te(e.prototype, t),
          n && te(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function re(e, t) {
        return (
          (re = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          re(e, t)
        );
      }
      function oe(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && re(e, t);
      }
      function ae(e) {
        return (
          (ae = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ae(e)
        );
      }
      function ie() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function se(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function le(e, t) {
        if (t && ("object" === Z(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return se(e);
      }
      function ue(e) {
        var t = ie();
        return function () {
          var n,
            r = ae(e);
          if (t) {
            var o = ae(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return le(this, n);
        };
      }
      function ce(e, t, n) {
        return (
          (ce = ie()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && re(o, n.prototype), o;
              }),
          ce.apply(null, arguments)
        );
      }
      function de(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (de = function (e) {
            if (
              null === e ||
              !(function (e) {
                return (
                  -1 !== Function.toString.call(e).indexOf("[native code]")
                );
              })(e)
            )
              return e;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return ce(e, arguments, ae(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              re(n, e)
            );
          }),
          de(e)
        );
      }
      function fe(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = h(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (s = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function pe() {
        return (
          (pe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          pe.apply(this, arguments)
        );
      }
      (Y = o.useSyncExternalStoreWithSelector),
        (function (e) {
          q = e;
        })(r.useSyncExternalStore),
        (G = a.unstable_batchedUpdates),
        (i = G),
        (function (e) {
          (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
        })(X || (X = {}));
      var he,
        me = "popstate";
      function ve(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function ye(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function ge(e) {
        return { usr: e.state, key: e.key };
      }
      function be(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          pe(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? xe(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function we(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          o = void 0 === r ? "" : r,
          a = e.hash,
          i = void 0 === a ? "" : a;
        return (
          o && "?" !== o && (n += "?" === o.charAt(0) ? o : "?" + o),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function xe(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function ke(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : window.location.href,
          n = "string" === typeof e ? e : we(e);
        return (
          ve(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
              n
          ),
          new URL(n, t)
        );
      }
      function Se(e, t, n, r) {
        void 0 === r && (r = {});
        var o = r,
          a = o.window,
          i = void 0 === a ? document.defaultView : a,
          s = o.v5Compat,
          l = void 0 !== s && s,
          u = i.history,
          c = X.Pop,
          d = null;
        function f() {
          (c = X.Pop), d && d({ action: c, location: p.location });
        }
        var p = {
          get action() {
            return c;
          },
          get location() {
            return e(i, u);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(me, f),
              (d = e),
              function () {
                i.removeEventListener(me, f), (d = null);
              }
            );
          },
          createHref: function (e) {
            return t(i, e);
          },
          encodeLocation: function (e) {
            var t = ke("string" === typeof e ? e : we(e));
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            c = X.Push;
            var r = be(p.location, e, t);
            n && n(r, e);
            var o = ge(r),
              a = p.createHref(r);
            try {
              u.pushState(o, "", a);
            } catch (s) {
              i.location.assign(a);
            }
            l && d && d({ action: c, location: p.location });
          },
          replace: function (e, t) {
            c = X.Replace;
            var r = be(p.location, e, t);
            n && n(r, e);
            var o = ge(r),
              a = p.createHref(r);
            u.replaceState(o, "", a),
              l && d && d({ action: c, location: p.location });
          },
          go: function (e) {
            return u.go(e);
          },
        };
        return p;
      }
      function Ee(e, t, n) {
        void 0 === n && (n = "/");
        var r = Le(("string" === typeof t ? xe(t) : t).pathname || "/", n);
        if (null == r) return null;
        var o = Ce(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(o);
        for (var a = null, i = 0; null == a && i < o.length; ++i)
          a = Te(o[i], Pe(r));
        return a;
      }
      function Ce(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var o = function (e, o, a) {
          var i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (ve(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var s = Fe([r, i.relativePath]),
            l = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (ve(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            Ce(e.children, t, l, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: Oe(s, e.index), routesMeta: l });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                a = fe(Ne(e.path));
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var i = r.value;
                  o(e, t, i);
                }
              } catch (s) {
                a.e(s);
              } finally {
                a.f();
              }
            } else o(e, t);
          }),
          t
        );
      }
      function Ne(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = f((n = t)) || y(n) || h(n) || m(),
          o = r[0],
          a = r.slice(1),
          i = o.endsWith("?"),
          s = o.replace(/\?$/, "");
        if (0 === a.length) return i ? [s, ""] : [s];
        var l = Ne(a.join("/")),
          u = [];
        return (
          u.push.apply(
            u,
            g(
              l.map(function (e) {
                return "" === e ? s : [s, e].join("/");
              })
            )
          ),
          i && u.push.apply(u, g(l)),
          u.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(he || (he = {}));
      var je = /^:\w+$/,
        Re = function (e) {
          return "*" === e;
        };
      function Oe(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(Re) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !Re(e);
            })
            .reduce(function (e, t) {
              return e + (je.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function Te(e, t) {
        for (
          var n = e.routesMeta, r = {}, o = "/", a = [], i = 0;
          i < n.length;
          ++i
        ) {
          var s = n[i],
            l = i === n.length - 1,
            u = "/" === o ? t : t.slice(o.length) || "/",
            c = _e(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var d = s.route;
          a.push({
            params: r,
            pathname: Fe([o, c.pathname]),
            pathnameBase: Be(Fe([o, c.pathnameBase])),
            route: d,
          }),
            "/" !== c.pathnameBase && (o = Fe([o, c.pathnameBase]));
        }
        return a;
      }
      function _e(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            Me(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              o =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (o += "\\/*$")
              : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
            var a = new RegExp(o, t ? void 0 : "i");
            return [a, r];
          })(e.path, e.caseSensitive, e.end),
          r = v(n, 2),
          o = r[0],
          a = r[1],
          i = t.match(o);
        if (!i) return null;
        var s = i[0],
          l = s.replace(/(.)\/+$/, "$1"),
          u = i.slice(1),
          c = a.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = u[n] || "";
              l = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    Me(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(u[n] || "", t)),
              e
            );
          }, {});
        return { params: c, pathname: s, pathnameBase: l, pattern: e };
      }
      function Pe(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            Me(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function Le(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Me(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function Ae(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Ie(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function ze(e, t, n, r) {
        var o;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (o = xe(e))
            : (ve(
                !(o = pe({}, e)).pathname || !o.pathname.includes("?"),
                Ae("?", "pathname", "search", o)
              ),
              ve(
                !o.pathname || !o.pathname.includes("#"),
                Ae("#", "pathname", "hash", o)
              ),
              ve(
                !o.search || !o.search.includes("#"),
                Ae("#", "search", "hash", o)
              ));
        var a,
          i = "" === e || "" === o.pathname,
          s = i ? "/" : o.pathname;
        if (r || null == s) a = n;
        else {
          var l = t.length - 1;
          if (s.startsWith("..")) {
            for (var u = s.split("/"); ".." === u[0]; ) u.shift(), (l -= 1);
            o.pathname = u.join("/");
          }
          a = l >= 0 ? t[l] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? xe(e) : e,
              r = n.pathname,
              o = n.search,
              a = void 0 === o ? "" : o,
              i = n.hash,
              s = void 0 === i ? "" : i,
              l = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: l, search: De(a), hash: qe(s) };
          })(o, a),
          d = s && "/" !== s && s.endsWith("/"),
          f = (i || "." === s) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!d && !f) || (c.pathname += "/"), c;
      }
      var Fe = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        Be = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        De = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        qe = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        Ue = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return ne(n);
        })(de(Error));
      var He = ne(function e(t, n, r, o) {
        J(this, e),
          void 0 === o && (o = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = o),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function Ve(e) {
        return e instanceof He;
      }
      var We = ["post", "put", "patch", "delete"],
        Qe = (new Set(We), ["get"].concat(We));
      new Set(Qe),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      function $e() {
        return (
          ($e = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          $e.apply(this, arguments)
        );
      }
      var Ke =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        Ye = l.useState,
        Ge = l.useEffect,
        Xe = l.useLayoutEffect,
        Je = l.useDebugValue;
      function Ze(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !Ke(n, r);
        } catch (o) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        u.useSyncExternalStore;
      var et = l.createContext(null);
      var tt = l.createContext(null);
      var nt = l.createContext(null);
      var rt = l.createContext(null);
      var ot = l.createContext(null);
      var at = l.createContext(null);
      var it = l.createContext({ outlet: null, matches: [] });
      var st = l.createContext(null);
      function lt() {
        return null != l.useContext(at);
      }
      function ut() {
        return lt() || ve(!1), l.useContext(at).location;
      }
      function ct() {
        lt() || ve(!1);
        var e = l.useContext(ot),
          t = e.basename,
          n = e.navigator,
          r = l.useContext(it).matches,
          o = ut().pathname,
          a = JSON.stringify(
            Ie(r).map(function (e) {
              return e.pathnameBase;
            })
          ),
          i = l.useRef(!1);
        l.useEffect(function () {
          i.current = !0;
        });
        var s = l.useCallback(
          function (e, r) {
            if ((void 0 === r && (r = {}), i.current))
              if ("number" !== typeof e) {
                var s = ze(e, JSON.parse(a), o, "path" === r.relative);
                "/" !== t &&
                  (s.pathname = "/" === s.pathname ? t : Fe([t, s.pathname])),
                  (r.replace ? n.replace : n.push)(s, r.state, r);
              } else n.go(e);
          },
          [t, n, a, o]
        );
        return s;
      }
      function dt(e, t) {
        var n = (void 0 === t ? {} : t).relative,
          r = l.useContext(it).matches,
          o = ut().pathname,
          a = JSON.stringify(
            Ie(r).map(function (e) {
              return e.pathnameBase;
            })
          );
        return l.useMemo(
          function () {
            return ze(e, JSON.parse(a), o, "path" === n);
          },
          [e, a, o, n]
        );
      }
      function ft() {
        var e = (function () {
            var e,
              t = l.useContext(st),
              n = gt(ht.UseRouteError),
              r = bt(ht.UseRouteError);
            if (t) return t;
            return null == (e = n.errors) ? void 0 : e[r];
          })(),
          t = Ve(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: r },
          a = { padding: "2px 4px", backgroundColor: r };
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("h2", null, "Unhandled Thrown Error!"),
          l.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? l.createElement("pre", { style: o }, n) : null,
          l.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          l.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            l.createElement("code", { style: a }, "errorElement"),
            " props on\xa0",
            l.createElement("code", { style: a }, "<Route>")
          )
        );
      }
      var pt,
        ht,
        mt = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              r
            );
          }
          return (
            ne(
              n,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? l.createElement(
                          it.Provider,
                          { value: this.props.routeContext },
                          l.createElement(st.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            n
          );
        })(l.Component);
      function vt(e) {
        var t = e.routeContext,
          n = e.match,
          r = e.children,
          o = l.useContext(et);
        return (
          o &&
            n.route.errorElement &&
            (o._deepestRenderedBoundaryId = n.route.id),
          l.createElement(it.Provider, { value: t }, r)
        );
      }
      function yt(e, t, n) {
        if ((void 0 === t && (t = []), null == e)) {
          if (null == n || !n.errors) return null;
          e = n.matches;
        }
        var r = e,
          o = null == n ? void 0 : n.errors;
        if (null != o) {
          var a = r.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          a >= 0 || ve(!1), (r = r.slice(0, Math.min(r.length, a + 1)));
        }
        return r.reduceRight(function (e, a, i) {
          var s = a.route.id ? (null == o ? void 0 : o[a.route.id]) : null,
            u = n ? a.route.errorElement || l.createElement(ft, null) : null,
            c = t.concat(r.slice(0, i + 1)),
            d = function () {
              return l.createElement(
                vt,
                { match: a, routeContext: { outlet: e, matches: c } },
                s ? u : void 0 !== a.route.element ? a.route.element : e
              );
            };
          return n && (a.route.errorElement || 0 === i)
            ? l.createElement(mt, {
                location: n.location,
                component: u,
                error: s,
                children: d(),
                routeContext: { outlet: null, matches: c },
              })
            : d();
        }, null);
      }
      function gt(e) {
        var t = l.useContext(nt);
        return t || ve(!1), t;
      }
      function bt(e) {
        var t = (function (e) {
            var t = l.useContext(it);
            return t || ve(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || ve(!1), n.route.id;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(pt || (pt = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(ht || (ht = {}));
      var wt;
      function xt(e) {
        var t = e.to,
          n = e.replace,
          r = e.state,
          o = e.relative;
        lt() || ve(!1);
        var a = l.useContext(nt),
          i = ct();
        return (
          l.useEffect(function () {
            (a && "idle" !== a.navigation.state) ||
              i(t, { replace: n, state: r, relative: o });
          }),
          null
        );
      }
      function kt(e) {
        ve(!1);
      }
      function St(e) {
        var t = e.basename,
          n = void 0 === t ? "/" : t,
          r = e.children,
          o = void 0 === r ? null : r,
          a = e.location,
          i = e.navigationType,
          s = void 0 === i ? X.Pop : i,
          u = e.navigator,
          c = e.static,
          d = void 0 !== c && c;
        lt() && ve(!1);
        var f = n.replace(/^\/*/, "/"),
          p = l.useMemo(
            function () {
              return { basename: f, navigator: u, static: d };
            },
            [f, u, d]
          );
        "string" === typeof a && (a = xe(a));
        var h = a,
          m = h.pathname,
          v = void 0 === m ? "/" : m,
          y = h.search,
          g = void 0 === y ? "" : y,
          b = h.hash,
          w = void 0 === b ? "" : b,
          x = h.state,
          k = void 0 === x ? null : x,
          S = h.key,
          E = void 0 === S ? "default" : S,
          C = l.useMemo(
            function () {
              var e = Le(v, f);
              return null == e
                ? null
                : { pathname: e, search: g, hash: w, state: k, key: E };
            },
            [f, v, g, w, k, E]
          );
        return null == C
          ? null
          : l.createElement(
              ot.Provider,
              { value: p },
              l.createElement(at.Provider, {
                children: o,
                value: { location: C, navigationType: s },
              })
            );
      }
      function Et(e) {
        var t = e.children,
          n = e.location,
          r = l.useContext(tt);
        return (function (e, t) {
          lt() || ve(!1);
          var n,
            r = l.useContext(ot).navigator,
            o = l.useContext(nt),
            a = l.useContext(it).matches,
            i = a[a.length - 1],
            s = i ? i.params : {},
            u = (i && i.pathname, i ? i.pathnameBase : "/"),
            c = (i && i.route, ut());
          if (t) {
            var d,
              f = "string" === typeof t ? xe(t) : t;
            "/" === u ||
              (null == (d = f.pathname) ? void 0 : d.startsWith(u)) ||
              ve(!1),
              (n = f);
          } else n = c;
          var p = n.pathname || "/",
            h = Ee(e, { pathname: "/" === u ? p : p.slice(u.length) || "/" }),
            m = yt(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: Fe([
                      u,
                      r.encodeLocation
                        ? r.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? u
                        : Fe([
                            u,
                            r.encodeLocation
                              ? r.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              a,
              o || void 0
            );
          return t && m
            ? l.createElement(
                at.Provider,
                {
                  value: {
                    location: $e(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      n
                    ),
                    navigationType: X.Pop,
                  },
                },
                m
              )
            : m;
        })(r && !t ? r.router.routes : Nt(t), n);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(wt || (wt = {}));
      var Ct = new Promise(function () {});
      l.Component;
      function Nt(e, t) {
        void 0 === t && (t = []);
        var n = [];
        return (
          l.Children.forEach(e, function (e, r) {
            if (l.isValidElement(e))
              if (e.type !== l.Fragment) {
                e.type !== kt && ve(!1),
                  e.props.index && e.props.children && ve(!1);
                var o = [].concat(g(t), [r]),
                  a = {
                    id: e.props.id || o.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (a.children = Nt(e.props.children, o)),
                  n.push(a);
              } else n.push.apply(n, Nt(e.props.children, t));
          }),
          n
        );
      }
      function jt() {
        return (
          (jt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          jt.apply(this, arguments)
        );
      }
      function Rt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var Ot = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
      ];
      function Tt(e) {
        var t = e.basename,
          n = e.children,
          r = e.window,
          o = l.useRef();
        null == o.current &&
          (o.current = (function (e) {
            return (
              void 0 === e && (e = {}),
              Se(
                function (e, t) {
                  var n = xe(e.location.hash.substr(1)),
                    r = n.pathname,
                    o = void 0 === r ? "/" : r,
                    a = n.search,
                    i = void 0 === a ? "" : a,
                    s = n.hash;
                  return be(
                    "",
                    { pathname: o, search: i, hash: void 0 === s ? "" : s },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || "default"
                  );
                },
                function (e, t) {
                  var n = e.document.querySelector("base"),
                    r = "";
                  if (n && n.getAttribute("href")) {
                    var o = e.location.href,
                      a = o.indexOf("#");
                    r = -1 === a ? o : o.slice(0, a);
                  }
                  return r + "#" + ("string" === typeof t ? t : we(t));
                },
                function (e, t) {
                  ye(
                    "/" === e.pathname.charAt(0),
                    "relative pathnames are not supported in hash history.push(" +
                      JSON.stringify(t) +
                      ")"
                  );
                },
                e
              )
            );
          })({ window: r, v5Compat: !0 }));
        var a = o.current,
          i = v(l.useState({ action: a.action, location: a.location }), 2),
          s = i[0],
          u = i[1];
        return (
          l.useLayoutEffect(
            function () {
              return a.listen(u);
            },
            [a]
          ),
          l.createElement(St, {
            basename: t,
            children: n,
            location: s.location,
            navigationType: s.action,
            navigator: a,
          })
        );
      }
      var _t = l.forwardRef(function (e, t) {
        var n = e.onClick,
          r = e.relative,
          o = e.reloadDocument,
          a = e.replace,
          i = e.state,
          s = e.target,
          u = e.to,
          c = e.preventScrollReset,
          d = Rt(e, Ot),
          f = (function (e, t) {
            var n = (void 0 === t ? {} : t).relative;
            lt() || ve(!1);
            var r = l.useContext(ot),
              o = r.basename,
              a = r.navigator,
              i = dt(e, { relative: n }),
              s = i.hash,
              u = i.pathname,
              c = i.search,
              d = u;
            return (
              "/" !== o && (d = "/" === u ? o : Fe([o, u])),
              a.createHref({ pathname: d, search: c, hash: s })
            );
          })(u, { relative: r }),
          p = (function (e, t) {
            var n = void 0 === t ? {} : t,
              r = n.target,
              o = n.replace,
              a = n.state,
              i = n.preventScrollReset,
              s = n.relative,
              u = ct(),
              c = ut(),
              d = dt(e, { relative: s });
            return l.useCallback(
              function (t) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || "_self" === t) &&
                      !(function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(t, r)
                ) {
                  t.preventDefault();
                  var n = void 0 !== o ? o : we(c) === we(d);
                  u(e, {
                    replace: n,
                    state: a,
                    preventScrollReset: i,
                    relative: s,
                  });
                }
              },
              [c, u, d, o, a, r, e, i, s]
            );
          })(u, {
            replace: a,
            state: i,
            target: s,
            preventScrollReset: c,
            relative: r,
          });
        return l.createElement(
          "a",
          jt({}, d, {
            href: f,
            onClick: o
              ? n
              : function (e) {
                  n && n(e), e.defaultPrevented || p(e);
                },
            ref: t,
            target: s,
          })
        );
      });
      var Pt, Lt;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Pt || (Pt = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Lt || (Lt = {}));
      var Mt = window.location.origin,
        At = window.location.origin,
        It = "CLOSE_ROOM",
        zt = "GAME_COMPLETED",
        Ft = "ANSWER_SELECTED",
        Bt = "TIMER_SYNC",
        Dt = 1e3;
      function qt(e, t) {
        var n = Math.floor(e / 60),
          r = e - 60 * n;
        return t && 0 === n ? Ut(r) : "".concat(n, ":").concat(Ut(r));
      }
      function Ut(e) {
        return e < 10 ? "0" + e : e;
      }
      function Ht(e, t) {
        if (0 === t) return "";
        var n = Math.round(e / t),
          r = Math.floor(n / Dt),
          o = "".concat(n - Dt * r);
        return [
          "".concat(r),
          ".",
          "000".substring(0, "000".length - o.length),
          o,
          " seconds",
        ].join("");
      }
      function Vt(e, t) {
        return e.points < t.points
          ? 1
          : e.points > t.points || e.duration < t.duration
          ? -1
          : e.duration > t.duration
          ? 1
          : 0;
      }
      function Wt(e, t) {
        var n = e.nickname.toUpperCase(),
          r = t.nickname.toUpperCase();
        return n < r ? -1 : n > r ? 1 : 0;
      }
      function Qt(e) {
        return String.fromCharCode(65 + (e % 26));
      }
      function $t(e) {
        var t = (function (e) {
          return "number" === typeof e
            ? e
            : "string" === typeof e && /^\d+$/.test(e)
            ? parseInt(e)
            : NaN;
        })(e);
        return 1e5 <= t && t <= 999999 && !isNaN(t);
      }
      var Kt = void 0,
        Yt = !1;
      function Gt() {
        (document.title = "MaverickQuizHub"), (Kt = void 0);
      }
      function Xt() {
        return (
          Yt ||
            (window.addEventListener("beforeunload", Jt, { capture: !0 }),
            (Yt = !0)),
          !0
        );
      }
      function Jt(e) {
        return !Kt || ((e.returnValue = "beforeUnloadWarning"), !1);
      }
      function Zt() {
        return At;
      }
      function en(e) {
        return Zt() + tn(e);
      }
      function tn(e) {
        return void 0 === e ? "" : "/#/".concat(e);
      }
      function nn() {
        return (
          navigator &&
          navigator.clipboard &&
          "function" === typeof navigator.clipboard.writeText
        );
      }
      function rn(e, t, n) {
        return (
          (t = ee(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function on(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? on(Object(n), !0).forEach(function (t) {
                rn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : on(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var sn = n(138),
        ln = n.n(sn);
      function un(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = w(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var cn = n(39),
        dn = n.n(cn),
        fn = n(301),
        pn = ["xxl", "xl", "lg", "md", "sm", "xs"],
        hn = l.createContext({
          prefixes: {},
          breakpoints: pn,
          minBreakpoint: "xs",
        });
      hn.Consumer, hn.Provider;
      function mn(e, t) {
        var n = (0, l.useContext)(hn).prefixes;
        return e || n[t] || t;
      }
      function vn() {
        return (0, l.useContext)(hn).breakpoints;
      }
      function yn() {
        return (0, l.useContext)(hn).minBreakpoint;
      }
      var gn = ["bsPrefix", "fluid", "as", "className"],
        bn = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.fluid,
            o = e.as,
            a = void 0 === o ? "div" : o,
            i = e.className,
            s = un(e, gn),
            l = mn(n, "container"),
            u = "string" === typeof r ? "-".concat(r) : "-fluid";
          return (0,
          fn.jsx)(a, an(an({ ref: t }, s), {}, { className: dn()(i, r ? "".concat(l).concat(u) : l) }));
        });
      (bn.displayName = "Container"), (bn.defaultProps = { fluid: !1 });
      var wn = bn,
        xn = ["bsPrefix", "className", "as"],
        kn = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.as,
            a = void 0 === o ? "div" : o,
            i = un(e, xn),
            s = mn(n, "row"),
            l = vn(),
            u = yn(),
            c = "".concat(s, "-cols"),
            d = [];
          return (
            l.forEach(function (e) {
              var t,
                n = i[e];
              delete i[e],
                (t = null != n && "object" === typeof n ? n.cols : n);
              var r = e !== u ? "-".concat(e) : "";
              null != t && d.push("".concat(c).concat(r, "-").concat(t));
            }),
            (0, fn.jsx)(
              a,
              an(
                an({ ref: t }, i),
                {},
                { className: dn().apply(void 0, [r, s].concat(d)) }
              )
            )
          );
        });
      kn.displayName = "Row";
      var Sn = kn,
        En = ["as", "bsPrefix", "className"],
        Cn = ["className"];
      var Nn = l.forwardRef(function (e, t) {
        var n = (function (e) {
            var t = e.as,
              n = e.bsPrefix,
              r = e.className,
              o = un(e, En);
            n = mn(n, "col");
            var a = vn(),
              i = yn(),
              s = [],
              l = [];
            return (
              a.forEach(function (e) {
                var t,
                  r,
                  a,
                  u = o[e];
                delete o[e],
                  "object" === typeof u && null != u
                    ? ((t = u.span), (r = u.offset), (a = u.order))
                    : (t = u);
                var c = e !== i ? "-".concat(e) : "";
                t &&
                  s.push(
                    !0 === t
                      ? "".concat(n).concat(c)
                      : "".concat(n).concat(c, "-").concat(t)
                  ),
                  null != a && l.push("order".concat(c, "-").concat(a)),
                  null != r && l.push("offset".concat(c, "-").concat(r));
              }),
              [
                an(
                  an({}, o),
                  {},
                  { className: dn().apply(void 0, [r].concat(s, l)) }
                ),
                { as: t, bsPrefix: n, spans: s },
              ]
            );
          })(e),
          r = v(n, 2),
          o = r[0],
          a = o.className,
          i = un(o, Cn),
          s = r[1],
          l = s.as,
          u = void 0 === l ? "div" : l,
          c = s.bsPrefix,
          d = s.spans;
        return (0,
        fn.jsx)(u, an(an({}, i), {}, { ref: t, className: dn()(a, !d.length && c) }));
      });
      Nn.displayName = "Col";
      var jn = Nn,
        Rn = n(608),
        On = n.n(Rn),
        Tn = ["as", "className", "type", "tooltip"],
        _n = { type: On().string, tooltip: On().bool, as: On().elementType },
        Pn = l.forwardRef(function (e, t) {
          var n = e.as,
            r = void 0 === n ? "div" : n,
            o = e.className,
            a = e.type,
            i = void 0 === a ? "valid" : a,
            s = e.tooltip,
            l = void 0 !== s && s,
            u = un(e, Tn);
          return (0,
          fn.jsx)(r, an(an({}, u), {}, { ref: t, className: dn()(o, "".concat(i, "-").concat(l ? "tooltip" : "feedback")) }));
        });
      (Pn.displayName = "Feedback"), (Pn.propTypes = _n);
      var Ln = Pn,
        Mn = l.createContext({}),
        An = [
          "id",
          "bsPrefix",
          "className",
          "type",
          "isValid",
          "isInvalid",
          "as",
        ],
        In = l.forwardRef(function (e, t) {
          var n = e.id,
            r = e.bsPrefix,
            o = e.className,
            a = e.type,
            i = void 0 === a ? "checkbox" : a,
            s = e.isValid,
            u = void 0 !== s && s,
            c = e.isInvalid,
            d = void 0 !== c && c,
            f = e.as,
            p = void 0 === f ? "input" : f,
            h = un(e, An),
            m = (0, l.useContext)(Mn).controlId;
          return (
            (r = mn(r, "form-check-input")),
            (0, fn.jsx)(
              p,
              an(
                an({}, h),
                {},
                {
                  ref: t,
                  type: i,
                  id: n || m,
                  className: dn()(o, r, u && "is-valid", d && "is-invalid"),
                }
              )
            )
          );
        });
      In.displayName = "FormCheckInput";
      var zn = In,
        Fn = ["bsPrefix", "className", "htmlFor"],
        Bn = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.htmlFor,
            a = un(e, Fn),
            i = (0, l.useContext)(Mn).controlId;
          return (
            (n = mn(n, "form-check-label")),
            (0, fn.jsx)(
              "label",
              an(
                an({}, a),
                {},
                { ref: t, htmlFor: o || i, className: dn()(r, n) }
              )
            )
          );
        });
      Bn.displayName = "FormCheckLabel";
      var Dn = Bn;
      function qn(e, t) {
        var n = 0;
        return l.Children.map(e, function (e) {
          return l.isValidElement(e) ? t(e, n++) : e;
        });
      }
      var Un = [
          "id",
          "bsPrefix",
          "bsSwitchPrefix",
          "inline",
          "reverse",
          "disabled",
          "isValid",
          "isInvalid",
          "feedbackTooltip",
          "feedback",
          "feedbackType",
          "className",
          "style",
          "title",
          "type",
          "label",
          "children",
          "as",
        ],
        Hn = l.forwardRef(function (e, t) {
          var n = e.id,
            r = e.bsPrefix,
            o = e.bsSwitchPrefix,
            a = e.inline,
            i = void 0 !== a && a,
            s = e.reverse,
            u = void 0 !== s && s,
            c = e.disabled,
            d = void 0 !== c && c,
            f = e.isValid,
            p = void 0 !== f && f,
            h = e.isInvalid,
            m = void 0 !== h && h,
            v = e.feedbackTooltip,
            y = void 0 !== v && v,
            g = e.feedback,
            b = e.feedbackType,
            w = e.className,
            x = e.style,
            k = e.title,
            S = void 0 === k ? "" : k,
            E = e.type,
            C = void 0 === E ? "checkbox" : E,
            N = e.label,
            j = e.children,
            R = e.as,
            O = void 0 === R ? "input" : R,
            T = un(e, Un);
          (r = mn(r, "form-check")), (o = mn(o, "form-switch"));
          var _ = (0, l.useContext)(Mn).controlId,
            P = (0, l.useMemo)(
              function () {
                return { controlId: n || _ };
              },
              [_, n]
            ),
            L =
              (!j && null != N && !1 !== N) ||
              (function (e, t) {
                return l.Children.toArray(e).some(function (e) {
                  return l.isValidElement(e) && e.type === t;
                });
              })(j, Dn),
            M = (0, fn.jsx)(
              zn,
              an(
                an({}, T),
                {},
                {
                  type: "switch" === C ? "checkbox" : C,
                  ref: t,
                  isValid: p,
                  isInvalid: m,
                  disabled: d,
                  as: O,
                }
              )
            );
          return (0,
          fn.jsx)(Mn.Provider, { value: P, children: (0, fn.jsx)("div", { style: x, className: dn()(w, L && r, i && "".concat(r, "-inline"), u && "".concat(r, "-reverse"), "switch" === C && o), children: j || (0, fn.jsxs)(fn.Fragment, { children: [M, L && (0, fn.jsx)(Dn, { title: S, children: N }), g && (0, fn.jsx)(Ln, { type: b, tooltip: y, children: g })] }) }) });
        });
      Hn.displayName = "FormCheck";
      var Vn = Object.assign(Hn, { Input: zn, Label: Dn }),
        Wn =
          (n(514),
          [
            "bsPrefix",
            "type",
            "size",
            "htmlSize",
            "id",
            "className",
            "isValid",
            "isInvalid",
            "plaintext",
            "readOnly",
            "as",
          ]),
        Qn = l.forwardRef(function (e, t) {
          var n,
            r,
            o = e.bsPrefix,
            a = e.type,
            i = e.size,
            s = e.htmlSize,
            u = e.id,
            c = e.className,
            d = e.isValid,
            f = void 0 !== d && d,
            p = e.isInvalid,
            h = void 0 !== p && p,
            m = e.plaintext,
            v = e.readOnly,
            y = e.as,
            g = void 0 === y ? "input" : y,
            b = un(e, Wn),
            w = (0, l.useContext)(Mn).controlId;
          ((o = mn(o, "form-control")), m)
            ? (n = rn({}, "".concat(o, "-plaintext"), !0))
            : (rn((r = {}), o, !0),
              rn(r, "".concat(o, "-").concat(i), i),
              (n = r));
          return (0,
          fn.jsx)(g, an(an({}, b), {}, { type: a, size: s, ref: t, readOnly: v, id: u || w, className: dn()(c, n, f && "is-valid", h && "is-invalid", "color" === a && "".concat(o, "-color")) }));
        });
      Qn.displayName = "FormControl";
      var $n = Object.assign(Qn, { Feedback: Ln }),
        Kn = /-(.)/g;
      var Yn = ["className", "bsPrefix", "as"],
        Gn = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(Kn, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function Xn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.displayName,
          r = void 0 === n ? Gn(e) : n,
          o = t.Component,
          a = t.defaultProps,
          i = l.forwardRef(function (t, n) {
            var r = t.className,
              a = t.bsPrefix,
              i = t.as,
              s = void 0 === i ? o || "div" : i,
              l = un(t, Yn),
              u = mn(a, e);
            return (0, fn.jsx)(s, an({ ref: n, className: dn()(r, u) }, l));
          });
        return (i.defaultProps = a), (i.displayName = r), i;
      }
      var Jn = Xn("form-floating"),
        Zn = ["controlId", "as"],
        er = l.forwardRef(function (e, t) {
          var n = e.controlId,
            r = e.as,
            o = void 0 === r ? "div" : r,
            a = un(e, Zn),
            i = (0, l.useMemo)(
              function () {
                return { controlId: n };
              },
              [n]
            );
          return (0,
          fn.jsx)(Mn.Provider, { value: i, children: (0, fn.jsx)(o, an(an({}, a), {}, { ref: t })) });
        });
      er.displayName = "FormGroup";
      var tr = er,
        nr = [
          "as",
          "bsPrefix",
          "column",
          "visuallyHidden",
          "className",
          "htmlFor",
        ],
        rr = l.forwardRef(function (e, t) {
          var n = e.as,
            r = void 0 === n ? "label" : n,
            o = e.bsPrefix,
            a = e.column,
            i = e.visuallyHidden,
            s = e.className,
            u = e.htmlFor,
            c = un(e, nr),
            d = (0, l.useContext)(Mn).controlId;
          o = mn(o, "form-label");
          var f = "col-form-label";
          "string" === typeof a &&
            (f = "".concat(f, " ").concat(f, "-").concat(a));
          var p = dn()(s, o, i && "visually-hidden", a && f);
          return (
            (u = u || d),
            a
              ? (0, fn.jsx)(
                  jn,
                  an({ ref: t, as: "label", className: p, htmlFor: u }, c)
                )
              : (0, fn.jsx)(r, an({ ref: t, className: p, htmlFor: u }, c))
          );
        });
      (rr.displayName = "FormLabel"),
        (rr.defaultProps = { column: !1, visuallyHidden: !1 });
      var or = rr,
        ar = ["bsPrefix", "className", "id"],
        ir = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.id,
            a = un(e, ar),
            i = (0, l.useContext)(Mn).controlId;
          return (
            (n = mn(n, "form-range")),
            (0, fn.jsx)(
              "input",
              an(
                an({}, a),
                {},
                { type: "range", ref: t, className: dn()(r, n), id: o || i }
              )
            )
          );
        });
      ir.displayName = "FormRange";
      var sr = ir,
        lr = [
          "bsPrefix",
          "size",
          "htmlSize",
          "className",
          "isValid",
          "isInvalid",
          "id",
        ],
        ur = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.size,
            o = e.htmlSize,
            a = e.className,
            i = e.isValid,
            s = void 0 !== i && i,
            u = e.isInvalid,
            c = void 0 !== u && u,
            d = e.id,
            f = un(e, lr),
            p = (0, l.useContext)(Mn).controlId;
          return (
            (n = mn(n, "form-select")),
            (0, fn.jsx)(
              "select",
              an(
                an({}, f),
                {},
                {
                  size: o,
                  ref: t,
                  className: dn()(
                    a,
                    n,
                    r && "".concat(n, "-").concat(r),
                    s && "is-valid",
                    c && "is-invalid"
                  ),
                  id: d || p,
                }
              )
            )
          );
        });
      ur.displayName = "FormSelect";
      var cr = ur,
        dr = ["bsPrefix", "className", "as", "muted"],
        fr = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.as,
            a = void 0 === o ? "small" : o,
            i = e.muted,
            s = un(e, dr);
          return (
            (n = mn(n, "form-text")),
            (0, fn.jsx)(
              a,
              an(
                an({}, s),
                {},
                { ref: t, className: dn()(r, n, i && "text-muted") }
              )
            )
          );
        });
      fr.displayName = "FormText";
      var pr = fr,
        hr = l.forwardRef(function (e, t) {
          return (0, fn.jsx)(Vn, an(an({}, e), {}, { ref: t, type: "switch" }));
        });
      hr.displayName = "Switch";
      var mr = Object.assign(hr, { Input: Vn.Input, Label: Vn.Label }),
        vr = ["bsPrefix", "className", "children", "controlId", "label"],
        yr = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.children,
            a = e.controlId,
            i = e.label,
            s = un(e, vr);
          return (
            (n = mn(n, "form-floating")),
            (0, fn.jsxs)(
              tr,
              an(
                an({ ref: t, className: dn()(r, n), controlId: a }, s),
                {},
                {
                  children: [
                    o,
                    (0, fn.jsx)("label", { htmlFor: a, children: i }),
                  ],
                }
              )
            )
          );
        });
      yr.displayName = "FloatingLabel";
      var gr = yr,
        br = ["className", "validated", "as"],
        wr = { _ref: On().any, validated: On().bool, as: On().elementType },
        xr = l.forwardRef(function (e, t) {
          var n = e.className,
            r = e.validated,
            o = e.as,
            a = void 0 === o ? "form" : o,
            i = un(e, br);
          return (0,
          fn.jsx)(a, an(an({}, i), {}, { ref: t, className: dn()(n, r && "was-validated") }));
        });
      (xr.displayName = "Form"), (xr.propTypes = wr);
      var kr = Object.assign(xr, {
          Group: tr,
          Control: $n,
          Floating: Jn,
          Check: Vn,
          Switch: mr,
          Label: or,
          Text: pr,
          Range: sr,
          Select: cr,
          FloatingLabel: gr,
        }),
        Sr = ["as", "disabled"];
      function Er(e) {
        var t = e.tagName,
          n = e.disabled,
          r = e.href,
          o = e.target,
          a = e.rel,
          i = e.role,
          s = e.onClick,
          l = e.tabIndex,
          u = void 0 === l ? 0 : l,
          c = e.type;
        t || (t = null != r || null != o || null != a ? "a" : "button");
        var d = { tagName: t };
        if ("button" === t) return [{ type: c || "button", disabled: n }, d];
        var f = function (e) {
          (n ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == s || s(e);
        };
        return (
          "a" === t && (r || (r = "#"), n && (r = void 0)),
          [
            {
              role: null != i ? i : "button",
              disabled: void 0,
              tabIndex: n ? void 0 : u,
              href: r,
              target: "a" === t ? o : void 0,
              "aria-disabled": n || void 0,
              rel: "a" === t ? a : void 0,
              onClick: f,
              onKeyDown: function (e) {
                " " === e.key && (e.preventDefault(), f(e));
              },
            },
            d,
          ]
        );
      }
      var Cr = l.forwardRef(function (e, t) {
        var n = e.as,
          r = e.disabled,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, Sr),
          a = v(Er(Object.assign({ tagName: n, disabled: r }, o)), 2),
          i = a[0],
          s = a[1].tagName;
        return (0, fn.jsx)(s, Object.assign({}, o, i, { ref: t }));
      });
      Cr.displayName = "Button";
      var Nr = ["as", "bsPrefix", "variant", "size", "active", "className"],
        jr = l.forwardRef(function (e, t) {
          var n = e.as,
            r = e.bsPrefix,
            o = e.variant,
            a = e.size,
            i = e.active,
            s = e.className,
            l = un(e, Nr),
            u = mn(r, "btn"),
            c = v(Er(an({ tagName: n }, l)), 2),
            d = c[0],
            f = c[1].tagName;
          return (0,
          fn.jsx)(f, an(an(an({}, d), l), {}, { ref: t, className: dn()(s, u, i && "active", o && "".concat(u, "-").concat(o), a && "".concat(u, "-").concat(a), l.href && l.disabled && "disabled") }));
        });
      (jr.displayName = "Button"),
        (jr.defaultProps = { variant: "primary", active: !1, disabled: !1 });
      var Rr = jr,
        Or = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        Tr = !1,
        _r = !1;
      try {
        var Pr = {
          get passive() {
            return (Tr = !0);
          },
          get once() {
            return (_r = Tr = !0);
          },
        };
        Or &&
          (window.addEventListener("test", Pr, Pr),
          window.removeEventListener("test", Pr, !0));
      } catch (zu) {}
      var Lr = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !_r) {
          var o = r.once,
            a = r.capture,
            i = n;
          !_r &&
            o &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, a), n.call(this, r);
              }),
            (n.__once = i)),
            e.addEventListener(t, i, Tr ? r : a);
        }
        e.addEventListener(t, n, r);
      };
      function Mr(e) {
        return (e && e.ownerDocument) || document;
      }
      var Ar,
        Ir = function (e, t, n, r) {
          var o = r && "boolean" !== typeof r ? r.capture : r;
          e.removeEventListener(t, n, o),
            n.__once && e.removeEventListener(t, n.__once, o);
        };
      function zr(e) {
        if (((!Ar && 0 !== Ar) || e) && Or) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (Ar = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return Ar;
      }
      var Fr = function (e) {
        var t = (0, l.useRef)(e);
        return (
          (0, l.useEffect)(
            function () {
              t.current = e;
            },
            [e]
          ),
          t
        );
      };
      function Br(e) {
        var t = Fr(e);
        return (0, l.useCallback)(
          function () {
            return t.current && t.current.apply(t, arguments);
          },
          [t]
        );
      }
      var Dr = function (e) {
        return e && "function" !== typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      var qr = function (e, t) {
        return (0, l.useMemo)(
          function () {
            return (function (e, t) {
              var n = Dr(e),
                r = Dr(t);
              return function (e) {
                n && n(e), r && r(e);
              };
            })(e, t);
          },
          [e, t]
        );
      };
      function Ur(e) {
        var t = (function (e) {
          var t = (0, l.useRef)(e);
          return (t.current = e), t;
        })(e);
        (0, l.useEffect)(function () {
          return function () {
            return t.current();
          };
        }, []);
      }
      function Hr(e, t) {
        return (function (e) {
          var t = Mr(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var Vr = /([A-Z])/g;
      var Wr = /^ms-/;
      function Qr(e) {
        return (function (e) {
          return e.replace(Vr, "-$1").toLowerCase();
        })(e).replace(Wr, "-ms-");
      }
      var $r =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      var Kr = function (e, t) {
        var n = "",
          r = "";
        if ("string" === typeof t)
          return (
            e.style.getPropertyValue(Qr(t)) || Hr(e).getPropertyValue(Qr(t))
          );
        Object.keys(t).forEach(function (o) {
          var a = t[o];
          a || 0 === a
            ? !(function (e) {
                return !(!e || !$r.test(e));
              })(o)
              ? (n += Qr(o) + ": " + a + ";")
              : (r += o + "(" + a + ") ")
            : e.style.removeProperty(Qr(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      var Yr = function (e, t, n, r) {
        return (
          Lr(e, t, n, r),
          function () {
            Ir(e, t, n, r);
          }
        );
      };
      function Gr(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          o = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var o = document.createEvent("HTMLEvents");
                  o.initEvent(t, n, r), e.dispatchEvent(o);
                }
              })(e, "transitionend", !0);
          }, t + n),
          a = Yr(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(o), a();
        };
      }
      function Xr(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = Kr(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var o = Gr(e, n, r),
          a = Yr(e, "transitionend", t);
        return function () {
          o(), a();
        };
      }
      function Jr(e) {
        void 0 === e && (e = Mr());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (zu) {
          return e.body;
        }
      }
      function Zr(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      var eo,
        to = ((eo = "modal-open"), "".concat("data-rr-ui-").concat(eo)),
        no = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.ownerDocument,
              r = t.handleContainerOverflow,
              o = void 0 === r || r,
              a = t.isRTL,
              i = void 0 !== a && a;
            J(this, e),
              (this.handleContainerOverflow = o),
              (this.isRTL = i),
              (this.modals = []),
              (this.ownerDocument = n);
          }
          return (
            ne(e, [
              {
                key: "getScrollbarWidth",
                value: function () {
                  return (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : document,
                      t = e.defaultView;
                    return Math.abs(
                      t.innerWidth - e.documentElement.clientWidth
                    );
                  })(this.ownerDocument);
                },
              },
              {
                key: "getElement",
                value: function () {
                  return (this.ownerDocument || document).body;
                },
              },
              { key: "setModalAttributes", value: function (e) {} },
              { key: "removeModalAttributes", value: function (e) {} },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = { overflow: "hidden" },
                    n = this.isRTL ? "paddingLeft" : "paddingRight",
                    r = this.getElement();
                  (e.style = rn({ overflow: r.style.overflow }, n, r.style[n])),
                    e.scrollBarWidth &&
                      (t[n] = "".concat(
                        parseInt(Kr(r, n) || "0", 10) + e.scrollBarWidth,
                        "px"
                      )),
                    r.setAttribute(to, ""),
                    Kr(r, t);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e = this;
                  g(this.modals).forEach(function (t) {
                    return e.remove(t);
                  });
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this.getElement();
                  t.removeAttribute(to), Object.assign(t.style, e.style);
                },
              },
              {
                key: "add",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  return -1 !== t
                    ? t
                    : ((t = this.modals.length),
                      this.modals.push(e),
                      this.setModalAttributes(e),
                      0 !== t ||
                        ((this.state = {
                          scrollBarWidth: this.getScrollbarWidth(),
                          style: {},
                        }),
                        this.handleContainerOverflow &&
                          this.setContainerStyle(this.state)),
                      t);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  -1 !== t &&
                    (this.modals.splice(t, 1),
                    !this.modals.length &&
                      this.handleContainerOverflow &&
                      this.removeContainerStyle(this.state),
                    this.removeModalAttributes(e));
                },
              },
              {
                key: "isTopModal",
                value: function (e) {
                  return (
                    !!this.modals.length &&
                    this.modals[this.modals.length - 1] === e
                  );
                },
              },
            ]),
            e
          );
        })(),
        ro = no,
        oo = (0, l.createContext)(Or ? window : void 0);
      oo.Provider;
      function ao() {
        return (0, l.useContext)(oo);
      }
      var io = function (e, t) {
        return Or
          ? null == e
            ? (t || Mr()).body
            : ("function" === typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
          : null;
      };
      var so,
        lo = [
          "show",
          "role",
          "className",
          "style",
          "children",
          "backdrop",
          "keyboard",
          "onBackdropClick",
          "onEscapeKeyDown",
          "transition",
          "backdropTransition",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "renderDialog",
          "renderBackdrop",
          "manager",
          "container",
          "onShow",
          "onHide",
          "onExit",
          "onExited",
          "onExiting",
          "onEnter",
          "onEntering",
          "onEntered",
        ];
      function uo(e) {
        var t = ao(),
          n =
            e ||
            (function (e) {
              return (
                so ||
                  (so = new ro({
                    ownerDocument: null == e ? void 0 : e.document,
                  })),
                so
              );
            })(t),
          r = (0, l.useRef)({ dialog: null, backdrop: null });
        return Object.assign(r.current, {
          add: function () {
            return n.add(r.current);
          },
          remove: function () {
            return n.remove(r.current);
          },
          isTopModal: function () {
            return n.isTopModal(r.current);
          },
          setDialogRef: (0, l.useCallback)(function (e) {
            r.current.dialog = e;
          }, []),
          setBackdropRef: (0, l.useCallback)(function (e) {
            r.current.backdrop = e;
          }, []),
        });
      }
      var co = (0, l.forwardRef)(function (e, t) {
        var n = e.show,
          r = void 0 !== n && n,
          o = e.role,
          i = void 0 === o ? "dialog" : o,
          s = e.className,
          u = e.style,
          c = e.children,
          d = e.backdrop,
          f = void 0 === d || d,
          p = e.keyboard,
          h = void 0 === p || p,
          m = e.onBackdropClick,
          y = e.onEscapeKeyDown,
          g = e.transition,
          b = e.backdropTransition,
          w = e.autoFocus,
          x = void 0 === w || w,
          k = e.enforceFocus,
          S = void 0 === k || k,
          E = e.restoreFocus,
          C = void 0 === E || E,
          N = e.restoreFocusOptions,
          j = e.renderDialog,
          R = e.renderBackdrop,
          O =
            void 0 === R
              ? function (e) {
                  return (0, fn.jsx)("div", Object.assign({}, e));
                }
              : R,
          T = e.manager,
          _ = e.container,
          P = e.onShow,
          L = e.onHide,
          M = void 0 === L ? function () {} : L,
          A = e.onExit,
          I = e.onExited,
          z = e.onExiting,
          F = e.onEnter,
          B = e.onEntering,
          D = e.onEntered,
          q = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, lo),
          U = (function (e, t) {
            var n = ao(),
              r = v(
                (0, l.useState)(function () {
                  return io(e, null == n ? void 0 : n.document);
                }),
                2
              ),
              o = r[0],
              a = r[1];
            if (!o) {
              var i = io(e);
              i && a(i);
            }
            return (
              (0, l.useEffect)(
                function () {
                  t && o && t(o);
                },
                [t, o]
              ),
              (0, l.useEffect)(
                function () {
                  var t = io(e);
                  t !== o && a(t);
                },
                [e, o]
              ),
              o
            );
          })(_),
          H = uo(T),
          V = (function () {
            var e = (0, l.useRef)(!0),
              t = (0, l.useRef)(function () {
                return e.current;
              });
            return (
              (0, l.useEffect)(function () {
                return (
                  (e.current = !0),
                  function () {
                    e.current = !1;
                  }
                );
              }, []),
              t.current
            );
          })(),
          W = (function (e) {
            var t = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(function () {
                t.current = e;
              }),
              t.current
            );
          })(r),
          Q = v((0, l.useState)(!r), 2),
          $ = Q[0],
          K = Q[1],
          Y = (0, l.useRef)(null);
        (0, l.useImperativeHandle)(
          t,
          function () {
            return H;
          },
          [H]
        ),
          Or && !W && r && (Y.current = Jr()),
          g || r || $ ? r && $ && K(!1) : K(!0);
        var G = Br(function () {
            if (
              (H.add(),
              (ne.current = Yr(document, "keydown", ee)),
              (te.current = Yr(
                document,
                "focus",
                function () {
                  return setTimeout(J);
                },
                !0
              )),
              P && P(),
              x)
            ) {
              var e = Jr(document);
              H.dialog &&
                e &&
                !Zr(H.dialog, e) &&
                ((Y.current = e), H.dialog.focus());
            }
          }),
          X = Br(function () {
            var e;
            (H.remove(),
            null == ne.current || ne.current(),
            null == te.current || te.current(),
            C) &&
              (null == (e = Y.current) || null == e.focus || e.focus(N),
              (Y.current = null));
          });
        (0, l.useEffect)(
          function () {
            r && U && G();
          },
          [r, U, G]
        ),
          (0, l.useEffect)(
            function () {
              $ && X();
            },
            [$, X]
          ),
          Ur(function () {
            X();
          });
        var J = Br(function () {
            if (S && V() && H.isTopModal()) {
              var e = Jr();
              H.dialog && e && !Zr(H.dialog, e) && H.dialog.focus();
            }
          }),
          Z = Br(function (e) {
            e.target === e.currentTarget &&
              (null == m || m(e), !0 === f && M());
          }),
          ee = Br(function (e) {
            h &&
              27 === e.keyCode &&
              H.isTopModal() &&
              (null == y || y(e), e.defaultPrevented || M());
          }),
          te = (0, l.useRef)(),
          ne = (0, l.useRef)(),
          re = g;
        if (!U || !(r || (re && !$))) return null;
        var oe = Object.assign(
            {
              role: i,
              ref: H.setDialogRef,
              "aria-modal": "dialog" === i || void 0,
            },
            q,
            { style: u, className: s, tabIndex: -1 }
          ),
          ae = j
            ? j(oe)
            : (0, fn.jsx)(
                "div",
                Object.assign({}, oe, {
                  children: l.cloneElement(c, { role: "document" }),
                })
              );
        re &&
          (ae = (0, fn.jsx)(re, {
            appear: !0,
            unmountOnExit: !0,
            in: !!r,
            onExit: A,
            onExiting: z,
            onExited: function () {
              K(!0), null == I || I.apply(void 0, arguments);
            },
            onEnter: F,
            onEntering: B,
            onEntered: D,
            children: ae,
          }));
        var ie = null;
        if (f) {
          var se = b;
          (ie = O({ ref: H.setBackdropRef, onClick: Z })),
            se && (ie = (0, fn.jsx)(se, { appear: !0, in: !!r, children: ie }));
        }
        return (0,
        fn.jsx)(fn.Fragment, { children: a.createPortal((0, fn.jsxs)(fn.Fragment, { children: [ie, ae] }), U) });
      });
      co.displayName = "Modal";
      var fo = Object.assign(co, { Manager: ro });
      function po(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ae(e));

        );
        return e;
      }
      function ho() {
        return (
          (ho =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = po(e, t);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : n)
                      : o.value;
                  }
                }),
          ho.apply(this, arguments)
        );
      }
      var mo = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function vo(e, t) {
        return mo(e.querySelectorAll(t));
      }
      function yo(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var go,
        bo = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        wo = ".sticky-top",
        xo = ".navbar-toggler",
        ko = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "adjustAndStore",
                value: function (e, t, n) {
                  var r = t.style[e];
                  (t.dataset[e] = r),
                    Kr(t, rn({}, e, "".concat(parseFloat(Kr(t, e)) + n, "px")));
                },
              },
              {
                key: "restore",
                value: function (e, t) {
                  var n = t.dataset[e];
                  void 0 !== n && (delete t.dataset[e], Kr(t, rn({}, e, n)));
                },
              },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = this;
                  ho(ae(n.prototype), "setContainerStyle", this).call(this, e);
                  var r,
                    o,
                    a = this.getElement();
                  if (
                    ((o = "modal-open"),
                    (r = a).classList
                      ? r.classList.add(o)
                      : (function (e, t) {
                          return e.classList
                            ? !!t && e.classList.contains(t)
                            : -1 !==
                                (
                                  " " +
                                  (e.className.baseVal || e.className) +
                                  " "
                                ).indexOf(" " + t + " ");
                        })(r, o) ||
                        ("string" === typeof r.className
                          ? (r.className = r.className + " " + o)
                          : r.setAttribute(
                              "class",
                              ((r.className && r.className.baseVal) || "") +
                                " " +
                                o
                            )),
                    e.scrollBarWidth)
                  ) {
                    var i = this.isRTL ? "paddingLeft" : "paddingRight",
                      s = this.isRTL ? "marginLeft" : "marginRight";
                    vo(a, bo).forEach(function (n) {
                      return t.adjustAndStore(i, n, e.scrollBarWidth);
                    }),
                      vo(a, wo).forEach(function (n) {
                        return t.adjustAndStore(s, n, -e.scrollBarWidth);
                      }),
                      vo(a, xo).forEach(function (n) {
                        return t.adjustAndStore(s, n, e.scrollBarWidth);
                      });
                  }
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this;
                  ho(ae(n.prototype), "removeContainerStyle", this).call(
                    this,
                    e
                  );
                  var r,
                    o,
                    a = this.getElement();
                  (o = "modal-open"),
                    (r = a).classList
                      ? r.classList.remove(o)
                      : "string" === typeof r.className
                      ? (r.className = yo(r.className, o))
                      : r.setAttribute(
                          "class",
                          yo((r.className && r.className.baseVal) || "", o)
                        );
                  var i = this.isRTL ? "paddingLeft" : "paddingRight",
                    s = this.isRTL ? "marginLeft" : "marginRight";
                  vo(a, bo).forEach(function (e) {
                    return t.restore(i, e);
                  }),
                    vo(a, wo).forEach(function (e) {
                      return t.restore(s, e);
                    }),
                    vo(a, xo).forEach(function (e) {
                      return t.restore(s, e);
                    });
                },
              },
            ]),
            n
          );
        })(ro);
      var So = !1,
        Eo = l.createContext(null),
        Co = "unmounted",
        No = "exited",
        jo = "entering",
        Ro = "entered",
        Oo = "exiting",
        To = (function (e) {
          var t, n;
          function r(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var o,
              a = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? a
                  ? ((o = No), (r.appearStatus = jo))
                  : (o = Ro)
                : (o = t.unmountOnExit || t.mountOnEnter ? Co : No),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            re(t, n),
            (r.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === Co ? { status: No } : null;
            });
          var o = r.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== jo && n !== Ro && (t = jo)
                  : (n !== jo && n !== Ro) || (t = Oo);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === jo)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : a.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === No &&
                  this.setState({ status: Co });
            }),
            (o.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [r] : [a.findDOMNode(this), r],
                i = o[0],
                s = o[1],
                l = this.getTimeouts(),
                u = r ? l.appear : l.enter;
              (!e && !n) || So
                ? this.safeSetState({ status: Ro }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, s),
                  this.safeSetState({ status: jo }, function () {
                    t.props.onEntering(i, s),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: Ro }, function () {
                          t.props.onEntered(i, s);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : a.findDOMNode(this);
              t && !So
                ? (this.props.onExit(r),
                  this.safeSetState({ status: Oo }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: No }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: No }, function () {
                    e.props.onExited(r);
                  });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : a.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var o = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = o[0],
                    s = o[1];
                  this.props.addEndListener(i, s);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var e = this.state.status;
              if (e === Co) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  w(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return l.createElement(
                Eo.Provider,
                { value: null },
                "function" === typeof n
                  ? n(e, r)
                  : l.cloneElement(l.Children.only(n), r)
              );
            }),
            r
          );
        })(l.Component);
      function _o() {}
      (To.contextType = Eo),
        (To.propTypes = {}),
        (To.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: _o,
          onEntering: _o,
          onEntered: _o,
          onExit: _o,
          onExiting: _o,
          onExited: _o,
        }),
        (To.UNMOUNTED = Co),
        (To.EXITED = No),
        (To.ENTERING = jo),
        (To.ENTERED = Ro),
        (To.EXITING = Oo);
      var Po = To;
      function Lo(e, t) {
        var n = Kr(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function Mo(e, t) {
        var n = Lo(e, "transitionDuration"),
          r = Lo(e, "transitionDelay"),
          o = Xr(
            e,
            function (n) {
              n.target === e && (o(), t(n));
            },
            n + r
          );
      }
      var Ao,
        Io = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "addEndListener",
          "children",
          "childRef",
        ],
        zo = l.forwardRef(function (e, t) {
          var n = e.onEnter,
            r = e.onEntering,
            o = e.onEntered,
            i = e.onExit,
            s = e.onExiting,
            u = e.onExited,
            c = e.addEndListener,
            d = e.children,
            f = e.childRef,
            p = un(e, Io),
            h = (0, l.useRef)(null),
            m = qr(h, f),
            v = function (e) {
              var t;
              m(
                (t = e) && "setState" in t
                  ? a.findDOMNode(t)
                  : null != t
                  ? t
                  : null
              );
            },
            y = function (e) {
              return function (t) {
                e && h.current && e(h.current, t);
              };
            },
            g = (0, l.useCallback)(y(n), [n]),
            b = (0, l.useCallback)(y(r), [r]),
            w = (0, l.useCallback)(y(o), [o]),
            x = (0, l.useCallback)(y(i), [i]),
            k = (0, l.useCallback)(y(s), [s]),
            S = (0, l.useCallback)(y(u), [u]),
            E = (0, l.useCallback)(y(c), [c]);
          return (0, fn.jsx)(
            Po,
            an(
              an({ ref: t }, p),
              {},
              {
                onEnter: g,
                onEntered: w,
                onEntering: b,
                onExit: x,
                onExited: S,
                onExiting: k,
                addEndListener: E,
                nodeRef: h,
                children:
                  "function" === typeof d
                    ? function (e, t) {
                        return d(e, an(an({}, t), {}, { ref: v }));
                      }
                    : l.cloneElement(d, { ref: v }),
              }
            )
          );
        }),
        Fo = ["className", "children", "transitionClasses"],
        Bo = (rn((Ao = {}), jo, "show"), rn(Ao, Ro, "show"), Ao),
        Do = l.forwardRef(function (e, t) {
          var n = e.className,
            r = e.children,
            o = e.transitionClasses,
            a = void 0 === o ? {} : o,
            i = un(e, Fo),
            s = (0, l.useCallback)(
              function (e, t) {
                !(function (e) {
                  e.offsetHeight;
                })(e),
                  null == i.onEnter || i.onEnter(e, t);
              },
              [i]
            );
          return (0, fn.jsx)(
            zo,
            an(
              an({ ref: t, addEndListener: Mo }, i),
              {},
              {
                onEnter: s,
                childRef: r.ref,
                children: function (e, t) {
                  return l.cloneElement(
                    r,
                    an(
                      an({}, t),
                      {},
                      {
                        className: dn()(
                          "fade",
                          n,
                          r.props.className,
                          Bo[e],
                          a[e]
                        ),
                      }
                    )
                  );
                },
              }
            )
          );
        });
      (Do.defaultProps = {
        in: !1,
        timeout: 300,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (Do.displayName = "Fade");
      var qo = Do,
        Uo = Xn("modal-body"),
        Ho = l.createContext({ onHide: function () {} }),
        Vo = [
          "bsPrefix",
          "className",
          "contentClassName",
          "centered",
          "size",
          "fullscreen",
          "children",
          "scrollable",
        ],
        Wo = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.contentClassName,
            a = e.centered,
            i = e.size,
            s = e.fullscreen,
            l = e.children,
            u = e.scrollable,
            c = un(e, Vo);
          n = mn(n, "modal");
          var d = "".concat(n, "-dialog"),
            f =
              "string" === typeof s
                ? "".concat(n, "-fullscreen-").concat(s)
                : "".concat(n, "-fullscreen");
          return (0,
          fn.jsx)("div", an(an({}, c), {}, { ref: t, className: dn()(d, r, i && "".concat(n, "-").concat(i), a && "".concat(d, "-centered"), u && "".concat(d, "-scrollable"), s && f), children: (0, fn.jsx)("div", { className: dn()("".concat(n, "-content"), o), children: l }) }));
        });
      Wo.displayName = "ModalDialog";
      var Qo = Wo,
        $o = Xn("modal-footer"),
        Ko = ["className", "variant"],
        Yo = {
          "aria-label": On().string,
          onClick: On().func,
          variant: On().oneOf(["white"]),
        },
        Go = l.forwardRef(function (e, t) {
          var n = e.className,
            r = e.variant,
            o = un(e, Ko);
          return (0,
          fn.jsx)("button", an({ ref: t, type: "button", className: dn()("btn-close", r && "btn-close-".concat(r), n) }, o));
        });
      (Go.displayName = "CloseButton"),
        (Go.propTypes = Yo),
        (Go.defaultProps = { "aria-label": "Close" });
      var Xo = Go,
        Jo = [
          "closeLabel",
          "closeVariant",
          "closeButton",
          "onHide",
          "children",
        ],
        Zo = l.forwardRef(function (e, t) {
          var n = e.closeLabel,
            r = e.closeVariant,
            o = e.closeButton,
            a = e.onHide,
            i = e.children,
            s = un(e, Jo),
            u = (0, l.useContext)(Ho),
            c = Br(function () {
              null == u || u.onHide(), null == a || a();
            });
          return (0,
          fn.jsxs)("div", an(an({ ref: t }, s), {}, { children: [i, o && (0, fn.jsx)(Xo, { "aria-label": n, variant: r, onClick: c })] }));
        });
      Zo.defaultProps = { closeLabel: "Close", closeButton: !1 };
      var ea = Zo,
        ta = ["bsPrefix", "className"],
        na = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = un(e, ta);
          return (
            (n = mn(n, "modal-header")),
            (0, fn.jsx)(
              ea,
              an(an({ ref: t }, o), {}, { className: dn()(r, n) })
            )
          );
        });
      (na.displayName = "ModalHeader"),
        (na.defaultProps = { closeLabel: "Close", closeButton: !1 });
      var ra,
        oa = na,
        aa = Xn("modal-title", {
          Component:
            ((ra = "h4"),
            l.forwardRef(function (e, t) {
              return (0,
              fn.jsx)("div", an(an({}, e), {}, { ref: t, className: dn()(e.className, ra) }));
            })),
        }),
        ia = [
          "bsPrefix",
          "className",
          "style",
          "dialogClassName",
          "contentClassName",
          "children",
          "dialogAs",
          "aria-labelledby",
          "aria-describedby",
          "aria-label",
          "show",
          "animation",
          "backdrop",
          "keyboard",
          "onEscapeKeyDown",
          "onShow",
          "onHide",
          "container",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "onEntered",
          "onExit",
          "onExiting",
          "onEnter",
          "onEntering",
          "onExited",
          "backdropClassName",
          "manager",
        ],
        sa = {
          show: !1,
          backdrop: !0,
          keyboard: !0,
          autoFocus: !0,
          enforceFocus: !0,
          restoreFocus: !0,
          animation: !0,
          dialogAs: Qo,
        };
      function la(e) {
        return (0, fn.jsx)(qo, an(an({}, e), {}, { timeout: null }));
      }
      function ua(e) {
        return (0, fn.jsx)(qo, an(an({}, e), {}, { timeout: null }));
      }
      var ca = l.forwardRef(function (e, t) {
        var n = e.bsPrefix,
          r = e.className,
          o = e.style,
          a = e.dialogClassName,
          i = e.contentClassName,
          s = e.children,
          u = e.dialogAs,
          c = e["aria-labelledby"],
          d = e["aria-describedby"],
          f = e["aria-label"],
          p = e.show,
          h = e.animation,
          m = e.backdrop,
          y = e.keyboard,
          g = e.onEscapeKeyDown,
          b = e.onShow,
          w = e.onHide,
          x = e.container,
          k = e.autoFocus,
          S = e.enforceFocus,
          E = e.restoreFocus,
          C = e.restoreFocusOptions,
          N = e.onEntered,
          j = e.onExit,
          R = e.onExiting,
          O = e.onEnter,
          T = e.onEntering,
          _ = e.onExited,
          P = e.backdropClassName,
          L = e.manager,
          M = un(e, ia),
          A = v((0, l.useState)({}), 2),
          I = A[0],
          z = A[1],
          F = v((0, l.useState)(!1), 2),
          B = F[0],
          D = F[1],
          q = (0, l.useRef)(!1),
          U = (0, l.useRef)(!1),
          H = (0, l.useRef)(null),
          V = v((0, l.useState)(null), 2),
          W = V[0],
          Q = V[1],
          $ = qr(t, Q),
          K = Br(w),
          Y = "rtl" === (0, l.useContext)(hn).dir;
        n = mn(n, "modal");
        var G = (0, l.useMemo)(
          function () {
            return { onHide: K };
          },
          [K]
        );
        function X() {
          return (
            L ||
            (function (e) {
              return go || (go = new ko(e)), go;
            })({ isRTL: Y })
          );
        }
        function J(e) {
          if (Or) {
            var t = X().getScrollbarWidth() > 0,
              n = e.scrollHeight > Mr(e).documentElement.clientHeight;
            z({
              paddingRight: t && !n ? zr() : void 0,
              paddingLeft: !t && n ? zr() : void 0,
            });
          }
        }
        var Z = Br(function () {
          W && J(W.dialog);
        });
        Ur(function () {
          Ir(window, "resize", Z), null == H.current || H.current();
        });
        var ee = function () {
            q.current = !0;
          },
          te = function (e) {
            q.current && W && e.target === W.dialog && (U.current = !0),
              (q.current = !1);
          },
          ne = function () {
            D(!0),
              (H.current = Xr(W.dialog, function () {
                D(!1);
              }));
          },
          re = function (e) {
            "static" !== m
              ? U.current || e.target !== e.currentTarget
                ? (U.current = !1)
                : null == w || w()
              : (function (e) {
                  e.target === e.currentTarget && ne();
                })(e);
          },
          oe = (0, l.useCallback)(
            function (e) {
              return (0, fn.jsx)(
                "div",
                an(
                  an({}, e),
                  {},
                  {
                    className: dn()("".concat(n, "-backdrop"), P, !h && "show"),
                  }
                )
              );
            },
            [h, P, n]
          ),
          ae = an(an({}, o), I);
        ae.display = "block";
        return (0, fn.jsx)(Ho.Provider, {
          value: G,
          children: (0, fn.jsx)(fo, {
            show: p,
            ref: $,
            backdrop: m,
            container: x,
            keyboard: !0,
            autoFocus: k,
            enforceFocus: S,
            restoreFocus: E,
            restoreFocusOptions: C,
            onEscapeKeyDown: function (e) {
              y
                ? null == g || g(e)
                : (e.preventDefault(), "static" === m && ne());
            },
            onShow: b,
            onHide: w,
            onEnter: function (e, t) {
              e && J(e), null == O || O(e, t);
            },
            onEntering: function (e, t) {
              null == T || T(e, t), Lr(window, "resize", Z);
            },
            onEntered: N,
            onExit: function (e) {
              null == H.current || H.current(), null == j || j(e);
            },
            onExiting: R,
            onExited: function (e) {
              e && (e.style.display = ""),
                null == _ || _(e),
                Ir(window, "resize", Z);
            },
            manager: X(),
            transition: h ? la : void 0,
            backdropTransition: h ? ua : void 0,
            renderBackdrop: oe,
            renderDialog: function (e) {
              return (0, fn.jsx)(
                "div",
                an(
                  an({ role: "dialog" }, e),
                  {},
                  {
                    style: ae,
                    className: dn()(
                      r,
                      n,
                      B && "".concat(n, "-static"),
                      !h && "show"
                    ),
                    onClick: m ? re : void 0,
                    onMouseUp: te,
                    "aria-label": f,
                    "aria-labelledby": c,
                    "aria-describedby": d,
                    children: (0, fn.jsx)(
                      u,
                      an(
                        an({}, M),
                        {},
                        {
                          onMouseDown: ee,
                          className: a,
                          contentClassName: i,
                          children: s,
                        }
                      )
                    ),
                  }
                )
              );
            },
          }),
        });
      });
      (ca.displayName = "Modal"), (ca.defaultProps = sa);
      var da = Object.assign(ca, {
          Body: Uo,
          Header: oa,
          Title: aa,
          Footer: $o,
          Dialog: Qo,
          TRANSITION_DURATION: 300,
          BACKDROP_TRANSITION_DURATION: 150,
        }),
        fa = n(183),
        pa = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).onClick = r.onClick.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onClick",
                value: function () {
                  this.props.onClick && this.props.onClick(this.props.navigate);
                },
              },
              {
                key: "getClassNames",
                value: function (e, t) {
                  return [
                    t || "",
                    this.props["".concat(e, "ClassName")] || "",
                  ].join(" ");
                },
              },
              {
                key: "getStyle",
                value: function (e) {
                  return this.props["".concat(e, "Style")] || {};
                },
              },
              {
                key: "renderLabel",
                value: function () {
                  return (
                    !!this.props.label &&
                    (0, fn.jsx)("span", {
                      className: this.getClassNames("label"),
                      style: this.getStyle("label"),
                      children: this.props.label,
                    })
                  );
                },
              },
              {
                key: "renderButton",
                value: function () {
                  var e = this.props.variant || "secondary",
                    t =
                      void 0 !== this.props.disabled &&
                      null !== this.props.disabled &&
                      this.props.disabled,
                    n = "warning" !== this.props.variant;
                  return (0, fn.jsx)("div", {
                    className:
                      "icon-button " + (this.props.containerClassName || ""),
                    style: this.getStyle("container"),
                    children: (0, fn.jsx)(Rr, {
                      variant: e,
                      disabled: t,
                      style: this.getStyle("button"),
                      onClick: this.onClick,
                      children: (0, fn.jsxs)("div", {
                        children: [
                          (0, fn.jsx)("img", {
                            src: this.props.icon,
                            alt: this.props.label || "",
                            className: this.getClassNames(
                              "icon",
                              n ? "invert" : ""
                            ),
                            style: this.getStyle("icon"),
                          }),
                          this.renderLabel(),
                          this.props.children,
                        ],
                      }),
                    }),
                  });
                },
              },
              {
                key: "renderLink",
                value: function () {
                  return (0, fn.jsx)(_t, {
                    to: this.props.link,
                    children: this.renderButton(),
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.link
                    ? this.renderLink()
                    : this.renderButton();
                },
              },
            ]),
            n
          );
        })(l.Component);
      var ha = function (e) {
        return (0, fn.jsx)(pa, an(an({}, e), {}, { navigate: ct() }));
      };
      var ma = n.p + "static/media/check.3202d9db099f3303960f6f641bc8045e.svg";
      var va =
          n.p +
          "static/media/content_copy.668faa1c09ce26fe152f1048a0ed4397.svg",
        ya = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = {
                variant: void 0,
                image: void 0,
              }),
              (r.copyToClipboard = r.copyToClipboard.bind(se(r))),
              (r.resetButton = r.resetButton.bind(se(r))),
              (r.onSuccess = r.onSuccess.bind(se(r))),
              (r.onError = r.onError.bind(se(r))),
              (r.scheduleResetButton = r.scheduleResetButton.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "copyToClipboard",
                value: function () {
                  navigator.clipboard
                    .writeText(this.props.text)
                    .then(this.onSuccess)
                    .catch(this.onError);
                },
              },
              {
                key: "onSuccess",
                value: function () {
                  this.onSuccessOrError(
                    "default" === this.props.variant ? "default" : "success",
                    ma
                  );
                },
              },
              {
                key: "onError",
                value: function () {
                  this.onSuccessOrError(
                    "default" === this.props.variant ? "default" : "danger",
                    va
                  );
                },
              },
              {
                key: "onSuccessOrError",
                value: function (e, t) {
                  this.setState(
                    { variant: e, image: t },
                    this.scheduleResetButton
                  );
                },
              },
              {
                key: "scheduleResetButton",
                value: function () {
                  setTimeout(this.resetButton, 700);
                },
              },
              {
                key: "resetButton",
                value: function () {
                  this.setState({ variant: void 0, image: void 0 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.variant || this.props.variant || "warning",
                    t = { filter: "warning" === e ? "none" : "invert(100%)" },
                    n = this.state.image || va;
                  return (0, fn.jsx)(Rr, {
                    variant: e,
                    onClick: this.copyToClipboard,
                    className: this.props.className || "",
                    children: (0, fn.jsx)("img", {
                      src: n,
                      alt: "Copy URL",
                      style: t,
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component);
      var ga = n.p + "static/media/close.53c9f4b6ba9fca553d1eb9cda88a11af.svg";
      function ba() {
        window.getSelection().removeAllRanges(),
          window
            .getSelection()
            .selectAllChildren(document.querySelector(".qm-join-summary-url"));
      }
      var wa = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).onCancel = r.onCancel.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onCancel",
                value: function (e) {
                  this.props.closeRoomSignal
                    ? this.props.socket.emit(
                        It,
                        this.props.game.hostingRoom.roomCode
                      )
                    : e("/");
                },
              },
              {
                key: "renderGitHubCorner",
                value: function () {
                  return (
                    !0 === this.props.showGitHubLink &&
                    (0, fn.jsx)(fa.Z, {
                      href: "https://github.com/david-04/quiz-mate",
                    })
                  );
                },
              },
              {
                key: "renderJoinInfo",
                value: function () {
                  var e = nn()
                    ? "qm-join-summary-copy-button"
                    : "qm-join-summary-copy-button-disabled";
                  return (
                    !0 === this.props.renderJoinInfo &&
                    (0, fn.jsxs)("div", {
                      className: "qm-join-summary",
                      children: [
                        (0, fn.jsx)("div", { children: "Join:" }),
                        (0, fn.jsx)("div", {
                          className: "qm-join-summary-url",
                          onClick: ba,
                          children: en(this.props.game.hostingRoom.roomCode),
                        }),
                        (0, fn.jsx)("div", {
                          className: e,
                          children: (0, fn.jsx)(ya, {
                            text: en(this.props.game.hostingRoom.roomCode),
                            variant: "default",
                          }),
                        }),
                      ],
                    })
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsxs)("div", {
                    className: "outer",
                    children: [
                      this.renderJoinInfo(),
                      this.renderGitHubCorner(),
                      (0, fn.jsx)("div", {
                        className: "middle",
                        children: (0, fn.jsx)("div", {
                          className: "inner",
                          children: this.props.children,
                        }),
                      }),
                      this.props.cancel &&
                        (0, fn.jsx)(ha, {
                          icon: this.props.cancelIcon || ga,
                          label: this.props.cancel,
                          containerClassName: "cancel-btn",
                          buttonClassName: "qm-fixed-top qm-fixed-left",
                          onClick: this.onCancel,
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        xa = wa,
        ka = l.createContext(null);
      ka.displayName = "InputGroupContext";
      var Sa = ka,
        Ea = ["bsPrefix", "size", "hasValidation", "className", "as"],
        Ca = Xn("input-group-text", { Component: "span" }),
        Na = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.size,
            o = e.hasValidation,
            a = e.className,
            i = e.as,
            s = void 0 === i ? "div" : i,
            u = un(e, Ea);
          n = mn(n, "input-group");
          var c = (0, l.useMemo)(function () {
            return {};
          }, []);
          return (0,
          fn.jsx)(Sa.Provider, { value: c, children: (0, fn.jsx)(s, an(an({ ref: t }, u), {}, { className: dn()(a, n, r && "".concat(n, "-").concat(r), o && "has-validation") })) });
        });
      Na.displayName = "InputGroup";
      var ja = Object.assign(Na, {
        Text: Ca,
        Radio: function (e) {
          return (0, fn.jsx)(Ca, {
            children: (0, fn.jsx)(zn, an({ type: "radio" }, e)),
          });
        },
        Checkbox: function (e) {
          return (0, fn.jsx)(Ca, {
            children: (0, fn.jsx)(zn, an({ type: "checkbox" }, e)),
          });
        },
      });
      var Ra =
        n.p + "static/media/check_box.0ae15f480b315aec562b74b690a2f243.svg";
      var Oa =
          n.p +
          "static/media/check_box_outline_blank.0887c9f145b6916ded4dcdbec3b662ee.svg",
        Ta = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).onQuestionTextChange =
                r.onQuestionTextChange.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onQuestionTextChange",
                value: function (e) {
                  this.updateQuestion(e.target.value);
                },
              },
              {
                key: "updateQuestion",
                value: function (e) {
                  this.props.update({
                    question: e,
                    correct: this.props.question.correct,
                    answers: this.props.question.answers,
                  });
                },
              },
              {
                key: "setCorrectAnswerIndex",
                value: function (e) {
                  this.props.update({
                    question: this.props.question.question,
                    correct: e,
                    answers: this.props.question.answers,
                  });
                },
              },
              {
                key: "updateAnswer",
                value: function (e, t) {
                  var n = this.props.question.answers.slice();
                  (n[e] = t),
                    this.props.update({
                      question: this.props.question.question,
                      correct: this.props.question.correct,
                      answers: n,
                    });
                },
              },
              {
                key: "getMarkCorrectAnswerCallback",
                value: function (e) {
                  var t = this;
                  return function () {
                    return t.setCorrectAnswerIndex(e);
                  };
                },
              },
              {
                key: "getUpdateAnswerCallback",
                value: function (e) {
                  var t = this;
                  return function (n) {
                    return t.updateAnswer(e, n.target.value);
                  };
                },
              },
              {
                key: "answerBox",
                value: function (e) {
                  return (0, fn.jsx)(
                    Sn,
                    {
                      children: (0, fn.jsx)("div", {
                        className: "answer-row",
                        children: (0, fn.jsxs)(ja, {
                          children: [
                            (0, fn.jsxs)(Rr, {
                              variant: "secondary",
                              onClick: this.getMarkCorrectAnswerCallback(e),
                              children: [
                                (0, fn.jsx)("img", {
                                  src:
                                    e === this.props.question.correct ? Ra : Oa,
                                  className: "material-ui-icon answer-checkbox",
                                  alt: "Mark as correct answer",
                                }),
                                (0, fn.jsx)("span", {
                                  className: "answer-letter",
                                  children: Qt(e),
                                }),
                              ],
                            }),
                            (0, fn.jsx)(kr.Control, {
                              type: "text",
                              value: this.props.question.answers[e],
                              className:
                                "editor-text-box" +
                                (e === this.props.question.correct
                                  ? " editor-text-box-correct"
                                  : ""),
                              onChange: this.getUpdateAnswerCallback(e),
                              maxLength: "120",
                            }),
                          ],
                        }),
                      }),
                    },
                    e
                  );
                },
              },
              {
                key: "renderAnswerBoxes",
                value: function () {
                  for (var e = [], t = 0; t < 4; t++) e.push(this.answerBox(t));
                  return e;
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.question
                    ? (0, fn.jsxs)(wn, {
                        fluid: !0,
                        className: "question-editor-container",
                        children: [
                          (0, fn.jsx)(Sn, {
                            children: (0, fn.jsx)(kr.Control, {
                              as: "textarea",
                              value: this.props.question.question,
                              className: "editor-textarea",
                              onChange: this.onQuestionTextChange,
                              placeholder: "Question",
                              maxLength: "200",
                            }),
                          }),
                          this.renderAnswerBoxes(),
                        ],
                      })
                    : (0, fn.jsxs)("div", {
                        style: {
                          margin: "40px auto 0 10px",
                          textAlign: "left",
                          fontSize: "1.2rem",
                        },
                        children: [
                          (0, fn.jsx)("p", {
                            children:
                              "Use this editor to create or modify a quiz:",
                          }),
                          (0, fn.jsxs)("ul", {
                            children: [
                              (0, fn.jsx)("li", {
                                children: "Upload a quiz (if you have one)",
                              }),
                              (0, fn.jsx)("li", {
                                children:
                                  "Use the buttons above to add questions",
                              }),
                              (0, fn.jsx)("li", {
                                children:
                                  "Switch between questions on the left side",
                              }),
                            ],
                          }),
                          (0, fn.jsx)("p", {
                            children: "Quizzes are NOT saved on the server!",
                          }),
                          (0, fn.jsx)("p", {
                            style: { color: "red", fontWeight: "bold" },
                            children:
                              "You must download the quiz when finished.",
                          }),
                        ],
                      });
                },
              },
            ]),
            n
          );
        })(l.Component),
        _a = Ta,
        Pa = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).renderListItem = r.renderListItem.bind(
                se(r)
              )),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "renderListItem",
                value: function (e, t) {
                  var n = this;
                  return (0, fn.jsx)(
                    "div",
                    {
                      className:
                        "question-explorer-list-item" +
                        (this.props.selectedIndex === t
                          ? " item-selected"
                          : ""),
                      onClick: function () {
                        return n.props.selected(t);
                      },
                      children: "".concat(t + 1, ". ").concat(e.question),
                    },
                    t
                  );
                },
              },
              {
                key: "renderListItems",
                value: function () {
                  return 0 === this.props.questions.length
                    ? (0, fn.jsx)("div", {
                        className: "question-explorer-list",
                        style: { fontSize: "1rem", marginTop: "30px" },
                        children: "No questions yet",
                      })
                    : (0, fn.jsx)("div", {
                        className: "question-explorer-list",
                        children: this.props.questions.map(this.renderListItem),
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)("div", {
                    className: "question-explorer",
                    children: (0, fn.jsx)(wn, {
                      fluid: !0,
                      children: (0, fn.jsx)(Sn, {
                        children: this.renderListItems(),
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        La = Pa,
        Ma = {
          title: "Sample quiz",
          questions: [
            {
              question: "Which continent has only one country?",
              correct: 2,
              answers: ["Africa", "Asia", "Australia", "South America"],
            },
            {
              question: "Which vegetable gives Popeye his strength?",
              correct: 3,
              answers: ["Asparagus", "Broccoli", "Lentils", "Spinach"],
            },
            {
              question:
                "The head of which country resides at number 10 Downing Street?",
              correct: 3,
              answers: ["Brazil", "Canada", "Nigeria", "United Kingdom"],
            },
          ],
        };
      function Aa(e, t) {
        var n, r;
        return (
          Array.isArray(e) && (e = { title: t, questions: e }),
          (e.title = e.title.trim()),
          (n = e).title || (n.title = t),
          (r = e).questions || (r.questions = []),
          e
        );
      }
      function Ia(e) {
        !(function (e) {
          Object.prototype.hasOwnProperty.call(e, "title") ||
            Fa("The quiz has no title");
          "string" !== typeof e.title &&
            Fa(
              "The title has a wrong data type (".concat(
                typeof e.title,
                " instead of string)"
              )
            );
          e.title.trim() || Fa("The title is empty");
        })(e),
          (function (e) {
            Object.prototype.hasOwnProperty.call(e, "questions") ||
              Fa("The quiz has no questions");
            Array.isArray(e.questions) || Fa("The questions are not an array");
            e.questions.length || Fa("The quiz does not contain any questions");
            e.questions.forEach(za);
          })(e);
      }
      function za(e, t) {
        var n = Ba(t);
        (e && "object" === typeof e && !Array.isArray(e)) ||
          Fa(
            "The ".concat(
              n,
              " question has an invalid format (it's not an object)"
            )
          );
        var r =
          "string" === typeof e.question && e.question.trim()
            ? 'question "'.concat(e.question.trim(), '"')
            : "the ".concat(n, " question");
        ("string" === typeof e.question && e.question.trim()) ||
          Fa("".concat(Da(r), " has no question text")),
          (function (e, t) {
            (!t || (Array.isArray(t) && !t.length)) &&
              Fa("".concat(Da(e), " has no answers"));
            Array.isArray(t) ||
              Fa(
                "The answers for "
                  .concat(e, " have an invalid type (")
                  .concat(typeof t, " instead of array)")
              );
            t.forEach(function (t, n) {
              var r =
                "string" === typeof t && t.trim()
                  ? 'Answer "'.concat(t.trim(), '" answer for ').concat(e)
                  : "The ".concat(Ba(n), " answer for ").concat(e);
              "string" !== typeof t &&
                Fa(
                  ""
                    .concat(r, " has an invalid type (")
                    .concat(typeof t, " instead of string)")
                ),
                t.trim() || Fa("".concat(r, " is empty"));
            });
          })(r, e.answers),
          (function (e, t) {
            Object.prototype.hasOwnProperty.call(t, "correct") ||
              Fa("".concat(Da(e), ' lacks the "correct" property'));
            "number" !== typeof t.correct &&
              Fa(
                [
                  'The "correct" property of '.concat(
                    e,
                    " has an invalid type"
                  ),
                  "(".concat(typeof t.correct, " instead of number)"),
                ].join(" ")
              );
            t.correct < 0 &&
              Fa(
                'The "correct" property of '
                  .concat(e, " is less than zero (value: ")
                  .concat(t.correct, ")")
              );
            t.answers.length < t.correct &&
              Fa(
                [
                  ""
                    .concat(Da(e), " has only ")
                    .concat(t.answers.length, " answers"),
                  " but marks the ".concat(
                    Ba(t.correct),
                    " as the correct one"
                  ),
                ].join(" ")
              );
          })(r, e);
      }
      function Fa(e) {
        throw new Error(e);
      }
      function Ba(e) {
        var t = e + 1,
          n = ["th", "st", "nd", "rd"][t % 10] || "th";
        return "".concat(t).concat(n);
      }
      function Da(e) {
        return e.trim().length
          ? e.trim().substr(0, 1).toUpperCase() + e.trim().substr(1)
          : e;
      }
      var qa =
        n.p + "static/media/add_box.975f2872009015a2e84f77ae726d3cad.svg";
      var Ua =
        n.p +
        "static/media/arrow_downward.7bf9a9064d1d1882c9bdba2fa5d43d77.svg";
      var Ha =
        n.p + "static/media/arrow_upward.dc140686fd1d38cdafa8c54842037839.svg";
      var Va =
        n.p +
        "static/media/delete_forever.ffbfbd3e977da16935042abeca8675df.svg";
      var Wa =
        n.p + "static/media/get_app.2a5c8749aa4a0af53316772fd8cc103b.svg";
      var Qa =
          n.p + "static/media/publish.4660b6a32223338c811f07fcea4c24cb.svg",
        $a = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).exitButton = function () {
                r.state.changed
                  ? r.setState({ exitModal: !0 })
                  : r.props.navigate("/host");
              }),
              (r.cancelUpload = function () {
                r.setState({ uploadModal: !1 }),
                  (r.inputFile.current.value = "");
              }),
              (r.cancelDownload = function () {
                r.setState({ downloadModal: !1, downloadModalMessage: void 0 });
              }),
              (r.loadProject = function () {
                r.setState({ uploadModal: !1 });
                var e = new FileReader();
                (e.onload = function (e) {
                  var t;
                  (t = Aa(JSON.parse(e.target.result))),
                    r.setState({ title: t.title, workspace: t.questions }),
                    (r.inputFile.current.value = "");
                }),
                  r.inputFile.current.files.item(0) &&
                    (r.setState({
                      originalName: r.inputFile.current.files.item(0).name,
                      changed: !1,
                    }),
                    e.readAsText(r.inputFile.current.files.item(0)));
              }),
              (r.downloadButton = function () {
                try {
                  Ia(r.assembleDownloadableQuiz()), r.downloadFile();
                } catch (t) {
                  var e = t instanceof Error ? t.message : "".concat(t);
                  r.setState({ downloadModal: !0, downloadModalMessage: e });
                }
              }),
              (r.downloadFile = function () {
                r.setState({ downloadModal: !1, downloadModalMessage: void 0 });
                var e = r.state.originalName;
                "" === e &&
                  ("" ===
                  (e = prompt(
                    "Enter the project name or leave the field empty:"
                  ))
                    ? (e = "questions.json")
                    : ((e += ".json"), r.setState({ originalName: e })));
                var t = JSON.stringify(r.assembleDownloadableQuiz(), null, 4);
                ln()(t, e), r.setState({ changed: !1 });
              }),
              (r.assembleDownloadableQuiz = function () {
                return { title: r.state.title, questions: r.state.workspace };
              }),
              (r.moveQuestion = function (e) {
                var t = r.state.selectedIndex,
                  n = t + e,
                  o = r.state.workspace.slice();
                o.splice(n, 0, o.splice(t, 1)[0]),
                  r.setState({ workspace: o, selectedIndex: n, changed: !0 });
              }),
              (r.addQuestion = function (e) {
                if (e) {
                  var t = r.state.workspace.slice();
                  t.splice(r.state.selectedIndex + 1, 0, {
                    question: "",
                    correct: 0,
                    answers: ["", "", "", ""],
                  }),
                    r.setState({
                      workspace: t,
                      selectedIndex: r.state.selectedIndex + 1,
                      changed: !0,
                    });
                } else
                  r.setState({
                    workspace: [].concat(g(r.state.workspace), [
                      { question: "", correct: 0, answers: ["", "", "", ""] },
                    ]),
                    selectedIndex: r.state.workspace.length,
                    changed: !0,
                  });
              }),
              (r.topButtonsConfig = function () {
                return [
                  {
                    text: "Exit",
                    icon: (0, fn.jsx)("img", {
                      src: ga,
                      className: "material-ui-icon",
                      alt: "Close",
                    }),
                    click: r.exitButton,
                  },
                  {
                    customUpload: !0,
                    text: "Upload",
                    icon: (0, fn.jsx)("img", {
                      src: Qa,
                      className: "material-ui-icon",
                      alt: "Upload",
                    }),
                    click: r.uploadFile,
                  },
                  {
                    variant:
                      0 !== r.state.workspace.length && r.state.changed
                        ? "success"
                        : null,
                    text: "Download",
                    icon: (0, fn.jsx)("img", {
                      src: Wa,
                      className: "material-ui-icon",
                      alt: "Download",
                    }),
                    click: r.downloadButton,
                    disabled:
                      0 === r.state.workspace.length || !r.state.changed,
                  },
                  {
                    text: "Move up",
                    icon: (0, fn.jsx)("img", {
                      src: Ha,
                      className: "material-ui-icon",
                      alt: "Move up",
                    }),
                    click: function () {
                      return r.moveQuestion(-1);
                    },
                    disabled: r.state.selectedIndex < 1,
                  },
                  {
                    text: "Move down",
                    icon: (0, fn.jsx)("img", {
                      src: Ua,
                      className: "material-ui-icon",
                      alt: "Move down",
                    }),
                    click: function () {
                      return r.moveQuestion(1);
                    },
                    disabled:
                      r.state.selectedIndex < 0 ||
                      r.state.selectedIndex + 1 === r.state.workspace.length,
                  },
                  {
                    text: "Delete",
                    icon: (0, fn.jsx)("img", {
                      src: Va,
                      className: "material-ui-icon",
                      alt: "Delete",
                    }),
                    click: r.deleteQuestion,
                    disabled: r.state.selectedIndex < 0,
                  },
                  {
                    text: "Add here",
                    icon: (0, fn.jsx)("img", {
                      src: qa,
                      className: "material-ui-icon",
                      alt: "Add here",
                    }),
                    click: function () {
                      return r.addQuestion(!0);
                    },
                  },
                  {
                    text: "Add at the end",
                    icon: (0, fn.jsx)("img", {
                      src: qa,
                      className: "material-ui-icon",
                      alt: "Add at the end",
                    }),
                    click: function () {
                      return r.addQuestion(!1);
                    },
                  },
                ];
              }),
              (r.updateQuestion = function (e) {
                if (r.state.selectedIndex >= 0) {
                  var t = r.state.workspace.slice();
                  (t[r.state.selectedIndex] = e),
                    r.setState({ workspace: t, changed: !0 });
                }
              }),
              (r.state = {
                originalName: "",
                workspace: [],
                title: "",
                selectedIndex: -1,
                changed: !1,
                exitModal: !1,
                deleteModal: !1,
                uploadModal: !1,
                downloadModal: !1,
                downloadModalMessage: void 0,
              }),
              (r.inputFile = (0, l.createRef)()),
              (r.onTitleChange = r.onTitleChange.bind(se(r))),
              (r.changeSelection = r.changeSelection.bind(se(r))),
              (r.uploadFile = r.uploadFile.bind(se(r))),
              (r.hideExitModal = r.hideExitModal.bind(se(r))),
              (r.navigateToStartPage = r.navigateToStartPage.bind(se(r))),
              (r.hideDeleteModal = r.hideDeleteModal.bind(se(r))),
              (r.deleteQuestionWithoutConfirmation =
                r.deleteQuestionWithoutConfirmation.bind(se(r))),
              (r.deleteQuestion = r.deleteQuestion.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onTitleChange",
                value: function (e) {
                  this.setState({ title: e.target.value, changed: !0 });
                },
              },
              {
                key: "hideExitModal",
                value: function () {
                  this.setState({ exitModal: !1 });
                },
              },
              {
                key: "navigateToStartPage",
                value: function () {
                  this.props.navigate("/");
                },
              },
              {
                key: "hideDeleteModal",
                value: function () {
                  this.setState({ deleteModal: !1 });
                },
              },
              {
                key: "changeSelection",
                value: function (e) {
                  this.setState({ selectedIndex: e });
                },
              },
              {
                key: "uploadFile",
                value: function () {
                  this.state.changed
                    ? this.setState({ uploadModal: !0 })
                    : this.loadProject();
                },
              },
              {
                key: "deleteQuestion",
                value: function () {
                  this.state.selectedIndex >= 0 &&
                    this.setState({ deleteModal: !0 });
                },
              },
              {
                key: "deleteQuestionWithoutConfirmation",
                value: function () {
                  var e = this.state.workspace.slice();
                  e.splice(this.state.selectedIndex, 1);
                  var t = this.state.selectedIndex;
                  t >= e.length && (t = e.length - 1),
                    this.setState({
                      deleteModal: !1,
                      workspace: e,
                      selectedIndex: t,
                      changed: !0,
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (0, fn.jsxs)(
                    xa,
                    an(
                      an({}, this.props),
                      {},
                      {
                        children: [
                          (0, fn.jsx)("div", {
                            className:
                              "message-box d-block d-sm-block d-md-none",
                            children:
                              "Resolution of the browser is too low to launch the question editor!",
                          }),
                          (0, fn.jsx)(wn, {
                            fluid: !0,
                            className:
                              "editor-container d-none d-sm-none d-md-block",
                            children: (0, fn.jsxs)(Sn, {
                              style: { height: "100%" },
                              children: [
                                (0, fn.jsx)(jn, {
                                  xl: 4,
                                  lg: 4,
                                  md: 4,
                                  sm: 12,
                                  children: (0, fn.jsx)(La, {
                                    questions: this.state.workspace,
                                    selectedIndex: this.state.selectedIndex,
                                    selected: this.changeSelection,
                                  }),
                                }),
                                (0, fn.jsx)(jn, {
                                  xl: 8,
                                  lg: 8,
                                  md: 8,
                                  sm: 12,
                                  children: (0, fn.jsx)("div", {
                                    className: "question-editor",
                                    children: (0, fn.jsxs)(wn, {
                                      fluid: !0,
                                      children: [
                                        (0, fn.jsxs)(Sn, {
                                          style: {
                                            padding: "20px 10px 20px 10px",
                                          },
                                          children: [
                                            (0, fn.jsx)(jn, {
                                              lg: 4,
                                              md: 6,
                                              style: { textAlign: "center" },
                                              children: "Quiz title:",
                                            }),
                                            (0, fn.jsx)(jn, {
                                              lg: 8,
                                              md: 6,
                                              children: (0, fn.jsx)(
                                                kr.Control,
                                                {
                                                  as: "input",
                                                  value: this.state.title,
                                                  onChange: this.onTitleChange,
                                                  className: this.state.title
                                                    ? ""
                                                    : "missing-title",
                                                  placeholder: "Quiz Title",
                                                  maxLength: "200",
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, fn.jsx)(Sn, {
                                          children: this.topButtonsConfig().map(
                                            function (t) {
                                              return t.customUpload
                                                ? (0, fn.jsx)(
                                                    jn,
                                                    {
                                                      lg: 4,
                                                      md: 6,
                                                      className:
                                                        "editor-button-container",
                                                      children: (0, fn.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "btn btn-secondary btn-file editor-button",
                                                          children: [
                                                            t.icon,
                                                            (t.icon
                                                              ? " "
                                                              : "") + t.text,
                                                            (0, fn.jsx)(
                                                              "input",
                                                              {
                                                                type: "file",
                                                                accept:
                                                                  "application/json",
                                                                onChange:
                                                                  e.uploadFile,
                                                                ref: e.inputFile,
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                    },
                                                    t.text
                                                  )
                                                : (0, fn.jsx)(
                                                    jn,
                                                    {
                                                      lg: 4,
                                                      md: 6,
                                                      className:
                                                        "editor-button-container",
                                                      children: (0, fn.jsxs)(
                                                        Rr,
                                                        {
                                                          variant: t.variant
                                                            ? t.variant
                                                            : "secondary",
                                                          className:
                                                            "editor-button",
                                                          onClick: t.click,
                                                          disabled: t.disabled,
                                                          children: [
                                                            t.icon,
                                                            (t.icon
                                                              ? " "
                                                              : "") + t.text,
                                                          ],
                                                        }
                                                      ),
                                                    },
                                                    t.text
                                                  );
                                            }
                                          ),
                                        }),
                                        (0, fn.jsx)(Sn, {
                                          children: (0, fn.jsx)(_a, {
                                            question:
                                              this.state.selectedIndex < 0
                                                ? null
                                                : this.state.workspace[
                                                    this.state.selectedIndex
                                                  ],
                                            update: this.updateQuestion,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, fn.jsxs)(da, {
                            show: this.state.exitModal,
                            onHide: this.hideExitModal,
                            children: [
                              (0, fn.jsx)(da.Header, {
                                closeButton: !0,
                                children: (0, fn.jsx)(da.Title, {
                                  children: "Warning",
                                }),
                              }),
                              (0, fn.jsx)(da.Body, {
                                children: (0, fn.jsxs)("p", {
                                  children: [
                                    "Unsaved changes detected in the project!",
                                    (0, fn.jsx)("br", {}),
                                    "Are you sure you want to exit the editor?",
                                  ],
                                }),
                              }),
                              (0, fn.jsxs)(da.Footer, {
                                children: [
                                  (0, fn.jsx)(Rr, {
                                    variant: "danger",
                                    onClick: this.navigateToStartPage,
                                    children: "Yes, leave",
                                  }),
                                  (0, fn.jsx)(Rr, {
                                    variant: "secondary",
                                    onClick: this.hideExitModal,
                                    children: "No, cancel",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, fn.jsxs)(da, {
                            show: this.state.deleteModal,
                            onHide: this.hideDeleteModal,
                            children: [
                              (0, fn.jsx)(da.Header, {
                                closeButton: !0,
                                children: (0, fn.jsx)(da.Title, {
                                  children: "Warning",
                                }),
                              }),
                              (0, fn.jsx)(da.Body, {
                                children: (0, fn.jsx)("p", {
                                  children:
                                    "Are you sure you want to delete this question?",
                                }),
                              }),
                              (0, fn.jsxs)(da.Footer, {
                                children: [
                                  (0, fn.jsx)(Rr, {
                                    variant: "danger",
                                    onClick:
                                      this.deleteQuestionWithoutConfirmation,
                                    children: "Yes, delete",
                                  }),
                                  (0, fn.jsx)(Rr, {
                                    variant: "secondary",
                                    onClick: this.hideDeleteModal,
                                    children: "No, cancel",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, fn.jsxs)(da, {
                            show: this.state.uploadModal,
                            onHide: this.cancelUpload,
                            children: [
                              (0, fn.jsx)(da.Header, {
                                closeButton: !0,
                                children: (0, fn.jsx)(da.Title, {
                                  children: "Warning",
                                }),
                              }),
                              (0, fn.jsx)(da.Body, {
                                children: (0, fn.jsx)("p", {
                                  children:
                                    "Are you sure you want to load a new project? You have unsaved changes in the current one!",
                                }),
                              }),
                              (0, fn.jsxs)(da.Footer, {
                                children: [
                                  (0, fn.jsx)(Rr, {
                                    variant: "danger",
                                    onClick: this.loadProject,
                                    children: "Yes, upload new project",
                                  }),
                                  (0, fn.jsx)(Rr, {
                                    variant: "secondary",
                                    onClick: this.cancelUpload,
                                    children: "No, cancel",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, fn.jsxs)(da, {
                            show: this.state.downloadModal,
                            onHide: this.cancelDownload,
                            children: [
                              (0, fn.jsx)(da.Header, {
                                closeButton: !0,
                                children: (0, fn.jsx)(da.Title, {
                                  children: "Warning",
                                }),
                              }),
                              (0, fn.jsxs)(da.Body, {
                                children: [
                                  (0, fn.jsxs)("p", {
                                    children: [
                                      this.state.downloadModalMessage,
                                      ".",
                                    ],
                                  }),
                                  (0, fn.jsx)("p", {
                                    children:
                                      "Do you still want to download the quiz? You can re-upload and continue editing it later - but you won't be able to host the quiz.",
                                  }),
                                ],
                              }),
                              (0, fn.jsxs)(da.Footer, {
                                children: [
                                  (0, fn.jsx)(Rr, {
                                    variant: "danger",
                                    onClick: this.downloadFile,
                                    children: "Yes, download anyway",
                                  }),
                                  (0, fn.jsx)(Rr, {
                                    variant: "secondary",
                                    onClick: this.cancelDownload,
                                    children: "No, cancel",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        Ka = function (e) {
          return (0, fn.jsx)($a, an(an({}, e), {}, { navigate: ct() }));
        },
        Ya = Object.create(null);
      (Ya.open = "0"),
        (Ya.close = "1"),
        (Ya.ping = "2"),
        (Ya.pong = "3"),
        (Ya.message = "4"),
        (Ya.upgrade = "5"),
        (Ya.noop = "6");
      var Ga = Object.create(null);
      Object.keys(Ya).forEach(function (e) {
        Ga[Ya[e]] = e;
      });
      for (
        var Xa = { type: "error", data: "parser error" },
          Ja =
            "function" === typeof Blob ||
            ("undefined" !== typeof Blob &&
              "[object BlobConstructor]" ===
                Object.prototype.toString.call(Blob)),
          Za = "function" === typeof ArrayBuffer,
          ei = function (e, t) {
            var n = new FileReader();
            return (
              (n.onload = function () {
                var e = n.result.split(",")[1];
                t("b" + e);
              }),
              n.readAsDataURL(e)
            );
          },
          ti = function (e, t, n) {
            var r,
              o = e.type,
              a = e.data;
            return Ja && a instanceof Blob
              ? t
                ? n(a)
                : ei(a, n)
              : Za &&
                (a instanceof ArrayBuffer ||
                  ((r = a),
                  "function" === typeof ArrayBuffer.isView
                    ? ArrayBuffer.isView(r)
                    : r && r.buffer instanceof ArrayBuffer))
              ? t
                ? n(a)
                : ei(new Blob([a]), n)
              : n(Ya[o] + (a || ""));
          },
          ni =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          ri = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256),
          oi = 0;
        oi < ni.length;
        oi++
      )
        ri[ni.charCodeAt(oi)] = oi;
      var ai = "function" === typeof ArrayBuffer,
        ii = function (e, t) {
          if (ai) {
            var n = (function (e) {
              var t,
                n,
                r,
                o,
                a,
                i = 0.75 * e.length,
                s = e.length,
                l = 0;
              "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
              var u = new ArrayBuffer(i),
                c = new Uint8Array(u);
              for (t = 0; t < s; t += 4)
                (n = ri[e.charCodeAt(t)]),
                  (r = ri[e.charCodeAt(t + 1)]),
                  (o = ri[e.charCodeAt(t + 2)]),
                  (a = ri[e.charCodeAt(t + 3)]),
                  (c[l++] = (n << 2) | (r >> 4)),
                  (c[l++] = ((15 & r) << 4) | (o >> 2)),
                  (c[l++] = ((3 & o) << 6) | (63 & a));
              return u;
            })(e);
            return si(n, t);
          }
          return { base64: !0, data: e };
        },
        si = function (e, t) {
          return "blob" === t && e instanceof ArrayBuffer ? new Blob([e]) : e;
        },
        li = function (e, t) {
          if ("string" !== typeof e) return { type: "message", data: si(e, t) };
          var n = e.charAt(0);
          return "b" === n
            ? { type: "message", data: ii(e.substring(1), t) }
            : Ga[n]
            ? e.length > 1
              ? { type: Ga[n], data: e.substring(1) }
              : { type: Ga[n] }
            : Xa;
        },
        ui = String.fromCharCode(30);
      function ci(e) {
        if (e)
          return (function (e) {
            for (var t in ci.prototype) e[t] = ci.prototype[t];
            return e;
          })(e);
      }
      (ci.prototype.on = ci.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
        (ci.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (ci.prototype.off =
          ci.prototype.removeListener =
          ci.prototype.removeAllListeners =
          ci.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + e];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var o = 0; o < r.length; o++)
                if ((n = r[o]) === t || n.fn === t) {
                  r.splice(o, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + e], this;
            }),
        (ci.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks["$" + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (ci.prototype.emitReserved = ci.prototype.emit),
        (ci.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (ci.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      var di =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : Function("return this")();
      function fi(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(function (t, n) {
          return e.hasOwnProperty(n) && (t[n] = e[n]), t;
        }, {});
      }
      var pi = setTimeout,
        hi = clearTimeout;
      function mi(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = pi.bind(di)), (e.clearTimeoutFn = hi.bind(di)))
          : ((e.setTimeoutFn = setTimeout.bind(di)),
            (e.clearTimeoutFn = clearTimeout.bind(di)));
      }
      var vi,
        yi = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e, r, o) {
            var a;
            return (
              J(this, n),
              ((a = t.call(this, e)).description = r),
              (a.context = o),
              (a.type = "TransportError"),
              a
            );
          }
          return ne(n);
        })(de(Error)),
        gi = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this)).writable = !1),
              mi(se(r), e),
              (r.opts = e),
              (r.query = e.query),
              (r.readyState = ""),
              (r.socket = e.socket),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onError",
                value: function (e, t, r) {
                  return (
                    ho(ae(n.prototype), "emitReserved", this).call(
                      this,
                      "error",
                      new yi(e, t, r)
                    ),
                    this
                  );
                },
              },
              {
                key: "open",
                value: function () {
                  return (
                    ("closed" !== this.readyState && "" !== this.readyState) ||
                      ((this.readyState = "opening"), this.doOpen()),
                    this
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  return (
                    ("opening" !== this.readyState &&
                      "open" !== this.readyState) ||
                      (this.doClose(), this.onClose()),
                    this
                  );
                },
              },
              {
                key: "send",
                value: function (e) {
                  "open" === this.readyState && this.write(e);
                },
              },
              {
                key: "onOpen",
                value: function () {
                  (this.readyState = "open"),
                    (this.writable = !0),
                    ho(ae(n.prototype), "emitReserved", this).call(
                      this,
                      "open"
                    );
                },
              },
              {
                key: "onData",
                value: function (e) {
                  var t = li(e, this.socket.binaryType);
                  this.onPacket(t);
                },
              },
              {
                key: "onPacket",
                value: function (e) {
                  ho(ae(n.prototype), "emitReserved", this).call(
                    this,
                    "packet",
                    e
                  );
                },
              },
              {
                key: "onClose",
                value: function (e) {
                  (this.readyState = "closed"),
                    ho(ae(n.prototype), "emitReserved", this).call(
                      this,
                      "close",
                      e
                    );
                },
              },
            ]),
            n
          );
        })(ci),
        bi =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        wi = {},
        xi = 0,
        ki = 0;
      function Si(e) {
        var t = "";
        do {
          (t = bi[e % 64] + t), (e = Math.floor(e / 64));
        } while (e > 0);
        return t;
      }
      function Ei() {
        var e = Si(+new Date());
        return e !== vi ? ((xi = 0), (vi = e)) : e + "." + Si(xi++);
      }
      for (; ki < 64; ki++) wi[bi[ki]] = ki;
      function Ci(e) {
        var t = "";
        for (var n in e)
          e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
        return t;
      }
      function Ni(e) {
        for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
          var a = n[r].split("=");
          t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        }
        return t;
      }
      var ji = !1;
      try {
        ji =
          "undefined" !== typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (Fu) {}
      var Ri = ji;
      function Oi(e) {
        var t = e.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!t || Ri))
            return new XMLHttpRequest();
        } catch (zu) {}
        if (!t)
          try {
            return new di[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (zu) {}
      }
      function Ti() {}
      var _i = null != new Oi({ xdomain: !1 }).responseType,
        Pi = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            if (
              (J(this, n),
              ((r = t.call(this, e)).polling = !1),
              "undefined" !== typeof location)
            ) {
              var o = "https:" === location.protocol,
                a = location.port;
              a || (a = o ? "443" : "80"),
                (r.xd =
                  ("undefined" !== typeof location &&
                    e.hostname !== location.hostname) ||
                  a !== e.port),
                (r.xs = e.secure !== o);
            }
            var i = e && e.forceBase64;
            return (r.supportsBinary = _i && !i), r;
          }
          return (
            ne(n, [
              {
                key: "name",
                get: function () {
                  return "polling";
                },
              },
              {
                key: "doOpen",
                value: function () {
                  this.poll();
                },
              },
              {
                key: "pause",
                value: function (e) {
                  var t = this;
                  this.readyState = "pausing";
                  var n = function () {
                    (t.readyState = "paused"), e();
                  };
                  if (this.polling || !this.writable) {
                    var r = 0;
                    this.polling &&
                      (r++,
                      this.once("pollComplete", function () {
                        --r || n();
                      })),
                      this.writable ||
                        (r++,
                        this.once("drain", function () {
                          --r || n();
                        }));
                  } else n();
                },
              },
              {
                key: "poll",
                value: function () {
                  (this.polling = !0), this.doPoll(), this.emitReserved("poll");
                },
              },
              {
                key: "onData",
                value: function (e) {
                  var t = this;
                  (function (e, t) {
                    for (
                      var n = e.split(ui), r = [], o = 0;
                      o < n.length;
                      o++
                    ) {
                      var a = li(n[o], t);
                      if ((r.push(a), "error" === a.type)) break;
                    }
                    return r;
                  })(e, this.socket.binaryType).forEach(function (e) {
                    if (
                      ("opening" === t.readyState &&
                        "open" === e.type &&
                        t.onOpen(),
                      "close" === e.type)
                    )
                      return (
                        t.onClose({
                          description: "transport closed by the server",
                        }),
                        !1
                      );
                    t.onPacket(e);
                  }),
                    "closed" !== this.readyState &&
                      ((this.polling = !1),
                      this.emitReserved("pollComplete"),
                      "open" === this.readyState && this.poll());
                },
              },
              {
                key: "doClose",
                value: function () {
                  var e = this,
                    t = function () {
                      e.write([{ type: "close" }]);
                    };
                  "open" === this.readyState ? t() : this.once("open", t);
                },
              },
              {
                key: "write",
                value: function (e) {
                  var t = this;
                  (this.writable = !1),
                    (function (e, t) {
                      var n = e.length,
                        r = new Array(n),
                        o = 0;
                      e.forEach(function (e, a) {
                        ti(e, !1, function (e) {
                          (r[a] = e), ++o === n && t(r.join(ui));
                        });
                      });
                    })(e, function (e) {
                      t.doWrite(e, function () {
                        (t.writable = !0), t.emitReserved("drain");
                      });
                    });
                },
              },
              {
                key: "uri",
                value: function () {
                  var e = this.query || {},
                    t = this.opts.secure ? "https" : "http",
                    n = "";
                  !1 !== this.opts.timestampRequests &&
                    (e[this.opts.timestampParam] = Ei()),
                    this.supportsBinary || e.sid || (e.b64 = 1),
                    this.opts.port &&
                      (("https" === t && 443 !== Number(this.opts.port)) ||
                        ("http" === t && 80 !== Number(this.opts.port))) &&
                      (n = ":" + this.opts.port);
                  var r = Ci(e);
                  return (
                    t +
                    "://" +
                    (-1 !== this.opts.hostname.indexOf(":")
                      ? "[" + this.opts.hostname + "]"
                      : this.opts.hostname) +
                    n +
                    this.opts.path +
                    (r.length ? "?" + r : "")
                  );
                },
              },
              {
                key: "request",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts),
                    new Li(this.uri(), e)
                  );
                },
              },
              {
                key: "doWrite",
                value: function (e, t) {
                  var n = this,
                    r = this.request({ method: "POST", data: e });
                  r.on("success", t),
                    r.on("error", function (e, t) {
                      n.onError("xhr post error", e, t);
                    });
                },
              },
              {
                key: "doPoll",
                value: function () {
                  var e = this,
                    t = this.request();
                  t.on("data", this.onData.bind(this)),
                    t.on("error", function (t, n) {
                      e.onError("xhr poll error", t, n);
                    }),
                    (this.pollXhr = t);
                },
              },
            ]),
            n
          );
        })(gi),
        Li = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e, r) {
            var o;
            return (
              J(this, n),
              mi(se((o = t.call(this))), r),
              (o.opts = r),
              (o.method = r.method || "GET"),
              (o.uri = e),
              (o.async = !1 !== r.async),
              (o.data = void 0 !== r.data ? r.data : null),
              o.create(),
              o
            );
          }
          return (
            ne(n, [
              {
                key: "create",
                value: function () {
                  var e = this,
                    t = fi(
                      this.opts,
                      "agent",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "autoUnref"
                    );
                  (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
                  var r = (this.xhr = new Oi(t));
                  try {
                    r.open(this.method, this.uri, this.async);
                    try {
                      if (this.opts.extraHeaders)
                        for (var o in (r.setDisableHeaderCheck &&
                          r.setDisableHeaderCheck(!0),
                        this.opts.extraHeaders))
                          this.opts.extraHeaders.hasOwnProperty(o) &&
                            r.setRequestHeader(o, this.opts.extraHeaders[o]);
                    } catch (zu) {}
                    if ("POST" === this.method)
                      try {
                        r.setRequestHeader(
                          "Content-type",
                          "text/plain;charset=UTF-8"
                        );
                      } catch (zu) {}
                    try {
                      r.setRequestHeader("Accept", "*/*");
                    } catch (zu) {}
                    "withCredentials" in r &&
                      (r.withCredentials = this.opts.withCredentials),
                      this.opts.requestTimeout &&
                        (r.timeout = this.opts.requestTimeout),
                      (r.onreadystatechange = function () {
                        4 === r.readyState &&
                          (200 === r.status || 1223 === r.status
                            ? e.onLoad()
                            : e.setTimeoutFn(function () {
                                e.onError(
                                  "number" === typeof r.status ? r.status : 0
                                );
                              }, 0));
                      }),
                      r.send(this.data);
                  } catch (zu) {
                    return void this.setTimeoutFn(function () {
                      e.onError(zu);
                    }, 0);
                  }
                  "undefined" !== typeof document &&
                    ((this.index = n.requestsCount++),
                    (n.requests[this.index] = this));
                },
              },
              {
                key: "onError",
                value: function (e) {
                  this.emitReserved("error", e, this.xhr), this.cleanup(!0);
                },
              },
              {
                key: "cleanup",
                value: function (e) {
                  if ("undefined" !== typeof this.xhr && null !== this.xhr) {
                    if (((this.xhr.onreadystatechange = Ti), e))
                      try {
                        this.xhr.abort();
                      } catch (zu) {}
                    "undefined" !== typeof document &&
                      delete n.requests[this.index],
                      (this.xhr = null);
                  }
                },
              },
              {
                key: "onLoad",
                value: function () {
                  var e = this.xhr.responseText;
                  null !== e &&
                    (this.emitReserved("data", e),
                    this.emitReserved("success"),
                    this.cleanup());
                },
              },
              {
                key: "abort",
                value: function () {
                  this.cleanup();
                },
              },
            ]),
            n
          );
        })(ci);
      if (
        ((Li.requestsCount = 0),
        (Li.requests = {}),
        "undefined" !== typeof document)
      )
        if ("function" === typeof attachEvent) attachEvent("onunload", Mi);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in di ? "pagehide" : "unload", Mi, !1);
        }
      function Mi() {
        for (var e in Li.requests)
          Li.requests.hasOwnProperty(e) && Li.requests[e].abort();
      }
      var Ai =
          "function" === typeof Promise && "function" === typeof Promise.resolve
            ? function (e) {
                return Promise.resolve().then(e);
              }
            : function (e, t) {
                return t(e, 0);
              },
        Ii = di.WebSocket || di.MozWebSocket,
        zi =
          "undefined" !== typeof navigator &&
          "string" === typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase(),
        Fi = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).supportsBinary = !e.forceBase64),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "name",
                get: function () {
                  return "websocket";
                },
              },
              {
                key: "doOpen",
                value: function () {
                  if (this.check()) {
                    var e = this.uri(),
                      t = this.opts.protocols,
                      n = zi
                        ? {}
                        : fi(
                            this.opts,
                            "agent",
                            "perMessageDeflate",
                            "pfx",
                            "key",
                            "passphrase",
                            "cert",
                            "ca",
                            "ciphers",
                            "rejectUnauthorized",
                            "localAddress",
                            "protocolVersion",
                            "origin",
                            "maxPayload",
                            "family",
                            "checkServerIdentity"
                          );
                    this.opts.extraHeaders &&
                      (n.headers = this.opts.extraHeaders);
                    try {
                      this.ws = zi
                        ? new Ii(e, t, n)
                        : t
                        ? new Ii(e, t)
                        : new Ii(e);
                    } catch (Fu) {
                      return this.emitReserved("error", Fu);
                    }
                    (this.ws.binaryType =
                      this.socket.binaryType || "arraybuffer"),
                      this.addEventListeners();
                  }
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  var e = this;
                  (this.ws.onopen = function () {
                    e.opts.autoUnref && e.ws._socket.unref(), e.onOpen();
                  }),
                    (this.ws.onclose = function (t) {
                      return e.onClose({
                        description: "websocket connection closed",
                        context: t,
                      });
                    }),
                    (this.ws.onmessage = function (t) {
                      return e.onData(t.data);
                    }),
                    (this.ws.onerror = function (t) {
                      return e.onError("websocket error", t);
                    });
                },
              },
              {
                key: "write",
                value: function (e) {
                  var t = this;
                  this.writable = !1;
                  for (
                    var n = function () {
                        var n = e[r],
                          o = r === e.length - 1;
                        ti(n, t.supportsBinary, function (e) {
                          try {
                            t.ws.send(e);
                          } catch (zu) {}
                          o &&
                            Ai(function () {
                              (t.writable = !0), t.emitReserved("drain");
                            }, t.setTimeoutFn);
                        });
                      },
                      r = 0;
                    r < e.length;
                    r++
                  )
                    n();
                },
              },
              {
                key: "doClose",
                value: function () {
                  "undefined" !== typeof this.ws &&
                    (this.ws.close(), (this.ws = null));
                },
              },
              {
                key: "uri",
                value: function () {
                  var e = this.query || {},
                    t = this.opts.secure ? "wss" : "ws",
                    n = "";
                  this.opts.port &&
                    (("wss" === t && 443 !== Number(this.opts.port)) ||
                      ("ws" === t && 80 !== Number(this.opts.port))) &&
                    (n = ":" + this.opts.port),
                    this.opts.timestampRequests &&
                      (e[this.opts.timestampParam] = Ei()),
                    this.supportsBinary || (e.b64 = 1);
                  var r = Ci(e);
                  return (
                    t +
                    "://" +
                    (-1 !== this.opts.hostname.indexOf(":")
                      ? "[" + this.opts.hostname + "]"
                      : this.opts.hostname) +
                    n +
                    this.opts.path +
                    (r.length ? "?" + r : "")
                  );
                },
              },
              {
                key: "check",
                value: function () {
                  return !!Ii;
                },
              },
            ]),
            n
          );
        })(gi),
        Bi = { websocket: Fi, polling: Pi },
        Di =
          /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        qi = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function Ui(e) {
        var t = e,
          n = e.indexOf("["),
          r = e.indexOf("]");
        -1 != n &&
          -1 != r &&
          (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
        for (var o = Di.exec(e || ""), a = {}, i = 14; i--; )
          a[qi[i]] = o[i] || "";
        return (
          -1 != n &&
            -1 != r &&
            ((a.source = t),
            (a.host = a.host
              .substring(1, a.host.length - 1)
              .replace(/;/g, ":")),
            (a.authority = a.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (a.ipv6uri = !0)),
          (a.pathNames = (function (e, t) {
            var n = /\/{2,9}/g,
              r = t.replace(n, "/").split("/");
            ("/" != t.slice(0, 1) && 0 !== t.length) || r.splice(0, 1);
            "/" == t.slice(-1) && r.splice(r.length - 1, 1);
            return r;
          })(0, a.path)),
          (a.queryKey = (function (e, t) {
            var n = {};
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
                t && (n[t] = r);
              }),
              n
            );
          })(0, a.query)),
          a
        );
      }
      var Hi = (function (e) {
        oe(n, e);
        var t = ue(n);
        function n(e) {
          var r,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            J(this, n),
            (r = t.call(this)),
            e && "object" === typeof e && ((o = e), (e = null)),
            e
              ? ((e = Ui(e)),
                (o.hostname = e.host),
                (o.secure = "https" === e.protocol || "wss" === e.protocol),
                (o.port = e.port),
                e.query && (o.query = e.query))
              : o.host && (o.hostname = Ui(o.host).host),
            mi(se(r), o),
            (r.secure =
              null != o.secure
                ? o.secure
                : "undefined" !== typeof location &&
                  "https:" === location.protocol),
            o.hostname && !o.port && (o.port = r.secure ? "443" : "80"),
            (r.hostname =
              o.hostname ||
              ("undefined" !== typeof location
                ? location.hostname
                : "localhost")),
            (r.port =
              o.port ||
              ("undefined" !== typeof location && location.port
                ? location.port
                : r.secure
                ? "443"
                : "80")),
            (r.transports = o.transports || ["polling", "websocket"]),
            (r.readyState = ""),
            (r.writeBuffer = []),
            (r.prevBufferLen = 0),
            (r.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !0,
              },
              o
            )),
            (r.opts.path = r.opts.path.replace(/\/$/, "") + "/"),
            "string" === typeof r.opts.query &&
              (r.opts.query = Ni(r.opts.query)),
            (r.id = null),
            (r.upgrades = null),
            (r.pingInterval = null),
            (r.pingTimeout = null),
            (r.pingTimeoutTimer = null),
            "function" === typeof addEventListener &&
              (r.opts.closeOnBeforeunload &&
                ((r.beforeunloadEventListener = function () {
                  r.transport &&
                    (r.transport.removeAllListeners(), r.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  r.beforeunloadEventListener,
                  !1
                )),
              "localhost" !== r.hostname &&
                ((r.offlineEventListener = function () {
                  r.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", r.offlineEventListener, !1))),
            r.open(),
            r
          );
        }
        return (
          ne(n, [
            {
              key: "createTransport",
              value: function (e) {
                var t = Object.assign({}, this.opts.query);
                (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
                var n = Object.assign(
                  {},
                  this.opts.transportOptions[e],
                  this.opts,
                  {
                    query: t,
                    socket: this,
                    hostname: this.hostname,
                    secure: this.secure,
                    port: this.port,
                  }
                );
                return new Bi[e](n);
              },
            },
            {
              key: "open",
              value: function () {
                var e,
                  t = this;
                if (
                  this.opts.rememberUpgrade &&
                  n.priorWebsocketSuccess &&
                  -1 !== this.transports.indexOf("websocket")
                )
                  e = "websocket";
                else {
                  if (0 === this.transports.length)
                    return void this.setTimeoutFn(function () {
                      t.emitReserved("error", "No transports available");
                    }, 0);
                  e = this.transports[0];
                }
                this.readyState = "opening";
                try {
                  e = this.createTransport(e);
                } catch (zu) {
                  return this.transports.shift(), void this.open();
                }
                e.open(), this.setTransport(e);
              },
            },
            {
              key: "setTransport",
              value: function (e) {
                var t = this;
                this.transport && this.transport.removeAllListeners(),
                  (this.transport = e),
                  e
                    .on("drain", this.onDrain.bind(this))
                    .on("packet", this.onPacket.bind(this))
                    .on("error", this.onError.bind(this))
                    .on("close", function (e) {
                      return t.onClose("transport close", e);
                    });
              },
            },
            {
              key: "probe",
              value: function (e) {
                var t = this,
                  r = this.createTransport(e),
                  o = !1;
                n.priorWebsocketSuccess = !1;
                var a = function () {
                  o ||
                    (r.send([{ type: "ping", data: "probe" }]),
                    r.once("packet", function (e) {
                      if (!o)
                        if ("pong" === e.type && "probe" === e.data) {
                          if (
                            ((t.upgrading = !0),
                            t.emitReserved("upgrading", r),
                            !r)
                          )
                            return;
                          (n.priorWebsocketSuccess = "websocket" === r.name),
                            t.transport.pause(function () {
                              o ||
                                ("closed" !== t.readyState &&
                                  (d(),
                                  t.setTransport(r),
                                  r.send([{ type: "upgrade" }]),
                                  t.emitReserved("upgrade", r),
                                  (r = null),
                                  (t.upgrading = !1),
                                  t.flush()));
                            });
                        } else {
                          var a = new Error("probe error");
                          (a.transport = r.name),
                            t.emitReserved("upgradeError", a);
                        }
                    }));
                };
                function i() {
                  o || ((o = !0), d(), r.close(), (r = null));
                }
                var s = function (e) {
                  var n = new Error("probe error: " + e);
                  (n.transport = r.name),
                    i(),
                    t.emitReserved("upgradeError", n);
                };
                function l() {
                  s("transport closed");
                }
                function u() {
                  s("socket closed");
                }
                function c(e) {
                  r && e.name !== r.name && i();
                }
                var d = function () {
                  r.removeListener("open", a),
                    r.removeListener("error", s),
                    r.removeListener("close", l),
                    t.off("close", u),
                    t.off("upgrading", c);
                };
                r.once("open", a),
                  r.once("error", s),
                  r.once("close", l),
                  this.once("close", u),
                  this.once("upgrading", c),
                  r.open();
              },
            },
            {
              key: "onOpen",
              value: function () {
                if (
                  ((this.readyState = "open"),
                  (n.priorWebsocketSuccess =
                    "websocket" === this.transport.name),
                  this.emitReserved("open"),
                  this.flush(),
                  "open" === this.readyState &&
                    this.opts.upgrade &&
                    this.transport.pause)
                )
                  for (var e = 0, t = this.upgrades.length; e < t; e++)
                    this.probe(this.upgrades[e]);
              },
            },
            {
              key: "onPacket",
              value: function (e) {
                if (
                  "opening" === this.readyState ||
                  "open" === this.readyState ||
                  "closing" === this.readyState
                )
                  switch (
                    (this.emitReserved("packet", e),
                    this.emitReserved("heartbeat"),
                    e.type)
                  ) {
                    case "open":
                      this.onHandshake(JSON.parse(e.data));
                      break;
                    case "ping":
                      this.resetPingTimeout(),
                        this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                      break;
                    case "error":
                      var t = new Error("server error");
                      (t.code = e.data), this.onError(t);
                      break;
                    case "message":
                      this.emitReserved("data", e.data),
                        this.emitReserved("message", e.data);
                  }
              },
            },
            {
              key: "onHandshake",
              value: function (e) {
                this.emitReserved("handshake", e),
                  (this.id = e.sid),
                  (this.transport.query.sid = e.sid),
                  (this.upgrades = this.filterUpgrades(e.upgrades)),
                  (this.pingInterval = e.pingInterval),
                  (this.pingTimeout = e.pingTimeout),
                  (this.maxPayload = e.maxPayload),
                  this.onOpen(),
                  "closed" !== this.readyState && this.resetPingTimeout();
              },
            },
            {
              key: "resetPingTimeout",
              value: function () {
                var e = this;
                this.clearTimeoutFn(this.pingTimeoutTimer),
                  (this.pingTimeoutTimer = this.setTimeoutFn(function () {
                    e.onClose("ping timeout");
                  }, this.pingInterval + this.pingTimeout)),
                  this.opts.autoUnref && this.pingTimeoutTimer.unref();
              },
            },
            {
              key: "onDrain",
              value: function () {
                this.writeBuffer.splice(0, this.prevBufferLen),
                  (this.prevBufferLen = 0),
                  0 === this.writeBuffer.length
                    ? this.emitReserved("drain")
                    : this.flush();
              },
            },
            {
              key: "flush",
              value: function () {
                if (
                  "closed" !== this.readyState &&
                  this.transport.writable &&
                  !this.upgrading &&
                  this.writeBuffer.length
                ) {
                  var e = this.getWritablePackets();
                  this.transport.send(e),
                    (this.prevBufferLen = e.length),
                    this.emitReserved("flush");
                }
              },
            },
            {
              key: "getWritablePackets",
              value: function () {
                if (
                  !(
                    this.maxPayload &&
                    "polling" === this.transport.name &&
                    this.writeBuffer.length > 1
                  )
                )
                  return this.writeBuffer;
                for (var e, t = 1, n = 0; n < this.writeBuffer.length; n++) {
                  var r = this.writeBuffer[n].data;
                  if (
                    (r &&
                      (t +=
                        "string" === typeof (e = r)
                          ? (function (e) {
                              for (
                                var t = 0, n = 0, r = 0, o = e.length;
                                r < o;
                                r++
                              )
                                (t = e.charCodeAt(r)) < 128
                                  ? (n += 1)
                                  : t < 2048
                                  ? (n += 2)
                                  : t < 55296 || t >= 57344
                                  ? (n += 3)
                                  : (r++, (n += 4));
                              return n;
                            })(e)
                          : Math.ceil(1.33 * (e.byteLength || e.size))),
                    n > 0 && t > this.maxPayload)
                  )
                    return this.writeBuffer.slice(0, n);
                  t += 2;
                }
                return this.writeBuffer;
              },
            },
            {
              key: "write",
              value: function (e, t, n) {
                return this.sendPacket("message", e, t, n), this;
              },
            },
            {
              key: "send",
              value: function (e, t, n) {
                return this.sendPacket("message", e, t, n), this;
              },
            },
            {
              key: "sendPacket",
              value: function (e, t, n, r) {
                if (
                  ("function" === typeof t && ((r = t), (t = void 0)),
                  "function" === typeof n && ((r = n), (n = null)),
                  "closing" !== this.readyState && "closed" !== this.readyState)
                ) {
                  (n = n || {}).compress = !1 !== n.compress;
                  var o = { type: e, data: t, options: n };
                  this.emitReserved("packetCreate", o),
                    this.writeBuffer.push(o),
                    r && this.once("flush", r),
                    this.flush();
                }
              },
            },
            {
              key: "close",
              value: function () {
                var e = this,
                  t = function () {
                    e.onClose("forced close"), e.transport.close();
                  },
                  n = function n() {
                    e.off("upgrade", n), e.off("upgradeError", n), t();
                  },
                  r = function () {
                    e.once("upgrade", n), e.once("upgradeError", n);
                  };
                return (
                  ("opening" !== this.readyState &&
                    "open" !== this.readyState) ||
                    ((this.readyState = "closing"),
                    this.writeBuffer.length
                      ? this.once("drain", function () {
                          e.upgrading ? r() : t();
                        })
                      : this.upgrading
                      ? r()
                      : t()),
                  this
                );
              },
            },
            {
              key: "onError",
              value: function (e) {
                (n.priorWebsocketSuccess = !1),
                  this.emitReserved("error", e),
                  this.onClose("transport error", e);
              },
            },
            {
              key: "onClose",
              value: function (e, t) {
                ("opening" !== this.readyState &&
                  "open" !== this.readyState &&
                  "closing" !== this.readyState) ||
                  (this.clearTimeoutFn(this.pingTimeoutTimer),
                  this.transport.removeAllListeners("close"),
                  this.transport.close(),
                  this.transport.removeAllListeners(),
                  "function" === typeof removeEventListener &&
                    (removeEventListener(
                      "beforeunload",
                      this.beforeunloadEventListener,
                      !1
                    ),
                    removeEventListener(
                      "offline",
                      this.offlineEventListener,
                      !1
                    )),
                  (this.readyState = "closed"),
                  (this.id = null),
                  this.emitReserved("close", e, t),
                  (this.writeBuffer = []),
                  (this.prevBufferLen = 0));
              },
            },
            {
              key: "filterUpgrades",
              value: function (e) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                  ~this.transports.indexOf(e[n]) && t.push(e[n]);
                return t;
              },
            },
          ]),
          n
        );
      })(ci);
      Hi.protocol = 4;
      Hi.protocol;
      var Vi = "function" === typeof ArrayBuffer,
        Wi = Object.prototype.toString,
        Qi =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" === Wi.call(Blob)),
        $i =
          "function" === typeof File ||
          ("undefined" !== typeof File &&
            "[object FileConstructor]" === Wi.call(File));
      function Ki(e) {
        return (
          (Vi &&
            (e instanceof ArrayBuffer ||
              (function (e) {
                return "function" === typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e.buffer instanceof ArrayBuffer;
              })(e))) ||
          (Qi && e instanceof Blob) ||
          ($i && e instanceof File)
        );
      }
      function Yi(e, t) {
        if (!e || "object" !== typeof e) return !1;
        if (Array.isArray(e)) {
          for (var n = 0, r = e.length; n < r; n++) if (Yi(e[n])) return !0;
          return !1;
        }
        if (Ki(e)) return !0;
        if (
          e.toJSON &&
          "function" === typeof e.toJSON &&
          1 === arguments.length
        )
          return Yi(e.toJSON(), !0);
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o) && Yi(e[o])) return !0;
        return !1;
      }
      function Gi(e) {
        var t = [],
          n = e.data,
          r = e;
        return (
          (r.data = Xi(n, t)),
          (r.attachments = t.length),
          { packet: r, buffers: t }
        );
      }
      function Xi(e, t) {
        if (!e) return e;
        if (Ki(e)) {
          var n = { _placeholder: !0, num: t.length };
          return t.push(e), n;
        }
        if (Array.isArray(e)) {
          for (var r = new Array(e.length), o = 0; o < e.length; o++)
            r[o] = Xi(e[o], t);
          return r;
        }
        if ("object" === typeof e && !(e instanceof Date)) {
          var a = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (a[i] = Xi(e[i], t));
          return a;
        }
        return e;
      }
      function Ji(e, t) {
        return (e.data = Zi(e.data, t)), (e.attachments = void 0), e;
      }
      function Zi(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" === typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e))
          for (var n = 0; n < e.length; n++) e[n] = Zi(e[n], t);
        else if ("object" === typeof e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Zi(e[r], t));
        return e;
      }
      var es,
        ts = 5;
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(es || (es = {}));
      var ns = (function () {
          function e(t) {
            J(this, e), (this.replacer = t);
          }
          return (
            ne(e, [
              {
                key: "encode",
                value: function (e) {
                  return (e.type !== es.EVENT && e.type !== es.ACK) || !Yi(e)
                    ? [this.encodeAsString(e)]
                    : ((e.type =
                        e.type === es.EVENT ? es.BINARY_EVENT : es.BINARY_ACK),
                      this.encodeAsBinary(e));
                },
              },
              {
                key: "encodeAsString",
                value: function (e) {
                  var t = "" + e.type;
                  return (
                    (e.type !== es.BINARY_EVENT && e.type !== es.BINARY_ACK) ||
                      (t += e.attachments + "-"),
                    e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
                    null != e.id && (t += e.id),
                    null != e.data &&
                      (t += JSON.stringify(e.data, this.replacer)),
                    t
                  );
                },
              },
              {
                key: "encodeAsBinary",
                value: function (e) {
                  var t = Gi(e),
                    n = this.encodeAsString(t.packet),
                    r = t.buffers;
                  return r.unshift(n), r;
                },
              },
            ]),
            e
          );
        })(),
        rs = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return J(this, n), ((r = t.call(this)).reviver = e), r;
          }
          return (
            ne(
              n,
              [
                {
                  key: "add",
                  value: function (e) {
                    var t;
                    if ("string" === typeof e) {
                      if (this.reconstructor)
                        throw new Error(
                          "got plaintext data when reconstructing a packet"
                        );
                      (t = this.decodeString(e)).type === es.BINARY_EVENT ||
                      t.type === es.BINARY_ACK
                        ? ((this.reconstructor = new os(t)),
                          0 === t.attachments &&
                            ho(ae(n.prototype), "emitReserved", this).call(
                              this,
                              "decoded",
                              t
                            ))
                        : ho(ae(n.prototype), "emitReserved", this).call(
                            this,
                            "decoded",
                            t
                          );
                    } else {
                      if (!Ki(e) && !e.base64)
                        throw new Error("Unknown type: " + e);
                      if (!this.reconstructor)
                        throw new Error(
                          "got binary data when not reconstructing a packet"
                        );
                      (t = this.reconstructor.takeBinaryData(e)) &&
                        ((this.reconstructor = null),
                        ho(ae(n.prototype), "emitReserved", this).call(
                          this,
                          "decoded",
                          t
                        ));
                    }
                  },
                },
                {
                  key: "decodeString",
                  value: function (e) {
                    var t = 0,
                      r = { type: Number(e.charAt(0)) };
                    if (void 0 === es[r.type])
                      throw new Error("unknown packet type " + r.type);
                    if (
                      r.type === es.BINARY_EVENT ||
                      r.type === es.BINARY_ACK
                    ) {
                      for (
                        var o = t + 1;
                        "-" !== e.charAt(++t) && t != e.length;

                      );
                      var a = e.substring(o, t);
                      if (a != Number(a) || "-" !== e.charAt(t))
                        throw new Error("Illegal attachments");
                      r.attachments = Number(a);
                    }
                    if ("/" === e.charAt(t + 1)) {
                      for (var i = t + 1; ++t; ) {
                        if ("," === e.charAt(t)) break;
                        if (t === e.length) break;
                      }
                      r.nsp = e.substring(i, t);
                    } else r.nsp = "/";
                    var s = e.charAt(t + 1);
                    if ("" !== s && Number(s) == s) {
                      for (var l = t + 1; ++t; ) {
                        var u = e.charAt(t);
                        if (null == u || Number(u) != u) {
                          --t;
                          break;
                        }
                        if (t === e.length) break;
                      }
                      r.id = Number(e.substring(l, t + 1));
                    }
                    if (e.charAt(++t)) {
                      var c = this.tryParse(e.substr(t));
                      if (!n.isPayloadValid(r.type, c))
                        throw new Error("invalid payload");
                      r.data = c;
                    }
                    return r;
                  },
                },
                {
                  key: "tryParse",
                  value: function (e) {
                    try {
                      return JSON.parse(e, this.reviver);
                    } catch (zu) {
                      return !1;
                    }
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.reconstructor &&
                      this.reconstructor.finishedReconstruction();
                  },
                },
              ],
              [
                {
                  key: "isPayloadValid",
                  value: function (e, t) {
                    switch (e) {
                      case es.CONNECT:
                        return "object" === typeof t;
                      case es.DISCONNECT:
                        return void 0 === t;
                      case es.CONNECT_ERROR:
                        return "string" === typeof t || "object" === typeof t;
                      case es.EVENT:
                      case es.BINARY_EVENT:
                        return Array.isArray(t) && t.length > 0;
                      case es.ACK:
                      case es.BINARY_ACK:
                        return Array.isArray(t);
                    }
                  },
                },
              ]
            ),
            n
          );
        })(ci),
        os = (function () {
          function e(t) {
            J(this, e),
              (this.packet = t),
              (this.buffers = []),
              (this.reconPack = t);
          }
          return (
            ne(e, [
              {
                key: "takeBinaryData",
                value: function (e) {
                  if (
                    (this.buffers.push(e),
                    this.buffers.length === this.reconPack.attachments)
                  ) {
                    var t = Ji(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), t;
                  }
                  return null;
                },
              },
              {
                key: "finishedReconstruction",
                value: function () {
                  (this.reconPack = null), (this.buffers = []);
                },
              },
            ]),
            e
          );
        })();
      function as(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n);
          }
        );
      }
      var is = Object.freeze({
          connect: 1,
          connect_error: 1,
          disconnect: 1,
          disconnecting: 1,
          newListener: 1,
          removeListener: 1,
        }),
        ss = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e, r, o) {
            var a;
            return (
              J(this, n),
              ((a = t.call(this)).connected = !1),
              (a.receiveBuffer = []),
              (a.sendBuffer = []),
              (a.ids = 0),
              (a.acks = {}),
              (a.flags = {}),
              (a.io = e),
              (a.nsp = r),
              o && o.auth && (a.auth = o.auth),
              a.io._autoConnect && a.open(),
              a
            );
          }
          return (
            ne(n, [
              {
                key: "disconnected",
                get: function () {
                  return !this.connected;
                },
              },
              {
                key: "subEvents",
                value: function () {
                  if (!this.subs) {
                    var e = this.io;
                    this.subs = [
                      as(e, "open", this.onopen.bind(this)),
                      as(e, "packet", this.onpacket.bind(this)),
                      as(e, "error", this.onerror.bind(this)),
                      as(e, "close", this.onclose.bind(this)),
                    ];
                  }
                },
              },
              {
                key: "active",
                get: function () {
                  return !!this.subs;
                },
              },
              {
                key: "connect",
                value: function () {
                  return (
                    this.connected ||
                      (this.subEvents(),
                      this.io._reconnecting || this.io.open(),
                      "open" === this.io._readyState && this.onopen()),
                    this
                  );
                },
              },
              {
                key: "open",
                value: function () {
                  return this.connect();
                },
              },
              {
                key: "send",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t.unshift("message"), this.emit.apply(this, t), this;
                },
              },
              {
                key: "emit",
                value: function (e) {
                  if (is.hasOwnProperty(e))
                    throw new Error(
                      '"' + e.toString() + '" is a reserved event name'
                    );
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  n.unshift(e);
                  var o = { type: es.EVENT, data: n, options: {} };
                  if (
                    ((o.options.compress = !1 !== this.flags.compress),
                    "function" === typeof n[n.length - 1])
                  ) {
                    var a = this.ids++,
                      i = n.pop();
                    this._registerAckCallback(a, i), (o.id = a);
                  }
                  var s =
                      this.io.engine &&
                      this.io.engine.transport &&
                      this.io.engine.transport.writable,
                    l = this.flags.volatile && (!s || !this.connected);
                  return (
                    l ||
                      (this.connected
                        ? (this.notifyOutgoingListeners(o), this.packet(o))
                        : this.sendBuffer.push(o)),
                    (this.flags = {}),
                    this
                  );
                },
              },
              {
                key: "_registerAckCallback",
                value: function (e, t) {
                  var n = this,
                    r = this.flags.timeout;
                  if (void 0 !== r) {
                    var o = this.io.setTimeoutFn(function () {
                      delete n.acks[e];
                      for (var r = 0; r < n.sendBuffer.length; r++)
                        n.sendBuffer[r].id === e && n.sendBuffer.splice(r, 1);
                      t.call(n, new Error("operation has timed out"));
                    }, r);
                    this.acks[e] = function () {
                      n.io.clearTimeoutFn(o);
                      for (
                        var e = arguments.length, r = new Array(e), a = 0;
                        a < e;
                        a++
                      )
                        r[a] = arguments[a];
                      t.apply(n, [null].concat(r));
                    };
                  } else this.acks[e] = t;
                },
              },
              {
                key: "packet",
                value: function (e) {
                  (e.nsp = this.nsp), this.io._packet(e);
                },
              },
              {
                key: "onopen",
                value: function () {
                  var e = this;
                  "function" == typeof this.auth
                    ? this.auth(function (t) {
                        e.packet({ type: es.CONNECT, data: t });
                      })
                    : this.packet({ type: es.CONNECT, data: this.auth });
                },
              },
              {
                key: "onerror",
                value: function (e) {
                  this.connected || this.emitReserved("connect_error", e);
                },
              },
              {
                key: "onclose",
                value: function (e, t) {
                  (this.connected = !1),
                    delete this.id,
                    this.emitReserved("disconnect", e, t);
                },
              },
              {
                key: "onpacket",
                value: function (e) {
                  if (e.nsp === this.nsp)
                    switch (e.type) {
                      case es.CONNECT:
                        if (e.data && e.data.sid) {
                          var t = e.data.sid;
                          this.onconnect(t);
                        } else
                          this.emitReserved(
                            "connect_error",
                            new Error(
                              "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                            )
                          );
                        break;
                      case es.EVENT:
                      case es.BINARY_EVENT:
                        this.onevent(e);
                        break;
                      case es.ACK:
                      case es.BINARY_ACK:
                        this.onack(e);
                        break;
                      case es.DISCONNECT:
                        this.ondisconnect();
                        break;
                      case es.CONNECT_ERROR:
                        this.destroy();
                        var n = new Error(e.data.message);
                        (n.data = e.data.data),
                          this.emitReserved("connect_error", n);
                    }
                },
              },
              {
                key: "onevent",
                value: function (e) {
                  var t = e.data || [];
                  null != e.id && t.push(this.ack(e.id)),
                    this.connected
                      ? this.emitEvent(t)
                      : this.receiveBuffer.push(Object.freeze(t));
                },
              },
              {
                key: "emitEvent",
                value: function (e) {
                  if (this._anyListeners && this._anyListeners.length) {
                    var t,
                      r = fe(this._anyListeners.slice());
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        t.value.apply(this, e);
                      }
                    } catch (Fu) {
                      r.e(Fu);
                    } finally {
                      r.f();
                    }
                  }
                  ho(ae(n.prototype), "emit", this).apply(this, e);
                },
              },
              {
                key: "ack",
                value: function (e) {
                  var t = this,
                    n = !1;
                  return function () {
                    if (!n) {
                      n = !0;
                      for (
                        var r = arguments.length, o = new Array(r), a = 0;
                        a < r;
                        a++
                      )
                        o[a] = arguments[a];
                      t.packet({ type: es.ACK, id: e, data: o });
                    }
                  };
                },
              },
              {
                key: "onack",
                value: function (e) {
                  var t = this.acks[e.id];
                  "function" === typeof t &&
                    (t.apply(this, e.data), delete this.acks[e.id]);
                },
              },
              {
                key: "onconnect",
                value: function (e) {
                  (this.id = e),
                    (this.connected = !0),
                    this.emitBuffered(),
                    this.emitReserved("connect");
                },
              },
              {
                key: "emitBuffered",
                value: function () {
                  var e = this;
                  this.receiveBuffer.forEach(function (t) {
                    return e.emitEvent(t);
                  }),
                    (this.receiveBuffer = []),
                    this.sendBuffer.forEach(function (t) {
                      e.notifyOutgoingListeners(t), e.packet(t);
                    }),
                    (this.sendBuffer = []);
                },
              },
              {
                key: "ondisconnect",
                value: function () {
                  this.destroy(), this.onclose("io server disconnect");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.subs &&
                    (this.subs.forEach(function (e) {
                      return e();
                    }),
                    (this.subs = void 0)),
                    this.io._destroy(this);
                },
              },
              {
                key: "disconnect",
                value: function () {
                  return (
                    this.connected && this.packet({ type: es.DISCONNECT }),
                    this.destroy(),
                    this.connected && this.onclose("io client disconnect"),
                    this
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  return this.disconnect();
                },
              },
              {
                key: "compress",
                value: function (e) {
                  return (this.flags.compress = e), this;
                },
              },
              {
                key: "volatile",
                get: function () {
                  return (this.flags.volatile = !0), this;
                },
              },
              {
                key: "timeout",
                value: function (e) {
                  return (this.flags.timeout = e), this;
                },
              },
              {
                key: "onAny",
                value: function (e) {
                  return (
                    (this._anyListeners = this._anyListeners || []),
                    this._anyListeners.push(e),
                    this
                  );
                },
              },
              {
                key: "prependAny",
                value: function (e) {
                  return (
                    (this._anyListeners = this._anyListeners || []),
                    this._anyListeners.unshift(e),
                    this
                  );
                },
              },
              {
                key: "offAny",
                value: function (e) {
                  if (!this._anyListeners) return this;
                  if (e) {
                    for (var t = this._anyListeners, n = 0; n < t.length; n++)
                      if (e === t[n]) return t.splice(n, 1), this;
                  } else this._anyListeners = [];
                  return this;
                },
              },
              {
                key: "listenersAny",
                value: function () {
                  return this._anyListeners || [];
                },
              },
              {
                key: "onAnyOutgoing",
                value: function (e) {
                  return (
                    (this._anyOutgoingListeners =
                      this._anyOutgoingListeners || []),
                    this._anyOutgoingListeners.push(e),
                    this
                  );
                },
              },
              {
                key: "prependAnyOutgoing",
                value: function (e) {
                  return (
                    (this._anyOutgoingListeners =
                      this._anyOutgoingListeners || []),
                    this._anyOutgoingListeners.unshift(e),
                    this
                  );
                },
              },
              {
                key: "offAnyOutgoing",
                value: function (e) {
                  if (!this._anyOutgoingListeners) return this;
                  if (e) {
                    for (
                      var t = this._anyOutgoingListeners, n = 0;
                      n < t.length;
                      n++
                    )
                      if (e === t[n]) return t.splice(n, 1), this;
                  } else this._anyOutgoingListeners = [];
                  return this;
                },
              },
              {
                key: "listenersAnyOutgoing",
                value: function () {
                  return this._anyOutgoingListeners || [];
                },
              },
              {
                key: "notifyOutgoingListeners",
                value: function (e) {
                  if (
                    this._anyOutgoingListeners &&
                    this._anyOutgoingListeners.length
                  ) {
                    var t,
                      n = fe(this._anyOutgoingListeners.slice());
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        t.value.apply(this, e.data);
                      }
                    } catch (Fu) {
                      n.e(Fu);
                    } finally {
                      n.f();
                    }
                  }
                },
              },
            ]),
            n
          );
        })(ci);
      function ls(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (ls.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
        }
        return 0 | Math.min(e, this.max);
      }),
        (ls.prototype.reset = function () {
          this.attempts = 0;
        }),
        (ls.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (ls.prototype.setMax = function (e) {
          this.max = e;
        }),
        (ls.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      var us = (function (t) {
          oe(r, t);
          var n = ue(r);
          function r(t, o) {
            var a, i;
            J(this, r),
              ((a = n.call(this)).nsps = {}),
              (a.subs = []),
              t && "object" === typeof t && ((o = t), (t = void 0)),
              ((o = o || {}).path = o.path || "/socket.io"),
              (a.opts = o),
              mi(se(a), o),
              a.reconnection(!1 !== o.reconnection),
              a.reconnectionAttempts(o.reconnectionAttempts || 1 / 0),
              a.reconnectionDelay(o.reconnectionDelay || 1e3),
              a.reconnectionDelayMax(o.reconnectionDelayMax || 5e3),
              a.randomizationFactor(
                null !== (i = o.randomizationFactor) && void 0 !== i ? i : 0.5
              ),
              (a.backoff = new ls({
                min: a.reconnectionDelay(),
                max: a.reconnectionDelayMax(),
                jitter: a.randomizationFactor(),
              })),
              a.timeout(null == o.timeout ? 2e4 : o.timeout),
              (a._readyState = "closed"),
              (a.uri = t);
            var s = o.parser || e;
            return (
              (a.encoder = new s.Encoder()),
              (a.decoder = new s.Decoder()),
              (a._autoConnect = !1 !== o.autoConnect),
              a._autoConnect && a.open(),
              a
            );
          }
          return (
            ne(r, [
              {
                key: "reconnection",
                value: function (e) {
                  return arguments.length
                    ? ((this._reconnection = !!e), this)
                    : this._reconnection;
                },
              },
              {
                key: "reconnectionAttempts",
                value: function (e) {
                  return void 0 === e
                    ? this._reconnectionAttempts
                    : ((this._reconnectionAttempts = e), this);
                },
              },
              {
                key: "reconnectionDelay",
                value: function (e) {
                  var t;
                  return void 0 === e
                    ? this._reconnectionDelay
                    : ((this._reconnectionDelay = e),
                      null === (t = this.backoff) ||
                        void 0 === t ||
                        t.setMin(e),
                      this);
                },
              },
              {
                key: "randomizationFactor",
                value: function (e) {
                  var t;
                  return void 0 === e
                    ? this._randomizationFactor
                    : ((this._randomizationFactor = e),
                      null === (t = this.backoff) ||
                        void 0 === t ||
                        t.setJitter(e),
                      this);
                },
              },
              {
                key: "reconnectionDelayMax",
                value: function (e) {
                  var t;
                  return void 0 === e
                    ? this._reconnectionDelayMax
                    : ((this._reconnectionDelayMax = e),
                      null === (t = this.backoff) ||
                        void 0 === t ||
                        t.setMax(e),
                      this);
                },
              },
              {
                key: "timeout",
                value: function (e) {
                  return arguments.length
                    ? ((this._timeout = e), this)
                    : this._timeout;
                },
              },
              {
                key: "maybeReconnectOnOpen",
                value: function () {
                  !this._reconnecting &&
                    this._reconnection &&
                    0 === this.backoff.attempts &&
                    this.reconnect();
                },
              },
              {
                key: "open",
                value: function (e) {
                  var t = this;
                  if (~this._readyState.indexOf("open")) return this;
                  this.engine = new Hi(this.uri, this.opts);
                  var n = this.engine,
                    r = this;
                  (this._readyState = "opening"), (this.skipReconnect = !1);
                  var o = as(n, "open", function () {
                      r.onopen(), e && e();
                    }),
                    a = as(n, "error", function (n) {
                      r.cleanup(),
                        (r._readyState = "closed"),
                        t.emitReserved("error", n),
                        e ? e(n) : r.maybeReconnectOnOpen();
                    });
                  if (!1 !== this._timeout) {
                    var i = this._timeout;
                    0 === i && o();
                    var s = this.setTimeoutFn(function () {
                      o(), n.close(), n.emit("error", new Error("timeout"));
                    }, i);
                    this.opts.autoUnref && s.unref(),
                      this.subs.push(function () {
                        clearTimeout(s);
                      });
                  }
                  return this.subs.push(o), this.subs.push(a), this;
                },
              },
              {
                key: "connect",
                value: function (e) {
                  return this.open(e);
                },
              },
              {
                key: "onopen",
                value: function () {
                  this.cleanup(),
                    (this._readyState = "open"),
                    this.emitReserved("open");
                  var e = this.engine;
                  this.subs.push(
                    as(e, "ping", this.onping.bind(this)),
                    as(e, "data", this.ondata.bind(this)),
                    as(e, "error", this.onerror.bind(this)),
                    as(e, "close", this.onclose.bind(this)),
                    as(this.decoder, "decoded", this.ondecoded.bind(this))
                  );
                },
              },
              {
                key: "onping",
                value: function () {
                  this.emitReserved("ping");
                },
              },
              {
                key: "ondata",
                value: function (e) {
                  try {
                    this.decoder.add(e);
                  } catch (zu) {
                    this.onclose("parse error", zu);
                  }
                },
              },
              {
                key: "ondecoded",
                value: function (e) {
                  var t = this;
                  Ai(function () {
                    t.emitReserved("packet", e);
                  }, this.setTimeoutFn);
                },
              },
              {
                key: "onerror",
                value: function (e) {
                  this.emitReserved("error", e);
                },
              },
              {
                key: "socket",
                value: function (e, t) {
                  var n = this.nsps[e];
                  return n || ((n = new ss(this, e, t)), (this.nsps[e] = n)), n;
                },
              },
              {
                key: "_destroy",
                value: function (e) {
                  for (
                    var t = 0, n = Object.keys(this.nsps);
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (this.nsps[r].active) return;
                  }
                  this._close();
                },
              },
              {
                key: "_packet",
                value: function (e) {
                  for (var t = this.encoder.encode(e), n = 0; n < t.length; n++)
                    this.engine.write(t[n], e.options);
                },
              },
              {
                key: "cleanup",
                value: function () {
                  this.subs.forEach(function (e) {
                    return e();
                  }),
                    (this.subs.length = 0),
                    this.decoder.destroy();
                },
              },
              {
                key: "_close",
                value: function () {
                  (this.skipReconnect = !0),
                    (this._reconnecting = !1),
                    this.onclose("forced close"),
                    this.engine && this.engine.close();
                },
              },
              {
                key: "disconnect",
                value: function () {
                  return this._close();
                },
              },
              {
                key: "onclose",
                value: function (e, t) {
                  this.cleanup(),
                    this.backoff.reset(),
                    (this._readyState = "closed"),
                    this.emitReserved("close", e, t),
                    this._reconnection &&
                      !this.skipReconnect &&
                      this.reconnect();
                },
              },
              {
                key: "reconnect",
                value: function () {
                  var e = this;
                  if (this._reconnecting || this.skipReconnect) return this;
                  var t = this;
                  if (this.backoff.attempts >= this._reconnectionAttempts)
                    this.backoff.reset(),
                      this.emitReserved("reconnect_failed"),
                      (this._reconnecting = !1);
                  else {
                    var n = this.backoff.duration();
                    this._reconnecting = !0;
                    var r = this.setTimeoutFn(function () {
                      t.skipReconnect ||
                        (e.emitReserved(
                          "reconnect_attempt",
                          t.backoff.attempts
                        ),
                        t.skipReconnect ||
                          t.open(function (n) {
                            n
                              ? ((t._reconnecting = !1),
                                t.reconnect(),
                                e.emitReserved("reconnect_error", n))
                              : t.onreconnect();
                          }));
                    }, n);
                    this.opts.autoUnref && r.unref(),
                      this.subs.push(function () {
                        clearTimeout(r);
                      });
                  }
                },
              },
              {
                key: "onreconnect",
                value: function () {
                  var e = this.backoff.attempts;
                  (this._reconnecting = !1),
                    this.backoff.reset(),
                    this.emitReserved("reconnect", e);
                },
              },
            ]),
            r
          );
        })(ci),
        cs = {};
      function ds(e, t) {
        "object" === typeof e && ((t = e), (e = void 0));
        var n,
          r = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = e;
            (n = n || ("undefined" !== typeof location && location)),
              null == e && (e = n.protocol + "//" + n.host),
              "string" === typeof e &&
                ("/" === e.charAt(0) &&
                  (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e =
                    "undefined" !== typeof n
                      ? n.protocol + "//" + e
                      : "https://" + e),
                (r = Ui(e))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            var o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + o + ":" + r.port + t),
              (r.href =
                r.protocol +
                "://" +
                o +
                (n && n.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(e, (t = t || {}).path || "/socket.io"),
          o = r.source,
          a = r.id,
          i = r.path,
          s = cs[a] && i in cs[a].nsps;
        return (
          t.forceNew || t["force new connection"] || !1 === t.multiplex || s
            ? (n = new us(o, t))
            : (cs[a] || (cs[a] = new us(o, t)), (n = cs[a])),
          r.query && !t.query && (t.query = r.queryKey),
          n.socket(r.path, t)
        );
      }
      Object.assign(ds, { Manager: us, Socket: ss, io: ds, connect: ds });
      var fs = "game/SWITCH_STATE",
        ps = "game/SET_PLAYER_CONFIG",
        hs = "game/SET_HOSTING_ROOM";
      function ms(e) {
        return { type: fs, state: e };
      }
      function vs(e, t, n) {
        return { type: ps, roomCode: e, playerName: t, reconnectMode: n };
      }
      function ys(e) {
        return { type: hs, data: e };
      }
      var gs = ["bsPrefix", "size", "vertical", "className", "as"],
        bs = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.size,
            o = e.vertical,
            a = e.className,
            i = e.as,
            s = void 0 === i ? "div" : i,
            l = un(e, gs),
            u = mn(n, "btn-group"),
            c = u;
          return (
            o && (c = "".concat(u, "-vertical")),
            (0, fn.jsx)(
              s,
              an(
                an({}, l),
                {},
                {
                  ref: t,
                  className: dn()(a, c, r && "".concat(u, "-").concat(r)),
                }
              )
            )
          );
        });
      (bs.displayName = "ButtonGroup"),
        (bs.defaultProps = { vertical: !1, role: "group" });
      var ws = bs,
        xs = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).switchButtonStyle = {
                paddingLeft: "20px",
                paddingRight: "20px",
                height: "40px",
              }),
              (r.state = { value: e.value }),
              (r.changeValueToTrue = r.changeValueToTrue.bind(se(r))),
              (r.changeValueToFalse = r.changeValueToFalse.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "changeValueToTrue",
                value: function () {
                  this.changeValue(!0);
                },
              },
              {
                key: "changeValueToFalse",
                value: function () {
                  this.changeValue(!1);
                },
              },
              {
                key: "changeValue",
                value: function (e) {
                  this.setState({ value: e }), this.props.onChange(e);
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)("div", {
                    children: (0, fn.jsxs)(ws, {
                      children: [
                        (0, fn.jsx)(Rr, {
                          variant: this.state.value ? "light" : "secondary",
                          onClick: this.changeValueToFalse,
                          style: this.switchButtonStyle,
                          children: this.props.offText
                            ? this.props.offText
                            : "OFF",
                        }),
                        (0, fn.jsx)(Rr, {
                          variant: this.state.value ? "secondary" : "light",
                          onClick: this.changeValueToTrue,
                          style: this.switchButtonStyle,
                          children: this.props.onText
                            ? this.props.onText
                            : "ON",
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        ks = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = { value: e.value }),
              (r.onIncrement = r.onIncrement.bind(se(r))),
              (r.onDecrement = r.onDecrement.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onIncrement",
                value: function () {
                  this.changeValue(5);
                },
              },
              {
                key: "onDecrement",
                value: function () {
                  this.changeValue(-5);
                },
              },
              {
                key: "changeValue",
                value: function (e) {
                  var t = this.props.min ? this.props.min : 0,
                    n = this.props.max ? this.props.max : 100,
                    r = this.state.value + e;
                  r < t && (r = t),
                    r > n && (r = n),
                    this.setState({ value: r }),
                    this.props.onChange(r);
                },
              },
              {
                key: "render",
                value: function () {
                  var e =
                    0 === this.state.value && this.props.zeroText
                      ? this.props.zeroText
                      : qt(this.state.value, !1);
                  return (0, fn.jsx)("div", {
                    className: "time-picker-container",
                    children: (0, fn.jsxs)(ws, {
                      children: [
                        (0, fn.jsxs)(Rr, {
                          variant: "light",
                          onClick: this.onDecrement,
                          children: ["-", 5],
                        }),
                        (0, fn.jsx)("div", {
                          className: "time-display",
                          children: (0, fn.jsx)("span", {
                            className: "time-display-value",
                            children: e,
                          }),
                        }),
                        (0, fn.jsxs)(Rr, {
                          variant: "light",
                          onClick: this.onIncrement,
                          children: ["+", 5],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        Ss = ks,
        Es = "CREATING",
        Cs = "WAITING_FOR_CODE",
        Ns = "WAITING_FOR_START",
        js = "QUESTION",
        Rs = "FINAL";
      var Os =
        n.p + "static/media/arrow_back.037e7aeb3dbe35a36ea69c4bd7734f32.svg";
      var Ts = n.p + "static/media/edit.249fb4c7470984ec328cd5c205df6fe0.svg",
        _s = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).startQuiz = function (e, t) {
                try {
                  (e = (function (e, t) {
                    if (e && "object" === typeof e) {
                      var n = Aa(e, (t || "Quiz").replace(/\.json$/i, ""));
                      return Ia(n), n;
                    }
                    return Fa();
                  })(e, t || "")),
                    Xt(),
                    (o = e.title),
                    (document.title = o || "MaverickQuizHub"),
                    (Kt = [
                      "You are you sure you want to exit?",
                      "This will abort the quiz you're currently hosting.",
                      "You won't be able to re-join as the host.",
                    ].join(" ")),
                    r.setState(
                      { questions: e.questions, title: e.title },
                      r.createRoom
                    );
                } catch (a) {
                  r.setState({ questions: [], title: "" });
                  var n = a instanceof Error ? a.message : "".concat(a);
                  alert("Invalid file format: ".concat(n));
                }
                var o;
              }),
              (r.state = {
                title: "",
                questions: [],
                timeLimit: 0,
                questionLimit: 0,
                randomOrder: !1,
              }),
              (r.createRoom = r.createRoom.bind(se(r))),
              (r.inputFile = l.createRef()),
              (r.onSetOrderedOrShuffled = r.onSetOrderedOrShuffled.bind(se(r))),
              (r.onSetTimeLimit = r.onSetTimeLimit.bind(se(r))),
              (r.startSampleQuiz = r.startSampleQuiz.bind(se(r))),
              (r.uploadFile = r.uploadFile.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onSetTimeLimit",
                value: function (e) {
                  this.setState({ timeLimit: e });
                },
              },
              {
                key: "onSetOrderedOrShuffled",
                value: function (e) {
                  this.setState({ randomOrder: e });
                },
              },
              {
                key: "shuffle",
                value: function (e) {
                  for (var t, n, r = e.length; 0 !== r; )
                    (n = Math.floor(Math.random() * r)),
                      (t = e[(r -= 1)]),
                      (e[r] = e[n]),
                      (e[n] = t);
                  return e;
                },
              },
              {
                key: "createRoom",
                value: function () {
                  var e = {
                      title: this.state.title.trim(),
                      timeLimit: this.state.timeLimit,
                      questionLimit: this.state.questionLimit,
                      randomOrder: this.state.randomOrder,
                    },
                    t = this.state.questions.slice();
                  this.state.randomOrder && this.shuffle(t),
                    this.props.questionList(t),
                    this.props.setHostingRoom(e),
                    this.props.switchState(Cs),
                    this.props.socket.emit("CREATE_NEW_ROOM", e);
                },
              },
              {
                key: "uploadFile",
                value: function () {
                  var e = this;
                  Xt();
                  var t = new FileReader();
                  (t.onload = function (t) {
                    try {
                      var n = JSON.parse(t.target.result);
                      e.startQuiz(n, e.inputFile.current.files.item(0).name);
                    } catch (o) {
                      e.setState({ questions: [], title: "" });
                      var r = o instanceof Error ? o.message : "".concat(o);
                      alert("Invalid file format: ".concat(r));
                    }
                    e.inputFile.current.value = "";
                  }),
                    this.inputFile.current.files.item(0) &&
                      t.readAsText(this.inputFile.current.files.item(0));
                },
              },
              {
                key: "startSampleQuiz",
                value: function () {
                  this.startQuiz(Ma);
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)("div", {
                    children: (0, fn.jsxs)(
                      xa,
                      an(
                        an({ logo: !0, cancel: "Back" }, this.props),
                        {},
                        {
                          cancelIcon: Os,
                          showGitHubLink: !0,
                          children: [
                            (0, fn.jsx)("div", {
                              className: "message-box",
                              children: (0, fn.jsx)("form", {
                                children: (0, fn.jsx)(wn, {
                                  children: (0, fn.jsx)(Sn, {
                                    children: (0, fn.jsx)(jn, {
                                      md: 12,
                                      className: "vcenter",
                                      children: (0, fn.jsxs)("div", {
                                        children: [
                                          (0, fn.jsx)(Ss, {
                                            value: this.state.timeLimit,
                                            min: 0,
                                            max: 300,
                                            zeroText: "No time limit",
                                            onChange: this.onSetTimeLimit,
                                          }),
                                          (0, fn.jsx)("div", {
                                            className: "sort-order-buttons",
                                            style: { marginTop: "2.5rem" },
                                            children: (0, fn.jsx)(xs, {
                                              value: this.state.randomOrder,
                                              offText: "Ordered",
                                              onText: "Shuffled",
                                              onChange:
                                                this.onSetOrderedOrShuffled,
                                            }),
                                          }),
                                          (0, fn.jsx)("div", {
                                            style: { marginTop: "2.5rem" },
                                            children: (0, fn.jsxs)("span", {
                                              className:
                                                "btn btn-file btn-warning",
                                              style: {
                                                fontSize: "1.0rem",
                                                width: "18rem",
                                              },
                                              children: [
                                                (0, fn.jsx)("img", {
                                                  src: Qa,
                                                  className: "material-ui-icon",
                                                  style: { filter: "none" },
                                                  alt: "Upload quiz",
                                                }),
                                                " Upload quiz",
                                                (0, fn.jsx)("input", {
                                                  type: "file",
                                                  accept: "application/json",
                                                  onChange: this.uploadFile,
                                                  ref: this.inputFile,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, fn.jsxs)("div", {
                                            style: {
                                              fontSize: "0.5em",
                                              textAlign: "right",
                                              marginTop: "6em",
                                              marginBottom: "-6em",
                                            },
                                            children: [
                                              "...or use this",
                                              (0, fn.jsx)("button", {
                                                onClick: this.startSampleQuiz,
                                                style: {
                                                  padding:
                                                    "0.1em 0.3em 0.1em 0.3em",
                                                  fontSize: "1em",
                                                  borderRadius: "0.3em",
                                                  border: "1px solid #ffffff88",
                                                  marginLeft: "0.4em",
                                                  backgroundColor: "#ffffff00",
                                                  color: "white",
                                                },
                                                children: "sample quiz",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            (0, fn.jsx)(ws, {
                              className: "main-footer-btn",
                              children: (0, fn.jsx)(ha, {
                                icon: Ts,
                                label: "Quiz editor",
                                buttonClassName:
                                  "qm-fixed-bottom qm-fixed-left",
                                link: "/editor",
                              }),
                            }),
                          ],
                        }
                      )
                    ),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        Ps = _s,
        Ls = [
          "bsPrefix",
          "className",
          "striped",
          "bordered",
          "borderless",
          "hover",
          "size",
          "variant",
          "responsive",
        ],
        Ms = l.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            o = e.striped,
            a = e.bordered,
            i = e.borderless,
            s = e.hover,
            l = e.size,
            u = e.variant,
            c = e.responsive,
            d = un(e, Ls),
            f = mn(n, "table"),
            p = dn()(
              r,
              f,
              u && "".concat(f, "-").concat(u),
              l && "".concat(f, "-").concat(l),
              o &&
                ""
                  .concat(f, "-")
                  .concat(
                    "string" === typeof o ? "striped-".concat(o) : "striped"
                  ),
              a && "".concat(f, "-bordered"),
              i && "".concat(f, "-borderless"),
              s && "".concat(f, "-hover")
            ),
            h = (0, fn.jsx)(
              "table",
              an(an({}, d), {}, { className: p, ref: t })
            );
          if (c) {
            var m = "".concat(f, "-responsive");
            return (
              "string" === typeof c && (m = "".concat(m, "-").concat(c)),
              (0, fn.jsx)("div", { className: m, children: h })
            );
          }
          return h;
        }),
        As = Ms,
        Is = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = { orderByName: !1 }),
              (r.onChangeSortOrder = r.onChangeSortOrder.bind(se(r))),
              (r.onDownload = r.onDownload.bind(se(r))),
              (r.mapRowToCsv = r.mapRowToCsv.bind(se(r))),
              (r.renderRow = r.renderRow.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "onChangeSortOrder",
                value: function (e) {
                  this.setState({ orderByName: e });
                },
              },
              {
                key: "getSortedRows",
                value: function () {
                  var e = this.props.data.slice(0);
                  e.sort(Vt);
                  var t = e.map(function (e, t) {
                    return {
                      nickname: e.nickname,
                      points: e.points,
                      duration: e.duration,
                      place: t + 1,
                    };
                  });
                  return this.state.orderByName && t.sort(Wt), t;
                },
              },
              {
                key: "mapRowToCsv",
                value: function (e) {
                  var t =
                    0 === e.points
                      ? ""
                      : Math.round(e.duration / e.points) / Dt;
                  return ""
                    .concat(e.place, ", ")
                    .concat(e.nickname, ", ")
                    .concat(e.points, ", ")
                    .concat(t);
                },
              },
              {
                key: "onDownload",
                value: function () {
                  var e = this.getSortedRows().map(this.mapRowToCsv).join("\n");
                  ln()(
                    ""
                      .concat(
                        '"Place", "Player", "Points", "Speed (seconds per answer)"',
                        "\n"
                      )
                      .concat(e, "\n"),
                    "quiz.csv"
                  );
                },
              },
              {
                key: "renderRow",
                value: function (e, t) {
                  return (0, fn.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, fn.jsx)("td", { children: e.place }),
                        (0, fn.jsx)("td", { children: e.nickname }),
                        (0, fn.jsx)("td", { children: e.points }),
                        (0, fn.jsx)("td", {
                          children: Ht(e.duration, e.points),
                        }),
                      ],
                    },
                    t
                  );
                },
              },
              {
                key: "renderHeader",
                value: function () {
                  return (
                    !!this.props.showHeader &&
                    (0, fn.jsx)(wn, {
                      fluid: !0,
                      style: { marginBottom: "20px" },
                      children: (0, fn.jsxs)(Sn, {
                        children: [
                          (0, fn.jsx)(jn, {
                            xs: 6,
                            style: { textAlign: "left", paddingLeft: "0" },
                            children: (0, fn.jsx)(xs, {
                              value: this.state.orderByName,
                              offText: "Order by points",
                              onText: "Order by name",
                              onChange: this.onChangeSortOrder,
                            }),
                          }),
                          (0, fn.jsx)(jn, {
                            xs: 6,
                            style: { textAlign: "right", paddingRight: "0" },
                            children: (0, fn.jsx)(Rr, {
                              variant: "secondary",
                              onClick: this.onDownload,
                              children: "Export to CSV file",
                            }),
                          }),
                        ],
                      }),
                    })
                  );
                },
              },
              {
                key: "renderTable",
                value: function () {
                  return (0, fn.jsxs)(As, {
                    striped: !0,
                    bordered: !0,
                    children: [
                      (0, fn.jsx)("thead", {
                        children: (0, fn.jsxs)("tr", {
                          children: [
                            (0, fn.jsx)("th", { children: "Place" }),
                            (0, fn.jsx)("th", { children: "Player" }),
                            (0, fn.jsx)("th", { children: "Points" }),
                            (0, fn.jsx)("th", { children: "Answer speed" }),
                          ],
                        }),
                      }),
                      (0, fn.jsx)("tbody", {
                        children: this.getSortedRows().map(this.renderRow),
                      }),
                    ],
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return (
                    !!this.props.data &&
                    (0, fn.jsxs)("div", {
                      className: "rank-table",
                      children: [this.renderHeader(), this.renderTable()],
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        zs = Is,
        Fs = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)(
                    xa,
                    an(
                      an({ logo: !0, cancel: "Return to menu" }, this.props),
                      {},
                      {
                        children: (0, fn.jsx)("div", {
                          className: "message-box",
                          children: (0, fn.jsx)(zs, {
                            data: this.props.generalRanking,
                            showHeader: !0,
                          }),
                        }),
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        Bs = Fs,
        Ds = [
          "min",
          "now",
          "max",
          "label",
          "visuallyHidden",
          "striped",
          "animated",
          "className",
          "style",
          "variant",
          "bsPrefix",
        ],
        qs = ["isChild"],
        Us = [
          "min",
          "now",
          "max",
          "label",
          "visuallyHidden",
          "striped",
          "animated",
          "bsPrefix",
          "variant",
          "className",
          "children",
        ];
      function Hs(e, t, n) {
        var r = ((e - t) / (n - t)) * 100;
        return Math.round(1e3 * r) / 1e3;
      }
      function Vs(e, t) {
        var n,
          r = e.min,
          o = e.now,
          a = e.max,
          i = e.label,
          s = e.visuallyHidden,
          l = e.striped,
          u = e.animated,
          c = e.className,
          d = e.style,
          f = e.variant,
          p = e.bsPrefix,
          h = un(e, Ds);
        return (0, fn.jsx)(
          "div",
          an(
            an({ ref: t }, h),
            {},
            {
              role: "progressbar",
              className: dn()(
                c,
                "".concat(p, "-bar"),
                ((n = {}),
                rn(n, "bg-".concat(f), f),
                rn(n, "".concat(p, "-bar-animated"), u),
                rn(n, "".concat(p, "-bar-striped"), u || l),
                n)
              ),
              style: an({ width: "".concat(Hs(o, r, a), "%") }, d),
              "aria-valuenow": o,
              "aria-valuemin": r,
              "aria-valuemax": a,
              children: s
                ? (0, fn.jsx)("span", {
                    className: "visually-hidden",
                    children: i,
                  })
                : i,
            }
          )
        );
      }
      var Ws = l.forwardRef(function (e, t) {
        var n = e.isChild,
          r = un(e, qs);
        if (((r.bsPrefix = mn(r.bsPrefix, "progress")), n)) return Vs(r, t);
        var o = r.min,
          a = r.now,
          i = r.max,
          s = r.label,
          u = r.visuallyHidden,
          c = r.striped,
          d = r.animated,
          f = r.bsPrefix,
          p = r.variant,
          h = r.className,
          m = r.children,
          v = un(r, Us);
        return (0, fn.jsx)(
          "div",
          an(
            an({ ref: t }, v),
            {},
            {
              className: dn()(h, f),
              children: m
                ? qn(m, function (e) {
                    return (0, l.cloneElement)(e, { isChild: !0 });
                  })
                : Vs(
                    {
                      min: o,
                      now: a,
                      max: i,
                      label: s,
                      visuallyHidden: u,
                      striped: c,
                      animated: d,
                      bsPrefix: f,
                      variant: p,
                    },
                    t
                  ),
            }
          )
        );
      });
      (Ws.displayName = "ProgressBar"),
        (Ws.defaultProps = {
          min: 0,
          max: 100,
          animated: !1,
          isChild: !1,
          visuallyHidden: !1,
          striped: !1,
        });
      var Qs = Ws,
        $s = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = {
                running: !1,
                startTime: 0,
                limit: 0,
                current: 0,
              }),
              (r.tick = r.tick.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.clock = setInterval(this.tick, Dt)),
                    0 < this.props.timeLimit &&
                      this.startTimer(this.props.timeLimit);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.clock);
                },
              },
              {
                key: "tick",
                value: function () {
                  if (this.state.running) {
                    var e = Math.round(
                      (new Date().getTime() - this.state.startTime) / Dt
                    );
                    this.setState({ current: e }),
                      this.props.tick && this.props.tick(this.state.limit - e),
                      this.state.limit <= e &&
                        (this.stopTimer(),
                        this.props.onTimerStop && this.props.onTimerStop());
                  }
                },
              },
              {
                key: "startTimer",
                value: function () {
                  this.setState({
                    running: !0,
                    startTime: new Date().getTime(),
                    limit: this.props.timeLimit,
                    current: 0,
                  });
                },
              },
              {
                key: "stopTimer",
                value: function () {
                  this.setState({
                    running: !1,
                    startTime: 0,
                    limit: 0,
                    current: 0,
                  });
                },
              },
              {
                key: "renderTime",
                value: function () {
                  var e =
                    10 < this.state.limit - this.state.current ||
                    !this.state.running
                      ? "timer-normal"
                      : "timer-warning";
                  return (0, fn.jsx)("div", {
                    className: e,
                    children: qt(
                      Math.max(this.state.limit - this.state.current, 0),
                      !1
                    ),
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)("div", {
                    className: "timer-container",
                    children: this.renderTime(),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        Ks = $s;
      var Ys =
        n.p + "static/media/arrow_forward.d90aae587a7309c89a96458ac9873d04.svg";
      var Gs =
        n.p + "static/media/assessment.0649a30a5262df6c18fc50583882adf6.svg";
      var Xs =
        n.p + "static/media/emoji_events.1f56dc3c7c582f2ddd8c87d57817fa6b.svg";
      var Js =
        n.p +
        "static/media/look_at_browser.d6a33f4897fc88d3044d7e103c9422cd.svg";
      var Zs,
        el,
        tl =
          n.p +
          "static/media/pause_presentation.10d03b84ce832a9fd98726343ce4ea4b.svg",
        nl = 1,
        rl = 2,
        ol = 3,
        al = {
          ACTIVE: { variant: "secondary", disabled: !1 },
          DISABLED: { variant: "secondary", disabled: !0 },
        },
        il = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = { tab: 0 }),
              (r.timer = l.createRef()),
              (r.onNextButton = r.onNextButton.bind(se(r))),
              (r.endQuiz = r.endQuiz.bind(se(r))),
              (r.onTimerStop = r.onTimerStop.bind(se(r))),
              (r.renderAnswer = r.renderAnswer.bind(se(r))),
              (r.onStopButton = r.onStopButton.bind(se(r))),
              (r.timerTick = r.timerTick.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "getPhase",
                value: function () {
                  return this.props.questionIndex < 0
                    ? nl
                    : this.props.questionIsOpen
                    ? rl
                    : ol;
                },
              },
              {
                key: "isTimerEnabled",
                value: function () {
                  return 0 < this.props.game.hostingRoom.timeLimit;
                },
              },
              {
                key: "startTimer",
                value: function () {
                  this.isTimerEnabled() &&
                    this.timer &&
                    this.timer.current &&
                    this.timer.current.startTimer();
                },
              },
              {
                key: "stopTimer",
                value: function () {
                  this.isTimerEnabled() &&
                    this.timer &&
                    this.timer.current &&
                    this.timer.current.stopTimer();
                },
              },
              {
                key: "onTimerStop",
                value: function () {
                  rl === this.getPhase() && this.onStopButton();
                },
              },
              {
                key: "timerTick",
                value: function (e) {
                  this.props.socket.emit(
                    Bt,
                    this.props.game.hostingRoom.roomCode,
                    e
                  );
                },
              },
              {
                key: "correctGreenBox",
                value: function (e) {
                  var t = 1 === this.props.questionTab,
                    n = this.props.question.correct === e;
                  return (t || this.props.revealAnswer) && n
                    ? " question-answer-correct"
                    : "";
                },
              },
              {
                key: "StatProgressBar",
                value: function (e) {
                  var t = 0;
                  return (
                    0 !== this.props.answerCount &&
                      this.props.answerStats &&
                      (t = Math.round(
                        (100 * this.props.answerStats[e]) /
                          this.props.answerCount
                      )),
                    !(
                      2 !== this.props.questionTab && !this.props.revealStats
                    ) &&
                      (0, fn.jsx)(Qs, {
                        now: t,
                        label: t + "%",
                        className: "question-progress",
                      })
                  );
                },
              },
              {
                key: "renderAnswer",
                value: function (e, t) {
                  return (0, fn.jsx)(
                    jn,
                    {
                      md: 6,
                      sm: 12,
                      children: (0, fn.jsxs)("div", {
                        className: "question-answer" + this.correctGreenBox(t),
                        children: [
                          (0, fn.jsx)("div", {
                            className: "question-answer-letter",
                            children: Qt(t),
                          }),
                          e,
                          this.StatProgressBar(t),
                        ],
                      }),
                    },
                    t
                  );
                },
              },
              {
                key: "renderTimer",
                value: function () {
                  return (
                    !!this.isTimerEnabled() &&
                    (0, fn.jsx)(Ks, {
                      ref: this.timer,
                      timeLimit: this.props.game.hostingRoom.timeLimit,
                      onTimerStop: this.onTimerStop,
                      tick: this.timerTick,
                    })
                  );
                },
              },
              {
                key: "QuestionGrid",
                value: function () {
                  return (0, fn.jsxs)("div", {
                    children: [
                      (0, fn.jsxs)(Sn, {
                        children: [
                          (0, fn.jsx)(jn, {
                            md: { span: 4, order: 1 },
                            sm: { span: 6, order: 2 },
                            xs: { span: 6, order: 2 },
                            children: (0, fn.jsxs)("div", {
                              className: "question-counter",
                              children: [
                                "Question: ",
                                this.props.questionIndex + 1,
                                " / ",
                                this.props.lastIndexNumber,
                              ],
                            }),
                          }),
                          (0, fn.jsx)(jn, {
                            md: { span: 4, order: 2 },
                            sm: { span: 12, order: 1 },
                            xs: { span: 12, order: 1 },
                            children: this.renderTimer(),
                          }),
                          (0, fn.jsx)(jn, {
                            md: { span: 4, order: 3 },
                            sm: { span: 6, order: 3 },
                            xs: { span: 6, order: 3 },
                            children: (0, fn.jsxs)("div", {
                              className: "question-answers-counter",
                              children: [
                                "Answers: ",
                                this.props.answerCount,
                                " / ",
                                this.props.connectedUsers,
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, fn.jsxs)(Sn, {
                        children: [
                          (0, fn.jsx)(jn, {
                            xs: 12,
                            children: (0, fn.jsx)("div", {
                              className: "question-question",
                              children: this.props.question.question,
                            }),
                          }),
                          this.props.question.answers.map(this.renderAnswer),
                        ],
                      }),
                    ],
                  });
                },
              },
              {
                key: "renderControlButton",
                value: function (e, t, n, r, o) {
                  return (0, fn.jsxs)(Rr, {
                    variant: r.variant,
                    disabled: r.disabled,
                    onClick: o,
                    children: [
                      (0, fn.jsx)("img", {
                        src: e,
                        className: "material-ui-icon",
                        alt: "".concat(t, " ").concat(n).trim(),
                      }),
                      (0, fn.jsx)("br", {}),
                      t,
                      (0, fn.jsx)("br", {}),
                      n,
                    ],
                  });
                },
              },
              {
                key: "renderStopRoundButton",
                value: function (e) {
                  var t = rl === e ? al.ACTIVE : al.DISABLED;
                  return this.renderControlButton(
                    tl,
                    "Stop",
                    "round",
                    t,
                    this.onStopButton
                  );
                },
              },
              {
                key: "renderRevealAnswerButton",
                value: function (e) {
                  var t = this,
                    n =
                      ol !== e || 1 === this.props.questionTab
                        ? al.DISABLED
                        : al.ACTIVE;
                  return this.renderControlButton(
                    Ra,
                    "Reveal",
                    "answer",
                    n,
                    function () {
                      return t.props.changeTab(1);
                    }
                  );
                },
              },
              {
                key: "renderAnswerStatsButton",
                value: function (e) {
                  var t = this,
                    n =
                      ol !== e || 2 === this.props.questionTab
                        ? al.DISABLED
                        : al.ACTIVE;
                  return this.renderControlButton(
                    Gs,
                    "Answer",
                    "stats",
                    n,
                    function () {
                      t.props.changeTab(2),
                        t.props.socket.emit(
                          "ANSWER_STATS_REQUEST",
                          t.props.game.hostingRoom.roomCode
                        );
                    }
                  );
                },
              },
              {
                key: "renderLeaderboardButton",
                value: function (e) {
                  var t = this,
                    n =
                      ol !== e || 3 === this.props.questionTab
                        ? al.DISABLED
                        : al.ACTIVE;
                  return this.renderControlButton(
                    Xs,
                    "Leader-",
                    "board",
                    n,
                    function () {
                      t.props.isLastQuestion
                        ? t.endQuiz()
                        : (t.props.changeTab(3),
                          t.props.socket.emit(
                            "GENERAL_RANKING_REQUEST",
                            t.props.game.hostingRoom.roomCode
                          ));
                    }
                  );
                },
              },
              {
                key: "renderLookAtBrowserButton",
                value: function (e) {
                  var t = this,
                    n =
                      ol !== e ||
                      this.props.isLastQuestion ||
                      4 === this.props.questionTab
                        ? al.DISABLED
                        : al.ACTIVE;
                  return this.renderControlButton(
                    Js,
                    "Look at",
                    "browser",
                    n,
                    function () {
                      return t.props.changeTab(4);
                    }
                  );
                },
              },
              {
                key: "renderNextButton",
                value: function (e) {
                  var t = rl === e ? al.DISABLED : al.ACTIVE;
                  return this.props.isLastQuestion
                    ? this.renderControlButton(
                        Ys,
                        "Leader-",
                        "board",
                        t,
                        this.endQuiz
                      )
                    : this.renderControlButton(
                        Ys,
                        "Next",
                        "question",
                        t,
                        this.onNextButton
                      );
                },
              },
              {
                key: "endQuiz",
                value: function () {
                  this.props.socket.emit(
                    It,
                    this.props.game.hostingRoom.roomCode
                  );
                },
              },
              {
                key: "renderControlButtons",
                value: function (e) {
                  return (0, fn.jsxs)("div", {
                    className: "question-control-buttons",
                    children: [
                      (0, fn.jsx)(ws, {
                        children: this.renderStopRoundButton(e),
                      }),
                      (0, fn.jsxs)(ws, {
                        children: [
                          this.renderAnswerStatsButton(e),
                          this.renderRevealAnswerButton(e),
                          this.renderLeaderboardButton(e),
                        ],
                      }),
                      (0, fn.jsxs)(ws, {
                        children: [
                          this.renderLookAtBrowserButton(e),
                          this.renderNextButton(e),
                        ],
                      }),
                    ],
                  });
                },
              },
              {
                key: "onStopButton",
                value: function () {
                  this.stopTimer(), this.props.nextButton();
                },
              },
              {
                key: "onNextButton",
                value: function () {
                  this.startTimer(), this.props.nextButton();
                },
              },
              {
                key: "renderQuestion",
                value: function (e) {
                  return (
                    nl !== e &&
                    3 !== this.props.questionTab &&
                    4 !== this.props.questionTab &&
                    (0, fn.jsx)(wn, {
                      fluid: !0,
                      children: this.QuestionGrid(),
                    })
                  );
                },
              },
              {
                key: "renderLeaderboard",
                value: function (e) {
                  return (
                    nl !== e &&
                    3 === this.props.questionTab &&
                    (0, fn.jsx)(zs, { data: this.props.generalRanking })
                  );
                },
              },
              {
                key: "renderLookDown",
                value: function (e) {
                  if (nl === e || 4 === this.props.questionTab) {
                    var t = nl === e ? "first" : "next";
                    return (0, fn.jsxs)("div", {
                      style: { fontSize: "1.25em" },
                      children: [
                        (0, fn.jsx)("div", {
                          style: { marginBottom: "2vh" },
                          children: "Look at your browser or phone.",
                        }),
                        (0, fn.jsx)("div", {
                          style: { fontSize: "4em" },
                          children: (0, fn.jsx)("img", {
                            src: Js,
                            className: "material-ui-icon",
                            alt: "Look at browser or phone",
                          }),
                        }),
                        (0, fn.jsxs)("div", {
                          style: { marginTop: "2vh", marginBottom: "2em" },
                          children: ["The ", t, " question is coming up..."],
                        }),
                      ],
                    });
                  }
                  return !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.getPhase();
                  return (0, fn.jsx)(
                    xa,
                    an(
                      an(
                        {
                          logo: !0,
                          cancel: "End quiz",
                          closeRoomSignal: !0,
                          renderJoinInfo: !0,
                        },
                        this.props
                      ),
                      {},
                      {
                        children: (0, fn.jsxs)("div", {
                          style: { marginBottom: "2em" },
                          children: [
                            this.renderQuestion(e),
                            this.renderLeaderboard(e),
                            this.renderLookDown(e),
                            this.renderControlButtons(e),
                          ],
                        }),
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        sl = il,
        ll = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)(
                    xa,
                    an(
                      an({ logo: !0, cancel: "Cancel" }, this.props),
                      {},
                      {
                        children: (0, fn.jsx)("div", {
                          className: "message-box",
                          children: "Connecting...",
                        }),
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        ul = ll,
        cl = Object.defineProperty,
        dl = Object.getOwnPropertySymbols,
        fl = Object.prototype.hasOwnProperty,
        pl = Object.prototype.propertyIsEnumerable,
        hl = function (e, t, n) {
          return t in e
            ? cl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        ml = function (e, t) {
          for (var n in t || (t = {})) fl.call(t, n) && hl(e, n, t[n]);
          if (dl) {
            var r,
              o = fe(dl(t));
            try {
              for (o.s(); !(r = o.n()).done; ) {
                n = r.value;
                pl.call(t, n) && hl(e, n, t[n]);
              }
            } catch (Fu) {
              o.e(Fu);
            } finally {
              o.f();
            }
          }
          return e;
        },
        vl = function (e, t) {
          var n = {};
          for (var r in e) fl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && dl) {
            var o,
              a = fe(dl(e));
            try {
              for (a.s(); !(o = a.n()).done; ) {
                r = o.value;
                t.indexOf(r) < 0 && pl.call(e, r) && (n[r] = e[r]);
              }
            } catch (Fu) {
              a.e(Fu);
            } finally {
              a.f();
            }
          }
          return n;
        };
      !(function (e) {
        var t = (function () {
            function t(e, n, r, o) {
              if (
                (J(this, t),
                (this.version = e),
                (this.errorCorrectionLevel = n),
                (this.modules = []),
                (this.isFunction = []),
                e < t.MIN_VERSION || e > t.MAX_VERSION)
              )
                throw new RangeError("Version value out of range");
              if (o < -1 || o > 7)
                throw new RangeError("Mask value out of range");
              this.size = 4 * e + 17;
              for (var i = [], s = 0; s < this.size; s++) i.push(!1);
              for (var l = 0; l < this.size; l++)
                this.modules.push(i.slice()), this.isFunction.push(i.slice());
              this.drawFunctionPatterns();
              var u = this.addEccAndInterleave(r);
              if ((this.drawCodewords(u), -1 == o))
                for (var c = 1e9, d = 0; d < 8; d++) {
                  this.applyMask(d), this.drawFormatBits(d);
                  var f = this.getPenaltyScore();
                  f < c && ((o = d), (c = f)), this.applyMask(d);
                }
              a(0 <= o && o <= 7),
                (this.mask = o),
                this.applyMask(o),
                this.drawFormatBits(o),
                (this.isFunction = []);
            }
            return (
              ne(
                t,
                [
                  {
                    key: "getModule",
                    value: function (e, t) {
                      return (
                        0 <= e &&
                        e < this.size &&
                        0 <= t &&
                        t < this.size &&
                        this.modules[t][e]
                      );
                    },
                  },
                  {
                    key: "getModules",
                    value: function () {
                      return this.modules;
                    },
                  },
                  {
                    key: "drawFunctionPatterns",
                    value: function () {
                      for (var e = 0; e < this.size; e++)
                        this.setFunctionModule(6, e, e % 2 == 0),
                          this.setFunctionModule(e, 6, e % 2 == 0);
                      this.drawFinderPattern(3, 3),
                        this.drawFinderPattern(this.size - 4, 3),
                        this.drawFinderPattern(3, this.size - 4);
                      for (
                        var t = this.getAlignmentPatternPositions(),
                          n = t.length,
                          r = 0;
                        r < n;
                        r++
                      )
                        for (var o = 0; o < n; o++)
                          (0 == r && 0 == o) ||
                            (0 == r && o == n - 1) ||
                            (r == n - 1 && 0 == o) ||
                            this.drawAlignmentPattern(t[r], t[o]);
                      this.drawFormatBits(0), this.drawVersion();
                    },
                  },
                  {
                    key: "drawFormatBits",
                    value: function (e) {
                      for (
                        var t = (this.errorCorrectionLevel.formatBits << 3) | e,
                          n = t,
                          r = 0;
                        r < 10;
                        r++
                      )
                        n = (n << 1) ^ (1335 * (n >>> 9));
                      var i = 21522 ^ ((t << 10) | n);
                      a(i >>> 15 == 0);
                      for (var s = 0; s <= 5; s++)
                        this.setFunctionModule(8, s, o(i, s));
                      this.setFunctionModule(8, 7, o(i, 6)),
                        this.setFunctionModule(8, 8, o(i, 7)),
                        this.setFunctionModule(7, 8, o(i, 8));
                      for (var l = 9; l < 15; l++)
                        this.setFunctionModule(14 - l, 8, o(i, l));
                      for (var u = 0; u < 8; u++)
                        this.setFunctionModule(this.size - 1 - u, 8, o(i, u));
                      for (var c = 8; c < 15; c++)
                        this.setFunctionModule(8, this.size - 15 + c, o(i, c));
                      this.setFunctionModule(8, this.size - 8, !0);
                    },
                  },
                  {
                    key: "drawVersion",
                    value: function () {
                      if (!(this.version < 7)) {
                        for (var e = this.version, t = 0; t < 12; t++)
                          e = (e << 1) ^ (7973 * (e >>> 11));
                        var n = (this.version << 12) | e;
                        a(n >>> 18 == 0);
                        for (var r = 0; r < 18; r++) {
                          var i = o(n, r),
                            s = this.size - 11 + (r % 3),
                            l = Math.floor(r / 3);
                          this.setFunctionModule(s, l, i),
                            this.setFunctionModule(l, s, i);
                        }
                      }
                    },
                  },
                  {
                    key: "drawFinderPattern",
                    value: function (e, t) {
                      for (var n = -4; n <= 4; n++)
                        for (var r = -4; r <= 4; r++) {
                          var o = Math.max(Math.abs(r), Math.abs(n)),
                            a = e + r,
                            i = t + n;
                          0 <= a &&
                            a < this.size &&
                            0 <= i &&
                            i < this.size &&
                            this.setFunctionModule(a, i, 2 != o && 4 != o);
                        }
                    },
                  },
                  {
                    key: "drawAlignmentPattern",
                    value: function (e, t) {
                      for (var n = -2; n <= 2; n++)
                        for (var r = -2; r <= 2; r++)
                          this.setFunctionModule(
                            e + r,
                            t + n,
                            1 != Math.max(Math.abs(r), Math.abs(n))
                          );
                    },
                  },
                  {
                    key: "setFunctionModule",
                    value: function (e, t, n) {
                      (this.modules[t][e] = n), (this.isFunction[t][e] = !0);
                    },
                  },
                  {
                    key: "addEccAndInterleave",
                    value: function (e) {
                      var n = this.version,
                        r = this.errorCorrectionLevel;
                      if (e.length != t.getNumDataCodewords(n, r))
                        throw new RangeError("Invalid argument");
                      for (
                        var o = t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
                          i = t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
                          s = Math.floor(t.getNumRawDataModules(n) / 8),
                          l = o - (s % o),
                          u = Math.floor(s / o),
                          c = [],
                          d = t.reedSolomonComputeDivisor(i),
                          f = 0,
                          p = 0;
                        f < o;
                        f++
                      ) {
                        var h = e.slice(p, p + u - i + (f < l ? 0 : 1));
                        p += h.length;
                        var m = t.reedSolomonComputeRemainder(h, d);
                        f < l && h.push(0), c.push(h.concat(m));
                      }
                      for (
                        var v = [],
                          y = function (e) {
                            c.forEach(function (t, n) {
                              (e != u - i || n >= l) && v.push(t[e]);
                            });
                          },
                          g = 0;
                        g < c[0].length;
                        g++
                      )
                        y(g);
                      return a(v.length == s), v;
                    },
                  },
                  {
                    key: "drawCodewords",
                    value: function (e) {
                      if (
                        e.length !=
                        Math.floor(t.getNumRawDataModules(this.version) / 8)
                      )
                        throw new RangeError("Invalid argument");
                      for (var n = 0, r = this.size - 1; r >= 1; r -= 2) {
                        6 == r && (r = 5);
                        for (var i = 0; i < this.size; i++)
                          for (var s = 0; s < 2; s++) {
                            var l = r - s,
                              u = 0 == ((r + 1) & 2) ? this.size - 1 - i : i;
                            !this.isFunction[u][l] &&
                              n < 8 * e.length &&
                              ((this.modules[u][l] = o(
                                e[n >>> 3],
                                7 - (7 & n)
                              )),
                              n++);
                          }
                      }
                      a(n == 8 * e.length);
                    },
                  },
                  {
                    key: "applyMask",
                    value: function (e) {
                      if (e < 0 || e > 7)
                        throw new RangeError("Mask value out of range");
                      for (var t = 0; t < this.size; t++)
                        for (var n = 0; n < this.size; n++) {
                          var r = void 0;
                          switch (e) {
                            case 0:
                              r = (n + t) % 2 == 0;
                              break;
                            case 1:
                              r = t % 2 == 0;
                              break;
                            case 2:
                              r = n % 3 == 0;
                              break;
                            case 3:
                              r = (n + t) % 3 == 0;
                              break;
                            case 4:
                              r =
                                (Math.floor(n / 3) + Math.floor(t / 2)) % 2 ==
                                0;
                              break;
                            case 5:
                              r = ((n * t) % 2) + ((n * t) % 3) == 0;
                              break;
                            case 6:
                              r = (((n * t) % 2) + ((n * t) % 3)) % 2 == 0;
                              break;
                            case 7:
                              r = (((n + t) % 2) + ((n * t) % 3)) % 2 == 0;
                              break;
                            default:
                              throw new Error("Unreachable");
                          }
                          !this.isFunction[t][n] &&
                            r &&
                            (this.modules[t][n] = !this.modules[t][n]);
                        }
                    },
                  },
                  {
                    key: "getPenaltyScore",
                    value: function () {
                      for (var e = 0, n = 0; n < this.size; n++) {
                        for (
                          var r = !1, o = 0, i = [0, 0, 0, 0, 0, 0, 0], s = 0;
                          s < this.size;
                          s++
                        )
                          this.modules[n][s] == r
                            ? 5 == ++o
                              ? (e += t.PENALTY_N1)
                              : o > 5 && e++
                            : (this.finderPenaltyAddHistory(o, i),
                              r ||
                                (e +=
                                  this.finderPenaltyCountPatterns(i) *
                                  t.PENALTY_N3),
                              (r = this.modules[n][s]),
                              (o = 1));
                        e +=
                          this.finderPenaltyTerminateAndCount(r, o, i) *
                          t.PENALTY_N3;
                      }
                      for (var l = 0; l < this.size; l++) {
                        for (
                          var u = !1, c = 0, d = [0, 0, 0, 0, 0, 0, 0], f = 0;
                          f < this.size;
                          f++
                        )
                          this.modules[f][l] == u
                            ? 5 == ++c
                              ? (e += t.PENALTY_N1)
                              : c > 5 && e++
                            : (this.finderPenaltyAddHistory(c, d),
                              u ||
                                (e +=
                                  this.finderPenaltyCountPatterns(d) *
                                  t.PENALTY_N3),
                              (u = this.modules[f][l]),
                              (c = 1));
                        e +=
                          this.finderPenaltyTerminateAndCount(u, c, d) *
                          t.PENALTY_N3;
                      }
                      for (var p = 0; p < this.size - 1; p++)
                        for (var h = 0; h < this.size - 1; h++) {
                          var m = this.modules[p][h];
                          m == this.modules[p][h + 1] &&
                            m == this.modules[p + 1][h] &&
                            m == this.modules[p + 1][h + 1] &&
                            (e += t.PENALTY_N2);
                        }
                      var v,
                        y = 0,
                        g = fe(this.modules);
                      try {
                        for (g.s(); !(v = g.n()).done; ) {
                          y = v.value.reduce(function (e, t) {
                            return e + (t ? 1 : 0);
                          }, y);
                        }
                      } catch (Fu) {
                        g.e(Fu);
                      } finally {
                        g.f();
                      }
                      var b = this.size * this.size,
                        w = Math.ceil(Math.abs(20 * y - 10 * b) / b) - 1;
                      return (
                        a(0 <= w && w <= 9),
                        a(0 <= (e += w * t.PENALTY_N4) && e <= 2568888),
                        e
                      );
                    },
                  },
                  {
                    key: "getAlignmentPatternPositions",
                    value: function () {
                      if (1 == this.version) return [];
                      for (
                        var e = Math.floor(this.version / 7) + 2,
                          t =
                            32 == this.version
                              ? 26
                              : 2 *
                                Math.ceil((4 * this.version + 4) / (2 * e - 2)),
                          n = [6],
                          r = this.size - 7;
                        n.length < e;
                        r -= t
                      )
                        n.splice(1, 0, r);
                      return n;
                    },
                  },
                  {
                    key: "finderPenaltyCountPatterns",
                    value: function (e) {
                      var t = e[1];
                      a(t <= 3 * this.size);
                      var n =
                        t > 0 &&
                        e[2] == t &&
                        e[3] == 3 * t &&
                        e[4] == t &&
                        e[5] == t;
                      return (
                        (n && e[0] >= 4 * t && e[6] >= t ? 1 : 0) +
                        (n && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
                      );
                    },
                  },
                  {
                    key: "finderPenaltyTerminateAndCount",
                    value: function (e, t, n) {
                      return (
                        e && (this.finderPenaltyAddHistory(t, n), (t = 0)),
                        (t += this.size),
                        this.finderPenaltyAddHistory(t, n),
                        this.finderPenaltyCountPatterns(n)
                      );
                    },
                  },
                  {
                    key: "finderPenaltyAddHistory",
                    value: function (e, t) {
                      0 == t[0] && (e += this.size), t.pop(), t.unshift(e);
                    },
                  },
                ],
                [
                  {
                    key: "encodeText",
                    value: function (n, r) {
                      var o = e.QrSegment.makeSegments(n);
                      return t.encodeSegments(o, r);
                    },
                  },
                  {
                    key: "encodeBinary",
                    value: function (n, r) {
                      var o = e.QrSegment.makeBytes(n);
                      return t.encodeSegments([o], r);
                    },
                  },
                  {
                    key: "encodeSegments",
                    value: function (e, n) {
                      var o,
                        i,
                        l =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        u =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 40,
                        c =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : -1,
                        d =
                          !(arguments.length > 5 && void 0 !== arguments[5]) ||
                          arguments[5];
                      if (
                        !(t.MIN_VERSION <= l && l <= u && u <= t.MAX_VERSION) ||
                        c < -1 ||
                        c > 7
                      )
                        throw new RangeError("Invalid value");
                      for (o = l; ; o++) {
                        var f = 8 * t.getNumDataCodewords(o, n),
                          p = s.getTotalBits(e, o);
                        if (p <= f) {
                          i = p;
                          break;
                        }
                        if (o >= u) throw new RangeError("Data too long");
                      }
                      for (
                        var h = 0,
                          m = [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH];
                        h < m.length;
                        h++
                      ) {
                        var v = m[h];
                        d && i <= 8 * t.getNumDataCodewords(o, v) && (n = v);
                      }
                      var y,
                        g = [],
                        b = fe(e);
                      try {
                        for (b.s(); !(y = b.n()).done; ) {
                          var w = y.value;
                          r(w.mode.modeBits, 4, g),
                            r(w.numChars, w.mode.numCharCountBits(o), g);
                          var x,
                            k = fe(w.getData());
                          try {
                            for (k.s(); !(x = k.n()).done; ) {
                              var S = x.value;
                              g.push(S);
                            }
                          } catch (Fu) {
                            k.e(Fu);
                          } finally {
                            k.f();
                          }
                        }
                      } catch (Fu) {
                        b.e(Fu);
                      } finally {
                        b.f();
                      }
                      a(g.length == i);
                      var E = 8 * t.getNumDataCodewords(o, n);
                      a(g.length <= E),
                        r(0, Math.min(4, E - g.length), g),
                        r(0, (8 - (g.length % 8)) % 8, g),
                        a(g.length % 8 == 0);
                      for (var C = 236; g.length < E; C ^= 253) r(C, 8, g);
                      for (var N = []; 8 * N.length < g.length; ) N.push(0);
                      return (
                        g.forEach(function (e, t) {
                          return (N[t >>> 3] |= e << (7 - (7 & t)));
                        }),
                        new t(o, n, N, c)
                      );
                    },
                  },
                  {
                    key: "getNumRawDataModules",
                    value: function (e) {
                      if (e < t.MIN_VERSION || e > t.MAX_VERSION)
                        throw new RangeError("Version number out of range");
                      var n = (16 * e + 128) * e + 64;
                      if (e >= 2) {
                        var r = Math.floor(e / 7) + 2;
                        (n -= (25 * r - 10) * r - 55), e >= 7 && (n -= 36);
                      }
                      return a(208 <= n && n <= 29648), n;
                    },
                  },
                  {
                    key: "getNumDataCodewords",
                    value: function (e, n) {
                      return (
                        Math.floor(t.getNumRawDataModules(e) / 8) -
                        t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] *
                          t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]
                      );
                    },
                  },
                  {
                    key: "reedSolomonComputeDivisor",
                    value: function (e) {
                      if (e < 1 || e > 255)
                        throw new RangeError("Degree out of range");
                      for (var n = [], r = 0; r < e - 1; r++) n.push(0);
                      n.push(1);
                      for (var o = 1, a = 0; a < e; a++) {
                        for (var i = 0; i < n.length; i++)
                          (n[i] = t.reedSolomonMultiply(n[i], o)),
                            i + 1 < n.length && (n[i] ^= n[i + 1]);
                        o = t.reedSolomonMultiply(o, 2);
                      }
                      return n;
                    },
                  },
                  {
                    key: "reedSolomonComputeRemainder",
                    value: function (e, n) {
                      var r,
                        o = n.map(function (e) {
                          return 0;
                        }),
                        a = fe(e);
                      try {
                        var i = function () {
                          var e = r.value ^ o.shift();
                          o.push(0),
                            n.forEach(function (n, r) {
                              return (o[r] ^= t.reedSolomonMultiply(n, e));
                            });
                        };
                        for (a.s(); !(r = a.n()).done; ) i();
                      } catch (Fu) {
                        a.e(Fu);
                      } finally {
                        a.f();
                      }
                      return o;
                    },
                  },
                  {
                    key: "reedSolomonMultiply",
                    value: function (e, t) {
                      if (e >>> 8 != 0 || t >>> 8 != 0)
                        throw new RangeError("Byte out of range");
                      for (var n = 0, r = 7; r >= 0; r--)
                        (n = (n << 1) ^ (285 * (n >>> 7))),
                          (n ^= ((t >>> r) & 1) * e);
                      return a(n >>> 8 == 0), n;
                    },
                  },
                ]
              ),
              t
            );
          })(),
          n = t;
        function r(e, t, n) {
          if (t < 0 || t > 31 || e >>> t != 0)
            throw new RangeError("Value out of range");
          for (var r = t - 1; r >= 0; r--) n.push((e >>> r) & 1);
        }
        function o(e, t) {
          return 0 != ((e >>> t) & 1);
        }
        function a(e) {
          if (!e) throw new Error("Assertion error");
        }
        (n.MIN_VERSION = 1),
          (n.MAX_VERSION = 40),
          (n.PENALTY_N1 = 3),
          (n.PENALTY_N2 = 3),
          (n.PENALTY_N3 = 40),
          (n.PENALTY_N4 = 10),
          (n.ECC_CODEWORDS_PER_BLOCK = [
            [
              -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24,
              28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
              28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
              28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            [
              -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
              24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
              30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
          ]),
          (n.NUM_ERROR_CORRECTION_BLOCKS = [
            [
              -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8,
              9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22,
              24, 25,
            ],
            [
              -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14,
              16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38,
              40, 43, 45, 47, 49,
            ],
            [
              -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
              21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
              53, 56, 59, 62, 65, 68,
            ],
            [
              -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21,
              25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60,
              63, 66, 70, 74, 77, 81,
            ],
          ]),
          (e.QrCode = n);
        var i = (function () {
            function e(t, n, r) {
              if (
                (J(this, e),
                (this.mode = t),
                (this.numChars = n),
                (this.bitData = r),
                n < 0)
              )
                throw new RangeError("Invalid argument");
              this.bitData = r.slice();
            }
            return (
              ne(
                e,
                [
                  {
                    key: "getData",
                    value: function () {
                      return this.bitData.slice();
                    },
                  },
                ],
                [
                  {
                    key: "makeBytes",
                    value: function (t) {
                      var n,
                        o = [],
                        a = fe(t);
                      try {
                        for (a.s(); !(n = a.n()).done; ) {
                          r(n.value, 8, o);
                        }
                      } catch (Fu) {
                        a.e(Fu);
                      } finally {
                        a.f();
                      }
                      return new e(e.Mode.BYTE, t.length, o);
                    },
                  },
                  {
                    key: "makeNumeric",
                    value: function (t) {
                      if (!e.isNumeric(t))
                        throw new RangeError(
                          "String contains non-numeric characters"
                        );
                      for (var n = [], o = 0; o < t.length; ) {
                        var a = Math.min(t.length - o, 3);
                        r(parseInt(t.substr(o, a), 10), 3 * a + 1, n), (o += a);
                      }
                      return new e(e.Mode.NUMERIC, t.length, n);
                    },
                  },
                  {
                    key: "makeAlphanumeric",
                    value: function (t) {
                      if (!e.isAlphanumeric(t))
                        throw new RangeError(
                          "String contains unencodable characters in alphanumeric mode"
                        );
                      var n,
                        o = [];
                      for (n = 0; n + 2 <= t.length; n += 2) {
                        var a =
                          45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));
                        r(
                          (a += e.ALPHANUMERIC_CHARSET.indexOf(
                            t.charAt(n + 1)
                          )),
                          11,
                          o
                        );
                      }
                      return (
                        n < t.length &&
                          r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)), 6, o),
                        new e(e.Mode.ALPHANUMERIC, t.length, o)
                      );
                    },
                  },
                  {
                    key: "makeSegments",
                    value: function (t) {
                      return "" == t
                        ? []
                        : e.isNumeric(t)
                        ? [e.makeNumeric(t)]
                        : e.isAlphanumeric(t)
                        ? [e.makeAlphanumeric(t)]
                        : [e.makeBytes(e.toUtf8ByteArray(t))];
                    },
                  },
                  {
                    key: "makeEci",
                    value: function (t) {
                      var n = [];
                      if (t < 0)
                        throw new RangeError(
                          "ECI assignment value out of range"
                        );
                      if (t < 128) r(t, 8, n);
                      else if (t < 16384) r(2, 2, n), r(t, 14, n);
                      else {
                        if (!(t < 1e6))
                          throw new RangeError(
                            "ECI assignment value out of range"
                          );
                        r(6, 3, n), r(t, 21, n);
                      }
                      return new e(e.Mode.ECI, 0, n);
                    },
                  },
                  {
                    key: "isNumeric",
                    value: function (t) {
                      return e.NUMERIC_REGEX.test(t);
                    },
                  },
                  {
                    key: "isAlphanumeric",
                    value: function (t) {
                      return e.ALPHANUMERIC_REGEX.test(t);
                    },
                  },
                  {
                    key: "getTotalBits",
                    value: function (e, t) {
                      var n,
                        r = 0,
                        o = fe(e);
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          var a = n.value,
                            i = a.mode.numCharCountBits(t);
                          if (a.numChars >= 1 << i) return 1 / 0;
                          r += 4 + i + a.bitData.length;
                        }
                      } catch (Fu) {
                        o.e(Fu);
                      } finally {
                        o.f();
                      }
                      return r;
                    },
                  },
                  {
                    key: "toUtf8ByteArray",
                    value: function (e) {
                      e = encodeURI(e);
                      for (var t = [], n = 0; n < e.length; n++)
                        "%" != e.charAt(n)
                          ? t.push(e.charCodeAt(n))
                          : (t.push(parseInt(e.substr(n + 1, 2), 16)),
                            (n += 2));
                      return t;
                    },
                  },
                ]
              ),
              e
            );
          })(),
          s = i;
        (s.NUMERIC_REGEX = /^[0-9]*$/),
          (s.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
          (s.ALPHANUMERIC_CHARSET =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
          (e.QrSegment = s);
      })(Zs || (Zs = {})),
        (function (e) {
          var t = ne(function e(t, n) {
              J(this, e), (this.ordinal = t), (this.formatBits = n);
            }),
            n = t;
          (n.LOW = new t(0, 1)),
            (n.MEDIUM = new t(1, 0)),
            (n.QUARTILE = new t(2, 3)),
            (n.HIGH = new t(3, 2)),
            (e.Ecc = n);
        })((el = Zs || (Zs = {})).QrCode || (el.QrCode = {})),
        (function (e) {
          !(function (e) {
            var t = (function () {
                function e(t, n) {
                  J(this, e), (this.modeBits = t), (this.numBitsCharCount = n);
                }
                return (
                  ne(e, [
                    {
                      key: "numCharCountBits",
                      value: function (e) {
                        return this.numBitsCharCount[Math.floor((e + 7) / 17)];
                      },
                    },
                  ]),
                  e
                );
              })(),
              n = t;
            (n.NUMERIC = new t(1, [10, 12, 14])),
              (n.ALPHANUMERIC = new t(2, [9, 11, 13])),
              (n.BYTE = new t(4, [8, 16, 16])),
              (n.KANJI = new t(8, [8, 10, 12])),
              (n.ECI = new t(7, [0, 0, 0])),
              (e.Mode = n);
          })(e.QrSegment || (e.QrSegment = {}));
        })(Zs || (Zs = {}));
      var yl = Zs,
        gl = {
          L: yl.QrCode.Ecc.LOW,
          M: yl.QrCode.Ecc.MEDIUM,
          Q: yl.QrCode.Ecc.QUARTILE,
          H: yl.QrCode.Ecc.HIGH,
        },
        bl = "#FFFFFF",
        wl = "#000000";
      function xl(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = [];
        return (
          e.forEach(function (e, r) {
            var o = null;
            e.forEach(function (a, i) {
              if (!a && null !== o)
                return (
                  n.push(
                    "M"
                      .concat(o + t, " ")
                      .concat(r + t, "h")
                      .concat(i - o, "v1H")
                      .concat(o + t, "z")
                  ),
                  void (o = null)
                );
              if (i !== e.length - 1) a && null === o && (o = i);
              else {
                if (!a) return;
                null === o
                  ? n.push(
                      "M"
                        .concat(i + t, ",")
                        .concat(r + t, " h1v1H")
                        .concat(i + t, "z")
                    )
                  : n.push(
                      "M"
                        .concat(o + t, ",")
                        .concat(r + t, " h")
                        .concat(i + 1 - o, "v1H")
                        .concat(o + t, "z")
                    );
              }
            });
          }),
          n.join("")
        );
      }
      function kl(e, t) {
        return e.slice().map(function (e, n) {
          return n < t.y || n >= t.y + t.h
            ? e
            : e.map(function (e, n) {
                return (n < t.x || n >= t.x + t.w) && e;
              });
        });
      }
      function Sl(e, t, n, r) {
        if (null == r) return null;
        var o = n ? 4 : 0,
          a = e.length + 2 * o,
          i = Math.floor(0.1 * t),
          s = a / t,
          l = (r.width || i) * s,
          u = (r.height || i) * s,
          c = null == r.x ? e.length / 2 - l / 2 : r.x * s,
          d = null == r.y ? e.length / 2 - u / 2 : r.y * s,
          f = null;
        if (r.excavate) {
          var p = Math.floor(c),
            h = Math.floor(d);
          f = { x: p, y: h, w: Math.ceil(l + c - p), h: Math.ceil(u + d - h) };
        }
        return { x: c, y: d, h: u, w: l, excavation: f };
      }
      var El = (function () {
        try {
          new Path2D().addPath(new Path2D());
        } catch (zu) {
          return !1;
        }
        return !0;
      })();
      function Cl(e) {
        var t = e,
          n = t.value,
          r = t.size,
          o = void 0 === r ? 128 : r,
          a = t.level,
          i = void 0 === a ? "L" : a,
          s = t.bgColor,
          u = void 0 === s ? bl : s,
          c = t.fgColor,
          d = void 0 === c ? wl : c,
          f = t.includeMargin,
          p = void 0 !== f && f,
          h = t.style,
          m = t.imageSettings,
          y = vl(t, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "style",
            "imageSettings",
          ]),
          g = null == m ? void 0 : m.src,
          b = (0, l.useRef)(null),
          w = (0, l.useRef)(null),
          x = v((0, l.useState)(!1), 2),
          k = (x[0], x[1]);
        (0, l.useEffect)(function () {
          if (null != b.current) {
            var e = b.current,
              t = e.getContext("2d");
            if (!t) return;
            var r = yl.QrCode.encodeText(n, gl[i]).getModules(),
              a = p ? 4 : 0,
              s = r.length + 2 * a,
              l = Sl(r, o, p, m),
              c = w.current,
              f =
                null != l &&
                null !== c &&
                c.complete &&
                0 !== c.naturalHeight &&
                0 !== c.naturalWidth;
            f && null != l.excavation && (r = kl(r, l.excavation));
            var h = window.devicePixelRatio || 1;
            e.height = e.width = o * h;
            var v = (o / s) * h;
            t.scale(v, v),
              (t.fillStyle = u),
              t.fillRect(0, 0, s, s),
              (t.fillStyle = d),
              El
                ? t.fill(new Path2D(xl(r, a)))
                : r.forEach(function (e, n) {
                    e.forEach(function (e, r) {
                      e && t.fillRect(r + a, n + a, 1, 1);
                    });
                  }),
              f && t.drawImage(c, l.x + a, l.y + a, l.w, l.h);
          }
        }),
          (0, l.useEffect)(
            function () {
              k(!1);
            },
            [g]
          );
        var S = ml({ height: o, width: o }, h),
          E = null;
        return (
          null != g &&
            (E = l.createElement("img", {
              src: g,
              key: g,
              style: { display: "none" },
              onLoad: function () {
                k(!0);
              },
              ref: w,
            })),
          l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "canvas",
              ml({ style: S, height: o, width: o, ref: b }, y)
            ),
            E
          )
        );
      }
      function Nl(e) {
        var t = e,
          n = t.value,
          r = t.size,
          o = void 0 === r ? 128 : r,
          a = t.level,
          i = void 0 === a ? "L" : a,
          s = t.bgColor,
          u = void 0 === s ? bl : s,
          c = t.fgColor,
          d = void 0 === c ? wl : c,
          f = t.includeMargin,
          p = void 0 !== f && f,
          h = t.imageSettings,
          m = vl(t, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "imageSettings",
          ]),
          v = yl.QrCode.encodeText(n, gl[i]).getModules(),
          y = p ? 4 : 0,
          g = v.length + 2 * y,
          b = Sl(v, o, p, h),
          w = null;
        null != h &&
          null != b &&
          (null != b.excavation && (v = kl(v, b.excavation)),
          (w = l.createElement("image", {
            xlinkHref: h.src,
            height: b.h,
            width: b.w,
            x: b.x + y,
            y: b.y + y,
            preserveAspectRatio: "none",
          })));
        var x = xl(v, y);
        return l.createElement(
          "svg",
          ml(
            { height: o, width: o, viewBox: "0 0 ".concat(g, " ").concat(g) },
            m
          ),
          l.createElement("path", {
            fill: u,
            d: "M0,0 h".concat(g, "v").concat(g, "H0z"),
            shapeRendering: "crispEdges",
          }),
          l.createElement("path", {
            fill: d,
            d: x,
            shapeRendering: "crispEdges",
          }),
          w
        );
      }
      var jl = function (e) {
        var t = e,
          n = t.renderAs,
          r = vl(t, ["renderAs"]);
        return "svg" === n
          ? l.createElement(Nl, ml({}, r))
          : l.createElement(Cl, ml({}, r));
      };
      var Rl =
        n.p +
        "static/media/play_circle_outline.6fd9f684ceb426aac9c0da36c12656ab.svg";
      function Ol() {
        window.getSelection().removeAllRanges(),
          window
            .getSelection()
            .selectAllChildren(document.querySelector(".qm-join-info-url"));
      }
      var Tl = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  var e = nn()
                    ? "qm-join-info-copy-button"
                    : "qm-join-info-copy-button-disabled";
                  return (0, fn.jsx)(
                    xa,
                    an(
                      an(
                        {
                          logo: !0,
                          cancel: "Cancel the quiz",
                          closeRoomSignal: !0,
                        },
                        this.props
                      ),
                      {},
                      {
                        children: (0, fn.jsx)("div", {
                          className: "message-box",
                          children: (0, fn.jsx)(wn, {
                            children: (0, fn.jsxs)(Sn, {
                              children: [
                                (0, fn.jsx)(jn, { sm: 0, md: 0, lg: 2 }),
                                (0, fn.jsx)(jn, {
                                  sm: 12,
                                  md: 12,
                                  lg: 8,
                                  children: (0, fn.jsxs)("div", {
                                    className: "qm-join-info",
                                    children: [
                                      (0, fn.jsxs)("div", {
                                        className: "qm-join-info-quiz-title",
                                        children: [
                                          "Join ",
                                          this.props.game.hostingRoom.title
                                            ? '"'.concat(
                                                this.props.game.hostingRoom
                                                  .title,
                                                '"'
                                              )
                                            : "the quiz",
                                          " at",
                                        ],
                                      }),
                                      (0, fn.jsxs)("div", {
                                        className:
                                          "qm-join-info-url-and-copy-button qm-join-info-spacing-top",
                                        children: [
                                          (0, fn.jsx)("div", {
                                            className:
                                              "qm-join-info-url qm-join-info-highlight",
                                            children: (0, fn.jsxs)("div", {
                                              onClick: Ol,
                                              children: [
                                                Zt(),
                                                (0, fn.jsx)("span", {
                                                  className: "qm-join-url-path",
                                                  children: tn(
                                                    this.props.game.hostingRoom
                                                      .roomCode
                                                  ),
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, fn.jsx)("div", {
                                            className: e,
                                            children: (0, fn.jsx)(ya, {
                                              text: en(
                                                this.props.game.hostingRoom
                                                  .roomCode
                                              ),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, fn.jsxs)("div", {
                                        className:
                                          "qm-join-info-details qm-join-info-spacing-top",
                                        children: [
                                          (0, fn.jsxs)("div", {
                                            className:
                                              "qm-join-info-text-details qm-join-info-filler",
                                            children: [
                                              (0, fn.jsx)("div", {
                                                children: "Code:",
                                              }),
                                              (0, fn.jsxs)("div", {
                                                className:
                                                  "qm-join-info-room-code-container qm-join-info-spacing-top",
                                                children: [
                                                  (0, fn.jsx)("div", {
                                                    className:
                                                      "qm-join-info-room-code qm-join-info-highlight",
                                                    children:
                                                      this.props.game
                                                        .hostingRoom.roomCode,
                                                  }),
                                                  (0, fn.jsx)("div", {
                                                    className:
                                                      "qm-join-info-filler",
                                                  }),
                                                ],
                                              }),
                                              (0, fn.jsx)("div", {
                                                className:
                                                  "qm-join-info-filler",
                                              }),
                                              (0, fn.jsxs)("div", {
                                                className:
                                                  "qm-join-info-space-above",
                                                children: [
                                                  "Players: ",
                                                  this.props.connectedUsers,
                                                ],
                                              }),
                                              (0, fn.jsx)("div", {
                                                className:
                                                  "qm-join-info-spacing-top",
                                                children: (0, fn.jsx)(ha, {
                                                  icon: Rl,
                                                  variant: "warning",
                                                  label: "Start the quiz",
                                                  labelStyle: {
                                                    fontSize: "1.2em",
                                                  },
                                                  onClick:
                                                    this.props.onStartQuiz,
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, fn.jsx)("div", {
                                            className: "qm-join-info-qr-code",
                                            children: (0, fn.jsx)(jl, {
                                              value: this.getUrlWithRoomCode,
                                              size: 1080,
                                              renderas: "svg",
                                              includeMargin: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, fn.jsx)(jn, { sm: 0, md: 0, lg: 2 }),
                              ],
                            }),
                          }),
                        }),
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        _l = Tl,
        Pl = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).isLastQuestion = function () {
                return r.state.questionIndex + 1 === r.lastIndexNumber();
              }),
              (r.lastIndexNumber = function () {
                return 0 === r.props.game.hostingRoom.questionLimit
                  ? r.state.questions.length
                  : Math.min(
                      r.props.game.hostingRoom.questionLimit,
                      r.state.questions.length
                    );
              }),
              (r.changeTab = function (e) {
                switch (e) {
                  case 1:
                    r.setState({ questionTab: 1, revealAnswer: !0 });
                    break;
                  case 2:
                    r.setState({
                      questionTab: 2,
                      answerStats: null,
                      revealStats: !0,
                    });
                    break;
                  case 3:
                    r.setState({ questionTab: 3, generalRanking: null });
                    break;
                  case 4:
                    r.setState({ questionTab: 4, generalRanking: null });
                    break;
                  default:
                    r.setState({ questionTab: 0 });
                }
              }),
              (r.state = {
                connectedUsers: 0,
                answerCount: 0,
                questions: [],
                questionIndex: -1,
                questionIsOpen: !0,
                questionTab: 0,
                answerStats: null,
                generalRanking: null,
                revealAnswer: !1,
                revealStats: !1,
              }),
              (r.onReceiveQuestions = r.onReceiveQuestions.bind(se(r))),
              (r.onStartQuiz = r.onStartQuiz.bind(se(r))),
              (r.nextButton = r.nextButton.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.switchState(Es),
                    (this.socket = ds(Mt, { closeOnBeforeunload: !1 })),
                    this.socket.on("ROOM_CREATED", function (t) {
                      e.props.setHostingRoom(
                        an(
                          an({}, e.props.game.hostingRoom),
                          {},
                          { roomCode: t }
                        )
                      ),
                        e.props.switchState(Ns);
                    }),
                    this.socket.on("USER_COUNT_UPDATE", function (t) {
                      return e.setState({ connectedUsers: t });
                    }),
                    this.socket.on("ANSWER_COUNT_UPDATE", function (t) {
                      return e.setState({ answerCount: t });
                    }),
                    this.socket.on("ANSWER_STATS_RESPONSE", function (t) {
                      return e.setState({ answerStats: t });
                    }),
                    this.socket.on("GENERAL_RANKING_RESPONSE", function (t) {
                      return e.setState({ generalRanking: t });
                    }),
                    this.socket.on(zt, function (t) {
                      e.setState({ generalRanking: t }),
                        e.props.switchState(Rs);
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.socket.disconnect();
                },
              },
              {
                key: "onReceiveQuestions",
                value: function (e) {
                  this.setState({ questions: e });
                },
              },
              {
                key: "onStartQuiz",
                value: function () {
                  this.nextQuestion(-1);
                },
              },
              {
                key: "nextButton",
                value: function () {
                  this.state.questionIsOpen && 0 <= this.state.questionIndex
                    ? (this.setState({ questionIsOpen: !1 }),
                      this.socket.emit(
                        "CLOSE_QUESTION",
                        this.props.game.hostingRoom.roomCode,
                        this.state.questions[this.state.questionIndex]
                      ))
                    : this.nextQuestion(this.state.questionIndex + 1);
                },
              },
              {
                key: "nextQuestion",
                value: function (e) {
                  var t = this;
                  this.setState(
                    {
                      questionIndex: e,
                      questionIsOpen: !0,
                      answerCount: 0,
                      questionTab: 0,
                      revealAnswer: !1,
                      revealStats: !1,
                    },
                    function () {
                      t.props.switchState(js),
                        0 <= e &&
                          t.socket.emit(
                            "NEW_QUESTION",
                            t.props.game.hostingRoom.roomCode,
                            an({ index: e }, t.state.questions[e])
                          );
                    }
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  switch (this.props.game.state) {
                    case Es:
                      return (0, fn.jsx)(
                        Ps,
                        an(
                          an({}, this.props),
                          {},
                          {
                            socket: this.socket,
                            questionList: this.onReceiveQuestions,
                          }
                        )
                      );
                    case Cs:
                      return (0, fn.jsx)(ul, an({}, this.props));
                    case Ns:
                      return (0, fn.jsx)(
                        _l,
                        an(
                          an({}, this.props),
                          {},
                          {
                            socket: this.socket,
                            onStartQuiz: this.onStartQuiz,
                            connectedUsers: this.state.connectedUsers,
                          }
                        )
                      );
                    case js:
                      return (0, fn.jsx)(
                        sl,
                        an(
                          an({}, this.props),
                          {},
                          {
                            socket: this.socket,
                            answerCount: this.state.answerCount,
                            questionIndex: this.state.questionIndex,
                            connectedUsers: this.state.connectedUsers,
                            isLastQuestion: this.isLastQuestion(),
                            lastIndexNumber: this.lastIndexNumber(),
                            question:
                              this.state.questions[this.state.questionIndex],
                            questionIsOpen: this.state.questionIsOpen,
                            questionTab: this.state.questionTab,
                            changeTab: this.changeTab,
                            nextButton: this.nextButton,
                            answerStats: this.state.answerStats,
                            revealAnswer: this.state.revealAnswer,
                            revealStats: this.state.revealStats,
                            generalRanking: this.state.generalRanking,
                          }
                        )
                      );
                    case Rs:
                      return (0, fn.jsx)(
                        Bs,
                        an(
                          an({}, this.props),
                          {},
                          { generalRanking: this.state.generalRanking }
                        )
                      );
                    default:
                      return (0, fn.jsx)("span", { children: "NOT FOUND" });
                  }
                },
              },
            ]),
            n
          );
        })(l.Component),
        Ll = $(
          function (e) {
            return { game: e.game };
          },
          function (e) {
            return {
              switchState: function () {
                return e(ms.apply(void 0, arguments));
              },
              setHostingRoom: function () {
                return e(ys.apply(void 0, arguments));
              },
            };
          }
        )(Pl),
        Ml = "reconnect-room",
        Al = "reconnect-player";
      function Il() {
        localStorage.removeItem(Ml), localStorage.removeItem(Al);
      }
      var zl =
        n.p + "static/media/emoji_people.b275af98cb545a99141c4232b9dff4ae.svg";
      var Fl = n.p + "static/media/power.8f8ee6dc3702643bde61cee38be432cc.svg";
      var Bl =
        n.p +
        "static/media/present_to_all.457fe97dff8c537ae61e115b36b1ceeb.svg";
      var Dl = n.p + "static/media/logo.c946aa3b38684eed0fc99c599d3ff2e2.svg",
        ql = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = { roomCode: "", playerName: "" }),
              (r.userNameReference = (0, l.createRef)()),
              (r.roomCodeReference = (0, l.createRef)()),
              (r.onInputFieldKeyEvent = r.onInputFieldKeyEvent.bind(se(r))),
              (r.reconnect = r.reconnect.bind(se(r))),
              (r.onNameChanged = r.onNameChanged.bind(se(r))),
              (r.startGame = r.startGame.bind(se(r))),
              (r.changeRoomCode = r.changeRoomCode.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  Gt(),
                    this.props.switchState(""),
                    this.props.setPlayerConfig("", "", !1),
                    $t(this.props.roomCode)
                      ? this.setState(
                          { roomCode: "".concat(this.props.roomCode) },
                          function () {
                            return e.focusOnInput();
                          }
                        )
                      : this.focusOnInput();
                },
              },
              {
                key: "onNameChanged",
                value: function (e) {
                  this.setState({ playerName: e.target.value });
                },
              },
              {
                key: "focusOnInput",
                value: function () {
                  this.state.playerName
                    ? this.state.roomCode ||
                      this.roomCodeReference.current.focus()
                    : this.userNameReference.current.focus();
                },
              },
              {
                key: "onInputFieldKeyEvent",
                value: function (e) {
                  Xt(),
                    "Enter" === e.key &&
                      $t(this.state.roomCode) &&
                      this.state.playerName.trim() &&
                      this.startGame();
                },
              },
              {
                key: "changeRoomCode",
                value: function (e) {
                  this.setState({ roomCode: e.target.value });
                },
              },
              {
                key: "startGame",
                value: function () {
                  "" !== this.state.roomCode &&
                    (Xt(),
                    this.props.setPlayerConfig(
                      this.state.roomCode,
                      this.state.playerName,
                      !1
                    ),
                    this.props.navigate("/player"));
                },
              },
              {
                key: "reconnect",
                value: function () {
                  Xt(),
                    this.props.setPlayerConfig(
                      localStorage.getItem(Ml),
                      localStorage.getItem(Al),
                      !0
                    ),
                    this.props.navigate("/player");
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)(xa, {
                    showGitHubLink: !0,
                    children: (0, fn.jsx)(wn, {
                      fluid: !0,
                      children: (0, fn.jsx)(Sn, {
                        children: (0, fn.jsxs)(jn, {
                          xs: 12,
                          children: [
                            (0, fn.jsx)("img", {
                              src: Dl,
                              className: "main-logo-text equal-width",
                              alt: "Quiz mate",
                            }),
                            (0, fn.jsxs)("form", {
                              children: [
                                null !== window.localStorage.getItem(Ml) &&
                                  null !== window.localStorage.getItem(Al) &&
                                  (0, fn.jsxs)("div", {
                                    children: [
                                      (0, fn.jsx)("br", {}),
                                      (0, fn.jsx)(ha, {
                                        variant: "warning",
                                        buttonClassName:
                                          "reconnect-btn equal-width",
                                        buttonStyle: {
                                          width: "100%",
                                          maxWidth: "18rem",
                                        },
                                        icon: Fl,
                                        label: "Rejoin previous game",
                                        onClick: this.reconnect,
                                      }),
                                    ],
                                  }),
                                (0, fn.jsx)(kr.Control, {
                                  type: "text",
                                  value: this.state.playerName,
                                  onChange: this.onNameChanged,
                                  placeholder: "Name",
                                  ref: this.userNameReference,
                                  onKeyPress: this.onInputFieldKeyEvent,
                                  maxLength: "40",
                                  className: "main-input-field equal-width",
                                }),
                                (0, fn.jsx)(kr.Control, {
                                  type: "number",
                                  value: this.state.roomCode,
                                  onChange: this.changeRoomCode,
                                  ref: this.roomCodeReference,
                                  onKeyPress: this.onInputFieldKeyEvent,
                                  placeholder: "6-digit access code",
                                  className: "main-input-field equal-width",
                                }),
                                (0, fn.jsx)(ha, {
                                  disabled:
                                    !$t(this.state.roomCode) ||
                                    !this.state.playerName.trim(),
                                  icon: zl,
                                  variant: "warning",
                                  label: "Join",
                                  buttonClassName: "equal-width",
                                  buttonStyle: {
                                    width: "100%",
                                    maxWidth: "18rem",
                                  },
                                  onClick: this.startGame,
                                }),
                              ],
                            }),
                            (0, fn.jsx)(ws, {
                              className: "main-footer-btn",
                              children: (0, fn.jsx)(ha, {
                                link: "/host",
                                icon: Bl,
                                label: "Host a quiz",
                                buttonClassName:
                                  "qm-fixed-bottom qm-fixed-left",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        Ul = $(
          function (e) {
            return { game: e.game };
          },
          function (e) {
            return {
              switchState: function () {
                return e(ms.apply(void 0, arguments));
              },
              setPlayerConfig: function () {
                return e(vs.apply(void 0, arguments));
              },
            };
          }
        )(ql),
        Hl = function (e) {
          return (0, fn.jsx)(Ul, an(an({}, e), {}, { navigate: ct() }));
        },
        Vl = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)(
                    xa,
                    an(
                      an({ logo: !0, cancel: "Return to menu" }, this.props),
                      {},
                      {
                        children: (0, fn.jsxs)("div", {
                          className: "message-box",
                          children: [
                            (0, fn.jsx)("div", {
                              style: { fontSize: "4em" },
                              children: "404",
                            }),
                            "Page not found",
                          ],
                        }),
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        Wl = Vl,
        Ql = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (!this.props.stats) return (0, fn.jsx)("span", {});
                  var t = this.props.stats.slice();
                  t.sort(Vt);
                  var n = t.findIndex(function (t) {
                    return t.nickname === e.props.game.playerName;
                  });
                  if (0 <= n) {
                    var r = t[n].points,
                      o = n + 1,
                      a = Ht(t[n].duration, r);
                    return (0, fn.jsxs)(
                      xa,
                      an(
                        an({ logo: !0, cancel: "Return to menu" }, this.props),
                        {},
                        {
                          children: [
                            (0, fn.jsx)("img", {
                              src: Xs,
                              className: "material-ui-icon",
                              style: { fontSize: "4em" },
                              alt: "Quiz completed",
                            }),
                            (0, fn.jsxs)("div", {
                              className: "message-box",
                              children: [
                                (0, fn.jsx)("p", {
                                  children: "Quiz completed! Your place:",
                                }),
                                (0, fn.jsx)("p", {
                                  style: {
                                    fontSize: "3.5em",
                                    fontWeight: "bold",
                                  },
                                  children: o,
                                }),
                                (0, fn.jsxs)("p", {
                                  children: [
                                    (0, fn.jsxs)("span", {
                                      style: { paddingRight: "1em" },
                                      children: ["Points: ", r],
                                    }),
                                    (0, fn.jsx)("span", { children: "|" }),
                                    (0, fn.jsxs)("span", {
                                      style: {
                                        paddingLeft: "1em",
                                        paddingRight: "1em",
                                      },
                                      children: ["Speed: ", a],
                                    }),
                                    (0, fn.jsx)("span", { children: "|" }),
                                    (0, fn.jsxs)("span", {
                                      style: { paddingLeft: "1em" },
                                      children: [
                                        "Players: ",
                                        this.props.stats.length,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }
                      )
                    );
                  }
                  return (0, fn.jsx)("span", {});
                },
              },
            ]),
            n
          );
        })(l.Component),
        $l = Ql,
        Kl = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)(
                    xa,
                    an(
                      an({ cancel: "Cancel" }, this.props),
                      {},
                      {
                        children: (0, fn.jsx)("div", {
                          className: "message-box",
                          children: "Connecting with the room...",
                        }),
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        Yl = Kl;
      var Gl =
          n.p + "static/media/warning.9fcdc101f630d1fd1e97f54ec1d9213a.svg",
        Xl = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  return (0, fn.jsxs)(
                    xa,
                    an(
                      an({ logo: !0, cancel: "Return to menu" }, this.props),
                      {},
                      {
                        children: [
                          (0, fn.jsx)("img", {
                            src: Gl,
                            className: "material-ui-icon",
                            style: { fontSize: "4.5em" },
                            alt: "Add",
                          }),
                          (0, fn.jsxs)("div", {
                            className: "message-box",
                            children: [
                              'Name "',
                              this.props.game.playerName,
                              '" is already taken - choose another!',
                            ],
                          }),
                        ],
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        Jl = Xl,
        Zl = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "renderTime",
                value: function () {
                  var e = 0 < this.props.seconds && this.props.seconds <= 10;
                  return (0, fn.jsx)("div", {
                    className: e ? "timer-normal" : "timer-warning",
                    children: qt(Math.max(this.props.seconds, 0), !1),
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)("div", {
                    className: "timer-container-remote",
                    children: this.renderTime(),
                  });
                },
              },
            ]),
            n
          );
        })(l.Component),
        eu = Zl,
        tu = "LOADING_ROOM",
        nu = "NICKNAME_IS_TAKEN",
        ru = "ROOM_NOT_FOUND",
        ou = "WAITING",
        au = "QUESTION",
        iu = "FINAL",
        su = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            var e;
            J(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(o))).QuestionGrid =
                function () {
                  return (0, fn.jsx)("div", {
                    children: (0, fn.jsxs)(Sn, {
                      children: [
                        (0, fn.jsx)(jn, {
                          xs: 12,
                          children: (0, fn.jsx)("div", {
                            className: "player-question",
                            children: e.props.question.question,
                          }),
                        }),
                        e.props.question.answers.map(function (t, n) {
                          return e.answer(t, n);
                        }),
                      ],
                    }),
                  });
                }),
              (e.selectAnswer = function (t) {
                e.props.question &&
                  (e.props.selected(t),
                  e.props.socket.emit(
                    Ft,
                    e.props.game.roomCode,
                    e.props.game.playerName,
                    e.props.question.index,
                    t
                  ),
                  e.props.switchState(ou));
              }),
              e
            );
          }
          return (
            ne(n, [
              {
                key: "answer",
                value: function (e, t) {
                  var n = this;
                  return (0, fn.jsx)(
                    jn,
                    {
                      md: 6,
                      sm: 12,
                      children: (0, fn.jsxs)("div", {
                        className: "player-answer",
                        onClick: function () {
                          return n.selectAnswer(t);
                        },
                        children: [
                          (0, fn.jsx)("div", {
                            className: "player-answer-letter",
                            children: Qt(t),
                          }),
                          e,
                        ],
                      }),
                    },
                    t
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, fn.jsx)(
                    xa,
                    an(
                      an({ logo: !0, cancel: "Exit" }, this.props),
                      {},
                      {
                        children: (0, fn.jsxs)("div", {
                          className: "message-box",
                          children: [
                            this.props.game.hostingRoom.timeLimit > 0 &&
                              (0, fn.jsx)(eu, { seconds: this.props.timer }),
                            (0, fn.jsx)("br", {}),
                            (0, fn.jsx)(wn, {
                              fluid: !0,
                              children:
                                !!this.props.question && this.QuestionGrid(),
                            }),
                          ],
                        }),
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        lu = su,
        uu = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  return (0, fn.jsxs)(
                    xa,
                    an(
                      an({ logo: !0, cancel: "Return to menu" }, this.props),
                      {},
                      {
                        children: [
                          (0, fn.jsx)("img", {
                            src: Gl,
                            className: "material-ui-icon",
                            style: { fontSize: "4.5em" },
                            alt: "Add",
                          }),
                          (0, fn.jsxs)("div", {
                            className: "message-box",
                            children: [
                              "Room with code ",
                              this.props.game.roomCode,
                              " was not found!",
                            ],
                          }),
                        ],
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        cu = uu;
      var du =
        n.p +
        "static/media/check_circle_outline.b89a6a957d71de8049af3421f41d962a.svg";
      var fu =
        n.p +
        "static/media/insert_emoticon.0e9174e81fa7cd2d709155b24ec9ebd9.svg";
      var pu =
        n.p +
        "static/media/pause_circle_outline.7dc9fc129e4fcda213f2e39166cded79.svg";
      var hu =
          n.p +
          "static/media/sentiment_very_dissatisfied.10cb5580ab48b679e2719644c33a48fc.svg",
        mu = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n() {
            return J(this, n), t.apply(this, arguments);
          }
          return (
            ne(n, [
              {
                key: "render",
                value: function () {
                  if (null != this.props.selectedAnswer)
                    return null != this.props.correctAnswer
                      ? this.props.selectedAnswer === this.props.correctAnswer
                        ? (0, fn.jsxs)(
                            xa,
                            an(
                              an({ logo: !0, cancel: "Exit" }, this.props),
                              {},
                              {
                                children: [
                                  (0, fn.jsx)("img", {
                                    src: fu,
                                    className: "material-ui-icon",
                                    style: { fontSize: "4.0em" },
                                    alt: "Correct answer",
                                  }),
                                  (0, fn.jsxs)("div", {
                                    className: "message-box",
                                    children: [
                                      (0, fn.jsx)("p", {
                                        children: "You are right.",
                                      }),
                                      (0, fn.jsx)("p", {
                                        children: "Congratulations!",
                                      }),
                                    ],
                                  }),
                                ],
                              }
                            )
                          )
                        : (0, fn.jsxs)(
                            xa,
                            an(
                              an({ logo: !0, cancel: "Exit" }, this.props),
                              {},
                              {
                                children: [
                                  (0, fn.jsx)("img", {
                                    src: hu,
                                    className: "material-ui-icon",
                                    style: { fontSize: "4.0em" },
                                    alt: "Wrong answer",
                                  }),
                                  (0, fn.jsxs)("div", {
                                    className: "message-box",
                                    children: [
                                      (0, fn.jsx)("p", {
                                        children: "No points this time around.",
                                      }),
                                      (0, fn.jsx)("p", {
                                        children: "The right answer is:",
                                      }),
                                      (0, fn.jsx)("p", {
                                        children:
                                          this.props.question.answers[
                                            this.props.question.correct
                                          ],
                                      }),
                                    ],
                                  }),
                                ],
                              }
                            )
                          )
                      : (0, fn.jsxs)(
                          xa,
                          an(
                            an({ logo: !0, cancel: "Exit" }, this.props),
                            {},
                            {
                              children: [
                                (0, fn.jsx)("img", {
                                  src: pu,
                                  className: "material-ui-icon",
                                  style: { fontSize: "4.0em" },
                                  alt: "Waiting",
                                }),
                                (0, fn.jsxs)("div", {
                                  className: "message-box",
                                  children: [
                                    (0, fn.jsx)("p", {
                                      children: "You have selected",
                                    }),
                                    (0, fn.jsxs)("p", {
                                      children: [
                                        '"',
                                        this.props.question.answers[
                                          this.props.selectedAnswer
                                        ],
                                        '"',
                                      ],
                                    }),
                                    (0, fn.jsx)("br", {}),
                                    (0, fn.jsxs)("p", {
                                      children: [
                                        "Waiting for the host to",
                                        (0, fn.jsx)("br", {}),
                                        "reveal the right answer...",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }
                          )
                        );
                  var e = this.props.game.hostingRoom.title
                    ? (0, fn.jsxs)("div", {
                        children: [
                          (0, fn.jsx)("p", { children: "You have joined" }),
                          (0, fn.jsxs)("p", {
                            children: [
                              '"',
                              this.props.game.hostingRoom.title.trim(),
                              '"',
                            ],
                          }),
                        ],
                      })
                    : (0, fn.jsx)("p", {
                        children: "You have joined the quiz.",
                      });
                  return (0, fn.jsxs)(
                    xa,
                    an(
                      an({ logo: !0, cancel: "Exit" }, this.props),
                      {},
                      {
                        children: [
                          (0, fn.jsx)("img", {
                            src: du,
                            className: "material-ui-icon",
                            style: { fontSize: "4.0em" },
                            alt: "Waiting",
                          }),
                          (0, fn.jsxs)("div", {
                            className: "message-box",
                            children: [
                              e,
                              (0, fn.jsx)("p", {
                                children: "Waiting for the next question...",
                              }),
                            ],
                          }),
                        ],
                      }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        vu = mu,
        yu = (function (e) {
          oe(n, e);
          var t = ue(n);
          function n(e) {
            var r;
            return (
              J(this, n),
              ((r = t.call(this, e)).state = {
                question: null,
                selectedAnswer: null,
                correctAnswer: null,
                timerValue: 0,
              }),
              (r.selected = r.selected.bind(se(r))),
              r
            );
          }
          return (
            ne(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.switchState(tu),
                    this.props.game.roomCode && this.props.game.playerName
                      ? ((this.socket = ds(Mt, { closeOnBeforeunload: !1 })),
                        this.socket.on("connect", function () {
                          return e.socket.emit(
                            "ADD_TO_ROOM",
                            e.props.game.roomCode,
                            e.props.game.playerName,
                            e.props.game.reconnectMode
                          );
                        }),
                        this.socket.on("NICKNAME_IS_TAKEN", function () {
                          e.props.switchState(nu), Il();
                        }),
                        this.socket.on("ROOM_NOT_FOUND", function () {
                          e.props.switchState(ru), Il();
                        }),
                        this.socket.on("JOINED_TO_ROOM", function (t) {
                          var n;
                          (n = t.title),
                            (document.title = n || "MaverickQuizHub"),
                            (Kt =
                              "Are you sure you want to exit the the quiz?"),
                            e.props.setHostingRoom(t),
                            e.props.switchState(ou),
                            (function (e, t) {
                              localStorage.setItem(Ml, e),
                                localStorage.setItem(Al, t);
                            })(e.props.game.roomCode, e.props.game.playerName);
                        }),
                        this.socket.on("ANSWERS_OPEN", function (t) {
                          e.setState({
                            question: t,
                            selectedAnswer: null,
                            correctAnswer: null,
                            timerValue: e.props.game.hostingRoom.timeLimit,
                          }),
                            e.props.switchState(au);
                        }),
                        this.socket.on("ANSWERS_CLOSE", function (t) {
                          e.setState({ question: t, correctAnswer: t.correct }),
                            e.props.switchState(ou);
                        }),
                        this.socket.on(Bt, function (t) {
                          return e.setState({ timerValue: t });
                        }),
                        this.socket.on(zt, function (t) {
                          e.setState({ stats: t }),
                            e.props.switchState(iu),
                            Il();
                        }))
                      : this.props.navigate("/");
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.socket && this.socket.disconnect();
                },
              },
              {
                key: "selected",
                value: function (e) {
                  this.setState({ selectedAnswer: e });
                },
              },
              {
                key: "render",
                value: function () {
                  switch (this.props.game.state) {
                    case tu:
                      return (0, fn.jsx)(Yl, an({}, this.props));
                    case nu:
                      return (0, fn.jsx)(Jl, an({}, this.props));
                    case ru:
                      return (0, fn.jsx)(cu, an({}, this.props));
                    case ou:
                      return (0, fn.jsx)(
                        vu,
                        an(
                          an({}, this.props),
                          {},
                          {
                            question: this.state.question,
                            selectedAnswer: this.state.selectedAnswer,
                            correctAnswer: this.state.correctAnswer,
                          }
                        )
                      );
                    case au:
                      return (0, fn.jsx)(
                        lu,
                        an(
                          an({}, this.props),
                          {},
                          {
                            socket: this.socket,
                            question: this.state.question,
                            selected: this.selected,
                            timer: this.state.timerValue,
                          }
                        )
                      );
                    case iu:
                      return (0, fn.jsx)(
                        $l,
                        an(an({}, this.props), {}, { stats: this.state.stats })
                      );
                    default:
                      return (0, fn.jsx)("span", { children: "NOT FOUND" });
                  }
                },
              },
            ]),
            n
          );
        })(l.Component),
        gu = $(
          function (e) {
            return { game: e.game };
          },
          function (e) {
            return {
              switchState: function () {
                return e(ms.apply(void 0, arguments));
              },
              setHostingRoom: function () {
                return e(ys.apply(void 0, arguments));
              },
            };
          }
        )(yu),
        bu = function (e) {
          return (0, fn.jsx)(gu, an(an({}, e), {}, { navigate: ct() }));
        };
      Gt();
      var wu = function () {
        var e = (function () {
          var e = l.useContext(it).matches,
            t = e[e.length - 1];
          return t ? t.params : {};
        })();
        return (
          console.log(e),
          /^\d+$/.test(e.roomCode) && "404" !== e.roomCode
            ? (0, fn.jsx)(Hl, {
                location: window.location,
                roomCode: e.roomCode,
              })
            : (0, fn.jsx)(xt, { replace: !0, to: "/404" })
        );
      };
      var xu = function () {
        return (
          (function () {
            var e = (window.location.hash || "")
              .trim()
              .replace(/^#/, "")
              .trim();
            e && !e.startsWith("/") && (window.location.hash = "/".concat(e));
          })(),
          (0, fn.jsx)(Tt, {
            children: (0, fn.jsx)(l.Suspense, {
              fallback: (0, fn.jsx)("div", { children: "Loading..." }),
              children: (0, fn.jsxs)(Et, {
                children: [
                  (0, fn.jsx)(kt, {
                    exact: !0,
                    path: "/",
                    name: "Main",
                    element: (0, fn.jsx)(Hl, { location: window.location }),
                  }),
                  (0, fn.jsx)(kt, {
                    exact: !0,
                    path: "/host",
                    name: "Host mode",
                    element: (0, fn.jsx)(Ll, {}),
                  }),
                  (0, fn.jsx)(kt, {
                    exact: !0,
                    path: "/editor",
                    name: "Question editor",
                    element: (0, fn.jsx)(Ka, {}),
                  }),
                  (0, fn.jsx)(kt, {
                    exact: !0,
                    path: "/player",
                    name: "Player mode",
                    element: (0, fn.jsx)(bu, {}),
                  }),
                  (0, fn.jsx)(kt, {
                    exact: !0,
                    path: "/404",
                    name: "Page not found",
                    element: (0, fn.jsx)(Wl, {}),
                  }),
                  (0, fn.jsx)(kt, {
                    path: "/:roomCode",
                    name: "Main (pre-populated)",
                    element: (0, fn.jsx)(wu, {}),
                  }),
                  (0, fn.jsx)(kt, {
                    path: "*",
                    element: (0, fn.jsx)(xt, { replace: !0, to: "/404" }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/
          )
      );
      function ku(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var Su =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable",
        Eu = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        Cu = {
          INIT: "@@redux/INIT" + Eu(),
          REPLACE: "@@redux/REPLACE" + Eu(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Eu();
          },
        };
      function Nu(e) {
        if ("object" !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function ju(e, t, n) {
        var r;
        if (
          ("function" === typeof t && "function" === typeof n) ||
          ("function" === typeof n && "function" === typeof arguments[3])
        )
          throw new Error(ku(0));
        if (
          ("function" === typeof t &&
            "undefined" === typeof n &&
            ((n = t), (t = void 0)),
          "undefined" !== typeof n)
        ) {
          if ("function" !== typeof n) throw new Error(ku(1));
          return n(ju)(e, t);
        }
        if ("function" !== typeof e) throw new Error(ku(2));
        var o = e,
          a = t,
          i = [],
          s = i,
          l = !1;
        function u() {
          s === i && (s = i.slice());
        }
        function c() {
          if (l) throw new Error(ku(3));
          return a;
        }
        function d(e) {
          if ("function" !== typeof e) throw new Error(ku(4));
          if (l) throw new Error(ku(5));
          var t = !0;
          return (
            u(),
            s.push(e),
            function () {
              if (t) {
                if (l) throw new Error(ku(6));
                (t = !1), u();
                var n = s.indexOf(e);
                s.splice(n, 1), (i = null);
              }
            }
          );
        }
        function f(e) {
          if (!Nu(e)) throw new Error(ku(7));
          if ("undefined" === typeof e.type) throw new Error(ku(8));
          if (l) throw new Error(ku(9));
          try {
            (l = !0), (a = o(a, e));
          } finally {
            l = !1;
          }
          for (var t = (i = s), n = 0; n < t.length; n++) {
            (0, t[n])();
          }
          return e;
        }
        function p(e) {
          if ("function" !== typeof e) throw new Error(ku(10));
          (o = e), f({ type: Cu.REPLACE });
        }
        function h() {
          var e,
            t = d;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" !== typeof e || null === e)
                  throw new Error(ku(11));
                function n() {
                  e.next && e.next(c());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[Su] = function () {
              return this;
            }),
            e
          );
        }
        return (
          f({ type: Cu.INIT }),
          ((r = { dispatch: f, subscribe: d, getState: c, replaceReducer: p })[
            Su
          ] = h),
          r
        );
      }
      function Ru() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function Ou(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (o) {
              return "function" === typeof o ? o(n, r, e) : t(o);
            };
          };
        };
      }
      var Tu = Ou();
      Tu.withExtraArgument = Ou;
      var _u = Tu,
        Pu = {
          state: "",
          roomCode: null,
          playerName: null,
          reconnectMode: !1,
          hostingRoom: null,
        };
      var Lu = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Pu,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case fs:
              return an(an({}, e), {}, { state: t.state });
            case ps:
              return an(
                an({}, e),
                {},
                {
                  roomCode: t.roomCode,
                  playerName: t.playerName,
                  reconnectMode: t.reconnectMode,
                }
              );
            case hs:
              return an(an({}, e), {}, { hostingRoom: t.data });
            default:
              return e;
          }
        },
        Mu = (function (e) {
          for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            0, "function" === typeof e[o] && (n[o] = e[o]);
          }
          var a,
            i = Object.keys(n);
          try {
            !(function (e) {
              Object.keys(e).forEach(function (t) {
                var n = e[t];
                if ("undefined" === typeof n(void 0, { type: Cu.INIT }))
                  throw new Error(ku(12));
                if (
                  "undefined" ===
                  typeof n(void 0, { type: Cu.PROBE_UNKNOWN_ACTION() })
                )
                  throw new Error(ku(13));
              });
            })(n);
          } catch (zu) {
            a = zu;
          }
          return function (e, t) {
            if ((void 0 === e && (e = {}), a)) throw a;
            for (var r = !1, o = {}, s = 0; s < i.length; s++) {
              var l = i[s],
                u = n[l],
                c = e[l],
                d = u(c, t);
              if ("undefined" === typeof d) {
                t && t.type;
                throw new Error(ku(14));
              }
              (o[l] = d), (r = r || d !== c);
            }
            return (r = r || i.length !== Object.keys(e).length) ? o : e;
          };
        })({ game: Lu }),
        Au = ju(
          Mu,
          {},
          (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Ru)(
            (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return function (e) {
                return function () {
                  var n = e.apply(void 0, arguments),
                    r = function () {
                      throw new Error(ku(15));
                    },
                    o = {
                      getState: n.getState,
                      dispatch: function () {
                        return r.apply(void 0, arguments);
                      },
                    },
                    a = t.map(function (e) {
                      return e(o);
                    });
                  return (
                    (r = Ru.apply(void 0, a)(n.dispatch)),
                    an(an({}, n), {}, { dispatch: r })
                  );
                };
              };
            })(_u)
          )
        ),
        Iu = Au;
      (0, t.s)(document.getElementById("root")).render(
        (0, fn.jsx)(K, { store: Iu, children: (0, fn.jsx)(xu, {}) })
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              return e.unregister();
            })
            .catch(function (e) {
              return console.error(e.message);
            });
    })();
})();
