/*! For license information please see scripts.cf68638bfad1c6bc00fa.js.LICENSE.txt */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        h = c.hasOwnProperty,
        d = h.toString,
        f = d.call(Object),
        p = {};

    function g(e, t) {
        var n = (t = t || i).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }
    var m = "3.1.1",
        v = function (e, t) {
            return new v.fn.init(e, t)
        },
        y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b = /^-ms-/,
        x = /-([a-z])/g,
        w = function (e, t) {
            return t.toUpperCase()
        };

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = v.type(e);
        return "function" !== n && !v.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    v.fn = v.prototype = {
        jquery: m,
        constructor: v,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = v.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return v.each(this, e)
        },
        map: function (e) {
            return this.pushStack(v.map(this, (function (t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, v.extend = v.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || v.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (v.isPlainObject(i) || (r = v.isArray(i))) ? (r ? (r = !1, o = n && v.isArray(n) ? n : []) : o = n && v.isPlainObject(n) ? n : {}, a[t] = v.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, v.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === v.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = v.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && (n = h.call(t, "constructor") && t.constructor, "function" != typeof n || d.call(n) !== f))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            g(e)
        },
        camelCase: function (e) {
            return e.replace(b, "ms-").replace(x, w)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var n, i = 0;
            if (T(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(y, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var i, r, o = 0,
                s = [];
            if (T(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return a.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v.isFunction(e)) return i = o.call(arguments, 2), (r = function () {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || v.guid++, r
        },
        now: Date.now,
        support: p
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    }));
    var C = function (e) {
        var t, n, i, r, o, a, s, l, c, u, h, d, f, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            S = se(),
            _ = se(),
            A = se(),
            E = function (e, t) {
                return e === t && (h = !0), 0
            },
            D = {}.hasOwnProperty,
            k = [],
            N = k.pop,
            O = k.push,
            R = k.push,
            j = k.slice,
            I = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + P + "*(" + F + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + P + "*\\]",
            B = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            q = new RegExp(P + "+", "g"),
            H = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            W = new RegExp("^" + P + "*," + P + "*"),
            z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            V = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            U = new RegExp(B),
            $ = new RegExp("^" + F + "$"),
            X = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                d()
            },
            oe = be((function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            R.apply(k = j.call(w.childNodes), w.childNodes)
        } catch (ne) {
            R = {
                apply: k.length ? function (e, t) {
                    O.apply(e, j.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, r) {
            var o, s, c, u, h, p, v, y = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== f && d(t), t = t || f, g)) {
                if (11 !== T && (h = Y.exec(e)))
                    if (o = h[1]) {
                        if (9 === T) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (h[2]) return R.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return R.apply(i, t.getElementsByClassName(o)), i
                    } if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
                    if (1 !== T) y = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ie) : t.setAttribute("id", u = x), s = (p = a(e)).length; s--;) p[s] = "#" + u + " " + ye(p[s]);
                        v = p.join(","), y = K.test(e) && me(t.parentNode) || t
                    }
                    if (v) try {
                        return R.apply(i, y.querySelectorAll(v)), i
                    } catch (C) {} finally {
                        u === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(H, "$1"), t, i, r)
        }

        function se() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function le(e) {
            return e[x] = !0, e
        }

        function ce(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return le((function (t) {
                return t = +t, le((function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                }))
            }))
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, o = ae.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, d = ae.setDocument = function (e) {
                var t, r, a = e ? e.ownerDocument || e : w;
                return a !== f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, g = !o(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", re, !1) : r.attachEvent && r.attachEvent("onunload", re)), n.attributes = ce((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ce((function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = ce((function (e) {
                    return p.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(J, ee);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(J, ee);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (ce((function (e) {
                    p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                })), ce((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", B)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, E = t ? function (e, t) {
                    if (e === t) return h = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && b(w, e) ? -1 : t === f || t.ownerDocument === w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return h = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;
                    if (r === o) return he(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? he(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
                }, f) : f
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== f && d(e), t = t.replace(V, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {}
                return ae(t, f, null, [e]).length > 0
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) !== f && d(e), b(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) !== f && d(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(te, ie)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (h = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(E), h) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = ae.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(J, ee).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && S(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (e, t, n) {
                        return function (i) {
                            var r = ae.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, h, d, f, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (f = (c = (u = (h = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            u[e] = [T, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (u = (h = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b)
                                    for (;
                                        (d = ++f && d && d[g] || (b = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [T, b]), d !== t)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function (e, n) {
                            for (var i, o = r(e, t), a = o.length; a--;) e[i = I(e, o[a])] = !(n[i] = o[a])
                        })) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: le((function (e) {
                        var t = [],
                            n = [],
                            i = s(e.replace(H, "$1"));
                        return i[x] ? le((function (e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        })) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: le((function (e) {
                        return function (t) {
                            return ae(e, t).length > 0
                        }
                    })),
                    contains: le((function (e) {
                        return e = e.replace(J, ee),
                            function (t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                            }
                    })),
                    lang: le((function (e) {
                        return $.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === p
                    },
                    focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function (e) {
                        return G.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function () {
                        return [0]
                    })),
                    last: ge((function (e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: ge((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: ge((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    })),
                    gt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = fe(t);

        function ve() {}

        function ye(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function be(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var c, u, h, d = [T, s];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (u = (h = t[x] || (t[x] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === T && c[1] === s) return d[2] = c[2];
                                if (u[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function Te(e, t, n, i, r, o) {
            return i && !i[x] && (i = Te(i)), r && !r[x] && (r = Te(r, o)), le((function (o, a, s, l) {
                var c, u, h, d = [],
                    f = [],
                    p = a.length,
                    g = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : we(g, d, e, s, l),
                    v = n ? r || (o ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l), i)
                    for (c = we(v, f), i(c, [], s, l), u = c.length; u--;)(h = c[u]) && (v[f[u]] = !(m[f[u]] = h));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(h = v[u]) && c.push(m[u] = h);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(h = v[u]) && (c = r ? I(o, h) : d[u]) > -1 && (o[c] = !(a[c] = h))
                    }
                } else v = we(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : R.apply(a, v)
            }))
        }

        function Ce(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = be((function (e) {
                    return e === t
                }), s, !0), h = be((function (e) {
                    return I(t, e) > -1
                }), s, !0), d = [function (e, n, i) {
                    var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) d = [be(xe(d), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return Te(l > 1 && xe(d), l > 1 && ye(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(H, "$1"), n, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && ye(e))
                    }
                    d.push(n)
                } return xe(d)
        }

        function Se(e, t) {
            var n = t.length > 0,
                r = e.length > 0,
                o = function (o, a, s, l, u) {
                    var h, p, m, v = 0,
                        y = "0",
                        b = o && [],
                        x = [],
                        w = c,
                        C = o || r && i.find.TAG("*", u),
                        S = T += null == w ? 1 : Math.random() || .1,
                        _ = C.length;
                    for (u && (c = a === f || a || u); y !== _ && null != (h = C[y]); y++) {
                        if (r && h) {
                            for (p = 0, a || h.ownerDocument === f || (d(h), s = !g); m = e[p++];)
                                if (m(h, a || f, s)) {
                                    l.push(h);
                                    break
                                } u && (T = S)
                        }
                        n && ((h = !m && h) && v--, o && b.push(h))
                    }
                    if (v += y, n && y !== v) {
                        for (p = 0; m = t[p++];) m(b, x, a, s);
                        if (o) {
                            if (v > 0)
                                for (; y--;) b[y] || x[y] || (x[y] = N.call(l));
                            x = we(x)
                        }
                        R.apply(l, x), u && !o && x.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                    }
                    return u && (T = S, c = w), b
                };
            return n ? le(o) : o
        }
        return ve.prototype = i.filters = i.pseudos, i.setFilters = new ve, a = ae.tokenize = function (e, t) {
            var n, r, o, a, s, l, c, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = i.preFilter; s;) {
                for (a in n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = z.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(H, " ")
                    }), s = s.slice(n.length)), i.filter) !(r = X[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : _(e, l).slice(0)
        }, s = ae.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = A[e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--;)(o = Ce(t[n]))[x] ? i.push(o) : r.push(o);
                (o = A(e, Se(r, i))).selector = e
            }
            return o
        }, l = ae.select = function (e, t, n, r) {
            var o, l, c, u, h, d = "function" == typeof e && e,
                f = !r && a(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = X.needsContext.test(e) ? 0 : l.length; o-- && !i.relative[u = (c = l[o]).type];)
                    if ((h = i.find[u]) && (r = h(c.matches[0].replace(J, ee), K.test(l[0].type) && me(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && ye(l))) return R.apply(n, r), n;
                        break
                    }
            }
            return (d || s(e, f))(r, t, !g, n, !t || K.test(e) && me(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!h, d(), n.sortDetached = ce((function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        })), ce((function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ue("type|href|height|width", (function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ce((function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ue("value", (function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ce((function (e) {
            return null == e.getAttribute("disabled")
        })) || ue(L, (function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), ae
    }(e);
    v.find = C, v.expr = C.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = C.uniqueSort, v.text = C.getText, v.isXMLDoc = C.isXML, v.contains = C.contains, v.escapeSelector = C.escape;
    var S = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && v(e).is(n)) break;
                    i.push(e)
                } return i
        },
        _ = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        A = v.expr.match.needsContext,
        E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function k(e, t, n) {
        return v.isFunction(t) ? v.grep(e, (function (e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? v.grep(e, (function (e) {
            return e === t !== n
        })) : "string" != typeof t ? v.grep(e, (function (e) {
            return l.call(t, e) > -1 !== n
        })) : D.test(t) ? v.filter(t, e, n) : (t = v.filter(t, e), v.grep(e, (function (e) {
            return l.call(t, e) > -1 !== n && 1 === e.nodeType
        })))
    }
    v.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? v.find.matchesSelector(i, e) ? [i] : [] : v.find.matches(e, v.grep(t, (function (e) {
            return 1 === e.nodeType
        })))
    }, v.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(v(e).filter((function () {
                for (t = 0; t < i; t++)
                    if (v.contains(r[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) v.find(e, r[t], n);
            return i > 1 ? v.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function (e) {
            return !!k(this, "string" == typeof e && A.test(e) ? v(e) : e || [], !1).length
        }
    });
    var N, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (v.merge(this, v.parseHTML(r[1], (t = t instanceof v ? t[0] : t) && t.nodeType ? t.ownerDocument || t : i, !0)), E.test(r[1]) && v.isPlainObject(t))
                    for (r in t) v.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(v) : v.makeArray(e, this)
    }).prototype = v.fn, N = v(i);
    var R = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    v.fn.extend({
        has: function (e) {
            var t = v(e, this),
                n = t.length;
            return this.filter((function () {
                for (var e = 0; e < n; e++)
                    if (v.contains(this, t[e])) return !0
            }))
        },
        closest: function (e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && v(e);
            if (!A.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return S(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function (e) {
            return I(e, "nextSibling")
        },
        prev: function (e) {
            return I(e, "previousSibling")
        },
        nextAll: function (e) {
            return S(e, "nextSibling")
        },
        prevAll: function (e) {
            return S(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function (e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return _(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || v.merge([], e.childNodes)
        }
    }, (function (e, t) {
        v.fn[e] = function (n, i) {
            var r = v.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = v.filter(i, r)), this.length > 1 && (j[e] || v.uniqueSort(r), R.test(e) && r.reverse()), this.pushStack(r)
        }
    }));
    var L = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function M(e, t, n) {
        var i;
        try {
            e && v.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && v.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }
    v.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return v.each(e.match(L) || [], (function (e, n) {
                t[n] = !0
            })), t
        }(e) : v.extend({}, e);
        var t, n, i, r, o = [],
            a = [],
            s = -1,
            l = function () {
                for (r = e.once, i = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        v.each(n, (function (n, i) {
                            v.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== v.type(i) && t(i)
                        }))
                    }(arguments), n && !t && l()), this
                },
                remove: function () {
                    return v.each(arguments, (function (e, t) {
                        for (var n;
                            (n = v.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    })), this
                },
                has: function (e) {
                    return e ? v.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return r = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, v.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                    ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return v.Deferred((function (t) {
                            v.each(n, (function (n, i) {
                                var r = v.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]]((function () {
                                    var e = r && r.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function (t, i, r) {
                        var o = 0;

                        function a(t, n, i, r) {
                            return function () {
                                var s = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            v.isFunction(c = e && ("object" == typeof e || "function" == typeof e) && e.then) ? r ? c.call(e, a(o, n, P, r), a(o, n, F, r)) : (o++, c.call(e, a(o, n, P, r), a(o, n, F, r), a(o, n, P, n.notifyWith))) : (i !== P && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                                        }
                                    },
                                    u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (e) {
                                            v.Deferred.exceptionHook && v.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== F && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return v.Deferred((function (e) {
                            n[0][3].add(a(0, e, v.isFunction(r) ? r : P, e.notifyWith)), n[1][3].add(a(0, e, v.isFunction(t) ? t : P)), n[2][3].add(a(0, e, v.isFunction(i) ? i : F))
                        })).promise()
                    },
                    promise: function (e) {
                        return null != e ? v.extend(e, r) : r
                    }
                },
                o = {};
            return v.each(n, (function (e, t) {
                var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add((function () {
                    i = s
                }), n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            })), r.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                a = v.Deferred(),
                s = function (e) {
                    return function (n) {
                        i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (M(e, a.done(s(n)).resolve, a.reject), "pending" === a.state() || v.isFunction(r[n] && r[n].then))) return a.then();
            for (; n--;) M(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, v.readyException = function (t) {
        e.setTimeout((function () {
            throw t
        }))
    };
    var q = v.Deferred();

    function H() {
        i.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), v.ready()
    }
    v.fn.ready = function (e) {
        return q.then(e).catch((function (e) {
            v.readyException(e)
        })), this
    }, v.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || q.resolveWith(i, [v]))
        }
    }), v.ready.then = q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
    var W = function (e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === v.type(n))
                for (s in r = !0, n) W(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, v.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(v(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        z = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function V() {
        this.expando = v.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[v.camelCase(t)] = n;
            else
                for (i in t) r[v.camelCase(i)] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][v.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = v.isArray(t) ? t.map(v.camelCase) : (t = v.camelCase(t)) in i ? [t] : t.match(L) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || v.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !v.isEmptyObject(t)
        }
    };
    var U = new V,
        $ = new V,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function G(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (r) {}
                $.set(e, t, n)
            } else n = void 0;
        return n
    }
    v.extend({
        hasData: function (e) {
            return $.hasData(e) || U.hasData(e)
        },
        data: function (e, t, n) {
            return $.access(e, t, n)
        },
        removeData: function (e, t) {
            $.remove(e, t)
        },
        _data: function (e, t, n) {
            return U.access(e, t, n)
        },
        _removeData: function (e, t) {
            U.remove(e, t)
        }
    }), v.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = $.get(o), 1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)), G(o, i, r[i]));
                    U.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each((function () {
                $.set(this, e)
            })) : W(this, (function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = $.get(o, e))) return n;
                    if (void 0 !== (n = G(o, e))) return n
                } else this.each((function () {
                    $.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each((function () {
                $.remove(this, e)
            }))
        }
    }), v.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return i = U.get(e, t = (t || "fx") + "queue"), n && (!i || v.isArray(n) ? i = U.access(e, t, v.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            var n = v.queue(e, t = t || "fx"),
                i = n.length,
                r = n.shift(),
                o = v._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                v.dequeue(e, t)
            }), o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return U.get(e, n) || U.access(e, n, {
                empty: v.Callbacks("once memory").add((function () {
                    U.remove(e, [t + "queue", n])
                }))
            })
        }
    }), v.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var n = v.queue(this, e, t);
                v._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
            }))
        },
        dequeue: function (e) {
            return this.each((function () {
                v.dequeue(this, e)
            }))
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = v.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = U.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        K = ["Top", "Right", "Bottom", "Left"],
        J = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && v.contains(e.ownerDocument, e) && "none" === v.css(e, "display")
        },
        ee = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
            return r
        };

    function te(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return v.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (v.cssNumber[t] ? "" : "px"),
            u = (v.cssNumber[t] || "px" !== c && +l) && Y.exec(v.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                v.style(e, t, (u /= o = o || ".5") + c)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var ne = {};

    function ie(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = ne[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = v.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ne[i] = r, r)
    }

    function re(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = U.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && J(i) && (r[o] = ie(i))) : "none" !== n && (r[o] = "none", U.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    v.fn.extend({
        show: function () {
            return re(this, !0)
        },
        hide: function () {
            return re(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                J(this) ? v(this).show() : v(this).hide()
            }))
        }
    });
    var oe = /^(?:checkbox|radio)$/i,
        ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        se = /^$|\/(?:java|ecma)script/i,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ce(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && v.nodeName(e, t) ? v.merge([e], n) : n
    }

    function ue(e, t) {
        for (var n = 0, i = e.length; n < i; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
    }
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
    var he = /<|&#?\w+;/;

    function de(e, t, n, i, r) {
        for (var o, a, s, l, c, u, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === v.type(o)) v.merge(d, o.nodeType ? [o] : o);
                else if (he.test(o)) {
            for (a = a || h.appendChild(t.createElement("div")), s = (ae.exec(o) || ["", ""])[1].toLowerCase(), a.innerHTML = (l = le[s] || le._default)[1] + v.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            v.merge(d, a.childNodes), (a = h.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (h.textContent = "", f = 0; o = d[f++];)
            if (i && v.inArray(o, i) > -1) r && r.push(o);
            else if (c = v.contains(o.ownerDocument, o), a = ce(h.appendChild(o), "script"), c && ue(a), n)
            for (u = 0; o = a[u++];) se.test(o.type || "") && n.push(o);
        return h
    }! function () {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var fe = i.documentElement,
        pe = /^key/,
        ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        me = /^([^.]*)(?:\.(.+)|)/;

    function ve() {
        return !0
    }

    function ye() {
        return !1
    }

    function be() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function xe(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) xe(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ye;
        else if (!r) return e;
        return 1 === o && (a = r, (r = function (e) {
            return v().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = v.guid++)), e.each((function () {
            v.event.add(this, t, r, i, n)
        }))
    }
    v.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, c, u, h, d, f, p, g, m = U.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && v.find.matchesSelector(fe, r), n.guid || (n.guid = v.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                        return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(L) || [""]).length; c--;) f = g = (s = me.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (h = v.event.special[f] || {}, h = v.event.special[f = (r ? h.delegateType : h.bindType) || f] || {}, u = v.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && v.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), v.event.global[f] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, c, u, h, d, f, p, g, m = U.hasData(e) && U.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (f = g = (s = me.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                        for (h = v.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
                        a && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, m.handle) || v.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) v.event.remove(e, f + t[c], n, i, !0);
                v.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, r, o, a, s = v.event.fix(e),
                l = new Array(arguments.length),
                c = (U.get(this, "events") || {})[s.type] || [],
                u = v.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = v.event.handlers.call(this, s, c), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((v.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? v(r, this).index(c) > -1 : v.find(r, this, null, [c]).length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(v.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[v.expando] ? e : new v.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== be() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === be() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && v.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return v.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, v.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, v.Event = function (e, t) {
        return this instanceof v.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : ye, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), void(this[v.expando] = !0)) : new v.Event(e, t)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: ye,
        isPropagationStopped: ye,
        isImmediatePropagationStopped: ye,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ve, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ve, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ve, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && pe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || v.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), v.fn.extend({
        on: function (e, t, n, i) {
            return xe(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return xe(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ye), this.each((function () {
                v.event.remove(this, e, n, t)
            }))
        }
    });
    var we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Te = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^true\/(.*)/,
        _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return v.nodeName(e, "table") && v.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function Ee(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function De(e) {
        var t = Se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ke(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (o = U.access(e), a = U.set(t, o), c = o.events))
                for (r in delete a.handle, a.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) v.event.add(t, r, c[r][n]);
            $.hasData(e) && (s = $.access(e), l = v.extend({}, s), $.set(t, l))
        }
    }

    function Ne(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && oe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Oe(e, t, n, i) {
        t = a.apply([], t);
        var r, o, s, l, c, u, h = 0,
            d = e.length,
            f = d - 1,
            m = t[0],
            y = v.isFunction(m);
        if (y || d > 1 && "string" == typeof m && !p.checkClone && Ce.test(m)) return e.each((function (r) {
            var o = e.eq(r);
            y && (t[0] = m.call(this, r, o.html())), Oe(o, t, n, i)
        }));
        if (d && (o = (r = de(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (s = v.map(ce(r, "script"), Ee)).length; h < d; h++) c = r, h !== f && (c = v.clone(c, !0, !0), l && v.merge(s, ce(c, "script"))), n.call(e[h], c, h);
            if (l)
                for (u = s[s.length - 1].ownerDocument, v.map(s, De), h = 0; h < l; h++) se.test((c = s[h]).type || "") && !U.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : g(c.textContent.replace(_e, ""), u))
        }
        return e
    }

    function Re(e, t, n) {
        for (var i, r = t ? v.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || v.cleanData(ce(i)), i.parentNode && (n && v.contains(i.ownerDocument, i) && ue(ce(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    v.extend({
        htmlPrefilter: function (e) {
            return e.replace(we, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0),
                l = v.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
                for (a = ce(s), i = 0, r = (o = ce(e)).length; i < r; i++) Ne(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || ce(e), a = a || ce(s), i = 0, r = o.length; i < r; i++) ke(o[i], a[i]);
                else ke(e, s);
            return (a = ce(s, "script")).length > 0 && ue(a, !l && ce(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, i, r = v.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[U.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? v.event.remove(n, i) : v.removeEvent(n, i, t.handle);
                        n[U.expando] = void 0
                    }
                    n[$.expando] && (n[$.expando] = void 0)
                }
        }
    }), v.fn.extend({
        detach: function (e) {
            return Re(this, e, !0)
        },
        remove: function (e) {
            return Re(this, e)
        },
        text: function (e) {
            return W(this, (function (e) {
                return void 0 === e ? v.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function () {
            return Oe(this, arguments, (function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            }))
        },
        prepend: function () {
            return Oe(this, arguments, (function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function () {
            return Oe(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function () {
            return Oe(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(ce(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                return v.clone(this, e, t)
            }))
        },
        html: function (e) {
            return W(this, (function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !le[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = v.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (v.cleanData(ce(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Oe(this, arguments, (function (t) {
                var n = this.parentNode;
                v.inArray(this, e) < 0 && (v.cleanData(ce(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (e, t) {
        v.fn[e] = function (e) {
            for (var n, i = [], r = v(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), v(r[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var je = /^margin/,
        Ie = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        Le = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };

    function Pe(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || Le(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || v.contains(e.ownerDocument, e) || (a = v.style(e, t)), !p.pixelMarginRight() && Ie.test(a) && je.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function () {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", fe.appendChild(s);
                var t = e.getComputedStyle(l);
                n = "1%" !== t.top, a = "2px" === t.marginLeft, r = "4px" === t.width, l.style.marginRight = "50%", o = "4px" === t.marginRight, fe.removeChild(s), l = null
            }
        }
        var n, r, o, a, s = i.createElement("div"),
            l = i.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === l.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(l), v.extend(p, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), r
            },
            pixelMarginRight: function () {
                return t(), o
            },
            reliableMarginLeft: function () {
                return t(), a
            }
        }))
    }();
    var Me = /^(none|table(?!-c[ea]).+)/,
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        He = ["Webkit", "Moz", "ms"],
        We = i.createElement("div").style;

    function ze(e) {
        if (e in We) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = He.length; n--;)
            if ((e = He[n] + t) in We) return e
    }

    function Ve(e, t, n) {
        var i = Y.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ue(e, t, n, i, r) {
        var o, a = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += v.css(e, n + K[o], !0, r)), i ? ("content" === n && (a -= v.css(e, "padding" + K[o], !0, r)), "margin" !== n && (a -= v.css(e, "border" + K[o] + "Width", !0, r))) : (a += v.css(e, "padding" + K[o], !0, r), "padding" !== n && (a += v.css(e, "border" + K[o] + "Width", !0, r)));
        return a
    }

    function $e(e, t, n) {
        var i, r = !0,
            o = Le(e),
            a = "border-box" === v.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (((i = Pe(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            r = a && (p.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ue(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function Xe(e, t, n, i, r) {
        return new Xe.prototype.init(e, t, n, i, r)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = v.camelCase(t),
                    l = e.style;
                return t = v.cssProps[s] || (v.cssProps[s] = ze(s) || s), a = v.cssHooks[t] || v.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : ("string" == (o = typeof n) && (r = Y.exec(n)) && r[1] && (n = te(e, t, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (v.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = v.camelCase(t);
            return t = v.cssProps[s] || (v.cssProps[s] = ze(s) || s), (a = v.cssHooks[t] || v.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Pe(e, t, i)), "normal" === r && t in qe && (r = qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), v.each(["height", "width"], (function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Me.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $e(e, t, i) : ee(e, Be, (function () {
                    return $e(e, t, i)
                }))
            },
            set: function (e, n, i) {
                var r, o = i && Le(e),
                    a = i && Ue(e, t, i, "border-box" === v.css(e, "boxSizing", !1, o), o);
                return a && (r = Y.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = v.css(e, t)), Ve(0, n, a)
            }
        }
    })), v.cssHooks.marginLeft = Fe(p.reliableMarginLeft, (function (e, t) {
        if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, (function () {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + K[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, je.test(e) || (v.cssHooks[e + t].set = Ve)
    })), v.fn.extend({
        css: function (e, t) {
            return W(this, (function (e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (v.isArray(t)) {
                    for (i = Le(e), r = t.length; a < r; a++) o[t[a]] = v.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
            }), e, t, arguments.length > 1)
        }
    }), v.Tween = Xe, (Xe.prototype = {
        constructor: Xe,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || v.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (v.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Xe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Xe.propHooks[this.prop];
            return this.pos = t = this.options.duration ? v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xe.propHooks._default.set(this), this
        }
    }).init.prototype = Xe.prototype, (Xe.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Xe.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, v.fx = Xe.prototype.init, v.fx.step = {};
    var Qe, Ge, Ze = /^(?:toggle|show|hide)$/,
        Ye = /queueHooks$/;

    function Ke() {
        Ge && (e.requestAnimationFrame(Ke), v.fx.tick())
    }

    function Je() {
        return e.setTimeout((function () {
            Qe = void 0
        })), Qe = v.now()
    }

    function et(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = K[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tt(e, t, n) {
        for (var i, r = (nt.tweeners[t] || []).concat(nt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function nt(e, t, n) {
        var i, r, o = 0,
            a = nt.prefilters.length,
            s = v.Deferred().always((function () {
                delete l.elem
            })),
            l = function () {
                if (r) return !1;
                for (var t = Qe || Je(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {},
                    easing: v.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qe || Je(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = v.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (r = t[i = v.camelCase(n)], v.isArray(o = e[n]) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = v.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); o < a; o++)
            if (i = nt.prefilters[o].call(c, e, u, c.opts)) return v.isFunction(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(i.stop, i)), i;
        return v.map(u, tt, c), v.isFunction(c.opts.start) && c.opts.start.call(e, c), v.fx.timer(v.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    v.Animation = v.extend(nt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return te(n.elem, e, Y.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                v.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(L);
                for (var n, i = 0, r = e.length; i < r; i++)(nt.tweeners[n = e[i]] = nt.tweeners[n] || []).unshift(t)
            },
            prefilters: [function (e, t, n) {
                var i, r, o, a, s, l, c, u, h = "width" in t || "height" in t,
                    d = this,
                    f = {},
                    p = e.style,
                    g = e.nodeType && J(e),
                    m = U.get(e, "fxshow");
                for (i in n.queue || (null == (a = v._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || s()
                    }), a.unqueued++, d.always((function () {
                        d.always((function () {
                            a.unqueued--, v.queue(e, "fx").length || a.empty.fire()
                        }))
                    }))), t)
                    if (Ze.test(r = t[i])) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        f[i] = m && m[i] || v.style(e, i)
                    } if ((l = !v.isEmptyObject(t)) || !v.isEmptyObject(f))
                    for (i in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = U.get(e, "display")), "none" === (u = v.css(e, "display")) && (c ? u = c : (re([e], !0), c = e.style.display || c, u = v.css(e, "display"), re([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(e, "float") && (l || (d.done((function () {
                            p.display = c
                        })), null == c && (c = "none" === (u = p.display) ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = U.access(e, "fxshow", {
                        display: c
                    }), o && (m.hidden = !g), g && re([e], !0), d.done((function () {
                        for (i in g || re([e]), U.remove(e, "fxshow"), f) v.style(e, i, f[i])
                    }))), l = tt(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function (e, t) {
                t ? nt.prefilters.unshift(e) : nt.prefilters.push(e)
            }
        }), v.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? v.extend({}, e) : {
                complete: n || !n && t || v.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !v.isFunction(t) && t
            };
            return v.fx.off || i.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
            }, r
        }, v.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(J).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = v.isEmptyObject(e),
                    o = v.speed(t, n, i),
                    a = function () {
                        var t = nt(this, v.extend({}, e), o);
                        (r || U.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = v.timers,
                        a = U.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && Ye.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || v.dequeue(this, e)
                }))
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each((function () {
                    var t, n = U.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = v.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, v.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), v.each(["toggle", "show", "hide"], (function (e, t) {
            var n = v.fn[t];
            v.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(et(t, !0), e, i, r)
            }
        })), v.each({
            slideDown: et("show"),
            slideUp: et("hide"),
            slideToggle: et("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function (e, t) {
            v.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        })), v.timers = [], v.fx.tick = function () {
            var e, t = 0,
                n = v.timers;
            for (Qe = v.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || v.fx.stop(), Qe = void 0
        }, v.fx.timer = function (e) {
            v.timers.push(e), e() ? v.fx.start() : v.timers.pop()
        }, v.fx.interval = 13, v.fx.start = function () {
            Ge || (Ge = e.requestAnimationFrame ? e.requestAnimationFrame(Ke) : e.setInterval(v.fx.tick, v.fx.interval))
        }, v.fx.stop = function () {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(Ge) : e.clearInterval(Ge), Ge = null
        }, v.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, v.fn.delay = function (t, n) {
            return t = v.fx && v.fx.speeds[t] || t, this.queue(n = n || "fx", (function (n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(r)
                }
            }))
        },
        function () {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var it, rt = v.expr.attrHandle;
    v.fn.extend({
        attr: function (e, t) {
            return W(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each((function () {
                v.removeAttr(this, e)
            }))
        }
    }), v.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === o && v.isXMLDoc(e) || (r = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? it : void 0)), void 0 !== n ? null === n ? void v.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = v.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                r = t && t.match(L);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), it = {
        set: function (e, t, n) {
            return !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), (function (e, t) {
        var n = rt[t] || v.find.attr;
        rt[t] = function (e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = rt[a], rt[a] = r, r = null != n(e, t, i) ? a : null, rt[a] = o), r
        }
    }));
    var ot = /^(?:input|select|textarea|button)$/i,
        at = /^(?:a|area)$/i;

    function st(e) {
        return (e.match(L) || []).join(" ")
    }

    function lt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    v.fn.extend({
        prop: function (e, t) {
            return W(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each((function () {
                delete this[v.propFix[e] || e]
            }))
        }
    }), v.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && v.isXMLDoc(e) || (r = v.propHooks[t = v.propFix[t] || t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = v.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ot.test(e.nodeName) || at.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (v.propHooks.selected = {
        get: function (e) {
            return null
        },
        set: function (e) {}
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        v.propFix[this.toLowerCase()] = this
    })), v.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (v.isFunction(e)) return this.each((function (t) {
                v(this).addClass(e.call(this, t, lt(this)))
            }));
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; n = this[l++];)
                    if (r = lt(n), i = 1 === n.nodeType && " " + st(r) + " ") {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = st(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (v.isFunction(e)) return this.each((function (t) {
                v(this).removeClass(e.call(this, t, lt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; n = this[l++];)
                    if (r = lt(n), i = 1 === n.nodeType && " " + st(r) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (s = st(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : v.isFunction(e) ? this.each((function (n) {
                v(this).toggleClass(e.call(this, n, lt(this), t), t)
            })) : this.each((function () {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = v(this), o = e.match(L) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = lt(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""))
            }))
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + st(lt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ct = /\r/g;
    v.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = v.isFunction(e), this.each((function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, v(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : v.isArray(r) && (r = v.map(r, (function (e) {
                    return null == e ? "" : e + ""
                }))), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            }))) : r ? (t = v.valHooks[r.type] || v.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ct, "") : null == n ? "" : n : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = v.find.attr(e, "value");
                    return null != t ? t : st(v.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            if (t = v(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = v.makeArray(t), a = r.length; a--;)((i = r[a]).selected = v.inArray(v.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), v.each(["radio", "checkbox"], (function () {
        v.valHooks[this] = {
            set: function (e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) > -1
            }
        }, p.checkOn || (v.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }));
    var ut = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function (t, n, r, o) {
            var a, s, l, c, u, d, f, p = [r || i],
                g = h.call(t, "type") ? t.type : t,
                m = h.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !ut.test(g + v.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[v.expando] ? t : new v.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : v.makeArray(n, [t]), f = v.event.special[g] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !v.isWindow(r)) {
                    for (ut.test((c = f.delegateType || g) + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), l = s;
                    l === (r.ownerDocument || i) && p.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (s = p[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? c : f.bindType || g, (d = (U.get(s, "events") || {})[t.type] && U.get(s, "handle")) && d.apply(s, n), (d = u && s[u]) && d.apply && z(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = g, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !z(r) || u && v.isFunction(r[g]) && !v.isWindow(r) && ((l = r[u]) && (r[u] = null), v.event.triggered = g, r[g](), v.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0
            });
            v.event.trigger(i, null, t)
        }
    }), v.fn.extend({
        trigger: function (e, t) {
            return this.each((function () {
                v.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return v.event.trigger(e, t, n, !0)
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
        v.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), v.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), p.focusin = "onfocusin" in e, p.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        var n = function (e) {
            v.event.simulate(t, e.target, v.event.fix(e))
        };
        v.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = U.access(i, t);
                r || i.addEventListener(e, n, !0), U.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = U.access(i, t) - 1;
                r ? U.access(i, t, r) : (i.removeEventListener(e, n, !0), U.remove(i, t))
            }
        }
    }));
    var ht = e.location,
        dt = v.now(),
        ft = /\?/;
    v.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + t), n
    };
    var pt = /\[\]$/,
        gt = /\r?\n/g,
        mt = /^(?:submit|button|image|reset|file)$/i,
        vt = /^(?:input|select|textarea|keygen)/i;

    function yt(e, t, n, i) {
        var r;
        if (v.isArray(t)) v.each(t, (function (t, r) {
            n || pt.test(e) ? i(e, r) : yt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }));
        else if (n || "object" !== v.type(t)) i(e, t);
        else
            for (r in t) yt(e + "[" + r + "]", t[r], n, i)
    }
    v.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                var n = v.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, (function () {
            r(this.name, this.value)
        }));
        else
            for (n in e) yt(n, e[n], t, r);
        return i.join("&")
    }, v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map((function () {
                var e = v.prop(this, "elements");
                return e ? v.makeArray(e) : this
            })).filter((function () {
                var e = this.type;
                return this.name && !v(this).is(":disabled") && vt.test(this.nodeName) && !mt.test(e) && (this.checked || !oe.test(e))
            })).map((function (e, t) {
                var n = v(this).val();
                return null == n ? null : v.isArray(n) ? v.map(n, (function (e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(gt, "\r\n")
                }
            })).get()
        }
    });
    var bt = /%20/g,
        xt = /#.*$/,
        wt = /([?&])_=[^&]*/,
        Tt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ct = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        _t = {},
        At = {},
        Et = "*/".concat("*"),
        Dt = i.createElement("a");

    function kt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(L) || [];
            if (v.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Nt(e, t, n, i) {
        var r = {},
            o = e === At;

        function a(s) {
            var l;
            return r[s] = !0, v.each(e[s] || [], (function (e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            })), l
        }
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function Ot(e, t) {
        var n, i, r = v.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && v.extend(!0, e, i), e
    }
    Dt.href = ht.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ht.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Et,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Ot(Ot(e, v.ajaxSettings), t) : Ot(v.ajaxSettings, e)
        },
        ajaxPrefilter: kt(_t),
        ajaxTransport: kt(At),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0);
            var r, o, a, s, l, c, u, h, d, f, p = v.ajaxSetup({}, n = n || {}),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? v(g) : v.event,
                y = v.Deferred(),
                b = v.Callbacks("once memory"),
                x = p.statusCode || {},
                w = {},
                T = {},
                C = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = Tt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return u ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) S.always(e[S.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return r && r.abort(t), A(0, t), this
                    }
                };
            if (y.promise(S), p.url = ((t || p.url || ht.href) + "").replace(St, ht.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Dt.protocol + "//" + Dt.host != c.protocol + "//" + c.host
                } catch (_) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = v.param(p.data, p.traditional)), Nt(_t, p, n, S), u) return S;
            for (d in (h = v.event && p.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ct.test(p.type), o = p.url.replace(xt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(bt, "+")) : (f = p.url.slice(o.length), p.data && (o += (ft.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(wt, "$1"), f = (ft.test(o) ? "&" : "?") + "_=" + dt++ + f), p.url = o + f), p.ifModified && (v.lastModified[o] && S.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && S.setRequestHeader("If-None-Match", v.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || u)) return S.abort();
            if (C = "abort", b.add(p.complete), S.done(p.success), S.fail(p.error), r = Nt(At, p, n, S)) {
                if (S.readyState = 1, h && m.trigger("ajaxSend", [S, p]), u) return S;
                p.async && p.timeout > 0 && (l = e.setTimeout((function () {
                    S.abort("timeout")
                }), p.timeout));
                try {
                    u = !1, r.send(w, A)
                } catch (_) {
                    if (u) throw _;
                    A(-1, _)
                }
            } else A(-1, "No Transport");

            function A(t, n, i, s) {
                var c, d, f, w, T, C = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = function (e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, S, i)), w = function (e, t, n, i) {
                    var r, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (h) {
                                return {
                                    state: "parsererror",
                                    error: a ? h : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, S, c), c ? (p.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (v.lastModified[o] = T), (T = S.getResponseHeader("etag")) && (v.etag[o] = T)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, d = w.data, c = !(f = w.error))) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", c ? y.resolveWith(g, [d, C, S]) : y.rejectWith(g, [S, C, f]), S.statusCode(x), x = void 0, h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, p, c ? d : f]), b.fireWith(g, [S, C]), h && (m.trigger("ajaxComplete", [S, p]), --v.active || v.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return v.get(e, void 0, t, "script")
        }
    }), v.each(["get", "post"], (function (e, t) {
        v[t] = function (e, n, i, r) {
            return v.isFunction(n) && (r = r || i, i = n, n = void 0), v.ajax(v.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, v.isPlainObject(e) && e))
        }
    })), v._evalUrl = function (e) {
        return v.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, v.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (v.isFunction(e) && (e = e.call(this[0])), t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function (e) {
            return v.isFunction(e) ? this.each((function (t) {
                v(this).wrapInner(e.call(this, t))
            })) : this.each((function () {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function (e) {
            var t = v.isFunction(e);
            return this.each((function (n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each((function () {
                v(this).replaceWith(this.childNodes)
            })), this
        }
    }), v.expr.pseudos.hidden = function (e) {
        return !v.expr.pseudos.visible(e)
    }, v.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, v.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Rt = {
            0: 200,
            1223: 204
        },
        jt = v.ajaxSettings.xhr();
    p.cors = !!jt && "withCredentials" in jt, p.ajax = jt = !!jt, v.ajaxTransport((function (t) {
        var n, i;
        if (p.cors || jt && !t.crossDomain) return {
            send: function (r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout((function () {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function () {
                n && n()
            }
        }
    })), v.ajaxPrefilter((function (e) {
        e.crossDomain && (e.contents.script = !1)
    })), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", (function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), v.ajaxTransport("script", (function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (r, o) {
                t = v("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function () {
                n && n()
            }
        }
    }));
    var It = [],
        Lt = /(=)\?(?=&|$)|\?\?/;

    function Pt(e) {
        return v.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = It.pop() || v.expando + "_" + dt++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", (function (t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (Lt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Lt, "$1" + r) : !1 !== t.jsonp && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || v.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always((function () {
            void 0 === o ? v(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, It.push(r)), a && v.isFunction(o) && o(a[0]), a = o = void 0
        })), "script"
    })), p.createHTMLDocument = function () {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), v.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = E.exec(e)) ? [t.createElement(o[1])] : (o = de([e], t, a), a && a.length && v(a).remove(), v.merge([], o.childNodes)));
        var r, o, a
    }, v.fn.load = function (e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = st(e.slice(s)), e = e.slice(0, s)), v.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && v.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function (e) {
            o = arguments, a.html(i ? v("<div>").append(v.parseHTML(e)).find(i) : e)
        })).always(n && function (e, t) {
            a.each((function () {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    })), v.expr.pseudos.animated = function (e) {
        return v.grep(v.timers, (function (t) {
            return e === t.elem
        })).length
    }, v.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, c = v.css(e, "position"),
                u = v(e),
                h = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = v.css(e, "top"), l = v.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), v.isFunction(t) && (t = t.call(e, n, v.extend({}, s))), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + r), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, v.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                v.offset.setOffset(this, e, t)
            }));
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect()).width || i.height ? (n = Pt(r = o.ownerDocument), {
                top: i.top + n.pageYOffset - (t = r.documentElement).clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === v.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), v.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + v.css(e[0], "borderTopWidth", !0),
                    left: i.left + v.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - v.css(n, "marginTop", !0),
                    left: t.left - i.left - v.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === v.css(e, "position");) e = e.offsetParent;
                return e || fe
            }))
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function (e, t) {
        var n = "pageYOffset" === t;
        v.fn[e] = function (i) {
            return W(this, (function (e, i, r) {
                var o = Pt(e);
                return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }), e, i, arguments.length)
        }
    })), v.each(["top", "left"], (function (e, t) {
        v.cssHooks[t] = Fe(p.pixelPosition, (function (e, n) {
            if (n) return n = Pe(e, t), Ie.test(n) ? v(e).position()[t] + "px" : n
        }))
    })), v.each({
        Height: "height",
        Width: "width"
    }, (function (e, t) {
        v.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function (n, i) {
            v.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return W(this, (function (t, n, r) {
                    var o;
                    return v.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? v.css(t, n, s) : v.style(t, n, r, s)
                }), t, a ? r : void 0, a)
            }
        }))
    })), v.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), v.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return v
    }));
    var Ft = e.jQuery,
        Mt = e.$;
    return v.noConflict = function (t) {
        return e.$ === v && (e.$ = Mt), t && e.jQuery === v && (e.jQuery = Ft), v
    }, t || (e.jQuery = e.$ = v), v
})),
function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat ? function (e) {
            return n.flat.call(e)
        } : function (e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        h = u.toString,
        d = h.call(Object),
        f = {},
        p = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function (e) {
            return null != e && e === e.window
        },
        m = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var i, r, o = (n = n || m).createElement("script");
        if (o.text = e, t)
            for (i in v)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var x = "3.6.0",
        w = function (e, t) {
            return new w.fn.init(e, t)
        };

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function () {
            return r.call(this)
        },
        get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, (function (t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(w.grep(this, (function (e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function () {
            return this.pushStack(w.grep(this, (function (e, t) {
                return t % 2
            })))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) i = e[t], "__proto__" !== t && a !== i && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, a[t] = w.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof (n = u.call(t, "constructor") && t.constructor) || h.call(n) !== d))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, i = 0;
            if (T(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var i, r, a = 0,
                s = [];
            if (T(e))
                for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
            else
                for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
            return o(s)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var C = function (e) {
        var t, n, i, r, o, a, s, l, c, u, h, d, f, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            S = le(),
            _ = le(),
            A = le(),
            E = le(),
            D = function (e, t) {
                return e === t && (h = !0), 0
            },
            k = {}.hasOwnProperty,
            N = [],
            O = N.pop,
            R = N.push,
            j = N.push,
            I = N.slice,
            L = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B = "\\[" + F + "*(" + M + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + F + "*\\]",
            q = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            H = new RegExp(F + "+", "g"),
            W = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            z = new RegExp("^" + F + "*," + F + "*"),
            V = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            U = new RegExp(F + "|>"),
            $ = new RegExp(q),
            X = new RegExp("^" + M + "$"),
            Q = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                d()
            },
            ae = xe((function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(N = I.call(w.childNodes), w.childNodes)
        } catch (t) {
            j = {
                apply: N.length ? function (e, t) {
                    R.apply(e, I.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, i, r) {
            var o, s, c, u, h, p, v, y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
            if (!r && (d(t), t = t || f, g)) {
                if (11 !== w && (h = J.exec(e)))
                    if (o = h[1]) {
                        if (9 === w) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (h[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i
                    } if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === w && (U.test(e) || V.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = x)), s = (p = a(e)).length; s--;) p[s] = (u ? "#" + u : ":scope") + " " + be(p[s]);
                        v = p.join(",")
                    }
                    try {
                        return j.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        u === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, i, r)
        }

        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ce(e) {
            return e[x] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function he(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce((function (t) {
                return t = +t, ce((function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !G.test(e && e.namespaceURI || t && t.nodeName || "HTML")
            }, d = se.setDocument = function (e) {
                var t, r, a = e ? e.ownerDocument || e : w;
                return a != f && 9 === a.nodeType && a.documentElement && (p = (f = a).documentElement, g = !o(f), w != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ue((function (e) {
                    return p.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ue((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ue((function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = K.test(f.getElementsByClassName), n.getById = ue((function (e) {
                    return p.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = K.test(f.querySelectorAll)) && (ue((function (e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                })), ue((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), b = t || K.test(p.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function (e, t) {
                    if (e === t) return h = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return h = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!r || !o) return e == f ? -1 : t == f ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                    if (r === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? de(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0
                }), f
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (d(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    E(t, !0)
                }
                return 0 < se(t, f, null, [e]).length
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != f && d(e), b(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != f && d(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && k.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function (e) {
                return (e + "").replace(ie, re)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (h = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), h) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = se.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = se.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && S(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (e, t, n) {
                        return function (i) {
                            var r = se.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(H, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, h, d, f, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (f = (c = (u = (h = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            u[e] = [T, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (u = (h = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b)
                                    for (;
                                        (d = ++f && d && d[g] || (b = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [T, b]), d !== t)););
                                return (b -= r) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return r[x] ? r(t) : 1 < r.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                            for (var i, o = r(e, t), a = o.length; a--;) e[i = L(e, o[a])] = !(n[i] = o[a])
                        })) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ce((function (e) {
                        var t = [],
                            n = [],
                            i = s(e.replace(W, "$1"));
                        return i[x] ? ce((function (e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        })) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: ce((function (e) {
                        return function (t) {
                            return 0 < se(e, t).length
                        }
                    })),
                    contains: ce((function (e) {
                        return e = e.replace(te, ne),
                            function (t) {
                                return -1 < (t.textContent || r(t)).indexOf(e)
                            }
                    })),
                    lang: ce((function (e) {
                        return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === p
                    },
                    focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function (e) {
                        return Y.test(e.nodeName)
                    },
                    input: function (e) {
                        return Z.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me((function () {
                        return [0]
                    })),
                    last: me((function (e, t) {
                        return [t - 1]
                    })),
                    eq: me((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: me((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: me((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: me((function (e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    })),
                    gt: me((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function xe(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var c, u, h, d = [T, s];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (u = (h = t[x] || (t[x] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === T && c[1] === s) return d[2] = c[2];
                                if ((u[o] = d)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Te(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function Ce(e, t, n, i, r, o) {
            return i && !i[x] && (i = Ce(i)), r && !r[x] && (r = Ce(r, o)), ce((function (o, a, s, l) {
                var c, u, h, d = [],
                    f = [],
                    p = a.length,
                    g = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : Te(g, d, e, s, l),
                    v = n ? r || (o ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l), i)
                    for (c = Te(v, f), i(c, [], s, l), u = c.length; u--;)(h = c[u]) && (v[f[u]] = !(m[f[u]] = h));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(h = v[u]) && c.push(m[u] = h);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(h = v[u]) && -1 < (c = r ? L(o, h) : d[u]) && (o[c] = !(a[c] = h))
                    }
                } else v = Te(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : j.apply(a, v)
            }))
        }

        function Se(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = xe((function (e) {
                    return e === t
                }), s, !0), h = xe((function (e) {
                    return -1 < L(t, e)
                }), s, !0), d = [function (e, n, i) {
                    var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) d = [xe(we(d), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return Ce(1 < l && we(d), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < r && Se(e.slice(l, r)), r < o && Se(e = e.slice(r)), r < o && be(e))
                    }
                    d.push(n)
                } return we(d)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, a = se.tokenize = function (e, t) {
            var n, r, o, a, s, l, c, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = i.preFilter; s;) {
                for (a in n && !(r = z.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = V.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), s = s.slice(n.length)), i.filter) !(r = Q[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : _(e, l).slice(0)
        }, s = se.compile = function (e, t) {
            var n, r, o, s, l, u, h = [],
                p = [],
                m = A[e + " "];
            if (!m) {
                for (t || (t = a(e)), n = t.length; n--;)(m = Se(t[n]))[x] ? h.push(m) : p.push(m);
                (m = A(e, (r = p, s = 0 < (o = h).length, l = 0 < r.length, u = function (e, t, n, a, u) {
                    var h, p, m, v = 0,
                        y = "0",
                        b = e && [],
                        x = [],
                        w = c,
                        C = e || l && i.find.TAG("*", u),
                        S = T += null == w ? 1 : Math.random() || .1,
                        _ = C.length;
                    for (u && (c = t == f || t || u); y !== _ && null != (h = C[y]); y++) {
                        if (l && h) {
                            for (p = 0, t || h.ownerDocument == f || (d(h), n = !g); m = r[p++];)
                                if (m(h, t || f, n)) {
                                    a.push(h);
                                    break
                                } u && (T = S)
                        }
                        s && ((h = !m && h) && v--, e && b.push(h))
                    }
                    if (v += y, s && y !== v) {
                        for (p = 0; m = o[p++];) m(b, x, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || x[y] || (x[y] = O.call(a));
                            x = Te(x)
                        }
                        j.apply(a, x), u && !e && 0 < x.length && 1 < v + o.length && se.uniqueSort(a)
                    }
                    return u && (T = S, c = w), b
                }, s ? ce(u) : u))).selector = e
            }
            return m
        }, l = se.select = function (e, t, n, r) {
            var o, l, c, u, h, d = "function" == typeof e && e,
                f = !r && a(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && !i.relative[u = (c = l[o]).type];)
                    if ((h = i.find[u]) && (r = h(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && be(l))) return j.apply(n, r), n;
                        break
                    }
            }
            return (d || s(e, f))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(D).join("") === x, n.detectDuplicates = !!h, d(), n.sortDetached = ue((function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        })), ue((function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || he("type|href|height|width", (function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ue((function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || he("value", (function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ue((function (e) {
            return null == e.getAttribute("disabled")
        })) || he(P, (function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), se
    }(e);
    w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
    var S = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && w(e).is(n)) break;
                    i.push(e)
                } return i
        },
        _ = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        A = w.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return p(t) ? w.grep(e, (function (e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? w.grep(e, (function (e) {
            return e === t !== n
        })) : "string" != typeof t ? w.grep(e, (function (e) {
            return -1 < s.call(t, e) !== n
        })) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, (function (e) {
            return 1 === e.nodeType
        })))
    }, w.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter((function () {
                for (t = 0; t < i; t++)
                    if (w.contains(r[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
            return 1 < i ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function (e) {
            return !!k(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1).length
        }
    });
    var N, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (w.merge(this, w.parseHTML(i[1], (t = t instanceof w ? t[0] : t) && t.nodeType ? t.ownerDocument || t : m, !0)), D.test(i[1]) && w.isPlainObject(t))
                    for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = m.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, N = w(m);
    var R = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter((function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            }))
        },
        closest: function (e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!A.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return S(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function (e) {
            return I(e, "nextSibling")
        },
        prev: function (e) {
            return I(e, "previousSibling")
        },
        nextAll: function (e) {
            return S(e, "nextSibling")
        },
        prevAll: function (e) {
            return S(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function (e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return _(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, (function (e, t) {
        w.fn[e] = function (n, i) {
            var r = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (j[e] || w.uniqueSort(r), R.test(e) && r.reverse()), this.pushStack(r)
        }
    }));
    var L = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function M(e, t, n, i) {
        var r;
        try {
            e && p(r = e.promise) ? r.call(e).done(t).fail(n) : e && p(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function (e) {
        var t;
        e = "string" == typeof e ? (t = {}, w.each(e.match(L) || [], (function (e, n) {
            t[n] = !0
        })), t) : w.extend({}, e);
        var n, i, r, o, a = [],
            s = [],
            l = -1,
            c = function () {
                for (o = o || e.once, r = n = !0; s.length; l = -1)
                    for (i = s.shift(); ++l < a.length;) !1 === a[l].apply(i[0], i[1]) && e.stopOnFalse && (l = a.length, i = !1);
                e.memory || (i = !1), n = !1, o && (a = i ? [] : "")
            },
            u = {
                add: function () {
                    return a && (i && !n && (l = a.length - 1, s.push(i)), function t(n) {
                        w.each(n, (function (n, i) {
                            p(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        }))
                    }(arguments), i && !n && c()), this
                },
                remove: function () {
                    return w.each(arguments, (function (e, t) {
                        for (var n; - 1 < (n = w.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    })), this
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return o = s = [], a = i = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return o = s = [], i || n || (a = i = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), n || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return u
    }, w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred((function (t) {
                            w.each(n, (function (n, i) {
                                var r = p(e[i[4]]) && e[i[4]];
                                o[i[1]]((function () {
                                    var e = r && r.apply(this, arguments);
                                    e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function (t, i, r) {
                        var o = 0;

                        function a(t, n, i, r) {
                            return function () {
                                var s = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p(c = e && ("object" == typeof e || "function" == typeof e) && e.then) ? r ? c.call(e, a(o, n, P, r), a(o, n, F, r)) : (o++, c.call(e, a(o, n, P, r), a(o, n, F, r), a(o, n, P, n.notifyWith))) : (i !== P && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                                        }
                                    },
                                    u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (c) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(c, u.stackTrace), o <= t + 1 && (i !== F && (s = void 0, l = [c]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return w.Deferred((function (e) {
                            n[0][3].add(a(0, e, p(r) ? r : P, e.notifyWith)), n[1][3].add(a(0, e, p(t) ? t : P)), n[2][3].add(a(0, e, p(i) ? i : F))
                        })).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                o = {};
            return w.each(n, (function (e, t) {
                var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add((function () {
                    i = s
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            })), r.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = r.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        i[e] = this, o[e] = 1 < arguments.length ? r.call(arguments) : n, --t || a.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (M(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();
            for (; n--;) M(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout((function () {
            throw t
        }))
    };
    var q = w.Deferred();

    function H() {
        m.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), w.ready()
    }
    w.fn.ready = function (e) {
        return q.then(e).catch((function (e) {
            w.readyException(e)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || q.resolveWith(m, [w])
        }
    }), w.ready.then = q.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
    var W = function (e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (s in r = !0, n) W(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, p(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(w(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        z = /^-ms-/,
        V = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function $(e) {
        return e.replace(z, "ms-").replace(V, U)
    }
    var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[$(t)] = n;
            else
                for (i in t) r[$(i)] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in i ? [t] : t.match(L) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var G = new Q,
        Z = new Q,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function J(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Y.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Z.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return Z.hasData(e) || G.hasData(e)
        },
        data: function (e, t, n) {
            return Z.access(e, t, n)
        },
        removeData: function (e, t) {
            Z.remove(e, t)
        },
        _data: function (e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function (e, t) {
            G.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Z.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = $(i.slice(5)), J(o, i, r[i]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each((function () {
                Z.set(this, e)
            })) : W(this, (function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = J(o, e)) ? n : void 0;
                this.each((function () {
                    Z.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each((function () {
                Z.remove(this, e)
            }))
        }
    }), w.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return i = G.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = G.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            var n = w.queue(e, t = t || "fx"),
                i = n.length,
                r = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                w.dequeue(e, t)
            }), o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: w.Callbacks("once memory").add((function () {
                    G.remove(e, [t + "queue", n])
                }))
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function (e) {
            return this.each((function () {
                w.dequeue(this, e)
            }))
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = G.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = m.documentElement,
        re = function (e) {
            return w.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    ie.getRootNode && (re = function (e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display")
    };

    function se(e, t, n, i) {
        var r, o, a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return w.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3], u = +(l /= 2) || 1; a--;) w.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
            w.style(e, t, (u *= 2) + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var le = {};

    function ce(e, t) {
        for (var n, i, r, o, a, s, l, c = [], u = 0, h = e.length; u < h; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = G.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && ae(i) && (c[u] = (l = a = o = void 0, a = (r = i).ownerDocument, (l = le[s = r.nodeName]) || (o = a.body.appendChild(a.createElement(s)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[s] = l)))) : "none" !== n && (c[u] = "none", G.set(i, "display", n)));
        for (u = 0; u < h; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    w.fn.extend({
        show: function () {
            return ce(this, !0)
        },
        hide: function () {
            return ce(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                ae(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var ue, he, de = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    ue = m.createDocumentFragment().appendChild(m.createElement("div")), (he = m.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), ue.appendChild(he), f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", f.option = !!ue.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, i, r) {
        for (var o, a, s, l, c, u, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || h.appendChild(t.createElement("div")), s = (fe.exec(o) || ["", ""])[1].toLowerCase(), a.innerHTML = (l = ge[s] || ge._default)[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            w.merge(d, a.childNodes), (a = h.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (h.textContent = "", f = 0; o = d[f++];)
            if (i && -1 < w.inArray(o, i)) r && r.push(o);
            else if (c = re(o), a = me(h.appendChild(o), "script"), c && ve(a), n)
            for (u = 0; o = a[u++];) pe.test(o.type || "") && n.push(o);
        return h
    }
    var xe = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Te;
        else if (!r) return e;
        return 1 === o && (a = r, (r = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each((function () {
            w.event.add(this, t, r, i, n)
        }))
    }

    function _e(e, t, n) {
        n ? (G.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
                var i, o, a = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = r.call(arguments), G.set(this, t, a), i = n(this, t), this[t](), a !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else a.length && (G.set(this, t, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, t) && w.event.add(e, t, we)
    }
    w.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, c, u, h, d, f, p, g, m = G.get(e);
            if (X(e))
                for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(ie, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function (t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(L) || [""]).length; c--;) f = g = (s = xe.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (h = w.event.special[f] || {}, h = w.event.special[f = (r ? h.delegateType : h.bindType) || f] || {}, u = w.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && w.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), w.event.global[f] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, c, u, h, d, f, p, g, m = G.hasData(e) && G.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (f = g = (s = xe.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                        for (h = w.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
                        a && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, m.handle) || w.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) w.event.remove(e, f + t[c], n, i, !0);
                w.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, r, o, a, s = new Array(arguments.length),
                l = w.event.fix(e),
                c = (G.get(this, "events") || Object.create(null))[l.type] || [],
                u = w.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (a = w.event.handlers.call(this, l, c), t = 0;
                    (r = a[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < w(r, this).index(c) : w.find(r, this, null, [c]).length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && E(t, "input") && _e(t, "click", we), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && E(t, "input") && _e(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && E(t, "input") && G.get(t, "click") || E(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        w.event.special[e] = {
            setup: function () {
                return _e(this, e, Ce), !1
            },
            trigger: function () {
                return _e(this, e), !0
            },
            _default: function () {
                return !0
            },
            delegateType: t
        }
    })), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), w.fn.extend({
        on: function (e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each((function () {
                w.event.remove(this, e, n, t)
            }))
        }
    });
    var Ae = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ke(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Re(e, t) {
        var n, i, r, o, a, s;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (s = G.get(e).events))
                for (r in G.remove(t, "handle events"), s)
                    for (n = 0, i = s[r].length; n < i; n++) w.event.add(t, r, s[r][n]);
            Z.hasData(e) && (o = Z.access(e), a = w.extend({}, o), Z.set(t, a))
        }
    }

    function je(e, t, n, i) {
        t = o(t);
        var r, a, s, l, c, u, h = 0,
            d = e.length,
            g = d - 1,
            m = t[0],
            v = p(m);
        if (v || 1 < d && "string" == typeof m && !f.checkClone && Ee.test(m)) return e.each((function (r) {
            var o = e.eq(r);
            v && (t[0] = m.call(this, r, o.html())), je(o, t, n, i)
        }));
        if (d && (a = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
            for (l = (s = w.map(me(r, "script"), Ne)).length; h < d; h++) c = r, h !== g && (c = w.clone(c, !0, !0), l && w.merge(s, me(c, "script"))), n.call(e[h], c, h);
            if (l)
                for (u = s[s.length - 1].ownerDocument, w.map(s, Oe), h = 0; h < l; h++) pe.test((c = s[h]).type || "") && !G.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, u) : y(c.textContent.replace(De, ""), c, u))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var i, r, o, a, s, l, c, u = e.cloneNode(!0),
                h = re(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = me(u), i = 0, r = (o = me(e)).length; i < r; i++) s = o[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(u), i = 0, r = o.length; i < r; i++) Re(o[i], a[i]);
                else Re(e, u);
            return 0 < (a = me(u, "script")).length && ve(a, !h && me(e, "script")), u
        },
        cleanData: function (e) {
            for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[G.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return W(this, (function (e) {
                return void 0 === e ? w.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function () {
            return je(this, arguments, (function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            }))
        },
        prepend: function () {
            return je(this, arguments, (function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function () {
            return je(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function () {
            return je(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                return w.clone(this, e, t)
            }))
        },
        html: function (e) {
            return W(this, (function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return je(this, arguments, (function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (e, t) {
        w.fn[e] = function (e) {
            for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var Le = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Pe = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Fe = function (e, t, n) {
            var i, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            for (r in i = n.call(e), t) e.style[r] = o[r];
            return i
        },
        Me = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || Pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = w.style(e, t)), !f.pixelBoxStyles() && Le.test(a) && Me.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function qe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", o = 12 === n(u.offsetWidth / 3), ie.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, r, o, a, s, l, c = m.createElement("div"),
            u = m.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(f, {
            boxSizingReliable: function () {
                return t(), r
            },
            pixelBoxStyles: function () {
                return t(), a
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), l
            },
            scrollboxSize: function () {
                return t(), o
            },
            reliableTrDimensions: function () {
                var t, n, i, r;
                return null == s && (t = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), s = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), s
            }
        }))
    }();
    var He = ["Webkit", "Moz", "ms"],
        We = m.createElement("div").style,
        ze = {};

    function Ve(e) {
        return w.cssProps[e] || ze[e] || (e in We ? e : ze[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = He.length; n--;)
                if ((e = He[n] + t) in We) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        $e = /^--/,
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ze(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += w.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += w.css(e, "border" + ne[a] + "Width", !0, r) : s += w.css(e, "border" + ne[a] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function Ye(e, t, n) {
        var i = Pe(e),
            r = (!f.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            o = r,
            a = Be(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Le.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!f.boxSizingReliable() && r || !f.reliableTrDimensions() && E(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === w.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
    }

    function Ke(e, t, n, i, r) {
        return new Ke.prototype.init(e, t, n, i, r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = $(t),
                    l = $e.test(t),
                    c = e.style;
                if (l || (t = Ve(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = se(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = $(t);
            return $e.test(t) || (t = Ve(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), w.each(["height", "width"], (function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Ue.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ye(e, t, i) : Fe(e, Xe, (function () {
                    return Ye(e, t, i)
                }))
            },
            set: function (e, n, i) {
                var r, o = Pe(e),
                    a = !f.scrollboxSize() && "absolute" === o.position,
                    s = (a || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                    l = i ? Ze(e, t, i, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ge(0, n, l)
            }
        }
    })), w.cssHooks.marginLeft = qe(f.reliableMarginLeft, (function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
            marginLeft: 0
        }, (function () {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ge)
    })), w.fn.extend({
        css: function (e, t) {
            return W(this, (function (e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (i = Pe(e), r = t.length; a < r; a++) o[t[a]] = w.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((w.Tween = Ke).prototype = {
        constructor: Ke,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Ke.propHooks[this.prop];
            return this.pos = t = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = Ke.prototype.init, w.fx.step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

    function ot() {
        et && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, w.fx.interval), w.fx.tick())
    }

    function at() {
        return e.setTimeout((function () {
            Je = void 0
        })), Je = Date.now()
    }

    function st(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function lt(e, t, n) {
        for (var i, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function ct(e, t, n) {
        var i, r, o = 0,
            a = ct.prefilters.length,
            s = w.Deferred().always((function () {
                delete l.elem
            })),
            l = function () {
                if (r) return !1;
                for (var t = Je || at(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Je || at(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (r = t[i = $(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = w.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); o < a; o++)
            if (i = ct.prefilters[o].call(c, e, u, c.opts)) return p(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, lt, c), p(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(ct, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            p(e) ? (t = e, e = ["*"]) : e = e.match(L);
            for (var n, i = 0, r = e.length; i < r; i++)(ct.tweeners[n = e[i]] = ct.tweeners[n] || []).unshift(t)
        },
        prefilters: [function (e, t, n) {
            var i, r, o, a, s, l, c, u, h = "width" in t || "height" in t,
                d = this,
                f = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = G.get(e, "fxshow");
            for (i in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, d.always((function () {
                    d.always((function () {
                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                    }))
                }))), t)
                if (it.test(r = t[i])) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || w.style(e, i)
                } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
                for (i in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = G.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (ce([e], !0), c = e.style.display || c, u = w.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (d.done((function () {
                        p.display = c
                    })), null == c && (c = "none" === (u = p.display) ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && ce([e], !0), d.done((function () {
                    for (i in g || ce([e]), G.remove(e, "fxshow"), f) w.style(e, i, f[i])
                }))), l = lt(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || p(e) && e,
            duration: e,
            easing: n && t || t && !p(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var r = w.isEmptyObject(e),
                o = w.speed(t, n, i),
                a = function () {
                    var t = ct(this, w.extend({}, e), o);
                    (r || G.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = w.timers,
                    a = G.get(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a) a[r] && a[r].stop && rt.test(r) && i(a[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || w.dequeue(this, e)
            }))
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each((function () {
                var t, n = G.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = w.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }))
        }
    }), w.each(["toggle", "show", "hide"], (function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, r)
        }
    })), w.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function (e, t) {
        w.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    })), w.timers = [], w.fx.tick = function () {
        var e, t = 0,
            n = w.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), Je = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        et || (et = !0, ot())
    }, w.fx.stop = function () {
        et = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function (t, n) {
        return t = w.fx && w.fx.speeds[t] || t, this.queue(n = n || "fx", (function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        }))
    }, tt = m.createElement("input"), nt = m.createElement("select").appendChild(m.createElement("option")), tt.type = "checkbox", f.checkOn = "" !== tt.value, f.optSelected = nt.selected, (tt = m.createElement("input")).value = "t", tt.type = "radio", f.radioValue = "t" === tt.value;
    var ut, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each((function () {
                w.removeAttr(this, e)
            }))
        }
    }), w.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!f.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                r = t && t.match(L);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ut = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = ht[a], ht[a] = r, r = null != n(e, t, i) ? a : null, ht[a] = o), r
        }
    }));
    var dt = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(L) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    w.fn.extend({
        prop: function (e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each((function () {
                delete this[w.propFix[e] || e]
            }))
        }
    }), w.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (r = w.propHooks[t = w.propFix[t] || t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (w.propHooks.selected = {
        get: function (e) {
            return null
        },
        set: function (e) {}
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        w.propFix[this.toLowerCase()] = this
    })), w.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (p(e)) return this.each((function (t) {
                w(this).addClass(e.call(this, t, gt(this)))
            }));
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (r = gt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = pt(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (p(e)) return this.each((function (t) {
                w(this).removeClass(e.call(this, t, gt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (r = gt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (s = pt(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each((function (n) {
                w(this).toggleClass(e.call(this, n, gt(this), t), t)
            })) : this.each((function () {
                var t, r, o, a;
                if (i)
                    for (r = 0, o = w(this), a = mt(e); t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = gt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
            }))
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + pt(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = p(e), this.each((function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function (e) {
                    return null == e ? "" : e + ""
                }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            }))) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : pt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = w.makeArray(t), a = r.length; a--;)((i = r[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, f.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, i, r) {
            var o, a, s, l, c, h, d, f, v = [i || m],
                y = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = f = s = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !g(i)) {
                    for (yt.test((l = d.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (i.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = v[o++]) && !t.isPropagationStopped();) f = a, t.type = 1 < o ? l : d.bindType || y, (h = (G.get(a, "events") || Object.create(null))[t.type] && G.get(a, "handle")) && h.apply(a, n), (h = c && a[c]) && h.apply && X(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !X(i) || c && p(i[y]) && !g(i) && ((s = i[c]) && (i[c] = null), w.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, bt), i[y](), t.isPropagationStopped() && f.removeEventListener(y, bt), w.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each((function () {
                w.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), f.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this,
                    r = G.access(i, t);
                r || i.addEventListener(e, n, !0), G.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this.document || this,
                    r = G.access(i, t) - 1;
                r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0), G.remove(i, t))
            }
        }
    }));
    var xt = e.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    w.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || w.error("Invalid XML: " + (i ? w.map(i.childNodes, (function (e) {
            return e.textContent
        })).join("\n") : t)), n
    };
    var Ct = /\[\]$/,
        St = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, i) {
        var r;
        if (Array.isArray(t)) w.each(t, (function (t, r) {
            n || Ct.test(e) ? i(e, r) : Et(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }));
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (r in t) Et(e + "[" + r + "]", t[r], n, i)
    }
    w.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                var n = p(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function () {
            r(this.name, this.value)
        }));
        else
            for (n in e) Et(n, e[n], t, r);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map((function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !_t.test(e) && (this.checked || !de.test(e))
            })).map((function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function (e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            })).get()
        }
    });
    var Dt = /%20/g,
        kt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        It = {},
        Lt = {},
        Pt = "*/".concat("*"),
        Ft = m.createElement("a");

    function Mt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(L) || [];
            if (p(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Bt(e, t, n, i) {
        var r = {},
            o = e === Lt;

        function a(s) {
            var l;
            return r[s] = !0, w.each(e[s] || [], (function (e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            })), l
        }
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function qt(e, t) {
        var n, i, r = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }
    Ft.href = xt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? qt(qt(e, w.ajaxSettings), t) : qt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(It),
        ajaxTransport: Mt(Lt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0);
            var i, r, o, a, s, l, c, u, h, d, f = w.ajaxSetup({}, n = n || {}),
                p = f.context || f,
                g = f.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = f.statusCode || {},
                x = {},
                T = {},
                C = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Ot.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return c ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) S.always(e[S.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), _(0, t), this
                    }
                };
            if (v.promise(S), f.url = ((t || f.url || xt.href) + "").replace(jt, xt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), Bt(It, f, n, S), c) return S;
            for (h in (u = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Rt.test(f.type), r = f.url.replace(kt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Dt, "+")) : (d = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Tt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Nt, "$1"), d = (Tt.test(r) ? "&" : "?") + "_=" + wt.guid++ + d), f.url = r + d), f.ifModified && (w.lastModified[r] && S.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && S.setRequestHeader("If-None-Match", w.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : f.accepts["*"]), f.headers) S.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, S, f) || c)) return S.abort();
            if (C = "abort", y.add(f.complete), S.done(f.success), S.fail(f.error), i = Bt(Lt, f, n, S)) {
                if (S.readyState = 1, u && g.trigger("ajaxSend", [S, f]), c) return S;
                f.async && 0 < f.timeout && (s = e.setTimeout((function () {
                    S.abort("timeout")
                }), f.timeout));
                try {
                    c = !1, i.send(x, _)
                } catch (t) {
                    if (c) throw t;
                    _(-1, t)
                }
            } else _(-1, "No Transport");

            function _(t, n, a, l) {
                var h, d, m, x, T, C = n;
                c || (c = !0, s && e.clearTimeout(s), i = void 0, o = l || "", S.readyState = 0 < t ? 4 : 0, h = 200 <= t && t < 300 || 304 === t, a && (x = function (e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(f, S, a)), !h && -1 < w.inArray("script", f.dataTypes) && w.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}), x = function (e, t, n, i) {
                    var r, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, x, S, h), h ? (f.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (w.lastModified[r] = T), (T = S.getResponseHeader("etag")) && (w.etag[r] = T)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, h = !(m = x.error))) : (m = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", h ? v.resolveWith(p, [d, C, S]) : v.rejectWith(p, [S, C, m]), S.statusCode(b), b = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [S, f, h ? d : m]), y.fireWith(p, [S, C]), u && (g.trigger("ajaxComplete", [S, f]), --w.active || w.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], (function (e, t) {
        w[t] = function (e, n, i, r) {
            return p(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    })), w.ajaxPrefilter((function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), w._evalUrl = function (e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                w.globalEval(e, t, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (p(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function (e) {
            return p(e) ? this.each((function (t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function (e) {
            var t = p(e);
            return this.each((function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each((function () {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Ht = {
            0: 200,
            1223: 204
        },
        Wt = w.ajaxSettings.xhr();
    f.cors = !!Wt && "withCredentials" in Wt, f.ajax = Wt = !!Wt, w.ajaxTransport((function (t) {
        var n, i;
        if (f.cors || Wt && !t.crossDomain) return {
            send: function (r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout((function () {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (r) {
                    if (n) throw r
                }
            },
            abort: function () {
                n && n()
            }
        }
    })), w.ajaxPrefilter((function (e) {
        e.crossDomain && (e.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), w.ajaxTransport("script", (function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (i, r) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), m.head.appendChild(t[0])
            },
            abort: function () {
                n && n()
            }
        }
    }));
    var zt, Vt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vt.pop() || w.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function (t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || w.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always((function () {
            void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Vt.push(r)), a && p(o) && o(a[0]), a = o = void 0
        })), "script"
    })), f.createHTMLDocument = ((zt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(i)) : t = m), o = !n && [], (r = D.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
        var i, r, o
    }, w.fn.load = function (e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (i = pt(e.slice(s)), e = e.slice(0, s)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && w.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function (e) {
            o = arguments, a.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        })).always(n && function (e, t) {
            a.each((function () {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, (function (t) {
            return e === t.elem
        })).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, c = w.css(e, "position"),
                u = w(e),
                h = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), p(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + r), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                w.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? {
                top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - w.css(i, "marginTop", !0),
                    left: t.left - r.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || ie
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
            return W(this, (function (e, i, r) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }), e, i, arguments.length)
        }
    })), w.each(["top", "left"], (function (e, t) {
        w.cssHooks[t] = qe(f.pixelPosition, (function (e, n) {
            if (n) return n = Be(e, t), Le.test(n) ? w(e).position()[t] + "px" : n
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function (n, i) {
            w.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return W(this, (function (t, n, r) {
                    var o;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, s) : w.style(t, n, r, s)
                }), t, a ? r : void 0, a)
            }
        }))
    })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    })), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
        w.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var $t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return i = r.call(arguments, 2), (o = function () {
            return e.apply(t || this, i.concat(r.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = E, w.isFunction = p, w.isWindow = g, w.camelCase = $, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, w.trim = function (e) {
        return null == e ? "" : (e + "").replace($t, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return w
    }));
    var Xt = e.jQuery,
        Qt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Qt), t && e.jQuery === w && (e.jQuery = Xt), w
    }, void 0 === t && (e.jQuery = e.$ = w), w
})),
function (e, t, n) {
    function i(e, t) {
        return t.match(/:\d+$/) ? t : t + ":" + function (e) {
            return "http:" === e ? 80 : "https:" === e ? 443 : void 0
        }(e)
    }

    function r(t, n) {
        var i = this,
            r = [];
        i.tryBuffer = function (n) {
            return t.state === e.signalR.connectionState.connecting && (r.push(n), !0)
        }, i.drain = function () {
            if (t.state === e.signalR.connectionState.connected)
                for (; r.length > 0;) n(r.shift())
        }, i.clear = function () {
            r = []
        }
    }
    var o = {
        nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
        noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
        errorOnNegotiate: "Error during negotiation request.",
        stoppedWhileLoading: "The connection was stopped during page load.",
        stoppedWhileNegotiating: "The connection was stopped during the negotiate request.",
        errorParsingNegotiateResponse: "Error parsing negotiate response.",
        errorRedirectionExceedsLimit: "Negotiate redirection limit exceeded.",
        errorDuringStartRequest: "Error during start request. Stopping the connection.",
        errorFromServer: "Error message received from the server: '{0}'.",
        stoppedDuringStartRequest: "The connection was stopped during the start request.",
        errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.",
        invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.",
        protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
        aspnetCoreSignalrServer: "Detected a connection attempt to an ASP.NET Core SignalR Server. This client only supports connecting to an ASP.NET SignalR Server. See https://aka.ms/signalr-core-differences for details.",
        sendFailed: "Send failed.",
        parseFailed: "Failed at parsing response: {0}",
        longPollFailed: "Long polling request failed.",
        eventSourceFailedToConnect: "EventSource failed to connect.",
        eventSourceError: "Error raised by EventSource",
        webSocketClosed: "WebSocket closed.",
        pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.",
        pingServerFailed: "Failed to ping server.",
        pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
        pingServerFailedParse: "Failed to parse ping server response, stopping the connection.",
        noConnectionTransport: "Connection is in an invalid state, there is no transport active.",
        webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
        reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
        reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection.",
        jsonpNotSupportedWithAccessToken: "The JSONP protocol does not support connections that require a Bearer token to connect, such as the Azure SignalR Service."
    };
    if ("function" != typeof e) throw new Error(o.nojQuery);
    var a, s, l = "complete" === t.document.readyState,
        c = e(t),
        u = "__Negotiate Aborted__",
        h = {
            onStart: "onStart",
            onStarting: "onStarting",
            onReceived: "onReceived",
            onError: "onError",
            onConnectionSlow: "onConnectionSlow",
            onReconnecting: "onReconnecting",
            onReconnect: "onReconnect",
            onStateChanged: "onStateChanged",
            onDisconnect: "onDisconnect"
        },
        d = function (t, n, i) {
            return n === t.state && (t.state = i, e(t).triggerHandler(h.onStateChanged, [{
                oldState: n,
                newState: i
            }]), !0)
        },
        f = function (e) {
            return e._.keepAliveData.activated && e.transport.supportsKeepAlive(e)
        };
    (a = function (e, t, n) {
        return new a.fn.init(e, t, n)
    })._ = {
        defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8",
        ieVersion: function () {
            var e, n;
            return "Microsoft Internet Explorer" === t.navigator.appName && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent)) && (e = t.parseFloat(n[1])), e
        }(),
        error: function (e, t, n) {
            var i = new Error(e);
            return i.source = t, void 0 !== n && (i.context = n), i
        },
        transportError: function (e, t, n, i) {
            var r = this.error(e, n, i);
            return r.transport = t ? t.name : void 0, r
        },
        format: function () {
            for (var e = arguments[0], t = 0; t < arguments.length - 1; t++) e = e.replace("{" + t + "}", arguments[t + 1]);
            return e
        },
        firefoxMajorVersion: function (e) {
            var t = e.match(/Firefox\/(\d+)/);
            return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10)
        },
        configurePingInterval: function (n) {
            var i = n._.config,
                r = function (t) {
                    e(n).triggerHandler(h.onError, [t])
                };
            i && !n._.pingIntervalId && i.pingInterval && (n._.pingIntervalId = t.setInterval((function () {
                a.transports._logic.pingServer(n).fail(r)
            }), i.pingInterval))
        }
    }, a.events = h, a.resources = o, a.ajaxDefaults = {
        processData: !0,
        timeout: null,
        async: !0,
        global: !1,
        cache: !1
    }, a.changeState = d, a.isDisconnecting = function (e) {
        return e.state === a.connectionState.disconnected
    }, a.connectionState = {
        connecting: 0,
        connected: 1,
        reconnecting: 2,
        disconnected: 4
    }, a.hub = {
        start: function () {
            throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.")
        }
    }, "function" == typeof c.on ? c.on("load", (function () {
        l = !0
    })) : c.load((function () {
        l = !0
    })), a.fn = a.prototype = {
        init: function (t, n, i) {
            var o = e(this);
            this.url = t, this.qs = n, this.lastError = null, this._ = {
                keepAliveData: {},
                connectingMessageBuffer: new r(this, (function (e) {
                    o.triggerHandler(h.onReceived, [e])
                })),
                lastMessageAt: (new Date).getTime(),
                lastActiveAt: (new Date).getTime(),
                beatInterval: 5e3,
                beatHandle: null,
                totalTransportConnectTimeout: 0,
                redirectQs: null
            }, "boolean" == typeof i && (this.logging = i)
        },
        _parseResponse: function (e) {
            return e && "string" == typeof e ? this.json.parse(e) : e
        },
        _originalJson: t.JSON,
        json: t.JSON,
        isCrossDomain: function (n, r) {
            var o;
            return n = e.trim(n), r = r || t.location, 0 === n.indexOf("http") && ((o = t.document.createElement("a")).href = n, o.protocol + i(o.protocol, o.host) !== r.protocol + i(r.protocol, r.host))
        },
        ajaxDataType: "text",
        contentType: "application/json; charset=UTF-8",
        logging: !1,
        state: a.connectionState.disconnected,
        clientProtocol: "2.1",
        supportedProtocols: ["1.5", "2.0", "2.1"],
        negotiateRedirectSupportedProtocols: ["2.0", "2.1"],
        reconnectDelay: 2e3,
        transportConnectTimeout: 0,
        disconnectTimeout: 3e4,
        reconnectWindow: 3e4,
        keepAliveWarnAt: 2 / 3,
        start: function (n, i) {
            var r, s, p, g = this,
                m = {
                    pingInterval: 3e5,
                    waitForPageLoad: !0,
                    transport: "auto",
                    jsonp: !1
                },
                v = g._deferral || e.Deferred(),
                y = t.document.createElement("a"),
                b = function (n, i) {
                    n.url === i && n.baseUrl || (n.url = i, y.href = n.url, y.protocol && ":" !== y.protocol ? (n.protocol = y.protocol, n.host = y.host) : (n.protocol = t.document.location.protocol, n.host = y.host || t.document.location.host), n.baseUrl = n.protocol + "//" + n.host, n.wsProtocol = "https:" === n.protocol ? "wss://" : "ws://", 0 === n.url.indexOf("//") && (n.url = t.location.protocol + n.url, n.log("Protocol relative URL detected, normalizing it to '" + n.url + "'.")), n.isCrossDomain(n.url) && (n.log("Auto detected cross domain url."), "auto" === m.transport && (m.transport = ["webSockets", "serverSentEvents", "longPolling"]), void 0 === n.withCredentials && (n.withCredentials = !0), e.support.cors || (n.ajaxDataType = "jsonp", n.log("Using jsonp because this browser doesn't support CORS.")), n.contentType = a._.defaultContentType))
                };
            if (g.lastError = null, g._deferral = v, !g.json) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
            if ("function" === e.type(n) ? i = n : "object" === e.type(n) && (e.extend(m, n), "function" === e.type(m.callback) && (i = m.callback)), m.transport = function (t, n) {
                    var i, r;
                    if (e.isArray(t)) {
                        for (i = t.length - 1; i >= 0; i--) "string" === e.type(r = t[i]) && a.transports[r] || (n.log("Invalid transport: " + r + ", removing it from the transports list."), t.splice(i, 1));
                        0 === t.length && (n.log("No transports remain within the specified transport array."), t = null)
                    } else if (a.transports[t] || "auto" === t) {
                        if ("auto" === t && a._.ieVersion <= 8) return ["longPolling"]
                    } else n.log("Invalid transport: " + t.toString() + "."), t = null;
                    return t
                }(m.transport, g), !m.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
            return g._.config = m, l || !0 !== m.waitForPageLoad ? g.state === a.connectionState.connecting ? v.promise() : !1 === d(g, a.connectionState.disconnected, a.connectionState.connecting) ? (v.resolve(g), v.promise()) : (function (n) {
                var i, r;
                n._.configuredStopReconnectingTimeout || (r = function (t) {
                    var n = a._.format(a.resources.reconnectTimeout, t.disconnectTimeout);
                    t.log(n), e(t).triggerHandler(h.onError, [a._.error(n, "TimeoutException")]), t.stop(!1, !1)
                }, n.reconnecting((function () {
                    var e = this;
                    e.state === a.connectionState.reconnecting && (i = t.setTimeout((function () {
                        r(e)
                    }), e.disconnectTimeout))
                })), n.stateChanged((function (e) {
                    e.oldState === a.connectionState.reconnecting && t.clearTimeout(i)
                })), n._.configuredStopReconnectingTimeout = !0)
            }(g), "auto" === m.transport && !0 === m.jsonp && (m.transport = "longPolling"), g.withCredentials = m.withCredentials, g._originalUrl = g.url, g.ajaxDataType = m.jsonp ? "jsonp" : "text", b(g, g.url), e(g).bind(h.onStart, (function () {
                "function" === e.type(i) && i.call(g), v.resolve(g)
            })), g._.initHandler = a.transports._logic.initHandler(g), r = function (n, i) {
                var s = a._.error(o.noTransportOnInit);
                if ((i = i || 0) >= n.length) return g.log(0 === i ? "No transports supported by the server were selected." : 1 === i ? "No fallback transports were selected." : "Fallback transports exhausted."), e(g).triggerHandler(h.onError, [s]), v.reject(s), void g.stop();
                if (g.state !== a.connectionState.disconnected) {
                    var l = a.transports[n[i]],
                        u = function () {
                            r(n, i + 1)
                        };
                    g.transport = l;
                    try {
                        g._.initHandler.start(l, (function () {
                            var n = a._.firefoxMajorVersion(t.navigator.userAgent) >= 11;
                            g.log("The start request succeeded. Transitioning to the connected state."), f(g) && a.transports._logic.monitorKeepAlive(g), a.transports._logic.startHeartbeat(g), a._.configurePingInterval(g), d(g, a.connectionState.connecting, a.connectionState.connected) || g.log("WARNING! The connection was not in the connecting state."), g._.connectingMessageBuffer.drain(), e(g).triggerHandler(h.onStart), c.bind("unload", (function () {
                                g.log("Window unloading, stopping the connection."), g.stop(!0)
                            })), n && c.bind("beforeunload", (function () {
                                t.setTimeout((function () {
                                    g.stop(!0)
                                }), 0)
                            }))
                        }), u)
                    } catch (p) {
                        g.log(l.name + " transport threw '" + p.message + "' when attempting to start."), u()
                    }
                }
            }, s = g.url + "/negotiate", p = function (t, n) {
                var i = a._.error(o.errorOnNegotiate, t, n._.negotiateRequest);
                e(n).triggerHandler(h.onError, i), v.reject(i), n.stop()
            }, e(g).triggerHandler(h.onStarting), s = a.transports._logic.prepareQueryString(g, s), g.log("Negotiating with '" + s + "'."), g._.negotiateRequest = function () {
                var t, n, i, l = 0,
                    c = [],
                    d = [],
                    f = function (e, t) {
                        var n, i = a.transports._logic.prepareQueryString(e, e.url + "/negotiate");
                        return e.log("Negotiating with '" + i + "'."), n = {
                            url: i,
                            error: function (t, n) {
                                n !== u ? p(t, e) : v.reject(a._.error(o.stoppedWhileNegotiating, null, e._.negotiateRequest))
                            },
                            success: t
                        }, e.accessToken && (n.headers = {
                            Authorization: "Bearer " + e.accessToken
                        }), a.transports._logic.ajax(e, n)
                    },
                    y = function (u) {
                        try {
                            t = g._parseResponse(u)
                        } catch (s) {
                            return void p(a._.error(o.errorParsingNegotiateResponse, s), g)
                        }
                        if (t.availableTransports) return i = a._.error(o.aspnetCoreSignalrServer), e(g).triggerHandler(h.onError, [i]), void v.reject(i);
                        if (!t.ProtocolVersion || -1 === g.supportedProtocols.indexOf(t.ProtocolVersion)) return i = a._.error(a._.format(o.protocolIncompatible, g.clientProtocol, t.ProtocolVersion)), e(g).triggerHandler(h.onError, [i]), void v.reject(i);
                        if (-1 !== g.negotiateRedirectSupportedProtocols.indexOf(t.ProtocolVersion)) {
                            if (t.Error) return i = a._.error(a._.format(o.errorFromServer, t.Error)), e(g).triggerHandler(h.onError, [i]), void v.reject(i);
                            if (t.RedirectUrl) {
                                if (100 === l) return void p(a._.error(o.errorRedirectionExceedsLimit), g);
                                "auto" === m.transport && (m.transport = ["webSockets", "serverSentEvents", "longPolling"]), g.log("Received redirect to: " + t.RedirectUrl), g.accessToken = t.AccessToken;
                                var x = t.RedirectUrl.split("?", 2);
                                return b(g, x[0]), g._.redirectQs = 2 === x.length ? x[1] : null, "jsonp" === g.ajaxDataType && g.accessToken ? void p(a._.error(o.jsonpNotSupportedWithAccessToken), g) : (l++, void f(g, y))
                            }
                        }
                        n = g._.keepAliveData, g.appRelativeUrl = t.Url, g.id = t.ConnectionId, g.token = t.ConnectionToken, g.webSocketServerUrl = t.WebSocketServerUrl, g._.pollTimeout = 1e3 * t.ConnectionTimeout + 1e4, g.disconnectTimeout = 1e3 * t.DisconnectTimeout, g._.totalTransportConnectTimeout = g.transportConnectTimeout + 1e3 * t.TransportConnectTimeout, t.KeepAliveTimeout ? (n.activated = !0, n.timeout = 1e3 * t.KeepAliveTimeout, n.timeoutWarning = n.timeout * g.keepAliveWarnAt, g._.beatInterval = (n.timeout - n.timeoutWarning) / 3) : n.activated = !1, g.reconnectWindow = g.disconnectTimeout + (n.timeout || 0), e.each(a.transports, (function (e) {
                            if (0 === e.indexOf("_") || "webSockets" === e && !t.TryWebSockets) return !0;
                            d.push(e)
                        })), e.isArray(m.transport) ? e.each(m.transport, (function (t, n) {
                            e.inArray(n, d) >= 0 && c.push(n)
                        })) : "auto" === m.transport ? c = d : e.inArray(m.transport, d) >= 0 && c.push(m.transport), r(c)
                    };
                return f(g, y)
            }(), v.promise()) : (g._.deferredStartHandler = function () {
                g.start(n, i)
            }, c.bind("load", g._.deferredStartHandler), v.promise())
        },
        starting: function (t) {
            var n = this;
            return e(n).bind(h.onStarting, (function () {
                t.call(n)
            })), n
        },
        send: function (e) {
            var t = this;
            if (t.state === a.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
            if (t.state === a.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
            return t.transport.send(t, e), t
        },
        received: function (t) {
            var n = this;
            return e(n).bind(h.onReceived, (function (e, i) {
                t.call(n, i)
            })), n
        },
        stateChanged: function (t) {
            var n = this;
            return e(n).bind(h.onStateChanged, (function (e, i) {
                t.call(n, i)
            })), n
        },
        error: function (t) {
            var n = this;
            return e(n).bind(h.onError, (function (e, i, r) {
                n.lastError = i, t.call(n, i, r)
            })), n
        },
        disconnected: function (t) {
            var n = this;
            return e(n).bind(h.onDisconnect, (function () {
                t.call(n)
            })), n
        },
        connectionSlow: function (t) {
            var n = this;
            return e(n).bind(h.onConnectionSlow, (function () {
                t.call(n)
            })), n
        },
        reconnecting: function (t) {
            var n = this;
            return e(n).bind(h.onReconnecting, (function () {
                t.call(n)
            })), n
        },
        reconnected: function (t) {
            var n = this;
            return e(n).bind(h.onReconnect, (function () {
                t.call(n)
            })), n
        },
        stop: function (n, i) {
            var r = this,
                s = r._deferral;
            return r._.deferredStartHandler && c.unbind("load", r._.deferredStartHandler), delete r._.config, delete r._.deferredStartHandler, l || r._.config && !0 !== r._.config.waitForPageLoad ? r.state !== a.connectionState.disconnected ? (r.log("Stopping connection."), t.clearTimeout(r._.beatHandle), t.clearInterval(r._.pingIntervalId), r.transport && (r.transport.stop(r), !1 !== i && r.transport.abort(r, n), f(r) && a.transports._logic.stopMonitoringKeepAlive(r), r.transport = null), r._.negotiateRequest && (r._.negotiateRequest.abort(u), delete r._.negotiateRequest), r._.initHandler && r._.initHandler.stop(), delete r._deferral, delete r.messageId, delete r.groupsToken, delete r.id, delete r._.pingIntervalId, delete r._.lastMessageAt, delete r._.lastActiveAt, r._.connectingMessageBuffer.clear(), e(r).unbind(h.onStart), delete r.accessToken, delete r.protocol, delete r.host, delete r.baseUrl, delete r.wsProtocol, delete r.contentType, r.url = r._originalUrl, r._.redirectQs = null, d(r, r.state, a.connectionState.disconnected), e(r).triggerHandler(h.onDisconnect), r) : void 0 : (r.log("Stopping connection prior to negotiate."), void(s && s.reject(a._.error(o.stoppedWhileLoading))))
        },
        log: function (e) {
            ! function (e, n) {
                var i;
                !1 !== n && void 0 !== t.console && (i = "[" + (new Date).toTimeString() + "] SignalR: " + e, t.console.debug ? t.console.debug(i) : t.console.log && t.console.log(i))
            }(e, this.logging)
        }
    }, a.fn.init.prototype = a.fn, a.noConflict = function () {
        return e.connection === a && (e.connection = s), a
    }, e.connection && (s = e.connection), e.connection = e.signalR = a
}(window.jQuery, window),
function (e, t, n) {
    function i(t) {
        var n, i = t._.keepAliveData;
        t.state === s.connectionState.connected && ((n = (new Date).getTime() - t._.lastMessageAt) >= i.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."), t.transport.lostConnection(t)) : n >= i.timeoutWarning ? i.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."), e(t).triggerHandler(l.onConnectionSlow), i.userNotified = !0) : i.userNotified = !1)
    }

    function r(e, t) {
        var n = e.url + t;
        return e.transport && (n += "?transport=" + e.transport.name), a.prepareQueryString(e, n)
    }

    function o(e) {
        this.connection = e, this.startRequested = !1, this.startCompleted = !1, this.connectionStopped = !1
    }
    var a, s = e.signalR,
        l = e.signalR.events,
        c = e.signalR.changeState,
        u = "__Start Aborted__";
    s.transports = {}, o.prototype = {
        start: function (e, n, i) {
            var r = this,
                o = r.connection,
                a = !1;
            r.startRequested || r.connectionStopped ? o.log("WARNING! " + e.name + " transport cannot be started. Initialization ongoing or completed.") : (o.log(e.name + " transport starting."), e.start(o, (function () {
                a || r.initReceived(e, n)
            }), (function (t) {
                return a || (a = !0, r.transportFailed(e, t, i)), !r.startCompleted || r.connectionStopped
            })), r.transportTimeoutHandle = t.setTimeout((function () {
                a || (a = !0, o.log(e.name + " transport timed out when trying to connect."), r.transportFailed(e, void 0, i))
            }), o._.totalTransportConnectTimeout))
        },
        stop: function () {
            this.connectionStopped = !0, t.clearTimeout(this.transportTimeoutHandle), s.transports._logic.tryAbortStartRequest(this.connection)
        },
        initReceived: function (e, n) {
            var i = this,
                r = i.connection;
            i.startRequested ? r.log("WARNING! The client received multiple init messages.") : i.connectionStopped || (i.startRequested = !0, t.clearTimeout(i.transportTimeoutHandle), r.log(e.name + " transport connected. Initiating start request."), s.transports._logic.ajaxStart(r, (function () {
                i.startCompleted = !0, n()
            })))
        },
        transportFailed: function (n, i, r) {
            var o, a = this.connection,
                c = a._deferral;
            this.connectionStopped || (t.clearTimeout(this.transportTimeoutHandle), this.startRequested ? this.startCompleted || (o = s._.error(s.resources.errorDuringStartRequest, i), a.log(n.name + " transport failed during the start request. Stopping the connection."), e(a).triggerHandler(l.onError, [o]), c && c.reject(o), a.stop()) : (n.stop(a), a.log(n.name + " transport failed to connect. Attempting to fall back."), r()))
        }
    }, a = s.transports._logic = {
        ajax: function (t, n) {
            return e.ajax(e.extend(!0, {}, e.signalR.ajaxDefaults, {
                type: "GET",
                data: {},
                xhrFields: {
                    withCredentials: t.withCredentials
                },
                contentType: t.contentType,
                dataType: t.ajaxDataType
            }, n))
        },
        pingServer: function (t) {
            var n, i, r = e.Deferred();
            return t.transport ? (n = a.addQs(n = t.url + "/ping", t.qs), i = a.ajax(t, {
                url: n,
                headers: t.accessToken ? {
                    Authorization: "Bearer " + t.accessToken
                } : {},
                success: function (e) {
                    var o;
                    try {
                        o = t._parseResponse(e)
                    } catch (n) {
                        return r.reject(s._.transportError(s.resources.pingServerFailedParse, t.transport, n, i)), void t.stop()
                    }
                    "pong" === o.Response ? r.resolve() : r.reject(s._.transportError(s._.format(s.resources.pingServerFailedInvalidResponse, e), t.transport, null, i))
                },
                error: function (e) {
                    401 === e.status || 403 === e.status ? (r.reject(s._.transportError(s._.format(s.resources.pingServerFailedStatusCode, e.status), t.transport, e, i)), t.stop()) : r.reject(s._.transportError(s.resources.pingServerFailed, t.transport, e, i))
                }
            })) : r.reject(s._.transportError(s.resources.noConnectionTransport, t.transport)), r.promise()
        },
        prepareQueryString: function (e, n) {
            var i;
            return i = a.addQs(n, "clientProtocol=" + e.clientProtocol), i = a.addQs(i, "string" == typeof e._.redirectQs ? e._.redirectQs : e.qs), e.token && (i += "&connectionToken=" + t.encodeURIComponent(e.token)), e.data && (i += "&connectionData=" + t.encodeURIComponent(e.data)), i
        },
        addQs: function (t, n) {
            var i, r = -1 !== t.indexOf("?") ? "&" : "?";
            if (!n) return t;
            if ("object" == typeof n) return t + r + e.param(n);
            if ("string" == typeof n) return ("?" === (i = n.charAt(0)) || "&" === i) && (r = ""), t + r + n;
            throw new Error("Query string property must be either a string or object.")
        },
        getUrl: function (e, n, i, r, o) {
            var s = ("webSockets" === n ? "" : e.baseUrl) + e.appRelativeUrl,
                l = "transport=" + n;
            return !o && e.groupsToken && (l += "&groupsToken=" + t.encodeURIComponent(e.groupsToken)), i ? (s += r ? "/poll" : "/reconnect", !o && e.messageId && (l += "&messageId=" + t.encodeURIComponent(e.messageId))) : s += "/connect", s = a.prepareQueryString(e, s += "?" + l), e.transport && e.accessToken && ("serverSentEvents" === e.transport.name || "webSockets" === e.transport.name) && (s += "&access_token=" + t.encodeURIComponent(e.accessToken)), o || (s += "&tid=" + Math.floor(11 * Math.random())), s
        },
        maximizePersistentResponse: function (e) {
            return {
                MessageId: e.C,
                Messages: e.M,
                Initialized: void 0 !== e.S,
                ShouldReconnect: void 0 !== e.T,
                LongPollDelay: e.L,
                GroupsToken: e.G,
                Error: e.E
            }
        },
        updateGroups: function (e, t) {
            t && (e.groupsToken = t)
        },
        stringifySend: function (e, t) {
            return "string" == typeof t || null == t ? t : e.json.stringify(t)
        },
        ajaxSend: function (t, n) {
            var i, o = a.stringifySend(t, n),
                c = r(t, "/send"),
                u = function (t, r) {
                    e(r).triggerHandler(l.onError, [s._.transportError(s.resources.sendFailed, r.transport, t, i), n])
                };
            return i = a.ajax(t, {
                url: c,
                type: "jsonp" === t.ajaxDataType ? "GET" : "POST",
                contentType: s._.defaultContentType,
                headers: t.accessToken ? {
                    Authorization: "Bearer " + t.accessToken
                } : {},
                data: {
                    data: o
                },
                success: function (e) {
                    var n;
                    if (e) {
                        try {
                            n = t._parseResponse(e)
                        } catch (s) {
                            return u(s, t), void t.stop()
                        }
                        a.triggerReceived(t, n)
                    }
                },
                error: function (e, n) {
                    "abort" !== n && "parsererror" !== n && u(e, t)
                }
            })
        },
        ajaxAbort: function (e, t) {
            if (void 0 !== e.transport) {
                t = void 0 === t || t;
                var n = r(e, "/abort");
                a.ajax(e, {
                    url: n,
                    async: t,
                    timeout: 1e3,
                    type: "POST",
                    headers: e.accessToken ? {
                        Authorization: "Bearer " + e.accessToken
                    } : {},
                    dataType: "text"
                }), e.log("Fired ajax abort async = " + t + ".")
            }
        },
        ajaxStart: function (t, n) {
            var i = function (e) {
                    var n = t._deferral;
                    n && n.reject(e)
                },
                o = function (n) {
                    t.log("The start request failed. Stopping the connection."), e(t).triggerHandler(l.onError, [n]), i(n), t.stop()
                };
            t._.startRequest = a.ajax(t, {
                url: r(t, "/start"),
                headers: t.accessToken ? {
                    Authorization: "Bearer " + t.accessToken
                } : {},
                success: function (e, i, r) {
                    var a;
                    try {
                        a = t._parseResponse(e)
                    } catch (u) {
                        return void o(s._.error(s._.format(s.resources.errorParsingStartResponse, e), u, r))
                    }
                    "started" === a.Response ? n() : o(s._.error(s._.format(s.resources.invalidStartResponse, e), null, r))
                },
                error: function (e, n, r) {
                    n !== u ? o(s._.error(s.resources.errorDuringStartRequest, r, e)) : (t.log("The start request aborted because connection.stop() was called."), i(s._.error(s.resources.stoppedDuringStartRequest, null, e)))
                }
            })
        },
        tryAbortStartRequest: function (e) {
            e._.startRequest && (e._.startRequest.abort(u), delete e._.startRequest)
        },
        tryInitialize: function (e, t, n) {
            t.Initialized && n ? n() : t.Initialized && e.log("WARNING! The client received an init message after reconnecting.")
        },
        triggerReceived: function (t, n) {
            t._.connectingMessageBuffer.tryBuffer(n) || e(t).triggerHandler(l.onReceived, [n])
        },
        processMessages: function (t, n, i) {
            var r;
            if (n && void 0 !== n.I) a.triggerReceived(t, n);
            else if (a.markLastMessage(t), n) {
                if ((r = a.maximizePersistentResponse(n)).Error) return t.log("Received an error message from the server: " + n.E), e(t).triggerHandler(s.events.onError, [s._.error(n.E, "ServerError")]), void t.stop(!1, !1);
                a.updateGroups(t, r.GroupsToken), r.MessageId && (t.messageId = r.MessageId), r.Messages && (e.each(r.Messages, (function (e, n) {
                    a.triggerReceived(t, n)
                })), a.tryInitialize(t, r, i))
            }
        },
        monitorKeepAlive: function (t) {
            var n = t._.keepAliveData;
            n.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (n.monitoring = !0, a.markLastMessage(t), t._.keepAliveData.reconnectKeepAliveUpdate = function () {
                a.markLastMessage(t)
            }, e(t).bind(l.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + n.timeoutWarning + ", keep alive timeout of " + n.timeout + " and disconnecting timeout of " + t.disconnectTimeout))
        },
        stopMonitoringKeepAlive: function (t) {
            var n = t._.keepAliveData;
            n.monitoring && (n.monitoring = !1, e(t).unbind(l.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t._.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive."))
        },
        startHeartbeat: function (e) {
            e._.lastActiveAt = (new Date).getTime(),
                function e(n) {
                    n._.keepAliveData.monitoring && i(n), a.markActive(n) && (n._.beatHandle = t.setTimeout((function () {
                        e(n)
                    }), n._.beatInterval))
                }(e)
        },
        markLastMessage: function (e) {
            e._.lastMessageAt = (new Date).getTime()
        },
        markActive: function (e) {
            return !!a.verifyLastActive(e) && (e._.lastActiveAt = (new Date).getTime(), !0)
        },
        isConnectedOrReconnecting: function (e) {
            return e.state === s.connectionState.connected || e.state === s.connectionState.reconnecting
        },
        ensureReconnectingState: function (t) {
            return !0 === c(t, s.connectionState.connected, s.connectionState.reconnecting) && e(t).triggerHandler(l.onReconnecting), t.state === s.connectionState.reconnecting
        },
        clearReconnectTimeout: function (e) {
            e && e._.reconnectTimeout && (t.clearTimeout(e._.reconnectTimeout), delete e._.reconnectTimeout)
        },
        verifyLastActive: function (t) {
            if ((new Date).getTime() - t._.lastActiveAt >= t.reconnectWindow) {
                var n = s._.format(s.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow);
                return t.log(n), e(t).triggerHandler(l.onError, [s._.error(n, "TimeoutException")]), t.stop(!1, !1), !1
            }
            return !0
        },
        reconnect: function (e, n) {
            var i = s.transports[n];
            if (a.isConnectedOrReconnecting(e) && !e._.reconnectTimeout) {
                if (!a.verifyLastActive(e)) return;
                e._.reconnectTimeout = t.setTimeout((function () {
                    a.verifyLastActive(e) && (i.stop(e), a.ensureReconnectingState(e) && (e.log(n + " reconnecting."), i.start(e)))
                }), e.reconnectDelay)
            }
        },
        handleParseFailure: function (t, n, i, r, o) {
            var a = s._.transportError(s._.format(s.resources.parseFailed, n), t.transport, i, o);
            r && r(a) ? t.log("Failed to parse server response while attempting to connect.") : (e(t).triggerHandler(l.onError, [a]), t.stop())
        },
        initHandler: function (e) {
            return new o(e)
        },
        foreverFrame: {
            count: 0,
            connections: {}
        }
    }
}(window.jQuery, window),
function (e, t) {
    var n = e.signalR,
        i = e.signalR.events,
        r = e.signalR.changeState,
        o = n.transports._logic;
    n.transports.webSockets = {
        name: "webSockets",
        supportsKeepAlive: function () {
            return !0
        },
        send: function (t, r) {
            var a = o.stringifySend(t, r);
            try {
                t.socket.send(a)
            } catch (s) {
                e(t).triggerHandler(i.onError, [n._.transportError(n.resources.webSocketsInvalidState, t.transport, s, t.socket), r])
            }
        },
        start: function (a, s, l) {
            var c, u = !1,
                h = this,
                d = !s,
                f = e(a);
            t.WebSocket ? a.socket || (c = a.webSocketServerUrl ? a.webSocketServerUrl : a.wsProtocol + a.host, c += o.getUrl(a, this.name, d), a.log("Connecting to websocket endpoint '" + c + "'."), a.socket = new t.WebSocket(c), a.socket.onopen = function () {
                u = !0, a.log("Websocket opened."), o.clearReconnectTimeout(a), !0 === r(a, n.connectionState.reconnecting, n.connectionState.connected) && f.triggerHandler(i.onReconnect)
            }, a.socket.onclose = function (t) {
                var r;
                this === a.socket && (u && void 0 !== t.wasClean && !1 === t.wasClean ? (r = n._.transportError(n.resources.webSocketClosed, a.transport, t), a.log("Unclean disconnect from websocket: " + (t.reason || "[no reason given]."))) : a.log("Websocket closed."), l && l(r) || (r && e(a).triggerHandler(i.onError, [r]), h.reconnect(a)))
            }, a.socket.onmessage = function (e) {
                var t;
                try {
                    t = a._parseResponse(e.data)
                } catch (n) {
                    return void o.handleParseFailure(a, e.data, n, l, e)
                }
                t && o.processMessages(a, t, s)
            }) : l()
        },
        reconnect: function (e) {
            o.reconnect(e, this.name)
        },
        lostConnection: function (e) {
            this.reconnect(e)
        },
        stop: function (e) {
            o.clearReconnectTimeout(e), e.socket && (e.log("Closing the Websocket."), e.socket.close(), e.socket = null)
        },
        abort: function (e, t) {
            o.ajaxAbort(e, t)
        }
    }
}(window.jQuery, window),
function (e, t) {
    var n = e.signalR,
        i = e.signalR.events,
        r = e.signalR.changeState,
        o = n.transports._logic,
        a = function (e) {
            t.clearTimeout(e._.reconnectAttemptTimeoutHandle), delete e._.reconnectAttemptTimeoutHandle
        };
    n.transports.serverSentEvents = {
        name: "serverSentEvents",
        supportsKeepAlive: function () {
            return !0
        },
        timeOut: 3e3,
        start: function (s, l, c) {
            var u, h = this,
                d = !1,
                f = e(s),
                p = !l;
            if (s.eventSource && (s.log("The connection already has an event source. Stopping it."), s.stop()), t.EventSource) {
                u = o.getUrl(s, this.name, p);
                try {
                    s.log("Attempting to connect to SSE endpoint '" + u + "'."), s.eventSource = new t.EventSource(u, {
                        withCredentials: s.withCredentials
                    })
                } catch (g) {
                    return s.log("EventSource failed trying to connect with error " + g.Message + "."), void(c ? c() : (f.triggerHandler(i.onError, [n._.transportError(n.resources.eventSourceFailedToConnect, s.transport, g)]), p && h.reconnect(s)))
                }
                p && (s._.reconnectAttemptTimeoutHandle = t.setTimeout((function () {
                    !1 === d && s.eventSource.readyState !== t.EventSource.OPEN && h.reconnect(s)
                }), h.timeOut)), s.eventSource.addEventListener("open", (function () {
                    s.log("EventSource connected."), a(s), o.clearReconnectTimeout(s), !1 === d && (d = !0, !0 === r(s, n.connectionState.reconnecting, n.connectionState.connected) && f.triggerHandler(i.onReconnect))
                }), !1), s.eventSource.addEventListener("message", (function (e) {
                    var t;
                    if ("initialized" !== e.data) {
                        try {
                            t = s._parseResponse(e.data)
                        } catch (n) {
                            return void o.handleParseFailure(s, e.data, n, c, e)
                        }
                        o.processMessages(s, t, l)
                    }
                }), !1), s.eventSource.addEventListener("error", (function (e) {
                    var r = n._.transportError(n.resources.eventSourceError, s.transport, e);
                    this === s.eventSource && (c && c(r) || (s.log("EventSource readyState: " + s.eventSource.readyState + "."), e.eventPhase === t.EventSource.CLOSED ? (s.log("EventSource reconnecting due to the server connection ending."), h.reconnect(s)) : (s.log("EventSource error."), f.triggerHandler(i.onError, [r]))))
                }), !1)
            } else c && (s.log("This browser doesn't support SSE."), c())
        },
        reconnect: function (e) {
            o.reconnect(e, this.name)
        },
        lostConnection: function (e) {
            this.reconnect(e)
        },
        send: function (e, t) {
            o.ajaxSend(e, t)
        },
        stop: function (e) {
            a(e), o.clearReconnectTimeout(e), e && e.eventSource && (e.log("EventSource calling close()."), e.eventSource.close(), e.eventSource = null, delete e.eventSource)
        },
        abort: function (e, t) {
            o.ajaxAbort(e, t)
        }
    }
}(window.jQuery, window),
function (e, t) {
    var n = e.signalR,
        i = e.signalR.events,
        r = e.signalR.changeState,
        o = n.transports._logic,
        a = function () {
            var e = t.document.createElement("iframe");
            return e.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"), e
        },
        s = function () {
            var e = null,
                i = 0;
            return {
                prevent: function () {
                    n._.ieVersion <= 8 && (0 === i && (e = t.setInterval((function () {
                        var e = a();
                        t.document.body.appendChild(e), t.document.body.removeChild(e), e = null
                    }), 1e3)), i++)
                },
                cancel: function () {
                    1 === i && t.clearInterval(e), i > 0 && i--
                }
            }
        }();
    n.transports.foreverFrame = {
        name: "foreverFrame",
        supportsKeepAlive: function () {
            return !0
        },
        iframeClearThreshold: 50,
        start: function (e, n, i) {
            if (e.accessToken) i && (e.log("Forever Frame does not support connections that require a Bearer token to connect, such as the Azure SignalR Service."), i());
            else {
                var r, l = this,
                    c = o.foreverFrame.count += 1,
                    u = a(),
                    h = function () {
                        e.log("Forever frame iframe finished loading and is no longer receiving messages."), i && i() || l.reconnect(e)
                    };
                t.EventSource ? i && (e.log("Forever Frame is not supported by SignalR on browsers with SSE support."), i()) : (u.setAttribute("data-signalr-connection-id", e.id), s.prevent(), r = o.getUrl(e, this.name), r += "&frameId=" + c, t.document.documentElement.appendChild(u), e.log("Binding to iframe's load event."), u.addEventListener ? u.addEventListener("load", h, !1) : u.attachEvent && u.attachEvent("onload", h), u.src = r, o.foreverFrame.connections[c] = e, e.frame = u, e.frameId = c, n && (e.onSuccess = function () {
                    e.log("Iframe transport started."), n()
                }))
            }
        },
        reconnect: function (e) {
            var n = this;
            o.isConnectedOrReconnecting(e) && o.verifyLastActive(e) && t.setTimeout((function () {
                if (o.verifyLastActive(e) && e.frame && o.ensureReconnectingState(e)) {
                    var t = e.frame,
                        i = o.getUrl(e, n.name, !0) + "&frameId=" + e.frameId;
                    e.log("Updating iframe src to '" + i + "'."), t.src = i
                }
            }), e.reconnectDelay)
        },
        lostConnection: function (e) {
            this.reconnect(e)
        },
        send: function (e, t) {
            o.ajaxSend(e, t)
        },
        receive: function (t, i) {
            var r, a, s;
            if (t.json !== t._originalJson && (i = t._originalJson.stringify(i)), s = t._parseResponse(i), o.processMessages(t, s, t.onSuccess), t.state === e.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > n.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0, (r = t.frame.contentWindow || t.frame.contentDocument) && r.document && r.document.body)))
                for (a = r.document.body; a.firstChild;) a.removeChild(a.firstChild)
        },
        stop: function (e) {
            var n = null;
            if (s.cancel(), e.frame) {
                if (e.frame.stop) e.frame.stop();
                else try {
                    (n = e.frame.contentWindow || e.frame.contentDocument).document && n.document.execCommand && n.document.execCommand("Stop")
                } catch (a) {
                    e.log("Error occurred when stopping foreverFrame transport. Message = " + a.message + ".")
                }
                e.frame.parentNode === t.document.documentElement && t.document.documentElement.removeChild(e.frame), delete o.foreverFrame.connections[e.frameId], e.frame = null, e.frameId = null, delete e.frame, delete e.frameId, delete e.onSuccess, delete e.frameMessageCount, e.log("Stopping forever frame.")
            }
        },
        abort: function (e, t) {
            o.ajaxAbort(e, t)
        },
        getConnection: function (e) {
            return o.foreverFrame.connections[e]
        },
        started: function (t) {
            !0 === r(t, n.connectionState.reconnecting, n.connectionState.connected) && e(t).triggerHandler(i.onReconnect)
        }
    }
}(window.jQuery, window),
function (e, t) {
    var n = e.signalR,
        i = e.signalR.events,
        r = e.signalR.changeState,
        o = e.signalR.isDisconnecting,
        a = n.transports._logic;
    n.transports.longPolling = {
        name: "longPolling",
        supportsKeepAlive: function () {
            return !1
        },
        reconnectDelay: 3e3,
        start: function (s, l, c) {
            var u = this,
                h = function () {
                    h = e.noop, s.log("LongPolling connected."), l ? l() : s.log("WARNING! The client received an init message after reconnecting.")
                },
                d = function (e) {
                    return !!c(e) && (s.log("LongPolling failed to connect."), !0)
                },
                f = s._,
                p = 0,
                g = function (o) {
                    t.clearTimeout(f.reconnectTimeoutId), f.reconnectTimeoutId = null, !0 === r(o, n.connectionState.reconnecting, n.connectionState.connected) && (o.log("Raising the reconnect event"), e(o).triggerHandler(i.onReconnect))
                };
            s.pollXhr && (s.log("Polling xhr requests already exists, aborting."), s.stop()), s.messageId = null, f.reconnectTimeoutId = null, f.pollTimeoutId = t.setTimeout((function () {
                ! function r(l, c) {
                    var m = !(null === l.messageId),
                        v = a.getUrl(l, u.name, m, !c, !0),
                        y = {};
                    l.messageId && (y.messageId = l.messageId), l.groupsToken && (y.groupsToken = l.groupsToken), !0 !== o(l) && (s.log("Opening long polling request to '" + v + "'."), l.pollXhr = a.ajax(s, {
                        xhrFields: {
                            onprogress: function () {
                                a.markLastMessage(s)
                            }
                        },
                        url: v,
                        type: "POST",
                        contentType: n._.defaultContentType,
                        data: y,
                        timeout: s._.pollTimeout,
                        headers: s.accessToken ? {
                            Authorization: "Bearer " + s.accessToken
                        } : {},
                        success: function (n) {
                            var i, c, u, m = 0;
                            s.log("Long poll complete."), p = 0;
                            try {
                                i = s._parseResponse(n)
                            } catch (y) {
                                return void a.handleParseFailure(l, n, y, d, l.pollXhr)
                            }
                            null !== f.reconnectTimeoutId && g(l), i && (c = a.maximizePersistentResponse(i)), a.processMessages(l, i, h), c && "number" === e.type(c.LongPollDelay) && (m = c.LongPollDelay), !0 !== o(l) && (!(u = c && c.ShouldReconnect) || a.ensureReconnectingState(l)) && (m > 0 ? f.pollTimeoutId = t.setTimeout((function () {
                                r(l, u)
                            }), m) : r(l, u))
                        },
                        error: function (o, c) {
                            var h = n._.transportError(n.resources.longPollFailed, s.transport, o, l.pollXhr);
                            if (t.clearTimeout(f.reconnectTimeoutId), f.reconnectTimeoutId = null, "abort" !== c) {
                                if (!d(h)) {
                                    if (p++, s.state !== n.connectionState.reconnecting && (s.log("An error occurred using longPolling. Status = " + c + ".  Response = " + o.responseText + "."), e(l).triggerHandler(i.onError, [h])), (s.state === n.connectionState.connected || s.state === n.connectionState.reconnecting) && !a.verifyLastActive(s)) return;
                                    if (!a.ensureReconnectingState(l)) return;
                                    f.pollTimeoutId = t.setTimeout((function () {
                                        r(l, !0)
                                    }), u.reconnectDelay)
                                }
                            } else s.log("Aborted xhr request.")
                        }
                    }), m && !0 === c && (f.reconnectTimeoutId = t.setTimeout((function () {
                        g(l)
                    }), Math.min(1e3 * (Math.pow(2, p) - 1), 36e5))))
                }(s)
            }), 250)
        },
        lostConnection: function (e) {
            e.pollXhr && e.pollXhr.abort("lostConnection")
        },
        send: function (e, t) {
            a.ajaxSend(e, t)
        },
        stop: function (e) {
            t.clearTimeout(e._.pollTimeoutId), t.clearTimeout(e._.reconnectTimeoutId), delete e._.pollTimeoutId, delete e._.reconnectTimeoutId, e.pollXhr && (e.pollXhr.abort(), e.pollXhr = null, delete e.pollXhr)
        },
        abort: function (e, t) {
            a.ajaxAbort(e, t)
        }
    }
}(window.jQuery, window),
function (e) {
    function t(e) {
        return e + u
    }

    function n(e, t, n) {
        for (var i = e.length, r = [], o = 0; o < i; o += 1) e.hasOwnProperty(o) && (r[o] = t.call(n, e[o], o, e));
        return r
    }

    function i(t) {
        return e.isFunction(t) || "undefined" === e.type(t) ? null : t
    }

    function r(e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) return !0;
        return !1
    }

    function o(e, t) {
        var n, i, o = e._.invocationCallbacks;
        for (i in r(o) && e.log("Clearing hub invocation callbacks with error: " + t + "."), e._.invocationCallbackId = 0, delete e._.invocationCallbacks, e._.invocationCallbacks = {}, o)(n = o[i]).method.call(n.scope, {
            E: t
        })
    }

    function a(t) {
        return e.isFunction(t) && t.toString().slice(0, 256).indexOf("// Call the client hub method") >= 0
    }

    function s(e, t) {
        return new s.fn.init(e, t)
    }

    function l(t, n) {
        var i = {
            qs: null,
            logging: !1,
            useDefaultPath: !0
        };
        return e.extend(i, n), (!t || i.useDefaultPath) && (t = (t || "") + "/signalr"), new l.fn.init(t, i)
    }
    var c = 0,
        u = ".hubProxy",
        h = e.signalR;
    (s.fn = s.prototype = {
        init: function (e, t) {
            this.state = {}, this.connection = e, this.hubName = t, this._ = {
                callbackMap: {}
            }
        },
        constructor: s,
        hasSubscriptions: function () {
            return r(this._.callbackMap)
        },
        on: function (n, i, r) {
            var o, s, l, u, h = this,
                d = h._.callbackMap,
                f = !r && a(i);
            for ((r = r || i)._signalRGuid || (r._signalRGuid = c++), (o = d[n = n.toLowerCase()]) || (d[n] = o = []), l = 0; l < o.length; l++)(o[l].guid === r._signalRGuid || f && o[l].isFromOldGeneratedHubProxy) && (s = o[l]);
            return s || d[n].push(s = {
                guid: r._signalRGuid,
                eventHandlers: [],
                isFromOldGeneratedHubProxy: f
            }), s.eventHandlers.push(u = function (e, t) {
                i.apply(h, t)
            }), e(h).bind(t(n), u), h
        },
        off: function (n, i, r) {
            var o, s, l, c, u = this,
                h = u._.callbackMap,
                d = !r && a(i);
            if (r = r || i, o = h[n = n.toLowerCase()])
                if (i) {
                    for (l = 0; l < o.length; l++)(o[l].guid === r._signalRGuid || d && o[l].isFromOldGeneratedHubProxy) && (s = o[l]);
                    if (s) {
                        for (c = 0; c < s.eventHandlers.length; c++) e(u).unbind(t(n), s.eventHandlers[c]);
                        o.splice(l, 1), 0 === o.length && delete h[n]
                    }
                } else i || (e(u).unbind(t(n)), delete h[n]);
            return u
        },
        invoke: function (t) {
            var r = this,
                o = r.connection,
                a = e.makeArray(arguments).slice(1),
                s = n(a, i),
                l = {
                    H: r.hubName,
                    M: t,
                    A: s,
                    I: o._.invocationCallbackId
                },
                c = e.Deferred(),
                u = function (n) {
                    var i, a = r._maximizeHubResponse(n);
                    e.extend(r.state, a.State), a.Progress ? c.notifyWith ? c.notifyWith(r, [a.Progress.Data]) : o._.progressjQueryVersionLogged || (o.log("A hub method invocation progress update was received but the version of jQuery in use (" + e.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."), o._.progressjQueryVersionLogged = !0) : a.Error ? (a.StackTrace && o.log(a.Error + "\n" + a.StackTrace + "."), (i = h._.error(a.Error, a.IsHubException ? "HubException" : "Exception")).data = a.ErrorData, o.log(r.hubName + "." + t + " failed to execute. Error: " + i.message), c.rejectWith(r, [i])) : (o.log("Invoked " + r.hubName + "." + t), c.resolveWith(r, [a.Result]))
                };
            return o._.invocationCallbacks[o._.invocationCallbackId.toString()] = {
                scope: r,
                method: u
            }, o._.invocationCallbackId += 1, e.isEmptyObject(r.state) || (l.S = r.state), o.log("Invoking " + r.hubName + "." + t), o.send(l), c.promise()
        },
        _maximizeHubResponse: function (e) {
            return {
                State: e.S,
                Result: e.R,
                Progress: e.P ? {
                    Id: e.P.I,
                    Data: e.P.D
                } : null,
                Id: e.I,
                IsHubException: e.H,
                Error: e.E,
                StackTrace: e.T,
                ErrorData: e.D
            }
        }
    }).init.prototype = s.fn, (l.fn = l.prototype = e.connection()).init = function (n, i) {
        var r = {
                qs: null,
                logging: !1,
                useDefaultPath: !0
            },
            a = this;
        e.extend(r, i), e.signalR.fn.init.call(a, n, r.qs, r.logging), a.proxies = {}, a._.invocationCallbackId = 0, a._.invocationCallbacks = {}, a.received((function (n) {
            var i, r, o, s, l, c;
            n && (void 0 !== n.P ? (o = n.P.I.toString(), (s = a._.invocationCallbacks[o]) && s.method.call(s.scope, n)) : void 0 !== n.I ? (o = n.I.toString(), (s = a._.invocationCallbacks[o]) && (a._.invocationCallbacks[o] = null, delete a._.invocationCallbacks[o], s.method.call(s.scope, n))) : (i = this._maximizeClientHubInvocation(n), a.log("Triggering client hub event '" + i.Method + "' on hub '" + i.Hub + "'."), l = i.Hub.toLowerCase(), c = i.Method.toLowerCase(), e.extend((r = this.proxies[l]).state, i.State), e(r).triggerHandler(t(c), [i.Args])))
        })), a.error((function (e, t) {
            var n, i;
            t && (i = a._.invocationCallbacks[n = t.I]) && (a._.invocationCallbacks[n] = null, delete a._.invocationCallbacks[n], i.method.call(i.scope, {
                E: e
            }))
        })), a.reconnecting((function () {
            a.transport && "webSockets" === a.transport.name && o(a, "Connection started reconnecting before invocation result was received.")
        })), a.disconnected((function () {
            o(a, "Connection was disconnected before invocation result was received.")
        }))
    }, l.fn._maximizeClientHubInvocation = function (e) {
        return {
            Hub: e.H,
            Method: e.M,
            Args: e.A,
            State: e.S
        }
    }, l.fn._registerSubscribedHubs = function () {
        var t = this;
        t._subscribedToHubs || (t._subscribedToHubs = !0, t.starting((function () {
            var n = [];
            e.each(t.proxies, (function (e) {
                this.hasSubscriptions() && (n.push({
                    name: e
                }), t.log("Client subscribed to hub '" + e + "'."))
            })), 0 === n.length && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to."), t.data = t.json.stringify(n)
        })))
    }, l.fn.createHubProxy = function (e) {
        e = e.toLowerCase();
        var t = this.proxies[e];
        return t || (t = s(this, e), this.proxies[e] = t), this._registerSubscribedHubs(), t
    }, l.fn.init.prototype = l.fn, e.hubConnection = l
}(window.jQuery, window), window.jQuery.signalR.version = "2.4.1",
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
    }(this, (function (e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function (t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
        var l = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var n = t(e).css("transition-duration"),
                    i = t(e).css("transition-delay"),
                    r = parseFloat(n),
                    o = parseFloat(i);
                return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
            },
            reflow: function (e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function (e) {
                t(e).trigger("transitionend")
            },
            supportsTransitionEnd: function () {
                return Boolean("transitionend")
            },
            isElement: function (e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = t[i],
                            a = o && l.isElement(o) ? "element" : null === (s = o) || void 0 === s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                    } var s
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null
            },
            jQueryDetection: function () {
                if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        l.jQueryDetection(), t.fn.emulateTransitionEnd = function (e) {
            var n = this,
                i = !1;
            return t(this).one(l.TRANSITION_END, (function () {
                i = !0
            })), setTimeout((function () {
                i || l.triggerTransitionEnd(n)
            }), e), this
        }, t.event.special[l.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var c = "alert",
            u = t.fn[c],
            h = function () {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.alert"), this._element = null
                }, n._getRootElement = function (e) {
                    var n = l.getSelectorFromElement(e),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
                }, n._triggerCloseEvent = function (e) {
                    var n = t.Event("close.bs.alert");
                    return t(e).trigger(n), n
                }, n._removeElement = function (e) {
                    var n = this;
                    if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                        var i = l.getTransitionDurationFromElement(e);
                        t(e).one(l.TRANSITION_END, (function (t) {
                            return n._destroyElement(e, t)
                        })).emulateTransitionEnd(i)
                    } else this._destroyElement(e)
                }, n._destroyElement = function (e) {
                    t(e).detach().trigger("closed.bs.alert").remove()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.alert");
                        r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                    }))
                }, e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }]), e
            }();
        t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h)), t.fn[c] = h._jQueryInterface, t.fn[c].Constructor = h, t.fn[c].noConflict = function () {
            return t.fn[c] = u, h._jQueryInterface
        };
        var d = t.fn.button,
            f = function () {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.toggle = function () {
                    var e = !0,
                        n = !0,
                        i = t(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var r = this._element.querySelector('input:not([type="hidden"])');
                        if (r) {
                            if ("radio" === r.type)
                                if (r.checked && this._element.classList.contains("active")) e = !1;
                                else {
                                    var o = i.querySelector(".active");
                                    o && t(o).removeClass("active")
                                } e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), t(r).trigger("change")), r.focus(), n = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.button"), this._element = null
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.button");
                        i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }]), e
            }();
        t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var n = e.target,
                i = n;
            if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
            else {
                var r = n.querySelector('input:not([type="hidden"])');
                if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
                "LABEL" === i.tagName && r && "checkbox" === r.type && e.preventDefault(), f._jQueryInterface.call(t(n), "toggle")
            }
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var n = t(e.target).closest(".btn")[0];
            t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
        })), t(window).on("load.bs.button.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                var i = e[t],
                    r = i.querySelector('input:not([type="hidden"])');
                r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
            }
            for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
                var s = e[o];
                "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active")
            }
        })), t.fn.button = f._jQueryInterface, t.fn.button.Constructor = f, t.fn.button.noConflict = function () {
            return t.fn.button = d, f._jQueryInterface
        };
        var p = "carousel",
            g = t.fn[p],
            m = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            v = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            y = {
                TOUCH: "touch",
                PEN: "pen"
            },
            b = function () {
                function e(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var n = e.prototype;
                return n.next = function () {
                    this._isSliding || this._slide("next")
                }, n.nextWhenVisible = function () {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }, n.prev = function () {
                    this._isSliding || this._slide("prev")
                }, n.pause = function (e) {
                    e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, n.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, n.to = function (e) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) t(this._element).one("slid.bs.carousel", (function () {
                            return n.to(e)
                        }));
                        else {
                            if (i === e) return this.pause(), void this.cycle();
                            this._slide(e > i ? "next" : "prev", this._items[e])
                        }
                }, n.dispose = function () {
                    t(this._element).off(".bs.carousel"), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, n._getConfig = function (e) {
                    return e = s(s({}, m), e), l.typeCheckConfig(p, e, v), e
                }, n._handleSwipe = function () {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                    }
                }, n._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function (t) {
                        return e._keydown(t)
                    })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function (t) {
                        return e.pause(t)
                    })).on("mouseleave.bs.carousel", (function (t) {
                        return e.cycle(t)
                    })), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var n = function (t) {
                                e._pointerEvent && y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                            },
                            i = function (t) {
                                e._pointerEvent && y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                                    return e.cycle(t)
                                }), 500 + e._config.interval))
                            };
                        t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (e) {
                            return e.preventDefault()
                        })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function (e) {
                            return n(e)
                        })), t(this._element).on("pointerup.bs.carousel", (function (e) {
                            return i(e)
                        })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function (e) {
                            return n(e)
                        })), t(this._element).on("touchmove.bs.carousel", (function (t) {
                            return function (t) {
                                e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                            }(t)
                        })), t(this._element).on("touchend.bs.carousel", (function (e) {
                            return i(e)
                        })))
                    }
                }, n._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function (e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                }, n._getItemByDirection = function (e, t) {
                    var n = "next" === e,
                        i = "prev" === e,
                        r = this._getItemIndex(t);
                    if ((i && 0 === r || n && r === this._items.length - 1) && !this._config.wrap) return t;
                    var o = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                    return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                }, n._triggerSlideEvent = function (e, n) {
                    var i = this._getItemIndex(e),
                        r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        o = t.Event("slide.bs.carousel", {
                            relatedTarget: e,
                            direction: n,
                            from: r,
                            to: i
                        });
                    return t(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        t(n).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(e)];
                        i && t(i).addClass("active")
                    }
                }, n._slide = function (e, n) {
                    var i, r, o, a = this,
                        s = this._element.querySelector(".active.carousel-item"),
                        c = this._getItemIndex(s),
                        u = n || s && this._getItemByDirection(e, s),
                        h = this._getItemIndex(u),
                        d = Boolean(this._interval);
                    if ("next" === e ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), u && t(u).hasClass("active")) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
                        var f = t.Event("slid.bs.carousel", {
                            relatedTarget: u,
                            direction: o,
                            from: c,
                            to: h
                        });
                        if (t(this._element).hasClass("slide")) {
                            t(u).addClass(r), l.reflow(u), t(s).addClass(i), t(u).addClass(i);
                            var p = parseInt(u.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var g = l.getTransitionDurationFromElement(s);
                            t(s).one(l.TRANSITION_END, (function () {
                                t(u).removeClass(i + " " + r).addClass("active"), t(s).removeClass("active " + r + " " + i), a._isSliding = !1, setTimeout((function () {
                                    return t(a._element).trigger(f)
                                }), 0)
                            })).emulateTransitionEnd(g)
                        } else t(s).removeClass("active"), t(u).addClass("active"), this._isSliding = !1, t(this._element).trigger(f);
                        d && this.cycle()
                    }
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.carousel"),
                            r = s(s({}, m), t(this).data());
                        "object" == typeof n && (r = s(s({}, r), n));
                        var o = "string" == typeof n ? n : r.slide;
                        if (i || (i = new e(this, r), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                        else if ("string" == typeof o) {
                            if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                            i[o]()
                        } else r.interval && r.ride && (i.pause(), i.cycle())
                    }))
                }, e._dataApiClickHandler = function (n) {
                    var i = l.getSelectorFromElement(this);
                    if (i) {
                        var r = t(i)[0];
                        if (r && t(r).hasClass("carousel")) {
                            var o = s(s({}, t(r).data()), t(this).data()),
                                a = this.getAttribute("data-slide-to");
                            a && (o.interval = !1), e._jQueryInterface.call(t(r), o), a && t(r).data("bs.carousel").to(a), n.preventDefault()
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return m
                    }
                }]), e
            }();
        t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", b._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
                var r = t(e[n]);
                b._jQueryInterface.call(r, r.data())
            }
        })), t.fn[p] = b._jQueryInterface, t.fn[p].Constructor = b, t.fn[p].noConflict = function () {
            return t.fn[p] = g, b._jQueryInterface
        };
        var x = "collapse",
            w = t.fn[x],
            T = {
                toggle: !0,
                parent: ""
            },
            C = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            S = function () {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            a = l.getSelectorFromElement(o),
                            s = [].slice.call(document.querySelectorAll(a)).filter((function (t) {
                                return t === e
                            }));
                        null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var n = e.prototype;
                return n.toggle = function () {
                    t(this._element).hasClass("show") ? this.hide() : this.show()
                }, n.show = function () {
                    var n, i, r = this;
                    if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
                            return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse")
                        }))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                        var o = t.Event("show.bs.collapse");
                        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                            var a = this._getDimension();
                            t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                            var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                c = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, (function () {
                                t(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(c), this._element.style[a] = this._element[s] + "px"
                        }
                    }
                }, n.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass("show")) {
                        var n = t.Event("hide.bs.collapse");
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", l.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                            var r = this._triggerArray.length;
                            if (r > 0)
                                for (var o = 0; o < r; o++) {
                                    var a = this._triggerArray[o],
                                        s = l.getSelectorFromElement(a);
                                    null !== s && (t([].slice.call(document.querySelectorAll(s))).hasClass("show") || t(a).addClass("collapsed").attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[i] = "";
                            var c = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, (function () {
                                e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(c)
                        }
                    }
                }, n.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, n._getConfig = function (e) {
                    return (e = s(s({}, T), e)).toggle = Boolean(e.toggle), l.typeCheckConfig(x, e, C), e
                }, n._getDimension = function () {
                    return t(this._element).hasClass("width") ? "width" : "height"
                }, n._getParent = function () {
                    var n, i = this;
                    l.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var r = [].slice.call(n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
                    return t(r).each((function (t, n) {
                        i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                    })), n
                }, n._addAriaAndCollapsedClass = function (e, n) {
                    var i = t(e).hasClass("show");
                    n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
                }, e._getTargetFromElement = function (e) {
                    var t = l.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.collapse"),
                            o = s(s(s({}, T), i.data()), "object" == typeof n && n ? n : {});
                        if (!r && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), r || (r = new e(this, o), i.data("bs.collapse", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return T
                    }
                }]), e
            }();
        t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this),
                i = l.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            t(r).each((function () {
                var e = t(this),
                    i = e.data("bs.collapse") ? "toggle" : n.data();
                S._jQueryInterface.call(e, i)
            }))
        })), t.fn[x] = S._jQueryInterface, t.fn[x].Constructor = S, t.fn[x].noConflict = function () {
            return t.fn[x] = w, S._jQueryInterface
        };
        var _ = "dropdown",
            A = t.fn[_],
            E = new RegExp("38|40|27"),
            D = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            k = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            N = function () {
                function e(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var i = e.prototype;
                return i.toggle = function () {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                        var n = t(this._menu).hasClass("show");
                        e._clearMenus(), n || this.show(!0)
                    }
                }, i.show = function (i) {
                    if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
                        var r = {
                                relatedTarget: this._element
                            },
                            o = t.Event("show.bs.dropdown", r),
                            a = e._getParentFromElement(this._element);
                        if (t(a).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar && i) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var s = this._element;
                                "parent" === this._config.reference ? s = a : l.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(a).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(a).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(a).toggleClass("show").trigger(t.Event("shown.bs.dropdown", r))
                        }
                    }
                }, i.hide = function () {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = t.Event("hide.bs.dropdown", n),
                            r = e._getParentFromElement(this._element);
                        t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(r).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
                    }
                }, i.dispose = function () {
                    t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, i.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, i._addEventListeners = function () {
                    var e = this;
                    t(this._element).on("click.bs.dropdown", (function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    }))
                }, i._getConfig = function (e) {
                    return e = s(s(s({}, this.constructor.Default), t(this._element).data()), e), l.typeCheckConfig(_, e, this.constructor.DefaultType), e
                }, i._getMenuElement = function () {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(".dropdown-menu"))
                    }
                    return this._menu
                }, i._getPlacement = function () {
                    var e = t(this._element.parentNode),
                        n = "bottom-start";
                    return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
                }, i._detectNavbar = function () {
                    return t(this._element).closest(".navbar").length > 0
                }, i._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = s(s({}, t.offsets), e._config.offset(t.offsets, e._element) || {}), t
                    } : t.offset = this._config.offset, t
                }, i._getPopperConfig = function () {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), s(s({}, e), this._config.popperConfig)
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.dropdown");
                        if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, e._clearMenus = function (n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                        for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = i.length; r < o; r++) {
                            var a = e._getParentFromElement(i[r]),
                                s = t(i[r]).data("bs.dropdown"),
                                l = {
                                    relatedTarget: i[r]
                                };
                            if (n && "click" === n.type && (l.clickEvent = n), s) {
                                var c = s._menu;
                                if (t(a).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
                                    var u = t.Event("hide.bs.dropdown", l);
                                    t(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), t(c).removeClass("show"), t(a).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
                                }
                            }
                        }
                }, e._getParentFromElement = function (e) {
                    var t, n = l.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, e._dataApiKeydownHandler = function (n) {
                    if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length) : !E.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
                        var i = e._getParentFromElement(this),
                            r = t(i).hasClass("show");
                        if (r || 27 !== n.which) {
                            if (n.preventDefault(), n.stopPropagation(), !r || r && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                            var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                                return t(e).is(":visible")
                            }));
                            if (0 !== o.length) {
                                var a = o.indexOf(n.target);
                                38 === n.which && a > 0 && a--, 40 === n.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                            }
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return D
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return k
                    }
                }]), e
            }();
        t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', N._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", N._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", N._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (e) {
            e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(t(this), "toggle")
        })).on("click.bs.dropdown.data-api", ".dropdown form", (function (e) {
            e.stopPropagation()
        })), t.fn[_] = N._jQueryInterface, t.fn[_].Constructor = N, t.fn[_].noConflict = function () {
            return t.fn[_] = A, N._jQueryInterface
        };
        var O = t.fn.modal,
            R = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            j = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            I = function () {
                function e(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var n = e.prototype;
                return n.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, n.show = function (e) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = t.Event("show.bs.modal", {
                            relatedTarget: e
                        });
                        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (e) {
                            return n.hide(e)
                        })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                            t(n._element).one("mouseup.dismiss.bs.modal", (function (e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function () {
                            return n._showElement(e)
                        })))
                    }
                }, n.hide = function (e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = t.Event("hide.bs.modal");
                        if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = t(this._element).hasClass("fade");
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                                var o = l.getTransitionDurationFromElement(this._element);
                                t(this._element).one(l.TRANSITION_END, (function (e) {
                                    return n._hideModal(e)
                                })).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (e) {
                        return t(e).off(".bs.modal")
                    })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function () {
                    this._adjustDialog()
                }, n._getConfig = function (e) {
                    return e = s(s({}, R), e), l.typeCheckConfig("modal", e, j), e
                }, n._triggerBackdropTransition = function () {
                    var e = this;
                    if ("static" === this._config.backdrop) {
                        var n = t.Event("hidePrevented.bs.modal");
                        if (t(this._element).trigger(n), n.defaultPrevented) return;
                        this._element.classList.add("modal-static");
                        var i = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, (function () {
                            e._element.classList.remove("modal-static")
                        })).emulateTransitionEnd(i), this._element.focus()
                    } else this.hide()
                }, n._showElement = function (e) {
                    var n = this,
                        i = t(this._element).hasClass("fade"),
                        r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && l.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                    var o = t.Event("shown.bs.modal", {
                            relatedTarget: e
                        }),
                        a = function () {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                        };
                    if (i) {
                        var s = l.getTransitionDurationFromElement(this._dialog);
                        t(this._dialog).one(l.TRANSITION_END, a).emulateTransitionEnd(s)
                    } else a()
                }, n._enforceFocus = function () {
                    var e = this;
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
                        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                    }))
                }, n._setEscapeEvent = function () {
                    var e = this;
                    this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function (t) {
                        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                    })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
                }, n._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? t(window).on("resize.bs.modal", (function (t) {
                        return e.handleUpdate(t)
                    })) : t(window).off("resize.bs.modal")
                }, n._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
                        t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
                    }))
                }, n._removeBackdrop = function () {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, n._showBackdrop = function (e) {
                    var n = this,
                        i = t(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function (e) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                            })), i && l.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
                        if (!i) return void e();
                        var r = l.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass("show");
                        var o = function () {
                            n._removeBackdrop(), e && e()
                        };
                        if (t(this._element).hasClass("fade")) {
                            var a = l.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o()
                    } else e && e()
                }, n._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, n._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, n._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        t(n).each((function (n, i) {
                            var r = i.style.paddingRight,
                                o = t(i).css("padding-right");
                            t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        })), t(i).each((function (n, i) {
                            var r = i.style.marginRight,
                                o = t(i).css("margin-right");
                            t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                        }));
                        var r = document.body.style.paddingRight,
                            o = t(document.body).css("padding-right");
                        t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    t(document.body).addClass("modal-open")
                }, n._resetScrollbar = function () {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    t(e).each((function (e, n) {
                        var i = t(n).data("padding-right");
                        t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                    }));
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    t(n).each((function (e, n) {
                        var i = t(n).data("margin-right");
                        void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                    }));
                    var i = t(document.body).data("padding-right");
                    t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, n._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function (n, i) {
                    return this.each((function () {
                        var r = t(this).data("bs.modal"),
                            o = s(s(s({}, R), t(this).data()), "object" == typeof n && n ? n : {});
                        if (r || (r = new e(this, o), t(this).data("bs.modal", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i)
                        } else o.show && r.show(i)
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return R
                    }
                }]), e
            }();
        t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
            var n, i = this,
                r = l.getSelectorFromElement(this);
            r && (n = document.querySelector(r));
            var o = t(n).data("bs.modal") ? "toggle" : s(s({}, t(n).data()), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = t(n).one("show.bs.modal", (function (e) {
                e.isDefaultPrevented() || a.one("hidden.bs.modal", (function () {
                    t(i).is(":visible") && i.focus()
                }))
            }));
            I._jQueryInterface.call(t(n), o, this)
        })), t.fn.modal = I._jQueryInterface, t.fn.modal.Constructor = I, t.fn.modal.noConflict = function () {
            return t.fn.modal = O, I._jQueryInterface
        };
        var L = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            P = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            F = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function M(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), a = function (e, n) {
                    var i = o[e],
                        a = i.nodeName.toLowerCase();
                    if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var s = [].slice.call(i.attributes),
                        l = [].concat(t["*"] || [], t[a] || []);
                    s.forEach((function (e) {
                        (function (e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === L.indexOf(n) || Boolean(e.nodeValue.match(P) || e.nodeValue.match(F));
                            for (var i = t.filter((function (e) {
                                    return e instanceof RegExp
                                })), r = 0, o = i.length; r < o; r++)
                                if (n.match(i[r])) return !0;
                            return !1
                        })(e, l) || i.removeAttribute(e.nodeName)
                    }))
                }, s = 0, l = o.length; s < l; s++) a(s);
            return i.body.innerHTML
        }
        var B = "tooltip",
            q = t.fn[B],
            H = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            W = ["sanitize", "whiteList", "sanitizeFn"],
            z = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            V = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            U = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                popperConfig: null
            },
            $ = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            X = function () {
                function e(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var i = e.prototype;
                return i.enable = function () {
                    this._isEnabled = !0
                }, i.disable = function () {
                    this._isEnabled = !1
                }, i.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, i.toggle = function (e) {
                    if (this._isEnabled)
                        if (e) {
                            var n = this.constructor.DATA_KEY,
                                i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, i.dispose = function () {
                    clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, i.show = function () {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(i);
                        var r = l.findShadowRoot(this.element),
                            o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !o) return;
                        var a = this.getTipElement(),
                            s = l.getUID(this.constructor.NAME);
                        a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(a).addClass("fade");
                        var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            u = this._getAttachment(c);
                        this.addAttachmentClass(u);
                        var h = this._getContainer();
                        t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(h), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, this._getPopperConfig(u)), t(a).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                        var d = function () {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                        };
                        if (t(this.tip).hasClass("fade")) {
                            var f = l.getTransitionDurationFromElement(this.tip);
                            t(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(f)
                        } else d()
                    }
                }, i.hide = function (e) {
                    var n = this,
                        i = this.getTipElement(),
                        r = t.Event(this.constructor.Event.HIDE),
                        o = function () {
                            "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                        };
                    if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (t(i).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
                            var a = l.getTransitionDurationFromElement(i);
                            t(i).one(l.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o();
                        this._hoverState = ""
                    }
                }, i.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, i.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, i.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, i.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, i.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
                }, i.setElementContent = function (e, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = M(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
                }, i.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, i._getPopperConfig = function (e) {
                    var t = this;
                    return s(s({}, {
                        placement: e,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), this.config.popperConfig)
                }, i._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = s(s({}, t.offsets), e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, i._getContainer = function () {
                    return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                }, i._getAttachment = function (e) {
                    return V[e.toUpperCase()]
                }, i._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach((function (n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
                            return e.toggle(t)
                        }));
                        else if ("manual" !== n) {
                            var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                r = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(i, e.config.selector, (function (t) {
                                return e._enter(t)
                            })).on(r, e.config.selector, (function (t) {
                                return e._leave(t)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        e.element && e.hide()
                    }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s(s({}, this.config), {}, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, i._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, i._enter = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                        "show" === n._hoverState && n.show()
                    }), n.config.delay.show) : n.show())
                }, i._leave = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                        "out" === n._hoverState && n.hide()
                    }), n.config.delay.hide) : n.hide())
                }, i._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, i._getConfig = function (e) {
                    var n = t(this.element).data();
                    return Object.keys(n).forEach((function (e) {
                        -1 !== W.indexOf(e) && delete n[e]
                    })), "number" == typeof (e = s(s(s({}, this.constructor.Default), n), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l.typeCheckConfig(B, e, this.constructor.DefaultType), e.sanitize && (e.template = M(e.template, e.whiteList, e.sanitizeFn)), e
                }, i._getDelegateConfig = function () {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, i._cleanTipClass = function () {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(H);
                    null !== n && n.length && e.removeClass(n.join(""))
                }, i._handlePopperPlacementChange = function (e) {
                    this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, i._fixTransition = function () {
                    var e = this.getTipElement(),
                        n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.tooltip"),
                            r = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return U
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return B
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return $
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return z
                    }
                }]), e
            }();
        t.fn[B] = X._jQueryInterface, t.fn[B].Constructor = X, t.fn[B].noConflict = function () {
            return t.fn[B] = q, X._jQueryInterface
        };
        var Q = "popover",
            G = t.fn[Q],
            Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            Y = s(s({}, X.Default), {}, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            K = s(s({}, X.DefaultType), {}, {
                content: "(string|element|function)"
            }),
            J = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            ee = function (e) {
                var n, i;

                function o() {
                    return e.apply(this, arguments) || this
                }
                i = e, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
                var a = o.prototype;
                return a.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, a.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e)
                }, a.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, a.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
                }, a._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, a._cleanTipClass = function () {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(Z);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }, o._jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = t(this).data("bs.popover"),
                            i = "object" == typeof e ? e : null;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    }))
                }, r(o, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Y
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Q
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return J
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return K
                    }
                }]), o
            }(X);
        t.fn[Q] = ee._jQueryInterface, t.fn[Q].Constructor = ee, t.fn[Q].noConflict = function () {
            return t.fn[Q] = G, ee._jQueryInterface
        };
        var te = "scrollspy",
            ne = t.fn[te],
            ie = {
                offset: 10,
                method: "auto",
                target: ""
            },
            re = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            oe = function () {
                function e(e, n) {
                    var i = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function (e) {
                        return i._process(e)
                    })), this.refresh(), this._process()
                }
                var n = e.prototype;
                return n.refresh = function () {
                    var e = this,
                        n = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : "position" : this._config.method,
                        i = "position" === n ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
                        var r, o = l.getSelectorFromElement(e);
                        if (o && (r = document.querySelector(o)), r) {
                            var a = r.getBoundingClientRect();
                            if (a.width || a.height) return [t(r)[n]().top + i, o]
                        }
                        return null
                    })).filter((function (e) {
                        return e
                    })).sort((function (e, t) {
                        return e[0] - t[0]
                    })).forEach((function (t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    }))
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, n._getConfig = function (e) {
                    if ("string" != typeof (e = s(s({}, ie), "object" == typeof e && e ? e : {})).target && l.isElement(e.target)) {
                        var n = t(e.target).attr("id");
                        n || (n = l.getUID(te), t(e.target).attr("id", n)), e.target = "#" + n
                    }
                    return l.typeCheckConfig(te, e, re), e
                }, n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, n._process = function () {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, n._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",").map((function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        })),
                        i = t([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {
                        relatedTarget: e
                    })
                }, n._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
                        return e.classList.contains("active")
                    })).forEach((function (e) {
                        return e.classList.remove("active")
                    }))
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.scrollspy");
                        if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ie
                    }
                }]), e
            }();
        t(window).on("load.bs.scrollspy.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
                var i = t(e[n]);
                oe._jQueryInterface.call(i, i.data())
            }
        })), t.fn[te] = oe._jQueryInterface, t.fn[te].Constructor = oe, t.fn[te].noConflict = function () {
            return t.fn[te] = ne, oe._jQueryInterface
        };
        var ae = t.fn.tab,
            se = function () {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                        var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                            o = l.getSelectorFromElement(this._element);
                        if (r) {
                            var a = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                            i = (i = t.makeArray(t(r).find(a)))[i.length - 1]
                        }
                        var s = t.Event("hide.bs.tab", {
                                relatedTarget: this._element
                            }),
                            c = t.Event("show.bs.tab", {
                                relatedTarget: i
                            });
                        if (i && t(i).trigger(s), t(this._element).trigger(c), !c.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, r);
                            var u = function () {
                                var n = t.Event("hidden.bs.tab", {
                                        relatedTarget: e._element
                                    }),
                                    r = t.Event("shown.bs.tab", {
                                        relatedTarget: i
                                    });
                                t(i).trigger(n), t(e._element).trigger(r)
                            };
                            n ? this._activate(n, n.parentNode, u) : u()
                        }
                    }
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.tab"), this._element = null
                }, n._activate = function (e, n, i) {
                    var r = this,
                        o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                        a = i && o && t(o).hasClass("fade"),
                        s = function () {
                            return r._transitionComplete(e, o, i)
                        };
                    if (o && a) {
                        var c = l.getTransitionDurationFromElement(o);
                        t(o).removeClass("show").one(l.TRANSITION_END, s).emulateTransitionEnd(c)
                    } else s()
                }, n._transitionComplete = function (e, n, i) {
                    if (n) {
                        t(n).removeClass("active");
                        var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                        r && t(r).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), l.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                        var o = t(e).closest(".dropdown")[0];
                        if (o) {
                            var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                            t(a).addClass("active")
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.tab");
                        if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }]), e
            }();
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
            e.preventDefault(), se._jQueryInterface.call(t(this), "show")
        })), t.fn.tab = se._jQueryInterface, t.fn.tab.Constructor = se, t.fn.tab.noConflict = function () {
            return t.fn.tab = ae, se._jQueryInterface
        };
        var le = t.fn.toast,
            ce = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            ue = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            he = function () {
                function e(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }
                var n = e.prototype;
                return n.show = function () {
                    var e = this,
                        n = t.Event("show.bs.toast");
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._config.animation && this._element.classList.add("fade");
                        var i = function () {
                            e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function () {
                                e.hide()
                            }), e._config.delay))
                        };
                        if (this._element.classList.remove("hide"), l.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                            var r = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(r)
                        } else i()
                    }
                }, n.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var e = t.Event("hide.bs.toast");
                        t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                    }
                }, n.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, n._getConfig = function (e) {
                    return e = s(s(s({}, ue), t(this._element).data()), "object" == typeof e && e ? e : {}), l.typeCheckConfig("toast", e, this.constructor.DefaultType), e
                }, n._setListeners = function () {
                    var e = this;
                    t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                        return e.hide()
                    }))
                }, n._close = function () {
                    var e = this,
                        n = function () {
                            e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
                        };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var i = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.toast");
                        if (r || (r = new e(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](this)
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return ce
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ue
                    }
                }]), e
            }();
        t.fn.toast = he._jQueryInterface, t.fn.toast.Constructor = he, t.fn.toast.noConflict = function () {
            return t.fn.toast = le, he._jQueryInterface
        }, e.Alert = h, e.Button = f, e.Carousel = b, e.Collapse = S, e.Dropdown = N, e.Modal = I, e.Popover = ee, e.Scrollspy = oe, e.Tab = se, e.Toast = he, e.Tooltip = X, e.Util = l, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }));
var togglePassword = document.getElementById("toggle-password");
togglePassword && togglePassword.addEventListener("click", (function () {
        var e = document.getElementById("password");
        e.type = "password" === e.type ? "text" : "password"
    })),
    function () {
        "use strict";
        window.addEventListener("load", (function () {
            var e = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(e, (function (e) {
                e.addEventListener("submit", (function (t) {
                    !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
                }), !1)
            }))
        }), !1), window.addEventListener("load", (function () {
            var e = document.getElementsByClassName("simple-example"),
                t = $(".simple-example .invalid-feedback");
            Array.prototype.filter.call(e, (function (e) {
                e.addEventListener("submit", (function (n) {
                    !1 === e.checkValidity() ? (n.preventDefault(), n.stopPropagation(), t.css("display", "block")) : (t.css("display", "none"), e.classList.add("was-validated"))
                }), !1)
            }))
        }), !1), window.addEventListener("load", (function () {
            var e = document.getElementsByClassName("email"),
                t = $(".email .invalid-feedback");
            Array.prototype.filter.call(e, (function (e) {
                e.addEventListener("submit", (function (n) {
                    !1 === e.checkValidity() ? (n.preventDefault(), n.stopPropagation(), t.css("display", "block")) : (t.css("display", "none"), e.classList.add("was-validated"))
                }), !1)
            }))
        }), !1), window.addEventListener("load", (function () {
            var e = document.getElementsByClassName("select"),
                t = $(".select .invalid-feedback");
            Array.prototype.filter.call(e, (function (e) {
                e.addEventListener("submit", (function (n) {
                    !1 === e.checkValidity() ? (n.preventDefault(), n.stopPropagation(), t.css("display", "block")) : (t.css("display", "none"), e.classList.add("was-validated"))
                }), !1)
            }))
        }), !1)
    }();
// try {
//     Apex.tooltip = {
//         theme: "dark"
//     };
//     var spark1 = {
//             chart: {
//                 id: "unique-visits",
//                 group: "sparks2",
//                 type: "line",
//                 height: 80,
//                 sparkline: {
//                     enabled: !0
//                 },
//                 dropShadow: {
//                     enabled: !0,
//                     top: 1,
//                     left: 1,
//                     blur: 2,
//                     color: "#e2a03f",
//                     opacity: .7
//                 }
//             },
//             series: [{
//                 data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
//             }],
//             stroke: {
//                 curve: "smooth",
//                 width: 2
//             },
//             markers: {
//                 size: 0
//             },
//             grid: {
//                 padding: {
//                     top: 35,
//                     bottom: 0,
//                     left: 40
//                 }
//             },
//             colors: ["#e2a03f"],
//             tooltip: {
//                 x: {
//                     show: !1
//                 },
//                 y: {
//                     title: {
//                         formatter: function (e) {
//                             return ""
//                         }
//                     }
//                 }
//             },
//             responsive: [{
//                 breakpoint: 1351,
//                 options: {
//                     chart: {
//                         height: 95
//                     },
//                     grid: {
//                         padding: {
//                             top: 35,
//                             bottom: 0,
//                             left: 0
//                         }
//                     }
//                 }
//             }, {
//                 breakpoint: 1200,
//                 options: {
//                     chart: {
//                         height: 80
//                     },
//                     grid: {
//                         padding: {
//                             top: 35,
//                             bottom: 0,
//                             left: 40
//                         }
//                     }
//                 }
//             }, {
//                 breakpoint: 576,
//                 options: {
//                     chart: {
//                         height: 95
//                     },
//                     grid: {
//                         padding: {
//                             top: 45,
//                             bottom: 0,
//                             left: 0
//                         }
//                     }
//                 }
//             }]
//         },
//         spark2 = {
//             chart: {
//                 id: "total-users",
//                 group: "sparks1",
//                 type: "line",
//                 height: 80,
//                 sparkline: {
//                     enabled: !0
//                 },
//                 dropShadow: {
//                     enabled: !0,
//                     top: 3,
//                     left: 1,
//                     blur: 3,
//                     color: "#009688",
//                     opacity: .7
//                 }
//             },
//             series: [{
//                 data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
//             }],
//             stroke: {
//                 curve: "smooth",
//                 width: 2
//             },
//             markers: {
//                 size: 0
//             },
//             grid: {
//                 padding: {
//                     top: 35,
//                     bottom: 0,
//                     left: 40
//                 }
//             },
//             colors: ["#009688"],
//             tooltip: {
//                 x: {
//                     show: !1
//                 },
//                 y: {
//                     title: {
//                         formatter: function (e) {
//                             return ""
//                         }
//                     }
//                 }
//             },
//             responsive: [{
//                 breakpoint: 1351,
//                 options: {
//                     chart: {
//                         height: 95
//                     },
//                     grid: {
//                         padding: {
//                             top: 35,
//                             bottom: 0,
//                             left: 0
//                         }
//                     }
//                 }
//             }, {
//                 breakpoint: 1200,
//                 options: {
//                     chart: {
//                         height: 80
//                     },
//                     grid: {
//                         padding: {
//                             top: 35,
//                             bottom: 0,
//                             left: 40
//                         }
//                     }
//                 }
//             }, {
//                 breakpoint: 576,
//                 options: {
//                     chart: {
//                         height: 95
//                     },
//                     grid: {
//                         padding: {
//                             top: 35,
//                             bottom: 0,
//                             left: 0
//                         }
//                     }
//                 }
//             }]
//         },
//         d_1options1 = {
//             chart: {
//                 height: 350,
//                 type: "bar",
//                 toolbar: {
//                     show: !1
//                 },
//                 dropShadow: {
//                     enabled: !0,
//                     top: 1,
//                     left: 1,
//                     blur: 1,
//                     color: "#515365",
//                     opacity: .3
//                 }
//             },
//             colors: ["#5c1ac3", "#ffbb44"],
//             plotOptions: {
//                 bar: {
//                     horizontal: !1,
//                     columnWidth: "55%",
//                     endingShape: "rounded"
//                 }
//             },
//             dataLabels: {
//                 enabled: !1
//             },
//             legend: {
//                 position: "bottom",
//                 horizontalAlign: "center",
//                 fontSize: "14px",
//                 markers: {
//                     width: 10,
//                     height: 10
//                 },
//                 itemMargin: {
//                     horizontal: 0,
//                     vertical: 8
//                 }
//             },
//             grid: {
//                 borderColor: "#191e3a"
//             },
//             stroke: {
//                 show: !0,
//                 width: 2,
//                 colors: ["transparent"]
//             },
//             series: [{
//                 name: "Direct",
//                 data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
//             }, {
//                 name: "Organic",
//                 data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
//             }],
//             xaxis: {
//                 categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//             },
//             fill: {
//                 type: "gradient",
//                 gradient: {
//                     shade: "dark",
//                     type: "vertical",
//                     shadeIntensity: .3,
//                     inverseColors: !1,
//                     opacityFrom: 1,
//                     opacityTo: .8,
//                     stops: [0, 100]
//                 }
//             },
//             tooltip: {
//                 theme: "dark",
//                 y: {
//                     formatter: function (e) {
//                         return e
//                     }
//                 }
//             }
//         },
//         d_1options3 = {
//             chart: {
//                 id: "sparkline1",
//                 type: "area",
//                 height: 160,
//                 sparkline: {
//                     enabled: !0
//                 }
//             },
//             stroke: {
//                 curve: "smooth",
//                 width: 2
//             },
//             series: [{
//                 name: "Sales",
//                 data: [38, 60, 38, 52, 36, 40, 28]
//             }],
//             labels: ["1", "2", "3", "4", "5", "6", "7"],
//             yaxis: {
//                 min: 0
//             },
//             colors: ["#1b55e2"],
//             tooltip: {
//                 x: {
//                     show: !1
//                 }
//             },
//             fill: {
//                 type: "gradient",
//                 gradient: {
//                     type: "vertical",
//                     shadeIntensity: 1,
//                     inverseColors: !1,
//                     opacityFrom: .4,
//                     opacityTo: .05,
//                     stops: [45, 100]
//                 }
//             }
//         },
//         d_1options4 = {
//             chart: {
//                 id: "sparkline1",
//                 type: "area",
//                 height: 160,
//                 sparkline: {
//                     enabled: !0
//                 }
//             },
//             stroke: {
//                 curve: "smooth",
//                 width: 2
//             },
//             series: [{
//                 name: "Sales",
//                 data: [60, 28, 52, 38, 40, 36, 38]
//             }],
//             labels: ["1", "2", "3", "4", "5", "6", "7"],
//             yaxis: {
//                 min: 0
//             },
//             colors: ["#e7515a"],
//             tooltip: {
//                 x: {
//                     show: !1
//                 }
//             },
//             fill: {
//                 type: "gradient",
//                 gradient: {
//                     type: "vertical",
//                     shadeIntensity: 1,
//                     inverseColors: !1,
//                     opacityFrom: .4,
//                     opacityTo: .05,
//                     stops: [45, 100]
//                 }
//             }
//         },
//         d_1options5 = {
//             chart: {
//                 id: "sparkline1",
//                 type: "area",
//                 height: 160,
//                 sparkline: {
//                     enabled: !0
//                 }
//             },
//             stroke: {
//                 curve: "smooth",
//                 width: 2
//             },
//             fill: {
//                 opacity: 1
//             },
//             series: [{
//                 name: "Sales",
//                 data: [28, 50, 36, 60, 38, 52, 38]
//             }],
//             labels: ["1", "2", "3", "4", "5", "6", "7"],
//             yaxis: {
//                 min: 0
//             },
//             colors: ["#009688"],
//             tooltip: {
//                 x: {
//                     show: !1
//                 }
//             },
//             fill: {
//                 type: "gradient",
//                 gradient: {
//                     type: "vertical",
//                     shadeIntensity: 1,
//                     inverseColors: !1,
//                     opacityFrom: .4,
//                     opacityTo: .05,
//                     stops: [45, 100]
//                 }
//             }
//         };
//     d_1C_1 = new ApexCharts(document.querySelector("#total-users"), spark1), d_1C_1.render(), d_1C_2 = new ApexCharts(document.querySelector("#paid-visits"), spark2), d_1C_2.render();
//     var d_1C_3 = new ApexCharts(document.querySelector("#uniqueVisits"), d_1options1);
//     d_1C_3.render();
//     var d_1C_5 = new ApexCharts(document.querySelector("#hybrid_followers"), d_1options3);
//     d_1C_5.render();
//     var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_followers1"), d_1options4);
//     d_1C_6.render();
//     var d_1C_7 = new ApexCharts(document.querySelector("#hybrid_followers3"), d_1options5);
//     d_1C_7.render(), new PerfectScrollbar(document.querySelector(".mt-container"))
// } catch (e) {
//     console.log(e)
// }! function (e, t) {
//     "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
// }(this, (function () {
//     "use strict";

//     function e(e) {
//         return e && "[object Function]" === {}.toString.call(e)
//     }

//     function t(e, t) {
//         if (1 !== e.nodeType) return [];
//         var n = window.getComputedStyle(e, null);
//         return t ? n[t] : n
//     }

//     function n(e) {
//         return "HTML" === e.nodeName ? e : e.parentNode || e.host
//     }

//     function i(e) {
//         if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
//         var r = t(e);
//         return /(auto|scroll)/.test(r.overflow + r.overflowY + r.overflowX) ? e : i(n(e))
//     }

//     function r(e) {
//         var n = e && e.offsetParent,
//             i = n && n.nodeName;
//         return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? r(n) : n : window.document.documentElement
//     }

//     function o(e) {
//         return null === e.parentNode ? e : o(e.parentNode)
//     }

//     function a(e, t) {
//         if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
//         var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
//             i = n ? e : t,
//             s = n ? t : e,
//             l = document.createRange();
//         l.setStart(i, 0), l.setEnd(s, 0);
//         var c = l.commonAncestorContainer;
//         if (e !== c && t !== c || i.contains(s)) return function (e) {
//             var t = e.nodeName;
//             return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
//         }(c) ? c : r(c);
//         var u = o(e);
//         return u.host ? a(u.host, t) : a(e, o(t).host)
//     }

//     function s(e) {
//         var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
//             n = "top" === t ? "scrollTop" : "scrollLeft",
//             i = e.nodeName;
//         if ("BODY" === i || "HTML" === i) {
//             var r = window.document.documentElement,
//                 o = window.document.scrollingElement || r;
//             return o[n]
//         }
//         return e[n]
//     }

//     function l(e, t) {
//         var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
//             i = s(t, "top"),
//             r = s(t, "left"),
//             o = n ? -1 : 1;
//         return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
//     }

//     function c(e, t) {
//         var n = "x" === t ? "Left" : "Top",
//             i = "Left" == n ? "Right" : "Bottom";
//         return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
//     }

//     function u(e, t, n, i) {
//         return M(t["offset" + e], n["client" + e], n["offset" + e], $() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
//     }

//     function h() {
//         var e = window.document.body,
//             t = window.document.documentElement,
//             n = $() && window.getComputedStyle(t);
//         return {
//             height: u("Height", e, t, n),
//             width: u("Width", e, t, n)
//         }
//     }

//     function d(e) {
//         return Z({}, e, {
//             right: e.left + e.width,
//             bottom: e.top + e.height
//         })
//     }

//     function f(e) {
//         var n = {};
//         if ($()) try {
//             n = e.getBoundingClientRect();
//             var i = s(e, "top"),
//                 r = s(e, "left");
//             n.top += i, n.left += r, n.bottom += i, n.right += r
//         } catch (e) {} else n = e.getBoundingClientRect();
//         var o = {
//                 left: n.left,
//                 top: n.top,
//                 width: n.right - n.left,
//                 height: n.bottom - n.top
//             },
//             a = "HTML" === e.nodeName ? h() : {},
//             l = e.offsetWidth - (a.width || e.clientWidth || o.right - o.left),
//             u = e.offsetHeight - (a.height || e.clientHeight || o.bottom - o.top);
//         if (l || u) {
//             var f = t(e);
//             l -= c(f, "x"), u -= c(f, "y"), o.width -= l, o.height -= u
//         }
//         return d(o)
//     }

//     function p(e, n) {
//         var r = $(),
//             o = "HTML" === n.nodeName,
//             a = f(e),
//             s = f(n),
//             c = i(e),
//             u = t(n),
//             h = +u.borderTopWidth.split("px")[0],
//             p = +u.borderLeftWidth.split("px")[0],
//             g = d({
//                 top: a.top - s.top - h,
//                 left: a.left - s.left - p,
//                 width: a.width,
//                 height: a.height
//             });
//         if (g.marginTop = 0, g.marginLeft = 0, !r && o) {
//             var m = +u.marginTop.split("px")[0],
//                 v = +u.marginLeft.split("px")[0];
//             g.top -= h - m, g.bottom -= h - m, g.left -= p - v, g.right -= p - v, g.marginTop = m, g.marginLeft = v
//         }
//         return (r ? n.contains(c) : n === c && "BODY" !== c.nodeName) && (g = l(g, n)), g
//     }

//     function g(e) {
//         var t = window.document.documentElement,
//             n = p(e, t),
//             i = M(t.clientWidth, window.innerWidth || 0),
//             r = M(t.clientHeight, window.innerHeight || 0),
//             o = s(t),
//             a = s(t, "left");
//         return d({
//             top: o - n.top + n.marginTop,
//             left: a - n.left + n.marginLeft,
//             width: i,
//             height: r
//         })
//     }

//     function m(e) {
//         var i = e.nodeName;
//         return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || m(n(e)))
//     }

//     function v(e, t, r, o) {
//         var s = {
//                 top: 0,
//                 left: 0
//             },
//             l = a(e, t);
//         if ("viewport" === o) s = g(l);
//         else {
//             var c;
//             "scrollParent" === o ? "BODY" === (c = i(n(e))).nodeName && (c = window.document.documentElement) : c = "window" === o ? window.document.documentElement : o;
//             var u = p(c, l);
//             if ("HTML" !== c.nodeName || m(l)) s = u;
//             else {
//                 var d = h(),
//                     f = d.height,
//                     v = d.width;
//                 s.top += u.top - u.marginTop, s.bottom = f + u.top, s.left += u.left - u.marginLeft, s.right = v + u.left
//             }
//         }
//         return s.left += r, s.top += r, s.right -= r, s.bottom -= r, s
//     }

//     function y(e) {
//         return e.width * e.height
//     }

//     function b(e, t, n, i, r) {
//         var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
//         if (-1 === e.indexOf("auto")) return e;
//         var a = v(n, i, o, r),
//             s = {
//                 top: {
//                     width: a.width,
//                     height: t.top - a.top
//                 },
//                 right: {
//                     width: a.right - t.right,
//                     height: a.height
//                 },
//                 bottom: {
//                     width: a.width,
//                     height: a.bottom - t.bottom
//                 },
//                 left: {
//                     width: t.left - a.left,
//                     height: a.height
//                 }
//             },
//             l = Object.keys(s).map((function (e) {
//                 return Z({
//                     key: e
//                 }, s[e], {
//                     area: y(s[e])
//                 })
//             })).sort((function (e, t) {
//                 return t.area - e.area
//             })),
//             c = l.filter((function (e) {
//                 return e.width >= n.clientWidth && e.height >= n.clientHeight
//             })),
//             u = 0 < c.length ? c[0].key : l[0].key,
//             h = e.split("-")[1];
//         return u + (h ? "-" + h : "")
//     }

//     function x(e, t, n) {
//         return p(n, a(t, n))
//     }

//     function w(e) {
//         var t = window.getComputedStyle(e),
//             n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
//             i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
//         return {
//             width: e.offsetWidth + i,
//             height: e.offsetHeight + n
//         }
//     }

//     function T(e) {
//         var t = {
//             left: "right",
//             right: "left",
//             bottom: "top",
//             top: "bottom"
//         };
//         return e.replace(/left|right|bottom|top/g, (function (e) {
//             return t[e]
//         }))
//     }

//     function C(e, t, n) {
//         n = n.split("-")[0];
//         var i = w(e),
//             r = {
//                 width: i.width,
//                 height: i.height
//             },
//             o = -1 !== ["right", "left"].indexOf(n),
//             a = o ? "top" : "left",
//             s = o ? "left" : "top",
//             l = o ? "height" : "width",
//             c = o ? "width" : "height";
//         return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[T(s)], r
//     }

//     function S(e, t) {
//         return Array.prototype.find ? e.find(t) : e.filter(t)[0]
//     }

//     function _(t, n, i) {
//         return (void 0 === i ? t : t.slice(0, function (e, t, n) {
//             if (Array.prototype.findIndex) return e.findIndex((function (e) {
//                 return e[t] === n
//             }));
//             var i = S(e, (function (e) {
//                 return e[t] === n
//             }));
//             return e.indexOf(i)
//         }(t, "name", i))).forEach((function (t) {
//             t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
//             var i = t.function || t.fn;
//             t.enabled && e(i) && (n.offsets.popper = d(n.offsets.popper), n.offsets.reference = d(n.offsets.reference), n = i(n, t))
//         })), n
//     }

//     function A() {
//         if (!this.state.isDestroyed) {
//             var e = {
//                 instance: this,
//                 styles: {},
//                 attributes: {},
//                 flipped: !1,
//                 offsets: {}
//             };
//             e.offsets.reference = x(0, this.popper, this.reference), e.placement = b(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = _(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
//         }
//     }

//     function E(e, t) {
//         return e.some((function (e) {
//             return e.enabled && e.name === t
//         }))
//     }

//     function D(e) {
//         for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
//             var r = t[i],
//                 o = r ? "" + r + n : e;
//             if (void 0 !== window.document.body.style[o]) return o
//         }
//         return null
//     }

//     function k() {
//         return this.state.isDestroyed = !0, E(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[D("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
//     }

//     function N() {
//         this.state.eventsEnabled || (this.state = function (e, t, n, r) {
//             n.updateBound = r, window.addEventListener("resize", n.updateBound, {
//                 passive: !0
//             });
//             var o = i(e);
//             return function e(t, n, r, o) {
//                 var a = "BODY" === t.nodeName,
//                     s = a ? window : t;
//                 s.addEventListener(n, r, {
//                     passive: !0
//                 }), a || e(i(s.parentNode), n, r, o), o.push(s)
//             }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
//         }(this.reference, 0, this.state, this.scheduleUpdate))
//     }

//     function O() {
//         this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
//             return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
//                 e.removeEventListener("scroll", t.updateBound)
//             })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
//         }(0, this.state))
//     }

//     function R(e) {
//         return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
//     }

//     function j(e, t) {
//         Object.keys(t).forEach((function (n) {
//             var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && R(t[n]) && (i = "px"), e.style[n] = t[n] + i
//         }))
//     }

//     function I(e, t, n) {
//         var i = S(e, (function (e) {
//                 return e.name === t
//             })),
//             r = !!i && e.some((function (e) {
//                 return e.name === n && e.enabled && e.order < i.order
//             }));
//         if (!r) {
//             var o = "`" + t + "`";
//             console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
//         }
//         return r
//     }

//     function L(e) {
//         var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
//             n = K.indexOf(e),
//             i = K.slice(n + 1).concat(K.slice(0, n));
//         return t ? i.reverse() : i
//     }
//     for (var P = Math.min, F = Math.floor, M = Math.max, B = ["native code", "[object MutationObserverConstructor]"], q = "undefined" != typeof window, H = ["Edge", "Trident", "Firefox"], W = 0, z = 0; z < H.length; z += 1)
//         if (q && 0 <= navigator.userAgent.indexOf(H[z])) {
//             W = 1;
//             break
//         } var V, U = q && function (e) {
//             return B.some((function (t) {
//                 return -1 < (e || "").toString().indexOf(t)
//             }))
//         }(window.MutationObserver) ? function (e) {
//             var t = !1,
//                 n = 0,
//                 i = document.createElement("span");
//             return new MutationObserver((function () {
//                     e(), t = !1
//                 })).observe(i, {
//                     attributes: !0
//                 }),
//                 function () {
//                     t || (t = !0, i.setAttribute("x-index", n), ++n)
//                 }
//         } : function (e) {
//             var t = !1;
//             return function () {
//                 t || (t = !0, setTimeout((function () {
//                     t = !1, e()
//                 }), W))
//             }
//         },
//         $ = function () {
//             return null == V && (V = -1 !== navigator.appVersion.indexOf("MSIE 10")), V
//         },
//         X = function (e, t) {
//             if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         },
//         Q = function () {
//             function e(e, t) {
//                 for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
//             }
//             return function (t, n, i) {
//                 return n && e(t.prototype, n), i && e(t, i), t
//             }
//         }(),
//         G = function (e, t, n) {
//             return t in e ? Object.defineProperty(e, t, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0
//             }) : e[t] = n, e
//         },
//         Z = Object.assign || function (e) {
//             for (var t, n = 1; n < arguments.length; n++)
//                 for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
//             return e
//         },
//         Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
//         K = Y.slice(3),
//         J = function () {
//             function t(n, i) {
//                 var r = this,
//                     o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
//                 X(this, t), this.scheduleUpdate = function () {
//                     return requestAnimationFrame(r.update)
//                 }, this.update = U(this.update.bind(this)), this.options = Z({}, t.Defaults, o), this.state = {
//                     isDestroyed: !1,
//                     isCreated: !1,
//                     scrollParents: []
//                 }, this.reference = n.jquery ? n[0] : n, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(Z({}, t.Defaults.modifiers, o.modifiers)).forEach((function (e) {
//                     r.options.modifiers[e] = Z({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
//                 })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
//                     return Z({
//                         name: e
//                     }, r.options.modifiers[e])
//                 })).sort((function (e, t) {
//                     return e.order - t.order
//                 })), this.modifiers.forEach((function (t) {
//                     t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
//                 })), this.update();
//                 var a = this.options.eventsEnabled;
//                 a && this.enableEventListeners(), this.state.eventsEnabled = a
//             }
//             return Q(t, [{
//                 key: "update",
//                 value: function () {
//                     return A.call(this)
//                 }
//             }, {
//                 key: "destroy",
//                 value: function () {
//                     return k.call(this)
//                 }
//             }, {
//                 key: "enableEventListeners",
//                 value: function () {
//                     return N.call(this)
//                 }
//             }, {
//                 key: "disableEventListeners",
//                 value: function () {
//                     return O.call(this)
//                 }
//             }]), t
//         }();
//     return J.Utils = ("undefined" == typeof window ? global : window).PopperUtils, J.placements = Y, J.Defaults = {
//         placement: "bottom",
//         eventsEnabled: !0,
//         removeOnDestroy: !1,
//         onCreate: function () {},
//         onUpdate: function () {},
//         modifiers: {
//             shift: {
//                 order: 100,
//                 enabled: !0,
//                 fn: function (e) {
//                     var t = e.placement,
//                         n = t.split("-")[0],
//                         i = t.split("-")[1];
//                     if (i) {
//                         var r = e.offsets,
//                             o = r.reference,
//                             a = r.popper,
//                             s = -1 !== ["bottom", "top"].indexOf(n),
//                             l = s ? "left" : "top",
//                             c = s ? "width" : "height",
//                             u = {
//                                 start: G({}, l, o[l]),
//                                 end: G({}, l, o[l] + o[c] - a[c])
//                             };
//                         e.offsets.popper = Z({}, a, u[i])
//                     }
//                     return e
//                 }
//             },
//             offset: {
//                 order: 200,
//                 enabled: !0,
//                 fn: function (e, t) {
//                     var n, i = t.offset,
//                         r = e.offsets,
//                         o = r.popper,
//                         a = r.reference,
//                         s = e.placement.split("-")[0];
//                     return n = R(+i) ? [+i, 0] : function (e, t, n, i) {
//                         var r = [0, 0],
//                             o = -1 !== ["right", "left"].indexOf(i),
//                             a = e.split(/(\+|\-)/).map((function (e) {
//                                 return e.trim()
//                             })),
//                             s = a.indexOf(S(a, (function (e) {
//                                 return -1 !== e.search(/,|\s/)
//                             })));
//                         a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
//                         var l = /\s*,\s*|\s+/,
//                             c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
//                         return (c = c.map((function (e, i) {
//                             var r = (1 === i ? !o : o) ? "height" : "width",
//                                 a = !1;
//                             return e.reduce((function (e, t) {
//                                 return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
//                             }), []).map((function (e) {
//                                 return function (e, t, n, i) {
//                                     var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
//                                         o = +r[1],
//                                         a = r[2];
//                                     if (!o) return e;
//                                     if (0 === a.indexOf("%")) {
//                                         var s;
//                                         switch (a) {
//                                             case "%p":
//                                                 s = n;
//                                                 break;
//                                             case "%":
//                                             case "%r":
//                                             default:
//                                                 s = i
//                                         }
//                                         return d(s)[t] / 100 * o
//                                     }
//                                     return "vh" === a || "vw" === a ? ("vh" === a ? M(document.documentElement.clientHeight, window.innerHeight || 0) : M(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
//                                 }(e, r, t, n)
//                             }))
//                         }))).forEach((function (e, t) {
//                             e.forEach((function (n, i) {
//                                 R(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
//                             }))
//                         })), r
//                     }(i, o, a, s), "left" === s ? (o.top += n[0], o.left -= n[1]) : "right" === s ? (o.top += n[0], o.left += n[1]) : "top" === s ? (o.left += n[0], o.top -= n[1]) : "bottom" === s && (o.left += n[0], o.top += n[1]), e.popper = o, e
//                 },
//                 offset: 0
//             },
//             preventOverflow: {
//                 order: 300,
//                 enabled: !0,
//                 fn: function (e, t) {
//                     var n = t.boundariesElement || r(e.instance.popper);
//                     e.instance.reference === n && (n = r(n));
//                     var i = v(e.instance.popper, e.instance.reference, t.padding, n);
//                     t.boundaries = i;
//                     var o = e.offsets.popper,
//                         a = {
//                             primary: function (e) {
//                                 var n = o[e];
//                                 return o[e] < i[e] && !t.escapeWithReference && (n = M(o[e], i[e])), G({}, e, n)
//                             },
//                             secondary: function (e) {
//                                 var n = "right" === e ? "left" : "top",
//                                     r = o[n];
//                                 return o[e] > i[e] && !t.escapeWithReference && (r = P(o[n], i[e] - ("right" === e ? o.width : o.height))), G({}, n, r)
//                             }
//                         };
//                     return t.priority.forEach((function (e) {
//                         var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
//                         o = Z({}, o, a[t](e))
//                     })), e.offsets.popper = o, e
//                 },
//                 priority: ["left", "right", "top", "bottom"],
//                 padding: 5,
//                 boundariesElement: "scrollParent"
//             },
//             keepTogether: {
//                 order: 400,
//                 enabled: !0,
//                 fn: function (e) {
//                     var t = e.offsets,
//                         n = t.popper,
//                         i = t.reference,
//                         r = e.placement.split("-")[0],
//                         o = F,
//                         a = -1 !== ["top", "bottom"].indexOf(r),
//                         s = a ? "right" : "bottom",
//                         l = a ? "left" : "top",
//                         c = a ? "width" : "height";
//                     return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
//                 }
//             },
//             arrow: {
//                 order: 500,
//                 enabled: !0,
//                 fn: function (e, t) {
//                     if (!I(e.instance.modifiers, "arrow", "keepTogether")) return e;
//                     var n = t.element;
//                     if ("string" == typeof n) {
//                         if (!(n = e.instance.popper.querySelector(n))) return e
//                     } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
//                     var i = e.placement.split("-")[0],
//                         r = e.offsets,
//                         o = r.popper,
//                         a = r.reference,
//                         s = -1 !== ["left", "right"].indexOf(i),
//                         l = s ? "height" : "width",
//                         c = s ? "top" : "left",
//                         u = s ? "left" : "top",
//                         h = s ? "bottom" : "right",
//                         f = w(n)[l];
//                     a[h] - f < o[c] && (e.offsets.popper[c] -= o[c] - (a[h] - f)), a[c] + f > o[h] && (e.offsets.popper[c] += a[c] + f - o[h]);
//                     var p = a[c] + a[l] / 2 - f / 2 - d(e.offsets.popper)[c];
//                     return p = M(P(o[l] - f, p), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[c] = Math.round(p), e.offsets.arrow[u] = "", e
//                 },
//                 element: "[x-arrow]"
//             },
//             flip: {
//                 order: 600,
//                 enabled: !0,
//                 fn: function (e, t) {
//                     if (E(e.instance.modifiers, "inner")) return e;
//                     if (e.flipped && e.placement === e.originalPlacement) return e;
//                     var n = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
//                         i = e.placement.split("-")[0],
//                         r = T(i),
//                         o = e.placement.split("-")[1] || "",
//                         a = [];
//                     switch (t.behavior) {
//                         case "flip":
//                             a = [i, r];
//                             break;
//                         case "clockwise":
//                             a = L(i);
//                             break;
//                         case "counterclockwise":
//                             a = L(i, !0);
//                             break;
//                         default:
//                             a = t.behavior
//                     }
//                     return a.forEach((function (s, l) {
//                         if (i !== s || a.length === l + 1) return e;
//                         i = e.placement.split("-")[0], r = T(i);
//                         var c = e.offsets.popper,
//                             u = e.offsets.reference,
//                             h = F,
//                             d = "left" === i && h(c.right) > h(u.left) || "right" === i && h(c.left) < h(u.right) || "top" === i && h(c.bottom) > h(u.top) || "bottom" === i && h(c.top) < h(u.bottom),
//                             f = h(c.left) < h(n.left),
//                             p = h(c.right) > h(n.right),
//                             g = h(c.top) < h(n.top),
//                             m = h(c.bottom) > h(n.bottom),
//                             v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
//                             y = -1 !== ["top", "bottom"].indexOf(i),
//                             b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
//                         (d || v || b) && (e.flipped = !0, (d || v) && (i = a[l + 1]), b && (o = function (e) {
//                             return "end" === e ? "start" : "start" === e ? "end" : e
//                         }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = Z({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = _(e.instance.modifiers, e, "flip"))
//                     })), e
//                 },
//                 behavior: "flip",
//                 padding: 5,
//                 boundariesElement: "viewport"
//             },
//             inner: {
//                 order: 700,
//                 enabled: !1,
//                 fn: function (e) {
//                     var t = e.placement,
//                         n = t.split("-")[0],
//                         i = e.offsets,
//                         r = i.popper,
//                         o = i.reference,
//                         a = -1 !== ["left", "right"].indexOf(n),
//                         s = -1 === ["top", "left"].indexOf(n);
//                     return r[a ? "left" : "top"] = o[t] - (s ? r[a ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = d(r), e
//                 }
//             },
//             hide: {
//                 order: 800,
//                 enabled: !0,
//                 fn: function (e) {
//                     if (!I(e.instance.modifiers, "hide", "preventOverflow")) return e;
//                     var t = e.offsets.reference,
//                         n = S(e.instance.modifiers, (function (e) {
//                             return "preventOverflow" === e.name
//                         })).boundaries;
//                     if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
//                         if (!0 === e.hide) return e;
//                         e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
//                     } else {
//                         if (!1 === e.hide) return e;
//                         e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
//                     }
//                     return e
//                 }
//             },
//             computeStyle: {
//                 order: 850,
//                 enabled: !0,
//                 fn: function (e, t) {
//                     var n = t.x,
//                         i = t.y,
//                         o = e.offsets.popper,
//                         a = S(e.instance.modifiers, (function (e) {
//                             return "applyStyle" === e.name
//                         })).gpuAcceleration;
//                     void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
//                     var s, l, c = void 0 === a ? t.gpuAcceleration : a,
//                         u = f(r(e.instance.popper)),
//                         h = {
//                             position: o.position
//                         },
//                         d = {
//                             left: F(o.left),
//                             top: F(o.top),
//                             bottom: F(o.bottom),
//                             right: F(o.right)
//                         },
//                         p = "bottom" === n ? "top" : "bottom",
//                         g = "right" === i ? "left" : "right",
//                         m = D("transform");
//                     if (l = "bottom" == p ? -u.height + d.bottom : d.top, s = "right" == g ? -u.width + d.right : d.left, c && m) h[m] = "translate3d(" + s + "px, " + l + "px, 0)", h[p] = 0, h[g] = 0, h.willChange = "transform";
//                     else {
//                         var v = "right" == g ? -1 : 1;
//                         h[p] = l * ("bottom" == p ? -1 : 1), h[g] = s * v, h.willChange = p + ", " + g
//                     }
//                     return e.attributes = Z({}, {
//                         "x-placement": e.placement
//                     }, e.attributes), e.styles = Z({}, h, e.styles), e
//                 },
//                 gpuAcceleration: !0,
//                 x: "bottom",
//                 y: "right"
//             },
//             applyStyle: {
//                 order: 900,
//                 enabled: !0,
//                 fn: function (e) {
//                     return j(e.instance.popper, e.styles),
//                         function (e, t) {
//                             Object.keys(t).forEach((function (n) {
//                                 !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
//                             }))
//                         }(e.instance.popper, e.attributes), e.offsets.arrow && j(e.arrowElement, e.offsets.arrow), e
//                 },
//                 onLoad: function (e, t, n, i, r) {
//                     var o = x(0, t, e),
//                         a = b(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
//                     return t.setAttribute("x-placement", a), j(t, {
//                         position: "absolute"
//                     }), n
//                 },
//                 gpuAcceleration: void 0
//             }
//         }
//     }, J
// }));
var STR_PAD_LEFT = 1,
    STR_PAD_RIGHT = 2,
    STR_PAD_BOTH = 3;

function pad(e, t, n, i) {
    if (void 0 === t && (t = 0), void 0 === n && (n = " "), void 0 === i && (i = STR_PAD_RIGHT), t + 1 >= e.length) switch (i) {
        case STR_PAD_LEFT:
            e = Array(t + 1 - e.length).join(n) + e;
            break;
        case STR_PAD_BOTH:
            var r = Math.ceil((padlen = t - e.length) / 2),
                o = padlen - r;
            e = Array(o + 1).join(n) + e + Array(r + 1).join(n);
            break;
        default:
            e += Array(t + 1 - e.length).join(n)
    }
    return e
}

// function getDeviceInfo() {
//     var e = window.navigator,
//         t = window.screen,
//         n = e.mimeTypes.length;
//     n += e.userAgent.replace(/\D+/g, ""), n += e.plugins.length, n += t.height || "", n += t.width || "", n += t.pixelDepth || "", deviceId = n
// }! function () {
//     var e = window.AmCharts;
//     e.AmRectangularChart = e.Class({
//         inherits: e.AmCoordinateChart,
//         construct: function (t) {
//             e.AmRectangularChart.base.construct.call(this, t), this.theme = t, this.createEvents("zoomed", "changed"), this.marginRight = this.marginBottom = this.marginTop = this.marginLeft = 20, this.depth3D = this.angle = 0, this.plotAreaFillColors = "#FFFFFF", this.plotAreaFillAlphas = 0, this.plotAreaBorderColor = "#000000", this.plotAreaBorderAlpha = 0, this.maxZoomFactor = 20, this.zoomOutButtonImageSize = 19, this.zoomOutButtonImage = "lens", this.zoomOutText = "Show all", this.zoomOutButtonColor = "#e5e5e5", this.zoomOutButtonAlpha = 0, this.zoomOutButtonRollOverAlpha = 1, this.zoomOutButtonPadding = 8, this.trendLines = [], this.autoMargins = !0, this.marginsUpdated = !1, this.autoMarginOffset = 10, e.applyTheme(this, t, "AmRectangularChart")
//         },
//         initChart: function () {
//             e.AmRectangularChart.base.initChart.call(this), this.updateDxy(), !this.marginsUpdated && this.autoMargins && (this.resetMargins(), this.drawGraphs = !1), this.processScrollbars(), this.updateMargins(), this.updatePlotArea(), this.updateScrollbars(), this.updateTrendLines(), this.updateChartCursor(), this.updateValueAxes(), this.scrollbarOnly || this.updateGraphs()
//         },
//         drawChart: function () {
//             if (e.AmRectangularChart.base.drawChart.call(this), this.drawPlotArea(), e.ifArray(this.chartData)) {
//                 var t = this.chartCursor;
//                 t && t.draw()
//             }
//         },
//         resetMargins: function () {
//             var e, t = {};
//             if ("xy" == this.type) {
//                 var n = this.xAxes,
//                     i = this.yAxes;
//                 for (e = 0; e < n.length; e++) {
//                     var r = n[e];
//                     r.ignoreAxisWidth || (r.setOrientation(!0), r.fixAxisPosition(), t[r.position] = !0)
//                 }
//                 for (e = 0; e < i.length; e++)(n = i[e]).ignoreAxisWidth || (n.setOrientation(!1), n.fixAxisPosition(), t[n.position] = !0)
//             } else {
//                 for (i = this.valueAxes, e = 0; e < i.length; e++)(n = i[e]).ignoreAxisWidth || (n.setOrientation(this.rotate), n.fixAxisPosition(), t[n.position] = !0);
//                 (e = this.categoryAxis) && !e.ignoreAxisWidth && (e.setOrientation(!this.rotate), e.fixAxisPosition(), e.fixAxisPosition(), t[e.position] = !0)
//             }
//             t.left && (this.marginLeft = 0), t.right && (this.marginRight = 0), t.top && (this.marginTop = 0), t.bottom && (this.marginBottom = 0), this.fixMargins = t
//         },
//         measureMargins: function () {
//             var e, t, n = this.valueAxes,
//                 i = this.autoMarginOffset,
//                 r = this.fixMargins,
//                 o = this.realWidth,
//                 a = this.realHeight,
//                 s = i,
//                 l = i,
//                 c = o;
//             for (e = a, t = 0; t < n.length; t++) n[t].handleSynchronization(), e = this.getAxisBounds(n[t], s, c, l, e), s = Math.round(e.l), c = Math.round(e.r), l = Math.round(e.t), e = Math.round(e.b);
//             (n = this.categoryAxis) && (e = this.getAxisBounds(n, s, c, l, e), s = Math.round(e.l), c = Math.round(e.r), l = Math.round(e.t), e = Math.round(e.b)), r.left && s < i && (this.marginLeft = Math.round(-s + i), !isNaN(this.minMarginLeft) && this.marginLeft < this.minMarginLeft && (this.marginLeft = this.minMarginLeft)), r.right && c >= o - i && (this.marginRight = Math.round(c - o + i), !isNaN(this.minMarginRight) && this.marginRight < this.minMarginRight && (this.marginRight = this.minMarginRight)), r.top && l < i + this.titleHeight && (this.marginTop = Math.round(this.marginTop - l + i + this.titleHeight), !isNaN(this.minMarginTop) && this.marginTop < this.minMarginTop && (this.marginTop = this.minMarginTop)), r.bottom && e > a - i && (this.marginBottom = Math.round(this.marginBottom + e - a + i), !isNaN(this.minMarginBottom) && this.marginBottom < this.minMarginBottom && (this.marginBottom = this.minMarginBottom)), this.initChart()
//         },
//         getAxisBounds: function (e, t, n, i, r) {
//             if (!e.ignoreAxisWidth) {
//                 var o = e.labelsSet,
//                     a = e.tickLength;
//                 if (e.inside && (a = 0), o) switch (o = e.getBBox(), e.position) {
//                     case "top":
//                         i > (e = o.y) && (i = e);
//                         break;
//                     case "bottom":
//                         r < (e = o.y + o.height) && (r = e);
//                         break;
//                     case "right":
//                         n < (e = o.x + o.width + a + 3) && (n = e);
//                         break;
//                     case "left":
//                         t > (e = o.x - a) && (t = e)
//                 }
//             }
//             return {
//                 l: t,
//                 t: i,
//                 r: n,
//                 b: r
//             }
//         },
//         drawZoomOutButton: function () {
//             var t = this;
//             if (!t.zbSet) {
//                 var n = t.container.set();
//                 t.zoomButtonSet.push(n);
//                 var i, r = t.color,
//                     o = t.fontSize,
//                     a = t.zoomOutButtonImageSize,
//                     s = t.zoomOutButtonImage.replace(/\.[a-z]*$/i, ""),
//                     l = t.langObj.zoomOutText || t.zoomOutText,
//                     c = t.zoomOutButtonColor,
//                     u = t.zoomOutButtonAlpha,
//                     h = t.zoomOutButtonFontSize,
//                     d = t.zoomOutButtonPadding;
//                 isNaN(h) || (o = h), (h = t.zoomOutButtonFontColor) && (r = h), (h = t.zoomOutButton) && (h.fontSize && (o = h.fontSize), h.color && (r = h.color), h.backgroundColor && (c = h.backgroundColor), isNaN(h.backgroundAlpha) || (t.zoomOutButtonRollOverAlpha = h.backgroundAlpha));
//                 var f = h = 0;
//                 for (f = t.pathToImages, s && ((e.isAbsolute(s) || void 0 === f) && (f = ""), i = t.container.image(f + s + t.extension, 0, 0, a, a), e.setCN(t, i, "zoom-out-image"), n.push(i), h = (i = i.getBBox()).width + 5), void 0 !== l && (r = e.text(t.container, l, r, t.fontFamily, o, "start"), e.setCN(t, r, "zoom-out-label"), o = r.getBBox(), r.translate(h, f = i ? i.height / 2 - 3 : o.height / 2), n.push(r)), i = n.getBBox(), r = 1, e.isModern || (r = 0), (c = e.rect(t.container, i.width + 2 * d + 5, i.height + 2 * d - 2, c, 1, 1, c, r)).setAttr("opacity", u), c.translate(-d, -d), e.setCN(t, c, "zoom-out-bg"), n.push(c), c.toBack(), t.zbBG = c, i = c.getBBox(), n.translate(t.marginLeftReal + t.plotAreaWidth - i.width + d, t.marginTopReal + d), n.hide(), n.mouseover((function () {
//                         t.rollOverZB()
//                     })).mouseout((function () {
//                         t.rollOutZB()
//                     })).click((function () {
//                         t.clickZB()
//                     })).touchstart((function () {
//                         t.rollOverZB()
//                     })).touchend((function () {
//                         t.rollOutZB(), t.clickZB()
//                     })), u = 0; u < n.length; u++) n[u].attr({
//                     cursor: "pointer"
//                 });
//                 void 0 !== t.zoomOutButtonTabIndex && (n.setAttr("tabindex", t.zoomOutButtonTabIndex), n.setAttr("role", "menuitem"), n.keyup((function (e) {
//                     13 == e.keyCode && t.clickZB()
//                 }))), t.zbSet = n
//             }
//         },
//         rollOverZB: function () {
//             this.rolledOverZB = !0, this.zbBG.setAttr("opacity", this.zoomOutButtonRollOverAlpha)
//         },
//         rollOutZB: function () {
//             this.rolledOverZB = !1, this.zbBG.setAttr("opacity", this.zoomOutButtonAlpha)
//         },
//         clickZB: function () {
//             this.rolledOverZB = !1, this.zoomOut()
//         },
//         zoomOut: function () {
//             this.zoomOutValueAxes()
//         },
//         drawPlotArea: function () {
//             var t = this.dx,
//                 n = this.dy,
//                 i = this.marginLeftReal,
//                 r = this.marginTopReal,
//                 o = this.plotAreaWidth - 1,
//                 a = this.plotAreaHeight - 1,
//                 s = this.plotAreaFillColors,
//                 l = this.plotAreaFillAlphas,
//                 c = this.plotAreaBorderColor,
//                 u = this.plotAreaBorderAlpha;
//             "object" == typeof l && (l = l[0]), s = e.polygon(this.container, [0, o, o, 0, 0], [0, 0, a, a, 0], s, l, 1, c, u, this.plotAreaGradientAngle), e.setCN(this, s, "plot-area"), s.translate(i + t, r + n), this.set.push(s), 0 !== t && 0 !== n && ("object" == typeof (s = this.plotAreaFillColors) && (s = s[0]), s = e.adjustLuminosity(s, -.15), o = e.polygon(this.container, [0, t, o + t, o, 0], [0, n, n, 0, 0], s, l, 1, c, u), e.setCN(this, o, "plot-area-bottom"), o.translate(i, r + a), this.set.push(o), t = e.polygon(this.container, [0, 0, t, t, 0], [0, a, a + n, n, 0], s, l, 1, c, u), e.setCN(this, t, "plot-area-left"), t.translate(i, r), this.set.push(t)), (i = this.bbset) && this.scrollbarOnly && i.remove()
//         },
//         updatePlotArea: function () {
//             var e = this.updateWidth(),
//                 t = this.updateHeight(),
//                 n = this.container;
//             this.realWidth = e, this.realWidth = t, n && this.container.setSize(e, t);
//             var i = this.marginTopReal;
//             1 > (e = e - (n = this.marginLeftReal) - this.marginRightReal - this.dx) && (e = 1), 1 > (t = t - i - this.marginBottomReal) && (t = 1), this.plotAreaWidth = Math.round(e), this.plotAreaHeight = Math.round(t), this.plotBalloonsSet.translate(n, i)
//         },
//         updateDxy: function () {
//             this.dx = Math.round(this.depth3D * Math.cos(this.angle * Math.PI / 180)), this.dy = Math.round(-this.depth3D * Math.sin(this.angle * Math.PI / 180)), this.d3x = Math.round(this.columnSpacing3D * Math.cos(this.angle * Math.PI / 180)), this.d3y = Math.round(-this.columnSpacing3D * Math.sin(this.angle * Math.PI / 180))
//         },
//         updateMargins: function () {
//             var e = this.getTitleHeight();
//             this.titleHeight = e, this.marginTopReal = this.marginTop - this.dy, this.fixMargins && !this.fixMargins.top && (this.marginTopReal += e), this.marginBottomReal = this.marginBottom, this.marginLeftReal = this.marginLeft, this.marginRightReal = this.marginRight
//         },
//         updateValueAxes: function () {
//             var e, t = this.valueAxes;
//             for (e = 0; e < t.length; e++) {
//                 var n = t[e];
//                 this.setAxisRenderers(n), this.updateObjectSize(n)
//             }
//         },
//         setAxisRenderers: function (t) {
//             t.axisRenderer = e.RecAxis, t.guideFillRenderer = e.RecFill, t.axisItemRenderer = e.RecItem, t.marginsChanged = !0
//         },
//         updateGraphs: function () {
//             var e, t = this.graphs;
//             for (e = 0; e < t.length; e++) {
//                 var n = t[e];
//                 n.index = e, n.rotate = this.rotate, this.updateObjectSize(n)
//             }
//         },
//         updateObjectSize: function (e) {
//             e.width = this.plotAreaWidth - 1, e.height = this.plotAreaHeight - 1, e.x = this.marginLeftReal, e.y = this.marginTopReal, e.dx = this.dx, e.dy = this.dy
//         },
//         updateChartCursor: function () {
//             var t = this.chartCursor;
//             t && (t = e.processObject(t, e.ChartCursor, this.theme), this.updateObjectSize(t), this.addChartCursor(t), t.chart = this)
//         },
//         processScrollbars: function () {
//             var t = this.chartScrollbar;
//             t && (t = e.processObject(t, e.ChartScrollbar, this.theme), this.addChartScrollbar(t))
//         },
//         updateScrollbars: function () {},
//         removeChartCursor: function () {
//             e.callMethod("destroy", [this.chartCursor]), this.chartCursor = null
//         },
//         zoomTrendLines: function () {
//             var e, t = this.trendLines;
//             for (e = 0; e < t.length; e++) {
//                 var n = t[e];
//                 n.valueAxis.recalculateToPercents ? n.set && n.set.hide() : (n.x = this.marginLeftReal, n.y = this.marginTopReal, n.draw())
//             }
//         },
//         handleCursorValueZoom: function () {},
//         addTrendLine: function (e) {
//             this.trendLines.push(e)
//         },
//         zoomOutValueAxes: function () {
//             for (var e = this.valueAxes, t = 0; t < e.length; t++) e[t].zoomOut()
//         },
//         removeTrendLine: function (e) {
//             var t, n = this.trendLines;
//             for (t = n.length - 1; 0 <= t; t--) n[t] == e && n.splice(t, 1)
//         },
//         adjustMargins: function (e, t) {
//             var n = e.scrollbarHeight + e.offset;
//             e.enabled && ("top" == e.position ? t ? this.marginLeftReal += n : this.marginTopReal += n : t ? this.marginRightReal += n : this.marginBottomReal += n)
//         },
//         getScrollbarPosition: function (e, t, n) {
//             var i = "bottom",
//                 r = "top";
//             e.oppositeAxis || (r = i, i = "top"), e.position = t ? "bottom" == n || "left" == n ? i : r : "top" == n || "right" == n ? i : r
//         },
//         updateChartScrollbar: function (e, t) {
//             if (e) {
//                 e.rotate = t;
//                 var n = this.marginTopReal,
//                     i = this.marginLeftReal,
//                     r = e.scrollbarHeight,
//                     o = this.dx,
//                     a = this.dy,
//                     s = e.offset;
//                 "top" == e.position ? t ? (e.y = n, e.x = i - r - s) : (e.y = n - r + a - s, e.x = i + o) : t ? (e.y = n + a, e.x = i + this.plotAreaWidth + o + s) : (e.y = n + this.plotAreaHeight + s, e.x = this.marginLeftReal)
//             }
//         },
//         showZB: function (e) {
//             var t = this.zbSet;
//             e && "" !== (t = this.zoomOutText) && t && this.drawZoomOutButton(), (t = this.zbSet) && (this.zoomButtonSet.push(t), e ? t.show() : t.hide(), this.rollOutZB())
//         },
//         handleReleaseOutside: function (t) {
//             e.AmRectangularChart.base.handleReleaseOutside.call(this, t), (t = this.chartCursor) && t.handleReleaseOutside && t.handleReleaseOutside()
//         },
//         handleMouseDown: function (t) {
//             e.AmRectangularChart.base.handleMouseDown.call(this, t);
//             var n = this.chartCursor;
//             n && n.handleMouseDown && !this.rolledOverZB && n.handleMouseDown(t)
//         },
//         update: function () {
//             e.AmRectangularChart.base.update.call(this), this.chartCursor && this.chartCursor.update && this.chartCursor.update()
//         },
//         handleScrollbarValueZoom: function (e) {
//             this.relativeZoomValueAxes(e.target.valueAxes, e.relativeStart, e.relativeEnd), this.zoomAxesAndGraphs()
//         },
//         zoomValueScrollbar: function (e) {
//             if (e && e.enabled) {
//                 var t = e.valueAxes[0],
//                     n = t.relativeStart,
//                     i = t.relativeEnd;
//                 t.reversed && (i = 1 - n, n = 1 - t.relativeEnd), e.percentZoom(n, i)
//             }
//         },
//         zoomAxesAndGraphs: function () {
//             if (!this.scrollbarOnly) {
//                 var e, t = this.valueAxes;
//                 for (e = 0; e < t.length; e++) t[e].zoom(this.start, this.end);
//                 for (t = this.graphs, e = 0; e < t.length; e++) t[e].zoom(this.start, this.end);
//                 (e = this.chartCursor) && e.clearSelection(), this.zoomTrendLines()
//             }
//         },
//         handleValueAxisZoomReal: function (e, t) {
//             if ((i = e.relativeStart) > (r = e.relativeEnd)) var n = i,
//                 i = r,
//                 r = n;
//             this.relativeZoomValueAxes(t, i, r), this.updateAfterValueZoom()
//         },
//         updateAfterValueZoom: function () {
//             this.zoomAxesAndGraphs(), this.zoomScrollbar()
//         },
//         relativeZoomValueAxes: function (t, n, i) {
//             if (this.hideBalloonReal(), (n = e.fitToBounds(n, 0, 1)) > (i = e.fitToBounds(i, 0, 1))) {
//                 var r = n;
//                 n = i, i = r
//             }
//             var o = e.getDecimals(r = 1 / this.maxZoomFactor) + 4;
//             if (i - n < r && (n = (i = n + (i - n) / 2) - r / 2, 1 < (i += r / 2) && (n -= i - 1, i = 1), 0 > n && (n = 0, i = r)), n = e.roundTo(n, o), i = e.roundTo(i, o), r = !1, t) {
//                 for (o = 0; o < t.length; o++) {
//                     var a = t[o].zoomToRelativeValues(n, i, !0);
//                     a && (r = a)
//                 }
//                 this.showZB()
//             }
//             return r
//         },
//         addChartCursor: function (t) {
//             e.callMethod("destroy", [this.chartCursor]), t && (this.listenTo(t, "moved", this.handleCursorMove), this.listenTo(t, "zoomed", this.handleCursorZoom), this.listenTo(t, "zoomStarted", this.handleCursorZoomStarted), this.listenTo(t, "panning", this.handleCursorPanning), this.listenTo(t, "onHideCursor", this.handleCursorHide)), this.chartCursor = t
//         },
//         handleCursorChange: function () {},
//         handleCursorMove: function (e) {
//             var t, n = this.valueAxes;
//             for (t = 0; t < n.length; t++)
//                 if (!e.panning) {
//                     var i = n[t];
//                     i && i.showBalloon && i.showBalloon(e.x, e.y)
//                 }
//         },
//         handleCursorZoom: function (e) {
//             if (this.skipZoomed) this.skipZoomed = !1;
//             else {
//                 var t = this.startX0,
//                     n = this.endX0,
//                     i = this.endY0,
//                     r = this.startY0,
//                     o = e.startX,
//                     a = e.endX,
//                     s = e.startY,
//                     l = e.endY;
//                 this.startX0 = this.endX0 = this.startY0 = this.endY0 = NaN, this.handleCursorZoomReal(t + o * (n - t), t + a * (n - t), r + s * (i - r), r + l * (i - r), e)
//             }
//         },
//         handleCursorHide: function () {
//             var e, t = this.valueAxes;
//             for (e = 0; e < t.length; e++) t[e].hideBalloon();
//             for (t = this.graphs, e = 0; e < t.length; e++) t[e].hideBalloonReal()
//         }
//     })
// }(),
// function () {
//     var e = window.AmCharts;
//     e.AmSerialChart = e.Class({
//         inherits: e.AmRectangularChart,
//         construct: function (t) {
//             this.type = "serial", e.AmSerialChart.base.construct.call(this, t), this.cname = "AmSerialChart", this.theme = t, this.columnSpacing = 5, this.columnSpacing3D = 0, this.columnWidth = .8;
//             var n = new e.CategoryAxis(t);
//             n.chart = this, this.categoryAxis = n, this.zoomOutOnDataUpdate = !0, this.mouseWheelZoomEnabled = this.mouseWheelScrollEnabled = this.rotate = this.skipZoom = !1, this.minSelectedTime = 0, e.applyTheme(this, t, this.cname)
//         },
//         initChart: function () {
//             e.AmSerialChart.base.initChart.call(this), this.updateCategoryAxis(this.categoryAxis, this.rotate, "categoryAxis"), this.dataChanged ? this.parseData() : this.onDataUpdated(), this.drawGraphs = !0
//         },
//         onDataUpdated: function () {
//             var e, t = this.countColumns(),
//                 n = this.chartData,
//                 i = this.graphs;
//             for (e = 0; e < i.length; e++) {
//                 var r = i[e];
//                 r.data = n, r.columnCount = t
//             }
//             0 < n.length && (this.firstTime = this.getStartTime(n[0].time), this.lastTime = this.getEndTime(n[n.length - 1].time)), this.drawChart(), this.autoMargins && !this.marginsUpdated ? (this.marginsUpdated = !0, this.measureMargins()) : this.dispDUpd()
//         },
//         syncGrid: function () {
//             if (this.synchronizeGrid) {
//                 var t, n, i = this.valueAxes;
//                 if (0 < i.length) {
//                     var r = 0;
//                     for (n = 0; n < i.length; n++) r < (t = i[n]).gridCountReal && (r = t.gridCountReal);
//                     var o = !1;
//                     for (n = 0; n < i.length; n++)
//                         if ((t = i[n]).gridCountReal < r) {
//                             var a = (r - t.gridCountReal) / 2,
//                                 s = o = a;
//                             0 != a - Math.round(a) && (o -= .5, s += .5), 0 <= t.min && 0 > t.min - o * t.step && (s += o, o = 0), 0 >= t.max && 0 < t.max + s * t.step && (o += s, s = 0), a = e.getDecimals(t.step), t.minimum = e.roundTo(t.min - o * t.step, a), t.maximum = e.roundTo(t.max + s * t.step, a), t.setStep = t.step, o = t.strictMinMax = !0
//                         } for (o && this.updateAfterValueZoom(), n = 0; n < i.length; n++)(t = i[n]).minimum = NaN, t.maximum = NaN, t.setStep = NaN, t.strictMinMax = !1
//                 }
//             }
//         },
//         handleWheelReal: function (e, t) {
//             if (!this.wheelBusy) {
//                 var n = this.categoryAxis,
//                     i = n.parseDates,
//                     r = n.minDuration(),
//                     o = 1,
//                     a = 1;
//                 if (this.mouseWheelZoomEnabled ? t || (o = -1) : t && (o = -1), l = this.chartCursor)
//                     if (l.mouseIsOver()) {
//                         var s = l.mouseX,
//                             l = l.mouseY;
//                         o != a && (o *= s = this.rotate ? l / this.plotAreaHeight : s / this.plotAreaWidth, a *= 1 - s), s = .05 * (this.end - this.start), i && (s = .05 * (this.endTime - this.startTime) / r), 1 > s && (s = 1), o *= s, a *= s, i && !n.equalSpacing || (o = Math.round(o), a = Math.round(a)), l = this.chartData.length, n = this.lastTime, s = this.firstTime, 0 > e ? i ? (l = this.endTime - this.startTime, i = this.startTime + o * r, r = this.endTime + a * r, 0 < a && 0 < o && r >= n && (r = n, i = n - l), this.zoomToDates(new Date(i), new Date(r))) : (0 < a && 0 < o && this.end >= l - 1 && (o = a = 0), this.zoomToIndexes(i = this.start + o, r = this.end + a)) : i ? (l = this.endTime - this.startTime, i = this.startTime - o * r, r = this.endTime - a * r, 0 < a && 0 < o && i <= s && (i = s, r = s + l), this.zoomToDates(new Date(i), new Date(r))) : (0 < a && 0 < o && 1 > this.start && (o = a = 0), this.zoomToIndexes(i = this.start - o, r = this.end - a))
//                     } else this.handleMouseOut()
//             }
//         },
//         validateData: function (t) {
//             this.marginsUpdated = !1, this.zoomOutOnDataUpdate && !t && (this.endTime = this.end = this.startTime = this.start = NaN);
//             var n = t = !1,
//                 i = !1,
//                 r = this.chartScrollbar;
//             r && (r.dragging && (t = !0, r.handleDragStop()), r.resizingRight && (i = !0, r.rightDragStop()), r.resizingLeft && (n = !0, r.leftDragStop())), e.AmSerialChart.base.validateData.call(this), t && r.handleDragStart(), i && r.rightDragStart(), n && r.leftDragStart()
//         },
//         drawChart: function () {
//             if (0 < this.realWidth && 0 < this.realHeight) {
//                 e.AmSerialChart.base.drawChart.call(this);
//                 var t = this.chartData;
//                 if (e.ifArray(t)) {
//                     !(r = this.chartScrollbar) || !this.marginsUpdated && this.autoMargins || r.draw(), (r = this.valueScrollbar) && r.draw();
//                     var n, i, r = t.length - 1;
//                     (n = this.categoryAxis).parseDates && !n.equalSpacing ? (n = this.startTime, i = this.endTime, (isNaN(n) || isNaN(i)) && (n = this.firstTime, i = this.lastTime)) : (n = this.start, i = this.end, (isNaN(n) || isNaN(i)) && (i = n = NaN), isNaN(n) && (isNaN(this.startTime) || (n = this.getClosestIndex(t, "time", this.startTime, !0, 0, t.length))), isNaN(i) && (isNaN(this.endTime) || (i = this.getClosestIndex(t, "time", this.endTime, !1, 0, t.length))), (isNaN(n) || isNaN(i)) && (n = 0, i = r)), this.endTime = this.startTime = this.end = this.start = void 0, this.zoom(n, i)
//                 }
//             } else this.cleanChart()
//         },
//         cleanChart: function () {
//             e.callMethod("destroy", [this.valueAxes, this.graphs, this.categoryAxis, this.chartScrollbar, this.chartCursor, this.valueScrollbar])
//         },
//         updateCategoryAxis: function (e, t, n) {
//             e.chart = this, e.id = n, e.rotate = t, e.setOrientation(!this.rotate), e.init(), this.setAxisRenderers(e), this.updateObjectSize(e)
//         },
//         updateValueAxes: function () {
//             e.AmSerialChart.base.updateValueAxes.call(this);
//             var t, n = this.valueAxes;
//             for (t = 0; t < n.length; t++) {
//                 var i = n[t],
//                     r = this.rotate;
//                 i.rotate = r, i.setOrientation(r), (r = this.categoryAxis).startOnAxis && !r.parseDates || (i.expandMinMax = !0)
//             }
//         },
//         getStartTime: function (t) {
//             var n = this.categoryAxis;
//             return e.resetDateToMin(new Date(t), n.minPeriod, 1, n.firstDayOfWeek).getTime()
//         },
//         getEndTime: function (t) {
//             var n = e.extractPeriod(this.categoryAxis.minPeriod);
//             return e.changeDate(new Date(t), n.period, n.count, !0).getTime() - 1
//         },
//         updateMargins: function () {
//             e.AmSerialChart.base.updateMargins.call(this);
//             var t = this.chartScrollbar;
//             t && (this.getScrollbarPosition(t, this.rotate, this.categoryAxis.position), this.adjustMargins(t, this.rotate)), (t = this.valueScrollbar) && (this.getScrollbarPosition(t, !this.rotate, this.valueAxes[0].position), this.adjustMargins(t, !this.rotate))
//         },
//         updateScrollbars: function () {
//             e.AmSerialChart.base.updateScrollbars.call(this), this.updateChartScrollbar(this.chartScrollbar, this.rotate), this.updateChartScrollbar(this.valueScrollbar, !this.rotate)
//         },
//         zoom: function (e, t) {
//             var n = this.categoryAxis;
//             n.parseDates && !n.equalSpacing ? (this.timeZoom(e, t), isNaN(e) && this.zoomOutValueAxes()) : this.indexZoom(e, t), (n = this.chartCursor) && (n.pan || n.hideCursorReal()), this.updateLegendValues()
//         },
//         timeZoom: function (t, n) {
//             var i = this.maxSelectedTime;
//             if (isNaN(i) || (n != this.endTime && n - t > i && (t = n - i), t != this.startTime && n - t > i && (n = t + i)), 0 < (r = this.minSelectedTime) && n - t < r) {
//                 var r, o = Math.round(t + (n - t) / 2);
//                 t = o - (r = Math.round(r / 2)), n = o + r
//             }
//             if (o = this.categoryAxis, e.ifArray(r = this.chartData) && (t != this.startTime || n != this.endTime)) {
//                 var a = o.minDuration(),
//                     s = this.firstTime,
//                     l = this.lastTime;
//                 t || (t = s, isNaN(i) || (t = l - i)), n || (n = l), t > l && (t = l), n < s && (n = s), t < s && (t = s), n > l && (n = l), n < t && (n = t + a), n - t < a / 5 && (n < l ? n = t + a / 5 : t = n - a / 5), this.startTime = t, this.endTime = n, a = this.getClosestIndex(r, "time", t, !0, 0, i = r.length - 1), r = this.getClosestIndex(r, "time", n, !1, a, i), o.timeZoom(t, n), o.zoom(a, r), this.start = e.fitToBounds(a, 0, i), this.end = e.fitToBounds(r, 0, i), this.zoomAxesAndGraphs(), this.zoomScrollbar(), this.fixCursor(), this.showZB(), this.syncGrid(), this.updateColumnsDepth(), this.dispatchTimeZoomEvent()
//             }
//         },
//         showZB: function () {
//             var t, n = this.categoryAxis;
//             n && n.parseDates && !n.equalSpacing && (this.startTime > this.firstTime && (t = !0), this.endTime < this.lastTime && (t = !0)), 0 < this.start && (t = !0), this.end < this.chartData.length - 1 && (t = !0), (n = this.valueAxes) && (n = n[0], isNaN(n.relativeStart) || (0 !== e.roundTo(n.relativeStart, 3) && (t = !0), 1 != e.roundTo(n.relativeEnd, 3) && (t = !0))), e.AmSerialChart.base.showZB.call(this, t)
//         },
//         updateAfterValueZoom: function () {
//             e.AmSerialChart.base.updateAfterValueZoom.call(this), this.updateColumnsDepth()
//         },
//         indexZoom: function (e, t) {
//             var n = this.maxSelectedSeries,
//                 i = !1;
//             if (isNaN(n) || (t != this.end && t - e > n && (e = t - n, i = !0), e != this.start && t - e > n && (t = e + n, i = !0)), i && (i = this.chartScrollbar) && i.dragger) {
//                 var r = i.dragger.getBBox();
//                 i.maxWidth = r.width, i.maxHeight = r.height
//             }
//             e == this.start && t == this.end || (i = this.chartData.length - 1, isNaN(e) && (e = 0, isNaN(n) || (e = i - n)), isNaN(t) && (t = i), t < e && (t = e), t > i && (t = i), e > i && (e = i - 1), 0 > e && (e = 0), this.start = e, this.end = t, this.categoryAxis.zoom(e, t), this.zoomAxesAndGraphs(), this.zoomScrollbar(), this.fixCursor(), this.showZB(0 !== e || t != this.chartData.length - 1), this.syncGrid(), this.updateColumnsDepth(), this.dispatchIndexZoomEvent())
//         },
//         updateGraphs: function () {
//             e.AmSerialChart.base.updateGraphs.call(this);
//             var t, n = this.graphs;
//             for (t = 0; t < n.length; t++) {
//                 var i = n[t];
//                 i.columnWidthReal = this.columnWidth, i.categoryAxis = this.categoryAxis, e.isString(i.fillToGraph) && (i.fillToGraph = this.graphsById[i.fillToGraph])
//             }
//         },
//         zoomAxesAndGraphs: function () {
//             e.AmSerialChart.base.zoomAxesAndGraphs.call(this), this.updateColumnsDepth()
//         },
//         updateColumnsDepth: function () {
//             if (0 !== this.depth3D || 0 !== this.angle) {
//                 var t, n, i = this.graphs;
//                 for (this.columnsArray = [], t = 0; t < i.length; t++) {
//                     var r, o = (n = i[t]).columnsArray;
//                     if (o)
//                         for (r = 0; r < o.length; r++) this.columnsArray.push(o[r])
//                 }
//                 if (this.columnsArray.sort(this.compareDepth), i = this.columnsSet, 0 < this.columnsArray.length) {
//                     for (o = this.container.set(), this.columnSet.push(o), t = 0; t < this.columnsArray.length; t++) o.push(this.columnsArray[t].column.set);
//                     n && o.translate(n.x, n.y), this.columnsSet = o
//                 }
//                 e.remove(i)
//             }
//         },
//         compareDepth: function (e, t) {
//             return e.depth > t.depth ? 1 : -1
//         },
//         zoomScrollbar: function () {
//             var e = this.chartScrollbar,
//                 t = this.categoryAxis;
//             if (e) {
//                 if (!this.zoomedByScrollbar) {
//                     var n = e.dragger;
//                     n && n.stop()
//                 }
//                 this.zoomedByScrollbar = !1, t.parseDates && !t.equalSpacing ? e.timeZoom(this.startTime, this.endTime) : e.zoom(this.start, this.end)
//             }
//             this.zoomValueScrollbar(this.valueScrollbar)
//         },
//         updateTrendLines: function () {
//             var t, n = this.trendLines;
//             for (t = 0; t < n.length; t++) {
//                 var i = e.processObject(i = n[t], e.TrendLine, this.theme);
//                 n[t] = i, i.chart = this, i.id || (i.id = "trendLineAuto" + t + "_" + (new Date).getTime()), e.isString(i.valueAxis) && (i.valueAxis = this.getValueAxisById(i.valueAxis)), i.valueAxis || (i.valueAxis = this.valueAxes[0]), i.categoryAxis = this.categoryAxis
//             }
//         },
//         validateNow: function (t, n) {
//             t && this.zoomOutOnDataUpdate && (this.endTime = this.end = this.startTime = this.start = NaN), e.AmSerialChart.base.validateNow.call(this, t, n)
//         },
//         countColumns: function () {
//             var e, t, n, i, r = 0,
//                 o = this.valueAxes.length,
//                 a = this.graphs.length,
//                 s = !1;
//             for (i = 0; i < o; i++) {
//                 var l = (t = this.valueAxes[i]).stackType,
//                     c = 0;
//                 if ("100%" == l || "regular" == l)
//                     for (s = !1, n = 0; n < a; n++)(e = this.graphs[n]).tcc = 1, e.valueAxis == t && "column" == e.type && (!s && e.stackable && (r++, s = !0), (!e.stackable && e.clustered || e.newStack && 0 !== c) && r++, e.columnIndex = r - 1, e.clustered || (e.columnIndex = 0), c++);
//                 if ("none" == l || "3d" == l) {
//                     for (c = !1, n = 0; n < a; n++)(e = this.graphs[n]).valueAxis == t && "column" == e.type && (e.clustered ? (e.tcc = 1, e.newStack && (r = 0), e.hidden || (e.columnIndex = r, r++)) : e.hidden || (c = !0, e.tcc = 1, e.columnIndex = 0));
//                     c && 0 === r && (r = 1)
//                 }
//                 if ("3d" == l) {
//                     for (t = 1, c = 0; c < a; c++)(e = this.graphs[c]).newStack && t++, e.depthCount = t, e.tcc = r;
//                     r = t
//                 }
//                 if ("regular" == l || "100%" == l)
//                     for (t = 10, c = 0; c < a; c++)(e = this.graphs[c]).newStack && t--, e.depthCount = t, e.tcc = r
//             }
//             return r
//         },
//         parseData: function () {
//             e.AmSerialChart.base.parseData.call(this), this.parseSerialData(this.dataProvider)
//         },
//         getCategoryIndexByValue: function (e) {
//             var t, n = this.chartData;
//             for (t = 0; t < n.length; t++)
//                 if (n[t].category == e) return t
//         },
//         handleScrollbarZoom: function (e) {
//             this.zoomedByScrollbar = !0, this.zoom(e.start, e.end)
//         },
//         dispatchTimeZoomEvent: function () {
//             if (this.drawGraphs && (this.prevStartTime != this.startTime || this.prevEndTime != this.endTime)) {
//                 var t = {
//                     type: "zoomed"
//                 };
//                 t.startDate = new Date(this.startTime), t.endDate = new Date(this.endTime), t.startIndex = this.start, t.endIndex = this.end, this.startIndex = this.start, this.endIndex = this.end, this.startDate = t.startDate, this.endDate = t.endDate, this.prevStartTime = this.startTime, this.prevEndTime = this.endTime;
//                 var n, i = e.extractPeriod((n = this.categoryAxis).minPeriod).period;
//                 t.startValue = e.formatDate(t.startDate, n = n.dateFormatsObject[i], this), t.endValue = e.formatDate(t.endDate, n, this), t.chart = this, t.target = this, this.fire(t)
//             }
//         },
//         dispatchIndexZoomEvent: function () {
//             if (this.drawGraphs && (this.prevStartIndex != this.start || this.prevEndIndex != this.end)) {
//                 this.startIndex = this.start, this.endIndex = this.end;
//                 var t = this.chartData;
//                 if (e.ifArray(t) && !isNaN(this.start) && !isNaN(this.end)) {
//                     var n = {
//                         chart: this,
//                         target: this,
//                         type: "zoomed"
//                     };
//                     n.startIndex = this.start, n.endIndex = this.end, n.startValue = t[this.start].category, n.endValue = t[this.end].category, this.categoryAxis.parseDates && (this.startTime = t[this.start].time, this.endTime = t[this.end].time, n.startDate = new Date(this.startTime), n.endDate = new Date(this.endTime)), this.prevStartIndex = this.start, this.prevEndIndex = this.end, this.fire(n)
//                 }
//             }
//         },
//         updateLegendValues: function () {
//             this.legend && this.legend.updateValues()
//         },
//         getClosestIndex: function (e, t, n, i, r, o) {
//             0 > r && (r = 0), o > e.length - 1 && (o = e.length - 1);
//             var a = r + Math.round((o - r) / 2),
//                 s = e[a][t];
//             return n == s ? a : 1 >= o - r ? i || Math.abs(e[r][t] - n) < Math.abs(e[o][t] - n) ? r : o : n == s ? a : n < s ? this.getClosestIndex(e, t, n, i, r, a) : this.getClosestIndex(e, t, n, i, a, o)
//         },
//         zoomToIndexes: function (e, t) {
//             var n = this.chartData;
//             if (n) {
//                 var i = n.length;
//                 0 < i && (0 > e && (e = 0), t > i - 1 && (t = i - 1), (i = this.categoryAxis).parseDates && !i.equalSpacing ? this.zoom(n[e].time, this.getEndTime(n[t].time)) : this.zoom(e, t))
//             }
//         },
//         zoomToDates: function (t, n) {
//             var i = this.chartData;
//             if (i)
//                 if (this.categoryAxis.equalSpacing) {
//                     var r = this.getClosestIndex(i, "time", t.getTime(), !0, 0, i.length);
//                     n = e.resetDateToMin(n, this.categoryAxis.minPeriod, 1), i = this.getClosestIndex(i, "time", n.getTime(), !1, 0, i.length), this.zoom(r, i)
//                 } else this.zoom(t.getTime(), n.getTime())
//         },
//         zoomToCategoryValues: function (e, t) {
//             this.chartData && this.zoom(this.getCategoryIndexByValue(e), this.getCategoryIndexByValue(t))
//         },
//         formatPeriodString: function (t, n) {
//             if (n) {
//                 n.periodDataItem = {}, n.periodPercentDataItem = {};
//                 var i = ["value", "open", "low", "high", "close"],
//                     r = "value open low high close average sum count".split(" "),
//                     o = n.valueAxis,
//                     a = this.chartData,
//                     s = n.numberFormatter;
//                 s || (s = this.nf);
//                 for (var l = 0; l < i.length; l++) {
//                     for (var c, u, h, d, f, p, g, m, v, y, b = i[l], x = 0, w = 0, T = 0, C = 0, S = this.start; S <= this.end; S++)
//                         if (E = a[S]) {
//                             var _ = E.axes[o.id].graphs[n.id];
//                             if (_) {
//                                 if (_.values) {
//                                     var A = _.values[b],
//                                         E = E.x.categoryAxis;
//                                     this.rotate ? (0 > E || E > _.graph.height) && (A = NaN) : (0 > E || E > _.graph.width) && (A = NaN), isNaN(A) || (isNaN(c) && (c = A), u = A, (isNaN(h) || h > A) && (h = A), (isNaN(d) || d < A) && (d = A), f = e.getDecimals(x), E = e.getDecimals(A), f = (x = e.roundTo(x += A, Math.max(f, E))) / ++w)
//                                 }
//                                 _.percents && (_ = _.percents[b], !isNaN(_)) && (isNaN(p) && (p = _), g = _, (isNaN(m) || m > _) && (m = _), (isNaN(v) || v < _) && (v = _), y = e.getDecimals(T), A = e.getDecimals(_), y = (T = e.roundTo(T += _, Math.max(y, A))) / ++C)
//                             }
//                         } T = {
//                         open: p,
//                         close: g,
//                         high: v,
//                         low: m,
//                         average: y,
//                         sum: T,
//                         count: C
//                     }, t = e.formatValue(t, x = {
//                         open: c,
//                         close: u,
//                         high: d,
//                         low: h,
//                         average: f,
//                         sum: x,
//                         count: w
//                     }, r, s, b + "\\.", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers), t = e.formatValue(t, T, r, this.pf, "percents\\." + b + "\\."), n.periodDataItem[b] = x, n.periodPercentDataItem[b] = T
//                 }
//             }
//             return e.cleanFromEmpty(t)
//         },
//         formatString: function (t, n, i) {
//             if (n) {
//                 var r = n.graph;
//                 if (void 0 !== t) {
//                     if (-1 != t.indexOf("[[category]]")) {
//                         var o = n.serialDataItem.category;
//                         if (this.categoryAxis.parseDates) {
//                             var a = this.balloonDateFormat,
//                                 s = this.chartCursor;
//                             s && s.categoryBalloonDateFormat && (a = s.categoryBalloonDateFormat), -1 != (a = e.formatDate(o, a, this)).indexOf("fff") && (a = e.formatMilliseconds(a, o)), o = a
//                         }
//                         t = t.replace(/\[\[category\]\]/g, String(o.replace("$", "$$$")))
//                     }(o = r.numberFormatter) || (o = this.nf), (s = (a = n.graph.valueAxis).duration) && !isNaN(n.values.value) && a.maxInterval && (s = e.formatDuration(n.values.value, s, "", a.durationUnits, a.maxInterval, o), t = t.replace(RegExp("\\[\\[value\\]\\]", "g"), s)), "date" == a.type && (a = e.formatDate(new Date(n.values.value), r.dateFormat, this), s = RegExp("\\[\\[value\\]\\]", "g"), t = t.replace(s, a), a = e.formatDate(new Date(n.values.open), r.dateFormat, this), s = RegExp("\\[\\[open\\]\\]", "g"), t = t.replace(s, a)), r = "value open low high close total".split(" "), t = e.formatValue(t, n.percents, r, a = this.pf, "percents\\."), t = e.formatValue(t, n.values, r, o, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers), -1 != (t = e.formatValue(t, n.values, ["percents"], a)).indexOf("[[") && (t = e.formatDataContextValue(t, n.dataContext)), -1 != t.indexOf("[[") && n.graph.customData && (t = e.formatDataContextValue(t, n.graph.customData)), t = e.AmSerialChart.base.formatString.call(this, t, n, i)
//                 }
//                 return t
//             }
//         },
//         updateChartCursor: function () {
//             e.AmSerialChart.base.updateChartCursor.call(this);
//             var t = this.chartCursor,
//                 n = this.categoryAxis;
//             if (t) {
//                 var i = t.categoryBalloonAlpha,
//                     r = t.categoryBalloonColor,
//                     o = t.color;
//                 void 0 === r && (r = t.cursorColor);
//                 var a = t.valueZoomable,
//                     s = t.zoomable,
//                     l = t.valueLineEnabled;
//                 if (this.rotate ? (t.vLineEnabled = l, t.hZoomEnabled = a, t.vZoomEnabled = s) : (t.hLineEnabled = l, t.vZoomEnabled = a, t.hZoomEnabled = s), t.valueLineBalloonEnabled)
//                     for (l = 0; l < this.valueAxes.length; l++)(s = (a = this.valueAxes[l]).balloon) || (s = {}), (s = e.extend(s, this.balloon, !0)).fillColor = r, s.balloonColor = r, s.fillAlpha = i, s.borderColor = r, s.color = o, a.balloon = s;
//                 else
//                     for (s = 0; s < this.valueAxes.length; s++)(a = this.valueAxes[s]).balloon && (a.balloon = null);
//                 n && (n.balloonTextFunction = t.categoryBalloonFunction, t.categoryLineAxis = n, n.balloonText = t.categoryBalloonText, t.categoryBalloonEnabled && ((s = n.balloon) || (s = {}), (s = e.extend(s, this.balloon, !0)).fillColor = r, s.balloonColor = r, s.fillAlpha = i, s.borderColor = r, s.color = o, n.balloon = s), n.balloon && (n.balloon.enabled = t.categoryBalloonEnabled))
//             }
//         },
//         addChartScrollbar: function (t) {
//             e.callMethod("destroy", [this.chartScrollbar]), t && (t.chart = this, this.listenTo(t, "zoomed", this.handleScrollbarZoom)), this.rotate ? void 0 === t.width && (t.width = t.scrollbarHeight) : void 0 === t.height && (t.height = t.scrollbarHeight), t.gridAxis = this.categoryAxis, this.chartScrollbar = t
//         },
//         addValueScrollbar: function (t) {
//             e.callMethod("destroy", [this.valueScrollbar]), t && (t.chart = this, this.listenTo(t, "zoomed", this.handleScrollbarValueZoom), this.listenTo(t, "zoomStarted", this.handleCursorZoomStarted));
//             var n = t.scrollbarHeight;
//             this.rotate ? void 0 === t.height && (t.height = n) : void 0 === t.width && (t.width = n), t.gridAxis || (t.gridAxis = this.valueAxes[0]), t.valueAxes = this.valueAxes, this.valueScrollbar = t
//         },
//         removeChartScrollbar: function () {
//             e.callMethod("destroy", [this.chartScrollbar]), this.chartScrollbar = null
//         },
//         removeValueScrollbar: function () {
//             e.callMethod("destroy", [this.valueScrollbar]), this.valueScrollbar = null
//         },
//         handleReleaseOutside: function (t) {
//             e.AmSerialChart.base.handleReleaseOutside.call(this, t), e.callMethod("handleReleaseOutside", [this.chartScrollbar, this.valueScrollbar])
//         },
//         update: function () {
//             e.AmSerialChart.base.update.call(this), this.chartScrollbar && this.chartScrollbar.update && this.chartScrollbar.update(), this.valueScrollbar && this.valueScrollbar.update && this.valueScrollbar.update()
//         },
//         processScrollbars: function () {
//             e.AmSerialChart.base.processScrollbars.call(this);
//             var t = this.valueScrollbar;
//             t && ((t = e.processObject(t, e.ChartScrollbar, this.theme)).id = "valueScrollbar", this.addValueScrollbar(t))
//         },
//         handleValueAxisZoom: function (e) {
//             this.handleValueAxisZoomReal(e, this.valueAxes)
//         },
//         zoomOut: function () {
//             e.AmSerialChart.base.zoomOut.call(this), this.zoom(), this.syncGrid()
//         },
//         getNextItem: function (e) {
//             var t = e.index,
//                 n = this.chartData,
//                 i = e.graph;
//             if (t + 1 < n.length)
//                 for (t += 1; t < n.length; t++)
//                     if ((e = n[t]) && (e = e.axes[i.valueAxis.id].graphs[i.id], !isNaN(e.y))) return e
//         },
//         handleCursorZoomReal: function (e, t, n, i, r) {
//             var o, a, s = r.target;
//             this.rotate ? (isNaN(e) || isNaN(t) || this.relativeZoomValueAxes(this.valueAxes, e, t) && this.updateAfterValueZoom(), s.vZoomEnabled && (o = r.start, a = r.end)) : (isNaN(n) || isNaN(i) || this.relativeZoomValueAxes(this.valueAxes, n, i) && this.updateAfterValueZoom(), s.hZoomEnabled && (o = r.start, a = r.end)), isNaN(o) || isNaN(a) || ((e = this.categoryAxis).parseDates && !e.equalSpacing ? this.zoomToDates(new Date(o), new Date(a)) : this.zoomToIndexes(o, a))
//         },
//         handleCursorZoomStarted: function () {
//             if (e = this.valueAxes) {
//                 var e, t = (e = e[0]).relativeStart,
//                     n = e.relativeEnd;
//                 e.reversed && (t = 1 - e.relativeEnd, n = 1 - e.relativeStart), this.rotate ? (this.startX0 = t, this.endX0 = n) : (this.startY0 = t, this.endY0 = n)
//             }
//             this.categoryAxis && (this.start0 = this.start, this.end0 = this.end, this.startTime0 = this.startTime, this.endTime0 = this.endTime)
//         },
//         fixCursor: function () {
//             this.chartCursor && this.chartCursor.fixPosition(), this.prevCursorItem = null
//         },
//         handleCursorMove: function (t) {
//             e.AmSerialChart.base.handleCursorMove.call(this, t);
//             var n = t.target,
//                 i = this.categoryAxis;
//             if (t.panning) this.handleCursorHide(t);
//             else if (this.chartData && !n.isHidden) {
//                 var r, o = this.graphs;
//                 if (o && (r = i.xToIndex(this.rotate ? t.y : t.x), r = this.chartData[r])) {
//                     var a, s, l, c;
//                     if (n.oneBalloonOnly && n.valueBalloonsEnabled) {
//                         var u = 1 / 0;
//                         for (a = o.length - 1; 0 <= a; a--)
//                             if ((s = o[a]).balloon.enabled && s.showBalloon && !s.hidden) {
//                                 if (l = r.axes[l = s.valueAxis.id].graphs[s.id], n.showNextAvailable && isNaN(l.y) && !(l = this.getNextItem(l))) continue;
//                                 l = l.y, "top" == s.showBalloonAt && (l = 0), "bottom" == s.showBalloonAt && (l = this.height);
//                                 var h = n.mouseY;
//                                 (l = this.rotate ? Math.abs(n.mouseX - l) : Math.abs(h - l)) < u && (u = l, c = s)
//                             } n.mostCloseGraph = c
//                     }
//                     if (this.prevCursorItem != r || c != this.prevMostCloseGraph) {
//                         for (u = [], a = 0; a < o.length; a++) l = r.axes[l = (s = o[a]).valueAxis.id].graphs[s.id], n.showNextAvailable && isNaN(l.y) && !(l = this.getNextItem(l)) && s.balloon ? s.balloon.hide() : c && s != c ? (s.showGraphBalloon(l, n.pointer, !1, n.graphBulletSize, n.graphBulletAlpha), s.balloon.hide(0)) : n.valueBalloonsEnabled ? (s.balloon.showBullet = n.bulletsEnabled, s.balloon.bulletSize = n.bulletSize / 2, t.hideBalloons || (s.showGraphBalloon(l, n.pointer, !1, n.graphBulletSize, n.graphBulletAlpha), s.balloon.set && u.push({
//                             balloon: s.balloon,
//                             y: s.balloon.pointToY
//                         }))) : (s.currentDataItem = l, s.resizeBullet(l, n.graphBulletSize, n.graphBulletAlpha));
//                         n.avoidBalloonOverlapping && this.arrangeBalloons(u), this.prevCursorItem = r
//                     }
//                     this.prevMostCloseGraph = c
//                 }
//                 o = e.fitToBounds(t.x, 0, n.width), c = e.fitToBounds(t.y, 0, n.height), i.showBalloon(o, c, n.categoryBalloonDateFormat, t.skip), this.updateLegendValues()
//             }
//         },
//         handleCursorHide: function (t) {
//             var n;
//             for (e.AmSerialChart.base.handleCursorHide.call(this, t), t = this.categoryAxis, this.prevCursorItem = null, this.updateLegendValues(), t && t.hideBalloon(), t = this.graphs, n = 0; n < t.length; n++) t[n].currentDataItem = null
//         },
//         handleCursorPanning: function (t) {
//             var n, i, r, o = t.target,
//                 a = t.deltaX,
//                 s = t.deltaY,
//                 l = t.delta2X,
//                 c = t.delta2Y;
//             if (t = !1, this.rotate) {
//                 isNaN(l) && (l = a, t = !0);
//                 var u = (h = this.endX0) - (n = this.startX0),
//                     h = h - u * l,
//                     d = u;
//                 t || (d = 0), t = e.fitToBounds(n - u * a, 0, 1 - d)
//             } else isNaN(c) && (c = s, t = !0), h = this.endY0, h += (u = h - (n = this.startY0)) * s, d = u, t || (d = 0), t = e.fitToBounds(n + u * c, 0, 1 - d);
//             n = e.fitToBounds(h, d, 1), o.valueZoomable && (i = this.relativeZoomValueAxes(this.valueAxes, t, n)), n = this.categoryAxis, this.rotate && (a = s, l = c), t = !1, isNaN(l) && (l = a, t = !0), o.zoomable && (0 < Math.abs(a) || 0 < Math.abs(l)) && (n.parseDates && !n.equalSpacing ? (l *= n = (s = this.endTime0) - (c = this.startTime0), u = this.firstTime, h = this.lastTime, d = n, t || (d = 0), t = Math.round(e.fitToBounds(c - n * a, u, h - d)), l = Math.round(e.fitToBounds(s - l, u + d, h)), (this.startTime != t || this.endTime != l) && (r = {
//                 chart: this,
//                 target: o,
//                 type: "zoomed",
//                 start: t,
//                 end: l
//             }, this.skipZoomed = !0, o.fire(r), this.zoom(t, l), r = !0)) : (n = (s = this.end0) - (c = this.start0), a = Math.round(n * a), l = Math.round(n * l), t || (n = 0), t = e.fitToBounds(c - a, 0, (u = this.chartData.length - 1) - n), n = e.fitToBounds(s - l, n, u), (this.start != t || this.end != n) && (this.skipZoomed = !0, o.fire({
//                 chart: this,
//                 target: o,
//                 type: "zoomed",
//                 start: t,
//                 end: n
//             }), this.zoom(t, n), r = !0))), !r && i && this.updateAfterValueZoom()
//         },
//         arrangeBalloons: function (e) {
//             var t = this.plotAreaHeight;
//             e.sort(this.compareY);
//             var n, i, r, o = this.plotAreaWidth,
//                 a = e.length;
//             for (n = 0; n < a; n++)(i = e[n].balloon).setBounds(0, 0, o, t), i.restorePrevious(), i.draw(), t = i.yPos - 3;
//             for (e.reverse(), n = 0; n < a; n++) {
//                 t = (i = e[n].balloon).bottom;
//                 var s = i.bottom - i.yPos;
//                 0 < n && t - s < r + 3 && i.setBounds && (i.setBounds(0, r + 3, o, r + s + 3), i.restorePrevious(), i.draw()), i.set && i.set.show(), r = i.bottom
//             }
//         },
//         compareY: function (e, t) {
//             return e.y < t.y ? 1 : -1
//         }
//     })
// }(),
// function () {
//     var e = window.AmCharts;
//     e.Cuboid = e.Class({
//         construct: function (e, t, n, i, r, o, a, s, l, c, u, h, d, f, p, g, m) {
//             this.set = e.set(), this.container = e, this.h = Math.round(n), this.w = Math.round(t), this.dx = i, this.dy = r, this.colors = o, this.alpha = a, this.bwidth = s, this.bcolor = l, this.balpha = c, this.dashLength = f, this.topRadius = g, this.pattern = p, this.rotate = d, this.bcn = m, d ? 0 > t && 0 === u && (u = 180) : 0 > n && 270 == u && (u = 90), this.gradientRotation = u, 0 === i && 0 === r && (this.cornerRadius = h), this.draw()
//         },
//         draw: function () {
//             var t = this.set;
//             t.clear();
//             var n = this.container,
//                 i = n.chart,
//                 r = this.w,
//                 o = this.h,
//                 a = this.dx,
//                 s = this.dy,
//                 l = this.colors,
//                 c = this.alpha,
//                 u = this.bwidth,
//                 h = this.bcolor,
//                 d = this.balpha,
//                 f = this.gradientRotation,
//                 p = this.cornerRadius,
//                 g = this.dashLength,
//                 m = this.pattern,
//                 v = this.topRadius,
//                 y = this.bcn,
//                 b = l,
//                 x = l;
//             "object" == typeof l && (b = l[0], x = l[l.length - 1]);
//             var w, T, C, S, _, A, E, D, k, N = c;
//             m && (c = 0);
//             var O, R, j, I, L = this.rotate;
//             if (0 < Math.abs(a) || 0 < Math.abs(s))
//                 if (isNaN(v)) E = x, x = e.adjustLuminosity(b, -.2), x = e.adjustLuminosity(b, -.2), w = e.polygon(n, [0, a, r + a, r, 0], [0, s, s, 0, 0], x, c, 1, h, 0, f), 0 < d && (k = e.line(n, [0, a, r + a], [0, s, s], h, d, u, g)), (T = e.polygon(n, [0, 0, r, r, 0], [0, o, o, 0, 0], x, c, 1, h, 0, f)).translate(a, s), 0 < d && (C = e.line(n, [a, a], [s, s + o], h, d, u, g)), S = e.polygon(n, [0, 0, a, a, 0], [0, o, o + s, s, 0], x, c, 1, h, 0, f), _ = e.polygon(n, [r, r, r + a, r + a, r], [0, o, o + s, s, 0], x, c, 1, h, 0, f), 0 < d && (A = e.line(n, [r, r + a, r + a, r], [0, s, o + s, o], h, d, u, g)), x = e.adjustLuminosity(E, .2), E = e.polygon(n, [0, a, r + a, r, 0], [o, o + s, o + s, o, o], x, c, 1, h, 0, f), 0 < d && (D = e.line(n, [0, a, r + a], [o, o + s, o + s], h, d, u, g));
//                 else {
//                     var P, F, M;
//                     L ? (P = o / 2, x = a / 2, M = o / 2, F = r + a / 2, R = Math.abs(o / 2), O = Math.abs(a / 2)) : (x = r / 2, P = s / 2, F = r / 2, M = o + s / 2 + 1, O = Math.abs(r / 2), R = Math.abs(s / 2)), j = O * v, I = R * v, .1 < O && .1 < O && (w = e.circle(n, O, b, c, u, h, d, !1, R)).translate(x, P), .1 < j && .1 < j && (E = e.circle(n, j, e.adjustLuminosity(b, .5), c, u, h, d, !1, I)).translate(F, M)
//                 } for (c = N, 1 > Math.abs(o) && (o = 0), 1 > Math.abs(r) && (r = 0), !isNaN(v) && (0 < Math.abs(a) || 0 < Math.abs(s)) ? (l = {
//                     fill: l = [b],
//                     stroke: h,
//                     "stroke-width": u,
//                     "stroke-opacity": d,
//                     "fill-opacity": c
//                 }, L ? (c = "M0,0 L" + r + "," + (o / 2 - o / 2 * v), u = " B", 0 < r && (u = " A"), e.VML ? c = (c += u + Math.round(r - j) + "," + Math.round(o / 2 - I) + "," + Math.round(r + j) + "," + Math.round(o / 2 + I) + "," + r + ",0," + r + "," + o) + " L0," + o + (u + Math.round(-O)) + "," + Math.round(o / 2 - R) + "," + Math.round(O) + "," + Math.round(o / 2 + R) + ",0," + o + ",0,0" : (c += "A" + j + "," + I + ",0,0,0," + r + "," + (o - o / 2 * (1 - v)) + "L0," + o, c += "A" + O + "," + R + ",0,0,1,0,0"), O = 90) : (c = "M0,0 L" + (u = r / 2 - r / 2 * v) + "," + o, e.VML ? (c = "M0,0 L" + u + "," + o, u = " B", 0 > o && (u = " A"), c += u + Math.round(r / 2 - j) + "," + Math.round(o - I) + "," + Math.round(r / 2 + j) + "," + Math.round(o + I) + ",0," + o + "," + r + "," + o, c += " L" + r + ",0", c += u + Math.round(r / 2 + O) + "," + Math.round(R) + "," + Math.round(r / 2 - O) + "," + Math.round(-R) + "," + r + ",0,0,0") : (c += "A" + j + "," + I + ",0,0,0," + (r - r / 2 * (1 - v)) + "," + o + "L" + r + ",0", c += "A" + O + "," + R + ",0,0,1,0,0"), O = 180), (n = n.path(c).attr(l)).gradient("linearGradient", [b, e.adjustLuminosity(b, -.3), e.adjustLuminosity(b, -.3), b], O), L ? n.translate(a / 2, 0) : n.translate(0, s / 2)) : n = 0 === o ? e.line(n, [0, r], [0, 0], h, d, u, g) : 0 === r ? e.line(n, [0, 0], [0, o], h, d, u, g) : 0 < p ? e.rect(n, r, o, l, c, u, h, d, p, f, g) : e.polygon(n, [0, 0, r, r, 0], [0, o, o, 0, 0], l, c, u, h, d, f, !1, g), r = isNaN(v) ? 0 > o ? [w, k, T, C, S, _, A, E, D, n] : [E, D, T, C, S, _, w, k, A, n] : L ? 0 < r ? [w, n, E] : [E, n, w] : 0 > o ? [w, n, E] : [E, n, w], e.setCN(i, n, y + "front"), e.setCN(i, T, y + "back"), e.setCN(i, E, y + "top"), e.setCN(i, w, y + "bottom"), e.setCN(i, S, y + "left"), e.setCN(i, _, y + "right"), w = 0; w < r.length; w++)(T = r[w]) && (t.push(T), e.setCN(i, T, y + "element"));
//             m && n.pattern(m, NaN, i.path)
//         },
//         width: function (e) {
//             isNaN(e) && (e = 0), this.w = Math.round(e), this.draw()
//         },
//         height: function (e) {
//             isNaN(e) && (e = 0), this.h = Math.round(e), this.draw()
//         },
//         animateHeight: function (t, n) {
//             var i = this;
//             i.animationFinished = !1, i.easing = n, i.totalFrames = t * e.updateRate, i.rh = i.h, i.frame = 0, i.height(1), setTimeout((function () {
//                 i.updateHeight.call(i)
//             }), 1e3 / e.updateRate)
//         },
//         updateHeight: function () {
//             var t = this;
//             t.frame++;
//             var n = t.totalFrames;
//             t.frame <= n ? (n = t.easing(0, t.frame, 1, t.rh - 1, n), t.height(n), window.requestAnimationFrame ? window.requestAnimationFrame((function () {
//                 t.updateHeight.call(t)
//             })) : setTimeout((function () {
//                 t.updateHeight.call(t)
//             }), 1e3 / e.updateRate)) : (t.height(t.rh), t.animationFinished = !0)
//         },
//         animateWidth: function (t, n) {
//             var i = this;
//             i.animationFinished = !1, i.easing = n, i.totalFrames = t * e.updateRate, i.rw = i.w, i.frame = 0, i.width(1), setTimeout((function () {
//                 i.updateWidth.call(i)
//             }), 1e3 / e.updateRate)
//         },
//         updateWidth: function () {
//             var t = this;
//             t.frame++;
//             var n = t.totalFrames;
//             t.frame <= n ? (n = t.easing(0, t.frame, 1, t.rw - 1, n), t.width(n), window.requestAnimationFrame ? window.requestAnimationFrame((function () {
//                 t.updateWidth.call(t)
//             })) : setTimeout((function () {
//                 t.updateWidth.call(t)
//             }), 1e3 / e.updateRate)) : (t.width(t.rw), t.animationFinished = !0)
//         }
//     })
// }(),
// function () {
//     var e = window.AmCharts;
//     e.CategoryAxis = e.Class({
//         inherits: e.AxisBase,
//         construct: function (t) {
//             this.cname = "CategoryAxis", e.CategoryAxis.base.construct.call(this, t), this.minPeriod = "DD", this.equalSpacing = this.parseDates = !1, this.position = "bottom", this.startOnAxis = !1, this.gridPosition = "middle", this.safeDistance = 30, this.stickBalloonToCategory = !1, e.applyTheme(this, t, this.cname)
//         },
//         draw: function () {
//             e.CategoryAxis.base.draw.call(this), this.generateDFObject();
//             var t = this.chart.chartData;
//             if (this.data = t, this.labelRotationR = this.labelRotation, this.type = null, e.ifArray(t)) {
//                 var n, i = this.chart;
//                 "scrollbar" != this.id ? (e.setCN(i, this.set, "category-axis"), e.setCN(i, this.labelsSet, "category-axis"), e.setCN(i, this.axisLine.axisSet, "category-axis")) : this.bcn = this.id + "-";
//                 var r, o, a, s, l, c, u = this.start,
//                     h = this.labelFrequency,
//                     d = 0,
//                     f = this.end - u + 1,
//                     p = this.gridCountR,
//                     g = this.showFirstLabel,
//                     m = this.showLastLabel,
//                     v = "",
//                     y = (v = e.extractPeriod(this.minPeriod), e.getPeriodDuration(v.period, v.count)),
//                     b = this.rotate,
//                     x = this.firstDayOfWeek,
//                     w = this.boldPeriodBeginning;
//                 n = e.resetDateToMin(new Date(t[t.length - 1].time + 1.05 * y), this.minPeriod, 1, x).getTime(), this.firstTime = i.firstTime, this.endTime > n && (this.endTime = n), c = this.minorGridEnabled, a = this.gridAlpha;
//                 var T = 0,
//                     C = 0;
//                 if (this.widthField)
//                     for (n = this.start; n <= this.end; n++)
//                         if (l = this.data[n]) {
//                             var S = Number(this.data[n].dataContext[this.widthField]);
//                             isNaN(S) || (T += S, l.widthValue = S)
//                         } if (this.parseDates && !this.equalSpacing) this.lastTime = t[t.length - 1].time, this.maxTime = e.resetDateToMin(new Date(this.lastTime + 1.05 * y), this.minPeriod, 1, x).getTime(), this.timeDifference = this.endTime - this.startTime, this.parseDatesDraw();
//                 else if (this.parseDates) {
//                     if (this.parseDates && this.equalSpacing) {
//                         if (d = this.start, this.startTime = this.data[this.start].time, this.endTime = this.data[this.end].time, this.timeDifference = this.endTime - this.startTime, n = this.choosePeriod(0), (n = e.getPeriodDuration(h = n.period, o = n.count)) < y && (h = v.period, o = v.count, n = y), "WW" == (a = h) && (a = "DD"), this.currentDateFormat = this.dateFormatsObject[a], this.stepWidth = this.getStepWidth(f), p = Math.ceil(this.timeDifference / n) + 1, v = e.resetDateToMin(new Date(this.startTime - n), h, o, x).getTime(), this.cellWidth = this.getStepWidth(f), u = -1, (f = Math.round(v / n)) / 2 == Math.round(f / 2) && (u = -2, v -= n), (f = this.start) / 2 == Math.round(f / 2) && f--, 0 > f && (f = 0), (C = this.end + 2) >= this.data.length && (C = this.data.length), t = !1, t = !g, this.previousPos = -1e3, 20 < this.labelRotationR && (this.safeDistance = 5), S = f, this.data[f].time != e.resetDateToMin(new Date(this.data[f].time), h, o, x).getTime()) {
//                             y = 0;
//                             var _ = v;
//                             for (n = f; n < C; n++) this.checkPeriodChange(h, o, l = this.data[n].time, _) && (2 <= ++y && (S = n, n = C), _ = l)
//                         }
//                         if (c && 1 < o && (l = this.chooseMinorFrequency(o), e.getPeriodDuration(h, l)), 0 < this.gridCountR)
//                             for (n = f; n < C; n++) this.checkPeriodChange(h, o, l = this.data[n].time, v) && n >= S && (f = this.getCoordinate(n - this.start), c = !1, this.nextPeriod[a] && (c = this.checkPeriodChange(this.nextPeriod[a], 1, l, v, a)) && e.resetDateToMin(new Date(l), this.nextPeriod[a], 1, x).getTime() != l && (c = !1), y = !1, c && this.markPeriodChange ? (c = this.dateFormatsObject[this.nextPeriod[a]], y = !0) : c = this.dateFormatsObject[a], v = e.formatDate(new Date(l), c, i), (n == u && !g || n == p && !m) && (v = " "), t ? t = !1 : (w || (y = !1), f - this.previousPos > this.safeDistance * Math.cos(this.labelRotationR * Math.PI / 180) && (this.labelFunction && (v = this.labelFunction(v, new Date(l), this, h, o, s)), this.boldLabels && (y = !0), c = (r = new this.axisItemRenderer(this, f, v, void 0, void 0, void 0, void 0, y)).graphics(), this.pushAxisItem(r), c = c.getBBox().width, e.isModern || (c -= f), this.previousPos = f + c)), s = v = l)
//                     }
//                 } else if (this.cellWidth = this.getStepWidth(f), f < p && (p = f), d += this.start, this.stepWidth = this.getStepWidth(f), 0 < p)
//                     for (x = Math.floor(f / p), l = this.chooseMinorFrequency(x), (f = d) / 2 == Math.round(f / 2) && f--, 0 > f && (f = 0), w = 0, this.widthField && (f = this.start, x = 1), this.end - f + 1 >= this.autoRotateCount && (this.labelRotationR = this.autoRotateAngle), n = f; n <= this.end + 2; n++) {
//                         if (p = !1, 0 <= n && n < this.data.length ? (v = (o = this.data[n]).category, p = o.forceShow) : v = "", c && !isNaN(l)) {
//                             if (n / l != Math.round(n / l) && !p) continue;
//                             n / x == Math.round(n / x) || p || (this.gridAlpha = this.minorGridAlpha, v = void 0)
//                         } else if (n / x != Math.round(n / x) && !p) continue;
//                         f = this.getCoordinate(n - d), p = 0, "start" == this.gridPosition && (f -= this.cellWidth / 2, p = this.cellWidth / 2), r = !0, s = p, "start" == this.tickPosition && (s = 0, r = !1, p = 0), (n == u && !g || n == this.end && !m) && (v = void 0), Math.round(w / h) != w / h && (v = void 0), w++, t = this.cellWidth, b && (t = NaN, this.ignoreAxisWidth || !i.autoMargins) && (t = "right" == this.position ? i.marginRight - this.titleWidth : i.marginLeft - this.titleWidth, t -= this.tickLength + 10), this.labelFunction && o && (v = this.labelFunction(v, o, this)), v = e.fixBrakes(v), y = !1, this.boldLabels && (y = !0), n > this.end && "start" == this.tickPosition && (v = " "), this.rotate && this.inside && (p -= 2), isNaN(o.widthValue) || (o.percentWidthValue = o.widthValue / T * 100, f = C, C += t = this.rotate ? this.height * o.widthValue / T : this.width * o.widthValue / T, s = p = t / 2), (r = new this.axisItemRenderer(this, f, v, r, t, p, void 0, y, s, !1, o.labelColor, o.className)).serialDataItem = o, this.pushAxisItem(r), this.gridAlpha = a
//                     }
//                 for (n = g = 0; n < this.data.length; n++)(l = this.data[n]) && (this.parseDates && !this.equalSpacing ? (m = l.time, u = this.cellWidth, "MM" == this.minPeriod && (u = 864e5 * e.daysInMonth(new Date(m)) * this.stepWidth, l.cellWidth = u), m = Math.round((m - this.startTime) * this.stepWidth + u / 2)) : m = this.getCoordinate(n - d), l.x[this.id] = m);
//                 if (this.widthField)
//                     for (n = this.start; n <= this.end; n++)(l = this.data[n]).percentWidthValue = (u = l.widthValue) / T * 100, this.rotate ? (m = this.height * u / T / 2 + g, g = this.height * u / T + g) : (m = this.width * u / T / 2 + g, g = this.width * u / T + g), l.x[this.id] = m;
//                 for (T = this.guides.length, n = 0; n < T; n++) x = x = x = c = u = NaN, m = (g = this.guides[n]).above, g.toCategory && (x = i.getCategoryIndexByValue(g.toCategory), isNaN(x) || (u = this.getCoordinate(x - d), g.expand && (u += this.cellWidth / 2), r = new this.axisItemRenderer(this, u, "", !0, NaN, NaN, g), this.pushAxisItem(r, m))), g.category && (x = i.getCategoryIndexByValue(g.category), isNaN(x) || (c = this.getCoordinate(x - d), g.expand && (c -= this.cellWidth / 2), r = new this.axisItemRenderer(this, c, g.label, !0, NaN, x = (u - c) / 2, g), this.pushAxisItem(r, m))), w = i.dataDateFormat, g.toDate && (!w || g.toDate instanceof Date || (g.toDate = g.toDate.toString() + " |"), g.toDate = e.getDate(g.toDate, w), this.equalSpacing ? (x = i.getClosestIndex(this.data, "time", g.toDate.getTime(), !1, 0, this.data.length - 1), isNaN(x) || (u = this.getCoordinate(x - d))) : u = (g.toDate.getTime() - this.startTime) * this.stepWidth, r = new this.axisItemRenderer(this, u, "", !0, NaN, NaN, g), this.pushAxisItem(r, m)), g.date && (!w || g.date instanceof Date || (g.date = g.date.toString() + " |"), g.date = e.getDate(g.date, w), this.equalSpacing ? (x = i.getClosestIndex(this.data, "time", g.date.getTime(), !1, 0, this.data.length - 1), isNaN(x) || (c = this.getCoordinate(x - d))) : c = (g.date.getTime() - this.startTime) * this.stepWidth, x = (u - c) / 2, r = !0, g.toDate && (r = !1), r = "H" == this.orientation ? new this.axisItemRenderer(this, c, g.label, r, 2 * x, NaN, g) : new this.axisItemRenderer(this, c, g.label, !1, NaN, x, g), this.pushAxisItem(r, m)), r && (x = r.label) && this.addEventListeners(x, g), (0 < u || 0 < c) && (x = !1, this.rotate ? (u < this.height || c < this.height) && (x = !0) : (u < this.width || c < this.width) && (x = !0), x && (c = (u = new this.guideFillRenderer(this, c, u, g)).graphics(), this.pushAxisItem(u, m), g.graphics = c, c.index = n, this.addEventListeners(c, g)));
//                 (i = i.chartCursor) && (b ? i.fixHeight(this.cellWidth) : (i.fixWidth(this.cellWidth), i.fullWidth && this.balloon && (this.balloon.minWidth = this.cellWidth))), this.previousHeight = A
//             }
//             this.axisCreated = !0, this.set.translate(this.x, this.y), this.labelsSet.translate(this.x, this.y), this.labelsSet.show(), this.positionTitle(), (b = this.axisLine.set) && b.toFront();
//             var A = this.getBBox().height;
//             2 < A - this.previousHeight && this.autoWrap && !this.parseDates && (this.axisCreated = this.chart.marginsUpdated = !1)
//         },
//         xToIndex: function (t) {
//             var n, i, r = this.data,
//                 o = this.chart,
//                 a = o.rotate,
//                 s = this.stepWidth;
//             if (this.parseDates && !this.equalSpacing) t = this.startTime + Math.round(t / s) - this.minDuration() / 2, n = o.getClosestIndex(r, "time", t, !1, this.start, this.end + 1);
//             else if (this.widthField)
//                 for (o = 1 / 0, s = this.start; s <= this.end; s++) {
//                     var l = this.data[s];
//                     l && (l = Math.abs(l.x[this.id] - t)) < o && (o = l, n = s)
//                 } else this.startOnAxis || (t -= s / 2), n = this.start + Math.round(t / s);
//             return r[n = e.fitToBounds(n, 0, r.length - 1)] && (i = r[n].x[this.id]), a ? i > this.height + 1 && n-- : i > this.width + 1 && n--, 0 > i && n++, e.fitToBounds(n, 0, r.length - 1)
//         },
//         dateToCoordinate: function (e) {
//             return this.parseDates && !this.equalSpacing ? (e.getTime() - this.startTime) * this.stepWidth : this.parseDates && this.equalSpacing ? (e = this.chart.getClosestIndex(this.data, "time", e.getTime(), !1, 0, this.data.length - 1), this.getCoordinate(e - this.start)) : NaN
//         },
//         categoryToCoordinate: function (e) {
//             return this.chart ? this.parseDates ? this.dateToCoordinate(new Date(e)) : (e = this.chart.getCategoryIndexByValue(e), isNaN(e) ? void 0 : this.getCoordinate(e - this.start)) : NaN
//         },
//         coordinateToDate: function (e) {
//             return this.equalSpacing ? (e = this.xToIndex(e), new Date(this.data[e].time)) : new Date(this.startTime + e / this.stepWidth)
//         },
//         coordinateToValue: function (e) {
//             if (e = this.xToIndex(e), e = this.data[e]) return this.parseDates ? e.time : e.category
//         },
//         getCoordinate: function (e) {
//             return e *= this.stepWidth, this.startOnAxis || (e += this.stepWidth / 2), Math.round(e)
//         },
//         formatValue: function (t, n) {
//             return n || (n = this.currentDateFormat), this.parseDates && (t = e.formatDate(new Date(t), n, this.chart)), t
//         },
//         showBalloonAt: function (e, t) {
//             return void 0 === t && (t = this.parseDates ? this.dateToCoordinate(new Date(e)) : this.categoryToCoordinate(e)), this.adjustBalloonCoordinate(t)
//         },
//         formatBalloonText: function (t, n, i) {
//             var r = "",
//                 o = "",
//                 a = this.chart,
//                 s = this.data[n];
//             if (s)
//                 if (this.parseDates) r = e.formatDate(s.category, i, a), n = e.changeDate(new Date(s.category), this.minPeriod, 1), o = e.formatDate(n, i, a), -1 != r.indexOf("fff") && (r = e.formatMilliseconds(r, s.category), o = e.formatMilliseconds(o, n));
//                 else {
//                     var l;
//                     this.data[n + 1] && (l = this.data[n + 1]), r = e.fixNewLines(s.category), l && (o = e.fixNewLines(l.category))
//                 } return (t = t.replace(/\[\[category\]\]/g, String(r))).replace(/\[\[toCategory\]\]/g, String(o))
//         },
//         adjustBalloonCoordinate: function (e, t) {
//             var n = this.xToIndex(e),
//                 i = this.chart.chartCursor;
//             if (this.stickBalloonToCategory) {
//                 var r = this.data[n];
//                 r && (e = r.x[this.id]), this.stickBalloonToStart && (e -= this.cellWidth / 2);
//                 var o = 0;
//                 if (i) {
//                     var a = i.limitToGraph;
//                     a && (a.hidden || (o = r.axes[a.valueAxis.id].graphs[a.id].y)), this.rotate ? ("left" == this.position ? (a && (o -= i.width), 0 < o && (o = 0)) : 0 > o && (o = 0), i.fixHLine(e, o)) : ("top" == this.position ? (a && (o -= i.height), 0 < o && (o = 0)) : 0 > o && (o = 0), i.fullWidth && (e += 1), i.fixVLine(e, o))
//                 }
//             }
//             return i && !t && (i.setIndex(n), this.parseDates && i.setTimestamp(this.coordinateToDate(e).getTime())), e
//         }
//     })
// }(),
// function () {
//     var e = window.AmCharts;
//     e.AmSlicedChart = e.Class({
//         inherits: e.AmChart,
//         construct: function (t) {
//             this.createEvents("rollOverSlice", "rollOutSlice", "clickSlice", "pullOutSlice", "pullInSlice", "rightClickSlice"), e.AmSlicedChart.base.construct.call(this, t), this.colors = "#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" "), this.alpha = 1, this.groupPercent = 0, this.groupedTitle = "Other", this.groupedPulled = !1, this.groupedAlpha = 1, this.marginLeft = 0, this.marginBottom = this.marginTop = 10, this.marginRight = 0, this.hoverAlpha = 1, this.outlineColor = "#FFFFFF", this.outlineAlpha = 0, this.outlineThickness = 1, this.startAlpha = 0, this.startDuration = 1, this.startEffect = "bounce", this.sequencedAnimation = !0, this.pullOutDuration = 1, this.pullOutEffect = "bounce", this.pullOnHover = this.pullOutOnlyOne = !1, this.labelsEnabled = !0, this.labelTickColor = "#000000", this.labelTickAlpha = .2, this.hideLabelsPercent = 0, this.urlTarget = "_self", this.autoMarginOffset = 10, this.gradientRatio = [], this.maxLabelWidth = 200, this.accessibleLabel = "[[title]]: [[percents]]% [[value]] [[description]]", e.applyTheme(this, t, "AmSlicedChart")
//         },
//         initChart: function () {
//             e.AmSlicedChart.base.initChart.call(this), this.dataChanged && (this.parseData(), this.dispatchDataUpdated = !0, this.dataChanged = !1, this.setLegendData(this.chartData)), this.drawChart()
//         },
//         handleLegendEvent: function (e) {
//             var t = e.type,
//                 n = e.dataItem,
//                 i = this.legend;
//             if (n.wedge && n) {
//                 var r = n.hidden;
//                 switch (e = e.event, t) {
//                     case "clickMarker":
//                         r || i.switchable || this.clickSlice(n, e);
//                         break;
//                     case "clickLabel":
//                         r || this.clickSlice(n, e, !1);
//                         break;
//                     case "rollOverItem":
//                         r || this.rollOverSlice(n, !1, e);
//                         break;
//                     case "rollOutItem":
//                         r || this.rollOutSlice(n, e);
//                         break;
//                     case "hideItem":
//                         this.hideSlice(n, e);
//                         break;
//                     case "showItem":
//                         this.showSlice(n, e)
//                 }
//             }
//         },
//         invalidateVisibility: function () {
//             this.recalculatePercents(), this.initChart();
//             var e = this.legend;
//             e && e.invalidateSize()
//         },
//         addEventListeners: function (e, t) {
//             var n = this;
//             e.mouseover((function (e) {
//                 n.rollOverSlice(t, !0, e)
//             })).mouseout((function (e) {
//                 n.rollOutSlice(t, e)
//             })).touchend((function (e) {
//                 n.rollOverSlice(t, e)
//             })).mouseup((function (e) {
//                 n.clickSlice(t, e)
//             })).contextmenu((function (e) {
//                 n.handleRightClick(t, e)
//             })).focus((function (e) {
//                 n.rollOverSlice(t, e)
//             })).blur((function (e) {
//                 n.rollOutSlice(t, e)
//             }))
//         },
//         formatString: function (t, n, i) {
//             t = e.formatValue(t, n, ["value"], this.nf, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers);
//             var r = this.pf.precision;
//             return isNaN(this.tempPrec) || (this.pf.precision = this.tempPrec), t = e.formatValue(t, n, ["percents"], this.pf), t = e.massReplace(t, {
//                 "[[title]]": n.title,
//                 "[[description]]": n.description
//             }), this.pf.precision = r, -1 != t.indexOf("[[") && (t = e.formatDataContextValue(t, n.dataContext)), t = i ? e.fixNewLines(t) : e.fixBrakes(t), e.cleanFromEmpty(t)
//         },
//         startSlices: function () {
//             var e;
//             for (e = 0; e < this.chartData.length; e++) 0 < this.startDuration && this.sequencedAnimation ? this.setStartTO(e) : this.startSlice(this.chartData[e])
//         },
//         setStartTO: function (e) {
//             var t = this;
//             e = setTimeout((function () {
//                 t.startSequenced.call(t)
//             }), t.startDuration / t.chartData.length * 500 * e), t.timeOuts.push(e)
//         },
//         pullSlices: function (e) {
//             var t, n = this.chartData;
//             for (t = 0; t < n.length; t++) {
//                 var i = n[t];
//                 i.pulled && this.pullSlice(i, 1, e)
//             }
//         },
//         startSequenced: function () {
//             var e, t = this.chartData;
//             for (e = 0; e < t.length; e++)
//                 if (!t[e].started) {
//                     this.startSlice(this.chartData[e]);
//                     break
//                 }
//         },
//         startSlice: function (e) {
//             e.started = !0;
//             var t = e.wedge,
//                 n = this.startDuration,
//                 i = e.labelSet;
//             t && 0 < n && (0 < e.alpha && t.show(), t.translate(e.startX, e.startY), this.animatable.push(t), t.animate({
//                 opacity: 1,
//                 translate: "0,0"
//             }, n, this.startEffect)), i && 0 < n && (0 < e.alpha && i.show(), i.translate(e.startX, e.startY), i.animate({
//                 opacity: 1,
//                 translate: "0,0"
//             }, n, this.startEffect))
//         },
//         showLabels: function () {
//             var e, t = this.chartData;
//             for (e = 0; e < t.length; e++) {
//                 var n = t[e];
//                 if (0 < n.alpha) {
//                     var i = n.label;
//                     i && i.show(), (n = n.tick) && n.show()
//                 }
//             }
//         },
//         showSlice: function (e) {
//             isNaN(e) ? e.hidden = !1 : this.chartData[e].hidden = !1, this.invalidateVisibility()
//         },
//         hideSlice: function (e) {
//             isNaN(e) ? e.hidden = !0 : this.chartData[e].hidden = !0, this.hideBalloon(), this.invalidateVisibility()
//         },
//         rollOverSlice: function (t, n, i) {
//             if (isNaN(t) || (t = this.chartData[t]), clearTimeout(this.hoverInt), !t.hidden) {
//                 this.pullOnHover && this.pullSlice(t, 1), 1 > this.hoverAlpha && t.wedge && t.wedge.attr({
//                     opacity: this.hoverAlpha
//                 });
//                 var r = t.balloonX,
//                     o = t.balloonY;
//                 t.pulled && (r += t.pullX, o += t.pullY);
//                 var a = this.formatString(this.balloonText, t, !0),
//                     s = this.balloonFunction;
//                 s && (a = s(t, a)), s = e.adjustLuminosity(t.color, -.15), a ? this.showBalloon(a, s, n, r, o) : this.hideBalloon(), 0 === t.value && this.hideBalloon(), this.fire({
//                     type: "rollOverSlice",
//                     dataItem: t,
//                     chart: this,
//                     event: i
//                 })
//             }
//         },
//         rollOutSlice: function (e, t) {
//             isNaN(e) || (e = this.chartData[e]), e.wedge && e.wedge.attr({
//                 opacity: 1
//             }), this.hideBalloon(), this.fire({
//                 type: "rollOutSlice",
//                 dataItem: e,
//                 chart: this,
//                 event: t
//             })
//         },
//         clickSlice: function (t, n, i) {
//             this.checkTouchDuration(n) && (isNaN(t) || (t = this.chartData[t]), this.pullSlice(t, t.pulled ? 0 : 1), e.getURL(t.url, this.urlTarget), i || this.fire({
//                 type: "clickSlice",
//                 dataItem: t,
//                 chart: this,
//                 event: n
//             }))
//         },
//         handleRightClick: function (e, t) {
//             isNaN(e) || (e = this.chartData[e]), this.fire({
//                 type: "rightClickSlice",
//                 dataItem: e,
//                 chart: this,
//                 event: t
//             })
//         },
//         drawTicks: function () {
//             var t, n = this.chartData;
//             for (t = 0; t < n.length; t++) {
//                 var i = n[t];
//                 if (i.label && !i.skipTick) {
//                     var r = e.line(this.container, [i.tx0, i.tx, i.tx2], [i.ty0, r = i.ty, r], this.labelTickColor, this.labelTickAlpha);
//                     e.setCN(this, r, this.type + "-tick"), e.setCN(this, r, i.className, !0), i.tick = r, i.wedge.push(r), "AmFunnelChart" == this.cname && r.toBack()
//                 }
//             }
//         },
//         initialStart: function () {
//             var e = this,
//                 t = e.startDuration,
//                 n = setTimeout((function () {
//                     e.showLabels.call(e)
//                 }), 1e3 * t);
//             e.timeOuts.push(n), e.chartCreated ? e.pullSlices(!0) : (e.startSlices(), 0 < t ? (t = setTimeout((function () {
//                 e.pullSlices.call(e)
//             }), 1200 * t), e.timeOuts.push(t)) : e.pullSlices(!0))
//         },
//         pullSlice: function (e, t, n) {
//             var i = this.pullOutDuration;
//             !0 === n && (i = 0), (n = e.wedge) && (0 < i ? (n.animate({
//                 translate: t * e.pullX + "," + t * e.pullY
//             }, i, this.pullOutEffect), e.labelSet && e.labelSet.animate({
//                 translate: t * e.pullX + "," + t * e.pullY
//             }, i, this.pullOutEffect)) : (e.labelSet && e.labelSet.translate(t * e.pullX, t * e.pullY), n.translate(t * e.pullX, t * e.pullY))), 1 == t ? (e.pulled = !0, this.pullOutOnlyOne && this.pullInAll(e.index), e = {
//                 type: "pullOutSlice",
//                 dataItem: e,
//                 chart: this
//             }) : (e.pulled = !1, e = {
//                 type: "pullInSlice",
//                 dataItem: e,
//                 chart: this
//             }), this.fire(e)
//         },
//         pullInAll: function (e) {
//             var t, n = this.chartData;
//             for (t = 0; t < this.chartData.length; t++) t != e && n[t].pulled && this.pullSlice(n[t], 0)
//         },
//         pullOutAll: function () {
//             var e, t = this.chartData;
//             for (e = 0; e < t.length; e++) t[e].pulled || this.pullSlice(t[e], 1)
//         },
//         parseData: function () {
//             var t = [];
//             this.chartData = t;
//             var n = this.dataProvider;
//             if (isNaN(this.pieAlpha) || (this.alpha = this.pieAlpha), void 0 !== n) {
//                 var i, r, o, a = n.length,
//                     s = 0;
//                 for (i = 0; i < a; i++) {
//                     var l = n[i];
//                     (r = {}).dataContext = l, null !== l[this.valueField] && (r.value = Number(l[this.valueField])), (o = l[this.titleField]) || (o = ""), r.title = o, r.pulled = e.toBoolean(l[this.pulledField], !1), (o = l[this.descriptionField]) || (o = ""), r.description = o, r.labelRadius = Number(l[this.labelRadiusField]), r.switchable = !0, r.className = l[this.classNameField], r.url = l[this.urlField], !(o = l[this.patternField]) && this.patterns && (o = this.patterns[i]), r.pattern = o, r.visibleInLegend = e.toBoolean(l[this.visibleInLegendField], !0), r.alpha = void 0 !== (o = l[this.alphaField]) ? Number(o) : this.alpha, void 0 !== (o = l[this.colorField]) && (r.color = o), r.labelColor = e.toColor(l[this.labelColorField]), s += r.value, r.hidden = !1, t[i] = r
//                 }
//                 for (i = n = 0; i < a; i++)(r = t[i]).percents = r.value / s * 100, r.percents < this.groupPercent && n++;
//                 for (1 < n && (this.groupValue = 0, this.removeSmallSlices(), t.push({
//                         title: this.groupedTitle,
//                         value: this.groupValue,
//                         percents: this.groupValue / s * 100,
//                         pulled: this.groupedPulled,
//                         color: this.groupedColor,
//                         url: this.groupedUrl,
//                         description: this.groupedDescription,
//                         alpha: this.groupedAlpha,
//                         pattern: this.groupedPattern,
//                         className: this.groupedClassName,
//                         dataContext: {}
//                     })), (a = this.baseColor) || (a = this.pieBaseColor), (s = this.brightnessStep) || (s = this.pieBrightnessStep), i = 0; i < t.length; i++) a ? o = e.adjustLuminosity(a, i * s / 100) : void 0 === (o = this.colors[i]) && (o = e.randomColor()), void 0 === t[i].color && (t[i].color = o);
//                 this.recalculatePercents()
//             }
//         },
//         recalculatePercents: function () {
//             var e, t, n = this.chartData,
//                 i = 0;
//             for (e = 0; e < n.length; e++) !(t = n[e]).hidden && 0 < t.value && (i += t.value);
//             for (e = 0; e < n.length; e++)(t = this.chartData[e]).percents = !t.hidden && 0 < t.value ? 100 * t.value / i : 0
//         },
//         removeSmallSlices: function () {
//             var e, t = this.chartData;
//             for (e = t.length - 1; 0 <= e; e--) t[e].percents < this.groupPercent && (this.groupValue += t[e].value, t.splice(e, 1))
//         },
//         animateAgain: function () {
//             var e = this;
//             e.startSlices();
//             for (var t = 0; t < e.chartData.length; t++) {
//                 var n = e.chartData[t];
//                 n.started = !1;
//                 var i = n.wedge;
//                 i && (i.setAttr("opacity", e.startAlpha), i.translate(n.startX, n.startY)), (i = n.labelSet) && (i.setAttr("opacity", e.startAlpha), i.translate(n.startX, n.startY))
//             }
//             0 < (t = e.startDuration) ? (t = setTimeout((function () {
//                 e.pullSlices.call(e)
//             }), 1200 * t), e.timeOuts.push(t)) : e.pullSlices()
//         },
//         measureMaxLabel: function () {
//             var t, n = this.chartData,
//                 i = 0;
//             for (t = 0; t < n.length; t++) {
//                 var r = n[t],
//                     o = this.formatString(this.labelText, r),
//                     a = this.labelFunction;
//                 a && (o = a(r, o)), (o = (r = e.text(this.container, o, this.color, this.fontFamily, this.fontSize)).getBBox().width) > i && (i = o), r.remove()
//             }
//             return i
//         }
//     })
// }(),
// function () {
//     var e = window.AmCharts;
//     e.AmPieChart = e.Class({
//         inherits: e.AmSlicedChart,
//         construct: function (t) {
//             this.type = "pie", e.AmPieChart.base.construct.call(this, t), this.cname = "AmPieChart", this.pieBrightnessStep = 30, this.minRadius = 10, this.depth3D = 0, this.startAngle = 90, this.angle = this.innerRadius = 0, this.startRadius = "500%", this.pullOutRadius = "20%", this.labelRadius = 20, this.labelText = "[[title]]: [[percents]]%", this.balloonText = "[[title]]: [[percents]]% ([[value]])\n[[description]]", this.previousScale = 1, this.adjustPrecision = !1, this.gradientType = "radial", e.applyTheme(this, t, this.cname)
//         },
//         drawChart: function () {
//             e.AmPieChart.base.drawChart.call(this);
//             var t = this.chartData;
//             if (e.ifArray(t)) {
//                 if (0 < this.realWidth && 0 < this.realHeight) {
//                     e.VML && (this.startAlpha = 1);
//                     var n = this.startDuration,
//                         i = this.container,
//                         r = this.updateWidth();
//                     this.realWidth = r;
//                     var o = this.updateHeight();
//                     this.realHeight = o;
//                     var a, s, l, c, u = e.toCoordinate,
//                         h = u(this.marginLeft, r),
//                         d = u(this.marginRight, r),
//                         f = u(this.marginTop, o) + this.getTitleHeight(),
//                         p = u(this.marginBottom, o) + this.depth3D,
//                         g = e.toNumber(this.labelRadius);
//                     for ((v = this.measureMaxLabel()) > this.maxLabelWidth && (v = this.maxLabelWidth), this.labelText && this.labelsEnabled || (g = v = 0), a = void 0 === this.pieX ? (r - h - d) / 2 + h : u(this.pieX, this.realWidth), s = void 0 === this.pieY ? (o - f - p) / 2 + f : u(this.pieY, o), (l = u(this.radius, r, o)) || (r = 0 <= g ? r - h - d - 2 * v : r - h - d, o = o - f - p, l = Math.min(r, o), o < r && (l /= 1 - this.angle / 90) > r && (l = r), o = e.toCoordinate(this.pullOutRadius, l), l = (0 <= g ? l - 1.8 * (g + o) : l - 1.8 * o) / 2), l < this.minRadius && (l = this.minRadius), o = u(this.pullOutRadius, l), f = e.toCoordinate(this.startRadius, l), (u = u(this.innerRadius, l)) >= l && (u = l - 1), p = e.fitToBounds(this.startAngle, 0, 360), 0 < this.depth3D && (p = 270 <= p ? 270 : 90), 360 < (p -= 90) && (p -= 360), r = l - l * this.angle / 90, h = v = 0; h < t.length; h++) !0 !== (d = t[h]).hidden && (v += e.roundTo(d.percents, this.pf.precision));
//                     for (v = e.roundTo(v, this.pf.precision), this.tempPrec = NaN, this.adjustPrecision && 100 != v && (this.tempPrec = this.pf.precision + 1), h = 0; h < t.length; h++)
//                         if (!0 !== (d = t[h]).hidden && (this.showZeroSlices || 0 !== d.percents)) {
//                             var m = 360 * d.percents / 100,
//                                 v = Math.sin((p + m / 2) / 180 * Math.PI),
//                                 y = r / l * -Math.cos((p + m / 2) / 180 * Math.PI),
//                                 b = this.outlineColor;
//                             b || (b = d.color);
//                             var x = this.alpha;
//                             if (isNaN(d.alpha) || (x = d.alpha), b = {
//                                     fill: d.color,
//                                     stroke: b,
//                                     "stroke-width": this.outlineThickness,
//                                     "stroke-opacity": this.outlineAlpha,
//                                     "fill-opacity": x
//                                 }, d.url && (b.cursor = "pointer"), b = e.wedge(i, a, s, p, m, l, r, u, this.depth3D, b, this.gradientRatio, d.pattern, this.path, this.gradientType), e.setCN(this, b, "pie-item"), e.setCN(this, b.wedge, "pie-slice"), e.setCN(this, b, d.className, !0), this.addEventListeners(b, d), d.startAngle = p, t[h].wedge = b, 0 < n && (this.chartCreated || b.setAttr("opacity", this.startAlpha)), d.ix = v, d.iy = y, d.wedge = b, d.index = h, d.label = null, x = i.set(), this.labelsEnabled && this.labelText && d.percents >= this.hideLabelsPercent) {
//                                 var w = p + m / 2;
//                                 0 > w && (w += 360), 360 < w && (w -= 360);
//                                 var T = g;
//                                 isNaN(d.labelRadius) || 0 > (T = d.labelRadius) && (d.skipTick = !0), m = a + v * (l + T);
//                                 var C, S, _ = s + y * (l + T),
//                                     A = 0;
//                                 isNaN(c) && 350 < w && 1 < t.length - h && (c = h - 1 + Math.floor((t.length - h) / 2)), 0 <= T ? (90 >= w && 0 <= w ? (S = 0, C = "start", A = 8) : 90 <= w && 180 > w ? (S = 1, C = "start", A = 8) : 180 <= w && 270 > w ? (S = 2, C = "end", A = -8) : 270 <= w && 354 >= w ? (S = 3, C = "end", A = -8) : 354 <= w && (h > c ? (S = 0, C = "start", A = 8) : (S = 3, C = "end", A = -8)), d.labelQuarter = S) : C = "middle", w = this.formatString(this.labelText, d), (T = this.labelFunction) && (w = T(d, w)), (T = d.labelColor) || (T = this.color), "" !== w && (w = e.wrappedText(i, w, T, this.fontFamily, this.fontSize, C, !1, this.maxLabelWidth), e.setCN(this, w, "pie-label"), e.setCN(this, w, d.className, !0), w.translate(m + 1.5 * A, _), 0 > g && (w.node.style.pointerEvents = "none"), w.node.style.cursor = "default", d.ty = _, d.textX = m + 1.5 * A, x.push(w), this.axesSet.push(x), d.labelSet = x, d.label = w, this.addEventListeners(x, d)), d.tx = m, d.tx2 = m + A, d.tx0 = a + v * l, d.ty0 = s + y * l
//                             }
//                             m = u + (l - u) / 2, d.pulled && (m += o), this.accessible && this.accessibleLabel && (_ = this.formatString(this.accessibleLabel, d), this.makeAccessible(b, _)), void 0 !== this.tabIndex && b.setAttr("tabindex", this.tabIndex), d.balloonX = v * m + a, d.balloonY = y * m + s, d.startX = Math.round(v * f), d.startY = Math.round(y * f), d.pullX = Math.round(v * o), d.pullY = Math.round(y * o), this.graphsSet.push(b), (0 === d.alpha || 0 < n && !this.chartCreated) && (b.hide(), x && x.hide()), 360 < (p += 360 * d.percents / 100) && (p -= 360)
//                         } 0 < g && this.arrangeLabels(), this.pieXReal = a, this.pieYReal = s, this.radiusReal = l, this.innerRadiusReal = u, 0 < g && this.drawTicks(), this.initialStart(), this.setDepths()
//                 }(t = this.legend) && t.invalidateSize()
//             } else this.cleanChart();
//             this.dispDUpd()
//         },
//         setDepths: function () {
//             var e, t = this.chartData;
//             for (e = 0; e < t.length; e++) {
//                 var n, i = (n = t[e]).wedge;
//                 0 <= (n = n.startAngle) && 180 > n ? i.toFront() : 180 <= n && i.toBack()
//             }
//         },
//         arrangeLabels: function () {
//             var e, t, n = this.chartData,
//                 i = n.length;
//             for (t = i - 1; 0 <= t; t--) 0 !== (e = n[t]).labelQuarter || e.hidden || this.checkOverlapping(t, e, 0, !0, 0);
//             for (t = 0; t < i; t++) 1 != (e = n[t]).labelQuarter || e.hidden || this.checkOverlapping(t, e, 1, !1, 0);
//             for (t = i - 1; 0 <= t; t--) 2 != (e = n[t]).labelQuarter || e.hidden || this.checkOverlapping(t, e, 2, !0, 0);
//             for (t = 0; t < i; t++) 3 != (e = n[t]).labelQuarter || e.hidden || this.checkOverlapping(t, e, 3, !1, 0)
//         },
//         checkOverlapping: function (e, t, n, i, r) {
//             var o, a, s = this.chartData,
//                 l = s.length,
//                 c = t.label;
//             if (c) {
//                 if (!0 === i)
//                     for (a = e + 1; a < l; a++) s[a].labelQuarter == n && (o = this.checkOverlappingReal(t, s[a], n)) && (a = l);
//                 else
//                     for (a = e - 1; 0 <= a; a--) s[a].labelQuarter == n && (o = this.checkOverlappingReal(t, s[a], n)) && (a = 0);
//                 !0 === o && 200 > r && isNaN(t.labelRadius) && (t.ty = o = t.ty + 3 * t.iy, c.translate(t.textX, o), this.checkOverlapping(e, t, n, i, r + 1))
//             }
//         },
//         checkOverlappingReal: function (t, n, i) {
//             var r = !1,
//                 o = t.label,
//                 a = n.label;
//             return t.labelQuarter != i || t.hidden || n.hidden || !a || (o = o.getBBox(), (i = {}).width = o.width, i.height = o.height, i.y = t.ty, i.x = t.tx, t = a.getBBox(), (a = {}).width = t.width, a.height = t.height, a.y = n.ty, a.x = n.tx, e.hitTest(i, a) && (r = !0)), r
//         }
//     })
// }(), AmCharts.themes.light = {
//     themeName: "light",
//     AmChart: {
//         color: "#000000",
//         backgroundColor: "#FFFFFF"
//     },
//     AmCoordinateChart: {
//         colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
//     },
//     AmStockChart: {
//         colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
//     },
//     AmSlicedChart: {
//         colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"],
//         outlineAlpha: 1,
//         outlineThickness: 2,
//         labelTickColor: "#000000",
//         labelTickAlpha: .3
//     },
//     AmRectangularChart: {
//         zoomOutButtonColor: "#000000",
//         zoomOutButtonRollOverAlpha: .15,
//         zoomOutButtonImage: "lens"
//     },
//     AxisBase: {
//         axisColor: "#000000",
//         axisAlpha: .3,
//         gridAlpha: .1,
//         gridColor: "#000000"
//     },
//     ChartScrollbar: {
//         backgroundColor: "#000000",
//         backgroundAlpha: .12,
//         graphFillAlpha: .5,
//         graphLineAlpha: 0,
//         selectedBackgroundColor: "#FFFFFF",
//         selectedBackgroundAlpha: .4,
//         gridAlpha: .15
//     },
//     ChartCursor: {
//         cursorColor: "#000000",
//         color: "#FFFFFF",
//         cursorAlpha: .5
//     },
//     AmLegend: {
//         color: "#000000"
//     },
//     AmGraph: {
//         lineAlpha: .9
//     },
//     GaugeArrow: {
//         color: "#000000",
//         alpha: .8,
//         nailAlpha: 0,
//         innerRadius: "40%",
//         nailRadius: 15,
//         startWidth: 15,
//         borderAlpha: .8,
//         nailBorderAlpha: 0
//     },
//     GaugeAxis: {
//         tickColor: "#000000",
//         tickAlpha: 1,
//         tickLength: 15,
//         minorTickLength: 8,
//         axisThickness: 3,
//         axisColor: "#000000",
//         axisAlpha: 1,
//         bandAlpha: .8
//     },
//     TrendLine: {
//         lineColor: "#c03246",
//         lineAlpha: .8
//     },
//     AreasSettings: {
//         alpha: .8,
//         color: "#67b7dc",
//         colorSolid: "#003767",
//         unlistedAreasAlpha: .4,
//         unlistedAreasColor: "#000000",
//         outlineColor: "#FFFFFF",
//         outlineAlpha: .5,
//         outlineThickness: .5,
//         rollOverColor: "#3c5bdc",
//         rollOverOutlineColor: "#FFFFFF",
//         selectedOutlineColor: "#FFFFFF",
//         selectedColor: "#f15135",
//         unlistedAreasOutlineColor: "#FFFFFF",
//         unlistedAreasOutlineAlpha: .5
//     },
//     LinesSettings: {
//         color: "#000000",
//         alpha: .8
//     },
//     ImagesSettings: {
//         alpha: .8,
//         labelColor: "#000000",
//         color: "#000000",
//         labelRollOverColor: "#3c5bdc"
//     },
//     ZoomControl: {
//         buttonFillAlpha: .7,
//         buttonIconColor: "#a7a7a7"
//     },
//     SmallMap: {
//         mapColor: "#000000",
//         rectangleColor: "#f15135",
//         backgroundColor: "#FFFFFF",
//         backgroundAlpha: .7,
//         borderThickness: 1,
//         borderAlpha: .8
//     },
//     PeriodSelector: {
//         color: "#000000"
//     },
//     PeriodButton: {
//         color: "#000000",
//         background: "transparent",
//         opacity: .7,
//         border: "1px solid rgba(0, 0, 0, .3)",
//         MozBorderRadius: "5px",
//         borderRadius: "5px",
//         margin: "1px",
//         outline: "none",
//         boxSizing: "border-box"
//     },
//     PeriodButtonSelected: {
//         color: "#000000",
//         backgroundColor: "#b9cdf5",
//         border: "1px solid rgba(0, 0, 0, .3)",
//         MozBorderRadius: "5px",
//         borderRadius: "5px",
//         margin: "1px",
//         outline: "none",
//         opacity: 1,
//         boxSizing: "border-box"
//     },
//     PeriodInputField: {
//         color: "#000000",
//         background: "transparent",
//         border: "1px solid rgba(0, 0, 0, .3)",
//         outline: "none"
//     },
//     DataSetSelector: {
//         color: "#000000",
//         selectedBackgroundColor: "#b9cdf5",
//         rollOverBackgroundColor: "#a8b0e4"
//     },
//     DataSetCompareList: {
//         color: "#000000",
//         lineHeight: "100%",
//         boxSizing: "initial",
//         webkitBoxSizing: "initial",
//         border: "1px solid rgba(0, 0, 0, .3)"
//     },
//     DataSetSelect: {
//         border: "1px solid rgba(0, 0, 0, .3)",
//         outline: "none"
//     }
// };