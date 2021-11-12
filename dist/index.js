(() => {
  "use strict";
  var e = {
      28: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          l = n.n(a)()(o());
        l.push([
          e.id,
          "body {\n  overflow: hidden;\n}\n.__react_image_modal {\n  position: fixed;\n  z-index: 5000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  touch-action: none;\n  overflow: hidden;\n}\n.__react_image_content__ {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.__react_image_content__ img,\n.__react_image_content__ svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  -ms-transform: translate3d(-50%, -50%, 0);\n  overflow: hidden;\n}\n.__react_image_medium {\n  max-width: 98%;\n  max-height: 98%;\n}\n.__react_image_header__ {\n  position: fixed;\n  z-index: 60000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n}\n.__react_header_flex {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.__react_header_flex span {\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  margin-right: 18px;\n}\n",
          "",
        ]);
        const i = l;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var l = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (l[c] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var u = [].concat(e[s]);
                (r && l[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, l = [], i = 0; i < e.length; i++) {
            var c = e[i],
              s = r.base ? c[0] + r.base : c[0],
              u = a[s] || 0,
              f = "".concat(s, " ").concat(u);
            a[s] = u + 1;
            var d = n(f),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(m);
            else {
              var h = o(m, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: f, updater: h, references: 1 });
            }
            l.push(f);
          }
          return l;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var l = 0; l < a.length; l++) {
              var i = n(a[l]);
              t[i].references--;
            }
            for (var c = r(e, o), s = 0; s < a.length; s++) {
              var u = n(a[s]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var r = {};
  (() => {
    n.r(r), n.d(r, { default: () => k });
    const e = require("react");
    var t = n.n(e),
      o = function () {
        return t().createElement(
          "svg",
          {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
          t().createElement("path", {
            d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
          })
        );
      },
      a = function () {
        return t().createElement(
          "svg",
          {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
          t().createElement("path", {
            d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",
          })
        );
      },
      l = function () {
        return t().createElement(
          "svg",
          {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t().createElement("path", {
            d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
          }),
          t().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
        );
      },
      i = function () {
        return t().createElement(
          "svg",
          {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t().createElement("path", {
            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          }),
          t().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
        );
      },
      c = function () {
        return t().createElement(
          "svg",
          {
            fill: "#ffffff",
            height: "48",
            viewBox: "0 0 24 24",
            width: "48",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t().createElement("path", {
            d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z",
          }),
          t().createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" })
        );
      },
      s = function () {
        return t().createElement(
          "svg",
          {
            fill: "#ffffff",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
          },
          t().createElement("path", {
            fill: "none",
            d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
          }),
          t().createElement("path", {
            d: "M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z",
          })
        );
      };
    const u = function (e) {
      var n = e.src,
        r = e.zoom,
        c = e.onCloseModal,
        u = e.toggleRotate,
        f = e.toggleZoom,
        d = e.showRotation,
        m = e.showDownload,
        h = e.showZoom;
      return t().createElement(
        "div",
        { className: "__react_image_header__" },
        t().createElement(
          "div",
          { className: "__react_header_flex" },
          m &&
            t().createElement(
              "span",
              null,
              t().createElement(
                "a",
                { href: n, download: !0, target: "_blank" },
                t().createElement(l, null)
              )
            ),
          h &&
            t().createElement(
              "span",
              { onClick: f },
              r ? t().createElement(a, null) : t().createElement(o, null)
            ),
          d &&
            t().createElement(
              "span",
              { onClick: u },
              t().createElement(s, null)
            ),
          t().createElement("span", { onClick: c }, t().createElement(i, null))
        )
      );
    };
    function f(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    const d = function (n) {
      var r,
        o,
        a = n.id,
        l = n.src,
        i = n.style,
        s = n.className,
        u = n.handleDoubleClick,
        d =
          ((r = (0, e.useState)(!0)),
          (o = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(r) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  a = [],
                  l = !0,
                  i = !1;
                try {
                  for (
                    n = n.call(e);
                    !(l = (r = n.next()).done) &&
                    (a.push(r.value), !t || a.length !== t);
                    l = !0
                  );
                } catch (e) {
                  (i = !0), (o = e);
                } finally {
                  try {
                    l || null == n.return || n.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return a;
              }
            })(r, o) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? f(e, t)
                    : void 0
                );
              }
            })(r, o) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        m = d[0],
        h = d[1];
      return t().createElement(
        "div",
        null,
        m && t().createElement(c, null),
        t().createElement("img", {
          id: a,
          className: s,
          src: l,
          style: i,
          onLoad: function () {
            h(!1);
          },
          onDoubleClick: u,
        })
      );
    };
    function m(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              o,
              a = [],
              l = !0,
              i = !1;
            try {
              for (
                n = n.call(e);
                !(l = (r = n.next()).done) &&
                (a.push(r.value), !t || a.length !== t);
                l = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                l || null == n.return || n.return();
              } finally {
                if (i) throw o;
              }
            }
            return a;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? h(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function h(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    const v = function (n) {
      var r = n.onCloseModal,
        o = n.src,
        a = n.showRotation,
        l = n.showDownload,
        i = n.showZoom,
        c = m((0, e.useState)(0), 2),
        s = c[0],
        f = c[1],
        h = m((0, e.useState)(!1), 2),
        v = h[0],
        p = h[1],
        g = m((0, e.useState)({ x: 0, y: 0 }), 2),
        y = g[0],
        w = g[1],
        _ = m((0, e.useState)(void 0), 2),
        x = _[0],
        b = _[1],
        E = (0, e.useRef)(null),
        M = function (e) {
          e.preventDefault(), p(!v), w({ x: 0, y: 0 });
        },
        S = function (e) {
          var t = e.changedTouches ? e.changedTouches[0] : e;
          if ("react-modal-image-img" === t.target.id) {
            var n = E.current.getBoundingClientRect();
            return { x: t.clientX - n.left, y: t.clientY - n.top };
          }
        },
        z = function (e) {
          if ((e.preventDefault(), !(e.touches && e.touches.length > 1))) {
            var t = S(e);
            t || r(), v && b({ x: t.x - y.x, y: t.y - y.y });
          }
        },
        C = function (e) {
          b(void 0);
        },
        H = function (e) {
          if (
            (e.preventDefault(), v && x && !(e.touches && e.touches.length > 1))
          ) {
            var t = S(e);
            t && w({ x: t.x - x.x, y: t.y - x.y });
          }
        };
      return t().createElement(
        "div",
        null,
        t().createElement(u, {
          onCloseModal: r,
          toggleRotate: function (e) {
            e.preventDefault(), f(360 !== s ? s + 90 : 90);
          },
          toggleZoom: M,
          src: o,
          zoom: v,
          showRotation: a,
          showDownload: l,
          showZoom: i,
        }),
        t().createElement(
          "div",
          { className: "__react_image_modal" },
          t().createElement(
            "div",
            {
              className: "__react_image_content__",
              ref: E,
              onMouseDown: z,
              onTouchStart: z,
              onMouseUp: C,
              onTouchEnd: C,
              onMouseMove: H,
              onTouchMove: H,
            },
            !v &&
              t().createElement(d, {
                id: "react-modal-image-img",
                className: "__react_image_medium",
                style: {
                  transform: "translate3d(-50%, -50%, 0) rotate(".concat(
                    s,
                    "deg)"
                  ),
                  WebkitTransform: "translate3d(-50%, -50%, 0) rotate(".concat(
                    s,
                    "deg)"
                  ),
                  MsTransform: "translate3d(-50%, -50%, 0) rotate(".concat(
                    s,
                    "deg)"
                  ),
                },
                src: o,
                handleDoubleClick: M,
              }),
            v &&
              t().createElement(d, {
                id: "react-modal-image-img",
                className: "__react_image_large",
                style: {
                  transform: "translate3d(-50%, -50%, 0) translate3d("
                    .concat(y.x, "px, ")
                    .concat(y.y, "px, 0) rotate(")
                    .concat(s, "deg)"),
                  WebkitTransform: "translate3d(-50%, -50%, 0) translate3d("
                    .concat(y.x, "px, ")
                    .concat(y.y, "px, 0) rotate(")
                    .concat(s, "deg)"),
                  MsTransform: "translate3d(-50%, -50%, 0) translate3d("
                    .concat(y.x, "px, ")
                    .concat(y.y, "px, 0) rotate(")
                    .concat(s, "deg)"),
                },
                src: o,
                handleDoubleClick: M,
              })
          )
        )
      );
    };
    var p = n(379),
      g = n.n(p),
      y = n(795),
      w = n.n(y),
      _ = n(569),
      x = n.n(_),
      b = n(565),
      E = n.n(b),
      M = n(216),
      S = n.n(M),
      z = n(589),
      C = n.n(z),
      H = n(28),
      A = {};
    function T(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    (A.styleTagTransform = C()),
      (A.setAttributes = E()),
      (A.insert = x().bind(null, "head")),
      (A.domAPI = w()),
      (A.insertStyleElement = S()),
      g()(H.Z, A),
      H.Z && H.Z.locals && H.Z.locals;
    const k = function (n) {
      var r,
        o,
        a = n.className,
        l = n.src,
        i = n.srcSet,
        c = n.alt,
        s = n.showRotation,
        u = void 0 === s || s,
        f = n.showDownload,
        d = void 0 !== f && f,
        m = n.showZoom,
        h = void 0 === m || m,
        p =
          ((r = (0, e.useState)(!1)),
          (o = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(r) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  a = [],
                  l = !0,
                  i = !1;
                try {
                  for (
                    n = n.call(e);
                    !(l = (r = n.next()).done) &&
                    (a.push(r.value), !t || a.length !== t);
                    l = !0
                  );
                } catch (e) {
                  (i = !0), (o = e);
                } finally {
                  try {
                    l || null == n.return || n.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return a;
              }
            })(r, o) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? T(e, t)
                    : void 0
                );
              }
            })(r, o) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        g = p[0],
        y = p[1],
        w = function (e) {
          (27 !== e.keyCode && 13 !== e.keyCode) || y(!1);
        };
      return (
        (0, e.useEffect)(function () {
          if (document)
            return (
              document.addEventListener("keydown", w, !1),
              function () {
                document.removeEventListener("keydown", w, !1);
              }
            );
        }, []),
        t().createElement(
          "div",
          null,
          t().createElement("img", {
            className: a,
            style: { cursor: "pointer", maxWidth: "100%", maxHeight: "100%" },
            src: l,
            srcSet: i,
            alt: c,
            onClick: function () {
              return y(!g);
            },
          }),
          g &&
            t().createElement(v, {
              onCloseModal: function () {
                y(!1);
              },
              src: l,
              srcSet: i,
              alt: c,
              showRotation: u,
              showDownload: d,
              showZoom: h,
            })
        )
      );
    };
  })(),
    (module.exports = r);
})();
