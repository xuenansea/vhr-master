webpackJsonp([7], {
    "/pYt": function (e, t) {
    }, "7rz6": function (e, t) {
    }, B2kJ: function (e, t) {
    }, BiC4: function (e, t, n) {
        "use strict";
        (function (e, t) {
            var r, i = n("OvRC"), o = n.n(i), s = n("mvHQ"), a = n.n(s), c = n("C4MV"), u = n.n(c), l = n("pFYg"),
                d = n.n(l);
            !function (r) {
                if ("object" === ("undefined" == typeof exports ? "undefined" : d()(exports)) && void 0 !== t) t.exports = r(); else if ("function" == typeof define && n("nErl")) define([], r); else {
                    ("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : this).SockJS = r()
                }
            }(function () {
                return function e(t, n, i) {
                    function o(a, c) {
                        if (!n[a]) {
                            if (!t[a]) {
                                if (!c && ("function" == typeof r && r)) return r(a, !0);
                                if (s) return s(a, !0);
                                var u = new Error("Cannot find module '" + a + "'");
                                throw u.code = "MODULE_NOT_FOUND", u
                            }
                            var l = n[a] = {exports: {}};
                            t[a][0].call(l.exports, function (e) {
                                var n = t[a][1][e];
                                return o(n || e)
                            }, l, l.exports, e, t, n, i)
                        }
                        return n[a].exports
                    }

                    for (var s = "function" == typeof r && r, a = 0; a < i.length; a++) o(i[a]);
                    return o
                }({
                    1: [function (t, n, r) {
                        (function (e) {
                            var r = t("./transport-list");
                            n.exports = t("./main")(r), "_sockjs_onload" in e && setTimeout(e._sockjs_onload, 1)
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"./main": 14, "./transport-list": 16}],
                    2: [function (e, t, n) {
                        var r = e("inherits"), i = e("./event");

                        function o() {
                            i.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
                        }

                        r(o, i), t.exports = o
                    }, {"./event": 4, inherits: 56}],
                    3: [function (e, t, n) {
                        var r = e("inherits"), i = e("./eventtarget");

                        function o() {
                            i.call(this)
                        }

                        r(o, i), o.prototype.removeAllListeners = function (e) {
                            e ? delete this._listeners[e] : this._listeners = {}
                        }, o.prototype.once = function (e, t) {
                            var n = this, r = !1;

                            function i() {
                                n.removeListener(e, i), r || (r = !0, t.apply(this, arguments))
                            }

                            this.on(e, i)
                        }, o.prototype.emit = function () {
                            var e = arguments[0], t = this._listeners[e];
                            if (t) {
                                for (var n = arguments.length, r = new Array(n - 1), i = 1; i < n; i++) r[i - 1] = arguments[i];
                                for (var o = 0; o < t.length; o++) t[o].apply(this, r)
                            }
                        }, o.prototype.on = o.prototype.addListener = i.prototype.addEventListener, o.prototype.removeListener = i.prototype.removeEventListener, t.exports.EventEmitter = o
                    }, {"./eventtarget": 5, inherits: 56}],
                    4: [function (e, t, n) {
                        function r(e) {
                            this.type = e
                        }

                        r.prototype.initEvent = function (e, t, n) {
                            return this.type = e, this.bubbles = t, this.cancelable = n, this.timeStamp = +new Date, this
                        }, r.prototype.stopPropagation = function () {
                        }, r.prototype.preventDefault = function () {
                        }, r.CAPTURING_PHASE = 1, r.AT_TARGET = 2, r.BUBBLING_PHASE = 3, t.exports = r
                    }, {}],
                    5: [function (e, t, n) {
                        function r() {
                            this._listeners = {}
                        }

                        r.prototype.addEventListener = function (e, t) {
                            e in this._listeners || (this._listeners[e] = []);
                            var n = this._listeners[e];
                            -1 === n.indexOf(t) && (n = n.concat([t])), this._listeners[e] = n
                        }, r.prototype.removeEventListener = function (e, t) {
                            var n = this._listeners[e];
                            if (n) {
                                var r = n.indexOf(t);
                                -1 === r || (n.length > 1 ? this._listeners[e] = n.slice(0, r).concat(n.slice(r + 1)) : delete this._listeners[e])
                            }
                        }, r.prototype.dispatchEvent = function () {
                            var e = arguments[0], t = e.type,
                                n = 1 === arguments.length ? [e] : Array.apply(null, arguments);
                            if (this["on" + t] && this["on" + t].apply(this, n), t in this._listeners) for (var r = this._listeners[t], i = 0; i < r.length; i++) r[i].apply(this, n)
                        }, t.exports = r
                    }, {}],
                    6: [function (e, t, n) {
                        var r = e("inherits"), i = e("./event");

                        function o(e) {
                            i.call(this), this.initEvent("message", !1, !1), this.data = e
                        }

                        r(o, i), t.exports = o
                    }, {"./event": 4, inherits: 56}],
                    7: [function (e, t, n) {
                        var r = e("json3"), i = e("./utils/iframe");

                        function o(e) {
                            this._transport = e, e.on("message", this._transportMessage.bind(this)), e.on("close", this._transportClose.bind(this))
                        }

                        o.prototype._transportClose = function (e, t) {
                            i.postMessage("c", r.stringify([e, t]))
                        }, o.prototype._transportMessage = function (e) {
                            i.postMessage("t", e)
                        }, o.prototype._send = function (e) {
                            this._transport.send(e)
                        }, o.prototype._close = function () {
                            this._transport.close(), this._transport.removeAllListeners()
                        }, t.exports = o
                    }, {"./utils/iframe": 47, json3: 57}],
                    8: [function (e, t, n) {
                        (function (n) {
                            var r = e("./utils/url"), i = e("./utils/event"), o = e("json3"), s = e("./facade"),
                                a = e("./info-iframe-receiver"), c = e("./utils/iframe"), u = e("./location"),
                                l = function () {
                                };
                            "production" !== n.env.NODE_ENV && (l = e("debug")("sockjs-client:iframe-bootstrap")), t.exports = function (e, t) {
                                var n = {};
                                t.forEach(function (e) {
                                    e.facadeTransport && (n[e.facadeTransport.transportName] = e.facadeTransport)
                                }), n[a.transportName] = a;
                                var d;
                                e.bootstrap_iframe = function () {
                                    var t;
                                    c.currentWindowId = u.hash.slice(1);
                                    i.attachEvent("message", function (i) {
                                        if (i.source === parent && (void 0 === d && (d = i.origin), i.origin === d)) {
                                            var a;
                                            try {
                                                a = o.parse(i.data)
                                            } catch (e) {
                                                return void l("bad json", i.data)
                                            }
                                            if (a.windowId === c.currentWindowId) switch (a.type) {
                                                case"s":
                                                    var f;
                                                    try {
                                                        f = o.parse(a.data)
                                                    } catch (e) {
                                                        l("bad json", a.data);
                                                        break
                                                    }
                                                    var h = f[0], p = f[1], m = f[2], v = f[3];
                                                    if (l(h, p, m, v), h !== e.version) throw new Error('Incompatible SockJS! Main site uses: "' + h + '", the iframe: "' + e.version + '".');
                                                    if (!r.isOriginEqual(m, u.href) || !r.isOriginEqual(v, u.href)) throw new Error("Can't connect to different domain from within an iframe. (" + u.href + ", " + m + ", " + v + ")");
                                                    t = new s(new n[p](m, v));
                                                    break;
                                                case"m":
                                                    t._send(a.data);
                                                    break;
                                                case"c":
                                                    t && t._close(), t = null
                                            }
                                        }
                                    }), c.postMessage("s")
                                }
                            }
                        }).call(this, {env: {}})
                    }, {
                        "./facade": 7,
                        "./info-iframe-receiver": 10,
                        "./location": 13,
                        "./utils/event": 46,
                        "./utils/iframe": 47,
                        "./utils/url": 52,
                        debug: 54,
                        json3: 57
                    }],
                    9: [function (e, t, n) {
                        (function (n) {
                            var r = e("events").EventEmitter, i = e("inherits"), o = e("json3"),
                                s = e("./utils/object"), a = function () {
                                };
                            "production" !== n.env.NODE_ENV && (a = e("debug")("sockjs-client:info-ajax"));

                            function c(e, t) {
                                r.call(this);
                                var n = this, i = +new Date;
                                this.xo = new t("GET", e), this.xo.once("finish", function (e, t) {
                                    var r, c;
                                    if (200 === e) {
                                        if (c = +new Date - i, t) try {
                                            r = o.parse(t)
                                        } catch (e) {
                                            a("bad json", t)
                                        }
                                        s.isObject(r) || (r = {})
                                    }
                                    n.emit("finish", r, c), n.removeAllListeners()
                                })
                            }

                            i(c, r), c.prototype.close = function () {
                                this.removeAllListeners(), this.xo.close()
                            }, t.exports = c
                        }).call(this, {env: {}})
                    }, {"./utils/object": 49, debug: 54, events: 3, inherits: 56, json3: 57}],
                    10: [function (e, t, n) {
                        var r = e("inherits"), i = e("events").EventEmitter, o = e("json3"),
                            s = e("./transport/sender/xhr-local"), a = e("./info-ajax");

                        function c(e) {
                            var t = this;
                            i.call(this), this.ir = new a(e, s), this.ir.once("finish", function (e, n) {
                                t.ir = null, t.emit("message", o.stringify([e, n]))
                            })
                        }

                        r(c, i), c.transportName = "iframe-info-receiver", c.prototype.close = function () {
                            this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
                        }, t.exports = c
                    }, {"./info-ajax": 9, "./transport/sender/xhr-local": 37, events: 3, inherits: 56, json3: 57}],
                    11: [function (t, n, r) {
                        (function (e, r) {
                            var i = t("events").EventEmitter, o = t("inherits"), s = t("json3"), a = t("./utils/event"),
                                c = t("./transport/iframe"), u = t("./info-iframe-receiver"), l = function () {
                                };
                            "production" !== e.env.NODE_ENV && (l = t("debug")("sockjs-client:info-iframe"));

                            function d(e, t) {
                                var n = this;
                                i.call(this);
                                var o = function () {
                                    var r = n.ifr = new c(u.transportName, t, e);
                                    r.once("message", function (e) {
                                        if (e) {
                                            var t;
                                            try {
                                                t = s.parse(e)
                                            } catch (t) {
                                                return l("bad json", e), n.emit("finish"), void n.close()
                                            }
                                            var r = t[0], i = t[1];
                                            n.emit("finish", r, i)
                                        }
                                        n.close()
                                    }), r.once("close", function () {
                                        n.emit("finish"), n.close()
                                    })
                                };
                                r.document.body ? o() : a.attachEvent("load", o)
                            }

                            o(d, i), d.enabled = function () {
                                return c.enabled()
                            }, d.prototype.close = function () {
                                this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
                            }, n.exports = d
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./info-iframe-receiver": 10,
                        "./transport/iframe": 22,
                        "./utils/event": 46,
                        debug: 54,
                        events: 3,
                        inherits: 56,
                        json3: 57
                    }],
                    12: [function (e, t, n) {
                        (function (n) {
                            var r = e("events").EventEmitter, i = e("inherits"), o = e("./utils/url"),
                                s = e("./transport/sender/xdr"), a = e("./transport/sender/xhr-cors"),
                                c = e("./transport/sender/xhr-local"), u = e("./transport/sender/xhr-fake"),
                                l = e("./info-iframe"), d = e("./info-ajax"), f = function () {
                                };
                            "production" !== n.env.NODE_ENV && (f = e("debug")("sockjs-client:info-receiver"));

                            function h(e, t) {
                                f(e);
                                var n = this;
                                r.call(this), setTimeout(function () {
                                    n.doXhr(e, t)
                                }, 0)
                            }

                            i(h, r), h._getReceiver = function (e, t, n) {
                                return n.sameOrigin ? new d(t, c) : a.enabled ? new d(t, a) : s.enabled && n.sameScheme ? new d(t, s) : l.enabled() ? new l(e, t) : new d(t, u)
                            }, h.prototype.doXhr = function (e, t) {
                                var n = this, r = o.addPath(e, "/info");
                                f("doXhr", r), this.xo = h._getReceiver(e, r, t), this.timeoutRef = setTimeout(function () {
                                    f("timeout"), n._cleanup(!1), n.emit("finish")
                                }, h.timeout), this.xo.once("finish", function (e, t) {
                                    f("finish", e, t), n._cleanup(!0), n.emit("finish", e, t)
                                })
                            }, h.prototype._cleanup = function (e) {
                                f("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null
                            }, h.prototype.close = function () {
                                f("close"), this.removeAllListeners(), this._cleanup(!1)
                            }, h.timeout = 8e3, t.exports = h
                        }).call(this, {env: {}})
                    }, {
                        "./info-ajax": 9,
                        "./info-iframe": 11,
                        "./transport/sender/xdr": 34,
                        "./transport/sender/xhr-cors": 35,
                        "./transport/sender/xhr-fake": 36,
                        "./transport/sender/xhr-local": 37,
                        "./utils/url": 52,
                        debug: 54,
                        events: 3,
                        inherits: 56
                    }],
                    13: [function (t, n, r) {
                        (function (e) {
                            n.exports = e.location || {
                                origin: "http://localhost:80",
                                protocol: "http",
                                host: "localhost",
                                port: 80,
                                href: "http://localhost/",
                                hash: ""
                            }
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    14: [function (t, n, r) {
                        (function (e, r) {
                            t("./shims");
                            var i = t("url-parse"), o = t("inherits"), s = t("json3"), a = t("./utils/random"),
                                c = t("./utils/escape"), u = t("./utils/url"), l = t("./utils/event"),
                                d = t("./utils/transport"), f = t("./utils/object"), h = t("./utils/browser"),
                                p = t("./utils/log"), m = t("./event/event"), v = t("./event/eventtarget"),
                                g = t("./location"), b = t("./event/close"), y = t("./event/trans-message"),
                                w = t("./info-receiver"), x = function () {
                                };
                            "production" !== e.env.NODE_ENV && (x = t("debug")("sockjs-client:main"));
                            var _;

                            function E(e, t, n) {
                                if (!(this instanceof E)) return new E(e, t, n);
                                if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
                                v.call(this), this.readyState = E.CONNECTING, this.extensions = "", this.protocol = "", (n = n || {}).protocols_whitelist && p.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = n.transports, this._transportOptions = n.transportOptions || {};
                                var r = n.sessionId || 8;
                                if ("function" == typeof r) this._generateSessionId = r; else {
                                    if ("number" != typeof r) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
                                    this._generateSessionId = function () {
                                        return a.string(r)
                                    }
                                }
                                this._server = n.server || a.numberString(1e3);
                                var o = new i(e);
                                if (!o.host || !o.protocol) throw new SyntaxError("The URL '" + e + "' is invalid");
                                if (o.hash) throw new SyntaxError("The URL must not contain a fragment");
                                if ("http:" !== o.protocol && "https:" !== o.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + o.protocol + "' is not allowed.");
                                var s = "https:" === o.protocol;
                                if ("https" === g.protocol && !s) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
                                t ? Array.isArray(t) || (t = [t]) : t = [];
                                var c = t.sort();
                                c.forEach(function (e, t) {
                                    if (!e) throw new SyntaxError("The protocols entry '" + e + "' is invalid.");
                                    if (t < c.length - 1 && e === c[t + 1]) throw new SyntaxError("The protocols entry '" + e + "' is duplicated.")
                                });
                                var l = u.getOrigin(g.href);
                                this._origin = l ? l.toLowerCase() : null, o.set("pathname", o.pathname.replace(/\/+$/, "")), this.url = o.href, x("using url", this.url), this._urlInfo = {
                                    nullOrigin: !h.hasDomain(),
                                    sameOrigin: u.isOriginEqual(this.url, g.href),
                                    sameScheme: u.isSchemeEqual(this.url, g.href)
                                }, this._ir = new w(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
                            }

                            o(E, v);

                            function S(e) {
                                return 1e3 === e || e >= 3e3 && e <= 4999
                            }

                            E.prototype.close = function (e, t) {
                                if (e && !S(e)) throw new Error("InvalidAccessError: Invalid code");
                                if (t && t.length > 123) throw new SyntaxError("reason argument has an invalid length");
                                if (this.readyState !== E.CLOSING && this.readyState !== E.CLOSED) {
                                    this._close(e || 1e3, t || "Normal closure", !0)
                                }
                            }, E.prototype.send = function (e) {
                                if ("string" != typeof e && (e = "" + e), this.readyState === E.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
                                this.readyState === E.OPEN && this._transport.send(c.quote(e))
                            }, E.version = t("./version"), E.CONNECTING = 0, E.OPEN = 1, E.CLOSING = 2, E.CLOSED = 3, E.prototype._receiveInfo = function (e, t) {
                                if (x("_receiveInfo", t), this._ir = null, e) {
                                    this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = f.extend(e, this._urlInfo), x("info", e);
                                    var n = _.filterToEnabled(this._transportsWhitelist, e);
                                    this._transports = n.main, x(this._transports.length + " enabled transports"), this._connect()
                                } else this._close(1002, "Cannot connect to server")
                            }, E.prototype._connect = function () {
                                for (var e = this._transports.shift(); e; e = this._transports.shift()) {
                                    if (x("attempt", e.transportName), e.needBody && (!r.document.body || void 0 !== r.document.readyState && "complete" !== r.document.readyState && "interactive" !== r.document.readyState)) return x("waiting for body"), this._transports.unshift(e), void l.attachEvent("load", this._connect.bind(this));
                                    var t = this._rto * e.roundTrips || 5e3;
                                    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t), x("using timeout", t);
                                    var n = u.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                                        i = this._transportOptions[e.transportName];
                                    x("transport url", n);
                                    var o = new e(n, this._transUrl, i);
                                    return o.on("message", this._transportMessage.bind(this)), o.once("close", this._transportClose.bind(this)), o.transportName = e.transportName, void (this._transport = o)
                                }
                                this._close(2e3, "All transports failed", !1)
                            }, E.prototype._transportTimeout = function () {
                                x("_transportTimeout"), this.readyState === E.CONNECTING && this._transportClose(2007, "Transport timed out")
                            }, E.prototype._transportMessage = function (e) {
                                x("_transportMessage", e);
                                var t, n = this, r = e.slice(0, 1), i = e.slice(1);
                                switch (r) {
                                    case"o":
                                        return void this._open();
                                    case"h":
                                        return this.dispatchEvent(new m("heartbeat")), void x("heartbeat", this.transport)
                                }
                                if (i) try {
                                    t = s.parse(i)
                                } catch (e) {
                                    x("bad json", i)
                                }
                                if (void 0 !== t) switch (r) {
                                    case"a":
                                        Array.isArray(t) && t.forEach(function (e) {
                                            x("message", n.transport, e), n.dispatchEvent(new y(e))
                                        });
                                        break;
                                    case"m":
                                        x("message", this.transport, t), this.dispatchEvent(new y(t));
                                        break;
                                    case"c":
                                        Array.isArray(t) && 2 === t.length && this._close(t[0], t[1], !0)
                                } else x("empty payload", i)
                            }, E.prototype._transportClose = function (e, t) {
                                x("_transportClose", this.transport, e, t), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), S(e) || 2e3 === e || this.readyState !== E.CONNECTING ? this._close(e, t) : this._connect()
                            }, E.prototype._open = function () {
                                x("_open", this._transport.transportName, this.readyState), this.readyState === E.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = E.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new m("open")), x("connected", this.transport)) : this._close(1006, "Server lost session")
                            }, E.prototype._close = function (e, t, n) {
                                x("_close", this.transport, e, t, n, this.readyState);
                                var r = !1;
                                if (this._ir && (r = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === E.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
                                this.readyState = E.CLOSING, setTimeout(function () {
                                    this.readyState = E.CLOSED, r && this.dispatchEvent(new m("error"));
                                    var i = new b("close");
                                    i.wasClean = n || !1, i.code = e || 1e3, i.reason = t, this.dispatchEvent(i), this.onmessage = this.onclose = this.onerror = null, x("disconnected")
                                }.bind(this), 0)
                            }, E.prototype.countRTO = function (e) {
                                return e > 100 ? 4 * e : 300 + e
                            }, n.exports = function (e) {
                                return _ = d(e), t("./iframe-bootstrap")(E, e), E
                            }
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./event/close": 2,
                        "./event/event": 4,
                        "./event/eventtarget": 5,
                        "./event/trans-message": 6,
                        "./iframe-bootstrap": 8,
                        "./info-receiver": 12,
                        "./location": 13,
                        "./shims": 15,
                        "./utils/browser": 44,
                        "./utils/escape": 45,
                        "./utils/event": 46,
                        "./utils/log": 48,
                        "./utils/object": 49,
                        "./utils/random": 50,
                        "./utils/transport": 51,
                        "./utils/url": 52,
                        "./version": 53,
                        debug: 54,
                        inherits: 56,
                        json3: 57,
                        "url-parse": 61
                    }],
                    15: [function (e, t, n) {
                        var r, i = Array.prototype, o = Object.prototype, s = Function.prototype, a = String.prototype,
                            c = i.slice, l = o.toString, f = function (e) {
                                return "[object Function]" === o.toString.call(e)
                            }, h = function (e) {
                                return "[object String]" === l.call(e)
                            }, p = u.a && function () {
                                try {
                                    return Object.defineProperty({}, "x", {}), !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                        r = p ? function (e, t, n, r) {
                            !r && t in e || u()(e, t, {configurable: !0, enumerable: !1, writable: !0, value: n})
                        } : function (e, t, n, r) {
                            !r && t in e || (e[t] = n)
                        };
                        var m = function (e, t, n) {
                            for (var i in t) o.hasOwnProperty.call(t, i) && r(e, i, t[i], n)
                        }, v = function (e) {
                            if (null == e) throw new TypeError("can't convert " + e + " to object");
                            return Object(e)
                        };

                        function g() {
                        }

                        m(s, {
                            bind: function (e) {
                                var t = this;
                                if (!f(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                                for (var n = c.call(arguments, 1), r = Math.max(0, t.length - n.length), i = [], o = 0; o < r; o++) i.push("$" + o);
                                var s = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this, arguments); }")(function () {
                                    if (this instanceof s) {
                                        var r = t.apply(this, n.concat(c.call(arguments)));
                                        return Object(r) === r ? r : this
                                    }
                                    return t.apply(e, n.concat(c.call(arguments)))
                                });
                                return t.prototype && (g.prototype = t.prototype, s.prototype = new g, g.prototype = null), s
                            }
                        }), m(Array, {
                            isArray: function (e) {
                                return "[object Array]" === l.call(e)
                            }
                        });
                        var b = Object("a"), y = "a" !== b[0] || !(0 in b);
                        m(i, {
                            forEach: function (e) {
                                var t = v(this), n = y && h(this) ? this.split("") : t, r = arguments[1], i = -1,
                                    o = n.length >>> 0;
                                if (!f(e)) throw new TypeError;
                                for (; ++i < o;) i in n && e.call(r, n[i], i, t)
                            }
                        }, !function (e) {
                            var t = !0, n = !0;
                            return e && (e.call("foo", function (e, n, r) {
                                "object" !== (void 0 === r ? "undefined" : d()(r)) && (t = !1)
                            }), e.call([1], function () {
                                n = "string" == typeof this
                            }, "x")), !!e && t && n
                        }(i.forEach));
                        var w = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
                        m(i, {
                            indexOf: function (e) {
                                var t = y && h(this) ? this.split("") : v(this), n = t.length >>> 0;
                                if (!n) return -1;
                                var r = 0;
                                for (arguments.length > 1 && (r = function (e) {
                                    var t = +e;
                                    return t != t ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                                }(arguments[1])), r = r >= 0 ? r : Math.max(0, n + r); r < n; r++) if (r in t && t[r] === e) return r;
                                return -1
                            }
                        }, w);
                        var x = a.split;
                        2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function () {
                            var e = void 0 === /()??/.exec("")[1];
                            a.split = function (t, n) {
                                var r = this;
                                if (void 0 === t && 0 === n) return [];
                                if ("[object RegExp]" !== l.call(t)) return x.call(this, t, n);
                                var o, s, a, c, u = [],
                                    d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""),
                                    f = 0;
                                t = new RegExp(t.source, d + "g"), r += "", e || (o = new RegExp("^" + t.source + "$(?!\\s)", d)), n = void 0 === n ? -1 >>> 0 : (h = n, h >>> 0);
                                for (var h; (s = t.exec(r)) && !((a = s.index + s[0].length) > f && (u.push(r.slice(f, s.index)), !e && s.length > 1 && s[0].replace(o, function () {
                                    for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (s[e] = void 0)
                                }), s.length > 1 && s.index < r.length && i.push.apply(u, s.slice(1)), c = s[0].length, f = a, u.length >= n));) t.lastIndex === s.index && t.lastIndex++;
                                return f === r.length ? !c && t.test("") || u.push("") : u.push(r.slice(f)), u.length > n ? u.slice(0, n) : u
                            }
                        }() : "0".split(void 0, 0).length && (a.split = function (e, t) {
                            return void 0 === e && 0 === t ? [] : x.call(this, e, t)
                        });
                        var _ = a.substr, E = "".substr && "b" !== "0b".substr(-1);
                        m(a, {
                            substr: function (e, t) {
                                return _.call(this, e < 0 && (e = this.length + e) < 0 ? 0 : e, t)
                            }
                        }, E)
                    }, {}],
                    16: [function (e, t, n) {
                        t.exports = [e("./transport/websocket"), e("./transport/xhr-streaming"), e("./transport/xdr-streaming"), e("./transport/eventsource"), e("./transport/lib/iframe-wrap")(e("./transport/eventsource")), e("./transport/htmlfile"), e("./transport/lib/iframe-wrap")(e("./transport/htmlfile")), e("./transport/xhr-polling"), e("./transport/xdr-polling"), e("./transport/lib/iframe-wrap")(e("./transport/xhr-polling")), e("./transport/jsonp-polling")]
                    }, {
                        "./transport/eventsource": 20,
                        "./transport/htmlfile": 21,
                        "./transport/jsonp-polling": 23,
                        "./transport/lib/iframe-wrap": 26,
                        "./transport/websocket": 38,
                        "./transport/xdr-polling": 39,
                        "./transport/xdr-streaming": 40,
                        "./transport/xhr-polling": 41,
                        "./transport/xhr-streaming": 42
                    }],
                    17: [function (t, n, r) {
                        (function (e, r) {
                            var i = t("events").EventEmitter, o = t("inherits"), s = t("../../utils/event"),
                                a = t("../../utils/url"), c = r.XMLHttpRequest, u = function () {
                                };
                            "production" !== e.env.NODE_ENV && (u = t("debug")("sockjs-client:browser:xhr"));

                            function l(e, t, n, r) {
                                u(e, t);
                                var o = this;
                                i.call(this), setTimeout(function () {
                                    o._start(e, t, n, r)
                                }, 0)
                            }

                            o(l, i), l.prototype._start = function (e, t, n, r) {
                                var i = this;
                                try {
                                    this.xhr = new c
                                } catch (e) {
                                }
                                if (!this.xhr) return u("no xhr"), this.emit("finish", 0, "no xhr support"), void this._cleanup();
                                t = a.addQuery(t, "t=" + +new Date), this.unloadRef = s.unloadAdd(function () {
                                    u("unload cleanup"), i._cleanup(!0)
                                });
                                try {
                                    this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function () {
                                        u("xhr timeout"), i.emit("finish", 0, ""), i._cleanup(!1)
                                    })
                                } catch (e) {
                                    return u("exception", e), this.emit("finish", 0, ""), void this._cleanup(!1)
                                }
                                if (r && r.noCredentials || !l.supportsCORS || (u("withCredentials"), this.xhr.withCredentials = "true"), r && r.headers) for (var o in r.headers) this.xhr.setRequestHeader(o, r.headers[o]);
                                this.xhr.onreadystatechange = function () {
                                    if (i.xhr) {
                                        var e, t, n = i.xhr;
                                        switch (u("readyState", n.readyState), n.readyState) {
                                            case 3:
                                                try {
                                                    t = n.status, e = n.responseText
                                                } catch (e) {
                                                }
                                                u("status", t), 1223 === t && (t = 204), 200 === t && e && e.length > 0 && (u("chunk"), i.emit("chunk", t, e));
                                                break;
                                            case 4:
                                                t = n.status, u("status", t), 1223 === t && (t = 204), 12005 !== t && 12029 !== t || (t = 0), u("finish", t, n.responseText), i.emit("finish", t, n.responseText), i._cleanup(!1)
                                        }
                                    }
                                };
                                try {
                                    i.xhr.send(n)
                                } catch (e) {
                                    i.emit("finish", 0, ""), i._cleanup(!1)
                                }
                            }, l.prototype._cleanup = function (e) {
                                if (u("cleanup"), this.xhr) {
                                    if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function () {
                                    }, this.xhr.ontimeout && (this.xhr.ontimeout = null), e) try {
                                        this.xhr.abort()
                                    } catch (e) {
                                    }
                                    this.unloadRef = this.xhr = null
                                }
                            }, l.prototype.close = function () {
                                u("close"), this._cleanup(!0)
                            }, l.enabled = !!c;
                            var d = ["Active"].concat("Object").join("X");
                            !l.enabled && d in r && (u("overriding xmlhttprequest"), l.enabled = !!new (c = function () {
                                try {
                                    return new r[d]("Microsoft.XMLHTTP")
                                } catch (e) {
                                    return null
                                }
                            }));
                            var f = !1;
                            try {
                                f = "withCredentials" in new c
                            } catch (e) {
                            }
                            l.supportsCORS = f, n.exports = l
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"../../utils/event": 46, "../../utils/url": 52, debug: 54, events: 3, inherits: 56}],
                    18: [function (t, n, r) {
                        (function (e) {
                            n.exports = e.EventSource
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    19: [function (t, n, r) {
                        (function (e) {
                            var t = e.WebSocket || e.MozWebSocket;
                            n.exports = t ? function (e) {
                                return new t(e)
                            } : void 0
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    20: [function (e, t, n) {
                        var r = e("inherits"), i = e("./lib/ajax-based"), o = e("./receiver/eventsource"),
                            s = e("./sender/xhr-cors"), a = e("eventsource");

                        function c(e) {
                            if (!c.enabled()) throw new Error("Transport created when disabled");
                            i.call(this, e, "/eventsource", o, s)
                        }

                        r(c, i), c.enabled = function () {
                            return !!a
                        }, c.transportName = "eventsource", c.roundTrips = 2, t.exports = c
                    }, {
                        "./lib/ajax-based": 24,
                        "./receiver/eventsource": 29,
                        "./sender/xhr-cors": 35,
                        eventsource: 18,
                        inherits: 56
                    }],
                    21: [function (e, t, n) {
                        var r = e("inherits"), i = e("./receiver/htmlfile"), o = e("./sender/xhr-local"),
                            s = e("./lib/ajax-based");

                        function a(e) {
                            if (!i.enabled) throw new Error("Transport created when disabled");
                            s.call(this, e, "/htmlfile", i, o)
                        }

                        r(a, s), a.enabled = function (e) {
                            return i.enabled && e.sameOrigin
                        }, a.transportName = "htmlfile", a.roundTrips = 2, t.exports = a
                    }, {"./lib/ajax-based": 24, "./receiver/htmlfile": 30, "./sender/xhr-local": 37, inherits: 56}],
                    22: [function (e, t, n) {
                        (function (n) {
                            var r = e("inherits"), i = e("json3"), o = e("events").EventEmitter, s = e("../version"),
                                a = e("../utils/url"), c = e("../utils/iframe"), u = e("../utils/event"),
                                l = e("../utils/random"), d = function () {
                                };
                            "production" !== n.env.NODE_ENV && (d = e("debug")("sockjs-client:transport:iframe"));

                            function f(e, t, n) {
                                if (!f.enabled()) throw new Error("Transport created when disabled");
                                o.call(this);
                                var r = this;
                                this.origin = a.getOrigin(n), this.baseUrl = n, this.transUrl = t, this.transport = e, this.windowId = l.string(8);
                                var i = a.addPath(n, "/iframe.html") + "#" + this.windowId;
                                d(e, t, i), this.iframeObj = c.createIframe(i, function (e) {
                                    d("err callback"), r.emit("close", 1006, "Unable to load an iframe (" + e + ")"), r.close()
                                }), this.onmessageCallback = this._message.bind(this), u.attachEvent("message", this.onmessageCallback)
                            }

                            r(f, o), f.prototype.close = function () {
                                if (d("close"), this.removeAllListeners(), this.iframeObj) {
                                    u.detachEvent("message", this.onmessageCallback);
                                    try {
                                        this.postMessage("c")
                                    } catch (e) {
                                    }
                                    this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
                                }
                            }, f.prototype._message = function (e) {
                                if (d("message", e.data), a.isOriginEqual(e.origin, this.origin)) {
                                    var t;
                                    try {
                                        t = i.parse(e.data)
                                    } catch (t) {
                                        return void d("bad json", e.data)
                                    }
                                    if (t.windowId === this.windowId) switch (t.type) {
                                        case"s":
                                            this.iframeObj.loaded(), this.postMessage("s", i.stringify([s, this.transport, this.transUrl, this.baseUrl]));
                                            break;
                                        case"t":
                                            this.emit("message", t.data);
                                            break;
                                        case"c":
                                            var n;
                                            try {
                                                n = i.parse(t.data)
                                            } catch (e) {
                                                return void d("bad json", t.data)
                                            }
                                            this.emit("close", n[0], n[1]), this.close()
                                    } else d("mismatched window id", t.windowId, this.windowId)
                                } else d("not same origin", e.origin, this.origin)
                            }, f.prototype.postMessage = function (e, t) {
                                d("postMessage", e, t), this.iframeObj.post(i.stringify({
                                    windowId: this.windowId,
                                    type: e,
                                    data: t || ""
                                }), this.origin)
                            }, f.prototype.send = function (e) {
                                d("send", e), this.postMessage("m", e)
                            }, f.enabled = function () {
                                return c.iframeEnabled
                            }, f.transportName = "iframe", f.roundTrips = 2, t.exports = f
                        }).call(this, {env: {}})
                    }, {
                        "../utils/event": 46,
                        "../utils/iframe": 47,
                        "../utils/random": 50,
                        "../utils/url": 52,
                        "../version": 53,
                        debug: 54,
                        events: 3,
                        inherits: 56,
                        json3: 57
                    }],
                    23: [function (t, n, r) {
                        (function (e) {
                            var r = t("inherits"), i = t("./lib/sender-receiver"), o = t("./receiver/jsonp"),
                                s = t("./sender/jsonp");

                            function a(e) {
                                if (!a.enabled()) throw new Error("Transport created when disabled");
                                i.call(this, e, "/jsonp", s, o)
                            }

                            r(a, i), a.enabled = function () {
                                return !!e.document
                            }, a.transportName = "jsonp-polling", a.roundTrips = 1, a.needBody = !0, n.exports = a
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"./lib/sender-receiver": 28, "./receiver/jsonp": 31, "./sender/jsonp": 33, inherits: 56}],
                    24: [function (e, t, n) {
                        (function (n) {
                            var r = e("inherits"), i = e("../../utils/url"), o = e("./sender-receiver"),
                                s = function () {
                                };
                            "production" !== n.env.NODE_ENV && (s = e("debug")("sockjs-client:ajax-based"));

                            function a(e, t, n, r) {
                                o.call(this, e, t, (a = r, function (e, t, n) {
                                    s("create ajax sender", e, t);
                                    var r = {};
                                    "string" == typeof t && (r.headers = {"Content-type": "text/plain"});
                                    var o = i.addPath(e, "/xhr_send"), c = new a("POST", o, t, r);
                                    return c.once("finish", function (e) {
                                        if (s("finish", e), c = null, 200 !== e && 204 !== e) return n(new Error("http status " + e));
                                        n()
                                    }), function () {
                                        s("abort"), c.close(), c = null;
                                        var e = new Error("Aborted");
                                        e.code = 1e3, n(e)
                                    }
                                }), n, r);
                                var a
                            }

                            r(a, o), t.exports = a
                        }).call(this, {env: {}})
                    }, {"../../utils/url": 52, "./sender-receiver": 28, debug: 54, inherits: 56}],
                    25: [function (e, t, n) {
                        (function (n) {
                            var r = e("inherits"), i = e("events").EventEmitter, o = function () {
                            };
                            "production" !== n.env.NODE_ENV && (o = e("debug")("sockjs-client:buffered-sender"));

                            function s(e, t) {
                                o(e), i.call(this), this.sendBuffer = [], this.sender = t, this.url = e
                            }

                            r(s, i), s.prototype.send = function (e) {
                                o("send", e), this.sendBuffer.push(e), this.sendStop || this.sendSchedule()
                            }, s.prototype.sendScheduleWait = function () {
                                o("sendScheduleWait");
                                var e, t = this;
                                this.sendStop = function () {
                                    o("sendStop"), t.sendStop = null, clearTimeout(e)
                                }, e = setTimeout(function () {
                                    o("timeout"), t.sendStop = null, t.sendSchedule()
                                }, 25)
                            }, s.prototype.sendSchedule = function () {
                                o("sendSchedule", this.sendBuffer.length);
                                var e = this;
                                if (this.sendBuffer.length > 0) {
                                    var t = "[" + this.sendBuffer.join(",") + "]";
                                    this.sendStop = this.sender(this.url, t, function (t) {
                                        e.sendStop = null, t ? (o("error", t), e.emit("close", t.code || 1006, "Sending error: " + t), e.close()) : e.sendScheduleWait()
                                    }), this.sendBuffer = []
                                }
                            }, s.prototype._cleanup = function () {
                                o("_cleanup"), this.removeAllListeners()
                            }, s.prototype.close = function () {
                                o("close"), this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
                            }, t.exports = s
                        }).call(this, {env: {}})
                    }, {debug: 54, events: 3, inherits: 56}],
                    26: [function (t, n, r) {
                        (function (e) {
                            var r = t("inherits"), i = t("../iframe"), o = t("../../utils/object");
                            n.exports = function (t) {
                                function n(e, n) {
                                    i.call(this, t.transportName, e, n)
                                }

                                return r(n, i), n.enabled = function (n, r) {
                                    if (!e.document) return !1;
                                    var s = o.extend({}, r);
                                    return s.sameOrigin = !0, t.enabled(s) && i.enabled()
                                }, n.transportName = "iframe-" + t.transportName, n.needBody = !0, n.roundTrips = i.roundTrips + t.roundTrips - 1, n.facadeTransport = t, n
                            }
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"../../utils/object": 49, "../iframe": 22, inherits: 56}],
                    27: [function (e, t, n) {
                        (function (n) {
                            var r = e("inherits"), i = e("events").EventEmitter, o = function () {
                            };
                            "production" !== n.env.NODE_ENV && (o = e("debug")("sockjs-client:polling"));

                            function s(e, t, n) {
                                o(t), i.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = n, this._scheduleReceiver()
                            }

                            r(s, i), s.prototype._scheduleReceiver = function () {
                                o("_scheduleReceiver");
                                var e = this, t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
                                t.on("message", function (t) {
                                    o("message", t), e.emit("message", t)
                                }), t.once("close", function (n, r) {
                                    o("close", n, r, e.pollIsClosing), e.poll = t = null, e.pollIsClosing || ("network" === r ? e._scheduleReceiver() : (e.emit("close", n || 1006, r), e.removeAllListeners()))
                                })
                            }, s.prototype.abort = function () {
                                o("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
                            }, t.exports = s
                        }).call(this, {env: {}})
                    }, {debug: 54, events: 3, inherits: 56}],
                    28: [function (e, t, n) {
                        (function (n) {
                            var r = e("inherits"), i = e("../../utils/url"), o = e("./buffered-sender"),
                                s = e("./polling"), a = function () {
                                };
                            "production" !== n.env.NODE_ENV && (a = e("debug")("sockjs-client:sender-receiver"));

                            function c(e, t, n, r, c) {
                                var u = i.addPath(e, t);
                                a(u);
                                var l = this;
                                o.call(this, e, n), this.poll = new s(r, u, c), this.poll.on("message", function (e) {
                                    a("poll message", e), l.emit("message", e)
                                }), this.poll.once("close", function (e, t) {
                                    a("poll close", e, t), l.poll = null, l.emit("close", e, t), l.close()
                                })
                            }

                            r(c, o), c.prototype.close = function () {
                                o.prototype.close.call(this), a("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
                            }, t.exports = c
                        }).call(this, {env: {}})
                    }, {"../../utils/url": 52, "./buffered-sender": 25, "./polling": 27, debug: 54, inherits: 56}],
                    29: [function (e, t, n) {
                        (function (n) {
                            var r = e("inherits"), i = e("events").EventEmitter, o = e("eventsource"), s = function () {
                            };
                            "production" !== n.env.NODE_ENV && (s = e("debug")("sockjs-client:receiver:eventsource"));

                            function a(e) {
                                s(e), i.call(this);
                                var t = this, n = this.es = new o(e);
                                n.onmessage = function (e) {
                                    s("message", e.data), t.emit("message", decodeURI(e.data))
                                }, n.onerror = function (e) {
                                    s("error", n.readyState, e);
                                    var r = 2 !== n.readyState ? "network" : "permanent";
                                    t._cleanup(), t._close(r)
                                }
                            }

                            r(a, i), a.prototype.abort = function () {
                                s("abort"), this._cleanup(), this._close("user")
                            }, a.prototype._cleanup = function () {
                                s("cleanup");
                                var e = this.es;
                                e && (e.onmessage = e.onerror = null, e.close(), this.es = null)
                            }, a.prototype._close = function (e) {
                                s("close", e);
                                var t = this;
                                setTimeout(function () {
                                    t.emit("close", null, e), t.removeAllListeners()
                                }, 200)
                            }, t.exports = a
                        }).call(this, {env: {}})
                    }, {debug: 54, events: 3, eventsource: 18, inherits: 56}],
                    30: [function (t, n, r) {
                        (function (e, r) {
                            var i = t("inherits"), o = t("../../utils/iframe"), s = t("../../utils/url"),
                                a = t("events").EventEmitter, c = t("../../utils/random"), u = function () {
                                };
                            "production" !== e.env.NODE_ENV && (u = t("debug")("sockjs-client:receiver:htmlfile"));

                            function l(e) {
                                u(e), a.call(this);
                                var t = this;
                                o.polluteGlobalNamespace(), this.id = "a" + c.string(6), e = s.addQuery(e, "c=" + decodeURIComponent(o.WPrefix + "." + this.id)), u("using htmlfile", l.htmlfileEnabled);
                                var n = l.htmlfileEnabled ? o.createHtmlfile : o.createIframe;
                                r[o.WPrefix][this.id] = {
                                    start: function () {
                                        u("start"), t.iframeObj.loaded()
                                    }, message: function (e) {
                                        u("message", e), t.emit("message", e)
                                    }, stop: function () {
                                        u("stop"), t._cleanup(), t._close("network")
                                    }
                                }, this.iframeObj = n(e, function () {
                                    u("callback"), t._cleanup(), t._close("permanent")
                                })
                            }

                            i(l, a), l.prototype.abort = function () {
                                u("abort"), this._cleanup(), this._close("user")
                            }, l.prototype._cleanup = function () {
                                u("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete r[o.WPrefix][this.id]
                            }, l.prototype._close = function (e) {
                                u("_close", e), this.emit("close", null, e), this.removeAllListeners()
                            }, l.htmlfileEnabled = !1;
                            var d = ["Active"].concat("Object").join("X");
                            if (d in r) try {
                                l.htmlfileEnabled = !!new r[d]("htmlfile")
                            } catch (e) {
                            }
                            l.enabled = l.htmlfileEnabled || o.iframeEnabled, n.exports = l
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../../utils/iframe": 47,
                        "../../utils/random": 50,
                        "../../utils/url": 52,
                        debug: 54,
                        events: 3,
                        inherits: 56
                    }],
                    31: [function (t, n, r) {
                        (function (e, r) {
                            var i = t("../../utils/iframe"), o = t("../../utils/random"), s = t("../../utils/browser"),
                                a = t("../../utils/url"), c = t("inherits"), u = t("events").EventEmitter,
                                l = function () {
                                };
                            "production" !== e.env.NODE_ENV && (l = t("debug")("sockjs-client:receiver:jsonp"));

                            function d(e) {
                                l(e);
                                var t = this;
                                u.call(this), i.polluteGlobalNamespace(), this.id = "a" + o.string(6);
                                var n = a.addQuery(e, "c=" + encodeURIComponent(i.WPrefix + "." + this.id));
                                r[i.WPrefix][this.id] = this._callback.bind(this), this._createScript(n), this.timeoutId = setTimeout(function () {
                                    l("timeout"), t._abort(new Error("JSONP script loaded abnormally (timeout)"))
                                }, d.timeout)
                            }

                            c(d, u), d.prototype.abort = function () {
                                if (l("abort"), r[i.WPrefix][this.id]) {
                                    var e = new Error("JSONP user aborted read");
                                    e.code = 1e3, this._abort(e)
                                }
                            }, d.timeout = 35e3, d.scriptErrorTimeout = 1e3, d.prototype._callback = function (e) {
                                l("_callback", e), this._cleanup(), this.aborting || (e && (l("message", e), this.emit("message", e)), this.emit("close", null, "network"), this.removeAllListeners())
                            }, d.prototype._abort = function (e) {
                                l("_abort", e), this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners()
                            }, d.prototype._cleanup = function () {
                                if (l("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                                    var e = this.script;
                                    e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null
                                }
                                delete r[i.WPrefix][this.id]
                            }, d.prototype._scriptError = function () {
                                l("_scriptError");
                                var e = this;
                                this.errorTimer || (this.errorTimer = setTimeout(function () {
                                    e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"))
                                }, d.scriptErrorTimeout))
                            }, d.prototype._createScript = function (e) {
                                l("_createScript", e);
                                var t, n = this, i = this.script = r.document.createElement("script");
                                if (i.id = "a" + o.string(8), i.src = e, i.type = "text/javascript", i.charset = "UTF-8", i.onerror = this._scriptError.bind(this), i.onload = function () {
                                    l("onload"), n._abort(new Error("JSONP script loaded abnormally (onload)"))
                                }, i.onreadystatechange = function () {
                                    if (l("onreadystatechange", i.readyState), /loaded|closed/.test(i.readyState)) {
                                        if (i && i.htmlFor && i.onclick) {
                                            n.loadedOkay = !0;
                                            try {
                                                i.onclick()
                                            } catch (e) {
                                            }
                                        }
                                        i && n._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
                                    }
                                }, void 0 === i.async && r.document.attachEvent) if (s.isOpera()) (t = this.script2 = r.document.createElement("script")).text = "try{var a = document.getElementById('" + i.id + "'); if(a)a.onerror();}catch(x){};", i.async = t.async = !1; else {
                                    try {
                                        i.htmlFor = i.id, i.event = "onclick"
                                    } catch (e) {
                                    }
                                    i.async = !0
                                }
                                void 0 !== i.async && (i.async = !0);
                                var a = r.document.getElementsByTagName("head")[0];
                                a.insertBefore(i, a.firstChild), t && a.insertBefore(t, a.firstChild)
                            }, n.exports = d
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../../utils/browser": 44,
                        "../../utils/iframe": 47,
                        "../../utils/random": 50,
                        "../../utils/url": 52,
                        debug: 54,
                        events: 3,
                        inherits: 56
                    }],
                    32: [function (e, t, n) {
                        (function (n) {
                            var r = e("inherits"), i = e("events").EventEmitter, o = function () {
                            };
                            "production" !== n.env.NODE_ENV && (o = e("debug")("sockjs-client:receiver:xhr"));

                            function s(e, t) {
                                o(e), i.call(this);
                                var n = this;
                                this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function (e, t) {
                                    o("finish", e, t), n._chunkHandler(e, t), n.xo = null;
                                    var r = 200 === e ? "network" : "permanent";
                                    o("close", r), n.emit("close", null, r), n._cleanup()
                                })
                            }

                            r(s, i), s.prototype._chunkHandler = function (e, t) {
                                if (o("_chunkHandler", e), 200 === e && t) for (var n = -1; ; this.bufferPosition += n + 1) {
                                    var r = t.slice(this.bufferPosition);
                                    if (-1 === (n = r.indexOf("\n"))) break;
                                    var i = r.slice(0, n);
                                    i && (o("message", i), this.emit("message", i))
                                }
                            }, s.prototype._cleanup = function () {
                                o("_cleanup"), this.removeAllListeners()
                            }, s.prototype.abort = function () {
                                o("abort"), this.xo && (this.xo.close(), o("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup()
                            }, t.exports = s
                        }).call(this, {env: {}})
                    }, {debug: 54, events: 3, inherits: 56}],
                    33: [function (t, n, r) {
                        (function (e, r) {
                            var i = t("../../utils/random"), o = t("../../utils/url"), s = function () {
                            };
                            "production" !== e.env.NODE_ENV && (s = t("debug")("sockjs-client:sender:jsonp"));
                            var a, c;
                            n.exports = function (e, t, n) {
                                s(e, t), a || (s("createForm"), (a = r.document.createElement("form")).style.display = "none", a.style.position = "absolute", a.method = "POST", a.enctype = "application/x-www-form-urlencoded", a.acceptCharset = "UTF-8", (c = r.document.createElement("textarea")).name = "d", a.appendChild(c), r.document.body.appendChild(a));
                                var u = "a" + i.string(8);
                                a.target = u, a.action = o.addQuery(o.addPath(e, "/jsonp_send"), "i=" + u);
                                var l = function (e) {
                                    s("createIframe", e);
                                    try {
                                        return r.document.createElement('<iframe name="' + e + '">')
                                    } catch (n) {
                                        var t = r.document.createElement("iframe");
                                        return t.name = e, t
                                    }
                                }(u);
                                l.id = u, l.style.display = "none", a.appendChild(l);
                                try {
                                    c.value = t
                                } catch (e) {
                                }
                                a.submit();
                                var d = function (e) {
                                    s("completed", u, e), l.onerror && (l.onreadystatechange = l.onerror = l.onload = null, setTimeout(function () {
                                        s("cleaning up", u), l.parentNode.removeChild(l), l = null
                                    }, 500), c.value = "", n(e))
                                };
                                return l.onerror = function () {
                                    s("onerror", u), d()
                                }, l.onload = function () {
                                    s("onload", u), d()
                                }, l.onreadystatechange = function (e) {
                                    s("onreadystatechange", u, l.readyState, e), "complete" === l.readyState && d()
                                }, function () {
                                    s("aborted", u), d(new Error("Aborted"))
                                }
                            }
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"../../utils/random": 50, "../../utils/url": 52, debug: 54}],
                    34: [function (t, n, r) {
                        (function (e, r) {
                            var i = t("events").EventEmitter, o = t("inherits"), s = t("../../utils/event"),
                                a = t("../../utils/browser"), c = t("../../utils/url"), u = function () {
                                };
                            "production" !== e.env.NODE_ENV && (u = t("debug")("sockjs-client:sender:xdr"));

                            function l(e, t, n) {
                                u(e, t);
                                var r = this;
                                i.call(this), setTimeout(function () {
                                    r._start(e, t, n)
                                }, 0)
                            }

                            o(l, i), l.prototype._start = function (e, t, n) {
                                u("_start");
                                var i = this, o = new r.XDomainRequest;
                                t = c.addQuery(t, "t=" + +new Date), o.onerror = function () {
                                    u("onerror"), i._error()
                                }, o.ontimeout = function () {
                                    u("ontimeout"), i._error()
                                }, o.onprogress = function () {
                                    u("progress", o.responseText), i.emit("chunk", 200, o.responseText)
                                }, o.onload = function () {
                                    u("load"), i.emit("finish", 200, o.responseText), i._cleanup(!1)
                                }, this.xdr = o, this.unloadRef = s.unloadAdd(function () {
                                    i._cleanup(!0)
                                });
                                try {
                                    this.xdr.open(e, t), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(n)
                                } catch (e) {
                                    this._error()
                                }
                            }, l.prototype._error = function () {
                                this.emit("finish", 0, ""), this._cleanup(!1)
                            }, l.prototype._cleanup = function (e) {
                                if (u("cleanup", e), this.xdr) {
                                    if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e) try {
                                        this.xdr.abort()
                                    } catch (e) {
                                    }
                                    this.unloadRef = this.xdr = null
                                }
                            }, l.prototype.close = function () {
                                u("close"), this._cleanup(!0)
                            }, l.enabled = !(!r.XDomainRequest || !a.hasDomain()), n.exports = l
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../../utils/browser": 44,
                        "../../utils/event": 46,
                        "../../utils/url": 52,
                        debug: 54,
                        events: 3,
                        inherits: 56
                    }],
                    35: [function (e, t, n) {
                        var r = e("inherits"), i = e("../driver/xhr");

                        function o(e, t, n, r) {
                            i.call(this, e, t, n, r)
                        }

                        r(o, i), o.enabled = i.enabled && i.supportsCORS, t.exports = o
                    }, {"../driver/xhr": 17, inherits: 56}],
                    36: [function (e, t, n) {
                        var r = e("events").EventEmitter;

                        function i() {
                            var e = this;
                            r.call(this), this.to = setTimeout(function () {
                                e.emit("finish", 200, "{}")
                            }, i.timeout)
                        }

                        e("inherits")(i, r), i.prototype.close = function () {
                            clearTimeout(this.to)
                        }, i.timeout = 2e3, t.exports = i
                    }, {events: 3, inherits: 56}],
                    37: [function (e, t, n) {
                        var r = e("inherits"), i = e("../driver/xhr");

                        function o(e, t, n) {
                            i.call(this, e, t, n, {noCredentials: !0})
                        }

                        r(o, i), o.enabled = i.enabled, t.exports = o
                    }, {"../driver/xhr": 17, inherits: 56}],
                    38: [function (e, t, n) {
                        (function (n) {
                            var r = e("../utils/event"), i = e("../utils/url"), o = e("inherits"),
                                s = e("events").EventEmitter, a = e("./driver/websocket"), c = function () {
                                };
                            "production" !== n.env.NODE_ENV && (c = e("debug")("sockjs-client:websocket"));

                            function u(e, t, n) {
                                if (!u.enabled()) throw new Error("Transport created when disabled");
                                s.call(this), c("constructor", e);
                                var o = this, l = i.addPath(e, "/websocket");
                                l = "https" === l.slice(0, 5) ? "wss" + l.slice(5) : "ws" + l.slice(4), this.url = l, this.ws = new a(this.url, [], n), this.ws.onmessage = function (e) {
                                    c("message event", e.data), o.emit("message", e.data)
                                }, this.unloadRef = r.unloadAdd(function () {
                                    c("unload"), o.ws.close()
                                }), this.ws.onclose = function (e) {
                                    c("close event", e.code, e.reason), o.emit("close", e.code, e.reason), o._cleanup()
                                }, this.ws.onerror = function (e) {
                                    c("error event", e), o.emit("close", 1006, "WebSocket connection broken"), o._cleanup()
                                }
                            }

                            o(u, s), u.prototype.send = function (e) {
                                var t = "[" + e + "]";
                                c("send", t), this.ws.send(t)
                            }, u.prototype.close = function () {
                                c("close");
                                var e = this.ws;
                                this._cleanup(), e && e.close()
                            }, u.prototype._cleanup = function () {
                                c("_cleanup");
                                var e = this.ws;
                                e && (e.onmessage = e.onclose = e.onerror = null), r.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
                            }, u.enabled = function () {
                                return c("enabled"), !!a
                            }, u.transportName = "websocket", u.roundTrips = 2, t.exports = u
                        }).call(this, {env: {}})
                    }, {
                        "../utils/event": 46,
                        "../utils/url": 52,
                        "./driver/websocket": 19,
                        debug: 54,
                        events: 3,
                        inherits: 56
                    }],
                    39: [function (e, t, n) {
                        var r = e("inherits"), i = e("./lib/ajax-based"), o = e("./xdr-streaming"),
                            s = e("./receiver/xhr"), a = e("./sender/xdr");

                        function c(e) {
                            if (!a.enabled) throw new Error("Transport created when disabled");
                            i.call(this, e, "/xhr", s, a)
                        }

                        r(c, i), c.enabled = o.enabled, c.transportName = "xdr-polling", c.roundTrips = 2, t.exports = c
                    }, {
                        "./lib/ajax-based": 24,
                        "./receiver/xhr": 32,
                        "./sender/xdr": 34,
                        "./xdr-streaming": 40,
                        inherits: 56
                    }],
                    40: [function (e, t, n) {
                        var r = e("inherits"), i = e("./lib/ajax-based"), o = e("./receiver/xhr"),
                            s = e("./sender/xdr");

                        function a(e) {
                            if (!s.enabled) throw new Error("Transport created when disabled");
                            i.call(this, e, "/xhr_streaming", o, s)
                        }

                        r(a, i), a.enabled = function (e) {
                            return !e.cookie_needed && !e.nullOrigin && (s.enabled && e.sameScheme)
                        }, a.transportName = "xdr-streaming", a.roundTrips = 2, t.exports = a
                    }, {"./lib/ajax-based": 24, "./receiver/xhr": 32, "./sender/xdr": 34, inherits: 56}],
                    41: [function (e, t, n) {
                        var r = e("inherits"), i = e("./lib/ajax-based"), o = e("./receiver/xhr"),
                            s = e("./sender/xhr-cors"), a = e("./sender/xhr-local");

                        function c(e) {
                            if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                            i.call(this, e, "/xhr", o, s)
                        }

                        r(c, i), c.enabled = function (e) {
                            return !e.nullOrigin && (!(!a.enabled || !e.sameOrigin) || s.enabled)
                        }, c.transportName = "xhr-polling", c.roundTrips = 2, t.exports = c
                    }, {
                        "./lib/ajax-based": 24,
                        "./receiver/xhr": 32,
                        "./sender/xhr-cors": 35,
                        "./sender/xhr-local": 37,
                        inherits: 56
                    }],
                    42: [function (t, n, r) {
                        (function (e) {
                            var r = t("inherits"), i = t("./lib/ajax-based"), o = t("./receiver/xhr"),
                                s = t("./sender/xhr-cors"), a = t("./sender/xhr-local"), c = t("../utils/browser");

                            function u(e) {
                                if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                                i.call(this, e, "/xhr_streaming", o, s)
                            }

                            r(u, i), u.enabled = function (e) {
                                return !e.nullOrigin && (!c.isOpera() && s.enabled)
                            }, u.transportName = "xhr-streaming", u.roundTrips = 2, u.needBody = !!e.document, n.exports = u
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../utils/browser": 44,
                        "./lib/ajax-based": 24,
                        "./receiver/xhr": 32,
                        "./sender/xhr-cors": 35,
                        "./sender/xhr-local": 37,
                        inherits: 56
                    }],
                    43: [function (t, n, r) {
                        (function (e) {
                            e.crypto && e.crypto.getRandomValues ? n.exports.randomBytes = function (t) {
                                var n = new Uint8Array(t);
                                return e.crypto.getRandomValues(n), n
                            } : n.exports.randomBytes = function (e) {
                                for (var t = new Array(e), n = 0; n < e; n++) t[n] = Math.floor(256 * Math.random());
                                return t
                            }
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    44: [function (t, n, r) {
                        (function (e) {
                            n.exports = {
                                isOpera: function () {
                                    return e.navigator && /opera/i.test(e.navigator.userAgent)
                                }, isKonqueror: function () {
                                    return e.navigator && /konqueror/i.test(e.navigator.userAgent)
                                }, hasDomain: function () {
                                    if (!e.document) return !0;
                                    try {
                                        return !!e.document.domain
                                    } catch (e) {
                                        return !1
                                    }
                                }
                            }
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    45: [function (e, t, n) {
                        var r, i = e("json3"),
                            o = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
                        t.exports = {
                            quote: function (e) {
                                var t = i.stringify(e);
                                return o.lastIndex = 0, o.test(t) ? (r || (r = function (e) {
                                    var t, n = {}, r = [];
                                    for (t = 0; t < 65536; t++) r.push(String.fromCharCode(t));
                                    return e.lastIndex = 0, r.join("").replace(e, function (e) {
                                        return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                                    }), e.lastIndex = 0, n
                                }(o)), t.replace(o, function (e) {
                                    return r[e]
                                })) : t
                            }
                        }
                    }, {json3: 57}],
                    46: [function (t, n, r) {
                        (function (e) {
                            var r = t("./random"), i = {}, o = !1, s = e.chrome && e.chrome.app && e.chrome.app.runtime;
                            n.exports = {
                                attachEvent: function (t, n) {
                                    void 0 !== e.addEventListener ? e.addEventListener(t, n, !1) : e.document && e.attachEvent && (e.document.attachEvent("on" + t, n), e.attachEvent("on" + t, n))
                                }, detachEvent: function (t, n) {
                                    void 0 !== e.addEventListener ? e.removeEventListener(t, n, !1) : e.document && e.detachEvent && (e.document.detachEvent("on" + t, n), e.detachEvent("on" + t, n))
                                }, unloadAdd: function (e) {
                                    if (s) return null;
                                    var t = r.string(8);
                                    return i[t] = e, o && setTimeout(this.triggerUnloadCallbacks, 0), t
                                }, unloadDel: function (e) {
                                    e in i && delete i[e]
                                }, triggerUnloadCallbacks: function () {
                                    for (var e in i) i[e](), delete i[e]
                                }
                            };
                            var a = function () {
                                o || (o = !0, n.exports.triggerUnloadCallbacks())
                            };
                            s || n.exports.attachEvent("unload", a)
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"./random": 50}],
                    47: [function (t, n, r) {
                        (function (e, r) {
                            var i = t("./event"), o = t("json3"), s = t("./browser"), a = function () {
                            };
                            "production" !== e.env.NODE_ENV && (a = t("debug")("sockjs-client:utils:iframe")), n.exports = {
                                WPrefix: "_jp", currentWindowId: null, polluteGlobalNamespace: function () {
                                    n.exports.WPrefix in r || (r[n.exports.WPrefix] = {})
                                }, postMessage: function (e, t) {
                                    r.parent !== r ? r.parent.postMessage(o.stringify({
                                        windowId: n.exports.currentWindowId,
                                        type: e,
                                        data: t || ""
                                    }), "*") : a("Cannot postMessage, no parent window.", e, t)
                                }, createIframe: function (e, t) {
                                    var n, o, s = r.document.createElement("iframe"), c = function () {
                                        a("unattach"), clearTimeout(n);
                                        try {
                                            s.onload = null
                                        } catch (e) {
                                        }
                                        s.onerror = null
                                    }, u = function () {
                                        a("cleanup"), s && (c(), setTimeout(function () {
                                            s && s.parentNode.removeChild(s), s = null
                                        }, 0), i.unloadDel(o))
                                    }, l = function (e) {
                                        a("onerror", e), s && (u(), t(e))
                                    };
                                    return s.src = e, s.style.display = "none", s.style.position = "absolute", s.onerror = function () {
                                        l("onerror")
                                    }, s.onload = function () {
                                        a("onload"), clearTimeout(n), n = setTimeout(function () {
                                            l("onload timeout")
                                        }, 2e3)
                                    }, r.document.body.appendChild(s), n = setTimeout(function () {
                                        l("timeout")
                                    }, 15e3), o = i.unloadAdd(u), {
                                        post: function (e, t) {
                                            a("post", e, t);
                                            try {
                                                setTimeout(function () {
                                                    s && s.contentWindow && s.contentWindow.postMessage(e, t)
                                                }, 0)
                                            } catch (e) {
                                            }
                                        }, cleanup: u, loaded: c
                                    }
                                }, createHtmlfile: function (e, t) {
                                    var o, s, c, u = ["Active"].concat("Object").join("X"), l = new r[u]("htmlfile"),
                                        d = function () {
                                            clearTimeout(o), c.onerror = null
                                        }, f = function () {
                                            l && (d(), i.unloadDel(s), c.parentNode.removeChild(c), c = l = null, CollectGarbage())
                                        }, h = function (e) {
                                            a("onerror", e), l && (f(), t(e))
                                        };
                                    l.open(), l.write('<html><script>document.domain="' + r.document.domain + '";<\/script></html>'), l.close(), l.parentWindow[n.exports.WPrefix] = r[n.exports.WPrefix];
                                    var p = l.createElement("div");
                                    return l.body.appendChild(p), c = l.createElement("iframe"), p.appendChild(c), c.src = e, c.onerror = function () {
                                        h("onerror")
                                    }, o = setTimeout(function () {
                                        h("timeout")
                                    }, 15e3), s = i.unloadAdd(f), {
                                        post: function (e, t) {
                                            try {
                                                setTimeout(function () {
                                                    c && c.contentWindow && c.contentWindow.postMessage(e, t)
                                                }, 0)
                                            } catch (e) {
                                            }
                                        }, cleanup: f, loaded: d
                                    }
                                }
                            }, n.exports.iframeEnabled = !1, r.document && (n.exports.iframeEnabled = ("function" == typeof r.postMessage || "object" === d()(r.postMessage)) && !s.isKonqueror())
                        }).call(this, {env: {}}, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"./browser": 44, "./event": 46, debug: 54, json3: 57}],
                    48: [function (t, n, r) {
                        (function (e) {
                            var t = {};
                            ["log", "debug", "warn"].forEach(function (n) {
                                var r;
                                try {
                                    r = e.console && e.console[n] && e.console[n].apply
                                } catch (e) {
                                }
                                t[n] = r ? function () {
                                    return e.console[n].apply(e.console, arguments)
                                } : "log" === n ? function () {
                                } : t.log
                            }), n.exports = t
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    49: [function (e, t, n) {
                        t.exports = {
                            isObject: function (e) {
                                var t = void 0 === e ? "undefined" : d()(e);
                                return "function" === t || "object" === t && !!e
                            }, extend: function (e) {
                                if (!this.isObject(e)) return e;
                                for (var t, n, r = 1, i = arguments.length; r < i; r++) {
                                    t = arguments[r];
                                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                                return e
                            }
                        }
                    }, {}],
                    50: [function (e, t, n) {
                        var r = e("crypto"), i = "abcdefghijklmnopqrstuvwxyz012345";
                        t.exports = {
                            string: function (e) {
                                for (var t = i.length, n = r.randomBytes(e), o = [], s = 0; s < e; s++) o.push(i.substr(n[s] % t, 1));
                                return o.join("")
                            }, number: function (e) {
                                return Math.floor(Math.random() * e)
                            }, numberString: function (e) {
                                var t = ("" + (e - 1)).length;
                                return (new Array(t + 1).join("0") + this.number(e)).slice(-t)
                            }
                        }
                    }, {crypto: 43}],
                    51: [function (e, t, n) {
                        (function (n) {
                            var r = function () {
                            };
                            "production" !== n.env.NODE_ENV && (r = e("debug")("sockjs-client:utils:transport")), t.exports = function (e) {
                                return {
                                    filterToEnabled: function (t, n) {
                                        var i = {main: [], facade: []};
                                        return t ? "string" == typeof t && (t = [t]) : t = [], e.forEach(function (e) {
                                            e && ("websocket" !== e.transportName || !1 !== n.websocket ? t.length && -1 === t.indexOf(e.transportName) ? r("not in whitelist", e.transportName) : e.enabled(n) ? (r("enabled", e.transportName), i.main.push(e), e.facadeTransport && i.facade.push(e.facadeTransport)) : r("disabled", e.transportName) : r("disabled from server", "websocket"))
                                        }), i
                                    }
                                }
                            }
                        }).call(this, {env: {}})
                    }, {debug: 54}],
                    52: [function (e, t, n) {
                        (function (n) {
                            var r = e("url-parse"), i = function () {
                            };
                            "production" !== n.env.NODE_ENV && (i = e("debug")("sockjs-client:utils:url")), t.exports = {
                                getOrigin: function (e) {
                                    if (!e) return null;
                                    var t = new r(e);
                                    if ("file:" === t.protocol) return null;
                                    var n = t.port;
                                    return n || (n = "https:" === t.protocol ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + n
                                }, isOriginEqual: function (e, t) {
                                    var n = this.getOrigin(e) === this.getOrigin(t);
                                    return i("same", e, t, n), n
                                }, isSchemeEqual: function (e, t) {
                                    return e.split(":")[0] === t.split(":")[0]
                                }, addPath: function (e, t) {
                                    var n = e.split("?");
                                    return n[0] + t + (n[1] ? "?" + n[1] : "")
                                }, addQuery: function (e, t) {
                                    return e + (-1 === e.indexOf("?") ? "?" + t : "&" + t)
                                }
                            }
                        }).call(this, {env: {}})
                    }, {debug: 54, "url-parse": 61}],
                    53: [function (e, t, n) {
                        t.exports = "1.1.2"
                    }, {}],
                    54: [function (e, t, n) {
                        (function (r) {
                            (n = t.exports = e("./debug")).log = function () {
                                return "object" === ("undefined" == typeof console ? "undefined" : d()(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments)
                            }, n.formatArgs = function (e) {
                                var t = this.useColors;
                                if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), !t) return;
                                var r = "color: " + this.color;
                                e.splice(1, 0, r, "color: inherit");
                                var i = 0, o = 0;
                                e[0].replace(/%[a-zA-Z%]/g, function (e) {
                                    "%%" !== e && "%c" === e && (o = ++i)
                                }), e.splice(o, 0, r)
                            }, n.save = function (e) {
                                try {
                                    null == e ? n.storage.removeItem("debug") : n.storage.debug = e
                                } catch (e) {
                                }
                            }, n.load = i, n.useColors = function () {
                                if ("undefined" != typeof window && window && void 0 !== window.process && "renderer" === window.process.type) return !0;
                                return "undefined" != typeof document && document && "WebkitAppearance" in document.documentElement.style || "undefined" != typeof window && window && window.console && (console.firebug || console.exception && console.table) || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                            }, n.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
                                try {
                                    return window.localStorage
                                } catch (e) {
                                }
                            }(), n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
                            n.formatters.j = function (e) {
                                try {
                                    return a()(e)
                                } catch (e) {
                                    return "[UnexpectedJSONParseError]: " + e.message
                                }
                            };

                            function i() {
                                try {
                                    return n.storage.debug
                                } catch (e) {
                                }
                                if (void 0 !== r && "env" in r) return r.env.DEBUG
                            }

                            n.enable(i())
                        }).call(this, {env: {}})
                    }, {"./debug": 55}],
                    55: [function (e, t, n) {
                        (n = t.exports = i.debug = i.default = i).coerce = function (e) {
                            return e instanceof Error ? e.stack || e.message : e
                        }, n.disable = function () {
                            n.enable("")
                        }, n.enable = function (e) {
                            n.save(e);
                            for (var t = (e || "").split(/[\s,]+/), r = t.length, i = 0; i < r; i++) t[i] && ("-" === (e = t[i].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")))
                        }, n.enabled = function (e) {
                            var t, r;
                            for (t = 0, r = n.skips.length; t < r; t++) if (n.skips[t].test(e)) return !1;
                            for (t = 0, r = n.names.length; t < r; t++) if (n.names[t].test(e)) return !0;
                            return !1
                        }, n.humanize = e("ms"), n.names = [], n.skips = [], n.formatters = {};
                        var r;

                        function i(e) {
                            function t() {
                                if (t.enabled) {
                                    var e = t, i = +new Date, o = i - (r || i);
                                    e.diff = o, e.prev = r, e.curr = i, r = i;
                                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                                    s[0] = n.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                                    var c = 0;
                                    s[0] = s[0].replace(/%([a-zA-Z%])/g, function (t, r) {
                                        if ("%%" === t) return t;
                                        c++;
                                        var i = n.formatters[r];
                                        if ("function" == typeof i) {
                                            var o = s[c];
                                            t = i.call(e, o), s.splice(c, 1), c--
                                        }
                                        return t
                                    }), n.formatArgs.call(e, s);
                                    (t.log || n.log || console.log.bind(console)).apply(e, s)
                                }
                            }

                            return t.namespace = e, t.enabled = n.enabled(e), t.useColors = n.useColors(), t.color = function (e) {
                                var t, r = 0;
                                for (t in e) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
                                return n.colors[Math.abs(r) % n.colors.length]
                            }(e), "function" == typeof n.init && n.init(t), t
                        }
                    }, {ms: 58}],
                    56: [function (e, t, n) {
                        "function" == typeof o.a ? t.exports = function (e, t) {
                            e.super_ = t, e.prototype = o()(t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })
                        } : t.exports = function (e, t) {
                            e.super_ = t;
                            var n = function () {
                            };
                            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                        }
                    }, {}],
                    57: [function (t, n, r) {
                        (function (e) {
                            (function () {
                                var t = {function: !0, object: !0},
                                    i = t[void 0 === r ? "undefined" : d()(r)] && r && !r.nodeType && r,
                                    o = t["undefined" == typeof window ? "undefined" : d()(window)] && window || this,
                                    s = i && t[void 0 === n ? "undefined" : d()(n)] && n && !n.nodeType && "object" == (void 0 === e ? "undefined" : d()(e)) && e;
                                !s || s.global !== s && s.window !== s && s.self !== s || (o = s);

                                function a(e, n) {
                                    e || (e = o.Object()), n || (n = o.Object());
                                    var r = e.Number || o.Number, i = e.String || o.String, s = e.Object || o.Object,
                                        c = e.Date || o.Date, u = e.SyntaxError || o.SyntaxError,
                                        l = e.TypeError || o.TypeError, f = e.Math || o.Math, h = e.JSON || o.JSON;
                                    "object" == (void 0 === h ? "undefined" : d()(h)) && h && (n.stringify = h.stringify, n.parse = h.parse);
                                    var p, m, v, g = s.prototype, b = g.toString, y = new c(-0xc782b5b800cec);
                                    try {
                                        y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
                                    } catch (e) {
                                    }

                                    function w(e) {
                                        if (w[e] !== v) return w[e];
                                        var t;
                                        if ("bug-string-char-index" == e) t = "a" != "a"[0]; else if ("json" == e) t = w("json-stringify") && w("json-parse"); else {
                                            var o, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                            if ("json-stringify" == e) {
                                                var a = n.stringify, u = "function" == typeof a && y;
                                                if (u) {
                                                    (o = function () {
                                                        return 1
                                                    }).toJSON = o;
                                                    try {
                                                        u = "0" === a(0) && "0" === a(new r) && '""' == a(new i) && a(b) === v && a(v) === v && a() === v && "1" === a(o) && "[1]" == a([o]) && "[null]" == a([v]) && "null" == a(null) && "[null,null,null]" == a([v, b, null]) && a({a: [o, !0, !1, null, "\0\b\n\f\r\t"]}) == s && "1" === a(null, o) && "[\n 1,\n 2\n]" == a([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == a(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == a(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == a(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == a(new c(-1))
                                                    } catch (e) {
                                                        u = !1
                                                    }
                                                }
                                                t = u
                                            }
                                            if ("json-parse" == e) {
                                                var l = n.parse;
                                                if ("function" == typeof l) try {
                                                    if (0 === l("0") && !l(!1)) {
                                                        var d = 5 == (o = l(s)).a.length && 1 === o.a[0];
                                                        if (d) {
                                                            try {
                                                                d = !l('"\t"')
                                                            } catch (e) {
                                                            }
                                                            if (d) try {
                                                                d = 1 !== l("01")
                                                            } catch (e) {
                                                            }
                                                            if (d) try {
                                                                d = 1 !== l("1.")
                                                            } catch (e) {
                                                            }
                                                        }
                                                    }
                                                } catch (e) {
                                                    d = !1
                                                }
                                                t = d
                                            }
                                        }
                                        return w[e] = !!t
                                    }

                                    if (!w("json")) {
                                        var x = "[object Function]", _ = "[object Number]", E = "[object String]",
                                            S = "[object Array]", C = w("bug-string-char-index");
                                        if (!y) var j = f.floor,
                                            N = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                            O = function (e, t) {
                                                return N[t] + 365 * (e - 1970) + j((e - 1969 + (t = +(t > 1))) / 4) - j((e - 1901 + t) / 100) + j((e - 1601 + t) / 400)
                                            };
                                        if ((p = g.hasOwnProperty) || (p = function (e) {
                                            var t, n = {};
                                            return (n.__proto__ = null, n.__proto__ = {toString: 1}, n).toString != b ? p = function (e) {
                                                var t = this.__proto__, n = e in (this.__proto__ = null, this);
                                                return this.__proto__ = t, n
                                            } : (t = n.constructor, p = function (e) {
                                                var n = (this.constructor || t).prototype;
                                                return e in this && !(e in n && this[e] === n[e])
                                            }), n = null, p.call(this, e)
                                        }), m = function (e, n) {
                                            var r, i, o, s = 0;
                                            (r = function () {
                                                this.valueOf = 0
                                            }).prototype.valueOf = 0, i = new r;
                                            for (o in i) p.call(i, o) && s++;
                                            return r = i = null, s ? m = 2 == s ? function (e, t) {
                                                var n, r = {}, i = b.call(e) == x;
                                                for (n in e) i && "prototype" == n || p.call(r, n) || !(r[n] = 1) || !p.call(e, n) || t(n)
                                            } : function (e, t) {
                                                var n, r, i = b.call(e) == x;
                                                for (n in e) i && "prototype" == n || !p.call(e, n) || (r = "constructor" === n) || t(n);
                                                (r || p.call(e, n = "constructor")) && t(n)
                                            } : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], m = function (e, n) {
                                                var r, o, s = b.call(e) == x,
                                                    a = !s && "function" != typeof e.constructor && t[d()(e.hasOwnProperty)] && e.hasOwnProperty || p;
                                                for (r in e) s && "prototype" == r || !a.call(e, r) || n(r);
                                                for (o = i.length; r = i[--o]; a.call(e, r) && n(r)) ;
                                            }), m(e, n)
                                        }, !w("json-stringify")) {
                                            var k = {
                                                92: "\\\\",
                                                34: '\\"',
                                                8: "\\b",
                                                12: "\\f",
                                                10: "\\n",
                                                13: "\\r",
                                                9: "\\t"
                                            }, T = function (e, t) {
                                                return ("000000" + (t || 0)).slice(-e)
                                            }, A = function (e) {
                                                for (var t = '"', n = 0, r = e.length, i = !C || r > 10, o = i && (C ? e.split("") : e); n < r; n++) {
                                                    var s = e.charCodeAt(n);
                                                    switch (s) {
                                                        case 8:
                                                        case 9:
                                                        case 10:
                                                        case 12:
                                                        case 13:
                                                        case 34:
                                                        case 92:
                                                            t += k[s];
                                                            break;
                                                        default:
                                                            if (s < 32) {
                                                                t += "\\u00" + T(2, s.toString(16));
                                                                break
                                                            }
                                                            t += i ? o[n] : e.charAt(n)
                                                    }
                                                }
                                                return t + '"'
                                            };
                                            n.stringify = function (e, n, r) {
                                                var i, o, s, a;
                                                if (t[void 0 === n ? "undefined" : d()(n)] && n) if ((a = b.call(n)) == x) o = n; else if (a == S) {
                                                    s = {};
                                                    for (var c, u = 0, f = n.length; u < f; c = n[u++], a = b.call(c), (a == E || a == _) && (s[c] = 1)) ;
                                                }
                                                if (r) if ((a = b.call(r)) == _) {
                                                    if ((r -= r % 1) > 0) for (i = "", r > 10 && (r = 10); i.length < r; i += " ") ;
                                                } else a == E && (i = r.length <= 10 ? r : r.slice(0, 10));
                                                return function e(t, n, r, i, o, s, a) {
                                                    var c, u, f, h, g, y, w, x, C, N, k, I, D, L, M, R;
                                                    try {
                                                        c = n[t]
                                                    } catch (e) {
                                                    }
                                                    if ("object" == (void 0 === c ? "undefined" : d()(c)) && c) if ("[object Date]" != (u = b.call(c)) || p.call(c, "toJSON")) "function" == typeof c.toJSON && (u != _ && u != E && u != S || p.call(c, "toJSON")) && (c = c.toJSON(t)); else if (c > -1 / 0 && c < 1 / 0) {
                                                        if (O) {
                                                            for (g = j(c / 864e5), f = j(g / 365.2425) + 1970 - 1; O(f + 1, 0) <= g; f++) ;
                                                            for (h = j((g - O(f, 0)) / 30.42); O(f, h + 1) <= g; h++) ;
                                                            g = 1 + g - O(f, h), w = j((y = (c % 864e5 + 864e5) % 864e5) / 36e5) % 24, x = j(y / 6e4) % 60, C = j(y / 1e3) % 60, N = y % 1e3
                                                        } else f = c.getUTCFullYear(), h = c.getUTCMonth(), g = c.getUTCDate(), w = c.getUTCHours(), x = c.getUTCMinutes(), C = c.getUTCSeconds(), N = c.getUTCMilliseconds();
                                                        c = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + T(6, f < 0 ? -f : f) : T(4, f)) + "-" + T(2, h + 1) + "-" + T(2, g) + "T" + T(2, w) + ":" + T(2, x) + ":" + T(2, C) + "." + T(3, N) + "Z"
                                                    } else c = null;
                                                    if (r && (c = r.call(n, t, c)), null === c) return "null";
                                                    if ("[object Boolean]" == (u = b.call(c))) return "" + c;
                                                    if (u == _) return c > -1 / 0 && c < 1 / 0 ? "" + c : "null";
                                                    if (u == E) return A("" + c);
                                                    if ("object" == (void 0 === c ? "undefined" : d()(c))) {
                                                        for (L = a.length; L--;) if (a[L] === c) throw l();
                                                        if (a.push(c), k = [], M = s, s += o, u == S) {
                                                            for (D = 0, L = c.length; D < L; D++) I = e(D, c, r, i, o, s, a), k.push(I === v ? "null" : I);
                                                            R = k.length ? o ? "[\n" + s + k.join(",\n" + s) + "\n" + M + "]" : "[" + k.join(",") + "]" : "[]"
                                                        } else m(i || c, function (t) {
                                                            var n = e(t, c, r, i, o, s, a);
                                                            n !== v && k.push(A(t) + ":" + (o ? " " : "") + n)
                                                        }), R = k.length ? o ? "{\n" + s + k.join(",\n" + s) + "\n" + M + "}" : "{" + k.join(",") + "}" : "{}";
                                                        return a.pop(), R
                                                    }
                                                }("", ((c = {})[""] = e, c), o, s, i, "", [])
                                            }
                                        }
                                        if (!w("json-parse")) {
                                            var I, D, L = i.fromCharCode, M = {
                                                92: "\\",
                                                34: '"',
                                                47: "/",
                                                98: "\b",
                                                116: "\t",
                                                110: "\n",
                                                102: "\f",
                                                114: "\r"
                                            }, R = function () {
                                                throw I = D = null, u()
                                            }, F = function () {
                                                for (var e, t, n, r, i, o = D, s = o.length; I < s;) switch (i = o.charCodeAt(I)) {
                                                    case 9:
                                                    case 10:
                                                    case 13:
                                                    case 32:
                                                        I++;
                                                        break;
                                                    case 123:
                                                    case 125:
                                                    case 91:
                                                    case 93:
                                                    case 58:
                                                    case 44:
                                                        return e = C ? o.charAt(I) : o[I], I++, e;
                                                    case 34:
                                                        for (e = "@", I++; I < s;) if ((i = o.charCodeAt(I)) < 32) R(); else if (92 == i) switch (i = o.charCodeAt(++I)) {
                                                            case 92:
                                                            case 34:
                                                            case 47:
                                                            case 98:
                                                            case 116:
                                                            case 110:
                                                            case 102:
                                                            case 114:
                                                                e += M[i], I++;
                                                                break;
                                                            case 117:
                                                                for (t = ++I, n = I + 4; I < n; I++) (i = o.charCodeAt(I)) >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70 || R();
                                                                e += L("0x" + o.slice(t, I));
                                                                break;
                                                            default:
                                                                R()
                                                        } else {
                                                            if (34 == i) break;
                                                            for (i = o.charCodeAt(I), t = I; i >= 32 && 92 != i && 34 != i;) i = o.charCodeAt(++I);
                                                            e += o.slice(t, I)
                                                        }
                                                        if (34 == o.charCodeAt(I)) return I++, e;
                                                        R();
                                                    default:
                                                        if (t = I, 45 == i && (r = !0, i = o.charCodeAt(++I)), i >= 48 && i <= 57) {
                                                            for (48 == i && (i = o.charCodeAt(I + 1), i >= 48 && i <= 57) && R(), r = !1; I < s && (i = o.charCodeAt(I), i >= 48 && i <= 57); I++) ;
                                                            if (46 == o.charCodeAt(I)) {
                                                                for (n = ++I; n < s && (i = o.charCodeAt(n), i >= 48 && i <= 57); n++) ;
                                                                n == I && R(), I = n
                                                            }
                                                            if (101 == (i = o.charCodeAt(I)) || 69 == i) {
                                                                for (43 != (i = o.charCodeAt(++I)) && 45 != i || I++, n = I; n < s && (i = o.charCodeAt(n), i >= 48 && i <= 57); n++) ;
                                                                n == I && R(), I = n
                                                            }
                                                            return +o.slice(t, I)
                                                        }
                                                        if (r && R(), "true" == o.slice(I, I + 4)) return I += 4, !0;
                                                        if ("false" == o.slice(I, I + 5)) return I += 5, !1;
                                                        if ("null" == o.slice(I, I + 4)) return I += 4, null;
                                                        R()
                                                }
                                                return "$"
                                            }, U = function (e, t, n) {
                                                var r = P(e, t, n);
                                                r === v ? delete e[t] : e[t] = r
                                            }, P = function (e, t, n) {
                                                var r, i = e[t];
                                                if ("object" == (void 0 === i ? "undefined" : d()(i)) && i) if (b.call(i) == S) for (r = i.length; r--;) U(i, r, n); else m(i, function (e) {
                                                    U(i, e, n)
                                                });
                                                return n.call(e, t, i)
                                            };
                                            n.parse = function (e, t) {
                                                var n, r;
                                                return I = 0, D = "" + e, n = function e(t) {
                                                    var n, r;
                                                    if ("$" == t && R(), "string" == typeof t) {
                                                        if ("@" == (C ? t.charAt(0) : t[0])) return t.slice(1);
                                                        if ("[" == t) {
                                                            for (n = []; "]" != (t = F()); r || (r = !0)) r && ("," == t ? "]" == (t = F()) && R() : R()), "," == t && R(), n.push(e(t));
                                                            return n
                                                        }
                                                        if ("{" == t) {
                                                            for (n = {}; "}" != (t = F()); r || (r = !0)) r && ("," == t ? "}" == (t = F()) && R() : R()), "," != t && "string" == typeof t && "@" == (C ? t.charAt(0) : t[0]) && ":" == F() || R(), n[t.slice(1)] = e(F());
                                                            return n
                                                        }
                                                        R()
                                                    }
                                                    return t
                                                }(F()), "$" != F() && R(), I = D = null, t && b.call(t) == x ? P(((r = {})[""] = n, r), "", t) : n
                                            }
                                        }
                                    }
                                    return n.runInContext = a, n
                                }

                                if (i) a(o, i); else {
                                    var c = o.JSON, u = o.JSON3, l = !1, f = a(o, o.JSON3 = {
                                        noConflict: function () {
                                            return l || (l = !0, o.JSON = c, o.JSON3 = u, c = u = null), f
                                        }
                                    });
                                    o.JSON = {parse: f.parse, stringify: f.stringify}
                                }
                            }).call(this)
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    58: [function (e, t, n) {
                        var r = 1e3, i = 60 * r, o = 60 * i, s = 24 * o, c = 365.25 * s;
                        t.exports = function (e, t) {
                            t = t || {};
                            var n = void 0 === e ? "undefined" : d()(e);
                            if ("string" === n && e.length > 0) return function (e) {
                                if ((e = String(e)).length > 1e4) return;
                                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                                if (!t) return;
                                var n = parseFloat(t[1]);
                                switch ((t[2] || "ms").toLowerCase()) {
                                    case"years":
                                    case"year":
                                    case"yrs":
                                    case"yr":
                                    case"y":
                                        return n * c;
                                    case"days":
                                    case"day":
                                    case"d":
                                        return n * s;
                                    case"hours":
                                    case"hour":
                                    case"hrs":
                                    case"hr":
                                    case"h":
                                        return n * o;
                                    case"minutes":
                                    case"minute":
                                    case"mins":
                                    case"min":
                                    case"m":
                                        return n * i;
                                    case"seconds":
                                    case"second":
                                    case"secs":
                                    case"sec":
                                    case"s":
                                        return n * r;
                                    case"milliseconds":
                                    case"millisecond":
                                    case"msecs":
                                    case"msec":
                                    case"ms":
                                        return n;
                                    default:
                                        return
                                }
                            }(e);
                            if ("number" === n && !1 === isNaN(e)) return t.long ? u(l = e, s, "day") || u(l, o, "hour") || u(l, i, "minute") || u(l, r, "second") || l + " ms" : function (e) {
                                if (e >= s) return Math.round(e / s) + "d";
                                if (e >= o) return Math.round(e / o) + "h";
                                if (e >= i) return Math.round(e / i) + "m";
                                if (e >= r) return Math.round(e / r) + "s";
                                return e + "ms"
                            }(e);
                            var l;
                            throw new Error("val is not a non-empty string or a valid number. val=" + a()(e))
                        };

                        function u(e, t, n) {
                            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
                        }
                    }, {}],
                    59: [function (e, t, n) {
                        var r = Object.prototype.hasOwnProperty;
                        n.stringify = function (e, t) {
                            var n = [];
                            "string" != typeof (t = t || "") && (t = "?");
                            for (var i in e) r.call(e, i) && n.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                            return n.length ? t + n.join("&") : ""
                        }, n.parse = function (e) {
                            for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; t = n.exec(e); r[decodeURIComponent(t[1])] = decodeURIComponent(t[2])) ;
                            return r
                        }
                    }, {}],
                    60: [function (e, t, n) {
                        t.exports = function (e, t) {
                            if (t = t.split(":")[0], !(e = +e)) return !1;
                            switch (t) {
                                case"http":
                                case"ws":
                                    return 80 !== e;
                                case"https":
                                case"wss":
                                    return 443 !== e;
                                case"ftp":
                                    return 21 !== e;
                                case"gopher":
                                    return 70 !== e;
                                case"file":
                                    return !1
                            }
                            return 0 !== e
                        }
                    }, {}],
                    61: [function (e, t, n) {
                        var r = e("requires-port"), i = e("./lolcation"), o = e("querystringify"),
                            s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
                            a = [["#", "hash"], ["?", "query"], ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]];

                        function c(e) {
                            var t = s.exec(e);
                            return {protocol: t[1] ? t[1].toLowerCase() : "", slashes: !!t[2], rest: t[3]}
                        }

                        function u(e, t, n) {
                            if (!(this instanceof u)) return new u(e, t, n);
                            var s, l, f, h, p, m, v = a.slice(), g = void 0 === t ? "undefined" : d()(t), b = 0;
                            for ("object" !== g && "string" !== g && (n = t, t = null), n && "function" != typeof n && (n = o.parse), t = i(t), s = !(l = c(e || "")).protocol && !l.slashes, this.slashes = l.slashes || s && t.slashes, this.protocol = l.protocol || t.protocol || "", e = l.rest, l.slashes || (v[2] = [/(.*)/, "pathname"]); b < v.length; b++) f = (h = v[b])[0], m = h[1], f != f ? this[m] = e : "string" == typeof f ? ~(p = e.indexOf(f)) && ("number" == typeof h[2] ? (this[m] = e.slice(0, p), e = e.slice(p + h[2])) : (this[m] = e.slice(p), e = e.slice(0, p))) : (p = f.exec(e)) && (this[m] = p[1], e = e.slice(0, p.index)), this[m] = this[m] || (s && h[3] ? t[m] || "" : ""), h[4] && (this[m] = this[m].toLowerCase());
                            n && (this.query = n(this.query)), s && t.slashes && "/" !== this.pathname.charAt(0) && ("" !== this.pathname || "" !== t.pathname) && (this.pathname = function (e, t) {
                                for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, i = n[r - 1], o = !1, s = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), s++) : s && (0 === r && (o = !0), n.splice(r, 1), s--);
                                return o && n.unshift(""), "." !== i && ".." !== i || n.push(""), n.join("/")
                            }(this.pathname, t.pathname)), r(this.port, this.protocol) || (this.host = this.hostname, this.port = ""), this.username = this.password = "", this.auth && (h = this.auth.split(":"), this.username = h[0] || "", this.password = h[1] || ""), this.origin = this.protocol && this.host && "file:" !== this.protocol ? this.protocol + "//" + this.host : "null", this.href = this.toString()
                        }

                        u.prototype.set = function (e, t, n) {
                            switch (e) {
                                case"query":
                                    "string" == typeof t && t.length && (t = (n || o.parse)(t)), this[e] = t;
                                    break;
                                case"port":
                                    this[e] = t, r(t, this.protocol) ? t && (this.host = this.hostname + ":" + t) : (this.host = this.hostname, this[e] = "");
                                    break;
                                case"hostname":
                                    this[e] = t, this.port && (t += ":" + this.port), this.host = t;
                                    break;
                                case"host":
                                    this[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), this.port = t.pop(), this.hostname = t.join(":")) : (this.hostname = t, this.port = "");
                                    break;
                                case"protocol":
                                    this.protocol = t.toLowerCase(), this.slashes = !n;
                                    break;
                                case"pathname":
                                    this.pathname = t.length && "/" !== t.charAt(0) ? "/" + t : t;
                                    break;
                                default:
                                    this[e] = t
                            }
                            for (var i = 0; i < a.length; i++) {
                                var s = a[i];
                                s[4] && (this[s[1]] = this[s[1]].toLowerCase())
                            }
                            return this.origin = this.protocol && this.host && "file:" !== this.protocol ? this.protocol + "//" + this.host : "null", this.href = this.toString(), this
                        }, u.prototype.toString = function (e) {
                            e && "function" == typeof e || (e = o.stringify);
                            var t, n = this.protocol;
                            n && ":" !== n.charAt(n.length - 1) && (n += ":");
                            var r = n + (this.slashes ? "//" : "");
                            return this.username && (r += this.username, this.password && (r += ":" + this.password), r += "@"), r += this.host + this.pathname, (t = "object" === d()(this.query) ? e(this.query) : this.query) && (r += "?" !== t.charAt(0) ? "?" + t : t), this.hash && (r += this.hash), r
                        }, u.extractProtocol = c, u.location = i, u.qs = o, t.exports = u
                    }, {"./lolcation": 62, querystringify: 59, "requires-port": 60}],
                    62: [function (t, n, r) {
                        (function (e) {
                            var r, i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, o = {hash: 1, query: 1};
                            n.exports = function (n) {
                                n = n || e.location || {}, r = r || t("./");
                                var s, a = {}, c = void 0 === n ? "undefined" : d()(n);
                                if ("blob:" === n.protocol) a = new r(unescape(n.pathname), {}); else if ("string" === c) {
                                    a = new r(n, {});
                                    for (s in o) delete a[s]
                                } else if ("object" === c) {
                                    for (s in n) s in o || (a[s] = n[s]);
                                    void 0 === a.slashes && (a.slashes = i.test(n.href))
                                }
                                return a
                            }
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"./": 61}]
                }, {}, [1])(1)
            })
        }).call(t, n("DuR2"), n("f1Eh")(e))
    }, GVqr: function (e, t) {
        (function () {
            var e, n, r, i, o = {}.hasOwnProperty, s = [].slice;
            e = {LF: "\n", NULL: "\0"}, r = function () {
                var t;

                function n(e, t, n) {
                    this.command = e, this.headers = null != t ? t : {}, this.body = null != n ? n : ""
                }

                return n.prototype.toString = function () {
                    var t, r, i, s, a;
                    t = [this.command], (i = !1 === this.headers["content-length"]) && delete this.headers["content-length"], a = this.headers;
                    for (r in a) o.call(a, r) && (s = a[r], t.push(r + ":" + s));
                    return this.body && !i && t.push("content-length:" + n.sizeOfUTF8(this.body)), t.push(e.LF + this.body), t.join(e.LF)
                }, n.sizeOfUTF8 = function (e) {
                    return e ? encodeURI(e).match(/%..|./g).length : 0
                }, t = function (t) {
                    var r, i, o, s, a, c, u, l, d, f, h, p, m, v, g, b, y;
                    for (s = t.search(RegExp("" + e.LF + e.LF)), o = (a = t.substring(0, s).split(e.LF)).shift(), c = {}, p = function (e) {
                        return e.replace(/^\s+|\s+$/g, "")
                    }, m = 0, g = (b = a.reverse()).length; m < g; m++) l = (f = b[m]).indexOf(":"), c[p(f.substring(0, l))] = p(f.substring(l + 1));
                    if (r = "", h = s + 2, c["content-length"]) d = parseInt(c["content-length"]), r = ("" + t).substring(h, h + d); else for (i = null, u = v = h, y = t.length; (h <= y ? v < y : v > y) && (i = t.charAt(u)) !== e.NULL; u = h <= y ? ++v : --v) r += i;
                    return new n(o, c, r)
                }, n.unmarshall = function (n) {
                    var r, i, o, s;
                    return i = n.split(RegExp("" + e.NULL + e.LF + "*")), (s = {
                        frames: [],
                        partial: ""
                    }).frames = function () {
                        var e, n, o, s;
                        for (s = [], e = 0, n = (o = i.slice(0, -1)).length; e < n; e++) r = o[e], s.push(t(r));
                        return s
                    }(), (o = i.slice(-1)[0]) === e.LF || -1 !== o.search(RegExp("" + e.NULL + e.LF + "*$")) ? s.frames.push(t(o)) : s.partial = o, s
                }, n.marshall = function (t, r, i) {
                    return new n(t, r, i).toString() + e.NULL
                }, n
            }(), n = function () {
                var t;

                function n(e) {
                    this.ws = e, this.ws.binaryType = "arraybuffer", this.counter = 0, this.connected = !1, this.heartbeat = {
                        outgoing: 1e4,
                        incoming: 1e4
                    }, this.maxWebSocketFrameSize = 16384, this.subscriptions = {}, this.partialData = ""
                }

                return n.prototype.debug = function (e) {
                    var t;
                    return "undefined" != typeof window && null !== window && null != (t = window.console) ? t.log(e) : void 0
                }, t = function () {
                    return Date.now ? Date.now() : (new Date).valueOf
                }, n.prototype._transmit = function (e, t, n) {
                    var i;
                    for (i = r.marshall(e, t, n), "function" == typeof this.debug && this.debug(">>> " + i); ;) {
                        if (!(i.length > this.maxWebSocketFrameSize)) return this.ws.send(i);
                        this.ws.send(i.substring(0, this.maxWebSocketFrameSize)), i = i.substring(this.maxWebSocketFrameSize), "function" == typeof this.debug && this.debug("remaining = " + i.length)
                    }
                }, n.prototype._setupHeartbeat = function (n) {
                    var r, o, s, a, c, u;
                    if ((c = n.version) === i.VERSIONS.V1_1 || c === i.VERSIONS.V1_2) {
                        o = (u = function () {
                            var e, t, r, i;
                            for (i = [], e = 0, t = (r = n["heart-beat"].split(",")).length; e < t; e++) a = r[e], i.push(parseInt(a));
                            return i
                        }())[0], r = u[1], 0 !== this.heartbeat.outgoing && 0 !== r && (s = Math.max(this.heartbeat.outgoing, r), "function" == typeof this.debug && this.debug("send PING every " + s + "ms"), this.pinger = i.setInterval(s, (l = this, function () {
                            return l.ws.send(e.LF), "function" == typeof l.debug ? l.debug(">>> PING") : void 0
                        })));
                        var l;
                        if (0 !== this.heartbeat.incoming && 0 !== o) return s = Math.max(this.heartbeat.incoming, o), "function" == typeof this.debug && this.debug("check PONG every " + s + "ms"), this.ponger = i.setInterval(s, (d = this, function () {
                            var e;
                            if ((e = t() - d.serverActivity) > 2 * s) return "function" == typeof d.debug && d.debug("did not receive server activity for the last " + e + "ms"), d.ws.close()
                        }));
                        var d
                    }
                }, n.prototype._parseConnect = function () {
                    var e, t, n, r;
                    switch (r = {}, (e = 1 <= arguments.length ? s.call(arguments, 0) : []).length) {
                        case 2:
                            r = e[0], t = e[1];
                            break;
                        case 3:
                            e[1] instanceof Function ? (r = e[0], t = e[1], n = e[2]) : (r.login = e[0], r.passcode = e[1], t = e[2]);
                            break;
                        case 4:
                            r.login = e[0], r.passcode = e[1], t = e[2], n = e[3];
                            break;
                        default:
                            r.login = e[0], r.passcode = e[1], t = e[2], n = e[3], r.host = e[4]
                    }
                    return [r, t, n]
                }, n.prototype.connect = function () {
                    var n, o, a, c;
                    n = 1 <= arguments.length ? s.call(arguments, 0) : [], c = this._parseConnect.apply(this, n), a = c[0], this.connectCallback = c[1], o = c[2], "function" == typeof this.debug && this.debug("Opening Web Socket..."), this.ws.onmessage = (u = this, function (n) {
                        var i, s, a, c, l, d, f, h, p, m, v, g, b;
                        if (c = "undefined" != typeof ArrayBuffer && n.data instanceof ArrayBuffer ? (i = new Uint8Array(n.data), "function" == typeof u.debug && u.debug("--- got data length: " + i.length), function () {
                            var e, t, n;
                            for (n = [], e = 0, t = i.length; e < t; e++) s = i[e], n.push(String.fromCharCode(s));
                            return n
                        }().join("")) : n.data, u.serverActivity = t(), c !== e.LF) {
                            for ("function" == typeof u.debug && u.debug("<<< " + c), p = r.unmarshall(u.partialData + c), u.partialData = p.partial, b = [], m = 0, v = (g = p.frames).length; m < v; m++) switch ((l = g[m]).command) {
                                case"CONNECTED":
                                    "function" == typeof u.debug && u.debug("connected to server " + l.headers.server), u.connected = !0, u._setupHeartbeat(l.headers), b.push("function" == typeof u.connectCallback ? u.connectCallback(l) : void 0);
                                    break;
                                case"MESSAGE":
                                    h = l.headers.subscription, (f = u.subscriptions[h] || u.onreceive) ? (a = u, d = l.headers["message-id"], l.ack = function (e) {
                                        return null == e && (e = {}), a.ack(d, h, e)
                                    }, l.nack = function (e) {
                                        return null == e && (e = {}), a.nack(d, h, e)
                                    }, b.push(f(l))) : b.push("function" == typeof u.debug ? u.debug("Unhandled received MESSAGE: " + l) : void 0);
                                    break;
                                case"RECEIPT":
                                    b.push("function" == typeof u.onreceipt ? u.onreceipt(l) : void 0);
                                    break;
                                case"ERROR":
                                    b.push("function" == typeof o ? o(l) : void 0);
                                    break;
                                default:
                                    b.push("function" == typeof u.debug ? u.debug("Unhandled frame: " + l) : void 0)
                            }
                            return b
                        }
                        "function" == typeof u.debug && u.debug("<<< PONG")
                    });
                    var u;
                    this.ws.onclose = (l = this, function () {
                        var e;
                        return e = "Whoops! Lost connection to " + l.ws.url, "function" == typeof l.debug && l.debug(e), l._cleanUp(), "function" == typeof o ? o(e) : void 0
                    });
                    var l;
                    return this.ws.onopen = (d = this, function () {
                        return "function" == typeof d.debug && d.debug("Web Socket Opened..."), a["accept-version"] = i.VERSIONS.supportedVersions(), a["heart-beat"] = [d.heartbeat.outgoing, d.heartbeat.incoming].join(","), d._transmit("CONNECT", a)
                    });
                    var d
                }, n.prototype.disconnect = function (e, t) {
                    return null == t && (t = {}), this._transmit("DISCONNECT", t), this.ws.onclose = null, this.ws.close(), this._cleanUp(), "function" == typeof e ? e() : void 0
                }, n.prototype._cleanUp = function () {
                    if (this.connected = !1, this.pinger && i.clearInterval(this.pinger), this.ponger) return i.clearInterval(this.ponger)
                }, n.prototype.send = function (e, t, n) {
                    return null == t && (t = {}), null == n && (n = ""), t.destination = e, this._transmit("SEND", t, n)
                }, n.prototype.subscribe = function (e, t, n) {
                    var r;
                    return null == n && (n = {}), n.id || (n.id = "sub-" + this.counter++), n.destination = e, this.subscriptions[n.id] = t, this._transmit("SUBSCRIBE", n), r = this, {
                        id: n.id,
                        unsubscribe: function () {
                            return r.unsubscribe(n.id)
                        }
                    }
                }, n.prototype.unsubscribe = function (e) {
                    return delete this.subscriptions[e], this._transmit("UNSUBSCRIBE", {id: e})
                }, n.prototype.begin = function (e) {
                    var t, n;
                    return n = e || "tx-" + this.counter++, this._transmit("BEGIN", {transaction: n}), t = this, {
                        id: n,
                        commit: function () {
                            return t.commit(n)
                        },
                        abort: function () {
                            return t.abort(n)
                        }
                    }
                }, n.prototype.commit = function (e) {
                    return this._transmit("COMMIT", {transaction: e})
                }, n.prototype.abort = function (e) {
                    return this._transmit("ABORT", {transaction: e})
                }, n.prototype.ack = function (e, t, n) {
                    return null == n && (n = {}), n["message-id"] = e, n.subscription = t, this._transmit("ACK", n)
                }, n.prototype.nack = function (e, t, n) {
                    return null == n && (n = {}), n["message-id"] = e, n.subscription = t, this._transmit("NACK", n)
                }, n
            }(), i = {
                VERSIONS: {
                    V1_0: "1.0", V1_1: "1.1", V1_2: "1.2", supportedVersions: function () {
                        return "1.1,1.0"
                    }
                }, client: function (e, t) {
                    var r;
                    return null == t && (t = ["v10.stomp", "v11.stomp"]), r = new (i.WebSocketClass || WebSocket)(e, t), new n(r)
                }, over: function (e) {
                    return new n(e)
                }, Frame: r
            }, void 0 !== t && null !== t && (t.Stomp = i), "undefined" != typeof window && null !== window ? (i.setInterval = function (e, t) {
                return window.setInterval(t, e)
            }, i.clearInterval = function (e) {
                return window.clearInterval(e)
            }, window.Stomp = i) : t || (self.Stomp = i)
        }).call(this)
    }, "Gpj+": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("el-container", [n("el-header", {
                    staticStyle: {
                        "text-align": "left",
                        "padding-left": "0px"
                    }
                }, [n("el-button", {
                    attrs: {type: "success", size: "mini", plain: "", icon: "el-icon-success"},
                    on: {click: e.allRead}
                }, [e._v("全部标为已读")]), e._v(" "), e.isAdmin ? n("el-button", {
                    attrs: {
                        type: "primary",
                        size: "mini",
                        plain: ""
                    }, on: {
                        click: function (t) {
                            e.dialogVisible = !0
                        }
                    }
                }, [n("i", {
                    staticClass: "fa fa-send",
                    staticStyle: {"margin-right": "15px"}
                }), e._v("发送系统通知\n      ")]) : e._e()], 1), e._v(" "), n("el-main", {staticStyle: {padding: "0px"}}, [n("el-collapse", {
                    staticStyle: {width: "90%"},
                    attrs: {accordion: ""},
                    on: {change: e.handleChange},
                    model: {
                        value: e.mid, callback: function (t) {
                            e.mid = t
                        }, expression: "mid"
                    }
                }, e._l(e.sysmsgs, function (t, r) {
                    return n("el-collapse-item", {
                        key: r,
                        attrs: {name: t.msgContent.id}
                    }, [n("template", {slot: "title"}, [n("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "flex-start",
                            "align-items": "center"
                        }
                    }, [n("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            width: "25px",
                            height: "25px"
                        }
                    }, [0 == t.state ? n("div", {
                        staticStyle: {
                            width: "8px",
                            height: "8px",
                            "background-color": "#ea0206",
                            "border-radius": "8px"
                        }
                    }) : e._e()]), e._v(" "), n("span", {
                        staticStyle: {
                            width: "600px",
                            "text-align": "left"
                        }
                    }, [e._v(e._s(t.msgContent.title))]), e._v(" "), n("el-tag", [e._v(e._s(e._f("formatDate")(t.msgContent.createDate)))])], 1)]), e._v(" "), n("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "flex-start",
                            "align-items": "center",
                            "border-style": "solid",
                            "border-width": "1px",
                            "border-color": "#409eff",
                            "border-radius": "5px",
                            padding: "4px 0px 4px 8px",
                            "box-sizing": "border-box",
                            height: "100%"
                        }
                    }, [e._v("\n            " + e._s(t.msgContent.message) + "\n          ")])], 2)
                })), e._v(" "), 0 == e.sysmsgs.length ? n("div", {
                    staticStyle: {
                        color: "#ea0206",
                        "font-size": "18px",
                        "text-align": "center"
                    }
                }, [e._v("暂无通知")]) : e._e()], 1)], 1), e._v(" "), n("div", {staticStyle: {"text-align": "left"}}, [n("el-dialog", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.dialogLoading,
                        expression: "dialogLoading"
                    }],
                    attrs: {title: "发送系统通知", visible: e.dialogVisible, "close-on-click-modal": !1, width: "45%"},
                    on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }
                    }
                }, [n("el-row", [n("el-col", {attrs: {span: 3}}, [e._v("\n          通知标题:\n        ")]), e._v(" "), n("el-col", {attrs: {span: 21}}, [n("el-input", {
                    attrs: {
                        size: "mini",
                        placeholder: "请输入标题"
                    }, model: {
                        value: e.title, callback: function (t) {
                            e.title = t
                        }, expression: "title"
                    }
                })], 1)], 1), e._v(" "), n("el-row", {staticStyle: {"margin-top": "10px"}}, [n("el-col", {attrs: {span: 3}}, [e._v("\n          通知内容:\n        ")]), e._v(" "), n("el-col", {attrs: {span: 21}}, [n("el-input", {
                    attrs: {
                        type: "textarea",
                        size: "mini",
                        autosize: {minRows: 5, maxRows: 10},
                        placeholder: "请输入通知内容..."
                    }, model: {
                        value: e.message, callback: function (t) {
                            e.message = t
                        }, expression: "message"
                    }
                })], 1)], 1), e._v(" "), n("el-row", {
                    staticStyle: {
                        "margin-top": "10px",
                        "padding-right": "10px"
                    }
                }, [n("el-col", {attrs: {offset: 18}}, [n("el-button", {
                    attrs: {type: "default", size: "mini"},
                    on: {click: e.cancelSend}
                }, [e._v("取消\n          ")]), e._v(" "), n("el-button", {
                    attrs: {type: "primary", size: "mini"},
                    on: {click: e.sendNFMsg}
                }, [n("i", {
                    staticClass: "fa fa-send",
                    staticStyle: {"margin-right": "15px"}
                }), e._v("发送\n          ")])], 1)], 1)], 1)], 1)], 1)
            }, staticRenderFns: []
        }, i = n("VU/8")({
            data: function () {
                return {dialogVisible: !1, dialogLoading: !1, title: "", message: "", mid: -1, sysmsgs: []}
            }, mounted: function () {
                this.initSysMsgs()
            }, computed: {
                isAdmin: function () {
                    var e = !1;
                    return this.$store.state.user.roles.forEach(function (t) {
                        "ROLE_admin" == t.name && (e = !0)
                    }), e
                }
            }, methods: {
                handleChange: function (e) {
                    if ("" != e) {
                        var t = this;
                        this.putRequest("/chat/markread", {flag: this.mid}).then(function (e) {
                            e && 200 == e.status && t.initSysMsgs()
                        })
                    }
                }, initSysMsgs: function () {
                    var e = this;
                    this.getRequest("/chat/sysmsgs").then(function (t) {
                        e.sysmsgs = t.data;
                        var n = !1;
                        e.sysmsgs.forEach(function (e) {
                            0 == e.state && (n = !0)
                        }), e.$store.commit("toggleNFDot", n)
                    })
                }, allRead: function () {
                    var e = this;
                    this.putRequest("/chat/markread", {flag: -1}).then(function (t) {
                        t && 200 == t.status && (e.$store.commit("toggleNFDot", !1), e.initSysMsgs())
                    })
                }, sendNFMsg: function () {
                    this.dialogLoading = !0;
                    var e = this;
                    this.postRequest("/chat/nf", {message: this.message, title: this.title}).then(function (t) {
                        e.dialogLoading = !1, t && 200 == t.status && "success" == t.data.status && (e.$store.state.stomp.send("/ws/nf", {}, ""), e.initSysMsgs(), e.cancelSend())
                    })
                }, cancelSend: function () {
                    this.dialogVisible = !1, this.title = "", this.message = ""
                }
            }
        }, r, !1, null, null, null);
        t.default = i.exports
    }, NHnr: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n("7+uW"), i = {
            render: function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("router-view")], 1)
            }, staticRenderFns: []
        };
        var o = n("VU/8")({name: "app"}, i, !1, function (e) {
            n("XC5j")
        }, null, null).exports, s = n("/ocq"), a = n("xJsL"), c = n("lO7g"), u = n("T5Y6");
        r.default.use(s.a);
        var l = new s.a({
            routes: [{path: "/", name: "Login", component: a.default, hidden: !0}, {
                path: "/home",
                name: "主页",
                component: c.default,
                hidden: !0,
                meta: {requireAuth: !0},
                children: [{
                    path: "/chat",
                    name: "消息",
                    component: u.default,
                    hidden: !0,
                    meta: {keepAlive: !1, requireAuth: !0}
                }]
            }]
        }), d = n("zL8q"), f = n.n(d), h = (n("tvR6"), n("mvHQ")), p = n.n(h), m = n("ifoU"), v = n.n(m), g = n("NYxO");
        n("BiC4"), n("GVqr");
        r.default.use(g.a);
        var b = new g.a.Store({
            state: {
                user: {
                    name: null == window.localStorage.getItem("user") ? "未登录" : JSON.parse(window.localStorage.getItem("user")).name,
                    userface: null == window.localStorage.getItem("user") ? "" : JSON.parse(window.localStorage.getItem("user")).userface,
                    username: null == window.localStorage.getItem("user") ? "" : JSON.parse(window.localStorage.getItem("user")).username,
                    roles: null == window.localStorage.getItem("user") ? "" : JSON.parse(window.localStorage.getItem("user")).roles
                }, routes: [], msgList: [], isDotMap: new v.a, currentFriend: {}, stomp: null, nfDot: !1
            }, mutations: {
                initMenu: function (e, t) {
                    e.routes = t
                }, login: function (e, t) {
                    e.user = t, window.localStorage.setItem("user", p()(t))
                }, logout: function (e) {
                    window.localStorage.removeItem("user"), e.routes = []
                }, toggleNFDot: function (e, t) {
                    e.nfDot = t
                }, updateMsgList: function (e, t) {
                    e.msgList = t
                }, updateCurrentFriend: function (e, t) {
                    e.currentFriend = t
                }, addValue2DotMap: function (e, t) {
                    e.isDotMap.set(t, "您有未读消息")
                }, removeValueDotMap: function (e, t) {
                    e.isDotMap.delete(t)
                }
            }, actions: {
                connect: function (e) {
                    e.state.stomp = Stomp.over(new SockJS("/ws/endpointChat")), e.state.stomp.connect({}, function (t) {
                        e.state.stomp.subscribe("/user/queue/chat", function (t) {
                            var n = JSON.parse(t.body),
                                r = window.localStorage.getItem(e.state.user.username + "#" + n.from);
                            if (null == r) (r = []).push(n), window.localStorage.setItem(e.state.user.username + "#" + n.from, p()(r)); else {
                                var i = JSON.parse(r);
                                i.push(n), window.localStorage.setItem(e.state.user.username + "#" + n.from, p()(i))
                            }
                            n.from != e.state.currentFriend.username && e.commit("addValue2DotMap", "isDot#" + e.state.user.username + "#" + n.from);
                            var o = window.localStorage.getItem(e.state.user.username + "#" + e.state.currentFriend.username);
                            null == o ? e.commit("updateMsgList", []) : e.commit("updateMsgList", JSON.parse(o))
                        }), e.state.stomp.subscribe("/topic/nf", function (t) {
                            e.commit("toggleNFDot", !0)
                        })
                    }, function (e) {
                    })
                }
            }
        }), y = n("VsUZ"), w = n("oAV5");
        r.default.filter("formatDate", x), r.default.prototype.formatDate = x;

        function x(e) {
            var t = new Date(e), n = t.getFullYear(), r = t.getMonth() + 1, i = t.getDate();
            return r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), n + "-" + r + "-" + i
        }

        r.default.filter("formatDateTime", function (e) {
            var t = new Date(e), n = t.getFullYear(), r = t.getMonth() + 1, i = t.getDate(), o = t.getHours(),
                s = t.getMinutes();
            return r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), n + "-" + r + "-" + i + " " + o + ":" + s
        });
        n("e0XP");
        r.default.config.productionTip = !1, r.default.use(f.a), r.default.prototype.getRequest = y.b, r.default.prototype.postRequest = y.c, r.default.prototype.deleteRequest = y.a, r.default.prototype.putRequest = y.d, r.default.prototype.isNotNullORBlank = w.b, l.beforeEach(function (e, t, n) {
            if ("Login" != e.name) {
                "未登录" == b.state.user.name ? e.meta.requireAuth || null == e.name ? n({
                    path: "/",
                    query: {redirect: e.path}
                }) : n() : (Object(w.a)(l, b), "/chat" == e.path && b.commit("updateMsgList", []), n())
            } else n()
        }), new r.default({el: "#app", router: l, store: b, template: "<App/>", components: {App: o}})
    }, T5Y6: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n("ngyR"), i = n("Gpj+"), o = {
            data: function () {
                return {activeName: "notification"}
            }, methods: {
                handleClick: function (e, t) {
                    console.log(e, t)
                }
            }, components: {fc: r.default, nf: i.default}
        }, s = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("el-tabs", {
                    staticStyle: {"margin-top": "10px"},
                    on: {"tab-click": e.handleClick},
                    model: {
                        value: e.activeName, callback: function (t) {
                            e.activeName = t
                        }, expression: "activeName"
                    }
                }, [n("el-tab-pane", {
                    attrs: {
                        label: "系统通知",
                        name: "notification"
                    }
                }, [n("nf")], 1), e._v(" "), n("el-tab-pane", {
                    attrs: {
                        label: "好友聊天",
                        name: "chat"
                    }
                }, [n("fc")], 1)], 1)], 1)
            }, staticRenderFns: []
        }, a = n("VU/8")(o, s, !1, null, null, null);
        t.default = a.exports
    }, VsUZ: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return s
        }), n.d(t, "d", function () {
            return a
        }), n.d(t, "a", function () {
            return c
        }), n.d(t, "b", function () {
            return u
        });
        var r = n("mtWM"), i = n.n(r), o = n("zL8q");
        n.n(o);
        i.a.interceptors.request.use(function (e) {
            return e
        }, function (e) {
            o.Message.error({message: "请求超时!"})
        }), i.a.interceptors.response.use(function (e) {
            if (!e.status || 200 != e.status || 500 != e.data.status) return e.data.msg && o.Message.success({message: e.data.msg}), e;
            o.Message.error({message: e.data.msg})
        }, function (e) {
            504 == e.response.status || 404 == e.response.status ? o.Message.error({message: "服务器被吃了⊙﹏⊙∥"}) : 403 == e.response.status ? o.Message.error({message: "权限不足,请联系管理员!"}) : 401 == e.response.status ? o.Message.error({message: e.response.data.msg}) : e.response.data.msg ? o.Message.error({message: e.response.data.msg}) : o.Message.error({message: "未知错误!"})
        });
        var s = function (e, t) {
            return i()({
                method: "post", url: "" + e, data: t, transformRequest: [function (e) {
                    var t = "";
                    for (var n in e) t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&";
                    return t
                }], headers: {"Content-Type": "application/x-www-form-urlencoded"}
            })
        }, a = function (e, t) {
            return i()({
                method: "put", url: "" + e, data: t, transformRequest: [function (e) {
                    var t = "";
                    for (var n in e) t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&";
                    return t
                }], headers: {"Content-Type": "application/x-www-form-urlencoded"}
            })
        }, c = function (e) {
            return i()({method: "delete", url: "" + e})
        }, u = function (e) {
            return i()({method: "get", url: "" + e})
        }
    }, XC5j: function (e, t) {
    }, e0XP: function (e, t) {
    }, lO7g: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("el-container", {staticClass: "home-container"}, [n("el-header", {staticClass: "home-header"}, [n("span", {staticClass: "home_title"}, [e._v("微人事")]), e._v(" "), n("div", {
                    staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "margin-right": "7px"
                    }
                }, [n("el-badge", {
                    staticStyle: {"margin-right": "30px"},
                    attrs: {"is-dot": this.$store.state.nfDot}
                }, [n("i", {
                    staticClass: "fa fa-bell-o",
                    staticStyle: {cursor: "pointer"},
                    on: {click: e.goChat}
                })]), e._v(" "), n("el-dropdown", {on: {command: e.handleCommand}}, [n("span", {
                    staticClass: "el-dropdown-link home_userinfo",
                    staticStyle: {display: "flex", "align-items": "center"}
                }, [e._v("\n  " + e._s(e.user.name) + "\n  "), n("i", ["" != e.user.userface ? n("img", {
                    staticStyle: {
                        width: "40px",
                        height: "40px",
                        "margin-right": "5px",
                        "margin-left": "5px",
                        "border-radius": "40px"
                    }, attrs: {src: e.user.userface}
                }) : e._e()])]), e._v(" "), n("el-dropdown-menu", {
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [n("el-dropdown-item", [e._v("个人中心")]), e._v(" "), n("el-dropdown-item", [e._v("设置")]), e._v(" "), n("el-dropdown-item", {
                    attrs: {
                        command: "logout",
                        divided: ""
                    }
                }, [e._v("注销")])], 1)], 1)], 1)]), e._v(" "), n("el-container", [n("el-aside", {
                    staticClass: "home-aside",
                    attrs: {width: "180px"}
                }, [n("div", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "flex-start",
                        width: "180px",
                        "text-align": "left"
                    }
                }, [n("el-menu", {
                    staticStyle: {background: "#ececec", width: "180px"},
                    attrs: {"unique-opened": "", router: ""}
                }, [e._l(this.routes, function (t, r) {
                    return t.hidden ? e._e() : [n("el-submenu", {
                        key: r,
                        attrs: {index: r + ""}
                    }, [n("template", {slot: "title"}, [n("i", {
                        class: t.iconCls,
                        staticStyle: {color: "#20a0ff", width: "14px"}
                    }), e._v(" "), n("span", {
                        attrs: {slot: "title"},
                        slot: "title"
                    }, [e._v(e._s(t.name))])]), e._v(" "), e._l(t.children, function (t) {
                        return n("el-menu-item", {
                            key: t.path,
                            staticStyle: {
                                "padding-left": "30px",
                                "padding-right": "0px",
                                "margin-left": "0px",
                                width: "170px",
                                "text-align": "left"
                            },
                            attrs: {width: "180px", index: t.path}
                        }, [e._v(e._s(t.name) + "\n                ")])
                    })], 2)]
                })], 2)], 1)]), e._v(" "), n("el-main", [n("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [n("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [e._v("首页")]), e._v(" "), n("el-breadcrumb-item", {domProps: {textContent: e._s(this.$router.currentRoute.name)}})], 1), e._v(" "), n("keep-alive", [this.$route.meta.keepAlive ? n("router-view") : e._e()], 1), e._v(" "), this.$route.meta.keepAlive ? e._e() : n("router-view")], 1)], 1)], 1)], 1)
            }, staticRenderFns: []
        };
        var i = n("VU/8")({
            mounted: function () {
                this.loadNF()
            }, methods: {
                loadNF: function () {
                    var e = this;
                    this.getRequest("/chat/sysmsgs").then(function (t) {
                        var n = !1;
                        t.data.forEach(function (e) {
                            0 == e.state && (n = !0)
                        }), e.$store.commit("toggleNFDot", n)
                    })
                }, goChat: function () {
                    this.$router.push({path: "/chat"})
                }, devMsg: function () {
                    var e = this;
                    this.$alert("为了确保所有的小伙伴都能看到完整的数据演示，数据库只开放了查询权限和部分字段的更新权限，其他权限都不具备，完整权限的演示需要大家在自己本地部署后，换一个正常的数据库用户后即可查看，这点请大家悉知!", "友情提示", {
                        confirmButtonText: "确定",
                        callback: function (t) {
                            e.$notify({
                                title: "重要重要!",
                                type: "warning",
                                message: "小伙伴们需要注意的是，目前只有权限管理模块完工了，因此这个项目中你无法看到所有的功能，除了权限管理相关的模块。权限管理相关的模块主要有两个，分别是 [系统管理->基础信息设置->权限组] 可以管理角色和资源的关系， [系统管理->操作员管理] 可以管理用户和角色的关系。",
                                duration: 0
                            })
                        }
                    })
                }, handleCommand: function (e) {
                    var t = this;
                    "logout" == e && this.$confirm("注销登录, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        t.getRequest("/logout"), t.$store.commit("logout"), t.$router.replace({path: "/"})
                    }).catch(function () {
                        t.$message({type: "info", message: "取消"})
                    })
                }
            }, data: function () {
                return {isDot: !1}
            }, computed: {
                user: function () {
                    return this.$store.state.user
                }, routes: function () {
                    return this.$store.state.routes
                }
            }
        }, r, !1, function (e) {
            n("7rz6")
        }, null, null);
        t.default = i.exports
    }, ngyR: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n("mvHQ"), i = n.n(r), o = {
            data: function () {
                return {hrs: [], msg: "", currentUser: this.$store.state.user, currentFriend: {}}
            }, computed: {
                msgList: {
                    get: function () {
                        return this.$store.state.msgList
                    }
                }, isDotMap: {
                    get: function () {
                        return this.$store.state.isDotMap
                    }
                }
            }, watch: {
                msgList: function () {
                    document.getElementById("chatDiv").scrollTop = document.getElementById("chatDiv").scrollHeight
                }
            }, methods: {
                sendMsg: function () {
                    var e = window.localStorage.getItem(this.$store.state.user.username + "#" + this.currentFriend.username);
                    if (null == e) (e = []).push({
                        msg: this.msg,
                        from: this.$store.state.user.username
                    }), window.localStorage.setItem(this.$store.state.user.username + "#" + this.currentFriend.username, i()(e)); else {
                        var t = JSON.parse(e);
                        t.push({
                            msg: this.msg,
                            from: this.$store.state.user.username
                        }), window.localStorage.setItem(this.$store.state.user.username + "#" + this.currentFriend.username, i()(t))
                    }
                    this.$store.state.stomp.send("/ws/chat", {}, this.msg + ";" + this.currentFriend.username), this.msg = "", this.updateChatDiv()
                }, updateChatDiv: function () {
                    var e = window.localStorage.getItem(this.currentUser.username + "#" + this.currentFriend.username);
                    null == e ? this.$store.commit("updateMsgList", []) : this.$store.commit("updateMsgList", JSON.parse(e))
                }, toggleFriend: function (e) {
                    e != this.currentFriend && (this.currentFriend = e, this.$store.commit("updateCurrentFriend", e), this.updateChatDiv(), this.$store.commit("removeValueDotMap", "isDot#" + this.currentUser.username + "#" + e.username), document.getElementById("chatDiv").scrollTop = document.getElementById("chatDiv").scrollHeight)
                }, loadHrs: function () {
                    var e = this;
                    this.getRequest("/chat/hrs").then(function (t) {
                        e.hrs = t.data
                    })
                }
            }, mounted: function () {
                this.loadHrs()
            }
        }, s = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("el-container", [n("el-aside", {attrs: {width: "160px"}}, [e._l(e.hrs, function (t, r) {
                    return n("div", {
                        key: t.id,
                        staticClass: "friendListDiv",
                        class: {currentChatFriend: e.currentFriend.id == t.id},
                        on: {
                            click: function (n) {
                                e.toggleFriend(t)
                            }
                        }
                    }, [n("img", {
                        staticClass: "userfaceImg",
                        attrs: {src: t.userface}
                    }), e._v(" "), n("el-badge", {attrs: {"is-dot": null != e.isDotMap.get("isDot#" + e.currentUser.username + "#" + t.username)}}, [e._v(e._s(t.name))])], 1)
                }), e._v(" "), n("div", {
                    staticStyle: {
                        "background-color": "#20a0ff",
                        height: "1px",
                        width: "160px"
                    }
                })], 2), e._v(" "), n("el-main", {
                    staticStyle: {
                        "padding-top": "0px",
                        "padding-bottom": "0px"
                    }
                }, [n("div", {
                    ref: "chatDiv",
                    staticClass: "chatDiv",
                    attrs: {id: "chatDiv"}
                }, [n("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.currentFriend.name,
                        expression: "currentFriend.name"
                    }]
                }, [e._v("与\n          "), n("el-tag", {
                    staticStyle: {"margin-left": "5px", "margin-right": "5px"},
                    attrs: {type: "primary", size: "small"}
                }, [e._v(e._s(e.currentFriend.name) + "\n          ")]), e._v("\n          聊天中\n        ")], 1), e._v(" "), e._l(e.msgList, function (t) {
                    return [t.from == e.currentFriend.username ? n("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "flex-start",
                            "align-items": "center",
                            "box-sizing": "border-box"
                        }
                    }, [n("img", {
                        staticClass: "userfaceImg",
                        attrs: {src: e.currentFriend.userface}
                    }), e._v(" "), n("div", {
                        staticStyle: {
                            display: "inline-flex",
                            "border-style": "solid",
                            "border-width": "1px",
                            "border-color": "#20a0ff",
                            "border-radius": "5px",
                            padding: "5px 8px 5px 8px"
                        }
                    }, [e._v("\n              " + e._s(t.msg) + "\n            ")])]) : e._e(), e._v(" "), t.from != e.currentFriend.username ? n("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "flex-end",
                            "align-items": "center",
                            "box-sizing": "border-box"
                        }
                    }, [n("div", {
                        staticStyle: {
                            display: "inline-flex",
                            "border-style": "solid",
                            "border-width": "1px",
                            "border-color": "#20a0ff",
                            "border-radius": "5px",
                            padding: "5px 8px 5px 8px",
                            "margin-right": "3px",
                            "background-color": "#9eea6a"
                        }
                    }, [e._v("\n              " + e._s(t.msg) + "\n            ")]), e._v(" "), n("img", {
                        staticClass: "userfaceImg",
                        attrs: {src: e.currentUser.userface}
                    })]) : e._e()]
                })], 2), e._v(" "), n("div", {
                    staticStyle: {
                        "text-align": "left",
                        "margin-top": "10px"
                    }
                }, [n("el-input", {
                    staticStyle: {width: "600px"},
                    attrs: {placeholder: "请输入内容", size: "mini", type: "textarea", autosize: ""},
                    model: {
                        value: e.msg, callback: function (t) {
                            e.msg = t
                        }, expression: "msg"
                    }
                }), e._v(" "), n("el-button", {
                    staticClass: "sendBtn",
                    attrs: {disabled: !e.currentFriend.id, size: "small", type: "primary"},
                    on: {click: e.sendMsg}
                }, [n("i", {
                    staticClass: "fa fa-send",
                    staticStyle: {"margin-right": "15px"}
                }), e._v("发送\n        ")])], 1)])], 1)], 1)
            }, staticRenderFns: []
        };
        var a = n("VU/8")(o, s, !1, function (e) {
            n("B2kJ")
        }, null, null);
        t.default = a.exports
    }, oAV5: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return s
        });
        var r = n("VsUZ"), i = n("zL8q"), o = (n.n(i), function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                if (null == o || "" == o || void 0 == o) return i.Message.warning({message: "数据不能为空!"}), !1
            }
            return !0
        }), s = function (e, t) {
            t.state.routes.length > 0 || Object(r.b)("/config/sysmenu").then(function (n) {
                if (n && 200 == n.status) {
                    var r = a(n.data);
                    e.addRoutes(r), t.commit("initMenu", r), t.dispatch("connect")
                }
            })
        }, a = function e(t) {
            var r = [];
            return t.forEach(function (t) {
                var i = t.path, o = t.component, s = t.name, a = t.meta, c = t.iconCls, u = t.children;
                u && u instanceof Array && (u = e(u));
                var l = {
                    path: i, component: function (e) {
                        o.startsWith("Home") ? n.e(0).then(function () {
                            var t = [n("2eoi")("./" + o + ".vue")];
                            e.apply(null, t)
                        }.bind(this)).catch(n.oe) : o.startsWith("Emp") ? n.e(5).then(function () {
                            var t = [n("8cST")("./" + o + ".vue")];
                            e.apply(null, t)
                        }.bind(this)).catch(n.oe) : o.startsWith("Per") ? n.e(3).then(function () {
                            var t = [n("sALK")("./" + o + ".vue")];
                            e.apply(null, t)
                        }.bind(this)).catch(n.oe) : o.startsWith("Sal") ? n.e(2).then(function () {
                            var t = [n("9Acn")("./" + o + ".vue")];
                            e.apply(null, t)
                        }.bind(this)).catch(n.oe) : o.startsWith("Sta") ? n.e(4).then(function () {
                            var t = [n("nCU1")("./" + o + ".vue")];
                            e.apply(null, t)
                        }.bind(this)).catch(n.oe) : o.startsWith("Sys") && n.e(1).then(function () {
                            var t = [n("LJAE")("./" + o + ".vue")];
                            e.apply(null, t)
                        }.bind(this)).catch(n.oe)
                    }, name: s, iconCls: c, meta: a, children: u
                };
                r.push(l)
            }), r
        }
    }, tvR6: function (e, t) {
    }, xJsL: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = {
            data: function () {
                return {
                    rules: {
                        account: [{required: !0, message: "请输入用户名", trigger: "blur"}],
                        checkPass: [{required: !0, message: "请输入密码", trigger: "blur"}]
                    }, checked: !0, loginForm: {username: "admin", password: "123"}, loading: !1
                }
            }, methods: {
                submitClick: function () {
                    var e = this;
                    this.loading = !0, this.postRequest("/login", {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    }).then(function (t) {
                        if (e.loading = !1, t && 200 == t.status) {
                            var n = t.data;
                            e.$store.commit("login", n.obj);
                            var r = e.$route.query.redirect;
                            e.$router.replace({path: "/" == r || void 0 == r ? "/home" : r})
                        }
                    })
                }
            }
        }, i = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("el-form", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "login-container",
                    attrs: {rules: e.rules, "label-position": "left", "label-width": "0px"}
                }, [n("h3", {staticClass: "login_title"}, [e._v("系统登录")]), e._v(" "), n("el-form-item", {attrs: {prop: "account"}}, [n("el-input", {
                    attrs: {
                        type: "text",
                        "auto-complete": "off",
                        placeholder: "账号"
                    }, model: {
                        value: e.loginForm.username, callback: function (t) {
                            e.$set(e.loginForm, "username", t)
                        }, expression: "loginForm.username"
                    }
                })], 1), e._v(" "), n("el-form-item", {attrs: {prop: "checkPass"}}, [n("el-input", {
                    attrs: {
                        type: "password",
                        "auto-complete": "off",
                        placeholder: "密码"
                    }, model: {
                        value: e.loginForm.password, callback: function (t) {
                            e.$set(e.loginForm, "password", t)
                        }, expression: "loginForm.password"
                    }
                })], 1), e._v(" "), n("el-checkbox", {
                    staticClass: "login_remember",
                    attrs: {"label-position": "left"},
                    model: {
                        value: e.checked, callback: function (t) {
                            e.checked = t
                        }, expression: "checked"
                    }
                }, [e._v("记住密码")]), e._v(" "), n("el-form-item", {staticStyle: {width: "100%"}}, [n("el-button", {
                    staticStyle: {width: "100%"},
                    attrs: {type: "primary"},
                    on: {click: e.submitClick}
                }, [e._v("登录")])], 1)], 1)
            }, staticRenderFns: []
        };
        var o = n("VU/8")(r, i, !1, function (e) {
            n("/pYt")
        }, null, null);
        t.default = o.exports
    }
}, ["NHnr"]);
//# sourceMappingURL=app.3ebb2e8e7f4aacd6bc3d.js.map