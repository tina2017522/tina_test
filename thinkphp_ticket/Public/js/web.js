!function (t) {
    function n(r) {
        if (e[r])return e[r].exports;
        var i = e[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }

    var e = {};
    return n.m = t, n.c = e, n.p = "", n(0)
}([function (t, n, e) {
    "use strict";
    var r = e(1);
    t.exports = r()
}, function (t, n, e) {
    "use strict";
    function r() {
        function t() {
            var t = 1e3, e = 2 * t;
            b = setInterval(function () {
                var t = n(), r = t - q;
                q = t, r < e && (A += r)
            }, t)
        }

        function n() {
            return new Date - 0
        }

        function r(t, n) {
            function e(t, n) {
                t = [].slice.call(n, 1);
                var e, r, i = n[0], o = i.split(".");
                1 < o.length && (r = w, e = o[0], i = o[1]);
                var u = I[i];
                "function" == typeof u && (e && I.use(e), I[i].apply(I, t), e && I.use(r.id))
            }

            if (t) {
                var r, i, o, u, a, c, s, f = [], l = [], d = [];
                for (u = 0, a = t.length; u < a; u++)c = t[u][0], "config" === c ? l.push(t[u]) : s || "use" !== c ? d.push(t[u]) : (f.push(t[u]), s = !0);
                for (t = l.concat(f.concat(d)), o = 0, a = t.length; o < a; o++)r = t[o], e(i, r);
                n.q = {
                    push: function (t) {
                        return e(i, t), I
                    }
                }
            }
        }

        function v() {
            a.isIE && new Date - x < 50 || S || (S = !0, w && I.quit())
        }

        function _() {
            i || u.ready(function () {
                var t = e(27);
                t(I).then(function () {
                    h || (h = function () {
                        return h.q.push(arguments), h
                    }, h.q = []), f.delay(!0), r(h.q, h), o.on(l, "beforeunload", v), o.on(l, "unload", v), f.delay(!1), I.report(), i = !0
                })
            })
        }

        var b, w, x, S, O = 0, D = h.l, q = n(), A = n() - D, I = {
            init: function (t) {
                try {
                    this.use(t)
                } catch (n) {
                }
                return I
            }, config: function (t, n) {
                return u.conf(t, n) || I
            }, use: function (t, n) {
                try {
                    w = s.get(t, n)
                } catch (e) {
                }
                return I
            }, status: !0, get: function (t, n) {
                try {
                    g(t) && (n = t, t = null), w.get(t, n)
                } catch (e) {
                }
                return I
            }, set: function (t, n) {
                return m(t) ? o.each(t, function (t, n) {
                    t && w.set(n, t)
                }) : w.set(t, n), I
            }, event: function (t, n) {
                try {
                    n && n.isDelay && (f.isDelay = !0), w && w.event(t, n)
                } catch (e) {
                } finally {
                    n && n.isDelay && (f.isDelay = !1)
                }
                return I
            }, tag: function (t, n, e) {
                try {
                    var r = {};
                    if (y(t) && m(n)) r[t] = n, n = r; else if (g(t)) e = t, t = null, n = null; else {
                        if (!m(t))return;
                        g(n) && (e = n), n = t, t = null
                    }
                    w.tag(n, function (n) {
                        g(e) && e(t ? n[t] : n)
                    })
                } catch (i) {
                }
                return I
            }, tracker: function () {
            }, report: function (t) {
                return f.report(t), I
            }, quit: function () {
                var t, n = u.conf("quit");
                s.quit();
                try {
                    "function" == typeof n && (t = n()), t = o.extend(!0, {duration: A}, t || {}), A = 0
                } catch (e) {
                }
                clearInterval(b), I.event({
                    nm: "report",
                    nt: 0,
                    val_act: "quit",
                    val_lab: t,
                    isauto: 1
                }, {isDelay: !0}), f.report(0)
            }, pv: function (t, e) {
                O++;
                var r, i, a = "";
                t = t || {}, o.is.object(t) ? o.is.object(e) && (t.val = o.extend(!0, t.val || {}, e)) : (i = t, t = {}, t.cid = i, e && (t.val = e)), t.ref || (a = d.referrer, u.conf("alwaysSendReferrer") || (r = a.replace(/^(http|https)\:\/\//, "").split("/")[0], r === p.host && (a = ""))), a && (c.ref = a.replace(/#.*/, "")), i = t.cid, i && u.conf("cid", i);
                var s = u.conf("cid") || d.title || p.pathname, f = {act: "pageview", cid: s, ref: a};
                o.each(f, function (n, e) {
                    !t[e] && n && (t[e] = n)
                });
                var l = {};
                o.each(t, function (n, e) {
                    f[e] || "val" === e ? l["val_" + e] = t[e] : l[e] = t[e]
                }), l = o.extend(!0, {nm: "mpt", nt: 0, url: p.href, isauto: 0, tm: O ? n() : D}, l), I.event(l)
            }, mv: function (t, n) {
                this.event(t, n)
            }, send: function (t, n, e) {
                "pv" === t ? this.pv(n, e) : "exception" === t && I.event({
                        nm: "mge",
                        nt: 0,
                        val: {val: d.domain, lab: n},
                        isauto: 0
                    })
            }, reload: function () {
            }, version: "3.1.17"
        };
        a.isIE && o.on(d, "mouseup", function (t) {
            var n = t.target || t.srcElement, e = n.tagName + n.href;
            e = e.toLocaleLowerCase(), 1 === n.nodeType && /^ajavascript:/i.test(e) && (x = new Date)
        }), I.start = _;
        var T = f.getAppConf();
        return T.autoStart && _(), t(), h._MTAObject = I, I
    }

    var i, o = e(2), u = e(4), a = e(16), c = e(3), s = e(17), f = e(20), l = c.win, d = c.doc, p = c.loc,
        v = "_MeiTuanALogObject", h = l[l[v]], m = o.is.object, g = o.is.func, y = o.is.string;
    h || (h = function () {
        return h.q.push(arguments), h
    }, h.q = h.q || [], h.l = new Date - 0, l[v] = h), t.exports = r
}, function (t, n, e) {
    "use strict";
    function r(t) {
        return Object.prototype.toString.call(t).toLowerCase()
    }

    function i(t) {
        return t = t.toLowerCase(), function (n) {
            var e = "undefined" == typeof n ? "undefined" : O(n);
            return "object" === e ? r(n) === "[object " + t + "]" : e === t
        }
    }

    function o(t) {
        return null != t && t === t.window
    }

    function u(t) {
        var n;
        if (!t || !N(t) || t.nodeType || o(t))return !1;
        try {
            if (t.constructor && !q.call(t, "constructor") && !q.call(t.constructor.prototype, "isPrototypeOf"))return !1
        } catch (e) {
            return !1
        }
        if (k.ownLast)for (n in t)return q.call(t, n);
        for (n in t);
        return void 0 === n || q.call(t, n)
    }

    function a() {
        return "" + +new Date + A++ + parseInt(1e3 * Math.random())
    }

    function c(t, n) {
        return t.indexOf(n) > -1
    }

    function s(t, n) {
        return 0 === t.indexOf(n)
    }

    function f(t, n) {
        var e = t.length, r = n.length;
        return e >= r && t.indexOf(n) === e - r
    }

    function l(t) {
        return C(t) ? t.replace(/^\s+|\s+$/g, "") : ""
    }

    function d() {
        return D.loc.host.match(/(.*\.)?(.*\.\w+)$/)
    }

    function p(t) {
        var n = j.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
        return T(n ? n[1] : "")
    }

    function v(t, n, e, r) {
        var i, o, u, a = t + "=" + I(n) + ";path=/;domain=" + r;
        E !== e && L(e) && (i = new Date, o = 60 * parseInt(e, 10) * 1e3, u = i.getTime() + o, i.setTime(u), a += ";expires=" + i.toUTCString());
        try {
            return j.cookie = a, !0
        } catch (c) {
            return !1
        }
    }

    function h(t, n, e) {
        var r, i = j.domain, o = i.split("."), u = o.length, a = u - 1, c = !1;
        for (n = "" + n; !c && a >= 0 && (i = o.slice(a, u).join("."), v(t, n, e, i), r = p(t), E !== r && (c = r === n), a--, !c););
    }

    function m() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    function g(t) {
        function n(t) {
            var r, i = [];
            for (r in t)if (q.call(t, r)) {
                var o = t[r];
                o = M(o) ? e(o) : N(o) ? n(o) : I(o), i.push(r + "=" + o)
            }
            return i.join("&")
        }

        function e(t) {
            for (var r = 0, i = t.length, o = []; r < i; r++) {
                var u = t[r];
                u = M(u) ? e(u) : N(u) ? n(u) : I(u), o.push(u)
            }
            return o.join(",")
        }

        var r = [];
        return M(t) ? r.push(e(t)) : N(t) ? r.push(n(t)) : r.push(I(t)), r.join("&")
    }

    function y(t, n) {
        function e(t) {
            if (!t)return null;
            for (var n = t.split("&"), e = {}; n.length;) {
                var r = n.shift(), i = r.indexOf("=");
                if (0 !== i || r.lastIndexOf("=") !== r.indexOf("=")) {
                    var o, u;
                    if (i !== -1) o = r.substr(0, i), u = r.substr(i + 1); else {
                        if (!r)continue;
                        o = r, u = void 0
                    }
                    q.call(e, o) ? ("[object Array]" !== {}.toString.call(e[o]) && (e[o] = [e[o]]), e[o].push(T(u))) : e[o] = T(u)
                }
            }
            return e
        }

        if (!t)return null;
        var r, i, o = t.indexOf("#"), u = t.substr(0, o === -1 ? t.length : o);
        i = n ? "" : o !== -1 && t.lastIndexOf("#") === t.indexOf("#") ? t.substr(o + 1) : "", r = {uri: u, hash: e(i)};
        var a = r.uri.lastIndexOf("?");
        return a === -1 ? {
            uri: {},
            hash: r.hash
        } : (r.uri = r.uri.substr(a + 1), r.uri === -1 ? r : (r.uri = e(r.uri), r))
    }

    function _(t) {
        var n, e, r, i, o, a, c = 1, s = arguments.length, f = !1;
        for (t = arguments[0] || {}, "boolean" == typeof t && (f = t, t = arguments[c] || {}, c++), "object" === ("undefined" == typeof t ? "undefined" : O(t)) || R(t) || (t = {}), c === s && (t = this, c--); c < s; c++)if (null != (o = arguments[c]))for (i in o)n = t[i], r = o[i], t !== r && (f && r && (u(r) || (e = M(r))) ? (e ? (e = !1, a = n && M(n) ? n : []) : a = n && u(n) ? n : {}, t[i] = _(f, a, r)) : void 0 !== r && (t[i] = r));
        return t
    }

    function b(t, n) {
        if (t) {
            var e, r, i, o = t.length, u = (t.splice || t.callee) instanceof Function;
            if (!isNaN(o) && u)for (e = 0; e < o && (r = t[e], i = n.call(null, r, e, t), !1 !== i); e++); else for (var a in t)if (q.call(t, a) && (r = t[a], i = n.call(null, r, a, t), !1 === i))break
        }
    }

    function w(t, n) {
        if (E === n)return t;
        var e, r, i;
        if (t = t || {}, n instanceof Array)return [];
        for (var o in n)q.call(n, o) && (i = n[o], e = O(t[o]), r = O(n[o]), "object" === e ? t[o] = w(t[o], n[o]) : E === t[o] && E !== i && (t[o] = "object" === r ? w({}, i) : i));
        return t
    }

    function x(t) {
        if (t) {
            var n = D.doc, e = n.documentElement.scrollTop + n.body.scrollTop,
                r = n.documentElement.scrollLeft + n.body.scrollLeft;
            return {x: e, y: r}
        }
    }

    function S(t, n) {
        return M(t) ? (b(t, function (t, e) {
            n(t, e)
        }), t) : (n(t), t)
    }

    var O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, D = e(3), q = Object.hasOwnProperty, A = 0, I = encodeURIComponent, T = decodeURIComponent, k = {}, E = void 0,
        j = document, N = i("Object"), C = i("String"), M = Array.isArray || i("Array"), R = i("Function"),
        P = i("Undefined"), J = i("Number"), L = function (t) {
            return isNaN(t) === !1 && J(t)
        }, U = function (t) {
            var n = "EventListener", e = "add" + n;
            return t[e] ? {
                on: function (t, n, r) {
                    var i = n.split(" ");
                    b(i, function (n) {
                        t[e](n, r, !1)
                    })
                }, off: function (t, e, r) {
                    var i = e.split(" ");
                    b(i, function (e) {
                        t["remove" + n](e, r, !1)
                    })
                }
            } : {
                on: function (t, n, e) {
                    var r = n.split(" ");
                    b(r, function (n) {
                        t.attachEvent("on" + n, e)
                    })
                }, off: function (t, n, e) {
                    var r = n.split(" ");
                    b(r, function (n) {
                        t.detachEvent("on" + n, e)
                    })
                }
            }
        }(D.win), G = function () {
            return parseInt(+new Date / 1e3, 10)
        }, B = function (t) {
            return !!t && (!!/\d+\.\d+\.\d+\.\d/.test(t) || void 0)
        };
    t.exports = {
        unique: a,
        run: S,
        getXY: x,
        now: G,
        isObj: N,
        isStr: C,
        is: {
            object: N,
            string: C,
            array: M,
            func: R,
            undefined: P,
            numeric: L,
            contain: c,
            startWith: s,
            endWith: f,
            plainObject: u,
            ip: B
        },
        parseParams: g,
        getParams: y,
        undef: P,
        trim: l,
        toString: r,
        extend: _,
        merge: w,
        domain: {getHost: d},
        getCookie: p,
        setCookie: v,
        topCookie: h,
        random: m,
        each: b,
        on: U.on,
        off: U.off,
        hasOwn: function (t, n) {
            return q.call(t, n)
        },
        T: function (t, n) {
            return setTimeout(t, n)
        },
        clearT: function (t) {
            return clearTimeout(t)
        },
        setKeyVal: function (t, n, e, r) {
            var i = {};
            return i[e] = r, t[n] = _(!0, i, t[n] || {}), t
        }
    }
}, function (t, n) {
    "use strict";
    var e = "undefined" != typeof window ? window : void 0, r = navigator, i = !1, o = !0, u = r.userAgent.toString(),
        a = /dp\/com\.dianping\.[\w\.]+\/([\d\.]+)/i, c = /\bmeituanwaimai-c\/\d+\./i,
        s = /\bmeituan \d+|meituangroup\/\d+\./i, f = /\bandroid|mobile\b|\bhtc\b/i, l = f.test(u), d = i, p = i, v = i,
        h = i, m = i, g = i, y = i, _ = i;
    l && (c.test(u) ? d = o : s.test(u) ? v = o : a.test(u) && (p = o), /hotel/i.test(u) ? g = o : /titansx/i.test(u) ? h = o : /mtnb/i.test(u) && (m = o), /android/i.test(u) ? _ = o : /Mac OS X/i.test(u) && (y = o));
    var b = l ? "i" : "www", w = document, x = location, S = {
        win: e,
        nav: r,
        loc: x,
        doc: w,
        sc: e.screen,
        ua: u,
        ct: b,
        ref: w.referrer,
        domain: w.domain,
        DP_REG: a,
        GROUP_REG: s,
        WM_REG: c,
        isDPApp: p,
        isGApp: v,
        isWMApp: d,
        isHBNB: g,
        isMTNB: m,
        isTitansX: h,
        isMobile: l,
        isMAndroid: _,
        isMIOS: y,
        isHoS: 0 === x.protocol.indexOf("http")
    };
    S.debugMode = function () {
        return /\b_lxdebug=1\b/i.test(S.loc.search)
    }(), t.exports = S
}, function (t, n, e) {
    "use strict";
    function r() {
        if (b.isMobile) {
            var t = /iphone/i.test(b.ua), n = /ipad/i.test(b.ua), e = H();
            return e && b.isMAndroid ? "android" : e && t ? "iphone" : e && n ? "ipad" : "i"
        }
        return "www"
    }

    function i() {
        return +new Date * I + parseInt(Math.random() * I)
    }

    function o() {
        return _.getParams(C.href).uri
    }

    function u(t) {
        return t = t || o(), f = t.uuid || t.wm_uuid, l = t.msid, d = t.userid, p = t.cityid, {
            uuid: f,
            msid: l,
            uid: d,
            cityid: p
        }
    }

    function a() {
        B || (B = !0, _.each(z, function (t) {
            t()
        }))
    }

    function c() {
        if (!G)if (G = !0, b.isDPApp) {
            var t = e(11);
            t().then(function (t) {
                return L = t
            }).then(function () {
                return new q(function (t, n) {
                    var e = N.KNB || N.DPApp, r = e ? e.getUserInfo : null;
                    if (r)try {
                        r.call(e, {
                            success: function (n) {
                                var e = n ? n.dpid : null, r = n ? n.userId : null, i = n ? n.uuid : null,
                                    o = n ? n.unionId : null;
                                y && (e && y.set("dpid", e), r && y.set("uid", r), i && y.set("uuid", i), o && y.set("unionId", o)), t()
                            }, fail: function () {
                                n()
                            }
                        })
                    } catch (i) {
                        n(i)
                    } else n()
                })
            }).then(a, function (t) {
                a()
            })
        } else a()
    }

    function s(t, n) {
        _.each(n, function (n, e) {
            t.set(e, n)
        })
    }

    var f, l, d, p, v, h, m, g, y, _ = e(2), b = e(3), w = e(5), x = e(6), S = e(7), O = e(8), D = e(9), q = e(10),
        A = function () {
        }, I = 1e3, T = 6e5, k = !0, E = !1, j = "_MeiTuanALogObject", N = b.win, C = b.loc, M = b.doc, R = b.sc,
        P = _.undef, J = _.is.func, L = N[N[j]].req_id, U = "req_id", G = !1, B = !1, z = [], X = {
            cid: M.title || C.pathname,
            appnm: "",
            autoStart: k,
            autoUrlEnv: b.isGApp ? E : k,
            alwaysSendReferrer: E,
            nwb: !1,
            quit: A,
            log: null,
            offline: A,
            val: null
        }, H = function () {
            var t = "", n = b.ua, e = [{
                n: "dianping_wedmerchant",
                r: /dp\/com.dianping.(wed){0,1}merchant.mobile\/\d+/i,
                v: n
            }, {n: "dianping_nova", r: b.DP_REG, v: n}, {n: "waimai", r: b.WM_REG, v: n}, {
                n: "moviepro",
                r: /moviepro/i,
                v: n
            }, {n: "movie", r: /maoyan/i, v: n}, {n: "group", r: b.GROUP_REG, v: n}, {
                n: "demo",
                r: /lingxi\/demo\/\d+/i,
                v: n
            }];
            return b.isMobile && _.each(e, function (n) {
                if (n.r.test(n.v))return t = n.n, !1
            }), t && (X.nwb = !0), function () {
                return t
            }
        }();
    "complete" !== b.doc.readyState ? (_.on(b.doc, "DOMContentLoaded", c), _.on(b.win, "load", c)) : c();
    var K = function () {
    };
    K.ready = function (t) {
        B ? J(t) && t() : z.push(t)
    }, K.init = function () {
        if (!y) {
            var t = _.getParams(C.href).uri, n = H();
            v = O(t) || {}, y = new w("_default", {}, !0), y.set("sdk_ver", "3.1.17"), n && y.set("appnm", n), h && y.set("dpid", h), m && y.set("union_id", m), y.set("ct", r()), y.set("ch", "web"), y.set("lch", v.utm_source), y.set("ua", b.ua), y.set("sc", R.height + "*" + R.width), y.set("utm", v), (b.isGApp || b.isWMApp) && s(y, u()), y.get("uuid") || y.set("uuid", x()), y.get("msid") || y.set("msid", S())
        }
        return y
    }, K.conf = function (t, n) {
        if (K.init(), P(n)) {
            if (!P(t))return _.hasOwn(X, t) ? X[t] : y.get(t)
        } else _.hasOwn(X, t) ? (X[t] = n, "autoUrlEnv" === t && u()) : y.set(t, n);
        return _.merge(X, y.toJSON())
    }, K.defaultEnv = function () {
        return K.init(), y
    }, K.seq = function (t) {
        return t = S.seq(t)
    }, K.upReq = function (t) {
        if (t) {
            var n = D(b.loc.href.replace(/#.*/)), r = e(12), i = r.get(U) || {}, o = +new Date;
            i[n] = t, _.each(i, function (t, n) {
                t /= I, o - t > T && delete i[n]
            }), r.set(U, i)
        }
    }, K.reqId = function (t) {
        return L ? L && !b.isDPApp && t && (g = L, L = i()) : (L = i(), this.upReq(L)), L
    }, K.refReqId = function () {
        if (!g) {
            var t = e(12), n = D(b.ref), r = t.get(U) || {};
            return _.each(r, function (t, e) {
                e === n && (g = t)
            }), g
        }
        return g || ""
    }, t.exports = K
}, function (t, n, e) {
    "use strict";
    function r(t, n, e) {
        var r = this, o = {};
        r._d = e, r.id = t, r._k = o, n && i.each(n, function (t, n) {
            r.set(n, t)
        })
    }

    var i = e(2);
    r.prototype = {
        constructor: r, set: function (t, n) {
            this._k[t] = n
        }, get: function (t) {
            if (t) {
                var n = this;
                return t ? n._k[t] : i.extend(!0, {}, n._k)
            }
        }, toJSON: function () {
            return i.extend(!0, {}, this._k)
        }
    }, t.exports = r
}, function (t, n, e) {
    "use strict";
    function r() {
        var t = "";
        return i || (i = s("iuuid") || s("uuid")), i || (t = s(c), i = t.split(".")[0], f(c, i, a)), i || (i = l(), f(c, i, a)), i
    }

    var i, o = e(2), u = e(3), a = 15768e3, c = "_lxsdk", s = o.getCookie, f = o.topCookie, l = function () {
        var t = function () {
            for (var t = 1 * new Date, n = 0; t === 1 * new Date && n < 200;)n++;
            return t.toString(16) + n.toString(16)
        }, n = function () {
            return Math.random().toString(16).replace(".", "")
        }, e = function () {
            function t(t, n) {
                var e, r = 0;
                for (e = 0; e < n.length; e++)r |= i[e] << 8 * e;
                return t ^ r
            }

            var n, e, r = u.ua, i = [], o = 0;
            for (n = 0; n < r.length; n++)e = r.charCodeAt(n), i.unshift(255 & e), i.length >= 4 && (o = t(o, i), i = []);
            return i.length > 0 && (o = t(o, i)), o.toString(16)
        };
        return function () {
            var r = (screen.height * screen.width).toString(16);
            return t() + "-" + n() + "-" + e() + "-" + r + "-" + t()
        }
    }();
    t.exports = r
}, function (t, n, e) {
    "use strict";
    function r(t, n, e) {
        var r = t + "|" + n + "|" + e;
        l(s, r, c)
    }

    function i(t) {
        t = t || "";
        var n, e, i, o;
        return u || (n = f(s), e = n.split("|"), i = e[1] || "", o = e[2] || "0", i && t !== i || (u = e[0])), "undefined" !== u && u || (u = d() + d() + d() + d() + d() + d() + d(), r(u, t, o)), u || (u = f("IJSESSIONID") || f("JSESSIONID")), u
    }

    function o(t) {
        var n = f(s) || "", e = n.split("|"), i = e[1] || "";
        return t ? r(u, i, t) : t = e[2] || "1", parseInt(t, 10)
    }

    var u, a = e(2), c = 30, s = "_lxsdk_s", f = a.getCookie, l = a.topCookie, d = a.random;
    i.seq = o, t.exports = i
}, function (t, n, e) {
    "use strict";
    function r(t) {
        var n = d;
        if (c.is.ip(n))return !1;
        var e = [];
        return c.each(t, function (t, n) {
            f.test(t) && t.length <= 100 && e.push(n + "=" + t)
        }), c.setCookie("_lx_utm", e.join("&"), 263520, n), !0
    }

    function i() {
        var t, n, e = c.getCookie("_lx_utm"), i = [], o = {};
        return e && -1 === e.indexOf("&") ? (n = e.split("utm_"), c.each(n, function (t) {
            t && i.push("utm_" + t)
        }), n = i) : n = (e || "").split("&"), c.each(n, function (n) {
            var e = n.split("=");
            t = e[0], t && (o[t] = e[1] || "")
        }), o && r(o), o
    }

    function o(t) {
        if (!t)return null;
        var n, e, r = !1, i = {}, u = ["source", "medium", "term", "content", "campaign"];
        return c.each(u, function (u) {
            n = "utm_" + u, n in t && (r = !0, e = t[n], i[n] = e || "", o.hasUTM = !0)
        }), r ? i : null
    }

    function u(t) {
        return a || (a = o(t), a && o.hasUTM ? r(a) : a = i()), a
    }

    var a, c = e(2), s = e(3), f = /^([^<>\r\n\(\)])+$/, l = s.loc, d = l.hostname;
    t.exports = u
}, function (t, n) {
    "use strict";
    var e = function () {
        for (var t, n = [], e = 0; e < 256; e++) {
            t = e;
            for (var r = 0; r < 8; r++)t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            n[e] = t
        }
        return n
    }(), r = function (t) {
        for (var n = -1, r = 0; r < t.length; r++)n = n >>> 8 ^ e[255 & (n ^ t.charCodeAt(r))];
        var i = (n ^ -1) >>> 0;
        return i.toString(16)
    };
    t.exports = r
}, function (t, n) {
    "use strict";
    function e(t) {
        return t
    }

    function r(t) {
        try {
            t(i(this, d), i(this, l))
        } catch (n) {
            if (this._state === p)return a(new r(e), l, n)
        }
    }

    function i(t, n) {
        return function (e) {
            return a(t, n, e)
        }
    }

    function o(t, n, e, r) {
        return ("undefined" == typeof e ? "undefined" : f(e)) === v && (n._onFulfilled = e), ("undefined" == typeof r ? "undefined" : f(r)) === v && (n._onRejected = r), t._state === p ? t[t._pCount++] = n : u(t, n), n
    }

    function u(t, n) {
        return setTimeout(function () {
            var e, r = t._state ? n._onFulfilled : n._onRejected;
            if (void 0 === r)return void a(n, t._state, t._value);
            try {
                e = r(t._value)
            } catch (i) {
                return void a(n, l, i)
            }
            c(n, e)
        })
    }

    function a(t, n, e) {
        if (t._state === p) {
            t._state = n, t._value = e;
            for (var r = 0, i = t._pCount; r < i;)u(t, t[r++]);
            return t
        }
    }

    function c(t, n) {
        if (n === t && n)return void a(t, l, new Error("promise_circular_chain"));
        var e, r = "undefined" == typeof n ? "undefined" : f(n);
        if (null === n || r !== v && r !== h) a(t, d, n); else {
            try {
                e = n.then
            } catch (i) {
                return void a(t, l, i)
            }
            ("undefined" == typeof e ? "undefined" : f(e)) === v ? s(t, n, e) : a(t, d, n)
        }
        return t
    }

    function s(t, n, e) {
        try {
            e.call(n, function (e) {
                n && (n = null, c(t, e))
            }, function (e) {
                n && (n = null, a(t, l, e))
            })
        } catch (r) {
            n && (a(t, l, r), n = null)
        }
    }

    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    r.prototype.then = function (t, n) {
        return o(this, new r(e), t, n)
    }, r.prototype.catch = function (t) {
        return this._state === p ? o(this, new r(e), e, t) : o(this, new r(e), e, e)
    }, r.all = function (t) {
        return new r(function (n, e) {
            for (var i, o = 0, u = t.length, a = [], c = 0, s = function (t) {
                var n = [];
                for (o = 0; o < u; o++)n.push(t[o] ? t[o].value : void 0);
                return n
            }, f = function (t) {
                return function (e) {
                    if (t.value = e, t.state = d, c++, c === t.len && !i) {
                        var r = s(a);
                        n(r)
                    }
                }
            }, p = function (t) {
                return function (n) {
                    t.value = n, t.state = l, c++, i || (i = !0, e(n))
                }
            }; o < u; o++) {
                var v = t[o], h = {value: null, index: o, state: null, len: u};
                a.push(h), !function (t) {
                    v.then ? v.then(f(t), p(t)) : r.resolve(v).then(f(t), p(t))
                }(h)
            }
        })
    }, r.resolve = function (t) {
        if (t instanceof r)return t;
        if ("function" == typeof t.then) {
            var n = t.then.bind(t);
            return new r(function (t, e) {
                n(t, e)
            })
        }
        return new r(function (n) {
            n(t)
        })
    }, r.reject = function (t) {
        return new r(function (n, e) {
            e(t)
        })
    };
    var l = 0, d = 1, p = 2, v = "function", h = "object";
    r.prototype._state = p, r.prototype._pCount = 0, t.exports = r
}, function (t, n, e) {
    "use strict";
    function r() {
        var t = new o(function (t, n) {
            var r = e(2), o = 0;
            if (!i.isDPApp)return void n("not dp");
            var c = function () {
                s = null, n("timeout")
            };
            o = r.T(c, a);
            var s = function (e) {
                if (r.clearT(o), e && e.requestId)try {
                    t(e.requestId)
                } catch (i) {
                    n(i)
                } else n("bridge failure")
            };
            if (u.KNB) KNB.use("getRequestId", {
                success: function (t) {
                    s && s(t)
                }, fail: function () {
                    n("knb fail"), r.clearT(o)
                }
            }); else {
                if (!u.DPApp || !u.DPApp.getRequestId)return n(), void r.clearT(o);
                u.DPApp.getRequestId({
                    success: function (t) {
                        s && s(t)
                    }
                })
            }
        });
        return t
    }

    var i = e(3), o = e(10), u = i.win, a = 5e3;
    t.exports = r
}, function (t, n, e) {
    "use strict";
    function r() {
        this.version = "0.0.1"
    }

    var i, o = e(2), u = e(13);
    i = e(14);
    var a = {report_data: 1, uuid: 1, msid: 1, tag: 1, req_id: 1}, c = {}, s = "tag";
    r.prototype = {
        constructor: r, get: function (t) {
            var n;
            o.hasOwn(a, t) && (n = i.get(t));
            var e = c[t] ? c[t] : n ? n : null;
            return e && s === t && o.now() - e[u.alive] > 600 ? (c[t] = null, null) : e
        }, set: function (t, n) {
            c[t] = n, o.hasOwn(a, t) && (t === s && n && (n[u.alive] = o.now()), i.set(t, n))
        }, keys: function l(t) {
            var l = [];
            for (var n in c)o.hasOwn(c, n) && (t ? n.indexOf(t) && l.push(n) : l.push(n));
            return l
        }, clear: function () {
            o.each(this.keys(), function (t) {
                o.hasOwn(a, t) || i.del(t)
            })
        }
    };
    try {
        o.each(i.keys(), function (t) {
            o.hasOwn(a, t) || i.del(t)
        }), i.del("__ls_meta"), i.del("__linxi_ls"), i.del("__linxi_ls2")
    } catch (f) {
    }
    t.exports = new r
}, function (t, n) {
    "use strict";
    t.exports = {
        env: "env",
        tag: "tag",
        evs: "evs",
        quit: "quit",
        reportData: "report_data",
        uploading: "uploading",
        timeout: "_timeout",
        alive: "_alive"
    }
}, function (t, n, e) {
    "use strict";
    var r = e(15), i = e(3), o = function () {
        function t() {
            try {
                return c in u && u[c]
            } catch (t) {
                return !1
            }
        }

        var n, e = {}, o = void 0, u = i.win, a = i.doc, c = "localStorage", s = "script";
        if (e.disabled = !1, e.version = "1.3.20", e.set = function (t, n) {
            }, e.get = function (t, n) {
            }, e.has = function (t) {
                return e.get(t) !== o
            }, e.remove = function (t) {
            }, e.clear = function () {
            }, e.transact = function (t, n, r) {
                null == r && (r = n, n = null), null == n && (n = {});
                var i = e.get(t, n);
                r(i), e.set(t, i)
            }, e.getAll = function () {
            }, e.forEach = function () {
            }, e.serialize = function (t) {
                return r.stringify(t)
            }, e.deserialize = function (t) {
                if ("string" != typeof t)return o;
                try {
                    return r.parse(t)
                } catch (n) {
                    return t || o
                }
            }, t()) n = u[c], e.set = function (t, r) {
            return r === o ? e.remove(t) : (n.setItem(t, e.serialize(r)), r)
        }, e.get = function (t, r) {
            var i = e.deserialize(n.getItem(t));
            return i === o ? r : i
        }, e.remove = function (t) {
            n.removeItem(t)
        }, e.clear = function () {
            n.clear()
        }, e.getAll = function () {
            var t = {};
            return e.forEach(function (n, e) {
                t[n] = e
            }), t
        }, e.forEach = function (t) {
            for (var r = 0; r < n.length; r++) {
                var i = n.key(r);
                t(i, e.get(i))
            }
        }; else if (a && a.documentElement.addBehavior) {
            var f, l;
            try {
                l = new ActiveXObject("htmlfile"), l.open(), l.write("<" + s + ">document.w=window</" + s + '><iframe src="/favicon.ico"></iframe>'), l.close(), f = l.w.frames[0].document, n = f.createElement("div")
            } catch (d) {
                n = a.createElement("div"), f = a.body
            }
            var p = function (t) {
                return function () {
                    var r = Array.prototype.slice.call(arguments, 0);
                    r.unshift(n), f.appendChild(n), n.addBehavior("#default#userData"), n.load(c);
                    var i = t.apply(e, r);
                    return f.removeChild(n), i
                }
            }, v = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"), h = function (t) {
                return t.replace(/^d/, "___$&").replace(v, "___")
            };
            e.set = p(function (t, n, r) {
                return n = h(n), r === o ? e.remove(n) : (t.setAttribute(n, e.serialize(r)), t.save(c), r)
            }), e.get = p(function (t, n, r) {
                n = h(n);
                var i = e.deserialize(t.getAttribute(n));
                return i === o ? r : i
            }), e.remove = p(function (t, n) {
                n = h(n), t.removeAttribute(n), t.save(c)
            }), e.clear = p(function (t) {
                var n = t.XMLDocument.documentElement.attributes;
                t.load(c);
                for (var e = n.length - 1; e >= 0; e--)t.removeAttribute(n[e].name);
                t.save(c)
            }), e.getAll = function (t) {
                var n = {};
                return e.forEach(function (t, e) {
                    n[t] = e
                }), n
            }, e.forEach = p(function (t, n) {
                for (var r, i = t.XMLDocument.documentElement.attributes, o = 0; r = i[o]; ++o)n(r.name, e.deserialize(t.getAttribute(r.name)))
            })
        }
        try {
            var m = "__storejs__";
            e.set(m, m), e.get(m) !== m && (e.disabled = !0), e.remove(m)
        } catch (d) {
            e.disabled = !0
        }
        return e.enabled = !e.disabled, e
    }(), u = "__lxsdk_", a = function (t) {
        return u + t
    }, c = {
        get: function (t) {
            return o.get(a(t))
        }, set: function (t, n) {
            return o.set(a(t), n)
        }, keys: function s() {
            var s = [];
            return o.forEach(function (t) {
                0 === t.indexOf(u) && s.push(t.replace(u, ""))
            }), s
        }, del: function (t) {
            return o.remove(a(t))
        }, clear: function () {
            for (var t = this.keys(), n = 0; n < t.length; n++)this.del(t[n])
        }
    };
    t.exports = c
}, function (module, exports) {
    "use strict";
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, JSON = window.JSON;
    JSON || (JSON = {
        parse: function parse(sJSON) {
            return eval("(" + sJSON + ")")
        }, stringify: function () {
            var t = Object.prototype.toString, n = Array.isArray || function (n) {
                        return "[object Array]" === t.call(n)
                    }, e = {'"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t"},
                r = function (t) {
                    return e[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1)
                }, i = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function o(e) {
                if (null == e)return "null";
                if ("number" == typeof e)return isFinite(e) ? e.toString() : "null";
                if ("boolean" == typeof e)return e.toString();
                if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) {
                    if ("function" == typeof e.toJSON)return o(e.toJSON());
                    if (n(e)) {
                        for (var u = "[", a = 0; a < e.length; a++)u += (a ? ", " : "") + o(e[a]);
                        return u + "]"
                    }
                    if ("[object Object]" === t.call(e)) {
                        var c = [];
                        for (var s in e)e.hasOwnProperty(s) && c.push(o(s) + ": " + o(e[s]));
                        return "{" + c.join(", ") + "}"
                    }
                }
                return '"' + e.toString().replace(i, r) + '"'
            }
        }()
    }), module.exports = JSON
}, function (t, n, e) {
    "use strict";
    function r() {
        var t = i.ua, n = t.match(o);
        return n ? {isIE: !0, version: Math.floor(parseInt(n[1]))} : {isIE: !0}
    }

    var i = e(3), o = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/i;
    t.exports = r()
}, function (t, n, e) {
    "use strict";
    function r(t) {
        return t.replace("data_sdk_", "")
    }

    var i = e(2), o = {}, u = [];
    t.exports = {
        all: function (t) {
            var n = [];
            return o && i.each(o, function (e) {
                n.push(e);
                try {
                    t(e)
                } catch (r) {
                }
            }), n
        }, get: function (t, n) {
            t = r(t);
            var u = e(18), a = o[t];
            return a || (a = o[t] = new u(t)), n && i.each(n, function (t, n) {
                a.set(n, t)
            }), a
        }, registerQuit: function (t) {
            u.push(t)
        }, quit: function () {
            for (var t = 0, n = u.length; t < n; t++) {
                var e = u[t];
                e(this, o)
            }
        }
    }
}, function (t, n, e) {
    "use strict";
    function r() {
        var t = e(4);
        return a || (a = t.defaultEnv()), a
    }

    function i(t) {
        return c.hasOwn(g, t) ? h : m
    }

    function o() {
        if (!s.isMobile)return !1;
        var t = e(4), n = e(19), r = t && t.conf("log") && 404 !== n.status();
        return r
    }

    function u(t, n) {
        this.id = t, this._e = new f(t, n), r()
    }

    var a, c = e(2), s = e(3), f = e(5), l = setTimeout, d = c.is.func, p = c.is.numeric, v = c.is.object, h = !0,
        m = !1, g = {
            union_id: h,
            app: h,
            sdk_ver: h,
            ch: h,
            lch: h,
            ct: h,
            did: h,
            dm: h,
            ua: h,
            msid: h,
            uuid: h,
            lat: h,
            log: h,
            net: h,
            os: h,
            idfa: h,
            pushid: h,
            subcid: h,
            mac: h,
            imsi: h,
            uid: h,
            logintype: h,
            cityid: h,
            apn: h,
            mno: h,
            pushSetting: h,
            wifi: h,
            bht: h,
            ip: h,
            vendorid: h,
            geohash: h,
            dtk: h,
            sns: h,
            android_id: h,
            version_code: h,
            brand: h,
            utm: h
        }, y = "appnm";
    u.prototype = {
        constructor: u, set: function (t, n) {
            if (!v(t) && (i(t) ? a.set(t, n) : this._e.set(t, n), t !== y && !i(t) && o(this))) {
                var r = e(19);
                r.set(this, t, n)
            }
        }, get: function (t, n) {
            if (o(this)) {
                var r = e(19);
                return r.get(this, function (e) {
                    n && n(t ? e[t] : e)
                }), !1
            }
            var i;
            return t ? (i = a.get(t) || this._e.get(t), n && n(i)) : (i = this._e.toJSON(), n && n(i)), i
        }, event: function (t, n) {
            var r = e(20), i = e(23), u = e(4);
            try {
                var s, f = n && n.isDelay, d = o(this), v = [], h = a && a.get(y),
                    m = h ? this._e.get(y) || u.conf(y) : "";
                if (c.run(t, function (t) {
                        var n;
                        m && (n = {settingApp: m}), s = i(t, n), v.push(s)
                    }), d) {
                    var g = e(19);
                    g.event(this, v)
                } else f ? (r.save(this, v), n && p(n.delay) && l(function () {
                    r.report(0)
                }, 1e3 * n.delay)) : r.report(this, v)
            } catch (_) {
            } finally {
                n && n.isDelay && r.delay(!1)
            }
        }, tag: function (t, n) {
            var r = function (t) {
                n && n(t)
            };
            if (d(t) && (n = t, t = null), o(this)) {
                var i = e(19);
                t ? i.setTag(this, t) : i.getTag(this, r)
            } else {
                var u, a = e(24);
                t ? c.each(t, function (n, e) {
                    t.hasOwnProperty(e) && c.each(n, function (n, r) {
                        t.hasOwnProperty(e) && a.set(e, r, n)
                    })
                }) : (u = a.get(), r(u))
            }
        }, toJSON: function () {
            var t = this._e.toJSON();
            return t.category = "data_sdk_" + this.id, t
        }
    }, t.exports = u
}, function (t, n, e) {
    "use strict";
    function r(t) {
        if (!t)return "";
        var n = "_lx_" + d.unique();
        return l[n] = function (n) {
            try {
                n.code || t && t(n.data ? n.data : n)
            } catch (e) {
            }
        }, n
    }

    function i(t, n, e, i) {
        var o = r(i);
        return {cb: o || "", mn: n, cn: t, data: e || {}}
    }

    function o(t) {
        return "statistics://_lx/?data=" + encodeURIComponent(JSON.stringify(t))
    }

    function u(t, n) {
        var r = e(4), i = r.conf("log");
        if (i) {
            if (t.mn === y) {
                var u = [];
                d.run(t.data, function (t) {
                    var n = d.extend(!0, {}, t), e = {web_sdk_ver: "3.1.17"}, i = 8;
                    n.isauto = i;
                    try {
                        var o = r.reqId("mpt" === n.nm), a = r.refReqId();
                        n.req_id = o, n.ref_req_id = a, "mpt" === n.nm && (/android/i.test(s.ua) ? e.url = encodeURIComponent(n.url) : e.url = n.url, e.ua = s.ua, delete n.url), d.setKeyVal(n, "val_val", "custom", e)
                    } catch (c) {
                    }
                    u.push(n)
                }), t.data = u
            }
            var a = o(t);
            i(a, function (e) {
                var r;
                try {
                    r = d.isStr(e) ? JSON.parse(e) : e, t.cb && l[t.cb] && (l[t.cb].call(null, r, t), delete l[t.cb])
                } catch (i) {
                }
                try {
                    n && n(r)
                } catch (i) {
                }
            }, t.cb)
        } else try {
            n && n({code: 404})
        } catch (c) {
        }
    }

    function a() {
        var t = e(17), n = this;
        t.registerQuit(function (t, e) {
            n._status !== m && n.quit(t, e)
        })
    }

    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = e(3), f = [], l = {}, d = e(2), p = 3e3, v = -1, h = 0, m = 1, g = 404, y = "setEvs", _ = "setEnv",
        b = "getEnv", w = "setTag", x = "getTag";
    a.prototype = {
        constructor: a, _status: v, _hs: function (t) {
            var n, r = (+new Date, this);
            if (!(r._status >= h)) {
                if (r._status < h) {
                    r._status = h;
                    var o = i(t.id, b);
                    u(o, function (t) {
                        d.clearT(n), t && !t.code ? r.init() : r.fail()
                    })
                }
                n = d.T(function () {
                    r.fail();
                    var t = e(20);
                    t.report(0)
                }, p)
            }
        }, status: function () {
            return this._status
        }, init: function () {
            var t = this;
            d.T(function n() {
                var e = f.shift();
                return e || f.length ? void u(e, function (e) {
                    try {
                        e && g === e.code && t.fail()
                    } catch (r) {
                    }
                    d.T(n)
                }) : (t._status = 1, void(f.push = u))
            })
        }, event: function (t, n) {
            t && this._hs(t), f.push(i(t.id, y, n))
        }, setTag: function (t, n, e) {
            t && this._hs(t), f.push(i(t.id, w, n, e))
        }, getTag: function (t, n) {
            t && this._hs(t), f.push(i(t ? t.id : "", x, null, n))
        }, set: function (t, n, e) {
            var r;
            "object" === ("undefined" == typeof n ? "undefined" : c(n)) ? r = n : (r = {}, r[n] = e), t && this._hs(t), f.push(i(t.id, _, r, function (t) {
            }))
        }, get: function (t, n) {
            t && this._hs(t), f.push(i(t.id, b, null, n))
        }, quit: function (t) {
            this.fail(t)
        }, fail: function (t) {
            this.init = function () {
            }, this._status = g;
            var n;
            t = t || e(17);
            for (var r = 0, i = f.length; r < i; r++) {
                var o = f[r];
                n = t.get(o.cn), y === o.mn ? n.event(o.data, {isDelay: !0}) : w === o.mn ? n.tag(o.data) : _ === o.mn && d.each(o.data, function (t, e) {
                        n.set(e, t)
                    })
            }
            f = []
        }
    }, t.exports = new a
}, function (t, n, e) {
    "use strict";
    function r() {
        if (!k)return null;
        var t, n, r, i, o, u = e(17), a = e(4), c = e(3), s = [], f = a.defaultEnv().toJSON(),
            l = w.get(_.reportData) || {}, d = "appnm", p = a.conf(d) || "";
        for (n in l)m.hasOwn(l, n) && !m.hasOwn(D, n) && (s = s.concat(l[n]), l[n] = [], delete l[n]);
        for (r in k)o = u.get(r), i = m.extend(!0, o.toJSON(), f), i[d] = p || i[d] || f[d] || c.domain, q.test(i[d]) && (i[d] = c.domain), i.evs = k[r], i.ua = o.get("ua"), s.push(i);
        return k = {}, E = 0, s && s.length && (n = g.prefix() + A++, l[n] = s, t = {
            token: n,
            ret: s
        }), s.length && w.set(_.reportData, l), t
    }

    function i() {
        return b.conf()
    }

    function o(t, n, e, r, i) {
        switch (t) {
            case"success":
                return u(n, e, r, i);
            case"fail":
            default:
                return a(n, e, r, i)
        }
    }

    function u(t, n, e) {
        var r = w.get(_.reportData), i = e.token;
        r[i] = [], delete r[i], w.set(_.reportData, r)
    }

    function a(t, n, e, r) {
        I(function () {
            t(n, e, r)
        }, 3e3)
    }

    function c(t) {
        var n = e(4), r = y(t), i = t.val_cid, o = "mpt" === t.nm && S && S !== i;
        i && (S = i);
        var u = n.reqId(o), a = n.refReqId();
        return r.req_id = u, r.ref_req_id = a, r
    }

    function s() {
        var t, n, e = x.get();
        return e && e.length > 0 && (t = {}, m.each(e, function (e) {
            (n = t[e.c]) || (t[e.c] = n = {}), n[e.k] = e.v
        })), t
    }

    function f(t, n) {
        var r, i, o = e(4), u = o.seq(), a = s();
        (r = k[t.id]) || (r = k[t.id] = []), m.is.array(n) || (n = [n]), n && n.length && (m.each(n, function (t) {
            i = c(t), i && (E++, a && (i.tag = a), i.seq = u++, r.push(i))
        }), o.seq(u))
    }

    function l() {
        var t = r();
        t && t.ret.length && (D[t.token] = !0, v.post(h("report").uri, t, o))
    }

    function d(t, n) {
        t && !O(t) && n && f(t, n), E > T || 0 === t ? l() : j.isDelay || d(0)
    }

    function p(t) {
        j.isDelay = t
    }

    var v, h = e(21), m = e(2), g = e(22), y = e(23), _ = e(13), b = e(4), w = e(12), x = e(24);
    v = e(26);
    var S, O = m.is.numeric, D = {}, q = /^[A-Za-z][A-Za-z0-9\-_\.]$]/g, A = 0, I = setTimeout, T = 10, k = {}, E = 0,
        j = {report: d, getAppConf: i, save: f, delay: p, isDelay: !1};
    t.exports = j
}, function (t, n, e) {
    "use strict";
    var r = e(2), i = e(3), o = i.loc.protocol;
    i.isHoS || (o = "https:");
    var u = o + "//report.meituan.com",
        a = {report: {host: u, dir: "/", type: "POST"}, config: {host: u, dir: "/config", type: "GET"}};
    t.exports = function (t, n) {
        var e = {protocol: a[t].protocol, uri: a[t].host + a[t].dir, type: a[t].type};
        return n && (e.uri = e.uri + "?" + r.parseParams(n)), e
    }
}, function (t, n) {
    "use strict";
    function e() {
        this.id = r + 100, this.intraId = r
    }

    var r = 1e3 * (+new Date + Math.ceil(1e4 * Math.random()));
    e.prototype = {
        prefix: function () {
            return r
        }, update: function (t) {
            return t ? ++this.intraId : ++this.id
        }, setUp: function (t) {
            var n = t ? ++this.intraId : ++this.id;
            return n.toString(16)
        }
    }, t.exports = new e
}, function (t, n, e) {
    "use strict";
    function r(t, n) {
        var e = n.conf("cid");
        return t[m] || (t[m] = e || f.title || l.pathname), t
    }

    function i(t, n, e) {
        if (t && n) {
            var r = e.defaultEnv().get(v);
            if (n && r !== n) {
                var i = {};
                i[g] = n, u.setKeyVal(t, h, "custom", i)
            }
        }
    }

    function o(t, n) {
        var o, a = e(24);
        if (n = n || {}, t.nm = o = (t.nm || "mge").toLowerCase(), -1 === d.indexOf(o + " "))return !1;
        var f = t.event_type;
        if (f && -1 === p.indexOf(f))return !1;
        var l, v = e(4), m = t.nm, g = u.extend({}, t);
        l = t.val || {};
        var y = l.val || t[h];
        delete g.val, u.each(l, function (t, n) {
            g["val_" + n] = t
        }), r(g, v), g.tm || (g.tm = +new Date), g.nt = 0;
        var _ = a.get();
        return _ && (g.tag = _), "pay" === m && a.clear(), y && !c(y) && (l = {}, l.custom = {}, l.custom.analyse_val = y, g[h] = u.extend(!0, g[h] || {}, l)), i(g, n.settingApp, v), u.each(g, function (t, n) {
            "" !== t && s !== t || delete g[n]
        }), g
    }

    var u = e(2), a = e(3), c = u.is.object, s = void 0, f = a.doc, l = a.loc, d = "report mge mpt order pay ",
        p = "view click slide select return ", v = "appnm", h = "val_val", m = "val_cid", g = "web_appnm";
    t.exports = o
}, function (t, n, e) {
    "use strict";
    var r = e(12), i = e(25), o = (e(3), e(2)), u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "tag", c = {
        set: function (t, n, e) {
            var o, c, s = [], f = r.get(a) || [];
            if (-1 == u.indexOf(n))return !1;
            for (var l = 0, d = f.length; l < d; l++)o = f[l], t === o.c ? (n === o.k && (c = !0), c || s.push(o)) : s.push(o);
            return o = new i(t, n, e, +new Date), s.push(o.toJSON()), r.set(a, s), !0
        }, get: function (t, n) {
            var e, i = r.get(a);
            if (i && i.length)return e = {}, o.each(i, function (t) {
                var n = {};
                n[t.k] = t.v, e[t.c] = o.extend(!0, e[t.c] || {}, n)
            }), t && n ? e[t] && e[t][n] : t ? e[t] : e
        }, clear: function () {
            return r.set(a, [])
        }
    };
    t.exports = c
}, function (t, n, e) {
    "use strict";
    function r(t, n, e, r, o, u) {
        var a = {};
        a.c = t, a.k = n, a.v = e, a.t = r || +new Date, a.u = o, a.r = u, this.toJSON = function () {
            return i.extend(!0, {}, a)
        }
    }

    var i = e(2);
    t.exports = r
}, function (t, n, e) {
    "use strict";
    function r() {
        var t = s.nav, n = "connection", e = t[n] || t.webkitConnection || t.mozConnection;
        return e && e.type ? t[n].type : "unknown"
    }

    function i(t, n, e) {
        if (s.win.XDomainRequest) {
            var r = new XDomainRequest;
            r.open("POST", t, !0), r.onload = function () {
                l = 0, e("success", u, t, n, e)
            }, r.onerror = function () {
                r.abort(), l++
            }, r.ontimeout = function () {
                l++, e("fail", u, t, n, e)
            }, r.timeout = 5e3, r.send(c.stringify(n.ret))
        }
    }

    function o(t, n, e) {
        var r = new XMLHttpRequest;
        "withCredentials" in r && (r.open("POST", t, !0), r.timeout = 15e3, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function () {
            4 === r.readyState && (r.status >= 200 ? (l = 0, e("success", u, t, n, e)) : (l++, e("fail", u, t, n, e)), r.onreadystatechange = null)
        }, r.onerror = function () {
            r.abort(), l++
        }, r.send(c.stringify(n.ret)));
    }

    function u(t, n, e) {
        if (!n || n.ret && !n.ret.length)return !1;
        if (l >= d)return !1;
        if (t = t + "?_lxsdk_rnd=" + (p++).toString(16), f && a.version < 10) i(t, n, e); else {
            var r = s.nav.sendBeacon;
            if (s.isHoS && r && r.call(s.nav, t, c.stringify(n.ret))) e("success", u, t, n, e); else try {
                o(t, n, e)
            } catch (v) {
                return !1
            }
        }
        return !0
    }

    var a = e(16), c = e(15), s = e(3), f = a.isIE, l = 0, d = 3, p = +new Date + Math.floor(1e5 * Math.random());
    t.exports = {post: u, status: r}
}, function (t, n, e) {
    "use strict";
    function r(t, n) {
        return function (e, r, i) {
            t.ready(function () {
                try {
                    t.use(n, {
                        data: e, success: function (t) {
                            r("success" === t.status ? t.data : {code: t.errorCode})
                        }, fail: function (t) {
                            r({code: 500})
                        }
                    })
                } catch (i) {
                    r({code: -1})
                }
            })
        }
    }

    function i(t) {
        var n = e(10);
        return new n(function (n) {
            var i = e(3), o = e(2), u = i.win, a = u.KNB;
            if (a && a.env) {
                var c, s = a.env, f = "lxlog", l = 3e3;
                try {
                    s.isTitans || s.isDPApp ? (c = o.T(function () {
                        n()
                    }, l), a.isApiSupported({
                        apiName: f, success: function (e) {
                            o.clearT(c), e && t.config("log", r(a, f)), n()
                        }, fail: function () {
                            o.clearT(c), n()
                        }
                    })) : s.isMTNB ? (f = "mtalog.stat.log", t.config("log", r(a, f)), n()) : n()
                } catch (d) {
                    n()
                }
            } else n()
        })
    }

    t.exports = i
}]);